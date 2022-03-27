import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/")
    }
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand style={{paddingRight: "100px"}}>
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
                        <Button basic animated='vertical'>
                        <Button.Content hidden>Perfil</Button.Content>
                        <Button.Content visible>
                            <Icon name='user' />
                        </Button.Content>
                    </Button>
                    <Button basic animated='vertical'>
                        <Button.Content hidden>Logout</Button.Content>
                        <Button.Content visible onClick={() => handleLogout()}>
                            <Icon name='sign-in' />
                        </Button.Content>
                    </Button>
                    <Button basic animated='vertical'>
                        <Button.Content hidden>Shop</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                        </Nav.Item>
                   
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header
