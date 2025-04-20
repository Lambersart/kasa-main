import { useRef, useState, useEffect } from "react";
import "./Accordion.scss";

function Accordion({ title, type, content }) {
      const [isOpen, setIsOpen] = useState(false);
      const contentRef = useRef(null);

      useEffect(() => {
            const contentEl = contentRef.current;

            if (isOpen) {
                  contentEl.style.maxHeight = contentEl.scrollHeight + "px";
                  contentEl.style.opacity = "1";
                  contentEl.style.padding = "10px";

                  const onTransitionEnd = () => {
                        if (isOpen) {
                              contentEl.style.maxHeight = "none"; // ← pour s'adapter au contenu
                        }
                        contentEl.removeEventListener(
                              "transitionend",
                              onTransitionEnd
                        );
                  };

                  contentEl.addEventListener("transitionend", onTransitionEnd);
            } else {
                  // Repasser à une hauteur fixe avant de l'animer
                  contentEl.style.maxHeight = contentEl.scrollHeight + "px";

                  // Permet de forcer un "reflow" (important pour redéclencher la transition)
                  window.getComputedStyle(contentEl).maxHeight;

                  // Puis on ferme avec l’animation
                  contentEl.style.maxHeight = "0px";
                  contentEl.style.opacity = "0";
                  contentEl.style.padding = "0 10px";
            }
      }, [isOpen]);

      return (
            <div className="accordion">
                  <div
                        className="accordion-header"
                        onClick={() => setIsOpen(!isOpen)}
                  >
                        <span>{title}</span>
                        <span className={`arrow ${isOpen ? "open" : ""}`}>
                              ▼
                        </span>
                  </div>
                  <div ref={contentRef} className="accordion-content">
                        {type === "equipements" ? (
                              content.map((equipement, index) => (
                                    <p key={index}>{equipement}</p>
                              ))
                        ) : (
                              <p>{content}</p>
                        )}
                  </div>
            </div>
      );
}

export default Accordion;
