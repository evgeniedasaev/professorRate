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

exports.up = function(db, callback) {
  db.createTable('comment', {
    id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      length: 10
    },
    rate: {
      type: 'int',
      unsigned: true,
      notNull: true,
      length: 1
    },
    comment: 'text',
    userId: {
      type: 'int',
      unsigned: true,
      notNull: true,
      index: true,
      length: 10
    },
    authorId: {
      type: 'int',
      unsigned: true,
      notNull: true,
      index: true,
      length: 10
    },
    isPublished: 'boolean'
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('comment', callback);
};

exports._meta = {
  "version": 1
};
