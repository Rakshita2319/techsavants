import React from 'react'
import vg from '../assets/2.webp'
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>techsavants</h1>
            <p>Your one-stop solution for all tech issues</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics"/>

        <div>
            <p>
            Welcome to our website, where we offer expert solutions to all your tech problems.
            With our years of experience and knowledge, we pride ourselves on delivering
            efficient and effective solutions that will leave you satisfied.Thank you for choosing 
            our website,and we look forward to assisting you with your tech needs.
            </p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>About us</h1>
            <p>Technology has become an integral part of our daily lives, and we understand the 
               frustration that comes with malfunctioning devices or software. From computer glitches 
               to network issues, our team of tech experts is here to help you overcome any challenges
               you may be facing. Our website provides a comprehensive range of solutions to tech problems,
               catering to both individuals and businesses alike.
            </p>
        </div>
        </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s"
                    }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay: "0.5s"
                    }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
               </div>
              
            </article>
        </div>

    </div>

    </>
  )
}

export default Home
