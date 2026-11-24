// Marty's Worksheet — Mission 6: Bolt's Moon Base — The Solar Storm
// Drop-in replacement for questions.js in worksheet-app
// Story: Bolt has been posted to the Moon Base, and a solar storm has
// knocked out its systems one by one. Marty reboots them with Bolt:
// solar panels, airlock logic, the moon rover, signals from Earth,
// oxygen machines, space codes, and Bolt's own programs.
// Built 2026-11-24 after Marty liked Mission 5 (Core Chamber) and solved
// it. Difficulty holds at the Mission 5 level with a harder finale, and
// the challenge comes from NEW systems to figure out, per Marty's
// design profile: a 6-switch binary panel, the XOR gate, belt drives
// (same direction, unlike gears), letter word-values, the Atbash mirror
// cipher, triangular numbers, and programs with a memory counter.
// Same rules as Missions 3-5: no per-question help field anywhere in
// this file, short 'Tool' lines, explanations kept for Review Mode.

const missionConfig = {
    themeTitle: "🚀 Bolt's Moon Base: The Solar Storm",
    themeColor: "linear-gradient(135deg, #312e81 0%, #0f172a 50%, #f59e0b 100%)",
    themeIcon: "🚀",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- PHASE 1: SOLAR PANELS — SIX-SWITCH BINARY (Questions 1 - 5) ---
        {
            type: "text",
            question: "<b>Tool: Moon Panel — Six Switches</b><br><i>How it works:</i> The Moon Base solar panel has SIX switches worth 32, 16, 8, 4, 2 and 1. ON (1) adds the value, OFF (0) adds nothing.<br><br><b>Mission:</b> After the storm, the panel shows 1-0-0-1-0-1. How much power is it making?",
            answer: "37",
            explanation: "The 32, 4 and 1 switches are ON: 32 + 4 + 1 = 37 power."
        },
        {
            type: "mcq",
            question: "<b>Tool: Moon Panel — Six Switches</b><br><i>How it works:</i> Work backwards: switch ON exactly the values that add up to the target, biggest first.<br><br><b>Mission:</b> The air system needs exactly 45 power. Which pattern makes 45?",
            options: ["101101", "101011", "110101", "100101"],
            answer: "101101",
            explanation: "45 = 32 + 8 + 4 + 1, so the pattern is 1-0-1-1-0-1. (Traps: 101011 = 43, 110101 = 53, 100101 = 37.)"
        },
        {
            type: "mcq",
            question: "<b>Tool: Robot Counting — Storm Log</b><br><i>How it works:</i> Bolt logged the storm in binary. Each entry is worth one more than the entry before it.<br><br><b>Mission:</b> The log reads: 1011, 1100, 1101, 1110, ___. What is the next entry?",
            options: ["1111", "10000", "1112", "10111"],
            answer: "1111",
            explanation: "In normal numbers the log counts 11, 12, 13, 14, so next is 15. Fifteen in binary is 8 + 4 + 2 + 1 = 1111."
        },
        {
            type: "text",
            question: "<b>Tool: Twin Moon Panels</b><br><i>How it works:</i> Two 5-switch panels (values 16, 8, 4, 2, 1) feed one battery. Convert each pattern, then add the two numbers.<br><br><b>Mission:</b> Panel A shows 1-0-1-1-0 and Panel B shows 0-1-0-1-1. What is the total power in the battery?",
            answer: "33",
            explanation: "Panel A: 16 + 4 + 2 = 22. Panel B: 8 + 2 + 1 = 11. Total = 22 + 11 = 33."
        },
        {
            type: "mcq",
            question: "<b>Tool: Panel Showdown — Moon Edition</b><br><i>How it works:</i> Convert both patterns before judging. One big left-hand switch can outweigh several small ones.<br><br><b>Mission:</b> Two panels face off: 1-1-0-0-1 and 1-0-1-1-1. Which panel makes MORE power?",
            options: ["11001", "10111", "They are equal", "Neither panel works"],
            answer: "11001",
            explanation: "11001 = 16 + 8 + 1 = 25. 10111 = 16 + 4 + 2 + 1 = 23. The first panel wins, 25 to 23."
        },

        // --- PHASE 2: AIRLOCK LOGIC — THE XOR GATE (Questions 6 - 10) ---
        {
            type: "mcq",
            question: "<b>Tool: NEW GATE — XOR</b><br><i>How it works:</i> The airlock uses a brand-new gate. XOR turns ON when its two inputs are DIFFERENT, and OFF when they are the SAME.<br><br><b>Mission:</b> Airlock inputs: ON and OFF. Is the XOR output ON or OFF?",
            options: ["ON", "OFF"],
            answer: "ON",
            explanation: "The inputs are different (ON vs OFF), so XOR gives ON."
        },
        {
            type: "mcq",
            question: "<b>Tool: XOR Gate</b><br><i>How it works:</i> Same rule: DIFFERENT inputs give ON, SAME inputs give OFF.<br><br><b>Mission:</b> The second airlock sensor pair reads ON and ON. Is the XOR output ON or OFF?",
            options: ["ON", "OFF"],
            answer: "OFF",
            explanation: "The inputs are the same (both ON), so XOR gives OFF."
        },
        {
            type: "mcq",
            question: "<b>Tool: XOR Chain</b><br><i>How it works:</i> XOR gates can chain too: settle the first pair, then XOR the result with the next signal.<br><br><b>Mission:</b> A (ON) and B (ON) enter an XOR gate. That result is XORed with C (ON). What is the FINAL output?",
            options: ["ON", "OFF"],
            answer: "ON",
            explanation: "First XOR: ON and ON are the same, giving OFF. Then OFF XOR ON: different, giving ON."
        },
        {
            type: "mcq",
            question: "<b>Tool: Bracket Circuit</b><br><i>How it works:</i> This circuit has two branches: work out (A AND B) first, then OR that result with C.<br><br><b>Mission:</b> A is ON, B is OFF, C is ON. The circuit is (A AND B) OR C. What is the output?",
            options: ["ON", "OFF"],
            answer: "ON",
            explanation: "A AND B: ON and OFF gives OFF. Then OFF OR C (ON) gives ON."
        },
        {
            type: "mcq",
            question: "<b>Tool: Airlock Master Rule</b><br><i>How it works:</i> Real airlock rules mix AND and OR. Check each part of the rule separately, then combine.<br><br><b>Mission:</b> The airlock opens IF (a badge is scanned AND an officer is present) OR (the emergency lever is pulled). Right now: badge scanned YES, officer present NO, emergency lever NOT pulled. Does the airlock open?",
            options: ["Yes", "No"],
            answer: "No",
            explanation: "Badge AND officer fails (no officer). The emergency lever was not pulled either. Both routes are false, so the airlock stays shut."
        },

        // --- PHASE 3: MOON ROVER NAVIGATION (Questions 11 - 15) ---
        {
            type: "mcq",
            question: "<b>Tool: Rover Tracker</b><br><i>How it works:</i> Track x and y separately through the whole drive: right adds to x, left subtracts; up adds to y, down subtracts.<br><br><b>Mission:</b> Bolt's rover starts at (3, 3) and drives: 2 up, 4 right, 1 down, 1 left. Where does it stop?",
            options: ["(6, 4)", "(7, 4)", "(6, 5)", "(5, 4)"],
            answer: "(6, 4)",
            explanation: "x: 3 + 4 - 1 = 6. y: 3 + 2 - 1 = 4. The rover stops at (6, 4)."
        },
        {
            type: "mcq",
            question: "<b>Tool: Turn Loop</b><br><i>How it works:</i> A REPEAT of pure turns: apply the same turn again and again, updating the facing each time.<br><br><b>Mission:</b> The rover faces EAST and runs: REPEAT 3 times: (Turn RIGHT). Which way does it face at the end?",
            options: ["North", "East", "South", "West"],
            answer: "North",
            explanation: "East, right to South (1), right to West (2), right to North (3). The rover ends facing North."
        },
        {
            type: "mcq",
            question: "<b>Tool: Loop Drive</b><br><i>How it works:</i> Run the loop block once, updating position AND facing, then run it again from there — the second run goes a different direction than the first.<br><br><b>Mission:</b> The rover starts at (0, 0) facing EAST and runs: REPEAT 2 times: (Drive forward 3 squares, Turn LEFT). What position is it in when the program ends?",
            options: ["(3, 3)", "(6, 0)", "(0, 3)", "(3, 0)"],
            answer: "(3, 3)",
            explanation: "First run: drive 3 east to (3, 0), turn left to face North. Second run: drive 3 north to (3, 3), turn left to face West. It ends at (3, 3)."
        },
        {
            type: "text",
            question: "<b>Tool: Crater Route</b><br><i>How it works:</i> Shortest grid routes are still (moves across) + (moves up or down) — this time the trip goes right and DOWN.<br><br><b>Mission:</b> The rover is at (1, 5) and a broken antenna sits at (6, 1). Rolling only right or down, one square at a time, what is the smallest number of moves to reach it?",
            answer: "9",
            explanation: "Across: from 1 to 6 is 5 right-moves. Down: from 5 to 1 is 4 down-moves. 5 + 4 = 9 moves."
        },
        {
            type: "text",
            question: "<b>Tool: Drift Report</b><br><i>How it works:</i> A drift report only asks about ONE direction. Moves north and south cannot change how far EAST or WEST the rover ends up — learn to ignore the numbers that do not matter.<br><br><b>Mission:</b> The rover rolls 6 squares north, 2 squares south, 3 squares east, then 5 squares west. How many squares WEST of its starting point does it end?",
            answer: "2",
            explanation: "East-west only: 3 east - 5 west = 2 squares west of the start. (The north and south rolls affect the other axis, not this one.)"
        },

        // --- PHASE 4: SIGNALS FROM EARTH (Questions 16 - 20) ---
        {
            type: "text",
            question: "<b>Tool: Landing Pad Numbers</b><br><i>How it works:</i> Earth is sending a pattern where the JUMPS themselves grow in a steady way. Write the jumps down first.<br><br><b>Mission:</b> The signal reads: 1, 3, 6, 10, 15, ___. What number comes next?",
            answer: "21",
            explanation: "The jumps are +2, +3, +4, +5, so the next jump is +6: 15 + 6 = 21. (These are the triangular numbers.)"
        },
        {
            type: "text",
            question: "<b>Tool: Two-Step Signal</b><br><i>How it works:</i> Some signals alternate between TWO operations, turn and turn about. Test: add, multiply, add, multiply...<br><br><b>Mission:</b> The signal reads: 3, 5, 10, 12, 24, 26, ___. What number comes next?",
            answer: "52",
            explanation: "The operations alternate +2, x2: 3+2=5, 5x2=10, 10+2=12, 12x2=24, 24+2=26. Next operation is x2: 26 x 2 = 52."
        },
        {
            type: "text",
            question: "<b>Tool: Prime Beacon</b><br><i>How it works:</i> The beacon only transmits numbers that have exactly TWO factors: the number itself and 1. Those are the prime numbers.<br><br><b>Mission:</b> The beacon sends: 2, 3, 5, 7, 11, 13, ___. What does it send next?",
            answer: "17",
            explanation: "These are the primes in order. After 13, the next prime is 17 (14, 15 and 16 all have extra factors)."
        },
        {
            type: "text",
            question: "<b>Tool: Squares-and-Cubes Signal</b><br><i>How it works:</i> Two strands again — but this time one strand is square numbers and the other is cube numbers, taking turns.<br><br><b>Mission:</b> The tangled signal reads: 1, 1, 4, 8, 9, 27, 16, ___. What number comes next?",
            answer: "64",
            explanation: "Odd positions: 1, 4, 9, 16 — squares. Even positions: 1, 8, 27 — cubes. The next number is in an even position: 4x4x4 = 64."
        },
        {
            type: "mcq",
            question: "<b>Tool: Backward Letter Signal</b><br><i>How it works:</i> Letters can run BACKWARD through the alphabet. Convert to positions (A=1 ... Z=26) and study the jumps.<br><br><b>Mission:</b> A signal reads: Z, X, U, Q, ___. Which letter comes next?",
            options: ["L", "M", "K", "N"],
            answer: "L",
            explanation: "Positions: Z=26, X=24, U=21, Q=17. The jumps are -2, -3, -4, so the next jump is -5: 17 - 5 = 12 = L."
        },

        // --- PHASE 5: OXYGEN MACHINES (Questions 21 - 25) ---
        {
            type: "mcq",
            question: "<b>Tool: Belt Drive Discovery</b><br><i>How it works:</i> Not every connection is a gear! Wheels joined by a BELT spin in the SAME direction — the belt carries the spin around without flipping it.<br><br><b>Mission:</b> Wheel A spins CLOCKWISE. It belt-drives wheel B, which belt-drives wheel C. Which way does wheel C spin?",
            options: ["Clockwise", "Counterclockwise"],
            answer: "Clockwise",
            explanation: "Belts never flip direction: A clockwise makes B clockwise, and B makes C clockwise too."
        },
        {
            type: "mcq",
            question: "<b>Tool: Gear-and-Belt Mixer</b><br><i>How it works:</i> Now mix the two rules: a MESH flips direction, a BELT keeps it. Track each connection separately.<br><br><b>Mission:</b> Gear A spins CLOCKWISE and meshes with gear B. Gear B then belt-drives wheel C. Which way does wheel C spin?",
            options: ["Clockwise", "Counterclockwise"],
            answer: "Counterclockwise",
            explanation: "A clockwise meshes with B: flip to counterclockwise. The belt from B to C keeps the direction: C spins counterclockwise."
        },
        {
            type: "text",
            question: "<b>Tool: Oxygen Gear Rig</b><br><i>How it works:</i> The gear law still holds on the Moon: teeth ratio first (big teeth / small teeth), then multiply by the big gear's turns.<br><br><b>Mission:</b> A 36-tooth gear meshes with a 9-tooth gear. The BIG gear turns 2 full turns. How many turns does the small gear make?",
            answer: "8",
            explanation: "36 / 9 = 4 turns of the small gear per big turn. 2 big turns x 4 = 8 small turns."
        },
        {
            type: "text",
            question: "<b>Tool: Airlock Lever</b><br><i>How it works:</i> The balance rule: (weight x distance) must match on both sides of the lever.<br><br><b>Mission:</b> A weight of 9 sits at distance 2 on the left of the airlock lever. A weight of 3 on the right must balance it exactly. At what distance should the weight of 3 sit?",
            answer: "6",
            explanation: "Left side: 9 x 2 = 18. Right side must make 18: 3 x 6 = 18, so distance 6."
        },
        {
            type: "text",
            question: "<b>Tool: Oxygen Tank — Net Drain</b><br><i>How it works:</i> The tank drains while the solar maker refills it at the same time. Net drain per hour = (what the crew uses) - (what the maker adds back).<br><br><b>Mission:</b> The oxygen tank holds 120 units. The crew uses 12 units per hour, but the solar maker adds back 2 units per hour. How many hours until the tank is empty?",
            answer: "12",
            explanation: "Net drain: 12 - 2 = 10 units per hour. 120 / 10 = 12 hours."
        },

        // --- PHASE 6: SPACE CODES (Questions 26 - 30) ---
        {
            type: "text",
            question: "<b>Tool: Word-Value Code</b><br><i>How it works:</i> NEW code: a word's VALUE is the sum of its letter positions (A=1 ... Z=26). Small example: the word AB is worth 1 + 2 = 3.<br><br><b>Mission:</b> Earth sends a one-word password: CAT. What is its value?",
            answer: "24",
            explanation: "C=3, A=1, T=20. 3 + 1 + 20 = 24."
        },
        {
            type: "mcq",
            question: "<b>Tool: Word-Value Lock</b><br><i>How it works:</i> The lock opens for a word with the exact target value. Work out each candidate's value — no shortcuts, add every letter.<br><br><b>Mission:</b> The lock needs a word worth exactly 26. Which of these words opens it?",
            options: ["DOG", "CAT", "PIG", "SUN"],
            answer: "DOG",
            explanation: "DOG: 4 + 15 + 7 = 26. It opens! (CAT = 24, PIG = 16 + 9 + 7 = 32, SUN = 19 + 21 + 14 = 54.)"
        },
        {
            type: "mcq",
            question: "<b>Tool: Mirror Cipher (Atbash)</b><br><i>How it works:</i> This ancient cipher mirrors the alphabet: A swaps with Z, B swaps with Y, C swaps with X, and so on. To decode, swap every letter for its mirror partner.<br><br><b>Mission:</b> A message carved by the airlock reads: Y-Z-G. What does it decode to?",
            options: ["BAT", "TAB", "YZG", "CAT"],
            answer: "BAT",
            explanation: "Mirror swaps: Y mirrors to B, Z mirrors to A, G mirrors to T. The message says BAT."
        },
        {
            type: "mcq",
            question: "<b>Tool: Triple-Shift Cipher</b><br><i>How it works:</i> This wheel shifts every letter THREE steps forward to hide it (A becomes D). To decode, shift every letter three steps BACK.<br><br><b>Mission:</b> A greeting from Earth arrives as: K-H-O-O-R. What does it decode to?",
            options: ["HELLO", "KHOOR", "WORLD", "EARTH"],
            answer: "HELLO",
            explanation: "Shift each letter back three: K to H, H to E, O to L, O to L, R to O. Earth says HELLO."
        },
        {
            type: "text",
            question: "<b>Tool: Doubling Vault</b><br><i>How it works:</i> A two-digit number is added to ITSELF. If both digits were the same, the answer would be two identical blocks — use that to spot the number.<br><br><b>Mission:</b> The vault shows: AB + AB = 66, where A and B are digits and AB is a two-digit number. What is the number AB?",
            answer: "33",
            explanation: "AB + AB = 66 means AB = 66 / 2 = 33. Check: 33 + 33 = 66. The number is 33."
        },

        // --- PHASE 7: BOLT'S PROGRAMS — MEMORY COUNTER (Questions 31 - 35) ---
        {
            type: "text",
            question: "<b>Tool: Bolt's Memory Counter</b><br><i>How it works:</i> NEW: Bolt has a memory counter — a number he carries and updates step by step. Follow it through EVERY instruction in order.<br><br><b>Mission:</b> Bolt's counter starts at 0. His program says: Add 3. Add 3. Add 3. Subtract 2. What is the counter at the end?",
            answer: "7",
            explanation: "0 + 3 = 3, + 3 = 6, + 3 = 9, - 2 = 7. The counter ends at 7."
        },
        {
            type: "text",
            question: "<b>Tool: Counter Loop</b><br><i>How it works:</i> A loop can update the counter many times: multiply the loop's change by the number of repeats, then handle any steps after the loop.<br><br><b>Mission:</b> Bolt's counter starts at 0. Program: REPEAT 4 times: (Add 5). Then: Subtract 6. What is the counter at the end?",
            answer: "14",
            explanation: "The loop adds 5 x 4 = 20. Then subtract 6: 20 - 6 = 14."
        },
        {
            type: "mcq",
            question: "<b>Tool: Counter Decision</b><br><i>How it works:</i> Programs compare the counter against a target: IF the counter is MORE THAN the target, one thing happens; otherwise, something else.<br><br><b>Mission:</b> Bolt's counter shows 10. His program says: IF counter is more than 8 THEN open the supply door, ELSE keep counting. What happens?",
            options: ["The door opens", "The door stays shut", "The counter resets to 0", "Bolt beeps twice"],
            answer: "The door opens",
            explanation: "10 is more than 8, so the THEN branch runs: the supply door opens."
        },
        {
            type: "text",
            question: "<b>Tool: Triple-Nested Beeps</b><br><i>How it works:</i> Loops inside loops multiply all the way down: outer repeats x inner repeats x beeps per run.<br><br><b>Mission:</b> Bolt runs: REPEAT 3 times: (REPEAT 2 times: (Beep 2 times)). How many beeps in total?",
            answer: "12",
            explanation: "3 outer x 2 inner x 2 beeps = 12 beeps."
        },
        {
            type: "text",
            question: "<b>Tool: Bug Hunt — The Missed Room</b><br><i>How it works:</i> Off-by-one bugs hide in loop counts: simulate which items the loop ACTUALLY reaches, in order, and spot the one it never touches.<br><br><b>Mission:</b> Bolt must visit EVERY Moon Base room, numbered 1 to 5. His program says: REPEAT 4 times: (Visit the next room), starting with Room 1. Which room does the program NEVER visit?",
            answer: "5",
            explanation: "Four repeats visit Rooms 1, 2, 3 and 4 — and stop. Room 5 is never visited. The loop needed 5 repeats."
        },

        // --- PHASE 8: THE SOLAR STORM FINALE (Questions 36 - 40) ---
        {
            type: "text",
            question: "<b>Storm Lock 1: The Master Panel</b><br><i>How it works:</i> The six-switch panel (32, 16, 8, 4, 2, 1) at full storm power — read it carefully, switch by switch.<br><br><b>Mission:</b> The master panel shows 1-1-0-1-1-0. How much power is flowing to the base?",
            answer: "54",
            explanation: "The 32, 16, 4 and 2 switches are ON: 32 + 16 + 4 + 2 = 54 power."
        },
        {
            type: "mcq",
            question: "<b>Storm Lock 2: The Trap Circuit</b><br><i>How it works:</i> The storm's final circuit: (A XOR B) AND C. Settle the XOR bracket FIRST — it is the trap for anyone who rushes.<br><br><b>Mission:</b> A is ON, B is ON, C is ON. What is the circuit's output?",
            options: ["ON", "OFF"],
            answer: "OFF",
            explanation: "A XOR B: both ON, the same, so XOR gives OFF. Then OFF AND C: AND needs both ON, so the output is OFF."
        },
        {
            type: "text",
            question: "<b>Storm Lock 3: The Long Way Home</b><br><i>How it works:</i> Shortest route, starting from negative coordinates: count the gap on x, count the gap on y, add them.<br><br><b>Mission:</b> The rover is stranded at (-2, -1) and the Moon Base door is at (3, 4). Rolling only right or up, what is the smallest number of moves that brings it home?",
            answer: "10",
            explanation: "x gap: from -2 to 3 is 5 moves. y gap: from -1 to 4 is 5 moves. 5 + 5 = 10 moves."
        },
        {
            type: "text",
            question: "<b>Storm Lock 4: The Triple Tens Vault</b><br><i>How it works:</i> A is a mystery digit. A0 means A in the tens place (A x 10). This vault uses the tens number TWICE, plus A once more.<br><br><b>Mission:</b> The vault shows: A0 + A0 + A = 105. What digit is A?",
            answer: "5",
            explanation: "Try A = 5: 50 + 50 + 5 = 105. It works. (Algebra check: the total is 21 x A, and 105 / 21 = 5.)"
        },
        {
            type: "mcq",
            question: "<b>Storm Lock 5: The Four-Switch Door</b><br><i>How it works:</i> The base's master door has FOUR switches — P, Q, R and S — and opens only when ALL of these are true at once: P is ON, Q is DIFFERENT from P, R is OFF, and S is ON.<br><br><b>Mission:</b> Which switch setting opens the door and ends the storm blackout?",
            options: ["P ON, Q OFF, R OFF, S ON", "P ON, Q ON, R OFF, S ON", "P ON, Q OFF, R ON, S ON", "P OFF, Q ON, R OFF, S ON"],
            answer: "P ON, Q OFF, R OFF, S ON",
            explanation: "Check the winner rule by rule: P is ON (yes), Q is OFF, different from P (yes), R is OFF (yes), S is ON (yes). All four rules true — the door opens, the lights come back on, and Bolt saves the Moon Base!"
        }
    ]
};
