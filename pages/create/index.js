import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarAlt, faCopy, faDotCircle, faEllipsisV, faEnvelope, faEye, faLocationArrow, faMapMarkedAlt, faMapMarker, faMarker, faPen, faPlay, faSearch, faSearchLocation, faShare, faTag } from '@fortawesome/free-solid-svg-icons'
import { faFolder, faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'


export default function Create() {
    return (
        <>
            <section className="login-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            <h1>Create</h1>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 mx-auto  mb-5 login-col create-col">
                            <div className=" create-col-form">
                                <div className="login-uploadimg">
                                    <span className="d-flex flex-wrap text-center create-upload-img align-items-center justify-content-center">
                                        <div className="input-group mb-3 opacity-0">
                                            <input type="file" className="form-control" id="inputGroupFile02" />
                                        </div>
                                        <label className="input-group-text btn" htmlFor="inputGroupFile02">Upload Now</label>
                                        <p className="w-100 mt-3">Atleast 512 X 512 px PNG or JPG file.</p>
                                    </span>
                                </div>

                                <form>

                                    <div className="form-group ">
                                        <label className="form-label">NFT Name</label>
                                        <input type="text" className="form-control" placeholder="Enter NFTs Name" />
                                    </div>

                                    <div className="form-group ">
                                        <label className="form-label">Cetagory</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option defaultValue>Select Cetagory</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div className="form-group text-area">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Brief description for your NFT."></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Type</label>
                                        <nav>
                                            <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                                <button className="active btn me-4" id="nav-profile-tab1" data-bs-toggle="tab" data-bs-target="#nav-tabContent1" type="button" role="tab" aria-controls="nav-tabContent1" aria-selected="true">
                                                    <img className="img-fluid" src="./images/tag-g.png"></img>
                                                    <img className="img-fluid d-none" src="./images/tag.png"></img>
                                                Sale
                                                </button>
                                                <button className="btn" id="nav-profile-tab1" data-bs-toggle="tab" data-bs-target="#nav-profile1" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                    <img className="img-fluid" src="./images/auction.png"></img>
                                                    <img className="img-fluid d-none" src="./images/auction-black.png"></img>
                                                Auction
                                                </button>
                                            </div>
                                        </nav>
                                    </div>

                                    <div className="form-group">
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-tabContent1" role="tabpanel" aria-labelledby="nav-profile-tab1">

                                                <div className="form-group nft-price-input priceIn-dollar">
                                                    <label className="form-label">NFT Price</label>
                                                    <input type="number" className="form-control" placeholder="Enter NFTs Price" />
                                                    <span className=" pt-1 pb-1"><img src="/images/eth.png"></img> ETH</span>
                                                </div>

                                                <div className="form-group priceIn-dollar">
                                                    <input type="number" className="form-control" placeholder="0.00" />
                                                    <span className=" pt-1 pb-1"><img src="/images/dollar.png"></img> USD</span>
                                                </div>

                                            </div>

                                            <div className="tab-pane fade" id="nav-profile1" role="tabpanel" aria-labelledby="nav-profile-tab1">

                                            </div>

                                        </div>


                                    </div>


                                    <div className="form-group ">
                                        <label className="form-label">Royalties</label>
                                        <input type="text" className="form-control" placeholder="Enter Royalties" />
                                    </div>


                                    <div className="d-flex justify-content-between service-fee-col justify-between">
                                        <div className="text-sm font-medium  mb-4 md:mb-0 ">
                                            <p>Service Fee</p>
                                            <p>You'll recieve</p>
                                        </div>
                                        <div className="text-sm font-medium  font-xl mb-4 md:mb-0">
                                            <p className="text-end">25%</p>
                                            <p>0.00 ETH</p>
                                        </div>
                                    </div>

                                    <button type="button" className="btn d-block w-100 animate__animated"> Create</button>

                                </form>

                            </div>




                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
