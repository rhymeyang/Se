
##  Need for Cybersecurity in Automotive
+ Automotive Innovations Driving the Increased Risk of Cyberattacks
  + Autonomous vehicles, Connected Infrastructure, Electric Vehicles
  + Increasing Cyber Threat Landscape for vehicles
    + Presence of 100s of Electronic Components
    + Over 100 million lines of code is used
+ Standards and Regulations
  + ISO 21434
  + UNECE WP 29 R155 and R156
+ Security is a safety issue in vehicles

## Cybersecurity Standards and Regulations

- UNECE Cybersecurity Regulation - UNECE WP.29 R155 & R156
- ISO 21434 - Road Vehicle Cybersecurity Engineering Standard

## UNECE WP.29 R155 and R156

- Regulation establishes performance and audit requirements for cybersecurity and software update management for new passenger vehicles
- WP.29 applies to the 54 countries
- Automakers to implement measures to
  - Manage vehicle cybersecurity risks
  - Secure vehicles by design to mitigate risks along the supply chain
  - Detect and respond to security incidents across the vehicle fleet
  - Provide safe, secure software updates that do not compromise vehicle safety

## ISO 21434 - Road vehicles — Cybersecurity Engineering

- Specifies engineering requirements for cybersecurity risk

  management

  - E/E systems in road vehicles
  - Components
  - Interfaces

- Defines a framework

  - Minimum Requirements for cybersecurity processes
  - Common language for communicating and managing cybersecurity risk.

- Covers Cybersecurity Management and engineering processes

## ISO 21434 - Applicability

+ E/E systems, including their components and interfaces, whose development or modification began after the publication of ISO 21434.
+ Activities along the product lifecycle are covered
  + Concept Phase
  + Product Development
  + Production
  + Operation
  + Maintenance
  + Decommissioning
+ Impact all players in the automotive industry from OEMs to Tier- N suppliers

## ISO 21434

+ 15 Clauses
+ 37 Sub-Clauses
+ 101 Requirements
+ 13 recommendations
+ 4 permissions

## Threat Analysis and Risk Assessment

+ TARA is a comprehensive risk assessment
+ Clause 15 of the ISO/SAE 21434 outlines the basic elements of a risk assessment
+ Core activities in a TARA
  + Item definition
  + Asset identification and impact rating
  + Threat scenario identification
  + Attack path analysis
  + Risk determination and treatment

## Cybersecurity Goals and Claims

+ Cybersecurity Goals
  + Concept level cybersecurity requirements associated with one or more threat scenarios
  + Cybersecurity goal would include the protection of assets that if compromised would lead to a damage scenario
  + Example: The storage and transmission of data should be secure and should be controlled
+ Cybersecurity Claims
  + Risks that cybersecurity goals do not account for but are still applicable to the scenario
  + Fail-safe mechanism when the accounted risks occur
  + Cybersecurity claims are used to explain why risk retention or sharing are considered adequate.
  + Example: Lock the device after 5 failed attempts

## Cybersecurity Concept and Plan

+ Cybersecurity Concept
  + It is to verify and ensure conformance with the cybersecurity goals and consistency and compatibility with the functionality of the item
  + cybersecurity requirements of the item and requirements on the operational environment with associated information on cybersecurity controls
  + Example: To protect the vulnerability this should be done in x amount of time to protect the feature (Testing)
+ Cybersecurity Plan
  + Specifies what is required to maintain the concept in a concise way.

## Interaction in Concept Phase

![Interaction](/images/300/tara_01.png)

## Item Definition

1. Item Boundary

   + Interactions of interfaces with the vehicle or E/E systems externally

2. Item Functions

     + Describing the behavior of the interfaces
     + Describe the operational environment

3. Preliminary Architecture

     + Identifications of components, connections and external interfaces

4. Other relevant information can also be included such as assumptions

## Example

![image-20241006202814534](/images/300/tara_02.png)

Example of item boundary and preliminary architecture of the headlamp system



![image-20241006202923000](/images/300/tara_03.png)

## Example

Cybersecurity Relevant Candidate

- Motion control modules and modules with automotive safety integrity level (ASIL) designations
- Data related to drivers or passengers, or to potentially sensitive information such as location data.
- Internal connections -- CAN, Ethernet, media-oriented systems transport (MOST), transmission control protocol/internet protocol (TCP/IP).

## Cybersecurity Properties

+ Confidentiality
  + Ensures appropriate access level for sensitive information 
+ Integrity
  + Data protection from alterations, deletion by unauthorized parties
+ Availability
  + Ensuring the access/service remains available

![image-20241006203205715](/images/300/tara_04.png)

## Asset Identification

+ Objects that have value or contribute to the value

+ Determine the context and composition of the product as: 
   + Functions
   + Data
   + Interfaces
   + Hardware 
   + Software
   + Networks

## Asset Identification

+ Identify cybersecurity properties whose compromise lead to damage scenario
+ Identification of assets can be based on
  + Analyzing the Item Definition
  + Performing an impact rating
  + Deriving assets from Threat scenarios
  + Using Pre-defined Catalogues
+ Define the asset(what), property(why) and the location(where)

## Damage Scenarios & Impact

+ Damage Scenarios
  + Adverse Consequence involving a vehicle or a vehicle function and affecting a road user
  + Can include relation between the functionality of the item and adverse consequence
  + It can be description of harm to the road user
+ Impact
  + Estimate of magnitude of damage and physical harm from a damage scenario

## Example of Damage Scenario

![image-20241006204131348](/images/300/tara_05.png)

## Impact Analysis

+ Impact
  + Estimate of magnitude of damage and physical harm from a damage scenario

+ Impact Categories
   + Safety
   + Financial
    + Operational  
    + Privacy
+ Impact Rate ranges
   + Severe (3), Major (2), Moderate (1) and Negligible (0)

## Example of Impact ratings for damage scenarios

![image-20241006204451815](/images/300/tara_06.png)

## Threat Modeling

+ Step by Step procedure to identify threats and vulnerabilities
  1. Identify threats
  2. Creating architectural overview including data flows
  3. Identify threats, vulnerabilities and requirements
+ Can consists of different levels
  + Vehicle, Subsystem and Component
+ Analyzing the severity of impact of the threat on TOE
+ Define security objectives - CIA
+ Methods
  + Attack tree & STRIDE methodology

## Example

![image-20241006204723002](/images/300/tara_07.png)

## STRIDE Methodology

+ Qualitative threat analysis method
+ Used for identifying threats according to the purpose of the attack
+ Instead of every type of attack possibility it is concise
+ Reasons why STRIDE is preferred: ○ Repeatability
  + Efficiency and Effectiveness based on known designs
  + Easy to document vs attack trees
  + Controls can be directly associated with identified vulnerabilities

## Threat Scenario Identification

![image-20241006204900684](/images/300/tara_08.png)

## Attack Paths

| Threat Scenario                               | Attack Paths                                                 |
| --------------------------------------------- | ------------------------------------------------------------ |
| Denial of service of oncoming car information | Attacker compromises navigation ECU from cellular interface. iv. Attacker floods the communication bus with a large number of messages |
|                                               | Compromised navigation ECU transmits malicious control signals |
|                                               | Gateway ECU forwards malicious signals to power switch actuator |
|                                               | Attacker floods the communication bus with a large number of messages |

## Attack feasibility

+ Attribute of an attack path describing the ease of successfully carrying out the corresponding set of actions
+ Depends upon various factors
  + Elapsed Time
  + Specialized Expertise
  + Knowledge of item/component
  + Window of Opportunity
  + Equipment

## Attack feasibility Rating

| Threat Scenario                               | Attack Paths                                                 | ET   | SE   | KoIC | WoO  | EQ   | Value | Rating |
| --------------------------------------------- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- | ----- | ------ |
| Denial of service of oncoming car information | Attacker compromises navigation ECU from cellular interface. iv. Attacker floods the communication bus with a large number of messages | 1    | 8    | 7    | 0    | 4    | 20    | Low    |
|                                               | Compromised navigation ECU transmits malicious control signals |      |      |      |      |      |       |        |
|                                               | Gateway ECU forwards malicious signals to power switch actuator |      |      |      |      |      |       |        |
|                                               | Attacker floods the communication bus with a large number of messages |      |      |      |      |      |       |        |



## Risk Determination

![image-20241006205507693](/images/300/tara_09.png)

## Determined Risk Values

| Threat scenario                                              | Aggregated attack feasibility rating | Impact rating | Risk value |
| ------------------------------------------------------------ | ------------------------------------ | ------------- | ---------- |
| Spoofing of a signal leads to loss of integrity of the data communication of “Lamp Request” signal for power switch actuator ECU | High                                 | Severe        | S: 5       |
| Denial of service of oncoming car information                | Low                                  | Moderate      | O: 2       |

## Risk Treatment Decisions

| Threat scenario                                              | Risk value | Risk treatment option |
| ------------------------------------------------------------ | ---------- | --------------------- |
| Spoofing of a signal leads to loss of integrity of the data communication of “Lamp Request” signal for power switch actuator ECU | S: 5       | Reducing the risk     |
| Denial of service of oncoming car information                | O: 2       | Reducing the risk     |

## Threat Catalog

- Tool containing a generic list of threats that are considered common in the automotive security industry
- Threat catalog contains threat classes which are based on the STRIDE methodology
- Free to download from the ASRG Website

![image-20241006205930778](/images/300/tara_10.png)
