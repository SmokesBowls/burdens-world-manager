🗺️ Burdens of a Forgotten Past - World Codex

    A modular interface for managing planetary lore, settlements, and regions in the mythos of Burdens of a Forgotten Past.

🧭 Overview

This codex system powers the world-building backend for BoFP, allowing designers to organize and visualize planetary systems, political zones, environmental attributes, and more.

While currently frontend-only, this tool is designed to plug into narrative APIs or Obsidian vault exports later in development.
⚙️ Technologies

    Next.js (App Router)

    React (TypeScript)

    Tailwind CSS

    shadcn/ui component library

    lucide-react for iconography

🚀 Getting Started
Prerequisites

    Node.js (v18+ recommended)

    npm or pnpm

Setup

git clone <repo-url>
cd game-world-manager
npm install
npm run dev

Then open http://localhost:3000
📁 Project Structure

game-world-manager/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js app routes/layouts
│   ├── components/         # Shared components
│   │   └── ui/             # Imported from shadcn/ui
│   ├── lib/                # Utility functions (future-proof)
│   └── data/               # Placeholder for mock or synced lore data
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md

📚 Future Development

    🔄 Integrate with Godot .tres lore exports

    📦 Add backend endpoint for real-time editing or metadata syncing

    📖 Obsidian vault importer for codex entries

    🗃️ Tag-based filtering and timeline sorters

🤝 Contributing

PRs and issues are welcome. If you're helping organize the codex or want to add new features, please keep it modular and lore-safe.
📝 License

Licensed under MIT or custom license (see LICENSE file).
