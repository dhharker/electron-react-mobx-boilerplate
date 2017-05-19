import React from 'react';

export default class EntriesCount extends React.Component {
  render() {
    return (
      <div>There are {this.props.numEntries} entries.</div>
    );
  }
}
