import "./footer.css"
function Footer() {
    return (
        <>
        
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                                porro dignissimos doloremque quo vero nam accusantium a sapiente quasi neque velit fugit
                                optio esse alias explicabo, libero quaerat possimus magnam. </p>
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
                                <li><a href="https://www.facebook.com/" class="facebook"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer
