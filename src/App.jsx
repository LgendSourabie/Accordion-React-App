import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import questions from "./data";
const App = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [idToToggle, setIdToToggle] = useState("");

  const toggleSingle = (id) => {
    const newIs = questions.filter((q) => q.id === id);
    setIdToToggle(newIs[0]);
    setIsToggle(!isToggle);
  };

  return (
    <div className="container">
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => {
          const { id, info, title } = question;
          return (
            <li key={id} className="question">
              <header>
                <h5> {title}</h5>
                <button
                  className="question-btn"
                  onClick={() => toggleSingle(id)}
                >
                  {idToToggle.id === id && isToggle ? <FiMinus /> : <GoPlus />}
                </button>
              </header>
              <p>{idToToggle.id === id && isToggle ? idToToggle.info : ""}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default App;
