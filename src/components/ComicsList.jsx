import Card from "./Card/Card"; // Import the Card component

export default function ComicsList({ comics }) {

    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        comics.map(comic => (<Card key={comic.id} comics={comic} />))
                    }
                </div>

                <div className="btn_load">
                    <button>load more</button>
                </div>
            </div>
        </section>
    )
}