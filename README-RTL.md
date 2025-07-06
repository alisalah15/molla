# Molla Template - RTL (Right-to-Left) Version

This is a comprehensive RTL conversion of the Molla eCommerce template, ensuring full compatibility with Arabic, Hebrew, and other right-to-left languages.

## Features

### ✅ Complete RTL Support
- **Text Direction**: All text elements properly aligned to the right
- **Layout Mirroring**: Complete left-to-right to right-to-left layout conversion
- **Navigation**: RTL-compatible menus and navigation elements
- **Forms**: Right-aligned form inputs and labels
- **Icons**: Properly rotated directional icons

### ✅ Component Compatibility
- **Carousels**: Owl Carousel with RTL navigation
- **Modals**: Bootstrap modals with RTL positioning
- **Dropdowns**: Right-aligned dropdown menus
- **Tooltips**: RTL-aware tooltip positioning
- **Sliders**: NoUI Slider with RTL support

### ✅ Responsive Design
- **Mobile-First**: RTL support across all screen sizes
- **Breakpoints**: Maintained responsive behavior
- **Touch Support**: RTL-compatible touch interactions

### ✅ JavaScript Enhancements
- **Automatic Detection**: RTL mode detection and setup
- **Plugin Integration**: RTL configuration for all plugins
- **Event Handling**: RTL-aware event management
- **Utility Functions**: Helper functions for RTL conversions

## Files Structure

```
assets/
├── css/
│   └── rtl.css              # Main RTL stylesheet
├── js/
│   └── rtl.js               # RTL JavaScript enhancements
└── ...
index-rtl.html               # RTL version of the homepage
README-RTL.md               # This documentation
```

## Implementation

### 1. HTML Structure
```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <!-- Standard CSS files -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- RTL CSS file (must be loaded after main CSS) -->
    <link rel="stylesheet" href="assets/css/rtl.css">
</head>
<body dir="rtl" class="rtl-layout">
    <!-- Content -->
    
    <!-- Standard JS files -->
    <script src="assets/js/main.js"></script>
    <!-- RTL JS file (must be loaded after main JS) -->
    <script src="assets/js/rtl.js"></script>
</body>
</html>
```

### 2. CSS Implementation
The RTL CSS file uses the `html[dir="rtl"]` selector to apply RTL-specific styles:

```css
/* Base RTL Direction */
html[dir="rtl"] {
    direction: rtl;
    text-align: right;
}

/* Float Reversal */
html[dir="rtl"] .pull-left {
    float: right !important;
}

html[dir="rtl"] .pull-right {
    float: left !important;
}

/* Flexbox RTL */
html[dir="rtl"] .d-flex {
    flex-direction: row-reverse;
}
```

### 3. JavaScript Integration
The RTL JavaScript file automatically detects RTL mode and configures all plugins:

```javascript
// RTL Detection
var isRTL = $('html').attr('dir') === 'rtl' || $('body').hasClass('rtl');

// Owl Carousel RTL Configuration
if (isRTL) {
    options.rtl = true;
    if (options.navText) {
        options.navText = [options.navText[1], options.navText[0]];
    }
}
```

## Supported Components

### ✅ Navigation
- **Main Menu**: Horizontal navigation with RTL support
- **Mobile Menu**: Slide-in mobile menu from the right
- **Breadcrumbs**: RTL breadcrumb navigation
- **Pagination**: Right-to-left pagination

### ✅ Layout Elements
- **Headers**: RTL header layouts with proper logo positioning
- **Footers**: RTL footer with social icons alignment
- **Sidebars**: Right-aligned sidebars
- **Grid System**: RTL-compatible grid layouts

### ✅ Interactive Components
- **Carousels**: Owl Carousel with reversed navigation
- **Modals**: Bootstrap modals with RTL positioning
- **Dropdowns**: Right-aligned dropdown menus
- **Tabs**: RTL tab navigation
- **Accordions**: RTL accordion panels

### ✅ Form Elements
- **Input Fields**: Right-aligned text inputs
- **Select Boxes**: RTL select dropdowns
- **Checkboxes/Radio**: Proper RTL alignment
- **Input Groups**: RTL input group layouts
- **Validation**: RTL validation message positioning

### ✅ E-commerce Features
- **Product Grids**: RTL product layouts
- **Shopping Cart**: RTL cart dropdown and pages
- **Checkout**: RTL checkout forms
- **Product Details**: RTL product information layout
- **Filters**: RTL filter sidebars and controls

## Browser Support

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **Internet Explorer**: IE11+ with graceful degradation
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet

## Language Support

This RTL implementation is optimized for:
- **Arabic** (العربية)
- **Hebrew** (עברית)
- **Persian/Farsi** (فارسی)
- **Urdu** (اردو)
- **Kurdish** (کوردی)

## Usage Instructions

### 1. Basic Implementation
1. Copy the RTL CSS and JS files to your project
2. Include them after the main CSS and JS files
3. Set the HTML `dir` attribute to "rtl"
4. Set the `lang` attribute to your target language

### 2. Language Switching
To implement language switching:

```html
<!-- Language Switcher -->
<div class="header-dropdown">
    <a href="#">العربية</a>
    <div class="header-menu">
        <ul>
            <li><a href="index.html">English</a></li>
            <li><a href="index-rtl.html">العربية</a></li>
        </ul>
    </div>
</div>
```

### 3. Custom Content
When adding custom content, ensure:
- Text content is in the target RTL language
- Images with text are localized
- Icons are culturally appropriate
- Colors and imagery respect cultural preferences

## Customization

### Adding Custom RTL Styles
Add your custom RTL styles to the `rtl.css` file:

```css
/* Custom RTL Styles */
html[dir="rtl"] .my-custom-component {
    text-align: right;
    margin-right: 0;
    margin-left: 1rem;
}
```

### JavaScript Customization
Extend the RTL JavaScript functionality:

```javascript
// Custom RTL Functions
if (isRTL) {
    // Your custom RTL logic here
    $('.my-component').addClass('rtl-mode');
}
```

## Performance Considerations

- **CSS Size**: RTL CSS adds ~15KB to the total CSS size
- **JavaScript**: RTL JS adds ~8KB to the total JS size
- **Loading**: RTL files should be loaded after main files
- **Caching**: Ensure proper cache headers for RTL assets

## Testing Checklist

### ✅ Visual Testing
- [ ] Text alignment (right-aligned)
- [ ] Layout mirroring (left becomes right)
- [ ] Icon directions (arrows, chevrons)
- [ ] Image positioning
- [ ] Spacing and margins

### ✅ Functional Testing
- [ ] Navigation menus
- [ ] Form submissions
- [ ] Modal dialogs
- [ ] Carousel navigation
- [ ] Dropdown menus
- [ ] Mobile menu

### ✅ Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

### ✅ Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] ARIA labels
- [ ] Color contrast

## Troubleshooting

### Common Issues

1. **Icons Not Flipping**
   - Ensure icon CSS includes RTL-specific rules
   - Check for `transform: scaleX(-1)` where needed

2. **Carousel Navigation Wrong Direction**
   - Verify RTL JavaScript is loaded after main JS
   - Check Owl Carousel RTL configuration

3. **Form Alignment Issues**
   - Ensure form CSS includes RTL text-align rules
   - Check input group RTL styling

4. **Mobile Menu Position**
   - Verify mobile menu CSS includes RTL positioning
   - Check transform values for RTL

### Debug Mode
Enable debug mode by adding the `rtl-debug` class:

```html
<body dir="rtl" class="rtl-layout rtl-debug">
```

This will add visual indicators to help identify RTL issues.

## Support

For RTL-specific issues:
1. Check the browser console for JavaScript errors
2. Verify CSS specificity for RTL rules
3. Test with different RTL languages
4. Validate HTML structure and attributes

## Contributing

When contributing to the RTL version:
1. Test all changes in RTL mode
2. Ensure backward compatibility
3. Update documentation
4. Follow existing code patterns
5. Test across multiple browsers

## License

This RTL implementation maintains the same license as the original Molla template.