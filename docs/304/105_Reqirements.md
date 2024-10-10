# Requirements Management

## Overview

**Objectives**:

- Define Requirements Management in the context of automobility cybersecurity
- Understand its relevance in different project management methodologies (Waterfall and Agile)
- Explore how major automakers (Toyota, Ford, GM, Volkswagen) manage requirements
- Align with regulatory frameworks (ISO/SAE 21434, UNECE WP.29, ISO 31000)
- Develop requirements for real-world projects with a focus on cybersecurity

## Requirements Management

### Definition:

- Process of capturing, validating, and managing the needs and objectives that a project must meet.

### Key Components:

- Identifying
- Documenting
- Analyzing
- Prioritizing
- Verifying

### Outcome:

- A clear, traceable path of requirements from conception through to delivery.

## Key Components

### Identifying Requirements

- **Definition**: The process of discovering, eliciting, and defining the necessary features, functions, and constraints the project must satisfy.
  - **PMBOK**: Process Group - Initiating & Planning
    - Align with the Collect Requirements process, part of the Scope Management Knowledge Area. Stakeholders' needs are gathered and analyzed.
  - **Regulatory Compliance**:
    - ISO/SAE 21434: Requires the identification of security requirements by performing threat analysis and risk assessments for automotive systems.
    - UNECE WP.29: Demands identification of cybersecurity vulnerabilities, requiring systems to have embedded security protocols to address potential threats.
  - **Waterfall**:
    - Identification occurs early in the project and is heavily documented before proceeding to the design phase. Typically done once at the beginning.
  - **Agile**:
    - Requirements are continuously identified and refined throughout the project. Stakeholders may provide new or evolving requirements during sprints.

---

### Documenting Requirements

- Definition

  : The process of formally recording all identified requirements in a structured format that allows clear communication, traceability, and review.

  - **PMBOK**: Process Group - Planning
    - This connects to the Requirements Documentation process under PMBOK’s Scope Management. Proper documentation ensures that each requirement is traceable through the project lifecycle.
  - **Regulatory Compliance**:
    - ISO/SAE 21434: Requires detailed documentation of security requirements and security controls across all phases of the vehicle lifecycle. Documentation must be auditable.
    - UNECE WP.29: Mandates the documentation of all cybersecurity measures implemented, especially for software updates and vulnerability fixes.
  - **Waterfall**:
    - Documentation is comprehensive and occurs upfront in Waterfall projects. A detailed Requirements Specification Document is created before the design and implementation begin.
  - **Agile**:
    - Agile focuses on lean documentation (user stories, acceptance criteria), which is continuously updated throughout the project as new features or changes emerge.

---

### Analyzing Requirements

- Definition

  : Evaluating the documented requirements for feasibility, risks, dependencies, conflicts, and alignment with project objectives.

  - **PMBOK**: Process Group - Planning
    - Aligns with Scope Management processes, particularly Scope Definition and Validation, where requirements are evaluated to ensure they are clear, feasible, and aligned with business objectives.
  - **Regulatory Compliance**:
    - ISO/SAE 21434: Requires comprehensive cybersecurity risk assessment. Includes determining risk levels and criticality of each requirement in terms of threats to vehicle systems.
    - UNECE WP.29: Ensures requirements mitigate potential threats effectively.
    - ISO 31000 (Risk Management): Requires risks associated with each requirement are systematically analyzed, categorized, and managed to ensure compliance and mitigate project risks.
  - **Waterfall**:
    - Performed after requirements documentation, with a focus on potential risks and technical feasibility before moving to the design phase.
  - **Agile**:
    - Occurs iteratively in each sprint, allowing teams to evaluate requirements in the context of changing conditions or evolving user needs.

---

### Prioritizing Requirements

- **Definition**: Ranking requirements based on their importance, urgency, risks, or stakeholder needs to ensure the most critical aspects are addressed first.
  - **PMBOK**: Process Group - Planning
    - Prioritization relates to Scope Definition and is also linked with Stakeholder Engagement. It ensures that high-priority stakeholder requirements are met and aligns with managing project constraints (budget, time, and scope).
  - **Regulatory Compliance**:
    - ISO/SAE 21434: Requires prioritizing cybersecurity requirements based on risk levels to ensure the highest threats are addressed first.
    - UNECE WP.29: Calls for prioritization of software updates and cybersecurity measures, especially for addressing known vulnerabilities and compliance mandates.
  - **Waterfall**:
    - Prioritization is fixed early on, with no scope for change during the project lifecycle. All critical requirements are addressed upfront.
  - **Agile**:
    - Inherently supports continuous prioritization. The product backlog is prioritized regularly, allowing teams to focus on high-value or high-risk items first in each sprint.

---

### Verifying Requirements

- **Definition**: Ensuring that requirements have been properly implemented and fulfilled. Includes testing, reviews, and validating that requirements meet stakeholder needs and comply with standards.
  - **PMBOK**: Process Group – Monitoring and Controlling
    - Part of Scope Validation and Quality Control processes. Ensures deliverables align with the original project objectives and stakeholder expectations.
  - **Regulatory Compliance**:
    - ISO/SAE 21434: Calls for verification of the implementation of cybersecurity measures to ensure all security requirements are met.
    - UNECE WP.29: Requires that verification ensures the vehicle complies with cybersecurity regulations, including validating over-the-air updates and cybersecurity protocols.
  - **ISO 31000**: Verifies that risk management practices have been followed and that risks associated with the project are controlled.
  - **Waterfall**:
    - Verification occurs at the end of the project lifecycle. Comprehensive testing and validation are performed after implementation to ensure all requirements are met.
  - **Agile**:
    - Verification is iterative. Each sprint or release has a built-in feedback loop where the implemented features are tested and verified against user stories and acceptance criteria.

## Importance of Requirements

**Cybersecurity-Specific Needs**:

- Balancing scope, schedule, and cost while ensuring secure automotive systems
- Aligning with compliance standards (ISO/SAE 21434, WP.29)
- Addressing security vulnerabilities in automobility
- Managing evolving cyber threats in connected vehicles

## PMBOK

### Project Life Cycle Phase: Planning

- Found in Planning Stage and Monitoring & Controlling

### Phases Involved:

- **Initiating**: Defining high-level requirements
- **Planning**: Developing detailed requirements
- **Monitoring & Controlling**: Ensuring requirements are met through change control processes

### Documents:

- Requirements Traceability Matrix
- Stakeholder Requirements Document

## Requirements Traceability Matrix (RTM)

- Ensures all cybersecurity requirements are properly tracked and implemented throughout the project lifecycle.
  - **Bidirectional traceability matrix**,which combines both forward and backward traceability. This type of matrix is particularly useful for cybersecurity projects as it allows for comprehensive tracking of requirements and their implementation:
    - Identify all cybersecurity requirements for the automotive project.
    - List these requirements in the matrix.
    - Map each requirement to corresponding design elements, test cases, and implementation details.
- **Example(s)**:
  - Requirement ID
  - Requirement Description
  - Source (e.g., industry standards, regulatory requirements)
  - Design Specification
  - Test Case ID
  - Implementation Status
  - Verification Method

URL Reference(s):

- Types of Requirement Traceability Matrix(Uses& Examples).(2022,November4).TARA.https://blog.tara.ai/requirement-traceability-matrix- types/
- Requirements Traceability Matrix. OfniSystems. https://www.ofnisystems.com/services/validation/traceability-matrix/

---

- **Best Practices**:

  - **Continuous Updates**: The RTM should be a living document, updated throughout the project lifecycle.

  - **Automation**: Use specialized tools to automate the creation and maintenance of the RTM, reducing manual effort and potential errors.

  - **Granularity**: Ensure each requirement is traced to specific test steps in the testing protocol.

  - **Stakeholder Involvement**: Involve all relevant stakeholders in the creation and review of the RTM to ensure comprehensive coverage of cybersecurity aspects.

- **Regulatory Alignment**: Align the RTM with relevant automotive cybersecurity standards and regulations, such as ISO/SAE 21434 and UNECE WP.29.

---

- **References and Examples**
  - **ISO/SAE 21434**: This standard provides guidelines for cybersecurity engineering for road vehicles. Teams can refer to this for specific cybersecurity requirements and best practices.
  - **UNECE WP.29**: This regulation focuses on cybersecurity and software updates for vehicles. It provides a framework for cybersecurity management systems in the automotive industry.
  - **NIST SP 800-160**: While not specific to automotive, this publication provides a comprehensive set of security controls that can be adapted for automotive cybersecurity.
  - **SAE J3061**: This guidebook on cybersecurity for cyber-physical vehicle systems can provide valuable insights for creating comprehensive traceability matrices.
  - **Automotive SPICE**: This process assessment model includes traceability as a key practice, offering guidance on how to implement effective traceability in automotive software projects.

## Stakeholder Requirements Document (StRS)

- Crucial for capturing and organizing the needs and expectations of all relevant stakeholders in the project.
  - **Identify Stakeholders**: The team would first identify all relevant stakeholders, including internal and external parties involved in or affected by the cybersecurity aspects of the automotive project.
  - **Elicit Requirements**: They would engage with stakeholders using various techniques such as interviews, workshops, and documentation reviews to gather their needs, requirements, and expectations.
  - **Document Requirements**: The team would record the elicited requirements in a structured format, typically using a Requirements Verification Traceability Matrix (RVTM).
  - **Categorize Requirements**: Requirements would be categorized into types (e.g., business, stakeholder) and categories (e.g., functional, non-functional).
  - **Prioritize Requirements**: Each requirement would be assigned a priority using a system like MoSCoW (Must, Should, Could, Would).
  - **Trace Requirements**: The team would establish traceability between requirements and other project artifacts, such as design specifications and test cases.

**URL Reference(s)**:

- Stakeholder Needs Definition. SEBoK. https://sebokwiki.org/wiki/Stakeholder_Needs_Definition

---

- **StRS documents typically include**:
  - Introduction
  - Purpose and Scope
  - Assumptions
  - References
  - Stakeholder Identification
  - Requirements Categories
  - Requirements List (often in an RVTM format)
  - Traceability Information
- **Example Requirements Verification Traceability Matrix (RVTM) Structure**:
  - Requirement ID
  - Requirement Text
  - Type
  - Category
  - Priority
  - Status
  - Target Release
  - Source
  - Related Process/Use Case
  - Notes

**Templates**:

- [National Archives Template 1](https://www.archives.gov/files/contracts/hipgfi/ir-templates/strs-template-v.4.0.docx)
- [National Archives Template 2](https://www.archives.gov/files/contracts/hipgfi/ir-templates/example-pmrs2.0-strs-v.1.1-2018may23.docx)

### Best Practices

- **Use Clear Language**: Ensure requirements are unambiguous and testable.
- **Include Rationale**: Provide reasoning behind requirements to aid understanding and future decision-making.
- **Maintain Traceability**: Keep the RVTM updated throughout the project lifecycle.
- **Involve Stakeholders**: Regularly review and validate requirements with stakeholders.
- **Cybersecurity Standards**: Align requirements with relevant automotive cybersecurity standards.

## Waterfall Requirements Management

### Characteristics:

- **Sequential**: Each phase must be completed before the next begins.
- **Detailed Requirements Gathering Early**: Requirements are defined upfront and seldom change.

### Automotive Context:

- Particularly useful in hardware-heavy automotive projects.

**Example**: Development of ECUs (Electronic Control Units) where design, testing, and compliance are highly structured.

## Agile Requirements Management

### Characteristics:

- **Iterative**: Requirements evolve throughout the lifecycle, through sprints.
- **Prioritization of Flexibility**: Requirements are continuously refined based on feedback.

### Automotive Context:

- Useful in software development for connected vehicles.

**Example**: Over-the-air (OTA) updates for automotive systems where features and security must be continuously iterated upon.

## Automotive Management Models - Toyota

### Toyota's 3M Model (Muri, Mura, Muda)

**Requirements Management Approach**:

- Focus on lean principles, minimizing waste (Muda) in process and rework in the project lifecycle.
- Ensuring requirements are balanced between overloading resources (Muri) and avoiding uneven workflows (Mura).

**Application**: In projects focused on system integration, Toyota avoids overburdening systems with unnecessary features, while ensuring efficient security protocols.

## Automotive Management Models – Ford, GM, Volkswagen

### Ford:

- Requirements focus on cost-efficiency and quality control in large-scale production environments.
- Heavily utilizes systems engineering to ensure detailed requirements at each stage.

### GM:

- Emphasizes safety and regulatory compliance in its requirement phases, ensuring cybersecurity and functional safety go hand in hand.

### Volkswagen:

- Leverages agile practices for rapid development of in-car software, especially for electric and autonomous vehicles.

## Regulatory Compliance

### ISO/SAE 21434 (Cybersecurity Engineering)

- Specifies requirements for automotive cybersecurity throughout a vehicle’s lifecycle.
- Requirements management should ensure traceability and compliance with security risk assessments.

### UNECE WP.29 (Cybersecurity and Software Updates)

- Mandates that vehicles meet cybersecurity requirements, including threat monitoring and regular software updates.
- Project managers must integrate these into the requirements lifecycle.

### ISO 31000 (Risk Management)

- Applies risk management practices to automobility cybersecurity projects.
- Requirements should incorporate legal, technical, and compliance risks based on ISO 31000 guidelines.

## Tools & Techniques

**Common Tools**:

- **JIRA/Confluence**: For tracking requirements in Agile projects.
- **MS Project/Primavera**: For Waterfall methodologies, tracking schedules, budgets, and scope.

**Requirements Traceability Matrix**: To ensure compliance and mapping of requirements.

**Automotive Context**: Custom tools may be used (e.g., IBM Rational Doors for managing complex automotive system requirements).

## Case Study

**Scenario**: Develop a cybersecurity system for an autonomous vehicle’s navigation.

**Key Steps**:

- Initial requirement gathering with stakeholders (OEMs, regulators, suppliers).
- Breaking down functional requirements: navigation, sensor data protection, OTA security.
- Continuous integration of new requirements as cyber threats evolve.
- Regulatory compliance with ISO/SAE 21434 and UNECE WP.29.

## Activity: Drafting Requirements Plan

**Instructions**: In groups, students will develop a basic requirements management plan for a cybersecurity system designed to protect vehicle-to-everything (V2X) communication.

**Focus on**:

- Key stakeholder requirements
- Compliance requirements
- Initial set of functional requirements

## Key Takeaways

- Requirements management is critical to ensure that project outcomes meet cybersecurity, legal, and functional expectations.
- Balancing structured approaches like Waterfall with flexible approaches in Agile is essential in the evolving automotive industry.
- Compliance with regulations ensures project success in the highly regulated automobility sector.
