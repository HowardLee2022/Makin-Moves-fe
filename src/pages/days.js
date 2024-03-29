import API from "../utils/API";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
const dayjs = require('dayjs')
import styled from "styled-components";
import StyledButton from "../components/trips/Button.styled";


const Days = (prop) => {
    let { id } = useParams();
    const [trips, setTrips] = useState([]);
    const [days, setDays] = useState([]);
    const [guestEmail, setGuestEmail] = useState();
    const [isShow, invokeModal] = useState(false);
    const [guest, setGuest] = useState([]);
    const navigate = useNavigate()

    const initModal = () => {
        return invokeModal(!isShow);
    };

    const [daysData, setDaysData] = useState({
        DayName: "",
        TripId: id,
    });

    const handleChange = (e) => {
        setDaysData({
            ...daysData,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeGuest = (e) => {
        setGuestEmail(e.target.value);
    };

    //fetches trip
    const fetchTrips = () => {
        API.getTripData(id).then((data) => {
            setTrips(data);
            setGuest(data.user);
        });
    };

    const fetchDays = () => {
        API.getDaysData(id).then((data) => {
            setDays(data);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        API.addDays(daysData).then((response) => {
            if (response.status == 200) {
            }
        });
    };

    const handleSubmitGuest = (e) => {
        e.preventDefault();
        const addUser = {
            email: guestEmail,
            tripId: id,
        };
        console.log(addUser);
        API.addUserToTrip(addUser).then((response) => {
            if (response.status == 200) {
                initModal();
                setGuest((oldGuest) => [...oldGuest, { email: guestEmail }]);
            }
        });
    };

    const handleDelete = (e) => {
        e.preventDefault();
        API.deleteTrip(id,prop.token).then((response) => {
            if(response.status==200){
                // prop.set()
                navigate("/mytrips")
            }
        })
    }

    useEffect(() => {
        fetchTrips();
        fetchDays();
    }, []);

    return (
        <OGdiv>

        <div class="row">
            <div class="col-12 col-lg-2 m-3 bg-light border">
                <br></br>
                {trips.owner == prop.userId ? (
                    <button className="w-100 btn btn-danger btn-lg" onClick={handleDelete}>Delete</button>
                ) : null}
                <br></br>
                <br></br>
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Attendees</span>
                    <span class="badge bg-secondary rounded-pill">{guest?.length}</span>
                </h4>
                <ul class="list-group mb-3">
                    {guest?.map((name) => {
                        return (
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 class="my-0">{name.email}</h6>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                {trips.owner == prop.userId ? (
                    <StyledButton className="w-30 btn btn-primary btn-sm" onClick={initModal}>
                        Add Guest
                    </StyledButton>
                ) : null}



            </div>

            <div class="col-12 col-lg-9 m-3">
                <Trip class="bg-light col-12">
                    <div >
                        <h1 class="text-center">{trips.title}</h1>
                        <h1 class="text-center">
                            {" "}
                            {dayjs(trips.start).format('MMMM D, YYYY')} to {dayjs(trips.end).format('MMMM D, YYYY')}
                        </h1>
                        <h1 class="text-center">{trips.description}</h1>
                        <h1>{trips.guest}</h1>
                    </div>
                </Trip>

                <div class="row">
                    {days.map((day, i) => {
                        return (
                            <div class="col-12  col-lg-4 mb-3">
                                <div class="card card-body bg-white">
                                    <h1>{day.DayName}</h1>
                                    <Link to={{ pathname: `/mytrips/day/${day.id}` }}>
                                        {" "}
                                        <StyledButton class="w-30 btn btn-secondary btn-sm">
                                            View Day
                                        </StyledButton>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title><b>Add Guest</b></Modal.Title>
                </Modal.Header>

                <form onSubmit={handleSubmitGuest}>
                    <div className="form-group">
                        <br></br>
                        <label>Guest's Email</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="email"
                            name="guestEmail"
                            value={guestEmail}
                            onChange={handleChangeGuest}
                        />
                        <br></br>
                    </div>
                </form>

                <StyledButton variant="primary" onClick={handleSubmitGuest}>
                    Submit
                </StyledButton>
            </Modal>
        </div>
        </OGdiv>
    );
};



const OGdiv = styled.div`

background-image: linear-gradient(skyblue, #FFD580);
/* margin: 0 auto; */
text-align: center;



`;



const Trip = styled.div`

background-color: rgba(255, 255, 255, 0.3);
border-radius: 

`;



export default Days;
