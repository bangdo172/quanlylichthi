import React, { useState, Component } from 'react';
import { ButtonGroup, ButtonToolbar, Button, Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
class Schedule extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <h1><bold>Quản lý lịch thi</bold></h1>
        <Row>
          <Col xs="12" sm="6" md="4">
          </Col>
          <Col xs="12" sm="6" md="4">
          </Col>
        </Row>
      </div>
    );
  }
}

export default Schedule;
