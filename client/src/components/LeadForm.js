import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';

class LeadForm extends React.Component {
    render() {
        return (
            <Form action="http://localhost:5000/api/leads" method="POST">
                <Container>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
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
                            <FormGroup>
                                <Label for="eventDate">Last Name</Label>
                                <Input type="date" name="eventDate" id="eventDate" placeholder="Please select date" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </div>
                    </div>
                </Container>
            </Form>
        );
    }
}

export default LeadForm;