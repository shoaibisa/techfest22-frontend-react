import React from 'react';

import signup_gif from '../../images/Signup gif.webm'

const Sigin = () => {
    return (
        <div>
            <body>
    <div class="SigninBody ">
        <div class="Signin justify-content-around  d-flex ">
            <div class="Signin__Gif mt-5">
                <video loop="loop" autoplay muted="true" preload="auto">
                    <source src={signup_gif} />
                </video>
            </div>

            <div class="Signin__inputs  pt-5 mt-5 ">
                <div class="Signin__inputs__head">
                    <h2 class="text-light " href="#">Welcome Back!</h2>
                    <p class="text-light">Sign in to continue</p>
                </div>
                <form name="SigninForm" action="" class=" text-center">

                    <label>
                        <input name="emailId" required autocomplete="off" type="email" placeholder=" " />
                        <span>Email</span>
                    </label> <br/>
                    <label>
                        <input id="Showpass" name="password" required autocomplete="off" type="password"
                            placeholder=" " />

                        <span>Password</span>
                        <i onclick="ShowPassword()" id="fa_eye" class="fa fa-eye-slash"></i>
                        <p class="text-danger" id="pass"></p>
                    </label>

                    <div class="login__button d-flex justify-content-around">
                        <input type="submit" class="btn__color mb-3"></input>
                        <a class=" text-light text-decoration-none " href="#">Forgot Password?</a>

                    </div>
                </form>
                <p class="text-light mt-3 Signin__inputs__haveAcount">Don't have an account? <a
                        class=" text-decoration-none text-light font-weight-bold " href="./Signup.html"> <b>Sign Up</b>
                    </a> </p>

            </div>
        </div>
    </div>

    <script src="./login.js"></script>
</body>
        </div>
    )
}