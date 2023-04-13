import "./App.css";

import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import Homeliving from "./Components/Home&living";
import Beauty from "./Components/Beauty";
import Carousel from "./Components/Carousel";
import Login from "./Components/login";
import { MyProvider } from "./Components/Authcomponent";
import Registration from "./Components/registration";
import AdminDashboard from "./Components/adminDashboard";
import { RequiredAuth } from "./Components/requirdAuth";
import MyCurt from "./Components/Mycurt";
import Products from "./Components/products";
import Myaccount from "./Components/Myaccount";
import Statistics from "./Components/statistics";
import SingleProdut from "./Components/SingleProdut";
import Cart from "./Components/Cart";
import Search from "./Components/search";
import PlaceOrder from "./Components/PlaceOrder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          {/* <Carousel /> */}
          <Routes>
            <Route index element={<Home />} />

            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/homeliving" element={<Homeliving />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path ="/product/:id" element={<SingleProdut/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route  path="/search" element={<Search/>} />
            <Route
              path="/Dashboard"
              element={
                <RequiredAuth>
                  <AdminDashboard />
                </RequiredAuth>
              }
            >
              <Route path="curt" element={<MyCurt />} />
              <Route path="products" element={<Products />} />
              <Route path="myaccount" element={<Myaccount />} />
              <Route path="statistics" element={<Statistics />} />
            </Route>
            <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
          </Routes>
        </MyProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
