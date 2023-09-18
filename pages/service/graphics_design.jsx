import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import IconBox from '../../components/IconBox';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import TestimonialSlider from '../../components/Slider/TestimonialSlider';
import Spacing from '../../components/Spacing';

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
          title="Service Details "
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText="Graphics Design "
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Design working process"
            subtitle="Graphics Design"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Design Objectives and Gather Information"
                subtitle="Ennovix collaborates closely with you to gain a deep understanding of their vision, goals, target audience, and brand identity. This step helps establish clear design objectives and ensures that the design aligns with the client's needs."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Design Creation and Development"
                subtitle=" Ennovix's designers start the creative process. They explore different design concepts, create mock-ups, and develop design elements such as logos, typography, color schemes, and visual assets. "
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Finalize, Deliver, and Review"
                subtitle="Ennovix finalizes the design files and delivers them to you. This includes providing the necessary design assets and specifications for various applications, such as digital platforms. Ennovix ensures that the design files are ready for use and can be seamlessly implemented across different mediums."
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
                  src="/images/graphics_design.png"
                  alt="Service"
                  className="cs-radius_15 w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
                How Can Graphics Design Benefit You?
              </h2>
              <Spacing lg="50" md="30" />
              <p>
              Graphics design can benefit you in several ways:
              Visual Communication: Graphics design enables effective visual communication.
             By using various design elements such as typography, colors, images, and illustrations
            , graphics design helps convey messages, ideas, and information in a visually appealing 
             and easily understandable manner. Well-designed graphics can enhance comprehension, grab attention, 
             and leave a lasting impact on viewers.
             Marketing and Advertising: Graphics design is a powerful tool for marketing and advertising. 
             Eye-catching designs attract attention, make your marketing materials stand out, and increase
             the likelihood of capturing your target audience's interest. From engaging social media graphics
             to impactful print advertisements, effective graphics design helps convey your marketing messages
             effectively and persuasively.
              </p>
              <h2 className="cs-font_50 cs-m0">Why Choose Ennovix?</h2>
              <Spacing lg="35" md="30" />
              <p>
              Ennovix is a top choice for graphics design due to our customized solutions,
              creative approach, collaboration, brand consistency, timely delivery, quality assurance,
              and ongoing support. our skilled team of designers delivers high-quality designs tailored 
              to your brand, ensuring visual appeal and brand recognition. With Ennovix, you can expect 
              professional service and exceptional designs that make your brand stand out.
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
