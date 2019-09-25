
import fetch from 'isomorphic-unfetch';
import Layout from '../Components/Layout';

const Index = (props) =>(
    <Layout>
        <div>
         <h1>Welome to React Next JS</h1>
         {props.items}
         {/* <p> {props.items}</p> */}

        </div>
    </Layout>
);

Index.getInitialProps = async function()
{
    const res = await fetch('http://localhost:50607/api/item');
  var test = res.data;
    const data =  await res.text();
    // console.log(Object.values(data[0]));
    
    return{
        items : data
    }
}



export default Index;
