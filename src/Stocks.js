import React from "react";
import { stockData } from "./data";

const Stocks = () => {
  return (
    <div>
<h1 className="text-center text-white mt-3 col-lg-12 col-md-12 col-sm-12">Show Data through JSON Object</h1>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            {stockData.map((data, key) => {
              return (
  

                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div class="card text-center ">
                    <div class="image">
                      {" "}
                      <img src={data.Image} alt="img" width="300" className="json-img pt-2"/>{" "}
                    </div>
                    <div class="about-product text-center">
                      <h3>{data.company}</h3>
                      <h4>
                        <small>{data.stockPrice}</small>
                      </h4>{" "}
                      <button class="btn btn-success buy-now">
                        Watch More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
