import Navbar from '../Components/Navbar';
import Head from  'next/head';


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
       
    </div>
    );

    export default Layout;