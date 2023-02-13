# fs wrappers
[![npm][npm-badge]][npm-url]
[![npms.io: Score][npmsio-badge]][npmsio-url]
[![libraries.io: SourceRank][librariesio-badge]][librariesio-url]
[![Tests][tests-badge]][tests-url]
[![License: MIT][license-badge]][license-url]

> graceful-fs / fs-extra wrapper with goodies

## Install

```sh
$ npm install @valtech-commerce/fs
```


## Usage

```js
import { fsAsync, fsSync } from "@valtech-commerce/fs";

fsSync.move("/path1/path2/path3", "/path4");

fsAsync.chmodPattern("/path1/path2/**/*.js", 0o775).then(() => {
	console.log("Yeah!");
});
```








## Async - API

> `fs` is [graceful-fs](https://github.com/isaacs/node-graceful-fs)

> `fse` is [fs-extra](https://github.com/jprichardson/node-fs-extra)



<br>

<!-- access -->
### access
Maps [`fs.promises.access`](https://nodejs.org/api/fs.html#fs_fspromises_access_path_mode)



<br>

<!-- appendFile -->
### appendFile
Maps [`fs.promises.appendFile`](https://nodejs.org/api/fs.html#fs_fspromises_appendfile_path_data_options)



<br>

<!-- chmod -->
### chmod
Maps [`fs.promises.chmod`](https://nodejs.org/api/fs.html#fs_fspromises_chmod_path_mode)



<br>

<!-- chmodPattern -->
### chmodPattern(pattern, mode *[, options]*)
Applies [`fs.chmod`](https://nodejs.org/api/fs.html#fs_fs_chmod_path_mode_callback) for matching [`glob`](https://www.npmjs.com/package/glob) pattern file/dir.

#### pattern
*Required*<br>
Type: `String`<br>
glob pattern.

#### mode
*Required*<br>
Type: `Number`<br>
File mode.

#### options
Type: `Object`<br>
glob [options](https://www.npmjs.com/package/glob#options).



<br>

<!-- chown -->
### chown
Maps [`fs.promises.chown`](https://nodejs.org/api/fs.html#fs_fspromises_chown_path_uid_gid)



<br>

<!-- compressFile -->
### compressFile(source *[, destination]*)
Compresses file using gzip
`Promise` returns destination

#### source
*Required*<br>
Type: `String`<br>
Path of file to compress.

#### destination
Type: `String`<br>
Default: Same as source with a `.gz` added at the end<br>
Path of file when compressed.



<br>

<!-- copy -->
### copy
Maps [`fse.copy`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy.md)



<br>

<!-- copyFile -->
### copyFile
Maps [`fs.promises.copyFile`](https://nodejs.org/api/fs.html#fs_fspromises_copyfile_src_dest_flags)



<br>

<!-- decompressFile -->
### decompressFile(source *[, destination]*)
Decompresses file using gzip
`Promise` returns destination

#### source
*Required*<br>
Type: `String`<br>
Path of file to decompress.

#### destination
Type: `String`<br>
Default: Same as source with the `.gz` removed at the end<br>
Path of file when decompressed.



<br>

<!-- emptyDir -->
### emptyDir
Maps [`fse.emptyDir`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir.md)



<br>

<!-- ensureDir -->
### ensureDir
Maps [`fse.ensureDir`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir.md)



<br>

<!-- ensureFile -->
### ensureFile
Maps [`fse.ensureFile`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureFile.md)



<br>

<!-- ensureLink -->
### ensureLink
Maps [`fse.ensureLink`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureLink.md)



<br>

<!-- ensureSymlink -->
### ensureSymlink
Maps [`fse.ensureSymlink`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureSymlink.md)



<br>

<!-- lchmod -->
### lchmod
Maps [`fs.promises.lchmod`](https://nodejs.org/api/fs.html#fs_fspromises_lchmod_path_mode)



<br>

<!-- lchown -->
### lchown
Maps [`fs.promises.lchown`](https://nodejs.org/api/fs.html#fs_fspromises_lchown_path_uid_gid)



<br>

<!-- link -->
### link
Maps [`fs.promises.link`](https://nodejs.org/api/fs.html#fs_fspromises_link_existingpath_newpath)



<br>

<!-- lstat -->
### lstat
Maps [`fs.promises.lstat`](https://nodejs.org/api/fs.html#fs_fspromises_lstat_path_options)



<br>

<!-- mergeFiles -->
### mergeFiles(sources, destination)
Merge multiple files into a single file

#### sources
*Required*<br>
Type: `Array` of `String`<br>
Path of files to merge.

#### destination
*Required*<br>
Type: `String`<br>
Path of merged file. (If it ends with `.gz` it will be compressed using gzip)



<br>

<!-- mkdir -->
### mkdir
Maps [`fs.promises.mkdir`](https://nodejs.org/api/fs.html#fs_fspromises_mkdir_path_mode)



<br>

<!-- mkdirp -->
### mkdirp
Maps [`fse.mkdirp`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir.md)



<br>

<!-- mkdirs -->
### mkdirs
Maps [`fse.mkdirs`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir.md)



<br>

<!-- mkdtemp -->
### mkdtemp
Maps [`fs.promises.mkdtemp`](https://nodejs.org/api/fs.html#fs_fspromises_mkdtemp_prefix_options)



<br>

<!-- move -->
### move
Maps [`fse.move`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/move.md)



<br>

<!-- open -->
### open
Maps [`fs.promises.open`](https://nodejs.org/api/fs.html#fs_fspromises_open_path_flags_mode)



<br>

<!-- outputCompressed -->
### outputCompressed(file, content)
Almost the same as writeCompressed, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write.

#### content
*Required*<br>
Type: `String`<br>
Content to write.



<br>

<!-- outputFile -->
### outputFile
Maps [`fse.outputFile`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputFile.md)



<br>

<!-- outputJson -->
### outputJson(file, object *[, options]*)
Almost the same as writeJson, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON.stringify [replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).

#### options.space
Type: `String` or `Number`<br>
JSON.stringify [space](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).



<br>

<!-- outputJson5 -->
### outputJson5(file, object *[, options]*)
Almost the same as writeJson5, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON5.stringify [replacer](https://json5.org#json5stringify).

#### options.space
Type: `String` or `Number`<br>
JSON5.stringify [replacer](https://json5.org#json5stringify).



<br>


<!-- outputXml -->
### outputXml(file, object *[, options]*)
Almost the same as writeXml, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options
Type: `Object`<br>
xml2js.Builder().buildObject [options](https://github.com/Leonidas-from-XIV/node-xml2js#options-for-the-builder-class).



<br>

<!-- outputYaml -->
### outputYaml(file, object)
Almost the same as writeYaml, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.



<br>

<!-- pathExists -->
### pathExists
Maps [`fse.pathExists`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/pathExists.md)



<br>

<!-- readCompressed -->
### readCompressed(file)
Reads and decompresses file using gzip.
`Promise` returns an `String`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read.



<br>

<!-- readdir -->
### readdir
Maps [`fs.promises.readdir`](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options)



<br>

<!-- readFile -->
### readFile
Maps [`fs.promises.readFile`](https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options)



<br>

<!-- readJson -->
### readJson(file *[, reviver]*)
Reads a JSON file and then parses it into an object.<br>
`Promise` returns an `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### reviver
Type: `Function`<br>
JSON.parse [reviver](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Syntax).



<br>

<!-- readJson5 -->
### readJson5(file *[, reviver]*)
Reads a JSON5 file and then parses it into an object.<br>
`Promise` returns an `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### reviver
Type: `Function`<br>
JSON5.parse [reviver](https://json5.org#json5parse).



<br>

<!-- readlink -->
### readlink
Maps [`fs.promises.readlink`](https://nodejs.org/api/fs.html#fs_fspromises_readlink_path_options)



<br>

<!-- readXml -->
### readXml(file *[, options]*)
Reads a XML file and then parses it into an object.<br>
`Promise` returns an `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### options
Type: `Object`<br>
xml2js.parseString [options](https://github.com/Leonidas-from-XIV/node-xml2js#options).



<br>

<!-- readYaml -->
### readYaml(file)
Reads a YAML file and then parses it into an object.<br>
`Promise` returns an `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)



<br>

<!-- realpath -->
### realpath
Maps [`fs.promises.realpath`](https://nodejs.org/api/fs.html#fs_fspromises_realpath_path_options)



<br>

<!-- remove -->
### remove
Maps [`fse.remove`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove.md)



<br>

<!-- removeEmptyDir -->
### removeEmptyDir(root)
Uses [delete-empty](https://github.com/jonschlinkert/delete-empty) to recursively delete all empty folders in a directory and child directories<br>
`Promise` returns an `Array` of deleted directories

#### root
*Required*<br>
Type: `String`<br>
Path of root directory to scan



<br>

<!-- removePattern -->
### removePattern(pattern)
Uses [rimraf](https://github.com/isaacs/rimraf) to delete files and directories via a globbing pattern<br>

#### pattern
*Required*<br>
Type: `String`<br>
Globbing pattern



<br>

<!-- rename -->
### rename
Maps [`fs.promises.rename`](https://nodejs.org/api/fs.html#fs_fspromises_rename_oldpath_newpath)



<br>

<!-- rmdir -->
### rmdir
Maps [`fs.promises.rmdir`](https://nodejs.org/api/fs.html#fs_fspromises_rmdir_path)



<br>

<!-- scandir -->
### scandir(root, type, [options])
Uses [klaw](https://github.com/jprichardson/node-klaw) to scan directory for files or directories.<br>
Return `Array` of files / directories

#### root
*Required*<br>
Type: `String`<br>
Path of directory to scan.

#### type
*Required*<br>
Type: `String`<br>
Scan for `file` or `dir`

#### options.recursive
Type: `Boolean`<br>
Scan in subdirectories<br>
*Default: false*

#### options.fullPath
Type: `String`<br>
Return full absolute path instead of relative path from scanned directory<br>
*Default: false*

#### options.pattern
Type: `String`<br>
Filter results with [minimatch](https://github.com/isaacs/minimatch) pattern<br>
*Default: '\*\*'*

#### options.keepJunk
Type: `Boolean`<br>
Keep [junk](https://github.com/sindresorhus/junk) files (also filters out `.gitkeep`)<br>
*Default: false*



<br>

<!-- stat -->
### stat
Maps [`fs.promises.stat`](https://nodejs.org/api/fs.html#fs_fspromises_stat_path_options)



<br>

<!-- symlink -->
### symlink
Maps [`fs.promises.symlink`](https://nodejs.org/api/fs.html#fs_fspromises_symlink_target_path_type)



<br>

<!-- truncate -->
### truncate
Maps [`fs.promises.truncate`](https://nodejs.org/api/fs.html#fs_fspromises_truncate_path_len)



<br>

<!-- unlink -->
### unlink
Maps [`fs.promises.unlink`](https://nodejs.org/api/fs.html#fs_fspromises_unlink_path)



<br>

<!-- utimes -->
### utimes
Maps [`fs.promises.utimes`](https://nodejs.org/api/fs.html#fs_fspromises_utimes_path_atime_mtime)



<br>

<!-- writeCompressed -->
### writeCompressed(file, content)
Compresses and writes content to file using gzip.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write.

#### content
*Required*<br>
Type: `String`<br>
Content to write.



<br>

<!-- writeFile -->
### writeFile
Maps [`fs.promises.writeFile`](https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options)



<br>

<!-- writeJson -->
### writeJson(file, content *[, options]*)
Writes an object to a JSON file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON.stringify [replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).

#### options.space
Type: `String` or `Number`<br>
JSON.stringify [space](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).



<br>

<!-- writeJson5 -->
### writeJson5(file, content *[, options]*)
Writes an object to a JSON5 file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON5.stringify [replacer](https://json5.org#json5stringify).

#### options.space
Type: `String` or `Number`<br>
JSON5.stringify [replacer](https://json5.org#json5stringify).



<br>

<!-- writeXml -->
### writeXml(file, content *[, options]*)
Writes an object to a XML file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options
Type: `Object`<br>
xml2js.Builder().buildObject [options](https://github.com/Leonidas-from-XIV/node-xml2js#options-for-the-builder-class).



<br>

<!-- writeYaml -->
### writeYaml(file, object)
Writes an object to a YAML file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.



<br>












## Sync - API

> `fs` is [graceful-fs](https://github.com/isaacs/node-graceful-fs)

> `fse` is [fs-extra](https://github.com/jprichardson/node-fs-extra)



<br>

<!-- access -->
### access
Maps [`fs.accessSync`](https://nodejs.org/api/fs.html#fs_fs_accesssync_path_mode)



<br>

<!-- appendFile -->
### appendFile
Maps [`fs.appendFileSync`](https://nodejs.org/api/fs.html#fs_fs_appendfilesync_path_data_options)



<br>

<!-- chmod -->
### chmod
Maps [`fs.chmodSync`](https://nodejs.org/api/fs.html#fs_fs_chmodsync_path_mode)



<br>

<!-- chown -->
### chown
Maps [`fs.chownSync`](https://nodejs.org/api/fs.html#fs_fs_chownsync_path_uid_gid)



<br>

<!-- close -->
### close
Maps [`fs.closeSync`](https://nodejs.org/api/fs.html#fs_fs_closesync_fd)



<br>

<!-- compressFile -->
### compressFile(source *[, destination]*)
Compresses file using gzip
Return `String` destination

#### source
*Required*<br>
Type: `String`<br>
Path of file to compress.

#### destination
Type: `String`<br>
Default: Same as source with a `.gz` added at the end<br>
Path of file when compressed.



<br>

<!-- copy -->
### copy
Maps [`fse.copySync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy-sync.md)



<br>

<!-- copyFile -->
### copyFile
Maps [`fs.copyFileSync`](https://nodejs.org/api/fs.html#fs_fs_copyfilesync_src_dest_flags)



<br>

<!-- decompressFile -->
### decompressFile(source *[, destination]*)
Decompresses file using gzip
Return `String` destination

#### source
*Required*<br>
Type: `String`<br>
Path of file to decompress.

#### destination
Type: `String`<br>
Default: Same as source with the `.gz` removed at the end<br>
Path of file when decompressed.



<br>

<!-- emptyDir -->
### emptyDir
Maps [`fse.emptyDirSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir-sync.md)



<br>

<!-- ensureDir -->
### ensureDir
Maps [`fse.ensureDirSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md)



<br>

<!-- ensureFile -->
### ensureFile
Maps [`fse.ensureFileSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureFile-sync.md)



<br>

<!-- ensureLink -->
### ensureLink
Maps [`fse.ensureLinkSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureLink-sync.md)



<br>

<!-- ensureSymlink -->
### ensureSymlink
Maps [`fse.ensureSymlinkSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureSymlink-sync.md)



<br>

<!-- exists -->
### exists
Maps [`fs.existsSync`](https://nodejs.org/api/fs.html#fs_fs_existssync_path)



<br>

<!-- existsCase -->
### existsCase(path)
Almost the same as `fss.exists`, except that it also validates the case-sensitivity of the path.



<br>

<!-- fchmod -->
### fchmod
Maps [`fs.fchmodSync`](https://nodejs.org/api/fs.html#fs_fs_fchmodsync_fd_mode)



<br>

<!-- fchown -->
### fchown
Maps [`fs.fchownSync`](https://nodejs.org/api/fs.html#fs_fs_fchownsync_fd_uid_gid)



<br>

<!-- fdatasync -->
### fdatasync
Maps [`fs.fdatasyncSync`](https://nodejs.org/api/fs.html#fs_fs_fdatasyncsync_fd)



<br>

<!-- fstat -->
### fstat
Maps [`fs.fstatSync`](https://nodejs.org/api/fs.html#fs_fs_fstatsync_fd_options)



<br>

<!-- fsync -->
### fsync
Maps [`fs.fsyncSync`](https://nodejs.org/api/fs.html#fs_fs_fsyncsync_fd)



<br>

<!-- ftruncate -->
### ftruncate
Maps [`fs.ftruncateSync`](https://nodejs.org/api/fs.html#fs_fs_ftruncatesync_fd_len)



<br>

<!-- futimes -->
### futimes
Maps [`fs.futimesSync`](https://nodejs.org/api/fs.html#fs_fs_futimessync_fd_atime_mtime)



<br>

<!-- lchmod -->
### lchmod
Maps [`fs.lchmodSync`](https://nodejs.org/api/fs.html#fs_fs_lchmodsync_path_mode)



<br>

<!-- lchown -->
### lchown
Maps [`fs.lchownSync`](https://nodejs.org/api/fs.html#fs_fs_lchownsync_path_uid_gid)



<br>

<!-- link -->
### link
Maps [`fs.linkSync`](https://nodejs.org/api/fs.html#fs_fs_linksync_existingpath_newpath)



<br>

<!-- lstat -->
### lstat
Maps [`fs.lstatSync`](https://nodejs.org/api/fs.html#fs_fs_lstatsync_path_options)



<br>

<!-- mkdir -->
### mkdir
Maps [`fs.mkdirSync`](https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode)



<br>

<!-- mkdirp -->
### mkdirp
Maps [`fse.mkdirpSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md)



<br>

<!-- mkdirs -->
### mkdirs
Maps [`fse.mkdirsSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md)



<br>

<!-- mkdtemp -->
### mkdtemp
Maps [`fs.mkdtempSync`](https://nodejs.org/api/fs.html#fs_fs_mkdtempsync_prefix_options)



<br>

<!-- move -->
### move
Maps [`fse.moveSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/move-sync.md)



<br>

<!-- open -->
### open
Maps [`fs.openSync`](https://nodejs.org/api/fs.html#fs_fs_opensync_path_flags_mode)



<br>

<!-- outputCompressed -->
### outputCompressed(file, content)
Almost the same as writeCompressed, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write.

#### content
*Required*<br>
Type: `String`<br>
Content to write.




<br>

<!-- outputFile -->
### outputFile
Maps [`fse.outputFileSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputFile-sync.md)



<br>

<!-- outputJson -->
### outputJson(file, object *[, options]*)
Almost the same as writeJson, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON.stringify [replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).

#### options.space
Type: `String` or `Number`<br>
JSON.stringify [space](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).



<br>

<!-- outputJson5 -->
### outputJson5(file, object *[, options]*)
Almost the same as writeJson5, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON5.stringify [replacer](https://json5.org#json5stringify).

#### options.space
Type: `String` or `Number`<br>
JSON5.stringify [space](https://json5.org#json5stringify).



<br>

<!-- outputXml -->
### outputXml(file, object *[, options]*)
Almost the same as writeXml, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options
Type: `Object`<br>
xml2js.Builder().buildObject [options](https://github.com/Leonidas-from-XIV/node-xml2js#options-for-the-builder-class).



<br>

<!-- outputYaml -->
### outputYaml(file, object)
Almost the same as writeYaml, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.



<br>

<!-- pathExists -->
### pathExists
Maps [`fse.pathExistsSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/pathExists-sync.md)



<br>

<!-- read -->
### read
Maps [`fs.readSync`](https://nodejs.org/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position)



<br>

<!-- readCompressed -->
### readCompressed(file)
Reads and decompresses file using gzip.<br>
Return `String`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read.



<br>

<!-- readdir -->
### readdir
Maps [`fs.readdirSync`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options)



<br>

<!-- readFile -->
### readFile
Maps [`fs.readFileSync`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)



<br>

<!-- readJson -->
### readJson(file *[, reviver]*)
Reads a JSON file and then parses it into an object.<br>
Return `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### reviver
Type: `Function`<br>
JSON.parse [reviver](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Syntax).



<br>

<!-- readJson5 -->
### readJson5(file *[, reviver]*)
Reads a JSON5 file and then parses it into an object.<br>
Return `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### reviver
Type: `Function`<br>
JSON5.parse [reviver](https://json5.org#json5parse).



<br>

<!-- readlink -->
### readlink
Maps [`fs.readlinkSync`](https://nodejs.org/api/fs.html#fs_fs_readlinksync_path_options)



<br>

<!-- readXml -->
### readXml(file *[, options]*)
Reads a XML file and then parses it into an object.<br>
Return `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### options
Type: `Object`<br>
xml2jsParser.parseStringSync [options](https://github.com/vavere/xml2js-parser#options).



<br>

<!-- readYaml -->
### readYaml(file)
Reads a YAML file and then parses it into an object.<br>
Return `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)



<br>

<!-- realpath -->
### realpath
Maps [`fs.realpathSync`](https://nodejs.org/api/fs.html#fs_fs_realpathsync_path_options)



<br>

<!-- realpath.native -->
### realpath.native
Maps [`fs.realpathSync.native`](https://nodejs.org/api/fs.html#fs_fs_realpathsync_native_path_options)



<br>

<!-- remove -->
### remove
Maps [`fse.removeSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove-sync.md)


<br>

<!-- removeEmptyDir -->
### removeEmptyDir(root)
Uses [delete-empty](https://github.com/jonschlinkert/delete-empty) to recursively delete all empty folders in a directory and child directories<br>
Return `Array` of deleted directories

#### root
*Required*<br>
Type: `String`<br>
Path of root directory to scan



<br>

<!-- removePattern -->
### removePattern(pattern)
Uses [rimraf](https://github.com/isaacs/rimraf) to delete files and directories via a globbing pattern<br>

#### pattern
*Required*<br>
Type: `String`<br>
Globbing pattern



<br>

<!-- rename -->
### rename
Maps [`fs.renameSync`](https://nodejs.org/api/fs.html#fs_fs_renamesync_oldpath_newpath)



<br>

<!-- rmdir -->
### rmdir
Maps [`fs.rmdirSync`](https://nodejs.org/api/fs.html#fs_fs_rmdirsync_path)



<br>

<!-- scandir -->
### scandir(root, type, [options])
Uses [klaw-sync](https://github.com/manidlou/node-klaw-sync) to scan directory for files or directories.<br>
Return `Array` of files / directories

#### root
*Required*<br>
Type: `String`<br>
Path of directory to scan.

#### type
*Required*<br>
Type: `String`<br>
Scan for `file` or `dir`

#### options.recursive
Type: `Boolean`<br>
Scan in subdirectories<br>
*Default: false*

#### options.fullPath
Type: `String`<br>
Return full absolute path instead of relative path from scanned directory<br>
*Default: false*

#### options.pattern
Type: `String`<br>
Filter results with [minimatch](https://github.com/isaacs/minimatch) pattern<br>
*Default: '\*\*'*

#### options.keepJunk
Type: `Boolean`<br>
Keep [junk](https://github.com/sindresorhus/junk) files (also filters out `.gitkeep`)<br>
*Default: false*



<br>

<!-- stat -->
### stat
Maps [`fs.statSync`](https://nodejs.org/api/fs.html#fs_fs_statsync_path_options)



<br>

<!-- symlink -->
### symlink
Maps [`fs.symlinkSync`](https://nodejs.org/api/fs.html#fs_fs_symlinksync_target_path_type)



<br>

<!-- truncate -->
### truncate
Maps [`fs.truncateSync`](https://nodejs.org/api/fs.html#fs_fs_truncatesync_path_len)



<br>

<!-- unlink -->
### unlink
Maps [`fs.unlinkSync`](https://nodejs.org/api/fs.html#fs_fs_unlinksync_path)



<br>

<!-- utimes -->
### utimes
Maps [`fs.utimesSync`](https://nodejs.org/api/fs.html#fs_fs_utimessync_path_atime_mtime)



<br>

<!-- write -->
### write
Maps [`fs.writeSync`](https://nodejs.org/api/fs.html#fs_fs_writesync_fd_buffer_offset_length_position)



<br>

<!-- writeCompressed -->
### writeCompressed(file, content)
Compresses and writes content to file using gzip.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write.

#### content
*Required*<br>
Type: `String`<br>
Content to write.



<br>

<!-- writeFile -->
### writeFile
Maps [`fs.writeFileSync`](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options)



<br>

<!-- writeJson -->
### writeJson(file, content *[, options]*)
Writes an object to a JSON file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON.stringify [replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).

#### options.space
Type: `String` or `Number`<br>
JSON.stringify [space](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).



<br>

<!-- writeJson5 -->
### writeJson5(file, content *[, options]*)
Writes an object to a JSON5 file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON5.stringify [replacer](https://json5.org#json5stringify).

#### options.space
Type: `String` or `Number`<br>
JSON5.stringify [space](https://json5.org#json5stringify).



<br>

<!-- writeXml -->
### writeXml(file, content *[, options]*)
Writes an object to a XML file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options
Type: `Object`<br>
xml2js.Builder().buildObject [options](https://github.com/Leonidas-from-XIV/node-xml2js#options-for-the-builder-class).



<br>

<!-- writeYaml -->
### writeYaml(file, object)
Writes an object to a YAML file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.



<br>












## License

[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)

[npm-badge]: https://img.shields.io/npm/v/@valtech-commerce/fs?style=flat-square
[npmsio-badge]: https://img.shields.io/npms-io/final-score/@valtech-commerce/fs?style=flat-square
[librariesio-badge]: https://img.shields.io/librariesio/sourcerank/npm/@valtech-commerce/fs?style=flat-square
[tests-badge]: https://img.shields.io/github/actions/workflow/status/valtech-commerce/fs/tests.yaml?style=flat-square&branch=main
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@valtech-commerce/fs
[npmsio-url]: https://npms.io/search?q=%40valtech-commerce%2Ffs
[librariesio-url]: https://libraries.io/npm/@valtech-commerce%2Ffs
[tests-url]: https://github.com/valtech-commerce/fs/actions/workflows/tests.yaml?query=branch%3Amain
[license-url]: https://opensource.org/licenses/MIT
