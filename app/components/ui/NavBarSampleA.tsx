import React from 'react';
import Link from 'next/link';
const NavBarSampleA = () => {
    return (
        <div className='navbarA'>
            <div></div>
            <div></div>
            <div>
                <Link href='/SampleA/page' style={{textDecoration:'none'}}><h1 className='navtxt'>Link1</h1></Link>
            </div>
            <div>
                <Link href='/SampleA/page' style={{textDecoration:'none'}}><h1 className='navtxt'>Link1</h1></Link>
            </div>
            <div>
                <Link href='/SampleA/page' style={{textDecoration:'none'}}><h1 className='navtxt'>Link1</h1></Link>
            </div>
        </div>
    );
}
export default NavBarSampleA;