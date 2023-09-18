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
          pageLinkText="branding "
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Design working process"
            subtitle="Branding"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Research and <br /> Strategy"
                subtitle="Ennovix begins by conducting thorough research to gain a deep understanding of your industry, target audience, competitors, and market trends. We analyze market dynamics, consumer preferences, and brand positioning opportunities. Based on this research, Ennovix develops a comprehensive brand strategy that aligns with your business goals. This strategy serves as a roadmap for all subsequent brand development activities."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Brand Identity Development"
                subtitle="Ennovix focuses on creating a strong and distinctive brand identity that represents your business. We start by defining your brand's core values, mission, and vision. From there, we develop key brand elements such as logos, color palettes, typography, and visual styles that reflect your brand's personality and resonate with your target audience. Ennovix ensures that the brand identity is unique, memorable, and aligned with your overall brand strategy."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Brand Application and Communication"
                subtitle="Ennovix applies it across various touchpoints to create a consistent brand experience. We design and implement the brand identity in various brand collaterals such as business cards, letterheads, packaging, and marketing materials. Ennovix ensures that all brand elements are applied consistently to maintain brand integrity and recognition."
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
                  src="/images/digital_marketing.png"
                  alt="Service"
                  className="cs-radius_15 w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
                How Can Brand Development Benefit You?
              </h2>
              <Spacing lg="50" md="30" />
              <p>
              Brand development can benefit you in several ways:
              Differentiation: Brand development helps you differentiate your business from competitors.
               It creates a unique identity and positioning that sets you apart in the market. By clearly
               defining your brand's values, personality, and attributes, you establish a distinct and
               memorable presence that attracts customers and builds brand loyalty.<br/>
               Customer Connections and Emotional Attachment: Brand development enables you to build 
               emotional connections with your customers. By crafting a brand story, values, and messaging 
               that resonate with your target audience, you create an emotional attachment that goes beyond
                functional benefits. Customers who feel a connection to your brand are more likely to become
               brand advocates, engaging with your brand and promoting it to others.
               Customer Trust and Loyalty: Strong brand development fosters trust and loyalty among customers.
               When your brand consistently delivers on its promises and provides a positive customer experience,
               it builds credibility and establishes a reputation for reliability. This leads to customer loyalty,
               repeat business, and positive word-of-mouth referrals.
              </p>
              <h2 className="cs-font_50 cs-m0">Why to Choose Ennovix?</h2>
              <Spacing lg="35" md="30" />
              <p>
              Ennovix is a trusted brand development agency known for their strategic approach, 
              creative expertise, and customer-centric solutions. With a team of experienced 
              professionals, Ennovix helps businesses define and establish their unique brand identity.
              We focus on creating cohesive brand experiences across various touchpoints, ensuring 
              consistency and resonance with the target audience. By combining research, creativity,
               and measurable results, Ennovix delivers effective and impactful brand development
                solutions that drive long-term success.
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
