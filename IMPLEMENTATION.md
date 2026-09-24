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
| WEB-B02 | Hardware order form | done (`shop.html` — 3-step: product/qty → address → payment) |
| WEB-B03 | Customer contact/address validation | done (+ saved-address prefill via `/api/web/address-prefill`) |
| WEB-B04 | Payment abstraction | done (gateway choice UI from `/api/web/payment-methods`; mock + `/pay` gateway path) |
| WEB-B05 | Payment callback/idempotency | partial (reuses Admin payment providers) |
| WEB-B06 | Order tracking | done (account.html shipment timeline + postal tracking number with copy button) |
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

## Checkpoint — 2026-09-24 (web commerce E2E)

- **qty + full checkout on web**: `shop.html` has a qty stepper (1–10), client validation, live order summary and a payment step with gateway options fetched from `GET /api/web/payment-methods` (mock/zarinpal/external, availability driven by `SCANCAR_PAYMENT_MODE`).
- **Saved address**: `save_address` on order create persists to `shipping_addresses`; next checkout pre-fills from `GET /api/web/address-prefill`.
- **Account panel**: `account.html` shows per-order shipment timeline (`awaiting_payment → awaiting_shipment → shipped → delivered`), postal tracking number with copy button, and saved-address profile.
- **Backend additions** (ScanCar-Admin): `GET /api/web/payment-methods`, `GET /api/web/address-prefill`; order items + postal tracking serialized in order detail.
- **DB live**: 4 pending migrations applied (app_api_tokens, firmware_releases, accounting, hardware_commerce) + `HardwareProductSeeder` run — product `HW-SCARDIAG` (8,900,000 IRR) is live.
- **E2E verified in browser**: login gate → shop → address → mock pay → paid + awaiting_shipment; account timeline + postal box verified with a test tracking code.
- **index.html**: FAQ/privacy/terms/contact sections + legal nav restored to pass `scripts/validate-site.mjs` (14/14).

## Checkpoint — 2026-09-23

- Added `shop.html`: OTP account, shipping address, shipping method, mock/real pay.
- Backend: `WebShopController`, migration shipping fields, `HardwareProductSeeder` (SKU `HW-SCARDIAG`).
- Docs: ScanCar-Admin `docs/HARDWARE_WEB_SHOP.md`.
- Link from landing CTA should point to `shop.html`.

## Continuity rule

Keep hardware commerce isolated from ECU licensing. Update this file after every meaningful implementation milestone.
