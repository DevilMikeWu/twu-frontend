import React from "react";
import { Button } from "react-bootstrap";

const Academy = ({ academy }) => {
    if(academy == null) return null;
    const {id, title} = academy;
    return <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td> <Button variant="info" onClick={()=>{}}>View Detail</Button></td>
    </tr>
};

export default Academy;
