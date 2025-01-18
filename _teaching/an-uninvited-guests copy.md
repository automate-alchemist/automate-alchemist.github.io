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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Lora:wght@400;500;600&display=swap');

.blog-container {
    max-width: 900px;
    margin: 2rem auto;
    font-family: 'Poppins', sans-serif;
    color: #2d3436;
}

.hero-section {
    background: linear-gradient(135deg, #ff9f43, #ff6b6b);
    padding: 4rem 2rem;
    border-radius: 20px;
    text-align: center;
    margin-bottom: 3rem;
    color: white;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🪲</text></svg>') no-repeat center;
    opacity: 0.1;
    transform: rotate(-15deg);
}

.hero-title {
    font-size: 2.8em;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.content-section {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
}

.section-title {
    color: #2d3436;
    font-size: 1.8em;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 1rem;
    border-left: 4px solid #ff9f43;
}

.section-content {
    font-size: 1.1em;
    line-height: 1.8;
    color: #636e72;
}

.lessons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.lesson-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid #ff9f43;
    transition: transform 0.3s ease;
}

.lesson-card:hover {
    transform: translateY(-5px);
}

.lesson-title {
    font-weight: 600;
    color: #2d3436;
    margin-bottom: 0.5rem;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
}
</style>

<div class="blog-container">
    <div class="hero-section animate-fade-in">
        <h1 class="hero-title">An Unexpected Bug Attended Diwali Party</h1>
        <p style="font-size: 1.2em; opacity: 0.9;">A tale of debugging during festivities</p>
    </div>

    <div class="content-section animate-fade-in">
        <p class="section-content">
            It was a usual evening, and in just a couple of hours, the Diwali party was about to begin. Excitement was in the air, and everyone was looking forward to creating some memorable moments. Some people were dressed in ethnic wear, while others were in casual clothes, but the shared excitement and team spirit were clear. Before the party, everyone was trying to wrap up their work to enjoy the evening stress-free. But, as we all know, no software is perfect—sometimes, it's all about the timing when a bug shows up.
        </p>
    </div>

    <div class="content-section animate-fade-in">
        <h2 class="section-title">Incident Reported</h2>
        <p class="section-content">
            Just half an hour before finishing up, we got word of a bug in the production environment. Initially, it seemed like a simple issue that could be fixed quickly with a hotfix. But since it was already time for the Diwali party, some people started heading there, while my team gathered in the boardroom, hoping to solve the issue fast. Within 10 minutes, everyone was there—front-end, back-end, QA, and PM.
        </p>
    </div>

    <div class="content-section animate-fade-in">
        <h2 class="section-title">Debugging Begins</h2>
        <p class="section-content">
            With everyone in the room, we started digging into the problem. As time passed, we realized the debugging was getting more complicated. But finding the root cause was the priority before fixing it. The team began pairwise testing, trying out different combinations. After nearly an hour, we finally found the root cause: a small error in variable name declaration. Even though it seemed like a minor issue, every production bug is critical, so fixing it was our top priority.
        </p>
    </div>

    <div class="content-section animate-fade-in">
        <h2 class="section-title">Deployment Process</h2>
        <p class="section-content">
            Once we fixed the issue, it was time to test. Testing is crucial when deploying to production, so we tested on the test environment first, then moved it to staging. After a quick sanity check on staging, we got the sign-off for production. This whole process took around 5 hours, and by the time we deployed the hotfix on production, it was already 10:15 p.m., making us late to the party.
        </p>
    </div>

    <div class="content-section animate-fade-in">
        <h2 class="section-title">Key Takeaways</h2>
        <div class="lessons-grid">
            <div class="lesson-card">
                <h3 class="lesson-title">Every Bug Teaches</h3>
                <p>Some team members missed the party, but we gained valuable insights for preventing future issues.</p>
            </div>
            <div class="lesson-card">
                <h3 class="lesson-title">Smart Testing Approach</h3>
                <p>Choose testing methods that ensure quality within tight schedules.</p>
            </div>
            <div class="lesson-card">
                <h3 class="lesson-title">Pairwise Testing Value</h3>
                <p>Especially helpful when dealing with multiple functions and options.</p>
            </div>
            <div class="lesson-card">
                <h3 class="lesson-title">Key Combinations</h3>
                <p>Focus on important combinations rather than testing everything.</p>
            </div>
            <div class="lesson-card">
                <h3 class="lesson-title">Efficient Bug Detection</h3>
                <p>Find hidden bugs faster with prioritized combination testing.</p>
            </div>
            <div class="lesson-card">
                <h3 class="lesson-title">Team Collaboration</h3>
                <p>Critical situations highlight the importance of effective teamwork.</p>
            </div>
        </div>
    </div>
</div>
