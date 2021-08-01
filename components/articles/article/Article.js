import React from "react";

import { Card, Button } from "react-bootstrap";

const Article = ({ article }) => {
  return (
    <>
      <Card style={{ maxWidth: "20rem" }}>
        <a href={article.url} target="_blank">
          <Card.Img variant="top" src={article.urlToImage} />
        </a>
        {article.author ? (
          <Card.Header>
            <small>Written by {article.author}</small>
          </Card.Header>
        ) : null}

        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.description}</Card.Text>

          <Button variant="primary" href={article.url} target="_blank">
            Go to article
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Article;
