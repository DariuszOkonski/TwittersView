import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './Radio/Radio';
import AppContext from '../../context';

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note',
};

const description = {
  twitter: 'favorite Twitter account',
  article: 'Article',
  note: 'Note',
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
    title: '',
    link: '',
    image: '',
    description: '',
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { activeOption } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>Add new {description[activeOption]}</Title>
            <form
              autoComplete='off'
              className={styles.form}
              onSubmit={context.addItem}
            >
              <div className={styles.formOptions}>
                <Radio
                  id={types.twitter}
                  checked={activeOption === types.twitter}
                  changeFn={() => this.handleRadioButtonChange(types.twitter)}
                >
                  Twitter
                </Radio>

                <Radio
                  checked={activeOption === types.article}
                  id={types.article}
                  changeFn={() => this.handleRadioButtonChange(types.article)}
                >
                  Article
                </Radio>

                <Radio
                  checked={activeOption === types.note}
                  id={types.note}
                  changeFn={() => this.handleRadioButtonChange(types.note)}
                >
                  Note
                </Radio>
              </div>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                tag='input'
                name='title'
                label={
                  activeOption === types.twitter ? 'Twitter Name' : 'Title'
                }
                maxLength={30}
              />
              {activeOption !== types.note ? (
                <Input
                  value={this.state.link}
                  onChange={this.handleInputChange}
                  tag='input'
                  name='link'
                  label={
                    activeOption === types.twitter ? 'Twitter Link' : 'Link'
                  }
                />
              ) : null}

              {activeOption === types.twitter ? (
                <Input
                  value={this.state.image}
                  onChange={this.handleInputChange}
                  tag='input'
                  name='image'
                  label='Image'
                />
              ) : null}
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                tag='textarea'
                name='description'
                label='Description'
              />

              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
