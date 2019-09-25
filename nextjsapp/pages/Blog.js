import React ,{ Component } from "react";
import Link from "next/link";
import Layout from "../Components/Layout";


class Blog extends Component{
    render()
    {
        return(
            <Layout>
            <div>
                <h1>Hello Blog</h1>
            </div>
            </Layout>
        );
    }
}

export default Blog;