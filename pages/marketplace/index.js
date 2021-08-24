
import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faDotCircle, faEllipsisV, faEnvelope, faEye, faPen, faPlay, faSearch, faShare, faTag } from '@fortawesome/free-solid-svg-icons'
import { faFolder, faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

import Countdown from 'react-countdown';


export default function MarketPlace(props) {

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
            <section className="marketplace-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12  text-center text-capitalize marketplace-title">
                            <h1>marketplace</h1>
                        </div>

                        <div className="col-12 marketplace-col">
                            <div className="row">
                                <div className="col-12 main-title-col pt-5">
                                    <div className="explore-filter-col w-100 d-flex align-items-center justify-content-between">
                                        <span>
                                            <div className="search-input me-3">
                                                <input type="text" className="form-control" placeholder="Search items, collections, and..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <FontAwesomeIcon icon={faSearch} />
                                            </div>
                                        </span>

                                        <select className="form-select me-3" aria-label="Default select example">
                                            <option defaultValue disabled>All</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>

                                        <select className="form-select me-3" aria-label="Default select example">
                                            <option defaultValue disabled>Latest</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                        <select className="form-select me-3" aria-label="Default select example">
                                            <option defaultValue disabled>Edition</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                        <select className="form-select me-3" aria-label="Default select example">
                                            <option defaultValue disabled>Cetagory</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                        <select className="form-select me-3" aria-label="Default select example">
                                            <option defaultValue disabled>Type</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>

                                        <select className="form-select" aria-label="Default select example">
                                            <option defaultValue disabled>Price</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 product-card">
                                    <div className="product-card-sub-col">
                                        <div className="product-card-img mb-3">
                                            <img className="img-fluid animate__animated" src="/images/latest-creation1.png" />
                                        </div>
                                        <div className="product-card-details ">
                                            <h5 className="mb-3">Soldier</h5>
                                            <ul className="d-flex align-items-center justify-content-between">
                                                <li>
                                                    <p className="mb-2">Higher Power</p>
                                                    <h5 className="mb-2">$3453  </h5>
                                                    <p className="mb-0">1.6 ETH </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <hr></hr>

                                        <div className="product-card-owner-details ">
                                            <ul className="d-flex align-items-center justify-content-between">
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
                                                    <h5 className="mb-1">$3453 </h5>
                                                    <p className="mb-0">1.6 ETH </p>
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
                                            <img className="img-fluid animate__animated" src="/images/latest-creation3.png" />
                                        </div>
                                        <div className="product-card-details ">
                                            <h5 className="mb-3">Soldier</h5>
                                            <ul className="d-flex align-items-center justify-content-between">
                                                <li>
                                                    <p className="mb-2">Higher Power</p>
                                                    <h5 className="mb-2">$3453</h5>
                                                    <p className="mb-0"> 1.6 ETH </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <hr></hr>

                                        <div className="product-card-owner-details ">
                                            <ul className="d-flex align-items-center justify-content-between">
                                                <li>
                                                    <p className="mb-2">Creator</p>
                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                </li>

                                                <li>
                                                    <p className="mb-2">Owner</p>
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
                                            <img className="img-fluid animate__animated" src="/images/feature-drop.png" />
                                        </div>
                                        <div className="product-card-details d-none">
                                            <h5 className="mb-3">Soldier</h5>
                                            <ul className="d-flex align-items-center justify-content-between">
                                                <li>
                                                    <p className="mb-2">Higher Power</p>
                                                    <h5 className="mb-2">$3453</h5>
                                                    <p className="mb-0">1.6 ETH </p>
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
                                                    <h5 className="mb-1">$3453 </h5>
                                                    <p className="mb-0">1.6 ETH </p>
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
                                            <img className="img-fluid animate__animated" src="/images/feature-drop2.png" />
                                        </div>
                                        <div className="product-card-details ">
                                            <h5 className="mb-3">Soldier</h5>
                                            <ul className="d-flex align-items-center justify-content-between">
                                                <li>
                                                    <p className="mb-2">Higher Power</p>
                                                    <h5 className="mb-2">$3453 </h5>
                                                    <p className="mb-0">1.6 ETH </p>
                                                </li>

                                                <li>
                                                    <p className="mb-2 text-capitalize">last sale price</p>
                                                    <h5 className="mb-2">$3453 </h5>
                                                    <p className="mb-0">1.6 ETH </p>
                                                </li>

                                            </ul>
                                        </div>

                                        <hr></hr>

                                        <div className="product-card-owner-details ">
                                            <ul className="d-flex align-items-center justify-content-between">
                                                <li>
                                                    <p className="mb-2">Creator</p>
                                                    <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2">@ Coldplay</small></span>
                                                </li>

                                                <li>
                                                    <p className="mb-2">Owner</p>
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
                                                    <h5 className="mb-1">$3453 </h5>
                                                    <p className="mb-0"> 1.6 ETH </p>
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
                                            <img className="img-fluid animate__animated" src="/images/feature-drop3.png" />
                                        </div>
                                        <div className="product-card-details ">
                                            <h5 className="mb-3">Soldier</h5>
                                            <ul className="d-flex align-items-center justify-content-between">
                                                <li>
                                                    <p className="mb-2">Higher Power</p>
                                                    <h5 className="mb-2">$3453</h5>
                                                    <p className="mb-0">1.6 ETH</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <hr></hr>

                                        <div className="product-card-owner-details ">
                                            <ul className="d-flex align-items-center justify-content-between">
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
                                                    <p className="mb-0">1.6 ETH</p>
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

                        <div className="col-12 text-center  mb-5 pt-5 ">
                        <Link href="">
                            <a>View All</a>
                        </Link>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}
