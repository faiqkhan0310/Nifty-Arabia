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
                    <div className="row">
                        <div className="col-12  text-center mb-5 text-capitalize marketplace-title">
                            <h1>blog</h1>
                        </div>

                        <div className="col-12 col-md-4 product-card mb-4">
                            <div className="product-card-sub-col blog-card">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation1.png" />
                                </div>
                                <div className="product-card-details ">
                                    <h5 className="mb-2">Soldier</h5>
                                    <p>Weekly introduction to new artists on our NFT Marketplace Nifty Arabia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 product-card mb-4">
                            <div className="product-card-sub-col blog-card">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation1.png" />
                                </div>
                                <div className="product-card-details ">
                                    <h5 className="mb-2">Soldier</h5>
                                    <p>Weekly introduction to new artists on our NFT Marketplace Nifty Arabia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 product-card mb-4">
                            <div className="product-card-sub-col blog-card">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation1.png" />
                                </div>
                                <div className="product-card-details ">
                                    <h5 className="mb-2">Soldier</h5>
                                    <p>Weekly introduction to new artists on our NFT Marketplace Nifty Arabia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 product-card mb-4">
                            <div className="product-card-sub-col blog-card">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation1.png" />
                                </div>
                                <div className="product-card-details ">
                                    <h5 className="mb-2">Soldier</h5>
                                    <p>Weekly introduction to new artists on our NFT Marketplace Nifty Arabia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 product-card mb-4">
                            <div className="product-card-sub-col blog-card">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation1.png" />
                                </div>
                                <div className="product-card-details ">
                                    <h5 className="mb-2">Soldier</h5>
                                    <p>Weekly introduction to new artists on our NFT Marketplace Nifty Arabia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 product-card mb-4">
                            <div className="product-card-sub-col blog-card">
                                <div className="product-card-img mb-3">
                                    <img className="img-fluid animate__animated" src="/images/latest-creation1.png" />
                                </div>
                                <div className="product-card-details ">
                                    <h5 className="mb-2">Soldier</h5>
                                    <p>Weekly introduction to new artists on our NFT Marketplace Nifty Arabia.</p>
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
