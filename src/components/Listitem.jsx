import React from 'react';
const {
Component,
StyleSheet,

} = React;

export default class ListItem extends Component {
  render() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
}
