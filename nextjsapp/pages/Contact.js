import React ,{ Component } from "react";
import Link from "next/link";
import Layout from "../Components/Layout";


class Contact extends Component{
    render()
    {
        return(
            <Layout>
            <div>
                <h1>Hello Contact</h1>
                <Link href='/'>
                    <a>Return to dashboard</a>
                </Link>
            </div>
            </Layout>
        );
    }
}

export default Contact;