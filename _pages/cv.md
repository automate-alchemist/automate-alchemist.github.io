---
layout: archive
title: "Work experience"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---
<style>
/* Base Styles */
body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background: linear-gradient(135deg, #f5f7fa, #e8ebf0);
    color: #333;
}

.archive {
    padding-right: 0;
}

.experience-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Gradient Background for Sections */
.section-header {
    text-align: center;
    margin: 4rem 0 2rem;
    position: relative;
}

.section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(135deg, #2196F3, #1976D2);
    padding: 1rem 2rem;
    border-radius: 10px;
    display: inline-block;
    box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
}

/* Timeline Section */
.timeline {
    position: relative;
    padding: 20px 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 25px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #2196F3, #1976D2);
}

.experience-card {
    position: relative;
    margin: 30px 0 30px 55px;
    padding: 25px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid #eaeaea;
    animation: fadeInUp 0.6s ease-in-out;
}

.experience-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.experience-card::before {
    content: '';
    position: absolute;
    left: -42px;
    top: 25px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #2196F3;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
}

.job-title {
    font-size: 1.3em;
    color: #1976D2;
    margin: 0 0 8px 0;
    font-weight: 700;
    line-height: 1.3;
}

.company {
    color: #666;
    font-size: 0.95em;
    margin-bottom: 15px;
    display: block;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

.duties {
    list-style: none;
    padding: 0;
    margin: 0;
}

.duties li {
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
    line-height: 1.6;
}

.duties li::before {
    content: '•';
    color: #2196F3;
    position: absolute;
    left: 0;
    font-weight: bold;
}

/* Skills Section */
.skills-section {
    margin: 4rem 0;
    padding: 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.skill-category {
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.skill-category:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
    color: #1976D2;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
    position: relative;
}

.skill-category h3::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 50px;
    height: 2px;
    background: #2196F3;
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.skill-tag {
    padding: 0.5rem 1rem;
    background: white;
    border-radius: 20px;
    font-size: 0.9rem;
    color: #546E7A;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
}

.skill-tag:hover {
    background: #2196F3;
    color: white;
    transform: translateY(-2px);
}

.skill-tag::before {
    content: '🛠';
    margin-right: 8px;
    font-size: 1.2em;
}

/* Education Section */
.education-section {
    padding: 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    margin-top: 4rem;
}

.education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.education-card {
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.education-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.education-card h3 {
    color: #1976D2;
    margin-bottom: 0.5rem;
}

.education-card p {
    color: #546E7A;
    margin: 0;
}

.download-button {
    display: inline-block;
    margin-top: 3rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
}

.download-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(33, 150, 243, 0.4);
}

.download-button::before {
    content: '📄';
    margin-right: 8px;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .experience-container {
        padding: 0 15px;
    }

    .timeline::before {
        left: 20px;
    }

    .experience-card {
        margin-left: 45px;
        padding: 20px;
    }

    .skills-grid,
    .education-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<div class="experience-container">
    <div class="section-header">
        <h2>Professional Experience</h2>
    </div>
    <div class="timeline">
        <!-- Experience Cards -->
        <div class="experience-card">
            <div class="job-title">SDET (Software Development Engineer in Test)</div>
            <div class="company">Skeps (Jun. 2024 - Present)</div>
            <ul class="duties">
                <li>Conduct grey-box and white-box testing, reviewing code and developer pull requests for accuracy.</li>
                <li>Deployed builds via Jenkins in CI/CD pipelines, optimizing test coverage and system efficiency.</li>
                <li>Performed API and webhook testing to validate system functionalities, ensuring seamless loan facilitation.</li>
            </ul>
        </div>
        <!-- Repeat for other experiences -->
    </div>

    <div class="section-header">
        <h2>Technical Expertise</h2>
    </div>
    <div class="skills-section">
        <div class="skills-grid">
            <!-- Skill Categories -->
            <div class="skill-category">
                <h3>Technical Skills</h3>
                <div class="skill-list">
                    <span class="skill-tag">UI Automation Testing</span>
                    <span class="skill-tag">Functional & API Testing</span>
                    <span class="skill-tag">White Box Testing</span>
                    <span class="skill-tag">Accessibility Testing</span>
                </div>
            </div>
            <!-- Repeat for other skill categories -->
        </div>
    </div>

    <div class="section-header">
        <h2>Education & Certifications</h2>
    </div>
    <div class="education-section">
        <div class="education-grid">
            <!-- Education Cards -->
            <div class="education-card">
                <h3>B.Tech. (Hons.)</h3>
                <p>Computer Science Engineering, 2017</p>
            </div>
            <!-- Repeat for other education entries -->
        </div>
    </div>

    <div style="text-align: center;">
        <a href="/files/Ujjwal_Kumar_Singh_3_Years_Experience_QA_Resume.pdf" class="download-button" download>
            Download Complete Resume
        </a>
    </div>
</div>