import React from 'react';
import Footer from "../components/Footer/Footer";
import "../styles/setup.css";

export default function Setup() {
    return (
        <div>
            <div className="basics">
                <h1>Welcome to Chicken Tinder</h1>
                <h2>Please Create Your Profile</h2>
                <form>
                    <input
                        value=""
                        name="Name"
                        onChange="" 
                        type="text" 
                        placeholder="Name" />
                        <br />
                    <input
                        value=""
                        name="email"
                        onChange="" 
                        type="email" 
                        placeholder="Email" />
                        <br />
                    <input
                        value=""
                        name="password"
                        onChange="" 
                        type="password" 
                        placeholder="Password" />
                        <br />
                    <button>Submit</button>
                </form>
                <a href="/"><button>Home</button></a>
            </div>
            <br /><a href="/user">Temp link to user</a>
            <Footer />
        </div>
    )
}
