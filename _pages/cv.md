---
layout: archive
title: "Work Experience"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<style>
.cv-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Header Section */
.cv-header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background: linear-gradient(135deg, #f6f9fc 0%, #f1f4f8 100%);
    border-radius: 16px;
    position: relative;
    overflow: hidden;
}

.cv-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2196F3, #00BCD4);
}

/* Experience Timeline */
.timeline {
    position: relative;
    margin: 3rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, #2196F3 0%, #00BCD4 100%);
    border-radius: 3px;
}

.experience-card {
    position: relative;
    width: calc(50% - 30px);
    margin: 2rem 0;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.experience-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.experience-card::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border: 4px solid #2196F3;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.2);
    z-index: 1;
}

.experience-card:nth-child(odd) {
    margin-left: auto;
    padding-left: 2rem;
}

.experience-card:nth-child(odd)::before {
    left: -40px;
}

.experience-card:nth-child(even) {
    padding-right: 2rem;
}

.experience-card:nth-child(even)::before {
    right: -40px;
}

.job-title {
    font-size: 1.4rem;
    color: #1976D2;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.company {
    display: flex;
    align-items: center;
    color: #546E7A;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f0f0f0;
}

.company::before {
    content: '🏢';
    margin-right: 8px;
}

.duties {
    list-style: none;
    padding: 0;
    margin: 0;
}

.duties li {
    margin: 0.8rem 0;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
}

.duties li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #2196F3;
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
}

.skill-category:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
}

.skill-tag:hover {
    background: #2196F3;
    color: white;
    transform: translateY(-2px);
}

/* Education Section */
.education-section {
    padding: 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
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
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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

/* Responsive Design */
@media screen and (max-width: 768px) {
    .timeline::before {
        left: 0;
    }

    .experience-card {
        width: calc(100% - 30px);
        margin-left: 30px;
    }

    .experience-card::before {
        left: -30px !important;
    }

    .experience-card:nth-child(odd),
    .experience-card:nth-child(even) {
        padding: 1.5rem;
    }

    .skills-grid,
    .education-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<div class="cv-container">
    <div class="cv-header">
        <h1>Professional Experience</h1>
        <p>Software Development Engineer in Test | Quality Assurance Specialist</p>
    </div>

    <div class="timeline">
        <!-- Experience cards remain the same, just update the class names -->
        <div class="experience-card">
            <div class="job-title">SDET (Software Development Engineer in Test)</div>
            <div class="company">Skeps (Jun. 2024 - Present)</div>
            <ul class="duties">
                <li>Conduct grey-box and white-box testing, reviewing code and developer pull requests for accuracy.</li>
                <li>Deployed builds via Jenkins in CI/CD pipelines, optimizing test coverage and system efficiency.</li>
                <li>Performed API and webhook testing to validate system functionalities, ensuring seamless loan facilitation.</li>
            </ul>
        </div>
        <div class="experience-card">
            <div class="job-title">Analyst</div>
            <div class="company">Studiographene (Mar. 2023 - Jun. 2024)</div>
            <ul class="duties">
                <li>Contributed to creating of test plans, test cases, and defect reports, streamlining the QA process.</li>
                <li>Executed functional, API, and regression testing for web and mobile applications to ensure quality standards.</li>
                <li>Monitored and reported quality KPIs, providing actionable insights to stakeholders.</li>
            </ul>
        </div>

        <div class="experience-card">
            <div class="job-title">Associate Quality Analyst</div>
            <div class="company">Copper Mobile Pvt. Ltd. (Dec. 2021 - Feb. 2023)</div>
            <ul class="duties">
                <li>Developed and executed test cases for cross-platform mobile and web applications.</li>
                <li>Managed bug defect reports in JIRA and collaborated with developers to resolve issues efficiently.</li>
                <li>Presented testing outcomes in client demos and integrated feedback to enhance product quality.</li>
            </ul>
        </div>

        <div class="experience-card">
            <div class="job-title">Associate Quality Analyst Trainee</div>
            <div class="company">Copper Mobile Pvt. Ltd. (Sept. 2021 - Dec. 2021)</div>
            <ul class="duties">
                <li>Created and executed test cases.</li>
                <li>Conducted sanity, functional, and regression testing on web and mobile applications.</li>
                <li>Performed API testing using Postman and Swagger.</li>
            </ul>
        </div>
    </div>
    

    <div class="skills-section">
        <h2>Technical Expertise</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h3>Technical Skills</h3>
                <div class="skill-list">
                    <span class="skill-tag">UI Automation Testing</span>
                    <span class="skill-tag">Functional & API Testing</span>
                    <span class="skill-tag">White Box Testing</span>
                    <span class="skill-tag">Accessibility Testing</span>
                </div>
            </div>
            
            <div class="skill-category">
                <h3>Soft Skills</h3>
                <div class="skill-list">
                    <span class="skill-tag">Critical Thinking</span>
                    <span class="skill-tag">Client Handling</span>
                    <span class="skill-tag">QA Documentation</span>
                </div>
            </div>
            
            <div class="skill-category">
                <h3>Tools & Frameworks</h3>
                <div class="skill-list">
                    <span class="skill-tag">Selenium</span>
                    <span class="skill-tag">Pytest</span>
                    <span class="skill-tag">BDD</span>
                    <span class="skill-tag">Python</span>
                    <span class="skill-tag">Git</span>
                    <span class="skill-tag">Jenkins</span>
                    <span class="skill-tag">Docker</span>
                    <span class="skill-tag">Katalon</span>
                    <span class="skill-tag">Postbot</span>
                </div>
            </div>
        </div>
    </div>

    <div class="education-section">
        <h2>Education & Certifications</h2>
        <div class="education-grid">
            <div class="education-card">
                <h3>B.Tech. (Hons.)</h3>
                <p>Computer Science Engineering, 2017</p>
            </div>
            <div class="education-card">
                <h3>M.S. Mathematics</h3>
                <p>Veer Bahadur Singh Purvanchal University, 2020</p>
            </div>
            <div class="education-card">
                <h3>ISTQB CTFL Certification</h3>
                <p>July 2023</p>
            </div>
        </div>
    </div>

    <div style="text-align: center;">
        <a href="/files/Ujjwal_Kumar_Singh_3_Years_Experience_QA_Resume.pdf" class="download-button" download>
            Download Complete Resume
        </a>
    </div>
</div>