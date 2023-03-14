import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import API from "../../utils/API"
import { Modal, Button } from 'react-bootstrap'




const Trips = (prop) => {

    const data = { prop }

    const [guest, setGuest] = useState([])

    const [isShow, invokeModal] = useState(false)

    const [tripData, settripData] = useState({
        title: prop.data.title,
        start: prop.data.start,
        cost: prop.data.cost,
        end: prop.data.end,
        owner: prop.data.owner,
        description: prop.data.description,
    })

    const [formData, setFormData] = useState({
        title: tripData.title,
        start: tripData.start,
        end: tripData.end,
        cost: tripData.cost,
        description: tripData.description,
    });




    const fetchTrips = () => {
        API.getTripData(prop.data.id).then(data => {
            setGuest(data.user)
            settripData({
                title: data.title,
                start: data.start,
                end: data.end,
                cost: data.cost,
                owner: data.owner,
                description: data.description
            })

        })
    }





    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const initModal = () => {
        return invokeModal(!isShow)
    }

    useEffect(() => {
        fetchTrips()
    }, [isShow])



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(prop.token)
        API.editTrip(formData, prop.data.id, prop.token).then((response) => {
            if (response.status == 200) {

            }
        })
        initModal()

    }


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
                                <span class="badge bg-secondary rounded-pill">{guest.length}</span>
                            </h4>
                            <ul class="list-group mb-3">

                                {guest.map((name) => {
                                    return (
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">{name.email}</h6>
                                            </div>
                                            <span class="text-muted">button to remove?</span>
                                        </li>
                                    );
                                })}


                            </ul>
                        </div>
                        <div class="col-md-5 col-lg-8" >
                            <h4>Date of Trip: {tripData.start}</h4>
                            <h4>Cost: {tripData.cost}</h4>
                            <h4>Description:</h4>
                            <p>{tripData.description}</p>

                        </div>
                        <div class="row g-3">
                            <div class="col-md-5 col-lg-4 ">
                                {tripData.owner == prop.id ? (
                                    <button className="w-30 btn btn-primary btn-lg" onClick={initModal}>edit trip</button>
                                ) : null}
                            </div>
                            <div class="col-md-5 col-lg-8 justify-content-end">

                                <Link to={{ pathname: `/mytrips/${prop.data.id}`, prop: {guest} }}>  <button className="w-30 btn btn-primary btn-lg" >iternary</button></Link>
                                <button className="w-30 btn btn-primary btn-lg">chat</button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>React Modal Popover Example</Modal.Title>
                </Modal.Header>

                <form >
                    <div >
                        <label >Title</label>
                        <input type="text" placeholder="title" name="title" value={formData.title} onChange={handleChange} />
                    </div>
                    <div >
                        <label >start Date</label>
                        <input type="date" placeholder="start date" name="start" value={formData.start} onChange={handleChange} />
                    </div>
                    <div >
                        <label >end date</label>
                        <input type="date" placeholder="end date" name="end" value={formData.end} onChange={handleChange} />
                    </div>
                    <div >
                        <label >cost</label>
                        <input type="number" placeholder="cost" name="cost" value={formData.cost} onChange={handleChange} />
                    </div>

                    <div >
                        <label>Description</label>
                        <textarea rows="3" name="description" value={formData.description} onChange={handleChange}></textarea>
                    </div>

                </form>


                <Button variant="primary" onClick={handleSubmit}>
                    submit
                </Button>


            </Modal>

        </div>

    )


}

export default Trips