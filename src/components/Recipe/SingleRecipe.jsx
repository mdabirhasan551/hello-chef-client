import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const SingleRecipe = () => {
  const singleRecipeData = useLoaderData();
  const { title, rating, description, image } = singleRecipeData;

  return (
    <div className="d-flex justify-content-center bg-dark">
      <div className="text-white">
        <Container>
          <Row className="d-flex align-items-center">
            <Col className="p-5">
              <p className="fs-1"><b>{title}</b></p>
              <p>{description}</p>
              <p className="d-flex align-items-center">
                <Rating
                  className="text-warning"
                  readonly
                  placeholderRating={rating / 2}
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar />}
                  fullSymbol={<FaStar />}
                ></Rating>
                <span className="ms-2">{rating}</span>
              </p>
            </Col>
            <Col className="p-5">
              <Image
                className="rounded"
                src={image}
                style={{ height: "400px", width: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SingleRecipe;
