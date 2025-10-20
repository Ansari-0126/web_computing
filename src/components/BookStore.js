import React from "react";
import "./BookStore.css";

function BookStore() {
  const books = [
    {
      title: "Ikigai",
      author: "Hector Garcia",
      price: "₹299",
      img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "₹275",
      img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Power of Your Subconscious Mind",
      author: "Joseph Murphy",
      price: "₹299",
      img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      price: "₹350",
      img: "https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <>
      {/* ✅ Navigation Bar */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">📚 Mini Bookstore</h1>
          <nav>
            <button>Home</button>
            <button>Books</button>
            <button>Categories</button>
            <button>Contact</button>
          </nav>
        </div>
      </header>

      {/* ✅ Hero Section */}
      <section className="hero">
        <h2>Welcome to Mini Bookstore</h2>
        <p>Where every page tells a story. Discover your next favorite read today.</p>
        <button>Shop Now</button>
      </section>

      {/* ✅ Featured Books */}
      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="book-grid">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <img src={book.img} alt={book.title} />
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p className="price">{book.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="footer">
        <p>&copy; 2025 Mini Bookstore. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default BookStore;
