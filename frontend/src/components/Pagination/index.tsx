import { ReactComponent as Arrow } from 'assets/img/Arrow.svg';
import './styles.css';


function Pagination() {
    return (
        <div className="dsserie-pagination-container">
            <div className="dsserie-pagination-box">
                <button className="dsserie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsserie-pagination-button" disabled={false} >
                    <Arrow className="dsserie-flip-horizontal" />
                </button>
            </div>
        </div>

    );

}
export default Pagination;