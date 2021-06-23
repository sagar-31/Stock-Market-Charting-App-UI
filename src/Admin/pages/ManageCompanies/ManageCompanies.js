import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { AddCompanyModal } from '../../components/ManageCompanies/AddCompanyModal/AddCompanyModal';
import "./ManageCompanies.css"

import { BASE_URL } from '../../../services/url';
import { getRequest } from '../../../services/NetworkRequests';

export const ManageCompanies = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [mode, setMode] = useState('add');
    const [editData, setEditData] = useState({});

    const toggleAddCompanyModal = (value) => {
        setIsModalOpen(value);
    }

    useEffect(() => {
        getRequest(BASE_URL + "/getAllCompanies").then(
            (data) => {
                console.log(data);
                setData(data);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, [])
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

    return (
      <div>
        <AddCompanyModal
          isOpen={isModalOpen}
          toggle={toggleAddCompanyModal}
          mode={mode}
          editData={editData}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          List of Companies
        </div>
        <div class="container">
          <div class="row" style={{ backgroundColor: "#304c5e",borderRadius:'5px',color:'white',padding:'3px' }}>
            <div class="col">Comapny Name</div>
            <div class="col">CEO</div>
            <div class="col">Board Directors</div>
            <div class="col">Brief Writeup</div>
            <div class="col">Edit</div>
          </div>
        </div>
        {data.map((item, index) => (
          <div key={index}>
            <div class="container">
              <div class="row">
                <div class="col">{item.companyName}</div>
                <div class="col">{item.ceo}</div>
                <div class="col">{item.boardOfDirectors}</div>
                <div class="col">{item.briefWriteup}</div>
                <div class="col">
                  <button
                    onClick={() => {
                      setMode("edit");
                      setEditData(item);
                      toggleAddCompanyModal(true);
                    }}
                    class="btn btn-warning"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))} 

        <div class="container">
          <div class="row">
            <div class = "col-12">
              <button
                onClick={() => {
                    setMode("add");
                    toggleAddCompanyModal(true);
                }}
                class="btn btn-primary"
              >
                Add Company
              </button>
            </div>
          </div>
        </div>

      </div>
    );
}