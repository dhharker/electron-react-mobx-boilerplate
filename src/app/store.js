
import { observable, action, computed } from 'mobx';


class Data {
  @observable current = {};
  @observable.shallow ledger = [];
  @computed get ledgerSize() {
    return this.ledger.length;
  };

};

class Store {
  @observable isReady = false;
  @observable config = {};
  @observable state = {};
  data = null;

  @action load() {
    this.config = {
      foo: 'bar',
      baz: {
        qux: 'nok'
      }
    };

    this.state = {

    };

    this.data = new Data();
    const mockCurrentEntry = {
      start: Date.now(),
      name: 'some ledger entry'
    };
    this.data.current = mockCurrentEntry;
    this.data.ledger = [mockCurrentEntry];

    const _deelay = () => {
      this.isReady = true;
    };
    setTimeout(_deelay, 1000);
  };

  constructor() {
    this.load();
  }

}

let instance;

export default function getStore () {
  if (instance) return instance;
  instance = new Store();
  return instance;
}
