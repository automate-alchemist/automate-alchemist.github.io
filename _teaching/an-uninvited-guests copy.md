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
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.hero {
    background: linear-gradient(135deg, #FF9933, #FF5733);
    color: white;
    padding: 4rem 2rem;
    border-radius: 15px;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,15 L85,85 L15,85 Z' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E") repeat;
    opacity: 0.1;
}

.hero h1 {
    font-size: 2.5rem;
    margin: 0;
    font-family: 'Georgia', serif;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.timeline {
    position: relative;
    padding: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #e0e0e0;
}

.timeline-item {
    margin: 2rem 0;
    position: relative;
    padding: 1rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    width: calc(50% - 30px);
    margin-left: auto;
}

.timeline-item:nth-child(odd) {
    margin-right: auto;
    margin-left: 0;
}

.timeline-item::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: #FF9933;
    border-radius: 50%;
}

.timeline-item:nth-child(odd)::before {
    right: -40px;
}

.timeline-item:nth-child(even)::before {
    left: -40px;
}

.lessons {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 15px;
    margin-top: 3rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.lessons h2 {
    color: #FF5733;
    margin-bottom: 1.5rem;
}

.lessons ul {
    list-style-type: none;
    padding: 0;
}

.lessons li {
    margin: 1rem 0;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.lessons li::before {
    content: '🔍';
    margin-right: 10px;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate {
    animation: fadeIn 0.8s ease-out forwards;
}
</style>

<div class="container">
    <div class="hero animate">
        <h1>An Unexpected Bug Attended Diwali Party</h1>
    </div>

    <div class="timeline">
        <div class="timeline-item animate">
            <h2>The Setup</h2>
            <p>It was a usual evening, and in just a couple of hours, the Diwali party was about to begin. Excitement was in the air, and everyone was looking forward to creating some memorable moments. Some people were dressed in ethnic wear, while others were in casual clothes, but the shared excitement and team spirit were clear.</p>
        </div>

        <div class="timeline-item animate">
            <h2>Incident Reported</h2>
            <p>Just half an hour before finishing up, we got word of a bug in the production environment. Initially, it seemed like a simple issue that could be fixed quickly with a hotfix. But since it was already time for the Diwali party, some people started heading there, while my team gathered in the boardroom, hoping to solve the issue fast.</p>
        </div>

        <div class="timeline-item animate">
            <h2>Debugging Begins</h2>
            <p>With everyone in the room, we started digging into the problem. As time passed, we realized the debugging was getting more complicated. But finding the root cause was the priority before fixing it. The team began pairwise testing, trying out different combinations. After nearly an hour, we finally found the root cause: a small error in variable name declaration.</p>
        </div>

        <div class="timeline-item animate">
            <h2>Deployment Process</h2>
            <p>Once we fixed the issue, it was time to test. Testing is crucial when deploying to production, so we tested on the test environment first, then moved it to staging. After a quick sanity check on staging, we got the sign-off for production. This whole process took around 5 hours, and by the time we deployed the hotfix on production, it was already 10:15 p.m.</p>
        </div>
    </div>

    <div class="lessons animate">
        <h2>Lessons Learned</h2>
        <ul>
            <li><strong>Every bug teaches a lesson:</strong> Some team members missed the Diwali party, but we didn't want to miss the opportunity to learn from this bug to prevent similar issues in the future.</li>
            <li><strong>Choose the smartest testing approach:</strong> Often, time is limited, so selecting a testing method that ensures quality within tight schedules is crucial.</li>
            <li><strong>The value of pairwise testing:</strong> Pairwise testing is especially helpful when a module has multiple functions and options.</li>
            <li><strong>Focus on key combinations:</strong> Instead of testing every possible combination, pairwise testing allows us to focus on the most important ones.</li>
            <li><strong>Catch hidden bugs more efficiently:</strong> By testing these prioritized combinations, we can find hidden bugs faster, even with limited time.</li>
            <li><strong>Teamwork is essential:</strong> Social gatherings are meaningful, but when the whole team is working together on something critical, stepping up and doing our part makes a big difference.</li>
        </ul>
    </div>
</div>