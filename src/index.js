import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducer)

window.store = store

const render = () => ReactDOM.render(

  <App
    state={store.getState()}
    strike={() => store.dispatch({ type: 'THROW_STRIKE' })}
    ball={() => store.dispatch({ type: 'THROW_BALL' })}
    hit={() => store.dispatch({ type: 'SWING_AND_HIT' })}
    miss={(n) => store.dispatch({ type: 'SWING_AND_MISS' })}
    noSwing={(n) => store.dispatch({ type: 'NO_SWING' })}
  />,


  document.getElementById('root')
);

render()
store.subscribe(render)
//anytime something changes in the store the subscribe method is called
