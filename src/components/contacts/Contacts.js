import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createContact } from "../../graphql/mutations";
import { listContacts } from "../../graphql/queries";

function Contacts () {
    const [contacts, setContacts] = useState([])
    const [contactData, setContactData] = useState({ name: "", email: "", cell: "" })
    const [profilePic, setProfilePic] = useState("")
    const [profilePicPath, setProfilePicPath] = useState([])

    const getContacts = async () => {
        try {
            const contactsData = await API.graphql(graphqlOperation(listContacts));
            const contactsList = contactsData.data.listContacts.items
            setContacts(contactsList)

            console.log("🚀 ~ file: Contacts.js:28 ~ contacts.map ~ contacts:", contacts)
            contactsList.map(async (contact, index) => {
                console.log("🚀 ~ file: Contacts.js:27 ~ contacts.map ~ contact:", contact)
                const contactProfilePicPath = contact.profilePicPath
                try {
                    const contactProfilePicPathURI = await Storage.get(contactProfilePicPath, { expires: 60 })
                    setProfilePicPath((p) => {
                        return [...p, contactProfilePicPathURI]
                    })
                } catch (err) {
                    console.log("🚀 ~ file: Contacts.js:33 ~ contactsList.map ~ err:", err)
                }

            })


        } catch (err) {
            console.log("🚀 ~ file: Contacts.js:21 ~ getContacts ~ err:", JSON.stringify(err))
        }
    }

    useEffect(() => {
        getContacts()
    }, [])

    const addNewContact = async () => {
        const { name, email, cell } = contactData

        //Upload to S3
        Storage.configure({ region: 'ap-southeast-1' })
        const { key } = await Storage.put(`${uuid()}.png`, profilePic, { contentType: 'image/png' })

        const newContact = {
            id: uuid(), name, email, cell, profilePicPath: key,
        };

        await API.graphql(graphqlOperation(createContact, { input: newContact }))

    }
    return (<Container>
        <Row className="px-4 my-5">
            <Col><h1>Contacts</h1></Col>
        </Row>
        <Row>
            {
                contacts.map((contact, index) => {
                    return (<Col className="px-2 my-2" key={index}>
                        <Card style={{ width: '12rem' }}>
                            <Card.Img variant="top" src={profilePicPath[index]} />
                            <Card.Body>
                                <Card.Title>{contact.name}</Card.Title>
                                <Card.Text>
                                    {contact.email}
                                    <br />{contact.cell}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                })
            }

        </Row>
        <Row className="px-4 my-5">
            <Col sm={3}>
                <h2>Add New Contact</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Contact name"
                            value={contactData.name}
                            onChange={evt => setContactData({ ...contactData, name: evt.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Contact email"
                            value={contactData.email} onChange={evt => setContactData({ ...contactData, email: evt.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Cell</Form.Label>
                        <Form.Control type="text" placeholder="nnn-nnn-nnnn"
                            value={contactData.cell} onChange={evt => setContactData({ ...contactData, cell: evt.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Profile Pic</Form.Label>
                        <Form.Control type="file" accept="image/png"
                            onChange={evt => setProfilePic(evt.target.files[0])}
                        />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={addNewContact}>Add Contact &gt;&gt;</Button>
                </Form>
            </Col>
        </Row>
    </Container>)
}

export default Contacts
