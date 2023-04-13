
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../CSS/Cards.css";


const Women = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const navigate=useNavigate();

  const getAllUsers = async () => {
    let response = await (await fetch("http://localhost:5050/products")).json();
    // console.log(response);
    setProducts(response);
  };
   const handleredirect=(id)=>{
    navigate("/product/"+id)

   }

  return (
    <div>
      <div className="main-cards" style={{backgroundColor:"greenyellow"}}>
        {products.map((data, i) => {
          if (i >23 && i<=46) {
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
              </div>
            );
          }
        })}
      </div>
   
    </div>
  )
}

export default Women