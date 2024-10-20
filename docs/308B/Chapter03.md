# CHAPTER 3 The Audit Process

This chapter covers CISA Domain 1, “Information Systems Auditing Process,” and discusses the following topics:

+  Audit management
+  ISACA auditing standards and guidelines
+  Audit and risk analysis
+  Internal controls
+  Performing an audit
+  Control self-assessments
+  Audit recommendations

The topics in this chapter represent 21 percent of the CISA examination.

The IS audit process is the procedural and ethical structure used by auditors to assess and evaluate the effectiveness of the IT organization and how well it supports the organization’s overall goals and objectives. The audit process is backed up by the Information Technology Assurance Framework (ITAF) and the ISACA code of ethics. The ITAF is used to ensure that auditors will take a consistent approach from one audit to the next throughout the entire industry. This will help to advance the entire audit profession and facilitate its gradual improvement over time.

### Audit Management

An organization’s audit function should be managed so that an audit charter, strategy, and program can be established; audits can be performed; recommendations can be enacted; and auditor independence can be assured throughout. The audit function should align with the organization’s mission and goals, and it should work well alongside IT governance and operations.

#### The Audit Charter

As with any formal, managed function in the organization, the audit function should be defined and described in a charter document. The charter should clearly define roles and responsibilities that are consistent with ISACA audit standards and guidelines, including but not limited to ethics, integrity, and independence. The audit function should have sufficient authority so that its recommendations will be respected and implemented, but not so much power that the audit tail will wag the IS dog. An audit charter would also include statements about scope, both in terms of business units and business lines, and also about applicable regulations. For instance, an audit charter in a U.S. public company would include financially relevant systems for Sarbanes-Oxley compliance but may exclude PCI-DSS.

#### The Audit Program

The *audit program* describes the audit strategy and audit plans that include scope, objectives, resources, and procedures used to evaluate a set of controls and deliver an audit opinion. You could say that an audit program is the plan for conducting audits over a given period.

The term *program* in this case is intended to evoke a similar “big picture” point of view as the term *program manager* does. A program manager is responsible for the performance of several related projects in an organization. Similarly, an audit program is a plan for conducting several audits, types of audits, or audits of varying scope in an organization.

#### Strategic Audit Planning

The purpose of audit planning is to determine the audit activities that need to take place in the future, including an estimate of the resources (tools, budget, and staff) required to support those activities. Audit planning is really just project planning for projects that are audits or are related to audits.

##### Factors that Affect an Audit

As with security planning, audit planning must take into account several factors:

+  **Organization’s strategic goals and objectives**  The organization’s overall goals and objectives should flow down to individual departments and their support of these goals and objectives. These goals and objectives will translate into business processes, technology to support business processes, controls for both the business processes and technologies, and audits of those controls. This is depicted in [Figure 3-1](/images/308b/ch0301.png).

![Images](/images/308b/ch0301.png)

**Figure 3-1**  The organization’s goals and objectives translate down into audit activities.

+  **New organization initiatives**  Closely related to goals and objectives are new initiatives that organizations often undertake, including new products, new services, or new ways of delivering existing products and services.
+  **Mergers and acquisitions**  Recent mergers and acquisitions can throw a wrench into any audit program when organizations have been grafted together; business integration objectives, no matter how simple or extensive, are also affected. A merged organization is a moving target; planning must be done carefully to factor in business conditions during the actual audit.
+  **Market conditions**  Changes in the product or service market may have an impact on auditing. For instance, in a product or services market where security is becoming more important, market competitors could decide to undergo audits voluntarily to show that their products or services are safer or better than those from competing organizations. Other market players may need to follow suit for competitive parity. Changes in the supply or demand of supply-chain goods or services can also affect audits.
+  **Changes in technology**  Enhancements in the technologies that support business processes may affect business or technical controls, which in turn may affect audit procedures for those controls. An organization that moves its applications or services from on-premises locales to the cloud is a good example of this.
+  **Changes in regulatory requirements**  Changes in technologies, markets, or security-related events can result in new or changed regulations. Maintaining compliance may require changes to the audit program. In the 20-year period preceding the publication of this book, many new information security–related regulations have been passed or updated, including the Gramm-Leach-Bliley Act (GLBA), the Sarbanes-Oxley Act (SOX), the Health Insurance Portability and Accountability Act (HIPAA), the European General Data Protection Regulation (GDPR, and its predecessor, the European Privacy Directive), as well as national and state laws related to information security and privacy.

All of the changes listed here usually translate into new business processes or changes in existing business processes. Often, changes to information systems and changes to the controls supporting systems and processes are also involved.

##### Changes in Audit Activities

External factors may affect auditing in the following ways:

+  **New internal audits**  Business and regulatory changes sometimes compel organizations to audit more systems or processes. For instance, SOX requires that U.S. publicly traded companies perform internal audits of IT systems that support financial business processes.

+  **New external audits**  New regulations or competitive pressures could introduce new external audits. For example, virtually all banks, as well as many merchants and service providers, are required to undergo external Payment Card Industry Data Security Standard (PCI-DSS) audits.

+  **Market competition**  In certain industries, such as financial services, service providers are voluntarily undertaking new audits such as SOC 1 (SSAE 18 in the United States and ISAE 3402 elsewhere), SOC 2, TrustArc (formerly TRUSTe), HITECH (in the healthcare industry), and ISO/IEC 27001 certification, partly to support marketing claims that their security is superior to that of their competitors.

+  **Increase in audit scope**  The scope of existing internal or external audits could increase to include more systems, processes, or business units.

+  **Impacts on business processes**  This could take the form of additional steps in processes or procedures, or additions/changes in recordkeeping or record retention.

+  **Changes in audit standards**  Also undergoing continuous improvement, general and specific audit rules occasionally change, which may alter sampling methodologies as well as audit procedures. For example, the PCI-DSS 3.0 update requires penetration tests to include network segmentation validation, which can result in significant increases in costs and the time required for penetration testing.

##### Resource Planning

At least once per year, management needs to consider all of the internal and external factors that affect auditing to determine the resources required to support these activities. Primarily, resources will consist of the budget for external audits and staff for internal audits. External audits also require staff resources to meet with external auditors and provide evidence.

Additional external audits usually require additional staff hours to meet with external auditors; discuss scope; coordinate meetings with process owners and managers; discuss audits with process owners and managers; discuss audit findings with auditors, process owners, and management; and organize remediation work.

Internal and external audits usually require information systems to track audit activities and store evidence. Taking on additional audit activities may require additional capacity on these systems or new systems altogether.

Additional internal audits require all of these factors, plus time for performing the internal audits themselves. All of these details are discussed in this chapter and throughout this book.

#### Audit and Technology

ISACA auditing standards require that the auditor retain technical competence. With the continuation of technology and business process innovation, auditors need to continue learning about new technologies, how they support business processes, and how they are controlled. As with many professions, IS auditors are required to undergo hours of continuing education to stay current with changes in technology.

Here are some of the ways that an IS auditor can update his or her knowledge and skills:

+  **ISACA training and conferences**  As the developer of the CISA certification, ISACA offers many valuable training and conference events, including

+  Computer Audit, Control, and Security (CACS) Conference

+  Governance, Risk, and Control (GRC) Conference

+  Cybersecurity Nexus (CSX) Conference

+  ISACA Training Week

+  **University courses**  These can include both for-credit and noncredit classes on new technologies. Some universities offer certificate programs on many new technologies; this can give an auditor a real boost of knowledge, skills, and confidence.

+  **Vo-tech (vocational-technical) training**  Many organizations offer training in information technologies, including MIS Training Institute, SANS Institute, Computer Security Institute, and ISACA.

+  **Training webinars**  These events are usually focused on a single topic and last from one to three hours. ISACA and many other organizations offer training webinars, which are especially convenient because they require no travel, and many are offered at no cost.

+  **ISACA chapter training**  Many ISACA chapters offer training events so that local members can acquire new knowledge and skills close to where they live.

+  **Other security association training**  Many other security-related trade associations offer training, including ISSA (International Systems Security Association), SANS Institute, and IIA (The Institute of Internal Auditors). Training sessions are offered online, in classrooms, and at conferences.

+  **Security conferences**  Several security-related conferences include lectures and training. These conferences include those hosted by RSA, SANS, ISSA, Gartner, and SecureWorld Expo. Many local ISACA and ISSA chapters organize local conferences that include training.

>**EXAM TIP**  ISACA requires CISA certification holders to undergo at least 120 hours of training every three years (and a minimum of 20 hours per year) to maintain their certification. [Chapter 1](/308B/Chapter01.html) provides more information on this requirement.

#### Audit Laws and Regulations

Laws and regulations are some of the primary reasons why organizations perform internal and external audits. Regulations on industries generally translate into additional effort on the part of target companies to track and verify their compliance. Tracking and verification are undertaken via internal auditing, and new regulations sometimes also require external audits. Moreover, while other factors such as competitive pressures can compel an organization to begin or increase auditing activities, this section discusses laws and regulations that require auditing.

##### Digital Transformation Brings New Regulation

Automating business processes with information systems is still a relatively new phenomenon. Modern businesses have been around for the past two or three centu-ries, but information systems have been playing a *significant* role in business process automation for only about the past 20 years. Before that time, most information systems supported business processes, but only in an ancillary way. Automation of entire business processes is still relatively young, and so many organizations have messed up in such colossal ways that legislators and regulators have responded with additional laws and regulations to make organizations more accountable for the security and integrity of their information systems.

Almost every industry sector is subject to laws and regulations that affect organizations’ use of information and information systems. These laws are concerned primarily with one or more of the following characteristics and uses of information and information systems:

+  **Security**  Some information in information systems is valuable and/or sensitive, such as financial and medical records. Many laws and regulations require such information to be protected so that it cannot be accessed by unauthorized parties, and they require that information systems be free of defects, vulnerabilities, malware, and other threats.

+  **Integrity**  Some regulations are focused on the integrity of information to ensure that it is correct and that the systems it resides on are free of vulnerabilities and defects that could make or allow improper changes.

+  **Privacy**  Many information systems store information that is considered private. This includes financial records, medical records, and other information about people.

##### Computer Security and Privacy Regulations

This section contains several computer security and privacy laws in the United States, Canada, Europe, and elsewhere. The laws here fall into one or more of the following categories:

+  **Computer trespass**  Some of these laws bring the concept of trespass forward into the realm of computers and networks, making it illegal to access a computer or network without explicit authorization.

+  **Protection of sensitive information**  Many laws require that sensitive information be protected, and some include required public disclosures in the event of a breach of security.

+  **Collection and use of information**  Several privacy laws define the boundaries regarding the collection and acceptable use of information, particularly private information.

+  **Offshore data flow**  Some security and privacy laws place restrictions or conditions on the flow of sensitive data (usually about citizens) out of a country.

+  **Law enforcement investigative powers**  Some laws clarify and expand the search and investigative powers of law enforcement.

The consequences of the failure to comply with these laws vary. Some laws have penalties written in as a part of the law; however, the absence of an explicit penalty doesn’t mean there aren’t any! Some of the results of failing to comply include

+  **Loss of reputation**  Failure to comply with some laws can make front-page news, with a resulting reduction in reputation and loss of business. For example, if an organization suffers a security breach and is forced to notify customers, word may spread quickly and be picked up by news media outlets, which will further spread the bad news.

+  **Loss of competitive advantage**  An organization that has a reputation for sloppy security may begin to see its business diminish and move to its competitors. A record of noncompliance may also result in difficulty winning new business contracts.

+  **Government sanctions**  Breaking many federal laws may result in sanctions from local, regional, or national governments, including losing the right to conduct business.

+  **Lawsuits**  Civil lawsuits from competitors, customers, suppliers, and government agencies may be the result of breaking some laws. Plaintiffs may file lawsuits against an organization even if there were other consequences. Large-scale violations sometimes lead to costly class-action lawsuits.

+  **Fines**  Monetary consequences are frequently the result of breaking laws.

+  **Prosecution**  Many laws have criminalized behavior such as computer trespassing, stealing information, or filing falsified reports to government agencies. Executives and board members are sometimes found to be personally liable in the event of security violations. Breaking some laws may result in imprisonment.

Knowledge of these consequences provides an incentive for organizations to develop management strategies to comply with the laws that apply to their business activities. These strategies often result in the development of controls that define required activities and events, plus analysis and internal audit to determine whether the controls are effectively keeping the organization in compliance with those laws. Although organizations often initially resist undertaking these additional activities, they usually accept them as a requirement for doing business and seek ways of making them more cost-efficient in the long term.

**Determining Applicability of Regulations**  An organization should take a systematic approach to determine the applicability of regulations as well as the steps required to attain compliance with applicable regulations and remain in a compliant state.

Determination of applicability often requires the assistance of legal counsel who is an expert on government regulations, as well as experts in the organization who are familiar with the organization’s practices.

Next, the language in the applicable law or regulation needs to be analyzed and a list of compliant and noncompliant practices identified. These are then compared with the organization’s practices to determine which practices are compliant and which are not. Those practices that are not compliant need to be corrected; one or more accountable individuals should be appointed to determine what is required to achieve and maintain compliance.

Another approach is to outline the required (or forbidden) practices specified in the law or regulation and then “map” the organization’s relevant existing activities into the outline. Where gaps are found, the organization must develop or change processes or procedures to bring the organization into compliance.

##### PCI-DSS: A Highly Effective Non-law

The Payment Card Industry Data Security Standard (PCI-DSS) is a data security standard that was developed by a consortium of the major credit card brands: VISA, MasterCard, American Express, Discover, and JCB. The major brands have the contractual right to levy fines and impose sanctions, such as the loss of the right to issue credit cards, process payments, or accept credit card payments. PCI-DSS has gotten much attention, and by many accounts it has been more effective than many state and national laws.

##### Regulations Are Not Always Clear

Sometimes, the effort to determine what’s needed to achieve compliance is substantial. For instance, when the Sarbanes-Oxley Act was signed into law, virtually no one knew precisely what companies had to do to achieve compliance. Guidance from the Public Company Accounting Oversight Board was not published for almost a year. It took another two years before audit firms and U.S. public companies were familiar and comfortable with the basic approach to achieve compliance with the act.

Similarly, organizations are still struggling to determine what actions they are required to take to be compliant with the European General Data Protection Regulation (GDPR) as well as the California Consumer Privacy Act (CCPA). Primarily, this is because laws state *what* must be done, but not *how* it must be done.

**U.S. Regulations**  Selected security and privacy laws and standards applicable in the United States include

+  Privacy Act of 1974

+  Access Device Fraud, 1984

+  Computer Fraud and Abuse Act of 1984

+  Electronic Communications Privacy Act (ECPA) of 1986

+  Computer Matching and Privacy Protection Act of 1988

+  Communications Assistance for Law Enforcement Act (CALEA) of 1994

+  Economic and Protection of Proprietary Information Act of 1996

+  National Infrastructure Protection Act of 1996

+  Health Insurance Portability and Accountability Act (HIPAA) of 1996

+  Economic Espionage Act (EEA), 1996

+  No Electronic Theft (NET) Act, 1997

+  Digital Millennium Copyright Act (DMCA), 1998

+  Children’s Online Privacy Protection Act (COPPA) of 1998

+  Identity Theft and Assumption Deterrence Act of 1998

+  Gramm-Leach-Bliley Act (GLBA) of 1999

+  Cyberspace Electronic Security Act of 1999

+  Federal Energy Regulatory Commission (FERC) with its legally binding standards

+  Uniting and Strengthening America by Providing Appropriate Tools Required to Intercept and Obstruct Terrorism (USA PATRIOT) Act of 2001 (expired in 2015, succeeded by the USA Freedom Act)

+  Sarbanes-Oxley Act of 2002

+  Cyber Security Enhancement Act (CSEA) of 2002

+  Federal Information Security Management Act (FISMA) of 2002

+  Controlling the Assault of Non-Solicited Pornography and Marketing (CAN-SPAM) Act of 2003

+  California privacy law SB 1386 of 2003 (the first such U.S. state privacy regulation; those in most other states are excluded from this list)

+  Identity Theft and Assumption Deterrence Act of 2003

+  Basel II, 2004, an international accord

+  Payment Card Industry Data Security Standard (PCI-DSS), 2004; updated 2016

+  North American Electric Reliability Corporation (NERC), 1968/2006, with its legally binding standards

+  Massachusetts security breach law, 2007

+  Red Flags Rule, 2008

+  Health Information Technology for Economic and Clinical Health Act (HITECH) of 2009

+  USA Freedom Act, 2015

+  Cybersecurity Information Sharing Act (CISA) of 2015

**Canadian Regulations**  Selected security and privacy laws and standards in Canada include

+  Interception of Communications (Section 184 of the Canada Criminal Code)

+  Unauthorized Use of Computer (Section 342.1 of the Canada Criminal Code)

+  Privacy Act, 1983

+  Personal Information Protection and Electronic Documents Act (PIPEDA), 2000

+  Digital Privacy Act, 2015

+  Protecting Canadians from Online Crime Act

**European Regulations**  Selected security and privacy laws and standards from Europe include

+  Convention for the Protection of Individuals with Regard to Automatic Processing of Personal Data, 1981, Council of Europe

+  Computer Misuse Act (CMA), 1990, U.K.

+  Directive on the Protection of Personal Data (95/46/EC), 2003, European Union

+  Data Protection Act (DPA) 1998, U.K.

+  Regulation of Investigatory Powers Act 2000, U.K.

+  Anti-Terrorism, Crime, and Security Act 2001, U.K.

+  Privacy and Electronic Communications Regulations 2003, U.K.

+  Fraud Act 2006, U.K.

+  Police and Justice Act 2006, U.K.

+  General Data Protection Regulation (GDPR), 2016

**Other Regulations**  Selected security and privacy laws and standards from the rest of the world include

+  Cybercrime Act, 2001, Australia

+  Information Technology Act, 2000, India

+  Cybersecurity Law, 2017, China

### ISACA Auditing Standards

ISACA has published its Information Technology Assurance Framework in the *ITAF: A Professional Practices Framework for IS Audit/Assurance* (currently in its third edition and available free of charge at [www.isaca.org/ITAF](http://www.isaca.org/ITAF)). ITAF consists of the ISACA Code of Professional Ethics, IS audit and assurance standards, IS audit and assurance guidelines, and IS audit and assurance tools and techniques. This section discusses the Code of Professional Ethics, standards, and guidelines. The relationship between these is illustrated in [Figure 3-2](/images/308b/ch0302.png).

![Images](/images/308b/ch0302.png)

**Figure 3-2**  Relationship between ISACA audit standards, audit guidelines, and Code of Professional Ethics

>**EXAM TIP**  ISACA does not require CISA candidates to memorize ITAF, but they should understand its importance and purpose.

#### ISACA Code of Professional Ethics

Like many professional associations, ISACA has published a Code of Professional Ethics. The purpose of the code is to define principles of professional behavior that are based on the support of standards, compliance with laws and standards, and the identification and defense of the truth.

Audit and IT professionals who earn the CISA certification are required to sign a statement that declares their support of the ISACA Code of Professional Ethics. If someone who holds the CISA certification is found to violate the code, he or she may be disciplined and may possibly lose his or her certification. The full text of the ISACA Code of Professional Ethics can be viewed at [www.isaca.org/ethics](http://www.isaca.org/ethics).

>**EXAM TIP**  The CISA candidate is not expected to memorize the ISACA Code of Professional Ethics, but is required to understand and be familiar with it.

#### ISACA Audit and Assurance Standards

The ISACA audit and assurance standards framework, known as the Information Technology Assurance Framework (ITAF), defines minimum standards of performance related to security, audits, and the actions that result from audits. This section lists the standards and paraphrases each.

The full text of these standards is available at [www.isaca.org/standards](http://www.isaca.org/standards).

>**EXAM TIP**  ISACA does not require CISA candidates to memorize frameworks or audit standards, but they should understand its importance and purpose.

##### 1001, Audit Charter

Audit activities in an organization should be formally defined in an audit charter. This should include statements of scope, responsibility, and authority for conducting audits. Senior management should support the audit charter through direct signature or by linking the audit charter to corporate policy.

##### 1002, Organizational Independence

The IS auditor’s placement in the command-and-control structure of the organization should ensure that the IS auditor can act independently.

##### 1003, Professional Independence

Behavior of the IS auditor should be independent of the auditee. The IS auditor should take care to avoid even the appearance of impropriety.

##### 1004, Reasonable Expectation

IS auditors and assurance professionals shall have a reasonable expectation that an audit engagement can be completed according to ISACA and other audit standards, that the audit scope enables completion of the audit, and that management understands its obligations and responsibilities.

##### 1005, Due Professional Care

IS auditors and assurance professionals shall exercise due professional care, including but not limited to conformance with applicable audit standards.

##### 1006, Proficiency

IS auditors and assurance professionals shall possess adequate skills and knowledge on the performance of IS audits and of the subject matter being audited, and shall continue in their proficiency through regular continuing professional education and training.

##### 1007, Assertions

IS auditors and assurance professionals shall review audit assertions to determine whether they are capable of being audited, and whether the assertions are valid and reasonable.

##### 1008, Criteria

IS auditors and assurance professionals shall select objective, measurable, and reasonable audit criteria.

##### 1201, Engagement Planning

IS auditors shall perform audit planning work to ensure that the scope and breadth of an audit is sufficient to meet the organization’s needs, that it is in compliance with applicable laws, and that it is risk-based.

##### 1202, Risk Assessment in Planning

The IS auditor should use a risk-based approach when making decisions about which controls and activities should be audited and the level of effort expended in each audit. These decisions should be documented in detail to avoid any appearance of partiality.

A risk-based approach looks not only at security risks, but at overall business risk. This will probably include operational risk and may include aspects of financial risk.

##### 1203, Performance and Supervision

IS auditors shall conduct an audit according to the plan and on schedule; shall supervise audit staff; shall accept and perform audit tasks only within their competency; and shall collect appropriate evidence, document the audit process, and document findings.

##### 1204, Materiality

The IS auditor should consider materiality when prioritizing audit activities and allocating audit resources. During audit planning, the auditor should consider whether ineffective controls or an absence of controls could result in a significant deficiency or material weakness.

In addition to auditing individual controls, the auditor should consider the effectiveness of groups of controls and determine if a failure across a group of controls would constitute a significant deficiency or material weakness. For example, if an organization has several controls regarding the management and control of third-party service organizations, failures in many of those controls could represent a significant deficiency or material weakness overall.

##### 1205, Evidence

The IS auditor should gather sufficient evidence to develop reasonable conclusions about the effectiveness of controls and procedures. The IS auditor should evaluate the sufficiency and integrity of audit evidence, and this evaluation should be included in the audit report.

Audit evidence includes the procedures performed by the auditor during the audit, the results of those procedures, source documents and records, and corroborating information. Audit evidence also includes the audit report.

##### 1206, Using the Work of Other Experts

An IS auditor should consider using the work of other auditors when and where appropriate. Whether an auditor can use the work of other auditors depends on several factors, including:

+  The relevance of the other auditors’ work

+  The qualifications and independence of the other auditors

+  Whether the other auditors’ work is adequate (this will require an evaluation of at least some of the other auditors’ work)

+  Whether the IS auditor should develop additional test procedures to supplement the work of another auditor(s)

If an IS auditor uses another auditor’s work, his report should document which portion of the audit work was performed by the other auditor, as well as an evaluation of that work.

##### 1207, Irregularity and Illegal Acts

IS auditors should have a healthy but balanced skepticism regarding irregularities and illegal acts: The auditor should recognize that irregularities and/or illegal acts could be ongoing in one or more of the processes that he is auditing. He should recognize that management may or may not be aware of any irregularities or illegal acts.

The IS auditor should obtain written attestations from management that state management’s responsibilities for the proper operation of controls. Management should disclose to the auditor any knowledge of irregularities or illegal acts.

If the IS auditor encounters material irregularities or illegal acts, he should document every conversation and retain all evidence of correspondence. The IS auditor should report any matter of material irregularities or illegal acts to management. If material findings or irregularities prevent the auditor from continuing the audit, the auditor should carefully weigh his options and consider withdrawing from the audit. The IS auditor should determine if he is required to report material findings to regulators or other outside authorities. If the auditor is unable to report material findings to management, he should consider withdrawing from the audit engagement.

##### 1401, Reporting

The IS auditor should develop an audit report that documents the process followed, inquiries, observations, evidence, findings, conclusions, and recommendations from the audit. The audit report should follow an established format that includes a statement of scope, period of coverage, recipient organization, controls or standards that were audited, and any limitations or qualifications. The report should contain sufficient evidence to support the findings of the audit.

##### 1402, Follow-up Activities

After the completion of an audit, the IS auditor should follow up at a later time to determine if management has taken steps to make any recommended changes or apply remedies to any audit findings.

#### ISACA Audit and Assurance Guidelines

ISACA audit and assurance guidelines contain information that helps the auditor understand how to apply ISACA audit standards. These guidelines are a series of articles that clarify the meaning of the audit standards. They cite specific ISACA IS audit standards and COBIT controls and provide specific guidance on various audit activities. Last updated in 2014, ISACA audit guidelines also provide insight into why each guideline was developed and published.

The full text of these guidelines is available at [www.isaca.org/guidelines](http://www.isaca.org/guidelines).

##### 2001, Audit Charter

This guideline provides information on the following IS audit standards topics:

+  Mandate

+  Contents of the audit charter

##### 2002, Organizational Independence

This guideline provides information on the following IS audit standards topics:

+  Position in the enterprise

+  Reporting level

+  Non-audit services

+  Assessing independence

+  Audit charter and audit plan

##### 2003, Professional Independence

This guideline provides information on the following IS audit standards topics:

+  Conceptual framework

+  Threats and safeguards

+  Managing threats

+  Non-audit services or roles

+  Non-audit services or roles that do not impair independence

+  Non-audit services or roles that do impair independence

+  Relevance of independence when providing non-audit services or roles

+  Governance of the admissibility of non-audit services or roles

+  Reporting

##### 2004, Reasonable Expectation

This guideline provides information on the following IS audit standards topics:

+  Standards and regulations

+  Scope

+  Scope limitations

+  Information

+  Acceptance of a change in engagement terms

##### 2005, Due Professional Care

This guideline provides information on the following IS audit standards topics:

+  Professional skepticism and competency

+  Application

+  Life cycle of the engagement

+  Communication

+  Managing information

##### 2006, Proficiency

This guideline provides information on the following IS audit standards topics:

+  Professional competence

+  Evaluation

+  Reaching the desired level of competence

##### 2007, Assertions

This guideline provides information on the following IS audit standards topics:

+  Assertions

+  Subject matter and criteria

+  Assertions developed by third parties

+  Conclusion and report

##### 2008, Criteria

This guideline provides information on the following IS audit standards topics:

+  Selection and use of criteria

+  Suitability

+  Acceptability

+  Source

+  Change in criteria during the audit engagement

##### 2201, Engagement Planning

This guideline provides information on the following IS audit standards topics:

+  IS audit plan

+  Objectives

+  Scope and business knowledge

+  Risk-based approach

+  Documenting the audit engagement project plan

+  Changes during the course of the audit

##### 2202, Risk Assessment in Planning

This guideline provides information on the following IS audit standards topics:

+  Risk assessment of the IS audit plan

+  Risk assessment methodology

+  Risk assessment of individual audit engagements

+  Audit risk

+  Inherent risk

+  Control risk

+  Detection risk

##### 2203, Performance and Supervision

This guideline provides information on the following IS audit standards topics:

+  Performing the work

+  Roles and responsibilities, knowledge and skills

+  Supervision

+  Evidence

+  Documenting

+  Findings and conclusions

##### 2204, Materiality

This guideline provides information on the following IS audit standards topics:

+  IS v. financial audit engagements

+  Assessing materiality of the subject matter

+  Materiality and controls

+  Materiality and reportable issues

##### 2205, Evidence

This guideline provides information on the following IS audit standards topics:

+  Types of evidence

+  Obtaining evidence

+  Evaluating evidence

+  Preparing audit documentation

##### 2206, Using the Work of Other Experts

This guideline provides information on the following IS audit standards topics:

+  Considering the use of work of other experts

+  Assessing the adequacy of other experts

+  Planning and reviewing the work of other experts

+  Evaluating the work of other experts who are not part of the audit engagement team

+  Additional test procedures

+  Audit opinion or conclusion

##### 2207, Irregularity and Illegal Acts

This guideline provides information on the following IS audit standards topics:

+  Irregularities and illegal acts

+  Responsibilities of management

+  Responsibilities of the professionals

+  Irregularities and illegal acts during engagement planning

+  Designing and reviewing engagement procedures

+  Responding to irregularities and illegal acts

+  Internal reporting

+  External reporting

##### 2208, Audit Sampling

This guideline provides information on the following IS audit standards topics:

+  Sampling

+  Design of the sample

+  Selection of the sample

+  Evaluation of sample results

+  Documentation

##### 2401, Reporting

This guideline provides information on the following IS audit standards topics:

+  Types of engagements

+  Required contents of the audit engagement report

+  Subsequent events

+  Additional communication

##### 2402, Follow-up Activities

This guideline provides information on the following IS audit standards topics:

+  Follow-up process

+  Management’s proposed actions

+  Assuming the risk of not taking corrective action

+  Follow-up procedures

+  Timing and scheduling of follow-up activities

+  Nature and extent of follow-up activities

+  Deferring follow-up activities

+  Form of follow-up responses

+  Follow-up by professionals on external audit recommendations

+  Reporting of follow-up activities

##### Relationship Between Standards and Guidelines

The ISACA audit standards and guidelines have been written to assist IS auditors with audit- and risk-related activities. They are related to each other in this way:

+  *Standards* are statements that all IS auditors are expected to follow, and they can be considered a rule of law for auditors.

+  *Guidelines* are statements that help IS auditors better understand how ISACA standards can be implemented.

The ISACA Code of Professional Ethics encompasses the standards and guidelines through the requirement of proper professional behavior.

### Risk Analysis

In the context of an audit, a *risk analysis* is the activity used to determine the areas that warrant additional examination and analysis.

In the absence of a risk analysis, an IS auditor is likely to follow his or her “gut instinct” and apply additional scrutiny in areas where he or she *feels* risks are higher. Alternatively, an IS auditor may give all areas of an audit equal weighting, putting equal resources into low-risk areas and high-risk areas. Either way, the result is that an IS auditor’s focus is not necessarily on the areas where risks really are higher. This results in a disservice to the audit client.

Better audits are risk-driven. That is, some method of risk analysis is performed to determine which controls, activities, processes, or locations warrant additional attention, and to determine the areas that are deemed to be lower risk, requiring less attention. The factors that contribute to a risk determination include

+  Value or criticality of a process, system, or business unit
+  Focus of regulatory burden
+  History of security events
+  Results of prior audits

>**NOTE**  Although the performance of a risk analysis is not as empirical as, say, the observation of a system to determine whether it has specific configuration settings, basing risk on a risk analysis is likely to be more consistent than basing it on gut instinct. The ISACA Risk IT Framework, discussed a bit later, gives details on performing risk analysis.

#### Auditors’ Risk Analysis and the Corporate Risk Management Program

A risk analysis that is carried out by IS auditors is distinct and separate from risk analysis that is performed as part of the corporate risk management program, which carries out risk analysis using different personnel and for somewhat differing reasons. A comparison of IS auditor and IS management risk analysis is shown in [Table 3-1](/images/308b/ch0303.png).

![Images](/images/308b/ch0303.png)

**Table 3-1**  Comparison of IS Audit and IS Management Risk Analysis

>**NOTE**  In [Table 3-1](/), I am not attempting to show a *polarity* of focus and results, but instead a *tendency* for focus based on the differing missions and objectives of IS audit and IS management.

##### The ISACA Risk IT Framework

Auditors’ risk analysis and corporate risk management can both be performed using the ISACA Risk IT Framework. This framework, which is depicted in [Figure 3-3](/images/308b/ch0304.png), approaches risk from the enterprise perspective, encompassing all types of business risk, including IT risk.

![Images](/images/308b/ch0304.png)

**Figure 3-3**  The ISACA Risk IT Framework high-level components

>**NOTE**  Although the Risk IT Framework exists as a stand-alone standard, it is fully incorporated into the COBIT controls framework.

The Risk IT Framework consists of three primary activities:

+  **Risk governance**  Ensure that IT risk is integrated into the organization’s enterprise risk management (ERM) program.

+  **Risk evaluation**  Provide a framework of processes for performing risk assessments against business assets and explained in business terms.

+  **Risk response**  Provide a framework of processes for responding to identified risks through reporting and risk treatment.

Like other business frameworks, the Risk IT Framework contains detailed top-down explanations of business processes and includes references to COBIT, ISACA audit standards, and Val IT—another ISACA framework concerned with achieving business value from IT investments.

The Risk IT Framework is available from ISACA at [www.isaca.org/riskit](http://www.isaca.org/riskit).

>**EXAM TIP**  ISACA does not require CISA candidates to memorize the Risk IT Framework, but candidates should understand its importance and purpose.

#### Evaluating Business Processes

The first phase of a risk analysis is an evaluation of business processes to determine the purpose, importance, and effectiveness of business activities. Even though parts of a risk analysis may focus on technology, remember that technology exists to support business processes, not the other way around.

When a risk analysis starts with a focus on business processes, it is appropriate that the auditor consider the entire process and not just the technology that supports it. When an auditor examines business processes, it is essential that he or she obtain all available business process documentation, including the following:

+  **Charter or mission statement**  Often, an organization will develop and publish a high-level document that describes the process in its most basic terms. This usually includes the reason that the process exists and how it contributes to the organization’s overall goals and objectives.

+  **Process architecture**  A complex process may have several procedures, flows of information (in electronic form or otherwise), internal and external parties that perform functions, assets that support the process, resources required, and the locations and nature of records. In a strictly IT-centric perspective, this would be a data flow diagram or an entity-relationship diagram, but starting with either of those would be too narrow a focus. Instead, it is necessary to look at the *entire* process, with the broadest view of its functions and connections with other processes and parties.

+  **Procedures**  Looking closer at the process will reveal individual procedures—documents that describe the individual steps taken to perform activities that are part of the overall process. Procedure documents usually describe who (if not by name, then by title or department) performs what functions with what tools or systems. Procedures will cite business records that may be faxes, reports, databases, phone records, application transactions, and so on.

+  **Records**  Business records contain the events that take place within a business process. Records will take many forms, including faxes, computer reports, electronic worksheets, database transactions, receipts, canceled checks, and e-mail messages.

+  **Information system support**  When processes are supported by information systems, it is necessary that the auditor examine all available documents that describe information systems that support business processes. Examples of documentation are architecture diagrams, requirements documents (which were used to build, acquire, or configure the system), computer-run procedures, network diagrams, database schemas, and so on.

In addition to reviewing documentation, the auditor must interview personnel involved with each process so that they can describe their understanding of the process, its procedures, and other relevant details. The auditor can then compare descriptions from individuals with details in process and procedure documents. This will help the auditor understand the degree to which processes and procedures are performed consistently and in harmony with documentation.

Once the IS auditor has obtained business documents and interviewed personnel, he or she can begin to identify and understand any risk areas that may exist in the process.

>**NOTE**  The risk analysis method described here is no different from the risk analysis that takes place during the business impact assessment phase in a disaster recovery project, covered in [Chapter 5](/308B/Chapter05.html).

#### Identifying Business Risks

The process of identifying business risks is partly analytical and partly based on the auditor’s experience and judgment. An auditor will usually consider both within the single activity of risk identification.

An auditor will usually perform a *threat analysis* to identify and catalog risks. A threat analysis is an activity whereby the auditor considers a large body of possible threats and selects those that have some reasonable possibility of occurrence, however small. In a threat analysis, the auditor will consider each threat and document a number of facts about each, including

+  **Probability of occurrence**  This may be expressed in qualitative (high, medium, low) or quantitative (percentage or number of times per year) terms. The probability should be as realistic as possible, recognizing the fact that actuarial data on business risk is difficult to obtain and more difficult to interpret. Here, an experienced auditor’s judgment is required to establish a reasonable probability.

+  **Impact**  This is a short description, from a few words to a couple of sentences, of the results if the threat is actually realized.

+  **Loss**  This is usually a quantified and estimated loss should the threat actually occur. This figure might be a loss of revenue per day (or week or month) or the replacement cost for an asset, for example.

+  **Possible mitigating controls**  This is a list of one or more countermeasures that can reduce the probability or the impact of the threat, or both.

+  **Potential for transfer**  This is an analysis of the potential for transferring risk to another party, such as an insurance company.

+  **Countermeasure cost and effort**  The cost and effort to implement each countermeasure should be identified, either with a high-medium-low qualitative figure or a quantitative estimate.

+  **Updated probability of occurrence**  With each mitigating control, a new probability of occurrence should be cited. A different probability, one for each mitigating control, should be specified.

+  **Updated impact**  With each mitigating control, a new impact of occurrence should be described. For specific threats and countermeasures, the impact may be the same, but for some threats, it may be different. For example, for a threat of fire, a mitigating control may be an inert gas fire suppression system. The new impact (probably just downtime and cleanup) will be much different from the initial impact (probably water damage from a sprinkler system).

The auditor will put all of this information into a chart (or electronic spreadsheet) to permit further analysis and the establishment of conclusions—primarily, which threats are most likely to occur and which ones have the greatest potential impact on the organization.

Because it is not the usual role of auditors to suggest solutions to risks, auditors sometimes forego the analysis of countermeasures. A more likely outcome is the identification of high-risk controls that warrant additional audit scrutiny.

>**TIP**  The establishment of a list of threats, along with their probability of occurrence and impact, depends heavily on the experience of the IS auditor and the resources available to him or her.

#### Risk Mitigation

The actual mitigation of risks addressed in the risk assessment is the implementation of one or more of the countermeasures identified in the risk assessment. In simple terms, mitigation could be as easy as a small adjustment in a process or procedure, or it could be a significant project to introduce new controls in the form of system upgrades, new components, or new procedures.

When the IS auditor is conducting a risk analysis prior to an audit, risk mitigation may take the form of additional audit scrutiny on certain activities during the audit. Such subsequent analysis will give the IS auditor additional insight about the effectiveness of high-risk controls: a control that the auditor identified as high risk could end up performing well, while other, lower risk activities could actually be the cause of control failures. Determining which of the two represents higher risk to the organization requires further analysis.

Additional audit scrutiny could take several forms, including one or more of the following:

+  More time spent in inquiry and observation

+  More personnel interviews

+  Higher sampling rates

+  Additional tests

+  Re-performance of some control activities to confirm accuracy or completeness

+  Corroboration interviews

+  Peer reviews of audit work

#### Countermeasures Assessment

Depending upon the severity of an identified risk, mitigation could also take the form of additional (or improved) controls, even prior to (or despite the results of) the audit itself. The new or changed control may be major or minor, and the time and effort required to implement it could range from almost trivial to a significant project.

The cost and effort required to implement a new control (or whatever the countermeasure is that is designed to reduce the probability or impact of a threat) should be determined before it is implemented. It probably does not make sense to spend $10,000 to protect an asset worth $100—unless, of course, there was considerable revenue or organizational reputation also associated with that $100 asset.

>**NOTE**  The effort required to implement a control countermeasure should be commensurate with the level of risk reduction expected from the countermeasure. A quantified risk analysis may be needed if the cost and effort seem high, especially when compared to the value of the asset being protected.

#### Monitoring

After countermeasures are implemented, the IS auditor will need to reassess the controls through additional testing. If the control includes any self-monitoring or measuring, the IS auditor should examine those records to determine whether there is any visible effect of the countermeasures.

The auditor may need to repeat audit activities to determine the effectiveness of countermeasures. For example, additional samples selected after the countermeasure is implemented can be examined and the rate of exceptions compared to periods before the countermeasure’s implementation.

### Controls

*Controls* are the policies, procedures, mechanisms, systems, and other measures designed to reduce risk and assure desired outcomes. An organization develops controls to ensure that its business objectives will be met, risks will be reduced, and errors will be prevented or corrected.

Controls are used in two primary ways in an organization: they are created to ensure the occurrence of desired events and to help prevent unwanted events.

#### Control Classification

Several types, classes, and categories of controls are discussed in this section. [Figure 3-4](/images/308b/ch0305.png) depicts this control classification.

![Images](/images/308b/ch0305.png)

**Figure 3-4**  Control classification shows types, classes, and categories of controls.

##### Types of Controls

The three types of controls are physical, technical, and administrative:

+  **Physical**  These types of controls exist in the tangible, physical world. Examples of physical controls are video surveillance, bollards, and fences.

+  **Technical**  Sometimes called *logical* controls, these controls are implemented in the form of information systems and are usually intangible. Examples of technical controls include encryption, computer access controls, and audit logs.

+  **Administrative**  Also referred to as *managerial* controls, these are the policies and procedures that require or forbid certain activities. An example of an administrative control is a policy that forbids personal use of information systems for business purposes.

>**EXAM TIP**  ISACA does not expressly use the terms “type,” “class,” or “category” to describe and distinguish the variety of controls and their basic characteristics. These terms are used in this book to highlight the multidimensional nature of controls and how they can be understood and classified. Like other constructs, these are models that better enable us to envision how controls operate and are used.

##### Classes of Controls

There are six classes of controls:

+  **Preventive**  This type of control is used to prevent the occurrence of an unwanted event. Examples of preventive controls are computer login screens (which *prevent* unauthorized persons from accessing information), keycard systems (which *prevent* unauthorized persons from entering a building or workspace), and encryption (which *prevents* persons lacking an encryption key from reading encrypted data transmitted over an open network or stored in a public file share).

+  **Detective**  This type of control is used to record both wanted and unwanted events. A detective control cannot enforce an activity (whether it is desired or undesired), but can only record whether, and how, the event occurred. Examples of detective controls include video surveillance and audit logs.

+  **Deterrent**  This type of control exists to convince potential perpetrators not to perform some unwanted activity. Examples of deterrent controls include security guards, guard dogs, warning signs, and visible video surveillance cameras and monitors.

>**NOTE**  Auditors and security professionals usually prefer preventive controls over detective controls, because preventive controls actually block unwanted events. Likewise, auditors prefer detective controls to deterrent controls, because detective controls record events while deterrent controls do not. However, there are often circumstances where cost, resource, or technical limitations force an organization to accept a detective control when it would prefer a preventive one. For example, there is no practical way to build a control that would prevent criminals from entering a bank, but a detective control (security cameras) would record what they did after they arrived.

+  **Corrective**  This type of control is activated (manually or automatically) after some unwanted event has occurred. An example of a corrective control is an act of improving a process when it was found to be defective.

+  **Compensating**  This type of control is enacted because some other direct control cannot be used. For example, a video surveillance system can be a compensating control when it is implemented to compensate for the lack of a stronger detective control, such as a keycard access system. A compensating control addresses the risk related to the original control. Note that the PCI-DSS requires the use of compensating controls when a control cannot be implemented for business, technical, or economic reasons.

+  **Recovery**  This type of control is used to restore the state of a system or asset to its pre-incident state. An example of a recovery control is the use of a tool to remove a virus from a computer.

Auditors need to understand one key difference between preventive and deterrent controls: a deterrent control requires knowledge of the control by the potential violator, and it works only if they know it exists; a preventive control works regardless of whether or not the potential violator is aware of it.

>**NOTE**  Many controls can be included in more than one class. For example, a video surveillance camera can be considered both a detective control (because it is part of a system that records events) and a deterrent control (because its visibility is designed to discourage persons from committing unwanted acts). Also, an audit log can be considered both a detective and a compensating control—detective because it records events and compensating because it may compensate for the lack of a stronger preventive control, such as a user IDs and password access control. In addition, the organization of controls described in this section is not according to any published standard.

##### Categories of Controls

There are two categories of controls:

+  **Automatic**  This type of control performs its function with little or no human judgment or decision making. Examples of automatic controls include a login page on an application that cannot be circumvented and a security door that automatically locks after someone walks through the doorway.

+  **Manual**  This type of control requires a human to operate it. A manual control may be subject to a higher rate of errors than an automatic control. An example of a manual control is a monthly review of computer user activity.

>**NOTE**  IS auditors and security professionals often prefer automatic controls to manual ones, because automatic controls are typically less prone to error. However, there are often circumstances in which an organization must settle for a manual control because of cost or some other factor, such as the requirement for human decision and intervention, perhaps during an emergency situation or disaster, for example.

#### Internal Control Objectives

*Internal control objectives* are statements of desired states or outcomes from business operations. Example control objectives include

+  Protection of IT assets

+  Accuracy of transactions

+  Confidentiality and privacy

+  Availability of IT systems

+  Controlled changes to IT systems

+  Compliance with corporate policies

Control objectives are the foundation for controls. For each control objective, one or more controls will exist to ensure the realization of the control objective. For example, the “Availability of IT Systems” control objective will be met with several controls, including

+  IT systems will be continuously monitored, and any interruptions in availability will result in alerts sent to appropriate personnel.

+  IT systems will have resource-measuring capabilities.

+  IT management will review capacity reports monthly and adjust resources accordingly.

+  IT systems will have anti-malware controls that are monitored by appropriate staff.

Together, these four (or more) controls contribute to the overall control objective on IT system availability. Similarly, the other control objectives will have one or more controls that will ensure their realization.

>**TIP**  Control objectives should be established prior to the controls themselves.

#### IS Control Objectives

IS control objectives resemble ordinary control objectives but exist in the context of information systems. Examples of IS control objectives include

+  Protection of information from unauthorized personnel

+  Protection of information from unauthorized modification

+  Integrity of operating systems

+  Controlled and managed changes to information systems

+  Controlled and managed development of application software

An organization will probably have several additional IS control objectives on other essential topics such as malware, availability, and resource management.

Like ordinary control objectives, IS control objectives will be supported by one or more controls.

>**EXAM TIP**  CISA candidates are not required to memorize COBIT or other frameworks, but familiarity with them will help the CISA candidate understand how they contribute to effective IT governance and control.

##### The COBIT Controls Framework

To ensure that IT is aligned with business objectives, the COBIT controls framework of five principles and 37 processes is an industry-wide standard. The five principles are

+  Meeting Stakeholder Needs

+  Covering the Enterprise End-to-End

+  Applying a Single, Integrated Framework

+  Enabling a Holistic Approach

+  Separating Governance from Management

COBIT contains more than 1100 control activities to support these principles.

Established in 1996 by ISACA and the IT Governance Institute, COBIT is the result of industry-wide consensus by managers, auditors, and IT users. Today, COBIT is accepted as a best-practices IT process and control framework.

Starting with Version 5, COBIT has absorbed ISACA’s Risk IT Framework and Val IT Framework.

#### General Computing Controls

An IS organization supporting many applications and services will generally have some controls that are specific to each individual application. However, IS will also have a set of controls, usually called *general computing controls* (GCCs), that applies across *all* of its applications and services.

An organization’s GCCs are general in nature and are often implemented in different ways on different information systems, based upon their individual capabilities and limitations, as well as applicability. Examples of GCCs include

+  Applications require unique user IDs and strong passwords.

+  Passwords are encrypted while stored and transmitted and are not displayed.

+  Highly sensitive information, such as bank account numbers, is encrypted when stored and transmitted.

+  All administrative actions are logged, and logs are protected from tampering.

Readers who are familiar with information systems technology will realize that these GCCs will be implemented differently across different types of information systems. Specific capabilities and limitations, for example, will result in somewhat different capabilities for password complexity and data encryption. Unless an organization is using really old information systems, the preceding four GCCs can probably be implemented everywhere in an IS environment. *How* they are implemented is the subject of the next section.

#### IS Controls

GCCs are implemented across a variety of information technologies. Each GCC is mapped to a specific IS control on each system type, where it is implemented. In other words, IS controls describe the implementation details for GCCs.

For example, a GCC for password management can be implemented through several IS controls—one for each type of technology platform in use in the organization: one for a central authentication service, one for Linux servers, one for network devices, and one for each application that performs its own access management. Those specific IS controls would describe implementation details that reflect the capabilities and limitations of each respective platform.

### Performing an Audit

An audit is a systematic and repeatable process whereby a competent and independent professional evaluates one or more controls, interviews personnel, obtains and analyzes evidence, and develops a written opinion on the effectiveness of the control(s).

An IS audit, then, is an audit of information systems and the processes that support them. An IS auditor interviews personnel, gathers and analyzes evidence, and delivers a written opinion on the effectiveness of controls implemented in information systems.

An auditor cannot just begin an audit. Rather, audits need to be planned events. Formal planning is required that includes the following:

+  **Purpose**  The IS auditor and the auditee must establish a *reason* why an audit is to be performed. The purpose for a particular audit could be to determine the level of compliance to a particular law, regulation, standard, or contract. Another reason could be to determine whether specific control deficiencies identified in past audits have been remediated. Still another reason is to determine the level of compliance to a new law or standard that the organization may be subject to in the future.

+  **Scope**  The auditor and the auditee must also establish the *scope* of the audit. Often, the audit’s purpose will make the scope evident, but not always. Scope may be multidimensional: it could be a given period (records spanning a start date and end date may comprise the body of evidence), geography (systems in a particular region or locale), technology (systems using a specific operating system, database, application, or other aspect), business process (systems that support specific processes such as accounting, order entry, or customer support), or segment of the organization.

+  **Risk analysis**  To know which areas require the greatest amount of attention, the IS auditor needs to be familiar with the levels of *risk* associated with the domain being audited. Two different perspectives of risk may be needed: First, the IS auditor needs to know the relative levels of risk among the different aspects of the domain being audited so that audit resources can be allocated accordingly. For example, if the audit is on an enterprise resource planning (ERP) system and the auditor knows that the accounts receivable function has been problematic in the past, the IS auditor will probably want to devote somewhat more resources and time on the accounts receivable function than on others. Second, the IS auditor needs to know about the absolute level of risk across the entire domain being audited. For example, if this is an audit to determine compliance to new legislation, the overall risk could be very high if the consequences of noncompliance are high. Both aspects of risk enable the IS auditor to plan accordingly.

+  **Audit procedures**  The purpose and scope of the audit may help to define the procedures that will be required to perform the audit. Requirements for a compliance audit, for example, may involve specific rules on sample sizes and sampling techniques, or they may call for auditors with specific qualifications to perform the audit. A compliance audit may also specify criteria for determining whether a particular finding constitutes a deficiency or not. There may also be rules for materiality.

+  **Resources**  The IS auditor must determine what resources are needed and available for the audit. In an external audit, the auditee (which is a client organization) may have a maximum budget figure available. For an external or internal audit, the IS auditor needs to determine the number of staff hours that will be required in the audit and the various skills required. Other resources that may be needed include specialized tools to gather or analyze information obtained from information systems—for example, an analysis program to process the roles and permissions in a database management system to identify high-risk areas. To a great degree, the purpose and scope of the audit will determine the resources that are required to complete it.

+  **Schedule**  The IS auditor needs to develop an audit schedule that will allow enough time for interviews, data collection and analysis, and report generation. However, the schedule could also come in the form of a constraint, meaning the audit must be complete by a certain date. If the IS auditor is given a deadline, he or she will need to see how the audit activities can be made to fit within that period. If the date is too aggressive, the IS auditor will need to discuss the matter with the auditee to make required adjustments in scope, resources, or schedule.

[Appendix A](/308B/Chapter01.html#appa) is devoted to a pragmatic approach to conducting professional audits.

#### Audit Objectives

*Audit objectives* are the specific goals for an audit. Generally, the objective of an audit is to determine whether controls exist and are effective in some specific aspect of business operations in an organization. Generally, an audit is performed as required by regulations, compliance, or legal obligations. It may also be performed as the result of a serious incident or event.

Depending on the subject and nature of the audit, the auditor may personally examine the controls and related evidence, or the auditor may instead focus on the business content that is processed by the controls. In other words, if the focus of an audit is an organization’s accounting system, the auditor may focus on financial transactions in the system to see how they affect financial bookkeeping. Or the auditor could focus on the IS processes that support the operation of the financial accounting system. Formal audit objectives should make such a distinction so that the auditor has a sound understanding of the objectives. This tells the auditor what to examine during the audit. Of course, knowing the type of audit to be undertaken helps too; this is covered in the next section.

#### Types of Audits

The scope, purpose, and objectives of an audit will determine the type of audit that will be performed. IS auditors need to understand each type of audit, including the procedures that are used for each:

+  **Operational audit**  This type of audit is an examination of the existence and effectiveness of IS controls, security controls, or business controls. The focus of an operational audit is usually the operation of one or more controls; it could concentrate on the IS management of a business process or on the business process itself. The scope of an operational audit is shaped to meet audit objectives. Do note that, *in this context*, an *operational audit* is the audit of a business process supporting the information system, *not* the business process supported *by* the information system. The latter would not be an IS audit but an audit of a business process.

+  **Financial audit**  This type of audit is an examination of the organization’s accounting system, including accounting department processes and procedures. The typical objective of a financial audit is to determine whether business controls are sufficient to ensure the integrity of financial statements.

+  **Integrated audit**  This type of audit combines an operational audit and a financial audit in order for the auditor to gain a complete understanding of the entire environment’s integrity. Such an audit will closely examine accounting department processes, procedures, and records, as well as the IS applications that support the accounting department. Virtually every organization uses a computerized accounting system for management of its financial records; the computerized accounting system and all of the supporting infrastructure (database management system, operating system, networks, workstations, and so on) will be examined to determine whether the IS department has the entire environment under adequate control.

+  **IS audit**  This type of audit is a detailed examination of most or all of an IS department’s operations. An IS audit looks at IT governance to determine whether IS is aligned with overall organization goals and objectives. The audit also looks closely at all of the major IS processes, including service delivery, change and configuration management, security management, systems development life cycle, business relationship and supplier management, and incident and problem management. This audit will determine whether each control objective and control is effective and operating properly.

+  **Administrative audit**  This type of audit is an examination of operational efficiency within some segment of the organization.

+  **Compliance audit**  This type of audit is performed to determine the level and degree of compliance to a law, regulation, standard, or internal control. If a particular law or standard requires an external audit, the compliance audit may have to be performed by approved or licensed external auditors; for example, a U.S. public company financial audit must be performed by a public accounting firm, and a PCI audit must be performed by a licensed QSA (qualified security assessor). If, however, the law or standard does not explicitly require audits, the organization may still want to perform one-time or regular audits to determine the level of compliance to the law or standard. This type of audit may be performed by internal or external auditors and typically is performed to help management better understand the level of compliance risk.

+  **Forensic audit**  This type of audit is usually performed by an IS auditor or a forensic specialist in support of an anticipated or active legal proceeding. To withstand cross-examination and to avoid having evidence being ruled inadmissible, a forensic audit requires that strict procedures be followed, including the preservation of evidence and a chain of custody of evidence.

+  **Fraud audit**  This audit is designed to reveal fraud and other business irregularities.

+  **Service provider audit**  Because many organizations outsource critical activities to third parties, often these third-party service organizations will undergo one or more external audits to increase customer confidence in the integrity of the third-party organization’s services. In the United States, a Statement on Standards for Attestation Engagements No. 18, *Reporting on Controls at a Service Organization* (SSAE 18) can be performed on a service provider’s operations and the audit report transmitted to customers of the service provider. SSAE 18 superseded SSAE 16 in 2016, which superseded the Statement of Accounting Standards No. 70 (SAS 70) audit in 2011. The SSAE 18 standard was developed by the American Institute of Certified Public Accountants (AICPA) for the purpose of auditing third-party service organizations that perform financial services on behalf of their corporate customers.

##### Internal and External Audits

The terms “internal audit” and “external audit” refer to the relationship between auditor and auditee, and not to the types of audits discussed in this section.

+  **Internal audit**  This audit is performed by personnel employed by the auditee organization. Internal auditors typically still have a degree of independence through their locations on the org chart.

+  **External audit**  This audit is performed by auditors who are not employees of the auditee. Typically, external auditors are employees of an audit firm.

There is, of course, some gray area here: in a large organization such as a holding company, auditors who are employees of the holding company may be considered as external auditors to the auditee.

Also, some organizations outsource the internal audit function, which means that the persons performing internal audit are not employees of the organization, but instead are consultants or contractors. This can be a source of confusion, based on appearances. What matters here is the specific audit function and how it is carried out, and not so much whether the persons performing it are employees or not.

>**TIP**   SSAE 18 is closely aligned with the global standard International Auditing and Assurance Standards Board (IAASB) *International Standard on Assurance Engagements 3402, Assurance Reports on Controls at a Service Organization* (ISAE 3402).

+  **Pre-audit**  While not technically an audit, a pre-audit is an examination of business processes, IS systems, and business records in anticipation of an upcoming external audit. Usually, an organization will undergo a pre-audit to get a better idea of its compliance to a law, regulation, or standard prior to an actual compliance audit. An organization can use the results of a pre-audit to implement corrective measures, thereby improving the outcome of the real audit.

#### Compliance vs. Substantive Testing

It is important for IS auditors to understand the distinction between compliance testing and substantive testing. These two types of testing are defined here:

+  **Compliance testing**  This type of testing is used to determine whether control procedures have been properly designed and implemented and are operating properly. For example, an IS auditor may examine business processes, such as the systems development life cycle, change management, or configuration management, to determine whether information systems environments are properly managed.

+  **Substantive testing**  This type of testing is used to determine the accuracy and integrity of transactions that flow through processes and information systems. For instance, an IS auditor may create test transactions and trace them through the environment, examining them at each stage until their completion.

IS audits sometimes involve both compliance testing and substantive testing. The audit objectives that are established will determine whether compliance testing, substantive testing, or both will be required.

#### Audit Methodology and Project Management

Like any business endeavor that involves the development of a plan, identification of resources, and the establishment of scope, procedures, and records, audits are projects that need to be managed as such. The reasons for employing formal project planning for audits include

+  Development and management of a schedule and timelines

+  Identification of resources

+  Management of turnaround time for documentation and evidence requests

+  Management of the time required for analysis and reporting writing

+  Management of the time required for audit client report review, response, and acceptance

Project management principles and methodologies should be used throughout an audit, including periodic status meetings and status reports, tracking of schedule and activities, and retention of records.

Auditors do not always make good project managers. This may be the best reason to employ the services of project managers during larger audits.

##### Audit Methodology

An *audit methodology* is the set of audit procedures that is used to accomplish a set of audit objectives. An organization that regularly performs audits should develop formal methodologies so that those audits are performed consistently, even when carried out by different personnel.

The phases of a typical audit methodology are described in the remainder of this section.

**Audit Subject**  Determine the business process, information system, or other domain to be audited. For instance, an IS auditor might be auditing an IT change control process, an IT service desk ticketing system, or the activities performed by a software development department.

**Audit Objective**  Identify the purpose of the audit. For example, the audit may be required by a law, regulation, standard, or business contract. Or the audit may be needed to determine compliance with internal control objectives to measure control effectiveness.

**Type of Audit**  Identify the type of audit that is to be performed. This may be an operational audit, financial audit, integrated audit, administrative audit, compliance audit, forensic audit, fraud audit, or a security provider audit.

**Audit Scope**  The business process, department, or application that is the subject of the audit should be identified. Usually, a span of time needs to be identified as well so that activities or transactions during that period can be examined.

>**NOTE**  The *subject* of an audit is a broad definition, whereas the *scope* further defines exactly which processes, locations, and systems will be audited.

**Pre-Audit Planning**  Here, the auditor needs to obtain information about the audit that will enable him or her to establish the audit plan. Information needed includes

+  Location or locations that need to be visited

+  A list of the applications to be examined

+  The personnel to be interviewed

+  The technologies supporting each application

+  Policies, standards, and diagrams that describe the environment and its requirements

+  Information about business processes supported by the application

This and other information will enable the IS auditor to determine the resources and skills required to examine and evaluate processes and information systems. The IS auditor will be able to establish an audit schedule and will have a good idea of the types of evidence that are needed. The IS auditor may be able to make advance requests for certain other types of evidence even before the on-site phase of the audit begins.

For an audit with a risk-based approach, the auditor has a couple of options:

+  Precede the audit itself with a risk assessment to determine which processes or controls warrant additional audit scrutiny.

+  Gather information about the organization and historic events to discover risks that warrant additional audit scrutiny.

**Audit Statement of Work**  For an external audit, the IS auditor may need to develop a statement of work or an engagement letter that describes the audit purpose, scope, duration, and costs. The auditor may require a written approval from the client before audit work can officially begin.

**Audit Procedures Development**  Using information obtained regarding audit objectives and scope, the IS auditor can now develop procedures for this audit. For each objective and control to be tested, the IS auditor can specify

+  A list of people to interview

+  Inquiries to make during each interview

+  Documentation (policies, procedures, and other documents) to request during each interview

+  Audit tools to use

+  Sampling rates and methodologies

+  How and where evidence will be archived

+  How evidence will be evaluated

+  How findings will be reported

**Communication Plan**  The IS auditor will develop a communication plan to keep the IS auditor’s management, as well as the auditee’s management, informed throughout the audit project. The communication plan may contain one or more of the following:

+  A list of evidence requested, usually in the form of a PBC (provided by client) list, which is typically a worksheet that lists specific documents or records and the names of personnel who can provide them (or who provided them in a prior audit).

+  Regular written status reports that include activities performed since the last status report, upcoming activities, and any significant findings that may require immediate attention.

+  Regular status meetings in which audit progress, issues, and other matters may be discussed in person or via conference call.

+  Contact information for both IS auditor and auditee so that both parties can contact each other quickly if needed.

**Report Preparation**  The IS auditor needs to develop a plan that describes how the audit report will be prepared. This will include the format and the content of the report, as well as the manner in which findings will be established and documented.

The IS auditor will need to ensure that the audit report complies with all applicable audit standards, including ISACA IS audit standards.

If the audit report requires internal review, the IS auditor will need to identify the parties who will perform the review and make sure that they will be available at the time when the IS auditor expects to complete the final draft of the audit report.

**Wrap-up**  The IS auditor needs to perform a number of tasks at the conclusion of the audit, including the following:

+  Deliver the report to the auditee.

+  Schedule a closing meeting so that the results of the audit can be discussed with the auditee and so that the IS auditor can collect feedback.

+  For external audits, send an invoice to the auditee.

+  Collect and archive all work papers. Enter their existence in a document management system so that they can be retrieved later, if needed, and to ensure their destruction when they have reached the end of their retention life.

+  Update PBC documents if the IS auditor anticipates that the audit will be performed again in the future.

+  Collect feedback from the auditee and convey to audit staff as needed.

**Post-Audit Follow-up**  After a given period (which could range from days to months), the IS auditor should contact the auditee to determine what progress the auditee has made on the remediation of any audit findings. There are several good reasons for doing this:

+  It establishes a tone of concern for the auditee organization (and an interest in its success) and demonstrates that the auditor is taking the audit process seriously.

+  It helps to establish a dialogue whereby the auditor can help auditee management work through any needed process or technology changes as a result of the audit.

+  It helps the auditor better understand management’s commitment to the audit process and to continuous improvement.

+  For an external auditor, it improves goodwill and the prospect for repeat business.

>**NOTE**  An audit methodology is a process. Like any process, it should be defined in an end-to-end document that is reviewed from time to time.

#### Audit Evidence

*Evidence* is the information collected by the auditor during the course of the audit project. The contents and reliability of the evidence obtained are used by the IS auditor to reach conclusions on the effectiveness of controls and control objectives. The IS auditor needs to understand how to evaluate various types of evidence and how (and if) it can be used to support audit findings.

The auditor will collect many kinds of evidence during an audit, including

+  Observations

+  Written notes

+  Correspondence

+  Independent confirmations from other auditors

+  Internal process and procedure documentation

+  Business records

When the IS auditor examines evidence, he or she must consider several characteristics about the evidence that will contribute to its weight and reliability. These characteristics include the following:

+  **Independence of the evidence provider**  The IS auditor needs to determine the independence of the party providing evidence. The auditor will place more weight on evidence provided by an independent party than on evidence provided by the auditee. For instance, phone and banking records obtained directly from phone and banking organizations will be given more credence than an organization’s own records (unless original statements are also provided). Some auditees may be able and inclined to “doctor” audit evidence, giving the appearance of process effectiveness.

+  **Qualifications of the evidence provider**  The IS auditor needs to consider the qualifications of the person providing evidence. This is particularly true when evidence is in the form of highly technical information, such as source code, system configuration settings, or database extracts. The quality of the evidence will rest partly upon the evidence provider’s ability to explain the source of the evidence, how it was produced, and how it is used. Similarly, the qualifications of the auditor come into play, as he or she will need to be able to understand the nature of the evidence thoroughly and be familiar enough with the technology to be able to determine its veracity. Some auditees like to “snowball” auditors by providing evidence that is irrelevant or incomplete, potentially to avoid disclosing details about controls that are ineffective.

+  **Objectivity**  Objective evidence may be considerably more reliable than subjective evidence. An audit log, for instance, is quite objective, whereas an auditee’s description or opinion of the audit log is less objective.

+  **Timing**  The IS auditor needs to understand the availability of evidence in the systems being audited. Certain log files, extract files, debug files, and temporary files that may be of value during the examination of the system may be available only for short periods before they are recycled or removed. Often, intermediate files are not backed up or retained for long periods. For instance, Dynamic Host Configuration Protocol (DHCP) lease logs may be available only for a few hours or days. When tracing transactions through a system during substantive testing, an IS auditor will need to understand early on what files or intermediate data should be retrieved to be able to analyze the data later after those intermediate files have been cycled out.

>**NOTE**  The IS auditor needs to gain a thorough understanding of the sufficiency of evidence gathered using ISACA audit standards 1203, Performance and Supervision, and 1205, Evidence.

##### Gathering Evidence

The IS auditor must understand and be experienced in the methods and techniques used to gather evidence during an audit. The methods and techniques used most often in audits include the following:

+  **Organization chart review**  The IS auditor should request a current org chart, as well as the job descriptions of key personnel. This will help the auditor to understand management, control, and reporting structures within the organization.

+  **Review of department and project charters**  These documents describe the roles and responsibilities of the IS organization overall, as well as for specific departments within IS. The charters for any recent significant projects should be requested as well to understand newer objectives that could represent adjustments in organizational behavior. If the audit is going to focus on applications used by other departments, the auditor should request those departments’ charters and descriptions, which will help the auditor better understand those departments’ functions, roles, and responsibilities. In the absence of a formal charter, the auditor will need to interview a number of personnel to gain a consistent view of a department’s or project’s purpose, roles and responsibilities, and authority.

+  **Review of third-party contracts and service level agreements (SLAs)**  Even if they are not a focus of the audit, certain third-party contracts and SLAs may provide additional insight into the workings and culture of the IS organization and specific systems and business processes.

+  **Review of IS policies and procedures**  The auditor should obtain and review IS policies as well as process and procedure documents that are related to the audit. This will help the auditor better understand the tone and direction set by management and will provide information about how well organized the IS organization really is.

+  **Review of risk register (also known as a risk ledger)**  The auditor should obtain the organization’s risk register, which will provide insight into the kinds of risks identified by the organization.

+  **Review of incident log**  The auditor should obtain the organization’s security incident log. This will help the auditor understand the types of security incidents that have occurred, including those involving in-scope processes and systems.

+  **Review of IS standards**  The auditor should obtain any IS standards documents to learn about current policy for vendors, products, methods, languages, and protocols in use. The auditor should review process and documentation standards as well to see how consistently the organization follows them; this will provide valuable insight into the discipline in the organization.

>**NOTE**  The IS auditor should pay attention to what IS charters, policies, and procedure documents do say, as well as what they don’t say. He or she should perform corroborative interviews to determine whether these documents really define the organization’s behavior or if they’re just window dressing. This will help the auditor understand the maturity of the organization, a valuable insight that will be helpful when writing the audit report.

+  **Review of IS system documentation**  If the subject of the audit (directly or indirectly) is an IS application, the auditor should obtain much of the project documentation that chronicles the development or acquisition of the system. This may include the following:

+  Feasibility study

+  Functional, technical, and security requirements

+  Requests for proposals (RFPs)/requests for information (RFIs)

+  Responses from vendors (at least the one chosen)

+  Evaluation of vendor responses

+  System design documentation, including data flow diagrams, entity-relationship diagrams, database schema, and so on

+  Test plans and results

+  Implementation guides and results

+  User manuals

+  Operations manuals

+  Business continuity plans

+  Changes made since initial release

+  Incidents and events

+  Reports of system stability, capacity, and availability

+  **Personnel interviews (walkthroughs)**  The IS auditor should conduct walkthrough interviews with key personnel who can describe the function, design, use, and operation of the system. Rather than assume that all acquired documentation is absolutely complete and accurate, the auditor should ask open-ended questions to gain additional insight into *how well* the system really operates and how accurately the documentation describes the system in use and its operation. The auditor should develop questions in advance to keep the interview on track and to make sure that all topics are covered. The auditor should carefully select key questions and ask them of more than one individual to compare answers, which will provide more insight.

>**NOTE**  Some organizations may coach their personnel so that they do not provide any more than the minimum amount of information. An experienced auditor should recognize this and may need to get creative (without compromising ethics standards!) to get to key facts and circumstances. The IS auditor must always be polite, friendly, and request cooperation of each interviewee. He or she must always be truthful and never threaten any interviewee.

+  **Re-performance**  An auditor will create transactions to be executed by the process being audited, when practical, to confirm that the process produces expected results. Sometimes, however, re-performance is not feasible, in which case the auditor will have to observe planned/normal transactions critically to confirm the expected results.

+  **Passive observation**  When an IS auditor is embedded in an organization, people will “let their guard down” after they are accustomed to his or her presence. The auditor may be able to observe people being themselves and possibly will hear or see clues that will provide clear insights into the culture and tone of the organization.

##### Observing Personnel

It is rarely sufficient for an auditor to obtain and understand process documentation and be able to make judgments about the effectiveness of the process. Usually, the auditor will need to collect evidence in the form of observations to see how consistently a system’s process documentation is actually followed. Following are some of the techniques used in observing personnel:

+  **Real tasks**  The auditor should request to see some IS functions actually being carried out. For example, if an auditor is examining user access management processes, he or she should request to observe the persons who manage user accounts to see how they perform their tasks. The auditor should compare the steps taken against procedure documentation and observe the configuration settings that the interviewee has made to determine whether they are being done according to procedure documents.

+  **Skills and experience**  The auditor should ask each interviewee about his or her career background to determine the interviewee’s level of experience and career maturity. This will help the auditor to understand whether key responsibilities are in the hands of personnel who can really handle them.

+  **Security awareness**  The IS auditor should observe personnel to determine whether they are following security policies and procedures. The auditor can casually ask interviewees what they know about security procedures to determine whether the security awareness program is effective. This should implicitly be a part of every audit, even if not explicitly included in scope. Major deviations from policy or common sense could constitute deficiencies.

+  **Segregation of duties**  The IS auditor should observe personnel to determine whether adequate segregation of duties (SOD) is in place. Lapses could include a user account administrator creating or changing a user account without official approval, or a systems engineer making a quick change on a system without going through the change management process or bypassing technical controls.

An experienced IS auditor will have a well-developed “sixth sense,” an intuition about people that can be used to understand the people who execute procedures.

##### Sampling

*Sampling* refers to the technique that is used when it is not feasible to test an entire *population* of transactions. The objective of sampling is to select a portion of a population so that the characteristics observed will reflect the characteristics of the entire population.

There are several sampling methods including

+  **Statistical sampling**  The IS auditor uses a technique of random or semi-random selection that will statistically reflect the entire population. The auditor will need to determine the size of the sample (usually expressed as a percentage of the entire population) so that the results obtained through testing will statistically reflect the entire population, where each event in the population has an equal chance of being selected.

+  **Judgmental sampling (aka nonstatistical sampling)**  The IS auditor judgmentally and subjectively selects samples based on established criteria such as risk or materiality. For instance, when reviewing a list of user accounts to examine, the auditor can purposely select those users whose accounts represent higher risk than the accounts of others in the population.

+  **Attribute sampling**  This technique is used to study the characteristics of a given population to answer the question, “How many?” The auditor selects a statistical sample and then examines the information. A specific attribute is chosen, and the samples are examined to see how many items have the characteristic and how many do not. For example, an auditor may test a list of terminated user accounts to see how many were terminated within 24 hours and how many were not. This is used to determine statistically the rate at which terminations are performed within 24 hours among the entire population.

+  **Variable sampling**  This technique is used to determine statistically the characteristic of a given population to answer the question, “How much?” For example, an auditor who wants to know the total value of an inventory can select a sample and then statistically determine the total value in the entire population based on the total value of the sample.

+  **Stop-or-go sampling**  This technique is used to permit sampling to stop at the earliest possible time. The IS auditor will use this technique when he or she believes that there is a low risk and a low rate of exceptions in the overall population.

+  **Discovery sampling**  This technique is used when an IS auditor is trying to find at least one exception in a population. When the auditor is examining a population in which even a single exception would represent a high-risk situation (such as embezzlement or fraud), the auditor will recommend a more intensive investigation to determine whether additional exceptions exist.

+  **Stratified sampling**  Here, the event population is divided into classes, or strata, based on the value of one of the attributes. Then samples are selected from each class, and results are developed from each class or combined into a single result. An example of where this could be used is a selection of purchase orders (POs), where the IS auditor wants to make sure that some of the extremely high-value and low-value POs will be selected to determine whether there is any statistical difference in the results in different classes.

When performing sampling, the IS auditor needs to understand several terms related to aspects of statistical sampling techniques:

+  **Confidence coefficient**  Sometimes known as the reliability factor or confidence level, this is expressed as a percentage, as the probability that the sample selected actually represents the entire population. A confidence coefficient of 95 percent is considered high.

+  **Sampling risk**  This is equal to 1 minus the confidence coefficient percentage. For example, if a given sample has a 93 percent confidence coefficient, the risk level is 7 percent (100 percent – 93 percent = 7 percent).

+  **Precision**  This represents how closely the sample represents the entire population. A low precision figure means high accuracy, and a high precision figure means low accuracy. A smaller sample makes the precision higher, and the risk of exceptions in the entire population is higher.

+  **Expected error rate**  This is an estimate that expresses the percentage of errors that may exist in the entire population. When the expected error rate is higher, the sample needs to be higher (because a population with a high rate of errors requires greater scrutiny). If the expected error rate is low, the sample can be smaller.

+  **Sample mean**  This is the sum of all samples divided by the number of samples. This equals the average value of the sample.

+  **Sample standard deviation**  This is a computation of the variance of sample values from the sample mean. This is a measurement of the “spread” of values in the sample.

+  **Population standard deviation**  Within the entire evidence population, this is a computation of the variance of values from the mean. All other factors being equal, a larger population standard deviation means the auditor should select a larger set of samples.

+  **Tolerable error rate**  This is the highest number of errors that can exist without a result being materially misstated.

>**NOTE**  Part of the body of evidence in an audit is a description of how a sample was selected and why the particular sampling technique was used.

#### Reliance on the Work of Other Auditors

Audit departments and external auditors, like other IT service organizations, are challenged to find qualified audit professionals who understand all aspects of organizational technologies in use. Increased specialization in IT is resulting in auditors with increased technical knowledge in certain areas, and fewer auditors with all of the knowledge required to perform an audit. Third-party service providers usually do not permit customers to audit them; they instead rely on external auditors to perform audits and then make those audit reports available to customers. These and other factors are putting increasing pressure on organizations to outsource some auditing tasks (or entire audits) to third-party organizations and to rely upon audit reports from other sources.

When considering reliance upon other auditors, one must examine many potential issues, including

+  Laws, regulations, standards, or contracts that may place restrictions on the use of third-party auditors

+  Impact on risk

+  Costs and the overhead required to manage external auditors

+  Impact on audit schedule and reporting

+  Impact on general and professional liability

+  Audit standards and methodologies used by the third-party auditor

+  Competence and experience of the third-party auditor

+  Independence and objectivity of internal versus external auditors

+  Methods for communication of audit issues and results

+  Access by third-party auditor to internal records and systems

+  Protection and privacy of information made available to external auditors

+  Background checks, nondisclosure, and other agreements for third-party audit personnel

+  Audit management controls used to manage external audit activities

+  Compliance and/or compatibility with audit standards, regulations, and stipulations

##### Reliance on Third-Party Audit Reports

Another common setting for the reliance on third-party auditors occurs when an organization chooses to rely upon audit reports for an external service provider rather than audit the external service provider directly. A typical example is a case where an organization hires a payroll services provider that has its own SSAE 18 audit that was performed by qualified audit firms. The organization’s own auditors will likely choose to rely on the payroll service provider’s SSAE 18 audit rather than audit the payroll service provider directly.

From the service provider’s point of view, the cost to commission an SSAE 18 audit and make the audit report available to its clients is less than the cost for even a small percentage of its customers to perform their own audits of the service provider’s business.

>**NOTE**  IS auditors should be familiar with ISACA audit guideline 2206, Using the Work of Other Experts, and standard 1203, Performance and Supervision, to manage the work performed by external auditors properly. Specific laws, regulations, or standards may also apply.

#### Audit Data Analytics

Data analytics techniques enable IS auditors to select and analyze potentially large data sets and use these techniques to determine control effectiveness. In the context of IS audits, data analytics represents a variety of computational techniques used to analyze larger volumes of audit data to assist IS auditors in determining control effectiveness. These techniques are described in this section.

The term *data analytics* may invoke visions of big data and data lakes used to obtain and analyze audit data, and this may be the situation at times. However, often there are far simpler situations where computational assistance in processing data is used. For example, programmatically cross-referencing badge access records with system logon data can help auditors detect potentially fraudulent user logins.

Audit data analytics can be performed using computer-assisted audit tools such as generalized audit software and continuous auditing. These topics are discussed next.

##### Computer-Assisted Audit and Automated Work Papers

When auditing complex information systems, IS auditors often need to obtain sample data from systems with a variety of operating systems, database management systems, record layouts, and processing methods. Auditors are turning to computer-assisted audit techniques (CAATs) to help them examine and evaluate data across these complex environments.

CAATs come in a variety of forms:

+  **Direct extracts from database management systems**  For off-the-shelf systems such as Oracle Financials and PeopleSoft Financials, auditors can obtain extracts from databases supporting these and other packaged applications and perform independent analysis on the data. Analytics software can then be run against extracted data to identify any transaction exceptions as well as fraud.

+  **Test transactions**  For standard financial and business management applications, auditors can prepare test transactions that will produce known, expected results. Such tests can determine the integrity of transaction processing by comparing test results with expected results.

+  **Debugging and scanning software**  Tools that reveal the details of transactions and data flow can help auditors better understand how transactions are processed by a system, to opine on their integrity and accuracy. Scanning software can be used to identify specific data in database management systems as well as unstructured data stores. Security scanning software can be used to identify known vulnerabilities in target systems. Code scanning software can examine application source code that will help reveal vulnerabilities and poor coding practices such as embedding login credentials in source code.

+  **Test scripts**  Tools that perform a variety of functions can be provided by an auditor and run on target systems. Such tools can reveal configuration details in operating systems, database management systems, and applications. A broad array of automated controls can be examined with test scripts.

When using CAATs, auditors need to document the evidence they obtain from systems and be able to link it to business transactions. Often, auditors will have to obtain several other items, including

+  Application source code

+  Online reports that correlate captured data to transactions and results

+  Database schemas

+  Data flow diagrams and flow charts

+  Sample reports

+  Operations procedures

Auditors should be able to stitch all these pieces back together to show a complete picture of the details behind business transactions.

##### Protecting Automated Work Papers

CAATs help IS auditors by making sampling easier and by capturing data that has varying degrees of persistence in an organization’s application environment. That captured data will often be considered part of the body of work papers. Like the systems that are targets of audits, audit data needs to be protected to ensure its integrity. Controls such as the following need to be enacted to protect automated work papers:

+  **Access control**  Only authorized persons (ideally, only the auditor) should have read access to automated work papers.

+  **Protection from tampering and damage**  Automated work papers must be protected so that no person is able to change them, remove them, or threaten their integrity.

+  **Backup**  Automated work papers should be included in data backups.

+  **Encryption**  Automated work papers should be encrypted if they contain sensitive information. Effective key management procedures and controls must be in place.

##### Generalized Audit Software

IS auditors can use generalized audit software (GAS) to read and access data directly from database platforms and flat files. They can independently and directly acquire sample data from databases, which they can then analyze on a separate system. GAS has the ability to select samples, select data, and perform analysis on data. This can help the auditor better understand key data sets in a system to assist him or her in determining the integrity and accuracy of a system and the business transactions it supports.

##### Continuous Auditing

CAATs can also be used as part of a continuous audit approach, where samples are obtained automatically over long periods instead of just during audit engagements. This represents a paradigm shift from the traditional model of periodic sampling and reporting. To be truly effective, continuous auditing should include the following:

+  Frequent notifications to auditors and control owners on audit results

+  Triggers to notify auditors and control owners of control failures and other exceptions

There are several types of continuous auditing:

+  **Audit hooks**  These components in software applications are used to provide additional transaction monitoring and to create alerts when certain events occur, such as a potential fraudulent transaction.

+  **Integrated test facility (ITF)**  In a software application, additional “dummy” test records will be present that will be processed alongside actual business transactions. These additional records are usually created by auditors and are introduced during normal production transaction processing.

+  **Continuous and intermittent simulation (CIS)**  This technique involves a connection to a live production environment; when new transactions are introduced, the transaction is simulated in a transaction simulator as well as being executed in the live environment. The results of the simulation are compared to the actual transaction. In CIS, it is not necessary to simulate every transaction; instead, a sampling technique is used to simulate selected transactions.

+  **Systems control audit review file and embedded audit modules (SCARF/EAM)**  This involves the development and embedding of specialized audit software directly into production applications. This audit software can perform various functions, including selecting transactions to audit, additional logging, and additional checks.

Additional guidance on the use of CAATs and continuous auditing is located in ISACA auditing guideline 2205, Evidence.

>**NOTE**  IS auditors need to ensure that the effort required to set up the CAAT environment doesn’t exceed the effort required by other methods for sampling and analysis.

#### Reporting Audit Results

The work product of an audit project is the *audit report*, a written report that describes the entire audit project, including audit objectives, scope, controls evaluated, opinions on the effectiveness and integrity of those controls, and recommendations for improvement.

Although an IS auditor or audit firm will generally use a standard format for an audit report, some laws and standards require that particular types of audit reports contain specific information or be presented in a particular format. Still, some variance is expected in the structure and appearance of audit reports created by different audit organizations.

The auditor is typically asked to present findings in a closing meeting, where he or she can explain the audit and its results and be available to answer questions about the audit. The auditor may include an electronic presentation to guide discussion of the audit.

##### Structure and Contents

Although there are often different methods for presenting audit findings, as well as regulations and standards that require specific content, an audit report will generally include several elements:

+  **Cover letter**  The cover letter briefly describes the audit, its scope and purpose, and the auditor’s findings. Often, this letter is used alone as evidence to other organizations that the audit took place.

+  **Introduction**  The introduction describes the contents of the audit report.

+  **Summary**  The executive summary briefly describes the audit, its purpose and scope, and the auditor’s findings and recommendations.

+  **Description of the audit**  The report includes a high-level description of the audit, its purpose, and its objectives.

+  **Listing of systems and processes examined**  The report should contain a list of systems, applications, and business processes that were examined.

+  **Listing of interviewees**  The report should contain a complete list of interviewees, when they were interviewed, and topics discussed.

+  **Listing of evidence obtained**  A detailed list of all evidence obtained, from whom, and when it was obtained is included. Electronic evidence should be described, including the time it was acquired, the system it was obtained from, and the method used to obtain it. The names of any staff members who assisted should be included.

+  **Explanation of sampling techniques**  Each time the auditor performed any sampling, the techniques used should be described.

+  **Description of findings and recommendations**  Detailed explanations describe the effectiveness of each control, based on evidence and the auditor’s judgment. Exceptions are described in detail to demonstrate that they actually occurred. Information in this section may be organized according to criticality, technology in use, or business function, or it may be organized by several of these. Some audit reports do not include recommended remediation to avoid the appearance of influencing the organization in a consultative manner.

The IS auditor creating the report must ensure that it is balanced, reasonable, and fair. The report should not just be a list of everything that was bad; it should also include a list of controls that were found to be operating effectively.

The IS auditor also needs to take care when describing recommendations, realizing that any organization is capable of a finite amount of change in a given period. If the audit report contains many findings, the auditor needs to realize that the organization may not be able to remediate all of the issues before the next audit cycle. Instead, the organization will need to understand which findings should be remediated first—the audit report should provide this guidance through severity ratings on individual findings or groups of findings.

>**NOTE**  It is typically *not* the auditor’s role to describe *how* an audit finding should be remediated. Deciding the method(s) used to apply remediation is the role of auditee management.

##### Evaluating Control Effectiveness

When developing an audit report, the auditor needs to communicate the effectiveness of controls to the auditee. Often, this reporting is needed at several layers; for instance, the auditor may provide more detailed findings and recommendations to control owners, while the report for senior management may contain only the significant findings.

##### Audit Reports Should Not Contain Surprises

In a collaborative relationship between auditor and auditee, there should be a level of candor and trust, so that the auditee understands throughout the audit where things stand. At the end of the audit, when the auditor is presenting the audit results to management, those in management should already know with reasonably good (but not necessarily absolute) accuracy what the audit report will contain.

This is not to say that auditee management will be *happy* with the audit results. Certainly, if there are deficiencies in the report, management, in its spirit of continuous improvement and quality, should not be satisfied with a less-than-perfect audit result. The point here is that auditors should not necessarily conceal their findings until the report is delivered.

One method that auditors frequently use is the development of a matrix of all audit findings, where each audit finding is scored on a criticality scale. This helps the auditor to illustrate the audit findings that are the most important and those that are less important, in the auditor’s opinion. The auditor can also report on cases where an ineffective control is mitigated (fully or partially) by one or more compensating controls. For example, a system may not have the ability to enforce password complexity (for example, requiring upper- and lowercase letters, plus numbers and special characters), but this can be compensated through the use of longer than usual passwords and perhaps even more frequent expiration times.

>**NOTE**  The IS auditor should review ISACA auditing standard 1401, Reporting, and guideline 2401, Reporting, when developing the audit report to ensure that the report is complete and accurate.

#### Other Audit Topics

This section includes important discussions on topics related to IS audits.

##### Detecting Fraud and Irregularities

*Fraud* is defined as an intentional deception made for personal gain or to damage another party. In the context of corporate information systems and IS auditing, fraud is an act whereby a person discovers and exploits a weakness in a process or system for personal gain or personal satisfaction. An *irregularity* is an event that represents actions contrary to accepted practices or policy.

Management is responsible for implementing controls designed to prevent, deter, and detect fraud. However, no system or process is without weaknesses—worse yet, if two or more employees agree to a conspiracy to defraud the organization, it is possible for the conspirators to, at least temporarily, steal from the organization.

While detecting fraud and irregularities is certainly not the IS auditor’s primary responsibility, an IS auditor surely has many opportunities to discover exploitable weaknesses in processes and systems that could be used to defraud the organization. Occasionally, the IS auditor will discover evidence of fraud while examining transaction samples during substantive testing.

When the auditor detects signs of fraud or irregularities, he or she should carefully evaluate these findings and then communicate them to the appropriate authorities. Precisely whom he or she contacts will depend on the nature and structure of the organization and whether there is regulatory oversight of the organization and/or the auditor. The auditor needs to be extremely careful when reporting findings within the organization because the person the auditor reports findings to could be the perpetrator—or could be associated with the perpetrator. This logic may prompt the auditor to report findings directly to the audit committee, thereby bypassing all potential perpetrators in the organization (usually, members of the audit committee are not employees in the organization, have no role in the organization’s operations, and hence are probably not among the culprits).

If the organization has no audit committee or similar overseeing body, the auditor may be compelled to report irregularities to industry regulators or law enforcement.

When the auditor is representing an external audit organization, often the auditor will discuss the weakness, irregularity, or actual fraud with selected members of the audit organization to confirm his or her observations and agree on a plan for notifying the auditee or outside authorities.

Communication of the weakness or actual fraud or irregularity typically begins with a phone call or face-to-face conversation, which is followed up by a formal written letter. This will satisfy the need to inform the auditee quickly (via the phone call) and formally (via the written letter).

##### Audit Risk and Materiality

What if material errors in business processes remain undetected by the IS auditor? There are a number of ways in which this can occur, including the following:

+  **Control risk**  This is the risk that a material error exists that will not be prevented or detected by the organization’s control framework. For example, a manual control that is designed to detect unauthorized changes in an information system may fail if the person who reviews logs overlooks significant errors, irregularities, or fraud.

+  **Detection risk**  This is the risk that an IS auditor will overlook errors or exceptions during an audit. Detection risk should be a part of the IS auditor’s risk assessment that is carried out at the beginning of an audit; this would help the auditor focus on controls that require additional scrutiny (meaning higher sampling rates) and thereby improve the chances of detecting errors.

+  **Inherent risk**  This is the risk that there are material weaknesses in existing business processes and that there are no compensating controls to aid in their detection or prevention. Inherent risks exist independent of the audit.

+  **Sampling risk**  This is the risk that the sampling technique used will not detect transactions that are not in compliance with controls.

+  **Overall audit risk**  This is the summation of all of the residual risks discussed in this section.

**Materiality**  In financial audits, *materiality* is established as a dollar amount threshold that is calculated in one of several possible ways, including a percentage of pretax income, a percentage of gross profit, a percentage of total assets, a percentage of total revenue, a percentage of equity, or blended methods using two or more of these.

When an auditor is examining transactions and controls during an audit, a finding can be classified as a material weakness if the dollar amount of the exceptions exceeds the materiality threshold. There is, however, some latitude (more in some cases and less in others) in the auditor’s judgment as to whether a finding is material.

In an IS audit, the controls being examined usually do not have dollar figures associated with them, and deficiencies are not measured against materiality thresholds in the same way. Instead, materiality in an IS audit occurs when a control deficiency (or combination of related control deficiencies) makes it possible for serious errors, omissions, irregularities, or illegal acts to occur as a result of the deficiency or deficiencies. Here more than in a financial audit, the judgment of the IS auditor is very important in determining whether a finding is material.

##### Auditing and Risk Assessment

When assessing the effectiveness of controls in an organization, the IS auditor should take the time to understand how the organization approaches risk assessment and risk treatment.

**Risk Assessment**  Organizations should periodically undertake risk assessments to identify areas of risk that warrant management attention. A risk assessment should identify, prioritize, and rank risks. The subject of risk assessment should be those business processes and supporting information systems and infrastructures that are central to the organization’s mission.

After the auditor identifies risks, the risk assessment should include one or more potential remedies, each with an analysis of the cost and effort required to implement it and the estimated reduction, transfer, avoidance, or acceptance of risk. When these remedies and their impact (in terms of risk reduction) are then ranked, the result should be a list of the most effective initiatives for reducing risk in the organization.

There are two types of risk assessment: qualitative and quantitative. A qualitative risk assessment rates risks as high-medium-low, whereas a quantitative risk analysis rates risks in terms of actual probabilities and costs. A quantitative risk assessment is considerably more difficult and time-consuming to perform, since it can be difficult to ascertain reasonable probabilities of threats and their financial impact. However, when seriously considering measures to reduce risk on the highest risk areas in the assessment, the auditor will find that it sometimes makes sense to perform some quantitative risk assessment to verify which investments will make the most difference.

**Risk Treatment**  Once risks have been identified, *risk treatment* involves the decision made and subsequent actions taken to address them. There are four possible avenues for risk treatment:

+  **Risk reduction**  Sometimes known as *risk mitigation*, this involves making changes to processes, procedures, systems, or controls to reduce either the probability or the impact of a threat. For example, if the risk assessment identifies a threat of a SQL injection attack on an application, the organization can reduce risk by implementing an application firewall that will block such attacks.

+  **Risk transfer**  This typically involves the use of insurance, which can compensate the organization for the financial losses or damages that would occur if the threat were realized. For example, the organization can transfer the risk of a denial-of-service attack by purchasing a cyber-insurance policy that would compensate the organization if such an attack were to occur.

+  **Risk avoidance**  Here, the organization will cease the activity associated with the risk. For instance, if the risk assessment identifies risks associated with the implementation of an e-commerce capability, the organization may choose to abandon this idea, thereby avoiding e-commerce–related risk.

+  **Risk acceptance**  In this case, the organization believes that the risk is acceptable and that no measures need to be taken to reduce the risk.

Rarely does an organization make a decision that fits entirely within a single risk treatment category. Rather, risk treatment is usually a blended approach, where, for instance, measures are taken to reduce risk; however, even a combination of measures rarely eliminates all risk—there is usually some risk left over after some risk treatment is performed. This leftover risk is known as *residual risk*. And like the remaining dirt that can’t be picked up with a broom and dustpan after a few successive attempts, the leftover risk is usually accepted.

### Control Self-Assessment

*Control self-assessment* (CSA) is a methodology used by an organization to review key business objectives, risks related to achieving these objectives, and the key controls designed to manage those risks. The primary characteristic of a CSA is that the organization takes initiative to self-regulate rather than engage outsiders, who may be experts in auditing but not in the organization’s mission, goals, and culture.

Examples of CSA include

+  **Sarbanes-Oxley mandated internal audit**  U.S. public companies are required to implement an internal audit function that examines financial controls.

+  **PCI Self-Assessment Questionnaire (SAQ)**  The Payment Card Industry requires all merchants and service providers to comply with the PCI-DSS; organizations whose transaction volumes are below set thresholds are allowed to self-assess with a Self-Assessment Questionnaire (SAQ).

+  **Voluntary internal audit**  Better organizations that realize that cybersecurity controls are important to protect their ongoing business undertake voluntary internal audits, not because a law or regulation requires them to, but because they understand it’s a good method for ensuring that their controls continue to be effective.

#### CSA Advantages and Disadvantages

Like almost any business activity, CSAs have a number of advantages and disadvantages that the IS auditor and others should be familiar with. This will help the organization make the most of this process and avoid some common problems.

The advantages of a CSA include

+  Risks can be detected earlier, because subject matter experts are involved earlier.

+  Internal controls can be improved in a timely manner.

+  CSA leads to greater ownership of controls through involvement in their improvement.

+  CSA leads to improved employee awareness of controls through involvement in their improvement.

+  CSA may help improve relationships between departments and auditors.

The disadvantages of a CSA include

+  CSA could be mistaken by employees or management as a substitute for an internal audit.

+  CSA may be considered extra work and dismissed as unnecessary.

+  Employees may attempt to cover up shoddy work and misdeeds.

+  CSA may be considered an attempt by the auditor to shrug off responsibilities.

+  Lack of employee involvement would translate to little or no process improvement.

#### The CSA Life Cycle

Like most continuous-improvement processes, the CSA process is an iterative life cycle. The phases in the CSA are

+  **Identify and assess risks**  Operational risks are identified and analyzed.

+  **Identify and assess controls**  Controls to manage risks are identified and assessed. If any controls are missing, new controls are designed and implemented.

+  **Develop questionnaire or conduct workshop**  An interactive session is conducted, if possible, for discussion of risks and controls. If attending personnel are distributed across several locations, a conference call can be convened or a questionnaire may be developed and sent to them.

+  **Analyze completed questionnaires or assess workshop**  If a workshop was held, the workshop results are assessed to see what good ideas for remediation emerged. If a questionnaire was distributed, the results are analyzed to see what good ideas for risk remediation were identified.

+  **Control remediation**  Using the best ideas from the workshop or questionnaire, controls are designed or altered to better manage specific risks.

+  **Awareness training**  This activity is carried out through every phase of the life cycle to keep personnel informed about the activities in the various phases.

The CSA life cycle is illustrated in [Figure 3-5](/images/308b/ch0306.png).

![Images](/images/308b/ch0306.png)

**Figure 3-5**  The control self-assessment life cycle

#### Self-Assessment Objectives

The primary objective of a CSA is to transfer some of the responsibility for oversight of control performance and monitoring to the control owners. The IS auditor’s role is not diminished, because the IS audit still needs to test control effectiveness periodically, but control owners will play a more active role in the audit of their controls.

Another objective of CSA is the long-term reduction in exceptions. As control owners assume more responsibility for the performance of their controls, they will strive to avoid situations where IS auditors identify exceptions. The CSA gives control owners an opportunity and a process for cleaning house and improving audit results.

>**NOTE**  The IS auditor should be involved in CSAs to ensure that the CSA process is not hijacked by efficiency zealots who try to remove the controls from processes because they do not understand their significance.

#### Auditors and Self-Assessment

IS auditors should be involved in CSAs that various departments conduct. The role of an IS auditor should be that of an objective subject matter expert who can guide discussions in the appropriate direction so that controls will receive the right kind of development over time.

IS auditors should resist taking too large a role in CSAs, however. Responsibility for control development and maturation should lie within the department that owns the CSA. However, if a department is new at conducting a CSA, it may take some time before they are confident and competent enough to take full ownership and responsibility for the process.

### Implementation of Audit Recommendations

The purpose of internal and external audits is to identify potential opportunities for making improvements in control objectives and control activities. The handoff point between the completion of the audit and the auditee’s assumption of control is in the portion of the audit report that contains findings and recommendations. These are the imperatives that the auditor recommends the auditee perform to improve the control environment.

Implementation of audit recommendations is the responsibility of the auditee. However, there is some sense of shared responsibility with the auditor, as the auditor seeks to understand the auditee’s business so that he or she can develop recommendations that can reasonably be undertaken and completed. In a productive auditor-auditee relationship, the auditor will develop recommendations using the fullest possible understanding of the auditee’s business environment, capabilities, and limitations—in essence, saying, “Here are my recommendations to you for reducing risk and improving controls.” And the auditee, having worked with the auditor to understand his or her methodology and conclusions, and having been understood by the auditor, will accept the recommendations and take full responsibility for them—in essence saying, “I accept your recommendations and will implement them.” This is the spirit and intent of the auditor-auditee partnership.

In some auditor-auditee relationships, auditors do not include recommendations in their audit reports. Often this is because auditors are not permitted to play a role of influencing auditee business decisions. Put another way, auditors can tell an auditee organization *what* control exception to fix, but not *how* to fix the control exception.

### Chapter Review

The audit function in an organization should be defined and described in a charter. The audit program and audit strategy should support the organization’s mission and objectives and facilitate business development and growth.

Auditors need to establish and maintain technical competence so that they can effectively evaluate technical controls and identify technical control risks. They will need to attend periodic training in the technologies in use by the organization as well as in emerging technologies that the organization may use in the future.

The ISACA Code of Professional Ethics defines the standards of behavior and conduct for IS auditors. The ISACA auditing standards framework defines mandatory audit standards, guidelines that contain suggestions for implementing the standards. All persons who hold the CISA designation are required to uphold the ISACA Code of Professional Ethics; violations will result in investigations and possible disciplinary actions, including expulsion.

ISACA audit standards, guidelines, and procedures provide a framework that can be used to guide the development of an IT assurance program. The Information Technology Assurance Framework (ITAF) is a complete IT assurance and audit framework that borrows elements from COBIT and ISACA audit standards, guidelines, and procedures.

IS auditors may need to perform a risk analysis as an integral part of an audit project to identify risk areas that require additional audit resources. The result of the risk analysis will help the auditor to build a complete audit plan that includes the appropriate level of activities to be carried out during the audit.

The ISACA Risk IT Framework provides a set of processes for performing risk governance, risk evaluation, and risk response.

Internal controls are the policies, procedures, mechanisms, systems, and other means designed to reduce risk and facilitate the achievement of business objectives. Controls are classified in several different ways that describe how they are designed to control behaviors and outcomes.

Internal control objectives are statements of desired states and outcomes in the organization. They are supported by one or more controls that ensure the realization of control objectives. Controls should be measurable and are defined and enforced with processes, procedures, or automatic mechanisms within information systems. IS control objectives resemble internal control objectives but are focused on the desired states and outcomes within the context of information systems.

General computing controls (GCCs) are applied across an entire IS environment. An organization will likely have additional controls that are applied to individual applications or components in the environment.

An audit is the planned, methodical evaluation of controls and control objectives. A key activity in an audit is the identification and acquisition of evidence that supports the operation of controls and helps the auditor reach a conclusion about the effectiveness of a control.

IS auditors generally develop and follow an audit methodology, which is a process that ensures consistent, repeatable audits from start to finish. Often, the type and reason for an audit will determine the methodology to be used.

Evidence is the information collected by the auditor during the course of the audit. The reliability and relevance of evidence helps the auditor reach sound conclusions on the effectiveness of controls and control objectives.

Sampling is the technique used when it is not feasible to test an entire population of transactions. Sampling techniques need to be carefully considered so that they accurately represent the entire population.

Computer-assisted audit techniques (CAATs) are used to automate sampling and analysis of information in complex application environments. CAATs can help auditors analyze and correlate data in ways that would be too difficult to do manually. Continuous auditing consists of samples that are automatically gathered over long periods.

The audit report is the work product of the audit project. It contains a summary, a description of evidence gathered, and findings and conclusions.

In IS audits, materiality is the threshold where control deficiencies make it possible for serious errors, omissions, irregularities, or illegal acts to occur.

A control self-assessment (CSA) is an activity used by an organization to take ownership of controls and make improvements in the implementation of its controls through workshops and other activities.

#### Quick Review

+  An audit program defines the audit strategy and the plans that include scope, objectives, resources, and procedures used to evaluate controls and processes.

+  IS auditors need to stay current with technology through training courses, webinars, ISACA chapter training events, and industry conferences.

+  Several laws, regulations, and standards require internal or external audits to ensure that organizations achieve and maintain compliance.

+  The types of controls are physical, technical, and administrative.

+  The classes of controls are preventive, detective, deterrent, corrective, compensating, and recovery.

+  The categories of controls are automatic and manual.

+  The types of audits are operational audits, financial audits, integrated audits, IS audits, administrative audits, compliance audits, forensic audits, and service provider audits. Pre-audits can be performed to help an organization prepare for an upcoming audit. Internal audits and external audits refer to the relationship of auditor to auditee.

+  Compliance testing is used to determine whether control procedures are properly designed and are operating properly. Substantive testing is used to verify the accuracy and integrity of transactions as they flow through a system.

+  Audit methodologies define an audit subject, audit objective, type of audit, audit scope, pre-audit planning, audit statement of work, audit procedures, communication plan, report preparation, wrap-up, and post-audit follow-up.

+  The types of evidence that the auditor will collect during an audit include observations, written notes, correspondence, process and procedure documentation, and business records.

+  During an audit, the auditor should obtain org charts, department charters, third-party contracts, policies and procedures, risk ledgers, incident logs, standards, and system documentation. He or she should conduct several interviews with pre-written questions and carefully observe personnel to understand their discipline as well as organizational culture and maturity.

+  The types of sampling include statistical sampling, judgmental sampling, attribute sampling, variable sampling, stop-or-go sampling, discovery sampling, and stratified sampling. The IS auditor needs to understand the meaning of confidence coefficient, sampling risk, precision, expected error rate, sample mean, sample standard deviation, and tolerable error rate.

+  An audit report usually includes a cover letter, introduction, summary, audit description, list of systems examined, interviewees, evidence, explanation of sampling techniques, findings, and, optionally, recommendations.

+  The types of risks that are related to audits include control risk, detection risk, inherent risk, overall audit risk, and sampling risk.

+  Computer-assisted audit techniques, generalized audit software, and continuous auditing present many challenges and opportunities that may result in more frequent and rapid reporting, which can help to reduce the time needed to mitigate control failures and exceptions.

+  External auditors may be needed when the organization lacks specific expertise or resources to conduct an internal audit. However, some regulations and standards require external, independent audits.

#### Questions

**[1](#ch3qu_1).**  An IS auditor is planning an audit project and needs to know which areas represent the highest risk. What is the best approach for identifying these risk areas?

+ **A.**  Perform the audit; control failures will identify the areas of highest risk.
+ **B.**  Perform the audit and then perform a risk assessment.
+ **C.**  Perform a risk assessment first, and then concentrate control tests in high-risk areas identified in the risk assessment.
+ **D.**  Increase sampling rates in high-risk areas.

**[2](#ch3qu_2).**  An auditor has detected potential fraud while testing a control objective. What should the auditor do next?

+ **A.**  Notify the audit committee.
+ **B.**  Conduct a formal investigation.
+ **C.**  Report the fraud to law enforcement.
+ **D.**  Report the suspected fraud to management.

**[3](#ch3qu_3).**  The possibility that a process or procedure will be unable to prevent or detect serious errors and wrongdoing is known as

+ **A.**  Detection risk
+ **B.**  Inherent risk
+ **C.**  Sampling risk
+ **D.**  Control risk

**[4](#ch3qu_4).**  The categories of risk treatment are

+ **A.**  Risk reduction, risk transfer, risk avoidance, and risk acceptance
+ **B.**  Risk avoidance, risk transfer, and risk mitigation
+ **C.**  Risk avoidance, risk reduction, risk transfer, risk mitigation, and risk acceptance
+ **D.**  Risk avoidance, risk treatment, risk mitigation, and risk acceptance

**[5](#ch3qu_5).**  An IS auditor needs to perform an audit of a financial system and needs to trace individual transactions through the system. What type of testing should the auditor perform?

+ **A.**  Discovery testing
+ **B.**  Statistical testing
+ **C.**  Compliance testing
+ **D.**  Substantive testing

**[6](#ch3qu_6).**  An IS auditor is auditing the change management process for a financial application. The auditor has two primary pieces of evidence: change logs and a written analysis of the change logs performed by a business analyst. Which evidence is best and why?

+ **A.**  The change log is best because it is subjective.
+ **B.**  The written analysis is best because it interprets the change log.
+ **C.**  The change log is best because it is objective and unbiased.
+ **D.**  The written analysis is best because it is objective.

**[7](#ch3qu_7).**  Under which circumstances should an auditor use subjective sampling?

+ **A.**  When the population size is low
+ **B.**  When the auditor believes that specific transactions represent higher risk than most others
+ **C.**  When the risk of exceptions is low
+ **D.**  When statistical sampling cannot be performed

**[8](#ch3qu_8).**  An IS auditor has discovered a high-risk exception during control testing. What is the best course of action for the IS auditor to take?

+ **A.**  Immediately perform mitigation.
+ **B.**  Include the exception in the report and mark the test as a control failure.
+ **C.**  Immediately inform the auditee of the situation.
+ **D.**  Immediately inform the audit committee of the situation.

**[9](#ch3qu_9).**  What is the appropriate role of an IS auditor in a control self-assessment?

+ **A.**  The IS auditor should participate as a subject matter expert.
+ **B.**  The IS auditor should act as facilitator.
+ **C.**  The IS auditor should not be involved.
+ **D.**  The IS auditor should design the control self-assessment.

**[10](#ch3qu_10).**  Which of the following would *not* be useful evidence in an IS audit?

+ **A.**  Personnel handbook
+ **B.**  Organization mission statement and objectives
+ **C.**  Organization chart
+ **D.**  Organization history

**[11](#ch3qu_11).**  An auditor has discovered that automated work papers were configured with read/write permissions for database administrators. What actions should the auditor take?

+ **A.**  Simply continue to rely on the automated work papers.
+ **B.**  Note an exception and continue to rely on these automated work papers.
+ **C.**  Recommend that permissions on automated work papers be changed so that no personnel have write access and so that this data may be relied upon in the future.
+ **D.**  Notify the board of directors or the audit committee.

**[12](#ch3qu_12).**  During an audit, an auditor has discovered a process that is being performed consistently and effectively, but the process lacks procedure documentation. What action should the auditor take?

+ **A.**  Document the process.
+ **B.**  Find that the process is effective but recommend that it be documented.
+ **C.**  Write the procedure document for the auditee and include it in audit evidence.
+ **D.**  Find that the process is ineffective.

**[13](#ch3qu_13).**  During audit planning, an auditor has discovered that a key business process in the auditee organization has been outsourced to an external service provider. Which option should the auditor consider?

+ **A.**  Audit the external service provider or rely on an SSAE 16 audit report if one is available.
+ **B.**  Audit the external service provider.
+ **C.**  Determine that the business process is not effective.
+ **D.**  Request that the external service provider submit its internal audit work papers.

**[14](#ch3qu_14).**  Why should an auditor prefer bank statements over a department’s own business records that list bank transactions?

+ **A.**  Bank statements can be provided in electronic format.
+ **B.**  Bank statements contain data not found in internal records.
+ **C.**  Bank statements are usually easier to obtain.
+ **D.**  Bank statements are independent and objective.

**[15](#ch3qu_15).**  Which of the following statements is true about ISACA audit standards and guidelines?

+ **A.**  ISACA audit standards are mandatory, while ISACA audit guidelines are optional.
+ **B.**  ISACA audit standards are optional, while ISACA audit guidelines are mandatory.
+ **C.**  ISACA audit standards and guidelines are mandatory.
+ **D.**  ISACA audit standards and guidelines are optional.

#### Answers

**[1](#ch3qu1).**   **C.** The IS auditor should conduct a risk assessment first to determine which areas have highest risk, and then devote more testing resources to those high-risk areas.

**[2](#ch3qu2).**   **A.** When the IS auditor suspects fraud, he or she should conduct a careful evaluation of the matter and notify the audit committee. Because audit committee members are generally not involved in business operations, they will be sufficiently removed from the matter and they will have the authority to involve others as needed.

**[3](#ch3qu3).**   **D.** Control risk is the term that signifies the possibility that a control will fail to prevent or detect unwanted actions.

**[4](#ch3qu4).**   **A.** The four categories of risk treatment are risk reduction (sometimes called *risk mitigation,* where risks are reduced through a control or process change), risk transfer (where risks are transferred to an external party such as an insurance company), risk avoidance (where the risk-bearing activity is discontinued), and risk acceptance (where management chooses to accept the risk).

**[5](#ch3qu5).**   **D.** The auditor should perform substantive testing, which is a test of transaction integrity.

**[6](#ch3qu6).**   **C.** The change log is the best evidence because it is objective and not subject to human judgment.

**[7](#ch3qu7).**   **B.** Subjective sampling is used when the auditor wants to concentrate on samples known to represent higher risk.

**[8](#ch3qu8).**   **C.** The IS auditor should immediately inform the auditee when any high-risk situation is discovered.

**[9](#ch3qu9).**   **B.** The IS auditor should act as a facilitator of a control self-assessment, and management should make any decisions regarding changes to controls.

**[10](#ch3qu10).**   **D.** Of the choices given, the organization history would be the least useful. The others will provide insight into the organization’s mission and goals and how it sets out to achieve them.

**[11](#ch3qu11).**   **C.** If an auditor has discovered that automated work papers could be updated by any personnel, the work papers should not be trusted to contain complete and accurate information. Once this is fixed by eliminating write access, the auditor can rely on this data going forward but should not rely on the information prior to that point in time.

**[12](#ch3qu12).**   **B.** The auditor should determine that the process is effective and recommend that it be documented. Some regulations, however, may require that such a process be judged ineffective specifically because it lacks documentation.

**[13](#ch3qu13).**   **A.** An auditor who has determined that a key business process has been outsourced needs to determine effectiveness of that process by auditing that process or by relying on a separate audit report of that process.

**[14](#ch3qu14).**   **D.** An auditor would prefer bank statements over internal records because bank statements are produced by a bank, which is independent and objective. A bank is unlikely to alter its records to improve the audit outcome of one of its customers.

**[15](#ch3qu15).**   **A.** ISACA audit standards are mandatory for all ISACA certification holders, including those with the CISA certification. ISACA audit guidelines are optional.
