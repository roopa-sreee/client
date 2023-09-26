import React from 'react'
import Layout from '../components/layout/Layout'

const AboutPage = () => {
  return (
    <Layout title={"About Us - ShivaKarthikeyanStores"}>
      <div className=' about-us-container'>
        <div className='col-md-6'>
          <img 
           src='https://res.cloudinary.com/dfxl8sk2x/image/upload/v1692764101/about_us_gykwhl.jpg'
           alt="about us"
           style={{width:'100%'}}
          />
        </div>
        <div className='col-md-4'>
          <h1 className=' about-us-heading'>
            About Us 
          </h1>
          <ul className='text-dark'>
            <li className='about-us-list-item'> We are providing the best quality groceries since 2010.
             we are available to you through both online and offline. Fresh stocks everyday.Latest stock always.</li>   
             <li className='about-us-list-item'>Our products are well known for quality. we assure our product's Quality.</li>         
             <li className='about-us-list-item'>we Provide the fastest delivery.Your orders are delivered within hours. We Value your time.Save Time Save Money</li>
             <li className='about-us-list-item'>We value your money. Buy the best products at wholesale prices and reasonable prices Buy more Save more.</li>
             <li className='about-us-list-item'>Avail new Discounts on Weekends,festivals and many more special days</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
