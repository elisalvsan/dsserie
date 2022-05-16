import { Link, useNavigate } from 'react-router-dom';
import { Serie } from 'types/serie';
import { useState } from 'react';
import { useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'utils/requests';
import './styles.css';
import { validateEmail } from 'utils/validate';


type Props = {
    serieId: string;
}

function FormCard({ serieId }: Props) {

    const navigate = useNavigate();

    const [serie, setSerie] = useState<Serie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/series/${serieId}`)
            .then(response => {
                setSerie(response.data);
            })
    }, [serieId])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if(!validateEmail(email)){
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                serieId: serieId,
                score: score
            }
        }

        axios(config).then(response => {
            navigate("/");
        });

    }

    return (
        <div className="dsserie-form-container">
            <img className="dsserie-serie-card-image" src={serie?.image} alt={serie?.title} />
            <div className="dsserie-card-bottom-container">
                <h3>{serie?.title}</h3>
                <form className="dsserie-form" onSubmit={handleSubmit}>
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
                <Link to="/">
                    <button className="btn btn-primary dsserie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default FormCard;