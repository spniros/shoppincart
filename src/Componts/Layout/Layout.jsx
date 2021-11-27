import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import Filter from "../Filter/Filter";
import Cart from "../Cart/Cart";
import { getProducts } from "src/services/Product";
import Filterby from "../Filter/Filterby";

const Layout = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([])
  // const [selectedSizeFilter, setSelectedSizeFilter] = useState([]);

  const fetchData = async () => {
    try {
      let result = await getProducts();
      //  console.log(result.data);
      if (result.status === 200) {
        setProducts(result.data);
        setAllProducts(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sizeFilter = (sizesDetail) => {
   
    let filProduct=allProducts;
    let sizes = Array.from(sizesDetail);
    if (sizes.length > 0) {
      let newPro = filProduct.filter((x) => {
        let res = sizes.find((y) => y == x.details.size);
        if (res) {
          return x;
        }
      });

      setProducts(newPro);
    } else {
      fetchData();
    }
  };

  const productItems = products.map((item, index) => (
    <Product key={index} productItem={item} />
  ));

  return (
    <>
      <Cart />
      <div className="top-bar">
         
         
        <div>
          <Filter sizeFilter={sizeFilter} />
          <div className="shelf-container">
          <div>
        <Filterby />
        {productItems?.length}  Product(s) found
        </div>
    
              {productItems}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
