import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactTooltip from "react-tooltip";

function NewTask({ handleBlur } : { handleBlur: (title: string) => void}) {

    const [title, setTitle] = useState("")

    return (
        <div className="task-container" onBlur={() => handleBlur(title)}>
            <div className="header">
                {/* <><FontAwesomeIcon data-tip="Mark as complete" icon={["fas", "check-circle"]} color="grey" className="icon check"/>
                <ReactTooltip /></> */}
                <span className="title" style={{ width: "100%" }}>
                    <input
                        autoFocus={true}
                        type="text"
                        style={{ 
                            width: "100%",
                            border: "none",
                            outline: "none",
                            boxShadow : "0px 0px 10px 1px #f2f2f2",
                            padding: "5px"
                        }}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyPress={(e) => {
                            if(e.key === "Enter") {
                                handleBlur(title)
                            }
                        }}
                    />
                </span>
            </div>
            <span data-tip="Priority" className="priority">
                Low
                <ReactTooltip />
            </span>
            <div className="footer">
                <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2018%2F12%2FThe-Office-Michael-Scott-cringe-square.jpg&f=1&nofb=1" />
                <><FontAwesomeIcon data-tip="Assign to a member" icon={["fas", "user"]} className="icon user" />
                <ReactTooltip /></>
                <><FontAwesomeIcon data-tip="Add a due date" icon={["fas", "calendar"]} className="icon calendar" />
                <ReactTooltip /></>
            </div>
        </div>
    )
}

export default NewTask;
