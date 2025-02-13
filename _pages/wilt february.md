---
layout: archive
title: "What I Learned Today"
permalink: /wilt/
author_profile: true
---

<div class="wilt-container">
  <header class="wilt-header">
    
    <p>Documenting daily discoveries and insights in technology and personal growth</p>
    
    <div class="category-filter">
      <button class="filter-btn active" data-category="all">All</button>
      <button class="filter-btn" data-category="testing">Testing</button>
      <button class="filter-btn" data-category="development">Development</button>
      <button class="filter-btn" data-category="personal">Personal Growth</button>
    </div>
  </header>

  <div class="timeline">
    <!-- February 01st Entry -->
    <article class="timeline-entry" data-category="testing">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="entry-header">
          <span class="entry-date">01st February
          </span>
          <span class="category-tag" role="button" data-category="testing">Testing</span>
        </div>
        <h2>AI Articles: Applications in Testing</h2>
        <div class="entry-preview">
          <p><b>Learning:</b> Explored AI applications in software testing.</p>
          <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
        </div>
        <div class="entry-full hidden">
          <ul>
            <li><b>Learning:</b> Explored AI applications in software testing.</li>
            <li><b>Description:</b> I read several online articles about the emerging role of AI in software testing, particularly how it can help in automating test case generation, bug detection, and even predicting potential issues based on historical data.</li>
            <li><b>Key Takeaway:</b> AI can revolutionize the testing process by reducing manual efforts and improving test coverage. Its ability to predict defects and automate repetitive tasks offers a significant efficiency boost.</li>
            <li><b>Personal Reflection:</b> I'm excited about the possibilities of AI in testing. It could drastically improve how we approach quality assurance in the future, and I'm eager to explore this further.</li>
          </ul>
          <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
        </div>
      </div>
    </article>

    <article class="timeline-entry" data-category="testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">2nd February</span>
      <span class="category-tag" role="button" data-category="testing">Testing</span>
    </div>
    <h2>Pytest Framework: Utilities</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Explored utilities in the pytest framework.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Explored utilities in the pytest framework.</li>
        <li><b>Description:</b> I focused on understanding pytest's utility functions, like pytest.mark.parametrize, which helps in running tests with multiple sets of inputs. I also explored custom utility functions to help with test setups and assertions.</li>
        <li><b>Key Takeaway:</b> Utilizing pytest's built-in utilities like parametrize can significantly reduce the amount of code in tests and improve coverage. Custom utilities can further enhance the efficiency of test scripts.</li>
        <li><b>Personal Reflection:</b> I find it useful to abstract repetitive logic into utility functions. It's a great way to simplify tests and maintain clean code.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>
  </div>



  <div class="archives-link">
    <a href="/wilt-january">View Previous Entries</a>
  </div>
</div>

<style>
.wilt-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, -apple-system, sans-serif;
}

.wilt-header {
  text-align: center;
  margin-bottom: 60px;
}

.wilt-header h1 {
  font-size: 3em;
  color: #1a202c;
  margin-bottom: 15px;
  font-weight: 700;
  background: linear-gradient(120deg, #4299e1, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.category-filter {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: white;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn.active {
  background: #4299e1;
  color: white;
  border-color: #4299e1;
}

.timeline {
  position: relative;
  padding: 40px 0;
}

.timeline-entry {
  position: relative;
  margin-bottom: 40px;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.timeline-content {
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-left: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #4299e1;
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.entry-date {
  font-size: 0.9rem;
  color: #4299e1;
  font-weight: 600;
}

.category-tag {
  padding: 4px 12px;
  background: rgba(66, 153, 225, 0.1);
  color: #4299e1;
  border-radius: 12px;
  font-size: 0.8em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-tag:hover {
  background: rgba(66, 153, 225, 0.2);
}

.entry-preview {
  margin-bottom: 20px;
}

.expand-btn {
  padding: 6px 12px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.2s ease;
}

.expand-btn:hover {
  background: #3182ce;
}

.entry-full {
  margin-top: 20px;
}

.entry-full ul {
  list-style-type: none;
  padding: 0;
}

.entry-full li {
  margin-bottom: 15px;
  line-height: 1.6;
}

.hidden {
  display: none;
}

.archives-link {
  text-align: center;
  margin-top: 40px;
}

.archives-link a {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(120deg, #4299e1, #667eea);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.archives-link a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: #4299e1;
  border-radius: 50%;
  position: absolute;
  left: -6px;
  top: 30px;
}

@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .wilt-container {
    padding: 20px;
  }
  
  .timeline-content {
    margin-left: 20px;
  }
  
  .category-filter {
    flex-wrap: wrap;
  }
}
</style>




{% if jekyll.environment == "production" %}
  <script src="{{ '/assets/js/wilt.js' | relative_url }}"></script>
{% else %}
  <script src="{{ '/assets/js/wilt.js' | absolute_url }}"></script>
{% endif %}