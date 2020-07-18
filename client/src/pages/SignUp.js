import React, { Component } from 'react';
import SignUpForm from "../components/SignUpForm/SignUpForm";
import Footer from "../components/Footer/Footer";
import "../styles/setup.css";
import API from "../utils/API";

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        userData: {}
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.password === "") {
            return;
        }
        this.userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        // console.log(this.userData);
        // return this.userData;
        API.newUser(this.state.userData)
        .then(function() {
            window.location.replace("/")
        })
        .catch((err) => console.log(err))
        
    };

render() {
    return (
            <div>
                <div className="basics">
                    <h1>Welcome to Chicken Tinder</h1>
                    <h2>Please Create Your Profile</h2>
                    <SignUpForm 
                        name={this.state.name} 
                        email={this.state.email} 
                        password={this.state.password}
                        handleInputChange={this.handleInputChange}
                        onSubmit={this.onSubmit}
                    />
                    <a href="/"><button>Home</button></a>
                    <br /><a href="/user">Temp link to user</a>
                </div>
                <Footer />
            </div>
            )

    }
}

export default SignUp;
