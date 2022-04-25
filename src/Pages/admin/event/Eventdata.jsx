import React from 'react'
import { useLocation } from 'react-router-dom'

function Eventdata() {
   const location = useLocation()
   console.log(location ,"heloo");
  return (
    <div className='mt-5'>Eventdata

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente deleniti beatae fugiat facere odit maiores et soluta tenetur earum a est explicabo, laborum reprehenderit, officia consectetur repellendus odio perferendis?
    </div>
  )
}

export default Eventdata