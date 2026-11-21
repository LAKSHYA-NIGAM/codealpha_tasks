# 💻 CodeAlpha Internship Projects

![CI](https://github.com/LAKSHYA-NIGAM/codealpha_tasks/actions/workflows/ci.yml/badge.svg)
![Node](https://img.shields.io/badge/Node.js-20%2B-green.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

This repository contains the web development projects completed as part of the **CodeAlpha Frontend Development Internship**. Each project highlights real-world frontend engineering skills in **HTML5**, **CSS3 / Tailwind**, **JavaScript (ES6+)**, and **React + TypeScript**.

---

## 📚 Projects Overview

### 1️⃣ Portfolio Website (`CodeAlpha_Portfolio`)

> A fully responsive and accessible personal portfolio website featuring smooth scroll navigation, contact form input validation, and modern UI styling.

**Key Features:**
- **Navigation**: Sticky navbar with smooth section scrolling and active scrollspy indicators.
- **Form Validation**: Dedicated client-side validation engine (`contact-validator.js`) ensuring name, email regex, and message length standards.
- **Responsive**: Tailwind-styled layout optimized for mobile, tablet, and desktop screens.
- **Unit Tested**: Node test runner suite verifying contact form validation edge cases.

**Tech Stack:** `HTML5`, `CSS3 / Tailwind`, `JavaScript (ES6+)`

---

### 2️⃣ Calculator (`CodeAlpha_calculatorProject`)

> An arithmetic calculator with safe expression evaluation, dark/light theme switching, and defensive error handling.

**Key Features:**
- **Safe Parsing Engine**: Custom `calculator-engine.js` tokenizes and validates input expressions, preventing arbitrary code execution.
- **Edge Case Protection**: Defensive handling for division by zero (`Error: Div by 0`), malformed parentheses, and floating-point precision rounding.
- **Theme Toggle**: One-click dark/light theme switcher with persistent contrast adjustments.
- **Unit Tested**: 10 comprehensive tests covering operator precedence, decimals, parentheses, and injection protection.

**Tech Stack:** `HTML5`, `CSS3`, `JavaScript`

---

### 3️⃣ Music Player (`CodeAlphaMusicPlayer`)

> A modern audio player web application with playlist management, audio seek progress bar, and volume controls.

**Key Features:**
- **Audio Controls**: Play, pause, skip, previous, seekable progress bar, and volume clamping.
- **Modular Utilities**: Audio duration formatters (`formatTime`, `calculateProgress`, `clampVolume`) with zero-dependency unit tests.
- **Playlist Management**: Dynamic playlist drawer with active track indicator and album artwork rendering.

**Tech Stack:** `React 18`, `TypeScript`, `Vite`, `Tailwind CSS`, `Lucide Icons`

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/LAKSHYA-NIGAM/codealpha_tasks.git
cd codealpha_tasks
```

### 2. Run Test Suites
All three sub-projects include automated unit test suites orchestrated by the root test runner:
```bash
# Run all unit test suites across all projects
npm test

# Run individual project test suites
npm run test:calc        # Calculator evaluation tests (10 tests)
npm run test:portfolio   # Contact form validator tests (4 tests)
npm run test:player      # Music player formatter tests (6 tests)
```

---

## 📂 Repository Structure

```
codealpha_tasks/
├── .github/workflows/
│   └── ci.yml                          # Continuous integration workflow
├── CodeAlpha_calculatorProject/
│   ├── calculator-engine.js            # Safe arithmetic parser
│   ├── index.html                      # Calculator UI
│   ├── script.js                       # UI controller
│   ├── style.css                       # Responsive styling
│   └── tests/
│       └── calculator.test.mjs         # Calculator unit tests (10 tests)
├── CodeAlpha_Portfolio/
│   ├── contact-validator.js            # Contact form validation logic
│   ├── index.html                      # Portfolio landing page
│   ├── script.js                       # UI controller
│   ├── style.css                       # Stylesheet
│   └── tests/
│       └── contact-validator.test.mjs  # Form validator unit tests (4 tests)
├── CodeAlphaMusicPlayer/
│   └── project/
│       ├── src/
│       │   ├── components/             # React UI components
│       │   ├── utils/
│       │   │   ├── formatters.ts       # Audio duration & progress formatters
│       │   │   └── formatters.test.ts  # Audio utility tests (6 tests)
│       │   └── App.tsx                 # Main application
│       └── package.json
├── package.json                        # Root workspace test runner
└── .gitignore                          # Node, build, and OS ignores
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
