import React, { Component } from 'react'
// import PageHelmet from '../../../component/shared/Pagehelmet'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import Content from './Content'
import Plaining from './Plaining'
import Testing from './Testing'
import WhatWeDo from './WhatWeDo'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import PageHelmet from '../../../component/shared/PageHelmet'
import Tshirt from "../WebDesigning/Tshirt"
import runningGif from "../../../Images/RunningStep.jpg"
export default class WebDevelopment extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    // pageTitle="About Us | We Digitalize Your Dreams with Our Designing Skills"
                    // description="iPower is a digital marketing firm that builds and promotes brands to turn your sites' visualizations into reality. Trust us; we are aware of the pulse of your company."
                    // keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
                    canonical= "https://www.hminnovance.com/web-development"
                />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image={runningGif}
                    title='Running Challenge'
                    previous='Home'
                    next='Walk Challenge'
                />
                {/* <!-- web design section end --> */}
                {/* <SocialButton /> */}
                <Plaining />
                <Tshirt/>
                {/* <Content /> */}
                {/* <WhatWeDo /> */}
                {/* <Testing /> */}
                <Footer />
            </>
        )
    }
}
