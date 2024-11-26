import { useParams } from 'react-router-dom';  
import { useState, useEffect } from 'react';

function BookDetailsPage() {
  const { id } = useParams();  
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setBook(data); 
      })
      .catch((error) => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;  
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.coverImage} alt={book.title} className="book-cover" />
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetailsPage;
