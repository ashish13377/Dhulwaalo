import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Contacts from '../components/Contacts';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div className="body_wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dhulwaalo - Contact</title>
            </Helmet>
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Contac Us" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!" />
            <Contacts />
            <FooterTwo FooterData={FooterData} />
        </div>
    )
}
export default About;