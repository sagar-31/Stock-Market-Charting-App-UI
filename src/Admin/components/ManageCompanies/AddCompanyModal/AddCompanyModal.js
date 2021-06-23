import React, { useState, useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import { postRequest, putRequest, getRequest } from "../../../../services/NetworkRequests";
import { BASE_URL } from "../../../../services/url";

import './AddCompanyModal.css'

const customStyles = {
    content: {
      top: '40%',

      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth: window.innerWidth*0.25,
      maxHeight: window.innerHeight*0.9,
      margin: 'auto',
      backgroundColor: '#304c5e',
      color: 'white',
      borderRadius: '2rem'
    },
  };

  export function AddCompanyModal({isOpen, toggle, mode, editData}) {

    const [formData, setFormData] = useState({companyName: '', turnover: '', ceo: '', boardOfDirectors: '', briefWriteup: ''});
    const [ipoDetails, setIpoDetails] = useState({pricePerShare: null, totalShares: null, openDateTime: "", remarks: ""});
    const [stockExchanges, setStockExchanges] = useState([]);
    const [selectedStockExchanges, setSelectedStockExchanges] = useState([]);

    const addCompany = (formData) => {
        console.log(ipoDetails)
            console.log('there was no ipo details found!')
            console.log(formData);
            postRequest(BASE_URL + "/addnewcompany", formData).then(
                (data) => {
                    console.log(data);
                }
            ).catch(
                error => console.log(error)
            )
        }

    const updateCompany = (formData) => {
        console.log(formData);
        putRequest(BASE_URL + "/updateCompany/"+formData.id, formData).then(
            (data) => {
                console.log(data);
            }
        ).catch(
            error => console.log(error)
        )
    }
  //   const deleteCompany = (formData) => {
  //     console.log(formData);
  //     axios.delete(BASE_URL + "/deleteCompany/"+formData.id, {
  //       headers: {
  //         Authorization: authorizationToken
  //       },
  //       data: {
  //         source: source
  //       }
  //     });
  // }

    useEffect(() => {
        console.log('this is edit data', editData)
        if(mode === 'edit') {
            setFormData({companyName: editData.companyName, turnover: editData.turnover, ceo: editData.ceo, boardOfDirectors: editData.boardOfDirectors, briefWriteup: editData.briefWriteup})
        } else {
            setFormData({companyName: '', turnover: '', ceo: '', boardOfDirectors: '', briefWriteup: ''})
        }
    }, [mode])

    const onSubmit = () => {
        if(mode === 'add') {
            addCompany(formData);
        } else {
            let tempData = formData;
            tempData['id'] = editData.id;
            updateCompany(tempData);
        }
    }

    // getting stock exchanges
    useEffect(() => {
        getRequest(BASE_URL + '/stockExchanges').then(
            (data) => {
                console.log(data);
                setStockExchanges(data);
            }
        ).catch(
            error => console.log(error)
        )
    }, [])

    return (
      <div id='modal'>
        <Modal
          isOpen={isOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="heading-modal">Create new company</div>
          <div>
            <div className="single-input-conatainer">
              <div class="container">
                <div class="row">
                  <div class="col">Comapany Name</div>
                  <div class="col">
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData((data) => ({
                          ...data,
                          companyName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-input-conatainer">
              <div class="container">
                <div class="row">
                  <div class="col">CEO</div>
                  <div class="col">
                    <input
                      type="text"
                      value={formData.ceo}
                      onChange={(e) =>
                        setFormData((data) => ({
                          ...data,
                          ceo: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-input-conatainer">
              <div class="container">
                <div class="row">
                  <div class="col">Board Members</div>
                  <div class="col">
                    <input
                      type="text"
                      value={formData.boardOfDirectors}
                      onChange={(e) =>
                        setFormData((data) => ({
                          ...data,
                          boardOfDirectors: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-input-conatainer">
              <div class="container">
                <div class="row">
                  <div class="col">Turn Over</div>
                  <div class="col">
                    <input
                      type="text"
                      value={formData.turnover}
                      onChange={(e) =>
                        setFormData((data) => ({
                          ...data,
                          turnover: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-input-conatainer">
              <div class="container">
                <div class="row">
                  <div class="col">Brief Description</div>
                  <div class="col">
                    <input
                      type="text"
                      value={formData.briefWriteup}
                      onChange={(e) =>
                        setFormData((data) => ({
                          ...data,
                          briefWriteup: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-input-conatainer">
              <div class="container">
                <div class="row">
                  <div class="col">Stock Exchanges</div>
                  <div class="col">
                    {stockExchanges.map((item, index) => (
                      <div>
                        <input
                          type="checkbox"
                          value={item.stockExchangeName}
                          onChange={(e) => {
                            var temp = selectedStockExchanges;
                            if (
                              selectedStockExchanges.includes(
                                item.stockExchangeName
                              )
                            ) {
                              var index = temp.indexOf(item.stockExchangeName);
                              temp.splice(index, 1);
                              setSelectedStockExchanges((data) => [...temp]);
                            } else {
                              setSelectedStockExchanges((data) => [
                                ...selectedStockExchanges,
                                item.stockExchangeName,
                              ]);
                            }
                          }}
                          name={item.stockExchangeName}
                        />
                        {item.stockExchangeName}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* {selectedStockExchanges.map((item, index) => (
              <div className="single-input-conatainer">
                <div class="container">
                  <div class="row">
                    <div class="col">Company Code [{item}]</div>
                    <div class="col">
                      <input
                        type="text"
                        value={formData.briefWriteup}
                        onChange={(e) =>
                          setFormData((data) => ({
                            ...data,
                            briefWriteup: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>

          <button
            onClick={() => {
              //   onSubmit();
              addCompany(formData);
            }}
            class="btn btn-success"
          >
            Submit
          </button>
          <button onClick={() => toggle(false)} class="btn btn-warning">
            Close
          </button>
        </Modal>
      </div>
    );
  }