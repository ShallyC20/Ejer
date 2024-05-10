import React from 'react'
import NavLink from 'react-dom'

function Card() {
    return (
        <div>
            <h1>
                CARTA
            </h1>
            <NavLink to ="/Boton">
                <button>
                    Boton
                </button>
            </NavLink>
        </div>
    )
}

export default Card