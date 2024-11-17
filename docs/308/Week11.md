Cybersecurity System Audits

# Chapter 5 – Business Resilience

## Objectives

- Networked Applications
- Types of Disasters
- Business Continuity Planning Process
- Business Impact Analysis
- Recovery Procedures
- Restoration Procedures
- Types of tests
- Best Practices
- RTO and RPO
- Types of sites
- Server Clusters

## Networked Applications and Client-Server Model

- **Networked Applications**:
  - Business applications are typically networked, allowing multiple users across locations to access centrally installed applications.
  - Data networks enable communication between central servers and user workstations, facilitating client-server and web-based applications.
- **Client-Server Model**:
  - This model includes a central application server, database servers, and user workstations.
  - The server handles requests from workstations, while the workstation manages user interactions and displays information.
  - Users can input, view, or edit information through the application.
  - The workstation processes inputs locally and sends them to the server, which updates and stores the data.

## Web-Based Applications and Middleware Components

- **Web-Based Applications**:
  - These applications are favored over client-server due to central business logic and lightweight data requirements.
  - Business logic resides on central servers; users only need browsers, which reduces maintenance.
  - Web-based applications are universally accessible across different operating systems, like Windows, macOS, and Linux.
- **Middleware**:
  - Middleware acts as a bridge, coordinating processes between servers and managing complex transactions.
  - **Types of middleware include**:
    - **TP Monitors**: Manages business transactions across multiple servers.
    - **RPC Gateways**: Facilitates communications between components using remote procedure calls.
    - **ORB Gateways**: Manages transactions across distributed systems using CORBA or COM.

## Challenges of Client-Server Applications

- **Network Performance Issues**:
  - Client-server applications often create high data loads, slowing down the network, especially with multiple users.
  - Example: A single database query may return thousands of records to a workstation, consuming bandwidth and reducing efficiency.
  - High usage across workstations can lead to significant lag and application performance issues.
- **Workstation Software Updates**:
  - Synchronizing software updates across all workstations is challenging.
  - Updates must be applied simultaneously to maintain consistency, but some workstations may be offline or unavailable.
  - This inconsistency can lead to application malfunctions or incompatibility issues for users with outdated software versions.
- **Limitations and Shift to Web-Based Solutions**:
  - Due to these challenges, many organizations found client-server applications unsatisfactory.
  - The rise of the World Wide Web offered a more scalable and efficient alternative for multi-user applications.

## Advantages of Web-Based Applications

- **Centralized Business Logic**:
  - All business logic is stored on one or more centralized servers.
  - No need for workstation updates
- **Efficient Display Logic**:
  - User interfaces, like forms and lists, are created with HTML, a simple and universal markup language.
  - Reduces application complexity on workstations.
- **Low Network Demand**:
  - Web applications minimize data load, sending only essential display data to workstations.
  - Reduces bandwidth usage
- **Minimal Updates for Workstations**:
  - Workstations require only browser updates
  - Simplifies maintenance and ensures consistency across user devices.
- **Broad Compatibility**:
  - Runs on various operating systems (e.g., Unix, Windows, macOS, Chrome OS, Linux).
  - Offers flexibility and accessibility, supporting a range of devices without specific software requirements.

## Understanding Business Resilience in IT Systems

- **Definition of Business Resilience**:
  - Focuses on the stability and continuity of IT systems and business applications that support critical business processes.
  - Ensures the ongoing functionality and survival of an organization during major disasters or disruptions.
- **Importance of Resilience in the Digital Era**:
  - With digital transformation (DX), business processes are increasingly dependent on information technology.
  - Enhancing IT resilience is essential to maintain organizational operations, minimize losses, and sustain productivity.
- **Core Elements of Business Resilience**:
  - Business Continuity Planning (BCP): Proactively addresses potential disruptions to reduce risk and ensure critical functions continue.
  - Disaster Recovery Planning (DRP): Outlines steps to recover IT systems and restore business operations after a disaster.

## Understanding Disasters in Business Continuity

- **Definition of Disasters**:
  - Disasters are unexpected, unplanned events that disrupt business operations, ranging from minor interruptions to complete operational shutdowns.
  - The impact of a disaster can be confined to a small area or spread over a wide region, affecting entire networks or specific functions within an organization.
- **Classification of Disasters**:
  - **Natural Disasters**: Events originating from natural phenomena that occur without human intervention.
  - **Human-Made Disasters**: Incidents caused directly or indirectly by human activity.

Understanding and classifying disasters aids in creating effective Business Continuity Planning (BCP) strategies that prepare organizations for various disaster scenarios, enhancing resilience and minimizing recovery time.

## Types of Disasters in Business Continuity Planning

- **Natural Disasters**:
  - These are environmental phenomena with the potential to cause widespread damage to infrastructure, resources, and personnel. They include events occurring naturally in, on, or above the earth.
- **Examples of Natural Disasters**:
  - Earthquakes: Sudden ground movements that may cause landslides, avalanches, and flooding.
  - Volcanoes: Eruptions that release magma, ash, and pyroclastic flows, impacting vast regions.
  - Landslides: Downhill earth movements that bury structures and reroute waterways.

## Specific Types of Natural Disasters

- **Avalanches**: Rapid snow and debris flows, which can disrupt roads, utilities, and business sites.
- **Wildfires**: Natural fires in forests or grasslands that damage structures, equipment, and power lines.
- **Tropical Cyclones**: Strong storms (e.g., hurricanes) with winds up to 190 mph, causing flooding, wind damage, and power outages.
- **Tornadoes**: High-speed rotating winds reaching over 300 mph, capable of destroying buildings and infrastructure.
- **Windstorms**: High-velocity winds causing power outages and structural damage, albeit less intense than cyclones.
- **Lightning**: Electrical storms damaging power systems and triggering fires.
- **Ice Storms**: Freezing rain that accumulates on surfaces, collapsing power lines under weight.
- **Hail**: Large ice particles causing property damage (e.g., vehicles, buildings).
- **Flooding**: Overflowing water sources damaging infrastructure and disrupting operations.
- **Tsunamis**: Large ocean waves, often from seismic activity, that devastate coastlines (e.g., 2011 Japan tsunami).

## Understanding Human-Made Disasters

- **Definition**:
  - Human-made disasters result from direct or indirect human actions, leading to disruptions in business operations.
  - These disasters cause localized or widespread damage, leading to potential long-term interruptions.
- **Types of Human-Made Disasters**:
  - **Civil Disturbances**: Includes protests, riots, strikes, looting, and related actions like curfews or lockdowns, disrupting normal business activities.
  - **Utility Outages**: Failures in essential services (electricity, water, communication) due to equipment malfunctions, sabotage, or natural events.
  - **Service Outages**: IT and software disruptions from hardware failures, software bugs, or misconfigurations, affecting online services.
  - **Materials Shortages**: Supply interruptions for essentials (food, fuel), affecting business continuity; reminiscent of past events like the 1970s fuel shortage.
  - **Fires**: Unlike natural wildfires, human-caused fires impact buildings, equipment, and resources within businesses or homes.

## page 12

##

##

/images/308/w1101.png

##

##

##
