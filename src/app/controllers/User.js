module.exports = server => {
  
  const Mail = server.src.app.lib.Mail.mailerTransport;
  
  const store = async (req, res) => {
    const user = {...req.body}
    
    // const user = {
    //   name: user.name,
    //   email: user.email,
    //   password: user.password,
    // };

    await Mail.sendMail({
      from: 'Queue Teste <queue@queuetest.com.br',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de Usuário',
      html: `Olá, ${user.name}, bem vindo ao sistema de fila :D !`
    })

    return res.json(user);
  }

  return { store }
}