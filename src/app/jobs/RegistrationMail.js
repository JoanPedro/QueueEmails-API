import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',

  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue Teste <queue@queuetest.com.br',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de Usuário',
      html: `Olá, ${user.name}, bem vindo ao sistema de fila :D !`
    })
  }
}