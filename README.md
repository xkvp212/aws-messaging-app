# AWS email/SMS app


This app allows you to send an email or a SMS from a website using AWS services
## AWS Architecture used
### First Part: Static Web Hosting
<img width="650" alt="Static Web Hosting Diagram" src="https://github.com/xkvp212/aws-messaging-app/assets/42418260/31d5b841-6032-4be3-8916-bf676ad4deae">

* Import a domain name on AWS.
* Create a hosted zone and manage its DNS records.
* Create S3 Buckets to host website pages.
* Configure Route 53 to link the domain name to the website.
* Create an SSL certificate for the website using AWS Certificate Manager (ACM).
* Create CloudFront distributions to secure the website in HTTPS.


### Second Part: Serverless Messaging
<img width="800" alt="Serverless Messaging Diagram" src="https://github.com/xkvp212/aws-messaging-app/assets/42418260/032c95b8-7736-4782-8885-53d171ee6791">

* Execute email and SMS sendings from a website using S3, API Gateway and Lambda.
* Manage email and SMS sendings using Step Function.
* Create and send an email with AWS using SES and Lambda.
* Create and send a SMS with AWS using SNS and Lambda.


