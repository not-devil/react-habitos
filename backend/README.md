# HabitOS Backend

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## API Endpoints

### POST /api/waitlist
Add email to waitlist

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "🎉 You're on the waitlist! We'll be in touch soon."
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "This email is already on the waitlist"
}
```

### GET /api/waitlist
Get all waitlist emails (admin only)

**Response:**
```json
{
  "success": true,
  "count": 10,
  "emails": [
    {
      "email": "user@example.com",
      "timestamp": "2026-01-06 22:20:00"
    }
  ]
}
```

### GET /api/health
Health check

**Response:**
```json
{
  "status": "healthy",
  "service": "HabitOS Waitlist API"
}
```

## Database

SQLite database (`waitlist.db`) with schema:

```sql
CREATE TABLE emails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    timestamp TEXT NOT NULL
);
```

## Viewing Emails

To view all collected emails:

1. **Using API:**
   Visit http://localhost:5000/api/waitlist

2. **Using SQLite:**
   ```bash
   sqlite3 waitlist.db
   SELECT * FROM emails;
   ```

3. **Using Python:**
   ```python
   import sqlite3
   conn = sqlite3.connect('waitlist.db')
   cursor = conn.cursor()
   cursor.execute('SELECT * FROM emails')
   print(cursor.fetchall())
   ```
