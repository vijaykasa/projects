import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../CSS/singleproduct.css"
import { useDispatch, useSelector } from "react-redux";
import { addItem, totalprice, totalquantity } from '../Store/cartSlice';
const SingleProdut = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllUsers();
  }, []);
  const navigate = useNavigate();
  const addtocart = () => {
    fetch("http://localhost:5050/cart", {
      method: "POST",
      body: JSON.stringify(products),
      headers: {
        "Content-Type": "application/json"
      }
    })
    dispatch(addItem(products));
    dispatch(totalprice());
    dispatch(totalquantity());
    navigate("/cart")


  }
  const buynow = () => {

  }

  const getAllUsers = async () => {
    let response = await (await fetch("http://localhost:5050/products/" + params.id)).json();
    // console.log(response);
    setProducts(response);
  };
  const params = useParams();
  console.log(products.images)
  return (
    <div className="single-container d-flex">
      <div className="leftside">
        <div className="image">
          <img src={products.thumbnail} alt="products" />
        </div>
        <div className="images">
          {products.images && products.images.map((image, i) => <img src={image} key={i} />)}


        </div>
      </div>
      <div className="rightside">
        <div className="single-wrapper">
          <h1>{products.title}</h1>
          <h3>discount {products.discountPercentage}%</h3>
          <p>rating {products.rating}</p>
          <h4>in stock {products.stock}</h4>
          <hr />
          <p>description:SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...</p>
          <h1>899$</h1>
          <button className='btn btn-success me-3' onClick={buynow} >buy now</button>
          <button className='btn btn-warning' onClick={addtocart}>add cart</button>

        </div>
      </div>
    </div>
  )
}

export default SingleProdut