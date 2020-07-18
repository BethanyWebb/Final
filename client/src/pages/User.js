import React from 'react';
import Footer from "../components/Footer/Footer";
import "../styles/user.css";
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default function User() {
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
                <button>Sign Out</button>
                <br /><a href="/">Temp link to home</a>
            </div>
            <Footer />
        </div>
    )
}
