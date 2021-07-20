import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './AdminProductList.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class AdminProductList extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0
      // modelIns: false

    }


    this.handlePageClick = this.handlePageClick.bind(this);

  }
  modelIns = () => {
    this.setState({ modelIns: !this.state.modelIns });

  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.loadMoreData()
    });

  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice
    })

  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    // localStorage.getItem("auth")
    axios
      .get('http://localhost:8080/products/')
      .then(res => {
        var tdata = res.data;
        console.log('data-->' + JSON.stringify(tdata))
        var slice = tdata.slice(this.state.offset,
          this.state.offset + this.state.perPage)
        this.setState({
          pageCount: Math.ceil(tdata.length / this.state.perPage),
          orgtableData: tdata,
          tableData: slice
        })
      });
  }


  render() {
    return (
      <div>
        <Link to="/create" class="createButton" >Create new Product</Link>

        <table class="container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Discription</th>
              <th>createDate</th>
              <th>updateDate</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tableData.map((item) => (
                <tr key={item.productID}>
                  <td>{item.productName}</td>
                  <td>{item.productDiscription}</td>
                  <td>{moment(item.createDate).format("MMMM Do YYYY")}</td>
                  <td>{moment(item.updateDate).format("MMMM Do YYYY")}</td>
                  <td>{item.productPrice.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}</td>
                  <td>{item.productQuantity}</td>
                  <td>
                  <img className="editImage" src='../images/edit.png' ></img>
                  <img className="editImage" src='../images/delete.png' ></img>
                  
                  </td>
               
                </tr>
              ))
            }
          </tbody>
        </table>
              
      <div className="commentBox">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
      </div>
    )
  }
}


export default AdminProductList;
