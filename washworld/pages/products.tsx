import { useState } from 'react';
import Link from 'next/link';

interface Product {
  producttid: number;
  name: string;
  description: string;
  price: string
  program: number;
}

interface ProductData {
  products: Product[];
}

export async function getServerSideProps() {
 const res = await fetch("https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/:lpn");
  const data: ProductData = await res.json();

  return {
    props:{
      products: data,
    },
  };
}

export default function Products() {
   const [products] =useState([])
    return(
       <>
   <div>
      <h1>Products:</h1>
      <ul>
        {products?.length === 0 ? (
    <div className='loading'>Loading...</div>
  ) : (
    products?.map(product => (
         <Link href='/wash'>
         <button>
          <li key={product.id}>
            {product.name} <br/> {product.description} <br /> {product.price} <br /> {product.producttid}
          </li>
          </button>
          </Link>
        )))}
      </ul>
    </div>
 </> 
    )
  }
  