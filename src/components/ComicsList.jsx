import Card from "./Card/Card"; // Import the Card component
import comics from "../data/comics";

export default function ComicsList() {

    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        comics.map(comic => (<Card key={comic.id} image={comic.thumb} series={comic.series} />))
                    }
                </div>

                <div className="btn_load">
                    <button>load more</button>
                </div>
            </div>
        </section>
    )
}