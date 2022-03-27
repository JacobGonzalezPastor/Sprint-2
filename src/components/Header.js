import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'

const Header = () => {
   
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand style={{ paddingRight: "100px" }}>
                    <img
                        src="https://i.imgur.com/GCcCbt0.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    <Nav.Item >
                        <Link to="/">
                        <Button basic animated='vertical'>
                            <Button.Content hidden>Logout</Button.Content>
                            <Button.Content visible >
                                <Icon name='sign-in' />
                            </Button.Content>
                        </Button>
                        </Link>
                        <Link to="/Carrito">
                        <Button basic animated='vertical'>
                            <Button.Content hidden>Shop</Button.Content>
                            <Button.Content visible>
                                
                                <Icon name='shop' />
                            </Button.Content>
                        </Button>
                        </Link>
                        
                    </Nav.Item>

                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header
