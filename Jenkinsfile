pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install -g'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}