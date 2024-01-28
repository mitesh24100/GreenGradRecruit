import React, { useState } from "react";
import Navbar from "../Navbar";
import ShowTable from "../ShowTable1";
import { Link } from "react-router-dom";
import { Button, Dropdown } from 'react-bootstrap';
import "./index.css";
import Job from "../../Assets/jobs.json";
import Filter from "../Filter";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const JobList = ()=> {
    const JobData = JSON.parse(localStorage.getItem("item")) || [];
    const Jobs = []
    const [active, setActive] = useState(false);

    function saveClick(id, logo, company, position, location, posted) {
        window.localStorage.setItem(
          "Job",
          JSON.stringify(id, logo, company, position, location, posted)
        );
        console.log(JobData);
    }

    return(
        <>
            <Navbar />
            <div className="jobs-for-you">
                <div className="job-background">
                    <div className="title">
                        <h2>Our Jobs</h2>
                    </div>
                </div>
                <div className="job-section">
                    <div className="job-page">
                        {Job.map(
                        ({ id, logo, company, position, location, posted, role }) => {
                            return (
                            <div className="job-list">
                                <div className="job-card">
                                <div className="job-name">
                                    <img
                                    src={
                                        logo.length > 20
                                        ? logo
                                        : require(`../../Assets/images/${logo}`)
                                    }
                                    alt="logo"
                                    className="job-profile"
                                    />
                                    <div className="job-detail">
                                    <h4>{company}</h4>
                                    <h3>{position}</h3>
                                    <div className="category">
                                        <p>{location}</p>
                                        <p>{role}</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-button">
                                    <div className="job-posting">
                                    <Link to="/show-table-1" >See More</Link>
                                    </div>
                                    <div className="save-button">
                                    <Link
                                        to="/jobs"
                                        onClick={() => {
                                        saveClick(
                                            {
                                            id,
                                            logo,
                                            company,
                                            position,
                                            location,
                                            posted,
                                            },
                                            setActive(!active)
                                        );
                                        }}
                                    >
                                        {JSON.parse(localStorage.getItem("Job"))?.id ===
                                        id ? (
                                        <AiFillHeart />
                                        ) : (
                                        <AiOutlineHeart />
                                        )}
                                    </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            );
                        }
                        )}
                    </div>

        
                </div>
            </div>
        </>
    )
}

export default JobList;