---
name: aws-skills
title: AWS Development Skills
description: AWS development and infrastructure automation including CDK, Lambda, S3, and other services
source: community
author: zxkane
githubUrl: https://github.com/zxkane/aws-skills
category: development
tags:
  - aws
  - cloud
  - infrastructure
  - cdk
roles:
  - developer
  - devops
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/zxkane/aws-skills
  cp -r aws-skills ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- AWS resource provisioning
- CDK infrastructure code
- Lambda function development
- S3, DynamoDB operations
- Security best practices

## Core Capabilities

- **CDK Development**: TypeScript/Python infrastructure
- **Serverless**: Lambda, API Gateway
- **Storage Services**: S3, DynamoDB, RDS
- **Security Configuration**: IAM, VPC, Security Groups

## Example

```
Please create a serverless API:

Requirements:
- API Gateway + Lambda
- DynamoDB as data store
- S3 for file uploads
- CloudWatch logs and alarms

Write using CDK TypeScript.
```

## Notes

- Follow least privilege principle
- Use environment variables for config
- Mind cost management
- Configure appropriate monitoring
