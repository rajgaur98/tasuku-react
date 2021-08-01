import "../../../styles/components/Home/Board/Section.css";
import Task from "./Task";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import AddTaskModal from "./AddTaskModal";
import NewTask from "./NewTask";
import { useMutation, useQuery, useQueryClient } from "react-query";
import request, { gql } from "graphql-request";
import config from "../../../config";
import { useDrop } from "react-dnd";

function Section({ section, toggleEditOpen }: { section: any; toggleEditOpen: () => void }) {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [tasks, setTasks] = useState(Array<any>());
  const type = "Task";

  const [, drop] = useDrop(() => ({
    accept: type,
    collect: monitor => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
    canDrop: () => tasks.length === 0,
    drop: () => ({
      addDrag,
      task: {},
    }),
  }));

  const getTasksQuery = gql`
    query {
      getTasks(sectionId: "${section.id}") {
        id
        sectionId
        name
        description
        priority
        dueDate
        createdOn
        order
      }
    }
  `;

  const updateTasksMutation = gql`
    mutation ($tasks: [TaskInput]) {
      updateTasks(tasks: $tasks) {
        id
        sectionId
        name
        description
        priority
        dueDate
        createdOn
        order
      }
    }
  `;

  const tasksRes = useQuery(["tasks", section.id], () => request(config.BASE_URL, getTasksQuery), {
    enabled: false,
  });

  const updateTasks = useMutation(
    (newTasks: any) => request(config.BASE_URL, updateTasksMutation, newTasks),
    {
      onSuccess: () => tasksRes.refetch(),
    }
  );

  const swapDrag = (task: any, item: any) => {
    setTasks(prevTasks => {
      let newTasks = prevTasks.filter(t => item.id !== t.id);
      const ind = newTasks.findIndex((t: any) => t.id === task.id);
      if (ind === -1) return newTasks;
      newTasks.splice(ind, 0, item);
      newTasks = newTasks.map((t: any, i: number) => {
        t.order = i + 1;
        return t;
      });
      updateTasks.mutate({ tasks: newTasks });
      return newTasks;
    });
  };

  const addDrag = (task: any, item: any) => {
    setTasks(prevTasks => {
      item.sectionId = section.id;
      let newTasks = JSON.parse(JSON.stringify(prevTasks));
      let ind = newTasks.findIndex((t: any) => t.id === task.id);
      if (ind === -1) ind = 0;
      newTasks.splice(ind, 0, item);
      newTasks = newTasks.map((t: any, i: number) => {
        t.order = i + 1;
        return t;
      });
      updateTasks.mutate({ tasks: newTasks });
      return newTasks;
    });
  };

  const deleteDrag = (task: any) => {
    setTasks(prevTasks => {
      let newTasks = prevTasks.filter(t => t.id !== task.id);
      newTasks = newTasks.map((t: any, i: number) => {
        t.order = i + 1;
        return t;
      });
      updateTasks.mutate({ tasks: newTasks });
      return newTasks;
    });
  };

  const handleBlur = (title: string) => {
    if (title.length === 0) {
      setAddModalOpen(false);
      return;
    }
    let newTasks = [{ sectionId: section.id, name: title, priority: "Low" }, ...tasks];
    newTasks = newTasks.map((t: any, i: number) => {
      t.order = i + 1;
      return t;
    });
    updateTasks.mutate({ tasks: newTasks });
    setTasks(newTasks);
    setAddModalOpen(false);
  };

  useEffect(() => {
    if (tasksRes.data && tasksRes.data.getTasks) {
      tasksRes.data.getTasks.sort((a: any, b: any) => a.order - b.order);
      setTasks(tasksRes.data.getTasks);
    }
  }, [tasksRes]);

  useEffect(() => {
    tasks.sort((a, b) => a.order - b.order);
    setTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    tasksRes.refetch();
  }, []);

  if (tasksRes.isLoading || tasksRes.isFetching || tasksRes.isIdle) return <p>Loading...</p>;

  if (tasksRes.isError) return <p>Error...</p>;

  return (
    <div className="section-container" ref={drop}>
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
      {isAddModalOpen && <NewTask handleBlur={handleBlur} />}
      {tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            addDrag={addDrag}
            deleteDrag={deleteDrag}
            swapDrag={swapDrag}
            toggleEditOpen={toggleEditOpen}
          />
        );
      })}
      <footer>
        <FontAwesomeIcon icon={"plus"} className="icon" />
        <span>Add task</span>
      </footer>
      <AddTaskModal isModalOpen={isAddModalOpen} setModalOpen={setAddModalOpen} />
    </div>
  );
}

export default Section;
