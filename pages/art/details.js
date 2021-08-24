import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faDotCircle, faEllipsisV, faEnvelope, faEye, faPen, faPlay, faSearch, faShare, faTag } from '@fortawesome/free-solid-svg-icons'
import { faFolder, faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'


export default function Details(props) {
    return (
        <>
            <section className="details-section">
                <div className="container">
                    <div className="row details-row mb-4">
                        <div className="col-12 col-md-6 details-col  ps-0">
                            <div className="product-card-img mb-4">

                                <img className="w-full" src="/images/artwork.png" />

                            </div>
                        </div>

                        <div className="col-12 col-md-6 details-col-desc ">
                            <div className="details-desc">
                                <div className="details-desc-title">

                                    <h1>Afro-Ionic</h1>
                                    <p> <b>Edition 1 of 1</b></p>
                                    <ul>
                                        <li className="me-3"><FontAwesomeIcon icon={faEye} /> 27 Views</li>
                                        <li><FontAwesomeIcon icon={faHeart} /> 4 Likes</li>
                                    </ul>

                                </div>



                                <div className="details-about-track">

                                    <p>A portrait of a African woman by mixed media artist Joseph Eze.
                                    Joseph Eze incorporates painting, sculpture, and installation techniques.
                                         His brush movements dwells on bold colors and he’s inspired to create things that will speak beyond his mouth.</p>
                                </div>

                                <div className="product-card-owner-details auction-card-owner-details mb-4 pb-2">

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

                                <div className="product-card-details details-price">

                                    <ul className="d-flex align-items-center justify-content-between">
                                        <li>
                                            <p className="mb-0">Higher Power</p>
                                            <h2 className="mb-0">$ 3453 </h2>
                                            <p className="mb-0">1.6 ETH</p>
                                        </li>
                                        <li>
                                            <p className="mb-0">Higher Power</p>
                                            <h2 className="mb-0">$ 3453 </h2>
                                            <p className="mb-0">1.6 ETH</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="details-col-btn">
                                    <a className="btn offer-btn mb-4 animate__animated">
                                         buy now
                                    </a>
                                    <a className="btn offer-btn animate__animated">
                                    make offer
                                    </a>
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
                                            <button className="nav-link active" id="nav-profile-tab1" data-bs-toggle="tab" data-bs-target="#nav-tabContent1" type="button" role="tab" aria-controls="nav-tabContent1" aria-selected="true">Global History</button>
                                            <button className="nav-link" id="nav-profile-tab1" data-bs-toggle="tab" data-bs-target="#nav-profile1" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Edited History</button>
                                            <button className="nav-link" id="nav-contact-tab2" data-bs-toggle="tab" data-bs-target="#nav-contact2" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Market Stats</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-tabContent1" role="tabpanel" aria-labelledby="nav-profile-tab1">
                                            <div className="global-history-details">
                                                <ul>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2"><b className="d-inline-flex me-2" style={{ color: "#000" }}>@Black Keys</b> bought Afro-Ionic from</span> </span>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>@Black Keys</b></span> for  1.6ETH</span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>

                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faEnvelope} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2"><b className="d-inline-flex me-2" style={{ color: "#000" }}>@Black Keys</b> bought Afro-Ionic from</span> </span>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>@Black Keys</b></span> for  1.6ETH</span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>

                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faPen} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2"><b className="d-inline-flex me-2" style={{ color: "#000" }}>@Black Keys</b> bought Afro-Ionic from</span> </span>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>@Black Keys</b></span> for  1.6ETH</span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-profile1" role="tabpanel" aria-labelledby="nav-profile-tab1">
                                            <div className="global-history-details">
                                                <div className="col-12 d-flex align-items-center justify-content-between mb-4">
                                                    <h5><b>All History</b> </h5>

                                                    <div className="explore-filter-col">
                                                        <select className="form-select me-3" aria-label="Default select example">
                                                            <option defaultValue>Sort by</option>
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>

                                                    </div>
                                                </div>

                                                <ul>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2"><b className="d-inline-flex me-2" style={{ color: "#000" }}>@Black Keys</b> bought Afro-Ionic from</span> </span>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>@Black Keys</b></span> for  1.6ETH</span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2"><b className="d-inline-flex me-2" style={{ color: "#000" }}>@Black Keys</b> bought Afro-Ionic from</span> </span>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>@Black Keys</b></span> for  1.6ETH</span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2"><b className="d-inline-flex me-2" style={{ color: "#000" }}>@Black Keys</b> bought Afro-Ionic from</span> </span>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>@Black Keys</b></span> for  1.6ETH</span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2"><b className="d-inline-flex me-2" style={{ color: "#000" }}>@Black Keys</b> bought Afro-Ionic from</span> </span>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>@Black Keys</b></span> for  1.6ETH</span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2"><b className="d-inline-flex me-2" style={{ color: "#000" }}>@Black Keys</b> bought Afro-Ionic from</span> </span>  <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>@Black Keys</b></span> for  1.6ETH</span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab2">

                                            <div className="global-history-details">
                                                <div className="col-12 d-flex align-items-center justify-content-between mt-4 mb-4">
                                                    <h5>Market Info for All Edition of Afro-Ionic  </h5>


                                                </div>

                                                <ul>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><span className=" ms-2 me-2">Average Resale Price</span> </span> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>1 ETH = $ 52527</b></span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><span className=" ms-2 me-2">Price Change From Primary Market</span> </span> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>+ 45 %</b></span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><span className=" ms-2 me-2">Original Primary Market Price</span> </span> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>1 ETH</b></span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><span className=" ms-2 me-2">Highest Active Bid</span> </span> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>2.3 ETH</b></span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><span className=" ms-2 me-2">Lowest Active Ask</span> </span> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>0.57 ETH</b></span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>

                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><span className=" ms-2 me-2">Secodary Market Volume</span> </span> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>$12345</b></span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><span className=" ms-2 me-2">Date Created</span> </span> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>14 /8/2021</b></span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><span className=" ms-2 me-2">Number of Primary Sales</span> </span> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>124</b></span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>
                                                    <li className="d-flex align-items-center justify-content-between" style={{ color: "#767676" }}>
                                                        <p className=" d-flex align-items-center"> <FontAwesomeIcon icon={faTag} className="me-3" style={{ color: "#767676" }} />  <span className="d-flex align-items-center"><span className=" ms-2 me-2">Number of Secondary Sales</span> </span> <span className=" ms-2 me-2" style={{ color: "#000" }}><b>89</b></span>	</p>
                                                        <p> 3 min ago</p>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="main-title-col">
                            <h1>More From Creator</h1>
                            <Link href="#">
                                <a>View All</a>
                            </Link>
                        </div>

                        <div className="col-12 col-md-3 product-card">
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
                            </div>
                        </div>

                        <div className="col-12 col-md-3 product-card">
                            <div className="product-card-sub-col">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation2.png" />
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
                            </div>
                        </div>

                        <div className="col-12 col-md-3 product-card">
                            <div className="product-card-sub-col">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation3.png" />
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
                            </div>
                        </div>

                        <div className="col-12 col-md-3 product-card">
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
                            </div>
                        </div>


                        <div className="main-title-col">
                            <h1>You May Also Like</h1>
                            <Link href="#">
                                <a>View All</a>
                            </Link>
                        </div>

                        <div className="col-12 col-md-3 product-card">
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
                            </div>
                        </div>

                        <div className="col-12 col-md-3 product-card">
                            <div className="product-card-sub-col">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation2.png" />
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
                            </div>
                        </div>

                        <div className="col-12 col-md-3 product-card">
                            <div className="product-card-sub-col">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation3.png" />
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
                            </div>
                        </div>

                        <div className="col-12 col-md-3 product-card">
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
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
