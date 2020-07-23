import React, { Component } from 'react';
import Footer from "../components/Footer/Footer";
import LogInForm from "../components/LogInForm/LogInForm";
import "../styles/home.css";
import API from "../utils/API";

class Home extends Component {
    state = {
        email: "",
        password: "",
        userInfo: {}
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.state.email === "" || this.state.password === "") {
            return;
        }
        this.userInfo = {
            email: this.state.email,
            password: this.state.password
        }
        // console.log(this.userInfo);
        // return this.userInfo;
        API.logIn(this.userInfo)
        .then(function(jwt) {
            // console.log(response.data.token)
            localStorage.setItem('jwt', jwt.data.token)
            window.location.replace("/user")
        })
        .catch((err) => console.log(err))

    };

render() {
    return (
        <div>
            <div className="basics">
                <h1>Welcome to Chicken Tinder - Or header here instead</h1>
                <h2>Description Here</h2>
                <h3>Please log in or <a href="/signup">sign up</a></h3>
                <LogInForm
                    email={this.state.email} 
                    password={this.state.password}
                    handleInputChange={this.handleInputChange}
                    onSubmit={this.onSubmit}
                />
                <br /><a href="/user">Temp link to user</a>
            </div>
            <Footer />
        </div>
    )
}
    
}

export default Home;
