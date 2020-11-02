import React, { Children } from 'react'
import './Carousel.scss'

const Carousel = ({children}) => {
    return (
        <div className="carousel scrolls">
            <div className="carousel__container">
                {children}
            </div>
        </div>
    )
}

export default Carousel
