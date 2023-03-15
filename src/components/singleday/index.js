import React, { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import styled from "styled-components";

const singleDay = (prop) => {
  let { id } = useParams();

  const [render, setRender] = useState(prop.data.Activities);

  const [activity, setActivity] = useState();

  const handleChange = (e) => {
    setActivity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addActivity = {
      name: activity,
      DayId: id,
    };

    API.addActivity(addActivity).then((response) => {
      setRender((oldRender) => [...oldRender, { name: activity }]);
    });
  };

  return (
    <MainDiv class="row">
      <div >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Add Activities</label>
            <input
              className="form-control"
              type="text"
              placeholder="Activity"
              name="Activitie"
              onChange={handleChange}
            />
          </div>
          <button className="w-30 btn btn-primary btn-lg">Submit</button>
        </form>
      </div>

      <div >
        <div class="bg-light p-2 rounded">
          <h1 class="center-align">{prop.data.DayName}</h1>
          <ul class="list-group mb-3">
            {render?.map((activity, i) => {
              return (
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <h3>{activity.name}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  text-align: center;
  background-image: linear-gradient(skyblue, #FFD580);
  padding: 13px;
  background-color: rgba(255, 255, 255, 0.3);
  


  label {
    font-weight: bolder;
    padding: 7px;
    color: #2c444c;
    /* text-shadow: 1px 1px 1px #000000; */
    font-size: 23px;
    
  }

  button {
    color: white;
    font-size: 1px;
    margin: 3px;
    /* padding: 0.25em 1em; */
    border: 2px solid white;
    border-radius: 50px;
    font-size: 17px;
    background-color: #2c444c;
    &:hover {
      background-color: #54818d;
    }
  }


  
`;


export default singleDay;
