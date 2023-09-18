import Head from "next/head";
import Card from "../components/Card";
import Cta from "../components/Cta";
import Div from "../components/Div";
import Hero4 from "../components/Hero/Hero4";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import PortfolioSlider from "../components/Slider/PortfolioSlider";
import TestimonialSlider from "../components/Slider/TestimonialSlider";
import Spacing from "../components/Spacing";
import Partners from "../components/Partners";
import { useContext } from "react";
import AppContext from "../context/appContext";
import ServiceList from "../components/ServiceList";
import PortfolioSlider2 from "../components/Slider/PortfolioSlider2";
import TeamSlider from "../components/Slider/TeamSlider";
import Hero from "../components/Hero";
import VideoModal from "../components/VideoModal";

export default function Home() {
  const context = useContext(AppContext);

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Linkedin",
      links: "https://www.linkedin.com/company/ennovix-et/",
    },
    {
      name: "Twitter",
      links: "/",
    },
  ];

  return (
    <>
      <Head>
        <title>Quality promised services - ENNOVIX</title>
        <meta
          name="description"
          content="Quality promised services - ENNOVIX"
        />
        <link rel="icon" href="/favicon.jpg" type="image/jpg" /> 
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero
          title="Ennovix: Where Creativity <br/>Meets Technologyy"
          subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
          btnText="Get Us"
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/case_study_2.jpeg"
        />
        {/* End Hero Section */}

        {/* Start Partners Section */}
        <div className="container">
          <Partners variant="cs-type1" />
        </div>
        {/* End Partners Section */}

                
        {/* Start Services Section */}
        <Spacing lg="145" md="80" />
        <Div className="container" id="service">
          <SectionHeading
            title="Our core services"
            subtitle="Service"
            variant="cs-style1 text-center"
          />
          <Spacing lg="70" md="45" />
          
          <ServiceList  />

          {/* services={context.services} */}

        </Div>
        {/* End Services Section */} 
         {/* Start Why Choose Section */}
         <Spacing lg="100" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-image_layer cs-style1">
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/about_img_4.png"
                    alt="About"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeading
                title="Helping Your Success Through Digital"
                subtitle="About Us"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                Ennovix is a technology company offering a wide range of services, 
                including web development, app development, graphics design, 
                UI/UX development, branding, network installation, and digital
                marketing. With our expertise and innovative solutions, we help
                 businesses establish a strong online presence, create captivating 
                user experiences, and drive growth. Partner with Ennovix to unlock
                 the full potential of technology and achieve your business objectives.
                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                When you choose Ennovix, you are choosing a reliable partner who is
                committed to your success, delivers innovative solutions, and provides
                exceptional customer service. Contact us today to embark on a
                technology journey that empowers your business for growth and achievement.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}

        {/* Start Team Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        <Spacing lg="150" md="80" /> 
        {/* End Team Section */} 


        {/* Start Portfolio Section */}
        {/* {context.portfolios && (
          <>
            <Spacing lg="150" md="50" />
            <Div>
              <Div className="container">
                <h2 className="cs-font_50 cs-m0 cs-line_height_4">
                anime video
                </h2>
                <Spacing lg="90" md="45" />
              </Div>
              <PortfolioSlider2 portfolios={context.portfolios} />
            </Div>
          </>
        )} */}

        {/* End Portfolio Section */}


        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start CTA Section */}
        <Div className="container">
        <Spacing lg="70" md="70" />
          <Cta
            title="Let’s disscus make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
