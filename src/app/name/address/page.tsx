import React from 'react';
import Link from 'next/link';

function Address() {
  return (
    <div>
      <p>I live in Lahore, Pakistan</p>
      <Link href="/name">go to Name page </Link>
      <br />
      <Link href="/">go to Home page</Link>
    </div>
  );
}

export default Address;
