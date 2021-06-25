import React from 'react'
import {Helmet} from 'react-helmet';
import styles from '../styles/Home.module.css';
import Navbar from './Navbar/Navbar';
import AboutUs from './Member/Members.js'

function Member() {
    return (
      <div>
         {/* <!-- Dynamic Title --> */}
         <Helmet>
               <title>Geeksforgeeks | KIIT - Members</title>
         </Helmet>
         <div className={styles.container}>
            <Navbar />
         </div>
         {/* <Background clipType="clipping-events" overlayColor="bgcolor-events"></Background> */}
         <AboutUs/>
         {/* <FooterLanding bgColor="footer-events"/> */}
      </div>
   )
}
export default Member;