import { useState, useEffect } from "react";

import axios from "axios";

export default function useCategory() {
  const [category, setCategory] = useState([]);

  //get cat
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/all-categories`
      );
      setCategory();
    } catch (error) {
      console.log(error);
    }
  };
}
