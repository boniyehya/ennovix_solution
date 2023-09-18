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
          pageLinkText="Digital Marketing "
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Design working process"
            subtitle="Digital Marketing"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Strategy and Planning"
                subtitle="Ennovix begins by developing a comprehensive digital marketing strategy tailored to your specific business objectives. We conduct a thorough analysis of your target audience, market trends, and competitors to identify opportunities and define a roadmap for success. This includes determining the most effective digital marketing channels, messaging strategies, and campaign goals."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Implementation and Execution"
                subtitle=" Ennovix proceeds with the implementation phase. Our skilled designers and developers bring the design concepts to life by creating visual assets, wireframes, prototypes, or interactive mockups. We utilize industry-standard design tools and technologies to ensure high-quality deliverables. Throughout this phase, Ennovix maintains open communication with you to gather feedback and make necessary adjustments."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Evaluation and Optimization"
                subtitle="Ennovix closely monitors their performance and collects relevant data and analytics. We evaluate key performance indicators (KPIs) such as website traffic, engagement rates, conversion rates, and return on investment (ROI). Ennovix identifies areas of improvement and optimization based on the data, allowing them to refine the campaigns and enhance their effectiveness."
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
                How Can Digital Marketing Benefit You?
              </h2>
              <Spacing lg="50" md="30" />
              <p>
              Digital marketing can benefit you in numerous ways:
              Increased Brand Visibility: Digital marketing allows you to reach a wider audience and increase your brand's visibility. 
              Through various online channels such as search engines, social media, email marketing, and display advertising, you can 
              showcase your products or services to potential customers. By increasing your brand's visibility, you create opportunities
               for engagement and conversions.<br/>
               Targeted Audience Reach: One of the significant advantages of digital marketing is the ability to target specific audiences.
                Through data-driven strategies and tools, you can identify and reach your ideal customers based on demographics, interests,
                behaviors, and other relevant factors. This targeted approach ensures that your marketing efforts are directed towards the
                 right audience, increasing the chances of generating leads and conversions.
              </p>
              <h2 className="cs-font_50 cs-m0">Why To Choose Ennovix?</h2>
              <Spacing lg="35" md="30" />
              <p>
               Ennovix is a trusted digital marketing agency known for its expertise, customized solutions, and result-driven strategies.
               With a team of experienced professionals, Ennovix offers a comprehensive range of services, including SEO, PPC advertising,
               social media marketing, content marketing, and more. We prioritize client satisfaction, transparent communication, and 
               data-driven decision-making to deliver effective and measurable outcomes. Choose Ennovix to elevate your online presence 
               and achieve your digital marketing goals.
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
