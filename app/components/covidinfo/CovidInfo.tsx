import React from 'react';
import Link from 'next/link';

const CovidInfo = () => {
    return (
        <div>
            <Link href="/pages/Home">
               <h1>Home</h1> 
            </Link>
            <h1>Covid Content Here</h1>
        </div>
    );
}
export default CovidInfo;
