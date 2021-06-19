import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import '../../../styles/components/Home/Board/Task.css';
import { useRef} from 'react';
import { DragPreviewImage, useDrag, useDrop } from "react-dnd";
import dragImage from "../../../assets/images/drag_image.png";

function Task({ task, addDrag, deleteDrag, toggleEditOpen }: { task: any, addDrag: any, deleteDrag: any, toggleEditOpen: () => void }) {
    const type = "Task";
    const ref = useRef(null);

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type,
        item: task,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
        end: (item, monitor) => {
            if(monitor.didDrop()) {
                const { task, addDrag }: { task: any, addDrag: (task: any, item: any) => {} } = monitor.getDropResult()!;
                if(task.id === item.id) return;
                deleteDrag(item);
                addDrag(task, item);
            }
        }
    }));

    const [{isOver}, drop] = useDrop(() => ({
        accept: type,
        drop: () => ({
            addDrag, task
        }),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }));

    drag(drop(ref));

    return (
        <>
            <DragPreviewImage connect={preview} src={dragImage} />
            <div className="task-container" ref={ref} style={{ marginTop: isOver? "50px": "0" }} onClick={() => toggleEditOpen()}>
                <div className="header">
                    <><FontAwesomeIcon 
                        data-tip="Mark as complete"
                        icon={["fas", "check"]}
                        className="icon check"
                        onClick={e => e.preventDefault()}
                    />
                    <ReactTooltip /></>
                    <p className="title">
                        {task.name}
                    </p>
                </div>
                <span data-tip="Priority" className="priority">
                    {task.priority}
                    <ReactTooltip />
                </span>
                <div className="footer">
                    <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2018%2F12%2FThe-Office-Michael-Scott-cringe-square.jpg&f=1&nofb=1" />
                    <><FontAwesomeIcon
                        data-tip="Assign to a member"
                        icon={["fas", "user"]}
                        className="icon user"
                        onClick={e => e.preventDefault()}
                    />
                    <ReactTooltip /></>
                    <><FontAwesomeIcon data-tip="Add a due date" icon={["fas", "calendar"]} className="icon calendar" />
                    <ReactTooltip /></>
                </div>
            </div>
        </>
    );
}

export default Task;
