import React from 'react';
import Second from '../Second/Second'
import './News.css';

import { data } from '../../data';

const News = () => {
    return (
        <div className="container">
            <div className="row mt-5">
            { data.map(item => {
                const {title, description} = item;
                return <Second key={item.id} title={title} description={description} />
            })}
            </div>
        </div>
    )
}

export default News;