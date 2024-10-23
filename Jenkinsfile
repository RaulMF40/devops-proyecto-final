pipeline {
    agent any 

    environment {
        FLY_API_TOKEN=credentials('FLY_API_TOKEN')
        DOCKER_TOKEN=credentials('DOCKER_TOKEN2')
        DOCKER_IMAGE="raulmoya/proyecto-final-devops:v2.0.0"

    }

    tools {
        nodejs "nodejs-18"
    }

    triggers{
        githubPush()
    }
    
    stages {

        stage('Install Fly.io') {
            steps {
                echo 'Installing Fly.io...'
                withCredentials([string(credentialsId: 'FLY_API_TOKEN', variable: 'FLY_API_TOKEN')]) {
                    sh '''
                        # Instalar flyctl si no está ya disponible
                        curl -L https://fly.io/install.sh | sh
                        export FLYCTL_INSTALL="/var/jenkins_home/.fly"
                        export PATH="$FLYCTL_INSTALL/bin:$PATH"
                        # Autenticarse con Fly.io
                        fly auth token $FLY_API_TOKEN
                    '''
                }
            }
        }
        
        stage('Install dependencies'){
            steps {
                echo 'Installing...'
                sh 'npm install'
            }
        }
        stage('Run test'){
            steps{
                echo 'Running test'
                sh "npm run test"
            }
        }

        stage('Build and Push Docker Image') {
            steps{
                echo "Build Docker Image Proyecto Final v2.0.0"
                withCredentials([string(credentialsId: 'DOCKER_TOKEN2', variable: 'DOCKER_TOKEN2')]) {
                    sh '''
                        # Autentificamos en Docker y construimos y push de la imagen a Docker Hub
                        docker login -u raulmoya -p $DOCKER_TOKEN2 
                        docker build -t raulmoya/proyecto-final-devops:v2.0.0 .
                        docker push raulmoya/proyecto-final-devops:v2.0.0
                    '''
                }
            }
        }

        stage('Pintar credencial'){
            steps{
                echo 'Hola esta es mi credencial: $FLY_API_TOKEN'
            }
        }

        stage('Deploy to Fly.io') {
            steps {
                echo 'Deploying the project to Fly.io...'
                sh '/var/jenkins_home/.fly/bin/flyctl deploy --app devops-proyecto-final-deploy-jenkins --remote-only'
            }
        }


            }
        }
    
