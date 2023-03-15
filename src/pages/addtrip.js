import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";
import styled from "styled-components";
import windowImg from "./Airplanewindow.png";

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
            onChange={handleChange}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            placeholder="end date"
            name="end"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estimated Trip Cost</label>
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
        <button >Submit</button>
      </Form>
    </MainCard>
  );
}


const Form = styled.form`
  text-align: center;
  padding: 13px;
  width: 50%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  height: 100%;
  padding: 0 30px;
  /* background-size: cover; */

  overflow: hidden;
  /* box-shadow: 0px 15px 10px grey, 8px 5px 5px grey; */
  /* background-size: 900px 1000px; */

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

  button {
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid white;
    border-radius: 50px;
    font-size: 23px;
    background-color: #2c444c;
    &:hover {
      background-color: #54818d;
    }
  }

  textarea {
    border: 1px solid grey;
    border-radius: 20px;
    width: 100%;
  }
`;

const MainCard = styled.main`
  background-image: url(${windowImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  /* height: 800px; */
  /* background-size: 2000px 1000px; */
  /* border-radius: 200px; */
  /* background-color: green; */
  /* border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px; */
`;

export default AddTrip;
