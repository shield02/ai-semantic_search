## An AI Semantic Search Project

### PROJECT DESCRIPTION
Implementing a semantic search using artificial intelligence. This project will 
develop a search engine that encodes the user's query into a vector and searches 
for similarity within a body of text. The user's can store all the text to be searched 
using a vector database like Pinecone. This search engine will be designed to provide 
accurate and relevant search results.

### Required Components
1. Vector Database: Use a vector database like Pinecone to store the text that 
will be searched. The vector database will be used to store and index the 
text documents.

2. Vectorization Algorithm: Implement a vectorization algorithm 
that encodes the text documents into a vector representation. 
Use any Open AI’s latest text embeddings to vectorize the search query and the text 
documents to be searched from.

3. Similarity Search Algorithm: Implement a similarity search algorithm that can 
find the most similar documents to the user's query. The algorithm should be 
optimized for speed and accuracy.

4. User Interface: Develop a user interface that allows users to enter their 
queries and view the search results. The interface should be intuitive and easy to use.
Use a UI template if that is easier.

pip install fastapi uvicorn sentence-transformers pinecone-client python-dotenv
