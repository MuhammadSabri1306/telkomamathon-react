import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <h1>Telkomathon Dashboard</h1>
        <p>Under Development by Team 6</p>
        <div className="mt-5 row justify-content-center">
          <div className="col-auto">
            <Link to="/login" relative="path" className="btn btn-lg btn-primary">Hello World</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
