import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>contact</a>
          </Link>
          <Link href="/profile/user1">
            <a>profile user1</a>
          </Link>
        </menu>
      </nav>
    </div>
  );
};
export default Navbar;
