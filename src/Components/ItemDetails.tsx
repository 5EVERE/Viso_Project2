import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

import useItems from "../hooks/useItems";

interface RouteParams {
  itemId: string;
}
const ItemDetails = () => {
  const { products, error } = useItems();
  const { itemId } = useParams<RouteParams>();
  const product = products.find((p) => p.id === parseInt(itemId));
  if (error) {
    return <p>{error}</p>;
  }
  if (!product) {
    return <h2>Item not found</h2>;
  }

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>
            <strong>Ціна: {product.price} грн</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetails;
