// Marty's Worksheet — Mission 5: Robot Lab Rescue LEVEL 2 — The Core Chamber
// Drop-in replacement for questions.js in worksheet-app
// Story: Bolt is rescued, but deep below the lab the Core Chamber — the
// room that powers the whole building — is still dark. Bolt leads Marty
// down to reboot it. Every system is a level up from Mission 4:
// 5-switch binary panels, three-gate chains, loops that must be tracked
// square by square (including negative coordinates), nested loops,
// combined battery drain, and tougher cryptarithms.
// Built ~20% harder than Mission 4 at Bhanu's request (2026-11-23),
// after Marty finished Robot Lab Rescue quite easily. Same rules as
// Missions 3-4: no per-question help field anywhere in this file, short
// 'Tool' lines instead of lessons, explanations kept for Review Mode.

const missionConfig = {
    themeTitle: "🤖 Robot Lab Rescue — LEVEL 2: The Core Chamber",
    themeColor: "linear-gradient(135deg, #7c3aed 0%, #0f172a 50%, #ef4444 100%)",
    themeIcon: "⚡",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- PHASE 1: FIVE-SWITCH BINARY (Questions 1 - 5) ---
        {
            type: "text",
            question: "<b>Tool: Upgraded Binary Panel</b><br><i>How it works:</i> The Core Chamber panel has FIVE switches worth 16, 8, 4, 2 and 1. ON (1) adds the value, OFF (0) adds nothing.<br><br><b>Mission:</b> The panel shows 1-1-0-1-0. How much power does the Core get?",
            answer: "26",
            explanation: "The 16, 8 and 2 switches are ON: 16 + 8 + 2 = 26 power."
        },
        {
            type: "mcq",
            question: "<b>Tool: Upgraded Binary Panel</b><br><i>How it works:</i> Work backwards again: switch ON exactly the values that add up to the target.<br><br><b>Mission:</b> The Core needs exactly 25 power to wake its first machine. Which pattern makes 25?",
            options: ["10101", "11001", "10011", "11100"],
            answer: "11001",
            explanation: "25 = 16 + 8 + 1, so the pattern is 1-1-0-0-1. (Check the traps: 10101 = 21, 10011 = 19, 11100 = 28.)"
        },
        {
            type: "mcq",
            question: "<b>Tool: Robot Counting — Deeper</b><br><i>How it works:</i> Binary counting again, further along: each pattern is worth one more than the last.<br><br><b>Mission:</b> Bolt counts: 110, 111, 1000, 1001, ___. What comes next?",
            options: ["1010", "1100", "1002", "1110"],
            answer: "1010",
            explanation: "In normal numbers that count is 6, 7, 8, 9, so next is 10. Ten in binary is 8 + 2 = 1010."
        },
        {
            type: "text",
            question: "<b>Tool: Twin Core Panels</b><br><i>How it works:</i> Two 4-switch panels (values 8, 4, 2, 1) feed one battery. Convert each, then add.<br><br><b>Mission:</b> Panel A shows 1-1-0-0 and Panel B shows 0-1-0-1. What is the total power?",
            answer: "17",
            explanation: "Panel A: 8 + 4 = 12. Panel B: 4 + 1 = 5. Total = 12 + 5 = 17."
        },
        {
            type: "mcq",
            question: "<b>Tool: Panel Showdown</b><br><i>How it works:</i> To compare two binary patterns, convert both — the bigger-looking pattern is not always the bigger number, because the LEFT switches are worth the most.<br><br><b>Mission:</b> Two panels glow in the dark: 1-0-1-0-1 and 0-1-1-1-1. Which panel gives MORE power?",
            options: ["10101", "01111", "They are equal", "Neither panel works"],
            answer: "10101",
            explanation: "10101 = 16 + 4 + 1 = 21. 01111 = 8 + 4 + 2 + 1 = 15. The first panel wins, 21 to 15 — its 16 switch beats all four of the other's small switches combined."
        },

        // --- PHASE 2: LOGIC GATES LEVEL 2 (Questions 6 - 10) ---
        {
            type: "mcq",
            question: "<b>Tool: Triple AND Gate</b><br><i>How it works:</i> An AND gate with THREE inputs still follows the same rule: the output is ON only if EVERY input is ON.<br><br><b>Mission:</b> The Core's fan runs through a triple AND gate. Inputs: ON, ON, OFF. Is the fan ON or OFF?",
            options: ["ON", "OFF"],
            answer: "OFF",
            explanation: "One input is OFF, and AND needs all three ON. The fan stays OFF."
        },
        {
            type: "mcq",
            question: "<b>Tool: OR-then-NOT Chain</b><br><i>How it works:</i> Work through chained gates in order: finish the first gate completely, then feed its result into the next.<br><br><b>Mission:</b> Signals OFF and ON enter an OR gate. That result passes through a NOT gate. What is the FINAL output?",
            options: ["ON", "OFF"],
            answer: "OFF",
            explanation: "OR with one ON input gives ON. NOT then flips it to OFF."
        },
        {
            type: "mcq",
            question: "<b>Tool: NOT-then-AND Chain</b><br><i>How it works:</i> This time the NOT gate comes FIRST, so flip the signal before it meets the AND gate.<br><br><b>Mission:</b> Signal A is OFF. It passes through a NOT gate, then meets signal B (ON) at an AND gate. What is the FINAL output?",
            options: ["ON", "OFF"],
            answer: "ON",
            explanation: "NOT flips A from OFF to ON. Then AND sees ON and ON, so the output is ON."
        },
        {
            type: "mcq",
            question: "<b>Tool: The Double Flip</b><br><i>How it works:</i> Two NOT gates in a row flip the signal, then flip it right back.<br><br><b>Mission:</b> A signal that is ON travels through a NOT gate, then ANOTHER NOT gate. What comes out at the end?",
            options: ["ON", "OFF"],
            answer: "ON",
            explanation: "First NOT: ON becomes OFF. Second NOT: OFF becomes ON again. Two flips cancel out."
        },
        {
            type: "mcq",
            question: "<b>Tool: Charging Rule</b><br><i>How it works:</i> An OR rule fires when AT LEAST ONE condition is true — and stays quiet only when every condition is false.<br><br><b>Mission:</b> Bolt charges IF his battery is low OR the sun panel is active. Right now his battery is NOT low (it is fine) AND the sun panel is INACTIVE. Does Bolt charge?",
            options: ["Yes", "No"],
            answer: "No",
            explanation: "OR needs at least one true condition. Battery low? No. Sun panel active? No. Both false, so Bolt does not charge."
        },

        // --- PHASE 3: GRID NAVIGATION LEVEL 2 (Questions 11 - 15) ---
        {
            type: "mcq",
            question: "<b>Tool: Full Compass Grid</b><br><i>How it works:</i> The Core floor grid extends in every direction: right adds to x, left subtracts from x, up adds to y, down subtracts from y.<br><br><b>Mission:</b> Bolt starts at (5, 5). He rolls 2 squares LEFT and 3 squares DOWN. Where is he now?",
            options: ["(3, 2)", "(7, 2)", "(3, 8)", "(2, 3)"],
            answer: "(3, 2)",
            explanation: "x: 5 - 2 = 3. y: 5 - 3 = 2. Bolt is at (3, 2)."
        },
        {
            type: "mcq",
            question: "<b>Tool: Compass Turns — Long Chain</b><br><i>How it works:</i> Track the facing after EVERY turn, one at a time. Right turns go North to East to South to West; left turns go the opposite way round.<br><br><b>Mission:</b> Bolt faces SOUTH. He turns LEFT, then LEFT, then RIGHT, then LEFT. Which way does he face at the end?",
            options: ["North", "East", "South", "West"],
            answer: "North",
            explanation: "Start South. Left to East. Left to North. Right to East. Left to North. Bolt ends facing North."
        },
        {
            type: "mcq",
            question: "<b>Tool: Loop Tracker</b><br><i>How it works:</i> A loop changes BOTH where Bolt is AND which way he faces. Run the block once, update everything, then run it again from the new position and facing.<br><br><b>Mission:</b> Bolt starts at (0, 0) facing NORTH and runs: REPEAT 2 times: (Roll forward 2 squares, Turn LEFT). What position is he in when the program ends?",
            options: ["(-2, 2)", "(0, 4)", "(2, 2)", "(-2, 0)"],
            answer: "(-2, 2)",
            explanation: "First run: forward 2 north to (0, 2), turn left to face West. Second run: forward 2 west to (-2, 2), turn left to face South. He ends at (-2, 2)."
        },
        {
            type: "text",
            question: "<b>Tool: Deep Grid Route</b><br><i>How it works:</i> Shortest routes still equal (right-moves needed) + (up-moves needed) — even when the start has a negative coordinate. Count the gap between start and target on each axis.<br><br><b>Mission:</b> Bolt is at (-1, 2) and the Core door is at (4, 6). Rolling only right or up, what is the smallest number of moves that gets him there?",
            answer: "9",
            explanation: "x gap: from -1 to 4 is 5 right-moves. y gap: from 2 to 6 is 4 up-moves. 5 + 4 = 9 moves."
        },
        {
            type: "text",
            question: "<b>Tool: Net Drift</b><br><i>How it works:</i> Rolling back the way you came cancels earlier moves. To find where Bolt ENDS UP relative to the start, add the forward moves and subtract the backward ones.<br><br><b>Mission:</b> Bolt rolls 5 squares east, then 3 squares west, then 2 more squares east. How many squares EAST of his start is he now?",
            answer: "4",
            explanation: "5 east - 3 west + 2 east = 4 squares east of the start."
        },

        // --- PHASE 4: PATTERN DECODING LEVEL 2 (Questions 16 - 20) ---
        {
            type: "text",
            question: "<b>Tool: Signal Decoder — Growing Rule</b><br><i>How it works:</i> Test a rule on EVERY jump. A rule like 'double and add a bit' must work from the first pair to the last.<br><br><b>Mission:</b> A Core signal reads: 1, 4, 10, 22, 46, ___. What number comes next?",
            answer: "94",
            explanation: "The rule is double, then add 2: 1x2+2=4, 4x2+2=10, 10x2+2=22, 22x2+2=46. Next: 46x2+2 = 94."
        },
        {
            type: "text",
            question: "<b>Tool: Adding-Machine Pattern</b><br><i>How it works:</i> In this famous pattern, each number is built by adding the two numbers before it.<br><br><b>Mission:</b> The Core computer prints: 2, 3, 5, 8, 13, 21, ___. What does it print next?",
            answer: "34",
            explanation: "Each number is the sum of the previous two: 13 + 21 = 34. (This is the Fibonacci pattern, starting from 2 and 3.)"
        },
        {
            type: "mcq",
            question: "<b>Tool: Letter Signal — Odd Jumps</b><br><i>How it works:</i> Convert letters to positions (A=1 ... Z=26) and study the jumps between them.<br><br><b>Mission:</b> A signal reads: B, E, J, Q, ___. Which letter comes next?",
            options: ["X", "Y", "Z", "W"],
            answer: "Z",
            explanation: "Positions: B=2, E=5, J=10, Q=17. The jumps are +3, +5, +7 — odd numbers growing by 2. Next jump is +9: 17 + 9 = 26 = Z."
        },
        {
            type: "text",
            question: "<b>Tool: Two Signals — Doubling Edition</b><br><i>How it works:</i> Split the signal into odd positions (1st, 3rd, 5th...) and even positions (2nd, 4th, 6th...) and read each strand on its own.<br><br><b>Mission:</b> A tangled Core signal reads: 2, 3, 4, 6, 8, 12, 16, ___. What number comes next?",
            answer: "24",
            explanation: "Odd positions: 2, 4, 8, 16 — doubling. Even positions: 3, 6, 12 — also doubling. The next number is in an even position: 12 x 2 = 24."
        },
        {
            type: "text",
            question: "<b>Tool: Cube Printer</b><br><i>How it works:</i> The printer's new tiles come from multiplying a number by itself THREE times: 2 x 2 x 2 = 8, 3 x 3 x 3 = 27.<br><br><b>Mission:</b> The tiles read: 1, 8, 27, 64, ___. What is stamped on the next tile?",
            answer: "125",
            explanation: "These are cube numbers: 1x1x1, 2x2x2, 3x3x3, 4x4x4. Next is 5x5x5 = 125."
        },

        // --- PHASE 5: GEARS & SYSTEMS LEVEL 2 (Questions 21 - 25) ---
        {
            type: "text",
            question: "<b>Tool: Heavy Gear Rig</b><br><i>How it works:</i> Same gear law as the lab upstairs: divide the big gear's teeth by the small gear's teeth to get how many times faster the small gear spins — then multiply by the big gear's turns.<br><br><b>Mission:</b> A 24-tooth gear meshes with an 8-tooth gear. Marty turns the BIG gear 5 full turns. How many turns does the small gear make?",
            answer: "15",
            explanation: "24 / 8 = 3, so the small gear spins 3 times per big turn. 5 big turns x 3 = 15 small turns."
        },
        {
            type: "mcq",
            question: "<b>Tool: The Four-Gear Line</b><br><i>How it works:</i> Every mesh flips the spin direction. Count the flips from the first gear to the last.<br><br><b>Mission:</b> Four gears mesh in a row: A, B, C, D. Gear A spins CLOCKWISE. Which way does gear D spin?",
            options: ["Clockwise", "Counterclockwise"],
            answer: "Counterclockwise",
            explanation: "A clockwise, B counterclockwise (flip 1), C clockwise (flip 2), D counterclockwise (flip 3). Gear D spins counterclockwise."
        },
        {
            type: "text",
            question: "<b>Tool: Balance Lever — Heavier</b><br><i>How it works:</i> Balance needs (weight x distance) equal on both sides, just like upstairs — now with bigger loads.<br><br><b>Mission:</b> A weight of 8 sits at distance 3 on the left of the Core's lever. A weight of 6 on the right must balance it exactly. At what distance should the weight of 6 sit?",
            answer: "4",
            explanation: "Left side: 8 x 3 = 24. Right side must make 24 too: 6 x 4 = 24, so distance 4."
        },
        {
            type: "text",
            question: "<b>Tool: Cargo Wheel Rollout</b><br><i>How it works:</i> Bolt's bigger cargo wheels roll him 15 cm per full turn.<br><br><b>Mission:</b> The Core door is exactly 90 cm away. How many full wheel turns does Bolt need to reach it?",
            answer: "6",
            explanation: "90 / 15 = 6 full turns."
        },
        {
            type: "text",
            question: "<b>Tool: Combined Drain</b><br><i>How it works:</i> When two systems drain one battery, ADD their drains first to get the total drain per minute, then divide the battery by it.<br><br><b>Mission:</b> Bolt's battery holds 80 units. His motors drain 5 units per minute and his lights drain 3 units per minute, both running together. How many minutes until the battery is empty?",
            answer: "10",
            explanation: "Combined drain: 5 + 3 = 8 units per minute. 80 / 8 = 10 minutes."
        },

        // --- PHASE 6: CODES & CIPHERS LEVEL 2 (Questions 26 - 30) ---
        {
            type: "mcq",
            question: "<b>Tool: Number-for-Letter Code — Longer</b><br><i>How it works:</i> The A=1 ... Z=26 code again, on a longer message from the Core door.<br><br><b>Mission:</b> Decode: 3-15-4-5. What does it spell?",
            options: ["CODE", "CIDE", "COBE", "CADE"],
            answer: "CODE",
            explanation: "3=C, 15=O, 4=D, 5=E. The message is CODE."
        },
        {
            type: "mcq",
            question: "<b>Tool: Double-Shift Cipher</b><br><i>How it works:</i> This cipher wheel shifts every letter TWO steps forward to hide it. To decode, shift every letter TWO steps back.<br><br><b>Mission:</b> A note on the Core door reads: H-T-Q-I. What word does it decode to?",
            options: ["FROG", "TOAD", "HTQI", "JUMP"],
            answer: "FROG",
            explanation: "Shift each letter back two: H back to F, T back to R, Q back to O, I back to G. The note says FROG."
        },
        {
            type: "text",
            question: "<b>Tool: Twin-Star Vault</b><br><i>How it works:</i> The star is one mystery digit, and here it appears twice inside a two-digit number — so the number is 11, 22, 33... style, and it is added to ITSELF.<br><br><b>Mission:</b> The vault shows: ★★ + ★★ = 88. What digit is the star?",
            answer: "4",
            explanation: "Try 44: 44 + 44 = 88. It works, so the star is 4."
        },
        {
            type: "text",
            question: "<b>Tool: Mirror-Star Vault</b><br><i>How it works:</i> Now the star appears in the TENS place of one number and the ONES place of another. Write both numbers with a test digit and check the sum.<br><br><b>Mission:</b> The vault shows: ★7 + 7★ = 132. What digit is the star?",
            answer: "5",
            explanation: "Try 5: 57 + 75 = 132. It works, so the star is 5. (Algebra check: the two numbers always add to 77 + 11 x star; 132 - 77 = 55, and 55 / 11 = 5.)"
        },
        {
            type: "mcq",
            question: "<b>Tool: Three-Clue Keypad — Core Edition</b><br><i>How it works:</i> Same keypad attack as upstairs: pin down the digits the clues name directly, then let the total-sum clue reveal the last one.<br><br><b>Mission:</b> A 3-digit code has these clues: (1) The three digits add up to 15. (2) The first digit is 7. (3) The last digit is 4 LESS than the first digit. What is the code?",
            options: ["753", "735", "573", "375"],
            answer: "753",
            explanation: "First digit is 7. Last digit is 7 - 4 = 3. Middle digit: 15 - 7 - 3 = 5. The code is 753."
        },

        // --- PHASE 7: DEBUGGING LAB LEVEL 2 (Questions 31 - 35) ---
        {
            type: "text",
            question: "<b>Tool: Nested Loops</b><br><i>How it works:</i> A loop inside a loop multiplies: the INNER loop runs in full every single time the OUTER loop repeats.<br><br><b>Mission:</b> Bolt runs: REPEAT 2 times: (REPEAT 3 times: (Beep once)). How many beeps does he make in total?",
            answer: "6",
            explanation: "The inner loop beeps 3 times, and the outer loop runs it twice: 3 x 2 = 6 beeps."
        },
        {
            type: "mcq",
            question: "<b>Tool: Bug Hunt — The OR Rule</b><br><i>How it works:</i> With an OR inside an IF, the THEN action fires when ANY ONE of the conditions is true — even if the others are false.<br><br><b>Mission:</b> Bolt's program says: IF battery is low OR the door is locked THEN call Marty, ELSE keep exploring. Right now Bolt's battery is FULL, but the door IS locked. What does Bolt do?",
            options: ["Call Marty", "Keep exploring", "Charge his battery", "Go to sleep"],
            answer: "Call Marty",
            explanation: "The OR condition needs only one true part: the door is locked, so the THEN branch fires — Bolt calls Marty."
        },
        {
            type: "text",
            question: "<b>Tool: Simulate the Program</b><br><i>How it works:</i> Debugging means running the program in your head, exactly as written, and counting what it ACTUALLY does — not what it was supposed to do.<br><br><b>Mission:</b> A program meant to collect 12 bolts says: REPEAT 3 times: (Pick up 3 bolts). How many bolts does this program actually collect?",
            answer: "9",
            explanation: "3 repeats x 3 bolts = 9 bolts. The program falls 3 short of its 12-bolt target — that shortfall is the bug to fix."
        },
        {
            type: "mcq",
            question: "<b>Tool: Bug Hunt — The Last Step</b><br><i>How it works:</i> Some steps can only happen after everything they depend on is done. That step must sit at the END of the program.<br><br><b>Mission:</b> Bolt's message program has four steps: Turn on the radio, Type the message, Charge the antenna battery, Send the message. Which step MUST come last?",
            options: ["Turn on the radio", "Type the message", "Charge the antenna battery", "Send the message"],
            answer: "Send the message",
            explanation: "Sending needs the radio on, the message typed AND the antenna charged. Everything depends on nothing else — but sending depends on all of them, so it must be last."
        },
        {
            type: "text",
            question: "<b>Tool: Sensor Sweep — Multiples</b><br><i>How it works:</i> Apply the rule only to items matching the condition — this time, numbers that are multiples of 3 (3, 6, 9...).<br><br><b>Mission:</b> Bolt checks doors numbered 1 to 9. His rule: knock THREE times on every door whose number is a multiple of 3, and never knock on the others. How many knocks in total?",
            answer: "9",
            explanation: "Multiples of 3 between 1 and 9: doors 3, 6 and 9 — 3 doors. 3 doors x 3 knocks = 9 knocks."
        },

        // --- PHASE 8: THE CORE CHAMBER FINALE (Questions 36 - 40) ---
        {
            type: "text",
            question: "<b>Core Lock 1: The Deep Panel</b><br><i>How it works:</i> The five-switch panel one last time (16, 8, 4, 2, 1) — the Core's master power reading.<br><br><b>Mission:</b> The master panel shows 1-0-1-1-0. How much power is flowing into the Core?",
            answer: "22",
            explanation: "The 16, 4 and 2 switches are ON: 16 + 4 + 2 = 22 power."
        },
        {
            type: "mcq",
            question: "<b>Core Lock 2: The Triple Chain</b><br><i>How it works:</i> Three gates in a row this time. Finish each gate before moving to the next, and carry the result forward.<br><br><b>Mission:</b> Signals A (ON) and B (OFF) enter an OR gate. That result meets signal C (ON) at an AND gate. That result passes through a NOT gate. What is the FINAL output?",
            options: ["ON", "OFF"],
            answer: "OFF",
            explanation: "OR: ON or OFF gives ON. AND: ON and ON gives ON. NOT flips it to OFF. Final output: OFF."
        },
        {
            type: "mcq",
            question: "<b>Core Lock 3: The Long Roll</b><br><i>How it works:</i> Track x and y separately through a whole journey: right adds to x, left subtracts; up adds to y, down subtracts.<br><br><b>Mission:</b> Bolt starts at (2, 1) and rolls: 3 right, 2 up, 1 left, 3 up. Where does he end?",
            options: ["(4, 6)", "(6, 6)", "(4, 4)", "(2, 6)"],
            answer: "(4, 6)",
            explanation: "x: 2 + 3 - 1 = 4. y: 1 + 2 + 3 = 6. Bolt ends at (4, 6)."
        },
        {
            type: "text",
            question: "<b>Core Lock 4: The Tens Vault</b><br><i>How it works:</i> The letter A is a mystery digit sitting in the TENS place of a number, and then added once more on its own: A0 means A x 10.<br><br><b>Mission:</b> The Core vault shows: A0 + A = 55. What digit is A?",
            answer: "5",
            explanation: "Try A = 5: 50 + 5 = 55. It works. (Algebra check: A0 + A is 11 x A, and 55 / 11 = 5.)"
        },
        {
            type: "mcq",
            question: "<b>Core Lock 5: The Master Switch</b><br><i>How it works:</i> The final lock: three switches A, B and C, and the Core only wakes when ALL of these are true at once: A is ON, B is DIFFERENT from A, and C is ON.<br><br><b>Mission:</b> Which switch setting wakes the Core and completes the rescue?",
            options: ["A ON, B ON, C ON", "A ON, B OFF, C ON", "A OFF, B ON, C ON", "A ON, B OFF, C OFF"],
            answer: "A ON, B OFF, C ON",
            explanation: "Check the winner against every rule: A is ON (yes), B is OFF which is different from A (yes), C is ON (yes). All three rules true — the Core Chamber lights up. Mission complete: Bolt rescued the lab!"
        }
    ]
};
