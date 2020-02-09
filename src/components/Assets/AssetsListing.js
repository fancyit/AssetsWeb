import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { getData } from '../../store/actions/assetActions'
import { authCheck } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class AssetsListing extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], modal: false, isLoading:true }
  }
  componentDidMount() {
    const AssetsUrl = 'asset/GetAssets';
    this.props.getData(AssetsUrl);
    console.log(this.state.isLoading);
    const { expires } = this.props;
    const depsUrl = 'asset/GetDepartmentsList';
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    const {isLoggedIn} = this.props;
    if (!isLoggedIn) return <Redirect to='Login' />
    const { assets } = this.props;
    const {isLoading} = this.props;
    const { deps } = this.props;
    //  Object.keys(assets[0]).map(x => {
    //   return { title: x, field: x }
    // });
    const tableData = assets ? assets.map(a => {
      return {
        id: a.id,
        name: a.name,
        assetCategory: a.assetCategory,
        currentOwner: a.currentOwner,
        supplier: a.supplier,
        state: a.state,
        depName: a.department
      }
    }) : undefined;
    let depsOpts = this.state.deps.map((x, y) =>
      <option key={y} value={x.name}>{x.name}</option>)
    return (
      <div className="row">
        <div className="col push-s1 s10">
          <MaterialTable
              columns={[
                { title: 'Id', field: 'id' },
                { title: 'Name', field: 'name' },
                { title: 'Category', field: 'assetCategory' },
                { title: 'Owner', field: 'currentOwner' },
                { title: 'Supplier', field: 'supplier' },
                { title: 'State', field: 'state' },
                { title: 'Department', field: 'department' },
              ]}
              data={tableData}
              options={
                {
                  pageSize: 15,
                  pageSizeOptions: [15, 25, 50, 100],
                  showTitle: false
                }
              }
              isLoading={!tableData.length}
            />
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    assets: state.asset.assets,
    isLoading: state.asset.isLoading,
    isLoggedIn: state.auth.isLoggedIn
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url) => dispatch(getData(url)),
    authCheck: (expTime) => dispatch(authCheck(expTime))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(AssetsListing);