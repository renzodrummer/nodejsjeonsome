const db = require('../db/config')

const users = db.users;

exports.GetUser = async () => {
  try{
    const user = await users.findAll();
    return user;
  }catch(err){
    return err;
  }
}

exports.oneUser = async (body) => {
  try{
    const user = await users.findOne(body);
    return user;
  }catch(err){
    return err;
  }
}

exports.Create = async (body) => {
  try{
    await users.create(body);
    return true;
  }catch(err){
    return false;
  }
}

exports.Update = async (body) => {
  try{
    await users.update(body.values,body.condition);
    return true;
  }catch(err){
    return err;
  }
}

exports.Delete = async (body) => {
  try{
    await users.destroy(body);
    return true;
  }catch(err){
    return err;
  }
}



