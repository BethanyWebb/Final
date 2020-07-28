import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import API from '../../utils/API';
import axios from "axios";

const RestaurantCard = () => {
  const [image, setImage] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [loaded, setLoaded] = useState(false);

  const newEats = () => {
    console.log(zipcode)
    //get call from opentable with zip code query
    // write a post request function so that when like button is hit, it posts id to like schema and re renders
    axios.get("https://opentable.herokuapp.com/api/restaurants?zip=" + zipcode.toString())
      .then(res => {
        console.log(res.data.restaurants)
        setRestaurants(res.data.restaurants)
        // The response is stringified and put in local storage
        localStorage.setItem("response", JSON.stringify(res.data.restaurants))
        // This is an example of how to get it back out just like when it came back from the API call
        console.log(JSON.parse(localStorage.getItem("response")))
        setLoaded(true);
      })
      .catch(error => console.log(error))
  }

  const handleSubmit = event => {
    event.preventDefault()
    newEats()
  }

  const handleLikeClicked = randomRestaurant => {
    console.log(randomRestaurant)
    const likeInfo = {
      restaurantID: randomRestaurant.id
    };

    API.addLike(likeInfo).then(() => newEats())
  };

  function getRandomRestaurant() {
    return restaurants[Math.floor(Math.random() * restaurants.length)];
  }

  const randomRestaurant = getRandomRestaurant();

  return (
    <div style={{ width: '18rem' }}>
      <form style={{ width: '18rem' }} onSubmit={handleSubmit}>
        <input style={{ width: '9rem' }}
          placeholder="00000"
          value={zipcode}
          onChange={e => setZipcode(e.target.value)}
          type="text"></input>
        <input style={{ width: '9rem' }} type="submit" value="submit" />
      </form>
      {loaded ?
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>{randomRestaurant.name}</Card.Title>
            <Card.Text>
              {randomRestaurant.city}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            <button onClick={() => handleLikeClicked(randomRestaurant)} id="like" className="btn btn-success mx-4">
              like
            </button>
            <button onClick={() => newEats()} id="dislike" className="btn btn-danger mx-4">
              dislike
            </button>
          </Card.Body>
        </Card>
        :
        <div></div>
      }

    </div>
  )
}

export default RestaurantCard;