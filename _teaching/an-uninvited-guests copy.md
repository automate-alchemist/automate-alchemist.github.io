---
title: "When Production Met Puja: A Diwali Debug Story"
collection: testing-musings
type: "Pairwise Testing"
permalink: /testing-musings/an-unexpected-bug
venue: "Bug"
date: 2024-10-10
location: "City"
---

<style>
.blog-container {
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.7;
    color: #2d3748;
}

.blog-header {
    margin: 2rem 0 4rem;
}

.blog-title {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1a202c;
}

.blog-meta {
    font-size: 0.95rem;
    color: #718096;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.reading-time::before {
    content: "•";
    margin-right: 1rem;
}

.featured-image {
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 12px;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
}

.blog-content {
    font-size: 1.1rem;
}

.blog-content h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 3rem 0 1.5rem;
    color: #1a202c;
}

.blog-content p {
    margin-bottom: 1.5rem;
}

.highlight-box {
    background: #f7fafc;
    border-left: 4px solid #4a5568;
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 0 8px 8px 0;
}

.lessons-grid {
    display: grid;
    gap: 1.5rem;
    margin: 2rem 0;
}

.lesson-card {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.lesson-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #2d3748;
}

.tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: #edf2f7;
    color: #4a5568;
    border-radius: 9999px;
    font-size: 0.875rem;
    margin-right: 0.5rem;
}

@media (max-width: 768px) {
    .blog-title {
        font-size: 2rem;
    }
    
    .blog-content {
        font-size: 1rem;
    }
}
</style>

<div class="blog-container">
    <header class="blog-header">
        <div class="tag">Production</div>
        <div class="tag">Bug Fix</div>
        <div class="tag">Team Story</div>
        
        <h1 class="blog-title">When Production Met Puja: A Diwali Debug Story</h1>
        
        <div class="blog-meta">
            <span>Oct 10, 2024</span>
            <span class="reading-time">5 min read</span>
        </div>
    </header>

    <div class="featured-image">
        🪲 × 🪔
    </div>

    <article class="blog-content">
        <p>
            It was meant to be a celebration—team members in their festive best, the office adorned with lights, and the promise of a memorable Diwali party ahead. But as any seasoned developer knows, production bugs have an uncanny sense of timing.
        </p>

        <div class="highlight-box">
            Just thirty minutes before the scheduled festivities, our monitoring system lit up like a string of Diwali lights—but not in the way we had hoped.
        </div>

        <h2>The Party Crasher Arrives</h2>
        <p>
            The initial report seemed deceptively simple: a minor glitch that surely could be fixed with a quick hotfix. As some team members headed to the party venue, a small group of us—front-end, back-end, QA, and PM—gathered in the boardroom, optimistically thinking we'd join the celebrations shortly.
        </p>

        <h2>Debug Mode: Activated</h2>
        <p>
            As we dove deeper, the complexity of the issue unfolded. The team initiated pairwise testing, methodically working through different combinations. After an hour of focused investigation, we finally discovered the culprit: a seemingly innocent variable name declaration that had slipped through our review process.
        </p>

        <h2>The Deployment Marathon</h2>
        <p>
            With the root cause identified, we moved through our deployment checklist: testing environment, staging, and finally production. By the time we pushed the hotfix live, the clock showed 10:15 PM—the Diwali party was winding down, but our spirits remained high knowing we'd protected our users' experience.
        </p>

        <h2>Key Takeaways</h2>
        <div class="lessons-grid">
            <div class="lesson-card">
                <h3>The Bug as a Teacher</h3>
                <p>While we missed the party, this incident provided valuable insights into our testing processes and helped prevent similar issues in the future.</p>
            </div>

            <div class="lesson-card">
                <h3>Pairwise Testing Power</h3>
                <p>When dealing with multiple functions and options, pairwise testing proved to be our most efficient approach to identifying the issue.</p>
            </div>

            <div class="lesson-card">
                <h3>Team Synergy</h3>
                <p>The incident highlighted how effective we could be when working together, even under pressure and during festive occasions.</p>
            </div>
        </div>
    </article>
</div>