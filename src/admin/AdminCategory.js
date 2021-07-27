import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './AdminProductList.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default class AdminCategoryList extends PureComponent {

  
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
        .get('http://localhost:8080/categories/admin', { headers })
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
//  async getData() {
//     // localStorage.getcategory("auth");
//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': localStorage.getItem('auth')

//     };
//     let res = await axios.get('http://localhost:8080/categories/'), {headers};
//     var tdata = res.data;
//     var slice = tdata.slice(this.state.offset,
//       this.state.offset + this.state.perPage)
//       this.setState({
//       pageCount: Math.ceil(tdata.length / this.state.perPage),
//       orgtableData: tdata,
//       tableData: slice
//     });
//   }

  delCategory(item) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth')

    };

    axios.delete(`http://localhost:8080/categories/${item.categoryID}`, { headers })
      .then(res => {
        this.getData();
        alert("Delete Successfully")
      }).catch(err => {
        console.log(err);
      })

  }
  render() {
    return (
      <div>
        <Navbar/>

        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            </div>
        <Link to="/createCategory" className="createButton" >Create new Category</Link>
        <table className="container">
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
                    
                      <img onClick={this.delCategory.bind(this, category)}
                       className="editImage"
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

// class SearchFormCategory extends React.Component{
//   render()
//   {
//       return <form>
//           <input placeholder="Enter the name to find"/>
//       </form>
//   }
// }
// class TableCategory extends React.Component{
//   render()
//   {
//       return 
//           <table class="container">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Discription</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               this.state.tableData.map((category) => (
//                 <tr key={category.categoryID}>
//                   <td>{category.categoryName}</td>
//                   <td>{category.categoryDescription}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//   }
// }
