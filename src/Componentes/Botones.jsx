import React from 'react'
import {NavLink }from 'react-router-dom'

function Botones() {
    return (
        <div>
            <NavLink to={"/Ejer/"}>
                <button>
                    Botones
                </button>
            </NavLink>
        </div>
    )
}

export default Botones