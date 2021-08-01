import { useState } from "react";
import "../../../styles/components/Home/Board/Section.css";

function NewSection({ handleBlur }: { handleBlur: any }) {
  const [title, setTitle] = useState("");

  return (
    <div className="section-container" style={{ width: "250px" }} onBlur={() => handleBlur(title)}>
      <header>
        <span className="title" style={{ width: "100%" }}>
          <input
            autoFocus={true}
            type="text"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 10px 1px #f2f2f2",
              padding: "5px",
            }}
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyPress={e => {
              if (e.key === "Enter") {
                handleBlur(title);
              }
            }}
          />
        </span>
      </header>
      <footer></footer>
    </div>
  );
}

export default NewSection;
