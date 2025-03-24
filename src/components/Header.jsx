export default function Header({ Menu }) {

    return (
        <header>

            <div className="flex-container">

                <div className="logo">
                    <img src="/img/dc-logo.png" alt="" />
                </div>

                <ul className="menu">
                    {
                        Menu.map(link => (<li key={link.id}><a className={link.active ? "active" : ""} href={link.url}>{link.name}</a></li>))
                    }

                </ul>

            </div>

        </header>
    )
}