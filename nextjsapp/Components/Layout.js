import Navbar from './Navbar';
import Head from  'next/head';
import React from "react";




const Layout = (props) =>(
    <div>
         <Head>
            <title>SteriTrack</title>
            <link rel="stylesheet" href='https://bootswatch.com/4/cerulean/bootstrap.min.css'>
            
            </link>
        </Head>
        <Navbar></Navbar>
        <div className='container'>
        {props.children}
        </div>
<footer style={divStyle}>
    <h1>good footer</h1>
</footer>
    </div>
    
    );
     const divStyle = {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        textAlign:'center',
        color: 'white',
        backgroundColor: 'gray',

      };
    export default Layout;