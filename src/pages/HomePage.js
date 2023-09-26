import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { prices } from "../components/Prices";
import toast from "react-hot-toast";
import Spinner from "./../components/Spinner";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  //get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/all-categories`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getTotal();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/product-list/${page}`
      );
      setIsLoading(false);
      setProducts(data.products);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  //get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // function to load more
  const loadMore = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/product-list/${page}`
      );
      setIsLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // filter by categories
  const handlefilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((eachCategory) => eachCategory !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filteredProducts();
  }, [checked, radio]);

  // get filtered products
  const filteredProducts = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/products/filter-products`,
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"HomePage-ShivaKarthikeyanStores"}>
      <div className="row mt-3">
        <div className="col-md-2">
          <h5 className="text-center">Filter By Category </h5>
          <div className="d-flex flex-column">
            {categories?.map((eachCategory) => (
              <Checkbox
                key={eachCategory._id}
                onChange={(e) =>
                  handlefilter(e.target.checked, eachCategory._id)
                }
              >
                {eachCategory.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter*/}
          <h5 className="text-center mt-4">Filter by Price </h5>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {prices?.map((eachPrice) => (
                <div key={eachPrice._id}>
                  <Radio value={eachPrice.array}>{eachPrice.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <button
            className="btn btn-danger m-2"
            onClick={() => window.location.reload()}
          >
            Clear filters
          </button>
        </div>
        <div className="col-md-9">
          <h1 className="text-center">Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((eachProduct) => (
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
                    <button className="btn btn-warning ms-1">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-info"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {isLoading ? "Loading..." : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
