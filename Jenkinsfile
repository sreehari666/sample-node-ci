pipeline {
    agent any

    options {
        skipDefaultCheckout(true)   // 🔥 VERY IMPORTANT
    }

    stages {

        stage('Checkout Latest Code') {
            steps {
                cleanWs()
                git branch: 'main',
                    url: 'https://github.com/sreehari666/sample-node-ci.git'
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
                pm2 delete server || true
                pm2 start server.js --name server
                pm2 save
                '''
            }
        }
    }
}
