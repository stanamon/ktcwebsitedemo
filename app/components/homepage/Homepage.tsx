import React from "react";
import Link from "next/link";
import Image from "next/image";
import Smoothscroll from "../../utility/SmoothScroll";

const Homepage = () => {
    return (
        <div className="container">
            <Smoothscroll>
                {/* Content start  */}
                <div className="contentlayer">
                    <section className="pagesection flexcenter" style={{backgroundColor:"black"}}>
                        <Link href="/pages/SampleA" style={{color:"white"}}>
                            <h1>Sample1</h1>
                        </Link>
                        <Link href="/pages/SampleB" style={{color:"white"}}>
                            <h1>Sample2</h1>
                        </Link>
                        <Link href="/pages/SampleC" style={{color:"white"}}>
                            <h1>Sample3</h1>
                        </Link>
                    </section>
                </div>
            </Smoothscroll>
        </div>
    );
}
export default Homepage;