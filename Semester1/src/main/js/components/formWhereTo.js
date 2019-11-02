class Form extends React.Component{
    constructor(props){
        // call default constructor
        super(props);
    }
    render(){
        return
            <Form>
            <Form.Group controlId="whereTo">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    }

}