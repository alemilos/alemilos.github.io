---
title: "Building WizRead: High-Performance Reading App with Electron & SQLite"
date: "2024-03-15"
author: "Alessandro Milos"
tags: ["Electron", "React", "SQLite", "Cloud Architecture"]
summary: "How we scaled WizRead to 1,000+ registered users and 3,000+ downloads with local-first SQLite caching and hybrid cloud sync."
---

# Building WizRead

WizRead is a full-stack desktop application designed to streamline reading and deep research workflows.

## Key Architectural Decisions
- **Local-first SQLite database** for millisecond offline access
- **Cloud synchronization** leveraging Redis caching, MongoDB, and Supabase
- **Cross-platform UI** built on React and Electron
