# 🍳 AI Recipe Generator

## 📌 Project Description
This is a simple AI-powered web application that generates cooking recipes based on user-provided ingredients. The user enters ingredients and optional dietary preferences, and the application returns a structured recipe including steps, ingredients, and cooking time.

This project is a **Level 1 (Basic)** AI application, meaning it uses a single LLM call with no memory or multi-step processing.

---

## 🏗️ Architecture Overview

Frontend (React) → Backend (FastAPI) → Gemini API → Response → Frontend

- React handles user input and displays results
- FastAPI processes requests and communicates with the AI model
- Gemini API generates the recipe using a structured prompt

---

## ⚙️ Technical Choices

### Frontend
- React: Simple and fast UI development
- Axios: For HTTP communication with backend

### Backend
- FastAPI: Lightweight and fast Python backend
- Python: Easy integration with AI APIs

### AI Model
- Google Gemini API: Free tier, easy to use, good text generation quality

---

## 🚀 Setup and Running Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/AI-recipe-generator.git
cd AI-recipe-generator
