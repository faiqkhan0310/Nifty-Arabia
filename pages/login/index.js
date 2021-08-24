import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarAlt, faCopy, faDotCircle, faEllipsisV, faEnvelope, faEye, faLocationArrow, faMapMarkedAlt, faMapMarker, faMarker, faPen, faPlay, faSearch, faSearchLocation, faShare, faTag } from '@fortawesome/free-solid-svg-icons'
import { faFolder, faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'


export default function Login(props) {
    return (
        <>
            <section className="login-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            <h1>Sign In</h1>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 mx-auto login-col">
                            <div className="login-col-form">
                                <div className="login-uploadimg">
                                    <span className="d-flex align-items-center justify-content-center">
                                        <Link href="">
                                            <a className="d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon icon={faPen} />
                                            </a>
                                        </Link>
                                    </span>
                                </div>

                                <form>

                                    <div className="form-group ">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>

                                    <div className="form-group ">
                                        <label className="form-label">User Name</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>

                                    <div className="form-group text-area">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea <small>(Maximum 60 Words)</small></label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Twitter</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>


                                    <div className="form-group">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" placeholder="" />
                                    </div>

                                    <button type="button" className="btn d-block w-100 animate__animated"> Continue</button>

                                </form>

                            </div>




                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
