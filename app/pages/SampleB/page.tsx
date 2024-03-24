import React, { Suspense } from 'react';
import Image from 'next/image';
import NavBarSampleB from '../../components/ui/NavBarSampleB';
import BKG from './../../../public/BannerIMG.jpg';
import Link from 'next/link';

export default function page() {
    return(
        <div className='appcontain'>
        <Suspense fallback={<div>Loading...</div>}>
            {/* <NavBarSampleB /> */}
            <div className='logopanelB'>
                <NavBarSampleB/>
            </div>
            <div className='pagesection'>
                <div className='layer1'>
                    <div className='imgbannerB'>
                        <Image
                            src={BKG}
                            alt='heroA'
                            fill
                            quality={100}
                        />
                    </div>
                </div>
                <div className='layer2'>
                    <div className='ktcnameB'>
                        <h1>Keewatin Tribal Council</h1>
                    </div>
                </div>
                <div className='toplayer'>
                    <div className='leftpanelB'>
                        <div className='ktclogoB'>
                            <Image
                                src='/KTClogoAlphaII.png'
                                alt='heroA'
                                width={400}
                                height={245}
                                style={{alignSelf: 'center', justifySelf: 'center'}}
                            />
                        </div>
                        <div className='ktcsloganB mgntop30'>
                            <h1>Self-Sufficiency</h1>
                            <h1>Self-Determination</h1>
                            <h1>Empowerment</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navpanelviewB'/>
            <div className='pagesection mgntop10'>
                <div className='gridrow1fr1fr'>
                    <div className='contentcell'>
                        <h1>Section 3</h1>
                        <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa 
                        exercitationem pariatur expedita quas, excepturi repudiandae doloremque 
                        </h2> 
                    </div>
                    <Image
                        src='/KTClogoAlphaII.png'
                        alt='heroA'
                        width={400}
                        height={245}
                        style={{alignSelf: 'center', justifySelf: 'center'}}
                    />
                </div>
            </div>
            <div className='pagesection'>
                
            </div>
        </Suspense>
        </div>
    );
};
