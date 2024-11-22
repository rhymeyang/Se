import{_ as s,c as i,a as t,o as a}from"./app-DSao3Qxp.js";const l="/Se/images/pm/04_01.png",n="/Se/images/pm/04_02.png",r="/Se/images/pm/04_03.png",o={};function c(h,e){return a(),i("div",null,e[0]||(e[0]=[t('<h1 id="build-a-project-schedule" tabindex="-1"><a class="header-anchor" href="#build-a-project-schedule"><span>Build a Project Schedule</span></a></h1><h2 id="put-tasks-in-sequence" tabindex="-1"><a class="header-anchor" href="#put-tasks-in-sequence"><span>Put tasks in sequence</span></a></h2><h3 id="take-dependencies" tabindex="-1"><a class="header-anchor" href="#take-dependencies"><span>Take Dependencies</span></a></h3><ul><li><p>One task controls the timing of another</p><ul><li>predecessor</li><li>successor</li></ul></li><li><p>Status</p><ul><li>Finish-to-Start Dependencies</li><li>Finish-to-Finish Dependencies <ul><li>Example: Custimize Features - Test Features</li></ul></li><li>Start-to-Start Dependencies <ul><li>Example: Write Draft - Review Draft</li></ul></li><li>Start-to-Finish Dependencies</li></ul></li><li><p>Which Task Controls the Other?</p><ul><li><p>Decide</p><ul><li>predecessor</li><li>successor</li></ul></li><li><p>Does the start or finish date of the first task control the second task?</p></li><li><p>Does the predecessor control the start or finish of the successor?</p></li></ul></li></ul><p>Ch 04 - Network_solution.pdf, network_diagram.png</p><p>Ch 04 - Seq WBS.pdf; network_diagram.png</p><p><img src="'+l+'" alt="image-20241106101211097"></p><p><img src="'+n+'" alt="image-20241106102233769"></p><h2 id="how-to-assign-resources-to-tasks" tabindex="-1"><a class="header-anchor" href="#how-to-assign-resources-to-tasks"><span>How to assign resources to tasks.</span></a></h2><h3 id="sequence" tabindex="-1"><a class="header-anchor" href="#sequence"><span>Sequence</span></a></h3><ul><li>Assign resources to work packages.</li><li>Do not assign resources to summary tasks or milestones</li></ul><h3 id="work-duration-resource-assignment-units" tabindex="-1"><a class="header-anchor" href="#work-duration-resource-assignment-units"><span>Work = Duration + Resource assignment units</span></a></h3><p>Design features - duration estimate is 2 weeks</p><ul><li>Resource 1, 80 hours</li><li>Resource 2, 80 hours</li></ul><p>Then, total 160 hours</p><h3 id="duration-work-resource-assignment-units" tabindex="-1"><a class="header-anchor" href="#duration-work-resource-assignment-units"><span>Duration = Work/resource assignment units</span></a></h3><p>some task will not shorter with more people(ex, meeting)</p><h3 id="resource-availability" tabindex="-1"><a class="header-anchor" href="#resource-availability"><span>Resource Availability</span></a></h3><h3 id="other-resources" tabindex="-1"><a class="header-anchor" href="#other-resources"><span>Other Resources</span></a></h3><ul><li>Materials</li><li>Equipment</li><li>Ancillary costs</li></ul><p>ch04 - Assignments.pdf; assignments solution.pdf</p><ul><li>ancillary: 英 /ænˈsɪləri/, 美 /ˈænsəleri/ <ul><li>adj. 辅助的, 附属的</li><li>n. 助手；随从</li></ul></li></ul><h2 id="learn-to-use-millestones" tabindex="-1"><a class="header-anchor" href="#learn-to-use-millestones"><span>Learn to use millestones</span></a></h2><p>ch04 - Milestone Solution.pdf</p><h2 id="make-a-realistics-schedule" tabindex="-1"><a class="header-anchor" href="#make-a-realistics-schedule"><span>Make a realistics schedule</span></a></h2><h3 id="realistic-schedule" tabindex="-1"><a class="header-anchor" href="#realistic-schedule"><span>Realistic Schedule</span></a></h3><ol><li>Build in a buffer <ol><li>estimate based on the hours people work on the project every day</li></ol></li><li>estimate based on how fast the assigned workers are</li><li>Limit tasks to three <ol><li>assign work to each people no more than three tasks at a time to keep people productive</li><li>If really assign more tasks, adjust assignments to reflect their decreased productivity <ol><li>add a note to schedule to document the change and reason</li></ol></li></ol></li></ol><p>The closer the model to the reality, the easier it will be to keep the project on time.</p><p>ch04 - reality.pdf; reality solution.pdf</p><h2 id="understand-the-critical-path" tabindex="-1"><a class="header-anchor" href="#understand-the-critical-path"><span>Understand the critical path</span></a></h2><h3 id="critical-path" tabindex="-1"><a class="header-anchor" href="#critical-path"><span>Critical Path</span></a></h3><ul><li><strong>Definition</strong>: The longest sequence of tasks in yoru schedule.</li><li><strong>Character</strong>: Don&#39;t have slack(float).</li></ul><p><img src="'+r+'" alt="image-20241121202750112"></p><ul><li>Forward pass</li><li>Backward pass</li></ul><p>ch04- critical exercise.pdf; critical solution.pdf</p><h2 id="how-to-shorten-a-schedule" tabindex="-1"><a class="header-anchor" href="#how-to-shorten-a-schedule"><span>How to shorten a schedule</span></a></h2><ul><li>Want project sooner</li><li>Project is delayed</li></ul><h3 id="_1-fast-tracking" tabindex="-1"><a class="header-anchor" href="#_1-fast-tracking"><span>1. Fast tracking</span></a></h3><ul><li>Task overlap (normally one after another)</li></ul><p>Fast-track tasks on the critical path</p><ul><li>Fast tracking <strong>increases risk</strong></li></ul><h3 id="_2-crashing" tabindex="-1"><a class="header-anchor" href="#_2-crashing"><span>2. Crashing</span></a></h3><ul><li>Definition: Spend additional money to shorten the schedule</li><li>Crash tasks on the critical path</li><li>Shorten the schedule for the least amount of money</li><li>Start with the least expensive tasks</li></ul><p>紧急赶工</p><ul><li>花费额外资金以缩短工期</li><li>加快关键路径上的任务</li><li>用最少的钱缩短工期</li><li>从最便宜的任务开始</li></ul><p>crash table</p><ul><li>Adding more people doesn&#39;t always shorten duration <ul><li>People get in each other&#39;s way</li><li>New workers are often less productive</li><li>New workers may slow down current workers</li></ul></li></ul><p>Review the critical path after every adjustment</p><h3 id="_3-cutting-scope" tabindex="-1"><a class="header-anchor" href="#_3-cutting-scope"><span>3. Cutting Scope</span></a></h3><p>Ch 04 - Shorten ex.pdf, Shorten Solution.pdf</p><h2 id="decument-the-baseline" tabindex="-1"><a class="header-anchor" href="#decument-the-baseline"><span>Decument the baseline</span></a></h2><h3 id="project-baseline-documents" tabindex="-1"><a class="header-anchor" href="#project-baseline-documents"><span>Project Baseline(Documents)</span></a></h3><ul><li>Baseline-Approved Requirements</li><li>Baseline-Approved Schedule</li><li>Baseline-Approved Budget</li></ul><p>Everything want to control with Change Management Process</p><ul><li>Baseline-Approved Requirements</li><li>Requirements</li><li>Project notebook</li></ul><p>Baseline the values in the project schedule</p><p>Use baseline to evaluate progress and project performance.</p><h2 id="challenge-network-diagram" tabindex="-1"><a class="header-anchor" href="#challenge-network-diagram"><span>Challenge: Network diagram</span></a></h2><p>ch04 - chapter 04 challenge.pdf; network_solution.pdf</p><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question"><span>Question</span></a></h2><ol><li><p>Which type of dependency is most common in project schedules?</p><ul><li><p>finish-to-start</p><p>This type of dependency is best here because it means the finish of one task controls the start of the next task.</p></li></ul></li><li><p>Now that your project is underway, all resource assignments are running late. What is the likely cause?</p><ul><li>not taking into account the hours that resources spend on non-project work each day</li></ul></li></ol>',61)]))}const d=s(o,[["render",c],["__file","04_ProjectSchedule.html.vue"]]),p=JSON.parse('{"path":"/pm/04_ProjectSchedule.html","title":"Build a Project Schedule","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Put tasks in sequence","slug":"put-tasks-in-sequence","link":"#put-tasks-in-sequence","children":[{"level":3,"title":"Take Dependencies","slug":"take-dependencies","link":"#take-dependencies","children":[]}]},{"level":2,"title":"How to assign resources to tasks.","slug":"how-to-assign-resources-to-tasks","link":"#how-to-assign-resources-to-tasks","children":[{"level":3,"title":"Sequence","slug":"sequence","link":"#sequence","children":[]},{"level":3,"title":"Work = Duration + Resource assignment units","slug":"work-duration-resource-assignment-units","link":"#work-duration-resource-assignment-units","children":[]},{"level":3,"title":"Duration = Work/resource assignment units","slug":"duration-work-resource-assignment-units","link":"#duration-work-resource-assignment-units","children":[]},{"level":3,"title":"Resource Availability","slug":"resource-availability","link":"#resource-availability","children":[]},{"level":3,"title":"Other Resources","slug":"other-resources","link":"#other-resources","children":[]}]},{"level":2,"title":"Learn to use millestones","slug":"learn-to-use-millestones","link":"#learn-to-use-millestones","children":[]},{"level":2,"title":"Make a realistics schedule","slug":"make-a-realistics-schedule","link":"#make-a-realistics-schedule","children":[{"level":3,"title":"Realistic Schedule","slug":"realistic-schedule","link":"#realistic-schedule","children":[]}]},{"level":2,"title":"Understand the critical path","slug":"understand-the-critical-path","link":"#understand-the-critical-path","children":[{"level":3,"title":"Critical Path","slug":"critical-path","link":"#critical-path","children":[]}]},{"level":2,"title":"How to shorten a schedule","slug":"how-to-shorten-a-schedule","link":"#how-to-shorten-a-schedule","children":[{"level":3,"title":"1. Fast tracking","slug":"_1-fast-tracking","link":"#_1-fast-tracking","children":[]},{"level":3,"title":"2. Crashing","slug":"_2-crashing","link":"#_2-crashing","children":[]},{"level":3,"title":"3. Cutting Scope","slug":"_3-cutting-scope","link":"#_3-cutting-scope","children":[]}]},{"level":2,"title":"Decument the baseline","slug":"decument-the-baseline","link":"#decument-the-baseline","children":[{"level":3,"title":"Project Baseline(Documents)","slug":"project-baseline-documents","link":"#project-baseline-documents","children":[]}]},{"level":2,"title":"Challenge: Network diagram","slug":"challenge-network-diagram","link":"#challenge-network-diagram","children":[]},{"level":2,"title":"Question","slug":"question","link":"#question","children":[]}],"git":{"updatedTime":1732248957000,"contributors":[{"name":"rhyme_yang","email":"rhyme_yang@live.cn","commits":2}]},"filePathRelative":"pm/04_ProjectSchedule.md"}');export{d as comp,p as data};
