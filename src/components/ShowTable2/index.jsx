import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import Job from "../../Assets/jobs.json";
import Filter from "../Filter";

const ShowTable2 = ()=> {
    const data = [
        {
            "id": 1,
            "project": "Modeling the role of efficiency for the equitable and effective distribution of donated food",
            "summary": "Food banks operate with an objective to serve as many of food-insecure people as possible with the limited supply available to them. This paper presents a mixed-integer programming model to identify the efficient assignment of demand zones (counties) to distribution centers (branches) and equitable allocation of donated food from the food bank branches to the demand zones. "
        },
        {
            "id": 2,
            "project": "Creating a Positive, Community-Based Learning Environment in a Chemistry Department.",
            "summary": "Recognizing teachable moments and transforming them into occasions of learning can be a useful strategy in developing a culture of safety in an academic department. Responding with recognition of the vulnerability of those experiencing undesired outcomes can open communication and support the inquiry necessary to develop and sustain safety changes."
        }
    ]
    return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Project Name</th>
          <th>Summary/Abstract</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({id, project, summary}) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{project}</td>
            <td>{summary}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    )
}

export default ShowTable2;