import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import { twitterAccounts } from './data/twitterAccounts';
import Form from './components/ListWrapper/Form/Form';

const initialStateItems = [...twitterAccounts];

class App extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  render() {
    return (
      <div className='wrapper'>
        <ListWrapper items={this.state.items} />

        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;
