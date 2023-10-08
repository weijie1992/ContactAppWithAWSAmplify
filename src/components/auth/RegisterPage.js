import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function RegisterPage () {
    return (<Container>
        <Row className="px-4 my-5">
            <Col><h1>Register</h1>
            </Col>
        </Row>
        <Row className="px-4 my-5">
            <Col sm={6}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We 'll never share your email
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password"
                            minLength={8} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirm">
                        <Form.Label>Confirm</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" minLength={8} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>)
}

export default RegisterPage
