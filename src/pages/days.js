import API from "../utils/API";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

// const postId = window.location.href.split('/').pop();

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
                    <button className="w-30 btn btn-primary btn-sm" onClick={initModal}>
                        Add User Button
                    </button>
                ) : null}



            </div>

            <div class="col-12 col-lg-9 m-3 border">
                <div class="bg-light col-12">
                    <div class="card p-3">
                        <h1 class="text-center">{trips.title}</h1>
                        <h1 class="text-center">
                            {" "}
                            {trips.start} --- {trips.end}
                        </h1>
                        <h1 class="text-center">{trips.description}</h1>
                        <h1>{trips.guest}</h1>
                    </div>
                </div>

                <div class="row bg-white border">
                    {days.map((day, i) => {
                        return (
                            <div class="col-12  col-lg-4 mb-3">
                                <div class="card card-body bg-white">
                                    <h1>{day.DayName}</h1>
                                    <Link to={{ pathname: `/mytrips/day/${day.id}` }}>
                                        {" "}
                                        <button class="w-30 btn btn-secondary btn-sm">
                                            View Day
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>React Modal Popover Example</Modal.Title>
                </Modal.Header>

                <form onSubmit={handleSubmitGuest}>
                    <div className="form-group">
                        <label>Add User</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="email"
                            name="guestEmail"
                            value={guestEmail}
                            onChange={handleChangeGuest}
                        />
                    </div>
                </form>

                <Button variant="primary" onClick={handleSubmitGuest}>
                    submit
                </Button>
            </Modal>
        </div>
    );
};

export default Days;
