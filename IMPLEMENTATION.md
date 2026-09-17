# ScanCar-Web — Product Implementation Roadmap

> Source of truth for the public hardware-sales website. The website must not become a software-pack licensing surface.

## Product boundary

- Sell and introduce the physical ScanCar device.
- Marketing, product information, hardware order registration and future hardware payment.
- ECU software packs are purchased inside ScanCar-App and managed by ScanCar-Admin.

## Phase WEB-A — Public product experience

| ID | Task | Status |
|---|---|---|
| WEB-A01 | Project scaffold/build | todo |
| WEB-A02 | Brand/logo/product assets | in_progress |
| WEB-A03 | Responsive landing page | todo |
| WEB-A04 | Product specification section | todo |
| WEB-A05 | How ScanCar works | todo |
| WEB-A06 | Offline-first/security/value proposition | todo |
| WEB-A07 | FAQ | todo |
| WEB-A08 | Contact/support | todo |

## Phase WEB-B — Hardware commerce

| ID | Task | Status |
|---|---|---|
| WEB-B01 | Hardware product catalog | todo |
| WEB-B02 | Hardware order form | todo |
| WEB-B03 | Customer contact/address validation | todo |
| WEB-B04 | Payment abstraction | todo |
| WEB-B05 | Payment callback/idempotency | todo |
| WEB-B06 | Order tracking | todo |
| WEB-B07 | Admin order integration | todo |

## Phase WEB-C — SEO and trust

| ID | Task | Status |
|---|---|---|
| WEB-C01 | SEO metadata | todo |
| WEB-C02 | Open Graph/social preview | todo |
| WEB-C03 | Structured product data | todo |
| WEB-C04 | Performance optimization | todo |
| WEB-C05 | Accessibility audit | todo |
| WEB-C06 | Legal/privacy/terms pages | todo |

## Phase WEB-D — Production hardening

| ID | Task | Status |
|---|---|---|
| WEB-D01 | Production environment config | todo |
| WEB-D02 | Secure headers/CSP | todo |
| WEB-D03 | Error/analytics strategy | todo |
| WEB-D04 | E2E checkout tests | todo |
| WEB-D05 | Deployment/rollback checklist | todo |

## Definition of Done

Responsive, accessible, SEO-ready, secure and connected to the real hardware order backend. No software entitlement or ECU purchase logic is duplicated here.

## Current checkpoint — 2026-09-18

Repository responsibility is documented. Product visual/asset work is the immediate website track; hardware checkout remains future work.

## Continuity rule

Keep hardware commerce isolated from ECU licensing. Update this file after every meaningful implementation milestone.
