import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Modal, Button } from "react-bootstrap";
import StyledButton from "./Button.styled";
import styled from "styled-components";
const dayjs = require('dayjs')

const Trips = (prop) => {
  const data = { prop };

  const [guest, setGuest] = useState([]);

  const [isShow, invokeModal] = useState(false);

  const [tripData, settripData] = useState({
    title: prop.data.title,
    start: prop.data.start,
    cost: prop.data.cost,
    end: prop.data.end,
    owner: prop.data.owner,
    description: prop.data.description,
  });

  const [formData, setFormData] = useState({
    title: tripData.title,
    start: tripData.start,
    end: tripData.end,
    cost: tripData.cost,
    description: tripData.description,
  });

  const fetchTrips = () => {
    API.getTripData(prop.data.id).then((data) => {
      setGuest(data.user);
      settripData({
        title: formData.title,
        start: formData.start,
        end: formData.end,
        cost: formData.cost,
        owner: data.owner,
        description: formData.description,
      });
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const initModal = () => {
    return invokeModal(!isShow);
  };

  useEffect(() => {
    fetchTrips();
  }, [isShow]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prop.token);
    API.editTrip(formData, prop.data.id, prop.token).then((response) => {
      if (response.status == 200) {
      }
    });
    initModal();
  };

  return (
    <div>
      <div class="container my-3">
        <div class="bg-light p-2 rounded">
          <div class="row">
            <h1 class="center-align">{tripData.title}</h1>
          </div>
          <div class="row g-3">
            <div class="col-md-5 col-lg-4 ">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Attendees</span>
                <span class="badge bg-secondary rounded-pill">
                  {guest.length}
                </span>
              </h4>
              <ul class="list-group mb-3">
                {guest.map((name) => {
                  return (
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 class="my-0">{name.username}</h6>
                      </div>
                      <span class="text-muted">button to remove?</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class="col-md-5 col-lg-8">
              <h4>Date of Trip: {dayjs(tripData.start).format('MMMM D, YYYY')}</h4>
              <h4>Cost: {tripData.cost}</h4>
              <h4>Description:</h4>
              <p>{tripData.description}</p>
            </div>
            <div class="row g-3">
              <div class="col-md-5 col-lg-4 ">
                {tripData.owner == prop.id ? (
                  <StyledButton
        
                    onClick={initModal}
                  >
                    edit trip
                  </StyledButton>
                ) : null}
              </div>
              <div class="col-md-5 col-lg-8 justify-content-end">
                <Link
                  to={{
                    pathname: `/mytrips/${prop.data.id}`,
                    prop: { tripData },
                  }}
                >
                  {" "}
                  <StyledButton className="">iternerary</StyledButton>
                </Link>
                <Link to={{ pathname: `/homechat` }}><StyledButton className="">chat</StyledButton>  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Edit Trip</Modal.Title>
        </Modal.Header>

        <Form>
          <div>
            <label>Destination</label>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              type="date"
              placeholder="start date"
              name="start"
              value={formData.start}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="date"
              placeholder="end date"
              name="end"
              value={formData.end}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Estimated Trip Cost</label>
            <input
              type="number"
              placeholder="cost"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              rows="3"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </Form>

        <StyledButton variant="primary" onClick={handleSubmit}>
          Submit
        </StyledButton>
      </Modal>
    </div>
  );
};

const Form = styled.form`
  text-align: center;
  background-image: linear-gradient(skyblue, whitesmoke);
  padding: 13px ;

  label {
    font-weight: bolder;
    padding: 7px;
    color:  #2c444c;
    text-shadow: 1px 1px 1px #000000;
    font-size: 23px;
    text-align: left;
  }

  input {
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 50px;
    width: 100%;
  }

  input,
  label {
    display: block;
    margin-top: 20px;
  }
/* 
  input {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid grey;
    padding: 10px;
    border-radius: 50px;
  } */

  textarea {
    border: 1px solid grey;
    border-radius: 20px;
    width: 100%;
  }

  button {
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 50px;
    background-color: #2c444c;
    &:hover{
        background-color: #54818d;
    }
  }

`;

export default Trips;
