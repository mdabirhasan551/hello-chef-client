import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Chef = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  return (
    <div className="bg-dark">
      <div>
        {chefData.map(
          (singleChefData) => (
            console.log(singleChefData),
            (
              <div className="d-flex justify-content-center">
                <Card className="m-5 w-25">
                  <Card.Img
                    className="w-100"
                    variant="top"
                    src={singleChefData.image}
                  />
                  <Card.Body>
                    <Card.Title>{singleChefData.name}</Card.Title>
                    <Card.Text>{singleChefData.description}</Card.Text>
                    <Link to={`/chef/${singleChefData._id}`}>
                      <Button variant="info">See My Recipes</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Chef;
