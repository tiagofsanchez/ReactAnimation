import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selItem) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item ) => item !== selItem )
            };
        });
    }

    render () {
                const listItems = this.state.items.map((item, index) => (
                  <CSSTransition key={index} classNames="fade" timeout={3000}>
                    <li
                      className="ListItem"
                      onClick={() => this.removeItemHandler(item)}
                    >
                      {item}
                    </li>
                  </CSSTransition>
                ));

                return (
                  <div>
                    <button className="Button" onClick={this.addItemHandler}>
                      Add Item
                    </button>
                    <p>Click Item to Remove.</p>
                    <TransitionGroup component="ul" className="List">
                      {listItems}
                    </TransitionGroup>
                  </div>
                );
              }
}

export default List;