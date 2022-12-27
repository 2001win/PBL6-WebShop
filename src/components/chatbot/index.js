import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import "./index.css";
const TodosContext = React.createContext({
  questions: [],
  fetchQuestions: () => {},
});

export default function Question() {
  const [questions, setQuestions] = useState([]);
  const fetchQuestions = async () => {
    const response = await fetch("http://ca3e-171-255-164-22.ngrok.io/Chatbot");
    const questions = await response.json();
    setQuestions(questions.data);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <TodosContext.Provider value={{ questions, fetchQuestions }}>
      <Ask />
      {questions.map((question) => (
        <b className="chatbox-message">{question.question}</b>
      ))}
    </TodosContext.Provider>
  );
}

function Ask() {
  const [item, setItem] = React.useState("");
  const { questions, fetchQuestions } = React.useContext(TodosContext);

  const handleInput = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    const newQuestion = {
      id: questions.length + 1,
      question: item,
    };

    fetch("http://ca3e-171-255-164-22.ngrok.io/Chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    }).then(fetchQuestions);
  };

  return (
    <form action="#" class="chatbox-message-form" onSubmit={handleSubmit}>
      <textarea
        rows="1"
        placeholder="Type message..."
        className="chatbox-message-input"
        onChange={handleInput}
      ></textarea>
      <button type="submit" class="chatbox-message-submit">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
}
