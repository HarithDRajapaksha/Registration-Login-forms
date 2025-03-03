import React, { useEffect } from 'react';
import './regLogForm.css';

export const setupAuthButtons = () => {
    const sign_in_btn = document.querySelector("#sign-in-button");
    const sign_up_btn = document.querySelector("#sign-up-button");
    const container = document.querySelector(".container");

    sign_in_btn.addEventListener('click', () => {
        container.classList.remove('sign-up-mode');
    });

    sign_up_btn.addEventListener('click', () => {
        container.classList.add('sign-up-mode');
    });
};

export default function RegLogForm() {
    useEffect(() => {
        setupAuthButtons();
    }, []);

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        console.log("Sign In submitted");
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log("Sign Up submitted");
    };

    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    {/* Sign In Form */}
                    <form onSubmit={handleSignInSubmit} className="sign-in-form">
                        <h2>Sign In</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign In With Social Platforms</p>
                        <div className="social-media">
                            <button className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="social-icon">
                                <i className="fab fa-google"></i>
                            </button>
                            <button className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </button>
                        </div>
                    </form>

                    {/* Sign Up Form */}
                    <form onSubmit={handleSignUpSubmit} className="sign-up-form">
                        <h2>Sign Up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <input type="submit" value="Sign Up" className="btn solid" />
                        <p className="social-text">Or Sign Up With Social Platforms</p>
                        <div className="social-media">
                            <button className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="social-icon">
                                <i className="fab fa-google"></i>
                            </button>
                            <button className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Panels */}
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New Here?</h3>
                        <p>Join our community and start your journey with us!</p>
                        <button className="btn transparent" id="sign-up-button">Sign Up</button>
                    </div>
                    <img src="1.svg" alt="Register" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One Of Us?</h3>
                        <p>Welcome back! Sign in to continue your journey.</p>
                        <button className="btn transparent" id="sign-in-button">Sign In</button>
                    </div>
                    <img src="2.svg" alt="Login" />
                </div>
            </div>
        </div>
    );
}