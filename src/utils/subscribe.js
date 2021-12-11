
export const subscribe = {
  list: new Map(),
  on(type, fn) {
    if (this.list.has(type)) {
      const ori = this.list.get(type)
      this.list.set(type, [ ...ori, fn ])
    } else {
      this.list.set(type, [ fn ])
    }
  },
  notify(type, data) {
    const list = this.list.get(type)
    for (let i = 0; i < list.length; i++) {
      const cb = list[i]
      cb(data)
    }
  },

  remove(type, fn) {
    if (type) {
      const list = this.list.get(type)
      const idx = list.findIndex(o => o === fn)
      list.splice(idx, 1)
      this.list.set(list)
    } else {
      this.list.delete(type)
    }
  }
}


class Loading {
  constructor () {
      this.loadingTag = 0;
      this.subscriptions = [];
  }
  add () {
    const _this = this
    _this.loadingTag++;
    _this.subscriptions.forEach((f,index) => f(_this.loadingTag,index));
    
  }
  sub () {
    const _this = this
    _this.loadingTag--;
    _this.subscriptions.forEach((f,index) => f(_this.loadingTag,index));
    
  }
  get () {
    const _this = this
      return _this.loadingTag;
  }
  subscribe (f) {
    const _this = this
    _this.subscriptions.push(f);
  
  }
  del(index){
    const _this = this
    _this.subscriptions.splice(index,1)
  }
}
export const loadingPublisher = new Loading();
