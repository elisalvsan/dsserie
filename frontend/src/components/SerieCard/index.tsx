import SerieScore from "components/SerieScore";


function SerieCard() {

    const serie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/original/pW0UCPX9bvBEYoeQ6U4zi4tv9z7.jpg",
        title: "Halo",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsserie-serie-card-image" src={serie.image} alt={serie.title} />
            <div className="dsserie-card-bottom-container">
                <h3>{serie.title}</h3>
                <SerieScore />
                <div className="btn btn-primary dsserie-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default SerieCard;