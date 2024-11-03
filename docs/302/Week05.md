# Chapter 5: AUTOSAR Embedded Security in Vehicles

## OBJECTIVES

- 5.1 Overview
- 5.2 Introduction
- 5.3 Threat Models for the Automotive Domain
- 5.4 Applying the Adapted Threat Models to the Automotive Domain
- 5.5 Results
- 5.6 Conclusion

## 5.1 OVERVIEW

We live in a world that is getting more interconnected by each day, and we are witnessing a global change where all the devices in our surroundings are becoming “smart” and connected to the Internet.

The automotive industry is also a part of this change.

Today’s vehicles have more than 150 small computers, embedded control units (ECUs), and multiple connection points to the Internet which makes them vulnerable to various online threats.

Recent attacks on connected vehicles have all been results of security vulnerabilities that could have been avoided if appropriate risk assessment methods were in place during software development.

## 5.2 INTRODUCTION

The world as we know it is changing and many of the devices we use daily are becoming “smart.”

This buzzword is appearing in everything from smart grids to smart homes with the smart appliances therein.

The main aspect of these devices is their connection to the Internet, and because of it, previously local vulnerabilities are now widely exposed.

More than 100 embedded ECUs could be integrated in advanced vehicles.

A high-end car may now have more than 100 million lines of code [1], as well as multiple connections to external networks including the Internet.

All this code has to be properly developed and tested in order to ensure the safety and security of the vehicle. We will refer to these types of cars as connected cars.

Even though the connection to the outside world enables many new services, it also exposes the car and its software to a potential remote attack.

There have already been a number of successful cyberattacks on connected vehicles such as the attacks on Jeep Cherokee, Tesla S model, Nissan electric car, and Chevrolet Corvette.

### 5.2.1.1 TARA

**The threat agent risk assessment (TARA)** method was developed by security experts from **Intel Security** and is based on three groups of collected data, denoted as libraries:

- **Threat Agent Library (TAL)**
  - lists all relevant threat agents and their corresponding attributes.
- **Methods and Objectives Library (MOL)**
  - lists methods that each threat agent might employ along with a corresponding impact level.
- **Common Exposure Library (CEL)**
  - lists areas of the greatest exposure and vulnerability.

These libraries are populated internally inside a company by their security expert team.

They are based on incident reports, breach reports, security measures, and other confidential information that is required to create the libraries.

By using the information from the libraries, security experts can determine which threat agent attributes are needed in order for a threat agent to pose a threat to the company and its assets.

### 5.2.1.2 STRIDE

The **STRIDE** method was originally developed by **Microsoft**.

The method allows threat identification in the **design phase** of any **software** or **hardware** and as such gives insight into potential attack scenarios. There are two variants of the STRIDE method: **per-interaction** and **per-element**.

In order to apply the method, security experts first need to create **data flow diagrams (DFD)** of the system that needs to be analyzed.

The DFDs present the communication patterns between the components under investigation.

Afterward, the method examines these diagrams in order to detect possible threats to the system. The threats are divided into six different categories: **spoofing, tampering, repudiation, information disclosure, denial of service, elevation of privileges**.

The inspection of DFD diagrams can be done manually (brainstorming sessions) or by using the Microsoft Threat modeling tool which uses the STRIDE per-interaction variant.

### 5.2.1.3 AUTOSAR

- **AUTomotive Open System Architecture (AUTOSAR)** was founded in 2003, with the goal to develop an architecture, independent of the underlying ECU hardware that the automotive industry can use to reduce the increasing complexity of software in modern vehicles.
- It is the **de facto standard** for the automotive software today, and 80% of global production is based on this standard.
- AUTOSAR makes an **abstract layer** of the underlying **hardware**, so that the applications written on top of AUTOSAR are independent from the actual supplier of the ECU hardware.
- The AUTOSAR standard defines **security mechanisms** that can be used by the software modules implemented into the vehicle system.
- It further specifies **interfaces** and **procedures** to provide **Secure On-Board Communication**, and the exact implementation is left for the OEMs to decide on.
- OEMs choose the cryptographic algorithms and encryption techniques which they want to implement and use in the vehicle system.
- The **three main security mechanisms** in the AUTOSAR are:
  - Crypto Service Manager (CSM),
  - Crypto Abstraction Library (CAL), and
  - Secure On-Board Communication (SecOC).

#### A. SOFTWARE ARCHITECTURE

- The AUTOSAR standard documentation guides companies and the automotive industry in designing and implementing software in their vehicles.
- By adopting the AUTOSAR standard, companies can develop software solutions that are independent of the hardware, and this software can run on any ECU in the vehicle.
- This is the reason why the AUTOSAR platform is also called a hardware independent architecture.

![image-20241026230042482](/images/302/w0501.png)

Fig. 5.1 AUTOSAR hardware-independent architecture.

---

- AUTOSAR provides detailed specification for:
  - Software architecture
  - Software development methodology
  - Standardized application interfaces (APIs).
- Figure 5.2 shows **the three-layered architecture of the AUTOSAR standard**: **application layer**, **run-time environment (RTE) layer**, and the **basic software (BSW) layer** that consists of four sublayers.
- Each of the sublayers offers different services as shown in Fig. 5.3.
- The highest layer is the **application layer**, which contains the **software components (SWCs)**.
  - AUTOSAR application (e.g., ABS or the seat heating control) consists of several SWCs, which provide the core functions that are used by the AUTOSAR application.

![image-20241026230408468](/images/302/w0502.png)

**Fig. 5.2** Layered AUTOSAR architecture [11]

![image-20241026230428589](/images/302/w0503.png)

**Fig. 5.3** Each sublayer of the BSW layer offers different services [11]

![image-20241026230603960](/images/302/w0504.png)

**Fig. 5.4** AUTOSAR software architecture—components and interfaces [11]

#### B. SECURITY FEATURES

- The AUTOSAR standard defines important security mechanisms that are used by the SWCs and other software modules implemented into the vehicle system.
- It further specifies **interfaces** and **procedures** for ensuring **Secure On-Board Communication** while the rest of the security mechanisms and implementations are left for the OEMs to decide on.
- OEMs choose the cryptographic algorithms and encryption techniques that they want to implement and use in the vehicle system.
- The three main security mechanisms in the AUTOSAR are:
  - CSM - Crypto Service Manager
  - CAL - Crypto Abstraction Library
  - SecOC - Secure On-Board Communication.

#### C. CSM AND CAL

- AUTOSAR specifies **two crypto modules**:
  - The first one is the **Crypto Service Manager (CSM)** which is located in the service layer of the BSW and provides services for higher-level applications.
    - CSM allows different applications to use the same service to access different cryptographic primitives (cryptographic algorithms).
    - One application may need access to an MD5 digest while another application needs to compute a SHA1digest.
    - This service of the CSM module can be accessed only locally inside that ECU, while any access between different ECUs needs to be specified and implemented as a separate mechanism, as this is not defined by AUTOSAR.
  - The second crypto module is the **Crypto Abstraction Layer (CAL)** which is a static library with a very similar function as the CSM.
    - The library is used to provide cryptographic functionality directly by bypassing the run-time environment (RTE).

---

- The following cryptographic functions may be implemented by the CSM or CAL:
  - **Hash** calculations
  - Generation and verification of **message authentication codes (MAC)**
  - Random number generation
  - Encryption and decryption using **symmetrical** algorithms
  - Encryption and decryption using **asymmetrical** algorithms
  - Generation and verification of **digital signatures**
  - Key management operations

![image-20241026231231376](/images/302/w0505.png)

**Fig. 5.5** Two layers of crypto modules [11]

---

- Fig. 5.5 shows, these two crypto modules are subdivided into two layers: **interface layer** and **implementation layer**.
- The interface layer is completely standardized by the AUTOSAR while the cryptographic algorithms in the implementation layer are defined by the implementer.
- The CSM implementation layer is called **Cryptographic Primitives Module (CRY)** while the implementation layer for CAL is called **Cryptographic Primitives Library (CPL)**.
- These two modules are used to implement cryptographic algorithms (routines) that will be used by software components (SWCs) in the application layer and modules in the BSW layer.

![image-20241026231413972](/images/302/w0506.png)

**Fig. 5.6** Differences between CAL and CSM

#### D. SECURE ON-BOARD COMMUNICATION (SecOC)

- The SecOC module provides an **authentication mechanism** for critical data.
- It is used in all ECUs that require secure communication.
- This module is specified for the first time in Release 4.2 of the AUTOSAR standard specification.
- The module provides a **security mechanism** that is easy to implement into the existing communication technology, is not resource-heavy, and as such can be used for legacy systems as well.
- The specification of the module mostly relies on the **assumption** that **symmetric authentication approaches** will be used with **message authentication code (MAC)**, but it also supports asymmetric authentication approaches.
- The symmetric authentication approach is faster and less complex and achieves the same level of security but with smaller authentication keys compared to the asymmetric approach.

---

![image-20241026231625983](/images/302/w0507.png)

**Fig. 5.7** Integration of the SecOC basic software module [12]

![image-20241026231652334](/images/302/w0508.png)

**Fig. 5.8** Contents of the secured I-PDU [12]

## 5.3 THREAT MODELS FOR THE AUTOMOTIVE DOMAIN

### 5.3.1 Adaptation of TARA

- In order to adapt and apply the TARA method to the automotive industry in general and the connected car in particular, certain modifications were made to the method.
- The method is intended to be conducted internally inside one single car manufacturer company.
- The main reason for this is the **sensitivity** and **confidentiality** of the information that is needed in order to perform the method successfully.
- The other reason is the knowledge and the experience of the security experts that work for that specific car manufacturer company.
- These factors are very important in order to get accurate and reliable results.

---

### TAL Library

- This library lists the names of all the threat agents that are relevant to the automotive industry along with their corresponding attributes.
- The following changes are made compared to the original TAL library [19] provided by Intel.
  - **Ten threat agent profiles** are removed, and **eight new profiles** are added:
    - outward sympathizer,
    - hacktivist,
    - cyber vandal,
    - online social hacker,
    - script kiddies,
    - organized crime,
    - cyber terrorist, and
    - car thief.
  - Attributes assigned to one threat agent from the original TAL library were slightly modified.

---

### MOL Library

- This library provides information about threat agent objectives, likely methods they might use, and the impact that their actions would have on the automotive company and the assets in the connected car.
- The following changes were made to reflect the automotive domain:
  - The sections “Acts” and “Limits” are removed and replaced by the **“Method”** section with the following values:
    - theft of PII and business data,
    - denial of service,
    - intentional manipulation,
    - unauthorized physical access and
    - “unpredictable.”
  - The levels of the “Impact” attribute are replaced with new **impact levels**:
    - reputation damage,
    - privacy violation,
    - loss of financial assets/car,
    - traffic accidents, and
    - injured passengers.

### 5.3.2 ADAPTATION OF STRIDE

The main part of the **adaptation** of STRIDE is reflected in the template of the MS Threat modeling tool, since the template provides the different elements to create DFD diagrams.

Each **element** is associated with **a specific list of threats**, and based on **the type of interaction** between the elements in the DFD diagram, the tool generates **a threat report**.

We use the template developed by the NCC Group with some additions due to the higher abstraction level used here; three new elements are added that represent the underlying architecture that is based on the AUTOSAR standard.

The main reason why this method needs to be adapted is because the method itself was created for the computer industry.

The MS Threat modeling tool is also intended to model DFD diagrams for environments such as Windows and Linux operating systems or different applications inside these systems (i.e., web applications, client–server environments).

## 5.4 APPLYING THE ADAPTED THREAT MODELS TO THE AUTOMOTIVE DOMAIN

### 5.4.1 TARA: Methodology and Tools

1. Measure current threat agent risks.
2. Distinguish threat agents with elevated risk level.
3. Derive primary objectives of those threat agents.
4. Identify methods likely to manifest.
5. Determine the most important collective exposures.
6. Align strategy to target the most significant exposures.

### 5.4.1 TARA: Threat Agent Library (TAL)

The following is a list of attributes with a short explanation.

1. **Distinguish** threat agents with **elevated risk level**.
2. **Derive primary objectives** of those threat agents.
3. **Identify methods** likely to manifest.
4. Determine the most important **collective exposures**.
5. Align strategy to target the most significant exposures.

- 十天后,这种病的症状显现出来。
  - The symptoms of the disease **manifested** themselves ten days later.

---

The following is a list of attributes with a short explanation.

- **Intent** describes whether the agent’s intent is to cause harm or not.
- **Access** describes what type of access the agent has to the target:
  - internal (insider) or
  - external (no access to internal data or resources).
- **Outcome** is an attribute that describes the final results of the agent’s actions.
- **Resource** attribute represents the type of resources the agent has access to.
- **Skills** attribute describes the level of skill that the agent has.
- **Motivations** are a newly introduced attribute that explains the motivation behind an action conducted by each of the threat agents.
- **Visibility** describes the extent to which the agent wants to hide or reveal their identity.
- **Limits** attribute describes the extent to which the agent would go in order to accomplish their goals.
- **Objective** describes the **primary action** the agent will take in order to achieve their goal.

---

### 5.4.1 TARA: Methods and Objectives Library (MOL)

![image-20241026232644056](/images/302/w0509.png)

**Fig. 5.9** MOL Library

---

### 5.4.1 TARA: Common Exposure Library (CEL)

![image-20241026232750016](/images/302/w0510.png)

**Fig. 5.10** CEL Library

### 5.4.2 STRIDE

#### Methodology and tools.

- The **STRIDE analysis** is performed on the **AUTOSAR platform** provided by the company **Arccore**.
  1. First, analysis of the interior lights application was conducted, so that the **DFD diagrams** could be derived.
  2. These were then created by the Microsoft Threat modeling tool by using the NCC Group template.
     - These steps were conducted with the support of domain experts from Arccore and the NCC Group.
  3. Finally, the threat report was generated and examined in order to exclude false positives.

#### The Interior Light Application

- The application consists of seven different software components (SWCs), such as the light actuator and the door sensor SWC, each providing a specific function for the interior light application.
- The application receives input data from the sensors (door sensor SWC) that notify the application if the vehicle door is open/closed and if the car trunk is open/closed.
- After analyzing the input data from the sensors, the application sends signals to the actuators (light actuator SWC) that control the interior light of the vehicle and notifies them if the lights should be turned on/off.
- The information is exchanged using the CAN network.

---

Data Flow Diagrams

![image-20241026233039542](/images/302/w0511.png)

**Fig. 5.11** DFD created with the MS Threat modeling tool and the NCC Group template

## 5.5 RESULTS

### 5.5.1 TARA

![image-20241026233154414](/images/302/w0512.png)

**Fig. 5.12** Risk comparison of different threat agent profiles

![image-20241026233240057](/images/302/w0513.png)

**Fig. 5.13** DFD created with the MS Threat modeling tool and the NCC Group template

### 5.5.2 STRIDE

- After the MS Threat modeling tool analyzed the DFD diagram for the Interior light application, it generated a threat report with 74 different potential threats, where at least one threat from each STRIDE category was found.
- It also found 17 threats that were not applicable to the application.
- To ensure that the results of the threat modeling process are credible and should be further analyzed by experts, we verified the found threats with an actual hardware implementation of the application.
- Testing was performed on an AUTOSAR hardware board (with the interior light application) connected to a small CAN network and a computer to analyze the communication and the exchanged packets (Fig. 5.13).
- By conducting this validation process, we could investigate whether the threats generated by the threat modeling tool are applicable to the actual AUTOSAR software application, and as such, to a real vehicle system.
- The validation process was conducted successfully, and the threats discovered by the threat modeling process were confirmed.
- Hence, the adapted STRIDE method can be applied to other systems in the automotive domain and as such become a valuable tool for automotive security experts.

### 5.5.4 DISCUSSION AND FUTURE WORK

The **TARA method** is rather new with little supporting documentation except what is published by **Intel Security**.

For that reason, additional work had to be conducted in order to successfully adapt and apply the method to the automotive industry.

- The method ranked the **sensationalist and the OBD port** as having the highest risk in their respective category.
  - The former mirrors well the majority of the attacks that have been widely documented and discussed.
  - These were conducted by different researchers and experts that wanted to show how insecure the vehicles really are.
  * The final goal of the researchers was maybe not to get famous and hit the headlines of all news portals in the world, but it was definitely the outcome of their research and as such has to be taken into consideration.
  - The OBD port is shown to have the highest risk potential, and even though it requires physical access there are some cases where it can be exploited remotely.
  - It is also the oldest interface in the CEL library and accessing the OBD port gives the attacker almost full access to the CAN network.

---

- Unlike the **TARA method**, **STRIDE** has been used before in the automotive industry.
- However, the method in this chapter was conducted by using the **MS Threat modeling tool** along with the **template designed** for the automotive industry, and this was not done before.
- The template used with the MS Threat modeling tool has shown to be very useful and adaptable, where further work may allow this template to be used on even more low-level software applications.
- The results generated by the tool described in this chapter are maybe not completely comprehensive but they clearly show the extent of vulnerabilities of an AUTOSAR-based software application.
- Even though the application in question, the vehicle’s interior lights, does not seem like something worth analyzing, one can just imagine driving down the highway in the middle of the night when suddenly the lights in the car start going on/off every second—it could distract the driver or even cause an accident.

## 4.3 IN-VEHICLE COMMUNICATION

- The in-vehicle communication refers to the intra vehicle communication where all the internal components like telematics, sensors, and actuators communicate with each other using different communication mediums like standard bus system.
- The in-vehicle communication occurs within the internal vehicle communication network where the ECUs intercommunicate with other electronic subsystems.
- The ECUs are connected within vehicle bus systems through specialized internal communication networks.
- Most ECUs are connected to one or more bus networks for monitoring and controlling the vehicles.
- Some ECUs are connected to external controls, such as digital equipment, infotainment, and navigation systems via a gateway system.
- The central gateway-based architecture links the entire IVN with a central gateway and provides smooth connectivity between heterogeneous network protocols.

## 5.6 CONCLUSION

- In this chapter, we adapted two threat modeling methods from the computer industry in order to better fit the needs of the automotive industry.
- The next step was to apply these methods to the connected car and the underlying software architecture, which in turn generated valuable results that were carefully validated.
- The entire work was done with the support of domain experts from different companies that have extensive knowledge in this field.
- **TARA** was used to provide a **high-level overview of threats** in the area of connected vehicles while **STRIDE** was used to **evaluate a specific functionality of the vehicle**.
- The three libraries created by the TARA method and the template used by the STRIDE method would be a good starting point for any future application.
- Finally, it is important to learn from the mistakes made by the computer industry, but it is also vital to recognize which threat modeling methods and which security mechanisms from the computer industry can be applied to the automotive industry.
