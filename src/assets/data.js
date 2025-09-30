// src/assets/data.js
import { ZapierIcon, MakeIcon, LinkIcon, SlackIcon, DriveIcon, OpenAIIcon, XeroIcon } from './Icons'; 

// Data for the main navigation links
export const NAV_LINKS = [
  { name: 'ABOUT', href: '#about-me' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PORTFOLIO', href: '#portfolio-gallery' },
  { name: 'CONTACT', href: '#contact-form' },
];

// Data for the Services section cards
export const SERVICE_CARDS = [
  {
    title: 'Zapier Workflow Automation',
    description: 'Connect apps, orchestrate multi-step workflows, and enforce data quality.',
    details: ['Error handling & retries', 'Webhooks & custom code', 'Ops dashboards'],
    icon: ZapierIcon, 
  },
  {
    title: 'Make (Integromat) Scenarios',
    description: 'Branching logic and bulk operations at scale.',
    details: ['Routers & aggregators', 'Rate limits & queues', 'Scenario documentation'],
    icon: MakeIcon, 
  },
  {
    title: 'CRM & API Integrations',
    description: 'Two-way syncs and lead lifecycle automation for HubSpot, Salesforce, and GHL.',
    details: ['Field mapping & dedupe', 'Custom endpoints', 'Attribution & analytics'],
    icon: LinkIcon, 
  },
];

// Data for the Portfolio section project cards
export const PROJECTS = [
  {
    id: 1,
    title: 'Unified Order & Lead Automation',
    image: '/assets/Zapier-workflow-1.webp', 
    alt: 'Zapier workflow screenshot showing Asana and CRM integration',
    quote: '⚡Streamlines order tracking, lead capture, and CRM updates cutting manual work, enhancing data accuracy, and ensuring your team responds faster to every opportunity.',
    tools: [
      { name: 'Google Drive', icon: DriveIcon },
      { name: 'Slack', icon: SlackIcon },
      { name: 'OpenAI (AI Triage)', icon: OpenAIIcon },
    ],
	images: [
    '/assets/Zapier-workflow-1.webp',
    '/assets/Zapier-workflow-2.webp',
    '/assets/Zapier-workflow-3.webp'
   ],
  },
  {
    id: 2,
    title: 'Smart Email Triage + Xero Export',
    image: '/assets/Make-workflow-2.webp', 
    alt: 'Make.com scenario screenshot showing email and finance app connection',
    quote: '⚡ Stop drowning in emails. I’ll help you cut through the clutter, block spam, and pull out the financial info you actually need saving you hours every week.',
    tools: [
      { name: 'Xero', icon: XeroIcon },
      { name: 'Slack', icon: SlackIcon },
      { name: 'OpenAI (AI Triage)', icon: OpenAIIcon },
    ],
	images: [
    '/assets/Make-workflow-1.webp',
    '/assets/Make-workflow-2.webp',
   ],
  },
  {
  id: 3,
  title: 'n8n Regional Sales Reporting',
  image: '/assets/n8n-workflow-1.webp', 
  alt: 'n8n workflow generating regional sales reports',
  quote: 'Automates regional sales reporting by fetching data from Airtable + external APIs, batching and filtering by region, formatting dates, converting to JSON/CSV, and sending reports via email and Discord—saving time and improving accuracy.',
  tools: [
    { name: 'n8n', icon: MakeIcon },
    { name: 'Airtable', icon: DriveIcon },
    { name: 'OpenAI (AI Triage)', icon: OpenAIIcon },
  ],
  images: [
    '/assets/n8n-workflow-1.webp',
    '/assets/n8n-workflow-2.webp',
  ],
 },
];

// Data for the utility buttons in the Hero section
export const HERO_TAGS = [
    { name: 'Zapier', href: '#' },
    { name: 'Make', href: '#' },
    { name: 'n8n', href: '#' },
    { name: 'GHL', href: '#' },
    { name: 'HubSpot', href: '#' },
    { name: 'Salesforce', href: '#' },
];