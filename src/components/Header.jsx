export default function Header() {

    return (
        <header>

            <div className="flex-container">

                <div className="logo">
                    <img src="/img/dc-logo.png" alt="" />
                </div>

                <ul className="menu">
                    <li><a href="">CHARACTERS</a></li>
                    <li><a className="active" href="">COMICS</a></li>
                    <li><a href="">MOVIES</a></li>
                    <li><a href="">TV</a></li>
                    <li><a href="">GAMES</a></li>
                    <li><a href="">COLLECTIBLES</a></li>
                    <li><a href="">VIDEOS</a></li>
                    <li><a href="">FANS</a></li>
                    <li><a href="">NEW</a></li>
                    <li><a href="">SHOP</a></li>
                </ul>

            </div>

        </header>
    )
}