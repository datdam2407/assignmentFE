import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './AdminProductList.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AdminSearchBar from './AdminSearchBar'
import deleteImg from '../asset/images/delete.png'
import editImg from '../asset/images/edit.png'
class AdminProductList extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0
      
    }

    this.getData();
    this.handlePageClick = this.handlePageClick.bind(this);

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

 
  getData() {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('auth')
  
      };
    axios
        .get('http://localhost:8080/products/admin', { headers })
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
  delProduct(item) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth')

    };
    axios.delete(`http://localhost:8080/products/manager/${item.productID}`, { headers })
      .then(res => {
        alert("Delete Sucessfully")
        this.getData();
      }).catch(err => {
        console.log(err);
      })

  }
  render() {
   
    return (
      <div>
        <AdminSearchBar/>
        <Link to="/admin/create/" className="createButton" >Create new Product</Link>
   
        <table className="container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Discription</th>
              <th>createDate</th>
              <th>updateDate</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
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
                  <td>{item.productStatus}</td>
                  <td>
                  <Link to={"/admin/updateProduct/" + item.productID}>
                      <img className="editImage"
                        src={editImg} ></img>
                    </Link>
                  <Link to={"/admin/products/"}> 
                  <img onClick={this.delProduct.bind(this, item)} className="editImage" 
                  src={deleteImg} ></img>
                  </Link>
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



