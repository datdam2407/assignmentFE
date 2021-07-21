import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './AdminProductList.css';
import { Link } from 'react-router-dom';

class AdminCategoryList extends PureComponent {

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
  // componentDidMount() {
  //   this.getData();
  // }
  
  getData() {
    // localStorage.getcategory("auth");
    axios
      .get('http://localhost:8080/categories/')
      .then(res => {
        var tdata = res.data;
        var slice = tdata.slice(this.state.offset,
          this.state.offset + this.state.perPage)
        this.setState({
          pageCount: Math.ceil(tdata.length / this.state.perPage),
          orgtableData: tdata,
          tableData: slice
        })
      });
  }

  // editCategory(categoryID) {
  //   const data = {

  //     categoryName: 'categoryName',
  //     categoryDescription: 'categoryDescription'

  //   }
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': localStorage.getItem('auth')
  //   };
  //   axios.put(`http://localhost8080/categories/${categoryID}`, data, { headers }).
  //     then(res => {
  //       console.log(res);
  //     }).catch(err => {
  //       console.log(err);
  //     })


  // }
  delCategory(item) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth')

    };

    axios.delete(`http://localhost:8080/categories/${item.categoryID}`, { headers })
      .then(res => {
        this.getData();
      }).catch(err => {
        console.log(err);
      })

  }
  render() {
    return (
      <div>
        <Link to="/createCategory" class="createButton" >Create new Category</Link>
        <table class="container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Discription</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tableData.map((category) => (
                <tr key={category.categoryID}>
                  <td>{category.categoryName}</td>
                  <td>{category.categoryDescription}</td>
                  <td>
                    <Link to={"/updateCategory/" + category.categoryID}>
                      <img className="editImage"
                        src='../images/edit.png' ></img>
                    </Link>
                      <img onClick={this.delCategory.bind(this, category)} className="editImage"
                        src='../images/delete.png' ></img>
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

export default AdminCategoryList;
