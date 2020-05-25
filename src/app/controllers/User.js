import Queue from '../lib/Queue';

module.exports = server => {
  
  const store = async (req, res) => {
    const user = {...req.body}
    
    // const user = {
    //   name: user.name,
    //   email: user.email,
    //   password: user.password,
    // };
    
    // Fila 1 (Job -> RegistrationMail): Que envia o Email para o Mailtrap
    await Queue.add('RegistrationMail', { user });
    // Fila 2 (Job -> UserReport): Que printa no console os dados do usuário.
    await Queue.add('UserReport', { user });

    return res.json(user);
  }

  return { store }
}