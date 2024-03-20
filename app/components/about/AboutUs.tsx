import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div>
            <Link href="/pages/Home">
               <h1>Home</h1> 
            </Link>
            <h1>About Us Content</h1>
        </div>
    );
}
export default AboutUs;