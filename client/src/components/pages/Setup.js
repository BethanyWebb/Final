import React from 'react';
import Footer from "../Footer.js";
import "../styles/Setup.css";

export default function Setup() {
    return (
        <div>
            <div className="basics">
                <h1>Welcome to Chicken Tinder</h1>
                <h2>Please Create Your Profile</h2>
                <form>
                <input type="text" placeholder="Username"></input><br />
                    <input type="email" placeholder="Email"></input><br />
                    <input type="password" placeholder="Password"></input><br />
                    <button>Submit</button>
                </form>
                <a href="/"><button>Home</button></a>
            </div>
            <Footer />
        </div>
    )
}
