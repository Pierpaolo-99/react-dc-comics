export default function Card({ image, series }) {
    return (
        <div className="col-2">
            <div className="card">
                <img src={image} alt={series} />
                <p>{series}</p>
            </div>
        </div>
    )
}