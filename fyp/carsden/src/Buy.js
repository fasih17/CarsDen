import React from 'react'
import Card from './Card';
import Buydata from './Buydata'
import {NavLink} from 'react-router-dom'
import ncard from './Buy';
//import { button,Jumbotron } from 'react-bootstrap';
import { withRouter, useHistory } from 'react-router-dom';


const Buy=()=>{
  let history = useHistory();
    const openLink=(link)=>{
        console.log(link)
        history.push('/'+link);
    }
    return(
        <>
        <h1 className='text-center my-5'>Buy Cars</h1>
        

    {
      Buydata.map((value)=>{
          return (
            <div className='cards'>
            <div className='card'>
                <img src={value.imgs} 
                alt='show pic' 
                className='card_img'/>
                <div className='card_info'>
                  <span className='card_price'> {value.price}</span>
                  <h3 className='card_name'>{value.sname}</h3>
                  <button onClick={()=>{openLink(value.link)}}> View deatails</button>
                </div>
                <button className='card_contact'>Show Phone No.</button>
            </div>
          </div>
          )
      })
    }


    </>

    )
}


  
export default Buy;
export {ncard}
