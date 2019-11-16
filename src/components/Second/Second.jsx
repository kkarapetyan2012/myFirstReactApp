import React from 'react';
import './Second.css';



const Second = (props) => {
    return (
        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
            <div className="title">
                <h2>{ props.title }</h2>
            </div>
            <div className="description mt-3 mb-5">
                { props.description }
            </div>
            <a href="#" className="btn btn-primary">Learn More</a>
        </div>
    )
}

export default Second;