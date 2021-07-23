import React, { Component } from 'react';
import './AdminAction.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AdminCreateCategory extends Component {

    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.createCategory = this.createCategory.bind(this);
        this.state = {
            categoryName: '',
            categoryDescription: '',
        }
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

    createCategory() {
        var category = {
            categoryName: this.state.categoryName,
            categoryDescription: this.state.categoryDescription
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth')
        };

        axios.post('http://localhost:8080/categories/', category, {
            headers
        })

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
                        <button onClick={this.createCategory} >Create</button>
                    </Link>
                </div>
            </div>
        )
    }
}
