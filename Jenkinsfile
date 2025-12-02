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
               sh '''
               cd /home/sreehari/sample-node-ci
               npm install
               pm2 stop server || true
               pm2 start server.js --name server
               pm2 save
               '''
    	    }
	}
    }
}
  
