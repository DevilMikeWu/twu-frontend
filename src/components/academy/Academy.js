import React from "react";
import { Table, Button } from "react-bootstrap";

const Academy = ({ academies }) => {
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
          {academies.map((academy,index) =>{
              return (<tr key={index}>
                  <td>{academy.id}</td>
                  <td>{academy.title}</td>
                  <td> <Button variant="info">Info</Button></td>
                </tr>);
          })}
        </tbody>
      </Table>
    );
  } else {
    return null;
  }
};

export default Academy;
