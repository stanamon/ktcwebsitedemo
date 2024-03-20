import React from 'react';
import Link from 'next/link';

const Magazine = () => {
    return (
        <div>
            <Link href="/pages/Home">
               <h1>Home</h1> 
            </Link>
            <h1>Magazine</h1>
        </div>
    );
}

export default Magazine;