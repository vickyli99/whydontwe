import React from 'react';

import './App.css';

import NamesContainer from './NamesContainer';
import BasicExample from './Basic';
import { Button, ButtonGroup, Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  state = {
    names: [
      'ORD - LAX', 'ORD - PIT', 'ORD - PVG', 'ORD - NYC', 'ORD - MAL', 'ORD - CMI', 'PVG - PEK', 'HGH - NRT', 'NRT - ORD' 
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


    render(){
      return (
        <Container>
          <Col className="text-center">
            <React.Fragment>
            <div>
              <BasicExample />
              <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a Route!'/>
              <br></br>
              <h3>Recommended Routes:</h3>
              <NamesContainer names = {this.dynamicSearch()}/>
            </div>
            <ButtonGroup size="lg" className="mb-2">
              <Button variant="outline-primary">Insert</Button>{' '}
              <Button variant="outline-primary">Delete</Button>{' '}
              <Button variant="outline-primary">Update</Button>{' '}
              <Button variant="outline-primary">View</Button>{' '}
            </ButtonGroup>
            </React.Fragment>
            </Col>
        </Container>
      );
    }
}

export default App;

