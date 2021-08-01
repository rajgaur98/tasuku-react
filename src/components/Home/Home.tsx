import "../../styles/components/Home/Home.css";
import Board from "./Board/Board";
import Sidebar from "./Sidebar/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navbar from "./Navbar/Navbar";
import request, { gql } from "graphql-request";
import { useMutation } from "react-query";
import config from "../../config";
import { useState } from "react";

function Home() {
  const [isNewSectionModalOpen, setIsNewSectionModalOpen] = useState(false);

  return (
    <div className="home-container">
      <Navbar />
      <div className="main-container">
        <Sidebar setIsNewSectionModalOpen={setIsNewSectionModalOpen} />
        <DndProvider backend={HTML5Backend}>
          <Board
            isNewSectionModalOpen={isNewSectionModalOpen}
            setIsNewSectionModalOpen={setIsNewSectionModalOpen}
          />
        </DndProvider>
      </div>
    </div>
  );
}

export default Home;
