import React, {Component} from 'react';
import SeoTitle from '../components/Title/SeoTitle';
import Testimonial from '../components/Testimonial/Testimonial';


class Subscribe extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <React.Fragment>
                <section className="seo_subscribe_area">
                    <div className="overlay_img"></div>
                    <div className="cloud_img"><img src={require('../img/seo/cloud.png')} alt=""/></div>
                    <div className="container">
                        <SeoTitle Title="Check your Website’s SEO!" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikeyWhy gormless, pear shaped.!"/>
                        <form action="#" className="row seo_subscribe_form">
                            <div className="input-group col-lg-5 col-md-5 col-sm-6">
                                <input type="url" name="website" id="website" placeholder="Web URL" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-5 col-md-4 col-sm-6">
                                <input type="email" name="email" id="emails" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-2 col-md-3 col-sm-12">
                                <input type="submit" name="submit" value="Check" className="check-btn"/>
                            </div>
                        </form>
                    </div>
                </section>
                <Testimonial tClass="testimonial_area sec_pad" FooterData={FooterData}/>
                <section className="seo_fact_area sec_pad">
                    <div className="home_bubble">
                        <div className="bubble b_one"></div>
                        <div className="bubble b_three"></div>
                        <div className="bubble b_four"></div>
                        <div className="bubble b_six"></div>
                        <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src="img/seo/triangle_one.png" alt=""/></div>
                    </div>
                    <div className="container">
                        <SeoTitle Title='Over 1200+ completed work & Still counting.'/>
                        <div className="seo_fact_info">
                            <div className="seo_fact_item">
                                <div className="text">
                                    <div className="counter one">693</div>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="seo_fact_item">
                                <div className="text">
                                    <div className="counter two">276</div>
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="seo_fact_item">
                                <div className="text">
                                    <div className="counter three">102</div>
                                    <p>SEO Winners</p>
                                </div>
                            </div>
                            <div className="seo_fact_item last">
                                <div className="text">
                                    <div className="counter four">93</div>
                                    <p>Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <section className="seo_call_to_action_area sec_pad">
                    <div className="container">
                        <div className="seo_call_action_text">
                            <h2>Ready to get started?<br/> lt's fast, free and very easy!</h2>
                            <a href="/" className="about_btn">Get a free Estimate</a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Subscribe;