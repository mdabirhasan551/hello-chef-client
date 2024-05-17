import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Home = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <div>
      <Carousel className="bg-dark">
        {datas.map((data) => (
          <Carousel.Item key={data._id} interval={4000}>
            <Container>
              <Row className="d-flex align-items-center">
                <Col className="text-white">
                  <h3>{data.name}</h3>
                  <p>{data.description}</p>
                </Col>
                <Col>
                  <img
                    className="d-block w-100 p-5"
                    src={data.image}
                    style={{ height: "600px", width: "800px" }}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel className="bg-dark">
        {datas.map((singleData) => {
          const chunks = []; // Array to hold chunks of recipes
          for (let i = 0; i < singleData.recipes.length; i += 3) {
            chunks.push(singleData.recipes.slice(i, i + 3)); // Push chunks of 3 recipes into 'chunks' array
          }
          return chunks.map((chunk, index) => (
            <Carousel.Item key={index} className="p-5">
              <CardGroup>
                {chunk.map((recipe) => (
                  <Card key={recipe.id} style={{ height: "750px" }}>
                    <Card.Img
                      className="w-100"
                      style={{ height: "300px" }}
                      variant="top"
                      src={recipe.image}
                    />

                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>{recipe.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Rating
                        placeholderRating={recipe.rating / 2} // Adjust placeholderRating to fit the scale
                        initialRating={recipe.rating / 2} // Set initialRating to fit the scale
                        readonly={true} // Make the rating readonly
                        emptySymbol={<FaRegStar className="text-warning"/>}
                        placeholderSymbol={
                          <FaRegStar className="text-warning" />
                        }
                        fullSymbol={<FaStar className="text-warning" />}
                      ></Rating>
                      <span className="ms-2">{recipe.rating}</span>
                    </Card.Footer>
                  </Card>
                ))}
              </CardGroup>
            </Carousel.Item>
          ));
        })}
      </Carousel>
    </div>
  );
};

export default Home;
