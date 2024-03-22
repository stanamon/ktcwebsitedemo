import React, { Suspense } from 'react';
import Image from 'next/image';
import NavBarSampleA from '../../components/ui/NavBarSampleA';
import Link from 'next/link';

export default function page() {
    return(
        <div className='contains'>
            <Suspense fallback={<div>Loading...</div>}>
            <div className='heroA'>
                <div className='flexpage'>
                    <Image
                        src='/KTClogoAlphaII.png'
                        alt='heroA'
                        width={400}
                        height={245}
                        style={{alignSelf: 'center', justifySelf: 'center'}}
                    />
                </div>            
                <div className='ktcslogan'>
                    <h1>Self-Sufficiency</h1>
                    <h1>Self-Determination</h1>
                    <h1>Empowerment</h1>
                </div>
            </div>
            <NavBarSampleA/>
            <div className='pagesection'>
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
                <div className='contentcell'>
                    <h1>Section 4</h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa 
                        exercitationem pariatur expedita quas, excepturi repudiandae doloremque 
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
                    <div className='contentcell'>
                        <h1>Section 5</h1>
                        <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa 
                        exercitationem pariatur expedita quas, excepturi repudiandae doloremque 
                        </h2> 
                    </div>
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
