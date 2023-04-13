import React from "react";
import "./home.css"

const Home = () => {
    return (
        <div>
            <div className="banner">
            </div>
            <h1 className="heading">welcome to piza cornner</h1>
            <div className="w-100 d-flex justify-content-center">
            <div className="row m-5">
            <div className="card col-4 m-2" style={{width: "18rem"}}>
                <div className="card-body ">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card col-4 m-2" style={{width: "18rem"}}>
                <div className="card-body ">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card col-4 m-2" style={{width: "18rem"}}>
                <div className="card-body ">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>  
            </div>
            <div className="banner-2">
            <div className="card col-4 m-2" style={{width: "18rem"}}>
                <div className="card-body ">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home