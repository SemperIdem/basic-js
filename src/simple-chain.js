const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    let value_str = String(value);
    this.chain.push(value_str);
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" || position - 1 < 0 || position - 1 > this.chain.length - 1) {
      this.chain = [];
      throw new Error();
  }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.map(element => {
      return "( " + element + " )";
    }).join('~~')
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
