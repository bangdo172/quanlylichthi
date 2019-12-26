import React, { useState, Component } from 'react';
import { Button, Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import {
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


function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
      <Button className="btn btn-warning">
        Làm mới dữ liệu
      </Button>
      <Button variant="primary" onClick={handleShow2} className="btn btn-danger">
        Thêm dữ liệu từ excel
      </Button>
      <Button variant="primary" onClick={handleShow} className="btn btn-dark">
        Thêm sinh viên
      </Button>
      <Button className="btn btn-success">
        Xóa toàn bộ dữ liệu
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sinh viên mới:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">MSSV:</Label>
                <Input type="text" id="mssv" placeholder="Nhập MSSV" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="lastname">Họ:</Label>
                <Input type="text" id="lastname" placeholder="Nhập họ" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="firstname">Tên:</Label>
                <Input type="text" id="firstname" placeholder="Nhập tên" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="dateofbirth">Ngày sinh:</Label>
                <Input type="date" id="birthday" placeholder="Nhập ngày sinh" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="sex">Giới tính:</Label>
                {/* <Input type="text" id="sex" placeholder="Nhập MSSV" required /> */}
                <Input type="select" name="select" id="select">
                  <option value="0">Nam</option>
                  <option value="1">Nữ</option>
                  <option value="2">Others</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="class">Lớp:</Label>
                <Input type="text" id="class" placeholder="Nhập lớp" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="nganh">Ngành:</Label>
                <Input type="text" id="nganh" placeholder="Nhập Ngành học" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="khoa">Khoa:</Label>
                <Input type="text" id="khoa" placeholder="Nhập MSSV" required />
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Nhập dữ liệu từ excel:</Modal.Title>
        </Modal.Header>
        <Modal.Body>Nhập dữ liệu từ excel</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        {/* <button type="button" class="btn btn-secondary" variant="primary" onClick={Example.handleShow}>Excel</button> */}
        <h1><bold>Quản lý sinh viên</bold></h1>
        <div class="d-flex justify-content-between mb-3">
          <Example />
        </div>


        <Row>
          <Col>
            <Card>

              <CardHeader>
                <i className="fa fa-align-justify"></i> Danh sách sinh viên
              </CardHeader>
              <CardBody>

                <div class="align-self-left mb-3">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Excel</button>
                    {/* <button type="button" class="btn btn-secondary">Middle</button> */}
                    <button type="button" class="btn btn-secondary">PDF</button>
                  </div>
                  {/* <Example2/> */}
                </div>

                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>MSSV</th>
                      <th>Họ</th>
                      <th>Tên</th>
                      <th>Ngày sinh</th>
                      <th>Giới tính</th>
                      <th>Lớp</th>
                      <th>Ngành</th>
                      <th>Khoa</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>17021268</td>
                      <td>Trần Quang</td>
                      <td>Huy</td>
                      <td>1999/08/22</td>
                      <td>Nam</td>
                      <td>K62CACLC1</td>
                      <td>Computer Science</td>
                      <td>Công nghệ thông tin</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>17021268</td>
                      <td>Trần Quang</td>
                      <td>Huy</td>
                      <td>1999/08/22</td>
                      <td>Nam</td>
                      <td>K62CACLC1</td>
                      <td>Computer Science</td>
                      <td>Công nghệ thông tin</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>17021268</td>
                      <td>Trần Quang</td>
                      <td>Huy</td>
                      <td>1999/08/22</td>
                      <td>Nam</td>
                      <td>K62CACLC1</td>
                      <td>Computer Science</td>
                      <td>Công nghệ thông tin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>17021268</td>
                      <td>Trần Quang</td>
                      <td>Huy</td>
                      <td>1999/08/22</td>
                      <td>Nam</td>
                      <td>K62CACLC1</td>
                      <td>Computer Science</td>
                      <td>Công nghệ thông tin</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>17021268</td>
                      <td>Trần Quang</td>
                      <td>Huy</td>
                      <td>1999/08/22</td>
                      <td>Nam</td>
                      <td>K62CACLC1</td>
                      <td>Computer Science</td>
                      <td>Công nghệ thông tin</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>


                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
