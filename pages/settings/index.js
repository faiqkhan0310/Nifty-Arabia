import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faDotCircle, faEllipsisV, faEnvelope, faEye, faPen, faPlay, faSearch, faShare, faTag } from '@fortawesome/free-solid-svg-icons'
import { faFolder, faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'


export default function Settings(props) {
    return (
        <>
            <section className="details-section">
                <div className="container">


                    <div className="row">
                        <div className="col-12 ">
                            <h1 className="text-center mb-5 ">Settings</h1>
                            <p>Here you can edit your profile, change your photo, connect social accounts, and manage your card details.</p>
                        </div>
                        <div className="col-12 detail-col-tabs mt-4">
                            <div className="detail-col-tabs-content nav-tabs-col">
                                <div className=" ">
                                    <nav>
                                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-profile-tab1" data-bs-toggle="tab" data-bs-target="#nav-tabContent1" type="button" role="tab" aria-controls="nav-tabContent1" aria-selected="true">Edit Profile</button>
                                            <button className="nav-link" id="nav-profile-tab1" data-bs-toggle="tab" data-bs-target="#nav-profile1" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Card Details</button>
                                            <button className="nav-link" id="nav-contact-tab2" data-bs-toggle="tab" data-bs-target="#nav-contact2" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Social</button>
                                            <button className="nav-link" id="nav-contact-tab3" data-bs-toggle="tab" data-bs-target="#nav-contact3" type="button" role="tab" aria-controls="nav-contact3" aria-selected="false">Collection</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-tabContent1" role="tabpanel" aria-labelledby="nav-profile-tab1">
                                            <div className="row pt-4">
                                                <div className="col-12 col-md-6 profile-img-uploader text-center d-flex align-items-center justify-content-between">
                                                    <div className="login-uploadimg ms-0 ">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                            <Link href="">
                                                                <a className="d-flex align-items-center justify-content-center">
                                                                    <FontAwesomeIcon icon={faPen} />
                                                                </a>
                                                            </Link>
                                                        </span>
                                                    </div>

                                                    <div className="upload-btn-col banner-desc text-center ">
                                                        <div className="banner-btn mb-3 d-flex align-items-center justify-content-between">
                                                            <a className="btn animate__animated  me-2">Upload Photo</a>
                                                            <a className="btn  animate__animated Listen-Now-btn">Remove</a>
                                                        </div>
                                                        <p>Atleast 512 X 512 px PNG or JPG file</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 col-md-6 setting-form-col ">
                                                    <form>
                                                        <div className="form-group ">
                                                            <label className="form-label">Full Name</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>

                                                        <div className="form-group ">
                                                            <label className="form-label">User Name</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>

                                                        <div className="form-group ">
                                                            <label className="form-label">Email Address</label>
                                                            <input type="email" className="form-control" placeholder="" />
                                                        </div>


                                                    </form>

                                                </div>

                                                <div className="col-12 col-md-6 setting-form-col ps-5">
                                                    <form>
                                                        <div className="form-group text-area">
                                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea <small>(Maximum 60 Words)</small></label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="tab-pane fade" id="nav-profile1" role="tabpanel" aria-labelledby="nav-profile-tab1">

                                        </div>
                                        <div className="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab2">

                                        </div>
                                        <div className="tab-pane fade" id="nav-contact3" role="tabpanel" aria-labelledby="nav-contact-tab3">

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
