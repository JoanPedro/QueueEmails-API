import Queue from 'bull';

module.exports = server => {
  const redisConfig = server.src.config.redis.redisConfig;
  const registrationMail = server.src.app.jobs.RegistrationMail;

  const mailQueue = new Queue(registrationMail.key, redisConfig);

  return { mailQueue }
}