import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardData from "./components/Cards";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  
  const fetchData = async (payload) => {
    try {
      const response = await fetch(
        "https://test1api.wellcraftz.com/v1/getproducts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const jsonData = await response.json();
      setProducts(jsonData.products); //need to check tommorow
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  console.log("Products", products);

  useEffect(() => {
    fetchData({});
  }, []);

  return (
    <>
      <Header fetchData={fetchData} />
      <CardData products={products} />
    </>
  );
}

export default App;
