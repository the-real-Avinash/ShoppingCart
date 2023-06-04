import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const CardData = ({ products }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <>
              <div className="col-sm-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <CardGroup>
                      <Card>
                        <Card.Img variant="top" src={product.media[0].url} />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>{product.description}</Card.Text>
                          <Card.Text>
                            {" "}
                            <strong>₹ {product.price}</strong>{" "}
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
