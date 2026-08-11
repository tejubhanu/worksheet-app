const missionConfig = {
    themeTitle: "🕵️‍♂️ Spy Academy: Operation Quantum Shield",
    themeColor: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0284c7 100%)", // Sleek Spy Slate & Cyan
    themeIcon: "🕵️‍♂️",
    questions: [
        // --- Phase 1: Spy Academy Orientation ---
        {
            type: "text",
            question: "Agent Marty needs to disable the laser grid at headquarters. The hallway has 35 active laser beams, and he disables 17 of them. How many laser beams are still active?",
            answer: "18",
            hint: "Subtract 17 from 35. (35 - 10 = 25, then subtract 7 more).",
            explanation: "35 - 17 = 18 active laser beams remaining."
        },
        {
            type: "mcq",
            question: "Agent Arjun is timing his stealth sprint. He needs to run for exactly 4 minutes. How many seconds is 4 minutes?",
            options: ["180", "200", "240", "300"],
            answer: "240",
            hint: "There are 60 seconds in 1 minute. Multiply 60 by 4.",
            explanation: "60 x 4 = 240 seconds."
        },
        {
            type: "text",
            question: "Agent Taksh decodes an encrypted message on his spy watch: 'Multiply 8 by 7, then add 9.' What is the decoded security passcode?",
            answer: "65",
            hint: "First calculate 8 x 7, then add 9 to your result.",
            explanation: "8 x 7 = 56. Then 56 + 9 = 65."
        },
        {
            type: "mcq",
            question: "Agent Ayaan is packing disguise kits. He packs 5 kits, and each kit contains 7 gadget tools. How many gadget tools did he pack in total?",
            options: ["30", "32", "35", "40"],
            answer: "35",
            hint: "Multiply 5 by 7.",
            explanation: "5 x 7 = 35 gadget tools."
        },
        {
            type: "mcq",
            question: "Agent Advi spots a number pattern on the vault keypad: 3, 6, 12, 24, ___. What number unlocks the vault?",
            options: ["30", "36", "48", "60"],
            answer: "48",
            hint: "Look at how the sequence grows. Each number is being doubled!",
            explanation: "The pattern doubles each number. 24 x 2 = 48."
        },

        // --- Phase 2: Gadgets & Tech Recon ---
        {
            type: "text",
            question: "Agent Smithika has 72 mini recon drones. She divides them equally among all 8 squad members. How many drones does each agent receive?",
            answer: "9",
            hint: "Divide 72 by 8. Think: 8 times what number equals 72?",
            explanation: "72 / 8 = 9 drones per agent."
        },
        {
            type: "mcq",
            question: "Mom tests high-tech grappling hooks. Each hook can reach 15 feet. If she ties 4 grappling ropes together end-to-end, how high can she climb?",
            options: ["45 feet", "50 feet", "60 feet", "75 feet"],
            answer: "60 feet",
            hint: "Multiply 15 by 4. You can double 15 to get 30, then double it again!",
            explanation: "15 x 4 = 60 feet."
        },
        {
            type: "text",
            question: "Dad is monitoring 80 security feeds. 35 feeds are on Floor 1, and the rest are on Floor 2. How many security feeds are on Floor 2?",
            answer: "45",
            hint: "Subtract 35 from 80.",
            explanation: "80 - 35 = 45 security feeds."
        },
        {
            type: "mcq",
            question: "Rod the AI has a 100 Megabyte encrypted memory drive. 28 Megabytes are used for maps and 42 Megabytes are used for codes. How many Megabytes of memory are left?",
            options: ["20", "30", "40", "50"],
            answer: "30",
            hint: "Add the used memory first (28 + 42 = 70), then subtract from 100.",
            explanation: "28 + 42 = 70. 100 - 70 = 30 Megabytes left."
        },
        {
            type: "text",
            question: "Marty needs 3 micro-batteries for each of his 9 night-vision goggles. How many micro-batteries does he need in total?",
            answer: "27",
            hint: "Multiply 3 by 9.",
            explanation: "3 x 9 = 27 micro-batteries."
        },

        // --- Phase 3: Logic & Suspect Elimination ---
        {
            type: "mcq",
            question: "The team interrogates 3 disguise suspects wearing Red, Blue, and Black hats. Suspect A is NOT wearing Red. Suspect B is wearing Black. What color hat is Suspect A wearing?",
            options: ["Red", "Blue", "Black", "Yellow"],
            answer: "Blue",
            hint: "Suspect B has the Black hat. Suspect A does not have Red. Which color is left for A?",
            explanation: "B = Black. That leaves Red and Blue. Since A is not Red, A must be wearing Blue!"
        },
        {
            type: "mcq",
            question: "The security safe requires an EVEN passcode between 30 and 50. The sum of its digits is 10. What is the passcode?",
            options: ["36", "46", "48", "44"],
            answer: "46",
            hint: "Check 46: Is it even? Yes. Is it between 30 and 50? Yes. Is 4 + 6 equal to 10? Yes!",
            explanation: "46 is even, falls between 30 and 50, and 4 + 6 = 10."
        },
        {
            type: "text",
            question: "Arjun finds an encrypted safe. Rod the AI gives a clue: 'Take 15, multiply it by 4, and add 10.' What is the combination?",
            answer: "70",
            hint: "First do 15 x 4 = 60. Then add 10.",
            explanation: "15 x 4 = 60. 60 + 10 = 70."
        },
        {
            type: "mcq",
            question: "Taksh, Ayaan, and Advi choose disguises: Chef, Detective, and Pilot. Taksh hates cooking. Ayaan wears a long trench coat. Who is disguised as the Chef?",
            options: ["Taksh", "Ayaan", "Advi", "Rod"],
            answer: "Advi",
            hint: "Taksh isn't the Chef. Ayaan has the trench coat (Detective). Who is left?",
            explanation: "Ayaan = Detective. Taksh = Pilot (hates cooking). Advi = Chef."
        },
        {
            type: "text",
            question: "Smithika tracks a suspect who moves 25 steps North, 18 steps East, and 12 steps South. How many total steps did the suspect take?",
            answer: "55",
            hint: "Add all three step counts together: 25 + 18 + 12.",
            explanation: "25 + 18 + 12 = 55 total steps."
        },

        // --- Phase 4: Infiltrating the Villain's Lair ---
        {
            type: "mcq",
            question: "A high-security laser pulse shoots across the hallway every 6 seconds. How many times will the laser pulse in 1 full minute (60 seconds)?",
            options: ["6", "8", "10", "12"],
            answer: "10",
            hint: "Divide 60 seconds by 6 seconds.",
            explanation: "60 / 6 = 10 laser pulses per minute."
        },
        {
            type: "text",
            question: "Mom hacks a door with this math puzzle: 'Find half of 180, then subtract 15.' What is the override code?",
            answer: "75",
            hint: "Half of 180 is 90. Now subtract 15 from 90.",
            explanation: "180 / 2 = 90. 90 - 15 = 75."
        },
        {
            type: "mcq",
            question: "Dad finds 6 storage boxes in the lair with 9 stealth suits in each. If 7 suits are missing, how many suits are still in the boxes?",
            options: ["47", "54", "45", "42"],
            answer: "47",
            hint: "First find total suits: 6 x 9 = 54. Then subtract 7.",
            explanation: "6 x 9 = 54. 54 - 7 = 47 stealth suits left."
        },
        {
            type: "text",
            question: "Rod the AI says the self-destruct countdown is at 180 seconds. How many full minutes do they have to escape?",
            answer: "3",
            hint: "Divide 180 by 60.",
            explanation: "180 seconds / 60 seconds per minute = 3 minutes."
        },
        {
            type: "mcq",
            question: "Marty must leap across 4 floating stepping stones. Each stone is 8 feet long, and there is a 2-foot gap between each stone. What is the total distance from the start of the first stone to the end of the 4th stone?",
            options: ["32 feet", "38 feet", "40 feet", "36 feet"],
            answer: "38 feet",
            hint: "4 stones x 8 ft = 32 ft. There are 3 gaps between 4 stones (3 x 2 ft = 6 ft). Add 32 + 6.",
            explanation: "32 ft (stones) + 6 ft (gaps) = 38 feet total."
        },

        // --- Phase 5: The Encryption Vault ---
        {
            type: "text",
            question: "Arjun types in a decryption sequence: 12 multiplied by 12, minus 44. What is the code?",
            answer: "100",
            hint: "12 x 12 = 144. Now subtract 44.",
            explanation: "12 x 12 = 144. 144 - 44 = 100."
        },
        {
            type: "mcq",
            question: "Taksh finds a vault sequence: 2, 5, 11, 23, ___. What is the next number? (Clue: Multiply by 2 and add 1!)",
            options: ["35", "45", "47", "50"],
            answer: "47",
            hint: "Take 23, multiply by 2 (46), and add 1.",
            explanation: "(23 x 2) + 1 = 47."
        },
        {
            type: "text",
            question: "Taksh decodes a stolen keycard: 'Divide 63 by 7.' What is the single-digit keycard pin?",
            answer: "9",
            hint: "Think: 7 x ? = 63.",
            explanation: "63 / 7 = 9."
        },
        {
            type: "mcq",
            question: "Ayaan inspects 3 wire cutters: Red, Yellow, and Blue. Yellow is 4 inches long. Red is TWICE as long as Yellow. Blue is 3 inches LONGER than Red. How long is Blue?",
            options: ["8 inches", "10 inches", "11 inches", "12 inches"],
            answer: "11 inches",
            hint: "Yellow = 4 in. Red = 4 x 2 = 8 in. Blue = 8 + 3 in.",
            explanation: "Red = 8 in. Blue = 8 + 3 = 11 inches."
        },
        {
            type: "text",
            question: "Advi opens a bag of decoy spy coins. There are 5 smaller sacks inside, and each sack has 15 gold coins. How many gold coins are there in total?",
            answer: "75",
            hint: "Multiply 5 by 15.",
            explanation: "5 x 15 = 75 coins."
        },

        // --- Phase 6: Laser Maze & Escape ---
        {
            type: "mcq",
            question: "A laser maze grid has 9 rows with 6 sensors in each row. Smithika deactivates 14 sensors. How many sensors are still active?",
            options: ["40", "54", "44", "38"],
            answer: "40",
            hint: "Total sensors = 9 x 6 = 54. Subtract 14.",
            explanation: "54 - 14 = 40 active sensors."
        },
        {
            type: "text",
            question: "Smithika solves the final override equation: (9 x 6) + (4 x 5). What is the answer?",
            answer: "74",
            hint: "First do 9 x 6 = 54. Then do 4 x 5 = 20. Add 54 + 20.",
            explanation: "54 + 20 = 74."
        },
        {
            type: "mcq",
            question: "Mom needs 60 gallons of fuel for the getaway boat. The fuel pump delivers 5 gallons per minute. How many minutes will it take to fill the tank?",
            options: ["10", "12", "15", "20"],
            answer: "12",
            hint: "Divide 60 by 5.",
            explanation: "60 / 5 = 12 minutes."
        },
        {
            type: "text",
            question: "Dad drives the getaway spy van at 45 miles per hour. How many miles does the team travel in 2 hours?",
            answer: "90",
            hint: "Multiply 45 by 2.",
            explanation: "45 x 2 = 90 miles."
        },
        {
            type: "mcq",
            question: "Rod the AI blocks a firewall attack with this riddle: 'What ODD number comes immediately after 89?'",
            options: ["90", "91", "93", "88"],
            answer: "91",
            hint: "89 + 1 = 90 (even). What is the next number after 90?",
            explanation: "91 is the odd number directly following 89."
        },

        // --- Phase 7: The Mastermind Showdown ---
        {
            type: "text",
            question: "The Villain's master lock reads: '5 x X = 45'. What number is X?",
            answer: "9",
            hint: "Divide 45 by 5.",
            explanation: "45 / 5 = 9. So X = 9."
        },
        {
            type: "mcq",
            question: "Marty finds 4 clue briefcases weighing 10 lbs, 15 lbs, 20 lbs, and 15 lbs. What is the average weight of the briefcases?",
            options: ["12 lbs", "15 lbs", "18 lbs", "20 lbs"],
            answer: "15 lbs",
            hint: "Add all weights together (10+15+20+15 = 60), then divide by 4 briefcases.",
            explanation: "60 / 4 = 15 lbs average."
        },
        {
            type: "text",
            question: "The Mastermind sets a security countdown of 500 seconds. Rod the AI instantly bypasses 175 seconds. How many seconds are left on the timer?",
            answer: "325",
            hint: "Subtract 175 from 500.",
            explanation: "500 - 175 = 325 seconds."
        },
        {
            type: "mcq",
            question: "Arjun needs 1/4 of the squad's 80 gadget gadgets to disable the main server. How many gadgets is 1/4 of 80?",
            options: ["15", "20", "25", "40"],
            answer: "20",
            hint: "Divide 80 by 4.",
            explanation: "80 / 4 = 20 gadgets."
        },
        {
            type: "text",
            question: "Taksh inputs the final self-destruct disarm code: 7 x 9 + 17. What is the disarm code?",
            answer: "80",
            hint: "7 x 9 = 63. Now add 17.",
            explanation: "63 + 17 = 80."
        },

        // --- Phase 8: Mission Accomplished & Debrief ---
        {
            type: "mcq",
            question: "Ayaan counts victory fireworks above HQ: 8 red signal flares, 12 blue flares, and 15 gold flares. How many flares did he count in total?",
            options: ["30", "32", "35", "40"],
            answer: "35",
            hint: "Add 8 + 12 + 15.",
            explanation: "8 + 12 = 20. 20 + 15 = 35 flares."
        },
        {
            type: "text",
            question: "Advi and Smithika share 48 honor badges equally among all 6 field agents. How many badges does each agent get?",
            answer: "8",
            hint: "Divide 48 by 6.",
            explanation: "48 / 6 = 8 badges per agent."
        },
        {
            type: "mcq",
            question: "Mom and Dad grade the mission performance. Out of 40 challenges, Marty answered 38 correctly. What score percentage did he achieve?",
            options: ["90%", "92%", "95%", "100%"],
            answer: "95%",
            hint: "38 out of 40 is the same as 95 out of 100.",
            explanation: "(38 / 40) x 100 = 95%."
        },
        {
            type: "text",
            question: "Rod the AI calculates the final mission efficiency score: '100 minus (3 x 4)'. What is the efficiency score?",
            answer: "88",
            hint: "Do the multiplication first: 3 x 4 = 12. Then 100 - 12.",
            explanation: "3 x 4 = 12. 100 - 12 = 88."
        },
        {
            type: "mcq",
            question: "Final team salute! All 9 squad agents stand in a straight line for a photo. If there are 3 feet of space between each agent, what is the distance from the 1st agent to the 9th agent?",
            options: ["21 feet", "24 feet", "27 feet", "30 feet"],
            answer: "24 feet",
            hint: "There are 8 gaps between 9 agents! Multiply 8 gaps by 3 feet.",
            explanation: "8 spaces x 3 feet = 24 feet."
        }
    ]
};
