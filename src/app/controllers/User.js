module.exports = server => {
  const store = async (req, res) => {
    const user = {...req.body}
    
    // const user = {
    //   name: user.name,
    //   email: user.email,
    //   password: user.password,
    // };

    // Enviar um Email

    return res.json(user);
  }

  return { store }
}