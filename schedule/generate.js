#!/usr/local/bin/node

var fs = require('fs');

// write the notice
var notice = {notice:"I hope you find this app helpful. And make sure to check out my talk, <em>Privacy Tricks for Activist Web Developers</em>, Saturday at 3pm, Nutt.<br><br>- Micah Lee<br>@micahflee<br><br><small>Happy hacking at HOPE9!</small>"};
fs.writeFile('notice.json', JSON.stringify(notice), function(err){
  if(err) throw(err);
  console.log('notice.json written');
});

// write the schedule
var schedule = [
    {
        "timestamp": 0,
        "speakers": [
            {
                "name": "William Binney",
                "bio": "served in the secretive National Security Agency for over 30 years, including a time as director of the NSA&#39;s World Geopolitical and Military Analysis Reporting Group. Based on his experience and background, he estimates that the NSA has put together over 20,000,000,000,000 (20 trillion) &quot;transactions&quot; - phone calls, emails, and other forms of data - from Americans, including potentially almost all of the emails sent and received from most people who live in the United States. By coming forward to expose these abuses and provide evidence to the public and the media, he displays those qualities that so many in the hacker community strive for: courage, standing up to authority, revealing the truth, and honoring the rights of the individual. We&#39;re honored to have William Binney as one of our keynote speakers this year."
            }
        ],
        "title": "Keynote Address - William Binney",
        "id": "binney",
        "description": "followed by lightning talks"
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T10:00:00",
        "location": "Sassaman",
        "timestamp": 1342188000,
        "speakers": [
            {
                "name": "Georgia Weidman",
                "bio": "is a penetration tester, security researcher, and trainer. She holds a Master of Science degree in computer science, secure software engineering, and information security. Her work in the field of smartphone exploitation has been featured in print and on television internationally. She has presented her research at conferences around the world. Georgia has delivered highly technical security training for conferences, schools, and corporate clients. She recently founded Bulb Security LLC, a security consulting firm specializing in security assessments/penetration testing, security training, and research/development. She was awarded a DARPA Cyber Fast Track grant to continue her work in mobile device security."
            }
        ],
        "title": "The Smartphone Penetration Testing Framework",
        "id": "smartphone",
        "description": "As smartphones enter the workplace, sharing the network and accessing sensitive data, it is crucial to be able to assess the security posture of these devices in much the same way we perform penetration tests on workstations and servers. However, smartphones have unique attack vectors that are not currently covered by available industry tools. The smartphone penetration testing framework, the result of a DARPA Cyber Fast Track project, aims to provide an open source toolkit that addresses the many facets of assessing the security posture of these devices. This talk will look at the functionality of the framework including information gathering, exploitation, social engineering, and post exploitation through both a traditional IP network and through the mobile modem, showing how this framework can be leveraged by security teams and penetration testers to gain an understanding of the security posture of the smartphones in an organization. You will also learn how to use the framework through a command line console, a graphical user interface, and a smartphone-based app. Demonstrations of the framework assessing multiple smartphone platforms will be shown."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T10:00:00",
        "location": "Dennis",
        "timestamp": 1342188000,
        "speakers": [
            {
                "name": "Far McKon",
                "bio": "is a developer of software, hardware, and community. He herds some of the nerds at MakerBot during the day, and moonlights as a gardener, bicycle nut, and developer-at-large."
            }
        ],
        "title": "Community Fabrication: Four Years Later",
        "id": "community",
        "description": "One hacker&#39;s view of the last four years in 3D printing and the expansion of DIY culture. It will cover the state of the art then, the state of the art now, and where we imagine we will be in four years. Far will review what technologies succeeded, what failed, and how 3D printing has grown, warts and all. He&#39;ll also talk about the growth of hackerspaces in that time and how the changes in these topics tie together to show the growing pains of both hacker-centric movements. He&#39;ll also make another round of predictions and discuss where 3D printing and hackerspaces are going next."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T11:00:00",
        "location": "Nutt",
        "timestamp": 1342191600,
        "speakers": [
            {
                "name": "John McNabb",
                "bio": "is Principal of InfraSec Labs, which researches security issues of critical infrastructures. His talk at HOPE Number Nine is a slight tangent from his current research, which focuses primarily on security issues of the national drinking water infrastructure. John has published several papers on the subject and recently wrote a chapter on drinking water security for the book Weapons of Mass Destruction and Terrorism, 2nd Edition (McGraw-Hill, 2012)."
            }
        ],
        "title": "Infrastructure Mediated Sensing of Whole-Home Human Activity",
        "id": "infrastructure",
        "description": "Devices are being developed to monitor what you do in your home. Even without Orwell&#39;s telescreen (which is under development), there is a lot of information that can be collected about your Activities of Daily Life. The beneficial goals of these devices include promoting positive things like water conservation, helping people improve their personal health, and monitoring people in assisted living environments. This talk will describe the technology of the devices used to collect and transmit this data, and discuss some of the social, ethical, political, economic, privacy, and legal issues raised. What could go wrong? Could these systems be used by governments to micromanage personal behavior? Could employers use these systems to regulate employees&#39; off-duty behavior? Could such data be used to convict people in court? Could this data be stolen, abused, or falsified? The answer for each of these questions is &quot;yes.&quot;"
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T11:00:00",
        "location": "Dennis",
        "timestamp": 1342191600,
        "speakers": [
            {
                "name": "Dustyn Roberts",
                "bio": "is an engineering consultant, professor, author, and perpetual student. As a professor, she has developed two courses for NYU&#39;s interactive telecommunications program: Mechanisms and Things That Move (which led to a book entitled Making Things Move: DIY Mechanisms for Inventors, Hobbyists, and Artists), and Biomechanics for Interactive Design. Dustyn holds a BS in mechanical engineering from Carnegie Mellon University, an MS in biomechanics from the University of Delaware, and is currently a National Science Foundation graduate research fellow and PhD candidate in mechanical engineering at the Polytechnic Institute of NYU. She is also the co-chair of the Open Hardware Summit and a member of the hackerspace NYC Resistor."
            },
            {
                "name": "Catarina Mota",
                "bio": "is co-founder of the Open Materials project and the hackerspace Altlab, co-chair of the Open Hardware Summit, and a member of NYC Resistor. She teaches hands-on workshops on hi-tech materials and simple circuitry, with the goal of encouraging people with little to no science background to take a proactive interest in science, technology, and knowledge sharing."
            }
        ],
        "title": "The State of Open Source Hardware",
        "id": "stateofopen",
        "description": "In the last few years, open source hardware went from an obscure hobby to a burgeoning movement built on values and practices derived from open source software, hacker culture, and craft traditions. This increase is visible in the exponential growth of the community of developers and users, the increase in the number and revenue of open source hardware businesses, and the emergence of a large number of new DIY gadgets and machinery - from 3D printers and microcontrollers to soft circuits and tech crafts. The accessibility of hardware plans, along with the communities and collaborative practices that surround them, is lowering the barrier to entry and encouraging people of all ages and walks of life to create, hack, and re-purpose hardware. Taken together, hackerspaces, the increasing accessibility of digital fabricators, and these open and collaborative practices are leading to an explosion of creativity and innovation reminiscent of the golden years of the Homebrew Computer Club. This panel will go over the defining events of the last few years to draw a snapshot of the current state of the open source hardware movement and the impact it&#39;s having in hacker culture and beyond. Also included in the discussion will be the Open Hardware Summit: the world&#39;s first comprehensive conference on open hardware, and how it will serve as a venue to discuss and draw attention to the rapidly growing open source hardware movement."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T11:00:00",
        "location": "Sassaman",
        "timestamp": 1342191600,
        "speakers": [
            {
                "name": "Chris Anderson",
                "bio": "is an assistant professor of media culture at the College of Staten Island and a visiting fellow at Yale Law School&#39;s Information Society Project. He was an organizer and editor with New York City Indymedia from 2001 to 2008 and helped found the inaugural NYC Grassroots Media Conference in 2004."
            },
            {
                "name": "Gus Andrews",
                "bio": "is the producer of The Media Show, a YouTube series on digital media literacy. She has been a contributor on Off The Hook, a user researcher for Second Life, and a writer for publications from Bitch Magazine to io9.com. Her dissertation and postdoctoral research were on blog comment threads gone horribly, horribly wrong; examples are up at gumbaby.com."
            },
            {
                "name": "Matt Curinga",
                "bio": "is an assistant professor and director of the program in educational technology at Adelphi University. He is developing a new graduate program in educational technology with a focus on open education."
            },
            {
                "name": "Christina Dunbar-Hester",
                "bio": "is an assistant professor of journalism and media studies in the School of Communication and Information at Rutgers University. She is completing a book manuscript on low power radio activism in the United States."
            }
        ],
        "title": "Technology to Change Society: What Not to Do",
        "id": "technology",
        "description": "Many of us in the hacker/maker communities have a powerful desire to change society by sharing the technologies we&#39;re passionate about with those around us. We&#39;re convinced that our way of thinking can lead people to liberation, empowerment, and better lives. But it doesn&#39;t always work the way we hope. While some technologies support change in certain situations - Twitter and mobile devices in the Middle East and Africa, the printing press and democracy - history is littered with failed technology-driven plans to change the world. This is where programmers can take a page from social research and history. There is not, in fact, consensus in the research that &quot;technology teaches itself&quot; or &quot;code is law.&quot; Society is a complex system (people are complex systems!) and overly simplistic beliefs that technology has one universal kind of impact on its users can doom well-intentioned efforts to help others use technology. What do we need to know about society and how technology changes it in order to be successful?\n\tIn this panel, Gus will share some basic rules from research on education, political movements, and social change which everyone who wants to write code to change the world should know. Christina will share cases of activist technical interventions that illustrate the complexity of success or failure, and how inseparable social and technical elements can be. Chris will do a postmortem of some past projects to change journalism with technology, including the Independent Media Center, discussing their successes and failures. And Matt will talk about his work to develop a degree in open technology and education at Adelphi University: what he&#39;s doing to convince administrators that FOSS technology is important enough to merit its own program, what challenges he faces in talking to educators, and the things in his plan of study which he thinks are most important for politically conscious tech developers to know."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T12:00:00",
        "location": "Sassaman",
        "timestamp": 1342195200,
        "speakers": [
            {
                "name": "Robert David Steele",
                "bio": "former spy, honorary hacker, and #1 Amazon reviewer for nonfiction, has also set the world record for Q&amp;A at eight hours and one minute, going from midnight Saturday to 0801 Sunday at The Next HOPE (2010). This year, he was accepted by the Reform Party as a candidate for the presidency. The son of an oil engineer, he has lived all over the world, been a Marine Corps infantry officer, a CIA clandestine case officer, a founder of the Marine Corps Intelligence Center, and a CEO of both a for-profit (OSS.Net, closed in 2010) and a nonprofit (Earth Intelligence Network)."
            }
        ],
        "title": "Testing the Two Party Tyranny and Open Source Everything: The Battle for the Soul of the Republic",
        "id": "testing",
        "description": "Robert was the opening speaker at the first Hackers On Planet Earth conference in 1994 and he&#39;s been back every time since then. In this talk, he will speak about his six week formal campaign as a Reform Party candidate for the presidency in 2012. He communicated with every presidential candidate less Romney and Obama, and will outline what he learned about &quot;the system,&quot; the personalities running for President, and several specific recommendations he has made to the Occupy movement and others about how to reboot the Republic. His campaign website remains live at http://bigbatusa.org."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T12:00:00",
        "location": "Nutt",
        "timestamp": 1342195200,
        "speakers": [
            {
                "name": "Dan \"AltF4\" Petro",
                "bio": "is, by day, a security researcher for DataSoft Corp, a small business in Scottsdale, Arizona, where he focuses on developing open source tools for network security. He holds an MS in information assurance from Arizona State University, where he studied network security and cryptographic protocols. By night, he is a rogue free software and privacy activist with a penchant for the dramatic. He is a lifelong hacker and regular member of the Phoenix 2600."
            }
        ],
        "title": "Messing with Nmap Through Smoke and Mirrors",
        "id": "messing",
        "description": "Reconnaissance on a network has been an attacker&#39;s game for far too long. Where&#39;s the defense? Nmap routinely evades firewalls, traverses NATs, bypasses signature-based NIDS, and gathers up the details of your highly vulnerable box serving Top Secret documents. Why make it so easy? This talk will explore how to prevent network reconnaissance by using honeyd to flood your network with low fidelity honeypots. Dan will then discuss how this lets us constrain the problem of detecting reconnaissance such that a machine learning algorithm can be effectively applied. (No signatures!) Some important additions to honeyd will also be discussed along with a live demonstration of Nova, a free software tool for doing all of the above."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T12:00:00",
        "location": "Dennis",
        "timestamp": 1342195200,
        "speakers": [
            {
                "name": "Mary Robison",
                "bio": "has a PhD in anthropology and, for the first time in her life, knew that she had found her people at The Next HOPE. Mary had a late-life diagnosis; it was very traumatic. She&#39;s planning on doing some participant observation of hacker culture at HOPE Number Nine. Mary can usually be found in the Hackerspace Village, teaching people how to solder SMDs."
            },
            {
                "name": "Alex Plank",
                "bio": "runs the website WrongPlanet.net, which specializes in all things autistic. He is also a co-host of Autism Talk TV, an Internet program sponsored by Autism Speaks."
            },
            {
                "name": "Jack Robison",
                "bio": "got in a lot of trouble five years ago for his autistic interest: chemistry. He was found not guilty on all charges and is now a chemistry major in college. He, with Kirsten Lindsmith, was the subject of a lengthy article on young people on the spectrum in The New York Times. He is a co-host of Autism Talk TV."
            },
            {
                "name": "Kirsten Lindsmith",
                "bio": "is a college student, studying to become a coroner. She may look like our token &quot;pretty young woman on the spectrum,&quot; but she writes columns for WrongPlanet.org and for AutismAfter16.com. She and Jack Robison were the subjects of a lengthy article in The New York Times in December 2011, and she is a co-host of Autism Talk TV."
            }
        ],
        "title": "The Autism Spectrum and You",
        "id": "autism",
        "description": "As a kid, were you considered precocious? Considered eccentric (or just plain weird) by other kids? Have you ever thought that your sensory perceptions are different from other people? Were you (are you still) the &quot;little professor,&quot; intent on teaching everyone about your unique interest(s)? Do you possess unusual interests? Were you bullied? Did you (do you still) live in your own world with restricted interests? As a child, did you accumulate facts but not really understand them? Do you often assume a literal meaning for metaphorical or ambiguous language? Do you make naive or embarrassing remarks with surprising frequency? Do you often fail to comprehend unspoken modes of communication? Have special routines that cannot be altered? Have unusual facial expressions, vocalizations, or posture? Are you, in fact, bewildered by proper behavior? Are you &quot;face-blind&quot; - unable to remember what the people you encounter every day look like, or to recognize them when you encounter them? If you answer many or just some of these questions affirmatively, congratulations! You, like many of your fellow attendees at HOPE, may have an alternate configuration for the wiring of your brain, now called an Autism Spectrum Disorder (it used to be called Asperger&#39;s Syndrome). At HOPE, we&#39;re the majority; neurotypicals are the rest of the world that do not understand us and may even be afraid of us. Most on the spectrum are male, but there are a lot of females flying under the radar. This panel will discuss the spectrum and how we fit on it, and how we interact with the world at large."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T13:00:00",
        "location": "Dennis",
        "timestamp": 1342198800,
        "speakers": [
            {
                "name": "Deborah Natsios",
                "bio": "is an independent scholar, architect, and co-founder (along with John Young) of Cryptome (1996), a repository for information about freedom of speech, cryptography, spying, and surveillance."
            },
            {
                "name": "John Young",
                "bio": "is an independent scholar, architect, and co-founder (along with Deborah Natsios) of Cryptome (1996), a repository for information about freedom of speech, cryptography, spying, and surveillance."
            }
        ],
        "title": "Cryptome Tracks the NYPD Ring of Steel",
        "id": "cryptome",
        "description": "Cryptome&#39;s digital multimedia presentation of original cartography, animations, video, and architectural documentation will explore the urban implications of the NYPD One Police Plaza Security Plan - a.k.a. Ring of Steel - which locked down Lower Manhattan after 9/11, transforming its Civic Center into a threatscape centered on NYPD headquarters. With its militarized jurisdiction mobilizing through technologies of command, control, communications, intelligence, surveillance, and reconnaissance, the Ring of Steel has declared itself an iconic public space for our time."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T13:00:00",
        "location": "Sassaman",
        "timestamp": 1342198800,
        "speakers": [
            {
                "name": "Marc Weber Tobias",
                "bio": "is a security specialist, principal attorney for Investigative Law Offices P.C., and contributing writer to Forbes. He has authored seven police textbooks, including Locks, Safes, and Security, a primary reference for law enforcement and security professionals internationally."
            },
            {
                "name": "Tommie R. Blackwell",
                "bio": "is CEO of Creative CYNERGY, and the former senior vice president of the U.S. Space and Rocket Center/Space Camp. She also served as chief educator for the creation of the worldwide GLOBE program for the White House."
            },
            {
                "name": "Matt Fiddler",
                "bio": "is a registered locksmith, CISSP, and director of international information protection for a large financial services organization. He has extensive expertise in the area of Unix and network engineering, security consulting, computer forensics, and intrusion analysis."
            }
        ],
        "title": "Using a Space Camp Model for Next Generation Security Training",
        "id": "using",
        "description": "Marc Tobias says the U.S. intelligence community lacks imagination because it doesn&#39;t have any kids. Would an immersive, space camp-type environment ignite kids&#39; interest and be the best way to train them in the art and science of physical, cyber, and electronic security? Marc and his colleagues need your input on a training model where the world&#39;s foremost physical security professionals and cyber-wizards would teach via sophisticated gaming, high tech tools, cyber-type Hogan&#39;s Alleys, advanced techniques, and simulators. The panelists will engage the HOPE audience in an interactive discussion about how to improve America&#39;s low &quot;security intelligence&quot; by training young people more effectively."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T13:00:00",
        "location": "Nutt",
        "timestamp": 1342198800,
        "speakers": [
            {
                "name": "Alexander Heid",
                "bio": "is a security researcher, board member of HackMiami, and co-chair of South Florida OWASP. He has worked within the defense and financial industries, providing information security consultation services."
            }
        ],
        "title": "Crimeware Tools and Techniques of 2012: Past, Present, and Future",
        "id": "crimeware",
        "description": "Much has evolved in the brief 24 months that have passed since the last presentation on this topic, which included a comprehensive overview of the Zeus and SpyEye trojans, popular exploits being used in the wild, and cash out methodologies of the digital crime actors at the time. Today, new digital currencies have emerged, vulnerabilities in popular crimeware kits have been made public, black market credit card trades have become automated, popular crime forums have been hacked and dumped, and the industry based around digital crime analysis and counterintelligence has grown exponentially. In spite of recent arrests of a few individuals, malicious actors are still numerous and able to keep ahead of the law by adapting to the changing environment and hardening their operations. This presentation will go over these developments, as well as the latest digital crime tools, techniques, and methodologies that are currently in use during the present day. The talk will also assess where the current trends will be heading in the future."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T15:00:00",
        "location": "Nutt",
        "timestamp": 1342206000,
        "speakers": [
            {
                "name": "Jimmy Shah",
                "bio": "is a mobile security researcher specializing in analysis of mobile/embedded threats on existing platforms (J2ME, Symbian, Windows Phone, iOS, Android) and potential mobile malware and spyware. If it&#39;s lighter than a car, has a microprocessor, and is likely to be a target, it&#39;s probably his problem. He has presented on mobile threat research at a number of computer security conferences."
            }
        ],
        "title": "Real Advances in Android Malware",
        "id": "real",
        "description": "Attackers are starting to move on from simple attacks, mainly because users are beginning to figure out that the free adult entertainment or chat app shouldn&#39;t be sending SMS messages to expensive numbers. They&#39;re leveraging techniques from PC malware like server-side polymorphism, vulnerability exploits, botnets and network updates, and preemptive/direct attacks against security software. It&#39;s not all that bad. Attackers aren&#39;t going out of their way to discover their own vulnerabilities or writing their own exploits. They&#39;re happy to re-purpose the work done by legitimate developers, security researchers, and the rooting community. If the malware has gotten trickier, what are those tricks? A look at portions of code and how earlier research is adapted by attackers."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T16:00:00",
        "location": "Sassaman",
        "timestamp": 1342209600,
        "speakers": [
            {
                "name": "Alex Muentz",
                "bio": "is an IT professional and lawyer. He&#39;s spoken at HOPE since 2006, in addition to a handful of other conferences. When he&#39;s not trying to explain lawyer-y things to hackers or hacker-y things to lawyers, he teaches and practices law."
            }
        ],
        "title": "Legal Processes As Infrastructure Attacks",
        "id": "legal",
        "description": "Law enforcement and lawmakers have been showing much more of an interest in regulating the Internet. The hacker community needs to understand how certain legal methods work like IT infrastructure attacks. This talk will explain legal processes such as subpoenas, search warrants, and e-discovery as IT infrastructure attacks, as well as how to talk to lawyers. This is an evolving topic as the environment has been constantly changing and, of course, has become more complicated. Also included: a discussion on the recent Megaupload and other domain seizures, forced IP and search engine blocking, and a question and answer session on related matters."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T16:00:00",
        "location": "Dennis",
        "timestamp": 1342209600,
        "speakers": [
            {
                "name": "Peter Fein",
                "bio": "is an agent with Telecomix, an ad-hoc volunteer disorganization of Internauts who support free communication. He also helps Anonymous cause a ruckus from time to time. Peter is a programmer with expertise in Python and distributed systems, and a frequent conference speaker. He is currently developing Mirror Party, a distributed censorship-resistant mirror network."
            },
            {
                "name": "Meredith L. Patterson",
                "bio": "joined Telecomix shortly after the Egyptian government shut off Internet access to most of the country, leading a team of European and American ham radio operators in an effort to establish emergency radio communications. Although that operation was ultimately unsuccessful, she stayed on to help with other projects, including tracking down suspicious SSL certificates. She works as a software engineer at Red Lambda and pioneered the field of language-theoretic security along with Sergey Bratus and her late husband Len Sassaman. When not immersed in programming language theory or tech support for the Arab Spring, her hobbies include knitting, target shooting, and auto repair."
            },
            {
                "name": "The Doctor",
                "bio": "is a system architect and system administrator working for an aerospace engineering firm in Washington, DC. When not building or repairing servers, he&#39;s aiding dissidents in the Middle East as an agent of Telecomix, working on projects at HacDC, contributing to Zero State projects, traveling through time and space inside a funny blue box, or consulting in the private sector. He is one of the core developers of Project Byzantium."
            }
        ],
        "title": "Hacktivism, Tools, and the Arab Spring",
        "id": "hactivism",
        "description": "During the Arab Spring of 2011, agents of Telecomix, members of Anonymous, and a multitude of independent hackers took direct action to aid dissidents by helping to circumvent censorship, disseminating photographs and video footage of violence against peaceful protesters, redeploying dialup modem pools, and using DNS hijacking to warn people of online surveillance. During this time, some interesting discoveries were made by Telecomix, namely, man in the middle attacks with forged SSL certificates and the installation of deep packet inspection hardware in the networks of a number of Syrian ISPs for the purpose of Internet censorship. The activists used logs from Blue Coat web gateway devices to reverse engineer the rulesets Syrian authorities were using, so as to better advise protesters on methods of evasion. Telecomix was also instrumental in tracing where the Blue Coat DPI devices were sourced from and how they were delivered to Syria in violation of United States export regulations. The presenters (all agents of Telecomix) were among those active during the Arab Spring, and will discuss what surveillance measures they encountered, some of the threats against protesters in Syria and Egypt, and how strategies for supporting protesters evolved in response to the changing situation on the ground."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T16:00:00",
        "location": "Nutt",
        "timestamp": 1342209600,
        "speakers": [
            {
                "name": "Wil Lindsay",
                "bio": "is a hacker, performer, media artist, and educator residing in central Pennsylvania. His recently successful public projects include: oneString, an open source USB synth controller; the Bliptronome, an open source port of the Monome controller to a $50 toy; and YM-MINI, a DIY synthesizer based on the sound chip from the Atari ST. He was the first artist-in-residence at Philadelphia&#39;s The Hacktory, and has performed many hardware-based 8-bit media performance at festivals and shows under the pseudonym VBLANK. His work can be found at www.straytechnologies.com."
            }
        ],
        "title": "Building Radios to Talk to the Dead",
        "id": "building",
        "description": "Apophenia is the human ability to perceive patterns and meaning in completely random data sets. The effect is often explored by &quot;ghost hunters&quot; who use electronic tools to find patterns in the environment around us and exploit them as a way to communicate with spirits of the deceased. This discussion will cover the radio-based and electromagnetic technology commonly used for the reception of EVP or &quot;Electronic Voice Phenomena.&quot; These devices are often modified radios or home constructed circuits which follow a mixture of basic engineering, empirical results, metaphysical concepts, and, in some cases, pure hucksterism. This talk will look at several of these devices, their underlying circuits, their design philosophy, and the culture that surrounds them."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T17:00:00",
        "location": "Sassaman",
        "timestamp": 1342213200,
        "speakers": [
            {
                "name": "Hanni Fakhoury",
                "bio": "is a staff attorney with the Electronic Frontier Foundation, focusing on the intersection of technology and criminal law. Hanni previously worked as a federal public defender in San Diego for close to four years, where he served as a copy editor for the 2010 edition of Defending a Federal Criminal Case. He graduated from the University of California, Berkeley, and Pacific McGeorge School of Law, where he was elected to the Order of Barristers for his excellence in written and oral advocacy. Hanni is a member of the National Association of Criminal Defense Lawyers."
            }
        ],
        "title": "Destroying Evidence Before It's Evidence",
        "id": "destroying",
        "description": "Covering your tracks out of fear of getting caught with your hands in the digital cookie jar can sometimes get you in more trouble than whatever crime the feds think you may have committed in the first place. This presentation identifies three specific scenarios where the act of trying to cover your digital footprints - oftentimes in innocuous and legal ways - can get you into trouble: the nebulous crime of &quot;anticipatory obstruction of justice,&quot; which can cover something as mundane as deleting an email before you&#39;re even suspected of committing (let alone charged with) a crime; the ever-expanding Computer Fraud and Abuse Act, which has been stretched to cover things that are neither fraudulent nor abusive; and the potential problems with encryption. The presentation will conclude with some ways you can protect yourself that can help minimize claims that you obstructed justice."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T17:00:00",
        "location": "Nutt",
        "timestamp": 1342213200,
        "speakers": [
            {
                "name": "JP Dunning",
                "bio": "is a security consultant and researcher. His research interests include wireless and portable security. He is the primary developer on Katana: Portable Multi-Boot Security Suite. He maintains www.hackfromacave.com for publishing projects and research."
            }
        ],
        "title": "HIDIOUS Methods of Keystroke Injection",
        "id": "hidious",
        "description": "It&#39;s amazing what can be accomplished with just a few keystrokes. Changing user passwords, formatting disks, and scanning a network are each one command away in most modern operating systems. What if you had two minutes of access on a system? Is this enough time to accomplish information gathering or exploitation on even the most hardened system? It just might be. Through a combination of software and hardware, hundreds of keystrokes a minute can be flawlessly injected into any computer to gain control of system resources. The HIDIOUS (HID Injection Over USB Suite) allows for easy configuration of keyboard/mouse injection attacks through USB."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T17:00:00",
        "location": "Dennis",
        "timestamp": 1342213200,
        "speakers": [
            {
                "name": "Mike Rugnetta",
                "bio": "is a composer, programmer, and performer. He is one third of the fast-paced performative lecture-giving Internet research team that is MemeFactory. He also hosts a web show for PBS called Idea Channel. This one time while bowling, he got two strikes in a row."
            },
            {
                "name": "Stephen Bruckert",
                "bio": "is a writer, filmmaker, artist, and performer. He loves his dogs, the Internet (which, like soylent green, is actually people), and his wife. His first computer was a Tandy TRS-80 color computer and sometimes he misses having a modem. He is one third of MemeFactory."
            },
            {
                "name": "Patrick Davison",
                "bio": "is pursuing his PhD in media, culture, and communication from the Steinhardt School of NYU, where his research focuses on network genres. He is one third of the Internet performance group MemeFactory. He lives in Brooklyn and likes indie games and indie girls."
            }
        ],
        "title": "\"Kill The Internet\"",
        "id": "kill",
        "description": "As grassroots Internet culture grows and flourishes, pushing out into international mainstream recognition, top-down cultural models are threatened and fight back, while governments attempt to quash and chill dissent empowered and organized by the Internet. How are people from the Internet fighting back? What does that even mean? And will it be enough?\n\tMemeFactory is three guys that give tightly rehearsed performative lectures about Internet culture. Their talks document, explore, and critique the emerging culture of the Internet in a visually-focused, fast-paced style that mimics the experience of having ten browser windows open while talking on the phone and watching a YouTube video."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T18:00:00",
        "location": "Nutt",
        "timestamp": 1342216800,
        "speakers": [
            {
                "name": "Deb Nicholson",
                "bio": "works at the intersection of technology and social justice. She has been a free speech advocate, economic justice organizer, and civil liberties defender. She is currently the community manager at Media Goblin, a decentralized media hosting project. She also serves on the board at Open Hatch, a nonprofit dedicated to providing tools and education for potential new Free Software contributors and is an advisor to The Ada Initiative, an organization supporting women in open technology and culture."
            }
        ],
        "title": "We Will Be Legion: Decentralizing the Web",
        "id": "we",
        "description": "The popularity of massive centralized services presents challenges for collective privacy, a full diversity of viewpoints, and customized online identities. Decentralized or federated services are gaining popularity as the answer for users concerned about the one-size-fits-all web. There is significant work to be done on both the technical and social aspects of federation. Deb will discuss current alternatives, near to ready projects, and the ones we might want to start thinking about building."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T18:00:00",
        "location": "Sassaman",
        "timestamp": 1342216800,
        "speakers": [
            {
                "name": "Ray",
                "bio": "is a hacker and lockpicker from Germany. Besides having the equivalent of a master&#39;s degree in computer science and interests in Unix/Linux security, he&#39;s been collecting and picking all kinds of locks for over a decade and has given presentations in the Netherlands, Germany, and the United States on related topics. He&#39;s also a founding member of his local CCC organization and leads his region&#39;s lockpicking sports group."
            }
        ],
        "title": "Advanced Handcuff Hacking",
        "id": "advanced",
        "description": "Handcuffs always have been a special kind of challenge to lockpickers. This talk will cover advanced manipulation techniques including improvised tools, hidden and 3D-printed keys, and exploiting design weaknesses of various handcuff models. Also, the newest handcuffs produced in the United States and Europe will be shown and explained, some of which haven&#39;t even been introduced to police forces yet."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T18:00:00",
        "location": "Dennis",
        "timestamp": 1342216800,
        "speakers": [
            {
                "name": "John Linwood Griffin",
                "bio": "works in industry (research fellow at TeleCommunication Systems, with a focus on computer and communications security) and academia (assistant research professor at Johns Hopkins University, with a focus on computer storage systems). Since finishing graduate school at Carnegie Mellon in 2004, he has also worked in security research and development groups at IBM Research, at BAE Systems, and at a startup company he founded. Outside of work, he enjoys cooking, singing baritone in semiprofessional classical choirs, and, most recently, taking lessons towards a private pilot certificate."
            }
        ],
        "title": "Why You Shouldn't Write Off Higher Education, Young Grasshopper",
        "id": "why",
        "description": "This talk is addressed to that kid in the back who&#39;s wearing a Utilikilt and a black t-shirt that says &quot;I Hack Charities,&quot; who asks, &quot;Why would I bother going to grad school? I&#39;m self-taught, college was a waste of my time, and universities only exist to train wage slaves.&quot; John will draw from personal experience to describe how in graduate school you get to do what you love, you get to make larger and more structured contributions to the community, you experience personal growth while surrounded by amazing people, you&#39;re part of a meritocracy and a close-knit social circle, and the door is open for interesting opportunities afterward. Included will be a discussion on how hackers can get in."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T19:00:00",
        "location": "Nutt",
        "timestamp": 1342220400,
        "speakers": [
            {
                "name": "Jorge Cortell",
                "bio": "(FallenAngel) studied computing, among other things, at Oxford University, among other universities. He lectured in &quot;intellectual property&quot; for five years at Polytechnic University of Valencia (Spain) until he was forced to resign due to pressure from the MPAA and the Spanish Collecting Societies over a lecture on free culture and peer to peer networks. He then decided to start a free music company, which he sold to start his multinational free software company (Kanteron Systems), and specialized in health care IT."
            },
            {
                "name": "Alvaro Gonzalez",
                "bio": "(AndOr) is a systems and network specialist who has been involved in Hacklabs, Hackmeetings, LAN parties, Copyleft, and wireless groups in Spain for almost a decade. In the last ten years, he has been specializing in new techniques on scientific imaging. Currently, Alvaro is the CTO at Kanteron Systems."
            }
        ],
        "title": "Digital Security in Health Care Institutions",
        "id": "digital",
        "description": "Health care institutions usually have a large number of digital devices, networks, and databases. Lots of data goes through them, but are you aware of how much data that is? And how secure is it? How easily can this data be captured? How easy is it to access those medical devices? Can this be done without being detected? After six years of involvement in health care IT projects, Jorge and Alvaro have some stories and details to share."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T19:00:00",
        "location": "Dennis",
        "timestamp": 1342220400,
        "speakers": [
            {
                "name": "Deviant Ollam",
                "bio": "while paying the bills as a security auditor and penetration testing consultant with his company (The CORE Group), is also a member of the board of directors of the U.S. branch of TOOOL, The Open Organisation Of Lockpickers. At events like DEFCON, ShmooCon, HOPE, and many other cons, Deviant runs the Lockpick Village, and he has conducted physical security training sessions at Black Hat, DeepSec, ToorCon, GovCERT, AusCERT, HackCon, ShakaCon, HackInTheBox, CanSecWest, ekoparty, and the United States Military Academy at West Point. His favorite Amendments to the U.S. Constitution are, in no particular order, the 1st, 2nd, 9th, and 10th"
            },
            {
                "name": "Babak Javadi",
                "bio": "is a hardware hacker with a wayward spirit. His first foray into the world of physical security was in the third grade, where he received detention for teaching another student how to disassemble the doorknob on the classroom door. After serving as a driving force within the locksport community for almost a decade and helping found the U.S. division of The Open Organisation Of Lockpickers, he has recently re-embraced the beauty of the baud and resumed hardware hacking with a vengeance."
            }
        ],
        "title": "Mastering Master-Keyed Systems",
        "id": "mastering",
        "description": "The world of locks is one in which, so very often, things old become new again. Master-keyed lock systems fall into this category. For years now, many people have shared advice and stories regarding methods of attacking master-keyed systems. This year, at HOPE Number Nine, The Open Organisation Of Lockpickers will be running a contest in which attendees may attempt to decode a master-keyed system during the weekend. If you stop by this presentation, you&#39;ll be a few steps ahead of everyone else who is attempting this interesting and different lockpicking game at HOPE Number Nine - and you&#39;ll learn about how master-keyed systems are often vulnerable to many surreptitious attacks."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T19:00:00",
        "location": "Sassaman",
        "timestamp": 1342220400,
        "speakers": [
            {
                "name": "Eva Galperin",
                "bio": "is an activist for the Electronic Frontier Foundation, where she does education, mobilization, and outreach on all things related to digital civil liberties. Prior to EFF, Eva worked at the U.S.-China Policy Institute, where she helped to organize conferences and research Chinese energy policy. She has bachelor&#39;s degrees from SFSU in international relations and political science, which she is continuously astonished to find useful on a daily basis."
            }
        ],
        "title": "Nymwars: Fighting for Anonymity and Pseudonymity on the Internet",
        "id": "nymwars",
        "description": "The last year has seen an Internet-wide debate over real names, pseudonyms, and anonymity online, especially on social networks and in the comment sections of blogs and newspapers. Facebook has required users to use their real names from the very beginning and newspapers have increasingly embraced the same requirement for commenting on their websites. Proponents of real name policies cite increased civility and quality of content. But pseudonymity and anonymity have a long history in public discourse, and they are essential for privacy and speaking truth to power. This talk will examine the debate over anonymity and pseudonymity online, with a focus on Facebook and the Arab Spring, and Google Plus and Nymwars."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T20:00:00",
        "location": "Dennis",
        "timestamp": 1342224000,
        "speakers": [
            {
                "name": "Ben Wizner",
                "bio": "is the director of ACLU&#39;s Speech, Privacy, and Technology Project. He has litigated numerous cases involving post-9/11 civil liberties abuses, including challenges to airport security policies, government watchlists, extraordinary rendition, targeted killing, and torture. He has appeared regularly in the media, testified before Congress, and traveled several times to Guantanamo Bay to monitor military commission proceedings."
            },
            {
                "name": "Catherine Crump",
                "bio": "is a staff attorney with the ACLU&#39;s Speech, Privacy, and Technology Project. She litigates cases challenging the constitutionality of government surveillance programs. She is currently litigating two cases challenging the government&#39;s policy of engaging in purely suspicionless searches of laptops and other electronic devices at the international border. She has testified before Congress and is regularly quoted in the media about surveillance topics, and is both on the adjunct clinical faculty at NYU Law School and is a fellow affiliated with the Stanford Center for Internet and Society."
            }
        ],
        "title": "WikiLeaks, Whistleblowers, and the War on the First Amendment",
        "id": "wikileaks",
        "description": "The Director of ACLU&#39;s Speech, Privacy, and Technology Project will provide an overview of the Espionage Act and the other statutes that the government has employed to prosecute leakers and threaten publishers. Ben will discuss the ACLU&#39;s litigation on behalf of WikiLeaks supporters whose Twitter records have been subpoenaed and whose laptops have been seized by government agents, and will place the Obama administration&#39;s unprecedented campaign against leakers in legal and historical context."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T20:00:00",
        "location": "Sassaman",
        "timestamp": 1342224000,
        "speakers": [
            {
                "name": "Travis Goodspeed",
                "bio": "designed the hardware for The Next HOPE badge, as well as an exploit for Microsoft keyboards that runs on the badge. He attends far too many conferences and is alleged to have used a SCADA exploit to produce an abundance of neighborliness in Mister Rogers&#39; Neighborhood. Bitcoin will break if his name or Ben Bernanke&#39;s is removed from blk0001.dat."
            }
        ],
        "title": "Exploiting ZigBee and the Internet of Things",
        "id": "exploiting",
        "description": "Now that ZigBee is finally appearing in the wild, Travis will take a look back at all the nifty ways of exploiting it. (ZigBee is a low cost, low power, wireless mesh network standard.) This fast-paced lecture features as many practical, real-world exploits as can fit in the time slot. Learn how to extract firmware from a locked Freescale MC13224 by grounding pin 133, how to extract keys from a Chipcon CC2530 by erasing it first, and how to hijack control of other radios with a few hypodermic syringes. You&#39;ll also learn how Certicom&#39;s proprietary crypto library caused multiple ZigBee Smart Energy Profile stacks to remotely expose private ECC keys and why none of this matters because cleartext traffic is easily found in most major cities."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T20:00:00",
        "location": "Nutt",
        "timestamp": 1342224000,
        "speakers": [
            {
                "name": "Sai",
                "bio": "does a wide variety of things, including Make Your Laws, a practical liquid democracy project; CogSai, a YouTube channel on cognitive science; creating a nonlinear written language; social neuroscience of empathy; and design and programming."
            }
        ],
        "title": "Make Your Laws: Practical Liquid Democracy",
        "id": "make",
        "description": "This talk will include background on the concepts of direct, representative, and liquid democracies; the tradeoffs inherent in different types of government; interesting problems for online voting and policy authorship; examples of similar systems in different countries; discussion of some legal context (e.g. electronic signatures and the democratized use of Super PACs); a practical road map to gaining full control over your legislature; and Q&amp;A. Make Your Laws (makeyourlaws.org) is an open source, nonprofit, practical project that aims to replace all existing legislatures with online liquid democracies. The aim is simple: to let you make your laws."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T21:00:00",
        "location": "Sassaman",
        "timestamp": 1342227600,
        "speakers": [],
        "title": "Jason Scott's Strange and Wonderful Digital History Argosy",
        "id": "jason",
        "description": "With a few small seeds of facts, digital and computer historian Jason Scott will draw together a multi-medium presentation of events, terms, facts, and references to set you off on a journey of learning for the rest of the year. Combining material from his three in-production documentaries and years of research, attendees will be given the threads that pull massive airships of knowledge out of the sky and into your minds. Formal attire welcome but not mandatory - participation encouraged - paradigms blown - mysteries solved."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T21:00:00",
        "location": "Nutt",
        "timestamp": 1342227600,
        "speakers": [
            {
                "name": "John Sarik",
                "bio": "is a hardware hacker and PhD student in the Columbia Laboratory for Unconventional Electronics. His research interests include open hardware for education, printable electronics, and energy harvesting sensor networks. His personal interests include nixie tubes and anagrams."
            }
        ],
        "title": "Printable Electronics and the Future of Open Hardware",
        "id": "printable",
        "description": "Many open hardware projects use integrated circuits (ICs), but these ICs are literal black boxes because the manufacturers do not provide the silicon source code. There&#39;s also no way for makers to cost effectively modify and recompile this source code to fabricate custom ICs. But there is hope! Printable electronics based on novel materials and low cost fabrication techniques have the potential to enable open hardware at a whole new level. This talk will provide an overview of current printable electronics technology and discuss the issues that will arise as open hardware moves beyond silicon. What happens to open hardware when you can download and print an entire electronics project? How can we ensure that the materials used are open, widely available, and safe? How can we make IC design accessible to non-engineers? What should a Thingiverse for printable electronics look like? What are the legal issues surrounding printable electronics?"
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T21:00:00",
        "location": "Dennis",
        "timestamp": 1342227600,
        "speakers": [
            {
                "name": "Johannes Grenzfurthner",
                "bio": "is an artist, writer, curator, and director. He is the founder and artistic director of monochrom, an internationally acting art and theory group. He holds a professorship for art theory and art practice at the University of Applied Sciences in Graz, Austria. He is head of the Arse Elektronika festival in San Francisco, host of Roboexotica (Festival for Cocktail-Robotics, Vienna and San Francisco), and co-curates the Paraflows Symposium in Vienna. Recurring topics in Johannes&#39; artistic and textual work are contemporary art, activism, performance, humor, philosophy, postmodernism, media theory, cultural studies, sex tech, popular culture studies, science fiction, and the debate about copyright."
            }
        ],
        "title": "Sierra Zulu. Or How to Create a Feature Film About the Digital Age - and Why That's Pretty Hard",
        "id": "sierra",
        "description": "Movies are exciting. Things crash and burn. Bolts and fists fly. There are bangs and kabooms. People go to the cinemas in order to experience new worlds. But cinema is about to lose its prime source of narrative, having so far tethered to physical action that can be filmed. Cinema needs tempo. It needs speed. The &quot;movement-image&quot; (Gilles Deleuze) depends on physical action onto which the cameras can point. Yet, in contrast, the real world of non-cinema is losing physical action day by day. It is a time of abstract, optically unpresentable processes in networks and data systems. This regress of visual displayability is rather daft. Cinema has lived well on it for more than a hundred years. It&#39;s easy to create a feature film about a bank robbery, but that&#39;s anachronistic. Some of the most important crimes exist as electronic money movements between international stock exchanges. Hollywood cinema, on the other hand, still hasn&#39;t evolved beyond anything better than banal sequences straight out of an Errol Flynn movie. How can we accurately portray the stories of our (new) world? All those dramas and comedies? All those crimes and stories? The people at monochom are working on a feature film called Sierra Zulu. This talk will discuss their challenges and hopes - and why they think you can help."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T22:00:00",
        "location": "Nutt",
        "timestamp": 1342231200,
        "speakers": [
            {
                "name": "Per Sjoborg",
                "bio": "runs a blog and a podcast focusing on self reconfiguring modular robotics. He also does general robotics interviews for www.robotspodcast.com. Per trained as a mechanical engineer and ran his own programming business for ten years."
            }
        ],
        "title": "\"No Natural Resources Were Hurt Assembling This Sofa\"",
        "id": "no",
        "description": "This talk is an introduction and overview of a new and exciting field in robotics called Self Reconfiguring Modular Robotics (SRCMR). SRCMR is basically about modules, like Lego pieces, that can assemble themselves into anything you want (self reconfigure). You will hear how this makes a prosperous, growing, and environmentally friendly world accessible for all of us. This is possible because the stuff you need is assembled from the same modules, again and again, using no resources other than small amounts of energy. This drastically reduces the resources we use, and de-couples growth and environmental problems. Because the modules are programmable, SRCMR will also make the world completely hackable, introducing many interesting opportunities and challenges."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T22:00:00",
        "location": "Dennis",
        "timestamp": 1342231200,
        "speakers": [
            {
                "name": "Chris Kubecka",
                "bio": "is an information security professional with 15+ years of experience and multiple professional certifications. She currently advises and consults for government agencies and international organizations. Her research involves smartphone, web and asset vulnerability testing, malware, forensics, incident handling, covert communications channels over HTTP(S)/DNS, correlation engines, and everything security log related."
            }
        ],
        "title": "The Internet is for Porn! How High Heels and Fishnet Have Driven Internet Innovation and Information Security",
        "id": "internet",
        "description": "A dark and seedy journey to explain the real driver behind Internet innovation: porn. How an economy built on the ultimate satisfaction just a click away has driven technological advances. Racy browsing habits involving our innermost secrets, vulnerable parties, and criminal syndicates have driven malicious code and subsequent security advances. Broad ranging censorship involving much more than pornography has been the end result in attempts to reign in such &quot;unhealthy&quot; habits by well-intentioned governments and organizations. This talk will include a timeline of pornography on the Internet, related security threats, an overview of industry economics (legal and ~illegal), and related censorship. Audience discussion and participation is welcome, but please, no BYOP."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T22:00:00",
        "location": "Sassaman",
        "timestamp": 1342231200,
        "speakers": [
            {
                "name": "Robert Leale",
                "bio": "has worked on in-vehicle network communications for over seven years. In this time, he has reverse engineered vehicle network communications for the purposes of integrating new features or functions to vehicles by means of already existing infrastructure."
            }
        ],
        "title": "How to Communicate with Your Car's Network",
        "id": "communicate",
        "description": "Modern vehicles are essentially mobile computers and controller networks. On average, there are around ten embedded controllers in a vehicle. These controllers are responsible for running the engine, locking and unlocking the vehicle, sounding the horn, and much, much more. These networks are very different from current computer networks. This talk will help you understand how to get started, what information is on the vehicle network, and how you can use this data to get information from and send commands to these controllers. Additionally, this talk will list the current tools available for communicating with vehicles and how to interpret the communications between the controllers."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-13T23:00:00",
        "location": "Sassaman",
        "timestamp": 1342234800,
        "speakers": [
            {
                "name": "Joe Cicero",
                "bio": "is a network specialist instructor for Northeast Wisconsin Technical College. He specializes in teaching Linux, network security, and computer forensics courses. He has had positions covering every aspect of computers including: help desk support, technician, programmer, administrator, director of technology, computer security and incident response team member, defense forensic examiner, and, of course, instructor."
            }
        ],
        "title": "Computer Forensics: Possibility, Probability, Opinion, and Fact",
        "id": "computer",
        "description": "How easy is it to end up with illegal content on your computer? How expensive is it to prove you didn&#39;t know about it? What is it like for someone who is arrested for a computer crime? How long do these cases go on for? What does the prosecution provide your attorney and forensic examiner with? This presentation will cover these questions and more, based on experiences as a defense forensic expert."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-13T23:00:00",
        "location": "Nutt",
        "timestamp": 1342234800,
        "speakers": [
            {
                "name": "Johnny Diggz",
                "bio": "is an entrepreneur, musician, filmmaker, and founder of Geeks Without Bounds. In 1995, he co-founded IRDG (Intergalactic Research and Development Group), which built the world&#39;s first Internet-based unified messaging platform, iPost. In 1999, he co-founded Voxeo Corporation and serves as chief evangelist for Voxeo Labs&#39; flagship cloud communications platform, Tropo and its community of over 250,000 developers. He produced the indie feature film, The Karaoke King, a musical comedy that premiered in 2007 at the Cinema City International Film Festival. Johnny is also a professional dueling piano player and will perform at the slightest arm-twist."
            },
            {
                "name": "Willow Brugh",
                "bio": "is the director of Geeks Without Bounds, an accelerator for humanitarian projects. Previous endeavors include being co-founder of Seattle makerspace Jigsaw Renaissance, the hackerspace collaboration initiative Space Federation, and the response-development competition GameSave. Years of participation in the hacker and makerspace community have created purpose towards distributed systems, engaged citizens, and mutual aid. With heavy involvement in Maker Faire, Random Hacks of Kindness, and the SpaceApps Challenge, Willow&#39;s main skill is &quot;getting out of the way.&quot;"
            }
        ],
        "title": "Solving More Than #firstworldproblems",
        "id": "solving",
        "description": "For the past two years, Geeks Without Bounds has been using technology to assist people in times of crisis and helping to build better tools to empower people to help themselves. Whether organizing Random Hacks of Kindness events, teaching app developers about data security, or helping humanitarian organizations engage with hacker communities, they&#39;ve been bridging the chasm between technology and aid organizations. Johnny and Willow will present some real world challenges that have bubbled up to the surface and show how you can help us all solve more than #firstworldproblems."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-13T23:00:00",
        "location": "Dennis",
        "timestamp": 1342234800,
        "speakers": [
            {
                "name": "Andrew Strutt aka r0d3nt",
                "bio": "aka r0d3nt is nocturnal, underground, hated by many, loved by few. He is a social engineer, friend, trusted confidant, systems/network engineer, 2600 contributor, defense contractor, loyal American, and friend to the community."
            }
        ],
        "title": "Hosting irc.2600.net - My Life with the Thrill Kill Cult",
        "id": "hosting",
        "description": "An overview of the history of 2600net for at least the last ten years. This talk will cover 2600net infrastructure and policies, why it is the way it is, along with how to communicate securely and build trust with users and friends. Who are the hosts and operators? Meet the crew! What other communities are around 2600 and the IRC network? How can you get involved? Special attention will be given to DDoSes, LulzSec, Anonymous, th3j35t3r syndrome, and all sorts of other challenges. Expect other staffers and channel operators to stop in for this talk."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T10:00:00",
        "location": "Sassaman",
        "timestamp": 1342274400,
        "speakers": [
            {
                "name": "Tim Hwang",
                "bio": "is chief scientist at the Pacific Social Architecting Corporation, a Bay Area research and development house focusing on technologies to enable precise, large scale social shaping online. He is also the founder of ROFLCon, a series of conferences that bring together Internet celebrities, commentators, and scholars to talk about memes, Internet culture, and funny cats on the web. In the past, he has worked with the Electronic Frontier Foundation, Creative Commons, and the Berkman Center for Internet and Society. He is an avid collector of Sky Mall magazine."
            }
        ],
        "title": "I'm Not a Real Friend, But I Play One on the Internet",
        "id": "not",
        "description": "This talk examines the topic of socialbots - realistic, automated bot identities online that are optimized to reliably elicit certain types of social behaviors in groups of users on platforms like Facebook and Twitter. Deployed en masse, large swarms of these bots are able to subtly (and not-so-subtly) shape the ways in which communities grow, connect, and behave on these platforms. Insofar as people increasingly come to rely on these networks into the future, the bots hold the promise (and threat) of shaping not only the social universe of opinions and influence, but real world coordination and action among people as well. Ultimately, this talk will conclude by discussing how these bots suggest the evolution of classic social engineering into a broader social hacking - which approaches human networks as if they were computer networks and applies similar principles for their compromise and defense against the social influence of third parties."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T10:00:00",
        "location": "Dennis",
        "timestamp": 1342274400,
        "speakers": [
            {
                "name": "Maggie Avener",
                "bio": "is an engineer and trainer at the Prometheus Radio Project. Her job involves troubleshooting technical issues with community radio stations, creating tools to make it easier to apply for radio licenses, and teaching hands-on soldering workshops to introduce people to the technology behind radio."
            },
            {
                "name": "Ana Martina",
                "bio": "is the technical and training coordinator at the Prometheus Radio Project. She has volunteered in autonomous spaces and independent media sites and conferences as a media trainer, with the objective of providing support to radio enthusiasts in using free open source software to produce their programs."
            }
        ],
        "title": "Occupy the Airwaves: Tools to Empower Community Radio Stations",
        "id": "occupy",
        "description": "The Prometheus Radio Project started with radio pirates fighting for local groups to be able to run community radio stations. Prometheus builds, supports, and advocates for community radio stations which empower participatory community voices and movements for social change. They are currently creating a number of tools to support community groups as they prepare for an upcoming once-in-a-lifetime chance to apply for low power radio licenses. RadioSpark is an online hub where applicants, engineers, lawyers, and other supporters can exchange knowledge and plan together. RFree is free and open source software that applicants can use to find available channels and prepare their FCC applications."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T10:00:00",
        "location": "Nutt",
        "timestamp": 1342274400,
        "speakers": [
            {
                "name": "Nadim Kobeissi",
                "bio": "is a computer security researcher and Internet freedom advocate based in Montreal. He developed Cryptocat, an open source, accessible web IM client, and also hosted CHOMP.FM, a radio show covering information freedom, Internet privacy, and cyberculture with guests such as Bruce Schneier and Electronic Frontier Foundation staff. Nadim also has an interest in penetration testing and has regularly defended Internet freedom issues such as the SOPA blackout and WikiLeaks in the media."
            }
        ],
        "title": "Why Browser Cryptography is Bad and How We Can Make It Great",
        "id": "whybrowser",
        "description": "Web apps are becoming almost exponentially responsible for handling user data. This incredible increase summons an urgent requirement for client-side web browser crypto standards. However, web browsers lack client-side crypto standards for building blocks such as secure block ciphers, public key schemes, and hashing algorithms. Developers currently rely on JavaScript crypto libraries in order to implement these functions, which can, admittedly, provide strong crypto in some situations, but still falter when faced with certain attacks. This talk will look at Cryptocat, a security-centric web-chat client with client-side cryptography, and also focus on the problems, the solutions, and the limitations of JavaScript cryptography. There will be a discussion of potential solutions to these problems, which may very well require the implementation of an integrated universal web browser standard for client-side cryptography."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T11:00:00",
        "location": "Sassaman",
        "timestamp": 1342278000,
        "speakers": [
            {
                "name": "Bill Degnan",
                "bio": "is a former IBM technician, owner of an ISP and computer repair store, and serves as an adjunct professor of computer history at the University of Delaware. He&#39;s also CTO of MARCH (Mid-Atlantic Retro Computing Hobbyists)."
            },
            {
                "name": "Evan Koblentz",
                "bio": "is a technology journalist and computer historian with expertise in the history of portable computing. He is president and co-founder of MARCH (Mid-Atlantic Retro Computing Hobbyists)."
            }
        ],
        "title": "Historic Hacks in Portable Computing",
        "id": "historic",
        "description": "&quot;Portable&quot; computing began with handheld calculating aides such as the abacus and slide rule, continued in the 1950s with mainframes mounted inside Army trucks, and emerged in suitcases, briefcases, and even pockets in the 1970s. All throughout this rich history, there were clever, funny, and security-themed hacks involved. In some cases, there were hacks needed just to construct the systems, and in others there were hacks in system usage. This talk will explain a dozen examples from which modern hackers can learn."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T11:00:00",
        "location": "Nutt",
        "timestamp": 1342278000,
        "speakers": [
            {
                "name": "Aditya K. Sood",
                "bio": "is a founder of SecNiche Security Labs and a PhD candidate at Michigan State University. He is an active speaker at security conferences and has already presented his research at over a dozen of them. He has authored papers for HITB e-zine, Hakin9, ISSA Journal, ISACA Journal, CrossTalk, Usenix ;login:, and Elsevier journals such as NESE and CFS."
            },
            {
                "name": "Rohit Bansal",
                "bio": "is a senior security researcher at SecNiche Security Labs, an independent security research arena. He has been into the security field for the last seven years and is known for his web hacking and botnet analysis skills. He works very closely with both the whitehats and blackhats from the security world. On the professional front, he has worked with large consulting firms including KPMG, PWC, and L&amp;T. He has co-authored papers for Virus Bulletin and HITB e-zine."
            }
        ],
        "title": "Advancements in Botnet Attacks and Malware Distribution",
        "id": "advancements",
        "description": "Third Generation Botnets (TGBs) have circumvented the normal stature of the World Wide Web. These botnets harness the power of the HTTP communication model to complete their stealthy operations. To automate the exploit distribution mechanism for infecting users on a large scale, TGBs are collaborating with Browser Exploit Packs (BEPs). TGBs include Zeus, SpyEye, and the present-day botnet ICEX that are explicitly using BEPs such as BlackHole and Phoenix for insidious infections. Several cases of large scale infections have been seen in the recent past. Additionally, TGBs are designed with sophisticated attack techniques such as form grabbing, Ruskill, web injects (WI), web fakes (WF), DNS tampering, and other custom plug-ins to steal information. These attack techniques are heavily relied upon in the Man in the Browser (MitB) paradigm. The infection strategies include programs such as spreaders that infect other software to conduct drive-by-download/drive-by-cache attacks. This talk delves deep into the design of present-day malware and advancements in attack techniques and infection strategies and is an outcome of real time case studies. Several demos will be shown to back up the arguments."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T11:00:00",
        "location": "Dennis",
        "timestamp": 1342278000,
        "speakers": [
            {
                "name": "Marcia Hofmann",
                "bio": "is a senior staff attorney at the Electronic Frontier Foundation, where she works on a broad range of digital civil liberties issues including computer security, electronic privacy, and free expression. She currently focuses on computer crime and the EFF&#39;s Coders&#39; Rights Project, which promotes innovation and protects the rights of curious tinkerers and researchers in their cutting edge exploration of technology. She is also a non-residential fellow at Stanford Law School&#39;s Center for Internet and Society. Prior to joining EFF, Marcia was staff counsel and director of the Open Government Project at the Electronic Privacy Information Center (EPIC). She is a graduate of the University of Dayton School of Law and Mount Holyoke College."
            }
        ],
        "title": "Protecting Your Data from the Cops",
        "id": "protecting",
        "description": "What should you do if the police show up at your door to seize your computer? If they ask for passwords or passphrases, do you have to turn them over? Can they search your phone if they arrest you during a protest? What about when you&#39;re crossing the border? Your computer, phone, and other digital devices hold vast amounts of sensitive data that&#39;s worth protecting from prying eyes - including the government&#39;s. The Constitution protects you from unreasonable government searches and seizures, but how does this work in the real world? This talk with help you understand your rights when officers try to search the data stored on your digital devices, or keep it for further examination somewhere else. The constitutional protections that you have in these situations, and what their limits are will be discussed, along with technical measures you can take to protect the data on your devices."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T12:00:00",
        "location": "Nutt",
        "timestamp": 1342281600,
        "speakers": [
            {
                "name": "Tamara Yadao",
                "bio": "is a sound artist, musician, and experimental composer who employs loose structures in improvisation to investigate meaning in conceptual methods of sound-making. In 2009, at Diapason Gallery, she presented a lecture on &quot;the glitch&quot; called &quot;Post-Digital Music: The Expansion of Artifacts in Microsound and the Aesthetics of Failure in Improvisation.&quot; Current explorations include radio transmission as a performance tool, electroacoustic composition in virtual space, 8-bit sound (under the moniker Corset Lore), and the spoken word. She has experimented with sculptural forms of sound-making in her work. She currently co-curates the word/text/music performance series, TXT FST."
            },
            {
                "name": "Nicole Carroll",
                "bio": "is a classically trained electroacoustic composer, who also works with video and handmade electronic instruments. Through her music and video works, Nicole seeks to build relationships with audiences though multidisciplinary art experiences. She utilizes circuitbent toys and hacked hardware in performance to provide a visual element to the electroacoustic performance process. Her compositional focus is exploring sonic and artistic possibilities, while presenting material in a manner that is accessible to her audiences. She freelances as a sound designer for theater in Brooklyn, and builds custom midi controllers and hacked instruments for electronic musicians and digital media artists."
            },
            {
                "name": "Joshua Kopstein",
                "bio": "is a computer culture journalist and electronic musician. Currently a reporter for The Verge, his progressive writings (&quot;Dear Congress, It&#39;s No Longer OK to Not Know How the Internet Works&quot;) advocate DIY culture and open source technology as a vehicle for radical sociopolitical reform. Since 2008, he has explored and exploited the unique musical capabilities of antiquated video game consoles, combining primitive computer sequencing with tape loops and improvised electronics. As Zen Albatross, he has performed in cities across the United States, as well as at New York City&#39;s annual chip music event, Blip Festival."
            }
        ],
        "title": "Hacking Mindsets: Conceptual Approaches to Transmission Art, Improvisation, Circuitbending, and Gaming Technology",
        "id": "hackingmindsets",
        "description": "In Richard Stallman&#39;s &quot;On Hacking&quot; from 2000, he addresses the stigma attached to the notion of &quot;hacker,&quot; while clarifying the act of hacking as a creative mindset that encourages playful/clever exploration of established cultural forms, from eating utensils to practical jokes, as opposed to methods for security breach. Beyond the more obvious examples of hacking, Stallman applies this mindset to two specific music compositions: &quot;Ma Fin Est Mon Commencement&quot; by 14th century French composer Guillaume de Machaut and &quot;4&#39;33&quot; by 20th century American avant-garde composer John Cage. The former is a palindromic music composition important to the development of polyphonic music and the latter is a composition written without musical notes. By referring to these two innovations as hacks more then music compositions, Stallman makes a cultural connection between hackers and artists - that hacking is innately creative.\n\tThis presentation/demonstration will examine the notion of hacking and its connections to composer John Cage, music improvisation, and re-purposed instrumentation including radios and transmitters as instruments, circuitbent instruments, and the DIY aspect of software and hardware instruments in the demo and chip music scenes."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T12:00:00",
        "location": "Sassaman",
        "timestamp": 1342281600,
        "speakers": [
            {
                "name": "Sandy Clark",
                "bio": "(Mouse) has been taking things apart since the age of two, and still hasn&#39;t learned to put them back together. An active member of the hacker community, her professional work includes an Air Force flight control computer, a simulator for NASA, and singing at Carnegie Hall. She is currently fulfilling a childhood dream, pursuing a PhD in computer science at the University of Pennsylvania. A founding member of TOOOL USA, she also enjoys puzzles, toys, Mao (the card game), and anything that involves night vision goggles. Her research explores human scale security and the unexpected ways that systems interact."
            },
            {
                "name": "Matt Blaze",
                "bio": "directs the Distributed Systems Lab at the University of Pennsylvania, where he teaches academics to be hackers and hackers to be academics."
            },
            {
                "name": "Travis Goodspeed",
                "bio": "designed the hardware for The Next HOPE badge, as well as an exploit for Microsoft keyboards that runs on the badge. He attends far too many conferences and is alleged to have used a SCADA exploit to produce an abundance of neighborliness in Mister Rogers&#39; Neighborhood. Bitcoin will break if his name or Ben Bernanke&#39;s is removed from blk0001.dat."
            }
        ],
        "title": "Practical Insecurity in Encrypted Radio",
        "id": "practical",
        "description": "APCO Project 25 (&quot;P25&quot;) is a suite of wireless communications protocols used in the United States and elsewhere for public safety two-way (voice) radio systems. The protocols include security options in which voice and data traffic can be cryptographically protected from eavesdropping. This talk analyzes the security of P25 systems against passive and active adversaries. The panel found a number of protocol, implementation, and user interface weaknesses that routinely leak information to a passive eavesdropper or that permit highly efficient and difficult to detect active attacks. They found new &quot;selective subframe jamming&quot; attacks against P25, in which an active attacker with very modest resources can prevent specific kinds of traffic (such as encrypted messages) from being received, while emitting only a small fraction of the aggregate power of the legitimate transmitter. And, more significantly, they found that even passive attacks represent a serious immediate threat. In an over-the-air analysis conducted over a two year period in several U.S. metropolitan areas, they found that a significant fraction of the &quot;encrypted&quot; P25 tactical radio traffic sent by federal law enforcement surveillance operatives is actually sent in the clear - in spite of their users&#39; belief that they are encrypted - and often reveals such sensitive data as the names of informants in criminal investigations.\n\tAside from being important practical vulnerabilities in their own right, the problems in P25 secure radio represent an example of a class of problem that the security and cryptography community has largely ignored. Radio protocols typically do not fit the negotiated two-way communication model under which most security protocols are designed (and to which our community devotes most of its attention). One-way protocols, like P25, in which there is no negotiation or exchange between the transmitter and the receiver are actually rather unusual, and relatively little is known (or written in the literature) about robust design principles for them. In this talk, new approaches to protocol design will be suggested that might allow us to do better."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T12:00:00",
        "location": "Dennis",
        "timestamp": 1342281600,
        "speakers": [
            {
                "name": "Phil Lapsley",
                "bio": "has spent the last several years documenting the history of phone phreaking, through hundreds of interviews and Freedom of Information Act requests. When not researching phreaking, Phil has tried to act like an upstanding member of society. He co-founded two high technology companies in the San Francisco Bay Area and worked for McKinsey and Company, a management consulting firm that advises Fortune 100 companies on business strategy. He co-developed Network News Transfer Protocol (NNTP, RFC 977) used in the USENET news system. He is also the author of one textbook, 17 patents, and numerous technical articles. He lives in Bangalore, India."
            }
        ],
        "title": "Phone Phreak Confidential: The Backstory of the History of Phone Phreaking",
        "id": "phone",
        "description": "Five years in the making, Phil has finally finished Phone Phreaks, his book on the history of phone phreaking from the 1950s to the 1980s. In this talk, he will weave together the evolution of phone phreaking with the backstory of the writing of his book. From giving John &quot;Cap&#39;n Crunch&quot; Draper a piggyback ride around his apartment in order to secure an interview to cleaning out Joybubbles&#39;s apartment after his untimely demise, Phil&#39;s research took him through the maze of twisty little passages that wind through the history of this underground hobby. Some of the characters you&#39;ll meet include the phone phreak CEO of an electronic warfare company, a cell of Stony Brook students busted for blue boxing, and the mysterious and cantankerous head of the International Society of Telephone Enthusiasts. You&#39;ll also get a behind the scenes tour of the NSA and FBI&#39;s phone phreak files and the 400 Freedom of Information Act requests necessary to get them into the light of day."
    },
    {
        "rooms": [
            "Dennis",
            "Sassaman",
            "Nutt"
        ],
        "when": "2012-07-14T13:00:00",
        "location": "Dennis, Sassaman, Nutt",
        "timestamp": 1342285200,
        "speakers": [
            {
                "name": "The Yes Men",
                "bio": "are actually two individuals (Mike Bonanno and Andy Bichlbaum) who have caused a significant amount of mayhem within governments and major corporations over the years. They are the ultimate in social engineering, posing as representatives of everything from the World Trade Organization to Dow Chemical, and having the mass media believe every word of it without checking the facts. This allows them to create an &quot;alternative reality,&quot; where corrupt organizations sheepishly admit their failings and guilty parties graciously offer to compensate their victims - until the truth is uncovered and the parties in question must publicly reaffirm their evil ways. It&#39;s all done with a great sense of humor and it&#39;s served as a tremendous inspiration to freedom loving people everywhere. We&#39;re happy to have The Yes Men filling one of our keynote slots this year."
            }
        ],
        "title": "Keynote Address - The Yes Men",
        "id": "yes",
        "description": " followed by lightning talks"
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T14:00:00",
        "location": "Nutt",
        "timestamp": 1342288800,
        "speakers": [
            {
                "name": "Sean Mills",
                "bio": "is a writer and graphic designer. His expertise in the field of design is highly regarded and he presented related research at 2009&#39;s Creativity Symposium at Wake Forest University."
            },
            {
                "name": "Syl Turner",
                "bio": "is an experienced web developer and the founder of Jokels.com. Syl has produced a variety of web projects beginning with watch-your-step.com in 2000."
            }
        ],
        "title": "An Aesthetic Critique of Fictional Media",
        "id": "aesthetic",
        "description": "This survey of visuals used in motion pictures explores their design implications. Motion pictures play a unique role in constructing how we use terminals, interfaces, and graphic design itself. Highlights will include a tour of multiple screen arrays as found in Star Trek, Brazil, The Truman Show, and Iron Man; a collection of simulated environments from Johnny Mnemonic, Tron, Hackers, and The Matrix; as well as a suite of metamedia from The Final Cut, Brainstorm, and Minority Report. This presentation catalogs the digital artifacts of the past and present, while asking: What are limitations on graphic design?"
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T15:00:00",
        "length": "(90 minutes)",
        "location": "Sassaman",
        "timestamp": 1342292400,
        "speakers": [
            {
                "name": "Robin DeBates",
                "bio": "is chaos wrangler and treasurer for Jigsaw Renaissance, a Seattle area member-based makerspace. A hobby scientist who likes to put pointless LEDs in clothes, make stars in the microwave, and grow bioluminescent algae in her free time, Robin is a clinical social worker by training, providing emergency mental health services in King and Snohomish Counties."
            },
            {
                "name": "Mitch Altman",
                "bio": "is a San Francisco-based hacker and inventor, best known for inventing TV-B-Gone remote controls, a keychain that turns off TVs in public places. He was also co-founder of 3ware (a Silicon Valley RAID controller company), did pioneering work in virtual reality at VPL Research, and created the Brain Machine, one of MAKE Magazine&#39;s most popular DIY projects. For the last many years, he has been on the road from hackerspace to hacker con leading workshops around the world, teaching one and all to make cool things with electronics and teaching everyone to solder with his open source hardware kits. Mitch is one of the co-founders of Noisebridge (a San Francisco hackerspace) and president and CEO of Cornfield Electronics."
            },
            {
                "name": "Meredith L. Patterson",
                "bio": "joined Telecomix shortly after the Egyptian government shut off Internet access to most of the country, leading a team of European and American ham radio operators in an effort to establish emergency radio communications. Although that operation was ultimately unsuccessful, she stayed on to help with other projects, including tracking down suspicious SSL certificates. She works as a software engineer at Red Lambda and pioneered the field of language-theoretic security along with Sergey Bratus and her late husband Len Sassaman. When not immersed in programming language theory or tech support for the Arab Spring, her hobbies include knitting, target shooting, and auto repair."
            },
            {
                "name": "Jimmie Rodgers",
                "bio": "is a full-time hacker, maker, circuitbender, etc. He designs open source hardware kits, teaches a variety of workshops, and gives talks on many topics that interest him. His most popular kits are the Atari Punk Console (a simple and fun sound generator) and the LoL Shield (an Arduino shield with lots of LEDs on it). Jimmie is co-founder of Artisan&#39;s Asylum, a huge hackerspace in Boston."
            },
            {
                "name": "Daravinne",
                "bio": "is a ten year veteran of 2600 and HOPE conferences, and is known to publicly associate with the Noisebridge and site3 hackerspaces. She has had a long private battle with PTSD type II, anxiety, depression, and other trauma issues. Dissatisfied with the (lack of) societal and professional support available to people with these problems, she feels it is very important to start changing that."
            }
        ],
        "title": "Geeks and Depression",
        "id": "geeks",
        "description": "Many of us in the geek community suffer greatly from serious depression. Enough so that several notable hackers have committed suicide over the past couple of years, including the 22-year-old co-founder of Diaspora. Moderated by Robin, a professional geek therapist, the panelists in this session will share their personal histories with depression in hopes of showing that none of us in the geek world need to be isolated with our feelings of being alone, depressed, or suicidal. Is it OK to talk about depression and suicide in the hacker community? This panel thinks it is important to make it so."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T15:00:00",
        "location": "Nutt",
        "timestamp": 1342292400,
        "speakers": [
            {
                "name": "Micah Lee",
                "bio": "is the Electronic Frontier Foundation&#39;s web developer. An avid GNU/Linux user, he has been writing code in a variety of languages for a variety of platforms for over a decade. He takes a keen interest in computer security, cryptography, privacy, Free Software, and Internet freedoms."
            }
        ],
        "title": "Privacy Tricks for Activist Web Developers",
        "id": "privacy",
        "description": "Do you care about the privacy of your website&#39;s visitors, but also depend on social media to get your message out? Do you want to protect your visitors&#39; anonymity in case you or a third party service you use gets subpoenaed? Do you want to be able to get meaningful and pretty analytics without third parties tracking your visitors? Can some kid in a coffee shop really hijack your users&#39; accounts that easily?\n\tChances are Google, Facebook, and Twitter know as much about your website&#39;s visitors as you do, IP addresses and user agents are sprinkled about your server&#39;s filesystem, Google Analytics is watching everyone&#39;s every move, and some kid in a coffee shop is already pwning your users. But it doesn&#39;t have to be this way! This technical talk will cover tricks that web developers and sysadmins can use to minimize the privacy problems that plague the modern web."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T15:00:00",
        "location": "Dennis",
        "timestamp": 1342292400,
        "speakers": [
            {
                "name": "Tiffany Rad",
                "bio": "is an attorney and cyber security engineer for Battelle Institute in their Center for Advanced Vehicle Engineering (CAVE) in Columbia, Maryland. She is also a part-time adjunct professor in the computer science department at the University of Southern Maine, teaching computer law, ethics, and information security."
            },
            {
                "name": "Teague Newman",
                "bio": "is an independent information security consultant based in the Washington, DC and Reno, Nevada areas. He competed in the Netwars segment of the U.S. Cyber Challenge in 2009 and ranked highly in all rounds in which he participated. He is a penetration tester and also a training partner for Core Security Technologies. He has instructed professionals on the topics of information security and penetration testing at places like NASA, DHS, U.S. Army, U.S. Marine Corps, DOE, and various nuclear facilities, as well as at large corporate enterprises."
            }
        ],
        "title": "SCADA/PLC Exploitation and Disclosure",
        "id": "scada",
        "description": "Last year, a few groups of independent security researchers disclosed significant vulnerabilities in SCADA systems and PLCs. This panel brings together these security researchers to discuss their findings, initial goals for doing the research, disclosure processes, and difficulties and surprises encountered. These researchers, independently and without corporate or &quot;nation state&quot; funding, decimated the popular belief that &quot;security via obscurity&quot; works to protect critical infrastructure."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T16:00:00",
        "location": "Dennis",
        "timestamp": 1342296000,
        "speakers": [
            {
                "name": "Trevor Timm",
                "bio": "is an activist and blogger at the Electronic Frontier Foundation, where he specializes in free speech, privacy, and government transparency. Along with Parker Higgins, he also operates the @drones Twitter feed."
            },
            {
                "name": "Parker Higgins",
                "bio": "is an activist and blogger at the Electronic Frontier Foundation, focusing on issues around privacy, freedom of speech, and intellectual property. Along with Trevor Timm, he operates the @drones Twitter feed."
            }
        ],
        "title": "Pwn the Drones: A Survey of UAV Hacks and Exploits",
        "id": "pwn",
        "description": "Drones are no longer a scary possible future of surveillance and remote force - they&#39;re here. Internationally, drones are being deployed for military action and observation. At home, police departments, border patrols, and others are acquiring UAVs and developing programs to fly them; there&#39;s even talk about adding &quot;less lethal&quot; arms to these domestic drones. Think Tasers and rubber bullets shot from the sky. But a series of alarming events over the past few years have demonstrated that many of these unmanned vehicles are dangerously vulnerable to exploits, leading to intercepted data, flight failures, and even remote takeovers. In this talk, Parker and Trevor will explain the privacy and security implications of some of the most sensational drone exploits and the weaknesses that enabled them. They&#39;ll also go over the work of communities and individuals that have been hacking drones from scratch, and what their efforts mean for our future understanding and regulation of drones."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T16:00:00",
        "location": "Nutt",
        "timestamp": 1342296000,
        "speakers": [
            {
                "name": "Ed Ryan",
                "bio": "is a New York patent attorney with a background in physics who deals with technologies including digital broadcast, automotive diagnostics, fiber optic transmissions, semiconductor design, hula hoops, and (omg) software patents."
            }
        ],
        "title": "Patents: How to Get Them and How to Beat Them",
        "id": "patents",
        "description": "Patents are a distasteful reality for hackers, open source programmers, and entrepreneurs alike. This talk aims to provide a working knowledge of how to read a patent, what is required to obtain patent protection, and how to defend yourself against patent lawsuits. This talk is an academic discussion of patent law and should not be construed as legal advice."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T16:30:00",
        "length": "(90 minutes)",
        "location": "Sassaman",
        "timestamp": 1342297800,
        "speakers": [
            {
                "name": "Jaime Magiera",
                "bio": "is the founder of Sensory Research, an organization of engineers, designers, and artists dedicated to providing useful tools, services, and ideas to augment human interaction. Most recently, his work has focused on developing interactive systems for creative self-expression, education, and physical rehabilitation."
            },
            {
                "name": "Micha Cardenas",
                "bio": "is an artist/theorist who works in performance, wearable electronics, hacktivism, and critical gender studies. She is a PhD student in media arts and practice at University of Southern California and a member of Electronic Disturbance Theater 2.0. Her book, The Transreal: Political Aesthetics of Crossing Realities, published by Atropos Press in 2012, discusses art that uses augmented, mixed, and alternate reality, and the intersection of those strategies with the politics of gender in a transnational context. Micha&#39;s local autonomy networks (Autonets) is a project focusing on creating wearable autonomous local networks that don&#39;t rely on corporate infrastructures to function."
            },
            {
                "name": "Cayden Mak",
                "bio": "is a theorist, activist, and media practitioner. He is currently pursuing a Master of Fine Arts in media study at the University at Buffalo. His research interests focus on radical pedagogy, large scale games, play as a tool for social engagement, and Marxist video game aesthetics."
            }
        ],
        "title": "Electric Bodies and Possible Worlds",
        "id": "electric",
        "description": "Though there are many expensive, mainstream solutions for wearable computing, augmented/virtual reality, and alternate reality gaming, there is also a burgeoning community of DIY projects in these areas that focus on self-expression, empowerment, and community building. This panel will provide an overview of several important projects for wearable computing, augmented/virtual reality, and alternate reality gaming. In particular, the session will relate how these projects allow individuals to explore the many possible worlds and identities available to us."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T17:00:00",
        "location": "Nutt",
        "timestamp": 1342299600,
        "speakers": [
            {
                "name": "John Huntington",
                "bio": "is a professor of entertainment technology at New York City College of Technology (City Tech) in Brooklyn. In addition to being a show control geek, he is a weather weenie, and blogs about both topics at www.controlgeek.net."
            }
        ],
        "title": "The Weather is Not Boring! Forecasting, Following, and Photographing Storms",
        "id": "weather",
        "description": "In recent years, real time weather data and numerical forecast model information has moved from proprietary systems and closed distribution methods to the Internet, and huge amounts of taxpayer-funded weather data in easy to understand formats is now free for all to use. This has made it easier than ever for anyone to get a good forecast anytime and anywhere, while also allowing storm chasers to leverage their meteorologic knowledge and use mobile Internet technologies and GPS location tracking to chase tornadoes, hurricanes, lightning, and other severe weather. The presentation will give an overview of weather data gathering methodologies, from ground stations and radar to satellites and weather balloons; give an overview of free or cheap web resources and forecasting models; explain the difference between a &quot;watch&quot; and a &quot;warning;&quot; and show some results from both urban and rural storm chasing."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T17:00:00",
        "length": "(3 hours)",
        "location": "Dennis",
        "timestamp": 1342299600,
        "speakers": [
            {
                "name": "Steven Rambam",
                "bio": "is the founder and CEO of Pallorium, a licensed investigative agency with offices and affiliates worldwide. A memorable presence at all of the HOPE conferences, he is perhaps best known for his pro bono activities, which have included the investigation of nearly 200 Nazi war criminals in the United States, Canada, Europe, and Australia. He has also coordinated efforts to expose terrorist groups&#39; fundraising activities in the United States and has coordinated investigations which resulted in the tightening of airport security in eight U.S. cities prior to 9/11. Many of his investigations involve coordination with national authorities, and he has received commendations and awards in a number of foreign locations, as well as mention on the floors of the Canadian and Israeli Parliaments."
            }
        ],
        "title": "Privacy - A Postmortem (or Cell Phones, GPS, Drones, Persistent Dataveillance, Big Data, Smart Cameras and Facial Recognition, The Internet of Things, and Government Data Centers Vacuuming Google and Facebook, Oh My!)",
        "id": "privacypostmortom",
        "description": "With a few keystrokes, it is now possible for an investigator to determine a target&#39;s location, activities, finances, sexual orientation, religion, politics, habits, hobbies, friends, family, their entire personal and professional histories... even accurately predict what they will do and where they will go in the future. Without leaving the office, a government agent can surveil a subject and &quot;watch&quot; their activities 24/7/365: where they drive, when they walk down the street, if they attend a church or synagogue or mosque or a demonstration or visit an abortion clinic or a &quot;known criminal activity location&quot; or meet with a &quot;targeted person&quot; or a disliked political activist. There is no longer any place to hide.\n\tSince the very first HOPE conference, private investigator extraordinaire Steven Rambam&#39;s lectures on privacy have kept attendees ten years ahead of the curve regarding surveillance technologies, investigative techniques, and the assaults upon personal privacy by government&#39;s Big Brothers and private industry&#39;s even bigger Big Sisters. His lectures described cell phone &quot;pinging&quot; eight years before it was used by the FBI and &quot;Google Glasses&quot; four years before they were announced. The past two years have seen the largest expansion of surveillance technologies ever and, in a wide ranging three hour lecture packed as always with dozens of real-world examples and case studies, Steven will provide a terrifying update on our absolute loss of privacy. His lecture is not for the weak of heart - or for those afraid of drones."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T18:00:00",
        "location": "Sassaman",
        "timestamp": 1342303200,
        "speakers": [
            {
                "name": "David Calkins",
                "bio": "is the president of the Robotics Society of America, the founder of RoboGames, an educator, and event organizer."
            },
            {
                "name": "Simone Davalos",
                "bio": "is a professional robot combat referee, plays with robots for a living, enjoys setting things on fire creatively, and, in the off season, actively pursues her hobby as a low-level bureaucrat for RoboGames and other Robotics Society events."
            }
        ],
        "title": "Combat Robots Then and Now",
        "id": "combat",
        "description": "Fighting robots have been around since the first gearhead figured out that it was really fun to smash thousands of dollars worth of metal and electronics together in the name of sport. This talk will cover the brief but intense history of combat robotics, how the technology has evolved, where it&#39;s going, and where combat robots happen around the world. This presentation will include video, backstage photos, and insights from the organizers of the only large scale combat robot shows left in the United States: RoboGames and The ComBots Cup."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T18:00:00",
        "location": "Nutt",
        "timestamp": 1342303200,
        "speakers": [
            {
                "name": "George Keller",
                "bio": "is a retired U.S. Navy cryptologic officer, who was stationed at many sites around Europe, the Caribbean, and the United States, including the NSA. He is also a retired tech maintenance supervisor at CBS in New York and a ham radio operator."
            }
        ],
        "title": "The Original WWII Hackers",
        "id": "original",
        "description": "A look at some of the history of code breakers in the second World War. Bletchley Park in the United Kingdom was the home of the original WWII &quot;hackers&quot; and George will describe what goes on there today, as well as what Navy cryptologists managed to achieve during the war."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T19:00:00",
        "location": "Nutt",
        "timestamp": 1342306800,
        "speakers": [
            {
                "name": "Ray H. O'Neal, Jr.",
                "bio": "Jr. is an associate professor, founder, and director of the AstroParticle and Cosmic Radiation Detector Research and Development Laboratory (APCR-DRDL) in the Department of Physics at Florida A&amp;M University, where he collaborates with young people to pursue detector and sensor research and development for astrophysics."
            }
        ],
        "title": "Hacking the Cosmos via Crowdsourced Particle Astronomy",
        "id": "hackingthecosmos",
        "description": "The Cosmic Cube is a proposed &quot;desktop&quot; astroparticle or cosmic ray detector enabling ad-hoc formation of cosmic ray telescopes between cube operators. The speaker will address the use of peer to peer networks of detectors for investigating the nature of the flux of high energy cosmic rays and how the random nature of detection events might also be applied to information security."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T19:00:00",
        "location": "Sassaman",
        "timestamp": 1342306800,
        "speakers": [
            {
                "name": "The Doctor",
                "bio": "is a system architect and system administrator working for an aerospace engineering firm in Washington, DC. When not building or repairing servers, he&#39;s aiding dissidents in the Middle East as an agent of Telecomix, working on projects at HacDC, contributing to Zero State projects, traveling through time and space inside a funny blue box, or consulting in the private sector. He is one of the core developers of Project Byzantium."
            },
            {
                "name": "Haxwithaxe",
                "bio": "is a hacker, developer, outdoorsman, HacDC member, software developer, and a live distro and OpenWRT firmware developer. He is a fixer of things... because he breaks them...."
            },
            {
                "name": "Sitwon",
                "bio": "is a programmer, hacker, and pirate extraordinaire. He is a member of HacDC, a Linux administrator, and developer, with experience building Live Linux distributions and custom OpenWRT firmware."
            }
        ],
        "title": "Project Byzantium: An Ad-Hoc Wireless Mesh Network for the Zombie Apocalypse",
        "id": "project",
        "description": "Project Byzantium (a working group of HacDC) is proud to announce the release of Byzantium Linux, a live distribution which makes it fast and easy to build ad-hoc wireless mesh networks. Due to the actions of certain governments (such as those of Egypt, Tunisia, and Syria), alternative data networks are becoming more and more important as a means to communicate, organize, and coordinate. Project Byzantium aims to help support (and in some cases, replace) damaged or compromised Internet infrastructure and services with commodity wi-fi enabled equipment and a flexible, improvisable architecture. The presenters will discuss some of the engineering challenges faced and solutions that were developed to overcome them, including automatic network configuration and interaction with mobile clients that have limited capabilities."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T20:00:00",
        "location": "Dennis",
        "timestamp": 1342310400,
        "speakers": [
            {
                "name": "Da Beave (Champ Clark III)",
                "bio": "(Champ Clark III) is a founding member of telephreak.org. He has authored books for Syngress and is probably more well-known as a VoIP hacker. He also runs the public access Deathrow OpenVMS cluster."
            }
        ],
        "title": "Taking a Bite Out of Logs with Sagan",
        "id": "taking",
        "description": "In protecting today&#39;s network infrastructures, organizations have a lot of shiny tools at their disposal. Firewalls, intrusion detection/prevention systems, network-based ACLs, two factor authentication, and much more. While these are great tools for detection and prevention of network intrusions, system and network logs are often overlooked. This talk will discuss using a fairly new open source (GNU/GPLv2) utility known as &quot;Sagan&quot; for real time log analysis."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T20:00:00",
        "location": "Sassaman",
        "timestamp": 1342310400,
        "speakers": [
            {
                "name": "TProphet",
                "bio": "has been a 2600 Magazine writer and columnist for two decades. A noted futurist, technologist, and author of the popular quarterly &quot;Telecom Informer&quot; column, he believes in the power of communication to change the world."
            }
        ],
        "title": "Twitter Revolution Meets Surveillance State: Now What?",
        "id": "twitter",
        "description": "In the past decade, authoritarian governments have witnessed political upheaval ranging from the Orange Revolution to the Arab Spring movements. Many governments around the world have responded by more closely monitoring and even censoring telephone, Internet, and mobile communications. Join TProphet for a detailed and technical look at this censorship and surveillance, how it&#39;s being implemented in various countries, the present and future risk to your communications freedom, and what you can do to protect yourself."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T20:00:00",
        "location": "Nutt",
        "timestamp": 1342310400,
        "speakers": [
            {
                "name": "Joe Klein",
                "bio": "is an IPv6 SME, scientific hooligan, triathlete, and photographer. For the last seven years, he has participated in the development of security standards for IPv6, based on his experience implementing systems, networks, and applications."
            }
        ],
        "title": "IPv6 Now! What Does This Mean?",
        "id": "ipv6",
        "description": "On June 6th, World IPv6 Launch Day occurred, another step in the replacement of the aging IPv4 Internet. Adoption of IPv6 as of June 17th is 6.9 percent in Romania, 4.5 percent in France, 1.4 percent in Japan, 1 percent in the United States, 0.58 percent in China, and 0.28 percent in Russia. This is up from less than 0.006 percent within the past two years. This presentation will answer the questions: &quot;What is the risk of adopting IPv6?&quot;, &quot;What is the risk of not adopting IPv6?&quot;, and &quot;What are the new opportunities for hackers?&quot;"
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T21:00:00",
        "location": "Sassaman",
        "timestamp": 1342314000,
        "speakers": [
            {
                "name": "Matthew O'Gorman",
                "bio": "aka mog is an employee of Meatstand, a new father, and a hacker. He is a member of Makers Local 256, a Huntsville hackerspace."
            },
            {
                "name": "Tim Heath",
                "bio": "aka crashcart is an employee of Meatstand, a van aficionado, and a hacker. He is a member of Makers Local 256, a Huntsville hackerspace."
            }
        ],
        "title": "Designing Free Hardware: Scratching Your Own Itch with a Soldering Iron",
        "id": "designing",
        "description": "So you have played with free and open source software? Time for things to get real. Learn how to go from a simple idea like &quot;I need some electronic dice&quot; or &quot;wouldn&#39;t it be insanely great if I could control my TV from my phone&quot; to a simple breadboard prototype, on to a custom schematic and then laid out in PCB, sending your Gerber files to China for fabrication, and then carefully soldering it together to scream &quot;it&#39;s alive&quot; as your LED glows brightly for the first time."
    },
    {
        "rooms": [
            "Dennis",
            "Nutt"
        ],
        "when": "2012-07-14T21:00:00",
        "location": "Dennis, Nutt",
        "timestamp": 1342314000,
        "speakers": [
            {
                "name": "Emmanuel Goldstein and friends",
                "bio": "has been publishing 2600, hosting the Off The Hook radio program, and coordinating HOPE conferences for longer than he&#39;d care to remember. He currently has no certifications, a fairly worthless bachelor&#39;s degree in English, and he&#39;s never even taken a course in computers. He also has a few issues with authority and authority has many issues with him. To this day, the wonderful world of social engineering provides him solace."
            }
        ],
        "title": "Social Engineering",
        "id": "social",
        "description": "Since the very first HOPE conference in 1994, the social engineering panel has been a huge draw. We basically round up a bunch of people who like to play on the phone, tell some stories, and make live calls to strangers who wind up telling us things they really shouldn&#39;t in front of a huge crowd of people who are trying very hard not to make any noise. It&#39;s all a lesson on how insecure information really is, and how you can avoid making the same mistakes that some unsuspecting person someplace will inevitably make when this panel randomly calls them."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T22:00:00",
        "location": "Sassaman",
        "timestamp": 1342317600,
        "speakers": [
            {
                "name": "Chris Naegelin",
                "bio": "is a technology and security hobbyist who enjoys free and open access to information and dislikes the use of acronyms. He has previously worked as a federal employee for the U.S. government, managing security and compliance programs and has worked as a security consultant for BearingPoint and PricewaterhouseCoopers."
            },
            {
                "name": "Charlie Vedaa",
                "bio": "is a fork and spoon operator for the federal government and runs the online CTF game pwn0.com. He&#39;s living proof that they&#39;ll let anyone present at hacker conferences."
            }
        ],
        "title": "The ARRIStocrats: Cable Modem Lulz",
        "id": "arristocrats",
        "description": "The ARRIS TG852G is a DOCSIS 3.0 cable modem/router that&#39;s being deployed en masse by Time Warner and Comcast. If you&#39;re a customer with this hardware, then you may be saddened to find that your service provider won&#39;t give you a login to configure the box. This talk will walk you through two different methods to gain access to the device by exploiting weakly implemented authentication mechanisms on it. You&#39;ll see how a three-year-old documented &quot;feature&quot; designed to keep customers out can quickly become a provider&#39;s worst security nightmare. The talk will also go a step further and show you how aggregating some publicly available datasets would allow an attacker to use the vulnerability to quickly and effectively build an army of thousands of routers."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T22:00:00",
        "location": "Nutt",
        "timestamp": 1342317600,
        "speakers": [
            {
                "name": "Quincy Robertson",
                "bio": "is an information security researcher from the San Francisco Bay Area with a background in networking and Linux system administration. His first foray into hacking was reverse engineering video game save files back in the DOS era."
            }
        ],
        "title": "DKIM: You're Doing It Wrong",
        "id": "dkim",
        "description": "DomainKeys Identified Mail (DKIM) is the most effective, widely deployed email forgery countermeasure available today... if implemented correctly. Many of the world&#39;s largest and most trusted companies, including some of those driving the standard, have fatally flawed deployments. When the first standard for SMTP was published in 1982, the Internet was a much smaller and safer place. Ever since the first spammers, we&#39;ve been trying to fix email with various hacks such as callout verification, forward confirmed reverse DNS, PGP, S/MIME, SPF, Sender ID, DomainKeys, DKIM, and an ever-changing collection of filters. All of them have serious flaws. This talk will cover several common mistakes made when deploying DKIM and how they can be exploited to achieve the holy grail of email forgery."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T22:00:00",
        "location": "Dennis",
        "timestamp": 1342317600,
        "speakers": [
            {
                "name": "Michael Weinberg",
                "bio": "is a senior staff attorney and innovation evangelist at Public Knowledge, a digital advocacy group in Washington, DC. He is the author of &quot;It Will Be Awesome If They Don&#39;t Screw It Up: 3D Printing, Intellectual Property, and the Fight Over the Next Great Disruptive Technology,&quot; a white paper that examines how IP law may impact the growth of 3D printing. Although he is involved in a wide range of issues at Public Knowledge, he focuses primarily on copyright, issues before the FCC, and emerging technologies like 3D printing. He also makes videos every once in a while."
            }
        ],
        "title": "3D Printing: Making Friends in DC Before People Start Freaking Out",
        "id": "3d",
        "description": "This talk is about protecting 3D printing from industries that are not excited about disruption. It will begin with an overview of the technology behind 3D printing and how the industry is developing and diversifying. It will then cover how intellectual property (IP) relates to 3D printing, and highlight the opportunities that 3D printing gives us to rethink the permission culture that has developed alongside the growth of digital copyright. The talk will end with a description of current IP conflicts connected to 3D printing and examples of steps being taken today to win allies among policymakers in Washington, DC. 3D printing has the possibility of being a widely disruptive and beneficial technology, and the last 15 years have taught us that not everyone embraces widespread disruption. It is possible that industries disrupted by 3D printing will react along the lines of those disrupted by the Internet (negatively). Fortunately, today we have the opportunity to consider what could have been done in the early days of the Internet to insulate it from some of the legal and policy attacks in DC. HOPE attendees and the hacker community at large will benefit from beginning to think through these issues today - before a problem occurs."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T23:00:00",
        "location": "Sassaman",
        "timestamp": 1342321200,
        "speakers": [
            {
                "name": "Cooper Quintin",
                "bio": "is a web developer working for social justice at radicalDESIGNS. He is also an organizer of and presenter at the Hackmeet conference. His passion is merging radical technology and radical politics."
            }
        ],
        "title": "Your Cell Phone is Covered in Spiders! (An Overview of Mobile Device Security)",
        "id": "your",
        "description": "Smartphones have changed the world. Your calendar, photographs, private documents, and communication with your entire social sphere is now just a swipe away. We are carrying exponentially increasing amounts of highly personal data around with us in our pockets. But are we doing enough to safeguard this data? Mobile devices are also becoming an important tool for social change, but with this they also become a more important target for governments and corporations. With so many attack vectors on mobile devices, it is important to know the ways that your mobile device can be compromised and how you can protect against these attacks. This talk will focus primarily on the security of the Android operating system. You will hear about how to protect your phone against warrantless search and seizure by law enforcement, as well as how much damage malicious apps can actually do and how to protect yourself from becoming the victim of malware. You will hear about password security concerns on Android and how to protect yourself, along with some of the many great security-related apps that Android has to offer. This talk will examine the question of whether you can protect yourself from the greatest of all threats to your phone: The Phone Company."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T23:00:00",
        "location": "Dennis",
        "timestamp": 1342321200,
        "speakers": [
            {
                "name": "Molly Sauter",
                "bio": "is a graduate student in comparative media studies at MIT, and a research assistant at the Center for Civic Media at the MIT Media Lab. Molly&#39;s research focuses on cultural and sociopolitical analyses of technology, particularly hacktivist technology and tactics, and other aspects of hacker culture and digital activism. Before arriving at MIT, she worked as a researcher at the Berkman Center for Internet and Society at Harvard, focusing on Internet law and regulation."
            }
        ],
        "title": "Activist DDoS Attacks: When Analogies and Metaphors Fail",
        "id": "activist",
        "description": "What are we talking about when we refer to activist Distributed Denial of Service (DDoS) attacks? Digital sit-ins? Juvenile bullying and censorship? Something completely different? The rhetorical framings by both advocates and critics of activist DDoS attacks have ultimately fallen short of successfully defining DDoS as an activist tactic. Metaphoric characterizations have failed to describe the reality of activist DDoS attacks, and new analysis is needed if we are to fully understand the tactic&#39;s potential. In an effort to come to this new analytical understanding, this talk examines the history of DDoS attacks in activism in general, culminating with the case study of the Anonymous Operation Payback attacks. The discussion will show how the population participating in DDoS attacks has shifted from a professionalized activist core and their peers (such as those participants in the Electronic Disturbance Theater&#39;s actions in the 1990s and 2000s) to the diffuse, less professionalized, and less conventionally politically active population that participated in the Anonymous actions. The role the media has played in past activist DDoS actions will also be explored. Evidence will be presented to show that DDoS attacks have shifted in their tactical nature from electronic direct action to a form of media manipulation."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-14T23:00:00",
        "location": "Nutt",
        "timestamp": 1342321200,
        "speakers": [
            {
                "name": "Andrew Cameron Zahn",
                "bio": "is a multimedia artist and designer living and working in Philadelphia, Pennsylvania. His most recent project, HackPhilly, was a juried design and art exhibition for hackers. HackPhilly took place during the 2012 Philly Tech Week festival. Andrew produces experimental interactive sites, applications, installations, and instruments that bridge the gap between art and design. His work was recently featured in the &quot;Making IT&quot; juried art exhibition in Philadelphia."
            },
            {
                "name": "Katherine Bennett",
                "bio": "is an artist who widens notions of habitable spaces: involving the intangible spaces within the mind and the liminal spaces created by digital communities. Katherine uses sound and light as visceral material to foster relationships across these spaces, creating a presence across the trajectory of time. Her work studies the terrain of memory: its absence, degradation, and the new space that this loss provides for new experiences. Her latest environments investigate the development of social networks, and experiment with interaction thresholds. She uses sound and light, facilitated by programming, to create interactive and responsive installations."
            },
            {
                "name": "William Cromar",
                "bio": "is an architect, animator, and musician who has exhibited his work nationwide since 1983. The recipient of a silver medal at the 1983 International Biennial of Architecture in Sofia, Bulgaria, he was awarded a National Endowment for the Arts grant, a Samuel Fleisher Art Memorial Challenge Exhibition, and was a finalist for the Pew Fellowships in the Arts. He currently teaches at the Abington campus of Penn State University."
            },
            {
                "name": "Chris Thompson",
                "bio": "is a board member of Hive76 in Philadelphia. He is the head of Eagleapex LLC and designer of the math clock and wristwatch at mathclock.com. He was principal of now closed meatcards.com, a site for laser-etched beef jerky business cards. He provides consulting for artists and others about technology and the Internet. He also uses technology to create digital art."
            }
        ],
        "title": "The Emergence of Hacker as Artist and Artist as Hacker",
        "id": "emergence",
        "description": "The new direction and emergence of hackers working like artists and artists working like hackers brings up a wealth of questions pertaining to these new mediums. How do the practices of &quot;hackers&quot; differ, if at all, from those of &quot;artists?&quot; Should we question when or how a hacker project falls between the lines of art, design, or hacking? The panel will discuss how their work bridges the gap between hacking, new media, and art. Their skills and interests vary quite a lot, but they all use technology to make a statement."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-14T23:59:00",
        "location": "Sassaman",
        "timestamp": 1342324740,
        "speakers": [],
        "title": "Film Screening: Monochrom's Kiki and Bubu: Rated R Us",
        "id": "film",
        "description": "Our favorite sock puppets Kiki and Bubu have some feelings, so they sign up for an online dating site. When the People of China want to become their friend, they are excited. However, sending the People of China a video of themselves proves to be difficult: Their content gets flagged as inappropriate and taken down from YouTube. On the long quest for knowledge which follows, Kiki and Bubu learn all about Internet censorship. And love."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-14T23:59:00",
        "length": "(2 hours)",
        "location": "Dennis",
        "timestamp": 1342324740,
        "speakers": [
            {
                "name": "Robert David Steele",
                "bio": "former spy, honorary hacker, and #1 Amazon reviewer for nonfiction, has also set the world record for Q&amp;A at eight hours and one minute, going from midnight Saturday to 0801 Sunday at The Next HOPE (2010). This year, he was accepted by the Reform Party as a candidate for the presidency. The son of an oil engineer, he has lived all over the world, been a Marine Corps infantry officer, a CIA clandestine case officer, a founder of the Marine Corps Intelligence Center, and a CEO of both a for-profit (OSS.Net, closed in 2010) and a nonprofit (Earth Intelligence Network)."
            }
        ],
        "title": "Spy Improv: Reality Unfiltered",
        "id": "spy",
        "description": "Several HOPES ago, Robert Steele started doing separate Q&amp;A sessions using his knowledge as a former spy, pioneer of open source intelligence, advocate of multinational sense-making, and #1 Amazon reviewer for nonfiction. At The Next HOPE (2010), with help from those who stayed with him, he set what may be the world record for Q&amp;A, eight hours and one minute, from midnight Saturday to 0801 Sunday. This year will be strictly limited to two hours in open session, but the possibility of a roundtable thereafter will remain open. All questions welcome."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T10:00:00",
        "location": "Dennis",
        "timestamp": 1342360800,
        "speakers": [
            {
                "name": "Greg Newby",
                "bio": "has been engaged in building and giving away technologies and content since adulthood. He volunteers as director and CEO of the Project Gutenberg Literary Archive Foundation. He lives and works in Fairbanks, Alaska. In his spare time, he enjoys excursions with his sled dog team."
            }
        ],
        "title": "When the Founder is Gone: Longevity for Open Projects",
        "id": "when",
        "description": "A single visionary is often credited with shaping innovation and leading to success in open source and open content projects. This success doesn&#39;t come from that person alone: he or she leads a corps of willing volunteers, admirers, workers, and others who will turn vision into reality - often with some sort of organizational structure, and across a span of years. This presentation will focus on how to maintain the health and sustainability of such organizations with strong well-known leaders in the event the founder is lost. The presenter will draw upon personal experience with the recent loss of Michael Hart, founder of Project Gutenberg and inventor of eBooks. Every organization is different, and every leader is different. Yet, there are many common characteristics in efforts that started with a single visionary, who led formation of what became a large and successful organization. The presentation will point out some of these similarities and identify some of the promising strategies that have been effective for continuity."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-15T10:00:00",
        "location": "Sassaman",
        "timestamp": 1342360800,
        "speakers": [
            {
                "name": "Lisa Shay",
                "bio": "is an assistant professor in West Point&#39;s department of electrical engineering and computer science. She is an electrical engineer and her research interests include sensor networks, privacy, automated law enforcement, robotics, and surveillance countermeasures."
            },
            {
                "name": "Greg Conti",
                "bio": "is director of West Point&#39;s Cyber Security Research Center. He is the author of Security Data Visualization (No Starch Press) and Googling Security (Addison-Wesley), an EFF Favorite Book, as well as over 40 articles and papers covering online privacy, usable security, cyber warfare, and security data visualization."
            }
        ],
        "title": "Countermeasures: Proactive Self Defense Against Ubiquitous Surveillance",
        "id": "countermeasures",
        "description": "From governments fighting terrorists to companies hawking products to free online services where you are the product, it seems that everyone wants a piece of you and your personal information. This talk begins with the current state of our surveillance society and delves deeply into countermeasures you and society at large can employ to maintain and protect your right to privacy. Lisa and Greg will deconstruct a surveillance system and examine techniques for defeating or degrading each component. They&#39;ll cover technical countermeasures, but also present techniques for influencing policy, law, and the incentives underpinning surveillance activities. Left unconstrained, the problems of the emerging surveillance society will only get worse as more and more sensors and tracking applications invade the physical and digital worlds. You&#39;ll leave this talk with a clear understanding of how to protect yourself and with strategies to deflect the trajectory of our surveilled future."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-15T10:00:00",
        "location": "Nutt",
        "timestamp": 1342360800,
        "speakers": [
            {
                "name": "Michael Rash",
                "bio": "is author of the book Linux Firewalls: Attack Detection and Response with iptables, psad, and fwsnort, published by No Starch Press, and holds a master&#39;s degree in applied mathematics with a concentration in computer security from the University of Maryland. He is a frequent speaker at computer security conferences, and is the founder of cipherdyne.org, an organization dedicated to open source security technologies. In his free time, Michael leads the development of the psad, fwsnort, and fwknop security projects."
            }
        ],
        "title": "Recent Advances in Single Packet Authorization",
        "id": "recent",
        "description": "Single Packet Authorization (SPA) is a security technology whereby vulnerable services are protected behind a default-drop packet filter and temporary client access is granted via passive means. This talk will present recent advances in the open source &quot;fwknop&quot; SPA project, including clients for Android and the iPhone, support for the PF firewall on OpenBSD, the ability to seamlessly integrate SPA into cloud computing environments with the new FORCE_NAT mode, and deploying fwknop on embedded systems with limited computing resources. In addition, some discussion will be devoted to other SPA implementations and the various tradeoffs that must be made by any project that provides either port knocking or SPA functionality."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-15T11:00:00",
        "location": "Nutt",
        "timestamp": 1342364400,
        "speakers": [
            {
                "name": "Ben Combee",
                "bio": "is the developer architect for the Enyo JavaScript framework and one of the key contributors to the Open webOS project. Over the years, he&#39;s worked on IC design, compilers, developer tools, mobile devices, operating systems, and open source hardware."
            }
        ],
        "title": "Using Browser-based Tools to Open Up the Web",
        "id": "using2",
        "description": "In this talk, Ben will show how to use tools already included in the popular web browsers Firefox and Chrome to learn what&#39;s really happening when you browse the web. He&#39;ll show how to find hidden values in forms, watch AJAX transactions, and manipulate the data you send out into the cloud, as well as touch on extensions like AdBlock and Greasemonkey and see how they can automate much of this for you."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-15T11:00:00",
        "location": "Sassaman",
        "timestamp": 1342364400,
        "speakers": [
            {
                "name": "Space Rogue",
                "bio": "is widely sought after for his unique views and perceptions of the information security industry. He has testified before Congress and has been quoted in numerous media outlets. He was an early member of the security research think tank L0pht Heavy Industries and helped co-found the Internet security consultancy @Stake. He created the widely popular Hacker News Network, which, not once but twice, became a major resource for information security news. Space Rogue currently works as the threat intelligence manager for Trustwave SpiderLabs."
            }
        ],
        "title": "Hackers and Media Hype or Big Hacks That Never Really Happened",
        "id": "hackers",
        "description": "Media will often report &quot;hacks&quot; that either never actually happened or have extremely flimsy evidence. They then become major news stories through media hype while the reality is seldom reported at the same level. This talk will closely examine several instances of such stories and compare the hype with the reality. Examples will include Kevin Mitnick&#39;s compromise of NORAD, the use of steganography by Al Qaeda, the electrical blackout in Brazil, the failure of a water pump in Illinois, and others. Close attention will be paid to the media&#39;s role in presenting these stories and how they morphed from purely circumstantial to quoted facts. The structure of a hyped story will be examined so that it can be easily identified and methods of combating the hype will be discussed."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T11:00:00",
        "location": "Dennis",
        "timestamp": 1342364400,
        "speakers": [
            {
                "name": "Griffin Boyce",
                "bio": "is an independent researcher and frequent volunteer for anticensorship projects. His research has focused on communication, privacy, and transgender health. Currently, he is working on how AIDS researchers can effectively collaborate for a public health nonprofit."
            }
        ],
        "title": "Information Distribution in the Arab Spring - No Hacks Required",
        "id": "information",
        "description": "From pirate radio, livestreaming, and video-sharing apps, to asynchronous mesh networks, Bluetooth, SMS/MMS, i2p, and Tor hidden services, the ways that activists in the Middle East and North Africa get critical information out are far more varied than most people know. With so much attention given to leaks recently, it&#39;s easy to perceive the &quot;liberation&quot; of information as involving major hacks of critical systems. But reality is, as always, much more complex and interesting. This talk will show just how distribution channels in the Middle East are created and maintained, and the positive impacts they can have."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T12:00:00",
        "location": "Dennis",
        "timestamp": 1342368000,
        "speakers": [
            {
                "name": "WJ, Alex Muentz",
                "bio": "is an IT professional and lawyer. He&#39;s spoken at HOPE since 2006, in addition to a handful of other conferences. When he&#39;s not trying to explain lawyer-y things to hackers or hacker-y things to lawyers, he teaches and practices law."
            }
        ],
        "title": "DUI/DWI Testing - A Hacker's View of the Technology and Process Behind the BAC and Standard Field Sobriety Test",
        "id": "dui",
        "description": "This talk will look behind the process, techniques, and technology (or lack thereof) used by law enforcement to identify suspected intoxication. What most people don&#39;t know is that there is little in the way of scientific process or technology that is used during the testing of intoxication. The process relies on a strategy of behavioral cues and coercion often geared towards leading an individual to admit wrongdoing. The technology and instruments used by law enforcement for determining sobriety has changed little over the years. Some of these technologies are inherently flawed or misleading. This presentation will take a closer look at the most common techniques and equipment including the Breathalyzer, Horizontal Gaze Nystagmus (HGN), and the instruction led Standardized Field Sobriety Test (SFST). There will be a discussion of how each of these processes works and an enumeration of potential flaws or tactics one should be aware of to ensure fair and unbiased treatment."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-15T12:00:00",
        "location": "Sassaman",
        "timestamp": 1342368000,
        "speakers": [
            {
                "name": "Jennifer Ortiz",
                "bio": "is a doctor of pharmacy, recently graduated from Creighton University. She graduated from Rensselaer Polytechnic Institute with a BS in electronic media arts and communication, and a minor in computer science. She worked for five years in web development, then pursued pharmacy."
            }
        ],
        "title": "Brain Chemistry: How Psychoactive Chemicals Hack the Central Nervous System",
        "id": "brain",
        "description": "People have been using chemistry to hack their bodies and their brains since antiquity. In the past several decades, we have come to understand much more about the processes involved. How is it that certain molecules cause profound alterations in perception? How do they alleviate physical and psychological pain? How do they get people high? Why are some drugs psychoactive and not others? Why are some toxic? This presentation explores the answers to these questions and more."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-15T12:00:00",
        "location": "Nutt",
        "timestamp": 1342368000,
        "speakers": [
            {
                "name": "QueueTard",
                "bio": "is trained as a mechanical engineer, and has specialized in manufacturing and semiconductor fabrication. He has worked in multiple &quot;FABs&quot; in a variety of roles from collegiate research to major 22nm and beyond production."
            }
        ],
        "title": "Manufacturing Modern Computer Chips",
        "id": "manufacturing",
        "description": "Modern computer chips are using transistors with features as small as 22nm. They are produced in factories that are 10,000 times cleaner than an operating room that can think like Skynet. Combined, the chips they produce run everything from your cell phone to the Internet itself. While outsiders might see it as the realm of multi-billion dollar corporations, in reality, it has been achieved through a hardcore application of the hacker mindset. Each new advancement involves hacking the theories of electrical engineering, hacking waves of light, and sometimes hacking physics. This talk will go over how and why the design of a modern nanoscale transistor was developed, as well as discuss the processes used to build them, and the incredible equipment that makes it all possible. Plus some fun stories about what goes wrong."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-15T13:00:00",
        "location": "Nutt",
        "timestamp": 1342371600,
        "speakers": [
            {
                "name": "Brendan O'Connor",
                "bio": "is a geek of many trades: violin, ham radio, civil rights, and privacy. After growing up in Montana and finishing two degrees at Johns Hopkins, he did DARPA research for a time in Arlington, Virginia before leaving to found his own consultancy, Malice Afterthought - a security research group which recently completed a DARPA Cyber Fast Track contract. After spending six months teaching information warfare for the DoD in 2011, he decided to attend law school at the University of Wisconsin in Madison; he is between his first and second years. He lives and works in Madison, Wisconsin with his two cats, Lysistrata and Deus Ex Machina."
            }
        ],
        "title": "Hack the Law",
        "id": "hack",
        "description": "Recent bills such as ACTA, COICA, and SOPA in legislatures worldwide demonstrate that there exists a fundamental disconnect between hackers and politicians. Worse, the people charged with dealing with law on the ground, the lawyers, rarely have any significant technical background obtained within the last few decades. This must change. It&#39;s all well and good to write your congressperson or donate to the EFF, but it&#39;s not enough; we need hackers to go to law school. Lawyers - whether they work as attorneys, or bring their knowledge of the law back to other fields - are uniquely situated to effect direct change on politics, social issues, and the law on the ground (where they arrest poor hackers) and, unlike many fields, it&#39;s not enough to be self-taught. This presentation will focus on the utility of the hacking ethos within the law, as well as the &quot;law school experience,&quot; technical bits about actually getting in, and how to keep yourself from going nuts while spending three years surrounded by those who can&#39;t tell their megabytes from their overbites (and are terrified by Wireshark, let alone the more subtle tools in existence). Expect stories, humorous anecdotes, and terrifying lapses in judgment."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-15T13:00:00",
        "location": "Sassaman",
        "timestamp": 1342371600,
        "speakers": [
            {
                "name": "Johannes Grenzfurthner",
                "bio": "is an artist, writer, curator, and director. He is the founder and artistic director of monochrom, an internationally acting art and theory group. He holds a professorship for art theory and art practice at the University of Applied Sciences in Graz, Austria. He is head of the Arse Elektronika festival in San Francisco, host of Roboexotica (Festival for Cocktail-Robotics, Vienna and San Francisco), and co-curates the Paraflows Symposium in Vienna. Recurring topics in Johannes&#39; artistic and textual work are contemporary art, activism, performance, humor, philosophy, postmodernism, media theory, cultural studies, sex tech, popular culture studies, science fiction, and the debate about copyright."
            },
            {
                "name": "Sean Bonner",
                "bio": "is a Los Angeles-based entrepreneur, journalist, activist, and enthusiast. Currently, his time is split between Safecast (an open global sensor network currently monitoring radiation levels in Japan), Neoteny Labs (an early stage consumer Internet startup fund focusing on Southeast Asia), and Coffee Common (a customer education brand collaboration launched at TED 2011). He is one of the founders of Crash Space (a Los Angeles hackerspace) and has been a regular contributor to BoingBoing."
            }
        ],
        "title": "Hacking the Spaces",
        "id": "hackingthespaces",
        "description": "In 2009, Johannes and Frank Apunkt Schneider published their critical pamphlet &quot;Hacking the Spaces,&quot; causing a shitstorm in forums and mailing lists. The publication of the text on Boing Boing was even called a &quot;PR disaster for the hackerspaces movement&quot; by various members of the scene. Three years later, the discussion is still raging. Are hackerspaces the inclusionist paradises that their members want them to be, or are they just white middle-class boys&#39; clubs generating nothing more than a few more streamlined members of &quot;Generation Self-Exploitation?&quot; This talk is an invitation to look at the debate and analyze its potential and drama. We promise dramatic potential and the potentially dramatic!"
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T13:00:00",
        "location": "Dennis",
        "timestamp": 1342371600,
        "speakers": [
            {
                "name": "Eben Moglen",
                "bio": "is executive director of the Software Freedom Law Center and professor of law and legal history at Columbia University Law School. He has represented many of the world&#39;s leading free software developers. He earned his PhD in history and his law degree at Yale University during what he sometimes calls his &quot;long, dark period&quot; in New Haven. After law school, he clerked for Judge Edward Weinfeld of the United States District Court in New York City and for Justice Thurgood Marshall of the United States Supreme Court. He has taught at Columbia Law School since 1987 and has held visiting appointments at Harvard University, Tel Aviv University, and the University of Virginia. In 2003, he was given the Electronic Frontier Foundation&#39;s Pioneer Award for efforts on behalf of freedom in the electronic society."
            }
        ],
        "title": "How to Retrofit the First Law of Robotics",
        "id": "retrofit",
        "description": "We live with robots now, as we always knew we would. But they have no hands or feet. We carry them in our pockets. They see what we see. They hear what we hear. They always know where we are. But they do not work for us, and they are not programmed to obey the First Law. Profit made them, profit runs them, and they hurt us every day. Free Software can retrofit the First Law of Robotics into the robots we call cell phones, but those who control the robots don&#39;t want freedom inside. That&#39;s where we come in. This talk will discuss how."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-15T14:00:00",
        "location": "Nutt",
        "timestamp": 1342375200,
        "speakers": [
            {
                "name": "aestetix",
                "bio": "used to think he was influenced by the wise words of sages like Joseph Campbell and Robert Heinlein, which led him to work on identity-related projects like OpenAMD at previous HOPE conferences. But then, he met the Big Bad Google Plus, which taught him that he didn&#39;t even exist."
            }
        ],
        "title": "Why Names Matter: How Online Identity is Defining the Future of the Internet",
        "id": "why2",
        "description": "As the Internet becomes more public and universal, the world is beginning to have an identity crisis. Some big questions are coming up: who are we, and how should we be represented online? Originally inspired by having his Google Plus account suspended twice during the nymwars fiasco, aestetix will explore the deeper nature of how we identify ourselves and each other. The talk will look at issues both from a technology and social perspective, asking questions like why hacker handles are important, and how our notions of privacy have changed in the greater scheme. It will also cover the ways in which current online social networks try to build upon existing social relationships and discuss suggestions for improvement in the future."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-15T14:00:00",
        "location": "Sassaman",
        "timestamp": 1342375200,
        "speakers": [
            {
                "name": "Jeremiah Johnson",
                "bio": "(Nullsleep) is a computer musician and artist based in Brooklyn, New York. His work explores the politics of appropriation, failure, and the tension between order and chaos through creative (mis)uses of consumer electronics and elements of early Internet vernacular. He is the founder of the 8bitpeoples low-tech audio/visual collective, a member of Computers Club Drawing Society and Phone Arts, and co-curator of Blip Festival, an event taking place annually in New York, Tokyo, and Melbourne."
            },
            {
                "name": "Don Miller (NO CARRIER)",
                "bio": "(NO CARRIER) is an artist and educator based in Brooklyn, New York. He performs live visuals in real time. Don works with nearly obsolete re-purposed electronics to create high energy low resolution abstract video art. Part of the 8bitpeoples artist collective, he performs, exhibits, and lectures worldwide. In his hometown of Philadelphia, he organizes and curates 8static, a monthly showcase of low-bit music and video. He also serves as a director of Playpower, a nonprofit organization that works to bring low cost educational games to developing countries."
            }
        ],
        "title": "Dead in a Pool of Blood and Millions of Dollars of Net Art",
        "id": "dead",
        "description": "0-Day Art is a warez group for art, focusing primarily on digitally represented works. The project was born in response to situations where takedown notices, pay walls, and practices of &quot;taking it offline&quot; threaten the distribution and availability of art online. 0-Day Art seeks to put net art back on the net. Using BitTorrent to package and distribute &quot;art warez&quot; within 24 hours of its initial availability, whenever possible, and social networks to quickly spread the word, the project has received attention from Today and Tomorrow, The Verge, GalleristNY, and ArtInfo, who referred to the project as, &quot;the free-data pirates of the new media world.&quot; This is just the start. 0-Day Art exists at the intersection of art critique, hacktivism, and open culture, and manifests itself in many different ways. This talk will cover the history of 0-Day Art, as well as a brief history of &quot;The Scene&quot; (warez, demo, and art). Past projects, current projects and challenges, and the future of 0-Day Art will be discussed."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T14:00:00",
        "location": "Dennis",
        "timestamp": 1342375200,
        "speakers": [
            {
                "name": "Mitch Altman",
                "bio": "is a San Francisco-based hacker and inventor, best known for inventing TV-B-Gone remote controls, a keychain that turns off TVs in public places. He was also co-founder of 3ware (a Silicon Valley RAID controller company), did pioneering work in virtual reality at VPL Research, and created the Brain Machine, one of MAKE Magazine&#39;s most popular DIY projects. For the last many years, he has been on the road from hackerspace to hacker con leading workshops around the world, teaching one and all to make cool things with electronics and teaching everyone to solder with his open source hardware kits. Mitch is one of the co-founders of Noisebridge (a San Francisco hackerspace) and president and CEO of Cornfield Electronics."
            },
            {
                "name": "Psytek",
                "bio": "is an inventor, engineer, and entrepreneur. He&#39;s CEO and CTO of multiple companies including CoderBounty.com. He co-founded the Alpha One Labs community hackerspace in Brooklyn and is currently making progress on a groundbreaking aerospace transportation vehicle. He&#39;s been a 2600 reader and meeting participant for more than 15 years and is a proponent for hacker culture and community."
            },
            {
                "name": "Willow Brugh",
                "bio": "is the director of Geeks Without Bounds, an accelerator for humanitarian projects. Previous endeavors include being co-founder of Seattle makerspace Jigsaw Renaissance, the hackerspace collaboration initiative Space Federation, and the response-development competition GameSave. Years of participation in the hacker and makerspace community have created purpose towards distributed systems, engaged citizens, and mutual aid. With heavy involvement in Maker Faire, Random Hacks of Kindness, and the SpaceApps Challenge, Willow&#39;s main skill is &quot;getting out of the way.&quot;"
            },
            {
                "name": "Fiacre O'Duinn",
                "bio": "has presented at library conferences in Canada and the United States on the impact of emerging technologies on libraries and librarians. He blogs at Library Cult about digital justice, technology, and maker culture. He currently serves as a councilor-at-large for OLITA (Ontario Library and Information Technology Association) and recently co-organized TEDxLibrariansTO, the first TEDx event specifically for librarians and information professionals."
            },
            {
                "name": "Matt Joyce",
                "bio": "is a former federal contractor, having worked on the Nebula project at NASA Ames Research Center. The Nebula project is responsible in part for the Apache 2 licensed OpenStack project. Today, Matt works at Cloudscaling, a startup centered around the open source cloud infrastructure market."
            }
        ],
        "title": "DARPA Funding for Hackers, Hackerspaces, and Education: A Good Thing?",
        "id": "darpa",
        "description": "Mitch Altman caused a stir this spring when he publicly announced that he would not be helping U.S. Maker Faires this year, after it was publicly announced that they received funding from the Defense Advanced Research Projects Agency (DARPA). So, what&#39;s the controversy? DARPA, an agency of the U.S. military, has funded many famous projects over the past several decades, including GPS and the Internet. People in DARPA are now making large amounts of grant funding available for hackers and hackerspaces to do projects of their choice, as well as funding for education through hands-on learning, which MAKE Magazine is using to help schools. Does it matter that DARPA is responsible for the development of new technology for the U.S. military with an annual budget of $3.2 billion? What are the ethics of using funds from people or organizations that may or may not be aligned with one&#39;s own goals? What are the ramifications for the hacker/maker movement? Is DARPA funding overall a good thing? There is no simple answer. Explore the ethics and ramifications with Mitch, as moderator, and the panelists, as they give their perspectives on this complex set of issues."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-15T15:00:00",
        "location": "Nutt",
        "timestamp": 1342378800,
        "speakers": [
            {
                "name": "Amelia Marzec",
                "bio": "is a Brooklyn-based artist focused on enabling activist communities through innovative uses of technology. She holds a Master of Fine Arts in design and technology from the Parsons School of Design, a Bachelor of Fine Arts from Rutgers University, and was awarded a residency at Eyebeam Art and Technology Center. She is a recipient of the Paul Robeson Cultural Center Award. Her work has appeared in the Conflux Festival, Rhizome ArtBase, Flux Factory, Neural Magazine, Metropolis Magazine, Gizmodo, Wired, Make, and on NPR."
            }
        ],
        "title": "Re-wired: Hacking the Auditory Experience",
        "id": "rewired",
        "description": "Re-wired is a wearable device that translates ambient sound into haptic feedback using bone conduction technology. Amelia began the project when she lost hearing in one ear. She was inspired by her new experience of sound that combined tympanic hearing and vibrational resonance. Amelia began experimenting with less invasive methods for augmenting hearing, using vibration instead of surgery and implants. Re-wired considers the possibility of empowering patients to place their care into their own hands by building simple devices to take care of simple problems. This will be a participatory talk on DIY medical technology, including our comfort level with augmenting our own bodies."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-15T15:00:00",
        "location": "Sassaman",
        "timestamp": 1342378800,
        "speakers": [
            {
                "name": "Nick Merrill",
                "bio": "is the founder of the Calyx Institute and the plaintiff in the landmark constitutional law case known as Doe v. Ashcroft (or Doe v. Mukasey, Doe v. Gonzales, or Doe v. Holder), which was the first original challenge to the National Security Letters portion of the USA PATRIOT Act."
            }
        ],
        "title": "Privacy by Design - a Dream for a Telecommunications Provider That Uses Strong Cryptography to Ensure Your Privacy",
        "id": "privacybydesign",
        "description": "This is a talk about launching a nonprofit organization that has some unique and disruptive ideas which challenge some of the basic assumptions about how modern communications systems work and that have the potential to transform the telecommunications and ISP industries with regards to privacy and freedom of expression. The seemingly dueling concerns of cybersecurity and privacy can both be addressed to some degree by the promotion of ubiquitous and opportunistic encryption, which would allow for an important political consensus between parties interested in either of those two issues. This topic and content is relevant to the hacker community and to HOPE attendees because of the implications of dragnet surveillance that has become commonplace in recent years, fueled in part by advances in technology and due to a shift towards more and more communication happening in the digital domain."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T15:00:00",
        "location": "Dennis",
        "timestamp": 1342378800,
        "speakers": [
            {
                "name": "Hanni Fakhoury",
                "bio": "is a staff attorney with the Electronic Frontier Foundation, focusing on the intersection of technology and criminal law. Hanni previously worked as a federal public defender in San Diego for close to four years, where he served as a copy editor for the 2010 edition of Defending a Federal Criminal Case. He graduated from the University of California, Berkeley, and Pacific McGeorge School of Law, where he was elected to the Order of Barristers for his excellence in written and oral advocacy. Hanni is a member of the National Association of Criminal Defense Lawyers."
            }
        ],
        "title": "Cell Site Location Data and Nontrespassory Surveillance after U.S. v. Jones",
        "id": "cell",
        "description": "With the rise of smartphones, the government&#39;s use of cell site location data to pinpoint our exact location has grown more widespread (and precise) over time. For years, courts permitted the government to get this location data without a search warrant. And judges that fought against the government&#39;s attempts at getting this data were met with an unfortunate reality of Fourth Amendment jurisprudence: we don&#39;t have any privacy in data we turn over to third parties, like cell phone providers. The U.S. Supreme Court&#39;s recent decision in U.S. v. Jones however, presented a &quot;sea change&quot; in the law of warrantless surveillance, calling into question the future viability of the third party doctrine. This talk will review the law of location data, go in depth into how Jones calls this law into question, and conclude with the steps we need to take in the future in order to safeguard our privacy."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-15T16:00:00",
        "location": "Sassaman",
        "timestamp": 1342382400,
        "speakers": [
            {
                "name": "Alexander Urbelis",
                "bio": "is an attorney in the New York office of the law firm of Steptoe and Johnson LLP, where he is part of a team of attorneys who have helped many of the world&#39;s largest technology companies navigate ICANN&#39;s new gTLD program and reshape their Internet policies. For several years, Alex regularly contributed to WBAI&#39;s Off The Hook with Emmanuel Goldstein and has been involved with 2600 since he was about 15."
            }
        ],
        "title": "ICANN's New gTLD Program: Implications on Security, Stability, and Governance",
        "id": "icann",
        "description": "The Internet is about to rapidly expand. Through ICANN&#39;s new generic top level domain (gTLD) program - for the first time ever - individual entities can customize the space to the right of the dot. While currently only 22 gTLDs exist (e.g., .com, .net, .org, etc.), on June 13, ICANN announced that it had received an unexpected 1,930 applications for new gTLDs, ranging from applications for .AARP to .ZULU. This talk will examine the security and stability concerns that arise from the rapid expansion of the Internet&#39;s root zone. Also included will be the current state of the new gTLD program, the security issues that plagued the application process in April, and how this new model of gTLD ownership (with large swaths of Internet real estate in the hands of private entities) will change our current model of Internet governance."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T16:00:00",
        "location": "Dennis",
        "timestamp": 1342382400,
        "speakers": [
            {
                "name": "Eric Davisson aka XlogicX",
                "bio": "aka XlogicX holds an AA in criminal justice, a BS in computer engineering, and an MBA. He has a computer security day job and owns the phx2600.org domain. Eric is interested in obscure languages like whitespace, brainf**k, and non-0x86 assembly. If there&#39;s a well-known hack, he&#39;s not very good at it, and the only thing he&#39;s ever over-clocked was a TI-82."
            }
        ],
        "title": "Explosive Steganography",
        "id": "explosive",
        "description": "Encryption makes information secret, steganography hides the information in plain sight. We fancy hiding it in a &quot;pile&quot; that most people would avoid. This talk explores hiding steganography in mediums such as archive exploders, file carving exploders, and virus files. There will be a release of the open source tools eZIPlode/asour, magicbomb/-asour and hivasour/hivsneeze."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-15T16:00:00",
        "location": "Nutt",
        "timestamp": 1342382400,
        "speakers": [
            {
                "name": "Ivan Greenberg",
                "bio": "wrote The Dangers of Dissent (2010) and Surveillance in America (2012), published by Lexington Books. He earned a PhD in history from the CUNY Graduate Center."
            }
        ],
        "title": "Declassifying Government and Undermining a Culture of Insecurity",
        "id": "declassifying",
        "description": "It is critically important to obtain and publicize declassified government intelligence documents in order to demystify official narratives of domestic security. Over the last decade, Ivan received about 60 FBI files by using the Freedom of Information Act and by initiating a lawsuit, while writing two books on civil liberties and surveillance. He will discuss his experiences getting government documents and show how new information about surveillance practices can help the American people make better informed judgments about how surveillance systems are developed and deployed. Is it possible for popular democratic participation in the operation of surveillance systems? Whose security is really at stake? How can we counter the creation of a top-down, official &quot;culture of insecurity?&quot;"
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T17:00:00",
        "location": "Dennis",
        "timestamp": 1342386000,
        "speakers": [
            {
                "name": "Lee Azzarello",
                "bio": "strives to help the Internet continue as a democratic medium for free expression well into the future. He works with The Guardian Project to help users ensure their right to privacy when communicating online with their mobile handsets and tablet computers. His specialty is VoIP architecture, operating systems, and web application backends."
            },
            {
                "name": "Mark Belinsky",
                "bio": "is an entrepreneur and technologist who has developed projects at the intersection of media, tech, and data in over 26 countries. Currently, he is a creative technologist fabricating security tools with The Guardian Project and building international movements with purpose. In Armenia, Mark co-founded and is a board member at BEM, a youth action center that serves as a platform for building an active civil society through media, performance, and citizen journalism. He is co-founder of and advisor to Digital Democracy, a nonprofit that empowers marginalized communities to use technology to build their futures around the world. He directs and produces films and designs interactive media projects with his company New Words Media."
            }
        ],
        "title": "The Open Secure Telephony Network",
        "id": "open",
        "description": "All of the necessary technologies and communications standards exist today for voice communications that are as secure as OpenPGP email. Both proprietary and open source solutions exist for desktop and mobile devices that implement the necessary bits to provide a solution without dependence upon one global service provider. ostel.me provides both a service and an application for the Android OS that is only marginally more complex to use than dialing an existing phone number, while still based entirely on open standards like SIP and ZRTP. The app is experimental and is based on existing open source client code provided by the CSipSimple, pjsip, and zrtp4pj projects."
    },
    {
        "rooms": [
            "Nutt"
        ],
        "when": "2012-07-15T17:00:00",
        "location": "Nutt",
        "timestamp": 1342386000,
        "speakers": [
            {
                "name": "Adam Langley",
                "bio": "works on both Google&#39;s HTTPS serving infrastructure and Google Chrome&#39;s network stack. From the point of view of a browser, he&#39;s seen many HTTPS sites getting it dreadfully wrong and, from the point of view of a server, he&#39;s part of what is probably the largest HTTPS serving system in the world."
            }
        ],
        "title": "The State of HTTPS",
        "id": "state",
        "description": "Over the past couple of years, a flurry of developments and events have been happening in the world of HTTPS: from BEAST to HSTS to public key pinning and mixed scripting. Some of these are of abstract interest to technical users, and some require action on the part of webmasters. This talk will cover the broad brush strokes of these developments with a focus on how webmasters can take advantage of them and how to avoid silly configuration mistakes. In the latter part of the talk, a few expected future developments will be covered."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-15T17:00:00",
        "location": "Sassaman",
        "timestamp": 1342386000,
        "speakers": [
            {
                "name": "James Vasile",
                "bio": "is the director of the Open Internet Tools Project, which supports and incubates a collection of free and open source projects that enable anonymous, secure, reliable, and unrestricted communication on the Internet. Its goal is to enable people to talk directly to each other without being censored, surveilled or restricted. He is also a senior fellow at the Software Freedom Law Center and a partner at Open Tech Strategies."
            }
        ],
        "title": "Anti-Censorship and Anti-Surveillance Tools - Improving the Landscape",
        "id": "anti",
        "description": "Every day, world news informs us of more and greater threats to free communication. Nations increasingly restrict network traffic at their borders. Surveillance is omnipresent in almost every country and also via companies who defend ubiquitous spying as &quot;best practices.&quot; This mass privacy intrusion has spurred development of a number of open source tools even as that development has revealed a need to address common obstacles faced by circumvention tools projects. This talk describes some of those common obstacles and current work to fix them on a community-wide basis."
    },
    {
        "rooms": [
            "Sassaman"
        ],
        "when": "2012-07-15T18:00:00",
        "location": "Sassaman",
        "timestamp": 1342389600,
        "speakers": [
            {
                "name": "maymay",
                "bio": "is a full-time activist, essayist, and public speaker focusing on the intersection of sex and technology. He has more than a decade of experience working in the tech sector in various positions ranging from sysadmin to network engineer to web developer. As a social justice technologist, maymay rallies hackers, makers, DIY enthusiasts, environmentalists, and myriad other groups to support sex-positive feminism. As a sexual freedom activist, maymay works to connect enclaves of the sex-positive movement with one another through the power of the Internet and social networking. And yes, for the record, he does use Vim for everything, even HTML."
            }
        ],
        "title": "Anti-Censorship Best Practices: How to Make Keeping It Up Easy and Taking It Down Hard",
        "id": "anticensorship",
        "description": "What do bananas have to do with censorship? What do polyamorous people have in common with fax machines? How can you help your ideas have cyber-sex? In today&#39;s age of postmodern warfare, information itself can be a &quot;weapon of mass destruction.&quot; As corporations and repressive governments track, monitor, and ultimately crack down on their own citizens, employees, and independent publishers, information depicting everything from political speech to cartoon drawings of religious icons is becoming increasingly rationed and ever more tightly controlled. But nowhere is this more apparent than the realm of sexuality, where even basic health and safety information such as STI prevention is barricaded by dragnet-style filtering tools. The online spaces once heralded as among the safest and most valuable for sex-positive publishers like sex bloggers, public health professionals, librarians, and relationship educators have become hostile to the free flow of information while governments from China to Australia to the United States censor the Internet and companies like Facebook, Amazon, and PayPal arbitrarily enforce vague Terms of Service policies. In this far-reaching seminar, you&#39;ll learn the fundamentals of how to build anticensorship techniques directly into your publishing process using nothing more technologically complex than copy-and-paste. Whether you&#39;re a non-technical individual or a savvy multinational organization, you&#39;ll discover how you can put data portability, distributed publishing, and censorship circumvention tactics to use right away in order to stay one step ahead of those who would call you &quot;obscene.&quot;"
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T18:00:00",
        "location": "Dennis",
        "timestamp": 1342389600,
        "speakers": [
            {
                "name": "Cheshire Catalyst",
                "bio": "(Richard Cheshire) was the last editor of the notorious TAP Newsletter of the 1970s and 1980s. (TAP was a predecessor of 2600 Magazine.) In his &quot;share the knowledge&quot; spirit, he has volunteered at every HOPE conference since the first one in 1994."
            },
            {
                "name": "John Draper",
                "bio": "was among the first people accused of using a blue box to essentially get &quot;root&quot; access to the entire Ma Bell telephone monopoly. He later went on to write a word processor program, some of which was written while he was in jail, and beat out Bill Gates by negotiating a software bundle with the first outside software sold for the IBM PC. He is currently working on a book, Hack This Life."
            },
            {
                "name": "Tom Santa Monica",
                "bio": "&#39;s phreaking activities during 1970-1971 predate the Esquire magazine article of October 1971. Tom&#39;s favorite activity was exploiting race conditions in Automatic Electric 53 directors and other step-by-step equipment."
            }
        ],
        "title": "Old School Phreaking",
        "id": "old",
        "description": "Members of The Old School will regale the assembled throngs with tales of &quot;The Golden Age of Phone Phreaking.&quot; Those were the days of in-band signaling when anyone who could put out a tone of 2600 hertz could control the &quot;Long Lines&quot; network."
    },
    {
        "rooms": [
            "Dennis"
        ],
        "when": "2012-07-15T19:00:00",
        "location": "Dennis",
        "timestamp": 1342393200,
        "speakers": [],
        "title": "Closing Ceremonies",
        "id": "closing",
        "description": "Don&#39;t even think of leaving early on Sunday. This is where you get to celebrate the end of another HOPE conference and start looking forward to and planning the next one. (Maybe we&#39;ll even tell you what the next one will be called if you stick around.) You&#39;ll also hear a lot of the story behind what it took to put this event together. Oh yes, and did we mention that we give away prizes during this final gathering? Well, we do, and they&#39;re awesome. You now have all of the reasons you need to stay into the evening on Sunday and get the most out of HOPE. Monday will wait."
    }
];

fs.writeFile('schedule.json', JSON.stringify(schedule), function(err){
  if(err) throw(err);
  console.log('schedule.json written');
});

