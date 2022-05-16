import { ReactComponent as Arrow } from 'assets/img/Arrow.svg';
import { SeriePage } from 'types/serie';
import './styles.css';

type Props = {
    page: SeriePage;
    onChange: Function;
}

function Pagination({ page, onChange }: Props) {
    return (
        <div className="dsserie-pagination-container">
            <div className="dsserie-pagination-box">
                <button className="dsserie-pagination-button" disabled={page.first}
                    onClick={() => onChange(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="dsserie-pagination-button" disabled={page.last}
                    onClick={() => onChange(page.number + 1)} >
                    <Arrow className="dsserie-flip-horizontal" />
                </button>
            </div>
        </div>

    );

}
export default Pagination;