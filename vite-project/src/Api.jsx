import React, { useEffect ,useState } from 'react';
import { CircularProgress } from '@mui/material';

//import Card1 from './Card1';
function Api() {
    const [product , setProduct] = useState([]) ;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      console.log(data.products)
      setProduct(data.products);
    };
    fetchData();
  }, []);
  product.map((el)=>{
    console.log(el.title)
  })

  return <div className='grid grid-cols-4'>
  {product.length > 0 ? (product.map((el)=>(
        <Card1 img={el.images[0]} text={el.title} />
    ))) : 
   <CircularProgress/>}
    
  </div>;
}

export default Api;

//TODO fetching data using useEffect
// step1 import the useEffect from react
//step2 call the useEffect inside the component



//git commit changes
