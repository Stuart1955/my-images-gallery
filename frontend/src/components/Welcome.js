import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Images Gallery</Card.Title>
        <Card.Text>
          This is a simple application that retrieves photos using the Unsplash
          API.To start enter a search term in the input box.
        </Card.Text>
        <Button href="https://unsplash.com" target="_blank" variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Welcome;
