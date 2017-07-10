const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const phoneSerializer = new JSONAPISerializer('phone', {
  attributes: ['model', 'company', 'description', 'price', 'rating', 'image'],
  resource: {
    attributes: ['type', 'content']
  },
  keyForAttribute: 'camelCase'
});

class PhoneSerializer {
  static serialize(data) {
    return phoneSerializer.serialize(data);
  }
}

module.exports = PhoneSerializer;
