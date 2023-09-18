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
          title="Service Details"
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText="UI/UX"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Design working process"
            subtitle="UI/UX Design"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Sketching"
                subtitle="Ennovix designers often start by sketching out rough ideas on paper or digitally. Sketching allows them to quickly explore different layout possibilities, user flows, and visual concepts. It's a creative brainstorming process that helps generate initial design concepts."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Wireframing"
                subtitle="Ennovix designers move on to wireframing. Wireframes are low-fidelity representations of the website or application's structure, layout, and content placement. They focus on the overall information architecture, user flow, and hierarchy of elements, without delving into specific visual details. Wireframes act as a blueprint for the design and serve as a guide for further development."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Prototyping"
                subtitle="Ennovix designers create interactive prototypes. Prototypes are more detailed representations of the final design, allowing stakeholders to experience the navigation, interactions, and functionality of the website or application. Prototyping helps identify usability issues, gather feedback from users, and make informed design decisions before moving on to the development phase."
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
                  src="/images/ui.png"
                  alt="Service"
                  className="cs-radius_15 w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
                How Can UI/UX Benefit You?
              </h2>
              <Spacing lg="50" md="30" />
              <p>
              UI/UX (User Interface/User Experience) design can benefit you in several ways:<br/>
              Enhanced User Satisfaction: 
              A well-designed UI/UX creates a positive user experience, making it easier and more enjoyable for users to
              navigate and interact with your website or application. This leads to increased user satisfaction and a higher
              likelihood of repeat visits and conversions.<br/>
              Brand Differentiation: A unique and memorable UI/UX design helps differentiate your brand from competitors.
              Consistent branding elements, cohesive visual aesthetics, and a distinct user experience can leave a lasting
              impression on users, increasing brand recognition and fostering a strong brand identity.<br/>
              Increased Trust and Credibility: A well-designed UI/UX instills trust and credibility in your brand.
              Users perceive a professional, polished, and user-friendly interface as a reflection of a trustworthy
              organization. Positive user experiences can build trust and encourage users to engage further with your brand.

              </p>
              <h2 className="cs-font_50 cs-m0">Why Choose Ennovix?</h2>
              <Spacing lg="35" md="30" />
              <p>
              Ennovix stands out in UI/UX design due to our expertise, user-centric approach, customized solutions,
              seamless integration with development, result-oriented focus, collaboration, reliability, and ongoing support.
              With a skilled team of designers, Ennovix creates visually appealing and intuitive user interfaces that align 
              with your goals and resonate with target audiences. We prioritize client collaboration, timely delivery,
              and ongoing support to ensure that our UI/UX designs drive positive user experiences and contribute to
               business success.
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
