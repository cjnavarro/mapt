pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }

  }
  stages {
    stage('Run Tests') {
      steps {
        timestamps() {
          echo 'Starting Tests'
        }

        sh 'npm run test'
        timestamps() {
          echo 'Finished Tests'
        }

      }
    }
  }
}