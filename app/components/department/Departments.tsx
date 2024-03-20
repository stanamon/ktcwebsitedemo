import React from 'react';
import Link from 'next/link';

const Departments = () => {
    return (
        <div>
            <Link href="/pages/Home">
               <h1>Home</h1> 
            </Link>
            <h1>Departments Content</h1>
        </div>
    );
}
export default Departments;