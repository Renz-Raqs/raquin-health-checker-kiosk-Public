# 🩺 Health Self-Check Kiosk

A simple web-based **Health Self-Check Kiosk** that calculates a user's **Body Mass Index (BMI)** based on their height and weight. The application provides the user's BMI value, health category, and a personalized recommendation while also recording each submission to a Google Sheets database using Google Apps Script.

---

## Features

- Calculate Body Mass Index (BMI)
- Input validation for all required fields
- Prevents invalid names (letters and spaces only)
- Displays BMI category:
  - Underweight
  - Normal
  - Overweight
  - Obese
- Color-coded result card
- Reset button to clear the form and hide the results
- Responsive design for desktop and mobile devices
- Automatically records every submission to Google Sheets

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Google Apps Script
- Google Sheets

---

## 📋 Input Fields

The application collects the following information:

- Full Name
- Age
- Sex
- Weight (kg)
- Height (cm)

---

## 🧮 BMI Formula

BMI is calculated using the formula:

BMI = Weight (kg) ÷ Height² (m²)

### BMI Categories

| BMI | Category |
|------|----------|
| Below 18.5 | Underweight |
| 18.5 – 24.9 | Normal |
| 25.0 – 29.9 | Overweight |
| 30.0 and above | Obese |

---

## ✔ Input Validation

The application validates the following:

- All required fields must be completed.
- Full Name accepts letters and spaces only.
- Age must be between 1 and 120.
- Height and Weight must be positive numbers.

---

## 📊 Data Recording

Each successful BMI calculation is automatically recorded in a Google Sheets spreadsheet using Google Apps Script.

Recorded data includes:

- Timestamp
- Full Name
- Age
- Sex
- Weight
- Height
- BMI
- BMI Category

---

## 📱 Responsive Design

The website is designed using Flexbox and media queries to ensure compatibility across:

- Desktop
- Tablet
- Mobile devices

---

## 🚀 How to Run

1. Download or clone the project.
2. Open `index.html` in your preferred web browser.
3. Fill out the required information.
4. Click **Calculate BMI** to view your results.
5. Click **Reset** to clear the form.

---

## 👨‍💻 Developed By

**Renz Raquin - BIT34**

