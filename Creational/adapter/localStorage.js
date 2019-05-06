const { readFileSync, existsSync, unlink, writeFileSync } = require("fs");

class LocalStorage {
  constructor() {
    if (existsSync("localStorage.json")) {
      let txt = readFileSync("localStorage.json");
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFileSync('localStorage.json', JSON.stringify(this.items), (error) =>{
      console.error(error)
    })
  }

  clear() {
    this.items = {};
    unlink('localStorage.json', () => {
      console.log('file deleted')
    })
  }
}

module.exports = new LocalStorage();
