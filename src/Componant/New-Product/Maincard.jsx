import { useState } from "react";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import { Link } from "react-router-dom";
import data from "./db/data";

function Maincard() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query] = useState("");
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, newPrice, title }) =>
          category === selected ||
          newPrice === selected ||
          color === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice, price, id,link }) => (
        // <Link to={`/product/${id}`} key={id}>
        <Card
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          price={price}
          id={id}
          link={link}
        />
        // </Link>
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Products result={result} />
    </>
  );
}

export default Maincard;
