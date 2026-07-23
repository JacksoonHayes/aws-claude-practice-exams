import { useEffect, useState } from "react";
import type { Question } from "../../types";

const rawQuestions: Question[] = [
  // ===================== CLOUD CONCEPTS =====================
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?",
    opts: ["Cost optimization", "Security", "Reliability", "Performance efficiency"],
    ans: [2],
    exp: {
      correct: [
        "Reliability -- deploying across multiple Availability Zones ensures the workload can recover from infrastructure or service disruptions, a core goal of the reliability pillar.",
      ],
      incorrect: [
        "Cost optimization -- focuses on avoiding unnecessary costs, not on withstanding failures.",
        "Security -- focuses on protecting data, systems, and assets.",
        "Performance efficiency -- focuses on using computing resources efficiently, not on fault recovery.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "Which pillar of the AWS Well-Architected Framework focuses on the ability to run and monitor systems and continually improve supporting processes and procedures?",
    opts: ["Operational excellence", "Reliability", "Security", "Cost optimization"],
    ans: [0],
    exp: {
      correct: [
        "Operational excellence -- centers on running and monitoring systems to deliver business value and continually improving processes and procedures.",
      ],
      incorrect: [
        "Reliability -- focuses on recovering from failures and meeting demand.",
        "Security -- focuses on protecting information and systems.",
        "Cost optimization -- focuses on avoiding unnecessary costs.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question: "Which of the following is a benefit of using the AWS Cloud instead of an on-premises data center?",
    opts: [
      "Trading a variable expense for a large upfront capital expense",
      "Trading a large upfront capital expense for a variable expense",
      "Guaranteed elimination of all security responsibilities",
      "Automatic optimization of application source code",
    ],
    ans: [1],
    exp: {
      correct: [
        "Trading a large upfront capital expense for a variable expense -- with the cloud you pay only for the resources you consume instead of investing heavily in data centers before you know how you will use them.",
      ],
      incorrect: [
        "The cloud does the opposite: it replaces upfront capital expense with variable expense.",
        "Security is a shared responsibility -- customers still have security duties.",
        "AWS does not optimize application source code for you.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "A company's workload experiences large, unpredictable spikes in traffic. Which characteristic of cloud computing allows resources to automatically scale out and back in to match demand?",
    opts: ["Elasticity", "High availability", "Fault tolerance", "Durability"],
    ans: [0],
    exp: {
      correct: [
        "Elasticity -- the ability to acquire resources as you need them and release them when you no longer need them, matching capacity to demand.",
      ],
      incorrect: [
        "High availability -- minimizing downtime, not automatically matching capacity to demand.",
        "Fault tolerance -- continuing to operate when components fail.",
        "Durability -- the ability to protect stored data against loss.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "A company wants to run applications without provisioning or managing any servers. Which AWS approach meets this requirement?",
    opts: ["Serverless computing", "Dedicated Hosts", "Bare-metal instances", "On-premises virtualization"],
    ans: [0],
    exp: {
      correct: [
        "Serverless computing -- services such as AWS Lambda let you run code without provisioning or managing servers; AWS handles the underlying infrastructure.",
      ],
      incorrect: [
        "Dedicated Hosts -- physical EC2 servers that you still manage capacity for.",
        "Bare-metal instances -- give you direct access to server hardware, which you manage.",
        "On-premises virtualization -- requires you to own and manage the servers.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question: "What is an AWS Availability Zone?",
    opts: [
      "A single data center in a specific city",
      "One or more discrete data centers with redundant power, networking, and connectivity within an AWS Region",
      "A global network of edge locations used for content delivery",
      "A billing boundary used to separate AWS accounts",
    ],
    ans: [1],
    exp: {
      correct: [
        "An Availability Zone consists of one or more discrete data centers with redundant power, networking, and connectivity, isolated from failures in other AZs within the same Region.",
      ],
      incorrect: [
        "An AZ can contain more than one data center and is defined by isolation, not by a city.",
        "A global network of edge locations describes Amazon CloudFront, not an AZ.",
        "A billing boundary describes an AWS account, not an AZ.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "Which AWS service inspects a customer's AWS environment and provides recommendations across cost optimization, performance, security, fault tolerance, and service limits?",
    opts: ["AWS Trusted Advisor", "AWS Config", "Amazon Inspector", "AWS CloudTrail"],
    ans: [0],
    exp: {
      correct: [
        "AWS Trusted Advisor -- provides real-time guidance and best-practice checks across cost optimization, performance, security, fault tolerance, and service limits.",
      ],
      incorrect: [
        "AWS Config -- records and evaluates resource configurations for compliance.",
        "Amazon Inspector -- scans workloads for software vulnerabilities.",
        "AWS CloudTrail -- records API activity for auditing.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "A company wants to reduce latency for users far from its AWS Region by caching static content closer to those users. Which part of the AWS global infrastructure supports this?",
    opts: ["Edge locations", "Availability Zones", "AWS Regions", "Local Zones"],
    ans: [0],
    exp: {
      correct: [
        "Edge locations -- used by Amazon CloudFront to cache content close to end users and reduce latency.",
      ],
      incorrect: [
        "Availability Zones -- isolated locations within a Region, not used for global content caching.",
        "AWS Regions -- separate geographic areas; deploying to one does not cache content globally.",
        "Local Zones -- place compute close to large population centers but are not the CDN caching layer.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question: "Under the AWS shared responsibility model, which of the following is AWS always responsible for?",
    opts: [
      "Physical security of the data centers",
      "Configuring IAM user permissions",
      "Encrypting customer data stored in Amazon S3",
      "Managing the guest operating system on EC2 instances",
    ],
    ans: [0],
    exp: {
      correct: [
        "Physical security of the data centers -- AWS is responsible for security 'of' the cloud, including the physical facilities and hardware.",
      ],
      incorrect: [
        "Configuring IAM permissions is a customer responsibility.",
        "Enabling and managing encryption of customer data is a customer responsibility.",
        "Managing the guest OS on EC2 instances is a customer responsibility.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "A company is designing an application so that it can handle growth in the number of users by adding more compute resources. Which cloud design principle does this describe?",
    opts: ["Scalability", "Elasticity", "Agility", "Durability"],
    ans: [0],
    exp: {
      correct: [
        "Scalability -- the ability of a system to handle increased load by adding resources.",
      ],
      incorrect: [
        "Elasticity -- automatically adding AND removing resources to match demand in real time.",
        "Agility -- the speed at which new resources can be provisioned.",
        "Durability -- the protection of data against loss.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "The AWS Cloud Adoption Framework (AWS CAF) organizes guidance into perspectives. Which perspective focuses on aligning IT strategy with business outcomes?",
    opts: ["Business perspective", "Operations perspective", "Platform perspective", "Security perspective"],
    ans: [0],
    exp: {
      correct: [
        "Business perspective -- ensures that IT investments and cloud strategy are aligned with business outcomes.",
      ],
      incorrect: [
        "Operations perspective -- focuses on running and supporting cloud workloads.",
        "Platform perspective -- focuses on building and delivering the cloud environment.",
        "Security perspective -- focuses on achieving security and compliance objectives.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "A company wants to keep some workloads in its on-premises data center while running other workloads in AWS, with connectivity between the two. Which deployment model does this describe?",
    opts: ["Hybrid cloud", "Multi-Region cloud", "Fully on-premises", "Public cloud only"],
    ans: [0],
    exp: {
      correct: [
        "Hybrid cloud -- combines on-premises infrastructure with cloud resources that work together.",
      ],
      incorrect: [
        "Multi-Region -- deploying across multiple AWS Regions, still entirely in the cloud.",
        "Fully on-premises -- no cloud resources are used.",
        "Public cloud only -- no on-premises component.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "A startup wants to launch its application to customers in multiple countries within minutes rather than building data centers in each country. Which benefit of the AWS Cloud does this describe?",
    opts: ["Go global in minutes", "Trade capital expense for variable expense", "Benefit from economies of scale", "Stop guessing capacity"],
    ans: [0],
    exp: {
      correct: [
        "Go global in minutes -- AWS lets you deploy applications in multiple Regions around the world quickly and easily.",
      ],
      incorrect: [
        "Trade capital expense for variable expense -- relates to the cost model, not global reach.",
        "Economies of scale -- relates to lower pay-as-you-go pricing.",
        "Stop guessing capacity -- relates to scaling to actual demand.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "A company only wants to pay for the compute and storage it actually uses, with no long-term contracts or upfront payments. Which AWS pricing characteristic meets this need?",
    opts: ["Pay-as-you-go pricing", "Fixed monthly licensing", "Perpetual hardware ownership", "Prepaid annual capacity"],
    ans: [0],
    exp: {
      correct: [
        "Pay-as-you-go pricing -- you pay only for the individual services you use, for as long as you use them, without long-term contracts.",
      ],
      incorrect: [
        "Fixed monthly licensing -- not the fundamental AWS on-demand model.",
        "Perpetual hardware ownership -- describes buying on-premises hardware.",
        "Prepaid annual capacity -- describes a commitment model, not pay-as-you-go.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 2,
    question:
      "Which TWO of the following are advantages of moving from a traditional on-premises data center to the AWS Cloud? (Select TWO.)",
    opts: [
      "Eliminating the need to guess capacity",
      "Removing all responsibility for data security",
      "Increasing time spent racking and stacking servers",
      "Benefiting from massive economies of scale",
      "Guaranteeing that applications never need code changes",
    ],
    ans: [0, 3],
    exp: {
      correct: [
        "Eliminating the need to guess capacity -- you can scale up or down as needed instead of over- or under-provisioning.",
        "Benefiting from massive economies of scale -- AWS's large scale results in lower pay-as-you-go pricing for customers.",
      ],
      incorrect: [
        "Data security remains a shared responsibility; customers keep security duties.",
        "The cloud reduces, not increases, time spent racking and stacking hardware.",
        "Moving to the cloud does not guarantee that applications avoid code changes.",
      ],
    },
  },
  {
    domain: "Cloud Concepts",
    multi: 1,
    question:
      "Which design approach improves an application's resilience by ensuring components do not depend directly on one another and can fail independently?",
    opts: ["Loose coupling", "Vertical scaling", "Monolithic architecture", "Tight coupling"],
    ans: [0],
    exp: {
      correct: [
        "Loose coupling -- reduces interdependencies so that the failure of one component does not cascade to others, improving resilience.",
      ],
      incorrect: [
        "Vertical scaling -- increasing the size of a single resource, unrelated to component independence.",
        "Monolithic architecture -- tends to increase interdependencies.",
        "Tight coupling -- increases dependencies and reduces resilience.",
      ],
    },
  },

  // ===================== SECURITY & COMPLIANCE =====================
  {
    domain: "Security & Compliance",
    multi: 1,
    question: "Which AWS service should be used to implement encryption in transit?",
    opts: [
      "AWS Certificate Manager (ACM)",
      "AWS Resource Access Manager (AWS RAM)",
      "AWS Shield",
      "AWS Security Hub",
    ],
    ans: [0],
    exp: {
      correct: [
        "AWS Certificate Manager (ACM) -- provisions and manages SSL/TLS certificates used to encrypt data in transit for services such as ELB and CloudFront.",
      ],
      incorrect: [
        "AWS Resource Access Manager (AWS RAM) -- shares resources across AWS accounts.",
        "AWS Shield -- protects against DDoS attacks.",
        "AWS Security Hub -- aggregates and prioritizes security findings.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 2,
    question:
      "Which credential components are required to gain programmatic access to an AWS account? (Select TWO.)",
    opts: [
      "An access key ID",
      "A secret access key",
      "A primary key",
      "A secondary key",
      "A user ID",
    ],
    ans: [0, 1],
    exp: {
      correct: [
        "An access key ID -- part of the access key pair used to authenticate programmatic requests.",
        "A secret access key -- the paired secret used to sign programmatic requests to AWS.",
      ],
      incorrect: [
        "A primary key -- not an AWS credential type.",
        "A secondary key -- not an AWS credential type.",
        "A user ID -- not used to authenticate programmatic API/CLI requests.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 2,
    question:
      "Which tasks are the customer's responsibility according to the AWS shared responsibility model? (Select TWO.)",
    opts: [
      "Install patches on Amazon RDS DB instances.",
      "Configure security groups for Amazon EC2 instances.",
      "Configure IAM users according to the principle of least privilege.",
      "Control physical access to the data center that contains a customer's VPC.",
      "Patch the operating system that AWS Lambda functions use.",
    ],
    ans: [1, 2],
    exp: {
      correct: [
        "Configure security groups for Amazon EC2 instances -- customers control network access to their instances.",
        "Configure IAM users according to the principle of least privilege -- identity and access management is a customer responsibility.",
      ],
      incorrect: [
        "Patching managed Amazon RDS DB instances is AWS's responsibility.",
        "Controlling physical access to data centers is AWS's responsibility (security 'of' the cloud).",
        "Patching the OS used by AWS Lambda is AWS's responsibility for this managed service.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "Which security measure adds an extra layer of protection to AWS account sign-in by requiring a second form of authentication?",
    opts: ["Multi-factor authentication (MFA)", "A stronger password policy", "An access key rotation schedule", "A VPC security group"],
    ans: [0],
    exp: {
      correct: [
        "Multi-factor authentication (MFA) -- requires a second factor (such as a device-generated code) in addition to the password, greatly improving sign-in security.",
      ],
      incorrect: [
        "A stronger password policy improves security but is still a single factor.",
        "Access key rotation applies to programmatic keys, not interactive sign-in.",
        "A VPC security group controls network traffic, not account sign-in.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question: "Which of the following is an AWS best practice for the AWS account root user?",
    opts: [
      "Use the root user for all daily administrative tasks",
      "Enable MFA on the root user and avoid using it for everyday tasks",
      "Share the root user credentials with the operations team",
      "Create access keys for the root user for automation",
    ],
    ans: [1],
    exp: {
      correct: [
        "Enable MFA on the root user and avoid using it for everyday tasks -- the root user has unrestricted access, so it should be protected and used only when absolutely necessary.",
      ],
      incorrect: [
        "The root user should not be used for daily tasks; use IAM identities instead.",
        "Root credentials should never be shared.",
        "AWS recommends not creating access keys for the root user.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "A security team wants to grant an IAM user only the specific permissions needed to complete their job and nothing more. Which security principle does this follow?",
    opts: ["Least privilege", "Defense in depth", "Separation of duties", "Fail-safe defaults"],
    ans: [0],
    exp: {
      correct: [
        "Least privilege -- granting only the permissions required to perform a task, and no more.",
      ],
      incorrect: [
        "Defense in depth -- layering multiple security controls.",
        "Separation of duties -- dividing responsibilities among people to reduce risk.",
        "Fail-safe defaults -- denying access by default, related but not the concept described.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "A company wants managed protection against Distributed Denial of Service (DDoS) attacks for its internet-facing applications. Which AWS service is designed for this?",
    opts: ["AWS Shield", "Amazon Macie", "AWS Config", "Amazon Cognito"],
    ans: [0],
    exp: {
      correct: [
        "AWS Shield -- provides managed protection against DDoS attacks (Shield Standard is automatic; Shield Advanced adds enhanced protection).",
      ],
      incorrect: [
        "Amazon Macie -- discovers and protects sensitive data in S3.",
        "AWS Config -- tracks resource configuration changes.",
        "Amazon Cognito -- manages user sign-up and sign-in for applications.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "A company wants to protect its web application from common exploits such as SQL injection and cross-site scripting (XSS). Which AWS service should it use?",
    opts: ["AWS WAF", "AWS Trusted Advisor", "Amazon Inspector", "AWS Secrets Manager"],
    ans: [0],
    exp: {
      correct: [
        "AWS WAF -- a web application firewall that helps protect against common web exploits such as SQL injection and XSS by filtering HTTP/HTTPS requests.",
      ],
      incorrect: [
        "AWS Trusted Advisor -- provides best-practice recommendations, not request filtering.",
        "Amazon Inspector -- scans for software vulnerabilities in workloads.",
        "AWS Secrets Manager -- stores and rotates secrets.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "Which AWS service uses machine learning to continuously monitor for malicious activity and unauthorized behavior across an AWS account?",
    opts: ["Amazon GuardDuty", "AWS Certificate Manager", "AWS Direct Connect", "Amazon Athena"],
    ans: [0],
    exp: {
      correct: [
        "Amazon GuardDuty -- a threat detection service that continuously monitors for malicious activity and unauthorized behavior.",
      ],
      incorrect: [
        "AWS Certificate Manager -- manages TLS certificates.",
        "AWS Direct Connect -- provides a dedicated network connection to AWS.",
        "Amazon Athena -- runs SQL queries against data in Amazon S3.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "A company needs a service to create and control the encryption keys used to encrypt its data across AWS services. Which service should it use?",
    opts: ["AWS Key Management Service (AWS KMS)", "AWS Shield", "Amazon Inspector", "AWS CloudTrail"],
    ans: [0],
    exp: {
      correct: [
        "AWS Key Management Service (AWS KMS) -- lets customers create and manage cryptographic keys and control their use across AWS services.",
      ],
      incorrect: [
        "AWS Shield -- DDoS protection.",
        "Amazon Inspector -- vulnerability scanning.",
        "AWS CloudTrail -- API activity logging.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "A company needs to record all API calls made in its AWS account for security auditing and troubleshooting. Which AWS service provides this?",
    opts: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "Amazon QuickSight"],
    ans: [0],
    exp: {
      correct: [
        "AWS CloudTrail -- records account activity and API calls, providing an audit trail of who did what and when.",
      ],
      incorrect: [
        "Amazon CloudWatch -- monitors metrics, logs, and alarms for performance.",
        "AWS Config -- tracks resource configuration state and changes.",
        "Amazon QuickSight -- a business intelligence and dashboard service.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "Where can a customer download AWS compliance reports, such as SOC and PCI reports, on demand?",
    opts: ["AWS Artifact", "AWS Trusted Advisor", "AWS Organizations", "Amazon Inspector"],
    ans: [0],
    exp: {
      correct: [
        "AWS Artifact -- provides on-demand access to AWS security and compliance reports and agreements.",
      ],
      incorrect: [
        "AWS Trusted Advisor -- provides best-practice recommendations.",
        "AWS Organizations -- centrally manages multiple AWS accounts.",
        "Amazon Inspector -- scans for vulnerabilities.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "An application running on an Amazon EC2 instance needs to access an Amazon S3 bucket securely without storing long-term credentials on the instance. What is the recommended approach?",
    opts: [
      "Attach an IAM role to the EC2 instance",
      "Store the root user access keys on the instance",
      "Embed an IAM user's secret key in the application code",
      "Disable IAM and make the bucket public",
    ],
    ans: [0],
    exp: {
      correct: [
        "Attach an IAM role to the EC2 instance -- the instance receives temporary credentials automatically, avoiding hard-coded long-term keys.",
      ],
      incorrect: [
        "Storing root access keys on an instance is a serious security risk and is discouraged.",
        "Embedding secret keys in code exposes long-term credentials.",
        "Disabling IAM and making the bucket public exposes data and is not secure.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "Which AWS feature acts as a stateful virtual firewall that controls inbound and outbound traffic at the Amazon EC2 instance level?",
    opts: ["Security groups", "Network ACLs", "AWS WAF", "Route tables"],
    ans: [0],
    exp: {
      correct: [
        "Security groups -- stateful firewalls that control inbound and outbound traffic for individual EC2 instances.",
      ],
      incorrect: [
        "Network ACLs -- stateless firewalls that operate at the subnet level.",
        "AWS WAF -- filters web application (HTTP/S) traffic, not instance-level traffic broadly.",
        "Route tables -- direct network traffic; they do not filter it as a firewall.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "A company needs to automatically scan its Amazon EC2 instances and container images for software vulnerabilities. Which AWS service should it use?",
    opts: ["Amazon Inspector", "Amazon Macie", "AWS Shield", "Amazon GuardDuty"],
    ans: [0],
    exp: {
      correct: [
        "Amazon Inspector -- an automated vulnerability management service that scans EC2 instances and container images for software vulnerabilities and unintended network exposure.",
      ],
      incorrect: [
        "Amazon Macie -- discovers sensitive data in S3.",
        "AWS Shield -- protects against DDoS attacks.",
        "Amazon GuardDuty -- detects malicious activity, not software vulnerabilities in packages.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "A company stores large amounts of data in Amazon S3 and wants to automatically discover and protect sensitive information such as personally identifiable information (PII). Which service is designed for this?",
    opts: ["Amazon Macie", "AWS CloudTrail", "AWS Config", "Amazon Inspector"],
    ans: [0],
    exp: {
      correct: [
        "Amazon Macie -- uses machine learning to discover, classify, and help protect sensitive data such as PII stored in Amazon S3.",
      ],
      incorrect: [
        "AWS CloudTrail -- records API activity.",
        "AWS Config -- tracks configuration changes.",
        "Amazon Inspector -- scans for software vulnerabilities, not sensitive data.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "An application needs to store database credentials securely and rotate them automatically. Which AWS service is best suited for this?",
    opts: ["AWS Secrets Manager", "AWS Certificate Manager", "Amazon S3", "AWS Trusted Advisor"],
    ans: [0],
    exp: {
      correct: [
        "AWS Secrets Manager -- securely stores secrets such as database credentials and can automatically rotate them.",
      ],
      incorrect: [
        "AWS Certificate Manager -- manages TLS certificates, not application secrets.",
        "Amazon S3 -- object storage, not a purpose-built secrets store with rotation.",
        "AWS Trusted Advisor -- provides recommendations, not secret storage.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "For an Amazon EC2 instance running a customer's application, who is responsible for patching the guest operating system?",
    opts: ["The customer", "AWS", "The AWS Marketplace vendor", "The Availability Zone operator"],
    ans: [0],
    exp: {
      correct: [
        "The customer -- for EC2 (an IaaS offering), the customer manages and patches the guest operating system and applications.",
      ],
      incorrect: [
        "AWS is responsible for the underlying infrastructure and hypervisor, not the guest OS on EC2.",
        "AWS Marketplace vendors are not responsible for ongoing OS patching of your instance.",
        "There is no 'Availability Zone operator' role for OS patching.",
      ],
    },
  },
  {
    domain: "Security & Compliance",
    multi: 1,
    question:
      "A company wants to centrally manage user access and enable single sign-on (SSO) to multiple AWS accounts and business applications. Which service should it use?",
    opts: ["AWS IAM Identity Center", "Amazon Cognito", "AWS KMS", "AWS Config"],
    ans: [0],
    exp: {
      correct: [
        "AWS IAM Identity Center -- provides centralized single sign-on access to multiple AWS accounts and applications for workforce users.",
      ],
      incorrect: [
        "Amazon Cognito -- provides sign-in for customer-facing application end users.",
        "AWS KMS -- manages encryption keys.",
        "AWS Config -- tracks configuration compliance.",
      ],
    },
  },

  // ===================== TECHNOLOGY =====================
  {
    domain: "Technology",
    multi: 2,
    question:
      "What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Select TWO.)",
    opts: [
      "Preventing a single point of failure",
      "Increasing the load of the application",
      "Reducing the operational costs of the application",
      "Increasing the availability of the application",
      "Allowing the application to serve cross-Region users with low latency",
    ],
    ans: [0, 3],
    exp: {
      correct: [
        "Preventing a single point of failure -- spreading instances across AZs means the failure of one AZ does not take down the whole application.",
        "Increasing the availability of the application -- multiple AZs allow the application to keep serving traffic if one AZ becomes unavailable.",
      ],
      incorrect: [
        "Multi-AZ does not increase the load on the application.",
        "It typically increases, not reduces, cost because more resources are running.",
        "Multi-AZ is within a single Region; serving cross-Region users with low latency requires multi-Region or edge services.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 2,
    question: "Which of the following are characteristics of Amazon S3? (Select TWO.)",
    opts: [
      "An object store",
      "A network file system",
      "A local file store",
      "A global file system",
      "A durable storage system",
    ],
    ans: [0, 4],
    exp: {
      correct: [
        "An object store -- Amazon S3 stores data as objects within buckets.",
        "A durable storage system -- S3 is designed for 99.999999999% (11 nines) of durability.",
      ],
      incorrect: [
        "A network file system -- describes Amazon EFS, not S3.",
        "A local file store -- S3 is not a local disk on an instance.",
        "A global file system -- S3 buckets are created in a specific Region, not a single global file system.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company has an on-premises Linux-based server with an Oracle database that runs on it. The company wants to migrate the database server to run on an Amazon EC2 instance in AWS. Which service should the company use to complete the migration?",
    opts: [
      "AWS Outposts",
      "AWS Application Migration Service (AWS MGN)",
      "AWS Schema Conversion Tool (AWS SCT)",
      "AWS Database Migration Service (AWS DMS)",
    ],
    ans: [1],
    exp: {
      correct: [
        "AWS Application Migration Service (AWS MGN) -- performs lift-and-shift rehosting of entire servers (OS, applications, and databases) onto Amazon EC2, which fits migrating the whole server as-is.",
      ],
      incorrect: [
        "AWS Outposts -- brings AWS infrastructure on premises; it does not migrate a server to EC2 in AWS.",
        "AWS Schema Conversion Tool (AWS SCT) -- converts database schemas between different engines, not needed when keeping Oracle on EC2.",
        "AWS Database Migration Service (AWS DMS) -- migrates data between databases, but here the goal is to move the whole server to EC2, which MGN handles.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "An application development team needs a solution that sends an alert to an entire development team if a quality assurance test fails on an application. Which AWS service should the team use?",
    opts: [
      "Amazon EventBridge",
      "Amazon Connect",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Simple Queue Service (Amazon SQS)",
    ],
    ans: [2],
    exp: {
      correct: [
        "Amazon Simple Notification Service (Amazon SNS) -- a pub/sub messaging service that can fan out a single notification to many subscribers (for example, emailing an entire team) when an event occurs.",
      ],
      incorrect: [
        "Amazon EventBridge -- routes events between services but is not itself the team-alerting mechanism.",
        "Amazon Connect -- a cloud contact center service.",
        "Amazon Simple Queue Service (Amazon SQS) -- a message queue for decoupling components, not for broadcasting alerts to people.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants to establish a consistent and private connection from the company's on-premises data center to the AWS Cloud. Which AWS service will meet these requirements?",
    opts: ["AWS Site-to-Site VPN", "AWS Client VPN", "Amazon Connect", "AWS Direct Connect"],
    ans: [3],
    exp: {
      correct: [
        "AWS Direct Connect -- provides a dedicated, private network connection between on-premises and AWS, delivering consistent network performance.",
      ],
      incorrect: [
        "AWS Site-to-Site VPN -- private but runs over the public internet, so performance is less consistent than Direct Connect.",
        "AWS Client VPN -- provides remote user access to AWS, not a data-center-to-AWS link.",
        "Amazon Connect -- a contact center service, unrelated to network connectivity.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company requires a relational database on AWS that records new customer orders from a website. Which AWS service or feature will meet this requirement?",
    opts: [
      "Amazon DynamoDB",
      "Amazon Elastic Block Store (Amazon EBS)",
      "AWS Global Accelerator",
      "Amazon Aurora",
    ],
    ans: [3],
    exp: {
      correct: [
        "Amazon Aurora -- a fully managed relational database compatible with MySQL and PostgreSQL, suitable for storing structured order data.",
      ],
      incorrect: [
        "Amazon DynamoDB -- a NoSQL key-value database, not a relational database.",
        "Amazon Elastic Block Store (Amazon EBS) -- block storage for EC2 instances, not a database service.",
        "AWS Global Accelerator -- improves network routing/performance, not a database.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants to run code in response to events without provisioning or managing servers, paying only for the compute time consumed. Which AWS service should it use?",
    opts: ["AWS Lambda", "Amazon EC2", "AWS Batch", "Amazon Lightsail"],
    ans: [0],
    exp: {
      correct: [
        "AWS Lambda -- a serverless compute service that runs code in response to events and charges only for the compute time used.",
      ],
      incorrect: [
        "Amazon EC2 -- requires provisioning and managing virtual servers.",
        "AWS Batch -- runs batch computing jobs, still using managed compute you configure.",
        "Amazon Lightsail -- provides simplified virtual private servers, which you still manage.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company needs a fully managed NoSQL database that delivers single-digit millisecond performance at any scale. Which AWS service meets this requirement?",
    opts: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon Aurora"],
    ans: [0],
    exp: {
      correct: [
        "Amazon DynamoDB -- a fully managed NoSQL key-value and document database that provides consistent single-digit millisecond performance at any scale.",
      ],
      incorrect: [
        "Amazon RDS -- a managed relational database service.",
        "Amazon Redshift -- a data warehouse for analytics.",
        "Amazon Aurora -- a managed relational database, not NoSQL.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants its Amazon EC2 fleet to automatically add instances during high demand and remove them during low demand. Which AWS service provides this capability?",
    opts: ["Amazon EC2 Auto Scaling", "Elastic Load Balancing", "AWS CloudFormation", "Amazon CloudWatch"],
    ans: [0],
    exp: {
      correct: [
        "Amazon EC2 Auto Scaling -- automatically adjusts the number of EC2 instances to match demand.",
      ],
      incorrect: [
        "Elastic Load Balancing -- distributes traffic across instances but does not change their count.",
        "AWS CloudFormation -- provisions infrastructure as code.",
        "Amazon CloudWatch -- monitors metrics and can trigger scaling, but the scaling itself is done by EC2 Auto Scaling.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants to distribute incoming application traffic across multiple Amazon EC2 instances to improve fault tolerance. Which AWS service should it use?",
    opts: ["Elastic Load Balancing (ELB)", "Amazon Route 53", "Amazon CloudFront", "AWS Direct Connect"],
    ans: [0],
    exp: {
      correct: [
        "Elastic Load Balancing (ELB) -- automatically distributes incoming traffic across multiple targets such as EC2 instances, improving fault tolerance.",
      ],
      incorrect: [
        "Amazon Route 53 -- a DNS service; it can route traffic but is not the instance-level load balancer described.",
        "Amazon CloudFront -- a content delivery network.",
        "AWS Direct Connect -- a dedicated network connection to AWS.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants to deliver its static and dynamic web content to users worldwide with low latency by caching it at edge locations. Which AWS service should it use?",
    opts: ["Amazon CloudFront", "Amazon S3", "AWS Global Accelerator", "Amazon VPC"],
    ans: [0],
    exp: {
      correct: [
        "Amazon CloudFront -- a content delivery network (CDN) that caches content at edge locations to deliver it to users with low latency.",
      ],
      incorrect: [
        "Amazon S3 -- object storage; it can host content but does not provide global edge caching by itself.",
        "AWS Global Accelerator -- improves availability and routing but is not a caching CDN.",
        "Amazon VPC -- a virtual network, not a content delivery service.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question: "Which AWS service provides scalable Domain Name System (DNS) and domain registration?",
    opts: ["Amazon Route 53", "Amazon CloudFront", "Elastic Load Balancing", "AWS Direct Connect"],
    ans: [0],
    exp: {
      correct: [
        "Amazon Route 53 -- a highly available and scalable DNS web service that also supports domain registration and health-based routing.",
      ],
      incorrect: [
        "Amazon CloudFront -- a content delivery network.",
        "Elastic Load Balancing -- distributes traffic across targets.",
        "AWS Direct Connect -- provides a dedicated network connection.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "Which AWS service lets a company provision a logically isolated section of the AWS Cloud where it can define its own IP address ranges, subnets, and route tables?",
    opts: ["Amazon VPC", "Amazon Route 53", "AWS Direct Connect", "Amazon CloudFront"],
    ans: [0],
    exp: {
      correct: [
        "Amazon VPC (Virtual Private Cloud) -- lets you provision a logically isolated virtual network with control over IP ranges, subnets, route tables, and gateways.",
      ],
      incorrect: [
        "Amazon Route 53 -- DNS service.",
        "AWS Direct Connect -- a dedicated network link to AWS.",
        "Amazon CloudFront -- a CDN.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company running mission-critical workloads needs the fastest support response times and a designated Technical Account Manager (TAM). Which AWS Support plan should it choose?",
    opts: ["Enterprise Support", "Developer Support", "Basic Support", "Business Support"],
    ans: [0],
    exp: {
      correct: [
        "Enterprise Support -- provides the fastest response times, a designated Technical Account Manager (TAM), and access to concierge support.",
      ],
      incorrect: [
        "Developer Support -- intended for development and testing, with business-hours guidance only.",
        "Basic Support -- included for all customers with limited support resources.",
        "Business Support -- offers 24/7 support but no designated TAM (available in Enterprise On-Ramp/Enterprise).",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants to run and scale containerized applications using Kubernetes without managing the Kubernetes control plane. Which AWS service should it use?",
    opts: ["Amazon Elastic Kubernetes Service (Amazon EKS)", "Amazon EC2", "AWS Lambda", "Amazon Lightsail"],
    ans: [0],
    exp: {
      correct: [
        "Amazon Elastic Kubernetes Service (Amazon EKS) -- a managed Kubernetes service that runs the Kubernetes control plane for you.",
      ],
      incorrect: [
        "Amazon EC2 -- would require you to install and manage Kubernetes yourself.",
        "AWS Lambda -- runs functions, not Kubernetes clusters.",
        "Amazon Lightsail -- simplified virtual servers, not managed Kubernetes.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question: "Which AWS service provides a fully managed private registry for storing Docker container images?",
    opts: ["Amazon Elastic Container Registry (Amazon ECR)", "Amazon S3", "AWS CodeCommit", "Amazon EFS"],
    ans: [0],
    exp: {
      correct: [
        "Amazon Elastic Container Registry (Amazon ECR) -- a fully managed container image registry for storing, managing, and deploying Docker images.",
      ],
      incorrect: [
        "Amazon S3 -- object storage, not a container registry.",
        "AWS CodeCommit -- a managed source-code (Git) repository.",
        "Amazon EFS -- a managed file system.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants to decouple the components of its application so that a producer can send messages that a consumer processes later, even if the consumer is temporarily unavailable. Which AWS service is best suited for this?",
    opts: ["Amazon Simple Queue Service (Amazon SQS)", "Amazon Simple Notification Service (Amazon SNS)", "AWS Lambda", "Amazon CloudWatch"],
    ans: [0],
    exp: {
      correct: [
        "Amazon Simple Queue Service (Amazon SQS) -- a fully managed message queue that stores messages so components can be decoupled and process work asynchronously.",
      ],
      incorrect: [
        "Amazon SNS -- a pub/sub notification service that pushes messages to subscribers, not a durable work queue.",
        "AWS Lambda -- runs code, but does not itself provide the queue.",
        "Amazon CloudWatch -- monitoring service.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company needs a fully managed petabyte-scale data warehouse to run complex analytical queries against large volumes of structured data. Which AWS service should it use?",
    opts: ["Amazon Redshift", "Amazon DynamoDB", "Amazon RDS", "Amazon ElastiCache"],
    ans: [0],
    exp: {
      correct: [
        "Amazon Redshift -- a fully managed, petabyte-scale data warehouse optimized for analytical (OLAP) queries.",
      ],
      incorrect: [
        "Amazon DynamoDB -- a NoSQL database for high-throughput transactional workloads.",
        "Amazon RDS -- for transactional relational workloads, not petabyte-scale analytics.",
        "Amazon ElastiCache -- an in-memory cache, not a data warehouse.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants to improve the performance of a read-heavy application by adding an in-memory caching layer in front of its database. Which AWS service should it use?",
    opts: ["Amazon ElastiCache", "Amazon RDS", "Amazon S3", "Amazon Redshift"],
    ans: [0],
    exp: {
      correct: [
        "Amazon ElastiCache -- provides managed in-memory caching (Redis or Memcached) to reduce database load and improve read performance.",
      ],
      incorrect: [
        "Amazon RDS -- the relational database itself, not a caching layer.",
        "Amazon S3 -- object storage, not an in-memory cache.",
        "Amazon Redshift -- a data warehouse, not a cache.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company needs to transfer several petabytes of data to AWS but has limited network bandwidth. Which AWS service is best suited to move the data?",
    opts: ["AWS Snowball", "AWS Direct Connect", "Amazon S3 Transfer Acceleration", "AWS DataSync over VPN"],
    ans: [0],
    exp: {
      correct: [
        "AWS Snowball -- a physical device used to transfer very large data sets to AWS offline, which is practical when network bandwidth is limited.",
      ],
      incorrect: [
        "AWS Direct Connect -- improves network throughput but still relies on the network for a petabyte-scale transfer.",
        "Amazon S3 Transfer Acceleration -- speeds internet uploads but is still bandwidth-bound.",
        "AWS DataSync over VPN -- transfers over the network, which is the limiting factor here.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants to define and provision its AWS infrastructure using code templates so environments are repeatable. Which AWS service enables this?",
    opts: ["AWS CloudFormation", "AWS Config", "Amazon CloudWatch", "AWS Trusted Advisor"],
    ans: [0],
    exp: {
      correct: [
        "AWS CloudFormation -- lets you model and provision AWS resources using templates (infrastructure as code) for repeatable deployments.",
      ],
      incorrect: [
        "AWS Config -- records and evaluates configuration, but does not provision infrastructure.",
        "Amazon CloudWatch -- monitors resources.",
        "AWS Trusted Advisor -- provides recommendations.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company wants to collect metrics, set alarms, and view logs to monitor the health and performance of its AWS resources. Which AWS service should it use?",
    opts: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "Amazon Inspector"],
    ans: [0],
    exp: {
      correct: [
        "Amazon CloudWatch -- collects metrics and logs, and can trigger alarms to monitor the performance and health of AWS resources and applications.",
      ],
      incorrect: [
        "AWS CloudTrail -- records API activity for auditing, not performance metrics.",
        "AWS Config -- tracks configuration changes and compliance.",
        "Amazon Inspector -- scans for vulnerabilities.",
      ],
    },
  },
  {
    domain: "Technology",
    multi: 1,
    question:
      "A company needs a shared file system that multiple Amazon EC2 Linux instances can mount and access concurrently. Which AWS service should it use?",
    opts: ["Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Block Store (Amazon EBS)", "Amazon S3 Glacier", "Amazon Redshift"],
    ans: [0],
    exp: {
      correct: [
        "Amazon Elastic File System (Amazon EFS) -- a fully managed, elastic NFS file system that many EC2 Linux instances can mount and access at the same time.",
      ],
      incorrect: [
        "Amazon EBS -- block storage typically attached to a single instance at a time.",
        "Amazon S3 Glacier -- low-cost archival object storage, not a mountable file system.",
        "Amazon Redshift -- a data warehouse.",
      ],
    },
  },

  // ===================== BILLING & PRICING =====================
  {
    domain: "Billing & Pricing",
    multi: 1,
    question:
      "Each department within a company has its own independent AWS account and its own payment method. The company needs to centralize departmental governance and consolidate payments. How can the company achieve these objectives?",
    opts: [
      "Create an organization in AWS Organizations with all features enabled. Invite all accounts to join the organization.",
      "Configure AWS IAM Identity Center in each account.",
      "Use the AWS Cost and Usage Reports page of the AWS Billing and Cost Management console.",
      "Use AWS Systems Manager OpsCenter.",
    ],
    ans: [0],
    exp: {
      correct: [
        "Create an organization in AWS Organizations with all features enabled and invite all accounts -- this provides centralized governance (for example, service control policies) and consolidated billing across all accounts.",
      ],
      incorrect: [
        "Configuring IAM Identity Center in each account addresses sign-in, not consolidated billing or org-wide governance.",
        "AWS Cost and Usage Reports provide billing detail but do not centralize governance or consolidate payment.",
        "AWS Systems Manager OpsCenter manages operational items, not billing consolidation or governance.",
      ],
    },
  },
  {
    domain: "Billing & Pricing",
    multi: 1,
    question: "Which AWS purchasing option allows customers to buy unused Amazon EC2 capacity at an often discounted rate?",
    opts: ["Dedicated Instances", "Spot Instances", "On-Demand Instances", "Reserved Instances"],
    ans: [1],
    exp: {
      correct: [
        "Spot Instances -- let you use spare EC2 capacity at steep discounts (up to 90%) compared to On-Demand, ideal for flexible or fault-tolerant workloads.",
      ],
      incorrect: [
        "Dedicated Instances -- run on hardware dedicated to a single customer, at a premium.",
        "On-Demand Instances -- pay-per-use with no discount for spare capacity.",
        "Reserved Instances -- provide discounts in exchange for a 1- or 3-year commitment, not by using spare capacity.",
      ],
    },
  },
  {
    domain: "Billing & Pricing",
    multi: 1,
    question:
      "A company wants to visualize, understand, and analyze its AWS costs and usage over time, including forecasting future spend. Which AWS tool should it use?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Trusted Advisor"],
    ans: [0],
    exp: {
      correct: [
        "AWS Cost Explorer -- lets you visualize and analyze historical costs and usage and forecast future spend.",
      ],
      incorrect: [
        "AWS Budgets -- sets custom budgets and alerts, but is focused on thresholds rather than exploratory analysis.",
        "AWS Pricing Calculator -- estimates costs before deployment.",
        "AWS Trusted Advisor -- provides best-practice recommendations, including some cost checks, but is not the cost analysis and forecasting tool.",
      ],
    },
  },
  {
    domain: "Billing & Pricing",
    multi: 1,
    question:
      "A company wants to be notified when its monthly AWS spending is forecasted to exceed a defined threshold. Which AWS tool should it use?",
    opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
    ans: [0],
    exp: {
      correct: [
        "AWS Budgets -- lets you set custom cost or usage budgets and receive alerts when actual or forecasted spend exceeds the threshold.",
      ],
      incorrect: [
        "AWS Cost Explorer -- analyzes and visualizes costs but is not primarily an alerting tool.",
        "AWS Pricing Calculator -- estimates future costs before you deploy.",
        "AWS Cost and Usage Report -- provides detailed billing data, not proactive threshold alerts.",
      ],
    },
  },
  {
    domain: "Billing & Pricing",
    multi: 1,
    question:
      "A company runs steady-state workloads on Amazon EC2 24 hours a day and wants the largest discount in exchange for a 1- or 3-year commitment. Which pricing option should it choose?",
    opts: ["Reserved Instances or Savings Plans", "On-Demand Instances", "Spot Instances", "Dedicated Hosts on demand"],
    ans: [0],
    exp: {
      correct: [
        "Reserved Instances or Savings Plans -- provide significant discounts (up to about 72%) versus On-Demand in exchange for a 1- or 3-year commitment, ideal for predictable, steady-state usage.",
      ],
      incorrect: [
        "On-Demand Instances -- flexible but the most expensive for continuous workloads.",
        "Spot Instances -- cheapest but can be interrupted, unsuitable for guaranteed steady-state capacity.",
        "Dedicated Hosts on demand -- a premium option, not the best-value discount for steady-state use.",
      ],
    },
  },
  {
    domain: "Billing & Pricing",
    multi: 1,
    question:
      "Before migrating, a company wants to estimate the monthly cost of the AWS services it plans to use. Which AWS tool is designed for this?",
    opts: ["AWS Pricing Calculator", "AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report"],
    ans: [0],
    exp: {
      correct: [
        "AWS Pricing Calculator -- lets you model and estimate the cost of AWS services before you deploy them.",
      ],
      incorrect: [
        "AWS Cost Explorer -- analyzes costs you have already incurred.",
        "AWS Budgets -- alerts on spending thresholds for existing usage.",
        "AWS Cost and Usage Report -- provides detailed data on actual usage.",
      ],
    },
  },
  {
    domain: "Billing & Pricing",
    multi: 1,
    question:
      "A new customer wants to explore certain AWS services at no charge, within specified usage limits, to learn the platform. Which offering allows this?",
    opts: ["AWS Free Tier", "AWS Budgets", "Reserved Instances", "AWS Marketplace"],
    ans: [0],
    exp: {
      correct: [
        "AWS Free Tier -- lets customers try many AWS services for free within defined usage limits (always free, 12-month free, and short-term trials).",
      ],
      incorrect: [
        "AWS Budgets -- helps track spending, not a free usage offering.",
        "Reserved Instances -- a discounted commitment pricing model, not free.",
        "AWS Marketplace -- a store for third-party software, not a free trial of AWS services.",
      ],
    },
  },
  {
    domain: "Billing & Pricing",
    multi: 2,
    question:
      "Which TWO benefits does consolidated billing in AWS Organizations provide? (Select TWO.)",
    opts: [
      "A single bill covering all accounts in the organization",
      "Volume pricing discounts by aggregating usage across accounts",
      "Automatic encryption of all data across accounts",
      "Elimination of the AWS shared responsibility model",
      "Free unlimited use of all AWS services",
    ],
    ans: [0, 1],
    exp: {
      correct: [
        "A single bill covering all accounts -- consolidated billing combines charges from all member accounts into one payer account.",
        "Volume pricing discounts -- usage is aggregated across accounts, which can help reach volume pricing tiers sooner.",
      ],
      incorrect: [
        "Consolidated billing does not automatically encrypt data.",
        "It does not change or eliminate the shared responsibility model.",
        "It does not make AWS services free or unlimited.",
      ],
    },
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildShuffledExam(raw: Question[]): Question[] {
  const shuffledQOrder = shuffleArray(raw);
  return shuffledQOrder.map((origQ) => {
    const oldIndices = origQ.opts.map((_, i) => i);
    const shuffledOldIndices = shuffleArray(oldIndices);
    const newOpts = shuffledOldIndices.map((old) => origQ.opts[old]);
    const oldToNew: Record<number, number> = {};
    shuffledOldIndices.forEach((old, newPos) => {
      oldToNew[old] = newPos;
    });
    const newAns = origQ.ans.map((old) => oldToNew[old]);
    return { ...origQ, opts: newOpts, ans: newAns };
  });
}

export default function AWSCloudPractitioner({ onBack }: { onBack: () => void }) {
  const [examStarted, setExamStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Set<number>[]>([]);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);
  const [paused, setPaused] = useState(false);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [seconds, setSeconds] = useState(90 * 60);
  const [review, setReview] = useState(false);

  useEffect(() => {
    if (!examStarted || paused || done) return;

    const timer = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setDone(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, paused, done]);

  const startExam = () => {
    const shuffled = buildShuffledExam(rawQuestions);
    setQuestions(shuffled);
    setAnswers(shuffled.map(() => new Set()));
    setChecked(new Array(shuffled.length).fill(false));
    setExamStarted(true);
    setDone(false);
    setReview(false);
    setPaused(false);
    setCurrentQuestion(0);
    setFlagged(new Set());
    setSeconds(90 * 60);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const answeredCount = () => {
    return answers.filter((s, i) => s.size > 0 || checked[i]).length;
  };

  const pickOption = (optionIndex: number) => {
    if (checked[currentQuestion] || review || paused) return;

    const question = questions[currentQuestion];
    const newAnswers = [...answers];
    const sel = new Set(newAnswers[currentQuestion]);

    if (question.multi === 1) {
      sel.clear();
      sel.add(optionIndex);
      newAnswers[currentQuestion] = sel;
      setAnswers(newAnswers);
      const newChecked = [...checked];
      newChecked[currentQuestion] = true;
      setChecked(newChecked);
    } else {
      if (sel.has(optionIndex)) {
        sel.delete(optionIndex);
      } else {
        sel.add(optionIndex);
      }
      newAnswers[currentQuestion] = sel;
      setAnswers(newAnswers);
    }
  };

  const checkAnswer = () => {
    if (checked[currentQuestion]) return;
    const newChecked = [...checked];
    newChecked[currentQuestion] = true;
    setChecked(newChecked);
  };

  const goToQuestion = (direction: number) => {
    const next = currentQuestion + direction;
    if (next >= 0 && next < questions.length) {
      setCurrentQuestion(next);
    }
  };

  const toggleFlag = () => {
    if (paused) return;
    const newFlagged = new Set(flagged);
    if (newFlagged.has(currentQuestion)) {
      newFlagged.delete(currentQuestion);
    } else {
      newFlagged.add(currentQuestion);
    }
    setFlagged(newFlagged);
  };

  const jumpToNextFlagged = () => {
    if (flagged.size === 0) {
      alert("No flagged questions.");
      return;
    }
    const arr = Array.from(flagged).sort((a, b) => a - b);
    const next = arr.find((i) => i > currentQuestion) ?? arr[0];
    setCurrentQuestion(next);
  };

  const submitExam = () => {
    if (!confirm("Submit exam? You cannot change answers after submitting.")) return;
    setDone(true);
  };

  const reviewAll = () => {
    setReview(true);
    setDone(false);
    setCurrentQuestion(0);
  };

  const restart = () => {
    if (!confirm("Start a new exam with reshuffled questions? All answers will be cleared.")) return;
    startExam();
  };

  if (!examStarted) {
    return (
      <div className='relative min-h-screen'>
        <div
          className='fixed inset-0 bg-cover'
          style={{
            backgroundImage: "url(/CfKUpQS.jpg)",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            filter: "brightness(1.25) saturate(1.05)",
          }}
        />

        <div
          className='fixed inset-0'
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,25,35,0.30) 0%, rgba(10,18,28,0.70) 60%, rgba(8,14,22,0.90) 100%)",
          }}
        />

        <div className='relative z-10 container mx-auto px-4 py-12 max-w-4xl'>
          <button
            onClick={onBack}
            className='mb-8 inline-block px-3 py-2 text-base tracking-wide transition-all bg-[rgba(8,16,24,0.7)] hover:bg-[rgba(28,40,52,0.8)] border border-[rgba(150,180,200,0.3)] backdrop-blur-sm hover:translate-x-1'
            style={{ color: "#eaf2f8" }}
          >
            ← Back to Dashboard
          </button>

          <div className='bg-[rgba(12,20,28,0.75)] border border-[rgba(150,180,200,0.22)] border-l-4 border-l-[#7bc8ea] p-8 backdrop-blur-sm'>
            <div className='mb-8'>
              <span
                className='inline-block text-sm px-3 py-2 border border-[rgba(150,180,200,0.3)] bg-[rgba(8,16,24,0.6)] tracking-wider'
                style={{ color: "#a8cae0" }}
              >
                CLF-C02
              </span>
              <h1
                className='text-4xl mt-4 mb-2 tracking-wider'
                style={{
                  color: "#e8f4fb",
                  textShadow: "2px 2px 0 #0a2230, 0 0 12px rgba(150,200,225,0.4)",
                }}
              >
                AWS Cloud Practitioner
              </h1>
              <p className='text-base tracking-wide mt-2' style={{ color: "#8ba3b8" }}>
                A practice exam to test your AWS Cloud Practitioner knowledge
              </p>
            </div>

            <div className='bg-[rgba(8,16,24,0.6)] border border-[rgba(150,180,200,0.3)] p-6 mb-8'>
              <h2
                className='text-2xl mb-4 tracking-wide'
                style={{
                  color: "#eaf2f8",
                  textShadow: "1px 1px 0 #0a2230",
                }}
              >
                Exam Details
              </h2>
              <div className='space-y-3 text-base tracking-wide' style={{ color: "#8ba3b8" }}>
                <div className='flex items-start gap-3'>
                  <span style={{ color: "#7bc8ea" }}>•</span>
                  <span>66 questions</span>
                </div>
                <div className='flex items-start gap-3'>
                  <span style={{ color: "#7bc8ea" }}>•</span>
                  <span>90 minutes</span>
                </div>
                <div className='flex items-start gap-3'>
                  <span style={{ color: "#7bc8ea" }}>•</span>
                  <span>Passing score: 70%</span>
                </div>
                <div className='flex items-start gap-3'>
                  <span style={{ color: "#7bc8ea" }}>•</span>
                  <span>
                    Mix of single-select and multi-select questions across Cloud Concepts, Security & Compliance,
                    Technology, and Billing & Pricing
                  </span>
                </div>
                <div className='flex items-start gap-3'>
                  <span style={{ color: "#7bc8ea" }}>•</span>
                  <span>Questions and answers are shuffled each time</span>
                </div>
              </div>
            </div>

            <button
              onClick={startExam}
              className='w-full py-4 text-lg font-semibold tracking-wide transition-all bg-[rgba(40,75,100,0.55)] hover:bg-[rgba(55,95,120,0.7)] border border-[rgba(150,180,200,0.22)]'
              style={{ color: "#eaf2f8" }}
            >
              Start Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (done && !review) {
    const total = questions.length;
    let correct = 0;
    questions.forEach((question, i) => {
      if (question.ans.length === answers[i].size && question.ans.every((a) => answers[i].has(a))) {
        correct++;
      }
    });
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    const unanswered = answers.filter((s, i) => s.size === 0 && !checked[i]).length;
    const used = 90 * 60 - seconds;
    const mins = Math.floor(used / 60);
    const scs = used % 60;

    const domainScores: Record<string, { correct: number; total: number }> = {};
    questions.forEach((question, i) => {
      if (!domainScores[question.domain]) {
        domainScores[question.domain] = { correct: 0, total: 0 };
      }
      domainScores[question.domain].total++;
      if (question.ans.length === answers[i].size && question.ans.every((a) => answers[i].has(a))) {
        domainScores[question.domain].correct++;
      }
    });

    return (
      <div className='relative min-h-screen'>
        <div
          className='fixed inset-0 bg-cover'
          style={{
            backgroundImage: "url(/CfKUpQS.jpg)",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            filter: "brightness(1.25) saturate(1.05)",
          }}
        />

        <div
          className='fixed inset-0'
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,25,35,0.30) 0%, rgba(10,18,28,0.70) 60%, rgba(8,14,22,0.90) 100%)",
          }}
        />

        <div className='relative z-10 container mx-auto px-4 py-12 max-w-4xl'>
          <div className='bg-[rgba(12,20,28,0.75)] border border-[rgba(150,180,200,0.22)] p-8 backdrop-blur-sm text-center'>
            <div className='text-7xl font-bold mb-4' style={{ color: passed ? "#1D9E75" : "#c0392b" }}>
              {pct}%
            </div>
            <div className='text-2xl font-semibold mb-2' style={{ color: passed ? "#1D9E75" : "#c0392b" }}>
              {passed ? "PASS -- Excellent work!" : "FAIL -- Review your weak areas"}
            </div>
            <div className='text-base mb-8' style={{ color: "#8ba3b8" }}>
              (passing score: 70%)
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
              <div className='bg-[rgba(8,16,24,0.6)] border border-[rgba(150,180,200,0.3)] p-4'>
                <div className='text-xs uppercase tracking-wider mb-2' style={{ color: "#8ba3b8" }}>
                  Correct
                </div>
                <div className='text-3xl font-bold' style={{ color: "#1D9E75" }}>
                  {correct}
                </div>
              </div>
              <div className='bg-[rgba(8,16,24,0.6)] border border-[rgba(150,180,200,0.3)] p-4'>
                <div className='text-xs uppercase tracking-wider mb-2' style={{ color: "#8ba3b8" }}>
                  Incorrect
                </div>
                <div className='text-3xl font-bold' style={{ color: "#c0392b" }}>
                  {total - correct - unanswered}
                </div>
              </div>
              <div className='bg-[rgba(8,16,24,0.6)] border border-[rgba(150,180,200,0.3)] p-4'>
                <div className='text-xs uppercase tracking-wider mb-2' style={{ color: "#8ba3b8" }}>
                  Unanswered
                </div>
                <div className='text-3xl font-bold' style={{ color: "#eaf2f8" }}>
                  {unanswered}
                </div>
              </div>
              <div className='bg-[rgba(8,16,24,0.6)] border border-[rgba(150,180,200,0.3)] p-4'>
                <div className='text-xs uppercase tracking-wider mb-2' style={{ color: "#8ba3b8" }}>
                  Time used
                </div>
                <div className='text-3xl font-bold' style={{ color: "#eaf2f8" }}>
                  {mins}:{String(scs).padStart(2, "0")}
                </div>
              </div>
            </div>

            <div className='text-left mb-8'>
              <h4 className='text-lg font-semibold mb-4' style={{ color: "#eaf2f8" }}>
                Performance by Domain
              </h4>
              <div className='space-y-4'>
                {Object.entries(domainScores).map(([domain, score]) => {
                  const domainPct = Math.round((score.correct / score.total) * 100);
                  return (
                    <div key={domain}>
                      <div className='flex justify-between text-sm mb-2' style={{ color: "#8ba3b8" }}>
                        <span>{domain}</span>
                        <span>
                          {score.correct}/{score.total} ({domainPct}%)
                        </span>
                      </div>
                      <div className='h-2 bg-[rgba(8,16,24,0.6)] border border-[rgba(150,180,200,0.3)]'>
                        <div
                          className='h-full transition-all'
                          style={{
                            width: `${domainPct}%`,
                            background: domainPct >= 70 ? "#1D9E75" : "#c0392b",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='space-y-3'>
              <button
                onClick={reviewAll}
                className='w-full py-3 text-base font-semibold tracking-wide transition-all bg-[rgba(40,75,100,0.55)] hover:bg-[rgba(55,95,120,0.7)] border border-[rgba(150,180,200,0.22)]'
                style={{ color: "#eaf2f8" }}
              >
                Review All Questions & Explanations
              </button>
              <button
                onClick={restart}
                className='w-full py-3 text-base font-semibold tracking-wide transition-all bg-[rgba(8,16,24,0.6)] hover:bg-[rgba(28,40,52,0.6)] border border-[rgba(150,180,200,0.22)]'
                style={{ color: "#eaf2f8" }}
              >
                New Shuffle & Start Over
              </button>
              <button
                onClick={onBack}
                className='w-full py-3 text-base font-semibold tracking-wide transition-all bg-[rgba(8,16,24,0.6)] hover:bg-[rgba(28,40,52,0.6)] border border-[rgba(150,180,200,0.22)]'
                style={{ color: "#eaf2f8" }}
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const sel = answers[currentQuestion];
  const locked = checked[currentQuestion] || review;
  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);
  const multi = question.multi > 1;

  return (
    <div className='relative min-h-screen'>
      <div
        className='fixed inset-0 bg-cover'
        style={{
          backgroundImage: "url(/CfKUpQS.jpg)",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          filter: "brightness(1.25) saturate(1.05)",
        }}
      />

      <div
        className='fixed inset-0'
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,25,35,0.30) 0%, rgba(10,18,28,0.70) 60%, rgba(8,14,22,0.90) 100%)",
        }}
      />

      <div className='relative z-10 container mx-auto px-4 py-8 max-w-5xl'>
        <div className='flex items-center justify-between mb-4 bg-[rgba(12,20,28,0.75)] border border-[rgba(150,180,200,0.22)] p-4 backdrop-blur-sm'>
          <h2 className='text-xl tracking-wide' style={{ color: "#e8f4fb" }}>
            CLF-C02 Practice Exam
          </h2>
          <div className='flex items-center gap-3'>
            <div
              className={`text-base font-bold px-4 py-2 border ${seconds <= 300 ? "animate-pulse" : ""}`}
              style={{
                color: seconds <= 300 ? "#c0392b" : "#eaf2f8",
                background: seconds <= 300 ? "rgba(192,57,43,0.15)" : "rgba(8,16,24,0.6)",
                borderColor: seconds <= 300 ? "#c0392b" : "rgba(150,180,200,0.3)",
              }}
            >
              {formatTime(seconds)}
            </div>
            <button
              onClick={() => setPaused(!paused)}
              className='px-4 py-2 text-sm tracking-wide transition-all bg-[rgba(8,16,24,0.6)] hover:bg-[rgba(28,40,52,0.6)] border border-[rgba(150,180,200,0.22)]'
              style={{ color: "#eaf2f8" }}
            >
              {paused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={() => {
                if (confirm("Exit exam? All progress will be lost.")) {
                  setExamStarted(false);
                  setQuestions([]);
                  setAnswers([]);
                  setChecked([]);
                  setCurrentQuestion(0);
                  setFlagged(new Set());
                  setDone(false);
                  setReview(false);
                  setPaused(false);
                  setSeconds(90 * 60);
                }
              }}
              className='px-4 py-2 text-sm tracking-wide transition-all bg-[rgba(192,57,43,0.2)] hover:bg-[rgba(192,57,43,0.3)] border border-[rgba(192,57,43,0.5)]'
              style={{ color: "#f1948a" }}
            >
              Exit Exam
            </button>
          </div>
        </div>

        <div className='bg-[rgba(12,20,28,0.75)] border border-[rgba(150,180,200,0.22)] p-4 backdrop-blur-sm mb-4'>
          <div className='flex justify-between text-sm mb-2' style={{ color: "#8ba3b8" }}>
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>
              {answeredCount()} answered · {flagged.size} flagged
            </span>
          </div>
          <div className='h-2 bg-[rgba(8,16,24,0.6)] border border-[rgba(150,180,200,0.3)]'>
            <div
              className='h-full transition-all'
              style={{
                width: `${progress}%`,
                background: "#1D9E75",
              }}
            />
          </div>
        </div>

        {paused && (
          <div className='fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50 flex items-center justify-center'>
            <div className='bg-[rgba(12,20,28,0.95)] border border-[rgba(150,180,200,0.22)] p-8 text-center max-w-md'>
              <h3 className='text-3xl mb-4' style={{ color: "#e8f4fb" }}>
                Exam Paused
              </h3>
              <p className='text-base mb-6' style={{ color: "#8ba3b8" }}>
                Timer stopped. Your answers are saved.
              </p>
              <button
                onClick={() => setPaused(false)}
                className='px-8 py-3 text-base font-semibold tracking-wide transition-all bg-[rgba(40,75,100,0.55)] hover:bg-[rgba(55,95,120,0.7)] border border-[rgba(150,180,200,0.22)]'
                style={{ color: "#eaf2f8" }}
              >
                Resume Exam
              </button>
            </div>
          </div>
        )}

        {review && (
          <div
            className='bg-[#fff8e1] border border-[#ffe082] p-3 mb-4 text-center text-sm font-semibold'
            style={{ color: "#a67c00" }}
          >
            Review Mode -- all answers revealed with explanations
          </div>
        )}

        <div className='bg-[rgba(12,20,28,0.75)] border border-[rgba(150,180,200,0.22)] p-6 backdrop-blur-sm mb-4'>
          <div className='flex items-start justify-between mb-4'>
            <div className='flex items-center gap-3 flex-wrap'>
              <span className='text-xs uppercase tracking-wider' style={{ color: "#8ba3b8" }}>
                question{currentQuestion + 1}
              </span>
              <span
                className='text-xs px-3 py-1 border border-[rgba(150,180,200,0.3)] bg-[rgba(8,16,24,0.6)]'
                style={{ color: "#7bc8ea" }}
              >
                {question.domain}
              </span>
              {multi && (
                <span
                  className='text-xs px-3 py-1 border font-semibold'
                  style={{
                    background: "#fff3e0",
                    color: "#e65100",
                    borderColor: "#ffcc80",
                  }}
                >
                  Select {question.multi}
                </span>
              )}
            </div>
            <button
              onClick={toggleFlag}
              className='text-2xl transition-colors'
              style={{ color: flagged.has(currentQuestion) ? "#e67e22" : "#666" }}
            >
              {flagged.has(currentQuestion) ? "⚑" : "⚐"}
            </button>
          </div>

          <div className='text-base leading-relaxed mb-6' style={{ color: "#eaf2f8" }}>
            {question.question}
          </div>

          {multi && (
            <div className='text-sm italic mb-4' style={{ color: "#8ba3b8" }}>
              Select exactly {question.multi} answers.
            </div>
          )}

          <div className='space-y-3'>
            {question.opts.map((opt, i) => {
              let bgColor = "rgba(8,16,24,0.6)";
              let borderColor = "rgba(150,180,200,0.3)";
              let textColor = "#eaf2f8";

              if (locked) {
                if (question.ans.includes(i) && sel.has(i)) {
                  bgColor = "rgba(29,158,117,0.2)";
                  borderColor = "#1D9E75";
                  textColor = "#b4f2d1";
                } else if (question.ans.includes(i) && !sel.has(i)) {
                  bgColor = "rgba(243,156,18,0.2)";
                  borderColor = "#f39c12";
                  textColor = "#f8c471";
                } else if (!question.ans.includes(i) && sel.has(i)) {
                  bgColor = "rgba(192,57,43,0.2)";
                  borderColor = "#c0392b";
                  textColor = "#f1948a";
                }
              } else if (sel.has(i)) {
                bgColor = "rgba(74,144,217,0.2)";
                borderColor = "#4a90d9";
                textColor = "#a2c8f0";
              }

              return (
                <div
                  key={i}
                  onClick={() => pickOption(i)}
                  className={`flex items-start gap-3 p-4 border transition-all ${
                    !locked && !paused ? "cursor-pointer hover:bg-[rgba(40,75,100,0.3)]" : ""
                  }`}
                  style={{
                    background: bgColor,
                    borderColor: borderColor,
                    color: textColor,
                  }}
                >
                  {multi ? (
                    <div
                      className='w-4 h-4 border-2 flex items-center justify-center text-xs shrink-0 mt-0.5'
                      style={{ borderColor: sel.has(i) || locked ? borderColor : "#666" }}
                    >
                      {sel.has(i) && "✓"}
                    </div>
                  ) : (
                    <div
                      className='w-4 h-4 border-2 rounded-full flex items-center justify-center shrink-0 mt-0.5'
                      style={{ borderColor: sel.has(i) || locked ? borderColor : "#666" }}
                    >
                      {sel.has(i) && <div className='w-2 h-2 rounded-full' style={{ background: textColor }} />}
                    </div>
                  )}
                  <div className='flex-1'>
                    <span className='font-semibold mr-2'>{"ABCDE"[i]}.</span>
                    {opt}
                  </div>
                </div>
              );
            })}
          </div>

          {multi && !locked && sel.size > 0 && (
            <button
              onClick={checkAnswer}
              className='w-full mt-4 py-3 text-base font-semibold tracking-wide transition-all bg-[rgba(74,144,217,0.2)] hover:bg-[rgba(74,144,217,0.3)] border'
              style={{ color: "#4a90d9", borderColor: "#4a90d9" }}
            >
              Check Answer (select {question.multi})
            </button>
          )}

          {locked && (
            <div className='mt-6 border border-[rgba(150,180,200,0.22)]'>
              <div
                className='px-4 py-2 text-xs uppercase tracking-wider font-semibold'
                style={{
                  background: "#1D9E75",
                  color: "#fff",
                }}
              >
                Explanation
              </div>
              <div
                className='p-4 text-sm leading-relaxed'
                style={{
                  background: "rgba(29,158,117,0.1)",
                  color: "#b4f2d1",
                }}
              >
                {question.exp.correct.map((exp, idx) => (
                  <div key={idx} className='mb-3'>
                    <span className='font-semibold' style={{ color: "#1D9E75" }}>
                      CORRECT:
                    </span>{" "}
                    {exp}
                  </div>
                ))}
                {question.exp.incorrect.map((exp, idx) => (
                  <div key={idx} className='mb-3'>
                    <span className='font-semibold' style={{ color: "#c0392b" }}>
                      INCORRECT:
                    </span>{" "}
                    {exp}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='flex gap-3'>
          <button
            onClick={() => goToQuestion(-1)}
            disabled={currentQuestion === 0}
            className='flex-1 py-3 text-base font-semibold tracking-wide transition-all bg-[rgba(8,16,24,0.6)] hover:bg-[rgba(28,40,52,0.6)] border border-[rgba(150,180,200,0.22)] disabled:opacity-30 disabled:cursor-not-allowed'
            style={{ color: "#eaf2f8" }}
          >
            ← Prev
          </button>
          <button
            onClick={jumpToNextFlagged}
            className='px-6 py-3 text-base font-semibold tracking-wide transition-all bg-[rgba(8,16,24,0.6)] hover:bg-[rgba(28,40,52,0.6)] border border-[rgba(150,180,200,0.22)]'
            style={{ color: "#eaf2f8" }}
          >
            ⚑ ({flagged.size})
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={() => goToQuestion(1)}
              className='flex-1 py-3 text-base font-semibold tracking-wide transition-all bg-[rgba(8,16,24,0.6)] hover:bg-[rgba(28,40,52,0.6)] border border-[rgba(150,180,200,0.22)]'
              style={{ color: "#eaf2f8" }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={submitExam}
              className='flex-1 py-3 text-base font-semibold tracking-wide transition-all bg-[rgba(40,75,100,0.55)] hover:bg-[rgba(55,95,120,0.7)] border border-[rgba(150,180,200,0.22)]'
              style={{ color: "#eaf2f8" }}
            >
              Submit Exam
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
