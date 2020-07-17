import React from 'react';
import Footer from "../components/Footer/Footer";
import "../styles/home.css";

export default function Home() {
    return (
        <div>
            <div className="basics">
                <h1>Welcome to Chicken Tinder - Or header here instead</h1>
                <h2>Description Here</h2>
                <h3>Please log in or <a href="/signup">sign up</a></h3>
                <form>
                    <input
                        value=""
                        name=""
                        onChange="" 
                        type="email" 
                        placeholder="Email" />
                        <br />
                    <input
                        value=""
                        name=""
                        onChange="" 
                        type="password" 
                        placeholder="Password" />
                        <br />
                    <button onClick="">Log in</button>
                </form>
                <br /><a href="/user">Temp link to user</a>
            </div>
            <Footer />
        </div>
    )
}
