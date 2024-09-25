import React from 'react'
import './Profile.css'

function Profile(props) {
  return (
    <div className='Profile'>
        <span>{props.firstname}</span>&nbsp;
        <span>{props.lastname}</span>&nbsp;
        <span>chandana</span>

    </div>
    
  )
}

export default Profile