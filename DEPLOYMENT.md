# Automated Firebase Hosting Deployment Guide

This repository is configured with **GitHub Actions** (`.github/workflows/firebase-deploy.yml`) to automatically build and deploy your portfolio website to **Firebase Hosting** whenever changes are pushed to `main` or `master` branch on GitHub repository [`JeevanPaila/JeevanPaila`](https://github.com/JeevanPaila/JeevanPaila).

---

## 🚀 Quick Setup Instructions (One-time Setup)

### Step 1: Firebase Project Setup
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase project or select your existing project (e.g. `jeevanpaila-portfolio`).
3. If your project ID is different from `jeevanpaila-portfolio`, update the project ID in `.firebaserc` and `.github/workflows/firebase-deploy.yml`.

---

### Step 2: Generate Firebase Service Account Key
1. In Firebase Console, go to **Project Settings** (gear icon) ➔ **Service Accounts**.
2. Click **Generate New Private Key** and save the JSON file to your local machine.

---

### Step 3: Add Secret to GitHub Repository
1. Open your GitHub Repository: [`https://github.com/JeevanPaila/JeevanPaila/settings/secrets/actions`](https://github.com/JeevanPaila/JeevanPaila/settings/secrets/actions)
2. Click **New repository secret**.
3. Set **Name**: `FIREBASE_SERVICE_ACCOUNT_JEEVANPAILA`
4. Set **Value**: Paste the entire contents of the Firebase Service Account JSON file downloaded in Step 2.
5. Click **Add secret**.

---

## ⚡ How Deployment Works

Every time you commit and push changes:
```bash
git add .
git commit -m "Update portfolio project details"
git push origin main
```

1. GitHub automatically triggers `.github/workflows/firebase-deploy.yml`.
2. The GitHub Action connects securely to Firebase using your service account secret.
3. Firebase Hosting deploys the latest version to `https://jeevanpaila.com` or your Firebase domain.

---

## 🛠 Manual Local Firebase Deployment (Optional)

To deploy directly from your local terminal:
```bash
# 1. Login to Firebase CLI
npx firebase-tools login

# 2. Deploy to Firebase Hosting
npx firebase-tools deploy --only hosting
```
