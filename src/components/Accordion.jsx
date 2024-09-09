import React, { useState } from 'react';
import './Accordion.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Accordion = ({ title, content, linkUrl }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        {isActive ? '-' : '+'}
      </div>
      {isActive && (
        <>
          <div className="accordion-content">{content}
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="external-link">
            <FaExternalLinkAlt />
          </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Accordion;