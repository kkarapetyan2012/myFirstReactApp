import React from 'react';
import Last from '../Last/Last'
import './Blog.css';

import { data } from '../../data1';
// import { images } from '../../image';

const Blog = () => {
    const images = [
        {
            id: '1',
            src: '../../public/img/scr01.jpg'
        },
        {   id: '2',
            src: '../../public/img/scr02.jpg'
        },
        {
            id: '3',
            src: '../../public/img/scr03.jpg'
        },
        {   id: '4',
            src: '../../public/img/scr04.jpg'
        }
    ];

    console.log(images.length)
    images.map((image) => {
        return <img key={images.id} image={image.src} alt="" className="img-responsive" />
        
    });
    return (
        <div className="container">
            <div className="row">
                { data.map(item => {
                    const {image, title, description} = item;
                    return <Last key={item.id} title={title} description={description} image={image}/>
                })}
            </div>
        </div>
    )
}

export default Blog