
# LECTURE 2 Chapter 2: Architectures of Transportation Cyber-Physical Systems

## OBJECTIVES
+ Introduction
+ Background
+ Current **canonical** cyber-physical system architectures 
+ Types of architecture models 
+ Issues with the current models
+ Emerging architectures
+ Case studies
+ Conclusion

## INTRODUCTION
+ Transportation systems are increasingly linked to other systems and to the physical world in which the system is deployed.
+ These systems use sensors to understand the properties of objects and systems with which they interact.
+ Recently, the term ‘cyber-physical’ has emerged to describe systems that are a blend of physical sensing and computation and that are networked with other similar systems.
+ The collection of these systems is widely **touted** as the ‘Internet of Things (IoT)’.
+ The National Science Foundation of the United States uses the following definition: cyber-physical systems (CPSs) are engineered systems that are built from, and depend upon, the seamless integration of computational algorithms and physical components.
+ The seamless integration is accomplished through carefully structured and rigorously analysed system architecture.
+ The integration makes certain system design problems explicit earlier than in traditional system development.

## BACKGROUND
### Architecture Analysis and Design Language

+ Architecture Analysis and Design Language (AADL) is strongly typed and it can be extended through the use of **annex languages**.
+ Some examples are an error model annex, which specifies propagation errors, a behaviour annex, which allows us to add behaviour to the architecture using the concept of state machines, and others such as security and safety.
+ AADL models both software and hardware.
  + Software is represented by process, thread and subprogram constructs while hardware components are represented by device, processor, bus and memory constructs.
  + The language has an integration component typed as ‘system’ that ties software and hardware together.

### Quality attributes

+ Transportation systems are partially defined by functional requirements- what the system must do - and by nonfunctional requirements - attributes of the system.
+ These attributes describe the qualities of the system such as reliability, availability and many others.
+ The ISO 9126 standard, which has been replaced by ISO/IEC 25010, provides a categorisation of these attributes.
+ The quality attributes support trade studies in which the different attribute values resulting from different design decisions are compared allowing the architect to choose the design action that will be best, given the objectives of the architecture.

![Quality attributes](/images/306/07.svg)

### Frameworks

![image-20241005215019375](/images/306/08.png)

## CURRENT CANONICAL CYBER-PHYSICAL SYSTEM ARCHITECTURES

![image-20241005215207020](/images/306/09.png)

## TYPES OF ARCHITECTURE MODELS

![image-20241005215629594](/images/306/10.png)

Figure 2.6 Portion of ACT-IT reference architecture-architecture reference for cooperative and intelligent transportation, US DoT, https://local.iteris. com/arc-it/.

## ISSUES WITH THE CURRENT MODELS

### Mobility

+ Transportation systems involve the movement of people from one place to another and their smart devices must be sufficiently mobile to move with them while continuing to deliver service.
+ The transportation engineer needs to understand the environment in which the transportation system will be deployed in order to make appropriate design decisions.
+ There are transportation systems which are stationary but many newly emerging capabilities are based on being mobile so that the user can use the capability from exactly where they are rather than going to a spot possibly removed from the events that require attention.

###  Agility of development

+ Technologies for intelligent transportation systems are rapidly evolving, but transportation systems are large and development projects associated with these systems are also large and often slow moving.
+ In order to take advantage of the emerging technologies architectures must be modified to allow for faster modification and deployment.
+ DevOps is an emerging organisational technique that merges development and operations responsibilities to facilitate the development to deployment cycle.
+ The basic idea is to ensure that requirements related to deployment are treated as equally important as other capabilities.

## EMERGING ARCHITECTURES

![image-20241005220303063](/images/306/11.png)
Figure 2.10 The NIST cloud computing reference architecture.
F. Liu, J. Tong, J. Mao, R. Bohn, J. Messina, M. Badger, D. Leaf, Sept 2011. Reprinted courtesy of the National Institute of Standards and Technology, U.S. Department of Commerce. Not copyrightable in the United States.

![image-20241005220713890](/images/306/12.png)

Figure 2.11 Basic cloud infrastructure.
NIST Cloud Computing Reference Architecture. F. Liu, J. Tong, J. Mao, R. Bohn, J. Messina, M. Badger, D. Leaf, Sept 2011. Reprinted courtesy of the National Institute of Standards and Technology, U.S. Department of Commerce. Not copyrightable in the United States.

### Smart city architecture

+ Large cities tend to face several problems, such as high natural resource consumption, human health concerns, traffic jams, waste management and so on.
+ These issues have become so serious that many cities have been motivated to find smarter ways to handle them.
+ The common thread among their solutions is the use of CPSs.
+ For these cities we use the term Smart City, which brings benefits for the entire city by connecting people, improving citizen’s life quality and reducing costs, among other benefits.

### China’s smart cities’ project

![image-20241005221127532](/images/306/13.png)

### SOFTWARE ARCHITECTURE ASPECTS

Table 2.1 Layer Function Mobile Application

| Layer            | Function                                                     |
| ---------------- | ------------------------------------------------------------ |
| Data transport   | Responsible for transporting data between the RESCUER mobile solution and the RESCUER back-end. |
| Data analysis    | Responsible for analysing various kinds of data collected from mobile applications independently and for doing a combined analysis. |
| Management       | Responsible for managing the crowd and workforces. It helps to plan a set of actions based on the current situation. |
| Visualisation    | Responsible for showing analysed data, static emergency plans and the status of the action decided by the command and control centre. |
| Ad hoc network   | Responsible for providing an alternative communication channel in the event of no Internet access. |
| Data integration | Responsible for integrating components within RESCUER, as well as legacy operating resources. |

## QUALITY ATTRIBUTES FOR SMART CITY APPLICATIONS

Table 2.2 Significance of Quality Attribute

| Quality Attribute                                            | Status                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Mobility, scalability, reliability, usability, maintainability, performance, robustness | They were successfully specified, designed, implemented and tested. |
| Availability, portability, reusability, adaptability, interoperability | They have been specified and designed but neither implemented nor tested. |
| Sustainability, privacy, security                            | They have been specified but neither designed nor implemented. |

## CONCLUSION

+ Transportation systems are becoming more dynamic with more decisions made during operation.
+ These systems need architectures that can apply traditional control system architectures with the ability to apply autonomy to alter the system dynamically based on different sensing patterns.
+ We have presented a number of aspects of architectural design and discussed the implications of those design aspects in the context of smart transportation systems.






