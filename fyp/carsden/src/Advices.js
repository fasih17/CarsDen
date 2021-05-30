import React from 'react'
import Card from './Card';

const Advices=()=>{
    return(
        <>
        <h1 className='text-center'>Advices and Reviews</h1>
        <div className='container-fluid advices_color1'>
            <div className='row '>
                <div className='col-md-12 '>
                    <h5>*LATEST SECURITY ANNOUNCEMENT*</h5>
                    <h3>Fraudulent Calls</h3>
                    <p1>We’re aware of scammers attempting to get personal information and payment details by impersonating Auto Trader and contacting private sellers saying they’ve been overcharged or should have had a discount due to the pandemic. We’ll never contact you via the protected number on your advert. Never give out bank or card details to an unsolicited caller. If a caller asks for a copy of your V5C logbook prior to viewing your vehicle, we would advise you not to disclose it. If you’d like to check a call is genuine, please call or email us.</p1>
                </div>
            </div>
        </div>

        <div className='container-fluid'>
            <div className='row my-4 '>
                <div className='col-md-8 advices_color2 '>
                    <h7>SECURITY ADVICE</h7>
                    <h2>How to buy and sell vehicles safely</h2>
                    <p1>Buying or selling a car should be a pleasant, hassle-free experience‚ and at Auto Trader we do everything we can to make sure that's the case. Our handy hints and tips will ensure you stay safe online, whether you're buying or selling a car.</p1>
                </div>
                <div className='col-md-4'>
                    <h3 className='advices_color3'>Report an issue</h3>
                    <p1>Think you’ve been a victim of fraud or spotted something we should know about?</p1>
                    <br/>
                    <button className='advices_color4'>Report</button>
                </div>
            </div>
        </div>

        <div className='container-fluid my-5 advices_color5'>
            <div className='row'>
                <div className='col-md-10 advices_color6 bg-light '>
                    <h5>NEVER SEND MONEY FOR A VEHICLE YOU HAVEN’T SEEN</h5>
                    <p1>View and check the vehicle and documents before handing over any money. The only exception would be if you have arranged home delivery from one of our advertising dealers who offer this service. If you’re paying a deposit or paying upfront for click and collect/home delivery, consider using a credit card as this offers additional protection.</p1>
                </div>
            </div>
        </div>

        <div className='container-fluid my-5 advices_color5'>
            <div className='row'>
                <div className='col-md-10 advices_color6 bg-light'>
                    <h5>KEEP YOUR KEYS SAFE DURING VIEWINGS</h5>
                    <p1>Never leave a potential buyer alone with the vehicle, give them the keys, or let them borrow the car documents. Never allow unsupervised access to the engine or allow yourself to be distracted during a viewing of your vehicle.</p1>
                </div>
            </div>
        </div>

        <div className='container-fluid my-5 advices_color5 '>
            <div className='row'>
                <div className='col-md-10 advices_color6 bg-light'>
                    <h5>LOOK OUT FOR SCAM CALLS, EMAILS AND TEXTS</h5>
                    <p1>We’ll never call you on the protected number on your advert or ask you to login to your Auto Trader account via email or SMS. Only enter your login details where you see a padlock icon in your browser window.</p1>
                </div>
            </div>
        </div>
        </>
    )
}
export default Advices;