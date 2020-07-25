import React from 'react';
import Footer from "../components/Footer/Footer";
import "../styles/user.css";
import { Form, FormGroup, Label, Input } from 'reactstrap';


// Module for decoding json web tokens
const jwtDecode = require('jwt-decode');

// This is waiting to have a value from getToken()
let userToken;

// Looks for a token, if found it trims it to the exact value needed
// for jwt-decode. Then it returns the decoded value as userToken
const getToken = function() {
    userToken = window.localStorage.getItem('jwt')
    userToken = userToken.replace(/Bearer token: /, '')
    console.log(userToken)
    const decoded = jwtDecode(userToken);
    console.log(decoded);
    console.log(decoded.name);
    userToken = decoded.name;
    return userToken
};

// removes the web token and sends the user back to the home page
const logOut = function(){
    // this.clearLocal('jwt')
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
    if(localStorage.getItem('jwt')) {
    return (
        <div>
            <div className="basics">
                <h1>Hello "username here"</h1>
                <p>A few questions and your dining dilema will be fixed</p>
                <Form>
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
                </Form>
                <button onClick={logOut}>Sign Out</button>
                <button onClick={getToken}>Test Button</button>
                <br /><a href="/">Temp link to home</a>
            </div>
            <Footer />
        </div>
        )
    } else 
    return (
        <div className="basics">
            <h1>You need to be logged in!</h1>
            <h5>Click the button to be redirected back to the home page.<br />
                There you can login, or create an account.</h5>
            <button onClick={noLogin}>Home</button>
        </div>
    )
} 
