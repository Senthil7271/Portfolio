# Tesla's Electric Universe — Engineering Portfolio
### Senthil Kumar Mahalingam — Hardware, FPGA & Edge AI Engineer

> **"POWERED BY ENGINEERING — FROM ELECTRONS TO INTELLIGENCE."**

An immersive, cinematic, electricity-themed personal engineering portfolio website inspired by Nikola Tesla's electromagnetic inventions and laboratory science, combined with modern hardware engineering.

---

## 🔬 Core Specializations & Identity

- **Engineer:** Senthil Kumar Mahalingam
- **Specialization:** FPGA Development, Embedded Systems, VLSI Design, Edge AI, and RTOS
- **Education:** B.E. Electronics Engineering — VLSI Design and Technology (2024–2028)
- **Institution:** Chennai Institute of Technology (CIT) | **CGPA:** 8.56
- **Confirmed Honors:** Winner, VLSID 2026 Design Contest | Finalist, TRON Programming Contest 2026 (Renesas) | 2nd Runner, CDAC VEGATHON | Semifinalist (Top 15), SEMICON India 2026 (Applied Materials) | Semifinalist, IESA DeepTech Hackathon 2026
- **GitHub:** [github.com/Senthil7271](https://github.com/Senthil7271)

---

## ⚡ Key Redesign Highlights

### 1. Custom Lightning Cursor
- **Pointer Icon:** High-voltage vector lightning bolt with an electric white core (`#EAF8FF`), vivid blue border (`#168BFF`), and arc cyan glow (`#55D6FF`).
- **Luminous Discharge Trail:** Velocity-responsive filament trail rendered on an optimized GPU-accelerated canvas using `requestAnimationFrame` and mutable refs.
- **Dynamic Cursor States:**
  - *Normal:* Precision pointer with tip hotspot.
  - *Interactive Controls:* Rotating electromagnetic field ring.
  - *Project Cards:* Electric filaments bridging to card edges.
  - *Carousel Dragging:* High-intensity charged grip indicator.
  - *Mouse Down / Click:* Instantaneous electric spark discharge.
- Automatically disabled on touch devices and respects `prefers-reduced-motion: reduce`.

### 2. Upgraded Cinematic Hero
- **Editorial Headline:** **ENGINEERING INTELLIGENCE INTO HARDWARE.** with controlled electric-blue activation.
- **Electromagnetic Field Portrait Frame:** Genuine portrait slot with rotating stator flux rings and polyphase magnetic nodes behind the image without obscuring facial identity.
- **Timed Entrance Sequence:** Copper busbar pulse (0.4s) &rarr; controlled electrical arcs (1.1s) &rarr; kinetic title reveal (1.8s) &rarr; portrait illumination (2.6s) with a visible "Skip Intro" option.

### 3. Interactive 3D Cylindrical Project Carousel
- Arranged around an invisible vertical cylinder ($R \approx 520\text{px}$):
  $$\theta_i = i \cdot \frac{\pi}{2} + \text{rotation}, \quad X_i = R \sin(\theta_i), \quad Z_i = R \cos(\theta_i) - R$$
- **Controls:** Smooth horizontal pointer/touch dragging, velocity inertia, spring-damper friction, and shortest-angle magnetic snapping to the active card.
- Supports keyboard navigation (Left / Right arrow keys) and direct exhibit selection.
- Accessible flat view toggle for low-power devices.

### 4. 4 Detailed Procedural 3D Tesla Inventions
Each flagship project is anchored by a high-detail procedural 3D model with realistic materials (polished copper coils, brass pillars, cast iron, steel shafts, and luminous electrical discharges):
1. **The Resonant Tesla Coil (1891)** &rarr; *FPGA AI Surveillance* (MobileNetV2 SSD on Lattice CertusPro NX).
2. **The AC Induction Motor (1888)** &rarr; *μT-Kernel 3.0 on Renesas RA8P1* (Arm Cortex-M85 + Ethos-U55 NPU).
3. **The Polyphase AC Generator (1887)** &rarr; *KNN Classifier on ZedBoard FPGA* (3-stage pipelined Verilog RTL).
4. **Resonant Wireless Energy Transmission (1893)** &rarr; *Semiconductor Wafer Defect Classification* (INT8 quantized MobileNetV2 on Arm Cortex-M7).
- Each project includes a historical "Tesla Inspiration" technical note explaining the conceptual metaphor while keeping Tesla's history distinct from Senthil's modern engineering implementations.

### 5. Visually Unique Laboratory Sections
- **Section A — Rotating Magnetic Fields:** Interactive 4-quadrant electromagnetic stator chamber mapping FPGA, VLSI, Embedded Systems, and Edge AI.
- **Section B — Tesla Cylindrical Exhibition:** The 3D rotating cylinder project gallery.
- **Section C — High-Voltage Transmission Timeline:** Copper transmission busbar feeding into industrial manufacturing (Syrma SGS) and silicon research (CIT VLSI Lab) substations.
- **Section D — Electrical Laboratory Control Board:** Rotary selector switches, active CRT oscilloscope with live waveform triggers (Square, Pulse, Sine, Sawtooth), and directional skill links.
- **Section E — Laboratory Switchboard:** High-voltage knife-switch instrument nodes for the 5 confirmed resume honors.
- **Section F — Circuit Blueprint Sheets:** Cyan-print technical blueprint sheets for academic degrees and accredited certifications.
- **Section G — Close the Circuit:** Large interactive high-voltage knife switch breaker that energizes the direct transmission terminal. Headline: **LET'S BUILD THE NEXT BREAKTHROUGH.**

### 6. All 14 GitHub Repositories Catalog (`/projects`)
- Complete index of all 14 repositories from [github.com/Senthil7271](https://github.com/Senthil7271) with search and domain filtering (*FPGA & Hardware, Embedded & RTOS, Edge AI, VLSI & SoC Design*).

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router, Static Site Generation)
- **Language:** TypeScript 5 (Strict type checking, zero errors)
- **Styling:** Tailwind CSS with custom electrical utilities
- **3D Graphics:** Three.js & WebGL with ACESFilmic tone mapping
- **Icons:** Lucide React
- **Typography:** `@next/font/google` (Space Grotesk, Inter, JetBrains Mono)

---

## 🚀 Getting Started

### Installation
```bash
# Clone or navigate to the workspace
cd Portfolio

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 🛡️ License
Created for Senthil Kumar Mahalingam. MIT License.
