import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Contacts () {
    return (<Container>
        <Row className="px-4 my-5">
            <Col><h1>Contacts</h1></Col>
        </Row>
        <Row>
            <Col className="px-2 my-2">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="/img/contact_1.png" />
                    <Card.Body>
                        <Card.Title>Stacy Carlson</Card.Title>
                        <Card.Text>
                            stacy@test.com<br /> 555.123.4567
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
            <Col className="px-2 my-2">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="/img/contact_2.png" />
                    <Card.Body>
                        <Card.Title>Stacy Carlson1</Card.Title>
                        <Card.Text>
                            stacy@test.com<br /> 555.123.4567
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
            <Col className="px-2 my-2">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="/img/contact_3.png" />
                    <Card.Body>
                        <Card.Title>Stacy Carlson2</Card.Title>
                        <Card.Text>
                            stacy@test.com<br /> 555.123.4567
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
        </Row>
    </Container>)
}

export default Contacts
