import { useState, useRef, useEffect } from "react";

const Dashboard = () => {
  const titleInputRef = useRef();
  const repositoryInputRef = useRef();
  const urlInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredRepository = repositoryInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    console.log(
      enteredTitle,
      enteredRepository,
      enteredUrl,
      enteredDescription
    );
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <h2 className="sectionTitle">Add new project</h2>
        <form className="flex flex-col space-y-4" onSubmit={submitHandler}>
          <input
            className="contactInput"
            type="text"
            placeholder="Title"
            ref={titleInputRef}
          />
          <input
            className="contactInput"
            type="text"
            placeholder="Project Repository"
            ref={repositoryInputRef}
          />
          <input
            className="contactInput"
            type="text"
            placeholder="Project URL"
            ref={urlInputRef}
          />
          <textarea
            className="contactInput"
            placeholder="Description"
            ref={descriptionInputRef}
          ></textarea>
          <button className="mainButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
