import React, { Suspense } from 'react';
import Image from 'next/image';
import NavBarSampleB from '../../components/ui/NavBarSampleB';
import Link from 'next/link';

export default function page() {
    return(
        <div className='appcontain'>
        <Suspense fallback={<div>Loading...</div>}>
            {/* <NavBarSampleB /> */}
            <div className='navbarBcon'>
            <NavBarSampleB/>
            </div>
            <div className='logo_oversize'/>
            <div className='gridrow1fr2fr'>
                <div></div>
                <div className='ktcnameB'>
                    <h1>Keewatin Tribal Council</h1>
                </div>
            </div>
            <div className='flexrow'>
                <div className='leftpanelB'>
                    <h1>side</h1>
                </div>
                <div className='ktcsloganB'>
                    <h1>Self-Sufficiency</h1>
                    <h1>Self-Determination</h1>
                    <h1>Empowerment</h1>
                </div>
            </div>
            <div className='pagesection'>
                <div className='gridrow1fr1fr'>
                    <Image
                        src='/KTClogoAlphaII.png'
                        alt='heroA'
                        width={400}
                        height={245}
                        style={{alignSelf: 'center', justifySelf: 'center'}}
                    />
                    <div className='contentcell'>
                        <h1>Section 3</h1>
                        <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa 
                        exercitationem pariatur expedita quas, excepturi repudiandae doloremque 
                        </h2> 
                    </div>
                </div>
            </div>
        </Suspense>
        </div>
    );
};
