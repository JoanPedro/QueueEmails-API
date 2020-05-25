import Queue from '../lib/Queue';

module.exports = server => {
  
  const store = async (req, res) => {
    const user = {...req.body}
    
    // const user = {
    //   name: user.name,
    //   email: user.email,
    //   password: user.password,
    // };
    
    // Adicionar Job RegistrationMail na fila;
    await Queue.add({ user });

    return res.json(user);
  }

  return { store }
}