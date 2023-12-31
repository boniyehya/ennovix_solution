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
        <link rel="icon" href="/favicon.jpg" type="image/jpg" />
      </Head>
      <Layout>
        <PageHeading
          title="Service Details"
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText="Website-Development"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Development working process"
            subtitle="Website Development"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Planning and Design"
                subtitle="Ennovix collaborates closely with you to gather requirements, create a blueprint, and design the visual elements of the website.  Ennovix creates a roadmap for the project, ensuring an intuitive user experience and a visually appealing interface."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Development"
                subtitle="Ennovix translates the planning and design concepts into a fully functional website. Skilled developers use programming languages, frameworks, and databases to build the front-end and back-end components of the website. "
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Deployment"
                subtitle="where Ennovix takes the completed website and makes it live and accessible to the intended audience. During deployment, Ennovix sets up the hosting environment, configures necessary settings, and ensures the website is ready to go live."
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
                  src="/images/web_development.png"
                  alt="Service"
                  className="cs-radius_15 w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <h2 className="cs-font_50 cs-m0">
                How Can Website Development Benefit You?
              </h2>
              <Spacing lg="20" md="30" />
              <p>
                whether you are a business owner, an individual Here are some of
                the most common benefits: Increased visibility and reach. A
                well-designed and optimized website can help you reach a wider
                audience, both locally and globally. This can lead to more
                traffic, leads, and sales. Improved brand awareness. A
                professional website can help you establish your brand and build
                trust with potential customers. It can also help you communicate
                your unique value proposition and why you are the best choice
                for them.<br />Enhanced customer service. A website can be a
                great way to provide customer service 24/7. You can offer FAQs,
                live chat, and other resources to help customers find the
                information they need. Streamlined business operations. A
                website can help you automate many of your business processes,
                such as order processing, payments, and customer support. This
                can free up your time so you can focus on other aspects of your
                business.
              </p>
              <h2 className="cs-font_50 cs-m0">Why to Choose Ennovix?</h2>
              <Spacing lg="35" md="30" />
              <p>
                1 Responsive and Mobile Optimization:<br/>
              In today's mobile-driven world, having a responsive website is crucial.
               Ennovix ensures that your website is fully optimized for various devices 
               and screen sizes, providing a seamless experience across desktops, tablets, and smartphones.
               A responsive website not only enhances user experience but also improves search engine rankings,
               helping you reach a wider audience.<br/>
               2. SEO-Friendly Approach: <br/>
                We understand the importance of search engine optimization (SEO) 
                in driving organic traffic to your website. Our team incorporates 
                SEO best practices during the development process, ensuring that your
                 website is optimized for search engines. We focus on factors like site structure, 
                 page loading speed, meta tags, and keyword optimization to improve your website's
                  visibility and rankings in search engine results. <br/>
                3. Scalability and Future-Proofing:<br/>
                 As your business grows, your website needs to grow with it.
                 Ennovix builds scalable websites that can easily accommodate
                 your evolving needs. We use flexible frameworks and technologies 
                 that allow for future expansion and integration of new features or functionalities.
                 Our goal is to provide you with a website that can adapt and scale as your business expands.<br/>
                 Choosing Ennovix for your website development means partnering with a team of experts 
                 who are dedicated to creating a customized, user-friendly, and future-proof website
                  that helps you achieve your business objectives. Contact us today to discuss your website needs and 
                  let us bring your vision to life.
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
