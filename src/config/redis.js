module.exports = server => {
  const redisConfig = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  }

  return { redisConfig }
};