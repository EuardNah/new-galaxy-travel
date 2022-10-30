import React from 'react';
import './TrainingStyles.css'

import Pod from '../../assets/pod.jpg'
import Moon from '../../assets/moon.jpg'
import {Link} from "react-router-dom";

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Training is teaching, or developing in oneself or others, any skills and knowledge or fitness that relate to specific useful competencies. Training has specific goals of improving one's capability, capacity, productivity and performance.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt=""/>
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;