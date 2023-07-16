import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';

const Form = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [formColor, setFormColor] = useState('#ffffff'); // Default color is white
  const [submittedColor, setSubmittedColor] = useState('');

  const handleColorChange = (e) => {
    setFormColor(e.target.value);
  };

  const handleChangeColor = () => {
    setSubmittedColor(formColor);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phone);
    console.log('Address:', address);
  };

  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <MDBCard   style={{ backgroundColor: submittedColor, padding: '20px' }}>
            <MDBCardHeader>
            <h4 style={{ textAlign: 'center' }}>billing details</h4>
            </MDBCardHeader>
            <MDBCardBody>

              <form onSubmit={handleFormSubmit}>
                <MDBRow>
                  <MDBCol size="6">
                    <MDBInput
                      label="First Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                       
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput
                      label="Last Name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                       
                    />
                  </MDBCol>
                  
                </MDBRow>
                <br></br>
                <MDBInput
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                   
                />
                  <br></br>
                <MDBInput
                  label="Phone Number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                   
                />
                  <br></br>
                <MDBInput
                  label="Address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                   
                />
                  
                <label>
                  change Color:
                  <MDBInput
                    type="color"
                    value={formColor}
                    onChange={handleColorChange}
                    style={{ width: '100%' }}
                  />
                </label>
                <br />
                <MDBBtn
                  color="primary"
                  onClick={handleChangeColor}
                  style={{ width: '100%' }}
                >
                    
                  Change Color
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Form;
