import React from 'react';

export default class EntriesCount extends React.Component {
  render() {
    const { numEntries } = this.props;
    return (
      <div>There are {numEntries} entries.</div>
    );
  }
}
