---
layout: archive
title: "What I Learned Today"
permalink: /wilt/
author_profile: true
---

<style>
/* Base styles from previous design */
.wilt-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

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

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulseGlow {
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(66, 153, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); }
}

.wilt-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.wilt-header h1 {
  font-size: 3em;
  color: #1a202c;
  margin-bottom: 15px;
  font-weight: 700;
  background: linear-gradient(120deg, #4299e1, #667eea, #4299e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: gradientFlow 3s linear infinite;
}

.wilt-header p {
  color: #718096;
  font-size: 1.2em;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 3px;
  background: linear-gradient(to bottom, #4299e1, #667eea);
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  animation: scaleIn 1s ease forwards;
}

.timeline-entry {
  width: 100%;
  margin-bottom: 50px;
  position: relative;
  opacity: 0;
}

.timeline-entry:nth-child(odd) {
  padding-right: calc(50% + 30px);
  animation: slideInLeft 0.8s ease forwards;
  animation-delay: calc(var(--animation-order) * 0.2s);
}

.timeline-entry:nth-child(even) {
  padding-left: calc(50% + 30px);
  animation: slideInRight 0.8s ease forwards;
  animation-delay: calc(var(--animation-order) * 0.2s);
}

.timeline-content {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background: #4299e1;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  z-index: 2;
  border: 4px solid white;
  box-shadow: 0 0 0 3px #4299e1;
  animation: scaleIn 0.5s ease forwards;
  animation-delay: calc(var(--animation-order) * 0.2s + 0.3s);
}

.timeline-dot:hover {
  animation: pulseGlow 2s infinite;
}

.entry-date {
  font-size: 0.9em;
  color: #4299e1;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: calc(var(--animation-order) * 0.2s + 0.4s);
}

.entry-section {
  margin-bottom: 15px;
  padding-left: 15px;
  border-left: 3px solid #e2e8f0;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: calc(var(--animation-order) * 0.2s + 0.5s);
}

.entry-section:hover {
  border-left-color: #4299e1;
  background: rgba(66, 153, 225, 0.05);
  padding: 10px 15px;
  border-radius: 0 8px 8px 0;
}

.archives-link {
  text-align: center;
  margin-top: 60px;
  padding: 20px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 1s;
}

.archives-link a {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(120deg, #4299e1, #667eea);
  background-size: 200% auto;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.archives-link a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
  background-position: right center;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const entries = document.querySelectorAll('.timeline-entry');
  entries.forEach((entry, index) => {
    entry.style.setProperty('--animation-order', index);
  });

  // Add intersection observer for animation triggers
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  entries.forEach(entry => {
    observer.observe(entry);
  });
});
</script>

<div class="wilt-container">
  <header class="wilt-header">
    <p>Documenting daily discoveries and insights in technology and personal growth</p>
  </header>

   <div class="timeline">
    <!-- January 12 -->
    <article class="timeline-entry">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="entry-date">12th January</div>
        <h2 class="entry-title">AI Articles: Applications in Testing</h2>
        
        <div class="entry-section">
          <div class="section-title">Learning</div>
          <div class="section-content">Explored AI applications in software testing.</div>
        </div>

        <div class="entry-section">
          <div class="section-title">Description</div>
          <div class="section-content">I read several online articles about the emerging role of AI in software testing, particularly how it can help in automating test case generation, bug detection, and even predicting potential issues based on historical data.</div>
        </div>

        <div class="entry-section">
          <div class="section-title">Key Takeaway</div>
          <div class="section-content">AI can revolutionize the testing process by reducing manual efforts and improving test coverage. Its ability to predict defects and automate repetitive tasks offers a significant efficiency boost.</div>
        </div>

        <div class="entry-section">
          <div class="section-title">Personal Reflection</div>
          <div class="section-content">I'm excited about the possibilities of AI in testing. It could drastically improve how we approach quality assurance in the future, and I'm eager to explore this further.</div>
        </div>
      </div>
    </article>

    <!-- January 11 -->
    <article class="timeline-entry">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="entry-date">11th January</div>
        <h2 class="entry-title">Ikigai: Understanding Purpose</h2>
        
        <div class="entry-section">
          <div class="section-title">Learning</div>
          <div class="section-content">Read and reflected on the concept of Ikigai.</div>
        </div>

        <div class="entry-section">
          <div class="section-title">Description</div>
          <div class="section-content">I continued reading Ikigai and explored how it promotes finding balance in life by focusing on four pillars: what you love, what you're good at, what the world needs, and what you can be paid for.</div>
        </div>

        <div class="entry-section">
          <div class="section-title">Key Takeaway</div>
          <div class="section-content">Ikigai offers a holistic approach to achieving happiness and fulfillment by aligning your passions, talents, societal needs, and financial success.</div>
        </div>

        <div class="entry-section">
          <div class="section-title">Personal Reflection</div>
          <div class="section-content">This book has made me think about how I can better align my work and personal life with my values and purpose. It's a powerful perspective for overall well-being.</div>
        </div>
      </div>
    </article>

    <!-- [Continue with similar article blocks for January 10 through January 1] -->
    <!-- Example structure repeats for each day -->

    <!-- Archive Link -->
    <div class="archives-link">
      <a href="/november-wilt">View Previous Entries</a>
    </div>
  </div>
</div>