const fs = require('fs');
const baseDir = process.env.appdata + '\\Yernemm\\NMS-SFM';
const Datastore = require('nedb');
fs.mkdirSync(baseDir, { recursive: true });

let db = {};

db.config = new Datastore({ filename: baseDir + '\\db\\config.db', autoload: true });

module.exports = {db, baseDir};