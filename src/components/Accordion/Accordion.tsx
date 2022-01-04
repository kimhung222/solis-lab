import React, {useEffect, useState} from "react";
import './Accordion.css';

export interface AccordionProps {
  title: string;
  content: React.ReactNode;
  isActive?: boolean;
  onSelect?: () => void;
}
const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isActive = false,
  onSelect
}) => {
  const [activeContent, setActiveContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if(!activeContent && isActive) {
      setActiveContent(<div className="content">
        {content}
      </div>);
    }
  }, [isActive]);
  return <div className={`accordion ${isActive ? 'active' : ''}`}>
    <button className="header" onClick={onSelect}>
      <span className="accordion__title">
        {title}
      </span>
    </button>
    {!!activeContent && activeContent}
  </div>
}

export default Accordion;