---
title: "An Uninvited Guest in the Diwali Party"
collection: testing-musings
type: "Pairwise Testing"
permalink: /testing-musings/an-unexpected-bug
venue: "Bug"
date: 2024-10-10
location: "City"
---

<style>
:root {
    --primary: #FF6F61; /* Bright coral */
    --secondary: #FF9A85; /* Soft peach */
    --text: #2D3436; /* Dark gray */
    --bg: #FAFBFC; /* Light background */
    --accent: #FFD700; /* Gold */
}

.story-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    background: var(--bg);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* Hero Section */
.hero {
    position: relative;
    padding: 4rem 2rem;
    margin: -2rem -2rem 3rem;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.hero-title {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.hero-meta {
    font-size: 1rem;
}

/* Content Sections */
.story-section {
    background: white;
    padding: 2.5rem;
    margin-bottom: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.section-title {
    font-size: 2rem;
    color: var(--primary);
}

.section-content {
    color: var(--text);
}

/* Lessons Section */
.lessons-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.lesson-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.lesson-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

/* Decorative Elements */
.deco-circle {
    position: absolute;
    border-radius:50%;
}

.deco-1 {
    width:100px; 
}

.deco-2 {
     width:150px; 
}

/* Media Queries */
@media (max-width:768px) {
     .hero-title { 
         font-size:2.5rem; 
     }
}

</style>

<article class="story-container">
    <header class="hero">
        <div class="hero-meta">{{ page.type }} • {{ page.venue }} • {{ page.date | date: "%Y" }}</div>
        <h1 class="hero-title">{{ page.title }}</h1>
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>
    </header>

    <section class="story-section">
        <div class="section-number">1</div>
        <p class="section-content">
            It was a usual evening, and in just a couple of hours, the Diwali party was about to begin. Excitement was in the air, and everyone was looking forward to creating some memorable moments. Some people were dressed in ethnic wear, while others were in casual clothes, but the shared excitement and team spirit were clear. Before the party, everyone was trying to wrap up their work to enjoy the evening stress-free. But, as we all know, no software is perfect—sometimes, it's all about the timing when a bug shows up.
        </p>
    </section>

    <section class="story-section">
        <div class="section-number">2</div>
        <h2 class="section-title">Incident Reported</h2>
        <p class="section-content">
            Just half an hour before finishing up, we got word of a bug in the production environment. Initially, it seemed like a simple issue that could be fixed quickly with a hotfix. But since it was already time for the Diwali party, some people started heading there, while my team gathered in the boardroom, hoping to solve the issue fast. Within 10 minutes, everyone was there—front-end, back-end, QA, and PM.
        </p>
    </section>

    <section class="story-section">
        <div class="section-number">3</div>
        <h2 class="section-title">Debugging Begins</h2>
        <p class="section-content">
            With everyone in the room, we started digging into the problem. As time passed, we realized the debugging was getting more complicated. But finding the root cause was the priority before fixing it. The team began pairwise testing, trying out different combinations. After nearly an hour, we finally found the root cause: a small error in variable name declaration. Even though it seemed like a minor issue, every production bug is critical, so fixing it was our top priority.
        </p>
    </section>

    <section class="story-section">
        <div class="section-number">4</div>
        <h2 class="section-title">Deployment Process</h2>
        <p class="section-content">
            Once we fixed the issue, it was time to test. Testing is crucial when deploying to production, so we tested on the test environment first, then moved it to staging. After a quick sanity check on staging, we got the sign-off for production. This whole process took around 5 hours, and by the time we deployed the hotfix on production, it was already 10:15 p.m., making us late to the party.
        </p>
    </section>

    <section class="lessons-container">
        <div class="lesson-card">
            <h3 class="lesson-title">Every bug teaches a lesson</h3>
            <p class="lesson-content">Some team members missed the Diwali party, but we didn't want to miss the opportunity to learn from this bug to prevent similar issues in the future.</p>
        </div>
        
        <div class="lesson-card">
            <h3 class="lesson-title">Choose the smartest testing approach</h3>
            <p class="lesson-content">Often, time is limited, so selecting a testing method that ensures quality within tight schedules is crucial.</p>
        </div>
        
        <div class="lesson-card">
            <h3 class="lesson-title">The value of pairwise testing</h3>
            <p class="lesson-content">Pairwise testing is especially helpful when a module has multiple functions and options. Testing every single option against all others can be very time-consuming.</p>
        </div>
        
        <div class="lesson-card">
            <h3 class="lesson-title">Teamwork is essential</h3>
            <p class="lesson-content">Social gatherings are meaningful, but when the whole team is working together on something critical, stepping up and doing our part makes a big difference.</p>
        </div>
    </section>
</article>