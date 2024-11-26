import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import QuotesPage from './pages/QuotesPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
