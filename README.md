AI Chat Application (Google Gemini Clone)

Google Gemini AI Clone built using React, Context API, and CSS, which allows users to ask questions and get AI-powered answers with a clean UI and typing animation effect.

Features

- Modern UI built with React
- Context API\*\* for global state management
- Markdown rendering for AI responses
- Loading indicator while fetching responses
- Typing effect for dynamic answers
- Responsive design (mobile + desktop)

Tech Stack

- Frontend: React, Context API, Tailwind CSS
- Backend/API: Google Gemini API (Fetch)
- State Management: React Hooks + Context API
- Markdown Rendering: React-Markdown + Rehype

Installation & Setup

Clone the repository

-bash
git clone https://github.com/your-username/gemini-clone.git

cd gemini-clone

Create a `.env` file in the root folder and add your API key:

Create a config/geminiApi.js file

Add your Gemini API key like this:
export const URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY";

npm install

tu run the project- npm run dev

Author
-Rajendra Ingle
