#### Input Controls

Data that is presented to an application as input data must be validated for authorization, reasonableness, completeness, and integrity. Several controls must be implemented to ensure these points.

##### Input Authorization

All data that is input into a system must be authorized by management. The method of authorization can take many forms:

- **User access controls** Only approved personnel, such as system operators, input clerks, business analysts, and customer service representatives, are permitted to log in and use applications. Each user must have unique login credentials.
- **Entity access controls** Only authorized organizations are permitted to log in and access business applications. Entities in each such organization (including users, service accounts, and hosts) are required to have unique login credentials.
- **Workstation identification** Only approved terminals and workstations are permitted to be used to input transactions. Identification can take many forms, including electronic serial number, network address, or digital certificate.
- **Approved transactions and batches** Through manual signature, online approval, and other means, management and other approved personnel perform necessary checks and verifications before individual transactions and batches of transactions are permitted to be input and processed.
- **Source documents** In some settings, data can be input only from existing source documents. This can include mailed invoices, checks, receipts, or forms filled in by customers. Source documents themselves should be controlled so that they cannot be altered, misplaced, or removed.

> **NOTE** Well-designed applications include audit logs that record when specific data was input, how it was input, and who authorized its input. This permits an organization to research matters when a question arises regarding the source of specific input data after the fact.

##### Input Validation

The process of input validation is used to make sure that the types and values of information are appropriate and reasonable. The types of input validation include

- **Type checking** Each input field should be programmed to accept only the type of data that is appropriate for the field. For instance, a numeric field should contain only numeric digits, and a name field should contain only alphabetic characters.
- **Range and value checking** Input fields need to validate the range and value of characters. For instance, the day field in a date should only accept figures 1 through 31, and the month field 1 through 12. Even more intelligent checking is often warranted; for example, a date field often should be a date that is only in the past, or the future, or even a specific range of the past or future. Other examples include only valid ZIP or postal codes, only valid telephone numbers, and only valid IP addresses. In some cases, input data must match values in a table of data stored in the application; for instance, only valid city, state, or country codes; telephone area codes; or valid Universal Product Codes (UPCs).
- **Existence** This simple check confirms that each input field actually contains data.
- **Consistency** This check compares related data from different input fields. For instance, a ZIP code value in an input field can be validated by comparing it to the range of allowed ZIP codes for the city and state values.
- **Length** Programs must validate the length of input data in an input field. Fields such as names and addresses are often limited to, say, 30 characters. This is especially important on interactive programs where intruders may attempt buffer overflow attacks in an attempt to cause the program to malfunction.
- **Check digits or hash totals** Numeric values such as bank account numbers can be verified for integrity by recalculating their check digits or hash totals.
- **Spelling** Input fields that are supposed to contain common words can be spell-checked.
- **Unwanted characters** Input fields should filter out unwanted characters that could be a result of mistyping. However, unwanted characters can also be a sign of a software malfunction (on a system that is the source of input data) or of an attempted intrusion.
- **Batch controls** Batches of data should include calculations and counts to ensure the integrity and completeness of a batch of data. Some available methods include transaction counts, control totals (the numeric sum of one or more numeric fields in all of the batch records), and hash totals (a computed “sum” of all of the input fields, regardless of their actual type).

Input validation is certainly necessary on user input forms in applications where users are filling in online forms. However, input validation is just as necessary on batch input and other automated functions; errors in other systems may occur that can cause input data to be entered into the wrong fields: failure to validate input data can result in inappropriate data being input and stored in a system, which can lead to other problems later.

---

##### Input Validation as Achilles Heel

In many, or dare I say most, organizations, insufficient input validation is the nexus for many critical system vulnerabilities and breaches (for example, SQL injection and buffer overflow conditions). With alarming regularity, we learn of critical vulnerabilities in commercial software products and systems such as buffer overflow and cross-site scripting. These vulnerabilities exist as a result of insufficient input validation.

---

##### Error Handling

As software programs perform all of the input validation checking described earlier, these programs must be programmed or configured to take specific actions when any of the input validations fail. There are many possible responses, depending upon the type of data being input as well as the method of input:

- **Batch rejection** For input batches, if the transaction count, control totals, or hash totals of a batch do not agree with expected values, the entire batch should be rejected. Usually the application software will have no way to determine what exactly is wrong with the batch, so the only reasonable course of action is to reject the entire batch, which will require data control analysts to examine the batches to see what went wrong.
- **Transaction rejection** For individual input transactions, whether automated or user input, the software application can reject the transaction.
- **Hold in suspense** The entire batch will be held in suspense so that the error(s) in the batch can be corrected and the batch can be rerun.
- **Request re-input** An interactive user program can request that the user re-input the entire form or just the specific field that appears to be incorrect.

When an application rejects input, in most cases the application will need to create a log entry, an error report, or another record of the rejected input so that data analysts will know that an error occurred and take steps to correct it. If the application does not create a record of the error, analysts are apt to believe that all data was input successfully, which could lead to problems later on when those invalid transactions cannot be found anywhere in the system. A lack of such records makes detailed troubleshooting far more difficult.

#### Processing Controls

It is necessary to ensure that data in a system retains its integrity. All new data that is created—for instance, as a result of calculations—must be checked for reasonableness to ensure that calculations are working properly and that bad information or program code is not creeping in through some other means. The controls used to ensure that data in the system retains its integrity are discussed in this section.

##### Editing

In many types of applications, data that is initially input into the system will be changed from time to time. For example, a subscriber’s e-mail or mailing address may change, or a bank account number, passport number, or license plate number may change. Often these changes are performed either directly by customers or by a customer service representative during a telephone conversation. Sometimes these changes are made automatically as a result of trusted and validated data arriving from other sources.

Whenever values are changed, the new values must be validated before they are accepted and stored; otherwise, problems may ensue later on. The types of validation checks performed during editing are similar to those performed during initial input, described earlier in this section.

##### Calculations

When application programs are performing calculations, the results of those calculations need to be validated for accuracy and reasonableness to verify that the application is performing calculations properly. Several techniques are used to validate calculations:

- **Run-to-run totals** This validates that specific stored or calculated data values retain their values throughout the steps in a transaction. This helps to ensure that no errors, tampering, or software malfunctions have occurred.
- **Limit checking** Results of specific calculations can be checked for upper and lower limits. Calculation results that exceed predetermined limits can be rejected.
- **Batch totals** When data is processed in batches, batch totals that are calculated at the beginning of the batch can be recalculated at the end of processing for the batch to ensure the integrity of the batch data.
- **Manual recalculation** An analyst or clerk can recalculate certain transaction calculations manually, and those manual calculation results can be verified or keyed into the application.
- **Reconciliation** When a set of records is processed that results in the creation of a second set of records—or the next stage of calculation results—totals from the old to new batches may need to be calculated to ensure that processing was done correctly and that no data corruption or calculation errors occurred.
- **Hash values** The values in selected sets of numeric or text fields can be rehashed at various stages of calculations to verify that they have not been altered or tampered with.

##### Data File Controls

When processing is performed on data stored in data files, several types of controls are needed to ensure the security and integrity of those data files. Some of the controls available include

- **Data file and database security** Access controls can be configured so that only authorized users or processes are permitted to access data files and databases.
- **Error handling** Erroneous transactions that need to be corrected or re-input should be checked by personnel other than those who originally keyed them.
- **Internal and external labeling** Labeling on removable storage media is vital to ensure that the correct volume (whether tape, disc, or other storage medium) has been loaded.
- **Data file version** The version of a data file should be independently verified to ensure that the proper file is being processed. This would, for example, help to prevent processing yesterday’s file twice.
- **Source files** Data input at the beginning of a processing run should be retained for a minimum period in case a batch needs to be rerun many days or weeks later.
- **Transaction logs** Log files containing transactions should be retained for a minimum period in support of later troubleshooting or the investigation of data errors weeks or months later.

##### Processing Errors

Errors that occur during processing must be recorded in a logfile or other output medium that will be examined by personnel. All errors need to be addressed, whether through rekeying of errant data, rerunning failed batch runs, correcting data transmission errors, or other means.

Processing errors that occur in interactive programs may display an error message to the user. Depending upon the type of program, the user may have an opportunity to correct or rekey information.

#### Output Controls

Applications accept input data, perform calculations, and produce output data. The results of final calculations and transformations need to be checked for reasonableness and validity. Several types of output controls are available, depending upon the type of activity and data.

##### Controlling Special Forms

Some calculation outputs are printed on special physical forms, such as checks, warrants, invoices, and certificates. These forms should be serialized and kept in a locked cabinet. In high-value situations, these forms should be kept in dual custody, where two individuals are required in order to access them.

A forms log should be maintained to account for the use of forms. This log should be examined frequently to ensure that forms are used only for their stated purpose and that all are accounted for.

Checks, warrants, bonds, and other negotiable instruments must be secured at all times to ensure that all are accounted for and properly handled. Just as with electronic data, physical forms must be inventoried and accounted for at each stage of processing and handling.

Signature devices and stamps, when used, must be secured at all times. They should be stored in locations separate from checks and certificates and should be under the control of separate individuals.

##### Report Distribution and Receipt

Application processing often results in the creation of reports that are sent to authorized personnel in paper or electronic form. Often these reports will contain sensitive information, which requires that the reports be safeguarded at all times in any form.

Reports that are printed and later delivered may need to be placed in tamper-proof or tamper-evident envelopes. Reports that remain in electronic form may need to be encrypted or password-protected. Reports that are transmitted over public networks need to be encrypted. If recipients send electronic reports to printers, special safeguards may be required so that sensitive data is not left on printers for others to view.

##### Reconciliation

Numeric and financial data on reports may need to be reconciled to input data, data from intermediate calculations, or control totals. This activity, when required, should be documented and logged.

##### Retention

Reports are sometimes the only human-readable data available during each business cycle. Whether reports deal with research, reference, or statutory requirements, it is often necessary to retain them for a minimum period of up to several years. Reports containing sensitive data will need to be physically safeguarded to prevent access by unauthorized personnel.

> **NOTE** Output controls are just as vital as input controls, because the outputs from one system do not necessarily become the inputs to another system that the organization has control over. Sometimes, one system’s output will become another system’s inputs where little or no input validation takes place.

### Auditing the Systems Development Life Cycle

Audits of the processes used to create and maintain software will assist the organization in knowing how effective these processes are. This provides the organization with valuable information that can be used to make its processes more effective. If the IS auditor examines only an organization’s applications and controls but not the processes used to create them, then the root cause of endemic problems in applications and processes may be unknowable.

> **EXAM TIP** The exam will expect you to have a general understanding of the details of each type of audit practice. Focus on the type of documentation and the mechanism for validation of each as you review this section. Watch for exam questions that begin with phrases such as “During the design phase…” or similar terminology to guide your response.

#### Auditing Program and Project Management

The IS auditor who is auditing an organization’s program and project management is verifying whether the organization’s projects are adequately controlled. Controls in project management ensure the integrity of the organization’s projects so that the systems and processes that are built actually support the requirements that are supported and agreed to by management.

The activities that the IS auditor should review when auditing project management include

- Oversight by senior management and any steering committee(s)
- Risk management techniques used in the project
- Processes and methodologies used to build project plans
- Methods for dealing with issues
- Management of costs
- Status reporting to management
- Project change control
- Project recordkeeping, including decisions, approvals, resource utilization, and costs

#### Auditing the Feasibility Study

IS auditors should audit any feasibility studies that occur at the beginning of major projects. The activities that IS auditors should review include

- Budgets and cost justifications, and whether they can be independently verified
- Criticality of the project and/or the criticality of the business process supported by the project
- Alternatives that were considered, including the feasibility that existing systems could be used in support of the business need
- Reasonableness of the solution that was chosen and implemented

#### Auditing Requirements

An IS auditor should audit a project’s requirements and the process that was used to develop them. The IS auditor needs to review several aspects of requirements:

- Identify all of the personnel who contributed requirements and determine whether this body of personnel actually represents all true stakeholders.
- Interview several of the requirements contributors to gain a better understanding of whether contributors’ requirements were included and whether they were altered without their knowledge.
- Identify any ranking or alteration of requirements that may have occurred without the knowledge of those who contributed them.
- Perform some reasonableness checking of requirements to see if they support the project described in the feasibility stage.
- Determine whether the final body of requirements was approved by management.

#### Auditing Design

The IS auditor should audit the design and specifications that were developed during a project. During the audit, the IS auditor should consider whether

- The design actually reflects and supports requirements and the feasibility study.
- The design contains sufficient detail to enable application developers to produce software that will unambiguously meet the organization’s requirements and business needs.
- The design was adequately reviewed and was approved by management.
- The design will reasonably result in a successful implementation that meets the users’ needs.
- Testing and UAT (user acceptance testing) plans and criteria were developed by this phase in the project.

#### Auditing Software Acquisition

For software development projects where the organization acquires software from an outside vendor, an IS auditor should audit several aspects and activities in the acquisition stage of the project. The IS auditor should consider whether

- The organization performed a formal RFP or RFI process.
- All requirements were transferred to the RFP or RFI document.
- Suitable vendors were considered and their responses were properly analyzed against each of the requirements.
- The vendor that was selected could support a majority of the requirements.
- The organization did reference checking, evaluation, and/or pilot evaluation before purchase.
- The contract contains clauses that reasonably protect the organization in the event the software or the vendor fails to perform adequately.
- The contract was reviewed by the organization’s legal department before being signed.

#### Auditing Development

For software development projects where the organization develops software on its own, the IS auditor should consider whether

- The developers were adequately trained and experienced in the languages and tools used in the project.
- The chosen design and development tools were adequate for the project.
- The chosen computer language and other related technologies were adequate for the project.
- The application contains adequate controls to ensure proper operation, recordkeeping, and support of business processes.
- Controls used to protect source code are adequate.
- The application was written in support of stated requirements.
- The application has adequate input, processing, and output controls.
- The application performs calculations correctly.
- The application produces adequate transaction and audit logs.

#### Auditing Testing

Software that is developed within the organization or acquired from an outside vendor needs to be tested to ensure that it meets the organization’s requirements. When auditing software testing, the IS auditor should consider whether

- All test plans were developed during the requirements and design phases.
- Test plans reflect the entirety of requirements and design elements.
- All tests were performed and verified successfully.
- Actual test results are available for review as well as contact information for personnel who performed testing.
- Test results have been archived for later research if needed.
- Parallel tests were needed and, if so, were performed appropriately.
- UAT was performed, and the results of those tests are available.

#### Auditing Implementation

Implementation should be performed only after all testing has been successful and all issues identified during testing have been resolved. When auditing implementation, the IS auditor should consider whether

- Management approved the implementation.
- The system was implemented using established change control procedures.
- The system was administratively locked down before implementation, thereby preventing tampering by any developer or other persons who do not have authorization to access production systems.
- Data conversions were performed in a controlled manner, including controls to ensure correct conversion processing.

#### Auditing Post-Implementation

The IS auditor should audit all post-implementation activities, considering whether

- A post-implementation review took place and, if so, whether the review was documented and actions taken.
- The application supports the entire body of requirements established during the project.
- The application is being measured to verify whether it is meeting established performance and ROI targets.
- Excessive changes were made to the system after implementation, which could be an indicator of inadequate requirements or testing.
- Excessive unscheduled downtime or errors occurred, which could be an indicator of inadequate requirements or testing.
- Control balances indicate that the application is performing properly.

#### Auditing Change Management

_Change management_ is the management process whereby all changes to an environment are controlled. The IS auditor should consider whether

- A change management policy and process exists and is followed in practice.
- Adequate records exist that indicate how much the change management process is followed.
- The number of emergency changes indicates inadequate requirements or testing.
- Proposed changes contain implementation procedures, back-out procedures, and test results.
- Minutes are kept of change management meetings.
- Emergency changes are adequately reviewed.

#### Auditing Configuration Management

_Configuration management_ involves controlling, configuring, and recording configuration changes to information systems. When auditing configuration management, the IS auditor should consider whether

- Configuration management policies and controls exist and are followed.
- Configuration management tools are used to control and/or record changes made to systems.
- Changes are approved through the change management process.
- Configuration management tools are able to verify the integrity of systems and whether discrepancies are identified and resolved.

### Auditing Business Controls

_Business controls_ are points in time during business processes where key activities occur. The IS auditor needs to identify the key processes in an organization and understand the controls that are in place—or that should be in place—that govern the integrity of those processes.

Many business controls are supported by IT applications, but the auditor also needs to take a business process perspective and understand the control points from a strictly process viewpoint. This is necessary because, although controls may be automated by applications, personnel are still in control of and responsible for the correct operation of business processes. Further, processes, even when partly or entirely automated, must be monitored and managed by staff or management. And these processes must be documented—itself an important control.

> **NOTE** For the IS auditor to overlook business controls and focus only on IT applications would be a disservice to the organization, because the auditor could miss the obvious control points in key business processes. Remember that the IT system is not the process; instead, the IT system _supports_ the process.

### Auditing Application Controls

_Application controls_ ensure that only valid data enters a system through input controls, that calculations yield only valid results, and that output data is valid. The IS auditor needs to examine system documentation to understand internal and external data flows and calculations. The IS auditor also needs to examine system records to ensure that all changes made to the system were authorized. Several aspects of application activity need to be examined; these are described in the remainder of this section.

#### Transaction Flow

The IS auditor should audit an application and follow transactions from end to end. The IS auditor should consider whether

- Any data flow diagrams or flowcharts exist that describe data flow in the transaction, and whether such diagrams or flowcharts correctly identify the flow of data
- Any data items in the transaction were altered in the data flow, and, if so, where alterations occurred and whether audit log entries recorded those changes, including who or what made them

#### Observations

During an audit of information systems, the IS auditor should make several observations, including whether

- Any segregations of duties (SODs) are established in terms of the entire transaction process flow
- Input data is validated, and how the validation is performed
- Input data is authorized, and how the authorization is documented
- Any balancing or reconciliation is performed to ensure data integrity
- Any errors occur, how they are detected, and how they are handled
- Reports and other outputs are generated, controlled, protected, examined, and acted upon

#### Data Integrity Testing

Data integrity testing is used to confirm whether an application properly accepts, processes, and stores information. Data integrity tests will determine whether there are any failures or errors in input, processing, or output controls in an application. The IS auditor should perform several tests on the application, in each case attempting to input data that is invalid or unreasonable to determine whether the application properly rejects such data. The auditor should also attempt to have the application perform calculations that should result in errors or exceptions—for example, a calculation result that should be rejected.

The IS auditor should test not only the stated input, calculation, and output rules for data integrity, but he or she should also assess the efficacy of the rules themselves. For example, an auditor should determine whether the absence of a rule forbidding the entry of negative hours in a time-reporting system constitutes a deficiency in the application’s rules.

#### Testing Online Processing Systems

Online processing systems are characterized by their ability to process transactions for many users simultaneously. An online application must be able to compartmentalize each user’s work so that the users do not interfere with one another, even if two or more users are attempting to read or update the same records. A typical database management system (DBMS) will be able to enforce record locking, and an application must have logic to deal with locked records gracefully and according to established business rules.

Business records and transactions in DBMSs are usually made up of rows in several different tables. _Referential integrity_ is the characteristic that requires that the DBMS maintain the parent-child relationships between records in different tables and prohibit activities such as deleting parent records and transforming child records into orphans. Application logic must be designed to prevent these situations and other types of “collisions” and deadlocks that can occur when many users are performing different tasks in an application. The characteristic of _atomicity_ states that a complex transaction, which could consist of simultaneous actions on many records in many different tables, is performed as a single unit of work: either it will all be completed properly or none of it will be completed. This helps to ensure the integrity of all data in the DBMS.

The IS auditor will need a complete understanding of the inner workings of an application, including the actions of different transactions on the underlying DBMS. Then the auditor will need to stage a number of different tests to see how the application handles situations that may challenge the integrity of business information. Some examples include

- Having two different users try to open the same transaction to update it
- Having one user try to remove the transaction while another user is trying to update it
- Having two different users open related records in a database, and then having one of the users attempt to remove records that the other user is viewing

These are simple examples, but they should serve to illustrate the need for the IS auditor to determine whether the application properly manages business records.

#### Auditing Applications

Applications must never be assumed to perform all of their input, processing, and output perfectly. This must be the mindset of the IS auditor: that every important function of applications must be verified to be operating correctly and completely.

Many techniques are available for auditing IT applications, including

- **Transaction tracing** The IS auditor enters specific transactions and then carefully examines the application, data, and reports to see how the transaction is represented and processed in the application.
- **Test batches** The IS auditor creates a batch of test transactions with expected outcomes and directs that they be processed by the system and their results compared against what is expected.
- **Software mapping** The application software is traced during execution to determine whether there are any unused sections of code. Unused code could signify faulty program logic, obsolete code, or backdoors.
- **Baselining** This process uses sets of input data (batch- or key-processed by the system) with known results. After system changes, the same sets of data are processed again to determine whether the expected results have changed.
- **Parallel testing** Programs that simulate the application’s function are used to process real data to determine whether results vary from the production system.

It is not suggested that an IS auditor employ all of these methods, but he or she should instead select those that will be most effective at verifying correct and complete processing at key points in an application.

#### Continuous Auditing

Continuous auditing permits the IS auditor to conduct audits of an online environment in a way that is less disruptive to business operations. Instead of more costly and invasive audits, IS auditors can test systems while they are running and with minimum or no involvement from IT staff. Continuous auditing techniques, also known as _computer-assisted audit techniques_ (CAATs), are especially useful in applications such as an e-commerce operation with no paper audit trail. Several techniques are available to perform online auditing:

- **Audit hooks** Special audit modules are placed in key points in an application and are designed to trigger if a specific audit exception or special condition occurs. This can alert auditors to the situation, permitting them to decide whether additional action is required.
- **System Control Audit Review File and Embedded Audit Modules (SCARF/EAM)** Special audit software modules are embedded in the application; these modules perform continuous auditing and create an independent log of audit results.
- **Integrated test facility (ITF)** This permits test transactions to be processed in a live application environment. A separate test entity is required, however, so that test data does not alter financial or business results (because the test data does not present actual transactions).
- **Continuous and intermittent simulation (CIS)** The application contains an audit software module that examines online transactions. When a transaction meets audit criteria, the transaction is processed by the application and is also processed by a parallel simulation routine, and the results of the two are compared. These results are logged so that an auditor may examine them at a later time and decide whether any action is required based upon the results.
- **Snapshots** This technique involves the use of special audit modules embedded in an online application that samples specific transactions. The modules make copies of key parts of transactions, often by copying database records and storing them independently. This enables an auditor to trace specific transactions through an application to view the state of transactions as they flow through the application.
- **Online inquiry** An auditor has the ability to query the application and/or its database to retrieve detailed information on specific transactions or groups of transactions. The auditor typically must have an intimate knowledge of transaction and data structures to make use of this technique.

### Auditing Third-Party Risk Management

Auditing third-party risk management involves careful examinations of policy and process documents as well as business records to determine whether all of the organization’s third parties are represented in the organization’s third-party risk management program. Several techniques and activities are available, including

- **Completeness of third-party population** When examining other activities in the business, auditors should determine third parties that are working with the organization and verify whether these third parties are a part of the organization’s third-party risk process.
- **Risk criteria** Auditors should examine stated risk criteria to determine whether they are measurable and complete, and whether they reflect risks present in the organization.
- **Legal agreements** Auditors should examine legal agreements with third parties to see what security-related controls and obligations are required of each third party. The auditors should determine whether contract language adequately covers business risks and whether that language corresponds to any specific risks identified in the initial vetting of a third party.
- **Third-party classification** Auditors should examine the classification of third parties and determine whether they were classified properly, according to the organization’s risk tiering scheme (as covered earlier in the chapter in the section “Classification”). While the organization may have latitude for making exceptions (rating third parties higher risk or lower risk than usual), these exceptions should be documented and reasonable.
- **Examination of questionnaires** Auditors should examine the various questionnaires that are sent to third parties to determine whether the contents and subject matter in the questionnaires cover risks adequately.
- **Questionnaire processing** Auditors should examine questionnaires returned from third parties and look for responses that warrant attention or response. Auditors should follow the remediation process and see what actions were performed when third parties failed to answer questions or provided answers that warrant action. There should be a complete record of action from a returned questionnaire to remediation and issue closure.

### Chapter Review

Organizations should have processes and procedures in place to manage the development, acquisition, and maintenance of software applications and supporting infrastructure. These processes ensure that all of the activities related to additions and changes to software applications are performed consistently and that all necessary considerations are included and documented.

_Program management_ is the oversight of several projects and project teams. A program manager oversees project managers who manage individual projects in a program that contributes to an organization’s objective. The program manager’s oversight includes monitoring project schedules, budgets, resource allocation, conflicts, and the preparation of status reports for senior management. Another form of program management involves the management of a _project portfolio_, which is a collection of all of the active projects, regardless of whether they contribute to a single corporate objective or to many.

Management should approve any new project only after a valid business case has been developed, reviewed, and approved. A _business case_ describes the business problem, the results of any feasibility studies, a project plan, a budget, and related risks. The project will be approved only if there is a reasonable expectation of business benefits; a business case should include one or more ways in which the outcome of the project can be measured so that management can determine whether the project resulted in actual business benefit.

Projects require formal planning that includes the development of a project schedule, creation of methods for estimating the time required for individual tasks, management of budgets and resources, methods for identification and resolution of issues and conflicts, management of project records, and creation of status reports for management. Changes to projects should be managed through a formal review and approval process. Project debriefs or reviews should take place when projects conclude so that the organization can identify lessons learned that will help improve future projects.

Software development and acquisition should be managed through a _systems development life cycle_ (SDLC) or similar process. The SDLC is a rigorous set of activities that help ensure that new applications will meet the organization’s business needs. The phases of the SDLC are feasibility study, requirements definition, design, development, testing, implementation, and post-implementation. These phases are all formally documented, reviewed, and measured.

The feasibility study and requirements definition phases help a project team develop a highly detailed set of specifications that developers can use to build the application. An organization that is purchasing off-the-shelf software can use requirements to make sure that the most appropriate software product will be selected.

The testing phase ensures that the application that was developed or acquired will actually perform as required. A test plan should be formally developed; this plan should be a direct derivation from formal requirements that were developed earlier in the project; essentially, every requirement must be measurable and confirmed during testing. Other critical activities in a software development project include data migration (where data is transferred from an older application to the new application), training (for users, operations, and technical support staff), and implementation of the new software application.

Some alternatives to the traditional SDLC process include agile development, prototyping, rapid application development (RAD), data-oriented system development (DOSD), object-oriented (OO) system development, component-based development, web-based development, and reverse engineering.

Software developers often use system development tools to aid in software development. These tools include integrated development environments (IDEs), computer-aided software engineering (CASE), and fourth-generation languages (4GLs) that can make developers more productive. Some organizations will integrate these environments with security testing tools such as dynamic application security testing (DAST) and static application security testing (SAST).

Acquiring cloud-based applications requires the same steps as software acquisition, although additional considerations need to be managed, including access control, environment segregation, and legal jurisdiction.

Change management and configuration management processes are used to manage changes to existing applications and infrastructure. Change management is a formal process whereby desired changes are planned, tested, and reviewed prior to implementation. Configuration management is a process (usually supported by automated tools) of recording configuration information in operating systems, software environments, and applications.

Like software applications and infrastructure, business processes should also be managed by a life cycle process that includes feasibility studies, requirements definition, business process engineering, testing, and implementation. Often, business processes are tightly coupled to software applications; frequently, changes to one will necessitate changes in the other.

Software applications should be equipped with controls that ensure the integrity of information and the integrity of processing and applications. These controls include input validation, processing validation, and output validation, all of which ensure that the data in the application is of the proper type and within required numeric ranges.

IS auditors who audit life cycle management activities need to obtain and examine documents that describe program and project management processes, charters, and records. They need to understand the processes that are used to develop and acquire software applications and supporting infrastructure, as well as the processes used to maintain them. IS auditors need to understand the processes that are in place and to examine records to help determine whether the processes are followed and effective.

Third parties should be assessed for risk and their compliance with the organization’s requirements. Organizations with many third parties should establish a risk-tiering scheme and enact periodic assessment procedures commensurate with each level of risk. IS auditors need to audit an organization’s third-party risk program to ensure that all third parties are included in the program, that third parties are correctly classified, and that issues are remediated. Metrics and specific issues on third-party risk should be reported to senior management.

#### Quick Review

- Benefits realization is the result of strategic planning, process development, and systems development, which all contribute toward a launch of business operations to reach a set of business objectives.
- Project management strategies guide program execution through the organization of resources and development of clear project objectives. Management of the project schedule, roles, change management, and subsequent completion or closure criteria determine the outcome of each project. Many project management methodologies exist to guide project expectations, requirements, and completion criteria.
- The systems development life cycle (SDLC) defines a subset of project management focusing on the requirements for the creation, implementation, and maintenance of application software. The SDLC relies on a sequence of events that may occur one time or cyclically as part of a formal continual improvement process. The SDLC phases include a feasibility study, definition of requirements, design, development, testing, implementation, and post-implementation phases.
- Application access is facilitated by the enterprise infrastructure, which is in turn developed, implemented, and maintained through a process similar to the SDLC. Infrastructural development begins with a review of existing infrastructure elements, matching each to identified requirements to produce the initial design. After procurement to meet design requirements, the activities of testing, implementation, and post-implementation follow similarly to the SDLC.
- Post-implementation maintenance of information systems includes both change and configuration management strategies to ensure the enterprise remains aligned with business requirements and practices.
- The business process life cycle (BPLC) and business process reengineering (BPR) aid in coordinating business processes using a sequence of events similar to that of the SDLC focused on business process creation, implementation, and maintenance. Benchmarking facilitates continuous improvement within the BPLC, while capability maturity models can enable point-in-time assessment of business process and information system capability alignment.
- Application controls limit information system access at the point of entry (input controls), during consumption (process controls), and at the point of expression (output controls).
- Auditing each element of the enterprise’s development life cycle validates alignment between business and regulatory controls against process and functional control strategies and standards. The auditor should be familiar with the project management strategy in place within an enterprise to ensure that both the elements and the process used to develop each are properly aligned with business process requirements.
- Auditing application controls validates the proper operation of input, process, and output controls by following transaction flow from initiation through conclusion and performing data integrity testing appropriate to the application design. Computer-aided audit techniques (CAATs) systems are particularly useful for the continuous audit of application controls.

#### Questions

**[1](#ch4qu_1).** What testing activities should developers perform during the development phase?

- **A.** Security testing
- **B.** Integration testing
- **C.** Unit testing
- **D.** Developers should not perform any testing

**[2](#ch4qu_2).** The purpose of function point analysis (FPA) is to

- **A.** Estimate the effort required to develop a software program.
- **B.** Identify risks in a software program.
- **C.** Estimate task dependencies in a project plan.
- **D.** Inventory inputs and outputs in a software program.

**[3](#ch4qu_3).** A project manager needs to identify the tasks that are responsible for project delays. What approach should the project manager use?

- **A.** Function point analysis
- **B.** Gantt analysis
- **C.** Project evaluation and review technique
- **D.** Critical path methodology

**[4](#ch4qu_4).** A software developer has informed the project manager that a portion of the application development is going to take five additional days to complete. The project manager should

- **A.** Inform the other project participants of the schedule change.
- **B.** Change the project schedule to reflect the new completion time.
- **C.** Create a project change request.
- **D.** Adjust the resource budget to account for the schedule change.

**[5](#ch4qu_5).** The phases and their order in the systems development life cycle are

- **A.** Requirements definition, feasibility study, design, development, testing, implementation, post-implementation
- **B.** Feasibility study, requirements definition, design, development, testing, implementation, post-implementation
- **C.** Feasibility study, requirements definition, design, development, testing, implementation
- **D.** Requirements definition, feasibility study, development, testing, implementation, post-implementation

**[6](#ch4qu_6).** What personnel should be involved in the requirements phase of a software development project?

- **A.** Systems administrators, network administrators, and software developers
- **B.** Developers, analysts, architects, and users
- **C.** Security, privacy, and legal analysts
- **D.** Representatives from each software vendor

**[7](#ch4qu_7).** The primary source for test plans in a software development project is

- **A.** Requirements
- **B.** Developers
- **C.** End users
- **D.** Vendors

**[8](#ch4qu_8).** The primary purpose of a change management process is to

- **A.** Record changes made to systems and infrastructure.
- **B.** Review and approve proposed changes to systems and infrastructure.
- **C.** Review and approve changes to a project schedule.
- **D.** Review and approve changes to application source code.

**[9](#ch4qu_9).** What is the purpose of a capability maturity model?

- **A.** To assess the experience of software developers
- **B.** To assess the experience of project managers
- **C.** To assess the integrity of application software
- **D.** To assess the maturity of business processes

**[10](#ch4qu_10).** The purpose of input validation checking is to

- **A.** Ensure that input values are within acceptable ranges.
- **B.** Ensure that input data contains the correct type of characters.
- **C.** Ensure that input data is free of hostile or harmful content.
- **D.** Ensure all of the above.

**[11](#ch4qu_11).** An organization is considering the acquisition of enterprise software that will be hosted by a cloud services provider. What additional requirements need to be considered for the cloud environment?

- **A.** Logging
- **B.** Access control
- **C.** Data segregation
- **D.** Performance

**[12](#ch4qu_12).** System operators have to make an emergency change in order to keep an application server running. To satisfy change management requirements, the systems operators should

- **A.** Document the steps taken.
- **B.** Fill out an emergency change request form.
- **C.** Seek approval from management before making the change.
- **D.** Do all of the above.

**[13](#ch4qu_13).** A global organization is planning the migration of a business process to a new application. What cutover methods can be considered?

- **A.** Parallel, geographic, module by module, or all at once
- **B.** Parallel, geographic, or module by module
- **C.** Parallel, module by module, or all at once
- **D.** Parallel, geographic, or all at once

**[14](#ch4qu_14).** The purpose of developing risk tiers in third-party management is to

- **A.** Determine whether to perform penetration tests.
- **B.** Satisfy regulatory requirements.
- **C.** Determine the appropriate level of due diligence.
- **D.** Determine data classification requirements.

**[15](#ch4qu_15).** The reason that functional requirements need to be measurable is

- **A.** Developers need to know how to test functional requirements
- **B.** Functional tests are derived directly from functional requirements
- **C.** To verify correct system operation
- **D.** To measure system performance

#### Answers

- **1](#ch4qu1).** **C.** During the development phase, developers should perform only unit testing to verify that the individual sections of code they have written are performing properly.
- **[2](#ch4qu2).** **A.** Function point analysis (FPA) is used to estimate the effort required to develop a software program.
- **[3](#ch4qu3).** **D.** Critical path methodology helps a project manager determine which activities are on a project’s “critical path.”
- **[4](#ch4qu4).** **C.** When any significant change needs to occur in a project plan, a project change request should be created to document the reason for the change.
- **[5](#ch4qu5).** **B.** The phases of the systems development life cycle are feasibility study, requirements definition, design, development, testing, implementation, and post-implementation.
- **[6](#ch4qu6).** **B.** Requirements need to be developed by several parties, including developers, analysts, architects, and users.
- **[7](#ch4qu7).** **A.** The requirements that are developed for a project should be the primary source for detailed tests.
- **[8](#ch4qu8).** **B.** The main purpose of change management is to review and approve proposed changes to systems and infrastructure. This helps to reduce the risk of unintended events and unplanned downtime.
- **[9](#ch4qu9).** **D.** A capability maturity model helps an organization to assess the maturity of its business processes, which is an important first step to any large-scale process improvement efforts.
- **[10](#ch4qu10).** **D.** Input validation checking is used to ensure that input values are within established ranges, of the correct character types, and free of harmful content.
- **[11](#ch4qu11).** **C.** In addition to business, functional, security, and privacy requirements, an organization considering cloud-based services needs to understand how the cloud services provider segregates the organization’s data from that of its other customers.
- **[12](#ch4qu12).** **D.** When making an emergency change, personnel should first seek management approval, document the details of the change, and initiate an emergency change management procedure.
- **[13](#ch4qu13).** **A.** The migration to a new application can be done in several ways: parallel (running old and new systems side by side); geographic (migrating users in each geographic region separately); module by module (migrating individual modules of the application); or migrate all users, locations, and modules at the same time.
- **[14](#ch4qu14).** **C.** Developing risk tiers in third-party management helps an organization determine the level of due diligence for third parties at each risk tier. Because the level of risk varies, some third parties warrant extensive due diligence, while a lighter touch is warranted for low-risk parties.
- **[15](#ch4qu15).** **B.** Functional requirements should be measurable, because test cases should be developed directly from functional requirements. The same can be said about security and privacy requirements—all must be measurable because all should be tested.
