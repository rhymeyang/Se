# Chapter 8: V2X Current Security Issues, Standards, Challenges, Use Cases, and Future Trends

## Objectives

1.  Overview
2.  Standards, Regulations, and Legal Issues
3.  Competition Over V2X Technology Adoption
4.  V2X Use Cases
5.  Current Trends and Future of Intelligent
    and Autonomous Vehicles
6.  Summary

## 8.1 Overview

The Fourth Industrial Revolution will see autonomous vehicles at the center.

The automotive industry has already become a worldwide issue that is not constrained solely by one country’s strategy.

Moreover, autonomous vehicles are also fundamentally changing the behavior of human mobility.

It will also bring in product creativity focused on those innovations.

Therefore, the international technological infrastructure around this topic is already under demand to develop a new set of standards.

New rules and laws are replacing existing ones, and new relevant legislations are being discussed worldwide.

We are at the peak of a major breakthrough in vehicle communication and safety on the road.

The vehicle-to-everything (V2X) technology has already been applied to improve road safety through its significant past and current developments.

The vehicle-to-everything (V2X) works on 802.11p protocol.

The V2X communication based on 802.11p does not offer preinstalled infrastructure and complete spatial connectivity as compared to cellular networks, but is a major driver for vehicle safety and traffic efficiency applications with its capabilities for direct communication among short communication networks.

The V2X vehicle technology can save lives, but only if these technologies are granted opportunity to advance and implement in the society.

## 8.2 Standards, Regulations, and Legal Issues

### 8.2.1 International Cybersecurity Standardization in Automotive Industry

#### A. Europe initiatives:

1. EU Projects:
   - In 2006, the SEcure VEhicle COMmunication (SEVECOM) project started to deal with security of vehicular communications and intervehicular communications.
   - It provided solutions to the problem that are specific to the road traffic information.
   - In 2008, the E-Safety Vehicle Intrusion protected Application (EVITA) project started and its goal was to design and verify OBU prototypes and provide e-safety by securing the electronic components of vehicles from tampering.
   - The EVITA project secures inter- and intra-vehicle communication by allowing trustworthy communication between the vehicles and the internal components and the project ended in 2011.
   - From 2008 to 2012, the SimTD project was carried out in Germany.
   - Its objective was to increase road safety and improve the traffic efficiency based on V2X communication.
   - The 7th Framework Program of the EU commission started the Open VEhiculaR SEcurE (OVERSEE) project in 2010 and ended in 2012.
   - OVERSEE provided standard, secure, generic communication application platform for vehicle and enhanced the efficiency and safety of the road traffic.
   - Similarly, the framework funded another project called Preparing Secure Vehicle-to-X Communication Systems (PRESERVE) in 2011 and ended in 2015.
   - Conversely, in 2012, the Bosch established its own hardware security module (HSM) specification to harden the embedded system like ECU that fulfills the vehicular requirements.
   - In 2014, Intelligent Transport System Security (ISE) project was introduced in France, which contributed to security and privacy of future vehicle of C-ITS.
   - The goal of ISE is to design and implement a proof of concept of ITS European PKI that has been proposed as a standard at ETSI.
   - SEcurity and SAfety MOdelling (SESAMO) is a European industry-based project by Advanced Research and Technology for EMbedded Intelligent Systems (i.e., EU-ARTEMIS project) that runs from 2013 to 2015.
   - SESAMO objective is to increase the safety and security of the embedded system and products in various areas like ITS, industry, avionics, etc.
   - The AI safeguarding project started from July 2019 and will be completed in June 2022 with a total budget of 41MEuro.
   - The goal of this project is to generate security, functional safety measures, and safeguarding strategies for the AI functions used in autonomous vehicles.
2. EU Consortium:
   - The CAR2CAR Communication Consortium (C2C-CC) was established in Europe, which is a consortium of leading European and international vehicle manufacturers, equipment suppliers, engineering firms, road operators, and research institutions.
   - The objective of this consortium is to save lives by investigating and developing C-ITS solutions that helps to achieve vision zero, i.e., to implement accident-free traffic by overcoming road accidents.
   - Volkswagen, which is one of the members of C2C-CC, launched new vehicles VW Golf 8 that supports C-ITS that is based on ETSI ITS-G5 standards for establishing short-range communication between vehicles.
3. EU Standardization:
   - The AUTomotive Open System Architecture (AUTOSAR) is very popular in-vehicle software standardization organization for intelligent and autonomous vehicles.
   - The AUTOSAR is a global consortium of automakers, suppliers, service providers, vehicle industry, semiconductors, and software company.
   - Their objective is to build a global open industry standard for vehicular software architecture.
   - It specifies a message authentication function for identifying and thwarting falsification and spoofing of communication data from the AUTOSAR specifications.
   - The AUTOSAR introduced a secure authentication mechanism for critical data on a PDU level called Secure On-Board Communication (SecOC), which describes the basic functionality, security features, and API of AUTOSAR SecOC module.
   - Figure 8.1 shows the timeline of safety and cybersecurity standards, and projects in automotive vehicles.

---

![Picture1](/images/302/w0801.png)

## **Fig. 8.1** Timeline or safety and cybersecurity standards, and projects in automotive industry

#### B. North America Initiative:

1. US Organizations:
   - The Society of Automotive Engineers (SAE) is a global standard developing organization for engineers and professionals in different industries and associations.
   - It stipulates guidelines and the cybersecurity functional development process for vehicular attacks by introducing J3061 as defined in Cybersecurity Guidebook for Cyber-Physical Vehicle Systems in 2014.
   - In 2015, the SAE introduced J3101 that defines a common set of requirements for hardware-protected security for terrestrial vehicle applications to expedite security in vehicular applications.
   - The Society of Automotive Engineers (SAE) and International Organization for Standardization (ISO) jointly worked together to develop current state-of-the-art cybersecurity standards for vehicles in two areas, i.e., road vehicles and ITS.
   - The SAE and ISO co-chaired and worked as a Joint Working Group (JWG) to introduce ISO/SAE 21434 under a new agreement.
   - The SAEJ3061 was based on cybersecurity of vehicle. The objective of ISO/SAE 21434 is to provide cybersecurity activities for all phases of vehicle life cycle, manage cybersecurity activities, and analyze risk factors for cybersecurity requirements.
2. US Standardization:
   - In the USA, the Institute of Electrical and Electronics Engineers Standards Association (IEEE-SA), a part of the Institute of Electrical and Electronics Engineers (IEEE) organization, provides support, development, and advancement of global standards across a wide range of industries.
   - It introduced 802.11p standard that is an extension of the Wi-Fi 802.11 standard in order to support Wireless Access in Vehicular Environments (WAVE) for ITS applications.
   - The 5G Americas is an industry trade organization made up of major suppliers and telecommunications service providers.
   - The mission of the organization is to support and promote the development of wireless technologies such as 5G and beyond, its services, applications, and smart devices in the Americas.
   - The 5G Americas invests in the development of a connected wireless society while leading 5G development across all of America.
   - The 5GAmericas enhances vehicle cybersecurity by increasing user privacy, network resilience to cyberattacks, and strengthening hardware protection for vehicles.
   - This goal is accomplished a secure device credential provisioning and storage, and new network enhancements provide vehicle-to-network communication security.

#### C. International Initiatives:

- A group of experts from around the world assembled to develop international standards known as ITU’s Telecommunication Standardization (ITU-T) that defines global infrastructure elements for ICT.
- The International Organization for Standardization (ISO) advocates proprietary, technological, and commercial practices worldwide.
- The ISO and SAE work together for the vehicle cybersecurity standards. The ISO 26262 is an international risk-based standard for functional safety of electronic and electrical systems in vehicles derived from IEC 61508 and defined by ISO.
- It is designed for functional safety of automotive electrical and electronic devices by guiding and regulating throughout the entire product life cycle process.
- It was first introduced in November 2011 to address the safety hazards due to the malfunction of electronic equipment of the passenger vehicles.
- However, the first edition was withdrawn and then it was revised and again republished second edition as ISO 26262-2 in 2018.
- One of the parts of second edition focused on road vehicle functional safety and standards for Safety of the Intended Functionality (SOTIF).
- It helps in avoiding system failures and detect random hardware failures.

---

1. United Nations Economic Commission for Europe (UNECE):
   - UNECE is preparing a certification for a Cyber Security Management System (CSMS) that mandates the approval of the vehicles according to the requirement of the recent document proposal.
   - The UNECE is working toward a global standardization and regulation on cybersecurity of the vehicles since December 2014.
   - There is an increasing cyber-attack that risks the vehicular communication due to weak infrastructure for online updates of vehicles like over-the-air (OTA) issues.
   - To provide cybersecurity and data protection and solve OTA issues, a task force was created under Informal Working Group on Intelligent Transportation Systems/Automated Driving (IWG on ITS/AD) within WP.29.
   - The UNECE WP.29 IWG ITS/AD document provides a guideline on cybersecurity, relevant standards, regulations, and data protection that are applicable to the automotive industry.
   - The software update regulation contains requirements for OEM software update that include demands for safe and secure updates.
2. 5G Automotive Association (5GAA):
   - 5GAA is a global, international cross-industry organization for automotive, telecommunications, and technology enterprises.
   - Before the introduction of 5GAA, different industries have their own definition, terminology, interest, and use of V2X cases in different parts of the globe, which make it difficult to communicate in one common language.
   - The 5GAA solves this problem by creating a universal global language for the V2X under one umbrella across different industries.
   - The goal of 5GAA is to develop, evaluate, implement standards, promote CV2X solutions, and support 5G connectivity technologies that drive global market penetration and usability, and facilitate standardization for C-V2X.
   - The 5GAA signed a letter of intent for collaboration with the European Automotive Telecom Alliance (EATA) in 2017.
   - It also works for standardization for driverless, autonomous vehicle in cooperation with ETSI, 3GPP, and SAE.
   - In late 2019, the 5GAA collaborated with the ETSI for testing CV2X for the first time in Europe.
   - The tests executed with 95% success rate confirming a high level of multi-vendor interoperability.
   - The successful test was an important milestone to support commercial deployment and global strategy to accelerate the C-V2X throughout the world with OBU including the infrastructure.
   - The 5GAA Working Group 7 (WG7) evaluates the currently available security solutions in V2X communication and recognizes gaps toward comprehensive, secure end-to-end solutions besides specifications.
   - The 5GAA promotes the use of the entire 5.9 GHz spectrum for ITS safety applications.
   - Strategic initiatives by governments, regulatory agencies, industries, and research institutions are also required on account of the ambiguity of communication systems, lack of support of networks, total cost of deployment, and exposure to certain technological issues, like enhancing cybersecurity.
   - 5GAA acknowledges that C-V2X not only has the advantages of future proofing and the use of wireless connections in tandem, but also has better direct communication efficiency relative to 802.11p.
   - It provides a higher degree of security across all operating modes such as embedded security for vehicle-to-network (V2N) transmission, and the equivalent public key infrastructure (PKI) security services defined in standards using 802.11p.
   - The back-end V2N services manage delay-tolerant or wide area network applications and provide enhanced security and privacy from suitable network locations. The service providers may provide specialized services such as ADAS and CAD assistance with low latency requirements in network front-end infrastructures.
   - Figure 8.2 shows the probable security framework for end-to-end terminals, network front and back ends.
   - The automotive cybersecurity testing, validation, integration, and standardization process are given in Fig. 8.3.

## 8.2 Standards, Regulations, and Legal Issues (11)

![Picture1](/images/302/w0802.png)

Fig. 8.2 Security framework for end-to-end terminals, network front and back ends

![Picture1](/images/302/w0803.png)

Fig. 8.3 Automotive cybersecurity testing, validation, integration, and standardization process

### 8.2.2 Standardization for V2X Communicationand Frequency Allocation

- The international development of ITS has been the driving force for the advance deliberation of regulatory provisions for vehicular communication systems.
- Significant advances have been made in many regions, particularly in Europe, USA, and Japan.
- International organizations, including ITU, European CEPT, United States Department of Traffic (USDoT), Federal Communications Commission (FCC), and Asia-Pacific Telecommunity, are envisioning spectrum harmonization initiatives.
- They are also beginning to consider the 5.9 GHz band ITSs in their entirety. While writing this chapter, the global ITS spectrum is in further review under ITU-R Working Party 5A, which is liable for land mobile service research, including wireless access and ITSs while excluding IMT.

**Table 8.1 ITS spectrum in different regions of the globe**

| Region         | Country   | Year | ITS Spectrum (MHz)        |
| -------------- | --------- | ---- | ------------------------- |
| North America  | USA       | 1999 | 5852-5925                 |
| European Union | Europe    | 2008 | 2008/671/EC, 5875-5905    |
|                |           |      | ECC/REC/(08)01, 5855-5875 |
|                |           |      | ECC/DEC/(08)01, 5875-5925 |
| Asia Pacific   | Japan     |      | 755.5-764.5 and 5770-5850 |
|                | Korea     | 2016 | 5855-5925                 |
|                | China     | 2018 | 5905-5925                 |
|                | Singapore | 2017 | 5855-5925                 |
| Australia      | Australia | 2017 | 5855-5925                 |

---

1. A. Europe:
   - In 2008, the Electronic Communications Committee (ECC) passed a recommendation (ECC/REC/(08)01) for the non-protected and non-interference frequency use at 5855-5875 MHz and a decision (ECC/DEC/(08)01) regarding ITS non-safety applications in the 5.9 GHz frequency band as given in Table 8.1.
   - Again, in the same year, the ETSI allocated a 30 MHz band (i.e., 5875-5905 MHz) for time-critical road safety-related application of ITS and additional 20 MHz band for future ITS applications in 5.9 GHz frequency based on the European Commission Decision 2008/671/EC [8].
   - In 2014, ETSI along with European Committee for Standardization (CEN) released the first version of V2X technology known as ETSI ITS-G5. Since then, ETSI has been working toward improving the regulatory framework in radio interferences and cyber security.
   - However, this recommendation might not accommodate the 5G technologies, for which adoptions of other bands such as the 63-64 GHz band may be reasonable. In 2018, EU mandated the use of V2V technology in all the new vehicles.
2. B. USA:
   - In 1999, the US-DoT and FCC regulated the channel allocation of 75MHz band in 5.9 GHz frequency spectrum, i.e., 5850-5925 MHz.
   - It reserves one 10 MHz control channel band (5885-5895 MHz) for vehicle safety and another 10 MHz band (5915–5925 MHz) for public safety communication and rest for general use as specified in FCC 47 Code of Federal Regulations (CFR) Parts 0, 1, 2, 90, and 95 amendments for DSRC. In 2016, the FCC requests the proposal of Unlicensed National Information Infrastructure (U-NII-4) prototype units to show unlicensed devices and DSRC coexistence capabilities.
   - In 2004, IEEE formed a taskforce to work for Wireless Access in Vehicular Environments (WAVE) that led to the IEEE 802.11p and then revised in 2010.
   - In 2012, the IEEE 802.11p was combined with IEEE 1609 and SAE J2735 to allow a fullstandardized message stack that was approved by DOT for DSRC applications.
   - In 2014, the US National Highway Traffic Safety Administration (NHTSA) issued a report claiming that the V2X platform was technologically tested and available for real market implementation.
   - The NHTSA mandates the use of V2V technology in all the new vehicles to accelerate the proposed schedule and minimize the collision-based incidents.
3. C. Asia Pacific Region:
   - The vehicular communication standardization was also followed by other countries in Asia Pacific regions such as South Korea, Japan, Singapore, China, and Australia between 2016 and 2017.
   - The 5.9 GHz band is the prospective band used for ITS applications in Asia Pacific region as shown in Table 8.1.
   - In 2016, Korea allocated the 5855-5925 MHz band in 5.9 GHz frequency for C-ITS (V2V and V2I communications) based on a 10 MHz channelization by the Ministry of Science and ICT (MSIT) that is similar to EU and USA [10].
   - There is an ongoing amendment to the Korean ITS standards in the Telecommunications Technology Association (TTA), and one of its objectives is to support various radio technologies for ITS applications, including C-V2X along with IEEE 802.11p.
   - In October 2018, China introduced Intelligent Connected Vehicles (ICV) allocated 20 MHz band (i.e., 5905–5925 MHz) in the 5.9 GHz spectrum to be used as Internet of Vehicles (IoV) accommodating LTE-V2X technology.
   - In Japan, the C-ITS implements two different spectra for ITS applications; they are 755.5–764.5 MHz band and 5770–5850 MHz band as shown in Table 8.1.
   - In October 2017, the Telecommunications Standards Advisory Committee (TSAC) of Singapore proposed a specification for ITS and allocated the frequency spectrum from 5855 to 5925 MHz.
   - The spectrum is divided into 10 MHz channel in 5.9 GHz for DSRC operation.
   - The Australian Communications and Media Authority (ACMA), which is a communication and media regulatory body, allocated 5855–5925 MHz in 5.9 GHz band for ITS communication in 2017.

#### 8.2.2.1 International V2X Standardization

- International standards are essential requirement for the deployment of V2X communication systems that provide requirements to enable connectivity between V2X systems and devices, along with interoperability of implementations from various vendors.
- However, standardization of V2X often poses multiple challenges.
- From technical point of view, the V2X standards contain a large number of reference and test requirements on various fields spanning from radio and protocols for safety and applications.
- The vast number indicates a huge complexity of incompleteness and ambiguity.
- Developing release specification poses both the challenges of forward and backward compatibility between releases, especially with the addition of new features and categories of the framework.
- From a non-technical point of view, V2X standardization is discussed by several Standardization Development Organizations (SDOs), which have developed partially overlapping requirements.
- The integration of guidelines from various SDOs is daunting, and compatibility of the standards is time and resource consuming.
- Standardization of V2X communication began with the allocation of the 5.9 GHz frequencies in the USA that was issued in 2002.
- In recent decades, parallel standardizations have been established in the USA and Europe, primarily because the initiatives were funded by numerous technology development projects and sponsored by specific stakeholders; eventually, they contributed to a separate set of standards.

---

**Table 8.2 Difference between DSRC and ITS-G5**

| Layers                   | Usage                           | DSRC (US)                                                    | ITS-G5 (EU)             |
| ------------------------ | ------------------------------- | ------------------------------------------------------------ | ----------------------- |
| Applications             | Safety and traffic applications | Safety (e.g., VCA) and non-safety (e.g., traffic estimation) | RHS, ICRW, LCRW         |
| Facilities               | V2X message                     | BSM, event-driven message (EDM)                              | DENM, CAN               |
| Networking and transport | Message protocol                | WSMP                                                         | BTP, GeoNetworking, GN6 |
| Access technologies      | PHY/MAC                         | IEEE 802.11p                                                 | ITS-G5                  |
| Security                 | Module                          | IEEE 1609.2                                                  | ETSI TS 103 097         |

---

- These two standards will be referred to as dedicated shortrange communications (DSRC) in the USA and cooperative intelligent transportation system (C-ITS) in Europe.
- The overall protocol stacks for both DSRC and C-ITS are similar, but there are some difference in each layer as shown in Table 8.2.
- There are two types of DSRC application layers, and they are safety and non-safety applications.
- The safety applications such as Vehicle Collision Avoidance (VCA) helps in reducing the road accidents by avoiding the vehicle collisions, while non-safety applications such as real-time traffic estimation and infotainment applications help to estimate the travel time and make the travel more pleasant.
- The applications in the ITS-G5 are not standardized directly.
- The applications are categorized into three types, and they are road hazard signaling (RHS), intersection collision risk warning (ICRW), and longitudinal collision risk warning (LCRW).
- The RHS signals are related to emergency brakes, emergency car approaching, and dangerous roads.
- The ICRW and LCRW signals are the crash hazards related to head-on accident or crash at road intersections.
- TheV2Xmessage functionality at the DSRC facility layer consists of a basic safety message (BSM) and event-driven message (EDM).
- The BSM is a beacon message broadcasted every 100 ms periodically, and it consists of vehicle state information such as position and status.TheBSMis usually broadcasted over a smaller area within 150–300 m radius. The EDM safety messages are transmitted when an event occurs

---

- The EDM safety messages are transmitted when an event occurs on the road such as accidents, and they should be transmitted with low collision and short delays over a wider area.
- On the other hand, the V2X message functionality in ITS-G5 consists of two types of messages, i.e., Cooperative Awareness Message (CAM) and Distributed Environmental Notification Message (DENM).
- The CAM is based on ETSI EN 302 637-2 and is similar to the BSM of DSRC protocol.
- The CAM sends vehicle state information periodically for identifying the vehicle’s mobility and location.
- The DENM is based on ETSI EN 302 637-3 that transmits traffic safety information to the neighbor vehicles in a particular geographical area only when there is some event.
- The IEEE 1609.3 defines a protocol named Wave Short Message Protocol (WSMP) that is a single-hop network protocol with a low header of few bytes, and the message used by WSMP is WAVE Short Messages (WSM).
- By transmitting periodical messages known as WAVE Service Advertisements (WSA), the WAVE system advertises its services.
- Each WSA may list PSIDs for network services and information that is required for the receipt and processing of WSMs for each service being advertised.
- In ITS-G5, the ITS describes a multi-hop communication ad hoc protocol known as the GeoNetworking protocol defined in ETSI EN 302 636 standard.
- The feature of this protocol is to address and transmit geographical coordinates.

---

- In contrast to the WSMP, GeoNetworking is optimized for multi-hop communication with geo-addressing, offering additional technical support functionality, but at the cost of higher complexity and overhead of the protocol.
- In addition, this layer consists of adaptation sublayer called GN6, i.e., IPv6 over GeoNetworking.
- The access technology layer for DSRC covering PHY and MAC operates in IEEE 802.11p 5.9 GHz band.
- The IEEE 802.11p equivalent in the EU C-ITS stack is known as ITS-G5 where the G5 refers to the 5 GHz frequency band. In ITS-G5, the MAC layer uses un-coordinated channel access scheme such as Enhanced Distributed Channel Access (EDCA), which is contention-based that uses the Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA) for traffic data prioritization.
- As for the security module, the DSRC uses IEEE 1609.2 standards for authentication and encryption of the messages using digital signatures and certificates.
- The USDOT mandates the use of vehicular PKI (VPKI) defined by 1602.9 standard.
- The VPKI will provide the vehicles with a series of pseudonymous provisional certificates that can be used to digitally sign V2X messages and to verify the reliability and integrity of the shared data for other vehicles.
- The pseudonymous certificates used by the vehicles in the DSRC are dynamic so that the attackers cannot track the identities of the vehicle.
- ITS-G5 uses ETSI TS 103 097 that is similar security standard to the IEEE 1609.2, which provides security to the vehicles.

### 8.2.3 ITS Spectrum Recommendation and RegulationConsideration

- In recent years, a number of vehicle accidents and cyberattacks triggered a rapid awareness of security needs in the automotive industry.
- The EU, USA, and other countries developed several policies and initiatives on cybersecurity aiming to ensure the security of the smart and autonomous vehicles.
- There is no doubt that 5.9 GHz band is the most appropriate frequency band used for ITS, considering the current development of the ITS ecosystem.
- In 3GPP, the frequency band 5.855-5.925 GHz is defined as Band 47 that is used for V2X applications.
- In 2015, the 3GPP started the study of C-V2X technology that consists of PC5 interface and Uu interface.
- The PC5 interface is a device-to-device communication over the direct channel, and Uu interface is the communication interface between the mobile device and the radio access networks.
- The C-V2X meets the demands of ITS applications such as rear-end collision warning, pre-crash detection, emergency vehicle warning, sudden stop, cooperative adaptive cruise control, road safety services, and automatic parking.
- The 5G in V2X offers sophisticated services such as platooning of vehicles, extended sensors, efficient driving, and distant driving.
- With the growth of C-V2X, more and more government agency and regulators show interest in C-V2X technology for future ITS developments.
- In regions or countries where technology neutrality has been incorporated, C-V2X tests or evaluations are recommended to check whether C-V2X complies with the relevant policy and regulations.
- If the regulations are compliant, the C-V2X devices in the allocated ITS spectrum should not be constrained by their service.

### 8.2.4 Cyber Security Standardization in V2X

- The fast evolution and rise in the development of modern systems and networks, combined with the complexity of increasing risks, pose daunting challenges in preserving the security of vehicular systems and networks.
- The security solutions require a stable and safe network infrastructure; however, they also need to protect the privacy of the drivers as well as the vehicles.
- The cybersecurity is very important in applications such as autonomous vehicle because the life and property of the passenger are dependent on the autonomous vehicle security.
- It should be dynamic as the cyber-attack vectors are developing frequently and the autonomous vehicles should be protected from new cyberattacks.
- The security management needs proactive as well as reactive measures that are based on the dynamic approach.
- The European Commission and the European Cyber Security Organisation (ECSO) engaged with the public–private partnership (cPPP) as part of the EU cyber security policy in July 2016.
- Its goal is to encourage cooperation at early phases in the research and innovation processes and to create cyber security solutions for different sectors, while establishing a European cybersecurity market and building the competitive industry in Europe.
- The PPP framework activities which is related to the security regulations affect the connected and autonomous vehicle technologies.
- The core activities are proposed for automotive vehicle domain to create a comprehensive cybersecurity risk management in vehicle automation application over the entire product life cycle.

---

- There are new areas of vehicle attacks due to the risks of cyber-attacks on vehicles, and weak online vehicle updates (OTA), V2X communication, and other requirements.
- The SAE is currently developing a new cybersecurity, i.e., ISO/SAE DIS 21434 “Road vehicles—Cybersecurity engineering” for cybersecurity of the vehicles, and the standard will be finalized in November 2020.
- The ISO/SAE 21434 aims to provide cybersecurity activities for all phases of the vehicle life cycle to manage cybersecurity activities and to analyze cybersecurity risk factors.
- The EU and US International Standards Harmonization Working Group established two Harmonization Task Groups (HTGs).
- They are Harmonization Task Groups 1 (HTG1) to harmonize security standards (including ISO, CEN, ETSI, and IEEE) to facilitate ITS cooperation and HTG3 to harmonize communication protocols.

![Picture1](/images/302/w0804.png)

**Fig. 8.4** Standards, regulations, technology enabled, operational bands, and security issues in V2X

## 8.3 Competition Over V2X Technology Adoption

- From time to time, there are some kinds of conflicts in V2X technology.
- In the past, the V2V technology was under severe threat from broadcast TV and other tech companies.
- They wanted to get a large portion of the radio spectrum from the bandwidth and use these frequency bands to provide high-speed Internet services, which were used by V2V.
- In the area of smart transport, the FCC implemented the DSRC standard over two decades to ensure vehicle safety and performance on the roads.
- The EU and US federal government have proposed a mandate to implement V2V based on DSRC in new vehicles.
- In several regions, the DSRC using 802.11p standards was already in operation for traffic signals, intersection collision prevention, ambulance signal priority, toll collection, parking payments, etc.
- Soon, several countries will mandate to use V2X communications in new vehicles; however, there are no guidelines specifying how the event-critical messages should be transmitted.
- As the V2X technology advances, the V2X technology diverged into two different standards, DSRC and C-V2X, with fundamentally different architectures.
- This makes it difficult for original equipment manufacturers (OEMs) to choose which standard they should select and even more challenging is to harmonize a single global solution.
- The global automaker industry and academia are divided into two groups.
- One group is biased toward DSRC technology, and they think that C-V2X technology is not mature in vehicular communication field compared to DSRC.

---

- It might take some time for CV2X to be widely deployed, as it has not been extensively tested in the field.
- The other group supports C-V2X technology due to its successful implementation in mobile networks, its potential, and evolution toward 5G.
- On the one hand, we have matured and successfully testedDSRCforV2X communication which has no room for evolution, while on the other hand, we have a new and promising C-V2X technology which has potential to evolve beyond 5G.
- Although C-V2X was introduced recently as compared to DSRC, it provides better performances in terms of communication range, latency, reliability, etc.
- The C-V2X offers QoS benefits besides worthy performances in carried-out tests and trials.
- In addition, C-V2X can coexist with other networks or applications in a 5.9 GHz band on the co-channel and/or an adjacent channel.
- It would be better if we can use both the technologies for V2X communication.
- However, if they run on the same frequency band, there is conflict with each other because there are differences between wireless systems.
- Basic differences between DSRC and C-V2X are given in Table 8.3.

---

**Table 8.3 Basic differences between DSRC and C-V2X**

| Components               | DSRC V2X                                                                                                      | Cellular V2X                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Technology               | Wi-Fi                                                                                                         | LTE/5G                                                                                              |
| Communication technology | OFDM with CSMA provides robust communication in dense and dynamic environment. No dependency with GPS signal. | SC-FDM with semi-persistent sensing, self-managed with ability for centralized management           |
| Cellular connectivity    | Hybrid model, i.e., connect with cellular network for non-safety services                                     | Hybrid, cellular network                                                                            |
| Transmission scheduling  | CSMA: No predetermined Tx slots and transmit when there is no ongoing reception                               | Collisions are not sensed. Slow response to changing environment                                    |
| Line coding              | Convolution code                                                                                              | Turbo code                                                                                          |
| Deployment               | From 2017. Commercialization in 2019                                                                          | Mass market deployment in China from late 2020                                                      |
| Future guideline         | Backward compatible and interoperable upgrade from 802.11p to 802.11bd                                        | C-V2X Rel.16 is based on 5G NR technology and operates in different channels than previous releases |
| Latency                  | Low latency for V2V communication                                                                             | Round trip latency less than 1 ms, slight delay due to centralized communication                    |
| Range                    | Good for short radio range                                                                                    | Optimized for long-range communication                                                              |

---

- The decision to adopt either DSRC or C-V2X is split around the globe.
- The automotive industries such as Volkswagen, Toyota, General Motors, NXP, and Volvo are supporting DSRC technology for V2X, while the 5GAA and other industry and institutes like BMW, Ford, Daimler, Qualcomm, Intel, Samsung, and Huawei back up 5G and support for C-V2X adoption because of its advantages and evolution in V2X communication.
- In Europe, there has been a heated debate on the adoption of DSRC over cellular technology.
- In July 2019, the new European Council (EC) of minister advocates 5G over DSRC reversing the previous EU commission decision on April 2019.
- As of writing this chapter, the newly elected EC will have to draft a novel plan with a “neutral” approach to the Council, enabling car manufacturers and operators to settle on what standard to use for connected cars. Even though the decision is positive toward the 5G industry, the battle for adoption is not over yet.
- According to EC transport commissioner, DSRC is already a proven and secure technology that can be implemented easily, cheaply, and rapidly ensuring that the large amount of already invested resources are not waste.
- If implemented earlier, the technology can improve the road safety and save the lives of people on the road before facing further severe accidents.
- It will take more than three years for the new technology like 5G V2X to be ready and deployed.

---

- It is necessary to install 5G supporting chipset and beacons on road signs, traffic lights, RSU, emergency vehicles, etc., for V2X services.
- There has not been sufficient rigorous testing for 5G-based V2X as compared to DSRC.
- Others think that the V2X communication should be free.
- If 5G technology is used as a platform in V2X, then who will pay for the 5G SIM card, and supplementary revenue streams for using 5G need to be paid to the cellular operators.
- The basic concept of V2X is that consumers use the technology for safety features and cellular operators should not hold them as hostages of using the 5G technology.
- Hence, the V2X standards require a global solution.
- The V2X has the ability to perceive its environment accurately, i.e., situational awareness even when autonomous vehicles do not have visibility and other complementary sensors.
- A global V2X solution will open the way for autonomous vehicles anywhere and will improve their widespread acceptance.
- Whatever technology is used for V2X communication, whether it is DSRC or 5G or both, the security features need to be ready.

### 8.3.1 Challenges for DSRC V2X and Cellular V2X

- There are still many issues to address when collaborating with different business partners to develop newV2X technologies.
- The “knowledge gap” between network operators, academia, and vertical businesses could be the critical obstacle.
- While network operators have extensive knowledge of 5G wireless technology, they have not obtained technical knowledge in each academic and industry.
- Vertical companies are well aware of the need for technical transformation, although the actual implementation scenarios for V2X technology remain difficult to deal with.
- The DSRC based on 802.11p uses a short-range peer-to-peer communication, which is good for connecting with neighboring vehicles in ad hoc modes.
- However, the short-range communication and lack of pre-existing DSRC-installed RSU result in inaccessible connectivity due to limited network coverage in sparse network scenario.
- The line of sight (LoS) and short-range communication have consequences for effective coverage.
- The LoS conditions are a concern for the implementation of V2X communication, particularly in urban settings where major LoS obstacles such as buildings and trees are the norm instead of the exception.
- Under normal operating conditions, latency is not a particular concern for 802.11p. In suboptimal conditions, an increased packet error rate and the corresponding requirement to retransmit messages may lead to a higher latency.

---

- The vehicular traffic congestion can lead to a high channel bottleneck easily and have a major impact on packet error.
- Small range of data rates between 6 and 27 Mbps is very small and could not support potential future V2X applications.
- Improved congestion control systems and congestion control schemes can provide a potential path to solving the congestion problem.
- The 802.11p-based DSRC is vulnerable to several types of attacks because of the ad hoc characteristics.
- The potential attacks on DSRC are authenticity, availability, confidentiality, and integrity.
- Some of the security issues can be mitigated by VPKI deployment and distributed misbehavior detection; however, many potential threats, such as vehicular worms and wormhole attacks, are difficult to prevent.
- The use of short-term pseudonymous certificates to authenticateV2V communications provides privacy to DSRC nodes.
- Advanced eavesdropping and data collection may still pose a risk to vehicle passenger privacy.
- The absence of existing DSRC infrastructures on the road and the need for additional DSRC module in every vehicle incurs substantial economic cost for both authorities and vehicle users.
- In case of cellular V2X, during the initial deployment, the 5G coverage cannot be penetrated in the rural villages or mountainous locations; as a result, the C-V2X communication becomes inconsistent.
- However, using sidelingD2D communication can be a potential solution for V2V coverage.
- The latency in C-V2X increases due to the processing delay through the infrastructure nodes such as eNB and Evolved Packet Core (EPC).

---

- Some of the solutions to these problems are to adopt D2D side link and local edge resources to reduce the latency.
- One of the challenges the CV2X has to suffer is significant message transmission congestion due to the frequent unicast transmission through the eNB nodes from several hundreds of vehicles.
- The 5G aims to support very high data rates that might be adequate for V2X applications, and the use of eMBMS or side link D2D might solve the congestion issue.
- As for security, the long existence of cellular network for mobile communication shows strong resistance to vulnerable attacks.
- However, it is not sure if the same security techniques can be directly used in C-V2X communication, as some attacks such as jamming and DoS attack are difficult to overcome.
- One of the privacy issues with the C-V2X is that the network operator or the authority in cellular communication stores the subscriber ID and all other information of the user.
- If the network operators behave maliciously or if it is under attack, then the user privacy will be compromised.
- The mobile network infrastructure is already in service with a broad coverage range, high capacity, and high throughput, but there is financial obstruction to support seamless V2X nationwide coverage through the cellular networks.
- The installation of cellular radios in all the vehicles increases the additional economic cost for the vehicle users.
- In addition, some cellular network operators charge a significant rate for data usage while the DSRC-based V2X communication is free of charge.

### 8.3.1 Challenges for DSRC V2X and Cellular V2X

**Table 8.4 Challenges in DSRC V2X and C-V2X technology**

| Features | DSRC V2X                                                                                                | C-V2X                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Coverage | Short-range and limited network coverage in sparse network                                              | Limited coverage and inconsistent communication in mountainous locations                        |
| Latency  | Packet error rate and retransmission increase latency                                                   | Processing through infrastructure (eNB, EPC) increases latency                                  |
| Capacity | Small data rates between 6 and 27 Mbps may be insufficient for future V2X application                   | Frequent unicast transmission through eNB from hundreds of vehicles causes congestion           |
| Security | Several threats like vehicular worms and wormhole attacks are difficult to prevent                      | Some attacks like jamming in CV2X are still difficult to tackle                                 |
| Privacy  | Malicious data collection and advanced eavesdropping could pose a risk to the privacy of vehicles       | Leakage of subscriber information from network operator causes privacy issue                    |
| Cost     | Installation of DSRC-based infrastructures and modules on each vehicle incurs substantial economic cost | High data rate and installation of cellular radios in each vehicle cause higher costs for users |

## 8.4 V2X Use Cases

### 8.4.1 Smart Mobility

- In the era of the Fourth Industrial Revolution, the smart mobility will strive for sustainable mobility and new means of transport such as shared autonomous vehicle and shared electric vehicles.
- Smart mobility is an integral concept for future intelligent transportation system that has become smarter and more intelligent with the integration of current transportation system and advanced functions of smart devices.
- The auto industry is attracted toward the smart mobility ecosystem allowing specific implementation of those solutions.
- The smart mobility should be designed wisely considering the intelligent and autonomous vehicles.
- In smart mobility, the vehicles gather on the fly to be part of a social network for smart mobility, i.e., a network of neighboring vehicles.
- The vehicles that share the same preferences, places, and travel in the same direction or destination become part of existing networks.
- There are intelligent tools available that use real-time traffic statistics, obtained through collaborative sensors, to help vehicles select the best path.
- Some ridesharing apps such as Uber and Lyft enable vehicle owners to share their cars with those using
- similar destinations, and this can be viewed as the concepts of smart mobility.

#### 8.4.1.1 Smart Mobility and Security Issues

- There are four states of mobility in smart mobility.
- The states represent current and future autonomous driving as well as vehicles/ridesharing platforms as shown in Fig. 8.5.
- The four states of smart mobility present an innovative way to enhance the mobility features in intelligent and autonomous vehicles.

![Picture1](/images/302/w0805.png)

**Fig. 8.5** Smart mobility states

---

1. The first state represents the current status of the personally owned vehicles where the human driver operates the vehicles.
   - The most advanced vehicles in this state are able to connect with other vehicles and avail features of advance driver assist technology.
   - The vehicles in this state are increasingly becoming data centric; i.e., they can create, consume, share, and analyze the information.
2. The second state represents the shared vehicles that is controlled by human driver.
   - Along with the growth of ridesharing companies that boost the sharing economy, such as carsharing and kickboard sharing, the shared mobility industry continued to expand.
   - The ridesharing company such as Uber and Lyft and carsharing company such as Zipcar and Socar provide a glimpse of cleaner, greener, cheaper, safer, and convenient future transportation system.
3. The third state represents the future state of personally owned vehicles, but without human drivers, i.e., fully autonomous vehicles.
   - The future vehicles will be fully functional autonomous vehicles based on different types of inbuilt sensors and electronic control units (ECUs) that communicate with each other.
   - The passenger’s experience will extremely improve with autonomous features of the vehicles.
4. The fourth state represents the future state of shared vehicles without the drivers or fully shared autonomous vehicles.
   - In the coming future, there will be advanced ridesharing technology, where the individual riders simply request the rides from the nearby autonomous vehicles.

### 8.4.2 V2X Testbed

- In 2013, the 5G forum was founded in South Korea. South Korea became the first country to commercialize world’s first 5G communication networks.
- In 2019, a collaboration with 5G forum and ITS Korea was held jointly by 5GAA.
- The 5G forum intends to be the leader of next generation communications technology and promotes the economic growth through the development of the ICT sector in attempts to update the creative economy’s new administration agenda.
- In the same year, the Seoul Metropolitan Government collaborated with SK telecom constructed the world’s first and only testbed as shown in Fig. 8.6.
- The testbed is based on 5G and V2X communication for urban autonomous vehicle driving innovations in the area of public transportation.
- The Seoul city created the K-City as a smart city testbed, a Digital Media Street (DMS) in Seoul.
- The testbed includes a CCTV control management device that can track and measure both autonomous driving conditions and situations.
- It consists of 5G and V2X communication networks, high-definition (HD) 3D maps, vehicle maintenance, parking lots, charging stations for electric cars, future mobility center, and all the other services and conveniences required for testing the autonomous driving technology.
- The testbed is established for autonomous vehicle driving and pilot operation.
- The SK Telecom successfully demonstrated the autonomous 5G V2X convergence driving technology use case and provided a model of 5G-based V2X technology that makes it possible to operate safely, even under adverse weather conditions,

![Picture1](/images/302/w0806.png)

**Fig. 8.6** G V2X tested for autonomous vehicles

## 8.5 Current Trends and Future of Intelligentand Autonomous Vehicles

- As soon as the technical and regulatory matters are resolved, more than 15% of new cars sold in 2030 might be fully autonomous vehicles.
- The future intelligent and automotive vehicles will be electrified, fully autonomous, shared, and fully connected.
- It will emit very less smoke and less noise because it is electric and consumes less time and space because it travels autonomously, it will be economical or affordable as people will use shared autonomous vehicles and everybody will use it, as users will not need a driving license to use it.
- The behavior of consumer mobility is evolving, and there is a sudden rise of automotive industry solution that gives rise to one out of ten vehicles sold in 2030 being possibly a shared vehicle.
- Motivated by shared mobility, communication services, and functionality updates, new technologies and business models could increase the pools of automotive revenue by about 30%.

### 8.5.1 Trends in Intelligent and Autonomous Vehicles

- The four trends play a vital role in the development of future autonomous vehicles.
- The key four trends are autonomous driving, connectivity, diverse mobility, and electrification of the vehicles as shown in Fig. 8.7.
- The riders and drivers use vehicle connectivity and subsequent autonomous technological service models to become a medium for their transport and for personal purpose.
- The accelerating progress allows automobiles to be upgradable particularly in software-based systems.
- When shared mobility services such as ridesharing or e-hailing, with shorter development cycles, become more popular, the customers will be constantly aware of advances in technology, which will further increase demand for upgradability of privately owned vehicles.
- In addition, strict emission standards, lower battery prices, commonly available charging points, and increased consumer awareness will develop new and growing support for the adoption of electric powered vehicles such as hybrid, plug-in, battery electric, and fuel cell, in the coming years, which will vary significantly at regional and local levels.

![Picture1](/images/302/w0807.png)

**Fig. 8.7** Basic trends of future autonomous vehicles

---

1. **Autonomous Driving:** The exponential progress that has been made in fields like artificial intelligence, machine learning, and deep neural networks makes it easier to accomplish autonomous vehicles that do not need human interference except in complex traffic scenarios.
   - The use of human accessibility systems should be fully reshaped.
2. **Connectivity:** The connectivity services in vehicles provide networking of vehicles with other vehicles and infrastructures such as RSU and clouds as well as provide Internet connectivity for Web surfing, work, or accessing multimedia services during the journey.
3. **Diverse Mobility:** The shared mobility has been offered by many developed countries. However, sharing concepts of autonomous vehicles will be economically viable soon.
   - The quest for a shared vehicle in the local area would no longer be necessary: Rather, vehicles will be requested anywhere the consumer happens to be through a convenient “on-demand” service know as mobility-asa-service.
4. **Electrification:** The shift to emission-free autonomous vehicle would not be possible without electrification of the vehicles.
   - There is problem even with a very small amount of harmful substances, dust, and noise generated by the current vehicles operated on non-renewable gasoline fuels.

### 8.5.2 Autonomous Electric Vehicle and Challenges

- Several countries in the world propose to a ban on the selling of gasoline and diesel vehicles by shifting to electric and hybrid vehicles.
- Countries in Europe like Norway prohibit fossil fuel vehicles and create opportunities for electric vehicles.
- All other countries will also follow this trend for cleaner, greener, and healthier environment, while fossil fuels have limited supply.
- The future will be full of autonomous and electric vehicles over time, and it will likely become the preferred form of transportation with the goal of moving ahead with more sustainable and efficient e-mobility alternatives.
- The charging facilities would be a critical factor in maintaining a seamless transition to e-mobility.
- Innovations with novel EV charging solutions are required that would play a key role for EVs. There have been a few ideas that are going around over the years with a few that appear to stand out such as smart charging, contactless charging, vehicle-to-grid (V2G), on-road EVs charging, and photovoltaic (PV) panel for EV charging.
- Cities are already trying to enforce regulations, which require new homes and even new parking lots to have electric car charging facilities.
- Some automakers such as Volkswagen proposed a robot that carry small portable charger to the designated parking spaces, and they move only when the requested user calls them.
- Similarly, Tesla Inc. has installed more than 16 K supercharger all around the globe and is still increasing to ease the autonomous electric vehicle in the future.
- However, there are several challenges in autonomous EVs.
- The key obstacles for electric vehicles are limited travel range, high prices, battery failures, and a spotty charging system.
- Furthermore, there are concerns with specific power semiconductors and other devices. There are safety and security concerns with EVs as EVs are run on the battery, and there might be charging leakage that may cause electric shocks or the battery might explode due to issues in the battery manufacturing.

### 8.5.3 Cyber-Attacks in Future Autonomous Vehicles

- Currently, not all the people are ready to accept and ride the autonomous vehicle due to lack of full trust on the autonomous vehicles.
- The autonomous vehicle should first gain the human trust by performing excellent test drive better than human driver without any accidents on the street.
- The vehicle manufacturers have a strong record of accomplishment in setting up a vehicle safety, but not in cybersecurity so far.
- People still doubt on the seamless vehicle connectivity, privacy, and data security including the security of biometrics information produced and shared by the connected vehicles.
- Systematic and stepwise threat mode lingmethods such as STRIDE and PASTA need to be used to prevent the autonomous vehicles from cyberattacks.

#### 8.5.3.1 Protection of Future Autonomous Vehicle from Cyber Attacks

- It is anticipated that autonomous vehicles can have multiple onboard attack vectors including radar, cameras, GPS, ultrasonic sensors, V2X, infrastructure devices, and applications that these sensors rely on.
- When everything is connected, it can also interrupt everything, with cyber attackers continuously searching for advanced illegal techniques to use the Internet for their personal financial gain.
- The development of electrical, electronic, and digital network infrastructure in vehicle increases surface attacks and tends to increase the cyber risks.
- Some of the emerging cyberattacks in vehicle system are given below:
  1.  Spoofing of sensors: The attacker can attack the vulnerable sensors
  2.  Hijacking: The attacker can hijack and take control
  3.  Surveillance attack: The attacker can hack the voice recognition systems
  4.  Physical access: The hackers manipulate the security system
  5.  Infotainment system: The attacker gains control of the external wireless connectivity
  6.  Telematics: The attacker remotely unlocks the doors
  7.  DoS attack: The attacker can cause DoS attack on the back-end service devices
  8.  OTA: The attacker attacks on the weak online vehicle software updates
  9.  Unauthorized access: The attacker attacks the weak OEM back-end services
  10. Information stealing: Themalicious attacker gets access of the unsecure vehicle

#### 8.5.3.2 Cybersecurity of Future Vehicles and Machine LearningTechniques

- Machine learning (ML) has proved helpful in combating cyber-physical attacks that endanger vehicle network safety and security.
- The current and future semiautonomous and fully autonomous vehicles will be heavily dependent on artificial intelligence (AI) systems.
- Deep learning with convolutional neural network (CNN) works best for the identification of path, line, and obstacle.
- It is used to detect boundary boxes, and the result is instantly passed on to the other algorithms, which determine whether the vehicle is the same as the previous one.
- The next generation of AI that will be based on human–machine interaction, such as artificial superintelligence (ASI), uses data and advanced algorithms to imitate the human brain cognitive functions.
- The autonomous vehicles based on ASI systems imitate, augment, and facilitate human behavior, while simultaneously exploiting rapid response times and precise machine-controlled technology.
- The intelligent vehicle also consists of several types of sensors along with LiDAR and camera sensors that can detect 3D images of people on the road, neighbor vehicles, road signs, animals, and buildings and utilize high-definition 3D maps.
- In the future, various types of advanced ML, ASI, reinforcement learning, and computer vision technology can be used together to control specific sensors and collaborate via advanced algorithms.
- This can provide robust solutions and imitate human like logical thinking for perception problems in real-world environment.

### 8.5.4 Challenges in Future Autonomous Vehicles

- The machine learning also poses potential challenges and risks by itself, as the system based on ML can generate adverse or unpredictable results and can cause accidents.
- For example, convolution neural networks can easily be manipulated by maliciously constructed noise images.
- On the other hand, reinforcement learning agents seek undesirable ways of enhancing the reward function provided by their interacting environment.
- In such conditions, if the accidents are caused by the autonomous vehicles, then who is guilt and takes responsibility of the accidents, the autonomous vehicle itself, the driver behind the control system, or the vehicle manufacturing company.
- There might be situation where the autonomous vehicle has to divert from the usual path to save six people on the crossroad and might kill one on the other side of the road.
- Such unfortunate situation brings the dilemmas that make it difficult for people to accept that ethical dilemmas occur mostly in severe and disastrous circumstances.
- New rules and laws should be drafted, and legal actions should be taken considering the advancement of autonomous vehicles because introduction of autonomous vehicles might reduce more severe accidents band disasters on the road in the future.
- One of the challenges is to design a robust cyber security framework for core 5G autonomous vehicles to protect the critical information and communication infrastructure.
- The autonomous vehicle industry needs to adopt OEM cybersecurity issues, build skills to implement cybersecurity best practices into its products, and work effectively with OEMs to integrate and validate end-to-end cybersecurity solutions.

### 8.5.5 Intelligent Autonomous Vehicle Improves Environment

- In the USA, ITS transportation sector had contributed 27% of the total greenhouse emissions, in 2013.
- The electrified intelligent autonomous vehicle with V2X technology will allow drivers to make better decisions while driving; for example, information about traffic status will help drivers to take better routes and avoid unnecessary stops, overall improving the fuel efficiency of the vehicles.
- The vehicle drivers maximize their plans by getting information about public transportation in real time.
- Automated eco-driving techniques will also be helpful in reducing environment degradation. Eco-driving is a set of practices that aims at reducing the use of fuel consumption in the vehicle without changing the mechanics of the vehicle.
- This can be achieved by optimizing the speed and the amount of cylinders used in order to maintain adequate power output, and by optimizing the acceleration and deceleration behavior of the drivers.
- It has been observed that quite a few human drivers are using incorrect acceleration or deceleration techniques.
- Either they accelerate too quickly or they brake too forcefully.
- It results in the electricity and fuel consumption being wasted.
- If the vehicles use these eco-driving methods, the energy consumption of each vehicle on the road is projected to be decreased by as much as 10 to 20%.

## 8.6 Summary

- In this chapter, we discussed the V2X current security issues, standards, challenges in Europe, USA, and other countries.
- We first described several different types of standardization, associations, and organization working in DSRC and C-ITS protocols.
- Then, we introduced V2X technology based on DSRC and cellular network and its adoption.
- We also discussed different types of smart mobility and its associated risk factors and security issues as well as 5G V2X testbed and its use cases.
- It addresses the effect of electric vehicles in intelligent and autonomous vehicle and carsharing applications.
- This chapter introduced car hailing and ridesharing services as a promising solution to minimizing private vehicle utilization in a community, thus minimizing the need for parking spaces, reducing traffic congestion, and contributing to emission reductions.
- Lastly, we presented the future of intelligent and autonomous vehicles, electric vehicles, and its cybersecurity issues.

/images/302/w0801.png
