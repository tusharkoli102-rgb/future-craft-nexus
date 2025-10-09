# 🎬 3D Scroll Animation Guide

## Overview
This website features a cinematic scroll-driven 3D experience with an evolving humanoid character that transforms as users scroll through the page.

---

## 📐 Scene Layout & Camera Path Storyboard

### Section 1: Hero Introduction (0-25% scroll)
**Camera Position:**
- Start: `position: [0, 0, 8]` (wide shot)
- Movement: Camera gradually moves forward (z-axis from 8 to 6)
- Look-at: `[0, 0, 0]` (center of scene)

**Character State:**
- Standing position, subtle floating animation
- Base glow: Low intensity (0.2)
- Rotation: Initial state (0°)

**Environment:**
- Dark background (#000011)
- Ambient neon cyan and magenta point lights
- Holographic grid on floor (low opacity: 0.05)
- Floating particles visible

**UI Elements:**
- Hero title with "Digital Evolution Starts Here"
- Glassmorphism badge with neon border
- Scroll indicator with pulsing animation
- CTA buttons

---

### Section 2: Technology Integration (25-50% scroll)
**Camera Position:**
- Movement: Camera orbits around character
- Position formula: `x = sin(progress * π) * 2`, `z = 6 - progress * 2`
- Camera moves closer while circling

**Character State:**
- Rotation: Character rotates 360° (following camera)
- Scale: Maintains 1.0
- Glow: Subtle increase

**Environment:**
- Holographic grid opacity increases to 0.2
- Particle system rotates slowly
- Point lights intensify

**UI Elements:**
- Two glassmorphism cards fade in:
  - "Quantum Processing" (neon gradient icon)
  - "Neural Networks" (cosmic gradient icon)
- Cards have neon borders and strong glass effect

---

### Section 3: Data Visualization (50-75% scroll)
**Camera Position:**
- Position: `x = 2-3`, `y = 0.5-1`, `z = 4` (side view)
- Camera shifts to profile angle
- Slight upward tilt

**Character State:**
- Rotation continues smoothly
- Emissive intensity increases to 0.5
- Environment brightens
- Particles swirl more actively

**Environment:**
- Background color shift (subtle blue tint)
- Bloom effect intensity increases (0.5 + scroll * 0.5)
- Particle speed increases
- Additional glow effects on character

**UI Elements:**
- Large centered glassmorphism panel
- "Beyond Boundaries" headline
- Stats counter (99.9% Uptime, 10M+ Users, 150+ Countries)
- Rocket icon with strong neon glow

---

### Section 4: Final CTA & Dissolution (75-100% scroll)
**Camera Position:**
- Movement: Camera pans upward
- Position: `y = 1 + progress * 3`, `z = 4 + progress * 2`
- Camera pulls back while rising

**Character State:**
- Scale decreases: `1 - dissolve * 0.5` (appears to dissolve)
- Opacity effect (though not directly applied, achieved through scale)
- Rotation completes final turn

**Environment:**
- Maximum bloom intensity
- Particles disperse outward
- Background fades to lighter tone
- Holographic grid fades out

**UI Elements:**
- "Ready to Evolve?" large headline
- Two CTA buttons:
  - "Start Your Journey" (hero variant)
  - "Explore Services" (glass variant)

---

## 🎨 Lighting & Color Plan

### RGB/HSL Color Values

#### Primary Colors (Dark Mode)
- **Background**: `hsl(220, 25%, 8%)` → `rgb(15, 17, 26)`
- **Card Background**: `hsl(220, 20%, 12%)` → `rgb(24, 27, 37)`
- **Primary Blue**: `hsl(217, 91%, 60%)` → `rgb(31, 136, 275)`
- **Neon Cyan**: `hsl(180, 100%, 50%)` → `rgb(0, 255, 255)`
- **Neon Magenta**: `hsl(320, 100%, 50%)` → `rgb(255, 0, 127)`
- **Accent Purple**: `hsl(280, 80%, 65%)` → `rgb(187, 51, 255)`

#### Lighting Setup

**Ambient Light:**
- Intensity: `0.2`
- Purpose: Base illumination

**Point Light 1 (Cyan):**
- Position: `[10, 10, 10]`
- Color: `#00ffff` (cyan)
- Intensity: `0.5`
- Purpose: Front-right rim light

**Point Light 2 (Magenta):**
- Position: `[-10, -10, -10]`
- Color: `#ff00ff` (magenta)
- Intensity: `0.3`
- Purpose: Back-left fill light

**Spotlight:**
- Position: `[0, 5, 0]`
- Color: `#ffffff`
- Angle: `0.3`
- Penumbra: `1`
- Intensity: `0.5`
- Cast Shadow: `true`

**Point Light 3 (Back Rim):**
- Position: `[0, 0, -5]`
- Color: `#00ffff`
- Intensity: `0.8`
- Purpose: Strong back light for silhouette

**Point Light 4 (Side Accent):**
- Position: `[5, 2, 5]`
- Color: `#ff00ff`
- Intensity: `0.6`

#### Shader Effects
- **Material Properties:**
  - Metalness: `0.8-0.9`
  - Roughness: `0.1-0.2`
  - Emissive: Dynamic based on scroll
  - Distortion: `0.3` (for head sphere)

---

## ⏱️ Animation Timeline

### Scroll Percentage Mapping

| Scroll % | Section | Camera Action | Character Action | Environment | UI |
|----------|---------|---------------|------------------|-------------|-----|
| 0-10% | Hero | Wide shot, static | Idle float | Dark, ambient | Hero text appears |
| 10-25% | Hero → Transition | Forward dolly | Rotation begins | Grid fades in | Scroll indicator |
| 25-35% | Tech Integration | Orbit begins | Full rotation | Particles speed up | Cards fade in |
| 35-50% | Tech Integration | Orbit continues | Maintain rotation | Lights intensify | Cards fully visible |
| 50-60% | Data Viz | Side view transition | Glow increases | Brighten | Stats panel appears |
| 60-75% | Data Viz | Hold side view | Max emissive | Bloom peaks | Stats animate |
| 75-85% | Dissolution | Pan upward | Scale down begins | Particles disperse | CTA fades in |
| 85-100% | Final | Pull back + up | Continue dissolve | Fade to light | Full CTA visible |

### Key Transition Points
- **0.25**: First major transition (hero → tech)
- **0.50**: Second transition (tech → visualization)
- **0.75**: Third transition (viz → dissolution)

---

## 🎭 UI Layer Design

### Glassmorphism Properties
```css
.glass {
  background: rgba(card-color, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(border-color, 0.5);
}

.glass-strong {
  background: rgba(card-color, 0.6);
  backdrop-filter: blur(48px);
  border: 1px solid rgba(border-color, 0.8);
}
```

### Neon Border Effect
```css
.neon-border {
  border: 1px solid hsl(180, 100%, 50%);
  box-shadow: 
    0 0 5px hsla(180, 100%, 50%, 0.5),
    inset 0 0 5px hsla(180, 100%, 50%, 0.2);
}
```

### Glow Effects
- **Light Glow**: `box-shadow: 0 0 15px rgba(cyan, 0.6), 0 0 30px rgba(cyan, 0.3)`
- **Strong Glow**: `box-shadow: 0 0 30px rgba(cyan, 0.6), 0 0 60px rgba(cyan, 0.3)`
- **Cyber Glow**: Multiple layered shadows with increasing blur

### Opacity Transitions
- Section 1: Opacity `1 → 1 → 0` (holds, then fades)
- Section 2: Opacity `0 → 1 → 1 → 0` (fade in, hold, fade out)
- Section 3: Opacity `0 → 1 → 1 → 0` (same pattern)
- Section 4: Opacity `0 → 1 → 1` (fade in and stay)

---

## 📱 Mobile Fallback & Optimization

### Mobile Detection
- Screen width < 768px triggers simplified version
- Reduce particle count to 200 (from 500)
- Disable post-processing effects (bloom)
- Simplify character geometry

### Performance Optimizations

#### Three.js Settings
```javascript
<Canvas
  dpr={[1, 2]}  // Limit pixel ratio
  gl={{
    antialias: true,
    powerPreference: 'high-performance'
  }}
>
```

#### Optimization Techniques
1. **Level of Detail (LOD)**: Reduce geometry complexity on mobile
2. **Frustum Culling**: Automatic by Three.js
3. **Texture Compression**: Use compressed texture formats
4. **Geometry Instancing**: Reuse particle geometry
5. **Conditional Effects**: Disable bloom on low-end devices

### Mobile Fallback Option
- Option 1: Use simplified 2D Lottie animation instead of 3D
- Option 2: Use pre-rendered video loop of the 3D scene
- Option 3: Static images with CSS parallax scrolling

### Recommended Breakpoints
```javascript
// Desktop: Full 3D experience
if (window.innerWidth >= 1024) {
  // Enable all effects
}

// Tablet: Simplified 3D
else if (window.innerWidth >= 768) {
  // Reduce particles, disable post-processing
}

// Mobile: Fallback
else {
  // 2D animation or video fallback
}
```

---

## 🚀 Technical Stack

### Installed Dependencies
- `@react-three/fiber@^8.18.0` - React renderer for Three.js
- `@react-three/drei@^9.122.0` - Helper components
- `three@^0.160.0` - Core 3D engine
- `gsap@^3.12.5` - Animation library with ScrollTrigger
- `@react-three/postprocessing@^2.16.2` - Bloom effects
- `framer-motion` - UI animations
- `tsparticles` - Particle effects (existing)

### File Structure
```
src/
├── components/
│   └── 3d/
│       ├── HumanoidScene.tsx      # 3D character & environment
│       ├── ScrollScene.tsx        # Canvas wrapper with scroll
│       └── ScrollContent.tsx      # UI overlay panels
├── pages/
│   └── Home.tsx                   # Main page integration
└── index.css                      # Design tokens & utilities
```

---

## 🎬 Inspiration References

### Visual Style
- **Active Theory**: High-end WebGL experiences with smooth transitions
- **Obys Agency**: Premium agency site with scroll-driven animations
- **Bruno Simon's Portfolio**: Playful 3D interactions with Three.js

### Animation Principles
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` for smooth camera movement
- Scroll scrubbing: GSAP ScrollTrigger with `scrub: 1`
- Layer opacity: Framer Motion `useTransform` for smooth fades

---

## 🛠️ Customization Guide

### Adjust Camera Path
Edit `HumanoidScene.tsx`, modify the camera animation based on `scrollProgress`:
```typescript
if (progress < 0.25) {
  cameraRef.current.position.z = 8 - progress * 8;
  cameraRef.current.position.y = 0;
}
// Add more sections...
```

### Change Character Appearance
Modify the humanoid mesh geometry and materials:
```typescript
<Sphere args={[0.5, 64, 64]}>
  <MeshDistortMaterial
    color="#00ffff"
    emissive="#0088ff"
    metalness={0.9}
    roughness={0.1}
  />
</Sphere>
```

### Adjust Scroll Speed
Change the `minHeight` in `ScrollContent.tsx`:
```typescript
<div style={{ minHeight: '400vh' }}>  // Increase for slower scroll
```

---

## ✅ Testing Checklist

- [ ] Smooth scroll performance (60fps)
- [ ] Camera transitions are fluid
- [ ] Character rotation is continuous
- [ ] Lighting changes are visible
- [ ] UI panels fade correctly
- [ ] CTA buttons are clickable
- [ ] Mobile fallback works
- [ ] No console errors
- [ ] Works in Chrome, Firefox, Safari
- [ ] Accessibility: keyboard navigation works

---

## 📊 Performance Metrics

**Target Performance:**
- FPS: 60fps on desktop, 30fps minimum on mobile
- Initial load: < 3 seconds
- Time to Interactive: < 5 seconds
- Lighthouse score: > 90

**Monitoring:**
- Use Three.js Stats.js for FPS monitoring
- Chrome DevTools Performance tab
- React DevTools Profiler

---

Built with ❤️ using React Three Fiber + GSAP
