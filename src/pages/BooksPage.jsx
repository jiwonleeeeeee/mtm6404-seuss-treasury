import React, { useState, useEffect } from 'react';

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')  
      .then(response => response.json())
      .then(data => setBooks(data))  
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <a href={`/book/${book.id}`}>  
              <img 
                src={book.coverImage ? book.coverImage : '/path/to/default-image.jpg'}  
                alt={book.title}
              />
            </a>
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
