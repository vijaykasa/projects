import React, { useEffect, useState } from "react";
import { MyConsumer } from "./Authcomponent";

export default function MyCurt() {
  const { userData } = MyConsumer();
  const [cartlist, setCart] = useState({});
  const [params, setParams] = useState(null);
  const [cartData, setData] = useState([]);

  //   const getData = async () => {
  //         setParams(userData.cart.join("&"))
  //     console.log("worked")
  //   }
  //   const setcartlist=()=>{
  //     console.log(cartlist)
  //      setParams(cartlist.join("&"))
  //   }
  const cart = async () => {
    console.log("worked");
    let res = await (
      await fetch("http://localhost:5050/products/?" + userData.cart.join("&"))
    ).json();
    setData(res);
  };

  useEffect(() => {
    cart();
  }, [userData]);
  return (
    <div className="container m-3 text-center">
      <h1 className="m-2 ">My cart list</h1>
      <table className="table text-center">
        <thead className="table-dark">
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.title}</td>
                <td>{ele.brand}</td>
                <td>{ele.price}</td>
                <td>{ele.category}</td>
                <td>
                  <img
                    src={ele.thumbnail}
                    alt="product"
                    width={100}
                    height={100}
                  />
                </td>
                <td><button onClick={()=>{delete(ele.id)}}>delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
