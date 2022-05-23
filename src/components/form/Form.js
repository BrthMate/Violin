import React from 'react'
import "./from.css"

const Form = () => {
  return (
    <form method='post'>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" placeholder="John"></input>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" placeholder="Doe"></input>
        <label for="text">Message:</label>
        <textarea id="text" name="text" rows="4" cols="50">
        </textarea>
        <button className="btn submit" type="button" >submit</button>     
    </form>
  )
}

export default Form