import React from 'react';
import ListItem from './ListItem.jsx';

const ingredients = [{"id":1, "text": "ham"}, {"id":1, "text": "ham"}]

export default class List extends Component {
  render() {
    const listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />
    });
    return(<ul>{listItems}</ul>);
  }
}
