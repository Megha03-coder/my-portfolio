# How to Add Your Photo

## Steps to Replace the Placeholder with Your Photo:

1. **Prepare Your Photo:**
   - Use a high-quality photo of yourself
   - Recommended size: 400x400 pixels or larger
   - Square aspect ratio works best (1:1 ratio)
   - Supported formats: JPG, PNG, WebP

2. **Add Your Photo:**
   - Save your photo as `tabrej-pic.jpg`
   - Place it in the `public` folder
   - The file path should be: `public/tabrej-pic.jpg`

3. **Alternative Image Names:**
   If you want to use a different filename, update the Hero component:
   - Open `src/components/Hero.tsx`
   - Find line 92: `src="/tabrej-pic.jpg"`
   - Change it to your image filename: `src="/your-photo-name.jpg"`

4. **Image Optimization:**
   - The Next.js Image component will automatically optimize your image
   - It will handle different screen sizes and formats
   - The image will be lazy-loaded for better performance

## Example:
```
public/
├── tabrej-pic.jpg  ← Your photo is here
└── (other files...)
```

That's it! Your photo will automatically appear in the hero section with the circular frame and animations.
