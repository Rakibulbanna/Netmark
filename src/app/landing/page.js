"use client"
import React from 'react';

const LandingPage = () => {


    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    padding: '24px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    border: '1px solid red'

                }}
            // className='border-2 border-rose-500 flex p-24 justify-between items-center self-center'
            >
                <div style={{
                    display: 'flex',

                    alignItems: 'center',

                    border: '1px solid red',
                    gap: '8px'
                }}>
                    <div>Products</div>
                    <div>Solutions</div>
                    <div>Services</div>
                    <div>Help Center</div>
                    <div>Pricing</div>
                </div>
            </div>
        </div >
    );
};

export default LandingPage;