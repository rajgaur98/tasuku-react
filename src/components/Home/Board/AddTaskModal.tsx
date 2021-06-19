import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function AddTaskModal({ isModalOpen, setModalOpen } : { isModalOpen: boolean, setModalOpen: any }) {
    return (
        <div className="add-task-container">
            <Modal isOpen={false}>
                <ModalHeader>
                    Add a task
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup className="form-group">
                            <Label for="title">Title</Label>
                            <Input className="form-input" type="text" name="title" placeholder="Enter a title" />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <Label for="description">Description</Label>
                            <Input className="form-input" type="textarea" name="description" placeholder="Enter a description" />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <Label>Priority</Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="priority" />{' '}
                                    <span style={{ fontSize: "13px" }}>Low</span>
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="priority" />{' '}
                                    <span style={{ fontSize: "13px" }}>Medium</span>
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="priority" />{' '}
                                    <span style={{ fontSize: "13px" }}>High</span>
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="primary" onClick={() => setModalOpen(!isModalOpen)}>Add</Button>{' '}
                    <Button outline color="danger" onClick={() => setModalOpen(!isModalOpen)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddTaskModal;
