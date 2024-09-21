import React from 'react'
// import Header1 from './header1'
import {Helmet} from 'react-helmet'
import {Toaster} from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'
const Layout = ({children,title, description, keywords, author}) => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
    
      <main >
      <Toaster/>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}
Layout.defaultProps = {
    title: "Fashion Kart",
    description: "Ecommerce website ",
    keywords: "mern,react,node,mongodb",
    author: "Nithin",
  };
export default Layout
