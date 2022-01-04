import React, { useState} from 'react';
import './App.css';
import Accordion, { AccordionProps } from "./components/Accordion/Accordion";


export const list: AccordionProps[] = [
  {
    title: "I am an usual item",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, tortor sed commodo rhoncus, nulla mauris euismod neque, ac lacinia nisl nibh in mi."
  },
  {
    title: "I am an overflowing title item, I am an overflowing title item. I am an overflowing title item",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, tortor sed commodo rhoncus, nulla mauris euismod neque, ac lacinia nisl nibh in mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, tortor sed commodo rhoncus, nulla mauris euismod neque, ac lacinia nisl nibh in mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, tortor sed commodo rhoncus, nulla mauris euismod neque, ac lacinia nisl nibh in mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, tortor sed commodo rhoncus, nulla mauris euismod neque, ac lacinia nisl nibh in mi."
  },
  {
    title: "I am also a High Order Component",
    content: (
      <div className="third-item">
        <img src={'/logo512.png'} width={512} height={512} alt="logo"/>
      </div>
    )
  },
  {
    title: "The content inside an inactive item has been deferred rendering",
    content: (
      <>
        <div>
          Which means HTTP call and rendering image process only happens when it is active first time
        </div>
        <div className="third-item">
          <img src={'/logo512.png'} width={512} height={512} alt="logo"/>
        </div>
      </>
    )
  },
]

function App() {
  const [activeId, setActiveId] = useState<number>();
  return (
    <div className="container">
      <div className="accordion__wrapper">
        {
          list.map(
            ({title, content}, index) =>
            {
              const onSelectItem = () => {
                const isClose = activeId === index;
                isClose && setActiveId(undefined);
                !isClose && setActiveId(index);
              }
              return <Accordion
                key={index}
                title={title}
                content={content}
                isActive={activeId === index}
                onSelect={onSelectItem}
              />
            })
        }
      </div>
    </div>
  );
}

export default App;
