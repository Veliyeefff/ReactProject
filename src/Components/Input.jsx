import React, { useState } from "react";
import { BsPhone } from "react-icons/bs";
function Input() {
  return (
    <div className="input">
      <h3 className="input-text-h3">Let's Get In Touch!</h3>
      <hr className="red-hr" />
      <h4 className="input-text-h4">
        Ready to start your next project with us? Send us a messages and we will
        get back to you as soon as possible!
      </h4>
      <form>
        <input type="text"  placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text"  placeholder="Phone Number" />
        <textarea cols="30" rows="5" placeholder="Message"></textarea>
        <button className="submit">SUBMIT</button>
      </form>

      <BsPhone style={{ color: "gray", fontSize: "2rem" }}></BsPhone>
      <p className="phone">+1 (555) 123-4567</p>
    </div>
  );
}

export default Input;
