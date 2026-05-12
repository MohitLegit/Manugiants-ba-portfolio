# Manugiants — Warehouse & Inventory Management App
### BA Portfolio Project 2 | Agile SDLC | B2B/B2C Manufacturing Domain

---

## Project Summary

**Manugiants** is a fictional Indian B2B/B2C manufacturing company operating a large warehouse with paper-based inventory tracking. This project documents the complete Business Analyst workflow for designing a **Warehouse & Inventory Management Application** — from problem discovery through requirements, process redesign, and UAT planning.

> **BA Role Focus:** End-to-end requirements engineering, stakeholder management, process redesign, and system documentation following Agile SDLC principles.

---

## Business Problem

Manugiants warehouse operations were entirely paper-based, resulting in:

- Inventory inaccuracies causing stockouts and over-selling
- No real-time visibility of stock levels across departments
- Manual pick-pack processes with no audit trail
- Procurement decisions based on outdated stock data
- Delayed order fulfillment due to poor warehouse coordination

**Goal:** Design a digital warehouse management system that eliminates manual tracking, enables real-time inventory updates, and provides role-specific dashboards for all stakeholders.

---

## Project Scope

| In Scope | Out of Scope |
|----------|-------------|
| Real-time barcode/QR inventory tracking | Customer-facing e-commerce portal |
| Automated reorder alert system | Supplier portal integration (Phase 2) |
| Role-based access control (RBAC) | Payroll or HR management |
| Fulfillment dashboard for Logistics Manager | Manufacturing production planning |
| Goods Receipt digitization | Multi-warehouse management |
| Audit trail for manual adjustments | |

---

## Deliverables

| # | Deliverable | Status |
|---|-------------|--------|
| 01 | Project Charter | ✅ Complete |
| 02 | Stakeholder Analysis | ✅ Complete |
| 03 | Business Requirements Document (BRD) | ✅ Complete |
| 04 | AS-IS & TO-BE Process Maps | ✅ Complete |
| 05 | Use Case Diagram | ✅ Complete |
| 06 | User Stories + Acceptance Criteria | ✅ Complete |
| 07 | Functional & Non-Functional Requirements | ✅ Complete |
| 08 | Low-Fidelity Wireframes (4 screens) | ✅ Complete |
| 09 | UAT Test Cases | ✅ Complete |

---

## Key Stakeholders

| Role | Involvement |
|------|-------------|
| Warehouse Manager | Primary system owner, approves go-live |
| Warehouse Staff | Core end users — barcode scanning, goods receipt |
| Logistics Manager | Fulfillment dashboard, order tracking |
| Procurement Lead | Reorder alerts, stock turnover reports |
| Sales Team | Live stock visibility during order entry |
| IT Admin | RBAC, system security, MFA enforcement |
| Operations Head | Audit trail access, manual adjustment oversight |

---

## Business Requirements Summary

| BR ID | Requirement | Priority |
|-------|-------------|----------|
| BR-01 | Real-time inventory update on barcode/QR scan | Critical |
| BR-02 | Automated reorder alert when stock hits safety threshold | High |
| BR-03 | Daily fulfillment dashboard (Pending/Shipped/Delayed) | High |
| BR-04 | Secure login + Role-Based Access Control (RBAC) | Critical |
| BR-05 | Live stock visibility for Sales Team during order entry | Critical |
| BR-06 | Digital audit trail for all manual stock adjustments | Medium |
| BR-07 | Weekly Stock Turnover Report (fast vs slow-moving SKUs) | Medium |
| BR-08 | Automated Goods Receipt module for incoming shipments | High |

---

## Process Redesign

### AS-IS (Current State — Paper Based)
Warehouse staff manually logged all picks, receipts, and adjustments in paper ledgers. Stock counts were reconciled weekly, causing significant lag between actual and recorded inventory levels.

### TO-BE (Future State — With App)
| Step | Actor | System Action |
|------|-------|--------------|
| Order received | Sales Team / Admin | System checks live stock automatically |
| Stock check | Warehouse App | Real-time availability confirmed |
| Pick & pack | Warehouse Staff | Barcode scanned, inventory deducted in <3 seconds |
| Audit log | Warehouse App | User ID + timestamp auto-recorded |
| Threshold check | Warehouse App | Reorder alert fired if stock below safety level |
| Procurement action | Procurement Lead | Alert received, reorder initiated |
| Dispatch | Warehouse App | Shipping label auto-generated, customer notified |

---

## Wireframes — Key Screens

| Screen | User | Purpose |
|--------|------|---------|
| A — Scanning Home | Warehouse Staff | Barcode scan interface with glove-safe large buttons |
| B — Item Confirmation | Warehouse Staff | Verify item details + stock impact before confirming pick |
| C — Stock Dashboard | Logistics Manager | KPI cards, fulfillment status table, top SKU chart |
| D — Low Stock Alert | Procurement Lead | Prioritised reorder alerts with one-tap reorder action |
> 📌 Wireframes built as an interactive React artifact. To view rendered wireframes, paste the .jsx file contents at [claude.ai](https://claude.ai) and it will render interactively.
> Wireframes designed for industrial handheld devices — high contrast, large tap targets, minimal cognitive load.

---

## UAT Coverage

14 test cases covering all 8 business requirements including:
- Real-time inventory deduction validation
- Reorder alert trigger + non-trigger scenarios
- RBAC access control enforcement
- Over-selling prevention
- Audit trail accuracy
- Goods Receipt duplicate scan handling
- MFA enforcement for Admin accounts

---

## Tech Stack Assumed (For BA Scoping)

| Layer | Technology |
|-------|-----------|
| Mobile App | Android (industrial handheld scanners) |
| Web Dashboard | Browser-based (Chrome/Edge latest 2 versions) |
| Backend | REST API with ERP integration |
| Database | Cloud-hosted (AWS/Azure) |
| Auth | Username/Password + MFA for Admin roles |
| Connectivity | Industrial-grade Wi-Fi with mesh extenders |

---

## Project Constraints

- **Budget:** ₹4,50,000 (software development, cloud hosting, licensing only)
- **Hardware:** ₹1,50,000 CAPEX budget for 15 industrial-grade handheld scanners (separate)
- **Timeline:** MVP deployed within 90-day development cycle
- **MVP Scope:** Core scanning + real-time inventory updates + RBAC

---

## Key BA Skills Demonstrated

- Business Requirements Documentation (BRD)
- Stakeholder Analysis & Mapping
- AS-IS / TO-BE Process Mapping (swim lane diagrams)
- Use Case Diagram (UML)
- User Stories with GIVEN/WHEN/THEN Acceptance Criteria
- Functional & Non-Functional Requirements specification
- Risk Register with Probability, Impact & Mitigation
- Assumptions, Constraints & Dependency documentation
- Low-Fidelity Wireframing
- UAT Test Case design

---

## About This Project

This is the second project in my BA portfolio, built to demonstrate system-side BA skills including requirements engineering, UML documentation, and UAT planning — complementing [Project 1: RetailEdge UK (E-commerce Sales Analytics)](https://github.com/MohitLegit/retailedge-ba-portfolio) which focused on data analytics and Power BI.

**Author:** Mohit Meena | BBA Final Year, Manipal University Jaipur (2026)
**Target Role:** Business Analyst — IT Domain
**LinkedIn:** linkedin.com/in/mohit-meena-07a628393

---

*This is a fictional company created for BA portfolio demonstration purposes.*
