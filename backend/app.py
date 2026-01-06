from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
import re
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)  # Allow React app to call this API

# MongoDB Setup
# User provided: mongodb+srv://cluster0.8jl2ugi.mongodb.net/
# Username: anmolvsynopsys_db_user
# Password: FMbCVCuPl3iCe0Fs
MONGO_URI = "mongodb+srv://anmolvsynopsys_db_user:FMbCVCuPl3iCe0Fs@cluster0.8jl2ugi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
DB_NAME = "habitos"
COLLECTION_NAME = "waitlist"

def get_db_collection():
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    return db[COLLECTION_NAME]

def init_db():
    """Initialize MongoDB collection and indexes"""
    try:
        collection = get_db_collection()
        # Create unique index on email
        collection.create_index("email", unique=True)
        print("✅ MongoDB connection successful and index created")
    except Exception as e:
        print(f"❌ Error connecting to MongoDB: {str(e)}")

@app.route('/api/waitlist', methods=['POST'])
def add_to_waitlist():
    """Add email to waitlist"""
    try:
        data = request.json
        email = data.get('email', '').strip().lower()
        
        # Validate email format
        email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        if not email:
            return jsonify({
                'success': False, 
                'error': 'Email address is required'
            }), 400
        
        if not re.match(email_regex, email):
            return jsonify({
                'success': False, 
                'error': 'Please enter a valid email address'
            }), 400
        
        # Add to MongoDB
        collection = get_db_collection()
        doc = {
            "email": email,
            "timestamp": datetime.now()
        }
        
        collection.insert_one(doc)
        
        print(f"✅ Added to waitlist: {email}")
        
        return jsonify({
            'success': True, 
            'message': "🎉 You're on the waitlist! We'll be in touch soon."
        }), 200
        
    except DuplicateKeyError:
        return jsonify({
            'success': False, 
            'error': 'This email is already on the waitlist'
        }), 400
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return jsonify({
            'success': False, 
            'error': 'Server error. Please try again later.'
        }), 500

@app.route('/api/waitlist', methods=['GET'])
def get_waitlist():
    """Get all waitlist emails (for admin use)"""
    try:
        collection = get_db_collection()
        # Exclude _id from result, format timestamp
        emails = list(collection.find({}, {'_id': 0}).sort('timestamp', -1))
        
        return jsonify({
            'success': True,
            'count': len(emails),
            'emails': emails
        }), 200
    except Exception as e:
        return jsonify({
            'success': False, 
            'error': str(e)
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    try:
        # Test connection
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=2000)
        client.server_info()
        return jsonify({
            'status': 'healthy',
            'database': 'connected',
            'service': 'HabitOS Waitlist API'
        }), 200
    except Exception as e:
        return jsonify({
            'status': 'unhealthy',
            'database': 'disconnected',
            'error': str(e)
        }), 500

if __name__ == '__main__':
    # Initialize database on startup
    init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)
