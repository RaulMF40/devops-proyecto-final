pipeline {
    agent any 

    environment {
        FLY_API_TOKENS=credentials('FLY_API_TOKENS')
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
                echo "Hola, se esta mi credencial para Fly.io" 
            }
        }

        stage ('Install fly.io') {
            steps {
               echo 'Installing Fly.io'
               withCredentials([string(credentialsId: 'FLY_API_TOKENS', variable: 'FLY_API_TOKENS')]) {
                  script {
                   bat('curl -L https://fly.io/install.sh | sh')
                   env.FLYCTL_INSTALL = bat('echo "/var/jenkins_home/.fly"')
                   env.PATH = bat('echo "$FLYCTL_INSTALL/bin:$PATH"')
                   env.FLY_API_TOKENS = bat('flyctl auth token ${env.FLY_API_TOKENS}')
            }
          }
        }
      }
        
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Run test') {
            steps {
                echo 'Running test...'
                bat "npm run test"
            }
        }

        stage('Deploy to Fly.io') {
            steps {
                echo 'Deploying to Fly.io'
                bat '''
                //#export FLYCTL_INSTALL="/var/jenkins_home/.fly"
                //#export PATH="$FLYCTL_INSTALL/bin:$PATH"
                flyctl deploy --app devops-proyecto-final-deploy-jenkins --remote-only
                '''
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
