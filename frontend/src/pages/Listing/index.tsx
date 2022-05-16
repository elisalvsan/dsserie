import axios from "axios";
import Pagination from "components/Pagination";
import SerieCard from "components/SerieCard";
import { useEffect, useState } from "react";
import { SeriePage } from "types/serie";
import { BASE_URL } from 'utils/requests';

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    
    const [page, setPage] = useState<SeriePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/series?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as SeriePage;
                setPage(data);

            });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>

            <div className="container">
                <div className="row">

                    {page.content.map(serie => (
                        <div key={serie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <SerieCard serie={serie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}
export default Listing;