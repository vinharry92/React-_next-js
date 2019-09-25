import React from 'react';

import { Button } from 'react-bootstrap';

import Layout from '../Components/Layout';

import React, { Component } from 'react';

import Aux from '../Hoc/Auxiliary/Auxiliary'

 
const redirectToOwnerDetails = (id, history) => {
    history.push('/ownerDetails/' + id);
}
 
const redirectToUpdateOwner = (id, history) => {
    history.push('/updateOwner/' + id);
}
 
const rediterctToDeleteOwner = (id, history) => {
    history.push('/deleteOwner/' + id);
}
 
const owner = (props) => {
    return (
        <Aux>
            <tr>
                <td>{props.owner.name}</td>
                <td><Moment format="DD/MM/YYYY">{props.owner.dateOfBirth}</Moment></td>
                <td>{props.owner.address}</td>
                <td>
                    <Button onClick={() => redirectToOwnerDetails(props.owner.id, props.history)}>Details</Button>
                </td>
                <td>
                    <Button bsStyle="success" onClick={() => redirectToUpdateOwner(props.owner.id, props.history)}>Update</Button>
                </td>
                <td>
                    <Button bsStyle="danger" onClick={() => rediterctToDeleteOwner(props.owner.id, props.history)}>Delete</Button>
                </td>
            </tr>
        </Aux>
    )
}
 
export default owner;