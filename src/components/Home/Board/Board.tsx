import { useEffect, useState } from "react";
import "../../../styles/components/Home/Board/Board.css";
import EditTaskModal from "./EditTaskModal";
import Section from "./Section";
import { useMutation, useQuery } from "react-query";
import { request, gql } from "graphql-request";
import config from "../../../config";
import NewSection from "./NewSection";

function Board({
  isNewSectionModalOpen,
  setIsNewSectionModalOpen,
}: {
  isNewSectionModalOpen: boolean;
  setIsNewSectionModalOpen: any;
}) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [sections, setSections] = useState(Array<any>());

  const getSectionsQuery = gql`
    query {
      getSections {
        id
        name
        description
      }
    }
  `;

  const addSectionMutation = gql`
    mutation ($name: String) {
      createSection(name: $name) {
        id
        name
      }
    }
  `;

  const sectionsRes = useQuery("sections", () => request(config.BASE_URL, getSectionsQuery), {
    enabled: false,
  });

  const addSection = useMutation(
    (newSection: any) => request(config.BASE_URL, addSectionMutation, newSection),
    {
      onSuccess: () => sectionsRes.refetch(),
    }
  );

  const toggleEditOpen = () => {
    setEditModalOpen(!editModalOpen);
  };

  const handleBlur = (title: string) => {
    if (title.length === 0) {
      setIsNewSectionModalOpen(false);
      return;
    }
    let newSections = [...sections, { name: title }];
    addSection.mutate({ name: title });
    setSections(newSections);
    setIsNewSectionModalOpen(false);
  };

  useEffect(() => {
    if (sectionsRes.data && sectionsRes.data.getSections) {
      setSections(sectionsRes.data.getSections);
    }
  }, [sectionsRes]);

  useEffect(() => {
    sectionsRes.refetch();
  }, []);

  if (sectionsRes.isLoading || sectionsRes.isFetching || sectionsRes.isIdle)
    return <p>Loading...</p>;

  if (sectionsRes.isError) return <p>{String(sectionsRes.error)}</p>;

  return (
    <div className="board-container">
      {sections.map((section: any) => (
        <Section key={section.id} section={section} toggleEditOpen={toggleEditOpen}></Section>
      ))}
      {isNewSectionModalOpen && <NewSection handleBlur={handleBlur} />}
      <EditTaskModal isOpen={editModalOpen} />
    </div>
  );
}

export default Board;
