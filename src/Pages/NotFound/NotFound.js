import React from 'react';
import { Link } from 'react-router-dom';
import notfoundImg from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
                <Link to = "/"><button>Go Back</button></Link>
                <img style={{width:'100%', height:'100vh'}} src={notfoundImg} alt="" /> 
                
                          
        </div>
    );
};

export default NotFound;