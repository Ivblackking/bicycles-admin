import React from 'react'
import "./Header.css"

function Header() {
    const style = {
        color: "#E8E8E8",
        backgroundColor: "#696969",
        padding: "4px 16px",
        height: "42px",
        fontFamily: "Saira Stencil One",
        fontSize: "24px" 
    }

    return (
        <div style={style}>ADMIN.BIKE-BOOKING.COM</div>
    )
}

export default Header