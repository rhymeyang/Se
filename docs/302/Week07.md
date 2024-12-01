# Chapter 7: Internet of Vehicles, Vehicular Social Networks, and Cybersecurity

## Objectives

1. Overview
2. Internet of Vehicles (IoV)
3. Machine Learning in Vehicular Networks
4. Vehicular Social Network
5. Summary

## 7.1 Overview

With the development of Internet of Things (IoT), the conventional vehicles have developed over time and turned to Internet of Vehicles (IoV) with advanced connectivity with Internet, infrastructures, context awareness, sensing capabilities, service provisioning, etc.

The IoV has developed over time from the conventional vehicular networks that connect the smart vehicles to the smart city.

The IoV is a multifaceted vehicular network, where the vehicles consist of various sensors installed that gather data from other vehicles and road infrastructures.

IoV is a special case of IoT, which is developed specially for automotive vehicles. Several applications of IoV are indispensable for vehicles, drivers, pedestrian, smart city infrastructure, etc.

The IoV has been popular among the automotive industry research, and they are attracted to the academic sector as well.

In IoV, a large number of vehicles interconnect with each other and they communicate through heterogeneous wireless communications.

## 7.2 Internet of Vehicles (IoV)

Today Internet plays an important part in our daily activities similar to electricity few decades before.Without Internet, we cannot carry out our daily official activities whether it is a big or small organization.

The Internet has reached almost all the parts of the globe. Many people can access the Internet and get huge benefit from it.

Recently, various electronic devices that are known as “Things” can connect to the Internet and are able to communicate with other various devices providing different services.

The network of such resource constrained heterogeneous things connected to the Internet and exchange information is known as “Internet of Things” in short IoT as shown in Fig. 7.1.

The IoT devices have very low computing power, low memory, and limited battery life.

The IoT has enormous potential to deliver diverse types of services across different fields from industry, business, intelligent transportation system (ITS), social media, health care, and smart cities.

The IoT will have a deep impact on Internet of Vehicles, Internet of drones, etc.

Since every sector has their own smart things connected over the Internet, we can call it as Internet of Everything (IoE).

---

With the advancement of IoT, a new paradigm in the field of ITS has emerged called Internet of Vehicles (IoV).

The IoV has developed over time from the conventional vehicle ad-hoc network (VANET), infrastructures as well as other road transport equipment.

The IoV is a complex vehicular network connected with the Internet with various types of sensors installed that gathers data from other vehicles and road infrastructures.

Different from IoT system, the IoV has its own specific characteristics.

The characteristics of IoV are as follows:

1. Complex communication: The communication in IoV is based on different types of internal and external sensors installed in the vehicles such as LiDAR, radar,GPS, cameras, parking, brake, fuel, and temperature sensors.
2. Dynamic topology: In IoV, various types of sensors and heterogeneous components communicate with each other. The vehicles move at a very high speed on the road that changes the network topology quickly.
3. High scalability: The density of the vehicles is increasing rapidly in suburban location. In smart city, the vehicles are becoming intelligent and autonomous with various types of sensors installed on them. The IoV can handle the ever-growing number of vehicles and extend the network in large-scale environment providing high scalability.
4. Localized communication: The vehilcles exchange messages with neighbor vehicles within their geographical coverage. The exchange message with vehicles within their geographical coverage. In case of IoV, the nodes are not predefined in a particular geographical location, and they move from one location to another. The IoV can help to communicate the vehicles even outside of their geographical location.
5. Energy and processing capacity:As compared with the IoT devices, the vehicles in IoV have an unlimited energy due to installation of huge battery power. The vehicles also have high processing capacity and memory space that can process complex computations. The IoV can handle the issues related with energy consumption and processing capabilities.

![pic](/images/302/w0701.png)

Fig. 7.1 Internet of vehicles

### 7.2.1 IoV Network Model

The network model of IoV can be categorized into three elements. They are cloud network, communication networks, and vehicles.

![pic](/images/302/w0702.png)

Fig. 7.2 IoV network model

#### 7.2.1.1 Cloud Network

The cloud is one of the important network elements in design and development of the IoV. All the vehicles should connect and share information using the cloud through Internet connectivity.

The intelligent cloud infrastructure provides a range of services to the vehicles on the cloud platform such as basic cloud services, smart servers for applications, and information exchange services.

With the increasing number of smart vehicles and various sensor devices installed in the smart vehicles, the traffic information collection, processing, and dissemination in real time will reach petabyte scale.

The intelligent cloud computing can efficiently handle these type of ITS requirements.

The clouds are used for operations such as uploading traffic information, processing the received information, and storing and distributing the information to the respective nodes.

The smart application servers manage and process the traffic safety information, subscription services, and infotainment services.

The servers are responsible for ITS information collection and end-to-end data delivery services to the vehicles.

Some kind of artificial intelligence is used for making realtime intelligent decision for the smart vehicles based on gathered big data traffic information.

#### 7.2.1.2 Communication Network

The communication network is the second network element that securely and reliably connects to the cloud and the smart vehicles.

The communication network acts as a bridge to connect the intelligent cloud network and the smart vehicles for processing ITS-related services in IoV.

There are different wireless access technologies to establish connection for efficient traffic information exchange.

The vehicular communication is composed of heterogeneous networks based on various access technologies for specific type of connection.

In IoV, the different types of vehicular communication such as V2V, V2I, V2N, and V2P based on different access technologies (likeWi-Fi, cellular network, Bluetooth, etc.) play an important role for efficient communication.

In IoV, due to the heterogeneous network environments, various access technologies are used for communication.

The connection of the smart vehicles to the cloud should be efficient.

In IoV, there should be seamless transfer of ongoing connection between different network operators, access networks, or heterogeneous networks.

If the vehicles are registered with different cellular networks, the roaming module will perform seamless roaming procedure that prevent from network disconnection.

#### 7.2.1.3 Vehicles

The vehicles, personal devices, and RSUs are the main elements in IoV that connect with the cloud networks through different communication networks based on various wireless access technologies.

Each vehicles and other network devices has different network preferences and service requirements.

In IoV, the vehicles and other devices utilize the smart cloud services depending on the application requirements.
The different types of applications in IoV are safety, traffic management, and commercial based.

The ITS applications such as safety, real-time traffic information management, navigation, parking are processed in smart cloud infrastructure, and the results are feedback to the vehicles accordingly.

The IoV commercial applications such as insurance, carsharing, infotainment, and other cloud services are based on statistics managed by smart cloud that optimize the operation, reduce the cost, enhance productivity as well as improve the travel experience.

The commercial applications incur some additional charges while providing enhance quality of services.

### 7.2.2 IoV Layered Architecture

![pic](/images/302/w0703.png)

Fig. 7.3 Seven-layer architecture of IoV

Castillo et al. proposed a seven-layered architecture model for IoV that represents actual procedures and functions of each layer in depth as show in Fig. 7.3.

1. Interface layer: The first layer is the user interaction layer that interacts directly with the vehicular nodes.
2. Data acquisition layer: The second layer is the data acquisition layer that collects information from different sources such as in-vehicle, inter-vehicle, sensors, actuators, RSUs, traffic lights, and other smart devices that are relevant to road safety, traffic data, and infotainment.
3. Data preprocessing and filtering layer: Only acquisition of various types of data is not enough it should be preprocessed and filtered.
4. Communication layer: In IoV, there are several types of heterogeneous vehicular communication modes such as 802.11p, Wi-Fi, cellular networks, short-range wireless communications.
5. Management and control layer: In IoV, a virtual network operator is used that is responsible for the management of various network service providers and controlling the data packet flow.
6. Processing layer: The processing layer processes the huge amount of information using different types of cloud computing infrastructures remotely and locally.
7. Security layer: The security layer is the last layer that communicates with all the other layers.

### 7.2.3 Security in IoV

There is always a security threat in new and evolving networks. The new security standards and changing technology make it even worse.

The IoV needs serious attention regarding security threats due to the involvement of human lives.

A minor blunder can cause security failure that may result in severe accidents and takes life of the driver as well as cause damage to the vehicles.

The security in IoV needs to be studied carefully to prevent it from serious attacks.

The security in IoV is of utmost importance that protects the vehicles from potential hackers and attackers.

As the vehicles are connected to the Internet, the vehicles are prone to cyber-attacks that compromise the safety of the vehicles and the driver that might lead to severe accidents.

Several security schemes have been proposed to secure the vehicular communication.

However, the security researchers are successful in hacking the control system of Jeep Cherokee using the wireless connectivity of the vehicle’s entertainment system.

They compromised the CAN bus control functions such as braking systems and steering by using the wireless communications (like Bluetooth and Wi-Fi) as attack vector.

### 7.2.4 IoV Security Requirements and Attacks

The list of security requirements of the IoV is as follows:

1. Authentication or non-repudiation: The vehicle authentication and data authentication are one of the important requirements of IoV.
2. Availability: The availability in IoV ensures that the communication between the vehicles is available in different environmental conditions.
3. Integrity: The integrity of the data in IoV ensures the consistency of data as well as the integrity to verify the information that has not been modified or changed by adding malicious content or data tampering.
4. Privacy: Privacy is one of the concerned issues in the IoV security. The IoV system should verify the data and the identity of the vehicles while providing privacy to the vehicle’s private data.
5. Access control: The vehicles in IoV should only access existing services that they are entitled to access. The access control ensures reliability and security in the IoV system by assigning accountabilities to roles depending on the vehicles.

---

The IoV security attacks corresponding to the security requirements are discussed below.

1. Authentication attacks: In IoV system, several types of attacks hamper the authentication of the vehicles. Some of the authentication attacks such as Sybil attacks, masquerading attacks, and node impersonation attacks create multiple virtual identities for a single vehicle, or the malicious vehicles pretend to have the identity of other vehicles.
2. Availability attacks: In this type of attacks, the attackers disturb the availability of the communication system or make the resources unavailable to the vehicles. Examples of availability attacks are channel interference attack, denial-of-service (DoS) attack, distributed DoS (DDoS) attack, greedy attack, etc.
3. Integrity attacks: In the IoV system, the integrity attack occurs when the malicious vehicles add false information or modify the original information exchanged between the vehicular entities. Some of the examples of integrity attacks are man-in-the-middle attack (MITM), session hijacking attacks, trust attacks, illusion attack, timing attack, message suppression attacks, etc.
4. Privacy attacks: The vehicles must be able maintain their privacy at any cost because if the identity of the vehicle is revealed, it finally leads to the identity of the vehicle owner. The attacker might gain control over the vehicle as well as the vehicle owner that might cause severe human and economic damage. One of the privacy attacks is eavesdropping attack.
5. Access control attacks: In IoV, each vehicle must be able to access authorized services only such as Internet, messaging, and collaborative network games. Few examples of access control attacks are dictionary attack, brute force attacks, etc.

### 7.2.5 Challenges in IoV

Some of the selected critical challenges in IoV are listed below.

1. Delay Constraints: In IoV applications domain, the delay plays a very crucial role in delivering the safety-related messages. It requires a very strict delay constraint, where the delay should be maintained extremely low at any cost.
2. Lack of standards: A proper communication standards in IoV system need to be developed to achieve a seamless communication and information exchange environment that allows transparent integration with existing standards. The lack of proper and open standard creates problem in further progress, improvement, and development of IoV system.
3. Network connectivity: In remote areas and countryside, there still exists poor and unstable network connectivity. The network connectivity is the backbone of the IoV system and this type of challenges in network connectivity should be resolved and improved as soon as possible.
4. Fault tolerance: The IoV system must be fault tolerant, and the communication network should be highly reliable that provides a real-time communication even in the presence of malicious vehicles.
5. Interoperability: Interoperability is one of the pivotal challenging issues for the interconnection of vehicles in IoV system.
6. Security and privacy: Security and privacy in IoV system is of paramount importance as any system disaster directly affects the user safety. Security and privacy is one of the main challenging issues without which it is difficult to implement the IoV system.

### 7.2.6 IoV Applications

![pic](/images/302/w0704.png)
Fig. 7.4 Types of IoV applications

---

![pic](/images/302/w0705.png)
Fig. 7.5 Types of ML in vehicular networks

### 7.3.1 Types of Machine Learning Techniques

1. Supervised learning: The supervised machine learning is based on direct supervision of the operation and its objective is to measure the data range and make forecasts of unknown, unavailable and future data based on labeled sample data.
2. Unsupervised learning: The unsupervised machine learning is based on unlabeled data that aims to find efficient representation of the data samples (extracting useful perceptions and detecting patterns) that are explained by hidden variables, i.e., the desired results are unknown and need to be defined.
3. Semi-supervised learning: The semi-supervised machine learning method lies in between the supervised and unsupervised machine learning. It exploits the limited set of labeled sample data to train itself with limited unlabeled data (pseudo-labeled) and then combines the labeled and pseudo-labeled data to create an algorithm that represents the characteristics of supervised and unsupervised learning. The semi-supervised learning is based on classification method to detect the data asset and then clustering method to group it into definite parts.
4. Reinforcement learning: The reinforcement learning is based on exploration and exploitation technique with connected sequence of trial and error of incoming data with reward function that develops a self-sustained intelligence system.
5. Deep learning: The deep learning is a subfield of machine learning technique based on artificial neural network that uses multiple layers to extract high-level features from the input data. It resembles the neural networks that consist of multiple layers of neurons.

### 7.3.2 Type of ML in Vehicular Networks

![pic](/images/302/w0706.png)

Fig. 7.6 Machine learning techniques in vehicular networks

## 7.3 Machine Learning in Vehicular Networks

### 7.3.3 Cybersecurity Solutions Based on ML in Vehicular Networks

![pic](/images/302/w0707.png)

Fig. 7.7 Machine learning and security

### 7.3.4 Attacks on Machine Learning/Deep Learning

The attacks on ML can be occured in two ways as follows:

1. **Attacks during training time:** In the first phase of ML, i.e., training phase, attacks may arise when training data is collected and fed to the ML model.
   If the user “contaminates” the training data intentionally by submitting inaccurate input data, it can cause the ML algorithm to malfunction or crash at the time of inference.
   To protect the attacker from modifying the ML data outputs, a standard application like anomaly detection can be used to train data sent by the user.
2. **Attacks during inference time:** In second phase ofML, i.e., inference phase, the privacy of the user must be maintained by protecting the user’s private data. Let us consider an insider attacker situation where the user behaves maliciously.
   In this case, the user himself employs an attack called adversarial examples, where he feds legitimate input data to the ML model and the ML misinterprets the data. As a result, it causes serious concerns, such as misinterpreting the road signal during critical circumstances.

### 7.3.4 Attacks on Machine Learning/Deep Learning

- 1. V2V Offloading: In V2V offloading, the distributed vehicles offload their computation task to the neighboring vehicles that has high and surplus computing power and resources.
  - The individual vehicles that need to offload the tasks (i.e., VT) discover the candidate service vehicles (i.e., VS) that have high computing power within its communication range while moving in the same direction.

![pic](/images/302/w0708.png)

## Fig. 7.8 Task offloading modes in vehicular networks

- 2.V2I Offloading: In V2I offloading, the vehicles that need to offload the task select the infrastructures or RSUs with superior computing power in the absence of neighbor vehicles in its periphery.
  - The infrastructures have high computing capability but the vehicles move with high mobility.
  - The vehicles will have very short interaction with the infrastructures.
  - This might affect the QoS provided by the infrastructures to the moving vehicles.
- 3. P2I2VOffloading: In this offloading method, the pedestrians on the road offload their computation tasks to other highly resourced vehicles by selecting the infrastructures like RSUs.
  - The pedestrians select the nearby infrastructures as a medium to offload their task and the infrastructures send them to vehicles with suitable computing resources.
  - The processed tasks are collected back by the infrastructures and then the tasks are feed back to the requested originator.
  - In this offloading mode, the infrastructures have better global information regarding the neighbor vehicles but it has higher signaling overhead.

## 7.4 Vehicular Social Network

The vehicular social network (VSN) is the integration of social networks and theInternet of Vehicles (IoVs) that builds a social relationship among the vehicles as well as the drivers of the vehicles. It is also known as Social Internet of Vehicles (SIoV).

![pic](/images/302/w0709.png)

Fig. 7.10 VSN architecture

### 7.4.1 Applications of VSN

![pic](/images/302/w0710.png)
Fig. 7.11 Different applications of VSN

### 7.4.2 Security Issues

Some of the threats in VSN with specific emphasis on the social traits of the vehicles and drivers are described below.

1. Malware: The malware is introduced in the network through the external software unit or the firmware updates. In VSN, the malware can spread in the network when there is software updates or firmware updates in vehicular components from other unknown or malicious vehicles.
2. Sybil attack: In VSN, the Sybil attacks create several virtual identities for a single vehicle and pretend to have the identity of other vehicle. It is very difficult to identify the information received by the recipient vehicle from the real vehicle.
3. DoS attack: The DoS attack in VSN creates severe damage to the vehicular system, as the vehicular elements cannot process the real-time traffic information.
4. Impersonation attack: Similarly, the impersonation attack has severe impact on the VSN as the malicious vehicles steal the social identity of the neighbor vehicles or the drivers. The malicious vehicles then disseminate the security information under that vehicle’s identity.

### 7.4.2 Security Issues

The VSN is based on the characteristics of both the vehicular networks and the social networks of the drivers.

The VSN has fundamental relationship between the vehicles, drivers, and other smart devices in the smart city.

Location privacy is one of the important privacy issues in vehicular networks.

The vehicles exchange critical messages between other vehicles and infrastructures using social networks that might contain the vehicles important information such as speed, position, and direction.

This information can be linked with the vehicles as well as the driver’s identity despite their strong privacy settings.

The malicious vehicles might eavesdrop and obtain information about its social behaviors via wireless communication between the vehicles, and at the same time, it can deduce the location information through online social networks based on geo-tagging of messages.

The malicious vehicles can easily track the location and their sensitive information and then infer the detailed social relationship and activities of the driver.

The malicious vehicles might stalk, create digital record, or publish the private information in vehicular social network.

In VSN, the privacy can be maintained by encrypting all the information that the vehicles disseminate or post in social networks.

It is also necessary to protect the link privacy, i.e., the social relationship between other vehicles.

In social networking, it is possible to deduce global relationship information by reverting a limited number of user accounts and identify the anonymous vehicles in social networks graph.

Thus, the objective of link privacy is to hide the type and existence of the social relationships.

## 7.5 Summary

VSN is the integration of social networks and the IoV that constructs a social relationship between the vehicles and the drivers.

The VSN is capable of social integration of the vehicular communication networks, human factors, and smart devices in autonomous ways.

We present several useful applications of VSN concentrating on the safety-related, infotainment, and multimedia applications based on drivers’ interest.

The frequent mobility patterns of the vehicles help to induce a forecast about the future movement and trajectory information of the vehicles.

While the emerging advanced mobility, such as IoV and VSN, provides a significant contribution in the transportation field, at the same time it possesses a variety of new types of threats.

We discuss several types of machine learning techniques in IoV such as supervised, unsupervised, semi-supervised, reinforcement, and deep learning.

We also discussed on how machine learning can be used as a cybersecurity solutions in vehicular networks.

We provided few detailed applications of machine learning techniques in IoV.

We also mentioned about the VSN applications and its security issues.
