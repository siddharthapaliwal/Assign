import React, { useState, useEffect } from 'react';
import './Login.css'; // Import your CSS file

const LOGIN = () => {
    const [login, setLogin] = useState("0");
    const [formType, setFormType] = useState("sign-in");

    useEffect(() => {
        fetch('http://localhost:3000/User')
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error fetching user data:', error));
    }, []); // Empty dependency array to run only once

    const handleTabChange = (event) => {
        setFormType(event.target.id === 'tab-1' ? 'sign-in' : 'sign-up');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="login-wrap">
            <div className="login-html">
                <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="sign-in"
                    checked={formType === 'sign-in'}
                    onChange={handleTabChange}
                />
                <label htmlFor="tab-1" className="tab">Sign In</label>
                <input
                    id="tab-2"
                    type="radio"
                    name="tab"
                    className="sign-up"
                    checked={formType === 'sign-up'}
                    onChange={handleTabChange}
                />
                <label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-form">
                    {/* Sign In Form */}
                    {formType === 'sign-in' && (
                        <div className="sign-in-htm">
                            <form onSubmit={handleSubmit}>
                                <div className="group">
                                    <label htmlFor="sign-in-username" className="label">Username</label>
                                    <input id="sign-in-username" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="sign-in-password" className="label">Password</label>
                                    <input id="sign-in-password" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <input id="sign-in-keep-signed" type="checkbox" className="check" defaultChecked />
                                    <label htmlFor="sign-in-keep-signed"><span className="icon"></span> Keep me Signed in</label>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign In" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                            </form>
                        </div>
                    )}
                    {/* Sign Up Form */}
                    {formType === 'sign-up' && (
                        <div className="sign-up-htm">
                            <form onSubmit={handleSubmit}>
                                <div className="group">
                                    <label htmlFor="sign-up-username" className="label">Username</label>
                                    <input id="sign-up-username" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="sign-up-password" className="label">Password</label>
                                    <input id="sign-up-password" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="sign-up-repeat-password" className="label">Repeat Password</label>
                                    <input id="sign-up-repeat-password" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="sign-up-email" className="label">Email Address</label>
                                    <input id="sign-up-email" type="email" className="input" />
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1" />
                                    <a href="#sign-in">Already a Member?</a>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LOGIN;