import { computeHeadingLevel } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyConsumer } from './Authcomponent'


export default function Search() {
    const {search}=MyConsumer()
    
    const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllUsers();
 
  }, []);
  const navigate=useNavigate();

  const getAllUsers = async () => {
    let response = await (await fetch("http://localhost:5050/products")).json();
    setProducts(response);
  };
   const handleredirect=(id)=>{
   
    navigate("/product/"+id)
   
   }
  return (
    <div>

      <div className="main-cards" style={{backgroundColor:"azure"}}>
        {products && products.filter(ele => ele.title.includes(search)).map((data, i) => {
                console.log(products)
            return (
              <div
                className="card card-list"
                key={i}
                style={{ width: "12rem",marginBottom:"13px"  } }
               onClick={()=>{handleredirect(data.id)}}>
                <img
                  src={data.thumbnail}
                  className="card-img-top"
                  alt="Image"
                ></img>
                <div className="card-body">
                  <h6 className="card-title">{data.title}</h6>
                </div>
               {/* <h1>{filter.title}filter</h1> */}
              </div>
            );

        })}
      </div>
    </div>
  )
}
