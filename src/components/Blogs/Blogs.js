import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h4 className='text-danger mt-5'> Difference between SQL and NoSQL</h4>
            <div className='w-50 mx-auto mt-2 pt-3'>
                <Table striped bordered hover>
                    <thead>
                        <tr className='bg-danger text-white'>

                            <th>SQL</th>
                            <th>NOSQL</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Primarily known as relational database </td>
                            <td>Primarily known as Non relational or distributed database</td>
                        </tr>
                        <tr>

                            <td>These databases have fixed	</td>
                            <td>They have dynamic schema</td>
                        </tr>
                        <tr>

                            <td >Follows ACID property	</td>
                            <td>	Follows CAP(consistency, availability, partition tolerance)</td>
                        </tr>
                    </tbody>
                </Table>

            </div>



            <h4 className='text-danger mt-5' > Difference between JavaScript and Node JS</h4>
            <div className='w-50 mx-auto mt-2 pt-3 '>
                <Table striped bordered hover>
                    <thead>
                        <tr className='bg-danger text-white'>

                            <th>JavaScript</th>
                            <th>Node JS</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>It is a programming language. </td>
                            <td>It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.</td>
                        </tr>
                        <tr>

                            <td>It is generally used on the client-side server.	</td>
                            <td>It is generally used on the server-side.</td>
                        </tr>
                        <tr>

                            <td >Companies use JavaScript like Google, Shopify, Udacity, Sendgrid, Groupon, Okta, Instacart, etc.	</td>
                            <td>Companies use Node Js like Netflix, Hapi, Walmart, Paypal, Linkedin, Trello, Medium, eBay, etc.</td>
                        </tr>
                    </tbody>
                </Table>

            </div>


            <div className='w-50 mx-auto my-5 pt-5'>
                <h5 className='text-danger'>When should you use nodejs and when should you use mongodb</h5>
                <p> <span className='text-danger'>Node :</span>It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. Node.js is especially suited for applications where you'd like to maintain a persistent connection from the browser back to the server.</p>

                <p> <span className='text-danger'>Mongo DB</span>MongoDB is a great database for web applications, especially if the application services many users who do not interact with each other.MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale,</p>
            </div>
        </div>
    );
};

export default Blogs;