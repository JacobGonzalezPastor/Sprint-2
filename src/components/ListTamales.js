import React, { useEffect, useState } from 'react'
import { urlTamales } from '../helpers/url'
import Cardtamales from './Cardtamales';
const ListTamales = () => {

    const [tamal, setTamal] = useState([]);

    useEffect(() => {
        getTamales();
    }, []);

    const getTamales = async () => {
        const resp = await fetch(urlTamales);
        const data = await resp.json();
        setTamal(data);
    }

  return (
    <div>
        {
                tamal.map(elemento => (
                    <Cardtamales
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

export default ListTamales