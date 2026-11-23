// Marty's Worksheet — Mission 4: Robot Lab Rescue
// Drop-in replacement for questions.js in worksheet-app
// Story: Bolt the robot is stranded in the lab with a dead battery and
// locked doors. Each phase reboots one system: power, logic, movement,
// patterns, gears, codes, debugging, and the final rescue door.
// Built to Marty's design profile: discovery over instruction, logic /
// patterns / how-things-work first, adventure framing, no drill sets.
// Like Mission 3, this file omits the per-question help field entirely
// (the app only displays it in Review Mode when one exists). The short
// 'Tool' line in each question hands Marty the rule like a gadget he
// picks up on the mission — figuring out how to use it is the puzzle.
// Explanations are included for Review Mode.

const missionConfig = {
    themeTitle: "🤖 Robot Lab Rescue: Reboot Bolt!",
    themeColor: "linear-gradient(135deg, #0ea5e9 0%, #0f172a 50%, #22c55e 100%)",
    themeIcon: "🤖",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- PHASE 1: POWER UP — BINARY SWITCHES (Questions 1 - 5) ---
        {
            type: "text",
            question: "<b>Tool: Binary Switch Panel</b><br><i>How it works:</i> Bolt's power panel has 4 switches worth 8, 4, 2 and 1. An ON switch (1) adds its value, an OFF switch (0) adds nothing. The pattern 1-0-0-1 means 8 + 1 = 9.<br><br><b>Mission:</b> The panel shows 1-0-1-0. How much power does Bolt get?",
            answer: "10",
            explanation: "1-0-1-0 means the 8 and the 2 are ON: 8 + 2 = 10 power."
        },
        {
            type: "text",
            question: "<b>Tool: Binary Switch Panel</b><br><i>How it works:</i> Same panel: switch values 8, 4, 2, 1, read left to right.<br><br><b>Mission:</b> A second panel shows 0-1-1-1. How much power does this panel give?",
            answer: "7",
            explanation: "0-1-1-1 means 4 + 2 + 1 = 7 power. The 8 switch is OFF."
        },
        {
            type: "mcq",
            question: "<b>Tool: Binary Switch Panel</b><br><i>How it works:</i> Now work backwards: to make a number, switch ON the values that add up to it.<br><br><b>Mission:</b> Bolt needs exactly 13 power to boot his motors. Which switch pattern makes 13?",
            options: ["1011", "1101", "1110", "1001"],
            answer: "1101",
            explanation: "13 = 8 + 4 + 1, so switches 8, 4 and 1 are ON and 2 is OFF: 1-1-0-1."
        },
        {
            type: "mcq",
            question: "<b>Tool: Robot Counting</b><br><i>How it works:</i> Robots count in binary — the same ON/OFF patterns in order. Watch Bolt count: 1, 10, 11, 100, 101...<br><br><b>Mission:</b> What does Bolt say NEXT in this count?",
            options: ["102", "110", "111", "200"],
            answer: "110",
            explanation: "In normal numbers Bolt is counting 1, 2, 3, 4, 5, so next is 6. Six in binary is 4 + 2 = 110. (Binary never uses the digit 2, which rules out 102 and 200.)"
        },
        {
            type: "text",
            question: "<b>Tool: Power Merger</b><br><i>How it works:</i> Two panels can feed one battery. Convert each pattern to a number first, then add the numbers.<br><br><b>Mission:</b> Panel A shows 1-0-1 and Panel B shows 0-1-0 (switch values 4, 2, 1 on this smaller panel). What is the total power in the battery?",
            answer: "7",
            explanation: "Panel A: 4 + 1 = 5. Panel B: 2. Total = 5 + 2 = 7 power."
        },

        // --- PHASE 2: LOGIC GATES (Questions 6 - 10) ---
        {
            type: "mcq",
            question: "<b>Tool: AND Gate</b><br><i>How it works:</i> An AND gate turns ON only when BOTH of its inputs are ON. If either input is OFF, the output is OFF.<br><br><b>Mission:</b> Bolt's arm motor is wired through an AND gate. Input 1 is ON, Input 2 is OFF. Is the motor output ON or OFF?",
            options: ["ON", "OFF"],
            answer: "OFF",
            explanation: "AND needs both inputs ON. One input is OFF, so the output is OFF."
        },
        {
            type: "mcq",
            question: "<b>Tool: OR Gate</b><br><i>How it works:</i> An OR gate turns ON when AT LEAST ONE input is ON. It only stays OFF when both inputs are OFF.<br><br><b>Mission:</b> The lab alarm runs through an OR gate. Sensor 1 is OFF, Sensor 2 is ON. Is the alarm ON or OFF?",
            options: ["ON", "OFF"],
            answer: "ON",
            explanation: "OR needs just one ON input. Sensor 2 is ON, so the alarm is ON."
        },
        {
            type: "mcq",
            question: "<b>Tool: NOT Gate</b><br><i>How it works:</i> A NOT gate flips whatever goes in: ON becomes OFF, and OFF becomes ON.<br><br><b>Mission:</b> Bolt's night light passes through a NOT gate. The input signal is ON. What comes out?",
            options: ["ON", "OFF"],
            answer: "OFF",
            explanation: "NOT flips the signal: ON in, OFF out."
        },
        {
            type: "mcq",
            question: "<b>Tool: Gate Chain</b><br><i>How it works:</i> Gates can be chained: the output of one becomes the input of the next. Work through them one at a time, in order.<br><br><b>Mission:</b> Two signals, ON and ON, enter an AND gate. That result then passes through a NOT gate. What is the FINAL output?",
            options: ["ON", "OFF"],
            answer: "OFF",
            explanation: "AND with both inputs ON gives ON. Then NOT flips it to OFF."
        },
        {
            type: "mcq",
            question: "<b>Tool: Wake-Up Circuit</b><br><i>How it works:</i> Real robot rules are often AND rules in disguise: EVERY condition must be true at the same time.<br><br><b>Mission:</b> Bolt wakes up ONLY IF the main switch is ON AND his battery is full. Right now the switch is ON but the battery is NOT full. Does Bolt wake up?",
            options: ["Yes", "No"],
            answer: "No",
            explanation: "It is an AND rule: both conditions must be true. The battery is not full, so Bolt stays asleep."
        },

        // --- PHASE 3: GRID NAVIGATION (Questions 11 - 15) ---
        {
            type: "mcq",
            question: "<b>Tool: Lab Grid Map</b><br><i>How it works:</i> Positions are written (x, y). Moving right adds to x, moving up adds to y.<br><br><b>Mission:</b> Bolt starts at (1, 2). He rolls 3 squares RIGHT and 2 squares UP. Where is he now?",
            options: ["(4, 4)", "(3, 4)", "(4, 3)", "(5, 4)"],
            answer: "(4, 4)",
            explanation: "x: 1 + 3 = 4. y: 2 + 2 = 4. Bolt is at (4, 4)."
        },
        {
            type: "mcq",
            question: "<b>Tool: Compass Turns</b><br><i>How it works:</i> A right turn spins Bolt one quarter-turn clockwise: North to East to South to West. A left turn goes the other way.<br><br><b>Mission:</b> Bolt faces NORTH. He turns RIGHT, then RIGHT again, then LEFT. Which way does he face now?",
            options: ["North", "East", "South", "West"],
            answer: "East",
            explanation: "North, right to East, right to South, left back to East. Bolt faces East."
        },
        {
            type: "text",
            question: "<b>Tool: Step Counter</b><br><i>How it works:</i> Bolt's odometer adds up EVERY square he rolls over, whichever direction he goes.<br><br><b>Mission:</b> Bolt rolls 3 squares north, then 2 squares east, then 1 more square north. How many squares has he rolled in total?",
            answer: "6",
            explanation: "3 + 2 + 1 = 6 squares in total."
        },
        {
            type: "text",
            question: "<b>Tool: Shortest Route Planner</b><br><i>How it works:</i> On a grid, the shortest route between two points uses exactly the right-moves plus the up-moves needed — no backtracking.<br><br><b>Mission:</b> Bolt is at (2, 2) and his charging station is at (5, 4). He can only roll right or up, one square at a time. What is the SMALLEST number of moves that gets him there?",
            answer: "5",
            explanation: "He needs 3 moves right (2 to 5) and 2 moves up (2 to 4). 3 + 2 = 5 moves, and no route can use fewer."
        },
        {
            type: "mcq",
            question: "<b>Tool: Loop Command</b><br><i>How it works:</i> REPEAT runs the same block of commands over and over. Every run of the block happens in full, including its turns.<br><br><b>Mission:</b> Bolt faces NORTH and runs this program: REPEAT 3 times: (Roll forward 1 square, Turn RIGHT). After the whole program finishes, which way does Bolt face?",
            options: ["North", "East", "South", "West"],
            answer: "West",
            explanation: "Each repeat turns him once: North to East (1), East to South (2), South to West (3). After 3 repeats he faces West."
        },

        // --- PHASE 4: PATTERN DECODING (Questions 16 - 20) ---
        {
            type: "text",
            question: "<b>Tool: Signal Decoder</b><br><i>How it works:</i> Some signals hide their rule. Test what changes from one number to the next — and check your idea works on EVERY jump, not just the first.<br><br><b>Mission:</b> Bolt's antenna receives: 2, 3, 5, 9, 17, ___. What number comes next?",
            answer: "33",
            explanation: "The rule is double, then subtract 1: 2x2-1=3, 3x2-1=5, 5x2-1=9, 9x2-1=17. Next: 17x2-1 = 33."
        },
        {
            type: "mcq",
            question: "<b>Tool: Letter Signal Decoder</b><br><i>How it works:</i> Letters can hide number patterns too: A=1, B=2, C=3 and so on. Look at how far each letter jumps.<br><br><b>Mission:</b> A signal reads: A, C, F, J, O, ___. Which letter comes next?",
            options: ["T", "U", "V", "W"],
            answer: "U",
            explanation: "The jumps grow: A to C is +2, C to F is +3, F to J is +4, J to O is +5. Next jump is +6: O (15) + 6 = 21 = U."
        },
        {
            type: "text",
            question: "<b>Tool: Printer Pattern</b><br><i>How it works:</i> The lab printer stamps one number per tile. Marty notices each tile is a number multiplied by itself.<br><br><b>Mission:</b> The tiles read: 1, 4, 9, 16, 25, ___. What number is stamped on the next tile?",
            answer: "36",
            explanation: "These are square numbers: 1x1, 2x2, 3x3, 4x4, 5x5. Next is 6x6 = 36."
        },
        {
            type: "text",
            question: "<b>Tool: Two Signals at Once</b><br><i>How it works:</i> Sometimes two patterns take turns inside one signal. Split it into the 1st, 3rd, 5th... positions and the 2nd, 4th, 6th... positions and read each one separately.<br><br><b>Mission:</b> A tangled signal reads: 3, 10, 4, 12, 5, 14, ___. What number comes next?",
            answer: "6",
            explanation: "Odd positions: 3, 4, 5 — counting up. Even positions: 10, 12, 14 — counting up by 2. The next number sits in an odd position, so it is 6."
        },
        {
            type: "text",
            question: "<b>Tool: Shape Code</b><br><i>How it works:</i> Bolt's camera labels each shape with a number. Triangle is labelled 3, Square is labelled 4, Pentagon is labelled 5. Bolt is counting something about the shape itself.<br><br><b>Mission:</b> A Hexagon rolls past the camera. What label does Bolt give it?",
            answer: "6",
            explanation: "Bolt is counting sides: a triangle has 3 sides, a square 4, a pentagon 5. A hexagon has 6 sides."
        },

        // --- PHASE 5: GEARS & HOW THINGS WORK (Questions 21 - 25) ---
        {
            type: "text",
            question: "<b>Tool: Gear Ratio Rig</b><br><i>How it works:</i> When two gears mesh, the gear with FEWER teeth spins FASTER. A 20-tooth gear turning a 10-tooth gear makes the small gear spin twice for every single turn of the big one.<br><br><b>Mission:</b> Bolt turns a 20-tooth gear exactly ONCE. It is meshed with a 10-tooth gear. How many full turns does the small gear make?",
            answer: "2",
            explanation: "The small gear has half as many teeth, so it spins twice as fast: 1 turn of the big gear = 2 turns of the small gear."
        },
        {
            type: "mcq",
            question: "<b>Tool: Gear Direction Rig</b><br><i>How it works:</i> Meshed gears always spin in OPPOSITE directions. Gear A spins clockwise, so the gear touching it spins counterclockwise, and the next one flips again.<br><br><b>Mission:</b> Three gears are meshed in a row: A, B, C. Gear A spins CLOCKWISE. Which way does gear C spin?",
            options: ["Clockwise", "Counterclockwise"],
            answer: "Clockwise",
            explanation: "A is clockwise, B flips to counterclockwise, C flips again to clockwise. Two flips bring it back to clockwise."
        },
        {
            type: "text",
            question: "<b>Tool: Balance Lever</b><br><i>How it works:</i> A lever balances when (weight x distance from the middle) is the SAME on both sides. A heavy weight close in can balance a lighter weight further out.<br><br><b>Mission:</b> On Bolt's test lever, a weight of 6 sits at distance 2 on the left (6 x 2 = 12). On the right, a weight of 4 must balance it exactly. At what distance should the weight of 4 sit?",
            answer: "3",
            explanation: "The right side must also make 12. 4 x 3 = 12, so the weight sits at distance 3."
        },
        {
            type: "text",
            question: "<b>Tool: Wheel Rollout</b><br><i>How it works:</i> Every full turn of Bolt's wheel rolls him forward exactly 10 cm — the wheel's circumference is his built-in ruler.<br><br><b>Mission:</b> Bolt needs to roll exactly 50 cm to reach a power socket. How many full wheel turns does that take?",
            answer: "5",
            explanation: "50 / 10 = 5 full turns."
        },
        {
            type: "text",
            question: "<b>Tool: Battery Drain Meter</b><br><i>How it works:</i> Bolt's battery holds 100 units and his motors drain it at a steady 5 units per minute.<br><br><b>Mission:</b> Starting from a full battery, how many minutes can Bolt run before the battery is completely empty?",
            answer: "20",
            explanation: "100 / 5 = 20 minutes."
        },

        // --- PHASE 6: CODES & CIPHERS (Questions 26 - 30) ---
        {
            type: "mcq",
            question: "<b>Tool: Number-for-Letter Code</b><br><i>How it works:</i> The lab's oldest code swaps each letter for its alphabet position: A=1, B=2, all the way to Z=26.<br><br><b>Mission:</b> Decode this message from the lab door: 18-15-2-15-20. What does it spell?",
            options: ["ROBOT", "ROBAT", "RIBOT", "ROBUT"],
            answer: "ROBOT",
            explanation: "18=R, 15=O, 2=B, 15=O, 20=T. The door's message is ROBOT."
        },
        {
            type: "mcq",
            question: "<b>Tool: Shift Cipher Wheel</b><br><i>How it works:</i> This cipher shifts every letter ONE step FORWARD in the alphabet to hide it (A becomes B, B becomes C). To decode, shift every letter one step BACK.<br><br><b>Mission:</b> A note on a dog-shaped robot reads: E-P-H. What word does it decode to?",
            options: ["DOG", "FQI", "CAT", "EPH"],
            answer: "DOG",
            explanation: "Shift each letter back one: E back to D, P back to O, H back to G. The note says DOG."
        },
        {
            type: "text",
            question: "<b>Tool: Letter-Math Vault</b><br><i>How it works:</i> In this vault puzzle, a letter stands for one mystery digit, and the same letter always means the same digit.<br><br><b>Mission:</b> The vault shows: A + A + A = 12. What digit is A?",
            answer: "4",
            explanation: "Three equal numbers add to 12, so each one is 12 / 3 = 4. A = 4."
        },
        {
            type: "text",
            question: "<b>Tool: Star-Digit Vault</b><br><i>How it works:</i> A star stands for one mystery digit everywhere it appears — including inside a bigger number, where it sits in the ones place.<br><br><b>Mission:</b> The vault shows: 3★ + ★ = 40. (3★ means the two-digit number thirty-something.) What digit is the star?",
            answer: "5",
            explanation: "Try the star as 5: 35 + 5 = 40. It works, so the star is 5. (Algebra check: 30 + star + star = 40, so 2 stars = 10, star = 5.)"
        },
        {
            type: "mcq",
            question: "<b>Tool: Three-Clue Keypad</b><br><i>How it works:</i> Keypad codes surrender to clues, one digit at a time. Use each clue exactly where it applies.<br><br><b>Mission:</b> A 3-digit code has these clues: (1) The three digits add up to 12. (2) The first digit is 4. (3) The last digit is 2 more than the first digit. What is the code?",
            options: ["426", "462", "246", "642"],
            answer: "426",
            explanation: "First digit is 4. Last digit is 4 + 2 = 6. Middle digit: 12 - 4 - 6 = 2. The code is 426."
        },

        // --- PHASE 7: DEBUGGING LAB (Questions 31 - 35) ---
        {
            type: "text",
            question: "<b>Tool: Bug Hunt — The Short Loop</b><br><i>How it works:</i> A program does EXACTLY what it says — no more, no less. When a robot does the wrong amount of work, count what the program actually commands.<br><br><b>Mission:</b> Bolt's program says: REPEAT 4 times: (Pick up 1 bolt). But Marty needs him to pick up 5 bolts. What should the REPEAT number be changed to?",
            answer: "5",
            explanation: "Each repeat picks up 1 bolt, so picking up 5 bolts needs REPEAT 5. The bug was the loop count."
        },
        {
            type: "mcq",
            question: "<b>Tool: Bug Hunt — Step Order</b><br><i>How it works:</i> Programs run their steps in order, so a step that must happen first physically has to be listed first.<br><br><b>Mission:</b> Bolt's door program is scrambled. Which instruction MUST come first for the program to work at all?",
            options: ["Walk through the door", "Open the door", "Close the door", "Wave goodbye"],
            answer: "Open the door",
            explanation: "Bolt cannot walk through, close, or wave beyond a door that was never opened. Opening it must come first."
        },
        {
            type: "text",
            question: "<b>Tool: Loop Counter</b><br><i>How it works:</i> To count what a loop does in total, multiply: (amount per repeat) x (number of repeats).<br><br><b>Mission:</b> Bolt runs: REPEAT 5 times: (Beep 2 times). How many beeps does he make in total?",
            answer: "10",
            explanation: "2 beeps per repeat x 5 repeats = 10 beeps."
        },
        {
            type: "mcq",
            question: "<b>Tool: Bug Hunt — The IF Rule</b><br><i>How it works:</i> An IF-THEN-ELSE rule follows its branches literally: IF the condition is true, the robot does the THEN action; otherwise it does the ELSE action — even if the rule itself is a bad idea.<br><br><b>Mission:</b> Bolt's battery is LOW. His program says: IF battery is low THEN keep working, ELSE charge. According to this program, what will Bolt do?",
            options: ["Charge his battery", "Keeps working", "Turn off", "Beep for help"],
            answer: "Keeps working",
            explanation: "The battery IS low, so the THEN branch runs: keep working. (That is exactly the bug — the branches are the wrong way round for a tired robot!)"
        },
        {
            type: "text",
            question: "<b>Tool: Sensor Sweep</b><br><i>How it works:</i> Robots often apply a rule to only SOME items in a row — like only the even-numbered ones. Count the matching items first, then apply the action.<br><br><b>Mission:</b> Bolt checks doors numbered 1 to 6. His rule: knock TWICE on every EVEN-numbered door, and never knock on odd doors. How many knocks does he make in total?",
            answer: "6",
            explanation: "Even doors are 2, 4 and 6 — that is 3 doors. 3 doors x 2 knocks = 6 knocks."
        },

        // --- PHASE 8: THE FINAL RESCUE (Questions 36 - 40) ---
        {
            type: "text",
            question: "<b>Final Door — Part 1: The Power Code</b><br><i>How it works:</i> Everything Bolt rebooted is coming back online. The rescue door's first lock is his old binary panel (switch values 8, 4, 2, 1).<br><br><b>Mission:</b> The lock displays the pattern 1-0-1-1. What number must Marty type into the normal keypad to match it?",
            answer: "11",
            explanation: "1-0-1-1 means 8 + 2 + 1 = 11."
        },
        {
            type: "text",
            question: "<b>Final Door — Part 2: The Gear Crank</b><br><i>How it works:</i> The door's crank gear meshes with a door gear that has one third as many teeth — so the door gear spins 3 times for every 1 crank turn, just like the gear rig in Phase 5.<br><br><b>Mission:</b> Marty turns the crank gear 4 full turns. How many turns does the door gear make?",
            answer: "12",
            explanation: "4 crank turns x 3 door-gear turns each = 12 turns."
        },
        {
            type: "mcq",
            question: "<b>Final Door — Part 3: The Name Seal</b><br><i>How it works:</i> The last seal uses the lab's number-for-letter code (A=1, B=2, ... Z=26). Only the right name opens it.<br><br><b>Mission:</b> The seal shows: 2-15-12-20. Whose name is on the seal?",
            options: ["BOLT", "BOLD", "BOAT", "BELT"],
            answer: "BOLT",
            explanation: "2=B, 15=O, 12=L, 20=T. The seal says BOLT — it was his door all along."
        },
        {
            type: "text",
            question: "<b>Final Door — Part 4: The Roll Home</b><br><i>How it works:</i> Shortest grid routes again: count the right-moves plus the up-moves, nothing wasted.<br><br><b>Mission:</b> Bolt is at (0, 0) and the open rescue door is at (4, 3). Rolling only right or up, one square at a time, what is the smallest number of moves that gets Bolt home?",
            answer: "7",
            explanation: "4 moves right (0 to 4) + 3 moves up (0 to 3) = 7 moves."
        },
        {
            type: "mcq",
            question: "<b>Final Door — Part 5: The Master Switch</b><br><i>How it works:</i> One last logic puzzle. Three switches — A, B and C — and the door opens only when ALL of these are true at once: A is ON, B is OFF, and C matches A.<br><br><b>Mission:</b> Which switch setting opens the rescue door and sets Bolt free?",
            options: ["A ON, B ON, C ON", "A ON, B OFF, C ON", "A OFF, B OFF, C OFF", "A ON, B OFF, C OFF"],
            answer: "A ON, B OFF, C ON",
            explanation: "Check the winning setting against every rule: A is ON (yes), B is OFF (yes), and C is ON, matching A (yes). All three rules true — the door opens. Bolt is rescued!"
        }
    ]
};
