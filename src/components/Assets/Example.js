import React from 'react';
import { MDBDataTable, MDBIcon, MDBSelect } from "mdbreact";
import { httpGet } from '../../helpers/network';
import { MDBContainer, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


export class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = { assets: [], deps: [], modal: false }
  }
  componentDidMount() {
    const AssetsUrl = 'DbOperations/GetAssets';
    const depsUrl = 'DbOperations/GetDepartments';
    this.refresAssetList(AssetsUrl);
    this.refresdepsList(depsUrl);  
  }
  refresAssetList(url) {
    httpGet(url).then(json =>
      this.setState({ assets: json }))
  }
  refresdepsList(url) {
    httpGet(url).then(json =>      
      this.setState({ deps: json }))
  }
  toggle = () => {
    // let modalNumber = 'modal' + nr
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const { assets } = this.state;
    const { deps } = this.state;
    console.log(assets);
    
    const data = {
      columns: [
        {
          label: 'id',
          field: 'id',
          sort: 'asc',
          width: 50
        },
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Category',
          field: 'assetCategory',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Owner',
          field: 'currentOwner',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Supplier',
          field: 'supplier',
          sort: 'asc',
          width: 200
        },
        {
          label: 'State',
          field: 'state',
          sort: 'asc',
          width: 50
        },
        {
          label: 'Department',
          field: 'depName',
          sort: 'asc',
          width: 75
        },
        {
          label: 'Add | Edit',
          field: 'actions'

        }
      ],
      rows: assets.map(a => {
        return {
          id: a.id,
          name: a.name,
          assetCategory: a.assetCategory,
          currentOwner: a.currentOwner,
          supplier: a.supplier,
          state: a.state,
          depName: a.departmentName,
          actions: <div className="actionsColumn">
            <MDBBtn type="button"  size="sm" onClick={this.toggle}>Add</MDBBtn>
            <MDBBtn type="button" size="sm" onClick={this.toggle}>Edit</MDBBtn>
          </div>
          // time: datetime.create(transaction.date).format('H:M:S')
        }
      })
    }       
    let depsOpts = this.state.deps.map((x, y) => 
      <option key={y} value={x.name}>{x.name}</option>)      
    return (
      <MDBContainer>
        <MDBContainer>
          <MDBDataTable data={data} striped bordered small></MDBDataTable>
        </MDBContainer>
        <MDBContainer >
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} >
            <MDBModalHeader toggle={this.toggle} ><MDBIcon icon="desktop" /> Add asset</MDBModalHeader>
            <MDBModalBody>
              <form className="mx-3 grey-text">
                <MDBInput label="Asset name" />
                <MDBInput label="Asset category" />
                <MDBInput label="Owner" />
                <MDBInput label="Supplier" />
                <MDBInput label="State" />               
                <select className="browser-default custom-select" placeholder="deps">
                  {depsOpts}                    
                </select>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
              <MDBBtn color="primary" onClick={this.HandleSubmit}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </MDBContainer>
    )
  }
}
