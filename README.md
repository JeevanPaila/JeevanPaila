# 🚀 Jeevan Paila — Personal Portfolio & AI Product Studio

Official personal website, portfolio, and product studio showcase for **Jeevan Paila** — Data Integration Specialist at Virtual Employee Pvt. Ltd., former Automation Analyst & Pricing Analyst at Amazon, IISc Bangalore Postgraduate Alumnus, and Founder of **[Kognitec](https://kognitec.com)**.

🌐 **Live Application**: **[https://jeevanpaila.web.app](https://jeevanpaila.web.app)**  
📦 **GitHub Repository**: **[`JeevanPaila/JeevanPaila`](https://github.com/JeevanPaila/JeevanPaila)**

---

## 🌟 Key Application Features

### 🎨 Liquid Glass UI & Dynamic Motion Aesthetic
- **Frosted Glass Engine**: Custom CSS system built with `backdrop-filter: blur(16px)` and subtle glowing gradients.
- **Directional Spotlight**: Glass border highlights automatically follow user cursor movement across all interactive cards.
- **3D Pop-Out Avatar**: Interactive profile photo scaling up (`scale(1.25)`) and popping out of the top container boundary on hover while remaining anchored at the bottom edge.

### 🌓 Automatic System Light/Dark Theme Engine
- **Zero Manual Toggle**: Detects and responds automatically to visitor system preferences via `@media (prefers-color-scheme: light)`.
- **Dark Mode Palette**: Deep Obsidian canvas (`#0B0F19`), Electric Indigo (`#6366F1`) & Violet (`#8B5CF6`) gradients, Emerald Mint (`#10B981`) badges, and Ice White typography (`#F9FAFB`).
- **Light Mode Palette**: Frosted Porcelain canvas (`#F1F5F9`), Deep Sapphire Indigo (`#4F46E5` ➔ `#7C3AED`) gradients, Rich Emerald (`#059669`) accents, and Slate Charcoal text (`#0F172A`).

### ⌨️ Dynamic Code Typewriter Title Animation
- **Typography**: Powered by **[Geist Mono](https://fonts.google.com/specimen/Geist+Mono)** from Google Fonts.
- **Role Sequence**: Continuously types and erases back through 5 core titles in a perpetual loop:
  1. `Data Integration Specialist`
  2. `Automation Analyst`
  3. `Data Engineer`
  4. `Data Scientist`
  5. `Data Analyst`

### 🔒 Anti-Bot Obfuscation & Contact Access Modal
- **Zero Plaintext Contacts in Source**: Direct email and phone number are completely removed from HTML and `data.js`.
- **Base64 Encrypted Tokens**: Stored as Base64 tokens in JS (`amVldmFuZGVlcC5wYWlsYUBnbWFpbC5jb20=`).
- **Human Access Verification**: Unlocked only when a user solves a human math challenge (`c-ans`) inside the Liquid Glass Access Modal.
- **Real-Time Inbox Delivery**: Integrated with zero-backend FormSubmit AJAX (`https://formsubmit.co/ajax/jeevandeep.paila@gmail.com`), delivering visitor messages and contact request alerts directly to Jeevan's inbox.

### 🤖 Full SEO & AI Search Engine Indexing Architecture
- **AI Crawler Optimization**: Explicitly allows AI search crawlers (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Anthropic-ai`, `Google-Extended`, `Applebot`, `Googlebot`, `Bingbot`) in [`robots.txt`](file:///x:/JeevanPaila/jeevanpaila.com/robots.txt).
- **XML Sitemap**: Declares all tab sections in [`sitemap.xml`](file:///x:/JeevanPaila/jeevanpaila.com/sitemap.xml).
- **Rich JSON-LD Structured Data**: Embedded Schema.org `Person` and `ProfilePage` schemas (`schema.org`) linking career roles, IISc education, Kognitec products, and alternate names (`Jeevan Paila`, `Jeevan D. Paila`, `Jeevan Deep Paila`).
- **Static Pre-Rendered Fallbacks**: Includes static semantic HTML fallbacks inside timeline containers for 100% indexing compatibility with non-JS crawlers.

---

## 🛠 Technical Stack Architecture

| Layer | Technology |
| :--- | :--- |
| **Core Structure** | HTML5 (Semantic markup + JSON-LD Schema.org) |
| **Styling & Theme** | Vanilla CSS3 (Custom Design Tokens, Liquid Glass, OS Auto Theme Engine) |
| **Typography** | **Geist Mono** & **Geist** (Google Fonts) |
| **Logic & Interactivity** | Vanilla JavaScript (ES6+ Modules, Base64 Obfuscation, Typewriter Engine) |
| **Iconography** | Ionicons v7.1.0 |
| **Email Gateway** | FormSubmit AJAX Endpoint |
| **Hosting & CDN** | Firebase Hosting (Global Edge CDN, SSL/TLS) |

---

## 📂 Repository Structure

```
JeevanPaila/
├── index.html            # Main Single-Page Application & SEO Meta Head
├── robots.txt            # AI Search & Search Engine Crawler Rules
├── sitemap.xml           # XML Site Index for Google & Bing
├── firebase.json         # Firebase Hosting Configuration
├── .firebaserc           # Firebase Project Link (jeevanpaila)
├── resume.pdf            # Downloadable Official Curriculum Vitae
├── favicon.ico           # Application Avatar & Favicon Icon
├── css/
│   └── style.css         # Core Design System, Liquid Glass & Auto Light/Dark CSS
└── js/
    ├── data.js           # Centralized Data Store (Experience, Education, Projects, Skills, Ventures)
    └── main.js           # Typewriter Engine, Navigation, Anti-Bot Modal & FormSubmit Handler
```

---

## 🚀 Local Development & Deployment

### 1. Run Locally
Serve the application using any static HTTP server (e.g. Python, Live Server, or Firebase CLI):

```bash
# Using Python
python -m http.server 8000

# Or using Firebase CLI
npx firebase-tools serve
```

Open `http://localhost:8000` in your browser.

### 2. Deploy to Firebase Hosting
Deploy updates directly to production on Firebase Hosting:

```bash
npx firebase-tools deploy --only hosting
```

---

## 👨‍💻 Author & Contact

**Jeevan Paila**  
*Data Integration Specialist @ Virtual Employee Pvt. Ltd.*  
*Former Automation Analyst & Pricing Analyst @ Amazon*  
*Founder @ [Kognitec](https://kognitec.com)*  

- **Website**: [https://jeevanpaila.web.app](https://jeevanpaila.web.app)
- **LinkedIn**: [https://www.linkedin.com/in/jeevanpaila/](https://www.linkedin.com/in/jeevanpaila/)
- **GitHub**: [https://github.com/JeevanPaila](https://github.com/JeevanPaila)
- **Twitter / X**: [https://x.com/jdpaila](https://x.com/jdpaila)
