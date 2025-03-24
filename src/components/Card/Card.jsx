export default function Card({ comics }) {
    return (
        <div className="col-2">
            <div className="card">
                <img src={comics.thumb} alt={comics.series} />
                <p>{comics.series}</p>
            </div>
        </div>
    )
}