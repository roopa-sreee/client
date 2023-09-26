import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  // get Product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/get-product/${params.slug}`
      );
      console.log(product);
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product?.category?._id);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // get similar products

  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/related-products/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
      toast.error("couldn't fetch similar products");
    }
  };

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${product._id}`}
            className="card-image-top"
            alt={product.name}
            height="350px"
            width={"350px"}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center" style={{ color: "#b3992b" }}>
            Product Details
          </h1>
          <h6>{product.name}</h6>
          <h6>Description: {product.description} </h6>
          <h6 style={{ color: "green" }}> ₹ {product.price}</h6>
          <h6>Category: {product?.category?.name}</h6>
          <button className="btn btn-warning ms-1">ADD TO CART</button>
        </div>
      </div>
      <hr style={{ borderColor: "#c697f0" }} />
      <div className="row ms-1">
        <h2 className="text-center" style={{ color: "#7424b5" }}>
          Similar Products
        </h2>
        {relatedProducts.length < 1 && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            NO SIMILAR PRODUCTS{" "}
          </p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((eachProduct) => (
            <Link
              to={`/products/${eachProduct.slug}`}
              style={{ textDecoration: "none" }}
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
                  <p className="card-text">
                    {eachProduct.description.substring(0, 30)}
                  </p>
                  <p className="card-text" style={{ color: "green" }}>
                    ₹ {eachProduct.price}
                  </p>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => navigate(`/products/${eachProduct.slug}`)}
                  >
                    More details
                  </button>
                  <button className="btn btn-warning ms-1">ADD TO CART</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
