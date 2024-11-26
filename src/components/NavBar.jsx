import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
