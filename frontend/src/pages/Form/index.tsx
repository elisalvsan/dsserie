import { Link } from 'react-router-dom';
import './styles.css';

function Form() {

    const serie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/original/pW0UCPX9bvBEYoeQ6U4zi4tv9z7.jpg",
        title: "Halo",
        count: 2,
        score: 4.5
    };

    return (
        <div className="dsserie-form-container">
            <img className="dsserie-serie-card-image" src={serie.image} alt={serie.title} />
            <div className="dsserie-card-bottom-container">
                <h3>{serie.title}</h3>
                <form className="dsserie-form">
                    <div className="form-group dsserie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsserie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsserie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsserie-btn">Salvar</button>
                    </div>
                </form >
                <Link to ="/">
                    <button className="btn btn-primary dsserie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default Form;