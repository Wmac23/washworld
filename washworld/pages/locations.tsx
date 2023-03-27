import { useState } from 'react';
import Link from 'next/link';

interface Location {
  id: number;
  name: string;
  status: string;
}

interface LocationData {
  locations: Location[];
}

export async function getServerSideProps() {
 const res = await fetch("https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/locations");
  const data: LocationData = await res.json();

  return {
    props:{
      locations: data,
    },
  };
}

export default function Locations() {
   const [locations] =useState([])
    return(
       <>
   <div>
      <h1>Locations:</h1>
      <ul>
        {locations?.length === 0 ? (
    <div className='loading'>Loading...</div>
  ) : (
    locations?.map(location => (
         <Link href='/products'>
         <button>
          <li key={location.id}>
            {location.id} <br /> {location.name};
          </li>
          </button>
          </Link>
        )))}
      </ul>
    </div>
 </> 
    )
  }
  