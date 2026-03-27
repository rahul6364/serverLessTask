# 🚀 Serverless Task Management API

A powerful, scalable task management API built with Node.js, AWS Lambda, API Gateway, and DynamoDB using the Serverless Framework. Perfect for managing tasks in a serverless architecture!

## ✨ Features

- **Serverless Deployment**: Fully managed on AWS Lambda with zero server maintenance
- **RESTful API**: Clean HTTP endpoints for task operations
- **DynamoDB Integration**: Persistent storage with AWS DynamoDB
- **Fast & Scalable**: Auto-scaling with AWS infrastructure
- **Easy Testing**: Compatible with Postman, curl, or any HTTP client

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| POST | `/tasks` | Create a new task |
| GET | `/tasks` | Retrieve all tasks |
| PUT | `/tasks/{id}` | Update task completion status |

## 🛠 Prerequisites

Before you begin, ensure you have:

- **AWS Account**: With appropriate permissions for Lambda, API Gateway, and DynamoDB
- **EC2 Instance**: Ubuntu-based (or your preferred Linux distro)
- **Node.js**: Version 14.x or later (managed via NVM)
- **NPM**: Node Package Manager
- **AWS CLI**: Configured with your access keys
- **Git**: For cloning the repository

### Quick Setup on EC2

1. **Launch EC2 Instance**
   - Choose Ubuntu AMI
   - Configure security groups (allow SSH, HTTP/HTTPS if needed)

2. **Connect to EC2**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Node.js and NPM**
   ```bash
   sudo apt update
   sudo apt install nodejs npm -y
   ```

4. **Install NVM (Node Version Manager)**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install 14
   nvm use 14
   ```

5. **Install AWS CLI**
   ```bash
   sudo apt install awscli -y
   aws configure
   # Enter your AWS Access Key ID, Secret Access Key, region (us-east-2), and output format (json)
   ```

6. **Install Serverless Framework**
   ```bash
   npm install -g serverless
   ```

## 📦 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/rahul6364/serverLessTask.git
   cd serverLessTask
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure AWS Credentials** (if not done globally)
   ```bash
   aws configure
   ```

## 🚀 Deployment

Deploy to AWS with a single command:

```bash
serverless deploy
```

After deployment, you'll see output like:

```bash
Service Information
service: aws-node-http-api-project
stage: dev
region: us-east-2
stack: aws-node-http-api-project-dev
resources: 11
api keys:
  None
endpoints:
  GET - https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/
  POST - https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/tasks
  GET - https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/tasks
  PUT - https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/tasks/{id}
functions:
  welcome: aws-node-http-api-project-dev-welcome
  createTask: aws-node-http-api-project-dev-createTask
  getTasks: aws-node-http-api-project-dev-getTasks
  completeTask: aws-node-http-api-project-dev-completeTask
layers:
  None
```

## 🧪 Usage & Testing

### Using Postman

1. **Create a Task**
   - Method: `POST`
   - URL: `https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/tasks`
   - Headers: `Content-Type: application/json`
   - Body: `{"task": "Buy groceries"}`

2. **Get All Tasks**
   - Method: `GET`
   - URL: `https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/tasks`

3. **Complete a Task**
   - Method: `PUT`
   - URL: `https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/tasks/{id}`
   - Headers: `Content-Type: application/json`
   - Body: `{"completed": true}`

4. **Welcome Message**
   - Method: `GET`
   - URL: `https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/`

### Using curl

```bash
# Create task
curl -X POST https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/tasks \
  -H "Content-Type: application/json" \
  -d '{"task":"Learn Serverless"}'

# Get tasks
curl https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/tasks

# Complete task (replace {id} with actual task ID)
curl -X PUT https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/tasks/{id} \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'

# Welcome
curl https://dtha0q2x60.execute-api.us-east-2.amazonaws.com/
```

### Local Testing

Test functions locally without deployment:

```bash
# Install serverless-offline plugin
npm install --save-dev serverless-offline

# Run locally
serverless offline

# Then test with curl on localhost:3000
```

## 📁 Project Structure

```
aws-node-http-api-project/
├── src/
│   ├── completeTask.js    # Update task completion
│   ├── createTask.js      # Create new task
│   ├── getTasks.js        # Retrieve all tasks
│   └── welcome.js         # Welcome endpoint
├── package.json           # Dependencies
├── serverless.yml         # Serverless configuration
└── README.md              # This file
```

## 🔧 Configuration

### Environment Variables

Add custom environment variables in `serverless.yml`:

```yaml
provider:
  environment:
    MY_VAR: ${env:MY_VAR}
```

### Custom Domains

For production, consider setting up a custom domain via API Gateway.

## 📊 Monitoring & Logs

- **CloudWatch**: View logs and metrics
- **Serverless Dashboard**: Monitor deployments and performance

```bash
# View function logs
serverless logs -f createTask -t

# View deployment info
serverless info
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with the [Serverless Framework](https://www.serverless.com/)
- Inspired by AWS Serverless examples
- Thanks to the open-source community!

---

**Happy Coding! 🎉**

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
