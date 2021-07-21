import React, { Component } from 'react';
import './AdminAction.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AdminCreateProduct extends Component {

    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.updateCategory = this.updateCategory.bind(this);

        this.state = {
            categoryID: null,
            categoryName: '',
            categoryDescription: '',
    };
    }
    componentDidMount() {
        this.getCategory(this.props.match.params.id);
      }
      getCategory(ID){
            axios
              .get(`http://localhost:8080/categories/${ID}`)
              .then(res => {                
                this.setState({
                    categoryID : res.data.categoryID,
                    categoryName : res.data.categoryName,
                    categoryDescription : res.data.categoryDescription
                })
              });
          
      }
      updateCategory() {
        var data = {
          categoryName: this.state.categoryName,
          categoryDescription: this.state.categoryDescription,
        }; 
        console.log(data);
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('auth')
              };
        
    axios.put(`http://localhost:8080/categories/${this.state.categoryID}`, 
    data, { headers }).
       then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
      onChangeName(e) {
        this.setState({
            categoryName: e.target.value
        });
    }
    
    onChangeDescription(e) {
        this.setState({
            categoryDescription: e.target.value
        });
    }
    
  
    render() {
        return (
            <div class="containerr">
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Category Name</label>
                        </div>
                        <div class="col-75">
                            <input 
                                type="text" 
                                id="fname" 
                                name="categoryName" 
                                placeholder="categoryName.." 
                                value={this.state.categoryName}
                                onChange={this.onChangeName}
                            />
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-25">
                            <label for="fname">Category Description</label>
                        </div>
                        <div class="col-75">
                            <input 
                                type="text" 
                                id="fname" 
                                name="categoryDescription" 
                                placeholder="categoryDescription.." 
                                value={this.state.categoryDescription}
                                onChange={this.onChangeDescription}
                            />
                        </div>
                    </div>
   
                    <div class="row">
                    <Link to={"/categories/"}>
                        <button  onClick={this.updateCategory} >Update</button>
                    </Link>
                    </div>
            </div>
        )
    }
}
