pipeline {
    agent any 

    environment {
        FLY_API_TOKENS = credentials('FLY_API_TOKENS')
    }

    tools {
        nodejs "nodejs-18"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Pintar credencial') {
            steps {
                echo "Hola, esta es mi credencial: ${FLY_API_TOKENS}" 
            }
        }

        stage('Install Fly.io') {
            steps {
                echo 'Installing Fly.io...'
                sh '''
                    # Instalar flyctl si no está ya disponible
                    curl -L https://fly.io/install.sh | sh
                    export FLYCTL_INSTALL="/var/jenkins_home/.fly"
                    export PATH="$FLYCTL_INSTALL/bin:$PATH"
                    # Autenticarse con Fly.io usando el token correcto
                    fly auth token $FLY_API_TOKENS
                '''
            }
        }
        
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run test') {
            steps {
                echo 'Running test...'
                sh "npm run test"
            }
        }

        stage('Deploy to Fly.io') {
            steps {
                echo 'Deploying the project to Fly.io...'
                sh '/var/jenkins_home/.fly/bin/flyctl deploy --app devops-proyecto-final-deploy-jenkins --remote-only'
            }
        }
    }
    
    post {
        success {
            echo 'Deployment SUCCESS!!'
        }
        failure {
            echo 'Deployment FAIL!!'
        }
    }
}
