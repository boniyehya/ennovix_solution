import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'Do you design illustration website?',
      answer: 'Yes, at ennovix, we offer website design services that can include illustrations. Our team of skilled designers can recreate visually appealing and engaging websites that incorporate illustrations to enhance the overall user experience. Whether you are looking for custom illustrations or want to incorporate existing illustrations into your website design, we have the expertise to bring your vision to life. Our goal is to create a website that not only looks great but also effectively communicates your brands message to your target audience. Feel free to share your specific requirements, and we will be happy to discuss how we can design an illustration-focused website that meets your needs.'
    },
    {
      question: 'Do you provide design source file after finish work?',
      answer: 'Yes, at ennovix, we provide the design source files to our clients upon completion of the project. We understand the importance of having access to the original design files, as they allow you to make future edits, modifications, or use the assets across different platforms or mediums. Whether it is the illustration files, graphic design files, or any other design assets, we ensure that you receive the source files in a format that is compatible with industry-standard design software. Our aim is to empower you with the necessary resources to maintain and manage your designs effectively. If you have any specific file format preferences or requirements, please let us know, and we will be happy to accommodate your needs.'
    },
    // {
    //   question: 'How to provide project details and payments?',
    //   answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.'
    // },
    {
      question: 'Can you tell me please how to contact for project?',
      answer: 'Certainly! To contact us for a project, you can follow these steps: 1.Visit our website: Go to our official website, where you can find detailed information about our services, portfolio, and contact information. 2.Contact Form: Look for a "Contact" or "Get in Touch" page on our website. There, you will likely find a contact form that you can fill out with your Name, Email address, and a message describing your project requirements. Provide as much information as possible to help us understand your needs better.Email: Alternatively, you may find our email address listed on the website. You can compose an email with your project details and send it directly to that address. Make sure to include relevant information such as the project scope, timeline, and any specific requirements or preferences.Phone: If you prefer a more direct conversation, you can check if our phone number is available on the website. Feel free to give us a call during business hours to discuss your project with our team. We will be happy to assist you and answer any questions you may have.Social Media: Some companies also provide contact options through their social media profiles. If applicable, you can reach out to us through platforms like LinkedIn, Twitter, or Facebook by sending a private message or commenting on a relevant post.'
    },
    {
      question: 'Do you makes custom logo, icon etc?',
      answer: 'Yes, at ennovix, we specialize in creating custom logos, icons, and other visual assets. We understand the importance of a strong brand identity, and our team of skilled designers is experienced in developing unique and memorable designs that align with your brands values and goals When you work with us, we will collaborate closely with you to understand your brands personality, target audience, and design preferences. Based on this information, we will create custom logo designs that capture the essence of your brand and effectively communicate its message Additionally, we can also design custom icons and other visual elements that are consistent with your brand identity. These can be used across various platforms, including websites, mobile applications, and marketing materials, to enhance visual appeal and create a cohesive brand experience. Whether you are starting from scratch or looking to refresh your existing brand assets, we are here to help bring your vision to life. Feel free to reach out to us with your specific requirements, and we will be happy to discuss how we can create custom logos, icons, and other design elements tailored to your brand.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.'
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
