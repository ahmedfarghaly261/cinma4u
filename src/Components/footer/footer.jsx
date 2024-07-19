import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Footer() {
    return (
        <>
        
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <h2 class="text-justify"> made by @Ahmed Farghaly Mahmoud  </h2>
                            <br />
                            <p> social media </p>
                            <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a href="https://www.facebook.com/" class="facebook"><FaFacebookF /></a></li>
                                <li><a class="email" href="">  <SiGmail /> </a></li>
                                <li><a class="linkedin" href="https://www.linkedin.com/in/ahmed-farghaly-b65b09236/"> <FaLinkedin /> </a></li>
                            </ul>
                        </div>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">Movies</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">Series</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">Home</a></li>

                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Contribute</li>
                                <li>Privacy Policy</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr />
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by
                                <a href="#">Scanfcode</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                            <li><a href="https://www.facebook.com/" class="facebook"><FaFacebookF /></a></li>
                                <li><a class="email" href="#">  <SiGmail /> </a></li>
                                <li><a class="linkedin" href="https://www.linkedin.com/in/ahmed-farghaly-b65b09236/"> <FaLinkedin /> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer
