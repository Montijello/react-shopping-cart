import React from 'react'

const CartFooter = ({copyleft}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {copyleft}</a>
        </nav>
    )
}

export default CartFooter