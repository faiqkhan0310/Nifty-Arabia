import React from "react"
import Link from "next/link";
import { faFacebookF, faTumblr, faInstagram, faTwitter,faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from "next/image"

export default function Footer() {

    return (
        <>
            <section className="footer-section">
                <div className="container">


                    <div className="row ">
                        <div className="col-6 col-md-2 footer-sub-col">
                            <h4 className="mb-4">Section 1</h4>
                            <ul>
                                <li> <Link href="/"><a className="animate__animated">Category 1</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 2</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 3</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 4</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 5</a></Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 footer-sub-col">
                            <h4 className="mb-4">Section 2</h4>
                            <ul>
                                <li> <Link href="/"><a className="animate__animated">Category 1</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 2</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 3</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 4</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 5</a></Link></li>
                            </ul>

                        </div>

                        <div className="col-6 col-md-2 footer-sub-col">
                            <h4 className="mb-4">Section 3</h4>
                            <ul>
                                <li> <Link href="/"><a className="animate__animated">Category 1</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 2</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 3</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 4</a></Link></li>
                                <li> <Link href="/"><a className="animate__animated">Category 5</a></Link></li>
                            </ul>

                        </div>


                        <div className="col-6 col-md-3 footer-sub-col">
                            <h4 className="mb-4">
                                (123) 456-7890<br></br>
                                company@domain.com
                            </h4>

                            <ul >
                                <li className="">
                                    Address
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-3 footer-sub-col text-end">
                            <span className=" footer-logo">
                            <Link href="/" >
                                <a className="animate__animated">
                                <Image src="/images/logo-footer.png"  height="51px" width="160px" />
                                </a>
                            </Link>
                            </span>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-6 col-md-6 footer-social-icon">
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a className="animate__animated">
                                            <FontAwesomeIcon icon={faFacebookF}/>
                                        </a>
                                    </Link>
                                </li>


                                <li>
                                    <Link href="/">
                                        <a className="animate__animated">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/">
                                        <a className="animate__animated">
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                        </a>
                                    </Link>
                                </li>


                            </ul>
                        </div>
                        <div className="col-6 col-md-6 text-end">
                            <p className="mb-0" style={{fontSize: "14px"}}>2021 Nifty-Arabia</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}