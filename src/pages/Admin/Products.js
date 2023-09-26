import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/get-products`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center"> My Products </h1>
          <div className="d-flex flex-wrap">
            {products?.map((eachProduct) => (
              <Link
                to={`/dashboard/admin/products/update-product/${eachProduct.slug}`}
                className="product-link"
              >
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
                    <p>{eachProduct.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
