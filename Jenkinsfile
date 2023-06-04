pipeline {
     agent any
     stages {
        stage("Node") {
            steps {
                sh "sudo yum update"
                sh "curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -"
                sh "sudo yum update"
                sh "sudo yum install -y nodejs"
                sh "sudo npm install -g npm@latest"
            }
        }
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
                sh "sudo cd /home/ec2-user"
                //sh "sudo scp -r -i TDA_key_pair.pem ${WORKSPACE}/build/* ec2-user@ec2-54-152-218-119.compute-1.amazonaws.com:/usr/share/nginx/html"
                sh "sudo rsync --rsync-path='sudo rsync' -azvv -e 'ssh -i /home/ec2-user/TDA_key_pair.pem' ${WORKSPACE}/build/* ec2-user@ec2-54-152-218-119.compute-1.amazonaws.com:/usr/share/nginx/html"
            }
        }
    }
}