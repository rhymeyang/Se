# Chapter 3: Security and Privacy in Intelligent Autonomous Vehicles

## OBJECTIVES

- Overview
- Cryptography Introduction
- Cryptography Objective
- Cryptographic Primitives
- Cyber Security in Intelligent and Autonomous Vehicles

## OVERVIEW

- The cyber security in intelligent and autonomous vehicles can be a combination of physical security, information security, security elements, policies, standards, legislation, and risk mitigation strategies.
- We will introduce the updated cybersecurity framework that provides a specific categorization and structural framework for institutions to describe their current cybersecurity position, state for cybersecurity, identify and prioritize security improvements, assess security progress, and plan concerning cybersecurity risks.
- Then, we discuss the five key technological cybersecurity to protect any company, organization, and IAV against cyber-attacks.
- A threat modeling method (TMM) is also required to investigate the potential threats so that the IAV system is fully secured from unknown attacks.

## CRYPTOGRAPHY INTRODUCTION

![image-20241005223118410](/images/302/w0301.png)

Fig. 3.1 A basic encryption system

A cryptosystem has the following components:

- Plaintext
- Encryption algorithm
- Ciphertext
- Decryption algorithm
- Encryption key
- Decryption key

## CRYPTOGRAPHY OBJECTIVE

The primary purpose of cryptography is to guarantee the following four basic security services:

- Confidentiality
- Data Integrity
- Authentication
- Non-repudiation

## CRYPTOGRAPHIC PRIMITIVES

Cryptographic primitives are the cryptographic algorithms used to build cryptographic

- Symmetric Key or Secret Key Encryption

![image-20241013201437316](/images/302/w0302.png)

Fig. 3.2 Encryption system classification

![image-20241013201555478](/images/302/w0303.png)

![image-20241013201645343](/images/302/w0304.png)

![image-20241013201748190](/images/302/w0305.png)

### Digital Signatures

- A digital signature is a technique that associates an entity with the digital data.
- The digital signature scheme is based on public-key cryptography.
- This association is independently verifiable by the receiver as well as any third party.
- Digital signature is a cryptographic value, which can be calculated from the data and some secret known to the signer.

![image-20241013201918499](/images/302/w0306.png)
Fig. 3.5 Encryption technique

## CYBER SECURITY IN INTELLIGENT AND AUTONOMOUS VEHICLES

- There is a security threat and cyber-attack in hardware such as computer networks and information system such as data, programs, and other services due to unauthorized access and weak protection against malicious entities.
- So, the cyber security in intelligent and autonomous vehicles can be a combination of physical security, threat modeling, information security, policies, standards, legislation, and risk mitigation strategies.

![image-20241013202059431](/images/302/w0307.png)

**Fig. 3.7** Security elements of autonomous vehicles

## CYBER SECURITY FRAMEWORK

- In 2019, National Standards and Technology Institute (NIST) has launched the updated version 1.1 of cyber security framework (CSF) for improving critical cyber security infrastructure and to help institutions on their path toward the development of secure computer systems

![image-20241013202228894](/images/302/w0308.png)

**Fig. 3.8** NIST cybersecurity framework 1.1 including five functions

## CYBERSECURITY LAYERS BY DESIGN

- The security of a vehicle should be considered, including its feature specification from its very inception and during the design stages.
- The security by design should be in the first place to evade the security risks. Addressing security problems earlier guarantees the vehicle security systems and equipment as well as reduces risks of vulnerabilities at later stages.
- Cybersecurity must be implemented into the design instead of including at the end of the development phase. Therefore, incorporating cybersecurity into the design requires a suitable cybersecurity layer.

![image-20241013202403389](/images/302/w0309.png)

**Fig. 3.9** Cybersecurity layers by design

## THREAT MODELING METHOD (TMM)

![image-20241013202515567](/images/302/w0310.png)

![image-20241013202608192](/images/302/w0311.png)

**Fig. 3.10** STRIDE threat model

## HARA AND TARA SAFETY AND SECURITY METHODS

- Hazard analysis and risk assessment (HARA) assessment is done by considering consequences of failure.
- It identifies hazards based on information on potential causes.
- Threat analysis and risk assessment (TARA) to identify possible cybersecurity attacks and risks linked to these attacks with security goals and functional requirements.
- TARA is based on ISO/IEC 27001 standards, which is an information security standard that manages the asset security.

![image-20241013221858391](/images/302/w0312.png)

Fig. 3.12 Classification of HARA and TARA safety—cybersecurity methods

## SECURITY AND PRIVACY THREATS IN VEHICULAR NETWORKS

- Fake information attack: The selfish attacker transmits fake information. E.g. the attacker may transmit an emergency vehicle approach warning for his way on the road to be clear.
- Illegal preemption attack: During an emergency, if roadside unit (RSU) controls the traffic light then the attacker may lawlessly break out the traffic light via RSU for his own needs.
- Message replay attack: The legitimate messages that were already sent by a valid source are sent again by fraudulent or malicious intention or with some delays to interfere the traffic.
- Integrity: Integrity assures that the messages exchanged between two vehicles must not be tampered or go through any modification.
- Non-repudiation: Non-repudiation ensures that any message sent by a legal vehicle cannot deny the message or contents send by it.
- Access Control: Access control ensures reliability and security in the system + Privacy: Privacy ensures protection of personal information from illegal users.

## AUTONOMOUS VEHICLE CYBER SECURITY

- Autonomous Vehicle Vulnerability Taxonomy

![image-20241013222049724](/images/302/w0313.png)

Fig. 3.13 Autonomous vehicle vulnerability taxonomy

- Autonomous vehicle defense taxonomy

![image-20241013222216070](/images/302/w0314.png)

**Fig. 3.14** Taxonomy of defense system in VANET

## VEHICULAR AD HOC NETWORKS VULNERABILITIES

![image-20241013222329175](/images/302/w0315.png)

**Fig. 3.15** Vulnerability taxonomy in VANET

## PRIVACY IN VANET

![image-20241013222435736](/images/302/w0316.png)

**Fig. 3.16** Privacy in VANET

## TRUST MANAGEMENT IN VANET

![image-20241013222542791](/images/302/w0317.png)

**Fig. 3.17** Classification of trust management system

## BLOCKCHAIN AS A SECURITY IN VANET

- Blockchain is a distributed, decentralized immutable ledger that works in trustless environment.
- Some of the features of blockchain are anonymity, decentralization, transparency, immutability,
  traceability, and non-repudiation.
- As the vehicle is becoming intelligent and autonomous, they exchange data for communicating with different sensors and peer vehicles and infrastructures in intelligent transportation system.
- The message exchange between the vehicles is vulnerable to different types of attacks as the vehicles do not trust each other.
- The blockchain can be a solution to secure the communication between untrusted vehicular nodes.

![image-20241013222715233](/images/302/w0318.png)

**Fig. 3.18** Types of blockchain in VANET
