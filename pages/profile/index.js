import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faDotCircle, faEllipsisV, faEnvelope, faEnvelopeOpen, faEye, faGlobe, faPen, faPlay, faSearch, faShare, faTag } from '@fortawesome/free-solid-svg-icons'
import { faFolder, faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Countdown from 'react-countdown';

export default function Profile(props) {
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span className="countdown-span"> <span>{days} <p>Days</p></span><span>{hours} <p>Hrs</p></span><span>{minutes} <p>Mins</p></span><span>{seconds} <p>Secs</p></span></span>;
        }
    };

    return (
        <>
            <section className="profile-section">
                <div className="container">
                    <div className="row details-row mb-4">
                        <div className="col-12 col-md-4 profile-img-col pe-5 ">
                            <div className="mb-4 profile-img">
                                <img className="img-fluid" src="/images/artwork.png" />
                            </div>
                        </div>

                        <div className="col-12 col-md-8 details-col-desc">
                            <div className="details-desc">
                                <div className="details-desc-title profile-details-title">
                                    <h1>Afro-Ionic</h1>
                                    <ul>
                                        <li className="me-3"><FontAwesomeIcon icon={faEye} /> 27 Views</li>
                                        <li className="me-3"><FontAwesomeIcon icon={faHeart} /> 4 Likes</li>
                                        <li ><FontAwesomeIcon icon={faEnvelopeOpen} /> 7 NFTs</li>

                                    </ul>

                                </div>

                                <div className="details-about-track">
                                    <h5>About</h5>
                                    <p>A portrait of a African woman by mixed media artist Joseph Eze.
                                    Joseph Eze incorporates painting, sculpture, and installation techniques.
                                         His brush movements dwells on bold colors and he’s inspired to create things that will speak beyond his mouth.</p>
                                </div>

                                <div className="product-card-owner-details auction-card-owner-details mb-4 pb-2">
                                    <h5 className="mb-4 ">Social Links</h5>
                                    <ul className=" social-links d-flex align-items-center">
                                        <li>
                                            <Link href="">
                                                <a className="d-flex align-items-center animate__animated justify-content-center"><FontAwesomeIcon icon={faTwitter} /></a>
                                            </Link>
                                        </li>

                                        <li className="ms-3">
                                            <Link href="">
                                                <a className="d-flex align-items-center animate__animated justify-content-center"><FontAwesomeIcon icon={faInstagram} /></a>
                                            </Link>
                                        </li>

                                        <li className="ms-3">
                                            <Link href="">
                                                <a className="d-flex align-items-center animate__animated justify-content-center"><FontAwesomeIcon icon={faFacebookF} /></a>
                                            </Link>
                                        </li>

                                        <li className="ms-3">
                                            <Link href="">
                                                <a className="d-flex align-items-center animate__animated justify-content-center"><FontAwesomeIcon icon={faYoutube} /></a>
                                            </Link>
                                        </li>

                                        <li className="ms-3">
                                            <Link href="">
                                                <a className="d-flex align-items-center animate__animated justify-content-center"><FontAwesomeIcon icon={faGlobe} /></a>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 detail-col-tabs mt-4">
                            <div className="detail-col-tabs-content nav-tabs-col">
                                <div className=" ">
                                    <nav>
                                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-profile-tab1" data-bs-toggle="tab" data-bs-target="#nav-tabContent1" type="button" role="tab" aria-controls="nav-tabContent1" aria-selected="true">All</button>
                                            <button className="nav-link" id="nav-profile-tab1" data-bs-toggle="tab" data-bs-target="#nav-profile1" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sold</button>
                                            <button className="nav-link" id="nav-contact-tab2" data-bs-toggle="tab" data-bs-target="#nav-contact2" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Collection</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-tabContent1" role="tabpanel" aria-labelledby="nav-profile-tab1">
                                            <div className="row pt-4">
                                                <div className="col-12 col-md-4 product-card">
                                                    <div className="product-card-sub-col">
                                                        <div className="product-card-img mb-3">
                                                            <img className="img-fluid animate__animated" src="/images/latest-creation2.png" />
                                                        </div>
                                                        <div className="product-card-details d-none">
                                                            <h5 className="mb-3">Soldier</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Higher Power</p>
                                                                    <h5 className="mb-2">$3453</h5>
                                                                    <p className="mb-0"> 1.6 ETH </p>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <hr className="d-none"></hr>

                                                        <div className="product-card-owner-details d-none">
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-owner-details auction-card-owner-details">
                                                            <h5 className="mb-3">Solder</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2 text-capitalize">High Bider</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-details auction-card-details">

                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-1">Higher Power</p>
                                                                    <h5 className="mb-1">$3453</h5>
                                                                    <p className="mb-0">1.6 ETH  </p>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-1 text-capitalize">Auction ending in</p>
                                                                    <Countdown
                                                                        date={Date.now() + 5000000}
                                                                        renderer={renderer}
                                                                    />

                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 product-card">
                                                    <div className="product-card-sub-col">
                                                        <div className="product-card-img mb-3">
                                                            <img className="img-fluid animate__animated" src="/images/latest-creation2.png" />
                                                        </div>
                                                        <div className="product-card-details d-none">
                                                            <h5 className="mb-3">Soldier</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Higher Power</p>
                                                                    <h5 className="mb-2">$3453</h5>
                                                                    <p className="mb-0"> 1.6 ETH </p>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <hr className="d-none"></hr>

                                                        <div className="product-card-owner-details d-none">
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-owner-details auction-card-owner-details">
                                                            <h5 className="mb-3">Solder</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2 text-capitalize">High Bider</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-details auction-card-details">

                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-1">Higher Power</p>
                                                                    <h5 className="mb-1">$3453</h5>
                                                                    <p className="mb-0">1.6 ETH  </p>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-1 text-capitalize">Auction ending in</p>
                                                                    <Countdown
                                                                        date={Date.now() + 5000000}
                                                                        renderer={renderer}
                                                                    />

                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 product-card">
                                                    <div className="product-card-sub-col">
                                                        <div className="product-card-img mb-3">
                                                            <img className="img-fluid animate__animated" src="/images/latest-creation2.png" />
                                                        </div>
                                                        <div className="product-card-details">
                                                            <h5 className="mb-3">Soldier</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Higher Power</p>
                                                                    <h5 className="mb-2">$3453</h5>
                                                                    <p className="mb-0"> 1.6 ETH </p>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <hr className=""></hr>

                                                        <div className="product-card-owner-details">
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-owner-details auction-card-owner-details d-none">
                                                            <h5 className="mb-3">Solder</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2 text-capitalize">High Bider</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-details auction-card-details d-none">

                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-1">Higher Power</p>
                                                                    <h5 className="mb-1">$3453</h5>
                                                                    <p className="mb-0">1.6 ETH  </p>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-1 text-capitalize">Auction ending in</p>
                                                                    <Countdown
                                                                        date={Date.now() + 5000000}
                                                                        renderer={renderer}
                                                                    />

                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 product-card">
                                                    <div className="product-card-sub-col">
                                                        <div className="product-card-img mb-3">
                                                            <img className="img-fluid animate__animated" src="/images/latest-creation2.png" />
                                                        </div>
                                                        <div className="product-card-details">
                                                            <h5 className="mb-3">Soldier</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Higher Power</p>
                                                                    <h5 className="mb-2">$3453</h5>
                                                                    <p className="mb-0"> 1.6 ETH </p>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <hr className=""></hr>

                                                        <div className="product-card-owner-details">
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-owner-details auction-card-owner-details d-none">
                                                            <h5 className="mb-3">Solder</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2 text-capitalize">High Bider</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-details auction-card-details d-none">

                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-1">Higher Power</p>
                                                                    <h5 className="mb-1">$3453</h5>
                                                                    <p className="mb-0">1.6 ETH  </p>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-1 text-capitalize">Auction ending in</p>
                                                                    <Countdown
                                                                        date={Date.now() + 5000000}
                                                                        renderer={renderer}
                                                                    />

                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 product-card">
                                                    <div className="product-card-sub-col">
                                                        <div className="product-card-img mb-3">
                                                            <img className="img-fluid animate__animated" src="/images/latest-creation2.png" />
                                                        </div>
                                                        <div className="product-card-details">
                                                            <h5 className="mb-3">Soldier</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Higher Power</p>
                                                                    <h5 className="mb-2">$3453</h5>
                                                                    <p className="mb-0"> 1.6 ETH </p>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <hr className=""></hr>

                                                        <div className="product-card-owner-details">
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-owner-details auction-card-owner-details d-none">
                                                            <h5 className="mb-3">Solder</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2 text-capitalize">High Bider</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-details auction-card-details d-none">

                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-1">Higher Power</p>
                                                                    <h5 className="mb-1">$3453</h5>
                                                                    <p className="mb-0">1.6 ETH  </p>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-1 text-capitalize">Auction ending in</p>
                                                                    <Countdown
                                                                        date={Date.now() + 5000000}
                                                                        renderer={renderer}
                                                                    />

                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 product-card">
                                                    <div className="product-card-sub-col">
                                                        <div className="product-card-img mb-3">
                                                            <img className="img-fluid animate__animated" src="/images/latest-creation2.png" />
                                                        </div>
                                                        <div className="product-card-details">
                                                            <h5 className="mb-3">Soldier</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Higher Power</p>
                                                                    <h5 className="mb-2">$3453</h5>
                                                                    <p className="mb-0"> 1.6 ETH </p>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <hr className=""></hr>

                                                        <div className="product-card-owner-details">
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-owner-details auction-card-owner-details d-none">
                                                            <h5 className="mb-3">Solder</h5>
                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-2">Creator</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-2 text-capitalize">High Bider</p>
                                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="product-card-details auction-card-details d-none">

                                                            <ul className="d-flex align-items-center justify-content-between">
                                                                <li>
                                                                    <p className="mb-1">Higher Power</p>
                                                                    <h5 className="mb-1">$3453</h5>
                                                                    <p className="mb-0">1.6 ETH  </p>
                                                                </li>

                                                                <li>
                                                                    <p className="mb-1 text-capitalize">Auction ending in</p>
                                                                    <Countdown
                                                                        date={Date.now() + 5000000}
                                                                        renderer={renderer}
                                                                    />

                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="nav-profile1" role="tabpanel" aria-labelledby="nav-profile-tab1">
                                            
                                        </div>
                                        <div className="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab2">

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
