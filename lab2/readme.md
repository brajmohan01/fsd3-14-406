# File System of NodeJS
- It allows JS code running outside the browser and interact directly to operating system
## comman operations on file/folder
- CRUD : create , read , update , delete
- Reading and writing files -> readFile(), writeFile() , appendFile()
- Directory management -> mkdir() , rmdir(), readdir()
- Metadata/information -> stat() , lstat() , fstat()
- watching for changes -> watch(), watchFile() , unwatchFile()
- Streaming Large Files -> createStream() , createWriteStream()
- File operations -> rename() , truncate(), unlink(), syslink()

- await can be used with any promise in async function. that async function will also accessed by await keyword