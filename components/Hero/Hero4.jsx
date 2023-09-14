import parse from "html-react-parser";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";

export default function Hero4({
  title,
  subtitle,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  phoneNumber,
  email,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-type1 text-center cs-fixed_bg"
      // style={{ backgroundImage: "url(https://img.freepik.com/free-photo/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper_1258-82622.jpg?w=1380&t=st=1693500529~exp=1693501129~hmac=6a967bce6f41294be978a799e428102afcfe5bc7f46585efc89d81b722fd0945)" }}
    >
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info justify-content-center">
            <Div className="cs-hero_subtitle">{subtitle}</Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      {(phoneNumber || email) && (
        <Div className="cs-hero_social_wrap cs-left_side cs-primary_font cs-primary_color">
          <ul className="cs-hero_social_links">
            {email && (
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            )}
            {phoneNumber && (
              <li>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </li>
            )}
          </ul>
        </Div>
      )}
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
