import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './Radio/Radio';

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
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Title>Add new {description[this.state.activeOption]}</Title>
        <form
          autoComplete='off'
          className={styles.form}
          onSubmit={this.props.submitFn}
        >
          <div className={styles.formOptions}>
            <Radio
              id={types.twitter}
              checked={this.state.activeOption === types.twitter}
              changeFn={() => this.handleRadioButtonChange(types.twitter)}
            >
              Twitter
            </Radio>

            <Radio
              checked={this.state.activeOption === types.article}
              id={types.article}
              changeFn={() => this.handleRadioButtonChange(types.article)}
            >
              Article
            </Radio>

            <Radio
              checked={this.state.activeOption === types.note}
              id={types.note}
              changeFn={() => this.handleRadioButtonChange(types.note)}
            >
              Note
            </Radio>
          </div>
          <Input tag='input' name='name' label='Name' maxLength={30} />
          <Input tag='input' name='link' label='Twitter Link' />
          <Input tag='input' name='image' label='Image' />
          <Input tag='textarea' name='description' label='Description' />

          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
