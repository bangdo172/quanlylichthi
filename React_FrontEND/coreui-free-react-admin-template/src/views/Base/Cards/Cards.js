import React, { useState, Component } from 'react';
import axios from 'axios';
import { ButtonGroup, ButtonToolbar, Button, Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import Modal from 'react-bootstrap/Modal';
import {

  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Form,
  Label,
  FormText,
  FormFeedback,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,


} from 'reactstrap';
import { Route, Router, NavLink, HashRouter, BrowserRouter, Link } from "react-router-dom";


function Neww4(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>



      <Card className="bg-warning">
        <CardHeader className="text-dark">
          Tạo kỳ thi mới
              </CardHeader>
        <CardBody className="text-dark">
          Nhấn nút bên dưới để tạo thêm kì thi
              </CardBody>
        <CardFooter className="bg-warning">
          <ButtonToolbar>
            <Button variant="primary" block color="danger" onClick={handleShow}>
              Thêm kỳ thi
                  </Button>
          </ButtonToolbar>
        </CardFooter>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm kỳ thi mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Tên kỳ thi:</Label>
                <Input type="text" id="makhoahoc" placeholder="Tên kỳ thi" required />
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} color="danger">
            <i className="fa fa-ban"></i>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} color="primary">
            <i className="fa fa-dot-circle-o"></i>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


function Neww5(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // const goHome = () => {
  //   this.props.history.push('./views/Widgets/Widgets')
  // }

  return (
    <>
      <Card>
        <CardHeader>
          Kỳ thi: Cuối kỳ 2020
              </CardHeader>
        <CardBody>
          Số môn thi: 4
              </CardBody>
        <CardFooter>
          <ButtonGroup aria-label="Basic example">
          <Link to="/widgets"><Button variant="secondary" color="primary" ><i className="fa fa-align-justify"></i> Quản lý lịch</Button></Link>            <Button variant="secondary" color="warning" onClick={handleShow}><i className="fa fa-dot-circle-o"></i> Sửa đổi</Button>
            <Button variant="secondary" color="danger"><i className="fa fa-ban"></i> Xóa lịch</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm kỳ thi mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Sửa tên kỳ thi:</Label>
                <Input type="text" id="makhoahoc" placeholder="Tên kỳ thi" required />
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} color="danger">
            <i className="fa fa-ban"></i>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} color="primary">
            <i className="fa fa-dot-circle-o"></i>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


function Funcc(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      {
        props.exam.map((p) => {
          return (
            <Card>
              <CardHeader>
                {p.subjectID}
              </CardHeader>
              <CardBody>
                Số môn thi: 4
              </CardBody>
              <CardFooter>
                <ButtonGroup aria-label="Basic example">
                  <Link to="/widgets"><Button variant="secondary" color="primary" ><i className="fa fa-align-justify"></i> Quản lý lịch</Button></Link>
                  <Button variant="secondary" color="warning" onClick={handleShow}><i className="fa fa-dot-circle-o"></i> Sửa đổi</Button>
                  <Button variant="secondary" color="danger"><i className="fa fa-ban"></i> Xóa lịch</Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

          )
        })
      }

      < Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm kỳ thi mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Sửa tên kỳ thi:</Label>
                <Input type="text" id="makhoahoc" placeholder="Tên kỳ thi" required />
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} color="danger">
            <i className="fa fa-ban"></i>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} color="primary">
            <i className="fa fa-dot-circle-o"></i>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,

      exam: [],
      error: null
    };
  }


  componentDidMount() {

    axios.get("http://96d65123.ngrok.io/exam_schedule/exam")
      .then(result => {
        const exam = result.data;
        this.setState({ exam });
        console.log(exam);
      })
      .catch(error => console.log(error))
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
          <Col>
            <Neww4 />
          </Col>
        </Row>
        <Row>
          <Col>
            <Neww5 />
          </Col>
        </Row>
        <Row>
          <Col>
            <Funcc exam={this.state.exam} />
          </Col>

        </Row>


      </div>
    );
  }
}

export default Cards;
