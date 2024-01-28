import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import Job from "../../Assets/jobs.json";
import Filter from "../Filter";

const ShowTable1 = ()=> {
    const data = [
        {
            "id": 1,
            "project": "Development of Multifunctional Sustainable Packaging from Acetylated Cellulose Micro-Nanofibrils (CMNF)",
            "summary": "Cellulose micro-nanofibrils (CMNF) with different fibrillation levels were partially acetylated while preserving their morphological and native crystalline structure. The morphological changes due to fibrillation and chemical modification were observed using Time-of-Flight Secondary Ion Mass Spectrometry (ToF-SIMS) and optical profilometry. The change in tensile and burst strength, barrier, and biodegradability profile were investigated which revealed that the mechanical properties of the unmodified CMNF films increased with increase in extent of fibrillation. However, the mechanical strength of the acetylated film decreased with the increase in degree of acetylation. "
        },
        {
            "id": 2,
            "project": "Elucidation of temperature-induced water structuring",
            "summary": "Optimizing drying energy in the forest products industry is critical for integrating lignocellulosic feedstocks across all manufacturing sectors. Despite substantial efforts to reduce thermal energy consumption during drying, further enhancements are possible. Cellulose, the main component of forest products, is Earth's most abundant biopolymer and a promising renewable feedstock. This study employs all-atom molecular dynamics (MD) simulations to explore the structural dynamics of a small Iβ-cellulose microcrystallite and surrounding water layers during drying. Molecular and atomistic profiles revealed localized water near the cellulose surface, with water structuring extending beyond 8 Å into the water bulk, influencing solvent-accessible surface area and solvation energy. "
        }
    ]
    return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Project Name</th>
          <th>Summary/Abstract</th>         
        </tr>
      </thead>
      <tbody>
        {data.map(({id, project, summary}) => (
          <tr key={id}>
            <td>{id}</td>
            <td><Link to="/more-info">{project}</Link></td>
            <td>{summary}</td>
          </tr>
          
        ))}
      </tbody>
    </Table>
    )
}

export default ShowTable1;