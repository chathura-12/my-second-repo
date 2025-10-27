import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className='header'>
      <section>
        <div className='banner'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking" className='btn-book'>
            <button aria-label='On Click'>Reserve a Table</button>
          </Link>
        </div>
      </section>
    </header>
  )
}
