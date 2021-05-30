import React from 'react';
import web from '../src/images/image_3.png'
import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home1=()=>{
    return(
        <>
        <Common hname='Get your own Car with'
                imgsrc={web}
                visit='./about'
                btname='Get Started'
        />
        </>
    )
};

export default Home1;