import NavbarCustomer from '../components/NavbarCustomer';
import './productCard.css';

import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
// import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar'


export default class ResultCard extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			offset: 0,
			tableData: [],
			orgtableData: [],
			perPage: 4,
			currentPage: 0,
            searchValue: sessionStorage.getItem('searchValue')
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
        axios.get(`http://localhost:8080/products/customer/ByName?productName=${this.state.searchValue}`)
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
		if(this.state.tableData == null){
			 this.props.location.push('/');
		}else{
		return (
			<>

				<NavbarCustomer /> 						

				<div className="grid-container">
					
				{
					
					this.state.tableData.map((item) => (

						<div className="product-card" key={item.productID}>
							<div className="badge">Hot</div>
							<div className="product-tumb">
								<img id="product-img" src={item.productImage} alt="product" />

							</div>
							<div className="product-details">
								<span className="product-catagory">{item.categoryName}</span>
								<h4><a href="/detail">{item.productName}</a></h4>
								<p>{item.productDiscription}</p>
								<div className="product-bottom-details">
									<div className="product-price"><small></small>
									{item.productPrice.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</div>
									<div className="product-links">
										<a><i className="fa fa-shopping-cart"></i></a>
									</div>
								</div>
							</div>
						</div>
					))
				}
				</div>
				<SearchBar/>


				<div className="paging">
					<ReactPaginate
						previousLabel={"prev"}
						nextLabel={"next"}
						breakLabel={"..."}
						breakClassName={"break-me"}
						pageCount={this.state.pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={this.handlePageClick}
						containerClassName={"paginationCard"}
						subContainerClassName={"pages pagination"}
						activeClassName={"active"} />
				</div>
			</>
		)
	}
}}