//--------------------------------------------------------
//-- Miscellaneous
//--------------------------------------------------------
'use strict';

const async       = require('async');
const { forEach } = require('async-foreach');
const fsExtra     = require('fs-extra');
const glob        = require('glob');
const gracefulFs  = require('graceful-fs');
const junk        = require('junk');
const klaw        = require('klaw');
const minimatch   = require('minimatch');
const ow          = require('ow');
const path        = require('path');
const zlib        = require('zlib');
const utils       = require('./helpers/utils');


class FspMisc {

	scandir(root, type, { recursive = false, fullPath = false, pattern = '**', keepJunk = false } = {}) {
		ow(root,      ow.string.nonEmpty);
		ow(type,      ow.string.nonEmpty.is(() => { return ['file', 'dir'].includes(type) || `Must be 'file' or 'dir'`; }));
		ow(recursive, ow.boolean);
		ow(fullPath,  ow.boolean);
		ow(pattern,   ow.string.nonEmpty);
		ow(keepJunk,  ow.boolean);

		return new Promise((resolve) => {

			// Remove trailing slash
			const rootPath = root.replace(/(.*)(\/)$/u, '$1');

			const list = [];

			klaw(rootPath, {
				nodir:      false,
				nofile:     type === 'dir',
				depthLimit: recursive ? -1 : 0
			})

				.on('readable', function() {
					let item;

					// eslint-disable-next-line no-cond-assign
					while (item = this.read()) {
						const { path:curr, stats } = item;

						const file     = curr.split(path.sep).pop();
						const relative = curr.substring(rootPath.length + 1);

						if (
							(type === 'dir' || (type === 'file' && !stats.isDirectory())) &&
							(keepJunk || (!keepJunk && junk.not(file) && !['.gitkeep'].includes(file))) &&
							minimatch(relative, pattern, { dot:true, matchBase:true })
						) {

							list.push(fullPath ? item.path : item.path.substring(rootPath.length + 1));
						}
					}
				})

				.on('end', () => {
					resolve(list);
				})
			;
		});

	}


	mergeFiles(sources, destination) {
		ow(sources,     ow.array.nonEmpty);
		ow(destination, ow.string.nonEmpty);

		return new Promise((resolve) => {

			fsExtra.remove(destination).then(() => {

				forEach(sources, function(file) {
					const done = this.async();

					const readStream  = gracefulFs.createReadStream(file);
					const writeStream = gracefulFs.createWriteStream(destination, { flags:'a' });

					if (destination.endsWith('.gz')) {
						readStream.pipe(zlib.createGzip({ level:utils.defaultCompressionLevel })).pipe(writeStream);
					} else {
						readStream.pipe(writeStream);
					}

					readStream.on('close', done);

				}, resolve);
			});
		});
	}


	chmodPattern(pattern, mode, options) {
		ow(pattern, ow.string.nonEmpty);
		ow(mode,    ow.number.integer.positive.finite);
		ow(options, ow.optional.object);

		return new Promise((resolve, reject) => {

			glob(pattern, options, (err, matches) => {
				if (!err) {
					async.every(matches, (match, cb) => {
						gracefulFs.chmod(match, mode, cb);
					}, () => {
						resolve();
					});
				} else {
					reject(err);
				}
			});
		});
	}

}


module.exports = new FspMisc();
