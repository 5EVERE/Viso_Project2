import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import Item from "./Item";
import { useState } from "react";
import useItems from "../hooks/useItems";


const ITEMS_PER_PAGE = 10; 

const Items = () => {
  const { products, error } = useItems();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (error) {
    return <p>{error}</p>;
  }

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );


  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);



  return (
    <Container>
      <h2 className="my-4">Товари</h2>

      <ButtonGroup className="mb-4">
        <Button
          variant={selectedCategory === "all" ? "primary" : "secondary"}
          onClick={() => setSelectedCategory("all")}
        >
          Всі
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "primary" : "secondary"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      <Row>
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4}>
              <Item product={product} />
            </Col>
          ))
        ) : (
          <Col sm={12}>
            <p>Товари не знайдено.</p>
          </Col>
        )}
      </Row>
      <div className="d-flex justify-content-center my-4">
        <Button
          variant="secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Попередня
        </Button>
        <span className="mx-3">
          Сторінка {currentPage} з {totalPages}
        </span>
        <Button
          variant="secondary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Наступна
        </Button>
      </div>
    </Container>
  );
};

export default Items;
