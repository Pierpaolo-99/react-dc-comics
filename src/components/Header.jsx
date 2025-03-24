export default function Header({ Menu }) {

    return (
        <header>

            <div className="flex-container">

                <div className="logo">
                    <img src="/img/dc-logo.png" alt="" />
                </div>

                <ul className="menu">
                    {
                        Menu.map((item, index) => (<li key={index}><a href="">{item}</a></li>))
                    }

                </ul>

            </div>

        </header>
    )
}