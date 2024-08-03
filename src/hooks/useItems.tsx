import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

interface ApiResponse {
  products: Product[];
}

const useItems = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<ApiResponse>("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        setError("Error fetching products.");
        console.error("Error fetching products:", error);
      });
  }, []);
  console.log(products);
  return { products, error };
};

export default useItems;
