import SerieStars from "components/SerieStars";
import './styles.css';

function SerieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="dsserie-score-container">
            <p className="dsserie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <SerieStars />
            <p className="dsserie-score-count">{count} avaliações</p>
        </div>

    );

}

export default SerieScore;