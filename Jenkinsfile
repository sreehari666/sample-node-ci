pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                git 'https://github.com/sreehari666/sample-node-ci.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                pm2 stop sample-node-ci || true
                pm2 start server.js --name sample-node-ci
                pm2 save
                '''
            }
        }
    }
}
