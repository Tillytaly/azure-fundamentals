interface Question {
  id: number
  category: string
  question: string
  options: { value: string; id: string; tag: string }[]
  correct: string
  explanation: string
  userChoice: {
    id: string
    value: string
  }
}
const questions: Question[] = [
  {
    id: 1,
    category: "Cloud Concepts",
    question:
      "Which cloud service model gives you the most control over the underlying infrastructure?",
    options: [
      { value: "SaaS", id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", tag: "A" },
      { value: "PaaS", id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", tag: "B" },
      { value: "IaaS", id: "c3d4e5f6-a7b8-9012-cdef-123456789012", tag: "C" },
      { value: "FaaS", id: "d4e5f6a7-b8c9-0123-defa-234567890123", tag: "D" },
    ],
    correct: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    explanation:
      "IaaS (Infrastructure as a Service) provides virtualized computing resources — you manage OS, middleware, and applications while the provider manages physical hardware.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 2,
    category: "Cloud Concepts",
    question: "What does the 'shared responsibility model' mean in Azure?",
    options: [
      {
        value: "Microsoft and the customer split the monthly bill equally",
        id: "f7a3e2b1-4c89-4d56-a123-8e9f01234567",
        tag: "A",
      },
      {
        value:
          "Security responsibilities are divided between Microsoft and the customer depending on the service type",
        id: "2d8c6f04-b731-4e90-bc45-7a1234567890",
        tag: "B",
      },
      {
        value: "All security is handled by Microsoft",
        id: "9e1b5a37-c284-4f01-d678-3b2345678901",
        tag: "C",
      },
      {
        value: "The customer is responsible for everything",
        id: "4c7f2d89-e015-4a23-ef90-6c3456789012",
        tag: "D",
      },
    ],
    correct: "2d8c6f04-b731-4e90-bc45-7a1234567890",
    explanation:
      "In the shared responsibility model, Microsoft handles physical security, network infrastructure, and host OS. The customer is responsible for data, identities, and (depending on service) OS and applications.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 3,
    category: "Azure Architecture",
    question: "What is an Azure Region?",
    options: [
      {
        value: "Microsoft and the customer split the monthly bill equally",
        id: "f7a3e2b1-4c89-4d56-a123-8e9f01234567",
        tag: "A",
      },
      {
        value:
          "Security responsibilities are divided between Microsoft and the customer depending on the service type",
        id: "2d8c6f04-b731-4e90-bc45-7a1234567890",
        tag: "B",
      },
      {
        value: "All security is handled by Microsoft",
        id: "9e1b5a37-c284-4f01-d678-3b2345678901",
        tag: "C",
      },
      {
        value: "The customer is responsible for everything",
        id: "4c7f2d89-e015-4a23-ef90-6c3456789012",
        tag: "D",
      },
    ],
    correct: "9e1b5a37-c284-4f01-d678-3b2345678901",
    explanation:
      "An Azure Region is a geographical area containing one or more datacenters in close proximity, connected by a low-latency network. Examples: West Europe, East US.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 4,
    category: "Azure Architecture",
    question: "What is the purpose of Availability Zones?",
    options: [
      {
        value: "To reduce costs by sharing hardware across tenants",
        id: "1a2b3c4d-5e6f-7890-abcd-ef1234567890",
        tag: "A",
      },
      {
        value:
          "To provide physical isolation within a region to protect against datacenter failures",
        id: "5f6e7d8c-9b0a-1234-bcde-f12345678901",
        tag: "B",
      },
      {
        value: "To allow global load balancing across regions",
        id: "9c8b7a6f-5e4d-3210-cdef-123456789012",
        tag: "C",
      },
      {
        value: "To segment network traffic inside a VNet",
        id: "3d4e5f6a-7b8c-9012-defa-234567890123",
        tag: "D",
      },
    ],
    correct: "5f6e7d8c-9b0a-1234-bcde-f12345678901",
    explanation:
      "Availability Zones are physically separate locations within an Azure region. Each zone has independent power, cooling, and networking — protecting apps from datacenter-level failures.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 5,
    category: "Core Services",
    question:
      "Which Azure service lets you run containerized applications without managing servers?",
    options: [
      {
        value: "Azure Virtual Machines",
        id: "b1c2d3e4-f5a6-7890-abcd-ef1234567890",
        tag: "A",
      },
      {
        value: "Azure App Service",
        id: "e4f5a6b7-c8d9-0123-bcde-f12345678901",
        tag: "B",
      },
      {
        value: "Azure Container Instances",
        id: "a7b8c9d0-e1f2-3456-cdef-123456789012",
        tag: "C",
      },
      {
        value: "Azure DevOps",
        id: "d0e1f2a3-b4c5-6789-defa-234567890123",
        tag: "D",
      },
    ],
    correct: "a7b8c9d0-e1f2-3456-cdef-123456789012",
    explanation:
      "Azure Container Instances (ACI) lets you run Docker containers directly without provisioning or managing VMs — a serverless container experience.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 6,
    category: "Core Services",
    question: "What is Azure Blob Storage primarily used for?",
    options: [
      {
        value: "Relational database storage",
        id: "c2d3e4f5-a6b7-8901-abcd-ef1234567890",
        tag: "A",
      },
      {
        value: "File shares for cloud or on-premises deployments",
        id: "f5a6b7c8-d9e0-1234-bcde-f12345678901",
        tag: "B",
      },
      {
        value: "Storing unstructured data like images, videos, and documents",
        id: "b8c9d0e1-f2a3-4567-cdef-123456789012",
        tag: "C",
      },
      {
        value: "Message queuing between services",
        id: "e1f2a3b4-c5d6-7890-defa-234567890123",
        tag: "D",
      },
    ],
    correct: "b8c9d0e1-f2a3-4567-cdef-123456789012",
    explanation:
      "Azure Blob Storage is optimized for storing massive amounts of unstructured data — images, videos, logs, backups. It's the foundation for many Azure data services.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 7,
    category: "Security & Identity",
    question: "What is Azure Active Directory (Azure AD / Entra ID)?",
    options: [
      {
        value: "A DNS service for Azure resources",
        id: "a3b4c5d6-e7f8-9012-abcd-ef1234567890",
        tag: "A",
      },
      {
        value: "A cloud-based identity and access management service",
        id: "d6e7f8a9-b0c1-2345-bcde-f12345678901",
        tag: "B",
      },
      {
        value: "A firewall solution for virtual networks",
        id: "f9a0b1c2-d3e4-5678-cdef-123456789012",
        tag: "C",
      },
      {
        value: "A key management service",
        id: "c2d3e4f5-a6b7-8901-defa-234567890123",
        tag: "D",
      },
    ],
    correct: "d6e7f8a9-b0c1-2345-bcde-f12345678901",
    explanation:
      "Azure AD (now Microsoft Entra ID) is Microsoft's cloud-based IAM service. It handles authentication, SSO, MFA, and access control for Azure resources and Microsoft 365.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 8,
    category: "Security & Identity",
    question: "What does Azure Key Vault do?",
    options: [
      {
        value: "Encrypts virtual machine disks",
        id: "b4c5d6e7-f8a9-0123-abcd-ef1234567890",
        tag: "A",
      },
      {
        value: "Manages network security group rules",
        id: "e7f8a9b0-c1d2-3456-bcde-f12345678901",
        tag: "B",
      },
      {
        value: "Stores and controls access to secrets, keys, and certificates",
        id: "a0b1c2d3-e4f5-6789-cdef-123456789012",
        tag: "C",
      },
      {
        value: "Provides DDoS protection for Azure resources",
        id: "d3e4f5a6-b7c8-9012-defa-234567890123",
        tag: "D",
      },
    ],
    correct: "a0b1c2d3-e4f5-6789-cdef-123456789012",
    explanation:
      "Azure Key Vault securely stores application secrets, API keys, connection strings, certificates, and cryptographic keys — preventing hardcoded credentials in code.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 9,
    category: "Cost & Governance",
    question:
      "Which Azure pricing model lets you commit to a specific VM usage for 1 or 3 years in exchange for a significant discount?",
    options: [
      {
        value: "Pay-as-you-go",
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        tag: "A",
      },
      {
        value: "Spot Instances",
        id: "d4e5f6a7-b8c9-0123-bcde-f12345678901",
        tag: "B",
      },
      {
        value: "Reserved Instances",
        id: "f7a8b9c0-d1e2-3456-cdef-123456789012",
        tag: "C",
      },
      {
        value: "Free Tier",
        id: "c0d1e2f3-a4b5-6789-defa-234567890123",
        tag: "D",
      },
    ],
    correct: "f7a8b9c0-d1e2-3456-cdef-123456789012",
    explanation:
      "Azure Reserved Instances (Reserved VM Instances) provide up to 72% savings compared to pay-as-you-go in exchange for a 1- or 3-year commitment.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 10,
    category: "Cost & Governance",
    question: "What is the Azure Service Level Agreement (SLA)?",
    options: [
      {
        value: "A document describing how to set up Azure services",
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        tag: "A",
      },
      {
        value:
          "Microsoft's commitment to uptime and connectivity for paid services",
        id: "d4e5f6a7-b8c9-0123-bcde-f12345678901",
        tag: "B",
      },
      {
        value: "A pricing table for all Azure services",
        id: "f7a8b9c0-d1e2-3456-cdef-123456789012",
        tag: "C",
      },
      {
        value: "A security compliance framework",
        id: "c0d1e2f3-a4b5-6789-defa-234567890123",
        tag: "D",
      },
    ],
    correct: "d4e5f6a7-b8c9-0123-bcde-f12345678901",
    explanation:
      "The SLA defines Microsoft's uptime guarantees for each service (e.g., 99.9%, 99.95%). If Microsoft fails to meet it, customers may receive service credits.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 11,
    category: "Azure Architecture",
    question:
      "What is the difference between scaling UP and scaling OUT in Azure?",
    options: [
      {
        value:
          "Scaling up means moving to a different region; scaling out means adding availability zones",
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        tag: "A",
      },
      {
        value:
          "Scaling up means increasing the size of a resource; scaling out means adding more instances",
        id: "d4e5f6a7-b8c9-0123-bcde-f12345678901",
        tag: "B",
      },
      {
        value: "They mean the same thing — increasing capacity",
        id: "f7a8b9c0-d1e2-3456-cdef-123456789012",
        tag: "C",
      },
      {
        value: "Scaling up is for VMs; scaling out is for databases only",
        id: "c0d1e2f3-a4b5-6789-defa-234567890123",
        tag: "D",
      },
    ],
    correct: "d4e5f6a7-b8c9-0123-bcde-f12345678901",
    explanation:
      "Vertical scaling (up/down) = changing the size/power of a single resource. Horizontal scaling (out/in) = adding or removing instances. Azure supports both patterns.",
    userChoice: {
      id: "",
      value: "",
    },
  },
  {
    id: 12,
    category: "Core Services",
    question:
      "Which service would you use to monitor application performance and diagnose issues in Azure?",
    options: [
      {
        value: "Azure Monitor / Application Insights",
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        tag: "A",
      },
      {
        value: "Azure Advisor",
        id: "d4e5f6a7-b8c9-0123-bcde-f12345678901",
        tag: "B",
      },
      {
        value: "Azure Policy",
        id: "f7a8b9c0-d1e2-3456-cdef-123456789012",
        tag: "C",
      },
      {
        value: "Azure Blueprints",
        id: "c0d1e2f3-a4b5-6789-defa-234567890123",
        tag: "D",
      },
    ],
    correct: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    explanation:
      "Azure Monitor collects metrics and logs from Azure resources. Application Insights is an extension for APM — tracking requests, failures, dependencies, and custom events in your app.",
    userChoice: {
      id: "",
      value: "",
    },
  },
]

export { questions, type Question }
