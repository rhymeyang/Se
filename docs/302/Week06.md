# Chapter 6: Inter-Vehicle Communication and Cyber Security

## Objectives

- 6.1 Overview
- 6.2 Connected Vehicles
- 6.3 State-of-the-Art Technologies in VANET
- 6.4 Role of Edge Computing and SDN in V2X
- 6.5 Connected Vehicle Cyber Security
- 6.6 Trust Management in V2X Communication
- 6.7 **Homomorphic Encryption** in VANET
- 6.8 Blockchain in V2X Communication
- 6.9 Safety Standards for IAV
- 6.10 Summary

## 6.1 Overview

The **intelligent and autonomous vehicle (IAV)** technologies are expected to revolutionize the **intelligent transportation system** internationally.

The IAV can be categorized into **autonomous vehicles** (or self-driving vehicles) and **connected vehicles**.

The intercommunication between vehicles is known as **connected vehicles** in the USA and **Cooperative Intelligent Transport Systems (C-ITS)** in Europe.

The autonomous vehicles are based on a mixture of varieties of sensors and diverse technologies to achieve the desired autonomous level, while connected vehicle technologies are based on vehicular ad hoc networks (VANETs).

The connected vehicles help the vehicles to make intelligent decisions such as **establish exchanged messages** between the neighbor vehicles and the RSU. This helps in planning the future travel route.

This makes the IAV to be safer as well as improves the traffic flow with very low probability of accidents.

The **vehicle-to-everything (V2X)** is the main communication technology for future VANETs that helps vehicles to obtain a wide range of road information in real time that significantly improves driving safety, traffic efficiency as well as provides infotainment services.

## 6.2 Connected Vehicles

In the USA, the vehicles that are wirelessly connected with other vehicles, infrastructures, and clouds are popularly known as **connected vehicles (CV)** technologies.

The connected vehicles technology is based on **ad hoc networks** to communicate with other nodes known as **VANET**.

VANETs enable intelligent vehicles to transmit vehicle-related safety information to prevent accidents. In VANET, **Wireless Access in Vehicular Environments (WAVE)** protocol provides the basic radio standard for **dedicated short-range communication (DSRC)** operating in the 5.9 GHz frequency band, which is based on the IEEE 802.11p standard.

In Europe, **European Telecommunication Standards Institute (ETSI)** has started equivalent standard similar to DSRC, which is the only commercially available short-range V2X technology.

It is known **ETSI ITSG5(ITSC) standard** to support vehicle-to-everything (V2X) communication.

The ITSC standard is created based on some revisions in IEEE 802.11p standards with European Union prerequisites as ETSI EN 302 663.

This enables the vehicles to communicate with infrastructure using DSRC within 500 m.

### 6.2.1 VANET Technology Overview

The **connected vehicles technology** or **C-ITS** is based on **VANET** for communicating **safety** and **non-safety messages**.

Due to the ITS technological advancement, the connected vehicles have gained a lot of attention from industry and academia that could potentially help the safe driving, traffic flow situation such as congestion, accident, road construction, and multimedia entertainment in vehicles.

The basic aim of connected vehicles or C-ITS is to enhance road safety and traffic flow efficiency with reduced global pollution and effective environmental impact.

This can be achieved by enabling IAV and roadside infrastructures to communicate and exchange vehicle-related safety messages that consist of road hazards, speed, location, size, and direction information.

The connected vehicle technology or C-ITS is based on VANET for communicating safety and non-safety messages.

In VANET, the vehicle can communicate with neighbor vehicles, infrastructure, central networks, pedestrians, cyclist, etc., based on 802.11p radio technology in unlicensed 5.9 GHz band.

---

- The wireless communication in VANET can be achieved by
  - (i) Vehicle-to-infrastructure (V2I) communications in the infrastructure domain. In V2I, the vehicles connect to road side units (RSUs) within its communication range. The RSU can be implemented in either an eNodeB (eNB) or stand-alone traffic light posts.
  - (ii) Vehicle-to-network (V2N) communications to connect with remote servers, the evolved packet switching and cloud-based services than can be connected through cellular networks.
  - (iii) Vehicle-to-vehicle (V2V) communications in ad hoc domain to connect with other neighbor vehicles in close proximity supporting distributed localized interaction among the neighbor vehicles without RSUs.
  - (iv) Vehicle-to-pedestrian (V2P) to connect with the vulnerable pedestrians or bikers on the road in ad hoc mode like V2V communication.

### 6.2.2 Types of Communications Technology in Connected Vehicle

The advancement in vehicle connectivity includes different types of communication technologies. At present, there are two underlying technologies that enable V2X communication, namely IEEE 802.11p and cellular technologies.

We begin with the V2X communication techniques and then explain how V2X based on 802.11p and cellular V2X (C-V2X) technologies empower these techniques to contribute ITS applications.

Figure 6.1 shows two types of wireless technologies used in connected vehicles.

The detailed description of DSRC technology and WAVE communication and its standard suites and applications.

In general, the V2X communication can be direct communication, fully network assisted communication, and hybrid communication as shown in Fig. 6.2.

In direct communication, vehicular nodes communicate with adjacent vehicles based on peer-to-peer protocol.

In fully network-assisted communication, the communication has to go through the RSU or base station (BS).

In hybrid communication, the vehicular node communicates with each other through the combination of direct communication and network-assisted communication using 802.11p and cellular networks such as RSU and BS.

![image-20241116221250003](/images/302/w0601.png)

**Fig. 6.1**

Connected vehicle (V2X) based on DSRC (802.11p) and cellular technology

![image-20241116221314362](/images/302/w0602.png)

**Fig. 6.2** Different types of V2V and V2I scenarios

## 6.3 State-of-the-Art Technologies in VANET

### 6.3.1 DSRC-Based V2X

The 5.9 GHz DSRC-based V2X supports cooperative awareness applications such as vehicle warning, emergency brake light, and vehicle platooning.

However, these applications are suitable only for low density of vehicles.

In reality, there are hundreds of thousands of vehicles driving on the road and the V2X applications require very high throughput, high bandwidth, and very low latency in a congested scenario.

In critical and emergency warning messages, latency plays a very important role in traffic safety to prevent the vehicle from the accidents.

This technology has limitation to fulfill all the requirements of future V2X applications due to the restriction in physical layer (i.e., radio technology) and lack of collision and interference management.

This is one of the reasons for delay in implementation of V2X realization in the vehicles.

In addition to this, the IAV communication requirements and applications are increasing rapidly while the network configuration, latency, poor scalability, mobility, enormous scale network deployment, security, and achievable data rates of DSRC-based vehicular communication cannot get closer to the ever-growing need of these applications.

### 6.3.2 Cellular-Based V2X

The third-generation partnership project (3GPP) gives highest priority for modifications of radio access suitable for V2X communications.

The cellular technology has already proven its successful implementation in the last few decades, and the 3GPP inherits the benefits of cellular technology and combines the application of VANET.

Based on Rel. 14 and Rel. 15 specification, the 3GPP announced the cellular vehicle-to-everything (C-V2X).

In 2016, the 3GPP standardized the use of LTE as cellular networks in the licensed band for V2X communication in Rel. 14, which is known as LTE-V2X.

The LTE-V2X is based on already deployed cellular networks that overcomes the limitation of 802.11p-based V2X communication, i.e., it provides very high bandwidth, very low latency, and wide coverage. In C-V2X, it extends the cellular device-to-device (D2D) communications specification by introducing two more operational modes dedicated to V2V communications for vehicles.

![image-20241116221750420](/images/302/w0603.png)

**Fig. 6.3** C-V2X Mode 3 and Mode 4 scheduling techniques

### 6.3.2.1 Advancement in Cellular V2X

As the 3GPPcame into picture forC-V2X technology, they are working rapidly on the advancement of the C-V2X by releasing several specification standards, to enhance the technology further.

With the development of cellular technology, 4G or LTE networks were introduced with high bandwidth, low latency, high throughput, and high reliability.

The LTE’s infrastructure networks are already widespread with the deployment of large number of eNB that support huge communication traffic between the mobile users.

- (a) LTE-V:
  - In vehicular networks, LTE for vehicles (LTE-V) was introduced as an alternative technology besides DSRC for intelligent transportation.
  - Telecom operators and automotive industries have accepted LTE-V for vehicular communication.
  - It claims to provide low cost, rapid development, and implementation by using the existing cellular base stations making the urban transportation system more efficient and manageable.
- (b) 5G C-V2X:
  - The 3GPP standardization has released a dedicated set of criteria for supporting V2X applications in the future cellular networks based on the 5G technology that is known as cellular V2X (5G C-V2X).
  - As 5G C-V2X is compatible with 4G and 5G, the 3GPP is working toward improving the 5G architecture in Rel. 16 [3].
  - The 5G technology that supports the requirements of V2X application is still in research, and the automotive and telecom industries are positive and working toward the achievement of 5G C-V2X by 2020.
- (c) 5GNRC-V2X: The 3GPP focused on enhancing the LTE features on PC5 direct communication and LTE-Uu interfaces before Rel.15.
  - In 2015, the 3GPP started to work on new radio (NR) standardization activity for 5Gsystem as a first phase in Rel.15.
  - The 3GPP released its first full specification of 5G NR in Rel. 15 in June 2018.

Table 6.1 Detailed comparison of DSRC-based and cellular-based V2X communication

| Components              | DSRC V2X                                                                        | Cellular V2X                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Technology              | Wi-Fi                                                                           | LTE/5G                                                                                              |
| Modulation              | OFDM                                                                            | SC-FDM                                                                                              |
| Concurrent Tx           | No                                                                              | Yes                                                                                                 |
| Cellular connectivity   | Hybrid mode, i.e., connect with cellular network for non-safety services        | Hybrid mode, i.e., connect with cellular network for non-safety services                            |
| Transmission scheduling | CSMA: No predetermined Tx slots and transmit when there is no ongoing reception | Collisions are not sensed. Slow response to changing environment                                    |
| Time synchronization    | Loose asynchronous                                                              | Very tight synchronous requirements                                                                 |
| Line coding             | Convolution code                                                                | Turbo code                                                                                          |
| Deployment              | From 2017. Commercialization in 2019                                            | Mass market deployment in China from late 2020                                                      |
| Future guideline        | Backward compatible and interoperable upgrade to 802.11p, i.e., 802.11bd        | C-V2X Rel.16 is based on 5G NR technology and operates in different channels than previous releases |
| Latency                 | Low latency for V2V communication                                               | Round trip latency less than 1 ms, slight delay due to centralized communication                    |
| Range                   | Good for short radio range                                                      | Good for long-range communication                                                                   |

![image-20241116222241390](/images/302/w0604.png)

**Fig. 6.4** Evolution of C-V2X toward 5G technology for autonomous vehicles

### 6.3.3 Hybrid V2X Technology

A common V2X platform is required that supports both the DSRC technology and C-V2X technology at the same time.

If a single wireless communication technology is used, it cannot fulfill all the requirements of V2X communication suitable for intelligent and autonomous vehicles in ITS.

In V2X, the DSRC is easy to deploy at a very low cost to support ad hoc communication as compared to cellular networks.

However, DSRC has certain limitations in highly dense traffic situations such as limited wireless range, short period of connectivity, and scalability issues.

The vehicles have a very high mobility; dynamic topology so the RSUs based on DSRC technology cannot provide wide coverage in urban city. In addition, during the early deployment of V2X, the RSUs may not be available in all parts of the country.

On the other hand, cellular networks overcome these issues by providing wide wireless network coverage, high capacity, and high penetration in dense and urban city.

However, the cellular networks also have few drawbacks before it can be applied in V2X communication.

The cellular networks cannot handle high-frequency beacon messages from all the vehicles.

There might be degradation in cellular networks service quality for safety messages if it has to support huge number of high mobility vehicles.

In such type of situation, the cellular networks might not be suitable for sharing critical event messages due to latency issues.

### 6.3.4 C-V2X Applications and Requirements

- The C-V2X application has been categorized into four types based on their requirements and use cases according to 5GAA. They are as follows:
  - (i) Safety: The safety use case such as intersection movement designed to reduce the accidents by warning the driver of the approaching crash hazard.
  - (ii) Convenience: The convenience use case such as software updates like software Over the Air (OTA) updates for automotive management, vehicle health services as well as other telematics services for saving time.
  - (iii) Advanced Driving Assistance: In advanced driving assistance, the use cases such as real-time situational awareness and high definition maps alert driver regarding overtaking, icy road conditions in front, etc. It helps to improve the traffic flow by managing vehicle route, weather alerts, limiting speed, etc.
  - (iv) Vulnerable Road User (VRU). The VRU use case discovers vulnerable road users and warns the driver of VRUs about its location status. It maintains safe communication among vehicles and pedestrians, bicycles, bikes, and other users.

## 6.4 Role of Edge Computing and SDN in V2X

The intelligent and autonomous vehicles will generate a massive amount of data such as sensor data, multimedia data, and other types of data that cannot be handled by traditional centralized servers.

With the increase in the density of vehicles in urban areas and massive amount of data generated by them, the edge computing can satisfy the location awareness, mobility, and latency requirements.

In order to collect and process those massive amount of data instantaneously, edge cloud computing plays an important role.

The edge clouds are located at the edge of the networks at the proximity of the vehicles and are geographically distributed.

The edge cloud provides better performance, and services bring cloud-like facilities at the proximity of the vehicles.

There are several concepts of edge cloud services among them is multi-access edge computing (MEC).

---

Table 6.2 V2X requirements for autonomous vehicles

| Category           | Communication Mode | Latency (ms) | Throughput (Mbps) |
| ------------------ | ------------------ | ------------ | ----------------- |
| **Non-safety**     |                    |              |                   |
| Infotainment       | V2I, V2N           | 500–1000     | 80                |
| Traffic safety     | V2V, V2I, V2P      | 20–100       | 0.5–700           |
| Traffic efficiency | V2V, V2I, V2N      | 100–500      | 10–45             |
| **Safety**         |                    |              |                   |
| Advance driving    | V2V, V2I           | 3–100        | 0.096–53          |
| Remote driving     | V2N                | 5            | 25                |
| Vehicle platooning | V2V, V2I           | 10–20        | 0.012–65          |
| Extended sensors   | V2V, V2I, V2P      | 3–100        | 10–1000           |

---

Alongside the advancement in cellular 5G technology, software-defined network (SDN) plays an important role in V2X communication.

SDN is an emergent technology that can be used in coordination with MEC.

The centralized and organized paradigm of SDN offers flexibility, scalability, and programmability to V2X communication.

The SDNis partitioned into two planes, i.e., control plane for network traffic control and the data plane for the data forwarding function.

The most common protocol used for communication between the SDN control plane and data plane is OpenFlow.

The OpenFlow enhances the vehicles’ resource management by allowing opportunity for new services and control functions.

The basic SDN architecture consists of three layers, i.e., application layer, control layer, and network layer as shown in Fig. 6.5.

![image-20241116222838187](/images/302/w0605.png)

**Fig. 6.5** SDN controller system

## 6.5 Connected Vehicle Cyber Security

The term cybersecurity refers to the technology, processes, or practices designed to protect networks, computers, programs, and information against cyberattacks.

The cybersecurity protects the system or networks from malicious cyberattacks that interrupt the normal communication in the network or thwart the functioning of the system or steal the sensitive information.

This section discusses about the cybersecurity of the intelligent and autonomous vehicles against different types of attack vulnerabilities, hacking, associated risks, their preventions, and solutions.

We will discuss the different types of security and privacy issues and security requirements in connected vehicles.

Then, we discuss the trust management issues, homomorphic encryption, and blockchain as a security in V2X communication.

### 6.5.1 WAVE Communication Cybersecurity

In intelligent transportation system, the WAVE is used as a communication mode by vehicles to run in the DSRC band.

In the USA, the SAE J2945/1 and J2945/2 standards were defined for safety requirements of on-board systems for V2V communication and DSRC performance requirements for V2V safety awareness, respectively.

The J2945/1 specifies the on-board V2V communications security, functional, and performance requirements for light vehicles.

The J2945/2 specifies DSRC safety requirements including detailed system engineering documentation as well as interoperability for V2V communication safety awareness.

In WAVE, the encryption technique guarantees the essential security requirements such as authenticity, integrity, confidentiality, and anonymity.

In IEEE 1609.2 standard, the security functions such as confidentiality, integrity, availability, authentication, and authorization are delivered through security services.

![IMAGE](/images/302/w0606.jpg)

Fig. 6.6 WAVE protocol stack showing WAVE security services

### 6.5.2 Security and Privacy in V2X Communication

Although V2X communications offer safety and environmental benefits, there are security and privacy concerns.

In V2X communication, privacy and authentication are of utmost importance that provide full security to the vehicular nodes.

- **Authentication**: In V2X communication, if the message or data arrives from unauthorized or unreliable source, it might contain misleading or harmful information, and it should be handled carefully.
- **Integrity**: In V2X, the received message by the vehicular nodes should preserve message integrity for the legitimate messages.
- **Non-repudiation**: It guarantees that the message source vehicle cannot deny any messages transmitted by the sender or by the receiver.
- **Anonymous authentication**: The anonymous authentication protects unauthorized vehicular nodes from gaining access to the system and prevents from unauthorized attackers.
- **Anonymity**: Anonymity of the individual vehicular nodes should be maintained while communicating with other nodes or infrastructure so that his real identity is not disclosed as well as privacy is maintained.
- **Traceability**: Since the V2X communication is accomplished anonymously, it maintains the anonymity.
- **Unlinkability**: The real identity of the vehicular nodes should not be linked with his location or other parameters.
- **Confidentiality**: It is one of the important requirements of privacy for entity trust in ITS system.

---

Table 6.3 Threat, attacks, and solutions in intelligent and autonomous vehicles

| Components                        | Threats                                                                      | Attacks                                      | Solutions                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Vehicular System**              |                                                                              |                                              |                                                                                                |
| **Vehicle**                       | Unauthorized routing table control                                           | Jamming attacks                              | Frequency hopping, multiple radio transceivers                                                 |
|                                   | Exposure of sensitive data                                                   | Sensor impersonation                         | SPECS [30]                                                                                     |
|                                   | Network flooding with false data                                             | Bogus information                            | ECDSA [31]                                                                                     |
|                                   | Illegitimate software updates                                                | Remote access attack                         | FOTA [32]                                                                                      |
|                                   | Damaging sensors                                                             | Physical attack                              | Access control                                                                                 |
| **Vehicle/Driver**                | Privacy leakage of personal data                                             | Malware integration                          | Updating antivirus, sandbox approach [33]                                                      |
|                                   | Privacy leakage of sensitive data                                            | Social engineering attack                    | Encrypted and strong password for message communication                                        |
| **Driver**                        | User identity exposure                                                       | User privacy exposure                        | Holistic approach for data transmission [34]                                                   |
| **Communication Network (Wired)** | Sensitive data exposure                                                      | Eavesdropping between central entity and RSU | Encrypted messages                                                                             |
|                                   | Message exchange during transmission                                         | MITM attacks between central entity and RSU  | Strong cryptographic techniques                                                                |
|                                   | Messages disposal                                                            | Wormhole attacks                             | Packet leash [35], HEAP [36]                                                                   |
| **Information**                   |                                                                              |                                              |                                                                                                |
| **Exchange Message**              | Exposure of sensitive data and user’s personal information                   | Eavesdropping                                | Strong encrypted message for user’s communication                                              |
|                                   | Blocks vehicles from receiving critical messages and access network services | Jamming attacks                              | Assign secure IPs to vehicles while exchanging messages [37], DJAVAN [38]                      |
|                                   | Message modification                                                         | Impersonation attacks                        | Batch verification scheme based on Identity [39]                                               |
|                                   | Message modification with false and compromised messages                     | MITM attacks                                 | Strong cryptographic techniques                                                                |
|                                   | Message manipulation and dropping                                            | Spoofing attacks                             | Multi-antenna receiver against movements, secure location verification [40]                    |
| **Infrastructure**                |                                                                              |                                              |                                                                                                |
| **RSU, Central Entity**           | Leakage of information on back-end wired channel                             | Sybil attacks                                | Autonomous neighbor nodes position verification [41], sybil attack detection [18], RobSAD [42] |
|                                   | Network flooding with compromised messages                                   | False message between central entity and RSU | ECDSA                                                                                          |

## 6.6 Trust Management in V2X Communication

In V2X, trust enhances security, and it is one of the essential components in creating a trusted V2X communication.

The trust between vehicular nodes as well as trust on the received message plays an important role to maintain security in the vehicular communication.

The trust management system in V2X communication enables the vehicular nodes to identify malicious vehicles as well as detect fake messages sent by malicious vehicles.

It can also impose punishment on the malicious nodes by giving low trust score so that they behave honestly and share legitimate information between the vehicles in the future.

There are several trust management schemes (TMS) and trust models in vehicular networks.

The trust management schemes evaluate the trust values of the neighbor vehicles to prevent them from interacting with the malicious vehicles.

The TMS are divided into four categories based on the use of infrastructure and cryptographic measures such as public key infrastructure (PKI).

![image-20241116224124690](/images/302/w0607.png)

Fig 6.7 Different types of trust-based models

## 6.7 Homomorphic Encryption in VANET

- The homomorphic encryption (HE) is a type of encryption that permits sender to encrypt his information using cryptographic keys.
- The HE allows the third party to achieve certain type of mathematical operations on the encrypted information without decrypting it, at the same time maintaining the privacy of the sender’s encrypted information.

![image-20241116225905361](/images/302/w0608.png)

**Fig. 6.8** Types of homomorphic encryption schemes

---

- There are three types of homomorphic encryption based on the mathematical operations on the encrypted data. The three types of homomorphic encryption schemes are shown in Fig. 6.8, and the description is given below.
  - (a) Partially Homomorphic Encryption (PHE): Partially homomorphic encryption comprises schemes that support the evaluation of only one type of mathematical operation on the encrypted message.
  - (b) Somewhat Homomorphic Encryption (SHE): Somewhat homomorphic encryption scheme can evaluate two types or some simple mathematical operations on the encrypted messages.
  - (c) Fully Homomorphic Encryption (FHE): Fully homomorphic encryption scheme supports the evaluation of huge number of different types of operations on the encrypted message with unrestricted number of times.

## 6.8 Blockchain in V2X Communication

Within the last decade, blockchain has gained a lot of attention and recognition from academia, IoT industry, automotive industry, financial technology, health care, real state, etc.

Some of the features of blockchain are they are distributed, decentralized, anonymous, transparent transaction, immutable, traceable, and non-repudiation.

The consensus mechanism in blockchain acts as a security mechanism among untrustworthy vehicles in the trustless vehicular environment.

The vehicular network still suffers from security and privacy issues.

There are many security mechanisms that exist for securing VANET but none of them can provide adequate security and privacy.

Some security techniques are successful in securing the vehicular communication from external attacks; however, they cannot prevent from insider attacks.

---

Table 6.4 Difference between permissioned and permissionless blockchain

| **Permissionless Blockchain**                                                                                | **Permissioned Blockchain**                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Open access                                                                                                  | Authorized access: Presence of access control layer in the BC nodes                                          |
| It focuses on censorship-resistant and anonymous transactions                                                | It focuses on financial regulations                                                                          |
| Nodes are anonymous and fully decentralized validators                                                       | Nodes are preselected and trusted validators                                                                 |
| Permissionless transaction verification                                                                      | Network participants have ability to restrict who can create smart contracts and/or transact on BC network   |
| Almost impossible to reverse transactions once written on-chain                                              | Certain network nodes have control to undo or edit transactions                                              |
| Can take part in consensus mechanism                                                                         | Restriction to take part in consensus mechanism                                                              |
| Highly secure as miners are provided with incentives and use consensus mechanisms such as PoW                | Less secure; collusion of authorized nodes and brute force attack of 2/3rd of private keys for validator set |
| Substantial computation power is required to maintain large distributed network, no privacy for transactions | Scalable computation power and transaction throughput                                                        |
| Source code is open and anyone can propose upgrades                                                          | Network nodes may be contractually bound to implement network upgrades                                       |
| Existing cryptocurrencies, e.g., Bitcoin                                                                     | Enterprise-level systems, business, financial, health care, etc., e.g., Hyperledger Fabric                   |

## 6.9 Safety Standards for IAV

Safety and security of the passengers are the most important aspect of intelligent and autonomous vehicles because it involves the human life.

The drivers and passengers place their safety in the hands of the autonomous vehicles by trusting their security system.

- Some of the existing safety standards for autonomous vehicles are briefly discussed below:
  - (a) International Organization for Standardization—ISO 26262: The ISO 26262 provides a safety life cycle during the course of automotive product development phases such as development, management, production, operation, service, and decommissioning.
  - (b) SAE J3061: The severity, control, and exposure explanations provided by the ASIL hazard classification are only for information purpose but it is not enough for practical safety standards. The Society for Automotive Safety Engineers (SAE) introduced SAE J3061 that delivers specific guidance for assessing the abovementioned hazard classification like severity, control, and exposure for a particular hazard that are suitable for various automakers and vehicle components suppliers.

## 6.10 Summary

This chapter provides in-depth knowledge on types of inter-vehicle communication.

It gives a clear definition of DSRC and cellular vehicular networks and their evolution and adoption in the autonomous vehicular environment.

More specifically, this chapter introduces unique features of the cellular V2X based on 5G technology such as data control software-defined network (SDN), scalable network architecture and topology, edge cloud computing like cloud/fog computing and processing, and application-oriented design as part of smart vehicles.

In addition, it discusses about the cybersecurity of the intelligent and autonomous vehicles against different types of attack vulnerabilities, hacking, associated risks, their preventions, and solutions along with different types of security and privacy issues and security requirements in connected vehicles.

It also includes trust management issues, homomorphic encryption, and blockchain as a security in V2X communication.
