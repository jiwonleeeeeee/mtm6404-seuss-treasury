import { useEffect, useState } from 'react';

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);

  const getRandomQuotes = (quotesList) => {
    const shuffled = [...quotesList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  useEffect(() => {
    fetch('https://seussology.info/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const randomQuotes = getRandomQuotes(data);  
        setQuotes(randomQuotes);
      })
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []);

  return (
    <div className="quotes">
      <h2>Random Quotes</h2>
      {quotes.length > 0 ? (
        quotes.map((quote) => (
          <div key={quote.id} className="quote">
            <p>{quote.text}</p>
            <p><strong>{quote.author}</strong></p>
          </div>
        ))
      ) : (
        <p>Loading quotes...</p>
      )}
    </div>
  );
}

export default QuotesPage;
