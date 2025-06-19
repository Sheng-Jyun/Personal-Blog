# 📝 Personal Blog

**My Blog** is a full-stack blogging web application built with **Node.js**, **Express**, **EJS**, and **modular CSS**. It allows users to create, edit, and delete blog posts dynamically — all without a database. Posts are temporarily stored in memory and reset each time the server restarts.

---

## 📁 Project Structure

```
├── index.js                  # Main server file
├── solution.js               # (Optional) helper or solution code
├── package.json              # Project configuration
├── package-lock.json
├── node_modules/             # Installed npm packages
├── public/                   # Static files (served as-is)
│   ├── images/               # Images used in the UI
│   │   ├── Jim.png
│   │   └── cat.jpeg
│   └── styles/               # CSS stylesheets
│       ├── content.css
│       └── layout.css
├── views/                    # EJS templates
│   ├── index.ejs             # Main blog page
│   ├── about.ejs             # About page
│   ├── contact.ejs           # Contact page
│   └── partials/             # Shared layout components
│       ├── header.ejs
│       └── footer.ejs
```

---

## 🚀 Features

- 📝 Create blog posts with title, content, and author
- 🔃 Edit posts directly on the page (inline editing)
- ❌ Delete posts
- ✨ Responsive layout with animated wave footer
- 🔢 Live character counter for post content (max 900)
- 🔗 Social media footer links (GitHub, LinkedIn, etc.)
- 🎨 Modular CSS with clean UI separation (`layout.css` & `content.css`)

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime
- **Express** – Web server framework
- **EJS** – Embedded JavaScript templating
- **CSS3** – Layout and design
- **Ionicons** – Social icon support

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Capstone2_Blog.git
   cd Capstone2_Blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   node index.js
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

> ⚠️ Note: All posts are stored in memory. Restarting the server will clear them.

---

## 👤 Author

**Sheng-Jyun Cai**  
- GitHub: [@Sheng-Jyun](https://github.com/Sheng-Jyun)  
- LinkedIn: [Sheng-Jyun Cai](https://www.linkedin.com/in/sheng-jyun-cai-573554204)  
- Instagram: [@yrt12378](https://www.instagram.com/yrt12378/)

---

## 📄 License

This project is intended for educational and demo purposes.
