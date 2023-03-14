import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

function AddTrip(prop) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.addTrip(formData, prop.token).then((response) => {
      if (response.status == 200) {
        setFormData({
          title: "",
          start: "",
          end: "",
          description: "",
        });
        navigate("/mytrips");
      }
    });
  };

  return (
    <MainCard>
      <Form className="form-group mb-3" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>start Date</label>
          <input
            type="date"
            placeholder="start date"
            name="start"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>end date</label>
          <input
            type="date"
            placeholder="end date"
            name="end"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>cost</label>
          <input
            type="number"
            placeholder="cost"
            name="cost"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            rows="3"
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-outline-info">Submit</button>
      </Form>
    </MainCard>
  );
}

const Form = styled.form`
  text-align: center;
  padding: 13px;
  background: url("./airplainwindow.png");
  background-color: salmon;
  border-radius: 250px;
  box-shadow: 0px 15px 10px grey, 8px 5px 5px grey;

  label {
    font-weight: bold;
    padding: 11px;
  }

  input {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid deepskyblue;
    padding: 10px;
  }

  input,
  label {
    display: block;
  }

  button {
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  }

  textarea {
    border: 3px solid deepskyblue;
  }
`;

const MainCard = styled.main`
  
  background-color: green;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
`;

export default AddTrip;
