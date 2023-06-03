pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                //sh "sudo rm -rf /var/www/jenkins-react-app"
                //sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
                sh "scp -r -i TDA_key_pair.pem ${WORKSPACE}/build/* ec2-user@ec2-3-94-173-254.compute-1.amazonaws.com:/usr/share/nginx/html"
            }
        }
    }
}