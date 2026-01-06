from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
import re
from datetime import datetime
import os

app = Flask(__name__)
# Enable CORS for all domains to ensure frontend can talk to backend
CORS(app, resources={r"/api/*": {"origins": "*"}})

# MongoDB Setup
MONGO_URI = "mongodb+srv://anmolvsynopsys_db_user:FMbCVCuPl3iCe0Fs@cluster0.8jl2ugi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
DB_NAME = "habitos"
COLLECTION_NAME = "waitlist"

def get_db_collection():
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    return db[COLLECTION_NAME]

@app.route('/api/waitlist', methods=['POST'])
def add_to_waitlist():
    try:
        data = request.json
        email = data.get('email', '').strip().lower()
        
        email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        if not email or not re.match(email_regex, email):
            return jsonify({'success': False, 'error': 'Please enter a valid email address'}), 400
        
        collection = get_db_collection()
        doc = { "email": email, "timestamp": datetime.now() }
        collection.insert_one(doc)
        
        return jsonify({'success': True, 'message': "🎉 You're on the waitlist!"}), 200
    except DuplicateKeyError:
        return jsonify({'success': False, 'error': 'This email is already on the waitlist'}), 400
    except Exception as e:
        return jsonify({'success': False, 'error': 'Server error'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'service': 'HabitOS Vercel API'}), 200
