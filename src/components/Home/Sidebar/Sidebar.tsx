import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/components/Home/Sidebar/Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar-container">
            <div>
                <FontAwesomeIcon icon="home"/> {"  "}
                <span>Home</span>
            </div>
            <div>
                <FontAwesomeIcon icon="tasks"/> {" "}
                <span>My Tasks</span>
            </div>
            <div>
                <FontAwesomeIcon icon="plus" /> {"  "}
                <span>Add section</span>
            </div>
            <div>
                <FontAwesomeIcon icon="inbox"/> {"  "}
                <span>Inbox</span>
            </div>
        </div>
    );
}

export default Sidebar;