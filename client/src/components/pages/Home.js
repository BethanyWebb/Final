import React from 'react';
import Footer from "../Footer.js";
import "../styles/Home.css";

export default function Home() {
    return (
        <div>
            <div className="basics">
                <h1>Welcome to Chicken Tinder - Or header here instead</h1>
                <h2>Description Here</h2>
                <h3>Please log in or <a href="/setup">sign up</a></h3>
                <form>
                    <input type="email" placeholder="Email"></input><br />
                    <input type="password" placeholder="Password"></input><br />
                    <button>Log in</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
