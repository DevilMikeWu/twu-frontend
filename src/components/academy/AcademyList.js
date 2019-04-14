import React from "react";
import { Table } from "react-bootstrap";
import Academy from './Academy';

const AcademyList = ({ academies }) => {
  if (Array.isArray(academies) && academies.length > 0) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {academies.map((academy) =><Academy academy={academy} key={academy.id} />)}
        </tbody>
      </Table>
    );
  } else {
    return null;
  }
};

export default AcademyList;
