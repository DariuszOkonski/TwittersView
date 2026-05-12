import React from 'react';
import List from '../../components/List/List';
import '../../index.module.scss';
import { twitterAccounts } from '../../data/twitterAccounts';
import Form from '../../components/Form/Form';

const initialStateItems = [...twitterAccounts];

// const checkIfPicture = (picture) => {
//   const extensions = ['.jpg', '.png', '.webp'];
//   return extensions.some((ext) => picture.includes(ext))
//     ? picture
//     : defaultPicture;
// };

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      // image: checkIfPicture(e.target[2].value),
      image: e.target[2].value,
      description: e.target[3].value,
    };

    this.setState({
      items: [...this.state.items, newItem],
    });

    e.target.reset();
  };

  render() {
    return (
      <div className='wrapper'>
        <List items={this.state.items} />

        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default Root;
