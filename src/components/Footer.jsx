export default function ({ DCcomics, shop, DC, sites }) {

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
                            {
                                shop.map(link => (<li key={link.id} > <a href={link.url}>{link.name}</a></li>))
                            }
                        </ul>
                    </div>
                    <div className="col">
                        <h3>DC</h3>
                        <ul>
                            {
                                DC.map(link => (<li key={link.id} > <a href={link.url}>{link.name}</a></li>))
                            }
                        </ul>
                    </div>
                    <div className="col">
                        <h3>SITES</h3>
                        <ul>
                            {
                                sites.map(link => (<li key={link.id} > <a href={link.url}>{link.name}</a></li>))
                            }
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