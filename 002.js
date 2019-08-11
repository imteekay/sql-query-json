const byAttributeValue = (attribute, value) => (node) => node[attribute] === value;

const buildAttributes = (node) => (acc, attribute) => ({ ...acc, [attribute]: node[attribute] });

const selectAttributes = (attributes) => (node) => attributes.reduce(buildAttributes(node), {});

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
      .filter(byAttributeValue(this.attribute, this.value))
      .map(selectAttributes(this.attributes));;
  }
}

module.exports = SQL;
