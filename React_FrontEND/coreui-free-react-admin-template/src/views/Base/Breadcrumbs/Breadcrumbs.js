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

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [id, setSubjectID] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [credit, setCredits] = useState('');
  const [lecturer, setLecturer] = useState('');
  

  var state = {
    id: '',
    code: '',
    name: '',
    credit: '',
    lecturer: ''
  }

  

  const handleSubmit = event => {
    alert("heyyy " + name);
    event.preventDefault();


    axios.post('http://96d65123.ngrok.io/subject/edit', { id, code, name, credit, lecturer })
      .then(res => {
        console.log(res);
        console.log(res.data);
        //console.log("cakkkkk")
      }).catch(error => console.log(error))

  }

  const handleSubmit2 = event => {
    alert(name);
    event.preventDefault();
    axios.post('http://96d65123.ngrok.io/subject/create', { code, name, credit, lecturer })
      .then(res => {
        console.log(res);
        console.log(res.data);
        //console.log("cakkkkk")
      }).catch(error => console.log(error))

  }

  const handleSubmit3 = event => {
    alert(id);
    event.preventDefault();
    axios.post('http://96d65123.ngrok.io/subject/delete', { id })
      .then(res => {
        console.log(res);
        console.log(res.data);
        //console.log("cakkkkk")
      }).catch(error => console.log(error))

  }

  return (
    <>

      <ButtonToolbar>
        <Button variant="primary" block className="mb-3" onClick={handleShow}>Thêm khóa học mới</Button>
        <Button variant="primary" block className="mb-3" color="primary" onClick={handleShow2}>
          <i className="fa fa-dot-circle-o"></i>
          Sửa thông tin
                  </Button>
        <Button variant="primary" block className="mb-3" color="danger" onClick={handleShow3}>
          <i className="fa fa-ban"></i>
          Xóa khóa học
                  </Button>
      </ButtonToolbar>

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa khóa h</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit3}>
          <Modal.Body>

            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Mã khóa học:</Label>
                  <Input type="number" id="makhoahoc" placeholder="Nhập mã khóa học" onChange={event => setSubjectID(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3} color="danger">
              <i className="fa fa-ban"></i>
              Close
          </Button>
            <Button type="submit" variant="primary" onClick={handleClose3} color="primary">
              <i className="fa fa-dot-circle-o"></i>
              Save Changes
          </Button>
          </Modal.Footer>
        </Form>
      </Modal>



      {/* MOdal cho phan them thong tin */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm khóa học mới</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit2}>
          <Modal.Body>

            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Mã khóa học:</Label>
                  <Input type="text" id="makhoahoc" placeholder="Nhập mã khóa học" onChange={event => setCode(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Tên khóa học:</Label>
                  <Input type="text" id="tenkhoahoc" placeholder="Nhập tên khóa học" onChange={event => setName(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Số tín chỉ:</Label>
                  <Input type="text" id="sotinchi" placeholder="Nhập số tín chỉ" onChange={event => setCredits(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Giáo viên:</Label>
                  <Input type="text" id="giaovien" placeholder="Nhập tên giáo viên" onChange={event => setLecturer(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} color="danger">
              <i className="fa fa-ban"></i>
              Close
          </Button>
            <Button type="submit" variant="primary" onClick={handleClose} color="primary">
              <i className="fa fa-dot-circle-o"></i>
              Save Changes
          </Button>
          </Modal.Footer>
        </Form>
      </Modal>


      {/* Modal cho phan sua thong tin */}


      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>

          <Modal.Title>Sửa thông tin</Modal.Title>

        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">ID khóa học:</Label>
                  <Input type="number" id="idkhoahoc" placeholder="Nhập id khóa học" onChange={event => setSubjectID(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Mã khóa học:</Label>
                  <Input type="text" id="makhoahoc" placeholder="Nhập mã khóa học" onChange={event => setCode(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Tên khóa học:</Label>
                  <Input type="text" id="tenkhoahoc" placeholder="Nhập tên khóa học" onChange={event => setName(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Số tín chỉ:</Label>
                  <Input type="number" id="sotinchi" placeholder="Nhập số tín chỉ" onChange={event => setCredits(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Giáo viên:</Label>
                  <Input type="text" id="giaovien" placeholder="Nhập tên giáo viên" onChange={event => setLecturer(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2} color="danger">
              <i className="fa fa-ban"></i>
              Close
          </Button>
            <Button type="submit" variant="primary" onClick={handleClose2} color="primary">
              <i className="fa fa-dot-circle-o"></i>
              Save Changes
          </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

function Example3(props) {

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
                    <h4>{p.code}</h4>
                    <p>Số tín chỉ: {p.credits}</p>
                    <p><i>Giáo Viên: {p.lecturer}</i></p>
                  </CardBody>

                </Card>
              </Col>
            </Row>

          )
        })
      }







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
        //console.log(course);
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="animated fadeIn">
        <h1><bold>Quản lý Khóa học</bold></h1>
        <Example2 />
        <Example3 course={this.state.course} />

      </div>
    );
  }

}

export default Breadcrumbs;
