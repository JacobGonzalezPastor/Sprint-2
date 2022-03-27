import React from 'react'
import { Button, Form, FormControl, Tab, Tabs } from 'react-bootstrap'
import { Styleh1 } from '../style/Cardstyle'
import ListBebidas from './ListBebidas'
import ListGuapjo from './ListGuapjo'
import ListTamales from './ListTamales'

const Cuerpo = () => {


  return (
    <div>
      <div>
        <Styleh1>Nada como una Guajolota para empezar el día</Styleh1>
        <div>
          <Form className="d-flex pt-5">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div>
            <Tabs defaultActiveKey="guajolotas" id="uncontrolled-tab-example" className="mb-3 pt-5">
              <Tab eventKey="guajolotas" title="Guajolotas">
                <ListGuapjo/>
              </Tab>
              <Tab eventKey="bebidas" title="Bebidas">
                <ListBebidas/>
              </Tab>
              <Tab eventKey="tamales" title="Tamales" >
                  <ListTamales/>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cuerpo