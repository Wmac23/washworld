import { useState } from 'react';
import Link from 'next/link';


export async function getServerSideProps() {
 const res = await fetch("https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/locations");
  const data = await res.json();

  return {
    props:{
      locations: data,
    },
  };
}

export default function Locations({}) {
   const [locations] =useState([])
    return(
       <>
 
{locations?.length === 0 ? (
    <div className='loading'>Loading...</div>
  ) : (
    locations?.map((location) => (
      <div key={location.id}> 
      <Link href='/products'>
      <p>
        {location.id}: {location.name}: {location.status}
      </p>
      </Link>
      </div>
    ))
  )}
 </> 
    )
  }
  