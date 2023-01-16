import React from 'react';
import { Link } from 'react-router-dom';
import '../Component/QuesInfo.css'

const Complete = () => {
    return (
        <div className='comp-center'>
            <h1>Thank you for submitting.</h1>
            <Link to="/"><button className='pre-btn'>Back To Home</button></Link>
        </div>
    );
};

export default Complete;