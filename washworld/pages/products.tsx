import { useState } from 'react';
import Link from 'next/link';
export async function getServerSideProps() {
 const res = await fetch("https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/:lpn");
  const data = await res.json();

  return {
    props:{
      locations: data,
    },
  };
}

export default function Product({}) {
   const [products] = useState<any[]>([])
    return(
       <>
 
{products?.length === 0 ? (
    <div className='loading'>Loading...</div>
  ) : (
    products?.map((product) => (
      <div key={product.id}> 
        <Link href={"/wash/"+ product.program}> 
        <p>
        {product.name}: {product.description} {product.price} {product.producttid}:
        </p>
        </Link>
      </div>
    ))
  )}
 </> 
    )
  }
  