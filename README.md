# Automated Node.js Deployment Pipeline.

This project demonstrates a fully automated CI/CD pipeline for deploying a Node.js application to an AWS EC2 instance using Docker, Jenkins, and Terraform.

##################################################################################

## Project Structur   
This is simple node.js application 

automated-nodejs-deployment/
├── app/          # Node.js application code
│   ├── app.js
│   └── package.json
├── Dockerfile    # Docker configuration
├── .dockerignore # Files to ignore during Docker build
├── Jenkinsfile   # Jenkins pipeline definition
├── terraform/    # Terraform infrastructure code
│   └── main.tf
└── README.md     # This file

#################################################################################


## Technologies Used

*   Node.js
*   Express.js
*   Docker
*   Jenkins
*   AWS EC2
*   Terraform
*   Git/GitHub

## Setup

1.  **AWS Setup:**
    *   Create an AWS account.
    *   Create an EC2 key pair.
    *   Configure your AWS credentials.

2.  **Terraform:**
    *   Install Terraform.
    *   Navigate to the `terraform/` directory.
    *   Run `terraform init` and `terraform apply`.

3.  **Jenkins:**
    *   Install Jenkins.
    *   Install the necessary plugins (Git, Docker Pipeline, Publish Over SSH).
    *   Configure your AWS credentials and EC2 SSH key in Jenkins.
    *   Create a new Jenkins pipeline job and point it to your GitHub repository.

4.  **GitHub Webhook:**
    *   Configure a GitHub webhook to trigger the Jenkins pipeline on push events.

## Usage

1.  Make changes to the `app/app.js` file.
2.  Commit and push your changes to your GitHub repository.
3.  The Jenkins pipeline will automatically build, push (optionally), and deploy your application to the EC2 instance.

## Project Name Ideas

*   Automated Node.js Deployment Pipeline
*   Node.js CI/CD with Docker, Jenkins, and AWS
*   Serverless Node.js Deployment Automation (if you later move to serverless)
*   Containerized Node.js Application Deployment

## Contributing

Contributions are welcome!

## License

[Choose a license, e.g., MIT]
