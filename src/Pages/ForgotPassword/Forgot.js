import React from 'react'
import passwordreset from "../../images/ForgotImage/password-reset 1.png";
import "./Forgot.css"

function Forgot() {
    return (
        <div className='Forgot__body'>

            <div className="forgot__password">
                <img src={passwordreset} alt=""  />
                <h3>
                    Forgot Password!
                </h3>
                <p>
                    No worries! it happens, enter your E-mail
                    and we'll send you a reset link.
                </p>
                <form action="#" className="form">
                    <input type="text" required className="form-input" placeholder="Enter your E-mail" />
                </form>
                <button type="submit" className="send__request">Send Request</button>
            </div>
        </div>
    )
}

export default Forgot