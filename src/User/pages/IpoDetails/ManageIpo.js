import React, {Component, useState, useEffect} from 'react';

import { BASE_URL } from '../../../services/url';
import { getRequest } from '../../../services/NetworkRequests';
import { AddIpos } from '../../../Admin/components/ManageExchange/AddStockExchangeModal/AddIpos'; 

export const Ipos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleAddSector = (value) => {
        setIsModalOpen(value);
    } 

    const [data, setData] = useState([]);

    useEffect(() => {
        getRequest(BASE_URL + "/getAllIpos").then(
            (data) => {
                console.log(data);
                setData(data);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
      <div>
        <AddIpos
          isOpen={isModalOpen}
          toggle={toggleAddSector}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          Open Ipos
        </div>
        <div class="container">
          <div class="row" style={{ backgroundColor: "#304c5e",borderRadius:'5px',color:'white',padding:'3px' }}>
            <div class="col">Comapny Name</div>
            <div class="col">Price/Share</div>
            <div class="col">Total Shares</div>
            <div class="col">Open Date time</div>
            <div class="col">Remarks</div>
          </div>
        </div>
        <div>
          {data.map((item, index) => (
            <div className="ipo-list-container" key={index}>
              <div class="container">
                <div class="row">
                  <div class="col">{item.companyName}</div>
                  <div class="col">{item.price}</div>
                  <div class="col">{item.numOfShares}</div>
                  <div class="col">{item.dateTime}</div>
                  <div class="col">{item.remarks}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="container">
          <div class="row">
            <div class = "col-12">
              <button
                onClick={() => {
                  toggleAddSector(true);
                }}
                class="btn btn-primary"
              >
                Add New Ipo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
