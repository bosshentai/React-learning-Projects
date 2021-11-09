// import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const enterTaskHandler = async (taskText) => {
    const createTask = (taskText, taskData) => {
      // const data = await response.json();

      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    };

    const enterTaskHandler = async (taskText) => {
      sendTaskRequest(
        {
          url: "https://react-http-9487e-default-rtdb.firebaseio.com/tasks.json",
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: { text: taskText },
        },
        createTask.bind(null,taskText) // preconfigure a function
      );
    };
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
