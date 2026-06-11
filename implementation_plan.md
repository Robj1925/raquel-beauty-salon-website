# Implementation Plan: Sunday Hours & Makeup Demos

This plan outlines the changes to update the Sunday operating hours and add the new makeup demonstration gallery (using the recently fetched iMessage attachments) to the Raquel Beauty Salon website.

---

## User Review Required

> [!IMPORTANT]
> **Image Formats (.heic to .jpg)**: Some client attachments were sent in Apple's `.heic` format, which is not supported natively by web browsers. I will run a script to convert these files to web-compatible `.jpg` formats before placing them in the gallery.

> [!NOTE]
> **Layout Strategy**: I will add a dedicated, responsive **Makeup Demonstration Grid** directly underneath the *"Specialty Makeup by Vanessa"* section in both `index.html` and `es.html` rather than mixing them with haircuts in the main *Styling Portfolio*.

---

## Proposed Changes

### 1. Image Assets Processing
- **HEIC Conversion**: Convert `/assets/incoming_makeup_1.heic` to `/assets/incoming_makeup_1.jpg`.
- **Gallery Assets**: Rename all `incoming_makeup_*` files to standard website asset names: `makeup_demo_1.jpg` through `makeup_demo_9.jpg`.

### 2. Website Code Updates

#### [MODIFY] [index.html](file:///Users/robbyj/Documents/Projects/Client%20Websites/raquel-beauty-salon-website/index.html)
* **Sunday Hours**: 
  - Update schema JSON-LD opens/closes times for Sunday (from `10:00`/`22:00` to `11:00`/`19:00`).
  - Update Sunday list item in the operating hours section (from `10:00 AM – 10:00 PM` to `11:00 AM – 7:00 PM`).
* **Makeup Gallery**: 
  - Add a responsive grid block under the Makeup section containing the 9 new makeup demo images.

#### [MODIFY] [es.html](file:///Users/robbyj/Documents/Projects/Client%20Websites/raquel-beauty-salon-website/es.html)
* **Sunday Hours**: 
  - Update schema JSON-LD opens/closes times for Sunday.
  - Update Sunday list item in Spanish (from `10:00 AM – 10:00 PM` to `11:00 AM – 7:00 PM`).
* **Makeup Gallery**: 
  - Add the same grid block with Spanish accessibility labels (`alt` tags).

---

## Verification Plan

### Automated/Local Build Checks
* Verify that the Tailwind output build runs successfully (`npm run build` or the local build script).

### Manual Verification
* Inspect the updated website locally to verify:
  * Sunday hours are correct in both languages (English and Spanish).
  * The new makeup gallery displays the 9 converted images correctly on mobile, tablet, and desktop viewports.
  * Image alt text is localized correctly.
