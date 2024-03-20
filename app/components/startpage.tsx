'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const StartPage = () => {
    return (
        <>
            <div className='flexpage'>
                <Image
                    src="/KTClogoAlphaII.png"
                    alt="KTClogo"
                    width={323}
                    height={182}
                    priority={true}
                    style={{objectFit: "contain"}}
                    quality={100}
                />
                <h1>Keewatin Tribal Council Inc.</h1>
                <Link href="/pages/Home">
                    <h1>Home</h1> 
                </Link>
            </div>
        </>
    );
};  
export default StartPage;