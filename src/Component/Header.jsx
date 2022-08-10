import React, { useState, useId  } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import { addUser } from "./../Redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);
  const dispatch = useDispatch();
 const [user,setUser] = useState({
    id:useId(),
    number: '',
    email: '',
    region: ''
 });

 const handleChange = (props) => (event) => {
    setUser({...user,[props]: event.target.value});
 }
 const handelSubmit = (e) =>{
    e.preventDefault();
    dispatch(addUser(user));
    setShowSidebar(false);
 }
  return (
    <>
      <Button variant="primary" onClick={handleSidebarShow}>
        Add User
      </Button>
      <Offcanvas show={showSidebar} onHide={handleSidebarClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleChange('email')} value={user.email}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter phone number" onChange={handleChange('number')} value={user.number} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Region</Form.Label>
              <Form.Control type="text" placeholder="Enter Region" onChange={handleChange('region')} value={user.region}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
