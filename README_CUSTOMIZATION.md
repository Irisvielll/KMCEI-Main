# KMCEI Productions - Customization & Deployment Guide

This guide explains how to add content to your website and how to deploy it to GitHub Pages.

---

## 🛠 Part 1: Adding Content to Sections

All the content on your website is managed in a single file: `src/constants.ts`. 

### How to Edit
1. Open `src/constants.ts`.
2. Find the section you want to update (e.g., `GAMES`, `TEAM_MEMBERS`, `MERCH_ITEMS`).
3. Add a new object to the array following the existing format.

### 🎮 Adding a New Game
Find `export const GAMES: Game[] = [` and add a new block like this:

```typescript
{
  id: 'game-3', // Unique ID
  title: 'Your Game Title',
  description: 'A short description of your game.',
  image: 'https://picsum.photos/seed/yourgame/800/450', // URL to image
  info: {
    platform: 'PC / Mobile',
    releaseDate: '2026',
    engine: 'Unity',
    genre: 'RPG'
  }
}
```

### 👥 Adding a Team Member
Find `export const TEAM_MEMBERS: TeamMember[] = [` and add:

```typescript
{
  id: 'member-name',
  name: 'Full Name',
  role: 'Their Job Title',
  bio: 'A short biography.',
  image: 'https://picsum.photos/seed/member/400/400',
  tier: 'standard', // Options: 'primary', 'secondary', 'standard'
  links: [
    { platform: 'Instagram', url: 'https://...', icon: Instagram },
    // Add more links as needed
  ]
}
```

### 🎵 Adding a Song
Find `export const SONGS: Song[] = [` and add:

```typescript
{
  id: 'song-3',
  title: 'Song Name',
  featuredIn: 'Game Name',
  composer: 'Artist Name',
  duration: '3:30',
  license: 'Original Soundtrack',
  image: 'https://picsum.photos/seed/song/400/400'
}
```

---

## 🚀 Part 2: Deploying to GitHub Pages

Since this is a standard Vite + React project, follow these steps to host it on GitHub for free.

### Step 1: Initialize Git and Push to GitHub
1. Create a new repository on GitHub (e.g., `my-portfolio`).
2. In your terminal, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Update `vite.config.ts`
If your repository name is NOT `YOUR_USERNAME.github.io` (e.g., it's `my-portfolio`), you must set the `base` path.
Open `vite.config.ts` and add the `base` property:

```typescript
export default defineConfig({
  base: '/YOUR_REPO_NAME/', // Replace with your actual repository name
  plugins: [react()],
})
```

### Step 3: Deploy using GitHub Actions (Recommended)
1. Go to your GitHub Repository settings.
2. Click **Pages** in the left sidebar.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. GitHub will suggest a "Static HTML" or "Vite" workflow. Choose **Vite** or create a new file at `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Step 4: Finalize
Once you push this workflow file to GitHub, it will automatically build and deploy your site. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

---

## 💡 Tips
- **Images:** You can use local images by putting them in the `public/` folder and referencing them as `/image-name.jpg`.
- **Icons:** We use `lucide-react`. If you need a new icon, import it at the top of `src/constants.ts`.
