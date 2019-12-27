import React, { useState, Component } from 'react';
import axios from 'axios';
import { ButtonToolbar, Button, Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
  Badge,

  CardFooter,

  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,

} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';

// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

// import './main.scss';


function Example2(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <ButtonToolbar>
        <Button variant="primary" block className="mb-3" onClick={handleShow}>Thêm khóa học mới</Button>
      </ButtonToolbar>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm khóa học mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Mã khóa học:</Label>
                <Input type="text" id="makhoahoc" placeholder="Nhập mã khóa học" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Tên khóa học:</Label>
                <Input type="text" id="tenkhoahoc" placeholder="Nhập tên khóa học" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Số tín chỉ:</Label>
                <Input type="text" id="sotinchi" placeholder="Nhập số tín chỉ" required />
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

function Example3(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      {
        props.course.map((p) => {
          return (

            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    
              </CardHeader>
                  <CardBody>
                    <h2>{p.name}</h2>
                    <p>Số tín chỉ: {p.credits}</p>
                    <p><i>Giáo Viên: {p.lecturer}</i></p>
                  </CardBody>
                  <CardFooter>
                    <ButtonToolbar>
                      <Button variant="primary" block className="mb-3" color="primary" onClick={handleShow}>
                        <i className="fa fa-dot-circle-o"></i>
                        Sửa thông tin
                  </Button>
                      <Button variant="primary" block className="mb-3" color="danger">
                        <i className="fa fa-ban"></i>
                        Xóa khóa học
                  </Button>
                    </ButtonToolbar>
                  </CardFooter>
                </Card>
              </Col>
            </Row>

          )
        })
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin khóa học</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Mã khóa học:</Label>
                <Input type="text" id="makhoahoc" placeholder="Nhập mã khóa học" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Tên khóa học:</Label>
                <Input type="text" id="tenkhoahoc" placeholder="Nhập tên khóa học" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Số tín chỉ:</Label>
                <Input type="text" id="sotinchi" placeholder="Nhập số tín chỉ" required />
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


class Breadcrumbs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      course: [],
      error: null
    };
  }


  componentDidMount() {

    axios.get("http://96d65123.ngrok.io/subject")
      .then(result => {
        const course = result.data;
        this.setState({ course });
        console.log(course);
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="animated fadeIn">
        <h1><bold>Quản lý Khóa học</bold></h1>
        <Example2 />
        <Example3 course = {this.state.course} />

      </div>
    );
  }

}

export default Breadcrumbs;
