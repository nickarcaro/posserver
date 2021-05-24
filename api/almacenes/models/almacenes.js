"use strict";
const slugify = require("slugify");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.nombre) {
        data.slug = slugify(data.nombre, { lower: true });
      }
    },
    async beforeUpdate(params, data) {
      if (data.nombre) {
        data.slug = slugify(data.nombre, { lower: true });
      }
    },
  },
};
