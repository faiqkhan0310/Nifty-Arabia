import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarAlt, faCopy, faDotCircle, faEllipsisV, faEnvelope, faEye, faLocationArrow, faMapMarkedAlt, faMapMarker, faMarker, faPen, faPlay, faSearch, faSearchLocation, faShare, faTag } from '@fortawesome/free-solid-svg-icons'
import { faFolder, faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'


export default function Exhibitions(props) {
    return (
        <>
            <section className="details-section">
                <div className="container">
                    <div className="col-12  text-center mb-5 text-capitalize marketplace-title">
                        <h1>exhibitions</h1>
                    </div>

                    <div className="row details-row mb-5">
                        <div className="col-12 col-md-7 details-col  ps-0">
                            <div className="product-card-img mb-4">
                                <img className="w-full" src="/images/artwork.png" />
                            </div>
                        </div>

                        <div className="col-12 col-md-5 details-col-desc ">
                            <div className="details-desc">
                                <div className="details-desc-title">
                                    <h1>Afro-Ionic</h1>
                                    <ul>
                                        <li className="me-3"><FontAwesomeIcon icon={faMapMarker} /> Creative Space</li>
                                        <li><FontAwesomeIcon icon={faCalendarAlt} /> 14-08-2021</li>
                                    </ul>
                                </div>

                                <div className="details-about-track">
                                    <p>Digital artists from Middle East and North Africa will be displaying there artworks.</p>
                                </div>

                                <div className="product-card-owner-details auction-card-owner-details mb-4 pb-2">
                                    <h5 className="mb-4">Curator</h5>
                                    <ul className="d-flex align-items-center justify-content-between">
                                        <li>
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="product-card-owner-details auction-card-owner-details mb-4 pb-2">
                                    <h5 className="mb-4">Featured Artists</h5>
                                    <ul className="d-flex align-items-center justify-content-between flex-wrap">
                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>
                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 ">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="row details-row mb-5">
                        <div className="col-12 col-md-7 details-col  ps-0">
                            <div className="product-card-img mb-4">
                                <img className="w-full" src="/images/artwork.png" />
                            </div>
                        </div>

                        <div className="col-12 col-md-5 details-col-desc ">
                            <div className="details-desc">
                                <div className="details-desc-title">
                                    <h1>Afro-Ionic</h1>
                                    <ul>
                                        <li className="me-3"><FontAwesomeIcon icon={faMapMarker} /> Creative Space</li>
                                        <li><FontAwesomeIcon icon={faCalendarAlt} /> 14-08-2021</li>
                                    </ul>
                                </div>

                                <div className="details-about-track">
                                    <p>Digital artists from Middle East and North Africa will be displaying there artworks.</p>
                                </div>

                                <div className="product-card-owner-details auction-card-owner-details mb-4 pb-2">
                                    <h5 className="mb-4">Curator</h5>
                                    <ul className="d-flex align-items-center justify-content-between">
                                        <li>
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="product-card-owner-details auction-card-owner-details mb-4 pb-2">
                                    <h5 className="mb-4">Featured Artists</h5>
                                    <ul className="d-flex align-items-center justify-content-between flex-wrap">
                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>
                                        <li className="w-50 mb-4">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
                                        </li>

                                        <li className="w-50 ">
                                            <span className="d-flex align-items-center"><Image src="/image/user-pic.png" height="40px" width="40px" /> <small className="ms-2"><b>@ Coldplay</b></small></span>
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
