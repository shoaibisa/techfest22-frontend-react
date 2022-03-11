import React from 'react'
import "./ForgotConfirm.css"

function ForgotConfirm() {
  return (
    <div className='ResetPass__body'>
      <div className="reset__password">
        <h1>
          Reset Your Password!
        </h1>

        <form action="#" className="form">
          <input type="text" className="form-input" placeholder="New Password" />
        </form>
        <form action="#" className="form">
          <input type="text" className="form-input" placeholder="Confirm Your Password" />
        </form>
        <button type="submit" className="reset" onclick="">Reset</button>
      </div>
    </div>
  )
}

export default ForgotConfirm