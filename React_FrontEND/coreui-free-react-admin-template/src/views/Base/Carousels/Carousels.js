import React, { setState, useState, Component } from 'react';
import axios from 'axios';
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
import { number } from 'prop-types';




function Showlst(props) {

  // function ListItem(props) {
  //   return <li>{props.value} ---> 3 chỗ</li>;
  // }


  // function NumberList(props) {
  //   const numbers = props.numbers;
  //   return (
  //     <ul>
  //       {numbers.map((number) =>
  //         <ListItem key={number.toString()}
  //           value={number} />
  //       )}
  //     </ul>
  //   );
  // }



  // const numbers = ["304-GD3", "302-GD2", "207-GD3"];


  return (
    <>
      {/* <NumberList numbers={numbers} /> */}
      {
        // console.log(props)
        props.rooms.map((p) => {
          return (
            <ul>
              <li>{p.name} --> {p.numberSeats} chỗ</li>
            </ul>
          )
        })
      }
    </>
  );
}


function Neww3(props) {

  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [numberSeats, setNumberSeats] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  var state = { 
    name: '',
    numberSeats: ''
  }

  // const handleChangeName = event => {
  //   //this.setState({ name: event.target.value }).bind(this);
  //   state.name = event.target.value;
  //   console.log(state.name)
  //   namesss = state.name;
  // }

  // const handleChangeNumberSeats =  event => {
  //   //this.setState({ numberSeats: event.target.value }).bind(this);
    
  //   state.numberSeats = event.target.value;
  // }

  

  const handleSubmit = event => {
    
    

    event.preventDefault();


    axios.post('http://96d65123.ngrok.io/room/create', { name, numberSeats })
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => console.log(error))

  }

  return (
    <>
      <ButtonToolbar>
        <Button variant="primary" block className="mb-3" color="danger" onClick={handleShow}>
          Thêm phòng thi
                  </Button>
      </ButtonToolbar>

      
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm phòng thi mới</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col xs="12">
                <FormGroup>
                {/* onChange={handleChangeName} */}
                  <Label htmlFor="name">Tên phòng thi:</Label>
                  <Input type="text" id="tenphongthi" placeholder="Nhập tên phòng thi" onChange={event => setName(event.target.value)} required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                {/* onChange={handleChangeNumberSeats} */}
                  <Label htmlFor="name">Số chỗ:</Label>
                  <Input type="number" id="socho" placeholder="Nhập số chõ ngồi" onChange={event => setNumberSeats(event.target.value)} required />
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
      
    </>
  );

}


class Carousels extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      error: null,
      // name: "",
      // numberSeats: number
    };
  }

  componentDidMount() {

    axios.get("http://96d65123.ngrok.io/room")
      .then(result => {
        const rooms = result.data;
        this.setState({
          // Posts: rooms.map((rooms, i) => (
          //   <li key={i}>{rooms.text}</li>
          // ))
          rooms
        });

        // console.log(rooms);
      })
      .catch(error => console.log(error))
  }


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
                <Showlst rooms={this.state.rooms} />

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