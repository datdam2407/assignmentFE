import React, { Component } from 'react';
import './AdminAction.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  Validator from './Validator';


export default class AdminUpdateCategory extends Component {

    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.updateCategory = this.updateCategory.bind(this);

        this.state = {
            categoryID: null,
            categoryName: '',
            categoryDescription: '',
            errors: {},
            
    }
    const requiredWith = (value, field, state) => (!state[field] && !value) || !!value;
    const rules = [
        {
            field: 'categoryName',
            method: 'isEmpty',
            validWhen: false,
            message: 'This field is required.',
        },
        {
            field: 'categoryDescription',
            method: 'isEmpty',
            validWhen: false,
            message: 'This field is required.',
        },
    ]       
    this.validator = new Validator(rules);
    }
    componentDidMount() {
        this.getCategory(this.props.match.params.id);
      }
      getCategory(ID){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth')
          };
            axios
              .get(`http://localhost:8080/categories/admin/${ID}` , {headers})
              .then(res => {                
                this.setState({
                    categoryID : res.data.categoryID,
                    categoryName : res.data.categoryName,
                    categoryDescription : res.data.categoryDescription
                })
              });
          
      }
      updateCategory(e) {
        e.preventDefault();

        this.setState({
            errors: this.validator.validate(this.state),
        });
        var data = {
          categoryName: this.state.categoryName,
          categoryDescription: this.state.categoryDescription,
        }; 
        console.log(data);
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('auth')
              };
    if(window.confirm('Do you want to update this category!')){

    axios.put(`http://localhost:8080/categories/admin/${this.state.categoryID}`, 
    data, { headers }).
    then(() => {
        alert("Update Suscessfully");
        this.props.history.push('/admin/categories/')
    }).catch(err => {
    //     if(err.response){
    
    //         if(err.response.data.categoryName === "Hey input category's name...."){
    //             alert("Name is empty");
    //         }
    //         else if(err.response.data.categoryDescription === "Should be inputed category's description...."){
    //             alert("Description is empty");
    //         }
    //     }
    //     else{
    //         alert("Fail to update category!");
    //     }
    // })
    })
}
}
      onChangeName(e) {
        
        this.setState({
            categoryName: e.target.value,
        });
    }
    
    onChangeDescription(e) {
        this.setState({
            categoryDescription: e.target.value
        });
    }
    render() {
        const { errors } = this.state;

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
                    {errors.categoryName && <div className="validation" style={{ display: 'block', color: "red" }}>{errors.categoryName}</div>}

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
                    {errors.categoryDescription && <div className="validation" style={{ display: 'block', color: "red" }}>{errors.categoryDescription}</div>}

                    <Link to='/admin/categories/'>
          <button type="button" >Cancel</button>
        </Link>
                
                    <div class="row">
                        
                        <button onClick={this.updateCategory} >Update</button>
                    </div>
            </div>
        )
    }
}
