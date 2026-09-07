const technologies = [
  {
  id: 1,
  name: "Pop-Up Headlights",
  status: "EXTINCT",
  description:
    "Retractable headlights that became an icon of automotive design.",
  category: "Design",
  era: "1930s–1990s",
  howItWorked:
    "The headlights were hidden inside the front bodywork when not in use. When the driver switched them on, an electric or mechanical mechanism raised or rotated the headlight units into position.",
  whyItDisappeared:
    "Advances in lighting technology made it possible to produce compact headlights that could be integrated directly into the vehicle body. Changing regulations and modern headlight designs also removed much of the need for retractable systems.",
  advantages: [
    "Clean and aerodynamic front-end design",
    "Distinctive appearance",
    "Large headlight units could provide strong illumination",
  ],
  disadvantages: [
    "More moving parts",
    "Additional mechanical and electrical components",
    "Mechanisms could require maintenance",
  ],
  examples: [
    "Porsche 928",
    "Porsche 944",
    "Mazda RX-7",
    "Toyota Supra",
    "Chevrolet Corvette",
    "Lamborghini Countach",
  ],
  legacy:
    "Pop-up headlights became one of the defining visual features of late-20th-century sports cars and remain an iconic symbol of an earlier era of automotive design.",
  sources: [
    "Porsche Newsroom — A shining icon of its era: Pop-up headlights",
    "NHTSA — FMVSS No. 108 headlamp interpretation",
  ],
},
  {
  id: 2,
  name: "Rotary Engines",
  status: "ENDANGERED",
  description:
    "A radically different approach to creating combustion power.",
  category: "Engine",
  era: "1960s–2010s",

  howItWorked:
    "A rotary engine uses a triangular-shaped rotor that spins inside a specially shaped housing instead of using pistons moving up and down. As the rotor turns, the changing chambers perform the intake, compression, combustion, and exhaust cycles.",

  whyItDisappeared:
    "Rotary engines faced challenges with fuel economy, emissions, oil consumption, and sealing durability. As conventional piston engines became more efficient and emissions regulations became stricter, the advantages of the rotary design became harder to justify for everyday production cars.",

  advantages: [
    "Compact and lightweight design",
    "Smooth power delivery",
    "High power relative to engine size",
    "Fewer major moving parts than a conventional piston engine",
    "Distinctive high-revving character",
  ],

  disadvantages: [
    "Relatively high fuel consumption",
    "Oil consumption",
    "Apex seal wear and sealing challenges",
    "Difficult emissions compliance",
    "Lower low-speed torque compared with many piston engines",
  ],

  examples: [
    "Mazda Cosmo",
    "Mazda RX-7",
    "Mazda RX-8",
    "Mazda 787B",
    "NSU Ro 80",
    "Citroën GS Birotor",
  ],

  legacy:
    "Rotary engines became one of the most distinctive experiments in automotive engineering. Mazda's long association with the technology made it especially famous, while the rotary-powered Mazda 787B's victory at the 24 Hours of Le Mans cemented its place in motorsport history.",

  sources: [
    "Mazda — Rotary Engine Technology",
    "Encyclopaedia Britannica — Wankel Engine",
  ],
},

  {
  id: 3,
  name: "Hydraulic Steering",
  status: "RARE",
  description:
    "Mechanical assistance that once defined the feel of the road.",
  category: "Mechanical",
  era: "1950s–2010s",

  howItWorked:
    "A belt-driven hydraulic pump used engine power to pressurize steering fluid. When the driver turned the steering wheel, the pressurized fluid was directed to the steering rack or steering gear, helping reduce the effort required to turn the front wheels.",

  whyItDisappeared:
    "Hydraulic steering systems continuously drew power from the engine, even when steering assistance was not needed. They also required hydraulic fluid, pumps, hoses, and seals that could leak or require maintenance. Electric power steering became increasingly common because it reduced energy losses, required fewer hydraulic components, and allowed steering assistance to be electronically controlled.",

  advantages: [
    "Natural and responsive steering feel",
    "Strong road feedback",
    "Powerful assistance for larger and heavier vehicles",
    "Proven and well-understood technology",
  ],

  disadvantages: [
    "Continuously consumes engine power",
    "Lower fuel efficiency compared with electric systems",
    "Hydraulic fluid and hoses can leak",
    "More mechanical components to maintain",
    "Pump and fluid add weight and complexity",
  ],

  examples: [
    "BMW 3 Series",
    "Porsche 911",
    "Honda S2000",
    "Mazda MX-5 Miata",
    "Toyota Supra",
    "Chevrolet Corvette",
  ],

  legacy:
    "Hydraulic steering became one of the defining technologies of the automobile's transition from purely manual steering to assisted driving. Its strong road feedback and natural steering feel are still appreciated by driving enthusiasts, even as electric power steering has become dominant in modern passenger cars.",

  sources: [
    "Car and Driver — What Is Power Steering and How Does It Work?",
    "National Museum of Nature and Science — History of Electric Power Steering",
    "Snap-on — Vehicle Steering Systems",
  ],
},
  {
  id: 4,
  name: "Manual Gearboxes",
  status: "DISAPPEARING",
  description:
    "The driver's direct connection to the machinery beneath.",
  category: "Transmission",
  era: "1900s–Present",

  howItWorked:
    "A manual gearbox uses a clutch and a set of mechanical gears to transfer power from the engine to the wheels. The driver presses the clutch pedal to temporarily disconnect the engine from the gearbox, selects a gear using the shift lever, and then releases the clutch to reconnect the power. Different gear ratios allow the car to balance acceleration, torque, and speed.",

  whyItDisappeared:
    "Manual gearboxes have become less common as automatic transmissions, dual-clutch systems, and continuously variable transmissions have become more convenient and efficient. Automatic systems can change gears without driver input and are particularly easier to use in heavy traffic. Modern vehicle technology and changing consumer preferences have also reduced demand for traditional manual transmissions.",

  advantages: [
    "Direct driver control over gear selection",
    "Engaging and connected driving experience",
    "Mechanical simplicity",
    "Usually lower transmission complexity than many modern automatics",
    "Can provide strong control during performance driving",
  ],

  disadvantages: [
    "Requires constant driver involvement",
    "More difficult to use in heavy traffic",
    "Clutch components wear over time",
    "Steep hills and stop-start driving can be challenging",
    "Less convenient than automatic transmissions",
  ],

  examples: [
    "Honda Civic Type R",
    "Mazda MX-5 Miata",
    "Porsche 911",
    "Ford Mustang",
    "Toyota GR86",
    "BMW M3",
  ],

  legacy:
    "Manual gearboxes remain one of the clearest examples of direct interaction between driver and machine. Although increasingly rare in modern passenger cars, they continue to have a strong following among driving enthusiasts who value mechanical involvement and control.",

  sources: [
    "The Motor Ombudsman — Getting to Know the Clutch",
    "EMAG — How does a manual gearbox actually work?",
    "How a Car Works — How manual gearboxes work",
  ],
},
  {
  id: 5,
  name: "Carburetors",
  status: "EXTINCT",
  description:
    "Mechanical fuel delivery systems that once powered millions of engines.",
  category: "Engine",
  era: "1900s–1990s",

  howItWorked:
    "A carburetor mechanically mixed gasoline with incoming air before the mixture entered the engine. Air flowing through a narrowed passage called a venturi created a pressure difference that drew fuel through calibrated jets. A throttle controlled the amount of air and fuel entering the engine, while a choke provided a richer mixture during cold starts.",

  whyItDisappeared:
    "Carburetors were gradually replaced by electronic fuel injection, which could control the air-fuel mixture much more precisely. Fuel injection improved fuel economy, drivability, and emissions control, making it better suited to increasingly strict emissions regulations and modern engine management systems.",

  advantages: [
    "Simple mechanical design",
    "Easy to understand and service",
    "No electronic control unit required",
    "Relatively inexpensive to manufacture",
    "Distinctive character and response in older performance engines",
  ],

  disadvantages: [
    "Less precise fuel delivery",
    "Higher emissions",
    "Lower fuel efficiency",
    "Sensitive to temperature and altitude changes",
    "Requires tuning and adjustment",
    "Cold starts can require manual choke operation",
  ],

  examples: [
    "Ford Mustang",
    "Chevrolet Corvette",
    "Porsche 911",
    "Volkswagen Beetle",
    "Toyota Corolla",
    "Nissan Z",
  ],

  legacy:
    "Carburetors were one of the defining fuel-delivery technologies of the twentieth-century automobile. Although largely gone from modern passenger cars, they remain an important part of automotive history and are still found in classic vehicles, motorcycles, and small engines.",

  sources: [
    "National Academies — Automotive Fuel Economy",
    "Universal Technical Institute — What Is a Carburetor?",
    "HowStuffWorks — How Fuel Injection Systems Work",
  ],
},
  {
  id: 6,
  name: "Analog Dashboards",
  status: "DISAPPEARING",
  description:
    "Physical gauges that communicated directly through needles, numbers and movement.",
  category: "Interior",
  era: "1950s–2010s",

  howItWorked:
    "Analog dashboards used physical gauges and needles to display information such as vehicle speed, engine RPM, fuel level, coolant temperature, and oil pressure. Depending on the system, gauges could receive information through mechanical connections, electrical signals, or sensors, with the needle moving across a marked dial to represent the vehicle's condition.",

  whyItDisappeared:
    "Modern electronic instrument clusters can display much more information in a smaller and more flexible interface. Digital displays can combine vehicle data with navigation, driver-assistance information, warnings, and customizable layouts. As electronic systems became more capable and affordable, traditional physical gauges gradually became less common in new vehicles.",

  advantages: [
    "Easy to understand at a glance",
    "Clear physical needle movement",
    "Familiar and intuitive layout",
    "Distinctive mechanical character",
    "Can provide a strong connection between driver and machine",
  ],

  disadvantages: [
    "Limited amount of information",
    "Requires physical space for each gauge",
    "Less flexible than digital displays",
    "Individual gauges require separate components",
    "Cannot easily display modern navigation and vehicle information",
  ],

  examples: [
    "Porsche 911",
    "BMW 3 Series",
    "Honda Civic",
    "Mazda MX-5 Miata",
    "Ford Mustang",
    "Chevrolet Corvette",
  ],

  legacy:
    "Analog dashboards became one of the most recognizable parts of the traditional automobile interior. Their needles, numbered dials, and physical movement gave drivers an immediate visual connection with the mechanical systems of the car. Even as digital instrument clusters become increasingly common, analog-style gauges remain popular among enthusiasts and are still used in some modern vehicles.",

  sources: [
    "Texas Instruments — Moving the Needle on Automotive Clusters",
    "National Corvette Museum — 1983 Corvette Analog Gauge Cluster",
    "Society for Information Display — Automotive LCDs",
  ],
},
  {
  id: 7,
  name: "Mechanical Handbrakes",
  status: "DISAPPEARING",
  description:
    "A simple cable-operated system that gave the driver a direct mechanical connection.",
  category: "Mechanical",
  era: "1900s–Present",

  howItWorked:
    "A mechanical handbrake used a hand lever or foot pedal connected to the rear brakes by cables. Pulling the lever increased tension in the cables, which applied the rear brake shoes or pads and held the vehicle stationary. A ratchet mechanism locked the lever in position until the driver released it.",

  whyItDisappeared:
    "Mechanical handbrakes are increasingly being replaced by electronic parking brakes. Electronic systems use a switch and electric actuators instead of a large lever and mechanical cables. They require less cabin space and can provide automatic activation, automatic release, and other functions such as hill-hold assistance.",

  advantages: [
    "Simple mechanical operation",
    "Direct connection between driver and brakes",
    "Easy to understand and operate",
    "Can work independently of the main hydraulic braking system",
    "No electronic control system required",
  ],

  disadvantages: [
    "Cables can stretch or wear over time",
    "Requires periodic adjustment or maintenance",
    "Uses valuable space in the center console",
    "Manual operation can be less convenient",
    "Limited automation compared with electronic parking brakes",
  ],

  examples: [
    "Mazda MX-5 Miata",
    "Honda Civic",
    "Toyota Corolla",
    "Ford Mustang",
    "Porsche 911",
    "Volkswagen Golf",
  ],

  legacy:
    "The mechanical handbrake became one of the most familiar controls in the traditional automobile. Its simple lever, ratchet, and cable mechanism gave drivers a direct physical connection to the parking brakes. Although electronic parking brakes are increasingly common, the traditional handbrake remains strongly associated with classic and enthusiast-focused cars.",

  sources: [
    "Ford — How Does a Handbrake Cable Work?",
    "Haynes Manuals — What Is a Car's Parking Brake and How Does It Work?",
    "NAPA Know How — How Does a Parking Brake Work?",
  ],
},
  {
  id: 8,
  name: "Physical Climate Controls",
  status: "ENDANGERED",
  description:
    "Dedicated knobs and switches that allowed instant control without navigating a screen.",
  category: "Interior",
  era: "1950s–2010s",

  howItWorked:
    "Physical climate controls used dedicated knobs, buttons, sliders, and switches to control functions such as temperature, fan speed, air conditioning, and airflow direction. Turning a knob or pressing a button sent a mechanical or electrical command to the vehicle's heating and air-conditioning system, allowing the driver to make adjustments directly from the dashboard.",

  whyItDisappeared:
    "As vehicle interiors became increasingly digital, manufacturers began moving climate functions into infotainment screens and software-controlled interfaces. A touchscreen can combine many functions into a single panel and reduce the number of dedicated controls required in the dashboard. However, physical climate controls have not completely disappeared and remain in some modern vehicles.",

  advantages: [
    "Instant access to frequently used functions",
    "Easy to operate without navigating menus",
    "Tactile feedback from knobs and buttons",
    "Controls can often be used without looking away from the road",
    "Simple and familiar interface",
  ],

  disadvantages: [
    "Requires dedicated dashboard space",
    "Less flexible than software-based interfaces",
    "Individual switches and knobs can wear out",
    "More physical components are required",
    "Cannot easily combine many functions into one interface",
  ],

  examples: [
    "BMW 3 Series",
    "Honda Civic",
    "Toyota Corolla",
    "Mazda MX-5 Miata",
    "Volkswagen Golf",
    "Mercedes-Benz S-Class",
  ],

  legacy:
    "Physical climate controls became one of the most familiar parts of the traditional car interior. Dedicated temperature knobs, fan controls, and airflow switches allowed drivers to make adjustments quickly and intuitively. Although touchscreens are increasingly used for climate functions, physical controls remain valued for their tactile feedback and ease of use.",

  sources: [
    "CarExpert — Interior Controls: To Push or to Touch?",
    "Valeo — Automotive Control Panels",
    "EVKX — Physical Controls",
  ],
},
];

export default technologies;