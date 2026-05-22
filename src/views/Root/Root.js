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

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: true,
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };

    this.setState({
      items: [...this.state.items, newItem],
    });

    e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header openModalFn={this.openModal} />
          <h1>hello world</h1>
          <Switch>
            <Route exact path='/' component={TwittersView} />
            <Route path='/articles' component={ArticlesView} />
            <Route path='/notes' component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Root;
