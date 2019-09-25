import Layout from '../Components/Layout';
import Link from 'next/link';
import React, { Component } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Aux from '../Hoc/Auxiliary/Auxiliary'


// const About = () =>(
//     <Layout>
//     <div>
//         <h1>About React next js POC</h1>
//     </div>
//     </Layout>
//     );



    class About extends Component {
        render() {
            let owners = [];
            return (
                <Layout>
                <Aux>
                    <Row>
                        <Col mdoffset={10} md={2}>
                            {/* <Link to='/createOwner' >Create Owner</Link> */}
                            <Link href ='/createOwner'><a className='nav-link'>createOwner</a>
                            </Link>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={12}>
                            <Table responsive striped>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date of birth</th>
                                        <th>Address</th>
                                        <th>Details</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {owners}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Aux>
                </Layout>
            )
        }
    }




    export default About;


// export default  () => (<div>About Next.js</div>)