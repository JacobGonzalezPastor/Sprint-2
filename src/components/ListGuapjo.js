import React, { useEffect, useState } from 'react'
import { urlGuappjolotas } from '../helpers/url'
import Cardguajo from './Cardguajo';

const ListGuapjo = () => {
    const [guajo, setGuajo] = useState([]);

    useEffect(() => {
        getGuapjo();
    }, []);

    const getGuapjo = async () => {
        const resp = await fetch(urlGuappjolotas);
        const data = await resp.json();
        setGuajo(data);
    }

    //console.log(guajo)
    return (
        <div>
            {
                guajo.map(elemento =>(
                    <Cardguajo
                        key={elemento.id}
                        id={elemento.id}
                        imagen={elemento.imagen}
                        sabor={elemento.sabor}
                        precio={elemento.precio}
                    />
                ))
            }
        </div>
    )

}


export default ListGuapjo