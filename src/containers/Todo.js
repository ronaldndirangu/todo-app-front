import React, { Component } from 'react';
import addItemAction from '../actions/addItem';
import Todo from '../components/Input';
import { connect } from 'react-redux';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  onClick = (e) => {
    e.preventDefault();

    const item = {
      item: this.state.item,
    }

    this.props.addItemAction(item);
  }

  render() {
    return (
      <Todo onChange={this.onChange} onClick={this.onClick} />
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, {addItemAction})(AddItem);
