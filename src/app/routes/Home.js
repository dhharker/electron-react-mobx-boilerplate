import React from 'react';
import { observer } from 'mobx-react';

import getStore from '../store';
const store = getStore();

import {
  EntriesCount
} from '../widgets';


@observer
class Home extends React.Component {
  render() {
    return (
      <div>
        <EntriesCount numEntries={store.data.ledgerSize}/>
      </div>
    );
  };
};

export default Home;
