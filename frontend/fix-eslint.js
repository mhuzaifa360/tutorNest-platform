import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToFix = [
  "src/App.jsx",
  "src/components/common/Btn.jsx",
  "src/components/common/Typography.jsx",
  "src/components/home/FeatureTutors.jsx",
  "src/components/home/Hero.jsx",
  "src/components/home/StudentReviews.jsx",
  "src/components/home/WhyChoose.jsx",
  "src/components/layout/Footer.jsx",
  "src/components/layout/Navbar.jsx",
  "src/pages/About.jsx",
  "src/pages/Contact.jsx",
  "src/pages/Courses.jsx",
  "src/pages/Dashboard/StudentDashboard.jsx",
  "src/pages/Dashboard/TutorDashboard.jsx",
  "src/pages/Home.jsx",
  "src/pages/Login.jsx",
  "src/pages/Signup.jsx",
  "src/pages/Teachers.jsx",
  "src/routes/AppRoutes.jsx",
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // replace `import React from 'react';` or `import React, { ... } from 'react';`
    content = content.replace(/import\s+React\s*,\s*\{\s*/g, 'import { ');
    content = content.replace(/import\s+React\s+from\s+['"]react['"];?\n?/g, '');
    fs.writeFileSync(filePath, content);
  }
});

// Fix App.jsx specific unused vars
const appPath = path.join(__dirname, 'src/App.jsx');
if (fs.existsSync(appPath)) {
  let appContent = fs.readFileSync(appPath, 'utf8');
  appContent = appContent.replace(/import\s+Typography\s+from\s+[^;]+;?\n?/g, '');
  appContent = appContent.replace(/import\s+Btn\s+from\s+[^;]+;?\n?/g, '');
  fs.writeFileSync(appPath, appContent);
}

// Fix tailwind.config.js specific unused var
const twPath = path.join(__dirname, 'tailwind.config.js');
if (fs.existsSync(twPath)) {
  let twContent = fs.readFileSync(twPath, 'utf8');
  twContent = twContent.replace(/const\s+defaultTheme\s*=\s*require\(['"]tailwindcss\/defaultTheme['"]\);?\n?/g, '');
  fs.writeFileSync(twPath, twContent);
}

console.log("ESLint fixes applied.");
