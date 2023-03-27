import React, { useState } from 'react';
import { BsPerson, BsChevronDown } from "react-icons/bs";



const UpperNav = () => {
   
    return (


        <div className="upper-nav">
            <p>USER ID:{Math.floor(Math.random() * 99) +
                "PPD" +
                Math.floor(Math.random() * 999 + 999)}</p>
            <p className='account'>
                <span>
                    <span className='account-icon'><BsPerson /></span>
                    <span className='account-name'></span>
                    <span><BsChevronDown
                        
                    /></span>
                </span>
           <p className='logout-option' >Logout</p>
            </p>
        </div>

    )
}

export default UpperNav