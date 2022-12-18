import React from 'react'
import { Button,Form,Container,Header,Table} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

import axios from "axios"
import {useState, useEffect} from "react"
function SheetApp() {
    const [Username, setUser] = useState("");
    const [Passwords, setPwd] = useState("");
    const [Id, setId] = useState("");

    const userData = {
        Username,
        Passwords,
        Id
    }

    const [data, setData] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("https://sheet.best/api/sheets/b81b0615-00be-4d16-939d-185ee931c2e1", userData).then(res => {
            console.log(res);
        })
        setUser("");
        setPwd("");
        setId("");
    }

    useEffect(() => {
        axios.get("https://sheet.best/api/sheets/b81b0615-00be-4d16-939d-185ee931c2e1").then(res =>{
            // console.log(res);

            setData(res);
        })
    });
   
    if (!data) {
        return <div />
    }

  return (
    <Container className='container'>
        <Header as="h2">
            <br /><br />
            DB_SHEETS
        </Header>
        <Form onSubmit={submitHandler} className='form'>
            <Form.Field>
                <label htmlFor="name">Username</label>
                <input type="text" value={Username} onChange={(e) => setUser(e.target.value)} placeholder='Name'/>
            </Form.Field>

            <Form.Field>
                <label htmlFor="name">Password</label>
                <input type="text" value={Passwords} onChange={(e) => setPwd(e.target.value)} placeholder='Name'/>
            </Form.Field>

            <Form.Field>
                <label htmlFor="name">ID</label>
                <input type="text" value={Id} onChange={(e) => setId(e.target.value)} placeholder='Name'/>
            </Form.Field>

            <Button color='blue' type='submit'>Submit</Button>

        </Form>

        <hr />
        <Table celled>
            <Table.Header>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Passwords</Table.HeaderCell>
                <Table.HeaderCell>ID</Table.HeaderCell>
            </Table.Header>

            <Table.Body>
                {data.data.map(val =>{
                    <Table.Row>
                        <Table.Cell>{val.Username}</Table.Cell>
                        <Table.Cell>{val.Passwords}</Table.Cell>
                        <Table.Cell>{val.Id}</Table.Cell>
                    </Table.Row>
                })}
            </Table.Body>
        </Table>
    </Container>
  )
}

export default SheetApp