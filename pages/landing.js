import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/banner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

import Countdown from 'react-countdown';


export default function Landing(props) {

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

            <section className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 banner-desc">
                            <h1>A revolutionary way to discover
                            and collect rare digital art from
                            the Middle East & North Africa</h1>

                            <div className="banner-btn mt-4">
                                <a className="btn animate__animated  me-4">Explore</a>
                                <a className="btn  animate__animated Listen-Now-btn">Create</a>
                            </div>
                        </div>

                        <div className="col-12 col-md-5 banner-desc-img-col ps-5">
                            <div className="banner-desc-img">
                                <img className="img-fluid" src="/images/banner-img.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="featured-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 main-title-col">
                            <h1><span>featured drop</span> </h1>
                            {/* <Link href="/">
                                <a >
                                    View All
                                </a>
                            </Link> */}
                        </div>
                        <div className="col-12 col-md-4 product-card">
                            <div className="product-card-sub-col">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/feature-drop.png" />
                                </div>
                                <div className="product-card-details ">
                                    <h5 className="mb-3">Soldier</h5>
                                    <ul className="d-flex align-items-center justify-content-between">
                                        <li>
                                            <p className="mb-2">Higher Power</p>
                                            <h5 className="mb-2">$3453 </h5>
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
                                            <h5 className="mb-1">1$3453 </h5>
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
                                            <p className="mb-2 capitalize">last sale price</p>
                                            <h5 className="mb-2">$3453</h5>
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
                                            <h5 className="mb-1">$3453</h5>
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
                                            <p className="mb-0">1.6 ETH </p>
                                        </li>

                                        <li>
                                            <p className="mb-2 capitalize">last sale price</p>
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
                                            <h5 className="mb-1"> $3453</h5>
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


            </section>

            <section className="live-auction-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 main-title-col">
                            <h1> <span>Top Creator</span> </h1>
                        </div>

                        <div className="col-12 col-md-4 profile-card">
                            <div className="profile-card-sub-col">
                                <Image className="coverImg animate__animated" src="/images/top-creator1cover.png" height="250px" width="450" />
                                <div className="profile-pic-col">
                                    <Image className="profile-pic animate__animated" src="/images/top-creator1.png" height="145px" width="145px" />
                                    <h5>Motorbike</h5>
                                    <p>@Leon Bridges</p>
                                </div>
                            </div>
                        </div>



                        <div className="col-12 col-md-4 profile-card">
                            <div className="profile-card-sub-col">
                                <Image className="coverImg animate__animated" src="/images/top-creator2cvr.png" height="250px" width="450" />
                                <div className="profile-pic-col">
                                    <Image className="profile-pic animate__animated" src="/images/top-creator2.png" height="145px" width="145px" />
                                    <h5>Maybe We Never Die</h5>
                                    <p>@Anderson East</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 profile-card">
                            <div className="profile-card-sub-col">
                                <Image className="coverImg animate__animated" src="/images/top-creator3cvr.png" height="250px" width="450" />
                                <div className="profile-pic-col">
                                    <Image className="profile-pic animate__animated" src="/images/top-creator3.png" height="145px" width="145px" />
                                    <h5>See The World</h5>
                                    <p>@Brett Dennen</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 main-title-col">
                        </div>
                        <div className="col-12 featured-col">
                        <div className="banner-desc-img" >
                            {/* <img className="img-fluid" src="/images/exhibition.png" /> */}
                            <div className="col-12 product-detail" style={{ backgroundImage: `url("/images/exhibition.png")` }}>
                            
                                <h1 className="text-capitalize"><span>Exhibition: </span>MENA 21</h1>
                                <p className=""><b className="mb-3 d-inline-block">Curator</b>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className="mt-2 ms-3">@Black Keys</span> </span>	</p>
                                
                                <span className="d-flex align-items-end" style={{width: "100%",display:"flex",alignItems:"flex-end"}}>
                                <p className=""><b className="mb-3 d-inline-block">Featured Artists</b>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className="mt-2 ms-3">@Black Keys</span> </span>	</p>
                                <p className="ms-4">  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className="mt-2 ms-3">@Black Keys</span> </span>	</p>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


            <section className="featured-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 main-title-col">
                            <h1><span>Latest Creations</span> </h1>
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
                                            <h5 className="mb-2">$3453 </h5>
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
                                            <h5 className="mb-1">$3453 </h5>
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



                    </div>
                </div>


            </section>


            <section className="learn-more-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 main-title-col">
                            <h1> <span>Learn more</span> </h1>
                        </div>

                        <div className="col-12 col-md-4 learn-more-card text-center">
                            <div className="learn-more-card-sub-col">
                                <h1 className="mb-5">The future<br></br> of art collecting</h1>
                                <p className="">Browse and build your collection of the world's most cutting edge Digital art</p>
                                <Link href="">
                                    <a className=" d-inline-block">Learn More {">>"}</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 learn-more-card text-center">
                            <div className="learn-more-card-sub-col">
                                <h1 className="mb-5">Pioneering art<br></br> market royalities</h1>
                                <p className=""> Artists recieve continous royalities for all secondary on their artworks forever.</p>
                                <Link href="">
                                    <a className=" d-inline-block">Learn More {">>"}</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 learn-more-card text-center">
                            <div className="learn-more-card-sub-col">
                                <h1 className="mb-5">Build<br></br> for longevity</h1>
                                <p className="">All transactions happen on-chain,
                                creating a tamper-proof record of each
artwork's history. </p>
                                <Link href="">
                                    <a className=" d-inline-block">Learn More {">>"}</a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            <section className="hot-collections-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 main-title-col">
                            <h1> <span>marketplace</span> </h1>

                            <div className="explore-filter-col">


                                <span>
                                    <div className="search-input me-3">
                                        <input type="text" className="form-control" placeholder="Search items, collections, and..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </span>

                                <select className="form-select me-3" aria-label="Default select example">
                                    <option defaultValue>All</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>

                                <select className="form-select" aria-label="Default select example">
                                    <option defaultValue>Latest</option>
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


                    <div className="col-12 text-center  mb-5 pt-5 ">
                        <Link href="">
                            <a>View All</a>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}
