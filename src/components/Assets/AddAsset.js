import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormLabel } from 'react-bootstrap';
import { Table, ButtonToolbar } from 'react-bootstrap';
import { httpGet } from '../../helpers/network';

class AddAsset extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [] };
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const endPoint = 'asset/GetDepartmentsList';
        httpGet(endPoint).then(json =>
            this.setState({ deps: json })
        );
    }
    render() {
        return (
            <Modal
                {...this.props}
                // size="lg"
                className="customModal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        New Asset
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="AssetName">
                                <Table className="modalTable" striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Owner</th>
                                            <th>State</th>
                                            <th>Department</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Control type="text" name="AssetName" required placeholder="Название"></Form.Control></td>
                                            <td><Form.Control type="text" name="AssetCategoty" required placeholder="Категория"></Form.Control></td>
                                            <td><Form.Control type="text" name="CurrentOwner" required placeholder="Владелец"></Form.Control></td>
                                            <td><Form.Control type="text" name="PN" required placeholder="Номер модели"></Form.Control></td>
                                            <td><Form.Control type="text" name="SN" required placeholder="Серийный номер"></Form.Control></td>
                                            <td><Form.Control type="text" name="Description" required placeholder="Описание"></Form.Control></td>
                                            <td><Form.Control type="text" name="IncomeDate" required placeholder="Дата прихода"></Form.Control></td>
                                            <td><Form.Control type="text" name="UserID" required placeholder="Автор изменений"></Form.Control></td>
                                            {/* <td><Form.Control type="text" name="DepID" required placeholder="Подразделение..."></Form.Control></td> */}
                                            <td><Form.Control as="select">
                                                {
                                                    this.state.deps.map(dep=>
                                                      <option key={dep.id}>{dep.name}</option>
                                                    )}
                                            </Form.Control></td>
                                            <td><Form.Control type="text" name="State" required placeholder="Статус"></Form.Control></td>
                                            <td><Form.Control type="text" name="Stock" required placeholder="Склад"></Form.Control></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};
export default AddAsset;