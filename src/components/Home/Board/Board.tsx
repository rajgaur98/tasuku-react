import { useState } from 'react';
import { Button } from 'reactstrap';
import '../../../styles/components/Home/Board/Board.css';
import EditTaskModal from './EditTaskModal';
import Section from './Section';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

function Board() {
    const [editModalOpen, setEditModalOpen] = useState(false);

    const toggleEditOpen = () => {
        setEditModalOpen(!editModalOpen);
    }

    return (
        <div className="board-container">
            <Section indices={[0, 3]} secInd={0} toggleEditOpen={toggleEditOpen}/>
            <Section indices={[3, 6]} secInd={1} toggleEditOpen={toggleEditOpen}/>
            <EditTaskModal isOpen={editModalOpen} />
        </div> 
    );
}

export default Board;