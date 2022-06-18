import React from 'react';
import "./Card.css";
import Spinner from 'react-bootstrap/Spinner';
import {useState } from 'react';
const Cards = ({show}) => {

    const {country, total, type} = show;
    const [loading, setLoading] = useState(false);
    
let url = `https://countryflagsapi.com/png/${country}`;

    
    console.log(show);

    if(loading){
        return(
            <div>
              <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
            </div>
        )
    }
    else{
        return(
        <div>
            <div className="card">
                <table className="table" cellSpacing="0" cellPadding="40">
                    <thead className="thead-table" >
                        <tr>
                            <th></th>
                            <th  >Country</th>
                            <th  scope="col">Status</th>
                            <th scope="col">Total Cases</th>
                        </tr>
                    </thead>
                    {/* <hr></hr> */}

                    <tbody>
                        <tr>
                            <td><img src={url} alt="flag" width="100px" height="70px" /></td>
                            <td><h3>{country}</h3></td>
                            <td><h3>{type}</h3></td>
                            <td><h3>{total}</h3></td>
                        </tr>
                    </tbody>
                    {/* <hr></hr> */}
                </table>
         
        </div>
        </div>
    )
        }
}

export default Cards;
