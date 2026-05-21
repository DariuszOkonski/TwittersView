import React from 'react';
import './index.module.scss';
import { twitterAccounts } from '../../data/twitterAccounts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

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
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={TwittersView} />
            <Route path='/articles' component={ArticlesView} />
            <Route path='/notes' component={NotesView} />
          </Switch>
          <Modal />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Root;
