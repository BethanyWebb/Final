import React from 'react';
import Footer from "../components/Footer/Footer";
import "../styles/user.css";
// import { Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../utils/API';
import Card from '../components/Card/Card';
import MyNavbar from "../components/Navbar/Navbar";


// Module for decoding json web tokens
const jwtDecode = require('jwt-decode');

// This is waiting to have a value from getToken()
let userToken;

let userTokenName;

// This is waiting on a value from the API get call


// Looks for a token, if found it trims it to the exact value needed
// for jwt-decode. Then it returns the decoded value as userToken
const getToken = function () {
    userToken = window.localStorage.getItem('jwt')
    userToken = userToken.replace(/Bearer token: /, '')
    // console.log(userToken)
    const decoded = jwtDecode(userToken);
    // console.log(decoded);
    // console.log(decoded.id);
    userToken = decoded.id;
    return userToken
};

const getTokenName = function () {
    userTokenName = window.localStorage.getItem('jwt')
    userTokenName = userTokenName.replace(/Bearer token: /, '')
    const decoded = jwtDecode(userTokenName);
    userTokenName = decoded.name;
    return userTokenName
};

// API call made using the id from the token to get the user's info
const getUserInfo = function (userToken) {
    API.getInfo(userToken)
        .then(infoObj => { })
        .catch((err) => console.log(err))
}

// Get token id val and pass it in to api call
const wholeUserInfo = function () {
    getToken();
    // getUserInfo(userToken);
    getTokenName();
}

// removes the web token and sends the user back to the home page
const logOut = function () {
    window.localStorage.removeItem('jwt')
    window.location.replace("/")
}

// sends the user back to the home page
const noLogin = () => {
    window.location.replace("/");
}

// displays two different pages depending on if there is a web token,
// from a successful logon. Passes function to the button.
export default function User() {
    if (localStorage.getItem('jwt')) {
        wholeUserInfo();
        return (
            <div>
                <MyNavbar />
                <div className="basics">
                    <h1>Hello {userTokenName}!</h1>
                    <p>Enter your Zipcode and select restaurants that interest you.</p>
                    {/* <Form>
                    <div className="divSpace">
                    <FormGroup>
                        <Label for="exampleSelect">Which friend will you be eating with?</Label>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>Friend #1</option>
                        <option>Friend #2</option>
                        <option>Friend #3</option>
                        <option>Friend #4</option>
                        <option>Friend #5</option>
                        </Input>
                    </FormGroup>
                    </div>
                    <div className="divSpace">
                    <FormGroup>
                        <Label for="exampleSelect">How many miles out are you willing to drive? </Label>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        </Input>
                    </FormGroup>
                    </div>
                </Form> */}
                    <Card />
                    <button className="button" onClick={logOut}>Sign Out</button>
                    <button onClick={wholeUserInfo}>Test Button</button>
                    <br /><a href="/">Temp link to home</a>
                </div>
                <Footer />
            </div>
        )
    } else
        return (
            <div>
                <MyNavbar />
                <div className="basics">
                    <h1>You need to be logged in!</h1>
                    <h5>Click the button to be redirected back to the home page.<br />
                        There you can login, or create an account.</h5>
                    <button onClick={noLogin}>Home</button>
                </div>
                <Footer />
            </div>
        )
} 
