pipeline {
    agent any

    stages {
        stage ("Deploy staging") {
            steps {
                sh '''
                cd /opt/devops-series/staging
                git checkout develop
                git pull origin develop

                docker-compose down
                docker-compose up -d --build
                '''
            }
        }
    }
}