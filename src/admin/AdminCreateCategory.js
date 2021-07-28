import React, { useState } from 'react';
import './AdminAction.css';
import axios from 'axios';
import { Link , useHistory} from 'react-router-dom';
import validator from 'validator'


export default function AdminCreateCategory() {

    
  const [categoryName, setcategoryName] = useState("");
  const [categoryDescription, setcategoryDescription] = useState("");
  const [validation, setValidation] = useState("");
  const history = useHistory();
    

    
    async function createCategory() {
        var category = {
            'categoryName': categoryName,
            'categoryDescription': categoryDescription
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth')
        };

         await axios.post('http://localhost:8080/categories/', category, {
            headers
        
        }
        )
        .then(() => {
            history.push('/admin/categories/')
        }).catch((error) => {
            console.log(error)
        })

    }
    const validateAll = () =>{
        const msg ={}
        if(validator.isEmpty(categoryName) ){
          msg.categoryName= "Please input name of Category!!!"
        }
        if(validator.isEmpty(categoryDescription)){
          msg.categoryDescription= "Please input descroption!!!"
        }
        setValidation(msg)
        if(Object.keys(msg).length > 0 ) return false;
        return true;
      }
      async function handleSubmit(event) {
    
        event.preventDefault();
        const isValid = validateAll();
            const authortication = await createCategory();
  
    }
    
        return (
            <div className="containerr">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Category Name</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="text"
                            id="fname"
                            name="categoryName"
                            placeholder="categoryName.." required
                            onChange={(e) => setcategoryName(e.target.value)} />
      <div style={{color : "red"}}>{validation.categoryName}</div>
                        
                    </div>
                </div>
                <div className="row">

                    <div className="col-25">
                        <label htmlFor="fname">Category Description</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="text"
                            id="fname"
                            name="categoryDescription"
                            placeholder="categoryDescription.." required
                            onChange={(e) => setcategoryDescription(e.target.value)} />
                            <div style={{color : "red"}}>{validation.categoryDescription}</div>
                        
                    </div>
                </div>


                <div className="row">
                <button onClick={(e) => { handleSubmit(e) }}
                 >Create</button>
                 <Link to='/admin/categories/'>
          <button type="button" className="cancelbtn">Cancel</button>
        </Link>
                </div>
            </div>
        )
        }

