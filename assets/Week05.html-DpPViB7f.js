import{_ as t,c as i,a,o}from"./app--9MUFjWI.js";const n="/Se/images/302/w0501.png",r="/Se/images/302/w0502.png",s="/Se/images/302/w0503.png",l="/Se/images/302/w0504.png",h="/Se/images/302/w0505.png",c="/Se/images/302/w0506.png",d="/Se/images/302/w0507.png",g="/Se/images/302/w0508.png",p="/Se/images/302/w0509.png",m="/Se/images/302/w0510.png",u="/Se/images/302/w0511.png",f="/Se/images/302/w0512.png",y="/Se/images/302/w0513.png",b={};function v(w,e){return o(),i("div",null,e[0]||(e[0]=[a('<h1 id="chapter-5-autosar-embedded-security-in-vehicles" tabindex="-1"><a class="header-anchor" href="#chapter-5-autosar-embedded-security-in-vehicles"><span>Chapter 5: AUTOSAR Embedded Security in Vehicles</span></a></h1><h2 id="objectives" tabindex="-1"><a class="header-anchor" href="#objectives"><span>OBJECTIVES</span></a></h2><ul><li>5.1 Overview</li><li>5.2 Introduction</li><li>5.3 Threat Models for the Automotive Domain</li><li>5.4 Applying the Adapted Threat Models to the Automotive Domain</li><li>5.5 Results</li><li>5.6 Conclusion</li></ul><h2 id="_5-1-overview" tabindex="-1"><a class="header-anchor" href="#_5-1-overview"><span>5.1 OVERVIEW</span></a></h2><p>We live in a world that is getting more interconnected by each day, and we are witnessing a global change where all the devices in our surroundings are becoming “smart” and connected to the Internet.</p><p>The automotive industry is also a part of this change.</p><p>Today’s vehicles have more than 150 small computers, <strong>embedded control units (ECUs)</strong>, and multiple connection points to the Internet which makes them vulnerable to various online threats.</p><p>Recent attacks on connected vehicles have all been results of security vulnerabilities that could have been avoided if appropriate risk assessment methods were in place during software development.</p><h2 id="_5-2-introduction" tabindex="-1"><a class="header-anchor" href="#_5-2-introduction"><span>5.2 INTRODUCTION</span></a></h2><p>The world as we know it is changing and many of the devices we use daily are becoming “smart.”</p><p>This <strong>buzzword</strong> is appearing in everything from smart grids to smart homes with the smart appliances <strong>therein</strong>.</p><p>这个<strong>流行词</strong>出现在从智能电网到智能家居的一切事物中，包括其中的智能设备。</p><p>The main aspect of these devices is their connection to the Internet, and because of it, previously local vulnerabilities are now widely exposed.</p><p>More than 100 embedded ECUs could be integrated in advanced vehicles.</p><p>A <strong>high-end car</strong> may now have more than 100 million lines of code [1], as well as multiple connections to external networks including the Internet.</p><p>All this code has to be properly developed and tested in order to ensure the safety and security of the vehicle. We will refer to these types of cars as connected cars.</p><p>Even though the connection to the outside world enables many new services, it also exposes the car and its software to a potential remote attack.</p><p>There have already been a number of successful cyberattacks on connected vehicles such as the attacks on Jeep Cherokee, Tesla S model, Nissan electric car, and Chevrolet Corvette.</p><h3 id="_5-2-1-1-tara" tabindex="-1"><a class="header-anchor" href="#_5-2-1-1-tara"><span>5.2.1.1 TARA</span></a></h3><ul><li><strong>The threat agent risk assessment (TARA)</strong> method was developed by security experts from <strong>Intel Security</strong> and is based on three groups of collected data, denoted as libraries: <ul><li><strong>Threat Agent Library (TAL)</strong><ul><li>lists all relevant threat agents and their corresponding attributes.</li></ul></li><li><strong>Methods and Objectives Library (MOL)</strong><ul><li>lists methods that each threat agent might employ along with a corresponding impact level.</li></ul></li><li><strong>Common Exposure Library (CEL)</strong><ul><li>lists areas of the greatest exposure and vulnerability.</li></ul></li></ul></li></ul><p>These libraries are populated internally inside a company by their security expert team.</p><p>They are based on incident reports, breach reports, security measures, and other confidential information that is required to create the libraries.</p><p>By using the information from the libraries, security experts can determine which threat agent attributes are needed in order for a threat agent to pose a threat to the company and its assets.</p><h3 id="_5-2-1-2-stride" tabindex="-1"><a class="header-anchor" href="#_5-2-1-2-stride"><span>5.2.1.2 STRIDE</span></a></h3><p>The <strong>STRIDE</strong> method was originally developed by <strong>Microsoft</strong>.</p><p>The method allows threat identification in the <strong>design phase</strong> of any <strong>software</strong> or <strong>hardware</strong> and as such gives insight into potential attack scenarios. There are two variants of the STRIDE method: <strong>per-interaction</strong> and <strong>per-element</strong>.</p><p>In order to apply the method, security experts first need to create <strong>data flow diagrams (DFD)</strong> of the system that needs to be analyzed.</p><p>The DFDs present the communication patterns between the components under investigation.</p><p>Afterward, the method examines these diagrams in order to detect possible threats to the system. The threats are divided into six different categories: <strong>spoofing, tampering, repudiation, information disclosure, denial of service, elevation of privileges</strong>.</p><p>The inspection of DFD diagrams can be done manually (brainstorming sessions) or by using the Microsoft Threat modeling tool which uses the STRIDE per-interaction variant.</p><h3 id="_5-2-1-3-autosar" tabindex="-1"><a class="header-anchor" href="#_5-2-1-3-autosar"><span>5.2.1.3 AUTOSAR</span></a></h3><ul><li><strong>AUTomotive Open System Architecture (AUTOSAR)</strong> was founded in 2003, with the goal to develop an architecture, independent of the underlying ECU hardware that the automotive industry can use to reduce the increasing complexity of software in modern vehicles.</li><li>It is the <strong>de facto standard</strong> for the automotive software today, and 80% of global production is based on this standard.</li><li>AUTOSAR makes an <strong>abstract layer</strong> of the underlying <strong>hardware</strong>, so that the applications written on top of AUTOSAR are independent from the actual supplier of the ECU hardware.</li><li>The AUTOSAR standard defines <strong>security mechanisms</strong> that can be used by the software modules implemented into the vehicle system.</li><li>It further specifies <strong>interfaces</strong> and <strong>procedures</strong> to provide <strong>Secure On-Board Communication</strong>, and the exact implementation is left for the OEMs to decide on.</li><li>OEMs choose the cryptographic algorithms and encryption techniques which they want to implement and use in the vehicle system.</li><li>The <strong>three main security mechanisms</strong> in the AUTOSAR are: <ul><li>Crypto Service Manager (CSM),</li><li>Crypto Abstraction Library (CAL), and</li><li>Secure On-Board Communication (SecOC).</li></ul></li></ul><h4 id="a-software-architecture" tabindex="-1"><a class="header-anchor" href="#a-software-architecture"><span>A. SOFTWARE ARCHITECTURE</span></a></h4><ul><li>The AUTOSAR standard documentation guides companies and the automotive industry in designing and implementing software in their vehicles.</li><li>By adopting the AUTOSAR standard, companies can develop software solutions that are independent of the hardware, and this software can run on any ECU in the vehicle.</li><li>This is the reason why the AUTOSAR platform is also called a hardware independent architecture.</li></ul><p><img src="'+n+'" alt="image-20241026230042482"></p><p>Fig. 5.1 AUTOSAR hardware-independent architecture.</p><hr><ul><li>AUTOSAR provides detailed specification for: <ul><li>Software architecture</li><li>Software development methodology</li><li>Standardized application interfaces (APIs).</li></ul></li><li>Figure 5.2 shows <strong>the three-layered architecture of the AUTOSAR standard</strong>: <ul><li><strong>application layer</strong>,</li><li><strong>run-time environment (RTE) layer</strong>, and</li><li>the <strong>basic software (BSW) layer</strong> that consists of four sublayers.</li></ul></li><li>Each of the sublayers offers different services as shown in Fig. 5.3.</li><li>The highest layer is the <strong>application layer</strong>, which contains the <strong>software components (SWCs)</strong>. <ul><li>AUTOSAR application (e.g., ABS or the seat heating control) consists of several SWCs, which provide the core functions that are used by the AUTOSAR application.</li></ul></li></ul><p><img src="'+r+'" alt="image-20241026230408468"></p><p><strong>Fig. 5.2</strong> Layered AUTOSAR architecture [11]</p><p><img src="'+s+'" alt="image-20241026230428589"></p><p><strong>Fig. 5.3</strong> Each sublayer of the BSW layer offers different services [11]</p><p><img src="'+l+'" alt="image-20241026230603960"></p><p><strong>Fig. 5.4</strong> AUTOSAR software architecture—components and interfaces [11]</p><h4 id="b-security-features" tabindex="-1"><a class="header-anchor" href="#b-security-features"><span>B. SECURITY FEATURES</span></a></h4><ul><li>The AUTOSAR standard <strong>defines</strong> important <strong>security mechanisms</strong> that are used by the SWCs and other software modules implemented into the vehicle system.</li><li>It further specifies <strong>interfaces</strong> and <strong>procedures</strong> for ensuring <strong>Secure On-Board Communication</strong> while the rest of the security mechanisms and implementations are left for the OEMs to decide on.</li><li>OEMs choose the cryptographic algorithms and encryption techniques that they want to implement and use in the vehicle system.</li><li>The three main security mechanisms in the AUTOSAR are: <ul><li>CSM - Crypto Service Manager</li><li>CAL - Crypto Abstraction Library</li><li>SecOC - Secure On-Board Communication.</li></ul></li></ul><h4 id="c-csm-and-cal" tabindex="-1"><a class="header-anchor" href="#c-csm-and-cal"><span>C. CSM AND CAL</span></a></h4><ul><li>AUTOSAR specifies <strong>two crypto modules</strong>: <ul><li>The first one is the <strong>Crypto Service Manager (CSM)</strong> which is located in the <strong>service layer</strong> of the BSW and provides services for higher-level applications. <ul><li>CSM allows <strong>different applications</strong> to use the same service to access different <strong>cryptographic primitives</strong> (cryptographic algorithms).</li><li>One application may need access to an MD5 digest while another application needs to compute a SHA1digest.</li><li>This <strong>service</strong> of the CSM module can be accessed only <strong>locally inside that ECU</strong>, while any access between different ECUs needs to be specified and implemented as a separate mechanism, as this is not defined by AUTOSAR.</li></ul></li><li>The second crypto module is the <strong>Crypto Abstraction Layer (CAL)</strong> which is a static library with a very similar function as the CSM. <ul><li>The library is used to provide cryptographic functionality directly <strong>by bypassing the run-time environment</strong> (RTE).</li></ul></li></ul></li></ul><hr><ul><li>The following cryptographic functions may be implemented by the CSM or CAL: <ul><li><strong>Hash</strong> calculations</li><li>Generation and verification of <strong>message authentication codes (MAC)</strong></li><li>Random number generation</li><li>Encryption and decryption using <strong>symmetrical</strong> algorithms</li><li>Encryption and decryption using <strong>asymmetrical</strong> algorithms</li><li>Generation and verification of <strong>digital signatures</strong></li><li>Key management operations</li></ul></li></ul><p><img src="'+h+'" alt="image-20241026231231376"></p><p><strong>Fig. 5.5</strong> Two layers of crypto modules [11]</p><hr><ul><li>Fig. 5.5 shows, these two crypto modules are subdivided into two layers: <strong>interface layer</strong> and <strong>implementation layer</strong>.</li><li>The <strong>interface layer</strong> is <strong>completely standardized</strong> by the AUTOSAR while the <strong>cryptographic algorithms</strong> in the implementation layer are defined by the <strong>implementer</strong>.</li><li>The CSM implementation layer is called <strong>Cryptographic Primitives Module (CRY)</strong> while the implementation layer for CAL is called <strong>Cryptographic Primitives Library (CPL)</strong>.</li><li>These two modules are used to <strong>implement</strong> cryptographic algorithms (routines) that will be used by software components (SWCs) in the application layer and modules in the BSW layer.</li></ul><p><img src="'+c+'" alt="image-20241026231413972"></p><p><strong>Fig. 5.6</strong> Differences between CAL and CSM</p><h4 id="d-secure-on-board-communication-secoc" tabindex="-1"><a class="header-anchor" href="#d-secure-on-board-communication-secoc"><span>D. SECURE ON-BOARD COMMUNICATION (SecOC)</span></a></h4><ul><li>The SecOC module provides an <strong>authentication mechanism</strong> for critical data.</li><li>It is used in all ECUs that require secure communication.</li><li>This module is specified for the first time in Release 4.2 of the AUTOSAR standard specification.</li><li>The module provides a <strong>security mechanism</strong> that is easy to implement into the existing communication technology, is not resource-heavy, and as such can be used for legacy systems as well.</li><li>The specification of the module mostly relies on the <strong>assumption</strong> that <strong>symmetric authentication approaches</strong> will be used with <strong>message authentication code (MAC)</strong>, but it also supports asymmetric authentication approaches.</li><li>The symmetric authentication approach is faster and less complex and achieves the same level of security but with smaller authentication keys compared to the asymmetric approach.</li></ul><hr><p><img src="'+d+'" alt="image-20241026231625983"></p><p><strong>Fig. 5.7</strong> Integration of the SecOC basic software module [12]</p><p><img src="'+g+'" alt="image-20241026231652334"></p><p><strong>Fig. 5.8</strong> Contents of the secured I-PDU [12]</p><h2 id="_5-3-threat-models-for-the-automotive-domain" tabindex="-1"><a class="header-anchor" href="#_5-3-threat-models-for-the-automotive-domain"><span>5.3 THREAT MODELS FOR THE AUTOMOTIVE DOMAIN</span></a></h2><h3 id="_5-3-1-adaptation-of-tara" tabindex="-1"><a class="header-anchor" href="#_5-3-1-adaptation-of-tara"><span>5.3.1 Adaptation of TARA</span></a></h3><ul><li>In order to <strong>adapt and apply</strong> the TARA method to the automotive industry in general and the connected car in particular, certain modifications were made to the method.</li><li>The method is intended to be <strong>conducted internally</strong> inside <strong>one single car manufacturer company</strong>.</li><li>The main reason for this is the <strong>sensitivity</strong> and <strong>confidentiality</strong> of the information that is needed in order to perform the method successfully.</li><li>The other reason is the knowledge and the experience of the security experts that work for that specific car manufacturer company.</li><li>These factors are very important in order to get accurate and reliable results.</li></ul><hr><h3 id="tal-library" tabindex="-1"><a class="header-anchor" href="#tal-library"><span>TAL Library</span></a></h3><ul><li>This library <strong>lists</strong> the <strong>names</strong> of all the <strong>threat agents</strong> that are relevant to the automotive industry along with their corresponding attributes.</li><li>The following changes are made compared to the original TAL library [19] provided by Intel. <ul><li><strong>Ten threat agent profiles</strong> are removed, and <strong>eight new profiles</strong> are added: <ul><li>outward sympathizer,</li><li>hacktivist,</li><li>cyber vandal,</li><li>online social hacker,</li><li>script kiddies,</li><li>organized crime,</li><li>cyber terrorist, and</li><li>car thief.</li></ul></li><li>Attributes assigned to one threat agent from the original TAL library were slightly modified.</li></ul></li></ul><hr><h3 id="mol-library" tabindex="-1"><a class="header-anchor" href="#mol-library"><span>MOL Library</span></a></h3><ul><li>This library provides <strong>information</strong> about <strong>threat agent objectives</strong>, likely <strong>methods</strong> they might use, and the <strong>impact</strong> that their actions would have on the automotive company and the assets in the connected car.</li><li>The following changes were made to reflect the automotive domain: <ul><li>The sections “Acts” and “Limits” are removed and replaced by the <strong>“Method”</strong> section with the following values: <ul><li>theft of PII and business data,</li><li>denial of service,</li><li>intentional manipulation,</li><li>unauthorized physical access and</li><li>“unpredictable.”</li></ul></li><li>The levels of the “Impact” attribute are replaced with new <strong>impact levels</strong>: <ul><li>reputation damage,</li><li>privacy violation,</li><li>loss of financial assets/car,</li><li>traffic accidents, and</li><li>injured passengers.</li></ul></li></ul></li></ul><h3 id="_5-3-2-adaptation-of-stride" tabindex="-1"><a class="header-anchor" href="#_5-3-2-adaptation-of-stride"><span>5.3.2 ADAPTATION OF STRIDE</span></a></h3><p>The main part of the <strong>adaptation</strong> of STRIDE is reflected in the template of the MS Threat modeling tool, since the template provides the different elements to create DFD diagrams.</p><p>Each <strong>element</strong> is associated with <strong>a specific list of threats</strong>, and based on <strong>the type of interaction</strong> between the elements in the DFD diagram, the tool generates <strong>a threat report</strong>.</p><p>We use the <strong>template</strong> developed by the NCC Group with some additions due to the <strong>higher abstraction level</strong> used here; <strong>three new elements</strong> are added that represent the underlying architecture that is based on the AUTOSAR standard.</p><p>The main reason why this method needs to be <strong>adapted</strong> is because the method itself was <strong>created for the computer industry</strong>.</p><p>The MS Threat modeling tool is also intended to model DFD diagrams for environments such as Windows and Linux operating systems or different applications inside these systems (i.e., web applications, client–server environments).</p><h2 id="_5-4-applying-the-adapted-threat-models-to-the-automotive-domain" tabindex="-1"><a class="header-anchor" href="#_5-4-applying-the-adapted-threat-models-to-the-automotive-domain"><span>5.4 APPLYING THE ADAPTED THREAT MODELS TO THE AUTOMOTIVE DOMAIN</span></a></h2><h3 id="_5-4-1-tara-methodology-and-tools" tabindex="-1"><a class="header-anchor" href="#_5-4-1-tara-methodology-and-tools"><span>5.4.1 TARA: Methodology and Tools</span></a></h3><ol><li><strong>Measure</strong> current threat agent risks.</li><li><strong>Distinguish</strong> threat agents with <strong>elevated risk level</strong>.</li><li><strong>Derive primary objectives</strong> of those threat agents.</li><li><strong>Identify</strong> methods likely to manifest.</li><li><strong>Determine</strong> the most important <strong>collective exposures</strong>.</li><li><strong>Align strategy</strong> to target the most significant exposures.</li></ol><hr><p>Identify methods that are likely to manifest.确定可能出现的方法。</p><h3 id="_5-4-1-tara-threat-agent-library-tal" tabindex="-1"><a class="header-anchor" href="#_5-4-1-tara-threat-agent-library-tal"><span>5.4.1 TARA: Threat Agent Library (TAL)</span></a></h3><ul><li>The following is a list of attributes with a short explanation. <ol><li><strong>Distinguish</strong> threat agents with <strong>elevated risk level</strong>.</li><li><strong>Derive primary objectives</strong> of those threat agents.</li><li><strong>Identify methods</strong> likely to manifest.</li><li>Determine the most important <strong>collective exposures</strong>.</li><li>Align strategy to target the most significant exposures.</li></ol></li></ul><ul><li>十天后,这种病的症状显现出来。 <ul><li>The symptoms of the disease <strong>manifested</strong> themselves ten days later.</li></ul></li></ul><hr><ul><li>The following is a list of attributes with a short explanation. <ul><li><strong>Intent</strong> describes whether the agent’s intent is to cause harm or not.</li><li><strong>Access</strong> describes what type of access the agent has to the target: <ul><li>internal (insider) or</li><li>external (no access to internal data or resources).</li></ul></li><li><strong>Outcome</strong> is an attribute that describes the final results of the agent’s actions.</li><li><strong>Resource</strong> attribute represents the type of resources the agent has access to.</li><li><strong>Skills</strong> attribute describes the level of skill that the agent has.</li><li><strong>Motivations</strong> are a newly introduced attribute that explains the motivation behind an action conducted by each of the threat agents.</li><li><strong>Visibility</strong> describes the extent to which the agent wants to hide or reveal their identity.</li><li><strong>Limits</strong> attribute describes the extent to which the agent would go in order to accomplish their goals.</li><li><strong>Objective</strong> describes the <strong>primary action</strong> the agent will take in order to achieve their goal.</li></ul></li></ul><hr><h3 id="_5-4-1-tara-methods-and-objectives-library-mol" tabindex="-1"><a class="header-anchor" href="#_5-4-1-tara-methods-and-objectives-library-mol"><span>5.4.1 TARA: Methods and Objectives Library (MOL)</span></a></h3><p><img src="'+p+'" alt="image-20241026232644056"></p><p><strong>Fig. 5.9</strong> MOL Library</p><hr><h3 id="_5-4-1-tara-common-exposure-library-cel" tabindex="-1"><a class="header-anchor" href="#_5-4-1-tara-common-exposure-library-cel"><span>5.4.1 TARA: Common Exposure Library (CEL)</span></a></h3><p><img src="'+m+'" alt="image-20241026232750016"></p><p><strong>Fig. 5.10</strong> CEL Library</p><h3 id="_5-4-2-stride" tabindex="-1"><a class="header-anchor" href="#_5-4-2-stride"><span>5.4.2 STRIDE</span></a></h3><h4 id="methodology-and-tools" tabindex="-1"><a class="header-anchor" href="#methodology-and-tools"><span>Methodology and tools.</span></a></h4><ul><li>The <strong>STRIDE analysis</strong> is performed on the <strong>AUTOSAR platform</strong> provided by the company <strong>Arccore</strong>. <ol><li>First, analysis of the interior lights application was conducted, so that the <strong>DFD diagrams</strong> could be derived.</li><li>These were then created by the Microsoft Threat modeling tool by using the NCC Group template. <ul><li>These steps were conducted with the support of domain experts from Arccore and the NCC Group.</li></ul></li><li>Finally, the threat report was generated and examined in order to exclude false positives.</li></ol></li></ul><h4 id="the-interior-light-application" tabindex="-1"><a class="header-anchor" href="#the-interior-light-application"><span>The Interior Light Application</span></a></h4><ul><li>The application consists of seven different software components (SWCs), such as the <strong>light actuator</strong> and the <strong>door sensor</strong> SWC, each providing a specific function for the interior light application.</li><li>The application receives input data from the sensors (door sensor SWC) that notify the application if the vehicle door is open/closed and if the car trunk is open/closed.</li><li>After analyzing the input data from the sensors, the application sends signals to the actuators (light actuator SWC) that control the interior light of the vehicle and notifies them if the lights should be turned on/off.</li><li>The information is exchanged using the <strong>CAN network</strong>.</li></ul><hr><p>Data Flow Diagrams</p><p><img src="'+u+'" alt="image-20241026233039542"></p><p><strong>Fig. 5.11</strong> DFD created with the MS Threat modeling tool and the NCC Group template</p><h2 id="_5-5-results" tabindex="-1"><a class="header-anchor" href="#_5-5-results"><span>5.5 RESULTS</span></a></h2><h3 id="_5-5-1-tara" tabindex="-1"><a class="header-anchor" href="#_5-5-1-tara"><span>5.5.1 TARA</span></a></h3><p><img src="'+f+'" alt="image-20241026233154414"></p><p><strong>Fig. 5.12</strong> Risk comparison of different threat agent profiles</p><p><img src="'+y+'" alt="image-20241026233240057"></p><p><strong>Fig. 5.13</strong> DFD created with the MS Threat modeling tool and the NCC Group template</p><h3 id="_5-5-2-stride" tabindex="-1"><a class="header-anchor" href="#_5-5-2-stride"><span>5.5.2 STRIDE</span></a></h3><ul><li>After the MS Threat modeling tool analyzed the DFD diagram for the Interior light application, it generated a threat report with 74 different potential threats, where at least one threat from each STRIDE category was found.</li><li>It also found 17 threats that were not applicable to the application.</li><li>To ensure that the results of the threat modeling process are credible and should be further analyzed by experts, we verified the found threats with an actual hardware implementation of the application.</li><li>Testing was performed on an AUTOSAR hardware board (with the interior light application) connected to a small CAN network and a computer to analyze the communication and the exchanged packets (Fig. 5.13).</li><li>By conducting this validation process, we could investigate whether the threats generated by the threat modeling tool are applicable to the actual AUTOSAR software application, and as such, to a real vehicle system.</li><li>The validation process was conducted successfully, and the threats discovered by the threat modeling process were confirmed.</li><li>Hence, the adapted STRIDE method can be applied to other systems in the automotive domain and as such become a valuable tool for automotive security experts.</li></ul><h3 id="_5-5-4-discussion-and-future-work" tabindex="-1"><a class="header-anchor" href="#_5-5-4-discussion-and-future-work"><span>5.5.4 DISCUSSION AND FUTURE WORK</span></a></h3><p>The <strong>TARA method</strong> is rather new with little supporting documentation except what is published by <strong>Intel Security</strong>.</p><p>For that reason, additional work had to be conducted in order to successfully adapt and apply the method to the automotive industry.</p><ul><li>The method ranked the <strong>sensationalist and the OBD port</strong> as having the highest risk in their respective category. <ul><li>The former mirrors well the majority of the attacks that have been widely documented and discussed.</li><li>These were conducted by different researchers and experts that wanted to show how insecure the vehicles really are.</li></ul><ul><li>The final goal of the researchers was maybe not to get famous and hit the headlines of all news portals in the world, but it was definitely the outcome of their research and as such has to be taken into consideration.</li></ul><ul><li>The <strong>OBD port</strong> is shown to have the <strong>highest risk potential</strong>, and even though it requires physical access there are some cases where it <strong>can be exploited remotely</strong>.</li><li>It is also the oldest interface in the CEL library and accessing the OBD port gives the attacker almost <strong>full access</strong> to the CAN network.</li></ul></li></ul><blockquote><ol><li><p><strong>Sensationalist</strong> - Likely refers to exaggerated or overly dramatic elements that could pose risks, such as false alarms, sensational news, or misleading information.</p></li><li><p><strong>OBD port</strong> - Refers to the On-Board Diagnostics port, a common point of vulnerability in vehicles that can be exploited for unauthorized access or attacks.</p></li><li><p><strong>Sensationalist（夸张或煽动性元素）</strong> - 可能指那些夸大其词或过于戏剧化的内容，例如误报、夸大的新闻或误导性信息，这些可能会带来风险。</p></li><li><p><strong>OBD 接口（车载诊断接口）</strong> - 指车辆的车载诊断接口，这是一个常见的漏洞点，可能被用于未经授权的访问或攻击。</p></li></ol></blockquote><hr><p>Unlike the <strong>TARA method</strong>, <strong>STRIDE</strong> has been used before in the automotive industry.</p><p>However, the method in this chapter was conducted by using the <strong>MS Threat modeling tool</strong> along with the <strong>template designed</strong> for the automotive industry, and this was not done before.</p><p>The <strong>template</strong> used with the <strong>MS Threat modeling tool</strong> has shown to be very useful and adaptable, where further work may allow this template to be used on even more low-level software applications.</p><p>The results generated by the tool described in this chapter are maybe not completely comprehensive but they clearly show the extent of vulnerabilities of an AUTOSAR-based software application.</p><p>Even though the application in question, the vehicle’s interior lights, does not seem like something worth analyzing, one can just imagine driving down the highway in the middle of the night when suddenly the lights in the car start going on/off every second—it could distract the driver or even cause an accident.</p><h2 id="_4-3-in-vehicle-communication" tabindex="-1"><a class="header-anchor" href="#_4-3-in-vehicle-communication"><span>4.3 IN-VEHICLE COMMUNICATION</span></a></h2><p>The in-vehicle communication refers to the <strong>intra vehicle communication</strong> where all the internal components like <strong>telematics</strong>, <strong>sensors</strong>, and <strong>actuators</strong> communicate with each other using different communication mediums like standard bus system.</p><p>The in-vehicle communication occurs within the internal vehicle communication network where the <strong>ECUs intercommunicate with other electronic subsystems</strong>.</p><p>The ECUs are connected within vehicle bus systems through specialized internal communication networks.</p><p>Most ECUs are connected to one or more bus networks for monitoring and controlling the vehicles.</p><p>Some ECUs are connected to external controls, such as digital equipment, infotainment, and navigation systems via a gateway system.</p><p>The central gateway-based architecture links the entire IVN with a central gateway and provides smooth connectivity between heterogeneous network protocols.</p><blockquote><p><strong>IVN</strong> stands for <strong>In-Vehicle Network</strong>. It refers to the interconnected communication systems within a vehicle, which enable different electronic control units (ECUs), sensors, and devices to share data and work together.</p><p>The <strong>central gateway-based architecture</strong> in an IVN serves as a hub that connects all components of the network. It ensures smooth communication by translating data between different network protocols (e.g., CAN, LIN, FlexRay, Ethernet) that might otherwise be incompatible. This architecture enhances data flow and ensures interoperability within the vehicle&#39;s diverse systems.</p><p><strong>IVN</strong> 指的是 <strong>车载网络（In-Vehicle Network）</strong>，即车辆内部的互联通信系统，用于使不同的电子控制单元（ECU）、传感器和设备之间能够共享数据并协同工作。</p><p>在车载网络中，<strong>基于中央网关的架构</strong> 充当整个网络的枢纽。它通过翻译不同网络协议（如 CAN、LIN、FlexRay、以太网）之间的数据，确保这些原本不兼容的协议之间能够顺畅通信。该架构改善了数据流动性，并确保车辆内部各种系统之间的互操作性。</p></blockquote><h2 id="_5-6-conclusion" tabindex="-1"><a class="header-anchor" href="#_5-6-conclusion"><span>5.6 CONCLUSION</span></a></h2><ul><li>In this chapter, we adapted two threat modeling methods from the computer industry in order to better fit the needs of the automotive industry.</li><li>The next step was to <strong>apply</strong> these methods to the <strong>connected car and the underlying software architecture</strong>, which in turn generated valuable results that were carefully validated.</li><li>The entire work was done with the support of domain experts from different companies that have extensive knowledge in this field.</li><li><strong>TARA</strong> was used to provide a <strong>high-level overview of threats</strong> in the area of connected vehicles while <strong>STRIDE</strong> was used to <strong>evaluate a specific functionality of the vehicle</strong>.</li><li>The three libraries created by the TARA method and the template used by the STRIDE method would be a good starting point for any future application.</li><li>Finally, it is important to learn from the mistakes made by the computer industry, but it is also vital to recognize which threat modeling methods and which security mechanisms from the computer industry can be applied to the automotive industry.</li></ul>',134)]))}const A=t(b,[["render",v],["__file","Week05.html.vue"]]),S=JSON.parse('{"path":"/302/Week05.html","title":"Chapter 5: AUTOSAR Embedded Security in Vehicles","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"OBJECTIVES","slug":"objectives","link":"#objectives","children":[]},{"level":2,"title":"5.1 OVERVIEW","slug":"_5-1-overview","link":"#_5-1-overview","children":[]},{"level":2,"title":"5.2 INTRODUCTION","slug":"_5-2-introduction","link":"#_5-2-introduction","children":[{"level":3,"title":"5.2.1.1 TARA","slug":"_5-2-1-1-tara","link":"#_5-2-1-1-tara","children":[]},{"level":3,"title":"5.2.1.2 STRIDE","slug":"_5-2-1-2-stride","link":"#_5-2-1-2-stride","children":[]},{"level":3,"title":"5.2.1.3 AUTOSAR","slug":"_5-2-1-3-autosar","link":"#_5-2-1-3-autosar","children":[]}]},{"level":2,"title":"5.3 THREAT MODELS FOR THE AUTOMOTIVE DOMAIN","slug":"_5-3-threat-models-for-the-automotive-domain","link":"#_5-3-threat-models-for-the-automotive-domain","children":[{"level":3,"title":"5.3.1 Adaptation of TARA","slug":"_5-3-1-adaptation-of-tara","link":"#_5-3-1-adaptation-of-tara","children":[]},{"level":3,"title":"TAL Library","slug":"tal-library","link":"#tal-library","children":[]},{"level":3,"title":"MOL Library","slug":"mol-library","link":"#mol-library","children":[]},{"level":3,"title":"5.3.2 ADAPTATION OF STRIDE","slug":"_5-3-2-adaptation-of-stride","link":"#_5-3-2-adaptation-of-stride","children":[]}]},{"level":2,"title":"5.4 APPLYING THE ADAPTED THREAT MODELS TO THE AUTOMOTIVE DOMAIN","slug":"_5-4-applying-the-adapted-threat-models-to-the-automotive-domain","link":"#_5-4-applying-the-adapted-threat-models-to-the-automotive-domain","children":[{"level":3,"title":"5.4.1 TARA: Methodology and Tools","slug":"_5-4-1-tara-methodology-and-tools","link":"#_5-4-1-tara-methodology-and-tools","children":[]},{"level":3,"title":"5.4.1 TARA: Threat Agent Library (TAL)","slug":"_5-4-1-tara-threat-agent-library-tal","link":"#_5-4-1-tara-threat-agent-library-tal","children":[]},{"level":3,"title":"5.4.1 TARA: Methods and Objectives Library (MOL)","slug":"_5-4-1-tara-methods-and-objectives-library-mol","link":"#_5-4-1-tara-methods-and-objectives-library-mol","children":[]},{"level":3,"title":"5.4.1 TARA: Common Exposure Library (CEL)","slug":"_5-4-1-tara-common-exposure-library-cel","link":"#_5-4-1-tara-common-exposure-library-cel","children":[]},{"level":3,"title":"5.4.2 STRIDE","slug":"_5-4-2-stride","link":"#_5-4-2-stride","children":[]}]},{"level":2,"title":"5.5 RESULTS","slug":"_5-5-results","link":"#_5-5-results","children":[{"level":3,"title":"5.5.1 TARA","slug":"_5-5-1-tara","link":"#_5-5-1-tara","children":[]},{"level":3,"title":"5.5.2 STRIDE","slug":"_5-5-2-stride","link":"#_5-5-2-stride","children":[]},{"level":3,"title":"5.5.4 DISCUSSION AND FUTURE WORK","slug":"_5-5-4-discussion-and-future-work","link":"#_5-5-4-discussion-and-future-work","children":[]}]},{"level":2,"title":"4.3 IN-VEHICLE COMMUNICATION","slug":"_4-3-in-vehicle-communication","link":"#_4-3-in-vehicle-communication","children":[]},{"level":2,"title":"5.6 CONCLUSION","slug":"_5-6-conclusion","link":"#_5-6-conclusion","children":[]}],"git":{"updatedTime":1731816642000},"filePathRelative":"302/Week05.md"}');export{A as comp,S as data};