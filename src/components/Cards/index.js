import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./card.css";

const CardData = ({ products }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <>
              <div className="col-sm-3">
                <div className="card mb-4">
                  <div className="card-body hoverable">
                    <CardGroup>
                      <Card>
                        <Card.Img variant="top" src={product.media[0].url} />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>{product.description}</Card.Text>
                          <Card.Text>
                            ₹
                            {Math.trunc(
                              product.price -
                                (product.discount.value * product.price) / 100
                            )}
                            <s className="p-2"> ₹ {product.price} </s>
                            <span className=" text-danger">
                              {product.discount.value}% OFF
                            </span>
                          </Card.Text>
                        </Card.Body>

                        <button type="button" class="btn btn-danger">
                          Add To Cart
                        </button>
                      </Card>
                    </CardGroup>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default CardData;
