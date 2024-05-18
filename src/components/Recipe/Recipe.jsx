import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Recipe = () => {
  const recipeData = useLoaderData();
  return (
    <div className="bg-dark">
      <div>
        {recipeData.map(
          (recipeData) => (
            (
              <div key={recipeData.id} className="d-flex justify-content-center">
                <Card className="m-5 w-25">
                  <Card.Img
                    className="w-100"
                    variant="top"
                    src={recipeData.image}
                  />
                  <Card.Body>
                    <Card.Title>{recipeData.title}</Card.Title>
                    <Card.Text>{recipeData.description.slice(0,70)+ '...'}</Card.Text>
                    <Link to={`/recipes/${recipeData.id}`}>
                      <Button variant="warning">See Recipe</Button>
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

export default Recipe;
