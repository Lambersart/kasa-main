import { useState } from "react";
import "./Accordion.scss";

function Accordion({ title, type, content }) {
      const [isOpen, setIsOpen] = useState(false);

      return (
            <div className="accordion">
                  <div
                        className="accordion-header"
                        onClick={() => setIsOpen(!isOpen)}
                  >
                        <span>{title}</span>
                        <span>{isOpen ? "▲" : "▼"}</span>
                  </div>
                  {isOpen && (
                        <div className="accordion-content">
                              {type === "equipements" ? (
                                    content.map((equipement) => (
                                          <p>{equipement}</p>
                                    ))
                              ) : (
                                    <p>{content}</p>
                              )}
                        </div>
                  )}
            </div>
      );
}

export default Accordion;
