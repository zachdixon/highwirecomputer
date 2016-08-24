module.exports = {
  servers: {
    one: {
      host: '45.55.204.214',
      username: 'root'
      // pem:
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'highwirecomputer',
    path: '../highwirecomputer',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'www.highwirecomputer.com',
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  }
};