import React, { useState, Component } from 'react';
import { ButtonToolbar, Button, Card, CardBody, CardHeader, Col, Row, Table, Badge } from 'reactstrap';
import {

  CardFooter,

  FormGroup,
  Input,
  Label,

} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';

// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

// import './main.scss';




function Example3(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Row>
        <Col md={"4"}>
          <Card>
            <CardHeader>
              Mạng máy tính
            </CardHeader>
            <CardBody>
              <h2>INT22099</h2>
              <p>Số tín chỉ: 3</p>
            </CardBody>
            <CardFooter>
              <ButtonToolbar>
                <Button variant="primary" block className="mb-3" color="primary" onClick={handleShow}>
                  <i className="fa fa-dot-circle-o"></i>
                  Đăng kí
                </Button>
              </ButtonToolbar>
            </CardFooter>
          </Card>
        </Col>
        <Col md={"4"}>
          <Card>
            <CardHeader>
              Mạng máy tính
            </CardHeader>
            <CardBody>
              <h2>INT22099</h2>
              <p>Số tín chỉ: 3</p>
            </CardBody>
            <CardFooter>
              <ButtonToolbar>
                <Button variant="primary" block className="mb-3" color="primary" onClick={handleShow}>
                  <i className="fa fa-dot-circle-o"></i>
                  Đăng kí
                </Button>
              </ButtonToolbar>
            </CardFooter>
          </Card>
        </Col>
      </Row>


      <Modal size ="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng kí thi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Ca thi</th>
                      <th>Ngày thi</th>
                      <th>Giờ thi</th>
                      <th>Phòng thi</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Samppa Nori</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Estavan Lykos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Chetan Mohamed</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Derick Maximinus</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Friderik Dávid</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
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
  // calendarComponentRef = React.createRef()
  // state = {
  //   calendarWeekends: true,
  //   calendarEvents: [ // initial event data
  //     { title: 'Event Now', start: new Date() },
  //     {
  //       title: 'dit nhau',
  //       start: new Date(2019, 11, 1, 8, 30),
  //       end: new Date(2019, 11, 2, 14)
  //     }
  //   ]
  // }
  render() {
    return (
      <div className="animated fadeIn">
        <h1><bold>Đăng kí môn thi</bold></h1>
        <Example3 />


        {/* Calendar
        <div className='demo-app'>
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
        </div> */}

      </div>
    );
  }


  // Calendar
  // toggleWeekends = () => {
  //   this.setState({
  //     calendarWeekends: !this.state.calendarWeekends
  //   })
  // }

  // gotoPast = () => {
  //   let calendarApi = this.calendarComponentRef.current.getApi()
  //   calendarApi.gotoDate('2019-01-01') /
  // }

  // handleDateClick = (arg) => {
  //   if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
  //     this.setState({
  //       calendarEvents: this.state.calendarEvents.concat({
  //         title: 'New Event',
  //         start: arg.date,
  //         allDay: arg.allDay
  //       })
  //     })
  //   }
  // }
}

export default Breadcrumbs;
