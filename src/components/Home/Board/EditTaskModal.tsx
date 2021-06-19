import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Table } from "reactstrap";
import "../../../styles/components/Home/Board/EditTaskModal.css"

function EditTaskModal({ isOpen } : { isOpen: boolean}) {
    return  (
        <div className="edit-task-modal" style={{ width: isOpen ? "40%": "0px", padding: isOpen ? "20px": "0px" }}>
            { isOpen && (
                <>
                <h4 style={{ marginBottom: "20px" }} >Bruh moment</h4>
                <Table responsive>
                    <tbody>
                        <tr className="field status">
                            <td><span className="key">Status: </span></td>
                            <td><span className="value">Complete</span></td>
                            <td>
                                <span className="icon"><FontAwesomeIcon icon="edit" /></span>
                            </td>
                        </tr>
                        <tr className="field priority">
                            <td><span className="key">Priority: </span></td>
                            <td><span className="value">Low</span></td>
                            <td>
                                <span className="icon"><FontAwesomeIcon icon="edit" /></span>
                            </td>
                        </tr>
                        <tr className="field assignees">
                            <td><span className="key">Assignees: </span></td>
                            <td><span className="value">Johan, Anna and Tenma</span></td>
                            <td>
                                <span className="icon"><FontAwesomeIcon icon="edit" /></span>
                            </td>
                        </tr>
                        <tr className="field assignees">
                            <td><span className="key">Assignees: </span></td>
                            <td><span className="value">Johan, Anna and Tenma</span></td>
                            <td>
                                <span className="icon"><FontAwesomeIcon icon="edit" /></span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </>
            )}
        </div>
    );
}

export default EditTaskModal;
