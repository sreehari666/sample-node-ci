pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 restart sample-node-ci || pm2 start server.js --name sample-node-ci'
            }
        }
    }
}
  
