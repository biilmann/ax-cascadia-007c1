---
theme: seriph
title: Building for Humans in the Age of Agents
info: |
  ## Building for Humans in the Age of Agents

  Matt Biilmann · cofounder, Netlify · Render · Atlanta · 2026
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Inter'
  serif: 'Inter'
  mono: 'JetBrains Mono'
colorSchema: dark
canvasWidth: 980
---

<div class="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a1628] via-[#001628] to-[#001a1f]" />
<div class="absolute inset-0 -z-10 opacity-30" style="background: radial-gradient(circle at 20% 30%, rgba(255,209,102,0.35), transparent 50%), radial-gradient(circle at 80% 70%, rgba(78,205,196,0.35), transparent 50%);" />

<div class="flex flex-col items-center justify-center h-full text-center">
  <img src="/img/s01_1.png" class="!h-12 !mb-8 invert opacity-90" alt="Netlify" />
  <div class="mb-4 text-[#4ecdc4] uppercase tracking-[0.4em] text-sm">Render · Atlanta · 2026</div>
  <h1 class="!text-6xl !font-light !leading-tight !mb-4">
    Building for
    <span class="bg-gradient-to-r from-[#ffd166] to-[#ff6b6b] bg-clip-text text-transparent font-medium">Humans</span><br/>
    in the Age of
    <span class="bg-gradient-to-r from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent font-medium">Agents</span>
  </h1>
  <div class="w-24 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent my-7" />
  <p class="!text-xl !opacity-80 !font-light">Matt Biilmann · cofounder, Netlify</p>
</div>

<div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-50 animate-pulse">
  press <kbd class="px-2 py-1 bg-white/10 rounded">space</kbd> to begin
</div>

<!-- Welcome. Two words in that title: humans, and agents. Hold on to both. -->

---
title: Netlify
layout: center
class: text-center
transition: fade
---

<div class="flex flex-col items-center justify-center">
  <div class="!text-2xl !font-light tracking-[0.3em] uppercase opacity-90 bg-gradient-to-r from-white via-[#4ecdc4] to-white bg-clip-text text-transparent">
    Netlify
  </div>
  <div class="w-24 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent my-7" />
  <div class="!text-[4rem] !font-light !leading-tight tracking-wide">
    Turn imagination into
    <span class="font-medium bg-gradient-to-r from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent">reality</span>
  </div>
</div>

<!-- Remember this line. We come back to it at the end. -->

---
title: Introducing AX
layout: image-right
image: /img/s29_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-3">January 2025 · biilmann.blog</div>
  <h2 class="!text-3xl !font-light !mb-4">Introducing AX:<br/>Why Agent Experience Matters</h2>
  <p class="opacity-70 text-sm leading-relaxed">
    Computers are no longer just deterministic machines that execute the transactions we ask them to do or schedule. They are becoming agents.
  </p>
  <p class="text-xs mt-5">
    <a href="https://biilmann.blog/articles/introducing-ax/">biilmann.blog/articles/introducing-ax</a>
  </p>
</div>

---
title: AX — Defined
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center h-full max-w-4xl mx-auto">
  <div class="text-xs uppercase tracking-[0.4em] text-[#4ecdc4] mb-8">Agent Experience</div>
  <blockquote class="!text-3xl !font-extralight !leading-snug italic text-left">
    "We need to start focusing on AX or <span class="text-[#4ecdc4] not-italic font-light">"agent experience"</span> — the holistic experience AI agents will have as the
    <span class="text-[#4ecdc4] not-italic font-light">user of a product or platform</span>."
  </blockquote>
  <div class="flex items-center gap-3 mt-10">
    <img src="/img/s30_1.jpg" class="w-10 h-10 rounded-full border border-[#4ecdc4]/40 flex-shrink-0" />
    <div class="text-left">
      <div class="text-sm opacity-80">Matt Biilmann</div>
      <div class="text-xs opacity-50">Cofounder & CEO, Netlify · January 2025</div>
    </div>
  </div>
</div>

---
title: UX, DX, AX
layout: center
---

<div class="grid grid-cols-3 gap-6 max-w-5xl">

<div v-click class="rounded-2xl border border-white/10 p-6 text-center">
  <div class="text-4xl font-bold text-white mb-2">UX</div>
  <div class="text-xs uppercase tracking-widest opacity-60 mb-4">User Experience</div>
  <div class="text-sm opacity-80 leading-relaxed">Differentiates products from competitors</div>
  <div class="mt-4 text-xs opacity-40">— Don Norman</div>
</div>

<div v-click class="rounded-2xl border border-white/10 p-6 text-center">
  <div class="text-4xl font-bold text-white mb-2">DX</div>
  <div class="text-xs uppercase tracking-widest opacity-60 mb-4">Developer Experience</div>
  <div class="text-sm opacity-80 leading-relaxed">Differentiates platforms from competitors</div>
  <div class="mt-4 text-xs opacity-40">— Jeremiah Lee Cohick</div>
</div>

<div v-click class="rounded-2xl border-2 border-[#4ecdc4]/60 bg-[#4ecdc4]/10 p-6 text-center shadow-2xl shadow-[#4ecdc4]/20">
  <div class="text-4xl font-bold bg-gradient-to-r from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent mb-2">AX</div>
  <div class="text-xs uppercase tracking-widest text-[#4ecdc4] mb-4">Agent Experience</div>
  <div class="text-sm leading-relaxed">Differentiates platforms, products, and digital experiences</div>
  <div class="mt-4 text-xs opacity-40">— Matt Biilmann</div>
</div>

</div>
---
title: How to AX?
layout: center
class: text-center
---

<div class="text-7xl font-extralight tracking-tight mb-4">
  How to <span class="bg-gradient-to-r from-[#4ecdc4] to-[#feca57] bg-clip-text text-transparent font-medium">AX?</span>
</div>

<div v-click class="text-lg opacity-60 mt-6">
  Not a feature. Not a protocol. Not just MCP.
</div>

<!-- Not a feature or a protocol, not MCP. -->

---
title: The Agent Loop — Diagram
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">
  <img src="/img/agent-loop-diagram.png" class="rounded-xl border border-white/10 max-h-[420px]" />
</div>

---
title: The Agent Loop
layout: center
class: text-center
---

<div class="flex items-center justify-center h-full">
  <img src="/img/s38_1.gif" class="rounded-xl border border-white/10 max-h-[420px]" />
</div>

---
title: AX in Practice — preview
layout: default
---

# AX in Practice

<div class="grid grid-cols-2 gap-4 mt-6">

<div v-click class="rounded-xl border border-[#4ecdc4]/30 bg-[#4ecdc4]/5 p-5">
  <div class="text-[#4ecdc4] text-xs uppercase tracking-widest mb-2">01</div>
  <div class="text-2xl font-medium mb-3">Access</div>
  <ul class="space-y-1 text-sm opacity-80 list-none">
    <li>· Can the agent access your product?</li>
    <li>· Does it have the right permissions?</li>
    <li>· Does the human need to be in the loop?</li>
  </ul>
</div>

<div v-click class="rounded-xl border border-[#feca57]/30 bg-[#feca57]/5 p-5">
  <div class="text-[#feca57] text-xs uppercase tracking-widest mb-2">02</div>
  <div class="text-2xl font-medium mb-3">Context</div>
  <ul class="space-y-1 text-sm opacity-80 list-none">
    <li>· Does the LLM know about your product?</li>
    <li>· Does it have the right context to use it?</li>
    <li>· Do your responses build the right context?</li>
  </ul>
</div>

<div v-click class="rounded-xl border border-[#ff6b6b]/30 bg-[#ff6b6b]/5 p-5">
  <div class="text-[#ff6b6b] text-xs uppercase tracking-widest mb-2">03</div>
  <div class="text-2xl font-medium mb-3">Tools</div>
  <ul class="space-y-1 text-sm opacity-80 list-none">
    <li>· Are you building your product for agents?</li>
    <li>· Do you offer the right tools?</li>
    <li>· Can you reduce friction for humans-via-agent?</li>
  </ul>
</div>

<div v-click class="rounded-xl border border-[#a78bfa]/30 bg-[#a78bfa]/5 p-5">
  <div class="text-[#a78bfa] text-xs uppercase tracking-widest mb-2">04</div>
  <div class="text-2xl font-medium mb-3">Orchestration</div>
  <ul class="space-y-1 text-sm opacity-80 list-none">
    <li>· Can users access agents from your product?</li>
    <li>· Are agents integrated into your workflow?</li>
    <li>· Can humans and agents collaborate?</li>
  </ul>
</div>

</div>

---
title: Pillar 01 — Access
layout: section
class: text-center
---

<div class="text-xs uppercase tracking-[0.4em] text-[#4ecdc4] mb-4">Pillar 01</div>
<div class="text-8xl font-extralight">Access</div>

---
title: My Bot Got Banned
layout: image-right
image: /img/s17_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#ff6b6b] mb-3">Side note</div>
  <h2 class="!text-3xl !font-light !mb-4">My bot got banned<br/>for being a bot.</h2>
  <p class="opacity-70 text-sm">
    Risk-isolated test account. Read-only access. Gmail + calendar.<br/>
    Blocked by policy, on day one.
  </p>
  <p class="opacity-50 text-xs italic mt-4">
    The web wasn't built for non-human users. Yet.
  </p>
</div>

---
title: netlify.ai
layout: default
---

# netlify.ai — for humans and for agents

<div class="grid grid-cols-2 gap-4 mt-6">
  <div>
    <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-2">Same URL · human</div>
    <img src="/img/s43_1.png" class="rounded-xl border border-white/10" />
  </div>
  <div>
    <div class="text-xs uppercase tracking-[0.3em] text-[#feca57] mb-2">Same URL · agent</div>
    <img src="/img/s44_1.png" class="rounded-xl border border-white/10" />
  </div>
</div>

<div class="mt-4 text-center text-sm opacity-70">
  One URL. Two responses. The agent gets <code>text/markdown</code> with install commands; the human gets a marketing page.
</div>

---
layout: image
image: /img/slide-31-screenshot.jpg
backgroundSize: contain
---

---
title: Netlify Database
layout: image-right
image: /img/s42_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <h2 class="!text-3xl !font-light !mb-4">Netlify Database</h2>
  <p class="opacity-80 text-sm leading-relaxed">
    Part of moving to a "Batteries included" platform so agents working with Netlify have access to all the primitives they need when building full stack apps. Part of our Agent Experience.
  </p>
</div>

---
title: Agent Auth — Emerging Standards
layout: default
---

<div class="flex flex-col h-full py-2">
  <div class="flex-none">
    <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-2">Access · Agent Auth</div>
    <div class="text-5xl font-light">Emerging Standards</div>
  </div>
  <div class="flex-1 min-h-0 mt-6 flex items-center justify-center">
    <img
      src="/img/agentauth-emerging-standards.png"
      class="max-h-full max-w-full object-contain rounded-xl border border-white/10 shadow-2xl"
    />
  </div>
</div>

---
title: Pillar 02 — Context
layout: section
class: text-center
---

<div class="text-xs uppercase tracking-[0.4em] text-[#feca57] mb-4">Pillar 02</div>
<div class="text-8xl font-extralight">Context</div>

---
title: Docs as context
layout: default
---

# Docs as context

<div class="grid grid-cols-2 gap-4 mt-6">
  <div>
    <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-2">For humans</div>
    <img src="/img/s49_1.png" class="rounded-xl border border-white/10" />
  </div>
  <div>
    <div class="text-xs uppercase tracking-[0.3em] text-[#feca57] mb-2">For agents</div>
    <img src="/img/s50_1.png" class="rounded-xl border border-white/10" />
  </div>
</div>

<div class="mt-6 text-center text-sm opacity-70">
  The Vite docs ship a Markdown variant of every page. Cheaper to read, easier to parse, friendlier to LLM context windows.
</div>

---
title: Markdown over HTML, for agents
layout: image-right
image: /img/s51_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#feca57] mb-3">Reading vs rendering</div>
  <h2 class="!text-3xl !font-light !mb-4">"Add a <code class="!text-[#4ecdc4]">.md</code> link<br/>for the agent."</h2>
  <p class="opacity-70 text-sm">
    A simple HTTP convention: agents asking for <code>text/markdown</code> get the markdown content. No DOM. No noise.
  </p>
  <p class="opacity-50 text-xs italic mt-3">— Sean C Davis, on Netlify Agent Runners</p>
</div>

---
title: MCP — UI for LLMs
layout: image-right
image: /img/s52_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#feca57] mb-3">Model Context Protocol</div>
  <h2 class="!text-4xl !font-extralight !mb-4">
    <span class="bg-gradient-to-r from-[#4ecdc4] to-[#feca57] bg-clip-text text-transparent font-bold">MCP</span>
  </h2>
  <p class="text-2xl opacity-80 font-light mb-3">UI for LLMs.</p>
  <p class="opacity-70 text-sm">
    Focus on <em class="text-[#feca57] not-italic">context</em>: a universal way to expose what your product knows.
  </p>
  <p class="opacity-50 text-xs italic mt-4">
    Context7 — not tools, just docs.
  </p>
</div>

<!-- Context7 - not tools, just docs. -->

---
title: Skills — install once
layout: image-right
image: /img/s53_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#feca57] mb-3">Netlify Skills</div>
  <h2 class="!text-3xl !font-light !mb-4">Install once,<br/>any agent.</h2>
  <p class="opacity-70 text-sm leading-relaxed">
    One install command per agent — Claude Code, Cursor, Codex, Gemini.<br/>
    The skills carry the context the agent needs to use Netlify well.
  </p>
</div>

---
title: API surface vs agent surface
layout: default
---

# API vs MCP — same product, different surfaces

<div class="grid grid-cols-2 gap-12 mt-4 items-start">

<div v-click class="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
  <div class="text-xs uppercase tracking-widest opacity-60 mb-2">For humans</div>
  <div class="text-xl font-light mb-2">Netlify API</div>
  <div class="text-6xl font-extralight bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
    ~100
  </div>
  <div class="text-sm opacity-60 mt-1 mb-3">Endpoints</div>
  <img src="/img/s57_1.png" class="rounded-lg border border-white/10 mt-2" />
</div>

<div v-click class="rounded-2xl border-2 border-[#4ecdc4]/50 bg-[#4ecdc4]/10 p-6 text-center shadow-2xl shadow-[#4ecdc4]/20">
  <div class="text-xs uppercase tracking-widest text-[#4ecdc4] mb-2">For agents</div>
  <div class="text-xl font-light mb-2">Netlify MCP</div>
  <div class="text-6xl font-extralight bg-gradient-to-br from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent">
    5
  </div>
  <div class="text-sm opacity-60 mt-1 mb-3">Tools</div>
  <img src="/img/s58_1.png" class="rounded-lg border border-white/10 mt-2 bg-black" />
</div>

</div>

---
title: Pillar 03 — Tools
layout: section
class: text-center
---

<div class="text-xs uppercase tracking-[0.4em] text-[#ff6b6b] mb-4">Pillar 03</div>
<div class="text-8xl font-extralight">Tools</div>

<!-- Speaking of tools — access, context, tools. -->

---
title: Agents are using your product
layout: default
---

# Agents are using your product

<div class="flex justify-center mt-8">
  <img src="/img/s61_1.png" class="rounded-xl border border-white/10 max-h-96" />
</div>

---
title: Every product has an AX
layout: center
class: text-center
---

<div class="text-5xl font-light leading-snug max-w-3xl">
  Every product has an
  <span class="bg-gradient-to-r from-[#4ecdc4] to-[#feca57] bg-clip-text text-transparent font-medium">Agent Experience</span>.
</div>

<div v-click class="text-3xl font-light opacity-80 mt-6">
  But is it <em class="text-[#ff6b6b]">good?</em>
</div>

---
title: Netlify CLI, great DX
layout: center
class: text-center youtube-slide
---

<h1 class="youtube-slide-title">Netlify CLI, great DX</h1>

<div class="youtube-video-frame youtube-video-frame--native">
  <video class="youtube-video-iframe" autoplay muted loop playsinline>
    <source src="/video/netlify-cli-dx.mp4" type="video/mp4" />
  </video>
</div>

---
title: Netlify CLI, great AX?
layout: center
class: text-center youtube-slide
---

<h1 class="youtube-slide-title">Netlify CLI, great AX?</h1>

<div class="youtube-video-frame youtube-video-frame--native">
  <video class="youtube-video-iframe" autoplay muted loop playsinline>
    <source src="/video/netlify-cli-ax.mp4" type="video/mp4" />
  </video>
</div>

---
title: The Agent Loop
layout: center
class: text-center
---

<div class="flex items-center justify-center h-full">
  <img src="/img/s38_1.gif" class="rounded-xl border border-white/10 max-h-[420px]" />
</div>

---
title: Netlify CLI, still great DX
layout: center
class: text-center youtube-slide
---

<h1 class="youtube-slide-title">Netlify CLI, still great DX</h1>

<div class="youtube-video-frame youtube-video-frame--native">
  <video class="youtube-video-iframe" autoplay muted loop playsinline>
    <source src="/video/netlify-cli-still-dx.mp4" type="video/mp4" />
  </video>
</div>

---
title: Netlify CLI, great AX
layout: center
class: text-center youtube-slide
---

<h1 class="youtube-slide-title">Netlify CLI, great AX</h1>

<div class="youtube-video-frame youtube-video-frame--native">
  <video class="youtube-video-iframe" autoplay muted loop playsinline>
    <source src="/video/netlify-cli-ax2.mp4" type="video/mp4" />
  </video>
</div>

---
title: Pillar 04 — Orchestration
layout: section
class: text-center
---

<div class="text-xs uppercase tracking-[0.4em] text-[#a78bfa] mb-4">Pillar 04</div>
<div class="text-8xl font-extralight">Orchestration</div>

<!-- Speaking of access, context, tools — and now where they all converge. -->

---
title: AI teammates inside Linear
layout: image-right
image: /img/s69_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#a78bfa] mb-3">Linear · Agents</div>
  <h2 class="!text-3xl !font-light !mb-4">Deploy AI teammates<br/>inside Linear.</h2>
  <p class="opacity-70 text-sm">
    Launch agent flows with external agents from apps like Linear, Notion, etc...
  </p>
</div>

---
title: Build with an AI agent — in your workspace
layout: image-right
image: /img/s70_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#a78bfa] mb-3">Netlify Agent Runners</div>
  <h2 class="!text-3xl !font-light !mb-4">Pick your agent.<br/>Pick your task.</h2>
  <p class="opacity-70 text-sm">
    Claude Code · OpenAI Codex · Google Gemini.<br/>
    Same project, same context, your choice of agent.
  </p>
</div>

---
title: AI-native workflows
layout: center
class: text-center
---

<div class="space-y-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#a78bfa]">AI-Native Workflows</div>
  <div class="text-6xl font-extralight">
    Async Agents
  </div>
  <div class="text-2xl opacity-70 font-light mt-4">
    Working <span class="text-[#a78bfa]">autonomously</span>
  </div>
</div>

<div v-click class="mt-12 grid grid-cols-3 gap-3 max-w-3xl mx-auto">
  <div class="rounded-lg border border-white/10 p-3 text-sm">Trigger from your product</div>
  <div class="rounded-lg border border-white/10 p-3 text-sm">Pass context across hops</div>
  <div class="rounded-lg border border-white/10 p-3 text-sm">Sandboxes & environments</div>
</div>

---
title: AX in Practice — recap
layout: default
---

# AX in Practice — recap

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="rounded-xl border border-[#4ecdc4]/30 bg-[#4ecdc4]/5 p-5">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-[#4ecdc4] text-xs uppercase tracking-widest">01</div>
    <div class="text-2xl font-medium">Access</div>
  </div>
  <div class="text-sm opacity-70">Right permissions. Human-in-loop where it matters. Scale to zero.</div>
</div>

<div class="rounded-xl border border-[#feca57]/30 bg-[#feca57]/5 p-5">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-[#feca57] text-xs uppercase tracking-widest">02</div>
    <div class="text-2xl font-medium">Context</div>
  </div>
  <div class="text-sm opacity-70">The LLM knows what your product is. Your responses build context, not noise.</div>
</div>

<div class="rounded-xl border border-[#ff6b6b]/30 bg-[#ff6b6b]/5 p-5">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-[#ff6b6b] text-xs uppercase tracking-widest">03</div>
    <div class="text-2xl font-medium">Tools</div>
  </div>
  <div class="text-sm opacity-70">Built for agents — not retrofitted. Friction reduced for humans-via-agent.</div>
</div>

<div class="rounded-xl border border-[#a78bfa]/30 bg-[#a78bfa]/5 p-5">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-[#a78bfa] text-xs uppercase tracking-widest">04</div>
    <div class="text-2xl font-medium">Orchestration</div>
  </div>
  <div class="text-sm opacity-70">Agents launchable from your product. Humans and agents collaborating in your workflow.</div>
</div>

</div>

---
title: Measuring AX
layout: image-right
image: /img/measuring-ax.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-3">Evals, evals, evals</div>
  <h2 class="!text-3xl !font-light !mb-4">Measuring Agent Experience</h2>
  <p class="opacity-70 text-sm">
    We can't automate humans, but we can automate agent runs.
  </p>
</div>

---
title: AXIS
layout: center
class: text-center
---

<div class="absolute inset-0 -z-10 opacity-40" style="background: radial-gradient(circle at 50% 35%, rgba(78,205,196,0.28), transparent 55%);" />

<div class="flex flex-col items-center justify-center h-full">
  <div class="text-xs uppercase tracking-[0.4em] text-[#4ecdc4] mb-6">Open source · axis.run</div>

  <div class="!text-8xl !font-extralight tracking-[0.15em] bg-gradient-to-r from-white via-[#4ecdc4] to-white bg-clip-text text-transparent">
    AXIS
  </div>

  <div class="w-28 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent my-7" />

  <p class="!text-xl !font-light !opacity-90 max-w-2xl">
    Netlify's open source framework for evaluating Agent Experience.
  </p>

  <p v-click class="!text-2xl !font-light mt-6">
    Think <span class="text-[#feca57]">Lighthouse</span> — but for agent experience.
  </p>

  <div v-click class="flex gap-3 mt-10 text-xs uppercase tracking-widest">
    <div class="rounded-full border border-[#4ecdc4]/40 bg-[#4ecdc4]/10 px-4 py-2 text-[#4ecdc4]">Access</div>
    <div class="rounded-full border border-[#feca57]/40 bg-[#feca57]/10 px-4 py-2 text-[#feca57]">Context</div>
    <div class="rounded-full border border-[#ff6b6b]/40 bg-[#ff6b6b]/10 px-4 py-2 text-[#ff6b6b]">Tools</div>
    <div class="rounded-full border border-[#a78bfa]/40 bg-[#a78bfa]/10 px-4 py-2 text-[#a78bfa]">Orchestration</div>
  </div>
</div>

<!-- axis.run — run it against your own product before you leave Atlanta. -->

---
title: But who is AX for?
layout: center
class: text-center
transition: fade
---

<div class="flex flex-col items-center justify-center h-full">
  <div class="text-xs uppercase tracking-[0.4em] text-[#4ecdc4] mb-8">The question underneath</div>
  <div class="!text-6xl !font-extralight tracking-tight">
    But who is AX
    <span class="bg-gradient-to-r from-[#ffd166] to-[#ff6b6b] bg-clip-text text-transparent font-medium">for?</span>
  </div>
</div>

<!-- We've spent half an hour on how. Now: what for, and for whom. -->

---
title: A world for agents
layout: center
class: text-center
transition: fade
---

<div class="absolute inset-0 -z-10 bg-black" />

<div class="flex flex-col items-center justify-center h-full">
  <div class="text-white/50 text-sm uppercase tracking-[0.35em] mb-10">Are we building the web</div>
  <div class="agentworld-lines text-white font-medium tracking-[-0.04em] leading-[1.05] !text-6xl">
    <div>For agents.</div>
    <div v-click class="opacity-80">To ship agents.</div>
    <div v-click class="opacity-60">Automated by agents.</div>
  </div>
</div>

<style>
.agentworld-lines div { margin-bottom: 0.15em; }
</style>

<!-- Stark. Efficient. And entirely circular — agents, for agents, by agents. -->

---
title: A world for humans
layout: center
class: text-center
transition: fade
---

<div class="absolute inset-0 -z-10" style="background: linear-gradient(140deg, #1a0f2e 0%, #2a1230 45%, #12232e 100%);" />
<div class="absolute inset-0 -z-10 opacity-70" style="background: radial-gradient(circle at 18% 20%, rgba(255,209,102,0.30), transparent 50%), radial-gradient(circle at 82% 30%, rgba(255,107,107,0.28), transparent 50%), radial-gradient(circle at 50% 95%, rgba(78,205,196,0.30), transparent 55%);" />

<div class="flex flex-col items-center justify-center h-full">
  <div class="text-white/70 text-sm uppercase tracking-[0.35em] mb-8">Or a web</div>

  <div class="!text-6xl !font-light !leading-tight bg-gradient-to-r from-[#ffd166] via-[#ff8fa3] to-[#4ecdc4] bg-clip-text text-transparent">
    For humans.
  </div>
  <div v-click class="!text-5xl !font-light !leading-tight mt-3 text-white">
    To connect with humans.
  </div>
  <div v-click class="!text-2xl !font-light mt-8 max-w-3xl opacity-90 leading-relaxed">
    With agents, <span class="text-[#ffd166]">through</span> agents, and in
    <span class="text-[#4ecdc4]">collaboration</span> with agents.
  </div>
</div>

<!-- Same technology. Completely different world. -->

---
title: Bits and Atoms
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center h-full w-full">
  <div class="!text-2xl !font-light opacity-80 mb-2">We live in a world of</div>
  <div class="!text-6xl !font-extralight tracking-tight mb-10">
    <span class="bg-gradient-to-r from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent">Bits</span>
    <span class="opacity-40 mx-2">and</span>
    <span class="bg-gradient-to-r from-[#ffd166] to-[#ff6b6b] bg-clip-text text-transparent">Atoms</span>
  </div>

  <div class="grid grid-cols-2 gap-10 w-full max-w-3xl">
    <div class="rounded-2xl border border-[#ffd166]/25 bg-[#ffd166]/5 p-5 flex flex-col items-center">
      <svg class="ba-atom" viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
        <g fill="none" stroke="#ffd166" stroke-width="1.5" opacity="0.75">
          <ellipse cx="60" cy="60" rx="46" ry="18" />
          <ellipse cx="60" cy="60" rx="46" ry="18" transform="rotate(60 60 60)" />
          <ellipse cx="60" cy="60" rx="46" ry="18" transform="rotate(120 60 60)" />
        </g>
        <circle cx="60" cy="60" r="7" fill="#ff6b6b" />
      </svg>
      <div class="text-xs uppercase tracking-[0.3em] text-[#ffd166] mt-3">Atoms</div>
    </div>
    <div class="rounded-2xl border border-[#4ecdc4]/25 bg-[#4ecdc4]/5 p-5 flex flex-col items-center">
      <div class="ba-bits font-mono text-[#4ecdc4] text-sm leading-[1.35] h-[120px] flex flex-col justify-center">
        <div style="--d:0s">01001000 01110101</div>
        <div style="--d:0.4s">01101101 01100001</div>
        <div style="--d:0.8s">01101110 01110011</div>
        <div style="--d:1.2s">00100000 01100001</div>
        <div style="--d:1.6s">01110010 01100101</div>
      </div>
      <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mt-3">Bits</div>
    </div>
  </div>
</div>

<style>
.ba-atom { animation: ba-spin 24s linear infinite; }
@keyframes ba-spin { to { transform: rotate(360deg); } }
.ba-bits div { animation: ba-flicker 3.2s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes ba-flicker {
  0%, 100% { opacity: 0.25; }
  50%      { opacity: 0.95; }
}
</style>

---
title: Native to atoms
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center h-full w-full">
  <div class="!text-4xl !font-light !leading-snug mb-10 max-w-3xl">
    We are native to the world of
    <span class="bg-gradient-to-r from-[#ffd166] to-[#ff6b6b] bg-clip-text text-transparent font-medium">atoms</span>
  </div>

  <div class="grid grid-cols-2 gap-10 w-full max-w-3xl items-center">
    <div class="rounded-2xl border-2 border-[#ffd166]/50 bg-[#ffd166]/10 p-6 shadow-2xl shadow-[#ffd166]/10">
      <div class="text-5xl mb-3">👋</div>
      <div class="text-xs uppercase tracking-[0.3em] text-[#ffd166]">Atoms</div>
      <div class="text-sm opacity-80 mt-2">Bodies. Rooms. Cities. Weather. Each other.</div>
    </div>
    <div class="rounded-2xl border border-white/10 p-6 opacity-25">
      <div class="text-5xl mb-3 font-mono text-[#4ecdc4]">01</div>
      <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4]">Bits</div>
      <div class="text-sm opacity-80 mt-2">A place we visit through glass.</div>
    </div>
  </div>
</div>

---
title: Agents are native to bits
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center h-full w-full">
  <div class="!text-4xl !font-light !leading-snug mb-10 max-w-3xl">
    Agents are native to the world of
    <span class="bg-gradient-to-r from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent font-medium">bits</span>
  </div>

  <div class="grid grid-cols-2 gap-10 w-full max-w-3xl items-center">
    <div class="rounded-2xl border border-white/10 p-6 opacity-25">
      <div class="text-5xl mb-3">👋</div>
      <div class="text-xs uppercase tracking-[0.3em] text-[#ffd166]">Atoms</div>
      <div class="text-sm opacity-80 mt-2">A place they only ever read about.</div>
    </div>
    <div class="rounded-2xl border-2 border-[#4ecdc4]/50 bg-[#4ecdc4]/10 p-6 shadow-2xl shadow-[#4ecdc4]/10">
      <div class="text-5xl mb-3 font-mono text-[#4ecdc4]">01</div>
      <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4]">Bits</div>
      <div class="text-sm opacity-80 mt-2">APIs. Docs. Tools. Tokens. Each other.</div>
    </div>
  </div>
</div>

<!-- They live where we visit. -->

---
title: Bits run atoms
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center h-full w-full">
  <div class="!text-3xl !font-light !leading-snug mb-8 max-w-3xl">
    But more and more, the world of
    <span class="text-[#4ecdc4]">bits</span>
    runs the world of
    <span class="text-[#ffd166]">atoms</span>
  </div>

  <div class="flex items-center justify-center gap-5 w-full max-w-3xl">
    <div class="flex-1 rounded-2xl border-2 border-[#4ecdc4]/50 bg-[#4ecdc4]/10 p-5">
      <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-2">Bits</div>
      <div class="text-sm opacity-80">Software, models, agents</div>
    </div>
    <svg class="ba-arrow flex-none" width="120" height="26" viewBox="0 0 120 26" aria-hidden="true">
      <line x1="0" y1="13" x2="104" y2="13" stroke="#4ecdc4" stroke-width="2" stroke-dasharray="7 7" />
      <polygon points="104,5 120,13 104,21" fill="#ffd166" />
    </svg>
    <div class="flex-1 rounded-2xl border-2 border-[#ffd166]/50 bg-[#ffd166]/10 p-5">
      <div class="text-xs uppercase tracking-[0.3em] text-[#ffd166] mb-2">Atoms</div>
      <div class="text-sm opacity-80">Grids, logistics, markets, medicine</div>
    </div>
  </div>

  <div v-click class="mt-10 text-base opacity-70 max-w-3xl">
    How we move. How we're paid. How we're treated. How we're informed.
  </div>
</div>

<style>
.ba-arrow line { animation: ba-flow 1.2s linear infinite; }
@keyframes ba-flow { to { stroke-dashoffset: -14; } }
</style>

---
title: For agents, by agents
layout: center
class: text-center
transition: fade
---

<div class="absolute inset-0 -z-10" style="background: linear-gradient(160deg, #0b0b0f 0%, #14060a 55%, #050507 100%);" />

<div class="flex flex-col items-center justify-center h-full">
  <div class="!text-4xl !font-extralight !leading-snug max-w-3xl opacity-90">
    If the digital world becomes
  </div>
  <div class="!text-6xl !font-light !leading-tight mt-4 text-[#ff6b6b]">
    for agents, by agents
  </div>
</div>

---
title: Run by it
layout: center
class: text-center
transition: fade
---

<div class="absolute inset-0 -z-10" style="background: linear-gradient(160deg, #0b0b0f 0%, #14060a 55%, #050507 100%);" />

<div class="flex flex-col items-center justify-center h-full">
  <div class="!text-5xl !font-extralight !leading-snug opacity-90">
    We no longer run a society
  </div>
  <div v-click class="!text-5xl !font-medium !leading-snug mt-6 text-[#ff6b6b]">
    We are run by it
  </div>
</div>

<!-- This is the stake. Not developer convenience. -->

---
title: Every product has to build for agents
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">
  <div class="!text-4xl !font-light !leading-snug max-w-3xl">
    Any digital product has to
    <span class="bg-gradient-to-r from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent font-medium">build for agents</span>
  </div>

  <div class="w-28 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent my-9" />

  <div class="flex items-baseline gap-4 !text-3xl !font-extralight">
    <span class="text-[#4ecdc4] font-medium">AX</span>
    <span class="opacity-60">is what</span>
    <span class="opacity-80">UX</span>
    <span class="opacity-60">and</span>
    <span class="opacity-80">DX</span>
    <span class="opacity-60">was</span>
  </div>
</div>

---
title: Imagination, agency, purpose
layout: center
class: text-center
---

<div class="absolute inset-0 -z-10 opacity-50" style="background: radial-gradient(circle at 25% 25%, rgba(255,209,102,0.22), transparent 55%), radial-gradient(circle at 75% 75%, rgba(78,205,196,0.22), transparent 55%);" />

<div class="flex flex-col items-center justify-center h-full">
  <div class="!text-4xl !font-light !leading-snug max-w-3xl">
    Humans have
    <span class="text-[#ffd166]">imagination</span>,
    <span class="text-[#ff8fa3]">agency</span>
    and
    <span class="text-[#4ecdc4]">purpose</span>.
  </div>

  <div class="w-28 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent my-9" />

  <div class="!text-3xl !font-light !leading-snug max-w-3xl opacity-90">
    Netlify exists to turn
    <span class="text-[#ffd166]">imagination</span>
    into
    <span class="font-medium bg-gradient-to-r from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent">reality</span>.
  </div>
</div>

---
title: Build a better digital world
layout: center
class: text-center
---

<div class="absolute inset-0 -z-10 opacity-60" style="background: radial-gradient(circle at 20% 15%, rgba(255,209,102,0.22), transparent 50%), radial-gradient(circle at 80% 25%, rgba(255,107,107,0.20), transparent 50%), radial-gradient(circle at 50% 100%, rgba(78,205,196,0.26), transparent 55%);" />

<div class="flex flex-col items-center justify-center h-full max-w-4xl mx-auto">
  <div class="!text-2xl !font-light !leading-snug opacity-90">
    Let's give our agents
    <span class="text-[#4ecdc4]">access</span>,
    <span class="text-[#feca57]">context</span>,
    <span class="text-[#ff6b6b]">tools</span>
    and
    <span class="text-[#a78bfa]">orchestration</span>.
  </div>

  <div class="!text-3xl !font-light !leading-snug mt-6">
    But let's do it to create better digital worlds
  </div>

  <div class="w-28 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent my-9" />

  <div class="!text-4xl !font-light !leading-[1.25] whitespace-nowrap">
    For humans <span class="verb-rotator"><span class="verb-track"><span>transacting with</span><span>connecting with</span><span>entertaining</span><span>educating</span><span>empowering</span><span>leading</span><span>transacting with</span></span></span> other humans
  </div>
</div>

<style>
.verb-rotator {
  display: inline-block;
  height: 1.25em;
  line-height: 1.25em;
  overflow: hidden;
  vertical-align: bottom;
}
.verb-track {
  display: flex;
  flex-direction: column;
  animation: verb-roll 12s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.verb-track > span {
  height: 1.25em;
  line-height: 1.25em;
  white-space: nowrap;
  font-weight: 500;
  background: linear-gradient(90deg, #ffd166, #ff8fa3 55%, #4ecdc4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
@keyframes verb-roll {
  0%,     13.00% { transform: translateY(0); }
  16.67%, 29.67% { transform: translateY(-1.25em); }
  33.33%, 46.33% { transform: translateY(-2.5em); }
  50.00%, 63.00% { transform: translateY(-3.75em); }
  66.67%, 79.67% { transform: translateY(-5em); }
  83.33%, 96.33% { transform: translateY(-6.25em); }
  100%           { transform: translateY(-7.5em); }
}
</style>

<!-- Not for agents. Through agents — for each other. -->

---
title: Thank you
layout: center
class: text-center
---

<div class="absolute inset-0 -z-10 opacity-40" style="background: radial-gradient(circle at 30% 30%, rgba(255,209,102,0.25), transparent 55%), radial-gradient(circle at 70% 70%, rgba(78,205,196,0.25), transparent 55%);" />

<div class="flex flex-col h-full items-center justify-center">
  <img src="/img/s01_1.png" class="!h-10 !mb-10 invert opacity-80" alt="Netlify" />

  <div class="!text-7xl !font-extralight tracking-tight bg-gradient-to-r from-white via-[#4ecdc4] to-white bg-clip-text text-transparent">
    Thank you
  </div>

  <div class="w-28 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent my-9" />

  <div class="flex flex-col items-center gap-3 text-lg font-light">
    <a href="https://biilmann.blog">biilmann.blog</a>
    <a href="https://x.com/biilmann">@biilmann</a>
  </div>
</div>
