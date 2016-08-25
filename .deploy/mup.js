module.exports = {
  servers: {
    one: {
      host: '45.55.204.214',
      username: 'root'
      // pem: "~/.ssh/id_rsa"
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'highwirecomputer',
    path: '/Users/zach/Personal/highwirecomputer',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://www.highwirecomputer.com',
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  }
};