import React from 'react';
import './Last.css';

const Last = (props) => {
    return (
        <div className="col-3 d-flex flex-column justify-content-center align-items-center">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                { props.src }
            </div>
            <div className="title">
                <h2>{ props.title }</h2>
            </div>
            <div className="description mt-3 mb-5">
                { props.description }
            </div>
            <a href="#" className="btn btn-primary">Etiam posuere</a>
        </div>
    )
}

export default Last;