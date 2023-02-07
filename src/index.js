//--------------------------------------------------------
//-- File System
//--------------------------------------------------------
'use strict';

const FSAsync = require('./async');
const FSSync  = require('./sync');

module.exports = {
	fsAsync: new FSAsync(),
	fsSync: new FSSync()
};
