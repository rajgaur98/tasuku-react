import "../../styles/components/Home/Home.css";
import Board from "./Board/Board";
import Sidebar from "./Sidebar/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navbar from "./Navbar/Navbar";

function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <div className="main-container">
                <Sidebar />
                <DndProvider backend={HTML5Backend}>
                    <Board />
                </DndProvider>
            </div>
        </div>
    );
}

export default Home;
