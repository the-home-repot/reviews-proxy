module.exports = {
  apps: [
    {
      name: "FEC-proxy",
      script: "./server.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-3-16-214-81.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/FEC-proxy.pem",
      ref: "origin/master",
      repo: "https://github.com/the-home-repot/reviews-proxy.git",
      path: "/home/ubuntu/FEC-proxy",
      "post-deploy":
        "npm install && npm run react-deploy && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
