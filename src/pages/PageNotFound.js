import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'


const PageNotFound = () => {
  return (
    <Layout title={"Not Found Page-shiva Karthikeyan Stores"}>
      <div className='page-not-found-container'>
      <img
        src='https://res.cloudinary.com/dfxl8sk2x/image/upload/v1687162264/samples/animals/three-dogs.jpg'
        alt =" page not found "
        className='not-found-image'
      />
      <h3 className='not-found-text'>
        Oops! Page Not Found
      </h3>
      <Link to="/" className='go-back-button'> Go Back </Link>
      </div>
    </Layout>
  )
}

export default PageNotFound

