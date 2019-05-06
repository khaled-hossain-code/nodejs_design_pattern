class FS_Proxy {
  constructor(fs) {
    this.fs = fs;
  }

  readFile(path, encode, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Only Markdown is supported"));
    }

    this.fs.readFile(path, encode, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }
}

module.exports = FS_Proxy;
