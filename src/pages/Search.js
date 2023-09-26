import React from "react";
import Layout from "./../components/layout/Layout";
import { useSearch } from "../context/search";

const Search = () => {
  const [values, setValues] = useSearch();

  return (
    <Layout title={"Search Results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((eachProduct) => (
              <div
                className="card m-2"
                style={{ width: "18rem" }}
                key={eachProduct._id}
              >
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${eachProduct._id}`}
                  className="card-img-top"
                  alt={eachProduct.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{eachProduct.name}</h5>
                  <p className="card-text">
                    {eachProduct.description.substring(0, 30)}
                  </p>
                  <p className="card-text">₹ {eachProduct.price}</p>
                  <button className="btn btn-secondary ms-1">
                    More details
                  </button>
                  <button className="btn btn-warning ms-1">ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
