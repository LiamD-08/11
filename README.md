# SignFlow - Australian Sign Language Learning App

A comprehensive full-stack application to teach Australian Sign Language (Auslan) to learners of all levels.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Option 1: Using Docker (Recommended)

```bash
# Install dependencies
npm run setup

# Start all services with Docker Compose
docker-compose up
```

The app will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Database: localhost:5432

### Option 2: Local Development

#### Setup Database

```bash
# Install PostgreSQL and create database
creatdb auslan_app

# Run migrations
psql auslan_app < backend/src/migrations/001_init.sql
```

#### Setup Backend

```bash
cd backend

# Copy environment variables
cp .env.example .env

# Install dependencies
npm install

# Start backend server
npm run dev
```

Backend will run at: http://localhost:5000

#### Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run at: http://localhost:3000

## 📁 Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── server.js           # Express server
│   │   ├── config/             # Database config
│   │   ├── routes/             # API routes
│   │   └── migrations/         # SQL migrations
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── pages/              # React pages
│   │   ├── styles/             # CSS files
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🎯 Features

- **Interactive Lessons**: Structured curriculum with video demonstrations
- **Sign Dictionary**: Searchable database of signs with categorization
- **Practice Modes**: Recognition, production, and conversation practice
- **Progress Tracking**: User dashboard with learning statistics
- **Gamification**: Points, badges, and achievement system
- **Community**: Forums and social learning features (coming soon)

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- PostgreSQL
- JWT Authentication
- AWS S3 (media storage)

### Frontend
- React 18
- Vite
- React Router
- Tailwind CSS
- Axios

### Infrastructure
- Docker & Docker Compose
- PostgreSQL

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Lessons
- `GET /api/lessons` - Get all lessons
- `GET /api/lessons/:id` - Get specific lesson

### Signs
- `GET /api/signs` - Get all signs
- `GET /api/signs/:id` - Get specific sign

### Practice
- `POST /api/practice/recognition` - Record recognition practice
- `POST /api/practice/production` - Record production practice

### Progress
- `GET /api/progress/:userId` - Get user progress

## 🔐 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
NODE_ENV=development

DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=auslan_app

JWT_SECRET=your_jwt_secret_key_here

AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=us-east-1
AWS_S3_BUCKET=auslan-videos
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Backend tests
cd backend && npm run test

# Frontend tests
cd frontend && npm run test
```

## 📝 Development

### Adding a New Lesson

1. Create lesson content in the database
2. Add video URL to AWS S3
3. Update the Signs table with related signs

### Adding a New Sign

1. Record video with Deaf native signers
2. Upload to AWS S3
3. Create database entry with metadata

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- Deaf Australia community
- Auslan instructors and native signers
- Accessibility and UX experts

## 📞 Support

For issues and questions:
- GitHub Issues: [Report a bug](../../issues)
- Email: support@signflow.app

---

**Made with ❤️ for the Deaf and hard of hearing community**
