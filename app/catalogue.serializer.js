const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const catalogueSerializer = new JSONAPISerializer('catalogue', {
  attributes: ['model', 'company', 'price', 'rating', 'image'],
  resource: {
    attributes: ['type', 'content']
  },
  keyForAttribute: 'camelCase'
});

class CatalogueSerializer {
  static serialize(data) {
    return catalogueSerializer.serialize(data);
  }
}

module.exports = CatalogueSerializer;
