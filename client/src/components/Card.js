import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Card({
    //restaurant name, image, distance, food type
}) {
    return (
        <div>
            <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{restaurantName}</Card.Title>
      <Card.Text>
        User decides yes/no on if they like this particular food spot
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</CardDeck>
        </div>
    )
}
