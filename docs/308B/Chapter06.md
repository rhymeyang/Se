# CHAPTER 6 Information Asset Protection

This chapter covers CISA Domain 5, “Protection of Information Assets,” and discusses the following topics:

- Information security management
- Logical access controls
- Network security
- Environmental security
- Physical security
- Privacy

The topics in this chapter represent 27 percent of the CISA examination.

---

Information assets consist of information and information systems. _Information_ includes software, tools, and data. _Information system_ is an inclusive term that encompasses servers, workstations, mobile devices, network devices, gateways, appliances, IoT devices, and applications. An information system can be a single device or a collection of systems that work together for some business purpose.

### Information Security Management

_Information security management_ is the collection of policies, processes, and procedures that ensures an organization’s security program is effective. Security management is composed of a number of distinct and interrelated processes, including policy development and enforcement, risk management, security awareness training, user access management, security incident management, vulnerability management, third-party risk management, encryption, network access management, environmental controls, and physical access controls. Ongoing executive support is key to the success of a security management program.

These and other processes should be periodically audited to confirm their effectiveness. Control failures and exceptions should be documented and action plans developed to improve processes and systems.

#### Aspects of Information Security Management

The protection of information-related assets is the cornerstone of information security management. Flowing out of IT governance and risk management, information security management is a top-down set of coordinated activities whose key objective is the protection of information systems and other information-related assets.

An organization with sound IT governance and risk management programs will develop strategies, policies, and processes that align with the organization’s overall objectives. Through a number of strategic processes, such as business impact assessment (BIA), management will create a clear idea of which information-related assets and functions are the most vital to the organization. Through a risk management program, management will take appropriate measures to protect those assets and functions.

> **NOTE** Rather than being a separate activity, information security management works hand-in-glove with IT governance and risk management, which is the focus of [Chapter 2](/308B/Chapter02.html).

##### Executive Support

Information security management will be effective only with an appropriate level of executive-level support. A level of visible commitment to security management is required, including the ratification of security strategies and policies, support of risk management decisions, delegation of key roles and responsibilities, allocation of resources, prioritization of the use of resources, and leadership by example. Without executive support as a foundation, an organization’s information security program cannot hope to succeed and be effective.

##### Policies and Procedures

An effective information security program depends upon a clear rule of law in the form of an information security policy. A complete information security policy should contain the following elements:

- **Statement of executive support** The policy document must clearly state that the information security policy has the full and unwavering support of the organization’s executives. The policy may include a signature block that shows their support and formal adoption of the policy in writing.
- **Roles and responsibilities** Information security policy should define security-related roles and responsibilities, including who is responsible for policy development and enforcement. It should also include who is responsible for performing risk assessments and making risk-based decisions. The policy should also describe how the structure of asset ownership works and clearly state how asset owners have some responsibilities in protecting the assets that they control. Finally, the policy should state the responsibilities that all employees have in the protection of information systems and information-related assets.
- **Value of information-related assets** The information security policy should include the idea that the organization’s information system and information are valued assets that deserve protection. Although the tangibility of some assets may be difficult to value monetarily, they are valuable nonetheless and must be protected.
- **Protection of information assets** Because the organization’s information-related assets have value, they must be protected. The policy should describe the ways that information assets are protected through controls to protect their confidentiality, integrity, and availability. There may be dozens and perhaps more than 100 individual topics and statements regarding information asset protection. Some of these statements will describe things that people are required to do, and others will describe things that people are forbidden from doing.
- **Acceptable behavior** Information security policy must clearly state what is expected of the organization’s employees by defining the types of behavior and activities that are required, permitted, discouraged, and forbidden. It also may state the consequences of disobeying the rules for acceptable behavior.
- **Risk management** The information security policy should describe the manner through which risks are measured and treated. This should include a policy for handling exceptions (circumstances where security policy and organization objectives are at odds with one another).
- **Support of laws and regulations** Information security policy should clearly state the organization’s support of applicable laws and regulations. For instance, policy should include statements of support for intellectual property laws through the use of copyrighted and trademarked works. Also, incident response policies and procedures should include all necessary disclosures of data compromise.
- **Enforcement and consequences** The policy should state how it is to be enforced and by whom, and a statement of the consequences of willful or negligent violation of security policy should be included. Generally, a policy should state that “violations may result in disciplinary action including termination of employment, as well as civil or criminal legal proceedings.”

An organization’s security policy should be easily found and understood. The policy can be published on the organization’s internal web site or portal. It should be written in a style that makes it easily understood by all personnel.

##### Security Awareness

Many people do not have particularly good instincts when it comes to the protection of information systems and information-related assets. But people are generally teachable, and they can be trained in the methods used to safeguard the organization’s information and systems. A formal security awareness program should include activities that will help employees better understand how information protection measures work and how they should be used. Most employees will agree that organization assets are valuable and should be protected—they just need to know _how_ it is done, _why_ it is important, and what is expected of them.

The designers of a comprehensive security awareness program need to understand that people have a variety of learning styles, which means that reliance on a single method for disseminating security information is not going to work for everyone. Some of the elements of a security awareness program include

- **Signed acknowledgment of security policy** To drive home the point of the seriousness of the company’s security policy, all employees should be required to sign a statement that says they have read, understood, and will conform to the entire security policy. This should be done at the time of hire, but increasingly, organizations are requiring employees to sign this annually thereafter.
- **Security awareness training upon hire** Each new employee should receive formal training at the time of hire. This training should serve as an orientation to the organization’s security policy and programs of asset protection. This will help the employee understand his or her responsibilities, where to find the policy and additional information, how employees are expected to participate in asset protection, and the consequences for failing to do so.
- **Annual security awareness training** Many organizations incorporate annual security awareness training for all employees. This gives employees opportunities for “refresher” materials as well as updated information that is based on new technologies, practices, threats, and policies. The state of the art of security threats and safeguards is ever-changing, and security awareness training should be updated accordingly.
- **Intranet** An internal web site (or other manner through which the organization makes information available to its employees on demand) should include content on security awareness, controls, policies, and other information that employees can access. Like security policy, security awareness information should be easy to understand and use—and employees should be easily able to understand _how_ and _why_ to use the information there to protect the organization’s assets.
- **Periodic messages** From time to time, it may be necessary to send e-mails to groups of employees (or the entire organization) to make them aware of things that they need to know. Periodic messages also help distribute information to employees who won’t bother to visit an internal web site—some rely on the company to “push” information to them that they will read.
- **Posters and flyers** Sometimes, it may be advantageous to make employees aware of security matters in ways other than web sites and e-mail messages. Posters can be put up where people congregate: kitchens, break rooms, meeting rooms, and auditoriums. An organization should not rely on just one method, such as a web site or e-mail, for communications; posters and flyers are another effective way to get the message to employees.
- **Rewards for desired behavior** Management should reward its employees for making contributions toward the protection of information assets. For example, employees who notice and report security threats or vulnerabilities, or who find a better way to protect assets, could be rewarded with recognition awards or gift certificates.

> **NOTE** An effective security awareness program should help to create a culture of participation in the protection of the organization’s information assets.

##### Security Program Monitoring and Auditing

There is a popular mantra in the business world: the only things that can be managed are those that are measured. In an organization’s information security program, several key areas need to be monitored and audited. This will help management better understand whether its security policies and controls are effective.

Security analysts and auditors should periodically test the organization’s policies and controls (including but not limited to its explicitly stated security controls) to see if they are working properly. Indeed, this is the topic of this entire book and of the CISA certification. Only through monitoring and auditing can an organization really know whether the policies, procedures, and controls that it has established are effective at protecting the organization’s information and information systems.

Security monitoring is also discussed in [Chapter 2](/308B/Chapter02.html) and is covered in more detail in [Chapter 5](/308B/Chapter05.html).

##### Incident Response

A security incident is an event where the confidentiality, integrity, or availability of information (or an information system) has been or is in danger of being compromised. An organization should have an incident response plan in place that will define how the organization should respond when an incident occurs. Some of the common types of incidents that should be included in a response plan include

- **Information exposure or theft** Information that is protected by one or more controls may still be exposed to unauthorized persons through a weakness in controls or by deliberate or negligent acts or omissions.
- **Information system theft** Laptop computers, mobile devices, and other information-processing and storage equipment can be stolen, which may directly or indirectly lead to further compromises. If the stolen device contains retrievable sensitive information or the means to access sensitive information stored elsewhere, then what has started out as a theft of a tangible asset may expand to become a compromise of sensitive information as well.
- **Information system damage** A human intruder or automated malware may cause temporary or irreversible damage to an information system. This may result in an interruption in the availability of information, as well as loss of information.
- **Information corruption** A human intruder or automated malware such as a worm or virus may damage information stored on a system. This damage may or may not be readily noticed.
- **Information destruction** An attack by ransomware or destructware may result in a temporary or permanent loss of information stored on a system.
- **Malware** Viruses, Trojan horses, worms, and rootkits can penetrate a system and result in consumption of resources or corruption or compromise of information.

Most organizations periodically test their incident response plans to make sure that they will be effective when a real security incident occurs.

Security incident response is described in more detail later in this chapter.

##### Corrective and Preventive Actions

Any organization that is intent on reducing risk through security-related controls, processes, and activities needs to consider using corrective and preventive actions processes. The purpose of these processes is to track corrective and preventive actions formally so that they will be completed on time and not forgotten.

A corrective and preventive actions process may be as simple as a list of actions tracked on a spreadsheet or as complex as an incident tracking system (sometimes known as a ticketing system or a service desk application). The level of complexity should meet the organization’s needs for tracking, reporting, follow-up, and escalation of actions.

Corrective and preventive actions are a part of a culture of continuous improvement. Organizations that adopt a culture of continuous improvement are more likely to have effective controls that protect assets.

##### Compliance

Organizations need to determine and catalog all applicable laws, regulations, standards, and other legal obligations that are relevant to the protection of information and assets. These may include but are not limited to

- National laws
- State and local laws
- Consumer protection agencies
- Industry standards such as PCI-DSS (Payment Card Industry Data Security Standard), and those published by NERC (North American Electric Reliability Corporation), NIST (National Institute of Standards and Technology), and ISO (International Standards Organization)

#### Roles and Responsibilities

An effective information security management program requires several key roles and responsibilities, which are held by individuals or groups. These roles and responsibilities should be formally defined in the organization’s information security policy. They can also be defined in a charter document that describes the mission, objectives, roles, and responsibilities in the organization’s information security program. Either way, this information must be readily available to all employees.

Security-related roles and responsibilities include these core elements:

- **Board of directors** Responsible for directing executive management to provide adequate resources to the protection of information and assets
- **Audit committee** A subset of the board of directors, responsible for reviewing internal and external audit reports and requiring executive management to respond to any nonconformities
- **Executive management** Responsible for ratification and support of information security policy and overall responsibility for asset protection
- **Security steering committee** A committee of senior-level officials from every department in the organization that is convened for approval of security policies, discussion of risk-related matters, and allocation of resources to carry out asset protection
- **Chief information officer (CIO)** The senior-level official who is responsible for the deployment and operation of all information systems, and for the management of all information
- **Chief information security officer (CISO) or chief information risk officer (CIRO)** The senior-level official who is responsible for the operation of the organization’s risk management program, and the development and enforcement of security policy and the protection of information assets
- **Chief privacy officer (CPO)** The senior-level official who is responsible for the proper handling of personally sensitive information belonging to employees and customers to protect their privacy rights
- **Internal audit** Responsible for auditing the organization’s financial management processes and other processes and reporting findings to the audit committee of the board of directors
- **Security auditors** Responsible for monitoring and testing security controls and delivering written opinions on the effectiveness of those controls
- **Security administrators** Responsible for operating or monitoring specific security controls such as user access controls, firewalls, or intrusion detection systems
- **Security analyst** Responsible for implementing and/or enforcing security policy by designing, improving, and/or monitoring security processes and security controls
- **Systems analysts** Responsible for implementing and/or enforcing security policy by designing application software that includes adequate controls to protect the application as well as the information that it manages and stores
- **Software developers** Responsible for coding application software that includes controls to prevent application misuse or bypass of controls to protect the integrity and confidentiality of information
- **Managers** Responsible for the actions of the employees whom they supervise
- **Asset owners** Responsible for protection and integrity of assets and for approving requests to access the assets they control
- **Employees** Responsible for supporting security policy by using information systems and handling information assets properly and for reporting incidents and other security matters to management

> **NOTE** The roles and responsibilities here are considered common practice. There will be minor variations in the roles and responsibilities described here in many organizations.

#### Business Alignment

An effective security management program needs to be aligned with the organization’s mission, strategies, and objectives. Characteristics of a business-aligned security program include but are not limited to

- **Board-level involvement** The organization’s board of directors is involved in the security management program, including asking questions, imposing requirements, or requesting key metrics.
- **Executive involvement** Business executives are involved in the overall management of security, including any security steering committees.
- **Governance** Executive control of the security management program includes all relevant aspects of the business.
- **Support of key initiatives** Information security personnel are involved in the development of new key initiatives.
- **Risk tolerance** The organization’s risk appetite and risk tolerance are in alignment with the organization’s mission and objectives.
- **Coordination or integration with enterprise risk management (ERM)** Information security risk management processes align with or are integrated with the organization’s ERM program.
  - IT and security strategy aligns with business mission, goals, and governance.
  - Employees understand the relationships between security and business goals and understand how IT security supports those goals.
  - Employees understand their security role in relation to the overall business mission, goals, strategy, and governance.

#### Asset Inventory and Classification

Information assets fall into two basic categories: information and information systems. _Information_ consists of software, tools, and every type of data. _Information system_ is an inclusive term that encompasses servers, workstations, mobile devices, network devices, gateways, appliances, and almost every other kind of IT hardware that is used.

Information and information systems both need to be inventoried. This helps management continue to be aware of their existence so that they can be properly managed and protected. The inventory of sensitive data supports an organization’s privacy program.

Information and information systems also need to be classified. This will ensure that they will be properly handled according to their criticality, sensitivity, importance, and other criteria. A classification scheme may be developed as a result of a risk assessment, as well as regulations and standards such as Health Insurance Portability and Accountability Act (HIPAA), General Data Protection Regulation (GDPR), and PCI-DSS.

##### Hardware Asset Inventory

An IT organization that is responsible for the management of information and information systems must have a means for knowing what all of those assets are. More than that, IT needs to acquire and track several characteristics about every hardware asset, including

- **Identification** This includes make, model, serial number, asset tag number, logical name, and any other means for identifying the asset.
- **Value** Initially, this may signify the purchased value, but may also include its depreciated value if an IT asset management program is associated with the organization’s financial asset management program.
- **Location** The asset’s location needs to be specified so that its existence may be verified in a periodic inventory.
- **Condition** The asset’s current capability needs to be noted—for example, whether it is operational or down for upgrades or maintenance.
- **Security classification** Security management programs almost always include a plan for classifying the sensitivity of information and/or information systems. Example classifications include secret, restricted, confidential, and public.
- **Asset group** IT assets may be classified into a hierarchy of asset groups. For example, any of the servers in a data center that support a large application may be assigned to an asset group known as “Application X Servers.”
- **Configuration** The configuration of every asset must be managed and known, according to established standards and in compliance with applicable regulations and standards.
- **Owner** This is usually the person or group responsible for the operation of the asset.
- **Custodian** Occasionally, the ownership and operations of assets will be divided into two bodies, where the owner owns them but a custodian operates or maintains them.

Because hardware assets are installed, moved, and eventually retired, it is important to verify the information periodically in the asset inventory by physically verifying the existence of the physical assets. Depending upon the value and sensitivity of systems and data, this inventory “true-up” may be performed as often as monthly or as seldom as once per year. Discrepancies in actual inventory must be investigated to verify that assets have not been moved without authorization or stolen.

##### Information Assets

Sometimes overlooked because it is intangible, the information that is stored in systems should be treated as an asset. In almost all cases, information such as software and databases has tangible value and should be included in the list of IS assets.

Operating systems and subsystems such as database management systems or applications that reside in virtual machines are considered assets. Like physical assets, these may have tangible value and should be inventoried periodically.

Emerging privacy laws including GDPR and California Consumer Privacy Act (CCPA) are compelling organizations to improve their knowledge and control of information assets, particularly those containing sensitive information about individuals.

**Data Classification Overview** In most organizations, various types and sets of information will have varying degrees of sensitivity. These levels of sensitivity will implicitly dictate that information at different levels should be handled accordingly. For instance, the most sensitive information should be encrypted whenever stored or transmitted and should be accessible only to those individuals who have a justified need to use it.

Would it be easier to handle all information the same way that the most sensitive information in the organization is handled? Although it would be easier to remember how to handle and dispose of all information, it might also be an onerous task, particularly if all information is handled at the level warranted for the organization’s most sensitive or critical information. Encrypting everything and shredding everything would be a wasteful use of resources. That said, it is incumbent on an organization to build a simple data classification program that is easy to understand and follow. Too many levels of classification would be burdensome and difficult for users to understand and follow.

**Data Classification Details** In most organizations, a data classification program can be defined in detail in less than a dozen pages, and the practical portions of it could almost fit on a single page. For many organizations, a simple four-level classification program is a good place to start. The four levels could be labeled as _secret_, _restricted_, _confidential_, and _public_. Any information in the organization would be classified into one of these four levels.

Example handling procedures for each of these levels are found in [Table 6-1](/images/308b/ch06t01.jpeg).

![Images](/images/308b/ch06t01.jpeg)

**Table 6-1** Example of Information Handling Guidelines

The classification and handling guidelines presented in [Table 6-1](/images/308b/ch06t01.jpeg) are meant as an example to illustrate the differences in various forms of data handling for various classification levels. However, the contents of [Table 6-1](/images/308b/ch06t01.jpeg) can serve as a starting point for an actual data classification and handling procedure.

#### Access Controls

Access controls are the technology-based methods of controlling access to an information-based resource. Access controls must be actively managed by staff members who are authorized to perform this function and trained to perform it properly.

The workings of access controls are discussed later in this chapter in the section “Logical Access Controls.” Access controls also exist in the physical world and are discussed later in this chapter in the section “Physical Security Controls.”

##### Access Control Management

The management of access controls requires that processes and business rules be established that govern how access controls are managed. These processes and rules are used to decide which persons and systems will be permitted to access which data and functions in the organization, as well as the rules governing the request, approval, provisioning, and review of access controls.

Several processes are used to manage access controls:

- **Access control request** Any new request for access must be formally made via an established request procedure. The request should be approved by the subject’s manager as well as by the owner of the resource to which access is being requested.
- **Access control review** A periodic review of all users’ access to systems must be performed to verify that everyone who has access is still entitled to that access and to verify that all access for terminated employees has been removed.
- **Access history review** A periodic review of users’ accesses to systems must be made to determine who has accessed systems. A practical result is the removal of access rights for users who have not accessed systems for a period of time. Users who do not access systems for extended periods of time probably should have those access rights removed.
- **Segregation of duties review** A periodic review of each user’s access rights in all systems must be performed to verify that each employee does not have a combination of access privileges that would constitute a violation of segregation of duties.
- **Employee transfer** When an employee is transferred from one position to another, the access rights associated with the departed position must be removed and any new access rights for the new position established.
- **Employee termination** When an employee is no longer employed by the organization, all access rights for that employee must be terminated immediately.

All of these processes must have a robust recordkeeping plan so that all requests, reviews, transfers, and terminations are well documented. These records must themselves be restricted so that only authorized persons may view them. These records also must be protected against tampering.

These activities must include not only an organization’s full-time employees, but also temporary workers, contractors, consultants, services providers, and all other parties with access to an organization’s systems.

In addition to these processes, there are several audit and monitoring procedures to verify correct operation of these procedures; auditing of access controls is discussed later in this chapter.

##### Access Control Logs

The preceding section discussed business processes and the records that are associated with them. In addition to those records, the information systems that persons are given permission to access must have automatic records of their own. These systems must record all login and access attempts (successful and failure) made by persons. And like the records associated with business processes, these records must also be protected from alteration. This topic is discussed in more detail later in this chapter in the section “Logical Access Controls.”

#### Privacy

_Privacy_ is the protection of personal information from unauthorized disclosure, use, and distribution. _Personal information_ refers to a variety of informational elements about a private citizen, some of which are not well known, including their name in combination with one or more of the following:

- Date and place of birth
- Place of residence
- Fixed and mobile telephone numbers
- Social insurance (such as Social Security) number
- Driver’s license number
- Passport number
- Financial account (such as credit card, bank account, retirement account) numbers

> **NOTE** Some privacy regulations include additional items such as location and IP address as a part of privacy information.

Historically, the concern about privacy stemmed from organizations that collected, aggregated, and then distributed databases containing private citizens’ information, which was then used for targeted marketing and other purposes.

More recently, one worry about privacy has concerned the rise in identity theft, which is made possible from the proliferation of private information and the failure to protect that information adequately. Cyber-criminals have had an easy time discovering and stealing this information in order to conduct wide-scale identity theft as well as fraud. Another source of concern about privacy is the improper and unethical use of personal information by corporations and governments.

Organizations that collect any of the previously mentioned items on behalf of customers or other constituents need to develop policies that define what the organization intends to do with this information. Organizations also need to be aware of applicable privacy laws and regulations and ensure they are fully compliant with them. For each item of potentially sensitive information, an organization should be able to specify

- What information it specifically collects
- Why it collects the information
- How it uses the information
- Collection of consent for these and other uses
- How long it retains the information
- How the information can be corrected by its owners
- To what other organizations the information is distributed and why
- Who is responsible for protecting the information
- How an owner can opt out (causing the cessation of storage of that information)

Business processes, procedures, and records should exist for all of these associated uses and actions, which can then be monitored and audited by others as needed.

#### Third-Party Management

Nearly every organization relies on one or more third-party organizations in the development, support, or operations of its business processes. Often this takes the form of outsourced information systems or related services. Digital transformation has resulted in many organizations outsourcing some IT services that support critical business processes. There are so many specialties and subspecialties in IT that even the largest organizations need to utilize third-party organizations to build, support, or manage their IT environment.

##### Third Parties and Risk

The use of any third-party organization should not be permitted to result in an increase of overall risk to an organization, at least not without bringing some matching value. When considering outsourcing a service to a third party, a risk assessment should be performed to identify and characterize risks associated with this.

Some of the types of services that third-party service organizations provide include

- Internet connectivity
- Internet hosting and colocation
- Cloud service, whether Software-as-a-Service (SaaS), Infrastructure-as-a-Service (IaaS), or Platform-as-a-Service (PaaS)
- Application services (for e-mail, CRM [customer relationship management], ERP [enterprise resource planning], MRP [materials resource planning], payroll, and expense reporting)
- Managed security services
- IT support
- Software development and testing
- Call centers
- Collection services
- Management and business consulting
- Auditors and security assessments
- Vendors that support hardware and software solutions
- Janitorial and other cleaning
- Shipping and receiving
- Building and equipment maintenance
- Temporary employee services

The primary risk with a third-party service provider is that the service provider will have access to some of the organization’s sensitive information or to systems or networks containing or processing such information. Whether the service provider will have access to the organization’s applications and data, or whether the organization will be sending data to the service provider, this overall risk needs to be broken down into each component and analyzed.

For each risk identified, remediation needs to be identified, typically so that the risk can be reduced to the same level as though the organization were performing the service on its own.

##### Types of Third-Party Access

Depending upon the type of service rendered, third-party service providers will have access to the organization’s information in a variety of ways, including

- Physical access to hardcopy business records
- Physical access to information systems
- Physical access to storage media such as hard drives, solid-state drives, backup tapes, and optical drives
- Logical access to information systems, sensitive data, or source code

> **NOTE** A third-party service provider does not necessarily need access to sensitive business records to pose a risk. A service provider that is familiar with the organization’s business practices can cause harm to the organization by interfering with business operations or disclosing business practices to outsiders such as customers, competitors, and others. Such interference or disclosure can occur through the action of an internal or external malicious actor or by innocent mistake.

##### Risks Associated with Third-Party Access

Knowing the type of access that a third-party service provider will have to an organization’s information, the types of risks can be identified. Some of these risks include

- Theft of business records
- Exposure of business records to unauthorized parties
- Alteration of business records
- Damage (both deliberate and accidental) to information systems hardware, software, or information
- Failure to perform services in a timely manner
- Failure to perform services accurately
- Failure to perform services professionally

##### Third-Party Access Countermeasures

As mentioned earlier in this section, the risks associated with a third-party service provider should be no different from associated risks if the organization were performing the service on its own. Even though new risks are introduced when transferring work to a service provider, countermeasures and compensating controls should be introduced that will keep the level of risk acceptably low.

Some of the countermeasures that can be used to mitigate risk include

- Video surveillance with video recording
- Logging all data access and associated accesses to named individuals in the third-party organization
- Access controls that prevent the third party from accessing business records that it does not require in the performance of its services
- Logical access controls that limit the third party’s access only to those data fields required to perform their services
- Vulnerability management tools and procedures
- Security awareness training
- Systems to block malware and its actions
- Security monitoring to detect and respond to security events
- Recording of voice or data communications sessions
- Periodic audits of the service provider’s activities

Generally, an organization can require that a third-party service organization that has logical access to the organization’s systems or stores any of the organization’s data protect this data with the same (or higher) level of controls that the organization uses for its own data. This should result in the third-party service organization’s _not_ being in a situation where the organization’s records are more vulnerable to theft, exposure, or compromise. For example, if an organization requires encryption of specific information when processed in your organization’s systems, any service provider that processes the same information should also be required to encrypt it or to employ other means that result in the same level and type of protection.

> **NOTE** In any situation where treatment for a specific risk associated with a third-party service provider results in unavoidable residual risk, senior management will need to be made aware of the residual risk and determine whether they are willing to accept that risk.

When an organization is considering use of a third-party service provider, the organization should require the service provider to answer a detailed questionnaire concerning security and other aspects of its operation. The organization should also ask whether the provider has had any external audits of its services; if so, the organization should request to see reports from those audits.

To validate information provided in questionnaires and other materials, an organization should consider requesting key pieces of evidence and perhaps a site visit to the service provider’s offices and processing center(s).

##### Addressing Third-Party Security in Legal Agreements

The services performed by a third-party service provider should be succinctly described in a legal agreement. This will generally include a description of the services that are performed, measures of quantity and quality for services, service levels, remedies or penalties for failures in quality or quantity, rates and payments, and roles and responsibilities for both parties.

Legal agreements with service providers need to include several security provisions, including

- A statement that all of the organization’s information and knowledge of its business practices will be kept confidential
- Security- and privacy-related liabilities, roles, and responsibilities
- Security controls required to protect the organization’s information
- Acceptable uses for the organization’s information
- Persons who will be authorized to access the organization’s information
- Background checks, nondisclosure agreements, and acceptable-use agreements for each person who is authorized to access the organization’s information
- Required security training for persons authorized to access the organization’s information
- Capabilities in place to log and respond to security-related events
- Steps to be taken if a security breach or suspected breach should occur
- Steps to be taken to reduce the likelihood of data loss caused by a natural or manmade disaster
- Identification of who is responsible for security and privacy in the third-party organization
- The right to inspect and audit the third-party organization’s premises and operations on short notice
- Proof of compliance with all applicable laws and regulations
- Agreement to adequately destroy all copies of information on request or upon the termination of the agreement

Many additional security-related terms and conditions may be warranted, depending upon the nature of the services provided and the sensitivity and value of the information accessed and used by the service provider. Regulations imposed on the organization regarding the collection, handling, and use of relevant information may result in additional terms and conditions.

##### Addressing Third-Party Security in Security Policy

Many organizations provide cloud-based commercial applications, which are as easy to set up as filling in a registration form, paying with a credit card, and uploading sensitive data from an employee’s workstation. These organizations operate as SaaS, PaaS, IaaS, or other cloud service models.

Often, the persons in an organization have little idea about or regard for the security controls that are used by its service providers. Because of this, organizations can enact a security and business policy that forbids the use of any online service provider (SaaS, PaaS, IaaS, cloud, and so on) unless a risk assessment has first been performed for that service provider. Without such a policy, there is little to stop persons from signing up with various online service providers and potentially putting the organization’s sensitive data at risk.

> **NOTE** An organization should have policies and processes in place to properly assess, measure, and monitor risks related to any third-party service provider.

##### Third-Party Risk Management Life Cycle

The third-party risk management (TPRM) process is a typical life cycle process. It starts with a decision to consider one or more third parties to perform a service to the organization. Even before selecting a service provider, the organization sends an appropriate questionnaire to each prospective service provider to understand the risk profile of each. Once a third party has been selected, the information gleaned from the questionnaire is used to determine the contents of the legal agreement; for instance, if a third party does not have a security awareness training program, a clause in the legal agreement would stipulate that the third party will implement such a program within a specific period of time. Annually, the organization will send a security questionnaire to each third party to reassess its security posture to ensure that its security programs continue to be acceptably effective.

Each third party represents a different level of risk and criticality to an organization. For this reason, organizations can develop risk levels or “tiers” that each third party is assigned to. For instance, three tiers corresponding to low, medium, and high risk are developed and third parties assigned to one of those tiers. Service providers at the highest tier are assessed with more rigor and at a higher frequency. Service providers at the lowest risk tier may be assessed at onboarding time and seldom thereafter. Each organization needs to determine the standards and procedures for each risk tier and the level and types of assessment performed at each.

Many security leaders build a third-party risk dashboard that depicts changes and trends in the risks associated with the entire portfolio of third parties. This dashboard can show risk “hot spots” and areas requiring more focus and attention. Information in the third-party risk program should be integrated with the organization’s risk management life cycle and even with its ERM program if that exists.

Governance should also be a consideration in the TPRM life cycle. Some governance requirements, such as those that come from HIPAA, actually require that third-party service providers be appropriately vetted and must include certain security or privacy measures in their contracts.

#### Human Resources Security

The hearts of most organizations’ business operations are not computers, machinery, or buildings, but people. People design and operate business processes; they design, build, and operate IT systems, and they support processes and systems and help to improve them over time. They interact, directly and indirectly, with vendors, partners, suppliers, and customers. And while people are an organization’s greatest asset, they may also be a source of significant risk.

People are entrusted with access to sensitive information and entrusted to design and create information systems to manage sensitive information properly. But an employee in a position of trust can betray that trust and cause a significant amount of damage to the organization’s operations and long-term reputation, whether acting out of ignorance, malice, or haste.

Trust is the key: organizations provide access to sensitive information, trusting that their employees will honor that trust and treat information properly. The trust is reciprocal: employees also trust that their employer will treat them with respect, pay them a fair salary, recognize their accomplishments, and give them opportunities to advance.

Organizations need to take several measures to mitigate human resource–related risks. These measures are described in the remainder of this section.

> **NOTE** In nearly every case in this section, actions that organizations take regarding their employees should also apply to temporary and contract workers and to others who have access to their sensitive information.

##### Screening and Background Checks

Prior to hiring each employee, an organization should verify the facts that each candidate presents on his or her résumé or curriculum vitae. The confirmation of these and other important facts is commonly known as a background check, and may consist of

- Verification of the candidate’s identity
- Confirmation of the candidate’s legal right to work in the employer’s locale
- Verification of previous employment
- Verification of education
- Verification of professional licenses and certifications
- Investigation into the candidate’s criminal history
- Investigation into the candidate’s financial history
- Drug test
- Checks for associations with certain persons or groups (such as designated terrorist or hate groups)

Irregularities in any of these areas may be a signal to the employer that further investigation is required if the employer is still intent on hiring the candidate. The organization discovering irregularities in a candidate’s background may also rescind a pending offer of employment or decide not to make an offer.

In addition to a background check, an employer will usually check references. This means that the employer will contact one or more professional colleagues to learn more about the candidate. The employer might also make inquiries through its network of professional acquaintances to gather intelligence about the candidate from people who are not references. For example, if a security manager is hiring a security analyst and receives a résumé from an employee at a local organization, the security manager could contact other known colleagues in the organization to determine whether any of them are familiar with the candidate. This can be a source of valuable information, since sometimes a candidate’s references may be coached to say certain things or avoid certain topics.

> **CAUTION** Employers frequently search professional and social networking sites such as LinkedIn, Twitter, Instagram, and Facebook to gather additional intelligence on prospective employees. These and other networking sites often reveal more about a person’s character than will be found on a résumé, application for employment, or references.

Another emerging trend in organizations is the practice of repeating background checks throughout an employee’s tenure. This can help an employer discover certain facts about recent criminal convictions or significant financial events (such as judgments, collections, or bankruptcy) that may warrant action on the employer’s part. Because of the cost associated with a background check, organizations that perform repeat background checks generally limit these checks to those vying for high-risk positions, such as those who handle or manage the use of financial resources.

> **NOTE** Organizations need to ensure that background screening is performed for temporary workers, contractors, and consultants. Some organizations perform these themselves, while others require that placement agencies or consulting firms screen their own candidates.

##### Job Descriptions

A job description is an employer’s formal statement to an employee that says, “This is what we expect and require of you to perform this job.” Employers should have formal job descriptions for each position in the organization. The main reason for this is to document formally the expectations that the organization has for each employee. These expectations should include

- **Position title** The job title (such as senior security auditor or database administrator)
- **Requirements** To include necessary education, skills, and work experience
- **Duties and responsibilities** To include the tasks, projects, and other activities that the employee is expected to perform

The duties and responsibilities section should include a statement that says the employee is required to uphold all of the organization’s policies (including security and privacy policies and code of ethics). The job description could list the major policies by name.

##### Employment Agreements

In locales that permit them, organizations should utilize written employment agreements with each employee. The employment agreement should clearly specify the terms and conditions of employment, including

- **Duties** The employment agreement should describe the employee’s duties in his or her position. This may be similar to what is stated in the employee’s job description.
- **Roles and responsibilities** The employment agreement should define the employee’s roles and responsibilities, as well as the responsibilities of the employer. This will be similar to what is in the job description.
- **Confidentiality** The employee agrees to keep all company secrets confidential, even after termination of employment.
- **Compliance** The employee must agree to comply with all applicable laws and regulations, as well as with all organization policies. The employment agreement should state the consequences of failing to comply with laws, regulations, and policies.
- **Termination** The employment agreement should include the conditions and circumstances by which the organization or the employee can sever the agreement.

Some organizations require employees in certain positions to sign noncompete agreements as a way of protecting intellectual property and customer/supplier relationships.

##### During Employment

Organizations need to enact several safeguards during the span of employment for each employee. These safeguards ensure that each employee’s behavior is appropriate and that each employee is able to do only what is required of him or her. These safeguards include

- **Periodic renewal of employment agreements** Documents signed at the time of hire, including nondisclosure, employment, security policy, code of conduct, and other agreements, should be renewed periodically. Organizations that employ this practice do this annually.
- **Repeat background checks** Occasionally, repeating background checks helps to ensure that each employee’s background (criminal history in particular) is still acceptable. Some organizations do this only for higher risk positions.
- **Access changes when transferred** Any employee who is transferred from one position to another should have his or her accesses for the former position removed. This helps to prevent the accumulation of privileges over time.
- **Awareness training** Employees should undergo periodic training on important topics, including security awareness training, so that they will continue to be aware of security procedures and requirements.

**Policy and Discipline** During their service, employees, contractors, temps, and other workers are expected to comply with the organization’s security policy and other policies. The organization’s security management program needs to include monitoring and internal auditing to ensure that policies are adhered to. When policy violations occur, human resources will need to invoke its disciplinary action process as needed.

Disciplinary action that is related to security policy violations should not be treated differently from any other disciplinary matter. IT security may be asked to provide facts about the matter but should otherwise not be involved. Discipline is usually a matter between an employee’s manager and the employee; human resources should be involved only if the matter is serious enough to warrant a letter in the employee’s employment file, suspension, demotion, or termination of employment. The organization’s legal department will be involved to protect the organization’s treatment of the employee to respond when any employee’s actions represent a violation of any law or legal agreement.

**Equipment** Organizations should keep records regarding any equipment, software, licenses, or other assets that are entrusted to the employee, particularly when the asset will be used away from company premises, such as during travel or in the employee’s home. Each time an asset is issued to an employee, a simple checkout document should be completed that describes the asset, the employee’s name, the date issued, and an agreement that the asset will be returned to the employer on request. The employee should be required to sign this document, and a copy should be placed in his or her employment file.

If the employee transfers to another position or department or leaves the organization altogether, human resources should retrieve all equipment checkout forms and make sure that the employee returns each asset.

##### Transfers and Terminations

When employees are transferred from one position or department to another, they may be required to return certain assets entrusted to their care if they are no longer needed in the new role. Similarly, after transfer, an employee’s access rights should be reviewed and any accesses from the old position that are not required in the new position should be removed. This is covered in more detail in the earlier section “Access Controls.”

When an employee’s employment is terminated, his or her access to information systems and business premises should be immediately revoked. All equipment, documents, software, and other assets in the employee’s care should be returned and accounted for. The access badge and other identifying items should also be returned.

If an employee is being terminated for cause, the organization may elect to do a “look back” in electronic records to determine whether any recent activities represent risk to the organization. For example, a software developer who suspected an imminent termination may have appropriated a large cache of source code to be used in subsequent employment.

#### Computer Crime

Computers are involved in many criminal acts and enterprises. This section discusses the uses of computers in criminal activities.

##### Roles of Computers in Crime

Being the flexible, multipurpose tools that they are, computers can be used in several different ways in the commission and support of crimes. And because some computers contain valuable information, they are targets of crimes. There are three main ways in which a computer is involved in a crime: as a target, as an instrument, and as support.

**Target of a Crime** A computer or its contents are the target of a crime. Some of the types of crimes are

- **Equipment theft** The computer itself (or related equipment or media) is stolen.
- **Equipment vandalism** Computer equipment is damaged or destroyed.
- **Data theft** Data that is stored on the computer or related media is stolen. This is a more difficult crime to detect, since thieves usually steal a copy of the data, leaving the original data intact and untouched.
- **Data vandalism** Data that is stored on a computer is deliberately altered, sometimes in ways that go undetected for a time.
- **Trespass** Someone accesses the computer system or data center without permission or authorization.

**Instrument in a Crime** A computer is used as a weapon or tool to commit a crime. Some of the types of crimes that can be perpetrated include

- **Trespass** Someone makes unauthorized and unlawful entry into a computer or network.
- **Data theft and vandalism** Intruders access computers or networks and steal or destroy data and programs.
- **Sabotage** Intruders destroy computer hardware, software, or data.
- **Child pornography** An individual or group unlawfully stores or distributes child pornography content.
- **Libel and slander** Someone issues communications that make claims that slander a subject a negative light.
- **Espionage** An individual or group obtains information considered a military, a political, or an industrial secret.
- **Eavesdropping** A computer is used to eavesdrop on electronic messaging, such as e-mail, instant messaging, and even voice over IP (VoIP).
- **Phishing and spam** Computers are used to generate and deliver millions of spam messages every day.

**Support of a Crime** Computers can be used to support criminal activities. Some of the ways that this can occur include

- **Storage and transmission of stolen property** Computers are used to store or transmit stolen information.
- **Recordkeeping** Computers are used to record criminal activities. For example, a petty thief who breaks into houses tracks the items he steals in a spreadsheet program.
- **Aid and abet** Computers are used to provide support for other criminals. For instance, a computer is used to send helpful information and funds to an accomplice.
- **Conspiracy** A computer is used to document the plans for a crime. Criminals use word processing tools to perfect their criminal schemes.

It should be easy to imagine how computers can play multiple roles in crimes: they can be used as weapons as well as storage and recordkeeping systems, for instance.

##### Categories of Computer Crime

Cyber-crime comes in a lot of flavors, primarily because computers are used as targets for so many purposes. It may be helpful to remember that the information stored in computers has some value—and the nature and value of that information will attract various types of criminal elements. Computer crimes are roughly analogous to crimes in the physical world. People rob banks to get the money; they deface statues in public places to embarrass the government and make a political point; they attack public transportation systems in acts of terrorism; and they steal purses to get quick cash and maybe a photo ID and a few usable credit cards.

The categories of computer crime can be thought of in this way:

- **Military and intelligence** Attackers are attempting to obtain military or intelligence secrets or disrupt military or intelligence operations. These attacks may occur at any time—during wartime, periods of hostility, or when there are no apparent tensions between governments. Governments as well as nongovernment-sanctioned civilian groups carry out these attacks.
- **Political** This type of attack may be carried out by one state against another, but more typically, the attacker is a state-sponsored individual or an independent group.
- **Terrorist** Attackers are attempting to induce fear and panic among a populace by damaging or disrupting critical infrastructure that is controlled or monitored by computers, including utilities, government services, transportation, financial services, health care, education, and other organizations.
- **Financial** Perpetrators are carrying out activities in an attempt to steal funds, credit card numbers, or bank account numbers, or to perpetrate fraud. Targets include financial institutions and all other organizations that store or process financial data.
- **Business** This represents a wide variety of purposes, including espionage, extortion, theft, vandalism, denial of service, and any attacks designed to weaken or embarrass a business organization.
- **Grudge** This is generally motivated by feelings of revenge that an individual or group wants to exact upon an individual, group, or organization.
- **Amusement** This type of attack is carried out primarily for fun. Nevertheless, these attacks can be lethal and can cause significant damage or embarrassment.

Many attacks are a blend of two or more of the categories discussed here. Understanding these categories can help an organization better understand how to prepare for possible cyber-attacks.

##### Threats of Cyber-Crime on Organizations

Organizations that use computers to store information of value (whether tangible value or not) or perform high-value activities need to take steps to protect that information and the systems they reside in. The nature of the information does have a bearing on the types of threats that will be most prevalent for a given organization. In general, the threats include those discussed next.

**Financial** Organizations that store financial-related information, particularly credit card numbers, bank account numbers, personally identifiable information, and patient health information, are more likely to be the target of crimes whereby criminals will attempt to steal and monetize this information. Organizations may also be the target of one or more types of financial fraud, including

- **Transferring funds** A web site that is used to send or receive funds will be the target of attackers, who will attempt to trick the application—or its other users—into transferring funds to attackers’ accounts.
- **Stealing service** Intruders attempt to trick a web site into providing free service. For instance, a flaw in a site’s payment acceptance program may permit a user to receive service without paying for it.
- **Ransomware** This highly successful and lucrative technique often pays handsomely for perpetrators who employ malware to encrypt sensitive information and hold it for ransom. Criminals provide a decryption key (sometimes) after the victim organization has paid the ransom.
- **Account hijacking** This can occur through malware that sniffs user IDs and passwords from existing customers, or phishing schemes that entice customers to click links that take them to imposter sites that appear to be financial institutions.
- **Click fraud** Many online advertisers pay for clicks on their online ads. Attackers can build malware to generate clicks from victim computers in order to collect payments.
- **Social engineering** Attackers attempt to trick people into responding to e-mails purporting to be invoices or refund requests, providing users’ valuable login credentials to a phony web site.

**Encryption or Disclosure of Sensitive Information** If an organization has sensitive information, intruders will attempt to encrypt, steal, or deface it. Sensitive information can be almost anything of value, including bank account and credit card numbers, intellectual property, personally identifiable information, patient health information, and military and government secrets. Perpetrators may try to steal or deface this information, or they may simply discover how to do that and disclose that technique to others.

**Blackmail** If hackers or organized crime enterprises successfully break in to an organization’s computers or networks, they may be able to encrypt or remove sensitive information and then demand payments to restore that information. _Ransomware_ is a common and highly successful method of blackmail.

**Sabotage** An attacker may break in to computers or networks to damage their ability to perform their functions. This kind of attack can range from damaging operating systems, application software, or information—whatever it takes to damage or destroy a system. Many strains of malware and attack tools are designed to destroy not only information, but also information systems, permanently. Such wide-scale attacks have crippled large organizations, requiring a ground-up rebuild of a part or all of an organization’s IT infrastructure.

**Reputation** Intruders may break in to an organization’s computers or networks in some obvious way simply for the opportunity to embarrass the organization and damage its reputation.

**Legal** Security breaches may invite lawsuits from customers, business partners, and shareholders.

##### Perpetrators of Cyber-Crime

Many different types of individuals and groups will commit cyber-crimes if they have sufficient motivation. The nature of the organization and the data that it stores on its computers will influence which groups and individuals will be more likely to attack the organization’s systems. In no particular order, the perpetrators of cyber-crimes include

- **Cyber-criminal gangs and organized crime** Lured by big profits, organized crime has moved headlong into the cyber-crime business with worldwide profits that exceed those from drug trafficking, according to the U.S. Treasury Department. Cyber-crime organizations are well organized with investors and capital, research and development budgets, supply chains, employees on payroll, and profit sharing. Owners and employees in cyber-criminal organizations network with one another, develop standards, and attend conferences to further their knowledge and skills.
- **Competing organizations** Other organizations in the same industry sector may be intent on conducting industrial espionage to obtain trade secrets or to disrupt the operations of a competitor.
- **Military organizations** Cyber-ops groups within military organizations, such as the PLA Unit 61398 in China, conduct intrusions and attacks to obtain military and commercial secrets as well as to disrupt critical infrastructure and industrial activities.
- **Spies and intelligence agents** People in intelligence organizations may break into the computers or networks in target governments or industries to collect intelligence information. Often these agents will employ hackers to perform information-gathering activities.
- **Hackers** Usually lone combatants who have the skills and the tools to break into computer systems and networks can steal or deface information or plant software in an organization’s computers for a variety of purposes.
- **Activists** Organizations with some political or ideological causes may conduct attacks and intrusions to further an agenda.
- **Law enforcement** Some law enforcement organizations have been known to exceed their authority through illegal surveillance, including trespass into organizations’ and private citizens’ computers and mobile devices.
- **Terrorists** State-sponsored, privately sponsored, and just plain rogue groups of individuals perpetrate cyber-crimes against populations to induce fear and intimidation, and eventually to precipitate changes in a nation’s foreign policy. There have not been many spectacular terrorism-based cyber-crimes (none that we know of anyway), but it’s likely just a matter of time.
- **Script kiddies** Inexperienced computer hackers obtain hacking tools from others. The term “script kiddies” usually refers to adolescents (kiddies) or simply inexperienced would-be hackers who obtain hacking tools (scripts) to break in o computers for fun or just to pass the time.
- **Social engineers** These clever individuals will use a variety of means to gain information about an organization’s inner workings that they then use to exploit the organization. Social engineers frequently use pretexting (pretending to be someone they aren’t) to get employees and private citizens to give up secrets that help them break in to systems.
- **Employees** People who work in an organization have the means and often the opportunity to steal equipment and information from their employers. Usually all they need is motivation. Employers often deliver motivation on a silver platter as a result of draconian policies and working conditions.
- **Former employees** People who used to work in organizations know their secrets, vulnerabilities, and inner workings. Terminated and laid-off employees sometimes have sufficient motivation to steal from or embarrass their former employers as a way of getting even for losing their job.
- **Knowledgeable outsiders** These persons have some knowledge about an organization’s internal systems, architecture, or vulnerabilities. These individuals can gain their knowledge through espionage, social engineering, or eavesdropping, or from current or former employees. The point is they know more than most outsiders.
- **Service provider employees** Personnel employed at service providers are another class of knowledgeable outsiders; through their business relationship with the organization, they possess information about the organization’s people, processes, and technology that they can use to harm the organization through illegal means.

Because cyber-crime can be perpetrated by so many different types of people, it is quite a challenge to “think like a cyber-criminal” in order to prepare one’s defenses. While such an approach will still be helpful, it requires broad reflection on the part of security analysts and engineers who are responsible for protecting an organization’s valuable assets.

#### Security Incident Management

A s*ecurity incident* is defined as any event that represents a violation of an organization’s security policy. For instance, if an organization’s security policy states that it is not permitted for one person to use another person’s computer account, then such a use that results in the disclosure of information would be considered a security incident. There are several types of security incidents:

- **Computer account abuse** This includes willful account abuse, such as a person sharing user account credentials with others or stealing login credentials from another.
- **Computer or network trespass** An unauthorized person accesses a computer network. The methods of trespass include installing malware, using stolen credentials, bypassing access credentials, or gaining physical access to the computer or network and connecting to it directly.
- **Interception of information** An intruder devises a means for eavesdropping on communications. The intruder may be able to intercept e-mail messages, client-server communication, file transfers, login credentials, and network diagnostic information. Eavesdropping methods include installing malware, installing sniffing programs on compromised computers, or connecting directly to computers or networks.
- **Malware** A worm or virus outbreak may occur in an organization’s network. The outbreak may disrupt normal business operations simply through the malware’s spread, or the malware may also damage infected systems in other ways, including destroying or altering information. Malware can also be used to eavesdrop on communications and send intercepted sensitive information such as login credentials, credit card numbers, bank account numbers and other sensitive information back to its source. Malware can also be used to perform Bitcoin mining on victim computers, thereby enriching cyber-criminals who use victims’ computers at little or no cost.
- **Ransomware** This specialized malware encrypts sensitive information on local machines as well as on network shares. The ransomware then displays a message that instructs the victim to transfer funds to the perpetrator in exchange for the ability to decrypt and recover the information. Law enforcement agencies generally discourage the payment of ransoms, since about half the time organizations do not recover the information if they do; further, paying a ransom invites subsequent attacks.
- **Destructware** Similar to ransomware, destructware is designed to destroy information using encryption and other means. Varieties of destructware are designed to destroy computers and equipment. (Stuxnet is a good example of malware designed to destroy nuclear fuel enrichment centrifuges in a hostile country.)
- **Denial-of-service (DoS) attack** An attacker floods a target computer or network with a volume of traffic that overwhelms the target so that it is unable to carry out its regular functions. For example, an attacker can flood an online banking web site with so much traffic that the bank’s depositors are unable to use the site. Sending traffic that causes the target to malfunction or cease functioning is another form of a DoS attack.
- **Distributed denial-of-service (DDoS) attack** Similar to a DoS attack, a DDoS attack emanates simultaneously from hundreds to thousands of computers. A DDoS attack can be difficult to withstand because of the sheer volume of incoming messages.
- **Equipment theft** Computer or network equipment is stolen. Information contained in stolen equipment may be easy to extract unless it is encrypted.
- **Disclosure of sensitive information** Any sensitive information can be disclosed to any unauthorized party.

The examples here should give you an idea of the nature of a security incident. Other types of incidents may be considered security incidents in some organizations.

> **NOTE** A vulnerability that is discovered in an organization is not an incident. However, the severity of the vulnerability may prompt a response that is similar to a response for an actual incident. Vulnerabilities should be fixed as soon as possible to prevent future incidents.

##### Developing Incident Response Plans

_The time to repair the roof is when the sun is shining._

–John F. Kennedy

No organization is immune to the effects of a security incident or breach. Thus, it is essential that organizations develop formal incident response plans to prepare for the inevitable. The steps in incident response plan development include

- **Policy** Formal statements define the need to perform monitoring and prepare for incidents of every kind.
- **Roles and Responsibilities** These define responsible parties in the organization who monitor and respond to an incident. This goes beyond the actual incident responders and includes legal, corporate communications, and business unit leaders.
- **Incident Procedure Development** Create high-level procedures to be followed in any incident. Often this is where incident severity levels are defined.
- **Playbook Development** Create detailed procedures to be followed for specific types of incidents—for example, steps to be followed if a laptop computer is lost or stolen.
- **Training** Conduct training sessions for incident responders, so that they will be more familiar with those procedures during an actual incident.
- **Incident Response Exercises** Conduct exercises and simulations to help the organization better understand how to respond during an actual incident.

##### Phases of Incident Response

An effective response to an incident is organized, documented, and rehearsed. The phases of a formal incident response plan are explained in the following sections.

**Planning and Plan Development** This step involves the development of written response procedures that are followed when an incident occurs, as described in detail in the preceding sections.

**Detection** Detection occurs when an organization is first aware that a security incident is taking place or has taken place. Because of the variety of events that characterize a security incident, an organization can become aware of an incident in several ways, including

- Application or network malfunction
- Application or network slowdown
- Intrusion detection system alerts
- Logfile alerts
- Alert from a security information and event management system (SIEM)
- Media outlets
- Notification from an employee, business partner, supplier, or customer
- Notification from law enforcement
- Anonymous tips

**Initiation** Response to the incident begins at this phase. Typically, this will include notifications that are sent to response team members so that response operations may begin.

**Evaluation** In this phase, response team members analyze available data to understand the cause, scope, and impact of the incident. This often includes forensic analysis to determine the precise nature of the incident.

**Containment** The organization takes steps to ensure that the incident is not able to continue.

**Eradication** Responders take steps to remove the source of the incident. This could involve removing malware, blocking incoming attack messages, or removing an intruder.

**Recovery** When the incident has been evaluated and eradicated, often there is a need to recover systems or components to their pre-incident state. This may include restoring data or configurations or replacing damaged or stolen equipment.

**Remediation** This activity involves any necessary changes that will reduce or eliminate the possibility of a similar incident occurring in the future. This may take the form of process or technology changes.

**Closure** Closure occurs when eradication, recovery, and remediation are completed. Incident response operations are officially closed.

**Post-Incident Review** Shortly after the incident closes, incident responders and other personnel meet to discuss the incident: its cause and impact, and the organization’s response. The discussion will range from lessons learned to possible improvements in technologies and processes to improve defense and response.

##### Testing Incident Response

Incident response plans should be not only documented and reviewed—they need to be tested periodically. Incident response testing helps to improve the quality of those plans, which will help the organization to respond more effectively when an incident occurs.

Similar to disaster recovery and business continuity planning, various types of tests should be carried out:

- **Document review** Individual subject matter experts (SMEs) carefully read incident response documentation to understand the procedures and identify any opportunities for improvement.
- **Walkthrough** This is similar to a document review, except that it is performed by a group of SMEs who talk through the response plan. Discussing each step helps to stimulate new ideas, which could lead to improvements in the plan.
- **Simulation** Also known as a tabletop exercise, a facilitator describes a realistic security incident scenario and participants discuss how they will actually respond. A simulation usually takes half a day or longer. It is suggested that the scenario be “scripted” with new information and updates introduced throughout the scenario. A simulation can be limited to the technical aspects of a security incident, or it can involve corporate communications, public relations, legal, and other externally facing parts of the organization that may play a part in a security incident that is known to the public.
- **Parallel or Full-On** Though usually associated with a BCDR test, there is some utility for performing a test in the environment. For instance, a DoS attack on a production environment may render it inoperative or unavailable. In a DoS attack test, “victim” systems can be taken offline, which would trigger automated or manual responses either to remediate the situation on the target system or shift the workload to another system. Such a test would help the organization better understand its ability to respond to such an incident should one actually occur.

These tests should be performed once each year or more often. In the walkthrough and simulation tests, someone should be appointed as note-taker so that any improvements will be recorded and the plan can be updated.

If the incident response plan contains the names and contact information for response personnel, the plan should be reviewed more frequently to ensure that all contact information is up to date.

##### Incident Prevention

With the appropriate processes and controls in place, many incidents can be prevented from occurring in the first place, and those that occur may have less impact. Incident prevention is primarily accomplished through knowledge of vulnerabilities and actions to remove them. With fewer vulnerabilities, some threats can be reduced or neutralized altogether.

Important elements in the prevention of security incidents include

- **Vulnerability management** This systems management process utilizes tools and techniques to detect vulnerabilities in network devices, servers, and endpoints, along with tools used to install security patches in operating systems, database management systems, applications, and network devices. Many threats are realized through published vulnerabilities. Sometimes intruders are able to fashion tools to exploit vulnerabilities within hours of publication. It is therefore essential that an organization be prepared to mitigate vulnerabilities quickly by deploying security patches or employing other workarounds when it is known that specific vulnerabilities are being exploited in the wild. Vulnerability and patch management are discussed in more detail in the section “Logical Access Controls.”
- **Vulnerability and threat monitoring** This involves close monitoring of security advisories published by vendor and vendor-independent services such as US-CERT, Secunia, InfraGard, Full Disclosure, and Bugtraq. These advisories are publications of newly discovered flaws in computer hardware and software, as well as announcements of new threats that are seen in the wild.
- **Situational awareness** This is the result of real-time monitoring of networks, systems, and endpoints, to detect indicators of compromise. The tools used here include software programs and hardware appliances known as intrusion detection systems (IDSs), intrusion prevention systems (IPSs), and security incident and event management (SIEM) systems.
- **Threat hunting** This is the proactive search for intrusions, intruders, and indicators of compromise (IOC).
- **Advanced anti-malware** Antivirus software is no longer considered effective against advanced threats. Thus, organizations need to consider the use of advanced anti-malware solutions at network boundaries and in servers, endpoints, and mobile devices.
- **System hardening** This is the technique of configuring a system so that only its essential services and features are active and all others are deactivated. This helps to reduce the “attack surface” of a system to its essential components only. On a hardened system, only the essential components need to be configured to resist attack; all other components are disabled and removed, resulting in less effort and fewer vulnerabilities. System hardening is discussed in detail in the section “Logical Access Controls.”
- **Intrusion detection** IDSs can give early warnings of network- or computer-based attacks. IPSs go one step further by actively blocking activities that resemble attacks.

> **NOTE** According to contemporary thinking on incident management, it is considered unwise to believe that all incidents can be prevented. Accordingly, organizations need to invest in incident response processes and tools to facilitate rapid and effective response when incidents do occur.

#### Forensic Investigations

Forensic investigations are required when a security incident has occurred and it is necessary to gather evidence to determine the facts. Because the information gathered in an investigation may later be used in a legal proceeding, a forensic investigator must follow strict procedures when gathering, studying, and retaining information.

##### Chain of Custody

The key to an effective and successful forensic investigation is the establishment of a sound _chain of custody_. The primary considerations that determine the effectiveness of a forensic investigation are

- **Identification** A description of the evidence that was acquired and the tools and techniques used to acquire it. Evidence may include digital information acquired from computers, network devices, and mobile devices, as well as interviews of involved persons.
- **Preservation** A description of the tools and techniques used to obtain and retain evidence. This will include detailed records that establish the chain of custody, which may be presented and tested in legal proceedings.
- **Analysis** A description of the examination of the evidence gathered, which may include a reconstruction of events that are a subject of the investigation.
- **Presentation** A formal document that describes the entire investigation, evidence gathered, tools used, and findings that express the examiner’s opinion of the events that occurred (or did not occur).

The entire chain of custody must be documented in precise detail and include how evidence was protected against tampering through every step of the investigation. Any “holes” in the information acquisition and analysis process will likely fail in legal proceedings, possibly resulting in the organization’s failure to convince judicial authorities that the event occurred as described.

##### Forensic Techniques and Considerations

Computer and network forensics require several specialized techniques that ensure the integrity of the entire forensic investigation and a sound chain of evidence. Some of these techniques are

- **Data acquisition** This is the process of acquiring data for forensic analysis. Subject data may reside on a computer hard drive, in mobile device memory, or in an application’s audit log. Several tools are used for forensic data acquisition, including media copiers, which are tools that acquire a copy of a computer’s hard drive; USB memory stick; or removable media, such as an external hard drive or a CD/DVD-ROM.
- **Data extraction** If data is being acquired from a running system or from a third party, a forensics analyst must use a secure method to acquire the data and be able to demonstrate the integrity of the process used to acquire the data. This must be done in a way that proves the source of the data and shows that it was not altered during the extraction process.
- **Data protection** Once data is acquired, the forensic investigator must take every step to ensure its integrity. Computers used for forensic analysis must be physically locked so that no unauthorized persons have access to them. They must not be connected to any network that would allow for the introduction of malware or other agents that could alter acquired data and influence the investigation’s outcome.
- **Analysis and transformation** Often, tools are required to analyze acquired data and search for specific clues. Also, data must frequently be transformed from its native state into a state that is human or tool readable; in many cases, computers store information in a binary format that is not easily read and interpreted by humans. For example, the NTUSER.DAT file used in Windows is a binary representation of the HKEY_LOCAL_USER branch of the system’s registry. This file cannot be directly read and requires tools to transform it into human-readable form.

### Logical Access Controls

Logical access controls are used to control whether and how subjects (usually persons, but also running programs and computers) are able to access objects (usually systems and/or data). Logical access controls work in a number of different ways:

- **Subject access** A logical access control uses some means to determine the identity of the subject that is requesting access. Once the subject’s identity is known, the access control performs a function to determine whether the subject should be allowed to access the object. If the access is permitted, the subject is allowed to proceed; if the access is denied, the subject is not allowed to proceed. An example of this type of access control is an application that first authenticates a user by requiring a user ID and password before permitting access to the application.

- **Service access** A logical access control is used to control the types of messages that are allowed to pass through a control point. The logical access control is designed to permit or deny messages of specific types (and may possibly permit or deny based upon origin and destination) to pass. An example of this type of access control is a firewall, screening router, or IPS that makes pass/block decisions based upon the type of traffic, it origin, and its destination.

An analogy of these two types of access is a concert hall with a parking garage. The parking garage (the “service access”) permits cars, trucks, and motorcycles to enter but denies oversized vehicles from entering. Upstairs at the concert box office (the “subject access”), persons are admitted if they possess a photo identification that matches a list of prepaid attendees. Certain persons are granted “backstage access” if they possess the required credentials and are not carrying dangerous objects such as firearms.

#### Access Control Concepts

In discussions about access control, security professionals often use terms that are not used in other IS disciplines:

- **Subject, object** These pronouns refer to access control situations. A _subject_ is usually a person, but it could also be a running program, device, or computer. In typical security parlance, a subject is someone (or some*thing*) that wants to access something. An _object_ (which could be a computer, application, database, file, record, or other resource) is the thing that the subject wants to access.

- **Fail open, fail closed** This refers to the behaviors of automatic access control systems when they experience a failure. For instance, if power is removed from a keycard building access control system, will all doors be locked or unlocked? The term _fail closed_ means that all accesses will be denied if the access control system fails; the term _fail open_ means that all accesses will be permitted upon failure. Generally, security professionals like access control systems to fail closed, because it is safer to admit no one than to admit everyone. But there will be exceptions now and then where fail open might be better; for example, building access control systems may need to fail open in some situations to facilitate emergency evacuation of personnel or entrance of emergency services personnel.

- **Least privilege** According to this concept, an individual user should have the lowest privilege possible that will still enable him or her to perform required tasks.

- **Segregation of duties** This concept specifies that single individuals should not have combinations of privileges that would permit them to conduct high-value operations on their own. The classic example is a business accounting department where the functions of creating a payee, requesting a payment, approving a payment, and making a payment should rest with two or more separate individuals. This will prevent any one person from being able to embezzle funds from an organization without notice. In the context of information technology, functions such as requesting user accounts and provisioning user accounts should reside with two different persons so that no single individual could create user accounts on his or her own.

- **Split custody** This is the concept of splitting knowledge of a specific object or task between two persons. One example is splitting the password for a critical encryption key between two parties: one person has the first half and the other has the second half. Similarly, the combination to a bank vault can be split so that two persons have the first half of the combination while two others have the second half.

#### Access Control Models

Several _access control models_ have been developed since the 1970s. These models are simple mechanisms that are used to understand and build access control systems. The early models include Biba, Bell-La Padula, Clark-Wilson, Lattice, Brewer and Nash, Take-Grant, and Non-Interference. The models that are of interest to the IS auditor include

- **Mandatory Access Control (MAC)** This access model is used to control access to objects (files, directories, databases, systems, networks, and so on) by subjects (persons, programs, and so on). When a subject attempts to access an object, the operating system examines the access properties of the subject and object to determine whether the access should be allowed. The operating system then permits or denies the requested access. Access is administered centrally, and users cannot override it.

- **Discretionary Access Control (DAC)** In this access model, the owner of an object is able to determine how and by whom the object may be accessed. The discretion of the owner determines which subjects will be permitted access.

> **NOTE** The MAC and DAC models offer particular advantages and disadvantages. While DAC offers flexibility by permitting an owner to set access rights, abuse or errors could lead to exposure of sensitive information. MAC’s centralized administration and inflexibility are also strengths: users cannot override MAC settings and potentially expose sensitive information to others.

#### Access Control Threats

Because access controls are often the only means of protection between protected assets and users, access controls are often attacked. Indeed, the majority of attacks against computers and networks containing valuable assets are against access controls in attempts to trick, defeat, or bypass them. Threats represent the intent and ability to do harm to an asset.

Threats against access controls include

- **Malware** This includes viruses, worms, Trojan horses, rootkits, and spyware. Malware is _malicious code_ that is used to perform unauthorized actions on target systems. It is often successful because of known vulnerabilities that can be exploited. In the context of access control, malware presents one of two threats: the ability to record login credentials typed in by a user, and the ability to exploit a vulnerability in an access control system, thereby enabling an attacker to bypass an access control. Vulnerabilities are discussed in more detail in the next section.

- **Eavesdropping** Attackers will install network- or system-based sniffing tools to listen to network communications to intercept key transmissions such as user IDs and passwords used to access sensitive or valuable information. Usually, attackers will need to use some means such as malware or social engineering to install sniffing tools on a target system. In some instances, however, attackers will have access to the physical network and can directly connect sniffing tools to the network cabling.

- **Logic bombs and back doors** Computer instructions inserted by programmers or others in the systems development process can result in an application that contains unauthorized code. A _logic bomb_ is a set of instructions designed to perform some damaging action when a specific event occurs; a popular example is a _time bomb_ that alters or destroys data on a specified date in the future. Some developers install time bombs in code that they manage and periodically advance the date in the time bomb. If the developer is fired from his or her job, the time bomb will activate after termination, and the developer will have gotten revenge on the former employer. A _back door_ is a section of code that permits someone to bypass access controls and access data or functions. Back doors are commonly placed in programs during development but removed before development is complete. Sometimes, however, back doors are deliberately planted so that the developer (or someone else) can access data and functions.

- **Scanning attacks** An attacker performs active or passive scanning in an attempt to discover weak access controls. For example, an attacker can use a _port scanning tool_ to discover open and possibly vulnerable ports on target systems. An attacker can search for unprotected modems through _war dialing_. Or an attacker can listen to Wi-Fi network traffic to look for vulnerable wireless access points in _war driving_.

- **Race conditions** Also known as a time-of-check/time-of-use (TOC/TOU) attack, the attacker is attempting to exploit the small window of time that sometimes exists between the time that a resource is requested and when the resource is available for use.

> **NOTE** The potency and frequency of threats on a system are directly proportional to the perceived value of assets that the system contains or protects.

#### Access Control Vulnerabilities

Vulnerabilities are the weaknesses that may be present in a system that enable a threat to be more easily carried out or to have greater impact.

Vulnerabilities by themselves do not bring about actual harm. Instead, threats and vulnerabilities work together. Most often, a threat exploits a vulnerability, because it is easier to attack a system at its weakest point. Common vulnerabilities include

- **Unpatched systems** Security patches are designed to remove specific vulnerabilities. A system that is not patched still has vulnerabilities, some of which are easily exploited. Attackers can easily enter and take over systems that lack important security patches.

- **Default system settings** Default settings often include unnecessary services that increase the chances that an attacker can find a way to break into a system. The practice of _system hardening_ is used to remove all unnecessary services and to make security configuration changes on a system to make it as secure as possible.

- **Default passwords** Some systems are shipped with default administrative passwords that make it easy for a new customer to configure the system. One problem with this arrangement is that many organizations fail to change these passwords. Hackers have access to extensive lists of default passwords for practically every kind of computer and device that can be connected to a network.

- **Incorrect permissions settings** If the permissions that are set up for files, directories, databases, application servers, or software programs are incorrectly set, this could permit access—and even modification or damage—by persons who should not have access.

- **Vulnerabilities in utilities and applications** System utilities, tools, and applications that are not a part of the base operating system may have exploitable weaknesses that could permit an attacker to compromise a system successfully.

- **Application logic** Software applications—especially those that are accessible via the Internet—that contain inadequate session management, resource management, and input testing controls can potentially permit an intruder to take over a system and steal or damage information.

---

##### Familiarity with Technology Is Key to Effective IS Audit

The IS auditor needs to be highly familiar with information technologies to be effective. Without in-depth knowledge of security threats, vulnerabilities, controls, and countermeasures, the IS auditor will not be able to detect as many unsafe practices in a technology environment. Furthermore, without a depth of understanding, IS auditors will not be able to ask probing questions in walkthroughs or be able to interpret evidence correctly.

The IS auditor must understand information technology in general, but he or she must also understand the technology architecture in the specific environment that is being examined. In an environment that has the appearance of being highly secure, a configuration error in a single device can betray that security like a traitor and expose the entire organization to considerable harm. Only an IS auditor with a thorough understanding of information technology would have a chance to detect such a weakness and interpret it correctly.

---

#### Access Points and Methods of Entry

Computing and network resources must be accessed in order to support business processes, thereby providing services and value. The majority of information-based resources are accessed via TCP/IP networks; some resources are accessed using other technologies, such as direct hardwired connections (as in the case of some mainframe computers) and non-TCP/IP network technologies. Then there are desktop computers that sometimes themselves contain information and resources.

Modern LAN environments are protected from outside threats with firewalls and other means. Many larger organizations also employ internal firewalls to segment their networks, creating separate zones of trust within the organization. But, generally speaking, LANs are a lot like highway systems within individual countries: once you pass a border checkpoint and show a passport or another credential, you can roam freely inside that country unhindered.

##### Points of Entry

The main point of entry in many organizations is the internal corporate LAN. A user who can connect to the corporate LAN is able to reach computing resources logically in the organization—subject to the access controls associated with each resource. This makes the notion of protecting corporate accesses by controlling access to the LAN a vital topic.

Increasingly, however, organizations have fewer and fewer internal resources, as a result of the mass migration away from on-premises resources to cloud-based resources. In these organizations, the internal LAN is little more than a means for connecting to a few resources such as printers and scanners, or is primarily a means of accessing the Internet and the organizations’ primary business applications that are SaaS-based.

The ease of connectivity to the corporate LAN highlights a number of important security issues. Probably the biggest issue is the ability for nonorganization-owned computers to connect to the network and access network-based resources. By permitting nonorganization-owned systems to connect to the network, the organization is essentially giving up control of the network. Allowing any computer or device connect to the network creates risks, including

- **Exposure to malware** Any computer that is not actively managed by centralized anti-malware software could be carrying malware that would attempt to propagate itself inside the corporate network. Indeed, worms such as Nimda and Code Red were able to spread in just this way. Laptops that were the personal property of employees would become infected on home networks and then spread the infection inside the corporate LAN in “Typhoid Mary” style. Many instances of malware being imported on vendor-owned computers (for “demo” purposes) are also known.

- **Eavesdropping** While the IT department can exert some level of control over desktop and server computing by prohibiting (and even preventing) the installation of network-sniffing programs, IT cannot easily control whether nonorganization-owned computers have network-sniffing programs (or malware that does the same thing!).

- **Open access** A corporate LAN that permits any device to connect will permit a wireless access point to connect to the network. This, in turn, may permit anyone with a Wi-Fi client to connect to the network.

Available technologies can be used to control the systems that are permitted to connect to the corporate LAN. Network access control (NAC) through a network access protocol such as 802.1X is used to control whether a system is permitted to connect to corporate network resources. NAC and 802.1X use an authentication mechanism to determine whether each new device is permitted to connect. If the device lacks the necessary credentials, it cannot connect.

Whether the device is actually able to physically connect is another story. Network switches play a role in NAC and 802.1X; if a device is not permitted onto the network, the workgroup switch will not route any packets from the denied workstation into the LAN. The workstation remains logically disconnected.

> **NOTE** Many organizations employ cloud-based environments for many or even all of their applications. As a result, corporate LAN environments often have few or no local resources. Accordingly, organizations may need to shift their strategies for the protection of assets.

##### Remote Access

_Remote access_ is defined as the means of providing remote connectivity to a corporate LAN through a data link. Remote access is provided by many organizations so that employees who are temporarily or permanently off-site can access LAN-based resources from their remote location.

Remote access was initially provided using dial-up modems that included authentication. While remote dial-up is still provided in some instances, most remote access is provided over the Internet itself and typically uses an encrypted tunnel, or _virtual private network_ (VPN), to protect transmissions from any eavesdroppers. VPNs are so prevalent in remote access technology that the terms _VPN_ and _remote access_ have become synonymous. Remote access architectures are depicted in [Figure 6-1](/images/308b/ch0601.jpeg).

![Images](/images/308b/ch0601.jpeg)

**Figure 6-1** Remote access architectures

Two security controls are essential for remote access:

- **Authentication** It is necessary to know who is requesting access to the corporate LAN. Authentication may consist of the same user ID and password that personnel use when on-site, or multifactor authentication may be required.
- **Encryption** Many on-site network applications do not encrypt sensitive traffic because it is all contained within the physically and logically protected corporate LAN. However, because remote access provides the same function as being on the corporate LAN, and because the applications themselves usually do not provide encryption, the remote access service itself usually provides encryption. Encryption may use SSL (Secure Sockets Layer), IPsec (IP Security), L2TP (Layer 2 Tunneling Protocol), or PPTP (Point-to-Point Tunneling Protocol).

These controls are needed because they are a substitute (or _compensating control_) for the physical access controls that are usually present to control which personnel may enter the building to use the on-site corporate LAN. When personnel are on-site, their identity is confirmed through keycard or other physical access controls. When personnel are off-site using remote access, because the organization cannot “see” the person on the far end of the remote access connection, the authentication used is the next best thing.

The migration of corporate resources from internal networks to cloud-based networks is changing the notion of remote access. As a result, organizations are incorporating multifactor authentication for access to the organization’s cloud-based resources, regardless of the location of users—whether they are on a corporate LAN, working from home, in the field, or traveling.

---

##### The New Remote Access Paradigm

As organizations migrate their business applications to colocation centers and XaaS providers, and after the last internal resource is moved to the cloud, what is the point of remote access? Remote access to _what?_

If we think about this in terms of VPN and the protection afforded through encryption, VPN still makes good business sense, but protecting network traffic from potential eavesdroppers (whether the human or malware variety). For this reason, it’s preferred to say “VPN” instead of saying “remote access."

Organizations still need to address several subtopics when considering their VPN architectures in light of cloud migration, such as split tunneling, Internet backhauling, and whether VPN should always automatically activate on workstations away from internal corporate networks.

---

#### Identification, Authentication, and Authorization

To control access to computing resources, they are protected by mechanisms that ensure only authorized subjects are permitted to access protected information. Generally, these mechanisms first identify who (or what) wants to access the resource, and then they will determine whether the subject is permitted to access the resource and either grant or deny the access.

Several terms, including _identification_, _authentication_, and _authorization_, are used to describe various activities and are explained here.

##### Identification

_Identification_ is the act of asserting an identity without providing any proof of it. This is analogous to one person walking up to another and saying, “Hello, my name is **\_\_**.” Because it requires no proof, identification is not usually used alone to protect high-value assets or functions.

Identification is often used by web sites to remember someone’s profile or preferences. For example, a nationwide bank’s web application may use a cookie to store the name of the city in which the customer lives. When the customer returns to the web site, the application will display some photo or news that is related to the customer’s location. But when the customer is ready to perform online banking, this simple identification is insufficient to prove the customer’s actual identity.

Identification is just the _first_ step in the process of gaining entry to a system or application. The next steps are authentication and authorization, which are discussed next.

##### Authentication

_Authentication_ is similar to identification, where a subject asserts an identity. In identification, no proof of identity is requested or provided, but with authentication, some form of proof of the subject’s identity is required. That proof is usually provided in the form of a secret password or some means of higher sophistication and security, such as a token, biometric, smart card, or digital certificate. Each of these is discussed later in this section.

When the user presents his or her user ID plus a second factor, whether a password, token, biometric, or something else, the system will determine whether the login request will be granted or denied. Regardless of the outcome, the system will record the login event in an event log.

##### Authorization

After a subject has been authenticated, the next step is authorization. This is the process by which the system determines whether the subject should be permitted to access the requested resource in the requested manner. To determine whether the subject is permitted to access the resource, the system will perform some type of a lookup or other confirmation of a business rule. For instance, an access control table associated with the requested resource may have a list of users who are permitted to access it. The system will read through this table to determine whether the user subject’s identity appears in the table. If so (and if the type of requested access matches the type permitted in the table), the system will permit the subject to access the resource. If the user’s identity does not appear in the table, he or she will be denied access. Whether the login is successful or not, a record of the access attempt (and its disposition) is recorded in an event log.

The preceding example is simplistic but is often the means used to determine whether a user is authorized to access something. Typically, permissions are centrally stored by the operating system and administered by system administrators, although some environments permit the owners of resources to administer user access. See the section “Access Control Models,” earlier in this chapter.

> **NOTE** The terms _identification, authentication_, and _authorization_ are often misused by IT professionals who may not realize the differences between them. Security professionals and IS auditors need to understand the differences.

##### User IDs and Passwords

User IDs and passwords are the most common means for users to authenticate themselves to a resource—whether it is a network, server, or application.

**User IDs** In most environments, a user’s user ID will not be a secret; in fact, user IDs may be a derivation of the user’s name or an identification number. Some of the common forms of a user’s user ID are

- **First initial and last name** For example, the user ID for John Toman would be jtoman. Some systems may have a limitation on the permitted length of a user ID—for instance, eight characters. If two users’ user IDs would be the same (John Brown and James Brown, for example), the IT department could assign jobrown and jabrown, or jbrown and jbrown2.
- **First and middle initials and last name** This is similar to first initial and last name, but with fewer chances for “collisions” (two persons who would have the same user ID). User James Dean Cunningham would have a user ID jdcunningham.
- **First and last name together** Systems that permit longer user IDs with special characters such as periods (.) can adopt the common first.last form. User Mark Adams would have the user ID mark.adams.
- **Employee ID number** Some organizations assign unique identifying numbers to their employees, and these can be used as user IDs if those numbers are not kept secret. One advantage of using an ID number is that the user’s name becomes a characteristic of the user ID and not the user ID itself; in many cultures, for example, a woman’s name changes when she marries, but in an organization that uses ID numbers, the user ID need not change or reflect a name she no longer uses.

> **CAUTION** Confidential numbers such as social insurance (Social Security in the United States) or driver’s license numbers should not be used as user IDs, because these identifying numbers are generally meant to be kept confidential.

**Passwords** Whereas a user ID is not necessarily kept confidential, a password _always_ is kept confidential. A password, also known as a _pass phrase_, is a secret combination of letters, numbers, and other symbols that is known only to the user who uses it. End users are typically advised the following about passwords:

- **Selecting a password** Users should select a password that is easy for them to remember but difficult for others to guess. Passwords should not contain common words or the names of their family members or pets, nor should they contain numeric combinations representing birthdays or wedding anniversaries. Many environments require passwords of a minimum length (typically eight characters), and they require that passwords contain some combination of lowercase letters, uppercase letters, numbers, and symbols. Password vaulting tools usually have a means of generating strong, random passwords; this takes the burden from users having to create good passwords on their own, and password vaults also store passwords safely. Many environments also require that passwords be changed periodically, typically every 90 days. They also forbid the use of recently used passwords, which lowers the risk of someone else using a previous password.
- **Sharing passwords** Users must be told that they should _never_ share any password with _any_ other person, for _any_ reason! User accounts must be used only by the person to whom they are assigned and by no one else in any situation. In many organizations, sharing passwords can result in disciplinary action including termination of employment.
- **Transmitting passwords** Passwords should never be sent in an e-mail or instant message. An eavesdropper or any person who intercepts the message would then know the password and may be able to use it, compromising the integrity of the user account and possibly of some sensitive business information as well.
- **Writing down passwords** In environments with many applications, users must remember many passwords. Users will be tempted to write them down or save them in a spreadsheet or text file on their workstation. It would be acceptable for users to write down their passwords, provided they keep the paper with those passwords locked away or on their person always. Password vaulting eliminates the need to write down passwords.
- **Electronic password vaulting** With so many complex passwords to remember, users could store their passwords in an electronic password vault; a number of good ones are available, including Password Safe, KeePass, and MacPass.

> **CAUTION** Users should be advised _not_ to store their passwords in any online password archival service or in a browser.

- **Managing passwords in multiple environments** Users are urged _not_ to use the same password for every application. If anyone should discover or learn a user’s password in one environment, the person could try that same password in other applications and possibly be able to log in. Difficult as it is, users should use unique passwords for each environment. Password vaults simplify the use of large numbers of passwords by making them readily available to users when they present credentials to a system.

**User Account Provisioning** When a user is issued a new computer or network user account, he or she needs to know the password to access the resource. Generating and transmitting an initial password to a user can be tricky, because passwords should never be sent in an e-mail message. A sound practice for initial user account provisioning would involve the use of a limited time, one-time password that would be securely provided to the user; upon first use, the system would require that the user change the password to a value that no one else would know.

Several factors influence how passwords are initially determined, including

- **User locations** If a user is located near the administrators who provision user accounts, one of the administrators can personally deliver the new password to the user. If the administrator and the user are not near each other, the administrator can give the password to the user by phone. In no circumstance should the password be sent via e-mail or instant message.
- **System limitations** Some environments do not support initial-use passwords that expire in a short amount of time.
- **Data sensitivity** The value of the data protected by access controls (including user accounts and their initial passwords) should be a factor in determining how user accounts are provisioned. If the data or asset being protected is of high value, more elaborate means (such as those discussed in this section) may be needed. But if the asset value is low, then the rules for initial account provisioning may be more relaxed.

> **NOTE** Ideally, users will be required to change their password as soon as they have their new user account; however, some systems don’t even permit this. Security analysts or IS auditors who are examining an environment’s user account provisioning procedures should understand the environment’s capabilities as well as the risks and value of the assets being protected. Any recommendations should reflect system capabilities and asset value.

**Risks with User IDs and Passwords** Password-based authentication is among the oldest in use in information systems. While password authentication is still quite prevalent, a number of risks are associated with its use. The risks are all associated with the different ways in which passwords can be discovered and reused by others. Some of these risks are

- **Eavesdropping** Because of system limitations, some user account passwords are transmitted “in the clear” over networks, which permits anyone who is eavesdropping to intercept and reuse the password later on.
- **Key logging** Many types of malware are specifically designed to harvest login credentials that a user types on a keyboard. When credentials are captured in this way, they are sent back to the malware’s owner/operator for malicious use.
- **Phishing** If an intruder creates a phishing message and sends it to several users, one or more users may be tricked into entering valid credentials onto a system owned by the intruder, who can then use those captured credentials to access a system.
- **Finding a password written down** If a user neglects to protect the paper that contains written passwords, they may be discovered by a colleague or another person, who could use them or pass them on to another person for malicious use.
- **Finding a stored password** If an intruder (or even a trusted colleague) examines the hard drive of a user’s workstation, he or she may discover a file containing stored user IDs and passwords.
- **Exploiting a browser’s password store** An intruder may be able to exploit a vulnerability in a browser that will permit him or her to trick the user’s browser into providing login credentials. For this reason, it is recommended that browsers _not_ be used to remember passwords.

All of these risks follow the same theme: user IDs and passwords are static and, if discovered, can be used by others. For this reason, other, more secure, means for authentication have been developed. The techniques include biometrics, tokens, smart cards, and certificates, all of which are collectively known as _multifactor authentication_.

##### Multifactor Authentication

_Multifactor authentication_ (MFA) is so-called because it relies not only on “something you know” (namely, a user ID and password), but also upon “something you have” (such as a key card or smart card) and/or “something you are” (such as a fingerprint). Multifactor authentication requires not only a user ID and password, but also requires that the user possess something or use a biometric to form a part of the authentication. Several technologies are used for multifactor authentication, including

- **Tokens** These small electronic devices come in two forms. One form has a small display that shows a string of characters. The characters displayed are typed in during login, and if the characters are correct, the user will be able to log in to the system or network. The advantage of these tokens is that the displayed value will change frequently, making a “replay attack” almost impossible to conduct. The other type of token authentication is the use of a small USB key that contains information associated with the authentication. This information could be a digital certificate or other value.

- **Soft tokens** These applications run on mobile devices such as smartphones that function like hardware tokens but are implemented as functionally equivalent software programs.
- **SMS tokens** These values are transmitted to mobile devices such as smartphones. A user who logs in to an application or system first provides a user ID and password. Then a string of characters is transmitted to the user’s registered mobile device via carrier text message. The user types those characters into the login screen to complete authentication.
- **Smart cards** A smart card is a small, credit card–sized device that contains electronic memory and is accessed with a smart card reader. Many laptop computers are equipped with smart card readers for this purpose. A smart card may contain a digital certificate or other identifying information that is difficult or impossible to reproduce.
- **Digital certificates** This electronic document uses a digital signature to bind a public encryption key with a user’s identity. The system containing the digital certificate can be hardened so that the document cannot be exported, cloned, or moved to another computer. Typically, a digital certificate will reside within the workstation’s hardware or in a special computer chip, or it may be stored in a USB token.
- **Biometrics** Any of several technologies that measure a user’s physical characteristics. This is discussed in detail in the next section.

Users of multifactor authentication systems need to be trained on their proper use. For example, they need to be told not to store their tokens or smart cards with their computers, and to keep their smartphones or mobile devices locked except when in use.

##### Biometrics

A number of different biometrics authentication technologies have a common theme: all use some way of measuring a unique physical characteristic of the person who is authenticating. Some of the technologies in use are

- **Fingerprint** This is one of the most common forms of biometrics, primarily because fingerprint readers are compact and easy to manufacture, fingerprints don’t change much over time, and people are generally unafraid to scan their fingers. Many notebook computers have fingerprint scanners built-in, as do some computer mice. A USB fingerprint reader is shown in [Figure 6-2](/images/308b/ch0602.jpeg).

![Images](/images/308b/ch0602.jpeg)

**Figure 6-2** USB-connected fingerprint reader

- **Handprint** A handprint scanner is designed to measure the geometry of a person’s hand. Since the readers are much larger than fingerprint readers, handprint scanners are generally limited to physical access settings where a user is required to enter a PIN and scan his or her hand to gain access to a controlled area. A handprint scanner is shown in [Figure 6-3](/images/308b/ch0603.jpeg).

![Images](/images/308b/ch0603.jpeg)

**Figure 6-3** Biometric hand scanner (Image courtesy of Ingersoll Rand Security Technologies)

- **Palm vein** Similar to hand scanning, the pattern of veins in a person’s palm can be used as a reliable biometric. Palm vein readers resemble a computer mouse; a user places his or her hand a few inches above the reader so that it may read the palm vein patterns.
- **Voice recognition** Voice recognition is designed to recognize the specific patterns in the sound of spoken words. One advantage of voice recognition is that it usually does not require additional computer hardware, since most workstations have built-in microphones. Some disadvantages of voice recognition include voice changes during head and chest colds, or changes when a user is angry, sad, or nervous.
- **Iris scan** The human iris (the muscle surrounding the pupil of the eye) is similar to the human fingerprint in that it is unique to each person. A biometric iris scanner takes a high-resolution image of the human iris. This is similar to a retina scan, which is less favored because a subject is required to place his or her eye very close—maybe uncomfortably close—to a retina scanning device.
- **Facial scan** Facial scanning involves fine measurements of the angular dimensions of the human face. This means that computer imaging software will measure the relative distances between key features on a human face. Facial scanning, like voice recognition, can utilize built-in computer hardware (in this case, a camera) and requires only additional software. Some models of laptop computers utilize facial recognition for user authentication.
- **Handwriting** Two primary forms of handwriting recognition are available—both involve the use of a subject signing his or her name. One technology measures the dynamics of the signature as it is written on the signing surface. The other technology measures the acceleration of the pen or stylus while the subject signs his or her name.

Biometric technologies share a number of common operational challenges and traits that are discussed here.

**Biometric Registration** Each type of biometrics requires some kind of initial registration. Some biometric systems permit a user to self-register on their own workstation, while others require attended or assisted registration. Registration usually involves the biometric system taking several initial measurements so that it can develop an “average” reading for the subject.

**Biometric Measurement Variances** Biometric measurements are not exact; there will be small differences in the biometric being measured from one authentication to the next. Some of these differences result from the gradual changes that a human body undergoes over time. The biometric system will need to incorporate these newer measurements into a user’s baseline so that users will continue to authenticate properly.

Several key measurements in biometric systems are usually adjustable:

- **False reject rate** This is the rate at which valid subjects are rejected. This occurs when the biometric system has too small a margin of error.
- **False accept rate** This is the rate at which invalid subjects are accepted as valid. This occurs when the biometric system has too large a margin of error.
- **Crossover error rate** This is the point at which the false reject rate (FRR) equals the false accept rate (FAR). This is the ideal point for a well-tuned biometric system.

**Biometric Usability Issues** A number of issues will arise in an organization where some employees will be reluctant to use a biometric system:

- **Sanitary** For biometrics such as door entry systems, many persons will be touching the biometric system in the course of a day. Some employees will cite health-related objections to the use of biometrics on account of spreading germs.
- **Privacy** Some employees feel that scanning their fingerprints or irises constitutes an invasion of their privacy. What they need to know is that a fingerprint scanner (for instance) does not record the user’s actual fingerprint, but instead a computed “hash” of the intersections in the lines in their fingerprint. Few, if any, biometric systems store actual fingerprints.

> **NOTE** Because biometrics involves the measurement of a subject’s physical characteristics, a number of employees are bound to object to its use—sometimes based on valid concerns and sometimes not.

##### Reduced Sign-On

_Reduced sign-on_ refers to an environment where a centralized directory service such as LDAP (Lightweight Directory Access Protocol), RADIUS (Remote Authentication Dial-in User Service), Diameter, or Microsoft Active Directory is used by several applications for authentication. The term comes from the result of changing each application’s authentication from stand-alone to centralized and the resulting reduction in the number of user ID–password pairs that each user is required to remember.

> **EXAM TIP** The terms “reduced sign-on” and “single sign-on” are often interchanged. Many times, a reduced sign-on environment is labeled as single sign-on. They are not the same, however.

##### Single Sign-On

_Single sign-on_ refers to an interconnected environment where applications are logically connected to a centralized authentication server that is aware of the logged-in/-out status of each user. At the start of the workday, when a user logs in to an application, he or she will be prompted for login credentials. When the user logs in to another application, the application will consult the central authentication server to determine whether the user is logged in and, if so, the second application will not require the user’s credentials. The term refers to the fact that a user needs to sign on only one time, even in a multiple-application environment.

Single sign-on is more complex than reduced sign-on. In a single sign-on environment, each participating application must be able to communicate with a centralized authentication controller and act accordingly by requiring a new user to log in, or not.

##### Access Control Lists

_Access control lists_ (ACLs) are a common means to administer access controls. ACLs are used by many operating systems and other devices such as routers as a simple means to control access to a resource such as a server or a network.

On many devices and systems, the list of packet-filtering rules (which give a router many of the characteristics of a firewall) is known as an ACL. In the Unix operating system, ACLs can control which users are permitted to access files, directories, and run tools and programs. ACLs in these and other contexts are often simple text files that can be edited with a text editor.

#### Protecting Stored Information

Information systems store information primarily in the form of databases and flat files. Operating systems and database management systems usually provide minimum protection of databases and files by default; organizations need to determine the correct level of protection that is pursuant to the value and sensitivity of information. The controls that may need to be enacted are discussed in this section.

##### Access Controls

Access controls are the primary means used to protect stored information from unauthorized accesses and unauthorized users.

Operating system access control settings (often in the form of ACLs) are used to determine which user IDs are permitted to access flat files (as well as the directories containing them). Following the principle of _least privilege_, all flat files containing sensitive information should have access restricted to only those users and processes that must be able to access them. No user or process that doesn’t have a need to access specific files should be able to do so.

##### Access Logging

Operating systems and database management systems should be configured so that all access attempts to files and directories are logged. This practice promotes accountability and provides a trail of evidence in the event that a forensic investigation should be conducted in the future.

Access logs themselves must be highly protected—ideally, they should be stored in a different storage system than the one that stores the data whose access is being logged. Access logs should not be alterable, even by database administrators and system administrators, so that no one will be able to “erase his or her tracks” should someone decide to tamper with sensitive information and then attempt to hide the evidence afterward.

Access logging is effective only if someone actually examines the logs. Because this can be a time-consuming activity, many organizations utilize alert-generating tools such as a SIEM that sends alerts to key personnel when particular audit log entries (such as unauthorized access attempts) appear. These alerts permit personnel to act upon anomalous events when they occur.

##### Backup and Media Storage

Data stored on information systems can be lost or damaged. Some of the ways in which this can occur include

- **Hardware failure** Many of the components in a storage system—particularly hard disks—are subject to failures, however rare they might be nowadays. These failures can result in data being irretrievable.

- **Administrator error** A system or database administrator can accidentally erase or alter information in a way that is not easily undone.
- **Software bug** An erroneous section of code in application software can inadvertently wipe out data in a database or in flat files. This can occur with an organization’s own programs or with programs that are supplied by a software vendor.
- **Malware** Any attack such as ransomware that results in data destruction.

Any of these possibilities should be reason enough for an IT operation to back up all critical data. Backing up data means making copies of it on other media in case the original media (or the system that it is stored on) fails. Then, after the original system is repaired, data can be copied from the backup media and processing can be resumed.

**Backup Tools** Organizations often use backup tools that help the backup process be as efficient as possible. Some backup tools automatically manage backup media volumes and make data restoration easier than if it had to be done manually.

**Protection of Backup Media** Because backup media is often transported from place to place, there are opportunities for media to be misplaced or lost in transit. For this reason, data on backup media should be encrypted so that any third party who happens to find a backup media volume will not be able to retrieve any data from it. When backup media is encrypted, a lost tape means only the loss of an inexpensive asset and not a potential compromise of sensitive information.

**Off-site Backup Media Storage** To protect data from disasters, backup media should be stored at a location away from the original data. For example, if data from a server was backed up onto tape and the backup tapes are stored near the server, both server and backup media could be destroyed in an event such as a fire or flood. If backup media were stored in another location, however, then only the original server would be destroyed, but the system could be recovered using data on backup media at the other location.

Selecting an off-site media storage facility requires the organization to weigh several factors, including distance from the original data (too close means it may be destroyed in a regional disaster; too far away means it may take too long to obtain it when needed), security of the storage facility, security of the transportation of media back and forth between the original location and the off-site storage facility, and recordkeeping available so that it can be easily determined which media volumes are at the off-site facility at any given time. Security of the off-site storage facility should be at least as good as the security in the original location so that the protected information is not more vulnerable at the off-site facility.

**E-Vaulting** Many organizations are migrating away from tape backup to e-vaulting, where data is copied to a cloud-based e-vaulting service provider. While one disadvantage lies in the potential time it takes to copy a large data set over the Internet, e-vaulting can reduce or eliminate the administrative burden of managing and protecting backup media. With e-vaulting, data can be restored directly over the Internet without having to transport backup media to a location where it is needed.

**Restoration Testing** The organization should occasionally test backup media and data restoration software to make sure that data is actually being backed up onto the backup media and that it can be retrieved. I personally know of an organization that believed it was backing up its databases every day until it needed to restore one, only to find out that nothing was ever being written to the backup media. Clearly, the organization was not testing its backup system. Restoration tests should be scheduled and their results recorded.

**Media Inventory** A periodic inventory of all backup media (whether physical in the form of backup tapes, or virtual in the form of e-vaulting volumes), including media at the off-site location, should be performed. This will ensure that all media volumes are being handled properly and that none has been lost or misplaced. The results of each inventory should be recorded and any anomalies corrected.

> **NOTE** The loss of one or more backup media volumes during an inventory would be considered a security incident, unless the media was known to be encrypted.

##### Patch Management

Patch management is an IT operational process whereby security and functionality patches are obtained, tested, and installed on information systems. The purpose of patch management is to keep systems running on currently supported vendor software and to ensure that all known security vulnerabilities are closed and software defects fixed.

Patch management is typically managed with tools that are quickly able to assess the “patch level” of many servers and then install patches en masse.

There are different points of view with regard to patches. Should all patches be installed, or just some patches? There are pros and cons to each approach. If all security patches are installed, then indeed all known vulnerabilities will be closed. However, some security patches may be unnecessary because specific components that are patched might not be used. If an organization chooses to install only the most critical patches, a security analyst will need to perform a risk analysis each time a security patch is released so that a formal determination of need can be established. And even if an organization does install all available security patches, a risk analysis can help to determine how quickly each patch needs to be installed.

The argument against installing patches is that each patch can add a tiny increment of instability to the system. Although the base operating system undergoes exhaustive testing, far less testing is performed on security patches before they are released. This is evidenced by the occasional security patch that breaks some other functionality—this does not happen often, but it does happen sometimes. This is another reason why organizations should first test patches (security and other) on test environments prior to installing them on production systems. Otherwise, there is a small chance that a new patch will cause unexpected problems that could be difficult to isolate.

Patch management is an integral part of the vulnerability management process, discussed next.

##### Vulnerability Management

The purpose of vulnerability management is to identify and manage vulnerabilities in IT applications and infrastructure. Vulnerabilities can result from errors in configuration, from flaws in the overall architecture, or from newly discovered weaknesses reported by security researchers.

Vulnerability management requires a number of distinct but connected activities.

**Subscribing to Security Alerts** Most computer hardware and software manufacturers have a service whereby customers can be made aware of new vulnerabilities, weaknesses, threats, and the remedies for these. Often, the fixes for vulnerabilities, weaknesses, and threats are security patches or bulletins that advise changes in configuration. There are also some high-quality, nonvendor-related sources for security alerts, including Secunia, Bugtraq, InfraGard, Full Disclosure, and US-CERT. Organizations should subscribe both to any available vendor sources as well as one or more of these nonvendor sources to get a full picture of new vulnerabilities as well as guidance on how to mitigate them.

**System and Device Hardening** This is concerned with activities to design and implement standards for system and device configuration, to increase security and reduce the risk of compromise. Hardening is discussed in more detail later in this section.

**Vulnerability Scanning and Penetration Testing** This involves the use of tools that scan or examine computers, network devices, or application programs with the purpose of finding any vulnerabilities. Organizations that have any computers or applications accessed over the Internet (including simple web sites) should consider performing regular scans to make sure that those computers and applications are free of any high- or medium-risk vulnerabilities. An organization that does not remediate vulnerabilities faces the real threat of the computer or application being attacked and compromised, which could lead to a loss of sensitive information. Many commercial and open-source tools are available to inspect computers and applications for vulnerabilities; the better tools also rank findings by the level of risk and include instructions on how vulnerabilities can be fixed. Organizations also need to remember that scanning a system once and removing all vulnerabilities does not mean that there will never be new vulnerabilities in the future; this is because security researchers regularly find new vulnerabilities in programs and systems. A system that is secure today will most certainly be less secure tomorrow.

**Patch Management** This is the process of responding to known vulnerabilities by installing security patches on target systems and devices. This process is described in detail in the preceding section. Patches should be applied proactively, and vulnerability scanning used as a step to confirm that all necessary patches have been installed on all systems.

**Corrective Action Process** This is the process of recording vulnerabilities into an incident tracking process so that vulnerability remediation can be assigned to a person or team and be formally tracked. Corrective and preventive action processes are discussed early in this chapter.

##### Threat Management

The purpose of threat management is to acquire intelligence on credible threats that may potentially occur in the organization. When a threat is seen as actionable, the organization will take steps to defend itself against the threat, to prevent the threat outright or—at least—reduce the impact of the threat if it cannot be avoided entirely. The activity of proactively looking for active threats in an environment is known as _threat hunting_. The activity of conducting analysis regarding potential threats is known as _threat modeling_.

Organizations doing threat management will typically obtain information from two types of sources:

- **Internal** Security tools and systems such as IPSs, firewalls, data loss prevention (DLP) systems, malware prevention systems, and web-filtering systems will detect events that may be indicators of compromise (IOCs).
- **External** Organizations may subscribe to one or more threat intelligence feeds that contain information about threats occurring elsewhere.

For threat management to be effective, organizations need to be able to filter threat information so that only relevant and actionable threats are seen. Further, organizations need to know what action is appropriate to take when a credible threat is seen.

##### System Hardening

_System hardening_ is the process of changing the configuration of a system (which could be a server, subsystem, application, tool, or network device) so that it is more resistant to malfunctions and attacks. The principles behind system hardening consist of the concepts discussed in this section.

**Changing Systems from Multifunction to Single-Function** An individual server that performs many functions may require the presence of several services, software modules, or applications to be running at once. Consolidation may reduce the number of servers and make an environment simpler, but it also increases risk. A vulnerability on a multifunction server places all services on the server at risk.

In an environment where each server performs a single function, a vulnerability in a function will place only that function at risk. Server virtualization and containerization make it easier to separate functions into separate security zones (known as _guests_ in virtualization or _containers_ in containerization) while permitting them to continue to run on one physical system.

**Removal of Unnecessary Services** Only the services and software features required to support a system’s purpose should be installed and running; all other services and features should be disabled and, if possible, removed altogether. Removing unnecessary services reduces the “attack surface” on a system only to those services that are required.

For example, the Sendmail program should be disabled (prevented from running) or removed on Unix systems that do not need to send or receive e-mail. Sendmail is a large, complex program that is the subject of ongoing security research, and new vulnerabilities are discovered from time to time.

**Limiting Functionality or Privilege of Necessary Services** After all unnecessary services have been removed from a server, only those that are required for the server’s function will remain. The functions that any necessary service is permitted to perform should be reduced to those that are necessary only. Accomplishing this will vary, but limiting functionality should follow the principle whereby any unneeded function should be disabled if the configuration will permit this. For example, if a specific software program should not ever need to drop a table from a database management system, then the user ID that the software program uses to log in to the database management system should not have the privilege to drop a table.

Each necessary service or program should be configured to run at the lowest possible privilege. In the past, it was common for all generic services (and even many applications) to run at root, super-user, or administrator level. Often this is unnecessary, and on systems where the privilege levels can be configured, each service should run at a lower service where possible. The advantage of this is that if a particular service is compromised through a vulnerability, the attacker’s ability to compromise the entire system may be limited to the ability afforded by the privilege level assigned to the service.

**Changing Default Passwords** One of the easiest ways for an intruder to attack a system is through known default passwords. Often, the manufacturers of systems and software utilize a documented default password that makes it easy for a new user or customer to begin using the system. But all too often, these default credentials are never updated, which results in systems that are vulnerable to attacks that are easy to carry out.

Before being connected to a network, every system should be changed so that all accounts on all devices have nondefault passwords.

**Using Nonpredictable Passwords** If an intruder is able to compromise a system, he or she may (if able) attempt to retrieve the system’s encrypted user account passwords and crack them to discover the passwords for other user accounts on the system. If the intruder has been able to crack one system’s passwords, he or she may attempt to log in to neighboring systems (those in the same organization) using the same user IDs and passwords. If many or all systems use the same passwords, particularly for administrative accounts, the intruder may be able to compromise many or all other systems easily in the environment. Similarly, if the intruder is able to detect a pattern in the use of passwords, many systems may be compromised.

**Removing Nonessential User IDs** Exploiting access privileges is one of the easiest techniques available to system hackers for breaking into a target system. Often, a system can be compromised by attacking nonessential user IDs, such as “guest” accounts. Every user account that does not serve a specific, required purpose should be disabled or removed.

Some types of systems require the presence of special accounts, even though they may not be required for interactive login. System engineers should look for a way of preventing interactive logins for these types of accounts without crippling the services that use them. Some operating systems support the notion of a service account that can be used by system and application programs but will not permit interactive login.

> **NOTE** The use of more advanced authentication technologies, such as two-factor authentication or biometrics, may make it far more difficult for an intruder to attack target systems successfully through user ID and password guessing.

**Reducing User Privileges** The privileges required by each end user should be reduced to the minimum privileges necessary for each user to perform his or her tasks. Similar to the principle of reducing privilege levels for system services and applications, user privileges should be reduced so that the user is not permitted to perform any functions beyond what is required. This is similar to the principle of _least privilege_ that is discussed earlier in this chapter.

> **NOTE** Many organizations continue to permit their end users to be local administrators on their workstations. This practice should be discontinued, and local administrator privileges should be granted on an exception basis, documented, and audited.

**Reduce or Eliminate Interserver Trust** Some operating systems, such as Unix and Linux, can be configured to trust users on other systems. Some of these trust arrangements (such as _rlogin_) assume the integrity of other systems and are vulnerable to attack. For this reason, interserver trust should be used with care.

Single sign-on (SSO), when configured properly, is considered reliable and need not be eliminated based on the principle of removing interserver trust. However, even modern SSO and other authentication services must be designed and implemented securely to avoid misuse and attack.

System and device hardening have been a topic of discussion and innovation over the past three decades. Consequently, there are many good sources for hardening standards, guidelines, and instructions, including US-CERT, NIST, SANS, and the Center for Internet Security.

**Implement Virtual Keyboards** In certain high-risk situations on servers and workstations, there may be a particular concern regarding the threat and impact of various types of key loggers. The use of a virtual keyboard can reduce this risk. A _virtual keyboard_ is a software program that emulates a keyboard and is operated by clicking on characters on the screen instead of the hardware keyboard.

##### Securing Virtualization Environments

Many organizations have adopted virtualization technology to make more efficient use of their server hardware. _Virtualization_ permits two or more operating systems to run concurrently on a hardware system, each with its own share of resources and each operating as though it were running on its own physical server. Architecturally, virtualization inserts another layer of software between system hardware and the operating system to manage multiple copies of running operating systems. _Containerization_ permits two or more tools or applications to run concurrently in respective, isolated _containers_ in an operating system.

Like all other types of systems, virtualization and container environments must be hardened to reduce the likelihood and impact of attacks. The principles of hardening virtualization environments are

- Limit and monitor physical access to hardware resources.
- Restrict and periodically review administrative access.
- Remove unnecessary functions and services.
- Maintain current versions of software.
- Enable logging, and review those activity logs.
- For critical systems, monitor for availability and performance.
- Connect mechanisms that generate alerts to a centralized alerting environment.
- Back up all virtual machines and containers, including raw files.
- Use only encrypted remote administration such as Secure Shell (SSH) and multifactor authentication.
- Limit or eliminate file sharing.
- Implement anti-malware software.
- Patch guest OS and VM hypervisors early and often.
- Implement file integrity monitoring, and connect it to the centralized alerting environment.
- Implement time synchronization.
- Disconnect or remove unused devices and peripherals.

If these principles sound familiar, they should. These are similar to the principles used to harden computer operating systems. However, virtualization and container environments are really nothing more than a special kind of operating system, where the applications that run on it are operating systems.

Virtualization technology is discussed in detail in [Chapter 5](/308B/Chapter05.html).

#### Managing User Access

Managing login credentials for end users (as well as for automated processes) requires that user accounts be managed in a highly consistent, organized manner. Because login credentials are often the only barrier between intruders and sensitive or valuable information, the consequences of poor security access management can be devastating to an organization. With the mass migration of business applications to the cloud, access management is considered the new perimeter.

The processes associated with user access are user access provisioning, user access termination, and internal job transfers. Each is discussed here.

##### User Access Provisioning

User access provisioning is the process whereby user accounts are created for new employees and other personnel. This activity should utilize a formal, documented access request and approval process that specifies who is authorized to request user accounts, who is authorized to approve access requests, and how (and which) activities are recorded.

Requests for administrative or privileged access should require additional approvals. The reason for this is that administrative and privileged accounts have higher risks associated with them (the potential for damage is directly proportional to the level of privilege).

User access provisioning occurs at the time of hire for new employees, but it also occurs when individual (or groups of) employees require additional access to applications or access to new applications. The process of vetting each account should address the following items:

- Is this person still actively employed and in good standing?
- Does this person require this access to perform his or her duties?
- Does the business owner of the system approve access?

A great deal of care is required in this process. The risk of errors can be devastating for an organization: the worst-case scenarios involve unauthorized insiders or outsiders having access to highly sensitive or valuable information. The practical effects of an error in user access management can be as grave as a hacking incident where an attacker is able to access a system to steal or alter sensitive information.

##### Employee Termination

When a worker’s employment or contract ends, all logical and physical access privileges must be removed, and quickly. In many situations, removing access within 24 hours is sufficient, but some situations warrant immediate removal. For example, if an employee is being terminated, the organization should arrange to have the employee’s access terminated at once so that the employee does not have _any_ opportunity to take emotionally charged revenge against the employer. Also, if the employee has access to high-value information, access should be removed immediately to protect that information from misuse.

User accounts should be locked in a way that prevents any other employees from being able to use the account. For example, if user access administrators change the password to “LOCKED” (or something less blatant than this example), other employees who knew of this method could log in to the terminated employee’s account and perpetrate acts that could be blamed on the terminated person (indeed, the terminated employee could also do this). Instead, user accounts should be locked by methods that are sophisticated or effective enough to prevent _anyone_ from using them for _any_ purpose. Some environments have the ability to lock a user account _administratively_; others must be _effectively_ locked by changing the password to prevent anyone from logging in.

---

##### The OPM Incident

In 2015, the U.S. Office of Personnel Management (OPM) suffered a major security breach wherein private information (including the details of background checks, as well as more than 5 million sets of fingerprints) on 18—21 million current and former U.S. government employees was stolen. This happened because of the failure or outright absence of controls designed to detect and prevent intrusions and data exfiltration.

The OPM is just the one in a long string of breaches that have occurred in public and private organizations in the past several years (other, more recent, breaches such as Equifax Marriott are comparable in their scale and impact). What is especially egregious about this breach is the breadth and depth of personally identifiable information (PII) that was compromised.

The OPM incident should be a significant lesson for organizations that protect sensitive or valuable information: the process of vetting new access requests cannot be taken lightly, for the consequences of getting it wrong can be devastating.

---

As with user access provisioning, there must be detailed and accurate recordkeeping associated with terminated users. This includes information on who initiated the termination notification process, as well as the names of user access administrators who terminated each user access account and the date and time when user access was terminated.

Additional safeguards may be warranted, including

- **Notifying personnel/other parties of employee’s termination** To prevent the just-terminated employee from being able to conduct social engineering on co-workers and other parties, the organization should notify all relevant parties at once of the termination.
- **Review of terminated employee’s actions prior to termination** The employer should presume that a terminated employee may have had some suspicion about being terminated. The employee may have stolen sensitive or valuable information or may have sabotaged systems, devices, or application source code. A thorough review of the terminated employee’s activities for days, weeks, or longer prior to the incident may be needed to detect whether any inappropriate activities were performed.
- **Review of terminated employee’s actions after termination** Access logs should be examined to make sure that there are no activities associated with the terminated employee’s user accounts after the time of termination. Such activities could be an indication that the terminated employee still had access to information, or that some other employee is attempting to perform unauthorized actions that could be blamed on someone else. This should be done even when the terminated employee’s accounts were locked. Anything can happen.
- **Periodic access reviews** Periodic access reviews should take place in all application and system environments to make sure that all users who have access still need it. These reviews should include a check to ensure that all terminated employee accounts were actually terminated properly and in a timely manner.

> **CAUTION** A defense-in-depth method should be used when terminating employee access. For example, in the case of building access, the employer should collect the employee’s building access keycard _and_ the keycard should be logically disabled so that it can no longer be used.

##### Employee Transfers

Employees transfer from one position to another in many organizations. These transfers may take place regularly or sparingly, depending on the size and type of organization and the amount of turnover.

Historically speaking, organizations are very practiced with provisioning new employees and transferring employees with new accesses that they require. Organizations are also reasonably effective when handling employee terminations. However, transfers are far more complicated, because, ideally, employees’ old access rights _should_ be rescinded when their new accesses are provisioned. This often does not take place, however, for a number of reasons. First, employees transferring from one job to another often have lingering responsibilities in their old positions, making immediate revocation disruptive. Unless the user access management department has effective processes and recordkeeping, they are likely to forget to revoke those old accesses later on.

In organizations that do not manage user access changes that are related to employee transfers, a result is a growing number of employees who have a growing list of access privileges. This phenomenon is sometimes known as _accumulation of privileges_ (or _privilege creep_).

##### Password Management

The management of passwords is one of the responsibilities of the user account management function. There are several activities within user account management where passwords are managed or handled in some way. These activities are described next.

**New User Account Provisioning** When users are issued new computer or network accounts, a means for transmitting the password to the user needs to be determined. The password should not be sent via e-mail, since anyone eavesdropping (or reading messages later) would be able to intercept and later reuse those passwords.

**Account Lockout** If a user tries several times to log in to an account, the account may be automatically locked. The account may remain locked until one of the following events occurs:

- The user calls a service desk to identify him- or herself and get the password reset.
- A set period of time (usually 15 to 60 minutes) elapses.

**Forgotten Passwords** When users forget their passwords, they need to get their password reset somehow so that they can resume using their access account. Several methods are available for resetting passwords, including

- **Self-service with secret question** Users access a “forgotten password” screen where they are asked a secret question. If they can answer the question successfully, they are taken to a screen where they create a new password.
- **Self-service with password or URL mailed to them** Users access a “forgotten password” screen, where they cause a new password or one-time URL to be sent to their e-mail. If a password is sent via e-mail, the application should require the user to choose a new password on the first login. If a URL is sent via e-mail, the URL will take the user to a screen where the user is required to choose a new password. This method will not work if the user has forgotten his or her e-mail password.
- **Assisted password reset** Users call a service desk that uses a reliable means for identifying the user, usually by asking for some information that other employees or persons would not know. When the user has been successfully and properly identified, the service desk provisions a new password and tells it to the user over the phone.

Systems and applications usually contain a number of automatic password controls that are related to the selection and use of passwords. The current practices for automatic password controls include

- **Account lockout** User accounts become automatically locked after a number of unsuccessful login attempts. This measure is used to prevent automated password attacks against a user account. The lockout threshold is usually from 4 to 10 unsuccessful attempts. If the user successfully logs in or a specific period elapses, the counter is usually reset.
- **Password length** User accounts are required to contain a minimum number of characters, usually seven or eight, but sometimes longer passwords are used in highly sensitive environments. Many organizations have transitioned from using the word _password_ to the term _passphrase_ to get users to think of passwords as a group of words instead of a single word. This encourages users to choose longer passwords, which are more difficult for intruders to guess.
- **Password complexity** Passwords are often required to contain more than one class of character, the classes being lowercase and uppercase letters, numbers, and symbols. Many systems require three or even all four types of characters in passwords.
- **Password expiration** Systems often require users to change their passwords periodically, as often as every 30 days to as seldom as every year.
- **Password reuse** Systems can require that users be unable to choose a new password that is the same as the previous password, or even the same as the previous _N_ passwords. This prevents users from switching back to the same familiar passwords.
- **Password rechange** Systems can require that users wait a minimum period (for instance, seven days) before they can rechange their password. This is designed to prevent users from quickly cycling back to their old familiar password. For example, if a system forbids the use of the last 10 passwords and at least seven days between password changes, it would take a user 70 days to get back to an old familiar password; these settings would discourage such a practice.

> **NOTE** Password controls should be chosen based upon the settings of other controls, as well as on system limitations, service desk processes, and the value or sensitivity of the information being protected.

---

##### Passwords: To Expire, or Not to Expire

We have all become accustomed to (I didn’t say _like_ or _appreciate)_ periodic password expiration, typically every 90 days but as often as 30 days. This has been accepted as a good practice and a defense against situations in which an intruder has obtained a user’s login credentials.

In 2019, pundits began a new conversation, suggesting that password expiration no longer reduces risk and may in fact increase risk. More are beginning to listen, although no official standards such as those created by PCI-DSS or NIST have followed suit. I think the conversation will take more time before we in cybersecurity officially change our minds.

The argument against password expiration is this: people who are required to change passwords more frequently will choose weaker passwords and will use a predictable method for creating new passwords (for example, Summer$2019, Fall$2019, Winter$2019, Spring$2020, and so forth). These passwords pass standard complexity requirements but are easily guessable.

---

##### Managing Tokens, Certificates, and Biometrics

Multifactor authentication controls that include tokens, certificates, and biometrics require support and management processes that will equip users with the knowledge and devices they require and with support processes to help them in times of trouble. Areas where support processes require additional steps include those described next.

**Provisioning** Provisioning user accounts when multifactor authentication is used does require more effort. Whereas user ID-and-password accounts can often be provisioned remotely, multifactor authentication provisioning sometimes requires in-person presence. For instance, users need to be given a hardware token (although one could be shipped to the user), a digital certificate needs to be installed on the user’s computer (although this may be possible through a remote network connection), or a user must enroll his or her biometric, which may not be possible if the user is not on-site.

**Training** Training in the use of multifactor authentication will teach users how to use it properly. Without adequate or effective training, users will call the service desk more frequently, raising support costs even higher (the cost of implementing multifactor authentication is many times that of ordinary user ID-and-password authentication).

Where hardware tokens (or USB tokens or smart cards) are used, users need to be trained to carry their hardware devices separate from the computers they use. They need to understand that if their computer and hardware authentication device are kept together and stolen, an intruder may have an easier time breaking into the organization’s systems.

**Authentication Troubles** Multifactor authentication is more complicated, and this can trip up some end users. While digital certificates are relatively hands-off (aside from forgetting the password), tokens and biometrics have their share of support issues. Biometrics that are configured with too low a tolerance for error may lock out legitimate users (and, if configured with too high a tolerance, may admit outsiders), which could require that users re-register or that their systems be examined.

Token and smart card authentication methods use tiny electronic devices that cannot be considered absolutely trouble-free. While these devices are highly reliable, a few things can go wrong that may require their replacement.

The IT service desk will need to develop workaround procedures when users are not able to log in using their multifactor authentication methods. Making a user wait until he or she can be re-registered for biometrics, for instance, will be unacceptable in many instances.

**Replacing Devices** As with keycards and other small objects, lost tokens and smart cards will be a semi-regular occurrence in a large organization. Users will lose them, damage them (spilled coffee and so on), or leave them behind in a hotel room or their other suit jacket (the one that’s home while they are on location).

The IT service desk will need to develop procedures for emergency authentication while users are awaiting replacement devices. Making users wait for replacements (even when shipped overnight) will be unacceptable in many cases. Instead, information systems may need to be able to fall back to user ID-and-password authentication for emergencies for individual users.

#### Protecting Mobile Computing

The year 2005 was the first year that laptop computers outsold desktop computers. This development helped IT security professionals recognize that most new end-user computers were not going to be as easy to protect as they once were: there would be more and more laptop computers, containing sensitive data, away from the protection of corporate buildings and firewalls, and less available for automated overnight updates.

Corporations struggled to adjust their PC management and support, as well as policies governing the use of laptop computers. Standard safeguards put in place include endpoint management software capable of communicating with laptops over slower, sporadic communication links; built-in firewalls and antivirus programs; whole-disk encryption; cable locks; policies that require employees to keep their laptops safely locked away or in their custody at all times; and policies that state that laptops are for business use only and for employee use only.

Management capabilities for protecting laptop computers were beginning to mature in the five years since they were outselling desktop computers. Then even more disruptive technological developments occurred: smartphones, mobile devices, and tablet computers.

In just five years after laptop computers outsold their desktop counterparts, smartphones and tablet computers were outselling laptop and desktop computers combined, and this trend continues. Smartphones and mobile devices are far more disruptive than laptop computers were: for the most part, smartphones and mobile devices are being purchased by consumers instead of corporations, and enterprise-class management capabilities for protecting smartphones and tablets are still maturing.

##### Laptop Controls

Enterprises generally enact a broad suite of policies and controls regarding the use of laptop computers. The most common are

- Whole-disk encryption
- Firewall
- Host-based intrusion prevention system
- Cloud-based web content filtering
- Advanced anti-malware (antivirus software is no longer sufficient)
- Restricted privileges, including limitations on the ability to change configurations and limitations on which applications can be installed
- Removable storage restrictions—usually limiting or prohibiting the use of USB-attached storage and optical media
- Multifactor authentication, such as a smart card or biometric device
- Policies requiring employees to keep laptop computers with them at all times unless they are in a locked room, and often requiring cable locks for settings such as hotel rooms
- Policies permitting only assigned employees to use company-issued laptop computers (no use permitted by other family members or friends)

##### Smartphone and Mobile Device Controls

The productivity gains that are realized through the use of smartphones, mobile devices, and tablet computers are compelling. However, their use means that sensitive company information now resides in mobile devices that the enterprise does not own and cannot easily control. Enterprises are responding to the onslaught of employee-purchased smartphones and mobile devices that are being used to connect to corporate e-mail and other systems, and they are struggling to control these devices to continue protecting sensitive information. This disruptive phenomenon is known as “bring your own device,” or BYOD.

The controls that organizations are implementing for smartphones and mobile devices include

- **Authentication policies** Many enterprises are requiring employees to enact auto-lock and create longer or complex passwords on their smartphones and mobile devices. This helps to increase the likelihood that an intruder who steals a device will be unable to access it.
- **Encryption** Where possible, enterprises are enacting controls to cause any locally stored data to be encrypted.
- **Remote wipe** Enterprises are enacting controls that enable them to wipe any smartphone or mobile device remotely when it is reported lost or stolen. In some instances, an organization will be able to wipe just the corporate data on the devices, but sometimes the only remedy is wiping the entire device. For this reason, employees are often reluctant to report a missing device out of fear that all of their personal content may be destroyed.
- **Download restrictions** Enterprises are enacting controls to restrict which applications a user may download onto a smartphone or mobile device.

Enterprises are coming to terms with management, control, and policy issues regarding mobile devices. Employees are buying them on their own, often with the expectation that they will be able to access corporate e-mail and other functions. Security and risk managers are cringing because they have just gotten laptops under control, which (relatively speaking) was simpler since the company typically owns them and can more easily control whether they can connect to corporate networks.

But on the positive side, several enterprise management tools, called _mobile device management_ (MDM), are available to facilitate more effective control of mobile devices.

> **NOTE** Security controls for mobile devices are not _additional_ controls, but _compensating_ controls that reduce data compromise risks because they are usually not protected by other physical and logical protections such as locked doors and firewalls.

### Network Security Controls

Enterprise networks—and the network-based services that support systems and applications—require protection and control so that they will be reliable and secure. Networks carry information for virtually all applications and computing services; a compromise of network security could seriously threaten all of the applications, computing services, and information in an organization.

#### Network Security

Users access sensitive information through networks. While databases and operating systems that contain data will have controls in place to protect information, many controls are required at the network level that protect systems and other network-based resources from various threats. Countermeasures are available to prevent or detect many threats.

##### Network-Based Threats

Threats are the intent and ability to cause harm. In the context of a network, a threat may have the ability to disrupt network communications or intercept communications in order to acquire sensitive information.

The most prevalent network-based threats include

- **Access by unauthorized persons** Because some network-based resources do not include authentication by their very nature, it is essential to restrict network access at the point of entry. This means that users (and system-based resources) must be authenticated prior to being permitted to communicate on the network. Without that authentication, a user is not permitted to send any messages on the network; nor are they permitted to listen to any network traffic.
- **Spoofing** This is the act of changing the configuration of a device or system in an attempt to masquerade as a different, known, and trusted system. There are several reasons why someone would want to do this; primarily, the reason will be to attract incoming connections in order to steal identities that can later be used illicitly. For example, an intruder may successfully spoof an internal web server and present an authentication page where users will enter their user IDs and passwords. The intruder can save these credentials and use them later to access protected resources in order to steal or alter sensitive or valuable information. Another method is to masquerade as a known, legitimate user or device in order to bypass authentication and access network resources as the other user or device.
- **Eavesdropping** Here, someone installs hardware or software to listen to other network transmissions in an attempt to intercept any available sensitive information. Or, if this is a targeted attack, the intruder will listen for the specifically desired information and then capture it for later use. The intruder could be looking for login credentials, e-mail messages, transferred files, or communications between servers in an application.
- **Malware** While viruses, worms, Trojan horses, and so on, do not directly attack networks, they do use networks to propagate from one system to another. Especially virulent malware may generate so much traffic that all legitimate network communications may cease. This may be true even if only a small number of infected systems are present and attempting to find new victim hosts to attack and infect.
- **Denial of service (DoS) attacks** This is when an attacker floods a target with such a large volume of traffic that the target is unable to function normally. Such an attack can cause the target system to malfunction or crash, or the sheer volume of traffic may impair the target’s ability to respond to legitimate messages.
- **Access bypass** An individual can attach an unauthorized access device, such as a Wi-Fi access point or a dial-in modem, to the network, thereby permitting himself (or others) to access the network while bypassing security controls.
- **DNS attack** This attack is used to alter the results of routine internal domain queries in order to direct new connections to an attacker’s system instead of the system that users and systems intend to connect to.
- **Man-in-the-middle (MITM) attack** This attack is used to take over or disrupt communications that are taking place between two parties. Here, an attacker intercepts communications being sent from one party to another and injects new, altered communications in their place. The attacker must be able to impersonate each party in the communication so that each party believes it is talking directly with the other party.
- **Man-in-the-browser (MITB) attack** This attack involves the installation of a malicious “browser helper object” (BHO) onto a victim’s browser. The malicious BHO alters communication between the browser and the Internet without the victim’s knowledge.

There is no single detective or preventive control that is effective against all of these threats. Instead, several controls are needed to protect networks against these and other threats.

##### Vulnerable Network-Based Services

Many common network-based services are vulnerable to manipulation and can be used to attack other systems. Some of these services are

- **Malicious web sites** If improperly protected, web sites can be attacked and loaded with malware that will be installed on site visitors’ computers. This is typically called a “drive-by attack,” because a victim was merely visiting a web site when it installed malware on the victim’s computer.
- **E-mail** The darling of attackers everywhere, e-mail is used to propagate spam, phishing attacks, pharming attacks, and malware.
- **DNS** When attacked, the service that translates domain names such as [www.espn.com](http://www.espn.com/) into an IP address such as 141.204.13.76 can cause users and systems to connect to imposter systems that attempt to steal login credentials or infect user systems with malware.
- **Instant messaging** IM networks are used to propagate worms that can be used to install malware on unprotected victims’ computers, as well as spam (called “spim” in the context of instant messaging) and phishing (called “smishing” in instant messaging and text messaging).
- **Message boards** People who search the Internet for solutions to problems often find discussions about their problems on message boards. Because many message boards are operated by volunteers, they often lack security controls and do not block attackers from putting malware on them for victims to install unknowingly on their computers, or links that take users to malicious web sites.
- **Social networking** Some popular social networking sites allow for “applications” to be downloaded for subscribers’ use. Some of these social networking sites do not examine these applications to determine whether they are harmful or malicious in any way.
- **Peer-to-peer networking** Peer-to-peer networks are a favorite attack vector for malware producers. Because they lack centralized servers with strong anti-malware controls, peer-to-peer networks are a great method for distributing malware.

##### Network Security Countermeasures

Several controls are needed to ensure the integrity and security of a network as one layer of defense in the protection of valuable or sensitive information.

- **Segmentation** This technique is used to divide an enterprise network into two or more security zones that are protected with firewalls. A DMZ is a good example of segmentation, but it’s wise for organizations to expand their segmentation to reduce lateral propagation of malware.
- **Microsegmentation** This is a special segmentation technique where individual hosts (whether servers or endpoints) are isolated from one another, either with network firewalls or with firewalls on individual hosts.
- **User authentication controls** Users can be required to authenticate to the network itself prior to accessing any network-based resources. This may be useful even if servers and other resources on the network have their own separate authentication requirements.
- **Machine authentication controls** Every node that attaches to the network should itself be authenticated. This can prevent nonorganization-owned assets (such as personally owned computers, unauthorized access points, sniffers, or vendor demo equipment) from being able to access the network. This helps to ensure that only organization-managed devices that have malware controls, including anti-malware software, can attach to the network, thereby reducing the likelihood that malware will be introduced into the environment. The dominant technology for enforcing machine authentication is the IEEE 802.1X standard, which can also perform detailed checks on a node, including patch levels and whether antivirus software is running and up to date.
- **Anti-malware** Many organizations have opted to supplement workstation-based anti-malware software with network-based anti-malware capabilities. Centralized, network-based anti-malware may be used to filter malware and spam from incoming e-mail, or it may act as a silent or active proxy for web traffic, blocking malware that is hosted on web sites. Both measures can greatly improve an organization’s ability to prevent malware attacks.
- **Encryption** Sensitive communications can be encrypted to reduce the threat of eavesdropping. Many methods for encryption are available, depending on the network’s architecture and the specific traffic that needs to be protected. For instance, tunnels between pairs of servers can be established at the OS level using IPsec or SSH. Tunnels between networks can be established using IPsec between pairs of routers. In both cases, network-based applications and services need not be modified, as they will be completely unaware of the encryption taking place at lower layers in the IP stack.
- **Switched networks** The use of shared-media networks (such as Ethernet through the use of hubs, repeaters, and bridges) invites eavesdroppers who can intercept some or all network transmissions. By changing to switched networks, the only traffic that a node sees are packets sent explicitly to or from the node, as well as some broadcast traffic. This greatly reduces the risk of eavesdropping, since it may not be practical to encrypt all communications.
- **Intrusion detection systems (IDSs)** These systems are used to detect anomalous activities on the network, sending alerts to appropriate personnel when these anomalies occur. Like anti-malware software, IDSs must be updated from time to time to remain effective. Some IDSs can “learn” normal network traffic behavior and generate alarms when nonnormal traffic is detected. IDSs can also alert personnel about traffic to or from known malicious sites. IDSs are available in two forms: network-based IDSs (NIDSs), which usually take the form of network appliances, and host-based IDSs (HIDSs), which consist of software agents installed on each host which are typically monitored and managed with a separate management console.
- **Intrusion prevention systems (IPSs)** These systems, like IDSs, detect anomalies on the network. However, IPSs are also able to block malicious traffic. They can be used to block both internal and external threats, whether they are intruders trying to break in to a system or some malware that has been able to penetrate defenses on an organization-owned device. One drawback with IPSs is that a false positive can result in legitimate traffic being blocked.
- **Web content filtering** These systems are designed to block users’ access to categories of web sites. Web content filtering is often implemented with two purposes in mind: First, it is used to limit employees from visiting sites with little or no business value, thereby preventing some wasted time. Second, some categories of sites are known for hosting malware, so web content filtering helps to reduce malware attacks on an organization’s systems. Some web content filtering systems also have the ability to block malicious traffic based on its contents.
- **Data loss prevention (DLP)** These systems are designed to detect the storage of potentially sensitive information on servers and endpoints and/or transmission of potentially sensitive information into or out of an organization’s network. DLP systems may be configured to generate alerts sent to a security incident manager, and some are able to block such transmission altogether. These alerts can be based on general types of sensitive data such as credit card numbers or social insurance numbers, but also on organization-specific data such as internal project names.
- **Application whitelisting** These systems include agents that are installed on servers and workstations. They examine each executable that is launched; if the executable matches an entry in the tool’s whitelist, it is permitted to run. Otherwise, its execution is blocked.
- **Netflow** These systems are designed to ingest all of a network’s metadata—that is, the origination and destination address of every packet, and its protocol. Netflow systems are typically used to troubleshoot network issues (because they can reveal every packet transmitted on the network), but they are handy for security purposes as well, because they can show anomalous network traffic that could be a sign of an intrusion, malware, or data exfiltration.

These and other network security countermeasures should be considered key controls, each of which should have complete process and procedure documentation, managed records, and periodic audits.

#### IoT Security

Organizations in some industry sectors are seeing a significant increase in the number of nonhuman interaction devices being connected to their networks. These devices include patient monitoring and care equipment in hospitals, IP-connected machinery in manufacturing plants, laboratory equipment in biomedical research organizations, and remote-control and status monitoring equipment in public utility networks. Organizations in other industries are still seeing a moderate increase in IoT devices such as “smart” refrigerators and coffee makers. Many organizations, when they upgrade their video surveillance and door access systems, are moving to IP-connected systems that are connected to internal enterprise networks.

Many IoT devices are manufactured without providing the ability to update their security configurations; this means that IoT devices are vulnerable by design. For instance, a privilege escalation attack on an IoT device could permit an intruder to move laterally to other environments. However, because these devices are often essential for ongoing business processes, other means are needed to protect the organization from vulnerable IoT devices. The primary method is segmentation and even microsegmentation in extreme cases. This serves to isolate IoT devices from the rest of the organization and from other IoT devices. Segmentation control points should be monitored to detect potential attacks.

#### Securing Client-Server Applications

Though no longer the platform of choice for most new applications, many client-server applications are still in use and require continued, and even improved, protection from evolving threats.

Client-server environments are subject to the same threats and have most or all of the same vulnerabilities as ordinary servers and workstations. The threats and countermeasures that are specific to client-server environments include the following:

- **Access controls** Most client-server applications were developed in an era when the prospect of impersonated client systems seemed remote. However, client-server applications that are designed today would certainly include multifactor authentication between client software and server software (in addition to workstation authentication using 802.1X and end-user authentication to the network). Modern client-server environments may utilize servers in the cloud, possibly operated by service providers, which means that client systems require access to the Internet. Older client-server environments may lack one or more of these authentication components. While altering the existing client-server components themselves may be infeasible, other compensating controls may be viable, including workstation-based integrity management software, anti-malware, firewalls, and workstation hardening.
- **Interception of client-server communications** Eavesdropping and interception of client-server communications can result in a compromise of sensitive or valuable information. Furthermore, a MITM attack can result in intercepted and altered communications, with consequences including compromise of sensitive information and fraud. The most effective countermeasure for traffic interception is encryption between servers and client workstations. These threats are more likely with Internet-based application servers.
- **Attacks on networks** See the earlier section, “Network Security Countermeasures,” for details.
- **Change management** When application code changes are considered, the project team making the changes needs to establish comprehensive test and implementation plans to ensure that the change will result in the correct functional changes in the environment. This is further complicated by the fact that code changes will need to be distributed to all of the client workstations in the organization. If some of those workstations are laptop computers, installation of client software updates will be logistically challenging since not all laptops will be available when the IT department intends to update them.
- **Disruption of client software updates** If clients are unable to receive and install software updates, they may fail to operate properly. In client-server architecture, client software must be in close (if not exact) synchronization with server software, since part of the application’s business logic is server-based and part is client-based. An update to the application that requires changes to both the server and all clients may fail for any workstations that cannot install the new updates. The purpose of attacks on the client software distribution mechanism or on client workstations themselves may be the disruption of the entire application in an organization. In addition to system hardening, countermeasures include encryption, reports indicating the success rate of client updates, and tools to troubleshoot client update problems.
- **Stealing data** Users of client-server applications will be able to steal information if their client workstations include a full operating system and access to external storage devices (this is also a viable threat to web-based applications). In environments where the information being viewed and managed is highly sensitive or valuable, additional countermeasures, such as blocking the use of external storage devices (CD/DVD-ROM and USB-based storage), may be warranted.

---

##### Client-Server Applications and Data Protection Laws

Another serious issue in many client-server environments is the need to update these environments to meet new security regulations. New and updated data protection laws and standards such as PCI-DSS, GDPR, and CCPA require protection measures in application environments that were not included in older client-server frameworks. Some of these measures include encryption of transmitted data, encryption of stored data, multifactor authentication, access and transaction logging, and the use of unique user accounts for each individual user. Many client-server environments are simply unable to implement one or more of these controls that are present in newer application environments. This is not to say that countermeasures are impossible; instead, each organization has to weigh the cost of implementing and supporting each required countermeasure to assess the long-term viability of each client-server environment.

---

#### Securing Wireless Networks

Innovations in wireless communications have produced a productivity breakthrough for many workers who no longer have to be constrained to a desk in a corporate office. Wireless network technologies have enabled workers to connect to enterprise networks, regardless of their work location. However, some wireless communications technologies have significant vulnerabilities, and most are subject to severe threats.

Early wireless LAN (WLAN, or Wi-Fi) technologies did not encrypt traffic at all. This permitted other users (and outsiders—anyone within range of a WLAN) to use relatively simple tools to intercept, record, and even hijack wireless network sessions, and they did nothing to prevent someone from joining a WLAN and using it for Internet access. At that time, since many internal communications, including login sessions, were not encrypted, sniffing a wireless network from a safe location could yield as much rich information as a sniffer connected directly to the network—minus the risks related to getting a sniffer inside an office building.

Wireless networks are attractive to intruders because they provide an opportunity to penetrate a network easily without the risks associated with breaking into a physical building.

##### Wireless Network Threats and Vulnerabilities

Early wireless networks had significant vulnerabilities in their design and implementation that drew the attention of intruders. This attention led to research and discovery of more vulnerabilities, which have led to a proliferation of tools designed to exploit them. The threats and vulnerabilities associated with wireless networks are discussed here.

**Eavesdropping** This is the best-known threat identified with WLANs. Intruders with reasonably simple tools are easily able to listen in on wireless communications, even when communications are encrypted and protected through other means. Because wireless networks use radio frequency (RF) technology, the threat of eavesdropping will never completely disappear.

**War Driving and War Chalking** In war driving and war chalking, intruders travel in dense urban areas, looking for unprotected Wi-Fi access points. The term _war driving_ comes from the practice of searching from within a moving vehicle or on foot.

_War chalking_ is the practice of marking buildings (using chalk) with symbols to indicate the presence of a Wi-Fi access point, including some basic facts about it. The practice was widespread in the early 2000s but is not often used now. [Figure 6-4](/images/308b/ch0604.jpeg) shows the standard symbols that were used. The practice is thought to be derived from a similar practice during the Great Depression when homeless people would mark buildings that were friendly, unfriendly, and where law enforcement was located.

![Images](/images/308b/ch0604.jpeg)

**Figure 6-4** Common war chalking symbols indicate the presence of Wi-Fi access points

**Weak Encryption** The earliest WLANs used no encryption at all—not because it wasn’t available, but because it required additional effort to implement. Because wireless access points can be configured to permit “wide open” (no encryption) configuration, many organizations stopped here and never implemented encryption. In addition, many Wi-Fi access points sold for home use did not have encryption enabled by default; most consumers did not bother to implement encryption because they did not know that it was important to do so.

The WEP (Wired Equivalent Privacy) encryption algorithm was developed to protect Wi-Fi networks from eavesdropping. WEP is so-named because its designers intended for WEP to provide confidentiality as effective as a traditional wired LAN. Unfortunately, WEP was soon compromised: intruders with readily available tools can completely compromise a Wi-Fi network protected with WEP within minutes. These tools can derive the WEP encryption key, enabling an intruder to decrypt all encrypted communications easily on a Wi-Fi network protected with WEP.

The WPA (Wi-Fi Protected Access) protocols were adopted as a stronger method for encryption of wireless networks. However, WPA is showing some signs of compromise as well. WPA2 is still considered marginally suitable for most commercial environments. However, organizations processing more sensitive data should consider adding layers of defense such as additional authentication and VPN encryption. In late 2018, WPA3 was announced and represents improvements over weaknesses identified in WPA2.

**Spoofing** Intruders can use spoofing to impersonate both Wi-Fi access points and Wi-Fi network clients. It is relatively easy for an intruder to establish a rogue access point with the same or a similar name as a legitimate access point. The intruder can use this rogue access point as a gateway to forward legitimate traffic in both directions while watching for and intercepting any sensitive information that may pass by. Or the intruder may use the rogue access point to steal login credentials from users trying to connect to the _real_ access point.

Intruders can also spoof legitimate Wi-Fi clients in an attempt to connect to Wi-Fi networks. Some Wi-Fi networks include MAC address ACLs, which means they permit only known computers (identified by their MAC addresses) to connect to the Wi-Fi network. An intruder who eavesdrops on Wi-Fi traffic can easily discern this and change his or her computer’s MAC address to that of one of the computers permitted to connect.

**Session Hijacking** Many Internet web sites (including those used for social networking, blogs, and e-mail) do not force encryption in users’ communications. When users’ sessions are not encrypted, their session cookies are transmitted unencrypted. On public Wi-Fi hotspots, this makes those users’ sessions vulnerable to session hijacking, where an intruder on the same Wi-Fi network can intercept a user’s session cookie and then take over the session.

The Firesheep tool made session hijacking a topic of discussion and debate. There are probably many other such tools available for intruders who want to prey on and hijack users’ sessions.

##### Wireless Network Countermeasures

Several protective countermeasures can be taken to reduce risks associated with the use of wireless networks. These countermeasures include

- **Use an obscure SSID** The SSID (service set identifier) should be changed from the default, but it should not obviously identify the organization that operates it. Doing so would invite intruders and curious persons to try and penetrate a known network. However, in the case of “public hotspots” such as hotels, restaurants, and coffee shops, the SSID often conspicuously and understandably identifies the establishment.
- **Stop broadcast of SSID** Except for the case of public hotspots, broadcast of the access point’s SSID should be disabled. Granted, this is a weak countermeasure because determined intruders who use more advanced tools do not need to see a network’s SSID to know it is there: they have tools to sniff packets directly from the airlink, whether the access point is broadcasting its SSID or not. This measure does, however, act as a mild deterrent for those who are less skilled.
- **Reduce transmit power** The transmit strength of the Wi-Fi RF transmitter should be reduced to the lowest level that will still permit reliable use. This will prevent any distant eavesdropper from easily detecting the network.
- **Use MAC access filtering** Wi-Fi access points can usually be configured to permit only those computers whose MAC addresses are present in a list of allowed addresses.
- **Use WPA2/3 encryption** Because WEP and WPA have been compromised, WPA2 or WPA3 encryption should be used.
- **Require VPN** Organizations that are concerned that WPA protocols may also be compromised can configure their Wi-Fi architecture so that VPN connections must be established for users to connect to the corporate LAN.
- **Change default passwords** Administrative user IDs and passwords on new Wi-Fi access points should be changed before they are put into use.
- **Patches and upgrades** Before new Wi-Fi access points are put into general use, network administrators should make sure that they contain the latest firmware or software. This is especially important if any vulnerabilities have been found in older versions.
- **Use a personal Wi-Fi hotspot** Travelers who often connect to public Wi-Fi hotspots may be prudent to carry and use a personal Wi-Fi hotspot that connects to cellular networks. A personal Wi-Fi hotspot is shown in [Figure 6-5](/images/308b/ch0605.jpeg).

![Images](/images/308b/ch0605.jpeg)

**Figure 6-5** Personal Wi-Fi hotspot

- **Use VPN software** Travelers who often connect to public Wi-Fi hotspots should consider the use of VPN software to encapsulate and encrypt their network traffic, so that an intruder eavesdropping on the Wi-Fi network cannot learn the nature of the traveler’s communications.

> **CAUTION** Like system hardening, hardening Wi-Fi access points and supporting infrastructure is not a set-once-and-forget-it affair. Instead, making a system secure and keeping it secure requires vigilance through staying informed on the latest threats and vulnerabilities and taking action as needed.

##### 5G Security

As of the time of writing this book, 5G networks are being introduced in some markets. 5G represents an increase in bandwidth in LTE (Long-Term Evolution) networks from 100Mbit/sec to as high as 500Mbit/sec. The bandwidth increase for 5G is not itself a security concern. Instead, it is the proliferation of a new generation of IoT devices, as well as new capabilities in existing devices, that represents the concern. Mainly, this means the vast increase in the global attack surface of vulnerable devices.

5G makes everything in LTE faster—from individuals and businesses that can be more productive, to a wide range of threats that gives cyber-criminals a faster “getaway car.” This includes activities such as over-the-air security scanning, LTE-based DDoS attacks, and data exfiltration via 5G that will all be able to perform far faster than they did via older LTE technologies such as 4G.

#### Protecting Internet Communications

For decades, the standard practice for commercial organizations that needed to establish data communication connections between locations—or between organizations—was the use of dedicated private communications links leased from telecommunications carriers. Prior to the Internet, using private communications links was the _only_ available method for setting up long-distance data communications.

The establishment of the Internet made it possible for organizations to connect to one another simply by connecting to the Internet backbone and letting routers do the rest. Most organizations scoffed at this idea because of the Internet’s reputation for unreliable performance, as well as its lack of security. Gradually, however, Internet performance has improved in many parts of the world, and security standards have been developed that make use of the Internet for an inter- and intraorganization communications medium a practical reality.

This section describes the threats, vulnerabilities, and countermeasures needed to protect Internet-based business communications.

##### Internet Communications Threats and Vulnerabilities

The Internet is not a safe place. Practically all of the threats against organizations’ valuable and sensitive information originate from the Internet or use the Internet in their delivery. This is because the Internet is the backbone of nearly all types of data communications, like the one well in the middle of town from which all its citizens draw water—the source of life but also a source of disease when things go wrong.

Internet-related threats and vulnerabilities are discussed in the following sections.

**Eavesdropping** Any data sent from one place to another over the Internet can be intercepted. While actual interception is infrequent, it is possible, and interception does occur from time to time. Compare this to the use of postcards in the mail. Most of the time, postcards are not read by anyone while in transit; nonetheless, their confidentiality cannot be assured.

**Network Analysis** Similar to eavesdropping, someone who has access to an organization’s data communications can perform network analysis on it. This activity would be the reconnaissance phase of some bigger effort. An eavesdropper with access to an organization’s network traffic would, over time, be able to tell quite a lot about the organization’s internal network by observing data coming and going. This would be the case even if all the sensitive data in the traffic were encrypted, since the protocol headers (containing useful information such as host names, IP addresses, and so on) typically cannot be encrypted.

**Targeted Attack** An attacker whose objective is a specific organization’s systems will probably use the Internet to transmit the attack to his or her target. An intelligent attacker will relay an attack through a series of compromised systems to conceal his or her actual whereabouts, making it difficult for law enforcement to learn the attacker’s real identity and location.

**Malware** The Internet is the conduit through which virtually all malware travels. Whether it is transmitted in spam, hidden in downloadable software programs, or embedded in web sites, the designers of malware know that the Internet is the way to travel fast and cheap. Botnets use Internet protocols to control their bot armies as well as to spread spam or attack target systems.


