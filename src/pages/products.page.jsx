import Navbar from "../components/Navbar/Navbar.component";
import Product from "../components/Product.component";
import { useEffect, useState } from "react";
import productService from "../services/productService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const token = useSelector((state) => state.auth.user.token);
  const lang = useSelector((state) => state.language);
  let dir;
  if (lang === "ar") {
    dir = "rtl";
  } else {
    dir = "ltr";
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productService.getProducts(token, lang);
        setProducts(res?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [token, lang]);

  return (
    <div className="productsContainer">
      <Navbar />
      <div className="productsWrapper" dir={dir}>
        <div className="productsHeader">
          {lang === "ar" ? (
            <h2 dir="rtl" style={{ fontColor: "red" }}>
              منتجات
            </h2>
          ) : (
            <h2>Products</h2>
          )}

          <Link to="/addProduct">
            {lang === "ar" ? (
              <button>اضف جديد +</button>
            ) : (
              <button>+ Add New</button>
            )}
          </Link>
        </div>

        <div className="productsList">
          {products.map((product) => {
            return <Product key={product.id} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
