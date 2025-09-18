# WE-Sensing Modern Website

A modern, responsive website built with HTML, CSS, and JavaScript featuring clean design, smooth animations, and mobile-first approach.

## 🆕 Recent Updates

### New Features Added:
- **Logo Integration**: Added logo support in header navigation with responsive scaling
- **Restructured Team Section**: Split into Co-Founders (3 members) and Business Mentors (2 members)
- **Custom Background**: Hero section now uses `background_img1.png` for custom branding
- **Enhanced Responsive Design**: Improved mobile experience for new layout

## 🚀 Features

- **Responsive Design**: Adapts seamlessly to desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimalistic design with smooth animations
- **Logo Support**: Responsive logo display in navigation header
- **Sticky Navigation**: Fixed header with smooth scrolling navigation
- **Mobile Menu**: Hamburger menu for mobile devices
- **Structured Team Layout**: Organized team display with role-based grouping
- **Parallax Effects**: Custom background parallax scrolling in hero section
- **Scroll Animations**: Elements animate in as they come into view
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader friendly
- **Performance Optimized**: Throttled scroll events and optimized animations

## 📁 File Structure

```
we-sensing.com/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### Colors
Update the CSS custom properties in `style.css` (lines 15-35):
```css
:root {
    --primary-color: #2563eb;        /* Main brand color */
    --secondary-color: #f59e0b;      /* Accent color */
    --accent-color: #10b981;         /* Success/highlight color */
    /* ... more colors */
}
```

### Typography
The website uses Google Fonts (Inter). To change fonts:
1. Update the Google Fonts link in `index.html`
2. Update `--font-family` in `style.css`

### Required Image Files

To complete the website setup, you'll need to add these image files to your project directory:

1. **`logo.png`** - Your company logo for the header navigation
   - Recommended size: 120x40px (or similar aspect ratio)
   - Format: PNG with transparent background preferred
   - Should be high-resolution for crisp display on all devices

2. **`background_img1.png`** - Custom hero section background image
   - Recommended size: 1920x1080px or larger
   - Format: JPG or PNG
   - Should be optimized for web to ensure fast loading

### Content Sections

#### Hero Section
- **Background Image**: Replace the URL in `.hero__bg-image` (style.css line ~300)
- **Title & Subtitle**: Edit in `index.html` around lines 75-85
- **Call-to-action Button**: Modify text and link in `index.html`

#### Technology Section
- **Cards**: Add/remove/edit cards in `index.html` starting around line 100
- **Icons**: Use Font Awesome icons or replace with custom SVGs

#### Team Section
- **Photos**: Replace Unsplash URLs with your team photos
- **Member Info**: Update names, roles, and bios
- **Social Links**: Add real social media profiles

#### Services Section
- **Service Items**: Modify or add services in `index.html`
- **Icons**: Change Font Awesome icons as needed

### Animations
All animations can be disabled by adding this CSS:
```css
* {
    animation: none !important;
    transition: none !important;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Getting Started

1. **Open the website**: Double-click `index.html` or open it in a web browser
2. **Local Development**: Use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Edit Content**: Modify `index.html` for content changes
4. **Style Changes**: Update `style.css` for visual modifications
5. **Functionality**: Modify `script.js` for interactive features

## 📝 Content Customization Checklist

### Required Updates
- [ ] Replace placeholder team photos with real photos
- [ ] Update company information and contact details
- [ ] Modify service descriptions to match your offerings
- [ ] Update social media links in footer
- [ ] Replace hero background image
- [ ] Customize color scheme to match brand

### Optional Enhancements
- [ ] Add contact form
- [ ] Integrate analytics (Google Analytics)
- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add loading animations
- [ ] Integrate with CMS

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Add `loading="lazy"` to images below the fold
3. **Minify Files**: Minify CSS and JS for production
4. **Use CDN**: Host images and assets on a CDN

## 🔒 Security Notes

- Keep Font Awesome and other external libraries updated
- Validate any user inputs if you add forms
- Use HTTPS in production
- Implement proper CSP headers

## 📞 Support

For questions or customization help:
- Check the comments in each file for guidance
- Refer to the detailed CSS class naming conventions
- Use browser developer tools for debugging

## 📄 License

This website template is created for WE-Sensing. Modify and use as needed for your business.

---

**Built with ❤️ for modern web experiences**