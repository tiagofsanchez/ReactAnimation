import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const modal = props => {
  
  const { show, closed } = props;
  const animationTiming = { 
    enter: 400,
    exit: 1000
  }

  return (
    <CSSTransition
      in={show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      //This is a way to do it but you will need to set up the proper CSS 
      //classNames="fade-slide"
      //But you also can use the is JS Object and for that you leverage the CSS already done
      classNames={{
        enter: '',
        enterActive: "ModalOpen", 
        exit: '',
        exitActive: "ModalClose"
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
