import{_ as i,c as a,a as s,o as r}from"./app-C2GyVOzi.js";const n="/se/images/306/07.svg",o="/se/images/306/08.png",l="/se/images/306/09.png",c="/se/images/306/10.png",h="/se/images/306/11.png",t="/se/images/306/12.png",d={};function u(p,e){return r(),a("div",null,e[0]||(e[0]=[s('<h1 id="lecture-2-chapter-2-architectures-of-transportation-cyber-physical-systems" tabindex="-1"><a class="header-anchor" href="#lecture-2-chapter-2-architectures-of-transportation-cyber-physical-systems"><span>LECTURE 2 Chapter 2: Architectures of Transportation Cyber-Physical Systems</span></a></h1><h2 id="objectives" tabindex="-1"><a class="header-anchor" href="#objectives"><span>OBJECTIVES</span></a></h2><ul><li>Introduction</li><li>Background</li><li>Current <strong>canonical</strong> cyber-physical system architectures</li><li>Types of architecture models</li><li>Issues with the current models</li><li>Emerging architectures</li><li>Case studies</li><li>Conclusion</li></ul><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>INTRODUCTION</span></a></h2><ul><li>Transportation systems are increasingly linked to other systems and to the physical world in which the system is deployed.</li><li>These systems use sensors to understand the properties of objects and systems with which they interact.</li><li>Recently, the term ‘cyber-physical’ has emerged to describe systems that are a blend of physical sensing and computation and that are networked with other similar systems.</li><li>The collection of these systems is widely <strong>touted</strong> as the ‘Internet of Things (IoT)’.</li><li>The National Science Foundation of the United States uses the following definition: cyber-physical systems (CPSs) are engineered systems that are built from, and depend upon, the seamless integration of computational algorithms and physical components.</li><li>The seamless integration is accomplished through carefully structured and rigorously analysed system architecture.</li><li>The integration makes certain system design problems explicit earlier than in traditional system development.</li></ul><h2 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>BACKGROUND</span></a></h2><h3 id="architecture-analysis-and-design-language" tabindex="-1"><a class="header-anchor" href="#architecture-analysis-and-design-language"><span>Architecture Analysis and Design Language</span></a></h3><ul><li>Architecture Analysis and Design Language (AADL) is strongly typed and it can be extended through the use of <strong>annex languages</strong>.</li><li>Some examples are an error model annex, which specifies propagation errors, a behaviour annex, which allows us to add behaviour to the architecture using the concept of state machines, and others such as security and safety.</li><li>AADL models both software and hardware. <ul><li>Software is represented by process, thread and subprogram constructs while hardware components are represented by device, processor, bus and memory constructs.</li><li>The language has an integration component typed as ‘system’ that ties software and hardware together.</li></ul></li></ul><h3 id="quality-attributes" tabindex="-1"><a class="header-anchor" href="#quality-attributes"><span>Quality attributes</span></a></h3><ul><li>Transportation systems are partially defined by functional requirements- what the system must do - and by nonfunctional requirements - attributes of the system.</li><li>These attributes describe the qualities of the system such as reliability, availability and many others.</li><li>The ISO 9126 standard, which has been replaced by ISO/IEC 25010, provides a categorisation of these attributes.</li><li>The quality attributes support trade studies in which the different attribute values resulting from different design decisions are compared allowing the architect to choose the design action that will be best, given the objectives of the architecture.</li></ul><p><img src="'+n+'" alt="Quality attributes"></p><h3 id="frameworks" tabindex="-1"><a class="header-anchor" href="#frameworks"><span>Frameworks</span></a></h3><p><img src="'+o+'" alt="image-20241005215019375"></p><h2 id="current-canonical-cyber-physical-system-architectures" tabindex="-1"><a class="header-anchor" href="#current-canonical-cyber-physical-system-architectures"><span>CURRENT CANONICAL CYBER-PHYSICAL SYSTEM ARCHITECTURES</span></a></h2><p><img src="'+l+'" alt="image-20241005215207020"></p><h2 id="types-of-architecture-models" tabindex="-1"><a class="header-anchor" href="#types-of-architecture-models"><span>TYPES OF ARCHITECTURE MODELS</span></a></h2><p><img src="'+c+'" alt="image-20241005215629594"></p><p>Figure 2.6 Portion of ACT-IT reference architecture-architecture reference for cooperative and intelligent transportation, US DoT, https://local.iteris. com/arc-it/.</p><h2 id="issues-with-the-current-models" tabindex="-1"><a class="header-anchor" href="#issues-with-the-current-models"><span>ISSUES WITH THE CURRENT MODELS</span></a></h2><h3 id="mobility" tabindex="-1"><a class="header-anchor" href="#mobility"><span>Mobility</span></a></h3><ul><li>Transportation systems involve the movement of people from one place to another and their smart devices must be sufficiently mobile to move with them while continuing to deliver service.</li><li>The transportation engineer needs to understand the environment in which the transportation system will be deployed in order to make appropriate design decisions.</li><li>There are transportation systems which are stationary but many newly emerging capabilities are based on being mobile so that the user can use the capability from exactly where they are rather than going to a spot possibly removed from the events that require attention.</li></ul><h3 id="agility-of-development" tabindex="-1"><a class="header-anchor" href="#agility-of-development"><span>Agility of development</span></a></h3><ul><li>Technologies for intelligent transportation systems are rapidly evolving, but transportation systems are large and development projects associated with these systems are also large and often slow moving.</li><li>In order to take advantage of the emerging technologies architectures must be modified to allow for faster modification and deployment.</li><li>DevOps is an emerging organisational technique that merges development and operations responsibilities to facilitate the development to deployment cycle.</li><li>The basic idea is to ensure that requirements related to deployment are treated as equally important as other capabilities.</li></ul><h2 id="emerging-architectures" tabindex="-1"><a class="header-anchor" href="#emerging-architectures"><span>EMERGING ARCHITECTURES</span></a></h2><p><img src="'+h+'" alt="image-20241005220303063"> Figure 2.10 The NIST cloud computing reference architecture. F. Liu, J. Tong, J. Mao, R. Bohn, J. Messina, M. Badger, D. Leaf, Sept 2011. Reprinted courtesy of the National Institute of Standards and Technology, U.S. Department of Commerce. Not copyrightable in the United States.</p><p><img src="'+t+'" alt="image-20241005220713890"></p><p>Figure 2.11 Basic cloud infrastructure. NIST Cloud Computing Reference Architecture. F. Liu, J. Tong, J. Mao, R. Bohn, J. Messina, M. Badger, D. Leaf, Sept 2011. Reprinted courtesy of the National Institute of Standards and Technology, U.S. Department of Commerce. Not copyrightable in the United States.</p><h3 id="smart-city-architecture" tabindex="-1"><a class="header-anchor" href="#smart-city-architecture"><span>Smart city architecture</span></a></h3><ul><li>Large cities tend to face several problems, such as high natural resource consumption, human health concerns, traffic jams, waste management and so on.</li><li>These issues have become so serious that many cities have been motivated to find smarter ways to handle them.</li><li>The common thread among their solutions is the use of CPSs.</li><li>For these cities we use the term Smart City, which brings benefits for the entire city by connecting people, improving citizen’s life quality and reducing costs, among other benefits.</li></ul><h3 id="china-s-smart-cities-project" tabindex="-1"><a class="header-anchor" href="#china-s-smart-cities-project"><span>China’s smart cities’ project</span></a></h3><p><img src="'+t+'" alt="image-20241005221127532"></p><h3 id="software-architecture-aspects" tabindex="-1"><a class="header-anchor" href="#software-architecture-aspects"><span>SOFTWARE ARCHITECTURE ASPECTS</span></a></h3><p>Table 2.1 Layer Function Mobile Application</p><table><thead><tr><th>Layer</th><th>Function</th></tr></thead><tbody><tr><td>Data transport</td><td>Responsible for transporting data between the RESCUER mobile solution and the RESCUER back-end.</td></tr><tr><td>Data analysis</td><td>Responsible for analysing various kinds of data collected from mobile applications independently and for doing a combined analysis.</td></tr><tr><td>Management</td><td>Responsible for managing the crowd and workforces. It helps to plan a set of actions based on the current situation.</td></tr><tr><td>Visualisation</td><td>Responsible for showing analysed data, static emergency plans and the status of the action decided by the command and control centre.</td></tr><tr><td>Ad hoc network</td><td>Responsible for providing an alternative communication channel in the event of no Internet access.</td></tr><tr><td>Data integration</td><td>Responsible for integrating components within RESCUER, as well as legacy operating resources.</td></tr></tbody></table><h2 id="quality-attributes-for-smart-city-applications" tabindex="-1"><a class="header-anchor" href="#quality-attributes-for-smart-city-applications"><span>QUALITY ATTRIBUTES FOR SMART CITY APPLICATIONS</span></a></h2><p>Table 2.2 Significance of Quality Attribute</p><table><thead><tr><th>Quality Attribute</th><th>Status</th></tr></thead><tbody><tr><td>Mobility, scalability, reliability, usability, maintainability, performance, robustness</td><td>They were successfully specified, designed, implemented and tested.</td></tr><tr><td>Availability, portability, reusability, adaptability, interoperability</td><td>They have been specified and designed but neither implemented nor tested.</td></tr><tr><td>Sustainability, privacy, security</td><td>They have been specified but neither designed nor implemented.</td></tr></tbody></table><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>CONCLUSION</span></a></h2><ul><li>Transportation systems are becoming more dynamic with more decisions made during operation.</li><li>These systems need architectures that can apply traditional control system architectures with the ability to apply autonomy to alter the system dynamically based on different sensing patterns.</li><li>We have presented a number of aspects of architectural design and discussed the implications of those design aspects in the context of smart transportation systems.</li></ul>',39)]))}const y=i(d,[["render",u],["__file","Week02.html.vue"]]),g=JSON.parse('{"path":"/306/Week02.html","title":"LECTURE 2 Chapter 2: Architectures of Transportation Cyber-Physical Systems","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"OBJECTIVES","slug":"objectives","link":"#objectives","children":[]},{"level":2,"title":"INTRODUCTION","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"BACKGROUND","slug":"background","link":"#background","children":[{"level":3,"title":"Architecture Analysis and Design Language","slug":"architecture-analysis-and-design-language","link":"#architecture-analysis-and-design-language","children":[]},{"level":3,"title":"Quality attributes","slug":"quality-attributes","link":"#quality-attributes","children":[]},{"level":3,"title":"Frameworks","slug":"frameworks","link":"#frameworks","children":[]}]},{"level":2,"title":"CURRENT CANONICAL CYBER-PHYSICAL SYSTEM ARCHITECTURES","slug":"current-canonical-cyber-physical-system-architectures","link":"#current-canonical-cyber-physical-system-architectures","children":[]},{"level":2,"title":"TYPES OF ARCHITECTURE MODELS","slug":"types-of-architecture-models","link":"#types-of-architecture-models","children":[]},{"level":2,"title":"ISSUES WITH THE CURRENT MODELS","slug":"issues-with-the-current-models","link":"#issues-with-the-current-models","children":[{"level":3,"title":"Mobility","slug":"mobility","link":"#mobility","children":[]},{"level":3,"title":"Agility of development","slug":"agility-of-development","link":"#agility-of-development","children":[]}]},{"level":2,"title":"EMERGING ARCHITECTURES","slug":"emerging-architectures","link":"#emerging-architectures","children":[{"level":3,"title":"Smart city architecture","slug":"smart-city-architecture","link":"#smart-city-architecture","children":[]},{"level":3,"title":"China’s smart cities’ project","slug":"china-s-smart-cities-project","link":"#china-s-smart-cities-project","children":[]},{"level":3,"title":"SOFTWARE ARCHITECTURE ASPECTS","slug":"software-architecture-aspects","link":"#software-architecture-aspects","children":[]}]},{"level":2,"title":"QUALITY ATTRIBUTES FOR SMART CITY APPLICATIONS","slug":"quality-attributes-for-smart-city-applications","link":"#quality-attributes-for-smart-city-applications","children":[]},{"level":2,"title":"CONCLUSION","slug":"conclusion","link":"#conclusion","children":[]}],"git":{"updatedTime":1728193193000,"contributors":[{"name":"rhyme_yang","email":"rhyme_yang@live.cn","commits":1}]},"filePathRelative":"306/Week02.md"}');export{y as comp,g as data};
