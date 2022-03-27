import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Styledcard } from '../style/Cardstyle'
const Cardbebidas = ({ id, imagen, sabor, precio }) => {
    return (
        <Styledcard>
            <Card.Group>
                <Card className='mx-auto'>
                    <Card.Content>
                        <Image
                            alt={id}
                            floated='left'
                            size='tiny'
                            src={imagen}
                        />
                        <Card.Header>{sabor}</Card.Header>
                        <Card.Description>
                            Precio: <strong>{precio} MX</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Comprar
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Styledcard>
    )
}

export default Cardbebidas