import React, {Component, useState, useEffect} from 'react';

import { AddStockExchangeModal } from '../../components/ManageExchange/AddStockExchangeModal/AddStockExchangeModal';
import "./ManageExchange.css";

import { BASE_URL } from '../../../services/url';
import { getRequest } from '../../../services/NetworkRequests';

export const ManageExchange = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);

    const toggleAddStockExchangeModal = (value) => {
        setIsModalOpen(value);
    } 

    useEffect(() => {
        getRequest(BASE_URL + '/stockExchanges').then(
            (data) => {
                console.log(data);
                setData(data);
            }
        ).catch(
            error => console.log(error)
        )
    }, [])

    return (
      <div>
        <AddStockExchangeModal
          isOpen={isModalOpen}
          toggle={toggleAddStockExchangeModal}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          List of Stock Exchange
        </div>
        <div class="container">
          <div class="row" style={{ backgroundColor: "#304c5e",borderRadius:'5px',color:'white',padding:'3px'}}>
            <div class="col">Stock Exchange Name</div>
            <div class="col">Brief</div>
            <div class="col">Address</div>
            <div class="col">Remark</div>
          </div>
        </div>
        {data.map((item, index) => (
          <div class="container">
            <div class="row">
              <div class="col">{item.stockExchangeName}</div>
              <div class="col">{item.brief}</div>
              <div class="col">{item.address}</div>
              <div class="col">{item.remarks}</div>
            </div>
          </div>
        ))}
        <div class="container">
          <div class="row">
            <div class = "col-12">
              <button
                onClick={() => {
                  toggleAddStockExchangeModal(true);
                }}
                class="btn btn-primary"
              >
                Add Stock Exchange
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}