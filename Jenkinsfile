pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-v /usr/local/lib/node_modules:/usr/local/lib/node_modules'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '/usr/local/bin/npm install -g'
      }
    }
    stage('Test') {
      steps {
        sh '/usr/local/bin/npm run test'
      }
    }
  }
}