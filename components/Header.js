import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex mx-auto max-w-5xl py-4'>
      <div className=''></div>
      <div className='flex-1'>
        <nav>
          <ul className='flex space-x-12'>
            <Link href='/about'>
              <a>About</a>
            </Link>
            <Link href='/about'>
              <a>Collections</a>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
