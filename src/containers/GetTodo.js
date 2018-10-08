import React, { Component } from 'react';
import { connect } from 'react-redux';
import getItems from '../actions/getItems';
import List from '../components/List';

class TodoList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { list } = this.props;
    const { items } = list;
    return (
      <List items={items} />
    )
  }
}

const mapStateToProps = state => ({
  list: state.listItems
})

export default connect(mapStateToProps, {getItems})(TodoList);
