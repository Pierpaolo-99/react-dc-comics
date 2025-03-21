import ComicsList from "./ComicsList"

export default function Main() {

    return (
        <main>

            <div className="container_jumbotron">
                <div className="jumbotron">
                    <div className="label">
                        <h3>CURRENT SERIES</h3>
                    </div>
                </div>
            </div>

            <div className="comicsList">
                <ComicsList />
            </div>

            <div className="container_shop">
                <ul className="shop">
                    <li>
                        <a href="">
                            <img src="/img/buy-comics-digital-comics.png" alt="" />
                            <span>DIGITAL COMICS</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/buy-comics-merchandise.png" alt="" />
                            <span>DC MERCHANDISE</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/buy-comics-subscriptions.png" alt="" />
                            <span>SUBSCRIPTION</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/buy-comics-shop-locator.png" alt="" />
                            <span>COMIC SHOP LOCATOR</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/img/buy-dc-power-visa.svg" alt="" />
                            <span>DC POWER VISA</span>
                        </a>
                    </li>
                </ul>
            </div>

        </main>
    )
}