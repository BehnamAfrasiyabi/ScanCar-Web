# ScanCar-Web

This repository contains the **public website** of the ScanCar project.

---

## Project Overview – ScanCar

ScanCar is a professional car diagnostic system based on ESP32.  
Users buy the physical device, then purchase software packs (ECU modules) that are installed on the device.

### Complete Repository Structure

| Repository                | Role                                                                 |
|---------------------------|----------------------------------------------------------------------|
| **ScanCar-ESP-Firmware**  | Base firmware of the device                                          |
| **ScanCar-ECUs**          | Source JSON files of all ECUs                                        |
| **ScanCar-Admin**         | Backend + Licensing system + Admin panel                             |
| **ScanCar-App**           | Mobile & Web application                                             |
| **ScanCar-Web**           | Public website for selling the physical device (this repo)           |

---

## Responsibility of this Repository

This is the **public-facing** part of the business:

- Product introduction and marketing
- Landing page
- Selling the physical diagnostic device (hardware)
- Order registration for the device
- Attracting new customers

### Important Separation of Concerns

- **ScanCar-Web** → Only sells the **hardware** (the diagnostic device itself)
- Selling software packs (ECUs) is handled inside the device / ScanCar-App and managed by ScanCar-Admin

This separation improves security and makes development cleaner.

## Implementation roadmap and continuity

All remaining website work is tracked in `IMPLEMENTATION.md`. It contains phase/task IDs, status, production definition-of-done and continuation rules for future AI/developer sessions.

---

## Future Plans

- Beautiful product landing page
- Order form + payment for the device
- Possibly blog / support section

---

**Maintainer:** Behnam Afrasiyabi  
**Last updated:** 2026-09-18
