'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('userToCourse', {
    id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      length: 10
    },
    userId: {
      type: 'int',
      unsigned: true,
      notNull: true,
      index: true,
      length: 10
    },
    courseId: {
      type: 'int',
      unsigned: true,
      notNull: true,
      index: true,
      length: 10
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('course', callback);
}

exports._meta = {
  "version": 1
};
