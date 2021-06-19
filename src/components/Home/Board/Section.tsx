import "../../../styles/components/Home/Board/Section.css";
import Task from "./Task";
import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import AddTaskModal from "./AddTaskModal";
import NewTask from "./NewTask";
const data:any[] = require("../../../data/tasks.json");
const sections:any[] = require("../../../data/sections.json");

function Section({ indices, secInd, toggleEditOpen }:{ indices: number[], secInd: number, toggleEditOpen: () => void }) {
    
    const [tasks, setTasks] = useState(
        data.slice(indices[0], indices[1])
    );

    const [section, setSection] = useState(sections[secInd]);

    const [isAddModalOpen, setAddModalOpen] = useState(false);

    const addDrag = (task: any, item: any) => {
        setTasks((tasks) => {
            let newTasks = JSON.parse(JSON.stringify(tasks));
            let ind = newTasks.findIndex((t:any) => t.id === task.id);
            if(ind === -1) return newTasks;
            newTasks.splice(ind, 0, item);
            return newTasks;
        });
    }

    const deleteDrag = (task: any) => {
        setTasks((tasks) => {
            return tasks.filter(t => t.id !== task.id);
        });
    }

    const handleBlur = (title: string) => {
        if(title.length === 0) {
            setAddModalOpen(false);
            return;
        }
        setTasks((tasks) => [{ name: title, priority: "Low" }, ...tasks])
        console.log(tasks);
        setAddModalOpen(false);
    }

    return (
        <div className="section-container">
            <header>
                <>
                    <FontAwesomeIcon
                        data-tip="Add a new task"
                        icon={"plus"}
                        className="icon"
                        onClick={() => setAddModalOpen(true)}
                    />
                    <ReactTooltip />
                </>
                <p>{section.name}</p>
            </header>
            {
                isAddModalOpen && <NewTask handleBlur={handleBlur} />
            }
            {
                tasks.map((task, index) => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            addDrag={addDrag}
                            deleteDrag={deleteDrag} 
                            toggleEditOpen={toggleEditOpen}
                        /> 
                    );
                })
            }
            <footer>
                <FontAwesomeIcon icon={"plus"} className="icon" />
                <span>Add task</span>
            </footer>
            <AddTaskModal isModalOpen={isAddModalOpen} setModalOpen={setAddModalOpen}/>
        </div>
    );
}

export default Section;