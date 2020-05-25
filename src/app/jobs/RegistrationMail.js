module.exports = server => {
  const mailConfig = server.src.config.mail.mailConfig;

  const registrationConfig = {
    key: 'RegistrationMail',
    async handle({ data }) {
      const { user } = data;

      await mailConfig.sendMail({
        from: 'Queue Teste <queue@queuetest.com.br',
        to: `${user.name} <${user.email}>`,
        subject: 'Cadastro de Usuário',
        html: `Olá, ${user.name}, bem vindo ao sistema de fila :D !`
      })
    }
  };


  return { registrationConfig }
}