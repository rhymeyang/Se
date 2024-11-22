# Build a Project Schedule

## Put tasks in sequence

### Take Dependencies

- One task controls the timing of another
  - predecessor
  - successor
- Status
  - Finish-to-Start Dependencies
  - Finish-to-Finish Dependencies
    - Example: Custimize Features - Test Features
  - Start-to-Start Dependencies
    - Example: Write Draft - Review Draft
  - Start-to-Finish Dependencies
- Which Task Controls the Other?

  - Decide

    - predecessor
    - successor

  - Does the start or finish date of the first task control the second task?
  - Does the predecessor control the start or finish of the successor?

Ch 04 - Network_solution.pdf, network_diagram.png

Ch 04 - Seq WBS.pdf; network_diagram.png

![image-20241106101211097](/images/pm/04_01.png)

![image-20241106102233769](/images/pm/04_02.png)

## How to assign resources to tasks.

### Sequence

- Assign resources to work packages.
- Do not assign resources to summary tasks or milestones

### Work = Duration + Resource assignment units

Design features - duration estimate is 2 weeks

- Resource 1, 80 hours
- Resource 2, 80 hours

Then, total 160 hours

### Duration = Work/resource assignment units

some task will not shorter with more people(ex, meeting)

### Resource Availability

### Other Resources

- Materials
- Equipment
- Ancillary costs

ch04 - Assignments.pdf; assignments solution.pdf

- ancillary: 英 /ænˈsɪləri/, 美 /ˈænsəleri/
  - adj. 辅助的, 附属的
  - n. 助手；随从

## Learn to use millestones

ch04 - Milestone Solution.pdf

## Make a realistics schedule

### Realistic Schedule

1. Build in a buffer
   1. estimate based on the hours people work on the project every day
2. estimate based on how fast the assigned workers are
3. Limit tasks to three
   1. assign work to each people no more than three tasks at a time to keep people productive
   2. If really assign more tasks, adjust assignments to reflect their decreased productivity
      1. add a note to schedule to document the change and reason

The closer the model to the reality, the easier it will be to keep the project on time.

ch04 - reality.pdf; reality solution.pdf

## Understand the critical path

### Critical Path

- **Definition**: The longest sequence of tasks in yoru schedule.
- **Character**: Don't have slack(float).

![image-20241121202750112](/images/pm/04_03.png)

- Forward pass
- Backward pass

ch04- critical exercise.pdf; critical solution.pdf

## How to shorten a schedule

- Want project sooner
- Project is delayed

### 1. Fast tracking

- Task overlap (normally one after another)

Fast-track tasks on the critical path

- Fast tracking **increases risk**

### 2. Crashing

- Definition: Spend additional money to shorten the schedule
- Crash tasks on the critical path
- Shorten the schedule for the least amount of money
- Start with the least expensive tasks

紧急赶工

- 花费额外资金以缩短工期
- 加快关键路径上的任务
- 用最少的钱缩短工期
- 从最便宜的任务开始

crash table

- Adding more people doesn't always shorten duration
  - People get in each other's way
  - New workers are often less productive
  - New workers may slow down current workers

Review the critical path after every adjustment

### 3. Cutting Scope

Ch 04 - Shorten ex.pdf, Shorten Solution.pdf

## Decument the baseline

### Project Baseline(Documents)

- Baseline-Approved Requirements
- Baseline-Approved Schedule
- Baseline-Approved Budget

Everything want to control with Change Management Process

- Baseline-Approved Requirements
- Requirements
- Project notebook

Baseline the values in the project schedule

Use baseline to evaluate progress and project performance.

## Challenge: Network diagram

ch04 - chapter 04 challenge.pdf; network_solution.pdf

## Question

1. Which type of dependency is most common in project schedules?

   - finish-to-start

     This type of dependency is best here because it means the finish of one task controls the start of the next task.

2. Now that your project is underway, all resource assignments are running late. What is the likely cause?

   - not taking into account the hours that resources spend on non-project work each day
