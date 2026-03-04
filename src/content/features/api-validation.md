---
title: "Connect to Your Systems"
description: "Validate customer details or any checkout value against your own external API — show errors or block checkout based on the response"
type: "rule"
icon: '<svg class="w-6 h-6 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
mockupLabel: "API: Tax ID verified ✓"
mockupType: "success"
seo:
  title: "API Validation — Checkout Ninja"
  description: "Validate checkout data against your external API in real-time. Verify tax IDs, customer accounts, inventory, and more before order submission."
---

## API Validation

Connect your checkout to any external system. Validate customer details, verify business information, or check inventory in real-time — and show errors or block checkout based on the response.

### How It Works

Configure an API endpoint, map checkout fields to your request, and define how to handle the response. Checkout Ninja calls your API in real-time and displays validation results to the customer.

### Common Use Cases

- **Tax ID verification** — Validate VAT numbers or tax IDs against government databases
- **Customer account lookup** — Check if the customer exists in your CRM or ERP system
- **Inventory verification** — Confirm real-time stock availability before order placement
- **Address standardization** — Send addresses to your preferred validation service
- **Fraud scoring** — Send order details to your fraud detection API and block high-risk orders
- **License verification** — Verify professional licenses or permits for restricted products
- **Custom business rules** — Enforce any validation logic that lives in your existing systems
