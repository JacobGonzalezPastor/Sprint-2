import React, { Component } from 'react'
import axios from "axios";
import { urlUsuarios } from '../helpers/url';
import Swal from 'sweetalert2';
import { Button, Form } from 'semantic-ui-react';
class Login extends Component {

    state = {
        form: {
            email: "",
            contraseña: "",
        },
    };

    handleChanged = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
        //console.log(this.state.form)
    };

    login = async () => {
        await axios.get(urlUsuarios, { params: { email: this.state.form.email, contraseña: this.state.form.contraseña } })
            .then(response => {
                return response.data;
            })
            .then((response) => {
                if (response.length > 0) {
                    window.location.href = "./Home";
                } else {
                    Swal.fire(
                        'Error',
                        'El usuario o la contraseña son incorrectas',
                        'error'
                    )
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className='p-4'>
                <div className='my-3 text-center'>
                    <h2>Iniciar Sesión</h2>
                </div>
                <Form onSubmit={this.handleSubmit}>

                    {/* usuario */}
                    <Form.Field>
                        <label>Email</label>
                        <input
                            className='correo'
                            type='text'
                            name='email'
                            onChange={this.handleChanged}

                        />
                    </Form.Field>

                    {/* contraseña */}
                    <Form.Field>
                        <label>Contraseña</label>
                        <input
                            className='password'
                            type='password'
                            name='contraseña'
                            onChange={this.handleChanged}
                        />
                    </Form.Field>

                    <Button type='submit' color='teal' className='w-100' onClick={() => this.login()}>Iniciar Sesión</Button>

                </Form>
            </div>
        )
    }

}

export default Login