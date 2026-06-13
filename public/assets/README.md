# Assets

Drop static files here. They are served from `/assets/...`.

- `images/` — photos, og images, illustrations
- `icons/` — svg/png icons and the favicon
- `fonts/` — self-hosted font files (the project currently loads fonts via
  `next/font/google` in `src/app/fonts.ts`; add files here only if you switch
  to self-hosted fonts)

Reference them in code with an absolute path, e.g.:

```tsx
<img src="/assets/images/example.jpg" alt="…" />
```
