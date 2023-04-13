import { Button } from 'react-bootstrap';
import './Contact.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
const Contact = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({
      ...values, [name]: value
    }))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(inputs)
  }

  return (
    <div id="contact" className="content-detail">
      <h1>Contact</h1>
        <Container>
          <Row>
            <Col md={3}>
              Send me a message!
            </Col>
            <Col>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <input className="form-control"
                           placeholder="Your Name"
                           type="text"
                           name="username"
                           value={inputs.username || ""}
                           onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <input className="form-control"
                           placeholder="Email"
                           type="email"
                           name="email"
                           value={inputs.email || ""}
                           onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input className="form-control"
                           placeholder="Subject"
                           type="text"
                           name="subject"
                           value={inputs.subject || ""}
                           onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <textarea className="form-control"
                              placeholder="Message"
                              rows={5} cols={40}
                              name="message"
                              value={inputs.message || ""}
                              onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Button className="button"
                            type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>

    </div>

  );
};

export default Contact;