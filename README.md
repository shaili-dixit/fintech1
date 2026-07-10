# 💳 FinTech Multi-Step Onboarding Wizard

A modern, responsive multi-step onboarding application built with **React**, **Vite**, **React Hook Form**, and **Zod**. The project demonstrates enterprise-grade form handling with real-time validation, responsive UI, accessibility support, and a seamless user experience.

---

# ✨ Features

## 📄 Multi-Step Form

- Three-step onboarding process
- Personal Information
- Account Details
- Review & Submit
- Success confirmation page

---

## ✅ Real-Time Validation

- Live field validation
- Email format validation
- Password length validation
- Confirm password matching
- Age validation
- Required field validation

---

## 🔐 Password Features

- Show / Hide Password
- Password confirmation validation
- Secure password masking on review page

---

## 📊 Progress Tracking

- Dynamic progress bar
- Step indicator
- Current step tracking

---

## 📱 Responsive Design

- Mobile Friendly
- Tablet Friendly
- Desktop Optimized

---

## ♿ Accessibility

- ARIA Labels
- Keyboard Accessible Inputs
- Semantic HTML
- Proper Form Labels

---

## 📈 Analytics Simulation

Logs an analytics event after successful form submission.

Example:

```text
[Analytics] User interacted with Multi Step Onboarding Wizard
```

---

## 🛡️ Validation

Implemented using:

- React Hook Form
- Zod Schema Validation
- Zod Resolver

---

# 🛠️ Tech Stack

- React 19
- Vite
- React Hook Form
- Zod
- JavaScript (ES6+)
- CSS3

---

# 📂 Project Structure

```
src
│
├── components
│   ├── PersonalInfo.jsx
│   ├── AccountDetails.jsx
│   ├── ProgressBar.jsx
│   ├── Review.jsx
│   └── Success.jsx
│
├── validationSchema.js
├── App.jsx
├── main.jsx
└── styles.css
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/FinTech.git
```

Move into project

```bash
cd FinTech
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build project

```bash
npm run build
```

---

# 📦 Dependencies

```json
react
react-dom
react-hook-form
zod
@hookform/resolvers
vite
```

---

# 🎯 Sprint Objectives Achieved

### Phase 1

- Multi-Step Wizard
- Parent State Management
- Navigation Logic
- Review Screen
- Success Screen

### Phase 2

- Real-Time Validation
- Progress Bar
- Password Toggle
- Disabled Navigation
- Responsive Layout

### Phase 3

- React Hook Form
- Zod Validation
- Schema Resolver Integration

---

# 🧪 Validation Rules

### Personal Information

- First Name ≥ 2 characters
- Last Name ≥ 2 characters
- Age between 18–100

### Account Details

- Valid Email Address
- Password ≥ 8 characters
- Confirm Password must match

---

# 📈 Future Improvements

- Save progress in Local Storage
- Dark Mode
- Backend API Integration
- Email Verification
- OTP Authentication
- Multi-language Support

---

# 👩‍💻 Developed By

**Shaili Dixit**

B.Tech Computer Science Engineering

Frontend Developer

---

# 📄 License

This project was developed for educational and internship purposes.
