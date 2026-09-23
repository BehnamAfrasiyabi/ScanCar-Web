# ScanCar-Web — Product Implementation Roadmap

> Source of truth for the public hardware-sales website. The website must not become a software-pack licensing surface.

## Product boundary

- Sell and introduce the physical ScanCar device.
- Marketing, product information, hardware order registration and hardware payment.
- ECU software packs are purchased inside ScanCar-App and managed by ScanCar-Admin.

## Phase WEB-A — Public product experience

| ID | Task | Status |
|---|---|---|
| WEB-A01 | Project scaffold/build | done |
| WEB-A02 | Brand/logo/product assets | done |
| WEB-A03 | Responsive landing page | done |
| WEB-A04 | Product specification section | done |
| WEB-A05 | How ScanCar works | done |
| WEB-A06 | Offline-first/security/value proposition | done |
| WEB-A07 | FAQ | done |
| WEB-A08 | Contact/support | done |

## Phase WEB-B — Hardware commerce

| ID | Task | Status |
|---|---|---|
| WEB-B01 | Hardware product catalog | done (Admin `type=hardware` + `/api/web/hardware-products`) |
| WEB-B02 | Hardware order form | done (`shop.html`) |
| WEB-B03 | Customer contact/address validation | done |
| WEB-B04 | Payment abstraction | done (mock + `/pay` gateway path) |
| WEB-B05 | Payment callback/idempotency | partial (reuses Admin payment providers) |
| WEB-B06 | Order tracking | done (API + summary on shop) |
| WEB-B07 | Admin order integration | done (`channel=web_hardware`, fulfillment_status) |

## Phase WEB-C — SEO and trust

| ID | Task | Status |
|---|---|---|
| WEB-C01 | SEO metadata | done |
| WEB-C02 | Open Graph/social preview | done |
| WEB-C03 | Structured product data | done |
| WEB-C04 | Performance optimization | todo |
| WEB-C05 | Accessibility audit | todo |
| WEB-C06 | Legal/privacy/terms pages | done (initial) |

## Phase WEB-D — Production hardening

| ID | Task | Status |
|---|---|---|
| WEB-D01 | Production environment config | todo (CORS + API URL) |
| WEB-D02 | Secure headers/CSP | todo |
| WEB-D03 | Error/analytics strategy | todo |
| WEB-D04 | E2E checkout tests | todo |
| WEB-D05 | Deployment/rollback checklist | todo |

## Checkpoint — 2026-09-23

- Added `shop.html`: OTP account, shipping address, shipping method, mock/real pay.
- Backend: `WebShopController`, migration shipping fields, `HardwareProductSeeder` (SKU `HW-SCARDIAG`).
- Docs: ScanCar-Admin `docs/HARDWARE_WEB_SHOP.md`.
- Link from landing CTA should point to `shop.html`.

## Continuity rule

Keep hardware commerce isolated from ECU licensing. Update this file after every meaningful implementation milestone.
