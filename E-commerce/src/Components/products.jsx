import React, { useEffect, useState } from 'react'

export default function Products() {
    const [products,setProducts]=useState([])
   
    useEffect(()=>{
        getData()
    },[])

    const getData= async()=>{
      let response=await (await fetch(" http://localhost:5050/products")).json();
      setProducts(response) 
    }
  return (
    <div className='container m-3 text-center'>
      <table className='table text-center'>
      <thead className='table-dark'>
        <tr>
           <th>S.no</th>
           <th>Title</th>
           <th>Brand</th>
           <th>Price</th>
           <th>Category</th>
           <th>Image</th>



        </tr>
      </thead>
      <tbody>
        {products.map((ele,i)=>{
        return <tr key={i}>
        <td>{i+1}</td>
        <td>{ele.title}</td>
        <td>{ele.brand}</td>
        <td>{ele.price}</td>
        <td>{ele.category}</td>
        <td><img src={ele.thumbnail} alt="product" width={100} height={100}/></td>
        </tr>
        })}
      </tbody>
      </table>
    </div>
  )
}
