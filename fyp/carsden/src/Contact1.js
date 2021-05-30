import React from 'react';
import {useState} from 'react';

function Contact1() {

    const[data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
            [name] : value,
            };
        });    
    };

    const formSubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <>
        <div className='my-5'>
            <h1 className='text-center'> Contact Us</h1>
        </div>
        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type="email" className="form-control" id="" aria-describedby="emailHelp"
                            name='fullname'
                            value={data.fullname}
                            onChange={InputEvent}/>
                            <div id="emailHelp" className="form-text"> Enter your full name here</div>
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="" aria-describedby="emailHelp"
                            name='phone'
                            value={data.phone}
                            onChange={InputEvent}/>
                            <div id="emailHelp" className="form-text"> Enter your 11-digit phone number here</div>
                        </div>
                    
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            name='email'
                            value={data.email}
                            onChange={InputEvent}
                            placeholder='carsDen@gmail.com'/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Type your message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            name='msg'
                            value={data.msg}
                            onChange={InputEvent} />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Confirm Information</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact1;
