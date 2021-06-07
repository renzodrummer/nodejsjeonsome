const { GetUser, Create, Update, Delete, oneUser } = require("../services/user");

exports.AllUser = async (req, res) => {
  const result = await GetUser();

  const response = (result.length > 0 ? result : "No user found!")

  res.send(response);
}

exports.GetUser = async (req, res) => {
  const result = await oneUser({where: {id: req.body.id}});

  const response = (result ? result : "No user found!")

  res.send(response);
}

exports.CreateUser = async (req, res) => {
  const result = await Create(req.body);

  if(result){
    res.send({mesage: "Succesfully Created!", status: result});
  }

  res.send({message:"Unsuccessful", error: result});
}

exports.UpdateUser = async (req, res) => {

  const condition = {where: { id: req.body.id }};
  const values = req.body;
  const result = await Update({values, condition});

  if(result){
    res.send({mesage: "Succesfully Updated!", status: result});
  }

  res.send({message:"Unsuccessful", error: result});
}

exports.DeleteUser = async (req, res) => {

  const result = await Delete({where: { id: req.body.id }});

  if(result){
    res.send({mesage: "Succesfully Delete!", status: result});
  }

  res.send({message:"Unsuccessful", error: result});
}