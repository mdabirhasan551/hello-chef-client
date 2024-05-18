import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";

const SingleChef = () => {
  const data = useLoaderData();
  const { _id, name, image, rating, description, recipes } = data;
  console.log(data);
  return (
    <div>
      <div className="bg-dark">
        <Container className="text-white p-3">
          <Row className="d-flex align-items-center">
            <Col>
              <b>{name}</b>
              <p>{description}</p>
              <p className="d-flex align-items-center">
                <Rating
                  placeholderRating={rating / 2}
                  emptySymbol={<FaRegStar className="text-warning" />}
                  placeholderSymbol={<FaStar className="text-warning" />}
                  fullSymbol={<FaStar className="text-warning" />}
                ></Rating>
                <span className="ms-3">{rating}</span>
              </p>
            </Col>
            <Col>
              <img
                src={image}
                alt=""
                className="rounded"
                style={{ height: "500px", width: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        {recipes.map((singleRecipe) => (
          <div>
            <Container>
              <Row>
                <Col className="mt-2 mb-4">
                  <Card style={{ width: "30rem" }}>
                    <Card.Img variant="top" src={singleRecipe.image} />
                    <Card.Body>
                      <Card.Title>{singleRecipe.title}</Card.Title>
                      <Card.Text>
                        {singleRecipe.description.slice(0, 60) + "..."}
                      </Card.Text>
                      <Link to={`/recipes/${singleRecipe.id}`}>
                        <Button variant="warning">See Recipe</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleChef;
