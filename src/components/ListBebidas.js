import React, { useEffect, useState } from 'react'
import { urlBebidas } from '../helpers/url'
import Cardbebidas from './Cardbebidas';
const ListBebidas = () => {

    const [bebida, setBedida] = useState([]);

    useEffect(() => {
        getBebidas();
    }, []);

    const getBebidas = async () => {
        const resp = await fetch(urlBebidas);
        const data = await resp.json();
        setBedida(data);
    }

    return (

        <div>
            {
                bebida.map(elemento => (
                    <Cardbebidas
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

export default ListBebidas