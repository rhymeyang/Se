**Masquerading** An attacker can forge messages that have the appearance of originating elsewhere. TCP/IP itself does not enforce the value in the “From” IP address field in any packet, which makes it easy to send messages to a target system that have the appearance of originating from anywhere.

The SMTP (Simple Mail Transport Protocol, as initially defined in RFC-822) performs no enforcement on the “From” address in any e-mail message, a fact that has contributed to the spam and phishing problem. Many other protocols have similar weaknesses in their design.

**Denial of Service** A _denial of service_ (DoS) attack is an attack on a target system with the intent of causing it to cease functioning. There are two principal ways to perpetrate a DoS attack: First, it can be carried out by sending an enormous volume of messages to the target system to flood its input buffers and exhaust its available resources. The second method is to send a specially built message that is known to cause a service or application running on the target system to malfunction or stop running altogether. Both types accomplish an attacker’s objective of making the target system unavailable for legitimate use.

Another form of a DoS attack is the _distributed denial of service_ (DDoS) attack, a flooding attack that originates from a large number of systems simultaneously.

**Fraud** Many kinds of fraud are perpetrated on the Internet against systems and people. In a fraud attack, the attacker pretends to be someone or something else (a merchant, bank, or government entity, for instance) and attempts to trick the target into performing an action, such as transferring money or providing private information.

> **NOTE** One topic not covered in this section is the variety of reasons and motivations behind attacks on systems. This subject is covered in detail earlier in this chapter.

---

##### Masquerading on the Internet

The protocols at the base of the Internet, TCP/IP, were developed a generation ago by designers who assumed that TCP/IP would always be operated on controlled, trusted, and closed networks. The basic design of most of the protocols and services still in use on the Internet today assume that all other parties can be trusted. For this reason, the designers of TCP/IP did not include controls to prevent one system from masquerading as another. It is this design principle that has permitted the proliferation of much spam, phishing, malware, and other malevolence on the Internet.

---

##### Internet Communications Security Countermeasures

A wide variety of countermeasures are needed to protect an organization from the assortment of threats. The countermeasures described in this section should begin to look familiar if you are reading through this chapter from beginning to end; the countermeasures used to protect Internet-based threats are not much different from those protecting similar threats in other contexts.

Network- and computer-related security countermeasures discussed elsewhere in this book would often apply when any network, system, or application is opened to the Internet. The Internet represents the worst-case security scenario for any system or application, as it exposes it to the most potent threats that exist.

**Firewalls** Firewalls are devices that control the flow of messages between networks. Placed at the boundary between the Internet and an organization’s internal network, firewalls enforce security policy by prohibiting all inbound and outbound traffic except for the specific few types of traffic that are permitted to a select few systems. For example, a firewall will

- Permit incoming e-mail to be sent only to the organization’s e-mail server.
- Permit incoming HTTPS requests to be sent only to the organization’s Internet-facing web server.
- Permit incoming file transfer requests to be sent only to the organization’s file transfer gateway.
- Permit outbound e-mail to originate only from the organization’s e-mail server.

The last item in this list points out that firewalls control not only what comes _in_ to an organization’s network, but also what _leaves_ an organization’s network. Permitting outbound mail to originate only from the e-mail server prevents malware from communicating via command-and-control traffic or exfiltrating stolen information, thereby slowing down the spread and impact of some types of malware.

The two principal types of firewalls are

- **Screening routers** These simpler firewalls are designed to examine each packet and compare it to an access control list (ACL) to determine whether, based on its source and destination IP addresses and ports, it should be permitted to pass through the firewall.

- **Stateful inspection firewalls** This type of firewall is designed to record incoming packets and keep track of TCP/IP sessions between external and internal hosts. In TCP, an incoming packet is answered with an outgoing packet; a stateful inspection firewall will examine an outgoing packet and make a go/no-go decision based on whether it believes that the outgoing packet is a part of an active session. Stateful inspection firewalls are more complex and capable of more effectively protecting an organization’s network.

Firewalls are available as hardware appliances and as virtual machines for use in virtualization and cloud-based environments.

> **CAUTION** Firewall rule sets should be periodically reviewed to ensure that every rule is formally approved and justified.

**Application Firewalls** Application firewalls are devices that are designed to protect web-based applications from application layer attacks. The types of attacks that application firewalls are designed to recognize and block include

- SQL injection

- Script injection

- Cross-site scripting

- Buffer overflow

- Parameter and session tampering

- Denial of service

Application firewalls were developed because traditional network firewalls examine only the source and destination IP addresses and source and destination port numbers. Network firewalls do not examine the contents of an incoming packet, which could be harmful nonetheless if it is a part of an attack on an application server.

Application firewalls are available as stand-alone appliances (called network-based application firewalls), software applications that can be installed in application servers (known as host-based application firewalls), and virtual machines for use in cloud environments.

An application firewall is not a replacement for a network firewall. Application firewalls are designed to block application layer attacks, but they don’t necessarily act as a general-purpose firewall.

**Demilitarized Zone Network (DMZ)** An organization with one or more systems that provide services to Internet users may implement a DMZ network architecture. The DMZ is a separate network where Internet-facing systems are attached and isolated with one or more firewalls. The rules in the firewall(s) will permit specific services from the Internet to reach the DMZ servers but will not permit access from the Internet to the internal network.

Typical DMZ architectures are shown in [Figure 6-6](#ch6fig6). Organizations with large numbers of Internet-facing servers may use more complex architectures with layers of DMZ networks.

![Images](/images/308b/ch0606_2.jpeg)

**Figure 6-6** Typical DMZ networks

**IDSs and IPSs** An IDS is designed to listen to network traffic and generate alerts if it sees any messages that match a database of attack signatures, as well as messages that match known malicious IP networks and domains. An IPS is a preventive control that listens to network traffic and blocks messages that match a database of attack signatures, and also messages that match known malicious IP networks and domains. IDSs and IPSs are discussed in more detail earlier in this chapter in the section “Network Security.”

**Honeypots and Honeynets** A _honeypot_ is a trap that is designed to detect unauthorized use of information systems. A honeypot will have the appearance of an unprotected and unmonitored system containing valuable information. When an attacker attacks and takes over a honeypot, it provides information that will help the organization learn how to protect its real production computers.

A honeypot helps an organization better understand some important facts:

- Which attackers are sufficiently interested in the organization’s information to launch an attack against it
- Which available targets attract attackers
- Which tools and techniques are used by the attacker(s)

A security team in the organization can analyze this information and use it to improve defenses on the systems that actually do contain sensitive or valuable information.

> **CAUTION** An organization that sets up a honeypot needs to ensure that the honeypot cannot be used as a platform to attack real production systems successfully or to stage an attack on another organization’s systems.

A _honeynet_ is just what the term implies: a network of computers that are all acting as honeypots to emulate a complex production environment that consists of several computers.

There are two primary types of honeypots and honeynets:

- **High interaction** These are systems that will be partly or entirely unpatched, thereby attracting attackers.
- **Low interaction** These are designed to resemble other production servers in the network. Ordinarily unused, IDSs would trigger alarms if they are accessed, signaling that an intruder may be examining them.

**Change Management and Configuration Management** The protection of sensitive and valuable information—particularly information that is exposed to the Internet—depends upon the integrity of the entire environment. The environment’s integrity can be assured only to the extent to which it is controlled; this means that all minor and major changes made to the environment must be managed through formal change management and configuration management processes.

These processes are described in detail in [Chapter 5](/308B/Chapter05.html).

**Vulnerability Management** The security of an organization’s environment depends upon the security of all devices that access the Internet and can be accessed from the Internet. Effective vulnerability management processes are essential to ensure that all such devices and systems run current software, are free of exploitable vulnerabilities, and are configured according to hardening standards.

These processes are described in detail in [Chapter 5](/308B/Chapter05.html).

**Incident Management** Incident management is the two-part process of proactive and responsive activities that help to reduce the likelihood and impact of security incidents. The proactive side of incident management helps to prevent incidents from occurring at all, while the responsive side helps to contain incidents quickly and make changes to reduce the likelihood and impact of future incidents.

Incident management is discussed in detail at the beginning of this chapter in the section “Information Security Management.”

Incidents can also result from manmade or natural disasters—this aspect of incident response is addressed through disaster recovery plans and business continuity plans (discussed in [Chapter 5](/308B/Chapter05.html)).

**Threat Management** Threat management is the process of acquiring relevant and actionable threat information. This is done as an attack detection and prevention measure to anticipate and defend against present and future attacks.

Threat management is described in detail earlier in this chapter.

**Security Awareness Training** Security awareness training helps people in the organization be more familiar with how their tasks and responsibilities help to protect the organization’s assets. Familiarity with security concepts and responsibilities helps each staff member make better decisions that help reduce risk.

This training is discussed in detail at the beginning of this chapter in the section “Information Security Management.”

#### Encryption

Encryption is the act of hiding information in plain sight. It works by scrambling the characters in a message using a method known only to the sender and receiver, making the message useless to any party that intercepts the message.

Encryption plays a crucial role in the protection of sensitive and valuable information. In some situations, it is not practical or feasible to prevent third parties from having logical access to data—for instance, data transmissions over public networks.

This technique can also be used to _authenticate_ information that is sent from one party to another. This means that a receiving party can verify that a specific party did, in fact, originate a message and that it is authentic. This enables a receiver to know that a message is genuine and that it has not been forged or altered in transit by any third party.

With encryption, best practices call for system designers to use well-known, robust encryption algorithms. Thus, when a third-party intercepts encrypted data, the third party can know which algorithm is being used but still not be able to read the data. What the third party does not know is the _key_ that is used to encrypt and decrypt the data. How this works will be explained further in this section.

> **NOTE** Encryption can be thought of as another layer of access protection. Like user ID and password controls that restrict access to data to everyone but those with login credentials, encryption restricts access to (plaintext) data to everyone but those with encryption keys.

##### Terms and Concepts Used in Cryptography

Several terms and concepts used in cryptography are not used outside of the field. Security professionals and IS auditors must be familiar with these to be effective in understanding, managing, and auditing IT systems that use cryptography. Terms used in cryptography include

- **Plaintext** An original message, file, or stream of data that can be read by anyone who has access to it
- **Ciphertext** A message, file, or stream of data that has been transformed by an encryption algorithm and rendered unreadable
- **Encryption** The process of transforming plaintext into ciphertext, as depicted in [Figure 6-7](#ch6fig7)

![Images](/images/308b/ch0607.jpeg)

**Figure 6-7** Encryption and decryption utilize an encryption algorithm and an encryption key.

- **Hash function** A cryptographic operation on a block of data that returns a fixed-length string of characters, used to verify the integrity of a message
- **Message digest** The output of a cryptographic hash function
- **Digital signature** The result of encrypting the hash of a message with the originator’s private encryption key, used to prove the authenticity and integrity of a message, as depicted in [Figure 6-8](#ch6fig8)

![Images](/images/308b/ch0608.jpeg)

**Figure 6-8** Digital signature used to verify the integrity of a message

- **Algorithm** A specific mathematical formula that is used to perform encryption, decryption, message digests, and digital signatures
- **Decryption** The process of transforming ciphertext into plaintext so that a recipient can read it
- **Cryptanalysis** An attack on a cryptosystem where the attacker is attempting to determine the encryption key that is used to encrypt messages
- **Encryption key** A block of characters, used in combination with an encryption algorithm, to encrypt or decrypt a stream or blocks of data; an encryption key is also used to create and verify a digital signature
- **Key encrypting key** An encryption key used to encrypt another encryption key
- **Key length** The size (measured in bits) of an encryption key; longer encryption keys can take considerably more effort to attack a cryptosystem successfully
- **Block cipher** An encryption algorithm that operates on blocks of data
- **Stream cipher** A type of encryption algorithm that operates on a continuous stream of data such as a video or audio feed
- **Initialization vector (IV)** A random number that is needed by some encryption algorithms to begin the encryption process
- **Symmetric encryption** A method for encryption and decryption where it is necessary for both parties to possess a common encryption key
- **Asymmetric encryption**, or **public key cryptography** A method for encryption, decryption, and digital signatures that uses pairs of encryption keys, consisting of a _public key_ and a _private key_
- **Key exchange** A technique that is used by two parties to establish a symmetric encryption key when there is no secure channel available
- **Nonrepudiation** The property of digital signatures and encryption that can make it difficult or impossible for a party to later deny having sent a digitally signed message, unless they admit to having lost control of their private encryption key

##### Private Key Cryptosystems

A private key cryptosystem is based on a symmetric cryptographic algorithm. The primary characteristic of a private key cryptosystem is the necessity for both parties to possess a common encryption key that is used to encrypt and decrypt messages.

The two main challenges with private key cryptography are

- **Key exchange** An “out-of-band” method for exchanging encryption keys is required before any encrypted messages can be transmitted. This key exchange must occur over a secure channel; if the encryption keys were transmitted over the primary communications channel, anyone who intercepted the encryption key would be able to read any intercepted messages, provided they could determine the encryption algorithm used. For instance, if two parties want to exchange encrypted e-mail, they would need to exchange their encryption key first via telephone or fax, provided they are confident that their telephone and fax transmissions are not being intercepted.
- **Scalability** Private key cryptosystems require that each sender-receiver pair exchange an encryption key. For a group of 4 parties, 6 encryption keys would need to be exchanged; for a group of 10 parties, 45 keys would need to be exchanged. For a large community of 1,000 parties, many thousands of keys would need to be exchanged.

Some well-known private key algorithms in use include AES (Rijndael), Blowfish, DES, Triple DES, RC4, Serpent, Skipjack, and Twofish.

##### Secure Key Exchange

Secure key exchange refers to methods used by two parties to establish a symmetric encryption key securely without actually transmitting the key over a channel. Secure key exchange is needed when two parties, previously unknown to each other, need to establish encrypted communications where no out-of-band channel is available.

Two parties can perform a secure key exchange if a third party intercepts their entire conversation. This is because algorithms used for secure key exchange utilize information known by both parties but not transmitted between them.

The most popular algorithm is the Diffie-Hellman Key Exchange Protocol. Another algorithm in limited use is quantum key distribution (QKD).

##### Public Key Cryptosystems

Public key cryptosystems are based on _asymmetric_, or _public key_, cryptographic algorithms. These algorithms use two-part encryption keys that are handled differently from encryption keys in symmetric key cryptosystems.

---

##### Exchanging Initial Encryption Keys

Think about a private key cryptosystem. In an established cryptosystem, two users exchange messages and encrypt/decrypt them using an encryption key. Before they can begin exchanging encrypted messages, one of the users must first get a copy of the key to the other user. They have to do this prior to the establishment of the cryptosystem, so they cannot use the cryptosystem to transmit the key.

Secure key exchange, such as Diffie-Hellman, is used to transmit the key safely from one party to the other party. Once both parties have the key, they can begin sending encrypted messages to each other.

Without secure key exchange, the two parties would have to use some other safe, out-of-band means for getting the encryption key across to the other user.

---

**Key Pair** The encryption keys that are used in public key cryptography are the _public key_ and the _private key_. Each user of a public key cryptosystem has these two keys in his or her possession. Together, the public and private keys are known as a _key pair_. The two keys require different handling and are used together but for different purposes, as explained in this section.

When a user generates his or her key pair, the key pair will physically exist as two separate files. The user is free to publish or distribute the public key openly; it could even be posted on a public web site. This is in contrast to the private key, which must be well protected and never published or sent to any other party—like keys in a private key cryptosystem. Most public key cryptosystems will utilize a password mechanism to protect the private key further; without its password, the private key is inaccessible and cannot be used.

**Message Security** Public key cryptography is an ideal application for securing messages—e-mail in particular. The reason for this is that users do not need to establish and communicate symmetric encryption keys through a secure channel. With public key cryptography, users who have never contacted each other can immediately send secure messages to one another. Public key cryptography is depicted in [Figure 6-9](#ch6fig9).

![Images](/images/308b/ch0609.jpeg)

**Figure 6-9** Public key cryptography used to transmit a secret message

Every user is free to publish his or her public encryption key so that it is easily retrievable. There are servers on the Internet where public keys can be published and made available to anyone in the world. Public key cryptography is designed so that open disclosure of a user’s public key does not compromise the secrecy of the corresponding private key: a user’s private key cannot be derived from the public key.

When User A wants to send an encrypted message to User B, the procedure is as follows:

- **1.** User B publishes his public key to the Internet at a convenient location.
- **2.** User A retrieves User B’s public key.
- **3.** User A creates a message and encrypts it with User B’s public key and sends the encrypted message to User B.
- **4.** User B decrypts the message with his private key and is able to read the message.

Note that only User B’s encryption key is used in this example. This method is used only to protect the message from eavesdroppers. This method is not used to verify the authenticity of the message.

Public key cryptography can also be used to verify the authenticity and integrity of a message. This is used to verify that a specific party did, in fact, create the message. The procedure is as follows:

- **1.** User A publishes his public key to the Internet at a convenient location.
- **2.** User B retrieves User A’s public key and saves it for later use.
- **3.** User A creates a message and digitally signs it with his private key, and then sends the signed message to User B.
- **4.** User B verifies the digital signature using User A’s public key. If the message verifies correctly, User B knows that the message originated from User A and has not been altered in transit.

In this example, only the authenticity and integrity of a message are assured. The message is not encrypted, which means that any party that intercepts the message can read it.

Public key cryptography can be used both to encrypt and to digitally sign a message, which will guarantee its confidentiality as well as its authenticity. The procedure is as follows:

- **1.** User A and User B publish their public encryption keys to convenient places.
- **2.** User A retrieves User B’s public key, and User B retrieves User A’s public key.
- **3.** User A creates a message, then signs it with his private key and encrypts it with User B’s public key, and then sends the message to User B.
- **4.** User B decrypts the message with his private key and verifies the digital signature with User A’s public key.

Public key cryptography also supports encryption of a message with more than one user’s public key. This permits a user to send a single encrypted message to several recipients that is encrypted with each of their public keys. This method does not compromise the secrecy of any user’s private key, since a user’s private key cannot be derived from the public key.

---

##### Elliptic Curve Cryptography

Elliptic curve cryptography (ECC) is attracting interest for use in public key cryptography applications. ECC requires less computational power and bandwidth than other cryptographic algorithms and is thought to be more secure as well. Because of its low power requirements, it is used extensively in mobile devices.

---

**Verifying Public Keys** It is possible for a fraudster to claim the identity of another person and even publish a public key that claims the identity of that person. Four methods are available for verifying a user’s public key as genuine:

- **Certificate authority (CA)** A public key that has been obtained from a trusted, reputable certificate authority can be considered genuine.
- **E-mail address** Public keys used for e-mail will include the user’s e-mail address. If the e-mail address is a part of a corporate or government domain (for example, _[adobe.com](http://adobe.com/)_ or _seattle.gov_), then some level of credence can be attributed to the successful exchange of messages with that e-mail address. However, since e-mail addresses can be spoofed, this should be considered a weak method at best.
- **Directory infrastructure** A directory services infrastructure such as Microsoft Active Directory, LDAP, or a commercial product can be used to verify a user’s public key.
- **Key fingerprint** Many public key cryptosystems employ a method for verifying a key’s identity, known as the key’s fingerprint. If a user wants to verify a public key, the user retrieves the public key and calculates the key’s fingerprint. The user then contacts the claimed owner of the public key, who runs a function against his or her private key that returns a string of numbers. The user also runs a function against the owner’s public key, also returning a string of numbers. If both numbers match, the public key is genuine.

> **NOTE** When issuing a public key, it is essential that the requestor of the new public key be authenticated, such as by viewing a government-issued ID or by contacting the owner at a publicly listed telephone number.

##### Hashing and Message Digests

_Hashing_ is the process of applying a cryptographic algorithm on a block of information that results in a compact, fixed-length “digest.” The purpose of hashing is to provide a unique “fingerprint” for the message or file—even if the file is very large. A message digest can be used to verify the integrity of a large file, thus assuring that the file has not been altered.

Some of the properties of message digests that make them ideally suited for verifying integrity include

- Any change made to a file—even a single bit or character—will result in a significant change in the hash.
- It is computationally infeasible to make a change to a file without changing its hash.
- It is computationally infeasible to create a message or file that will result in a given hash.
- It is infeasible for any two messages to have the same hash.

One common use of message digests is on software download sites, where the computed hash for a downloadable program is available so that users can verify that the software program has not been altered (provided that the posted hash has not also been compromised).

##### Digital Signatures

A _digital signature_ is a cryptographic operation where a sender “seals” a message or file using his or her identity. The purpose of a digital signature is to authenticate a message and to guarantee its integrity. Digital signatures do not protect the confidentiality of a message, however, as encryption is not one of the operations performed.

Digital signatures work by encrypting hashes of messages; recipients verify the integrity and authenticity of messages by decrypting hashes and comparing them to original messages. In detail, a digital signature works like this:

- **1.** The sender publishes his public key to the Internet at a location that is easily accessible to recipients.
- **2.** The recipient retrieves the sender’s public key and saves it for later use.
- **3.** The sender creates a message (or file) and computes a message digest (hash) of the message, and then encrypts the hash with his private key.
- **4.** The sender sends the original file plus the encrypted hash to the recipient.
- **5.** The recipient receives the original file and the encrypted hash. The recipient computes a message digest (hash) of the original file and sets the result aside. She then decrypts the hash with the sender’s public key. The recipient compares the hash of the original file and the decrypted hash.
- **6.** If the two hashes are identical, the recipient knows that a) the message in her possession is identical to the message that the sender sent, b) the sender is the originator, and c) the message has not been altered.

The use of digital signatures is depicted earlier in this chapter in [Figure 6-6](#ch6fig6).

##### Digital Envelopes

One aspect of symmetric (private key) and asymmetric (public key) cryptography that has not been discussed yet is the computing requirements and performance implications of these two types of cryptosystems. In general, public key cryptography requires far more computing power than private key cryptography. The practical implication is that public key encryption of large sets of data can be highly compute-intensive and make its use infeasible in some occasions.

One solution to this is the use of a _digital envelope_ that utilizes the convenience of public key cryptography with the lower overhead of private key cryptography. This practice is known as _hybrid cryptography_. The procedure for using digital envelopes works like this:

- **1.** The sender and recipient agree that the sender will transmit a large message to the recipient.
- **2.** The sender selects or creates a symmetric encryption key, known as the _session key_, and encrypts the session key with the recipient’s public key.
- **3.** The sender encrypts the message with the session key.
- **4.** The sender sends the encrypted message (encrypted with the session key) and the encrypted session key (encrypted with the recipient’s public key) to the recipient.
- **5.** The recipient decrypts the session key with his private key.
- **6.** The recipient decrypts the message with the session key.

The now-deprecated SET (_secure electronic transaction_, a predecessor to SSL/TLS) protocol uses digital envelopes. Digital envelopes require less computing overhead than the Diffie-Hellman key exchange, which is why digital envelopes may be preferred in some circumstances.

##### Public Key Infrastructure

One of the issues related to public key cryptography is the safe storage of public encryption keys. Although individuals are free to publish public keys online, doing so in a secure and controlled manner requires some central organization and control. A _public key infrastructure_ (PKI) is designed to fulfill this and other functions.

A PKI is a centralized function that is used to store and publish public keys and other information. Some of the services provided by a PKI include

- **Digital certificates** This digital credential consists of a public key and a block of information that identifies the owner of the certificate. The identification portion of a digital certificate will follow a standard, structured format and include such data as the owner’s name, organization name, and other identifying information, such as e-mail address. The public key and the identifying information will reside in a document that is itself digitally signed by a trusted party, known as a certificate authority.
- **Certificate authority (CA)** A CA is a business entity that issues digital certificates and publishes them in the PKI. The CA vouches for the identity of each of the digital certificates in a PKI; the CA undergoes certain safeguards to ensure that each digital certificate is genuine and really does belong to its rightful owner.
- **Registration authority (RA)** The RA operates within or alongside a CA to accept requests for new digital certificates. The RA vets the request, carefully examines it, and undergoes steps to verify the authenticity of the person making the request. This verification may include viewing government-issued ID cards or passports or taking other steps as needed to ensure that the request is originating from the genuine person. When the RA is satisfied that the requestor is indeed the person making the request, the RA will issue a digital certificate. Part of the certificate issuance will be the delivery of private encryption keys to the requesting party. This may take place in person or over a secured electronic connection.
- **Certificate revocation list (CRL)** Some circumstances may require that a user’s digital certificate be cancelled or revoked. These circumstances include termination of employment (if a person’s certificate was issued expressly for employment-related purposes) or loss or compromise of a user’s private key. A CRL is an electronic list of digital certificates that have been revoked prior to their expiration date. To be effective, any consumer of digital certificates needs to consult a CRL to be doubly sure that a certificate remains valid.
- **Certification practice statement (CPS)** This published statement describes the practices used by the CA to issue and manage digital certificates. This helps determine the relative strength and validity of digital certificates that are issued by the CA.

##### Key Management

The term _key management_ refers to the various processes and procedures used by an organization to generate, protect, use, and dispose of encryption keys over its lifetime. Several of the common practices are described in this section.

**Key Generation** The start of an encryption key life cycle is its generation. While at first glance it would appear that this process should require little scrutiny, further study shows that this is a critical process that requires safeguards.

The system on which key generation takes place must be highly protected. If keys are generated on a system that has been compromised or is of questionable integrity, it would be difficult to determine whether a bystander could have electronically observed key generation. For instance, if a key logger or other process spying tool were active in the system when keys were generated, the key generation may have been observable and details about keys captured. This would mean that newly minted keys have already been compromised if an outsider knows their identities.

In many situations, it would be reasonable to require that systems used for key generation be highly protected, isolated, and used by as few persons as possible. Regular integrity checks would need to take place to make sure the system continues to be free of any problems.

Furthermore, the key generation process needs to include some randomness (or, as some put it, entropy) so that the key generation process cannot be easily duplicated elsewhere. If key generation were not a random event, it could be possible to duplicate the conditions related to a specific key and then regenerate a key with the very same value. This would instantaneously compromise the integrity and uniqueness of the original key.

**Key Protection** Private keys used in public key cryptosystems and keys used in symmetric cryptosystems must be continuously and vigorously protected. At all times they must be accessible _only_ to the parties that are authorized to use them. If protection measures for private encryption keys are compromised (or suspected to be), it will be possible for a key compromise to take place, enabling the attacker to view messages encrypted with these keys.

In commercial environments, keys are often protected in a _hardware security module_ (HSM), as depicted in [Figure 6-10](#ch6fig10).

![Images](/images/308b/ch0610.jpeg)

**Figure 6-10** Hardware security module (Image courtesy of Rstubbs2)

A _key compromise_ occurs when a private encryption key has been disclosed to any unauthorized third party. When a key compromise occurs, it will be necessary to re-encrypt all materials encrypted by the compromised key with a new encryption key.

> **CAUTION** In many applications, an encryption key is protected by a password. The length, complexity, distribution, and expiration of passwords protecting encryption keys must be well designed so that the strength of the cryptosystem (based on its key length and algorithm) is not compromised by a weak password scheme protecting its keys.

**Key Encrypting Keys** Applications that utilize encryption must obtain their encryption keys in some way. In many cases, an intruder may be able to examine the application in an attempt to discover an encryption key, so that the intruder may decrypt communications used by the application. A common remedy for this is the use of encryption to protect the encryption key. This additional encryption requires a key of its own, known as a _key encrypting key_. Of course, this key also must reside someplace; often, features of the underlying operating system may be used to protect an encryption key as well as a key encrypting key.

**Key Custody** _Key custody_ refers to the policies, processes, and procedures regarding the management of keys. This is closely related to key protection but is focused on _who_ manages keys and _where_ they are kept.

**Key Rotation** _Key rotation_ is the process of issuing a new encryption key and re-encrypting data protected with the new key. Key rotation may occur when any of the following occurs:

- **Key compromise** When an encryption key has been compromised, a new key must be generated and used.
- **Key expiration** In some situations, encryption keys are rotated on a schedule.
- **Rotation of staff** In some organizations, if any of the persons associated with the creation or management of encryption keys transfers to another position or leaves the organization, keys must be rotated.

**Key Disposal** _Key disposal_ refers to the process of decommissioning encryption keys. This may be done upon receipt of an order to destroy a data set that is encrypted with a specific encryption key—destroying an encryption key can be as effective (and a whole lot easier) than destroying the encrypted data itself.

However, key disposal can present some challenges. If an encryption key is backed up to tape, for instance, disposal of the key will require that backup tapes also be destroyed. Hence, it is crucial to dispose of an encryption key _only_ after it is determined that it is no longer needed.

> **NOTE** A novel method for data disposal is the destruction of encryption keys.

##### Encryption Applications

Several applications utilize encryption algorithms. Many of these are well known and in everyday use.

**Secure Sockets Layer/Transport Layer Security (SSL/TLS)** SSL and TLS are the encryption protocols used to encrypt web pages requested with the HTTPS (Hypertext Transfer Protocol Secure). Introduced by Netscape Communications for use in its own browser, SSL and its successor, TLS, have become de facto standards for the encryption of web pages.

SSL and TLS provide several cryptographic functions, including public key encryption, private key encryption, and hash functions. These are used for server and client authentication (although in practice, client authentication is seldom used) and session encryption. SSL and TLS support several encryption algorithms, including AES, RC4, IDEA, DES, and Triple DES, and several key lengths, from 40 bits to 256 bits and beyond.

Weaknesses were discovered in all versions of SSL as well as the first version of TLS; therefore, any versions of SSL and TLS 1.0 should not be used.

> **EXAM TIP** Remember that all versions of SSL and the early versions of TLS are now considered deprecated and should no longer be used.

**S-HTTP (Secure Hypertext Transfer Protocol)** Not to be confused with HTTPS, S-HTTP also provides encryption of web pages between web servers and web browsers. Because Netscape and Microsoft favored HTTPS, S-HTTP never caught on and is not widely supported.

The main difference between HTTPS and S-HTTP is that HTTPS secures the entire channel, regardless of the data that is transmitted through it. S-HTTP protects only individual pieces of data or messages.

**Secure/Multipurpose Internet Mail Extensions (S/MIME)** S/MIME is an e-mail security protocol that provides sender and recipient authentication and encryption of message content and attachments. S/MIME is most often used for encryption of e-mail messages.

**Secure Shell** SSH is a multipurpose protocol that is used to create a secure channel between two systems. The most popular use of SSH is the replacement of the Telnet and R-series protocols (rsh, rlogin, and so on), but it also supports tunneling of protocols such as X-Windows and File Transfer Protocol (FTP).

**Internet Protocol Security** IPsec is a protocol used to create a secure, authenticated channel between two systems. IPsec operates at the Internet layer in the TCP/IP suite; hence, all IP traffic between two systems protected by IPsec is automatically encrypted.

IPsec operates in one of two modes: ESP and AH. If ESP is used, all encapsulated traffic is encrypted. If AH is used, only IPsec’s authentication feature is used.

**Secure Electronic Transaction (SET)** SET is a now-deprecated protocol designed to protect Internet-based financial transactions. SET never caught on because it required the installation of a separate client program. HTTPS became the standard for encrypting web pages and then became the preferred method for encryption.

SET offered greater protection of credit card transactions through the substitution of tokens for actual credit card numbers. But SET never caught on, and it is no longer used.

**Blockchain** A _blockchain_ is a distributed ledger used to record cryptographically linked transactions in a peer-to-peer network. Once recorded, transactions in a blockchain cannot be altered or removed. Blockchain is, by design, decentralized. Implementations of blockchain include the Bitcoin cryptocurrency as well as emerging uses in financial services and supply chain management.

#### Voice over IP

_Voice over IP_ (VoIP) encompasses several technologies that permit telephony that is transported over IP networks. Other terms associated with VoIP include _Internet telephony_ and _IP telephony_. These terms all describe services for transporting voice, video, and facsimile over IP networks, including the Internet. Organizations that implement VoIP will incorporate one or more of the following:

- **Trunking** Replace older technology voice trunks with SIP (Session Initiation Protocol) trunks that have far greater capacity and lower costs. Trunks can connect an organization’s private branch exchange (PBX) to telecommunications providers that offer VoIP trunking. Also, an organization can connect its digital PBXs in various locations together via MPLS (Multiprotocol Label Switching) over IP WAN connections.
- **Digital PBX** Replace older PBX systems with newer PBXs that support VoIP and SIP trunking.
- **VoIP handsets** Replace digital and analog telephone sets with IP telephone sets that connect to the PBX via TCP/IP over Ethernet or Wi-Fi.
- **VoIP clients** Replace telephone sets with software programs on workstations that communicate over TCP/IP to the PBX. Often called _softphones_, these programs eliminate the need for separate telephone handsets.

##### VoIP Threats and Vulnerabilities

The primary threat to VoIP systems is the fact that an organization’s telephone network is connected to the TCP/IP network and thus is vulnerable to all the types of attacks that plague workstations and servers. Furthermore, many VoIP components run on devices and systems that use conventional operating systems such as Unix. That means that most VoIP components are vulnerable to the same class of threats that servers and workstations are subject to. These threats include

- **Eavesdropping** Attackers may attempt to listen in to voice, video, and facsimile transmissions.
- **Spoofing** Attackers can send packets to VoIP devices, systems, and PBXs that impersonate other devices and systems. Possible reasons include stealing information, altering information, denial of service, toll fraud, and more.
- **Malware** This includes viruses, worms, Trojan horses, rootkits, and so on.
- **Denial of service** This attack is designed to disable a target system or network by flooding it either with an enormous volume of traffic or with specially crafted traffic designed to cause the target to malfunction.
- **Toll fraud** This attack is designed to steal long-distance service by using another organization’s telephone network for personal use.

These and other threats are not unique to VoIP but plague all kinds of IP and Internet-connected networks and systems. For a complete discussion on threats and vulnerabilities, see the section “Logical Access Controls,” earlier in this chapter.

> **CAUTION** An organization that employs VoIP must now take even greater care to protect its networks. For such an organization, an attack on the network will threaten not only computer networks but also voice communications.

##### Protecting VoIP

Because VoIP systems communicate over TCP/IP, and because many are based on conventional operating systems, VoIP is protected through primarily the same measures that are used to protect other IT systems. The protection measures that are most effective include

- Network segmentation
- System and device hardening
- Strict access controls and access management
- Anti-malware controls
- Security event monitoring
- Firewalls and session border controllers (SBCs)
- Intrusion detection systems

These and other countermeasures are discussed in detail in the section “Logical Access Controls,” earlier in this chapter.

#### Private Branch Exchange

A PBX is a private telephone switch used by an organization to manage its internal telephone calls as well as telephone calls with parties in the public telephone network. Workers in an organization can often call one another with shortened phone numbers, such as four-digit extensions, and call “outside” numbers using a prefix such as “8” or “9.”

PBXs are connected to the public-switched telephone network (PSTN) via one or more _trunks_, which are telecommunications circuits designed to carry several simultaneous telephone conversations. Implemented over telephony circuits such as T-1 or E-1, trunks are leased from common-carrier telecommunications carriers.

##### PBX Threats and Vulnerabilities

A variety of security issues affect PBXs. IT managers and security professionals need to be aware of these threats and vulnerabilities to be able to protect them. Some of these include

- **Default passwords on administrator console** This can permit anyone with physical access to the PBX to change the configuration of the PBX or extract data from it (including phone records and access controls). Passwords on many PBXs are left at factory default; this is an old practice still in place today.
- **Dial-in modem** Many PBXs employ an administrative dial-in modem so that the PBX administrator can perform remote administrative duties. Often, dial-in access uses either a default password or no authentication at all.
- **Toll fraud** One of the most enticing opportunities on a PBX is the ability to commit toll fraud by using it to place long-distance telephone calls. This is done by logging into the PBX (when passwords are weak or nonexistent) and changing its configuration to permit the attacker to place long-distance calls at the PBX owner’s expense.
- **Espionage** PBXs are also the target of attempts to eavesdrop on telephone conversations as well as retrieve phone records.

Many PBXs have IP connections to facilitate remote administrative access. PBXs with IP connectivity are subject to the broader scope of IP-related threats and vulnerabilities that are discussed in detail earlier in this chapter in the section “Logical Access Controls.”

##### PBX Countermeasures

PBXs without IP connectivity are relatively easy to protect. Some of the most effective countermeasures include

- **Administrative access control** Console and modem access should be configured with the strongest reasonable controls, including strong, complex passwords; multifactor authentication; administrative access logging; and dial-back modems.
- **Physical access control** Only authorized personnel should have physical access to the PBX. A PBX should be protected with keycard and/or video surveillance so that the organization can positively identify individual personnel who access it.
- **Regular log reviews** Administrative personnel should regularly review access logs to verify that only authorized personnel are accessing administrative consoles and functions. Furthermore, toll records should be reviewed frequently to ensure that no toll fraud is taking place.
- **Calling restrictions** Administrative personnel should configure a PBX to block outbound calling to countries that the organization does not call. This will help to combat toll fraud should an intruder gain access to an outbound call trunk.

PBXs with IP connectivity will require additional IP-centric countermeasures that are similar to those required for servers and other network-connected devices.

#### Malware

_Malware_ is an inclusive term that refers to many types of malicious code, including viruses, worms, Trojan horses, rootkits, and more. Malware is increasingly stealthy and potent, and if the past 20 years is any indication, malware will always be one step ahead of the measures used to try to keep it at bay.

Blocking malware is rarely a matter for discussion, any more than locks on the outside doors. The malware threat is just too real, and the consequences can be devastating.

Malware has many attack vectors, meaning it has many ways to get into an organization, which requires a variety of defenses operating simultaneously. It is no longer sufficient to run only antivirus software on end-user workstations; instead, it is necessary to employ several means of detecting, blocking, and responding to malware.

##### Malware Threats and Vulnerabilities

Malware is capable of making a wide variety of mischief, as well as serious trouble, for organizations. The earliest viruses were relatively benign, whereas contemporary malware is able to produce a wide range of economic damage.

There are several classes of malware:

- **Viruses** These fragments of code attach themselves to .exe files (executable programs) in Microsoft operating systems and are activated when the program they are attached to is run.
- **Worms** These stand-alone programs are capable of human-assisted and automatic propagation.
- **Ransomware** As a highly successful attack method, ransomware encrypts data on a user’s workstation and, optionally, on network shares, and then issues instructions to victims to remit ransom payments to recover their encrypted data.
- **Destructware** This malware is designed to destroy information irretrievably and, in some cases, render information systems unbootable.
- **Trojan horses** As the name suggests, these programs are purported to perform one function but actually perform other (or additional) undesired functions. For example, something might be advertised as a game that actually erases files (or does both).
- **Spyware** This type of software performs one or more surveillance-type actions on a computer, reporting back to the spyware owner. The most insidious form of spyware is the key logger, a software program (and also an implantable hardware device) that records user keystrokes and transmits them back to a central location.
- **Rootkits** These malware programs are designed to hide from the operating system as well as evade detection by antivirus software. Some rootkits are also able to run “underneath” the operating system so that they are undetectable.
- **Bots** These are agents implanted by other forms of malware that are programmed to obey remotely issued instructions. Collections of bots are called _bot armies_. These are built to create spam, propagate malware, attack target systems and networks, and host phishing sites.

> **CAUTION** Security managers and architects need to understand the different types of malware thoroughly—how they are made, how they propagate, and how they attack systems. But security professionals can’t forget the forest for the trees: it is essential to establish a defense-in-depth set of controls to block all types of known and unknown malware and to respond effectively when malware attacks occur.

The types of damage that malware can cause include

- Computer slowdowns and crashes
- Alteration, encryption, or destruction of data
- Eavesdropping on communications
- Theft of sensitive data
- Damage to system hardware
- Attack or damage to other systems

Malware infiltrates an organization through avenues of opportunity. The vulnerabilities that malware is able to exploit include

- **Missing patches** Many malware programs are designed to exploit known vulnerabilities that remain on many computers that do not have security patches installed.
- **Software flaws** Malware designers will use various tools to discover and exploit flaws in applications, operating systems, tools, and other programs. Some of these flaws may be known and have patches available, but others may be relatively unknown.
- **Unsecure configuration** Old, outdated, or incorrectly set configuration settings can leave a computer vulnerable to attack.
- **Faulty architecture** Flaws in a network’s architecture (for example, incorrect placement of a firewall that exposes too many systems) or errors in implementation can leave systems open to attack.
- **Faulty judgment** Mistakes and decisions that are based on incomplete knowledge can lead to configuration or architecture errors that introduce vulnerabilities.
- **Gullibility** Often, the target of malware is end users’ gullibility and curiosity. They are inclined to click links in phishing messages, open attachments, and visit unknown sites—all of which are nowadays the primary means for injecting malware into their computers.

Malware’s most common threat vectors to organizations include

- **Phishing** Phishing messages impersonate real government and private institutions, pretending to communicate urgent news to customers and others, who need to act quickly. A common ploy is an e-mail message from a bank telling customers that their bank accounts will be locked unless they respond by logging in to an imposter site. People who fall for these schemes inadvertently provide login credentials to thieves, who use them to transfer funds out of their victims’ accounts. Many similar schemes exist that attempt to steal money or other valuables from victims.
- **Spam** Junk e-mail often either contains malware or entices users to connect to web sites that contain malware. Spam also includes e-mail messages that advertise both legitimate goods and services as well as fakes; prescription medication is a good example of the phony merchandise that many people buy in the hopes of saving money or achieving world conquest.
- **Spear phishing** This is phishing that is specially crafted for a single target organization or audience. Spear phishing is more difficult for end users to discern because the e-mail messages resemble authentic messages originating from within the organization.
- **Whaling** This is spear phishing that specially targets executives in an organization.
- **Denial of service** Some malware deliberately causes computers to malfunction. Plus, malware that is designed to spread from computer to computer rapidly over networks will cause high volumes of network traffic that make the networks, as well as computers, unusable.
- **Screen scraping** Some malware is designed to intercept data displayed on users’ computer screens.
- **Key logging** Some malware is designed to intercept keystrokes and displayed information and relay that data back to a central location. The information of greatest interest is credit card numbers, bank account numbers, and user ID-and-password combinations for high-value sites such as online banking.

##### Anti-Malware Administrative Controls

Organizations’ anti-malware controls need to include several administrative controls to stop the introduction and spread of malware. These controls include policies such as

- **Spam policy** Security policy and awareness training need to include “don’t open strange or unusual e-mail messages, even from people you know” guidance to workers. Even in an environment with effective spam filters, some spam does get through, so this policy helps users think twice before opening them.
- **Only business-related Internet access** Because some malware spreads through malicious code implanted on web sites (and for other reasons such as lost productivity), organizations may forbid its employees from visiting web sites with no direct business purpose.
- **No removable media** Malware can be introduced via removable media. In fact, the earliest viruses were spread via floppy disk. Today, many organizations forbid, and even actively block, the use of removable media such as USB drives and memory sticks.
- **No downloading** Because some malware is implanted in downloadable software, many organizations have enacted policies that forbid the practice of downloading software. Instead, requests are made to the IT service desk if additional software or tools are needed.
- **Restricted privileges** Earlier versions of popular operating systems by default configured end-user accounts at the same level of privilege as system administrators. The harmful result of this was that malware, introduced by end users, would execute on the computer with administrative privileges and cause significant damage. The new norm is to restrict end-user workstation privileges to the lowest access level, thereby reducing malware potency.
- **No personally owned computers** In many organizations, it was once okay to access the corporate network remotely using personally owned computers. Because the organization is unable to control the spread of malware on computers it does not own or control, the right place to draw the line is to enact a policy that forbids all but company-owned computers from connecting to any network, local or remote.
- **Restricted smartphone access** Organizations that don’t take the hard line of “no personally owned computers will connect to the network, including smartphones” may take a softer line and permit limited access for smartphones, such as e-mail access only.

##### Advanced Persistent Threats

The phenomenon known as _advanced persistent threats_ (APTs) represents the technique of hard-to-detect and continuous attacks on an organization, through the use of reconnaissance, social engineering attacks, and malware attacks. APTs are particularly difficult to defend against as the attacker is generally focused on attacking a single organization, while personnel in the organization are reacting and trying to always stay one step ahead.

##### Anti-Malware Management Controls

Several procedural controls are needed to ensure that systems remain free of malware:

- Include anti-malware procedures in employee security awareness training.
- Build servers only from original read-only media.
- Scan all incoming e-mail messages for malware prior to releasing them to users.
- Evaluate all URLs in e-mail messages at the time that users click them to evaluate them for maliciousness.
- Scan all new software (regardless of source) for malware on nonproduction systems prior to use.
- Prohibit any use of personally owned computers for any business purpose, on or off work premises.
- Scan all incoming files for malware prior to releasing them for use.
- Verify all network equipment software releases as genuine and free of malware prior to use.

---

##### The Malware Industry

The face of malware is rapidly changing. Once the purview of hacker-hobbyists and script kiddies, malware is now the domain of large organized crime syndicates and cyber-criminal organizations. These are businesses with investors, research and development, profit sharing, and benefits. The only thing that makes them fundamentally different from legitimate businesses is that organized crime is in the business of conducting illegal operations, such as financial fraud.

The U.S. Treasury Department published a report in 2006 that claimed that, on a worldwide scale, organized crime was making more profits from Internet-based fraud than from drug trafficking. And 14 years later, they are just getting better at it.

---

---

##### Malware: Avoiding Repeats of History

For the most part, organizations are serious about stopping malware at the network boundary. This is because they remember malware attacks of the past 20 years that completely incapacitated corporate networks for days at a time. Malware with names like Code Red, Blaster, SQL Slammer, Duqu, Mirai, and Conficker evoke memories of battles to keep corporate networks running.

Those were painful events that resulted in business disruptions that were sometimes severe enough to affect financial results. Pointed questions from senior executives, who often did not understand the rules of the new cyber-wars, distracted IT managers from their primary objective: keep the malware out of the network!

---

##### Anti-Malware Technical Controls

Because malware is so potent, and because some kinds of malware are able to spread without any human interaction or assistance, a defense-in-depth strategy for blocking it is needed in most organizations to make sure that malware has few opportunities to enter the network:

- **Advanced anti-malware software** Antivirus software is no longer sufficient to detect and block malware. Additional software programs and agents installed on endpoint systems are needed to detect and block today’s malware.
- **Anti-malware on all servers and workstations** Every workstation should have current anti-malware software installed, functioning, and up to date. It should be configured to perform real-time malware detection, plus regular scans (daily in high-risk environments, weekly in others). Users should not be able to remove or tamper with anti-malware software, even if they are local administrators for their workstations. However, users should be able to perform scans on demand if they sense that their system may be infected.
- **Anti-malware on e-mail servers** E-mail servers should have anti-malware programs designed to block malware on incoming and outgoing e-mail. This cannot be ordinary anti-malware software, but should be a type designed to run on an e-mail server and interoperate with the e-mail server programs.
- **Anti-malware on web proxy servers/filters** Organizations should have active or passive web proxy servers that have anti-malware software on board. This will prevent malware from entering an organization from web sites that users are visiting.
- **Centralized anti-malware console** Organizations should consider using enterprise versions of anti-malware software that provide central monitoring and configuration consoles. This gives the organization the ability to see the “big picture” instantly with regard to anti-malware controls. For instance, a console will show which workstations’ anti-malware programs are having trouble running or getting new updates and where infections are occurring. Centralized consoles can also be used to force selected systems to perform immediate malware signature updates and perform scans if management believes that a malware outbreak is imminent or in progress.
- **Data loss prevention (DLP) systems** Organizations should consider the use of DLP systems, which detect and can block the unauthorized transfer and exfiltration of sensitive data. While this may be considered a last line of defense against the compromise of sensitive data, DLP systems can nonetheless prevent the loss of valuable and sensitive information.
- **End-user reduced privileges** Organizations can limit the privilege level that end users have on their workstations. This can help to blunt the impact of malware, since malware generally executes at the same level of privilege as the end user who triggered it. This measure also reduces the ability for end users to tamper with and “improve” their workstations, which can help to reduce support costs.
- **Intrusion prevention systems (IPS)** Organizations can employ agented or agentless IPSs that will automatically sense activities typical of malware. An IPS has the ability to disconnect an infected system from the network immediately so that it cannot infect other systems or disrupt network traffic. Endpoint-based IPSs can effectively block known command and control traffic, reducing or eliminating the effects of malware.
- **Spam filters** A lot of malware (not to mention phishing schemes and fraud) enters an organization through e-mail. Centralized spam filters can intercept and block spam before it even reaches the e-mail server. Many spam filters also have antivirus programs on them to scrub viruses from incoming e-mail—even when it comes from legitimate, known persons.
- **Blocking use of removable media** While external memory devices such as USB sticks and external hard drives are popular, they do represent a number of threats, including malware. Blocking removable media is also one measure that is effective against information leakage.
- **Block outbound network services on servers** It is rare that a server should need to initiate communications over the Internet, except for specific business connections that may be a part of distributed applications. All other accesses should be blocked. This would effectively block any malware’s attempt to communicate information back to its source.
- **Boot servers from protected images** In virtual environments, it is possible to boot servers from read-only images stored on a centralized storage system. This would prevent malware from being able to install itself on a server permanently, since the next reboot from a clean image would effectively remove it.
- **Block read-only objects** Except in rare and well-controlled circumstances, software should not be able to write to a hard drive’s boot sector or the system’s CMOS (complementary metal oxide semiconductor, the technology used to store a computer’s hardware configuration). These and possibly other portions of a system should be protected so that malware cannot alter or destroy them.

> **CAUTION** Blocking malware is not a one-time effort of procuring and configuring tools. Instead, this should be thought of as the “malware wars” that continue indefinitely and require constant vigilance.

#### Information Leakage

_Information leakage_ refers to the tendency for sensitive information to leak out of an organization’s systems through various means. Blocking opportunities for information leakage is a developing area in IT today.

There are fundamentally two forms of information leakage: accidental and malicious. Accidental leakage occurs when, for instance, an employee selects the wrong recipients in an outgoing e-mail that contains sensitive information and mistakenly sends sensitive information to the wrong external party, resulting in a potential security breach.

Deliberate information leakage occurs when an employee chooses to acquire sensitive data with the intention of taking it out of the organization. There are two primary reasons and motivations for this:

- **Profit** Some sensitive information such as credit card and bank account numbers are easily sold on the black market.
- **Revenge** If the employee senses that injustice has occurred—or will occur—in the organization, the employee may plan a form of revenge by taking copies of sensitive information for later use, whether for extortion, exposure, or profit.

Leakage also occurs when malware intercepts login credentials, resulting in a hacker’s ability to log in and steal sensitive information. Leakage is multifaceted and extends into other areas, including social engineering, malware, proper HR hiring procedures, and more.

Leakage can also occur when, for example, a user performs a query in an application containing sensitive data and saves the result on a local hard drive, file server, or Internet-based file storage service such as Box or Dropbox. This is generally considered a lack of good judgment in the gray area between accidental and malicious intent.

Because of the numerous means available for users to remove data deliberately from the organization, several measures should be taken to limit those opportunities, including

- **Outbound e-mail filtering** Outbound e-mail filters that check for information leakage can be used to observe and even block sensitive information that is leaving the organization.
- **Control removable media** Through centralized automatic policies, organizations can prevent the use of USB media, writing to optical discs, and other actions contributing to information leakage.
- **Blocking Internet access** Users in the most sensitive functions (those with access to the most sensitive information) should be prevented from accessing any computer or network outside of the organization. This not only reduces the likelihood of malware infecting a sensitive system, but it reduces the opportunity for leakage. Preventing end users from using personal e-mail is a safeguard used by many organizations.
- **Tighter access controls** Organizations should periodically examine their access controls for the most sensitive information, looking for more ways to reduce the ability for people to access that data, except in situations where they must do so for business purposes. When fewer people have access, there will be fewer opportunities for leakage.
- **Access logging** The organization should improve access logging so that all accesses (not just updates) to information are logged. This can be an effective detective control, since this would tell the organization who is accessing which data records. If the organization discloses the logging to its workers, this also becomes a deterrent control, not unlike video surveillance.
- **Job rotation** Staff members should be periodically shifted into other positions so that their opportunities for covertly extracting information are fewer. When organizations shift their employees on short notice and on sporadic schedules, employees are less likely to engage in information-pilfering schemes because they do not want to get caught.
- **Periodic background checks** Organizations should consider periodic background checks for employees in positions of access to sensitive information. Changes in an employee’s current background may provide additional incentives for employees to engage in unauthorized or illegal acts. For instance, an employee whose credit background has gone from good to terrible may be tempted to find ways to supplement his income, such as embezzlement or selling information on the black market. Also, an employee who started employment with a clean criminal record may, over time, turn to the dark side and enter a lifestyle of crime. That two-week vacation last year could actually have been a jail sentence.
- **Implement a DLP system** Organizations can implement a DLP system that will observe all inbound and outbound network traffic and create alerts when sensitive information is believed to be leaving or entering. Some DLP systems can also block these transmissions, thereby blocking illegitimate attempts to steal information and forcing legitimate activities to use more prudent means such as encryption.

> **NOTE** Employers should understand that a patient employee who is determined to remove information from the organization would probably be able to do so despite many controls to detect or prevent it. For systems containing the most sensitive information, security specialists should perform a detailed risk analysis to understand precisely how data leakage can be controlled in their organization.

### Environmental Controls

Computers and networks operate in the physical world. Networks consist of devices such as routers, switches, and firewalls, plus cabling within and between buildings. Computer systems and network devices are designed to operate within a narrow band of temperature, humidity, moisture, and cleanliness. When they operate within these bounds, they are likely to provide years of service, but even brief periods outside these bounds can significantly shorten the life of many components.

Organizations that employ computers and networks to support vital business processes need to provide suitable environments for them. Failure to do so can result in higher operating costs and business disruptions resulting from more frequent unscheduled downtime due to environmental conditions. This section discusses the environmental systems and controls required to maintain a suitable environment for computers and networks.

#### Environmental Threats and Vulnerabilities

Computer systems require special facilities that include reliable electric power, environmental controls, and physical security. By their very nature, the controls that support and protect computer systems are complex and require periodic maintenance to provide reliable service. Redundant controls or systems are often needed for organizations intolerant of downtime.

This section discusses electric power, cooling and humidity controls, fire detection and suppression, and physical security.

##### Electric Power Vulnerabilities

Computer systems require a steady diet of clean electric power. The quality and delivery of electric power from virtually every public utility falls far short of the needs required by IT systems. Several power-related events threaten the health of computer equipment, including

- **Spike or surge** A sharp increase in voltage that lasts for only a fraction of a second
- **Inrush** A sudden increase in current flowing to a device, usually associated with the startup of a large motor, which can cause a voltage drop that lasts several seconds
- **Noise** The presence of other electromagnetic signals within incoming power
- **Dropout** A momentary loss of power that lasts from a few milliseconds to a few seconds
- **Brownout** A sustained drop in voltage that can last from several seconds to several hours
- **Blackout** A complete loss of electric power for more than a few seconds

All of these phenomena can damage computer and network equipment by damaging internal components that make them fail outright or through latent damage that may shorten the life of an electronic component such as a power supply.

##### Physical Environment Vulnerabilities

Computer and network equipment is sensitive to changes in environmental conditions. The conditions that warrant discussion here are

- **Temperature** Computer and network equipment generate potentially large volumes of waste heat that must be continuously siphoned away. Even a brief interruption in environmental systems can cause sharp rises in temperature that can damage equipment. A temperature that is too low can cause condensation on equipment, which can invite corrosion and even cause short circuits when it occurs on electrical components.
- **Humidity** Computer and network equipment must operate within a narrow band of humidity, usually 40 to 55 percent. When humidity drops below 40 percent, static buildup can occur that can damage sensitive electronics. Excessively high humidity can result in condensation, inviting corrosion and short circuits, causing the failure of computers and network equipment.
- **Dust and dirt** Computer and network equipment is designed to be used in clean environments that are reasonably free of dust and dirt. Dust and dirt can accelerate wear in mechanical components and clog air filters, causing heat buildup.
- **Smoke and fire** A fire that is in or near a data center can introduce smoke, which can damage computer and network equipment. Fire extinguishing agents such as water can also damage sensitive equipment. Fire departments often cut electric power to a building when there is a fire, so even equipment that is not threatened by the fire will suffer the effects of a power outage.
- **Sudden unexpected movement** Earthquakes and landslides can violently shake equipment, pulling it away from its fastenings. Personnel moving equipment may accidentally bump into other devices or snag or damage loose cabling.

#### Environmental Controls and Countermeasures

Several environmental control systems are required to counteract the threats and vulnerabilities discussed in this section. When designed and operated correctly, these controls will contribute to high reliability and a good service record for IT equipment, which is sensitive to environmental conditions.

##### Electric Power

Because the quality of commercial utility electric power is usually insufficient for sensitive and critical computing equipment, several additional controls may be needed to improve the quality and/or quantity of available electric power. These controls are described in the following sections and depicted in [Figure 6-11](#ch6fig11).

![Images](/images/308b/ch0611.jpeg)

**Figure 6-11** Components in a facility power system

**Uninterruptible Power Supply (UPS)** This is a system that filters incoming power from spikes and other noise and supplies power for short periods through a bank of batteries. A UPS is sufficient for power outages that last from a few minutes to as long as a few hours (provided there is sufficient battery capacity). A UPS provides a continuous supply of electricity; when there is a brownout or blackout, power delivered to computer systems is unaffected.

**Electric Generator** This is a system consisting of an internal combustion engine powered by gasoline, diesel fuel, or natural gas that spins an electric generator. A generator can supply electricity for as long as several days, depending on the size of its fuel supply and whether it can be refueled.

Electric generators require several seconds to a few minutes to start up and provide emergency power. For this reason, electric generators are implemented in conjunction with a UPS system. In the event of a power failure, the UPS provides an uninterrupted flow of power and provides that power via its batteries until the generator has started and is producing electricity. Further, in a sustained power failure, many generators must be shut down for refueling (and indeed for any required maintenance); the UPS once again provides continuous power for this purpose.

Larger facilities employ multiple electric generators for larger workloads and greater overall reliability.

**Dual Utility Power Feeds** An organization that is dependent on reliable electric power can consider using two separate electric utility power feeds that would ideally originate from separate utility substations. This safeguard helps to ensure a steady supply of electric power, even in the event of the outage of a utility company distribution line.

**Transfer Switch** Facilities that use a UPS, one or more electric generators, and one or more public utility power feeds also employ a system of electrical switching equipment known as a _transfer switch_. A transfer switch automatically routes power among one or more public utility feeds, one or more generators, through one or more UPSs into the facility.

**Power Distribution Unit** A _power distribution unit_ (PDU) is a device that distributes electric power to a computer room or data center. A PDU may be large and supply dozens of separate power circuits or may be as small as a power strip. Some PDUs also have voltage step-down capabilities, converting higher input voltages into voltage levels used by computer equipment.

**Multiple Power Feeds** Some organizations with high reliability requirements may build fully redundant power systems consisting of dual power feeds, dual switchgear, generators, UPSs, and PDUs, delivering fully redundant power to each computer and network device. Organizations that utilize redundant power systems usually refer to their power systems as “A-side” and “B-side” systems. Computer and network equipment that utilizes dual power supplies can take advantage of redundant power systems by connecting one power supply to the A-side and one to the B-side. This permits systems to continue functioning, even in the event of a complete failure of any single component in the facility’s power system. All such protected equipment will continue operating without interruption.

**Power Planning** It is crucial to understand present and future electric power requirements so that the facility’s electric power distribution components discussed here can be appropriately sized. Data centers generally size their power systems by calculating a minimum number of watts delivered to each square foot of data center space or to each cabinet. In the 1990s and early 2000s, data centers were generally configured to provide 40–100 watts per square foot, or as much as 3.125 kW per cabinet. However, with rapid advances in server technology, these figures have become inadequate. Modern data centers that need to get the most out of their IT equipment will plan for 150–200 watts per square foot, or as much as 6.250 kW per cabinet.

Data centers use different methods for calculating power requirements. Power figures often encompass an entire room or cage, which includes hot and cold aisles.

Planning for too high a power density will almost certainly result in excess electrical capacity, which is considered a waste of capital. Correspondingly, however, too small a figure per square foot or per cabinet will result in the data center running out of power before it runs out of space.

Many data centers that experience insufficient electric power are exploring ways of increasing their capacity. One solution is to use ambient air cooling instead of more expensive air conditioning. This is discussed in the next section.

##### Temperature and Humidity Controls

Because computing and network equipment sheds a large volume of waste heat, highly reliable and adequately sized HVAC (heating, ventilation, and air conditioning) systems are required.

The temperature in rooms containing computer and network equipment should range from 68° to 75°F (20° to 24°C), and humidity should range from 40 to 55 percent. In facilities with a considerable number of computer systems, this will require highly reliable and high-capacity HVAC systems.

It is recommended that facilities utilize an “N + 1” design, which means that there should be at least one additional HVAC system than is required to cool the facility continuously. For example, if a facility requires four HVAC systems for cooling, then at least five HVAC systems should be used. This permits adequate cooling to continue in the event one system fails or is being maintained.

Computer facilities should employ continuous temperature and humidity monitoring that regularly records readings and alerts personnel when readings exceed safe levels. Sensitive equipment should also have internal temperature monitoring capabilities that alert support personnel when readings exceed tolerance. Systems that are sensitive to variations in temperature should have auto-shutdown capabilities in the event that support personnel are unable to respond in time.

Many computer rooms and data centers employ a raised floor system consisting of removable tiles. The space under the tiles acts as an air plenum for air conditioning systems; tiles with holes in them are strategically placed to direct cold air into areas requiring it. Tiled floors are typically 80 to 100 cm (about 30 to 40 in.) above the floor beneath.

Data centers generally employ technology such as refrigeration or chilled water loops for controlling temperature. Many newer data centers employ ambient air cooling, which is less expensive as outside ambient air needs only to be filtered for dust. This approach has been adopted in many data centers trying to increase their power per square foot or power per cabinet figures by using less electric power for air cooling and therefore making more power available for IT equipment.

##### Fire Prevention, Detection, and Suppression Controls

Virtually every local government authority requires fire detection, prevention, and suppression controls. However, the minimum controls may be considered inadequate for facilities containing expensive computer and network equipment. For example, regulations requiring water-sprinkler suppression systems would certainly extinguish a fire in a data center, but the water would also cause considerable damage to equipment. For this reason, different types of detection and suppression systems are often used to protect valuable equipment from fire and suppression agent damage.

**Fire Prevention** Measures that help to prevent fires in the first place contribute to a safer environment. Some measures include

- **Combustibles** Materials such as packing boxes and manuals should be stored away from computer equipment. Reductions in combustible materials make fires less likely to start or spread.
- **Cleanliness** Dust can sometimes trigger highly sensitive smoke detectors; this is another reason to practice proper cleanliness measures in data centers.
- **Electrical equipment maintenance** Maintenance activities such as soldering should not be done near computer equipment. Smoke from soldering can trigger smoke detectors and cause a discharge of fire suppression agents.

**Fire Detection** Facilities can be equipped with more than the minimum required capabilities for smoke detection. Highly sensitive smoke and heat detection systems are available that can provide an earlier warning. This gives personnel an added opportunity to identify the cause of the fire and suppress it with limited-impact means such as fire extinguishers or simply cutting power to the offending device. Such measures help to avoid a larger fire that would require more aggressive suppression measures.

Commercial buildings also employ many manually operated fire alarms, often called “pull stations,” where someone who sees a fire can pull the lever to set the alarm manually. In most cases, this causes fire alarms to sound but does not trigger fire suppression.

**Fire Suppression** Most commercial facilities are required to have automatic or semiautomatic fire suppression systems. While the minimum is usually water-based sprinkler systems and a complement of hand-operated fire extinguishers, often an organization will make an investment in more sophisticated suppression systems that have less of an impact on computing equipment. But in some locations, even where advanced suppression systems are permitted, water-based systems are still required as a backup.

The types of centralized fire suppression systems include

- **Wet pipe** In this type of system, all sprinkler pipes are filled with water. Each sprinkler head is equipped with a fuse—a heat-sensitive glass bulb—that breaks upon reaching a preset temperature. When this occurs, water is discharged from just that sprinkler head, which is presumably located near a fire. When water begins to flow, an automatic sensor trips a fire alarm. This is the most common type of sprinkler system.
- **Dry pipe** This type of system is used where ambient temperatures often drop below freezing. In this type of system, pipes are filled with compressed air. When sufficient heat causes one of the sprinkler head fuses to break, a control valve releases water into the piping. A delay of up to one minute occurs as water flows from the control valve to the sprinkler head.
- **Pre-action** This type of system is used in areas with high-value contents such as data centers. A pre-action system is essentially a dry pipe system until a “preceding” event, such as a smoke detector alarm, occurs; at this time, the system is filled with water and essentially converted in real time to a wet pipe system. Then, if the ambient temperature at any of the sprinkler heads is high enough, those fuses break, releasing water to extinguish the fire. Pre-action systems are more expensive and complicated than wet pipe or dry pipe systems.
- **Deluge** This type of system has dry pipes and all of the sprinkler heads are open. When the system is operated (for instance, when an alarm is triggered), water flows into the pipes and out of all of the sprinkler heads.
- **Inert gas** This type of system is often the choice for use in computer centers because of its low impact on computing equipment and high effectiveness in fire suppression. Inert gas systems work by displacing oxygen from the room by bringing down the concentration of oxygen from the usual 21 percent to a lower figure, which slows the advancement of a fire. Through the 1980s, Halon 1301 was the substance of choice for inert gas systems. Declared a greenhouse gas in 1987, Halon 1301 has been replaced by other substances, such as FM-200.

In addition to centralized fire suppression systems, many commercial buildings are required to have hand-operated fire extinguishers. These come in a range of sizes, from 1 to 30 pounds, and have fire retardants of several types:

- **Class A** Suitable for ordinary solid combustibles such as wood and paper
- **Class B** Suitable for flammable liquids and gases
- **Class C** Suitable for energized electrical equipment
- **Class D** Suitable for combustible metals
- **Class K** Suitable for cooking oils and fats

> **NOTE** The types listed here are U.S. standards. Different classifications are used in other countries.

Larger fire extinguishers are used in some facilities that have 50 pounds or more fire retardant. These larger units are mounted on large-wheeled carts that can be pulled to the site of a fire.

> **NOTE** The laws governing the use of fire detection and suppression systems vary from city to city. When planning a data center facility, it is crucial to understand precisely what is required in any specific location.

---

##### Classification of Data Center Reliability

The Telecommunications Industry Association (TIA) released the TIA-942 Telecommunications Infrastructure Standards for Data Centers in 2005 and updated it in 2014 as TIA-942-A. The standard was updated further in 2017 as TIA-942-B. The standard describes various aspects of data center design, including reliability. The standard describes four rating levels of reliability:

- **Rated 1/Tier 1–Basic Site Infrastructure** Power and cooling distribution are in a single path. There may or may not be a raised floor, UPS, or generator. All maintenance requires downtime.
- **Rated 2/Tier 2–Redundant Capacity Component Site Infrastructure** Power is in a single path; there may be redundant components for cooling. Includes raised floor, UPS, and generator. Most maintenance requires downtime.
- **Rated 3/Tier 3–Concurrently Maintainable Site Infrastructure** Includes multiple power and cooling paths, but with only one path active. Includes sufficient capacity to carry power and cooling load on one path while performing maintenance on the other path. Includes raised floor, UPS, and generator.
- **Rated 4/Tier 4–Fault Tolerant Site Infrastructure** Includes multiple active power and cooling distribution paths. Includes redundant components, including UPS and generator. Includes raised floor.

---

##### Cleaning

Facilities containing computing and network equipment need to be kept clean, with dirt, dust, and debris kept to a minimum. While computer rooms do not need to be kept clean to the same extent as “clean rooms” (facilities that manufacture disk drives, computer chips, and orbital satellites), they do need to be regularly cleaned to prevent the buildup of dust, dirt, and other particles that will clog filters and get inside computers and network devices, shortening their life span.

##### Lighting

Private and commercial data centers are generally designed as “lights out” facilities. However, they do provide lighting to accommodate personnel who occasionally need to work on IT equipment. Such lighting is sometimes automatically controlled (through motion detection) or manually controlled through switches to activate lighting in areas where people are working.

### Physical Security Controls

Physical security controls are primarily concerned with the protection of valuable or sensitive facilities (including those with computers and network devices) from unauthorized personnel. Controls are used to detect or prevent the entry of unwanted persons at these facilities. This section describes typical threats and vulnerabilities related to physical security and the controls and countermeasures that can be employed to protect a facility.

#### Physical Access Threats and Vulnerabilities

The threats and vulnerabilities in the realm of physical security are all associated with unwanted persons at business premises. A site without proper security controls may be subject to one or more threats, including these:

- **Theft** Persons who are able to enter a building may be able to steal equipment, records, or other valuable items.
- **Sabotage** Persons who may enter a building or work site may be able to damage or destroy valuable equipment or records.
- **Espionage** Persons may conduct espionage to acquire information about the organization.
- **Covert listening devices** Commonly known as _bugs_, these listening devices can be placed in a building to overhear conversations and transmit them to a receiver located in a remote location. Sometimes intruders plant bugs; they can also be hidden in articles that are delivered to a building (for example, in flower bouquets or gift baskets).
- **Tailgating** When attempting to enter a building, an intruder follows an employee into the building without showing his or her security credentials (such as a keycard). This practice is also known as _piggybacking_.
- **Active shooter** Many organizations are taking this relatively new threat seriously. An armed perpetrator may target a specific workplace and attempt to shoot multiple subjects who may or may not be specifically targeted.

> **NOTE** While the active shooter threat is not directly related to information security, security leaders and auditors realize that workplace safety is of even higher importance than the protection of business equipment and IT equipment. Further, many of the controls that protect personnel also protect equipment. It is with these two objectives in mind that most workplace physical security plans are developed.

Several vulnerabilities can also increase risks, including

- **Propped doors** Sometimes a front, rear, or side door that is equipped with security controls will be propped open for various reasons, including hot weather (to permit a cooling breeze to enter and cool the building), frequent traffic moving in or out, or persons going out for a quick smoke who don’t want the hassle of having to return to the building through another door.
- **Key-locked doors** Some facilities still use doors locked with metal keys instead of (or in addition to) keycard entry and have not fully switched over to the exclusive use of keycards. This can result in the organization not knowing who is entering specific buildings or rooms.
- **Poorly managed keycard controls** The lack of effective management of keycards can result in lost keycards and keycards issued to terminated personnel who are still able to access facilities.
- **Keycards displaying workplace** Some organizations display their names on keycards. If such a keycard is lost or stolen, it’s easy for someone to determine where the keycard can be used, inviting an intrusion. This weakness can be mitigated with PIN pads or biometric controls.
- **Poor visibility** A facility may have exterior features that permit an unauthorized person to lurk about without being noticed. The person may be able to gain entry if he or she can discover a weakness before being noticed.
- **Inadequate video surveillance** A facility lacking sufficient video surveillance may have one or more ingress/egress points, paths of approach, or corridors that are unwatched. This could invite intrusions by perpetrators who are able to identify these weaknesses.
- **Poorly protected Knox boxes** The small metal safes used by fire departments for emergency entry into businesses are, in some cases, not well protected. Attackers may be able to remove them or force them open, giving attackers access to metal keys or key cards (often these are master keys that can open any door) that enable them to enter the building without signs of forced entry.

#### Physical Access Controls and Countermeasures

Several controls can be used to improve the physical security of a worksite, reducing the threat of intruders and resultant theft or damage. Some of these controls are

- **Keycard systems** Authorized persons are issued electronically activated ID cards that can be used to activate entry doors that are usually locked. These systems record the date and time that persons entered each door. Some keycard systems are also equipped with a PIN pad that requires the person to enter a numeric PIN before the door unlocks. This helps to prevent someone who finds a keycard from entering a facility. Keycard systems can also utilize biometrics such as palm scan, fingerprint scan, or iris scan. Note that older keycard system technology is vulnerable to keycard cloning, a technique used by an attacker to forge a copy of a keycard; this can occur if a keycard is momentarily located near a keycard cloning device that an attacker could carry and conceal.
- **Cipher locks** These electronic or mechanical doors are equipped with combination locks. Only persons who know the combination may unlock the door. Some cipher locks can be equipped with different combinations for each person and also record each entry.
- **Fences, walls, and barbed wire** These barriers are used to prevent unauthorized persons from approaching a building, keeping them at a safe distance away from the structure.
- **Bollards and crash gates** These barriers prevent the entry of vehicles into protected areas. Some bollards can be retracted or removed when needed. Crash gates are hard barriers that lift into position, preventing the entry (or exit) of unauthorized vehicles, and can be lowered to permit authorized vehicles.
- **Video surveillance** Video cameras, monitors, and recording systems can record the movement of persons in or near sensitive areas.
- **Visual notices** This includes signs and placards that warn intruders that premises are monitored and protected.
- **Bug sweeping** Because most covert listening devices emit radio frequency radiation, it is possible to detect them through the use of a bug sweeper.
- **Security guards** These personnel control passage at entry points or roam building premises looking for security issues such as unescorted visitors.
- **Guard dogs** Dogs assist security guards and can be used to apprehend and control trespassers.

> **NOTE** A detailed risk analysis, including a study of physical facilities and access controls, should be used to determine which controls are appropriate for a facility for both workplace safety as well as protection of business and IT equipment.

### Auditing Asset Protection

Auditing asset protection requires substantial knowledge about IT, threats, vulnerabilities, countermeasures, and common asset protection practices. The IS auditor who lacks this knowledge will likely overlook threats or vulnerabilities that may be obvious to more knowledgeable auditors.

#### Auditing Security Management

Auditing security management activities requires attention to several key activities, including

- **Policies, processes, procedures, and standards** The auditor should request and examine information security policies to determine what processes are required. This should be followed by requests to examine process and procedure documentation for key processes that are cited in security policies. The IS auditor should review the entire body of information security policy to determine whether there is adequate coverage on every topic. Rather than examine the organization’s security policy in a vacuum, it should be compared to an industry standard, such as current versions of ISO/IEC 27001 or NIST 800-53, to ensure that the organization has not omitted any topic that should be included in its security policy.
- **Records** For security management processes that usually have associated recordkeeping, the auditor should examine business records to see whether processes are active.
- **Security awareness training** The auditor should examine training materials, procedures, and records to determine the effectiveness of the organization’s security awareness training program. In various walkthroughs on this and other topics, the IS auditor should ask questions related to security awareness training, such as the following: “Have you received security awareness training?” “Does your organization have a security policy?” A still better question is “What security procedures are required for laptop computers?” to determine whether employees can corroborate the effectiveness of the security awareness program.
- **Data ownership and management** The IS auditor should inquire about the methodology used to determine ownership and management of business data. The key point with data ownership and management is accountability: when someone is responsible for the management of a given data set, that person will ensure that only authorized parties have access to it and will take steps to ensure the continuing integrity of the data. The auditor should determine if there are company-wide policies and procedures on data management, or whether this is a disorganized or undocumented activity.
- **Data custodians** Often, business owners of information and systems delegate management to the IT department, who will manage access on their behalf. If an organization manages data in this way, the IS auditor should identify whether data custodians effectively carry out the wishes of the data owner or act on their own _as if_ they were the owner.
- **Backup and media storage** The IS auditor should examine policies to see what backup measures are required and how media is to be protected. Next, the IS auditor should examine records of backups and restoration requests and tests to determine the historical viability of backup. The IS auditor should examine inventory records and verify that selected media volumes exist and are in the correct location.
- **Security administrators** Often, an IT department will handle the day-to-day responsibilities of managing access to, and integrity of, business data. The IS auditor should determine if IT staff are knowledgeable about these duties and qualified to carry them out.
- **New and existing employees** Data management is implicitly every employee’s responsibility. As individuals who are entrusted to access and use company data properly, individual employees are obligated to handle data properly, to keep data confidential, and to be alert for any misuse of data. The IS auditor should determine whether any policies exist on this topic and whether security awareness training covers this subject matter.

#### Auditing Logical Access Controls

Auditing logical access controls requires attention to several key areas, including

- Network access paths
- User access controls
- User access logs
- Investigative procedures
- Internet points of presence

These topics are discussed in depth in this section.

##### Auditing Network Access Paths

The IS auditor should conduct an independent review of the IT infrastructure to map out the organization’s logical access paths. This will require considerable effort and may require the use of investigative and technical tools as well as specialized experts on IT network architecture. The reason for this is that the IT network may have undocumented access paths that are deliberately hidden from most personnel, or the network may have unexpected access paths resulting from incorrect configuration of even a single device. For instance, the IS auditor or a security specialist may discover a hidden, unauthorized Wi-Fi access point in an office or data center network, or the auditor may discover a network back door in the form of a firewall hole. The presence of deliberate or accidental back doors is a particular problem in larger organizations with highly complex network infrastructures that have many interconnections within the network and with external parties. Any of those connections could be a wide-open back door. Proving the absence of such a path is similar to the analogy of proving that there is no spider in the room where you are now.

The IS auditor should request network architecture and access documentation to compare what was discovered independently against existing documentation. The auditor will need to determine why any discrepancies exist.

Similar investigations should take place for each application to determine all of the documented and undocumented access paths to functions and data. This topic is explored in [Chapter 4](/308B/Chapter04.html).

##### Auditing Access Management

User access controls are often the only barrier between unauthorized parties and sensitive or valuable information. This makes the audit of user access controls particularly significant. Auditing user access controls requires keen attention to several key factors and activities in four areas:

- User access controls, to determine if the controls work as designed
- User access provisioning, to determine if provisioning processes are effective
- Password management, to determine if passwords are effectively managed
- Employee transfers and terminations, to determine if accesses are managed and removed effectively

> **NOTE** The IS auditor should not become so entrenched in the details of user access controls as to lose sight of the big picture. One of the responsibilities of the IS auditor is to continue to observe user access controls from the “big picture” perspective to determine if the entire set of controls _works together_ to manage this important process effectively.

**Auditing User Access Controls** Auditing user access controls requires attention to several factors, including

- **Authentication** The auditor should examine network and system resources to determine whether they require authentication or whether any resources can be accessed without first authenticating.
- **Authentication bypass** The auditor should examine network and system resources to determine if it is possible to bypass user authentication methods. This may require the use of specialized tools or techniques. This needs to include penetration testing tools and application scanning tools to determine the presence of vulnerabilities that can be exploited to bypass authentication. For highly valued or sensitive data and applications that are Internet-accessible, hackers will certainly try these techniques in attempts to access and steal this information; the organization’s security staff should regularly attempt to determine the presence of any such vulnerabilities.
- **Access violations** The auditor should determine if systems, networks, and authentication mechanisms have the ability to log access violations. These usually exist in the form of system logs showing invalid login attempts, which may indicate intruders who are trying to log in to employee user accounts.
- **User account lockout** The auditor should determine whether systems and networks have the ability to lock user accounts automatically that are the target of attacks. A typical system configuration will lock a user account after five unsuccessful login attempts within a short period. Such a control helps to thwart automated password-guessing attacks. Without such detective and preventive controls, intruders could write scripts to guess every possible password until a user’s correct password is guessed correctly, thereby enabling an intruder to log in to a user account. Systems use different methods for unlocking such locked accounts: some will automatically unlock after a “cooling off period” (usually 30 minutes), or the user is required to contact the IT service desk and, after properly identifying him- or herself, get the account manually unlocked. The IS auditor should obtain policies, procedures, and records for this activity.
- **Intrusion detection and prevention** The auditor should determine if there are any IDSs or IPSs that would detect authentication-bypass attempts. The auditor should examine these systems to determine whether they have up-to-date configurations and signatures, whether they generate alerts, and whether the recipients of alerts act upon them.
- **Dormant accounts** The IS auditor should determine whether any automated or manual process exists to identify and close dormant accounts. Dormant accounts are user (or system) accounts that exist but are unused. These accounts represent a risk to the environment, as they represent an additional path between intruders and valuable or sensitive data. A dormant account could also be a back door, deliberately planted for future use. But chances are that most dormant accounts are user accounts that were assigned to persons who ended up not needing to access the environment or terminated employees whose accounts were never removed.
- **Shared accounts** The IS auditor should determine if there are any shared user accounts; these are user accounts that are routinely (or even infrequently) used by more than one person. The principal risk with shared accounts is the inability to determine accountability for actions performed with the account. Through the 1990s, information systems were routinely designed with shared user accounts, and many systems continue to use shared accounts. To the greatest extent possible, shared user accounts should be identified as audit exceptions and be replaced with individual user accounts.
- **System accounts** The IS auditor should identify all system-level accounts on networks, systems, and applications. The purpose of each system account should be identified, and it should be determined whether each system account is still required (some may be artifacts of the initial implementation or of an upgrade or a migration). The IS auditor should determine who has the password for each system account, whether accesses by system accounts are logged, and who monitors those logs.
- **Jump servers** The IS auditor should identify whether jump servers or other logical air gaps exist to protect critical systems and critical data from compromise. The IS auditor should determine who has access to jump servers, whether they can be bypassed, and whether they can be used to exfiltrate data.

**Auditing Password Management** The IS auditor needs to examine password configuration settings on information systems to determine how passwords are controlled. Some of the areas requiring examination are

- **Minimum length** How many characters a password must have and whether there is a maximum length
- **Complexity** Whether passwords must contain various types of characters (lowercase alphabetic, uppercase alphabetic, numeric, symbols), whether dictionary words are permitted, and whether permutations of the user ID are permitted
- **Expiration** How frequently passwords must be changed
- **History** Whether former passwords may be used again
- **Minimum time between changes** Whether users are permitted to change their passwords frequently (for instance, to cycle back to the familiar password they are used to)
- **Display** Whether the password is displayed when logging in or when creating a new password
- **Transmission** Whether the password is encrypted when transmitted over the network or is transmitted in plaintext
- **Storage** Whether the password is stored encrypted or hashed, or is stored in plaintext; if the password is stored encrypted or in plaintext, the IS auditor needs to determine who has access to it

In addition, auditing password management requires attention to several key technologies and activities:

- **Account lockout** The IS auditor should determine whether systems automatically lock user accounts after a series of unsuccessful login attempts. The auditor should determine how locked user accounts are unlocked—whether automatically or manually—and whether these events are logged.
- **Access to encrypted passwords** The IS auditor should determine if end users are able to access encrypted/hashed passwords, which would enable them to use password-cracking tools to discover other users’ passwords and administrative passwords.
- **Password vaulting** The IS auditor should determine if users are encouraged or required to use password vaulting tools for the safe storage of passwords and if administrative passwords are vaulted.

**Auditing User Access Provisioning** Auditing the user access provisioning process requires attention to several key activities, including

- **Access request processes** The IS auditor should identify all user access request processes and determine if these processes are used consistently throughout the organization. The auditor should determine if there is one central user access request process, or if each environment has a separate process. The auditor should identify what data elements are required in a user access request—for instance, if the request specifies _why_ and for _how long_ the user needs this access. The auditor should examine business records to determine how access requests are documented.
- **Access approvals** When studying the user access process, the IS auditor needs to determine how requests are approved and by what authority they are approved. The auditor should determine if system or data owners approve access requests, or if any accesses are ever denied (if no access requests are denied, the IS auditor should see if all requests are merely “rubber-stamped” without any real scrutiny). The auditor should examine business records to look for evidence of access approvals.
- **New employee provisioning** The IS auditor should examine the new employee provisioning process to see how a new employee’s user accounts are initially set up. The auditor should determine how a new employee’s initial roles are determined: Does a new user have an established “template” of accesses, or do requests simply state, “Make John’s access just like Susan’s”? The auditor should determine if new employees’ managers are aware of the access requests that their employees are given and if they are excessive. Furthermore, the auditor should determine if access to applications requires any initial training of the user of the application, or if the organization just “turns them loose” to figure out how the application is supposed to be used. The auditor also needs to determine how initial user credentials are communicated to the new employee and if the method is secure and reasonable.
- **Segregation of duties (SOD)** The IS auditor should determine if the organization makes an effort to identify and mitigate segregation of duties issues. This may include whether there are any SOD matrices in existence and if they are actively used to make user access request decisions. Furthermore, the IS auditor should determine if the organization performs SOD reviews to identify persons who have access privileges within or among applications that would constitute SOD violations. The auditor should determine how violations are managed when they are found.
- **Access reviews** The IS auditor should determine if there are any periodic access reviews and what aspects of user accounts are reviewed; this may include termination reviews, internal transfer reviews, SOD reviews, and dormant account reviews.

**Auditing Employee Terminations** Auditing employee terminations requires attention to several key factors, including those listed next.

- **Termination process** The IS auditor should examine the employee termination process and determine its effectiveness. This examination should include understanding how terminations are performed and how user account management personnel are notified of terminations. The auditor should identify specific security policies to determine how quickly user accounts should be terminated. The auditor should examine HR records to see if all employee terminations correspond to user account management termination records.
- **Timeliness** The IS auditor should examine employee termination records and the records on individual information systems to determine if user accounts are locked or removed in a timely manner. Typically, user accounts should be locked or removed within one business day, but in environments with particularly valuable or sensitive information, employee terminations should be processed within minutes or hours to ensure that a departing employee cannot access systems immediately afterward (when passions often run high).
- **Access reviews** The IS auditor should determine if any internal reviews of terminated accounts are performed, which would indicate a pattern of concern for effectiveness in this important activity. If such reviews are performed, the auditor should determine if any missed terminations are identified and if any process improvements are undertaken.
- **Contractor access and terminations** In many organizations, a contractor’s tenure is not managed by HR, so the IS auditor needs to determine how contractor access and termination is managed and if such management is effective. The classic problem with contractors is that it’s sometimes difficult to determine precisely when a contractor no longer requires access to a system or network. The reason for this uncertainty lies in the nature of the contracted work: sometimes the contractor performs services sporadically or on request, and sometimes months or even years pass between these events. Furthermore, contractors are often hired and fired by internal managers without any notification to or tracking by HR. In light of these aspects, it can be difficult to determine the effectiveness of contractor-related access management.

##### Auditing Access Logs

Auditing access logs requires attention to several key points, including

- **Access log contents** The IS auditor needs to determine what events are recorded in access logs. Events may include every user login and granular information, such as every program run and file accessed, or logs may include only invalid login attempts (or not even that). The IS auditor needs to understand the capabilities of the system being audited and determine if the right events are being logged, or if logging is suppressed on events that should and could be logged.
- **Centralized access logs** The IS auditor should determine whether the organization’s access logs are aggregated or are stored on individual systems.
- **Access log protection** The IS auditor needs to understand access log protection mechanisms. Primarily, the auditor needs to determine if access logs can be altered, destroyed, or attacked to cause the system to stop logging events. For especially high-value and high-sensitivity environments, the IS auditor needs to determine if logs should be written to digital media that is unalterable, such as optical WORM (write once read many) media.
- **Access log review** The IS auditor needs to determine if there are policies, processes, or procedures regarding access log review. The auditor should determine if access log reviews take place, who performs them, how issues requiring attention are identified, and what actions are taken when necessary.
- **Access log retention** The IS auditor should determine how long access logs are retained by the organization and if they are backed up.
- **Access alerts** The IS auditor should determine whether automated mechanisms are in place that alert appropriate personnel of security alerts related to access logs. This includes but is not limited to alerts related to repeated unsuccessful attempts by a person to log in to a privileged account. The auditor should determine whether written procedures exist for such events, as well as records of their occurrence and response.

##### Auditing Investigation and Incident Response Procedures

Auditing incident management and investigative procedures requires attention to several key activities, including

- **Investigation policies and procedures** The IS auditor should determine if there are any policies or procedures regarding security investigations. This would include who is responsible for performing investigations, where information about investigations is stored, and to whom the results of investigations are reported.
- **Computer crime investigations** The IS auditor should determine if there are policies, processes, procedures, and records regarding computer crime investigations. The auditor should understand how internal investigations are transitioned to law enforcement.
- **Security incident response** The IS auditor should examine security incident response policies, procedures, and plans to determine whether they are up to date. Interviewing incident responders to gauge their familiarity with incident response procedures can indicate the effectiveness of training and tabletop exercises. The auditor should examine some of the records from actual security incidents to see whether the responses were effective and whether the organization conducted post-incident reviews to identify process improvements.
- **Computer forensics** The IS auditor should determine whether there are procedures for conducting computer forensics. The auditor should also identify tools and techniques that are available to the organization for the acquisition and custody of forensic data. The auditor should identify whether any employees in the organization have received computer forensics training and are qualified to perform forensic investigations. Because some organizations employ an outside firm for forensics assistance, the auditor should examine any contract in place to see whether this prearranged capability was properly established.

##### Auditing Internet Points of Presence

The IS auditor who is performing a comprehensive audit of an organization’s system and network system needs to perform a “points of presence” audit to discover what technical information is available about the organization’s Internet presence. Some of the aspects of this intelligence gathering include those listed next.

- **Search engines** Google, Yahoo!, DuckDuckGo, Bing, and other search engines should be consulted to see what information about the organization is available. Searches should include the names of company officers and management, key technologists, and any internal-only nomenclature such as the names of projects.
- **Social networking sites** Social networking sites such as LinkedIn, Facebook, Instagram, Glassdoor, and Twitter should be searched to see what employees, former employees, and others are sharing about the organization. Any authorized or unauthorized “fan pages” should be searched as well.
- **Online sales sites** Sites such as Craigslist and eBay should be searched to see if anything related to the organization is being sold online.
- **Domain names** The IS auditor should verify contact information for known domain names as well as related domain names. For instance, for the organization _[mycompany.com](http://mycompany.com/)_, organizations should search for domain names such as _mycompany.net_, _mycompany.info_, and _mycompany.biz_ to see if they are registered and what contents are available.

**Justification of Online Presence** The IS auditor should examine business records to determine on what basis the organization established online capabilities such as e-mail, Internet-facing web sites, Internet e-commerce, Internet access for employees, and so on. These services add risk to the business and consume resources. The auditor should determine if a viable business case exists to support these services or if they exist as a “benefit” for employees.

#### Auditing Network Security Controls

Auditing network security controls requires a thorough understanding of network technologies, network security techniques, and the architecture of the organization’s network being audited. Any gaps in understanding may lead to insufficient scrutiny of the network, possibly resulting in a failure to identify serious deficiencies.

##### Performing an Architecture Review

The IS auditor needs to conduct a meticulous review of the organization’s network architecture. This will require an examination of architecture diagrams and documents, walkthroughs with key systems and network staff, and inspection of many system and network device configuration files.

> **NOTE** The IS auditor needs to conduct an investigation into the available network paths, independent of any examination of documents, to discover any undocumented or unintended paths. This process is explained in more detail earlier in this section.

Auditing architecture requires attention to several key details, including

- **Architecture diagrams** The IS auditor should obtain and become familiar with high-level and detailed architecture diagrams that show the logical relationships between key network and system features.
- **Architecture documents** Visual diagrams are usually accompanied by written documents that describe the purpose of various architectural features. The IS auditor should use these documents to supplement diagrams to get a more complete picture of the network architecture.
- **Support of business objectives** The IS auditor should determine if the network’s architecture supports key business objectives.
- **Compliance with security and privacy policy** The IS auditor should determine if the network’s architecture is compliant with the organization’s security and privacy policy. This may include the logical segregation of business functions, protection of key assets, and separation of responsibilities between departments.
- **Comparisons of documented versus actual** The IS auditor should examine several key points in the documented network architecture to see if the network’s configuration actually reflects its documented design. The auditor should seek to understand any discrepancies found.
- **Change and review process** The IS auditor should determine if the organization has any processes used to identify, review, and approve any network architecture changes, as well as updates to diagrams and documentation. This is described more fully in the next section.

##### Auditing Network Access Controls

Auditing network access controls requires attention to several key factors and activities, including those described next.

**User Authentication** In environments that employ network-centric user authentication (such as Microsoft Active Directory or LDAP), IS auditors need to apply the full range of user access control audit. See the section, “Auditing Access Management,” earlier in this chapter for a detailed discussion on this topic.

**Firewalls** The IS auditor should examine network architecture (described earlier in this section) and understand the role of firewalls in the network. With this understanding, the auditor should carefully examine network security policies, firewall access control lists, and configurations to determine if firewalls support security policy. The auditor should also examine change control records and firewall change records to determine if all firewall changes are approved and applied properly.

**Segmentation and Microsegmentation** The IS auditor should examine security policy and network architecture to determine the network segmentation and microsegmentation that is required in the organization. This should include an understanding of the business drivers for segmentation, as well as techniques used to determine the effectiveness of segmentation.

**Intrusion Detection and Prevention Systems** The IS auditor should examine network security policy and IDS/IPS settings and logs to see if they detect intrusions, malware, botnets, and other violations of security policy. IDS/IPS systems should be examined to see whether they perform malware detection and reputation filtering. The auditor should verify whether alerts from IDS/IPS are sent to a SIEM and whether alerts are produced there.

**Web Content Filtering** The IS auditor should examine network security policy and web content filtering capabilities to see if they prohibit access to high-risk sites. Web-filtering systems should be examined to see whether they perform malware detection and reputation filtering.

**Cloud Access Security Broker (CASB)** The IS auditor should determine whether CASB systems are in place to monitor and control access to cloud-based resources. The auditor should examine procedures and records to see whether appropriate action takes place when policy violations are detected.

**Data Loss Prevention** The IS auditor should examine the DLP system to see whether it is properly configured to detect the storage and/or movement of sensitive data and whether there are procedures and records indicating that people do respond to alerts.

**Remote Access** The IS auditor should examine remote access policy to determine acceptable remote access scenarios. The auditor should then examine remote access servers and some workstations to determine if remote access infrastructure supports and enforces policy. Some issues to consider when auditing remote access include

- Whether user authentication is any more difficult (such as multifactor) over remote access than on the physical network
- Whether remote access clients allow split tunneling
- Whether remote access permits noncompany-owned computers to access network resources remotely
- Whether workstations missing security patches are permitted to connect via remote access
- Whether workstations with nonfunctioning or out-of-date anti-malware software are permitted to connect
- Whether workstations with noncompliant security configuration settings are permitted to connect
- Whether remote access back doors exist, with tools such as GoToMyPC, for example

**Jump Servers** The IS auditor should identify whether jump servers or other logical air gaps exist to protect critical systems and critical data from compromise. The IS auditor should determine whether jump servers can be bypassed and, if so, whether they can be used to exfiltrate data.

**Dial-up Modems** The IS auditor should determine if dial-up modems are permitted in the infrastructure. The auditor should use tools to verify independently whether any dial-up modems exist in the infrastructure and, if so, whether they permit access to the network. Access controls should be examined to determine what subjects are permitted to use dial-up modems and when they were last used.

**Wi-Fi Access Points** The IS auditor should determine whether Wi-Fi access points are used and, if so, how they are controlled. The auditor should determine whether there are any rogue (unapproved) access points in use and whether the organization routinely scans for them and takes action. The auditor should also determine whether guest access is permitted and, if so, how internal resources (including network bandwidth) are protected against users connecting as a guest.

##### Auditing Network Change Management

Auditing network change management requires attention to several key factors and activities, including

- **Change control policy** The IS auditor should examine the organization’s change control policy to understand how change is supposed to be controlled and managed.
- **Change logs** The IS auditor should determine if information systems contain automatic logs that contain all changes to systems and, if so, if these logs are reviewed by IT staff to ensure that only approved changes are being made to systems. The auditor should examine procedures and records to determine what actions are taken when unapproved changes are discovered.
- **Change control procedures** The IS auditor needs to examine change control procedures and examine records to determine if procedures are effective and are being followed.
- **Emergency changes** The IS auditor should examine change control policy, procedures, and records to see how emergency changes are handled and how they are approved.
- **Rolled-back changes** The IS auditor should examine change control records to see what changes needed to be rolled back because of problems. The auditor should determine how these situations were handled.
- **Documentation** The IS auditor should determine whether change control procedures and records include updates to documentation, including network operations procedures, architecture diagrams, and disaster recovery plans.
- **Linkage to system development life cycle (SDLC)** The IS auditor should understand how the organization’s SDLC is integrated with its change management processes to ensure that only completed and properly approved software changes are proposed for promotion into production.

> **NOTE** The IS auditor should examine all of these aspects of change management to understand whether the organization is really in control of its environment.

##### Auditing Vulnerability Management

Auditing vulnerability management requires attention to several key factors and activities, including

- **System hardening** The IS auditor should identify any system hardening standards in place. This includes seeing whether standards are periodically reviewed and updated, how standards were implemented, and how compliance to standards is verified.
- **Virtualization** The IS auditor should examine the organization’s virtualization and containerization architecture and standards, and then examine selected virtualization and containerization environments to determine how well these systems are managed and protected.
- **Alert management** The IS auditor should determine if the organization actively searches for or subscribes to security alert bulletins. The auditor should examine procedures and records to see if any alert bulletins result in responsive actions such as applied security patches or configuration changes.
- **Infrastructure penetration testing** The IS auditor should determine if the organization performs any penetration testing on its own network and system infrastructure. The auditor should examine procedures and records to determine if the organization’s penetration testing program is effective. The auditor should see if vulnerabilities are mitigated and confirmed.
- **Application penetration testing** The IS auditor should determine if the organization performs any application penetration testing on its software applications to identify vulnerabilities. The auditor should examine procedures and records to determine if the organization’s application penetration testing process is effective.
- **Patch management** The IS auditor should examine procedures and records to determine if the organization performs any patch management activities. These activities may consist of a periodic review of available security and functionality patches, whether any patches are applied to production systems, and whether any SLAs for patching are established and followed. The auditor should determine if patches are tested on nonproduction environment systems to understand their impact.

**Complementary Penetration Testing** The IS auditor should consider the use of security scanning or penetration testing during a network security audit. This can help determine whether the organization’s own penetration testing of infrastructure and applications is complete and effective.

#### Auditing Environmental Controls

Auditing environmental controls requires knowledge of building mechanical and electrical systems as well as fire codes. The IS auditor needs to be able to determine if such controls are effective and if they are _cost_-effective. Auditing environmental controls requires attention to these and other factors and activities, including

- **Power conditioning** The IS auditor should determine if power conditioning equipment, such as UPS, line conditioners, surge protectors, or motor generators, are used to clean electrical anomalies such as noise, surges, sags, and so on. The auditor should examine procedures and records to see how frequently this equipment is inspected and maintained and if this is performed by qualified personnel.
- **Backup power** The IS auditor should determine if backup power is available via electric generators or UPS and how frequently they are tested. He or she should examine maintenance records to see how frequently these components are maintained and if this is done by qualified personnel.
- **Heating, ventilation, and air conditioning** The IS auditor should determine if HVAC systems are providing adequate temperature and humidity levels and if they are monitored. Also, the auditor should determine if HVAC systems are properly maintained and if qualified persons do this.
- **Water detection** The IS auditor should determine if any water detectors are used in rooms where computers are used. If so, the auditor should determine how frequently these are tested and if they are monitored.
- **Fire detection and suppression** The IS auditor should determine if fire detection equipment is adequate, if staff members understand its function, and if the equipment is tested. The auditor should determine how frequently fire suppression systems are inspected and tested and if the organization has emergency evacuation plans and conducts fire drills. The auditor should examine the inspection tags on fire suppression equipment, including sprinkler valves and fire extinguishers, to see if their inspections are up to date. He or she should check the walls in data centers to ensure that they extend all the way to the real floor and ceiling and not merely down to the raised floor or up to the dropped ceiling.
- **Cleanliness** The IS auditor should examine data centers for cleanliness. IT equipment air filters and the inside of some IT components should be examined to see if there is an accumulation of dust and dirt.

> **NOTE** The IS auditor may need to consult with electrical and mechanical engineers to determine if power conditioning, backup power, HVAC systems, and fire detection and suppression equipment are in good working order and are adequately sized to meet the organization’s needs.

#### Auditing Physical Security Controls

Auditing physical security controls requires knowledge of natural and manmade hazards, physical security controls, and access control systems.

##### Auditing Siting and Marking

Auditing building siting and marking requires attention to several key factors and features, including

- **Proximity to hazards** The IS auditor should estimate the building’s distance to natural and manmade hazards, such as
- Dams
- Rivers, lakes, and canals
- Natural gas and petroleum pipelines
- Water mains and pipelines
- Earthquake faults
- Areas prone to landslides
- Volcanoes
- Severe weather such as hurricanes, cyclones, and tornadoes
- Flood zones
- Military bases
- Airports
- Railroads
- Freeways

The IS auditor should determine if any risk assessment regarding hazards has been performed and if any compensating controls that were recommended have been carried out.

- **Marking** The IS auditor should inspect the building and surrounding area to see if building(s) containing information-processing equipment identify the organization. Marking may be visible on the building itself but also on signs or parking stickers on vehicles.

##### Auditing Physical Access Controls

Auditing physical access controls requires attention to several key factors discussed in this section.

**Physical Barriers** This category includes fencing, walls, barbed/razor wire, bollards, sally ports, and crash gates. The IS auditor needs to understand how these are used to control access to the facility and determine their effectiveness.

**Surveillance** The IS auditor needs to understand how video and human surveillance are used to control and monitor access. He or she needs to understand how (and if) video is recorded and reviewed and if it is effective in preventing or detecting incidents.

**Guards and Dogs** The IS auditor needs to understand the use and effectiveness of security guards and guard dogs. Processes, policies, procedures, and records should be examined to understand required activities and how they are carried out.

**Keycard Systems** The IS auditor needs to understand how keycard systems are used to control access to the facility. Some points to consider include

- **Controls** Whether additional controls such as PIN pads or biometrics are utilized for critical locations
- **Work zones** Whether the facility is divided into security zones and which persons are permitted to access which zones
- **Records** Whether keycard systems record personnel movement
- **Provisioning** What processes and procedures are used to issue keycards to employees (see the earlier section, “Auditing Logical Access Controls,” for more details)
- **Monitoring** What processes and records are in place to monitor the keycard system for access violations
- **Access reviews** Whether the organization performs reviews of access logs and user access lists
- **Visitors** How visitors are handled in terms of building access
- **Incidents** What procedures are in place to respond to access incidents

### Chapter Review

Information security management is concerned with the identification and protection of valuable and sensitive assets. Security management begins with executive support of the organization’s information security program, including the development and enforcement of an organization-wide information security policy. Several processes also support security management, including security monitoring, auditing, security awareness training, incident response procedures, data classification, vulnerability management, service provider management, and corrective and preventive action processes.

Security roles and responsibilities need to be explicitly developed and communicated. Managers and staff need to demonstrate knowledge of their roles and responsibilities through proper decisions and actions.

Access management is a critical activity in a security management program. Access controls are often the only thing standing between valuable or sensitive information and parties who want to access it. Access management consists of several separate but related processes, including user access management, network access management, and access log review.

Computers are used as instruments of crimes, can be used to support criminal activity, and are the target of crimes. Criminal activities are a threat to organizations, whether the activity is espionage, data theft, fraud, or sabotage.

Several techniques are used to protect sensitive and valuable information from disclosure to unauthorized parties. These techniques include user access controls, network access controls, anti-malware, intrusion detection/prevention systems, data loss prevention systems, cloud access security brokers, system and network hardening, and encryption. Many threats exist that require a variety of countermeasures, many of which require continuous vigilance and effort.

Physical and environmental controls are required to safeguard the physical safety and reliability of computing and network equipment. These controls include power system improvements; heating, cooling, and humidity controls; fire control systems; and physical access controls, such as keycard systems, fences, walls, and video surveillance.

#### Quick Review

- The foundation of an effective information security program is an information security policy that includes executive support and well-defined roles and responsibilities.
- A security awareness program is used to communicate security policy, procedures, and other security-related information to an organization’s employees. Security training should be administered upon hire and regularly thereafter.
- An organization must continuously monitor and periodically audit its processes and systems to ensure that security controls effectively protect information systems and assets.
- A data classification program defines levels of sensitivity and handling procedures for each classification level.
- Access controls are used to control access to programs and data. Access control methods include authentication, authorization, access control lists, and encryption, as well as physical access controls. Access controls are usually implemented in several technology layers, including physical, operating system, database, and application. Multifactor authentication is used in higher risk scenarios. Because access controls are subject to a variety of threats, they should be regularly tested to ensure that they remain effective.
- Facility access controls should be designed to meet the organization’s requirements for workplace safety and for the protection of sensitive information as well as business and IT equipment.
- Third-party service organizations that store, transmit, or process an organization’s information should be required to implement controls that result in a level of risk that is the same as or lower than if the organization managed the information itself. Organizations need to determine periodically whether third parties’ controls continue to be effective.
- An organization should implement controls to ensure that its personnel have an appropriate background prior to employment and that their behavior is monitored and controlled during employment.
- Organizations need to implement controls to prevent and processes to respond to computer crimes and security incidents. Response processes should be periodically tested. Some personnel should be trained in forensic investigation techniques or an outside forensic services firm put on retainer.
- Stored information needs to be protected through several controls, including access controls and logging, sound user access management processes, patch management, vulnerability management, web filtering, intrusion detection and prevention systems, cloud access security brokers, anti-malware, system hardening, and backup.
- Organizations need to implement effective network security controls, including firewalls and other access controls, protection of mobile devices, encryption of sensitive communications, protection of wireless networks, and prevention of information leakage, all to control access and prevent or detect security incidents.
- Organizations need to implement effective controls to assure high-integrity environments for their computer systems and networks. These controls include power conditioning and backup power systems, temperature and humidity control, and fire detection and suppression systems.

#### Questions

**[1](#ch6qu_1).** A fire sprinkler system has water in its pipes, and sprinkler heads emit water only if the ambient temperature reaches 220°F. What type of system is this?

- **A.** Deluge
- **B.** Post-action
- **C.** Wet pipe
- **D.** Pre-action

**[2](#ch6qu_2).** An organization is building a data center in an area frequented by power outages. The organization cannot tolerate power outages. What power system controls should be selected?

- **A.** Uninterruptible power supply and electric generator
- **B.** Uninterruptible power supply and batteries
- **C.** Electric generator
- **D.** Electric generator and line conditioning

**[3](#ch6qu_3).** An auditor has discovered several errors in user account management: many terminated employees’ computer accounts are still active. What is the best course of action?

- **A.** Improve the employee termination process.
- **B.** Shift responsibility for employee terminations to another group.
- **C.** Audit the process more frequently.
- **D.** Improve the employee termination process and audit the process more frequently.

**[4](#ch6qu_4).** An auditor has discovered that several administrators in an application share an administrative account. What course of action should the auditor recommend?

- **A.** Implement activity logging on the administrative account.
- **B.** Use several named administrative accounts that are not shared.
- **C.** Implement a host-based intrusion detection system.
- **D.** Require each administrator to sign nondisclosure and acceptable-use agreements.

**[5](#ch6qu_5).** An organization that has experienced a sudden increase in its long-distance charges has asked an auditor to investigate. What activity is the auditor likely to suspect is responsible for this?

- **A.** Employees making more long-distance calls
- **B.** Toll fraud
- **C.** PBX malfunction
- **D.** Malware in the PBX

**[6](#ch6qu_6).** An auditor is examining a key management process and has found that the IT department is not following its split-custody procedure. What is the likely result of this failure?

- **A.** One or more individuals are in possession of the entire password for an encryption key.
- **B.** One or more individuals are in possession of encrypted files.
- **C.** Backup tapes are not being stored at an off-site facility.
- **D.** Two or more employees are sharing an administrative account.

**[7](#ch6qu_7).** A developer is updating an application that saves passwords in plaintext. What is the best method for securely storing passwords?

- **A.** Encrypted with each user’s public key
- **B.** Encrypted with a public key
- **C.** Encrypted with a private key
- **D.** Hashed

**[8](#ch6qu_8).** An organization experiences frequent malware infections on end-user workstations that are received through e-mail, despite the fact that workstations have anti-malware software. What is the best measure for reducing malware?

- **A.** Anti-malware software on web proxy servers
- **B.** Firewalls
- **C.** Anti-malware software on e-mail servers
- **D.** Intrusion prevention systems

**[9](#ch6qu_9).** An auditor has reviewed the access privileges of some employees and has discovered that employees with longer terms of service have excessive privileges. What can the auditor conclude from this?

- **A.** Employee privileges are not being removed when they transfer from one position to another.
- **B.** Long-time employees are able to guess other users’ passwords successfully and add to their privileges.
- **C.** Long-time employees’ passwords should be set to expire more frequently.
- **D.** The organization’s termination process is ineffective.

**[10](#ch6qu_10).** An organization wants to reduce the number of user IDs and passwords that its employees need to remember. What is the best available solution to this problem?

- **A.** Password vaults for storing user IDs and passwords
- **B.** Token authentication
- **C.** Single sign-on
- **D.** Reduced sign-on

**[11](#ch6qu_11).** An IS auditor has discovered that an employee has installed a Wi-Fi access point in his cube. What action should the IS auditor take?

- **A.** The IS auditor should include this in his audit report.
- **B.** The IS auditor should immediately report this as a high-risk situation.
- **C.** The IS auditor should ask the employee to turn off the Wi-Fi access point when it is not being used.
- **D.** The IS auditor should test the Wi-Fi access point to see whether it properly authenticates users.

**[12](#ch6qu_12).** An auditor is examining an organization’s data loss prevention (DLP) system. The DLP system is recording instances of sensitive information that is leaving the organization. There are no records of actions taken. What should the IS auditor recommend?

- **A.** That management appoint a party responsible for taking action when the DLP system detects that sensitive information is leaving the organization
- **B.** That management develop procedures for responding to DLP system alerts
- **C.** That management discontinue use of the DLP system since no one is taking action
- **D.** That the DLP system be reconfigured to stop issuing alerts

**[13](#ch6qu_13).** An organization’s remote access requires a user ID and one-time password token. What weakness does this scheme have?

- **A.** Someone who finds a one-time password token could log in as the user by guessing the password.
- **B.** Someone who finds a one-time password token could log in as the user by guessing the user ID.
- **C.** Someone who knows the user ID could derive the password.
- **D.** Someone who is able to eavesdrop on the authentication can log in later using a replay attack.

**[14](#ch6qu_14).** An organization has configured its applications to utilize an LDAP server for authentication. The organization has set up

- **A.** Automatic sign-on
- **B.** LDAP sign-on
- **C.** Single sign-on
- **D.** Reduced sign-on

**[15](#ch6qu_15).** An organization has hundreds of remote locations containing valuable equipment and needs to enact a secure access control system. The locations do not have electricity. What is the best choice for an access control method that can be implemented at these locations?

- **A.** Keycards
- **B.** Metal keys
- **C.** Cipher locks
- **D.** Video surveillance

#### Answers

- **1](#ch6qu1).** **C.** A wet pipe fire sprinkler system is charged with water and will discharge water out of any sprinkler head whose fuse has reached a preset temperature.
- **2](#ch6qu2).** **A.** The best solution is an electric generator and an uninterruptible power supply (UPS). A UPS responds to a power outage by providing continuous electric power without interruption. An electric generator provides backup power for extended periods.
- **[3](#ch6qu3).** **D.** The best course of action is to improve the employee termination process to reduce the number of exceptions. For a time, the process should be audited more frequently to make sure that the improvement is effective.
- **[4](#ch6qu4).** **B.** Several separate administrative accounts should be used. This will enforce accountability for each administrator’s actions.
- **[5](#ch6qu5).** **B.** The auditor is most likely to suspect that intruders have discovered a vulnerability in the organization’s PBX and are committing toll fraud.
- **[6](#ch6qu6).** **A.** Someone may be in possession of the entire password for an encryption key. For instance, split custody requires that a password be broken into two or more parts, where each part is in possession of a unique individual. This prevents any one individual from having an entire password.
- **[7](#ch6qu7).** **D.** Passwords should be stored as a hash. This makes it nearly impossible for any person to retrieve a password, which could lead to account compromise.
- **[8](#ch6qu8).** **C.** Implementing anti-malware software on e-mail servers will provide an effective defense-in-depth, which should help to reduce the number of malware attacks on end-user workstations.
- **[9](#ch6qu9).** **A.** User privileges are not being removed from their old position when they transfer to a new position. This results in employees with excessive privileges.
- **[10](#ch6qu10).** **D.** The most direct solution to the problem of too many user credentials is reduced sign-on. This provides a single authentication service (such as LDAP or Active Directory) that many applications can use for centralized user authentication.
- **[11](#ch6qu11).** **B.** Finding an unauthorized access point is a high-risk situation that the IS auditor should report immediately to management.
- **[12](#ch6qu12).** **A.** An organization using a DLP system should be acting on alerts that the DLP system generates in order to curb employee and system behavior.
- **[13](#ch6qu13).** **B.** Someone who finds a one-time password token and then tries to log in to a system and discovers that the site does not request a password could guess the user ID and possibly be able to log in to the system.
- **[14](#ch6qu14).** **D.** Reduced sign-on is the term used to describe an environment where many different systems use a centralized authentication server (such as LDAP).
- **[15](#ch6qu15).** **C.** The best choice for an access control system for many remote locations is cipher locks. They do not require a power supply or remote connectivity, but they can be configured with a different combination for each user, and some retain a memory of which persons used them.
