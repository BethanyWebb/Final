import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
// import API from '../../utils/API';
import axios from "axios";

const RestaurantCard = () => {
  // const [image, setImage] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [loaded, setLoaded] = useState(false);

  const newEats = () => {
    // get call from opentable with zip code query
    // write a post request function so that when like button is hit, it posts id to like schema and re renders
    axios.get("https://opentable.herokuapp.com/api/restaurants?zip=" + zipcode.toString())
      .then(res => {
        console.log(res.data.restaurants)
        setRestaurants(res.data.restaurants)
        setLoaded(true);
      })
      .catch(error => console.log(error))
  }

  const handleSubmit = event => {
    newEats()
    event.preventDefault()
    console.log("submitting")
  }

  // useEffect can look for any change of state on the page and act accordingly
  useEffect(() => { console.log(zipcode) }, [zipcode])
  

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
            <Card.Title>{restaurants[1].name}</Card.Title>
            <Card.Text>
              Address:<br/>{restaurants[1].address}<br/><br/>
              Phone Number:<br/>{restaurants[1].phone}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <div>
              <Card.Link href={restaurants[1].reserve_url}>Make Reservations</Card.Link>
            </div><br/>
            {/* <div>
            <Card.Link href="#">Another Link</Card.Link>
            </div> */}
            <div>
              <button onClick={() => newEats()} id="like" className="btn btn-success mx-4">
                Like
              </button>
              <button onClick={() => newEats()} id="dislike" className="btn btn-danger mx-4">
                Dislike
              </button>
            </div>
          </Card.Body>
        </Card>
        :
        <div></div>
      }
    </div>
  )
  
}

export default RestaurantCard;