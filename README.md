# Java + AI Developer Portfolio

A responsive portfolio built with React, Vite, Framer Motion and Java 21 / Spring Boot.
The frontend runs on port `5173`; the backend runs on port `8080`.

## Requirements
- Node.js 18+ and npm
- Java 21+
- Maven 3.9+ (or use your IDE's Maven integration)

## 1. Start the Spring Boot backend

```bash
cd backend
mvn spring-boot:run
```

Backend: `http://localhost:8080`  
Health check: `http://localhost:8080/api/health`

Contact form submissions are validated and stored in an H2 in-memory database.
H2 console: `http://localhost:8080/h2-console`  
JDBC URL: `jdbc:h2:mem:portfoliodb` | User: `sa` | Password: (blank)

> The H2 database resets when the backend stops. For production, replace H2 with PostgreSQL/MySQL and add email delivery, rate limiting, spam protection and HTTPS.

## 2. Start the React frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## 3. Personalize the portfolio
Edit `frontend/src/data/portfolio.js`:
- Replace the name, headline, email, phone, location and social links.
- Update the skills to match what you can confidently discuss.
- Replace project descriptions and GitHub/demo URLs with your real projects.
- AI project cards are explicitly marked as concepts until you build them.

## 4. Add your actual resume
Replace `frontend/public/resume.md` with your resume content. The Download Resume button downloads this starter Markdown file. You can convert your final resume to PDF and update the button in `frontend/src/components/Hero.jsx` to point to `/resume.pdf`.

## 5. Build for deployment

```bash
cd frontend
npm run build
```

The production frontend is generated in `frontend/dist`. Deploy it to a static host and deploy the Spring Boot backend separately. Set `VITE_API_URL` to your deployed backend URL before building.

Example:
```bash
VITE_API_URL=https://your-api.example.com npm run build
```

## API
`POST /api/contact`

JSON body:
```json
{
  "name": "Alex",
  "email": "alex@example.com",
  "subject": "Portfolio enquiry",
  "message": "I'd like to discuss an opportunity."
}
```

The API returns `201 Created` on success and `400 Bad Request` for invalid input.
