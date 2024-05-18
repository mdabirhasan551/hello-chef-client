import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import Footer from "../shared/Footer";

const Home = () => {
  const datas = useLoaderData();
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
                  <Link to={`/chef/${data._id}`}><Button variant="info">See My Recipes</Button></Link>
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
      <Carousel className="bg-light w-50 m-auto">
        {datas.map((singleData) => {
          const chunks = []; // Array to hold chunks of recipes
          for (let i = 0; i < singleData.recipes.length; i += 3) {
            chunks.push(singleData.recipes.slice(i, i + 3)); // Push chunks of 3 recipes into 'chunks' array
          }
          return chunks.map((chunk, index) => (
            <Carousel.Item key={index} className="p-5">
              <CardGroup>
                {chunk.map((recipe) => (
                  <Card key={recipe.id} style={{ height: "600px"}}>
                    <Card.Img
                      className="w-100"
                      style={{ height: "300px" }}
                      variant="top"
                      src={recipe.image}
                    />

                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>{recipe.description.slice(0,60)+ '...'}</Card.Text>
                      <Link to={`/recipes/${recipe.id}`}><Button variant="warning">See Recipe</Button></Link>
                    </Card.Body>
                    <Card.Footer>
                      <Rating
                        placeholderRating={recipe.rating / 2}
                        initialRating={recipe.rating / 2} 
                        readonly={true} 
                        emptySymbol={<FaRegStar className="text-warning" />}
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
      <Footer />
    </div>
  );
};

export default Home;
