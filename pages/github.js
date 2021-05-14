import React from 'react'
import { Layout } from '../components/Layout'

export default function github({ body }) {

    
    return (
        <Layout>
            <div className="vh-100">

                <div className="col-3 my-5 rounded-circle mx-auto">
                    <img src={`${body.avatar_url}`} className="img-fluid rounded-circle" alt="" />
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="display-4">{body.login}</h2>
                        <h3>{body.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 mx-auto text-center">
                        <a href={`${body.html_url}`} target="_blank" className="w-100 rounded mt-5 btn btn-outline-dark">My GitHub</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export const getServerSideProps = async () => {

    const res = await fetch('https://api.github.com/users/Franklin361');
    const body = await res.json();
    
    return {
        props: {
            body
        }
    }
};
