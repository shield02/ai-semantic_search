from fastapi import APIRouter
from .database import add_text, search_query

router = APIRouter()

@router.post("/add-text/")
async def add_text_to_db(text_id: str, text: str):
    add_text(text_id, text)
    return {"message": "Text added successfully"}

@router.get("/search/")
async def search(query: str):
    results = search_query(query)
    return results
