import SerieStars from "components/SerieStars";
import './styles.css';

type Props = {
    score: number;
    count: number;
}

function SerieScore({score, count} : Props) {

    return (
        <div className="dsserie-score-container">
            <p className="dsserie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <SerieStars score={score} />
            <p className="dsserie-score-count">{count} avaliações</p>
        </div>

    );

}

export default SerieScore;