import { json, useLoaderData, Form, redirect, useActionData, useTransition } from "remix";

export default function Index() {
  const transition = useTransition();
  return (
    <nav className="nav">
      <img src="../../public/images/Social Icon Logo Only Zoom In.jpg" alt="logo of square solar" />
      <p className="nav nav-header">Home</p>
      <p className="nav nav-header">Projects</p>
      <p className="nav nav-header">Chat</p>
      <Form method="post">
         <label className="nav nav-label">Search:{" "}
      <input className="nav nav-input" type="submit" name="search" />
      </label>{
          transition.submission ? 
          <span className="nav nav-loader"><svg></svg></span> :  null }
      </Form>
    </nav>
    
  );
}
