import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Item = (props: any) => {
  const history = useHistory();

  const handleDetailsClick = () => {
    history.push(`/items-list/${props.product.id}`);
  };
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        <Card.Text>{props.product.category}</Card.Text>
        <Card.Text>
          <strong>Price: {props.product.price} uah</strong>
        </Card.Text>
        <Button variant="primary" onClick={handleDetailsClick}>
          Детальніше
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
