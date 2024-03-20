import React from 'react';
import Link from 'next/link';

const NavBarSampleC = () => {
    return (
        <div className='navbarC'>
            <Link href='/SampleA/page' style={{textDecoration:'none'}}><h1 className='navtxt'>Link1</h1></Link>
            <Link href='/SampleA/page' style={{textDecoration:'none'}}><h1 className='navtxt'>Link2</h1></Link>
            <Link href='/SampleA/page' style={{textDecoration:'none'}}><h1 className='navtxt'>Link3</h1></Link>
        </div>
    );
}
export default NavBarSampleC;