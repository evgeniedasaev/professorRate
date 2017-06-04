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
  db.createTable('user', {
    id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      length: 10
    },
    type: {
      type: 'int',
      unsigned: true,
      notNull: true,
      length: 1,
      index: true
    },
    name: 'string',
    login: {
      type: 'varchar',
      length: 100,
      unique: true
    },
    passwordCrypted: 'string',
    yearStart: {
      type: 'int',
      unsigned: true,
      notNull: true,
      length: 4
    },
    yearFinish: {
      type: 'int',
      unsigned: true,
      notNull: true,
      length: 4
    },
    rate: {
      type: 'float',
      unsigned: true,
      notNull: true
    },
    isPublished: 'boolean'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('user', callback);
};

exports._meta = {
  "version": 1
};
