'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./route/default')(app)
  require('./route/admin')(app)
};
