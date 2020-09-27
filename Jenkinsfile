pipeline {
    agent{
        node {
            label 'nodejs'
        }
    }

    stages {
        stage('Install') {
            steps {
                echo 'Install'
                container('nodejs') {
                    sh 'yarn --production'
                    sh 'yarn'
                    sh 'yarn site'
                    sh 'cd _site && ls'
                }
            }
        }
        // stage('Code Analysis') {
        //     steps {
        //         container('nodejs') {
        //            withSonarQubeEnv('sonar') {
        //                 sh "sonar-scanner"
        //             }
        //             timeout(time: 8, unit: 'MINUTES') {
        //                 waitForQualityGate abortPipeline: true
        //             }
        //         }
        //     }
        // }
        stage('Build Image') {
            steps {
                echo 'Building....'
                container('nodejs') {
                    sh 'docker build -f Dockerfile -t localhost/ppx-ui:SNAPSHOT-$BUILD_NUMBER .'
                }
            }
        }
        stage('Deploy to DEV') {
            steps {
                // input(message: '@jiangwei  是否停止', submitter: 'jiangwei')
                kubernetesDeploy(enableConfigSubstitution: true, deleteResource: false, kubeconfigId: 'demo-kubeconfig', configs: 'deploy/dev/**')
                mail(to: 'wangqinyong@hztianque.com', subject: 'DevOps通知', body: '流水线运行成功。\n工作系统前端，目前已经成功部署于 http://192.168.40.17:30998')
                sh '''curl \'https://oapi.dingtalk.com/robot/send?access_token=28129cf1ca75cfac86a04bc16757bbfd9cefcbe322cd7ac8489dcff8eb540444\' \\
                        -H \'Content-Type: application/json\' \\
                        -d \'{
                            "msgtype": "markdown",
                            "markdown": {
                                "title":"CI 通知",
                                "text": "#### 流水线运行成功 \\n> 工作系统 已经成功部署\\n> http://192.168.40.17:30998 \\n > ###### k8s-DevOps \\n"
                            }
                        }\''''

            }
        }
    }
}
