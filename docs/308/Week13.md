Cybersecurity System Audits

# Chapter 6 – Information Asset Protection(2 )

## Objectives

- Masquerading
- DMZ
- Firewalls
- APTs
- Encryption
- Private Key, Public Key
- Digital Signatures
- Access Control Policy
- Environmental Controls
- Physical Security

## Masquerading

- Masquerading is a type of attack where an adversary sends messages that appear to originate from legitimate sources.
- This is possible due to the lack of enforcement mechanisms in protocols like TCP/IP and SMTP,
  which do not verify the 'From' field in packets or emails.
- For instance, attackers can send emails pretending to be from trusted organizations like banks, tricking users into revealing sensitive information such as passwords.
- This weakness has significantly contributed to the rise of phishing and spam.
- Addressing masquerading requires robust authentication mechanisms and user education to prevent such spoofing attacks.

## Denial of Service (DOS) Attacks

- Denial of Service (DoS) attacks aim to disrupt the functionality of a target system by overloading it with requests or exploiting vulnerabilities.
- A common method involves sending an overwhelming number of messages to exhaust system resources, making the service unavailable to legitimate users.
- Distributed Denial of Service (DDoS) attacks magnify this by using multiple sources. Another method involves specially crafted messages that crash services.
- Organizations can counter DoS attacks using firewalls, rate limiting, and intrusion prevention systems. Continuous monitoring and response plans are essential to mitigate these threats.

## Fraud on the Internet

- Internet fraud involves deceiving individuals or systems by impersonating trusted entities.
- Attackers often create fake websites or send phishing emails pretending to be banks, merchants, or government organizations.
- Victims are tricked into performing harmful actions, such as transferring money or sharing private information.
- For instance, a fake e-commerce site may steal credit card details.
- To combat fraud, organizations deploy anti-phishing tools, enforce strong authentication methods, and educate users about identifying suspicious activities.
- Collaboration with law enforcement and regulatory bodies also aids in reducing fraud-related crimes.

## Firewalls

- Firewalls are essential security devices that control network traffic based on predefined rules.
- They form a boundary between an organization’s internal network and the Internet.
- Screening routers, a type of firewall, analyze packets to decide if they should pass based on source and destination IP addresses.
- Stateful inspection firewalls track TCP/IP sessions and make decisions based on session states.
- Firewalls can block unauthorized access while allowing specific traffic, such as permitting email through a secure mail server.
- They also monitor outbound traffic, preventing data exfiltration by malware. Periodic review of firewall rules is crucial for maintaining robust security

## Application Firewalls

- Application firewalls provide an additional layer of defense by protecting web-based applications from attacks.
- Unlike network firewalls, they examine the contents of packets to detect malicious actions such as SQL injection, cross-site scripting, and buffer overflows.
- These firewalls are implemented as standalone devices, software on application servers, or virtual machines in cloud environments.
- For example, an application firewall can block malformed requests targeting a web server.
- While they complement network firewalls, application firewalls are not substitutes and are essential for safeguarding the application layer.
- Regular updates ensure these firewalls remain effective against evolving threats

## Demilitarized Zone (DMZ) Network

- A DMZ network isolates public-facing systems from an organization’s internal network, providing a secure architecture for hosting services like web servers.
- Firewalls control the traffic flow, allowing specific services while blocking access to internal assets.
- For instance, a DMZ can host an email server accessible to the Internet while ensuring internal systems remain protected.
- This setup minimizes the attack surface and limits the impact of potential breaches.
- Organizations with complex requirements may deploy multi-layered DMZ architectures.
- Regular audits of firewall rules and DMZ configurations are necessary to maintain security and functionality.

## Honeypots and Honeynets

- Honeypots are decoy systems designed to attract and analyze attackers.
- They simulate valuable systems to observe attack methods and tools.
- For example, a high-interaction honeypot might run unpatched software to lure sophisticated attackers, while low-interaction honeypots signal intrusion attempts.
- Honeynets extend this concept to networks, emulating production environments.
- Insights gained from honeypots help organizations enhance their security posture. However, precautions must be taken to ensure honeypots cannot be used to attack production systems or external targets.
- Regular monitoring and isolation of honeypots are critical for safe and effective deployment.

## Change and Configuration Management

- Change management ensures all modifications to systems are planned, reviewed, and documented, maintaining the integrity of environments exposed to the Internet.
- For example, updating firewall rules or deploying new applications requires approval to prevent vulnerabilities.
- Configuration management complements this by ensuring systems are consistently configured according to security standards.
- Together, these processes minimize risks and support compliance with organizational policies.
- Automated tools can aid in tracking changes and generating reports, ensuring transparency and accountability.
- Organizations should regularly review and update these processes to adapt to evolving security needs.

## Encryption

- Encryption is the process of converting readable data (plaintext) into an unreadable format (ciphertext) to protect it from unauthorized access.
- It is widely used to secure sensitive information during storage and transmission, especially over public networks.
- Encryption ensures that even if data is intercepted, it remains inaccessible without the correct key.
- This method also enables authentication, allowing recipients to verify the origin and authenticity of messages.
- Best practices recommend using robust encryption algorithms and securely managing encryption keys to prevent unauthorized decryption.

## Cryptographic Terms and Concepts

Key cryptographic terms include:

- Plaintext: Readable data before encryption.
- Ciphertext: Encrypted data rendered unreadable.
- Hash Function: Converts data into a fixed-length output to ensure integrity.
- Digital Signature: Uses private keys to prove message authenticity.
- Encryption Key: A secret code used to encrypt or decrypt data.

These concepts are fundamental for IS auditors and security professionals in managing and auditing systems that utilize cryptography.

## Private Key Cryptosystems

- Private key cryptosystems use symmetric encryption where both sender and receiver share the same encryption key. Challenges include:
  - Key Exchange: Securely transmitting keys without interception.
  - Scalability: Each sender-receiver pair requires a unique key, creating management challenges for large networks.
- Examples of symmetric encryption algorithms include AES, Blowfish, and DES. Secure key exchange methods, such as Diffie-Hellman, are essential to establish encryption keys over unsecured channels.

## Public Key Cryptosystems

- Public key cryptosystems use asymmetric encryption, involving a public-private key pair.
- The public key encrypts data, while the private key decrypts it.
- This system enables secure communication without prior key exchange.
- For example, a user encrypts a message with the recipient's public key, ensuring only the recipient can decrypt it using their private key.
- Public keys can also be used for digital signatures, verifying message authenticity and integrity.
- Unlike symmetric encryption, public keys are freely shared, while private keys remain confidential.

## Verifying Public Keys

- Public keys must be verified to prevent fraud or impersonation. Methods include:
  - Certificate Authority (CA): Trusted entities issue certificates validating public keys.
  - Key Fingerprint: Mathematical verification ensuring the public key matches its claimed owner.
  - Directory Services: Platforms like LDAP or Active Directory verify key authenticity.
  - Email Address: Keys linked to verified domains provide limited assurance. Proper verification ensures secure communications and protects against impersonation attacks.

## Hashing and Message Digests

- Hashing applies cryptographic algorithms to data, resulting in a unique, fixed-length 'digest' used to verify data integrity. Properties of hashes include:
  - Any data change causes a significant hash change.
  - It is infeasible to alter data without changing its hash.
  - No two distinct inputs should produce the same hash.
- Common uses include software verification, ensuring downloaded programs are unaltered.
- Users compare the hash provided by a trusted source with the computed hash of the file to confirm its integrity.
- Hashing plays a key role in ensuring secure communications and data authenticity.

## Digital Signature

- Digital signatures authenticate messages and guarantee integrity without encrypting content. The process involves:
  1. Sender creates a message and computes a hash.
  2. The hash is encrypted with the sender's private key.
  3. The recipient decrypts the hash with the sender's public key.
  4. The recipient compares the decrypted hash to the computed hash.
- If both hashes match, the message is verified as authentic and unaltered.
- Digital signatures are widely used in securing emails, documents, and software distribution, ensuring that content originates from a trusted source.

## Digital Envelopes

- Digital envelopes combine public key and symmetric cryptography for efficient, secure data transmission. The process:
  1. Sender creates a symmetric 'session' key and encrypts it with the recipient's public key.
  2. The data is encrypted with the session key.
  3. The encrypted data and session key are sent to the recipient.
  4. Recipient decrypts the session key with their private key and then decrypts the data with the session key.
- This hybrid approach ensures secure communication with reduced computational overhead compared to public key encryption alone.

## Public Key Infrastructure (PKI)

- PKI is a centralized framework for managing public keys. Key components include:
  - Digital Certificates: Contain a public key and identifying information, signed by a trusted Certificate Authority (CA).
  - Certificate Authority (CA): Issues and vouches for the authenticity of certificates.
  - Registration Authority (RA): Validates certificate requests and verifies identities.
  - Certificate Revocation List (CRL): Lists invalidated certificates.
- PKI ensures secure key management and trust in digital communications by enabling users to verify public keys and authenticate messages or data.

## Key Management

- Key management involves generating, protecting, and disposing of encryption keys throughout their lifecycle:
  - **Key Generation:** Keys must be generated on secure, isolated systems.
  - **Key Protection:** Keys are safeguarded using hardware security modules (HSMs) or operating system features.
  - **Key Rotation:** Periodic replacement of keys to mitigate risks.
  - **Key Disposal:** Keys are securely destroyed when no longer needed, ensuring data remains inaccessible.
- Effective key management is critical for maintaining the security of cryptographic systems, preventing unauthorized access, and ensuring data confidentiality.

## Encryption Applications: SSL/TLS

- SSL (Secure Sockets Layer) and its successor, TLS (Transport Layer Security), are encryption protocols used in HTTPS to secure web communications.
- They provide functionalities such as public key encryption, session encryption, and hash functions for data integrity.
- SSL and TLS enable server authentication and optional client authentication.
- Supported algorithms include AES, DES, and RC4 with key lengths ranging from 40 to 256 bits.
- Weaknesses in SSL and early TLS versions have rendered them deprecated, and only updated TLS versions should be used for security

## VoIP (Voice Over IP)

- Voice over IP (VoIP) enables telephony over IP networks, including voice, video, and fax transmission. Key components include:
  - SIP (Session Initiation Protocol) trunks replacing traditional trunks for scalability.
  - Digital PBXs supporting VoIP connections.
  - VoIP handsets and softphones eliminating the need for traditional phones.
- While cost-effective and feature-rich, VoIP systems are vulnerable to attacks such as eavesdropping, spoofing, malware, and denial-of-service.
- Securing VoIP involves network segmentation, device hardening, and firewalls.

## PBX Threats and Countermeasures

- PBXs (Private Branch Exchanges) face threats such as default passwords, administrative access via modems, toll fraud, and espionage. Countermeasures include:
  - Strong administrative controls: complex passwords, multi-factor authentication, and logging.
  - Physical access restrictions using keycards and surveillance.
  - Regular review of toll and access logs to detect misuse.
  - Outbound call restrictions to prevent toll fraud.
- PBXs with IP connectivity require additional network security measures to address broader IPrelated vulnerabilities.

## Malware: Overview and Threats

- Malware includes viruses, worms, ransomware, spyware, and more.
- Modern malware causes significant harm, such as data loss, system damage, and theft of sensitive information.
- Attack vectors include phishing, spam, and drive-by downloads.
- Malware exploits vulnerabilities like unpatched systems and configuration errors.
- Defensive measures involve anti-malware tools, network segmentation, strict user access controls, and comprehensive security policies to reduce risks and respond effectively

## Advanced Persistent Threats (APTs)

- APTs are long-term, targeted attacks involving reconnaissance, social engineering, and malware.
- APTs focus on a single organization, exploiting its vulnerabilities while adapting to defenses.
- They are challenging to detect and counteract, often involving advanced techniques and persistence.
- Combating APTs requires robust threat monitoring, employee awareness, and layered security measures such as intrusion detection, firewalls, and continuous system updates to mitigate risks effectively.

## Anti-Malware Management Controls

- Effective procedural controls for malware prevention include:
  - Security awareness training for employees.
  - Scanning all incoming emails and files for malware.
  - Building servers from read-only media.
  - Evaluating URLs in emails for maliciousness.
  - Prohibiting personally owned computers for business use.
  - Verifying network equipment software is genuine and malware-free.
- These measures collectively reduce the risk of malware infiltration and ensure system security.

## The Malware Industry

- Malware creation has evolved into a structured industry driven by organized crime
  syndicates.
- These entities operate like legitimate businesses, engaging in financial fraud and
  cybercrime.
- Reports reveal that profits from Internet-based fraud have surpassed drug trafficking.
- Modern malware, unlike its early forms, is designed to evade detection and cause
  significant economic damage.
- Combating malware requires vigilance, technological advancements, and continuous updates to security protocols.

## Environmental Controls

- Environmental controls are critical for maintaining the operational reliability of IT equipment.
- Factors such as temperature, humidity, and cleanliness impact the longevity and performance of systems.
- Vulnerabilities include power surges, brownouts, excessive heat, static discharge, and dust accumulation.
- Implementing proper HVAC systems, uninterruptible power supplies (UPS), and physical security measures ensures environmental stability and minimizes operational disruptions.

## Electric Power Vulnerabilities

- IT systems are sensitive to power quality issues like spikes, surges, dropouts, and blackouts.<br/> Unstable power can damage components or shorten their lifespan. Countermeasures include:
  - UPS systems to provide backup power during outages.
  - Generators for long-term power supply.
  - Redundant power feeds to ensure continuous electricity.
- Organizations must assess and plan their power requirements to ensure reliable and uninterrupted operations.

## Temperature and Humidity Controls

- Maintaining optimal temperature (68° to 75°F) and humidity (40 to 55%) is crucial for IT equipment. Excess heat can damage components, while low humidity increases static discharge risks. Countermeasures include:
  - High-capacity HVAC systems with N+1 redundancy.
  - Continuous monitoring and alerts for deviations.
  - Raised floor systems for efficient air circulation.

Proper environmental management ensures equipment longevity and prevents costly downtimes.

## Fire Prevention, Detection, and Suppression Controls

- Fire controls in IT facilities include prevention, detection, and suppression measures:
  - Prevention: Store combustibles away, maintain cleanliness, and limit electrical maintenance near equipment.
  - Detection: Use advanced smoke and heat detectors for early warnings.
  - Suppression: Use systems like pre-action sprinklers for sensitive areas and inert gas systems to protect equipment.
- Appropriate fire suppression methods safeguard IT facilities without compromising equipment integrity.

## Physical Security: Threats and Vulnerabilities

- Threats to physical security include theft, sabotage, espionage, and tailgating.
- Vulnerabilities like propped doors, poor keycard management, and inadequate surveillance exacerbate risks.
- Countermeasures include:
  - Strict keycard controls with PIN or biometric authentication.
  - Video surveillance and physical barriers like fences.
  - Security personnel and guard dogs.
- Addressing physical vulnerabilities reduces risks to IT infrastructure and sensitive assets.

## Auditing Asset Protection

- Asset protection auditing involves reviewing policies, processes, and physical security controls. <br/>Key areas include:
  - Examining security policies and comparing them with standards like ISO/IEC 27001.
  - Reviewing backup procedures and access logs.
  - Evaluating security awareness training and data ownership practices.
- Comprehensive audits ensure that asset protection measures are robust and effective against potential threats.

## Auditing Logical Access Controls

- Logical access controls audit involves evaluating:
  - Network paths for hidden or undocumented access points.
  - User access controls for provisioning and password management.
  - Employee transfers and terminations to ensure access removal.
- Ensuring these controls work cohesively prevents unauthorized access and strengthens system integrity

## Classification of Data Center Reliability

- Data center reliability is classified into four tiers:
  - Tier 1: Basic site infrastructure with single power/cooling paths.
  - Tier 2: Redundant components but single path.
  - Tier 3: Concurrently maintainable paths.
  - Tier 4: Fault-tolerant infrastructure with multiple active paths.
- These classifications guide organizations in designing and maintaining reliable data center environments.

## Auditing User Access Controls

- Auditing user access controls focuses on several areas:
  - Authentication: Ensuring network and system resources require authentication.
  - Access violations: Verifying logging of invalid login attempts.
  - Dormant accounts: Identifying and closing unused accounts.
  - Shared accounts: Replacing them with individual accounts to ensure accountability.
  - Jump servers: Ensuring their access and security controls are robust.
- Effective user access audits mitigate risks and strengthen system integrity.

## Auditing Password Management

- Password management audits examine:
  - Password policies: Minimum length, complexity, expiration, and reuse restrictions.
  - Secure storage: Ensuring passwords are encrypted or hashed, not stored in plaintext.
  - Account lockout: Automatic locking after repeated login failures.
  - Password vaulting: Encouraging or mandating password vault usage.
- Strong password management practices are critical for securing user access and preventing breaches.

## Auditing Access Provisioning

- Access provisioning audits cover:
  - Request processes: Examining consistency and documentation of access requests.
  - Approvals: Ensuring requests are approved by data/system owners.
  - Employee onboarding: Evaluating initial access setup and secure credential delivery.
  - Segregation of duties (SOD): Identifying and addressing SOD violations.
- Thorough audits ensure access provisioning aligns with organizational policies and minimizes risks.

## Auditing Access Logs

- Access log audits focus on:
  - Contents: Verifying logged events (e.g., logins, file access).
  - Centralization: Ensuring logs are aggregated and protected.
  - Retention: Reviewing log retention policies and backups.
  - Alerts: Confirming automated mechanisms for access-related alerts.
- Regular access log audits provide insight into user activity and enhance security monitoring.

## Auditing Incident Response Procedure

- Incident response audits evaluate:
  - Policies and procedures: Ensuring clear guidelines for investigations.
  - Security incidents: Reviewing records to assess response effectiveness.
  - Computer forensics: Verifying availability of tools and trained personnel.
  - Post-incident reviews: Identifying and implementing process improvements.
- Effective incident response planning and execution are essential for minimizing impacts of security breaches.

## Firewalls and Network Segmentation

- The IS auditor examines network firewalls to ensure compliance with security policy. Key areas include:
  - Verifying firewall configurations and change records.
  - Evaluating network segmentation for business needs.
  - Ensuring firewalls support organizational segmentation policies.
- Effective firewall and segmentation audits ensure robust access controls and policy enforcement.

## IDS and IPS

- IDS/IPS audits evaluate:
  - Configuration and logs for detecting intrusions and malware.
  - Integration with SIEM for alert management.
  - Effectiveness of reputation filtering and malware detection.

Regular IDS/IPS evaluations enhance threat detection and response capabilities.

## Remote Access and Cloud Security

- Key audit areas include:
  - Remote access policies, ensuring authentication and compliance.
  - CASB systems, monitoring cloud resource access and enforcing policy.
  - Split tunneling and noncompliant workstations connecting via remote access.

Comprehensive audits strengthen remote and cloud access security.

## Auditing Vulnerability Management

- Vulnerability management audits focus on:
  - System hardening and compliance verification.
  - Penetration testing for networks and applications.
  - Patch management processes, ensuring timely updates.
  - Mitigating risks through proactive security alerts and testing.

Thorough audits improve system defenses and risk mitigation strategies.

## Auditing Environmental Controls

- Environmental audits evaluate:
  - Power conditioning: UPS and backup systems.
  - HVAC systems for adequate temperature and humidity.
  - Water and fire detection systems, ensuring functionality.
  - Cleanliness in data centers to prevent dust accumulation.

Effective controls protect physical assets and ensure operational continuity.

## Physical Security and Siting

- Physical security audits cover:
  - Siting hazards: Proximity to floods, pipelines, and severe weather.
  - Building marking: Preventing external identification of sensitive locations.
  - Security controls: Bollards, fencing, and monitored access points.

Audits ensure robust physical security measures against potential risks.

## Auditing Physical Barriers

- Physical barriers, including fencing, walls, barbed or razor wire, bollards, sally ports, and crash gates, are essential components of physical access control.
- The IS auditor must evaluate how effectively these measures control access to a facility.
- Factors such as maintenance, durability, and location placement should also be considered.
- Additionally, barriers must align with the organization's security objectives, ensuring sufficient deterrence and protection.

## Auditing Surveillance

- Surveillance systems, including video and human monitoring, play a critical role in physical security.
- Auditors must assess the quality, coverage, and effectiveness of surveillance systems.
- Key considerations include whether video recordings are retained and reviewed, and if monitoring
  systems are actively used to prevent or detect security incidents.
- Integration with alert systems and response protocols also enhances effectiveness.

## Auditing Guards and Dogs

- The use of security guards and guard dogs adds an active layer of protection.
- Auditors should evaluate policies and procedures governing their deployment, training, and operational effectiveness.
- Processes for incident response, patrol scheduling, and coordination with surveillance systems are key areas of assessment.
- Records of guard activities and incidents provide critical audit evidence.

## Auditing Keycard Systems

- Keycard systems provide automated access control and monitoring capabilities.
- Auditors should examine how keycard systems are provisioned, managed, and monitored.
- This includes assessing access control policies, multi-factor authentication implementation, and log retention.
- Reviews of user access, incident response protocols, and visitor management ensure compliance with security standards.
