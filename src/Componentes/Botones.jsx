import React from 'react'
import {NavLink }from 'react-router-dom'

function Botones() {
    return (
        <div>
            <NavLink to={"/"}>
                <button>
                    Botones
                </button>
            </NavLink>
        </div>
    )
}

export default Botones