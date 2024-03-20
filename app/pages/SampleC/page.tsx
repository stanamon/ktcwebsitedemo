import React, { Suspense } from 'react';
import Image from 'next/image';
import NavBarSampleB from '../../components/ui/NavBarSampleB';
import Link from 'next/link';

export default function page() {
    return(
        <div className='appcontainC'>
        <Suspense fallback={<div>Loading...</div>}>
            {/* <NavBarSampleB /> */}
            <div className='navbarBcon'>
            <NavBarSampleB/>
            </div>
            <div className='logo_oversizec'/>
            <div className='gridrow1fr2fr'>
                <div></div>
                <div className='ktcnameC'>
                    <h1>Keewatin Tribal Council</h1>
                </div>
            </div>
            <div className='bannerimgc'>
                <div className='ktcslogan'>
                    <h1>Self-Sufficiency</h1>
                    <h1>Self-Determination</h1>
                    <h1>Empowerment</h1>
                </div>
            </div>
            <div className='pagesection'>
                
            </div>
        </Suspense>
        </div>
    );
};
