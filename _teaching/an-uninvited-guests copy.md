---
title: "An Uninvited Guest in the Diwali Party"
collection: testing-musings
type: "Pairwise Testing"
permalink: /testing-musings/an-unexpected-bug
venue: "Bug"
date: 2024-10-10
location: "City"
---

<div style="background-color: #fdfdfd; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
  <h1 style="color: #333; text-align: center; font-family: 'Georgia', serif; animation: fadeIn 1s ease-in-out;">An Unexpected Bug Attended Diwali Party</h1>
</div>

<div style="margin: 20px 0; font-family: Arial, sans-serif;">

<p style="text-align: justify; font-size: 1.1em; color: #555;">
It was a usual evening, and in just a couple of hours, the Diwali party was about to begin. Excitement was in the air, and everyone was looking forward to creating some memorable moments. Some people were dressed in ethnic wear, while others were in casual clothes, but the shared excitement and team spirit were clear. Before the party, everyone was trying to wrap up their work to enjoy the evening stress-free. But, as we all know, no software is perfect—sometimes, it’s all about the timing when a bug shows up.
</p>

<h2 style="color: #0073e6; margin-top: 30px; font-weight: bold;">Incident Reported</h2>
<p style="text-align: justify; font-size: 1.1em; color: #555;">
Just half an hour before finishing up, we got word of a bug in the production environment. Initially, it seemed like a simple issue that could be fixed quickly with a hotfix. But since it was already time for the Diwali party, some people started heading there, while my team gathered in the boardroom, hoping to solve the issue fast. Within 10 minutes, everyone was there—front-end, back-end, QA, and PM.
</p>

<h2 style="color: #0073e6; margin-top: 30px; font-weight: bold;">Debugging Begins</h2>
<p style="text-align: justify; font-size: 1.1em; color: #555;">
With everyone in the room, we started digging into the problem. As time passed, we realized the debugging was getting more complicated. But finding the root cause was the priority before fixing it. The team began pairwise testing, trying out different combinations. After nearly an hour, we finally found the root cause: a small error in variable name declaration. Even though it seemed like a minor issue, every production bug is critical, so fixing it was our top priority.
</p>

<h2 style="color: #0073e6; margin-top: 30px; font-weight: bold;">Deployment Process</h2>
<p style="text-align: justify; font-size: 1.1em; color: #555;">
Once we fixed the issue, it was time to test. Testing is crucial when deploying to production, so we tested on the test environment first, then moved it to staging. After a quick sanity check on staging, we got the sign-off for production. This whole process took around 5 hours, and by the time we deployed the hotfix on production, it was already 10:15 p.m., making us late to the party.
</p>

<div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; margin-top: 40px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
<h2 style="color: #333; font-weight: bold; animation: fadeIn 1s ease-in-out;">Lessons Learned</h2>
<ul style="color: #555; font-size: 1.1em; line-height: 1.6;">
  <li><b>Every bug teaches a lesson:</b> Some team members missed the Diwali party, but we didn’t want to miss the opportunity to learn from this bug to prevent similar issues in the future.</li>
  <li><b>Choose the smartest testing approach:</b> Often, time is limited, so selecting a testing method that ensures quality within tight schedules is crucial.</li>
  <li><b>The value of pairwise testing:</b> Pairwise testing is especially helpful when a module has multiple functions and options. Testing every single option against all others can be very time-consuming.</li>
  <li><b>Focus on key combinations:</b> Instead of testing every possible combination, pairwise testing allows us to focus on the most important ones. This approach lets us cover essential ground without getting stuck in endless tests.</li>
  <li><b>Catch hidden bugs more efficiently:</b> By testing these prioritized combinations, we can find hidden bugs faster, even with limited time.</li>
  <li><b>Teamwork is essential:</b> Another important lesson was about teamwork. Social gatherings are meaningful, but when the whole team is working together on something critical, stepping up and doing our part makes a big difference.</li>
</ul>
</div>

<style>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
