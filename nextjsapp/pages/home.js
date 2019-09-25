import React ,{ Component } from "react";
import Link from "next/link";
import fetch from 'isomorphic-fetch';
import Layout from "../Components/Layout";
import { TableCell,TableRow, Col, Row ,TableBody} from 'react-bootstrap';
import { Button,Table
  } from 'reactstrap';



class Home extends Component{  
    constructor(props)
    {
        super(props);
        this.state = {
            data: [],
            isLoaded:false,
        }
    }
    componentDidMount()
    {
        fetch('http://localhost:50607/api/item').then(res => res.json()).then(json => {
        this.setState({
            isLoaded:true,
            data:json,  
        })
    });
    }
    render()
    {


        const Header = ["Name", "Age", "Size", "Phone", "Gender" ];
       var { isLoaded, data } = this.state;
        if(!isLoaded)
        {
            return <div>Loading....</div>;
        }
       
        return(
           <Layout>
                  <div>
                <h1>Gudid Data</h1>               
                <div>
                    
                </div>
                <Row>
                    <Col mdoffset={10} md={2}>
                        <Link href ='/AddRecord'>
                            <Button className='nav-link'>AddRecord</Button>
                        </Link>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>                    
                        <Table responsive striped>
                            <thead>
                                <tr>
                                    <th scope="row">Id</th>
                                    <th scope="row">Name</th>
                                    <th scope="row">Description</th>
                                    <th scope="row">Iscomplete</th>      
                                    <th scope="row">Flavor</th>                              
                                </tr>
                            </thead>
              <tbody>{this.state.data.map(function(item, key) {
             
              return (
                <tr key = {key}>
                 <td>{item.id}</td>
                     <td>{item.name}</td>
                   <td>{item.description}</td>
                    <td>{item.isComplete}</td>
                     <td>{item.Flavor}</td>
                </tr>
               )
           
           })}
            </tbody>
                        </Table>
                    </Col>
                </Row>
               </div>
            </Layout>



        );
    }



}

export default Home;