import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: "Terms of Use",
      href: "/",
    },
    {
      title: "Privacy Policy",
      href: "/",
    },
  ];

  const serviceMenu = [
    {
      title: "UI/UX design",
      href: "/service/ui-ux",
    },
    {
      title: "Web development",
      href: "/service/web",
    },
    {
      title: "Mobile App development",
      href: "/service/web",
    },
    {
      title: "Digital marketing",
      href: "/service/digital_marketing",
    },
    {
      title: "Branding",
      href: "/service/branding",
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/logo.png"
                  logoAlt="Logo"
                  text="Welcome aboard Ennovix! Prepare to immerse yourself in a dynamic and fast-paced environment where innovation thrives. We're delighted to have you on our team, and together, we'll push the boundaries of what's possible."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Subscribe to our newsletter and stay updated with the latest news, offers, and exciting updates!."
                  placeholder="dani@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2023 ennovix.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
