import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
const Cart = () => {
  const [priceitems, setpriceitems] = useState([41, 121, 90])
  const [products, setProducts] = useState([]);
  const allItems = useSelector((state)=>state.cartProduct.cartItems)
  const totalPrice = useSelector((state)=>state.cartProduct.cartTotal)
  const totalQuantity = useSelector((state)=>state.cartProduct.Quantity)
  useEffect(() => {
    getAllUsers();

  }, []);

  const [result, setresult] = useState("");
  const getAllUsers = () => {
    fetch("http://localhost:5050/cart").then((res) => {
      return res.json();
    }).then((response) => {
      console.log(response)
      setProducts(response);
    })
    setTimeout(() => {
      console.log(myprice())
    }, 10000);
  };
  console.log(products)

  const myprice = () => {
    var prices = [...priceitems]
    products.map((price) => {
      prices.push(price.price)

      console.log(prices)


    })
    setpriceitems(prices)
  }

  const handleDelete = (id) => {
    fetch("http://localhost:5050/cart/" + id, {
      method: "DELETE",
    }).then(() => {
      getAllUsers();
    });
  };
  

  return (
    <div className="pricelist container">
      <div className="row">
        <div className="col-7">
          <table className="table">
            <thead>
              <tr>
                <th>ProductImage</th>
                <th>ProductName</th>
                <th>ProductPrice</th>
                <th>quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((carts, i) => (
                <tr key={i}>
                  <td>
                    <img src={carts.thumbnail} style={{ width: "150px" }} />
                  </td>
                  <td>{carts.title}</td>
                  <td>{carts.price}</td>
                  <td>{carts.quantity}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        handleDelete(carts.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>

        <div className="col-4 ">
          <div className="border p-4">
            <div class="card-header fs-3">Price Details</div>
            <hr />
            <div class="card-body">

          
              <p>PriceItems :*{totalQuantity} items - {totalPrice}</p>

              <p>Delivery Charges - 10</p>
              <p>Discount - 0%</p>
              <p>Secured packaging Free - 10</p>
              <hr />
              <h2>TotalAmount : {totalPrice}</h2>
              <hr />
              <div class="card-footer text-muted text-center">
                <button className="btn btn-warning" onClick={myprice}> PLaceOrder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Cart;
