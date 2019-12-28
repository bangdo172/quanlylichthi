import React, {useState, Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import Widget01 from './Widget01';
import Widget02 from './Widget02';
import Widget03 from './Widget03';
import Widget04 from './Widget04';
import { Line } from 'react-chartjs-2';
import { ButtonGroup, ButtonToolbar, Button, Badge, Card, CardBody, CardFooter, CardHeader, Collapse, Fade } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
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

// Brand Card Chart
const makeSocialBoxData = (dataSetNo) => {
  const socialBoxData = [
    { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
    { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
    { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
    { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
  ];

  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};
// function Showlst(props) {
//
//   function ListItem(props) {
//     return <li>{props.value}</li>;
//   }
//
//   function NumberList(props) {
//     const numbers = props.numbers;
//     return (
//       <ul>
//         {numbers.map((number) =>
//           <ListItem key={number.toString()}
//                     value={number} />
//         )}
//       </ul>
//     );
//   }
//
//
//
//   const numbers = ["304-GD3", "302-GD2", "207-GD3"];
//
//
//   return (
//     <>
//       <NumberList numbers={numbers} />
//     </>
//   );
// }

const kythi = [
  { value: 'cuoiki', label: 'Cuối kì' }
]
const monthi = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const namthi = [
  { value: '2014', label: '2014' },
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' }
]
const thangthi = [
  { value: 'thang1', label: 'Januray' },
  { value: 'thang2', label: 'February' },
  { value: 'thang3', label: 'March' },
  { value: 'thang4', label: 'April' },
  { value: 'thang5', label: 'May' },
  { value: 'thang6', label: 'June' },
  { value: 'thang7', label: 'July' },
  { value: 'thang8', label: 'August' },
  { value: 'thang9', label: 'September' },
  { value: 'thang10',label: 'October' },
  { value: 'thang11', label: 'November' },
  { value: 'thang12', label: 'December' }

]
const ngaythi = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
  { value: '22', label: '22' },
  { value: '23', label: '23' },
  { value: '24', label: '24' },
  { value: '25', label: '25' },
  { value: '226', label: '26' },
  { value: '27', label: '27' },
  { value: '28', label: '28' },
  { value: '29', label: '29' },
  { value: '30', label: '30' },
  { value: '31', label: '31' }
]

const gio = [
  { value: '1', label: '01' },
  { value: '2', label: '02' },
  { value: '3', label: '03' },
  { value: '4', label: '04' },
  { value: '5', label: '05' },
  { value: '6', label: '06' },
  { value: '7', label: '07' },
  { value: '8', label: '08' },
  { value: '9', label: '09' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
  { value: '22', label: '22' },
  { value: '23', label: '23' },
]
const phut = [
  { value: '00', label: '00' },
  { value: '15', label: '15' },
  { value: '30', label: '30' },
  { value: '45', label: '45' }
]
function Neww4(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      {/*<Card>*/}
            <Button variant="primary" color="primary" onClick={handleShow}>
              <i className="fa fa-dot-circle-o"></i>
              Thêm ca thi
            </Button>
      {/*</Card>*/}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm lịch thi mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name"> Kỳ thi:</Label>
                <Select options={kythi} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Môn thi:</Label>
                  <Select options={monthi}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Ngày thi:</Label>
                <Row>
                  <Col md={"4"}>
                    <Select options={namthi} />
                  </Col>
                  <Col md={"4"}>
                    <Select options={thangthi} />
                  </Col>
                  <Col md={"4"}>
                    <Select options={ngaythi} />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Giờ bắt đầu:</Label>
                <Row>
                  <Col md={"6"}>
                    <Select options={gio} />
                  </Col>
                  <Col md={"6"}>
                    <Select options={phut} />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Giờ kết thúc:</Label>
                <Row>
                  <Col md={"6"}>
                    <Select options={gio} />
                  </Col>
                  <Col md={"6"}>
                    <Select options={phut} />
                  </Col>
                </Row>
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

  return (
    <>

      {/*<Card>*/}
      <Button variant="primary" color="primary" onClick={handleShow}>
        <i className="fa fa-dot-circle-o"></i>
        Xem danh sách
      </Button>
      {/*</Card>*/}


      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Danh sách sinh viên đăng kí</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*<Row>*/}
          {/*  <Col md="12">*/}
          {/*    <FormGroup>*/}
          {/*      <Label htmlFor="name"> Kỳ thi:</Label>*/}
          {/*      <Select options={kythi} />*/}
          {/*    </FormGroup>*/}
          {/*    <FormGroup>*/}
          {/*      <Label htmlFor="name">Môn thi:</Label>*/}
          {/*      <Select options={monthi}/>*/}
          {/*    </FormGroup>*/}
          {/*    <FormGroup>*/}
          {/*      <Label htmlFor="name">Ngày thi:</Label>*/}
          {/*      <Row>*/}
          {/*        <Col md={"4"}>*/}
          {/*          <Select options={namthi} />*/}
          {/*        </Col>*/}
          {/*        <Col md={"4"}>*/}
          {/*          <Select options={thangthi} />*/}
          {/*        </Col>*/}
          {/*        <Col md={"4"}>*/}
          {/*          <Select options={ngaythi} />*/}
          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </FormGroup>*/}
          {/*    <FormGroup>*/}
          {/*      <Label htmlFor="name">Giờ bắt đầu:</Label>*/}
          {/*      <Row>*/}
          {/*        <Col md={"6"}>*/}
          {/*          <Select options={gio} />*/}
          {/*        </Col>*/}
          {/*        <Col md={"6"}>*/}
          {/*          <Select options={phut} />*/}
          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </FormGroup>*/}
          {/*    <FormGroup>*/}
          {/*      <Label htmlFor="name">Giờ kết thúc:</Label>*/}
          {/*      <Row>*/}
          {/*        <Col md={"6"}>*/}
          {/*          <Select options={gio} />*/}
          {/*        </Col>*/}
          {/*        <Col md={"6"}>*/}
          {/*          <Select options={phut} />*/}
          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </FormGroup>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
          <div>
            <p>

            </p>
            <p>
              <b>BỘ GIÁO DỤC VÀ ĐÀO TẠO</b>
            </p>
            <p>
              <Row >
                <Col md={"3"}align={"center"}>
                  <b>UET UNIVERSITY</b>
                </Col>
              </Row>
            </p>
            <p align={"center"}>
              <b>
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </b>
            </p>
            <p align={"center"}>
              Độc lập - Tự do - Hạnh phúc
            </p>
            <p align={"center"}>
              <b>
                DANH SÁCH SINH VIÊN DỰ THI - KỲ THI CUỐI KỲ
              </b>
              <p></p>
              <Row>
                <Col></Col>
                <Col md={"4"}align={"left"}>
                  <b>Môn thi</b>:Tiếng anh cơ sở 4
                </Col>
                <Col md={"6"}align={"left"} >
                  <b>Ngày thi</b>:1/1/2019
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md={"4"}align={"left"}>
                  <b>Mã môn</b>:FLF2104
                </Col>
                <Col md={"6"}align={"left"}>
                  <b>Giờ thi</b>:18:00-19:00
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md={"4"}align={"left"}>
                  <b>Số tín chỉ:</b>4
                </Col>
                <Col md={"6"}align={"left"}>
                  <b>Phòng thi</b>:Bảo vệ
                </Col>
              </Row>
            </p>
            <table border={"1"} width={"760"}>
              <tr>
              <th>STT</th>
              <th>SBD</th>
              <th>MSSV</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Lớp</th>
              <th>Số tờ</th>
              <th>Chữ ký</th>
              <th>Ghi chú</th>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
            </table>
            <p></p>
            Tổng số sinh viên: 0
            <p></p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} color="danger">
            <i className="fa fa-ban"></i>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} color="primary">
            <i className="fa fa-dot-circle-o"></i>
            Tạo PDF & In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonToolbar>
        <Button variant="primary" block className="mb-3" color="danger" onClick={handleShow}>
          Thêm/xóa môn thi
        </Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button variant="primary" block className="mb-3" color="danger">
          Đóng thời gian đăng kí
        </Button>
      </ButtonToolbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm/xóa môn thi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
                <Label htmlFor="name">Tên khóa học:</Label>
                  <Row>
                    <Col>

                    </Col>
                  </Row>
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

class Widgets extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <h1><bold>Quản lý lịch thi: Cuối kỳ</bold></h1>
        <Row>
          <Col xs="6" xl="3">
            <Card>
              <div className="mb-3 mt-3 mr-3 ml-3">
                <Neww3 />
                <h6> Môn thi hiện tại</h6>
              </div>
            </Card>
          </Col>
          <Col xs="12" xl="9">
            <Card>
              <div className='demo-app mb-3 mt-3 mr-3 ml-3'>
                <div className='demo-app-calendar'>
                  {/*<FullCalendar*/}
                  {/*  defaultView="dayGridMonth"*/}
                  {/*  header={{*/}
                  {/*    left: 'prev,next today',*/}
                  {/*    center: 'title',*/}
                  {/*    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'*/}
                  {/*  }}*/}
                  {/*  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}*/}
                  {/*  ref={this.calendarComponentRef}*/}
                  {/*  weekends={this.state.calendarWeekends}*/}
                  {/*  events={this.state.calendarEvents}*/}
                  {/*  dateClick={this.handleDateClick}*/}
                  {/*/>*/}
                  {/*<Button variant="primary" color="primary">*/}
                  {/*  <i className="fa fa-dot-circle-o"></i>*/}
                  {/*  Thêm ca thi*/}
                  {/*</Button>*/}
                  <Neww4/>
                  <Neww5/>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Widgets;
