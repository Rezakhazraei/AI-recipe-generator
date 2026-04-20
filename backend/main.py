from fastapi import FastAPI
from pydantic import BaseModel
import google.generativeai as genai
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow React app
    allow_credentials=True,
    allow_methods=["*"],  # allow POST, OPTIONS, etc.
    allow_headers=["*"],
)

class RecipeRequest(BaseModel):
    ingredients: str
    diet: str = ""

@app.post("/generate-recipe")
def generate_recipe(req: RecipeRequest):
    model = genai.GenerativeModel("gemini-2.0-flash")

    prompt = f"""
    You are a professional chef.

    Create a recipe using these ingredients:
    {req.ingredients}

    Dietary preference: {req.diet}

    Format:
    - Recipe Name
    - Ingredients list
    - Steps
    - Cooking Time
    """

    response = model.generate_content(prompt)

    return {"recipe": response.text}