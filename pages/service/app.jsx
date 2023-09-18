import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import IconBox from "../../components/IconBox";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import SectionHeading from "../../components/SectionHeading";
import TestimonialSlider from "../../components/Slider/TestimonialSlider";
import Spacing from "../../components/Spacing";

export default function ServiceDetails() {
  const router = useRouter();
  const serviceId = router.query.serviceId;
  return (
    <>
      <Head>
        <title>Quality promised services - ENNOVIX</title>
        <meta name="description" content="Quality promised services - ENNOVIX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Service Details"
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText="Mobile App development"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Development working process"
            subtitle="Mobile App development"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Planning and Conceptualization"
                subtitle="Ennovix works closely with you to understand their goals, requirements, and objectives for the project. We gather information about the target audience, desired features, and functionalities of the app. Based on this information, Ennovix conducts a detailed analysis to create a comprehensive project plan, including timelines, resource allocation, and technology choices."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Development "
                subtitle="Ennovix moves on to the development phase. Skilled developers and designers collaborate to bring the conceptualized ideas to life. They leverage their expertise in coding, programming languages, and frameworks to build the app's architecture, user interface, and backend functionalities. Throughout the development process, Ennovix follows industry best practices, coding standards, and agile methodologies to ensure efficiency and maintain quality."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Deployment and Maintenance"
                subtitle="Ennovix focuses on deploying the app to the desired platforms. This typically involves preparing the app for release on app stores such as the Apple App Store or Google Play Store. Ennovix assists with the submission process, adhering to guidelines and ensuring that the app meets all necessary requirements for approval. We also conduct thorough testing to ensure the app functions properly across different devices and operating systems."
              />
              <Spacing lg="30" md="30" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="120" md="50" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/app_development.png"
                  alt="Service"
                  className="cs-radius_15 w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <h2 className="cs-font_50 cs-m0">
                How Can Mobile App Development Benefit You?
              </h2>
              <Spacing lg="50" md="30" />
              <p>
              Mobile app development can benefit you in several ways:
              Increased Reach and Accessibility: Developing a mobile app
              allows you to reach a wider audience and make your product
               or services more accessible. With the growing number of 
               smartphone users, a mobile app provides a convenient platform 
               for users to interact with your brand anytime and anywhere. 
               It expands your reach beyond traditional channels and enables 
               you to tap into the mobile-first market.<br/>
               Competitive Advantage: In many industries, having a mobile app 
               has become a standard expectation for customers. By investing in 
               mobile app development, you gain a competitive advantage over 
               businesses that have not yet embraced the mobile platform. A well
               -designed and functional app can differentiate your brand, attract
                new customers, and retain existing ones.


              </p>
              <h2 className="cs-font_50 cs-m0">Why Choose Ennovix?</h2>
              <Spacing lg="35" md="30" />
              <p>
              Ennovix is a top choice for mobile app development due to our, customized solutions,
              design focus, collaborative approach, quality assurance, timely delivery, ongoing 
             support, and commitment to client satisfaction. WE have a skilled team of developers
             who create high-quality, user-centered apps tailored to your specific needs.
             With Ennovix, you can expect a seamless development process and a successful mobile
             app that enhances your business.
              </p>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <TestimonialSlider />
        <Spacing lg="145" md="80" />
        <Div className="container cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-5 col-lg-6">
                <SectionHeading
                  title="Some pre questions and answers"
                  subtitle="FAQ’s"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-lg-6 offset-xl-1">
                <Accordion />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
