import React, { useState } from 'react';
import Modal from 'react-modal';

import { postRequest, putRequest } from "../../../../services/NetworkRequests";
import { BASE_URL } from "../../../../services/url";

// import './AddIpo.css'

const customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth: window.innerWidth*0.3,
      margin: 'auto',
      backgroundColor: '#304c5e',
      color: 'white',
      borderRadius: '2rem'
    },
  };

  export function AddIpos({isOpen, toggle}) {

    const [formData, setFormData] = useState({companyName: '', stockExchange: '', price: '', numOfShares: '',dateTime: '', remarks: ''});

    const AddIpo = (formData) => {
        console.log(formData)
        postRequest(BASE_URL + "/addIpo", formData).then(
            (data) => {
                console.log(data);
            }
        ).catch(
            error => console.log(error)
        )
    }

    return (
      <div>
        <Modal
          isOpen={isOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="heading-modal">Add new IPO</div>
          <div>
              <div className="single-input-container">
                <div>
                    Company Name:
                </div>
                <div style={{paddingTop:1}}>
                    <input
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, companyName: e.target.value}))}
                    />
                </div>
              </div>
              <div className="single-input-container">
                <div>
                    Stock Exchange:
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, stockExchange: e.target.value}))}
                    />
                </div>
              </div>
              <div className="single-input-container">
                <div>
                    Price/Share:
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, price: e.target.value}))}
                    />
                </div>
              </div>
              <div className="single-input-container">
                <div>
                    Number of Shares:
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, numOfShares: e.target.value}))}
                    />
                </div>
              </div>
              <div className="single-input-container">
                <div>
                    Issue Date:
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, dateTime: e.target.value}))}
                    />
                </div>
              </div>
              <div className="single-input-container">
                <div>
                    Remarks:
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, remarks: e.target.value}))}
                    />
                </div>
              </div>
          </div>
          <button onClick={() => AddIpo(formData)} class="btn btn-success">Submit</button>
          <button onClick={() => toggle(false)} class="btn btn-warning">Close</button>
        </Modal>
      </div>
    );
  }