import React from 'react'
import "./Footer.css"

function Footer() {
    const style={
        color: "#CBCACA",
        backgroundColor: "#696969",
        padding: "4px 16px",
        textAlign: "end",
        height: "40px",
        fontSize: "20px",
        fontFamily: "Saira" 
    }

  return (
    <div style={style}>
        Developer: <span style={{color: "white"}}>Ivan Lysenko</span>
    </div>
  )
}

export default Footer