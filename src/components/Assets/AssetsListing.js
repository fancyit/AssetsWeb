import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { getData } from '../../store/actions/assetActions'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class AssetsListing extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], modal: false, isLoading:true }
    this.onDataChange = this.onDataChange.bind(this);
  }
  componentDidMount() {
    const AssetsUrl = 'asset/GetAssets';
    this.props.getData(AssetsUrl);           
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onDataChange = (e) =>{
    new Promise((resolve, reject)=>{
      setTimeout(()=> 
        resolve(console.log(e)),3000)
      });    
  }
  render() {
    const {assets, isLoading, isLoggedIn, fetchError} = this.props;
    if (!isLoggedIn||fetchError) return <Redirect to='Login' />    
    const tableData = assets ? assets.map(a => {
      return {
        id: a.id,
        name: a.name,
        assetCategory: a.assetCategory,
        currentOwner: a.currentOwner,
        supplier: a.supplier,
        state: a.state,
        depName: a.department,
        depCode: a.departmentCode
      }
    }) : undefined;       
    return (
      <div className="row">
        <div className="col push-s1 s10">
          <MaterialTable
              columns={[
                //{ title: 'Id', field: 'id' },
                { title: 'Name', field: 'name' },
                { title: 'Category', field: 'assetCategory' },
                { title: 'Owner', field: 'currentOwner' },
                { title: 'Supplier', field: 'supplier' },
                { title: 'State', field: 'state' },
                { title: 'Department', field: 'depName' },                
                {title: 'MVZ', field: 'depCode' }
              ]}
              data={tableData}
              options={
                {
                  pageSize: 15,
                  pageSizeOptions: [15, 25, 50, 100],
                  showTitle: false,
                  searchFieldStyle: {"borderBottom": "none"}
                }
              }
              // actions={[                
              //   (rowData) => {
              //     return rowData
              //       ? { icon: 'save', disable: true, onClick: (rowData) => { /* anythink */ } }
              //       : { icon: 'another-icon', disable: false, onClick: (rowData) => { /* anythink */ } }
              //  }
              // ]}
              isLoading={isLoading}
              editable = {
                {onRowUpdate : this.onDataChange}
                //onRowDelete = {onDataDelete}
              }
            />          
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    assets: state.asset.assets,
    isLoading: state.asset.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    fetchError: state.asset.fetchError
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url) => dispatch(getData(url))    
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(AssetsListing);