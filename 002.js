const buildAttributes = (node) => (acc, attribute) => ({ ...acc, [attribute]: node[attribute] });

class SQL {
  constructor(json) {
    this.json = json;
  }

  select(attributes) {
    this.attributes = attributes;
    return this;
  }

  from(node) {
    this.scopedJson = this.json[node];
    return this;
  }

  where(attribute, value) {
    this.attribute = attribute;
    this.value = value;
    return this;
  }

  query() {
    return this.scopedJson
      .reduce((acc, node) => {
        if (node[this.attribute] !== this.value) return acc;
        return acc.concat(this.attributes.reduce(buildAttributes(node), {}));
      }, []);
  }
}

module.exports = SQL;
