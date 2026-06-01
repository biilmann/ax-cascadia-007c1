---
theme: seriph
title: AX, Agent Experience
info: |
  ## AX, Agent Experience
  Building products for agents

  Matt Biilmann · Netlify · CascadiaJS · 2026
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
<div class="absolute inset-0 -z-10 opacity-30" style="background: radial-gradient(circle at 20% 30%, rgba(0,173,181,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(78,205,196,0.3), transparent 50%);" />

<div class="flex flex-col items-center justify-center h-full text-center">
  <img src="/img/s01_1.png" class="!h-12 !mb-10 invert opacity-90" alt="Netlify" />
  <div class="mb-4 text-[#4ecdc4] uppercase tracking-[0.4em] text-sm">CascadiaJS</div>
  <h1 class="!text-7xl !font-light !leading-tight !mb-4 bg-gradient-to-r from-white via-[#4ecdc4] to-white bg-clip-text text-transparent">
    AX, Agent Experience
  </h1>
  <p class="!text-2xl !opacity-90 !font-light !mb-6">Building products for agents</p>
  <div class="w-24 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent my-8" />
  <p class="!text-xl !opacity-80 !font-light">Matt Biilmann · 2026</p>
</div>

<div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-50 animate-pulse">
  press <kbd class="px-2 py-1 bg-white/10 rounded">space</kbd> to begin
</div>

<!-- 10 years, front-end pseudo. Welcome. -->

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

---
title: The Web
layout: center
class: text-center
transition: fade
---

<div class="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a1628] via-[#001628] to-[#001a1f]" />

<svg class="theweb-net absolute inset-0 -z-10 w-full h-full" viewBox="0 0 980 552" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <g class="theweb-links" stroke="#4ecdc4" stroke-width="1" fill="none">
    <line x1="120" y1="110" x2="320" y2="80" />
    <line x1="320" y1="80" x2="500" y2="180" />
    <line x1="500" y1="180" x2="700" y2="110" />
    <line x1="700" y1="110" x2="860" y2="220" />
    <line x1="120" y1="110" x2="220" y2="300" />
    <line x1="220" y1="300" x2="420" y2="360" />
    <line x1="420" y1="360" x2="500" y2="180" />
    <line x1="420" y1="360" x2="640" y2="420" />
    <line x1="640" y1="420" x2="700" y2="110" />
    <line x1="640" y1="420" x2="840" y2="470" />
    <line x1="220" y1="300" x2="160" y2="490" />
    <line x1="160" y1="490" x2="420" y2="360" />
    <line x1="500" y1="180" x2="860" y2="220" />
    <line x1="840" y1="470" x2="860" y2="220" />
  </g>
  <g class="theweb-nodes" fill="#4ecdc4">
    <circle cx="120" cy="110" r="4" style="--d:0s" />
    <circle cx="320" cy="80" r="3" style="--d:1.1s" />
    <circle cx="500" cy="180" r="5" style="--d:0.4s" />
    <circle cx="700" cy="110" r="4" style="--d:1.7s" />
    <circle cx="860" cy="220" r="3" style="--d:0.9s" />
    <circle cx="220" cy="300" r="4" style="--d:2.2s" />
    <circle cx="420" cy="360" r="5" style="--d:0.2s" />
    <circle cx="640" cy="420" r="4" style="--d:1.4s" />
    <circle cx="160" cy="490" r="3" style="--d:2.6s" />
    <circle cx="840" cy="470" r="4" style="--d:0.7s" />
  </g>
</svg>

<div class="relative z-10">
  <h1 class="!text-7xl !font-light !leading-tight bg-gradient-to-r from-white via-[#4ecdc4] to-white bg-clip-text text-transparent">
    The Web
  </h1>
</div>

<style>
.theweb-net { opacity: 0.55; animation: theweb-drift 18s ease-in-out infinite alternate; }
.theweb-links line { stroke-opacity: 0.18; animation: theweb-pulse 6s ease-in-out infinite; }
.theweb-nodes circle {
  filter: drop-shadow(0 0 6px rgba(78, 205, 196, 0.7));
  transform-box: fill-box;
  transform-origin: center;
  animation: theweb-node 4.5s ease-in-out infinite;
  animation-delay: var(--d, 0s);
}
@keyframes theweb-drift {
  from { transform: translate3d(-1.5%, -1%, 0) scale(1.02); }
  to   { transform: translate3d(1.5%, 1%, 0) scale(1.06); }
}
@keyframes theweb-pulse {
  0%, 100% { stroke-opacity: 0.10; }
  50%      { stroke-opacity: 0.30; }
}
@keyframes theweb-node {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%      { opacity: 1; transform: scale(1.35); }
}
</style>

---
title: CascadiaJS
layout: center
class: text-center
transition: fade
---

<video class="absolute inset-0 -z-20 w-full h-full object-cover" autoplay muted loop playsinline>
  <source src="/img/video/cascadia-sizzle.mp4" type="video/mp4" />
</video>
<div class="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a1628]/70 via-[#04141f]/60 to-[#0a1628]/85" />
<div class="absolute inset-0 -z-10 opacity-40" style="background: radial-gradient(circle at 70% 18%, rgba(78,205,196,0.25), transparent 55%), radial-gradient(circle at 20% 30%, rgba(0,173,181,0.2), transparent 50%);" />

<div class="relative z-10 flex flex-col items-center justify-center">
  <div class="!text-sm !font-light tracking-[0.4em] uppercase text-[#4ecdc4] mb-5">Seattle · June 1–2, 2026</div>
  <h1 class="!text-8xl !font-light !leading-none">
    Cascadia<span class="font-semibold bg-gradient-to-r from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent">JS</span>
  </h1>
  <div class="w-28 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent my-7" />
  <p class="!text-xl !opacity-80 !font-light">A JavaScript conference for the Pacific Northwest</p>
</div>

---
title: Flying to Seattle
layout: image
image: /img/flight_1.jpg
backgroundSize: cover
class: text-white
transition: fade
---

<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

<div class="absolute bottom-12 left-12 z-10 text-left text-white">
  <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-2">San Francisco → Seattle</div>
  <div class="text-5xl font-light">Flying to CascadiaJS</div>
</div>

---
title: Rivian, in the snow
layout: image
image: /img/s04_1.jpg
backgroundSize: cover
class: text-white
---

<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
<div class="absolute bottom-12 left-12 z-10">
  <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-2">A car you drive</div>
  <div class="text-5xl font-light">Drivers and Agents</div>
</div>

---
title: Hands-Free
layout: image-right
image: /img/s05_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-8">
  <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-3">Driver-Assist</div>
  <h2 class="!text-5xl !font-extralight !mb-6">
    AI <span class="bg-gradient-to-r from-[#4ecdc4] to-[#00adb5] bg-clip-text text-transparent font-medium">Assistance</span>
  </h2>
  <p class="text-xl opacity-70 font-light">
    Lets us do <em class="text-[#4ecdc4] not-italic">much more</em>.
  </p>
</div>

---
title: Robotaxi in San Francisco
layout: image
image: /img/s07_1.jpg
backgroundSize: cover
---

<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
<div class="absolute bottom-12 left-12 z-10 text-white">
  <div class="text-xs uppercase tracking-[0.3em] text-[#feca57] mb-2">No driver</div>
  <div class="text-5xl font-light">Autonomous Agents</div>
</div>

---
title: AI Autonomy
layout: center
transition: slide-up
---

<div class="text-center">
  <div class="text-7xl font-extralight tracking-tight mb-4">
    <span class="opacity-40">AI</span>
    <span class="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">Autonomy</span>
  </div>
  <div class="text-2xl opacity-70 font-light">Lets us rethink what we do</div>
  <div v-click class="mt-12 text-sm opacity-50 italic max-w-xl mx-auto">
    Rethink the car. Rethink the road. Rethink the city.<br/>
    The whole stack changes when the driver is no longer human.
  </div>
</div>

---
title: Copilot in the IDE
layout: image-right
image: /img/s10_1.jpg
backgroundSize: cover
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-3">Cruise control for code</div>
  <h2 class="!text-4xl !font-light !mb-4">Copilot in the IDE</h2>
  <p class="opacity-70 leading-relaxed">
    The developer types. The tool finishes the line.
  </p>
</div>

---
title: Build with an AI agent
layout: image-right
image: /img/s12_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-3">AI Assistance</div>
  <h2 class="!text-4xl !font-light !mb-4">Build with an<br/>AI agent</h2>
  <p class="opacity-70">
    Describe your idea. The agent codes and configures for you.
  </p>
</div>

---
title: 'AI Assistance: Lets us do much more'
layout: default
---

# AI Assistance: Lets us do much more

<div class="grid grid-cols-2 gap-3 mt-6">
  <img src="/img/s14_1.png" class="rounded-xl border border-white/10" />
  <img src="/img/s15_1.png" class="rounded-xl border border-white/10" />
</div>

<div class="mt-6 text-center text-sm opacity-60">
  Fundamentally shifts the <em class="text-[#4ecdc4] not-italic font-medium">build</em> vs <em class="text-[#feca57] not-italic font-medium">buy</em> equation.
</div>

---
title: The autonomy moment
layout: image-right
image: /img/s23_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#feca57] mb-3">From assistance → autonomy</div>
  <h2 class="!text-3xl !font-light !mb-4">"I barely opened an IDE the last two weeks."</h2>
  <p class="opacity-70 text-sm">
    Even as he pushed lots of code.<br/>
    Gergely Orosz, CLI + web + phone (!!) to prompt code.
  </p>
</div>

---
title: Autonomous Coding Agents
layout: image
image: /img/openclaw.png
backgroundSize: cover
---

<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
<div class="absolute bottom-12 left-12 z-10 text-white">
  <div class="text-xs uppercase tracking-[0.3em] text-[#feca57] mb-2">openclaw.ai</div>
  <div class="text-5xl font-light">Autonomous Coding Agents</div>
</div>

---
title: My Autonomous Agent
layout: image
image: /img/clawbot.jpg
backgroundSize: cover
---

<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
<div class="absolute bottom-12 left-12 z-10 text-white">
  <div class="text-xs uppercase tracking-[0.3em] text-[#feca57] mb-2">In the wild</div>
  <div class="text-5xl font-light">My Autonomous Agent</div>
</div>

---
title: Autonomous Agents
layout: default
---

# Autonomous Agents

<div class="grid grid-cols-2 gap-4 mt-6">
  <div>
    <div class="text-xs uppercase tracking-[0.3em] text-[#a78bfa] mb-2">Lead Researcher</div>
    <img src="/img/s20_1.png" class="rounded-xl border border-white/10" />
  </div>
  <div>
    <div class="text-xs uppercase tracking-[0.3em] text-[#a78bfa] mb-2">Agent Runs</div>
    <img src="/img/s21_1.png" class="rounded-xl border border-white/10" />
  </div>
</div>

<div class="mt-6 text-center text-base leading-snug max-w-3xl mx-auto opacity-90">
  Autonomous cars make us rethink our <em class="text-[#4ecdc4] not-italic font-medium">cities</em>;<br/>
  autonomous agents make us rethink our <em class="text-[#feca57] not-italic font-medium">platforms</em>.
</div>

---
title: 3 Billion Builders
layout: default
---

# 3 Billion Builders

<div class="text-base opacity-80 mb-6">
  Software becomes <em class="text-[#4ecdc4] not-italic font-medium">read / write</em> for everyone.
</div>

<div class="flex justify-center">
  <img src="/img/s22_1.png" class="rounded-xl bg-white p-2 max-w-3xl" />
</div>

<!-- TAM for devtools. -->

---
title: AX — Agent Experience
layout: center
class: text-center
---

<div class="text-xs uppercase tracking-[0.4em] text-[#4ecdc4] mb-6">Chapter II</div>

<div class="text-7xl font-extralight tracking-tight">
  AX
</div>

<div class="text-3xl font-light opacity-80 mt-2 mb-12">Agent Experience</div>

<div class="space-y-2 max-w-2xl mx-auto">
  <div class="text-lg"><span class="text-[#4ecdc4] font-medium">Today:</span> AX is critical for infra and dev tools</div>
  <div class="text-lg"><span class="text-[#feca57] font-medium">Tomorrow:</span> your products won't succeed without it</div>
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
title: Introducing AX
layout: image-right
image: /img/s29_1.png
backgroundSize: contain
---

<div class="flex flex-col h-full justify-center pr-4">
  <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-3">biilmann.blog · Jan 28, 2025</div>
  <h2 class="!text-3xl !font-light !mb-4">Introducing AX:<br/>Why Agent Experience Matters</h2>
  <p class="opacity-70 text-sm leading-relaxed">
    Computers are no longer just deterministic machines that execute the transactions we ask them to do or schedule. They are becoming agents.
  </p>
</div>

---
title: AX — Defined
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center h-full max-w-4xl mx-auto">
  <div class="text-xs uppercase tracking-[0.4em] text-[#4ecdc4] mb-8">Agent Experience</div>
  <blockquote class="!text-4xl !font-extralight !leading-snug italic">
    "The holistic experience AI agents will have as the
    <span class="text-[#4ecdc4] not-italic font-light">user of a product or platform</span>."
  </blockquote>
  <div class="flex items-center gap-3 mt-12">
    <img src="/img/s30_1.jpg" class="w-10 h-10 rounded-full border border-[#4ecdc4]/40 flex-shrink-0" />
    <div class="text-left">
      <div class="text-sm opacity-80">Matt Biilmann</div>
      <div class="text-xs opacity-50">CEO, Netlify</div>
    </div>
  </div>
</div>

---
title: Traction — The industry is converging on AX
layout: center
class: text-center
---

<div class="text-xs uppercase tracking-[0.4em] text-[#4ecdc4] mb-1">Traction</div>
<h2 class="!text-3xl !font-extralight !mb-5">
  The industry is converging on
  <span class="bg-gradient-to-r from-[#4ecdc4] to-[#feca57] bg-clip-text text-transparent font-medium">AX</span>
</h2>

<div class="columns-3 gap-3 max-w-5xl mx-auto text-left [&>*]:mb-3">

  <div class="break-inside-avoid rounded-xl border border-[#4ecdc4]/30 bg-[#4ecdc4]/10 p-4 rotate-1">
    <div class="text-lg font-light leading-snug italic opacity-90 mb-3">
      "The future will be driven by
      <span class="text-[#4ecdc4] not-italic">AX</span>."
    </div>
    <div class="flex items-center gap-2">
      <img src="/img/s31_2.jpg" class="w-8 h-8 rounded-full border border-[#4ecdc4]/40 flex-shrink-0" />
      <div>
        <div class="text-xs opacity-80">Michael Grinich</div>
        <div class="text-[10px] opacity-50">CEO, WorkOS</div>
      </div>
    </div>
  </div>

  <div class="break-inside-avoid rounded-xl border border-white/10 bg-white/5 p-4 rotate-1">
    <div class="text-sm font-light leading-snug italic opacity-90 mb-3">
      "The most profound shift I've observed in eleven years —
      <span class="text-[#4ecdc4] not-italic">the evolution from UX to AX</span>."
    </div>
    <div class="flex items-center gap-2">
      <img src="/img/s32_1.jpg" class="w-8 h-8 rounded-full border border-[#4ecdc4]/40 flex-shrink-0" />
      <div>
        <div class="text-xs opacity-80">John Maeda</div>
        <div class="text-[10px] opacity-50">VP Eng, AI Platform — Microsoft</div>
      </div>
    </div>
  </div>

  <div class="break-inside-avoid rounded-xl border border-white/10 bg-white/5 p-4 -rotate-1">
    <div class="text-sm font-light leading-snug italic opacity-90 mb-3">
      "You can't have great
      <span class="text-[#4ecdc4] not-italic">DX</span>
      if you don't have great
      <span class="text-[#feca57] not-italic">AX</span>."
    </div>
    <div class="flex items-center gap-2">
      <img src="/img/s33_2.jpg" class="w-8 h-8 rounded-full border border-[#4ecdc4]/40 flex-shrink-0" />
      <div>
        <div class="text-xs opacity-80">Dharmesh Shah</div>
        <div class="text-[10px] opacity-50">CTO, HubSpot</div>
      </div>
    </div>
  </div>

  <div class="break-inside-avoid rounded-xl border border-white/10 overflow-hidden rotate-1">
    <img src="/img/tobin-south-tweet.png" class="w-full" />
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
title: Closing — The Road Ahead
layout: image
image: /img/s80_1.jpg
backgroundSize: cover
---

<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
<div class="absolute bottom-12 left-12 z-10 text-white">
  <div class="text-xs uppercase tracking-[0.3em] text-[#4ecdc4] mb-2">The road ahead</div>
  <div class="text-4xl font-light max-w-xl">As agents become autonomous and our whole team become builders, we need to reshape every part of our developer platforms</div>
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
title: Thank you
layout: center
class: text-center
---

<div class="flex flex-col h-full items-center justify-center gap-8">
  <img src="/img/cascadia-conference-thank-you.jpg" class="max-h-[60vh] rounded-2xl shadow-2xl object-contain" />
  <div class="text-7xl font-extralight tracking-tight">Thank you</div>
</div>
