pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-v /usr/local/lib/node_modules:/usr/local/lib/node_modules'
    }

  }
  stages {
    stage('Run Tests') {
      steps {
        timestamps() {
          echo 'Starting Tests'
        }

        sh '''npm install -g
npm run test'''
        timestamps() {
          echo 'Finished Tests'
        }

      }
    }
  }
}