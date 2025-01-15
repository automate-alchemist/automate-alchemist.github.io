---
permalink: /
title: "Welcome To Automate Alchemist"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  body {
    background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
    background-size: 400% 400%;
    animation: background-shift 12s ease infinite;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    color: #333;
    margin: 0;
    padding: 0;
  }

  @keyframes background-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .intro-section {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    padding: 2em;
    margin: 2em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fade-in 2s ease;
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .emoji-float {
    display: inline-block;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  .skill-card, .achievement-item {
    background: white;
    border-radius: 10px;
    padding: 1.5em;
    margin-bottom: 1.5em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    position: relative;
  }

  .skill-card:hover, .achievement-item:hover {
    transform: translateY(-5px);
    background: #f7f9fc;
  }

  .bug-trail::before {
    content: '🐛';
    position: absolute;
    font-size: 1.5em;
    top: -10px;
    right: 20px;
    animation: float 4s ease-in-out infinite;
  }

  h1, h2 {
    text-align: center;
    color: #4b79a1;
  }

  blockquote {
    font-style: italic;
    margin: 1em auto;
    padding: 0.5em 1em;
    background: #eef2f3;
    border-left: 4px solid #4b79a1;
    color: #555;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li::before {
    content: '✨';
    margin-right: 8px;
  }
</style>

<div class="intro-section">
  <h1 class="emoji-float">🧪 Welcome to the Testing Laboratory!</h1>
  
  <p>Hi there! I am <strong>Ujjwal Kumar Singh</strong>, your friendly neighborhood <span class="emoji-float">🔍</span> Software Alchemist, <span class="emoji-float">✨</span> turning bugs into gold since 2020!</p>
  
  <blockquote>
    "In the realm of quality, every test case is a spell, and every bug fix is a successful transmutation."
  </blockquote>
</div>

<div class="skill-card bug-trail">
  <h2>🔮 The Alchemist's Arsenal</h2>
  <ul>
    <li><strong>Potion of API Testing:</strong> Master brewer of <em>Rest Assured</em> with BDD, crafting robust test scripts that make even the most complex APIs spill their secrets.</li>
    <li><strong>Automation Elixir:</strong> A powerful blend of <em>Selenium</em> & <em>Python</em>, transforming manual chaos into automated harmony.</li>
    <li><strong>Tools of the Trade:</strong> <em>Postman</em> for API reconnaissance, <em>JIRA</em> for quest tracking, <em>Git</em> for spell versioning, and <em>Swagger</em> for API documentation divination.</li>
  </ul>
</div>

<div class="skill-card">
  <h2>📜 Scrolls of Certification</h2>
  <ul>
    <li>🎓 <strong>ISTQB Certified Wizard</strong> (Summoned July 2023)</li>
    <li>🌐 <strong>Accessibility Specialist (Wix)</strong> (Mastered November 2024)</li>
  </ul>
</div>

<div class="achievement-item">
  <h2>🏆 Tales of Triumph</h2>
  <ul>
    <li>👑 Crowned <strong>"QA Master"</strong> at Copper Mobile - For turning lead bugs into gold features.</li>
    <li>⚔️ Bearer of the <strong>"Call Of Duty" award</strong> - For ventures beyond the testing realm.</li>
    <li>🏅 <strong>Bugathon Champion</strong> at Studio Graphene - Most bugs captured in a single moon cycle.</li>
  </ul>
</div>

<div class="skill-card">
  <h2>🌟 Community Enchantments</h2>
  <ul>
    <li>🎓 Sharing ancient testing wisdom through the <strong>Ministry of Testing</strong> scrolls.</li>
    <li>📺 Crafting educational potions on <strong>YouTube</strong> for aspiring test alchemists.</li>
    <li>✍️ Documenting testing spells and incantations on <strong>Medium</strong>.</li>
  </ul>
</div>

<div class="skill-card">
  <h2>🌍 Open Source Expeditions</h2>
  <p>Currently brewing improvements in various magical repositories, enhancing test coverage, and sharing quality spells with fellow alchemists worldwide.</p>
</div>
