import Link from "next/link"
import { FaLocationArrow, FaWhatsapp } from "react-icons/fa"
import { MdCall, MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="footer">
          <div className="footer-col">
               <h4>Our platforms</h4>
               <div className="footer-content">
                    <Link href="https://www.visitmyvenue.com/" target="_blank">Visit my Venue</Link>
               </div>
          </div>
          <div className="footer-col">
               <h4>Our Address</h4>
               <div className="footer-content">
                    <a href="tel:+250727559173" rel="noreferrer" target="_blank"><i className="icon call-icon"><MdCall /></i> Call us: +250 727 559 173 </a>
                    <p><i className="icon"><FaLocationArrow /> </i> Location: Kigali, Rwanda </p>
                    <a href="mailto:info@clickrwanda.com" rel="noreferrer" target="_blank"><i className="icon"><MdEmail /></i> Email: info@clickrwanda.com</a>
               </div>
          </div>
          <div className="footer-col">
               <h4>Advertise Here</h4>
               <div className="footer-content">
                    <p>Advertise your business with us</p>
                    <p>Send us a direct message via:</p>
                    <Link href="https://wa.me/+250727559173" rel="noreferrer" target="_blank"><i className="icon whatsapp-icon"><FaWhatsapp /></i> Whatsapp: +250727559173 </Link>
               </div>
          </div>
          <div className="footer-col">
               <h4>Support & Links</h4>
               <div className="footer-content">
                    <Link href="/">Help Center</Link>
                    <Link href="/">Contact Us</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href='/terms-&-conditions'>Terms & Conditions</Link>
                    <Link href="/">About us</Link>
                    <Link href="/hiring">Become an Agent</Link>
               </div>
          </div>
    </footer>
  )
}

export default Footer