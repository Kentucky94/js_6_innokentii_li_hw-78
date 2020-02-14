const fs = require('fs');
const nanoid = require('nanoid');

const readFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    })
  })
};

const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if(err){
        reject(err);
      }else{
        resolve();
      }
    })
  })
};

const fileName = './db.json';

let data = [];

module.exports = {
  async init() {
    try{
      const fileContents = await readFile(fileName);
      data = JSON.parse(fileContents.toString())
    }catch(e){
      console.log('Could not read ' + fileName);
      data = []
    }
  },

  async getMessages() {
    return data;
  },

  async addMessage(message) {
    message.id = nanoid();
    data.push(message);
    await this.save();
  },

  async save(){
    const fileContents = JSON.stringify(data, null, 2);
    await writeFile(fileName, fileContents);
  }
};

