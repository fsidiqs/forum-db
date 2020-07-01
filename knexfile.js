// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'fsshidiq',
      password: 'root',
      database: 'community-forum'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }

};
