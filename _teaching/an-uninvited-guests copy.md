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
.diwali-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    background: #fcfcfc;
}

.festival-header {
    position: relative;
    padding: 3rem 2rem;
    text-align: center;
    background: #1a1a1a;
    border-radius: 20px;
    margin-bottom: 4rem;
    overflow: hidden;
}

/* Diya animation */
.festival-header::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: 
        radial-gradient(circle at 20% 50%, #ffd700 1px, transparent 3px),
        radial-gradient(circle at 40% 70%, #ffd700 1px, transparent 3px),
        radial-gradient(circle at 60% 30%, #ffd700 1px, transparent 3px),
        radial-gradient(circle at 80% 60%, #ffd700 1px, transparent 3px);
    animation: sparkle 2s infinite;
}

@keyframes sparkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

.festival-header h1 {
    color: #FFA500;
    font-size: 2.5rem;
    position: relative;
    text-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
    margin: 0;
}

.rangoli-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 3rem 0;
}

.rangoli-card {
    position: relative;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    transition: transform 0.3s;
}

.rangoli-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #FF9933, #FF3366, #9933FF);
    border-radius: 15px 15px 0 0;
}

.rangoli-card:hover {
    transform: translateY(-5px);
}

.diya-lessons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    border-radius: 20px;
    margin-top: 3rem;
}

.lesson-diya {
    background: rgba(255, 255, 255, 0.95);
    padding: 1.5rem;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
}

.lesson-diya::after {
    content: '🪔';
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1.5rem;
    opacity: 0.2;
}

.bug-journey {
    position: relative;
    padding: 2rem;
    margin: 3rem 0;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.journey-steps {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    position: relative;
}

.journey-steps::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #FF9933, #FF3366);
    transform: translateY(-50%);
    z-index: 0;
}

.step {
    position: relative;
    background: white;
    padding: 1rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border: 2px solid #FF9933;
}

.story-content {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
}

.quote-box {
    background: #f8f9fa;
    padding: 2rem;
    border-left: 5px solid #FF9933;
    margin: 2rem 0;
    font-style: italic;
}

@media (max-width: 768px) {
    .rangoli-section {
        grid-template-columns: 1fr;
    }
    
    .journey-steps {
        flex-direction: column;
        gap: 1rem;
    }
    
    .journey-steps::before {
        width: 2px;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }
}
</style>

<div class="diwali-container">
    <div class="festival-header">
        <h1>An Unexpected Bug Attended Diwali Party</h1>
    </div>

    <div class="story-content">
        <div class="quote-box">
            "Sometimes the most memorable moments come from unexpected challenges."
        </div>
        
        <p>It was a usual evening, and in just a couple of hours, the Diwali party was about to begin. Excitement was in the air, and everyone was looking forward to creating some memorable moments.</p>
    </div>

    <div class="rangoli-section">
        <div class="rangoli-card">
            <h2>The Incident</h2>
            <p>Just half an hour before finishing up, we got word of a bug in the production environment. Initially, it seemed like a simple issue that could be fixed quickly with a hotfix.</p>
        </div>

        <div class="rangoli-card">
            <h2>Team Assembly</h2>
            <p>While some headed to the Diwali party, our team gathered in the boardroom. Within 10 minutes, everyone was there—front-end, back-end, QA, and PM.</p>
        </div>
    </div>

    <div class="bug-journey">
        <h2>The Debug Journey</h2>
        <div class="journey-steps">
            <div class="step">1</div>
            <div class="step">2</div>
            <div class="step">3</div>
            <div class="step">4</div>
        </div>
        <p>With everyone in the room, we started digging into the problem. As time passed, we realized the debugging was getting more complicated. After nearly an hour of pairwise testing, we finally found the root cause: a small error in variable name declaration.</p>
    </div>

    <div class="diya-lessons">
        <div class="lesson-diya">
            <h3>Every Bug Teaches</h3>
            <p>Some team members missed the Diwali party, but we gained valuable insights for preventing future issues.</p>
        </div>

        <div class="lesson-diya">
            <h3>Smart Testing Approach</h3>
            <p>Time is often limited, so choosing efficient testing methods is crucial for quality assurance.</p>
        </div>

        <div class="lesson-diya">
            <h3>Power of Pairwise Testing</h3>
            <p>When dealing with multiple functions and options, pairwise testing proves invaluable.</p>
        </div>

        <div class="lesson-diya">
            <h3>Teamwork Triumphs</h3>
            <p>When the team works together on critical issues, we can overcome any challenge.</p>
        </div>
    </div>
</div>