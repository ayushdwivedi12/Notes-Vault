# Notes Vault (FFC)

A full-stack notes application built with **Express**, **MongoDB**, **React**, and **Upstash Redis** for rate limiting.  
Create, view, and manage notes with a modern UI and robust backend.

---

## Features

- Create, view, update, and delete notes
- Rate limiting via Upstash Redis
- Responsive React frontend (Vite + Tailwind)
- RESTful Express backend with MongoDB
- CORS support for local development
- Production-ready static serving

---

## Folder Structure

```
FFC/
├── backend/      # Express + MongoDB API
│   ├── src/
│   │   ├── app.js
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── config/
│   └── .env
├── frontend/     # React client (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   ├── components/
│   │   └── lib/
│   └── dist/
├── package.json  # Root scripts
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/ayushdwivedi12/Notes-Vault.git
cd Notes-Vault
```

### 2. Environment Variables

Create a `.env` file in `backend/`:

```
MONGO_URL=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
NODE_ENV=development
```

### 3. Install dependencies and build frontend

```sh
npm run build
```

This will install dependencies for both `backend` and `frontend`, and build the frontend.

### 4. Run the backend server

```sh
npm start
```

Backend runs on `http://localhost:5001`

### 5. Run the frontend (for development)

```sh
cd frontend
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## API Endpoints

- `GET /api/notes` — List all notes
- `GET /api/notes/:id` — Get note by ID
- `POST /api/notes` — Create a new note
- `PUT /api/notes/:id` — Update a note
- `DELETE /api/notes/:id` — Delete a note

---

## Technologies Used

- **Backend:** Express, MongoDB, Mongoose, Upstash Redis, dotenv, cors
- **Frontend:** React, Vite, Tailwind CSS, Axios, React Hot Toast, React Router
- **Rate Limiting:** Upstash Redis

---

## Deployment

- In production, the backend serves the built frontend from `frontend/dist`.
- Make sure to build the frontend before deploying.

---

## License

ISC

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## Issues

If you encounter any problems, please open an [issue](https://github.com/ayushdwivedi12/Notes-Vault/issues).

---

## Author

[ayushdwivedi12](https://github.com/ayushdwivedi12)
