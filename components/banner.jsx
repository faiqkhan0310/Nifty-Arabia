import React from "react"
// import bannerImg from "../public/images/bannerImg.jpg"
import Image from "next/image"
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export function Banner() {

    const options = {
        items: 1,
        // loop={true}
        nav: false,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,

            }
        },
    };

    return (
        <>
            <OwlCarousel {...options} className="banner-carousel">
                <div className="single-slides-item" style={{ backgroundImage: `url("/image/banner1.png")` }}>
                    <div className="container">
                        <div className="row banner-row">
                            <div className="col-12  banner-desc">

                                <h1 className="text-capitalize mb-4">Crawling Kingsnake</h1>
                                <p className="mb-5">By  <span><Image src="/image/user-pic.png" height="30px" width="30px" /> @Black Keys</span>  from album Delta Kream	</p>
                                <div className="banner-btn">
                                    <a className="btn me-4">Buy Now</a>
                                    <a className="btn Listen-Now-btn">Listen Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-slides-item" style={{ backgroundImage: `url("/image/banner2.png")` }}>
                    <div className="container">
                        <div className="row banner-row">
                            <div className="col-12  banner-desc">

                                <h1 className="text-capitalize mb-4">Crawling Kingsnake</h1>
                                <p className="mb-5">By  <span><Image src="/image/user-pic.png" height="30px" width="30px" /> @Black Keys</span>  from album Delta Kream	</p>
                                <div className="banner-btn">
                                    <a className="btn me-4">Buy Now</a>
                                    <a className="btn Listen-Now-btn">Listen Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-slides-item" style={{ backgroundImage: `url("/image/banner3.png")` }}>
                    <div className="container">
                        <div className="row banner-row">
                            <div className="col-12  banner-desc">

                                <h1 className="text-capitalize mb-4">Crawling Kingsnake</h1>
                                <p className="mb-5">By  <span><Image src="/image/user-pic.png" height="30px" width="30px" /> @Black Keys</span>  from album Delta Kream	</p>
                                <div className="banner-btn">
                                    <a className="btn me-4">Buy Now</a>
                                    <a className="btn Listen-Now-btn">Listen Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-slides-item" style={{ backgroundImage: `url("/image/banner4.png")` }}>
                    <div className="container">
                        <div className="row banner-row">
                            <div className="col-12  banner-desc">

                                <h1 className="text-capitalize mb-4">Crawling Kingsnake</h1>
                                <p className="mb-5">By  <span><Image src="/image/user-pic.png" height="30px" width="30px" /> @Black Keys</span>  from album Delta Kream	</p>
                                <div className="banner-btn">
                                    <a className="btn me-4">Buy Now</a>
                                    <a className="btn Listen-Now-btn">Listen Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>

        </>
    )
}