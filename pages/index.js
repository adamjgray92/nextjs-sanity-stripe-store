import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';

const products = [
  {
    _id: '123',
    name: 'Canon EOS 5D Electronic',
    price: 30.0,
    image: ['img'],
  },
  {
    _id: '124',
    name: 'Customisable Debet',
    price: 50.0,
    image: ['img'],
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className='grid gap-4 grid-cols-4'>
          {products.map((product) => (
            <div key={product._id}>
              <div>
                <img src='' alt='' />
              </div>
              <h3>{product.name}</h3>
              <span>{product.price}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
