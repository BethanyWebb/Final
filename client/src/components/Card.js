import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import API from '../utils/API';
import axios from "axios";
const card = () => {
    const [image, setImage] = useState();
    const nextButton = (zipcode) => {
        const newImage 
        //get call from opentable with zip code query
        axios.get("https://opentable.herokuapp.com/api/restaurants?zip=",{
          params 
          }) 
        .then(res => {
            newImage = res.body
        })
        .catch(error => console.log(error))
        setImage(newImage)
    }
    const cardInfo = [
        {image: "https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg", name: "", text: ""},
        {image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F04%2F24%2Fppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg", name: "", text: ""},
        {image: "https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg", name: "", text: ""}
    ];
return (
        <div className="card">
        <Card style={{ width: '18rem' }} key={index}>
  <Card.Img variant="top" src={cardInfo[0].image} />
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      {card.text}
    </Card.Text>
  </Card.Body>
  {/* <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup> */}
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    <Button variant="primary">Next</Button>
  </Card.Body>
</Card>
    </div>
)}
export default card;