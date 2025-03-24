export default function ({ DCcomics }) {

    return (
        <footer>
            <div className="container_up">
                <div className="footer_up">
                    <div className="col">
                        <h3>DC COMICS</h3>
                        <ul>
                            {
                                DCcomics.map(link => (<li key={link.id} > <a href={link.url}>{link.name}</a></li>))
                            }
                        </ul>
                        <h3>SHOP</h3>
                        <ul>
                            <li><a href="">Shop DC</a></li>
                            <li><a href="">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>DC</h3>
                        <ul>
                            <li><a href="">Terms of use</a></li>
                            <li><a href="">Privacy police</a></li>
                            <li><a href="">Ad choices</a></li>
                            <li><a href="">Advertising</a></li>
                            <li><a href="">Job</a></li>
                            <li><a href="">Subscritions</a></li>
                            <li><a href="">Talent Workshops</a></li>
                            <li><a href="">CPSC Certificates</a></li>
                            <li><a href="">Ratings</a></li>
                            <li><a href="">Shop Help</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>SITES</h3>
                        <ul>
                            <li><a href="">DC</a></li>
                            <li><a href="">MAD magazine</a></li>
                            <li><a href="">DC kids</a></li>
                            <li><a href="">DC universe</a></li>
                            <li><a href="">DC Power visa</a></li>
                        </ul>
                    </div>
                </div>

                <div className="bg_logo">
                    <img src="/img/dc-logo-bg.png" alt="" />
                </div>

            </div>

            <div className="container_down">

                <div className="footer_down">
                    <div className="btn">
                        <button className="sign_up">SIGN-UP NOW!</button>
                    </div>
                    <div className="follow">
                        <ul>
                            <h3>FOLLOW US</h3>
                            <li><a href=""><img src="/img/footer-facebook.png" alt="" /></a></li>
                            <li><a href=""><img src="/img/footer-periscope.png" alt="" /></a></li>
                            <li><a href=""><img src="/img/footer-pinterest.png" alt="" /></a></li>
                            <li><a href=""><img src="/img/footer-twitter.png" alt="" /></a></li>
                            <li><a href=""><img src="/img/footer-youtube.png" alt="" /></a></li>
                        </ul>
                    </div>

                </div>

            </div>

        </footer>
    )
}