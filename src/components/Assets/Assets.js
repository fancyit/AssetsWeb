import React, { Component } from 'react';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { httpGet } from '../../helpers/network';
import { AddAsset } from './AddAsset';

export class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = { assets: [], addModalShow: false }
    }
    componentDidMount() {
        const endPoint = 'asset/getassets';
        this.refreshList(endPoint);
    }
    refreshList(url) {
        httpGet(url).then(json =>
            this.setState({ assets: json })
        )
    }
    render() {

        const { assets } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Owner</th>
                            <th>State</th>
                            <th>Department ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map(a =>
                            <tr key={a.id}>
                                <td>{a.name}</td>
                                <td>{a.assetCategory}</td>
                                <td>{a.currentOwner}</td>
                                <td>{a.state}</td>
                                <td>{a.department}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary' onClick={() => this.setState({ addModalShow: true })}>
                        Add new asset
               </Button>
                    <AddAsset
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />
                </ButtonToolbar>
            </div>
        )
    }
}
