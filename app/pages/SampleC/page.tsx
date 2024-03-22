import React, { Suspense } from 'react';
import Image from 'next/image';
import NavBarSampleB from '../../components/ui/NavBarSampleB';
import Link from 'next/link';

export default function page() {
    return(
        <div className='appcontainC'>
        <Suspense fallback={<div>Loading...</div>}>
            <div className='logopanelc'>
                <NavBarSampleB/>
            </div>
            <div className='pagesection'>
                <Image
                    src='/KTClogoAlphaII.png'
                    alt='heroA'
                    width={500}
                    height={305}
                />
                <div className='ktcnameC'>
                    <h1>Keewatin Tribal Council</h1>
                </div>
            </div>

            <div className='pagesection'>
                <div className='gridrow1fr1fr'>
                    <Image
                        src='/Eaglerapids2020.jpg'
                        alt='heroA'
                        width={400}
                        height={245}
                        style={{alignSelf: 'center', justifySelf: 'center'}}
                    />
                    <div className='contentbinc'>
                        <h1>Self-Sufficiency</h1>
                        <h1>Self-Determination</h1>
                        <h1>Empowerment</h1>
                    </div>
                </div>
            </div>
            <div className='pagesection'>
                <div className='contentcellc'>
                    <h1>Section D</h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa 
                        exercitationem pariatur expedita quas, excepturi repudiandae doloremque 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa 
                        exercitationem pariatur expedita quas, excepturi repudiandae doloremque 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa 
                        exercitationem pariatur expedita quas, excepturi repudiandae doloremque 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa 
                       
                    </h2>
                    <button>Button</button> 
                </div>
            </div>
            <div className='pagesection'>
                <div className='gridrow1fr2fr'>
                    <div className='sideselect'>
                        <div>
                            <h3>Section</h3>
                            <Image
                                src='/KTClogoAlphaII.png'
                                alt='heroA'
                                width={80}
                                height={45}
                            />
                        </div>
                        <div>
                            <h3>Section</h3>
                            <Image
                                src='/KTClogoAlphaII.png'
                                alt='heroA'
                                width={80}
                                height={45}
                            />
                        </div>
                        <div>
                            <h3>Section</h3>
                            <Image
                                src='/KTClogoAlphaII.png'
                                alt='heroA'
                                width={80}
                                height={45}
                            />
                        </div>
                    </div>
                    <div>
                        <h1>Section 5</h1>
                        <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa 
                        exercitationem pariatur expedita quas, excepturi repudiandae doloremque 
                        </h2> 
                    </div>
                </div>
            </div>
            <footer>
                <div className='gridrow1fr2fr' style={{backgroundColor:"lightblue"}}>
                    <div>
                        <h3>Section</h3>
                       
                    </div>
                    <div>
                        <h3>Section</h3>
                       
                    </div>
                </div>
            </footer>
        </Suspense>
        </div>
    );
};
