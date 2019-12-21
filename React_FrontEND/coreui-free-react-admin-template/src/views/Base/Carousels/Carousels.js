import React, { useState , Component } from 'react';
import { ButtonToolbar, Button, Card, CardBody, CardHeader, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
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

import './main.scss';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';




function Showlst(props) {

  function ListItem(props) {
    return <li>{props.value}</li>;
  }

  function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
            value={number} />
        )}
      </ul>
    );
  }



  const numbers = ["304-GD3", "302-GD2", "207-GD3"];


  return (
    <>
      <NumberList numbers={numbers} />
    </>
  );
}


function Neww3(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonToolbar>
        <Button variant="primary" block className="mb-3" color="danger" onClick={handleShow}>
          Thêm phòng thi
                  </Button>
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


class Carousels extends Component {

  calendarComponentRef = React.createRef()
  state = {
    calendarWeekends: true,
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date() },
      {
        title: 'dit nhau',
        start: new Date(2019, 11, 1, 8, 30),
        end: new Date(2019, 11, 2, 14)
      }
    ]
  }

  render() {
    return (
      <div className="animated fadeIn">
        <h1><bold>Quản lý phòng thi</bold></h1>

        <Row>
          <Col xs="6" xl="3">
            <Card>
              <div className="mb-3 mt-3 mr-3 ml-3">
                <Neww3 />
                <h6> Danh sách phòng thi</h6>

                <Showlst />

              </div>
            </Card>
          </Col>
          <Col xs="12" xl="9">
            <Card>
              <div className='demo-app mb-3 mt-3 mr-3 ml-3'>
                <div className='demo-app-calendar'>
                  <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={this.state.calendarEvents}
                    dateClick={this.handleDateClick}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.gotoDate('2019-01-01') // call a method on the Calendar object
  }

  handleDateClick = (arg) => {
    if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      })
    }
  }
}

export default Carousels;