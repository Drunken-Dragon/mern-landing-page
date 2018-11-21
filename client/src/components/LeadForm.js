import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class LeadForm extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="Enter your first name" />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="Enter your last name" />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="Email" placeholder="Enter your email address" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default LeadForm;