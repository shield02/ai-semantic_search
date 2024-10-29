from .config import index
from .models.encoder import encode_text

def add_text(text_id: str, text: str):
    vector = encode_text(text)
    index.upsert([(text_id, vector)])

def search_query(query: str, top_k: int = 5):
    query_vector = encode_text(query)
    return index.query(query_vector, top_k=top_k)
