import {
  Button,
  Col,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div className="container">
        <h1>ToDo App</h1>
        <Form onSubmit={this.addItem}>
          <Row className="align-items-center">
            <Col>
              <FormGroup>
                <Form.Control
                  ref={(a) => (this._inputElement = a)}
                  type="name"
                  placeholder="Enter Item name"
                  required
                ></Form.Control>
              </FormGroup>
            </Col>
            <Col>
              <Button type="submit" variant="success">
                ADD
              </Button>
            </Col>
          </Row>
        </Form>
        {this.state.items.map((item) => {
          return <h2 key={item.id}>{item.name}</h2>;
        })}
      </div>
    );
  }

  addItem = (e) => {
    e.preventDefault();

    if (this._inputElement.value !== "") {
      var newItem = {
        name: this._inputElement.value,
        id: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }
  };
}
