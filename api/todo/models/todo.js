'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const afterCreate = (result, data) => {
  console.log('created new todo entry');
};

module.exports = {
  afterCreate,
};
