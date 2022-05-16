import SerieScore from "components/SerieScore";
import { Link } from "react-router-dom";
import { Serie } from "types/serie";

type Props = {
    serie: Serie;
}

function SerieCard({ serie }: Props) {

    return (
        <div>
            <img className="dsserie-serie-card-image" src={serie.image} alt={serie.title} />
            <div className="dsserie-card-bottom-container">
                <h3>{serie.title}</h3>
                <SerieScore count={serie.count} score={serie.score} />
                <Link to={`/form/${serie.id}`}>
                    <div className="btn btn-primary dsserie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default SerieCard;