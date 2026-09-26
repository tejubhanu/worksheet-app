const missionConfig = {
    themeTitle: "⚡ Pokémon: The Legendary Champion League",
    themeColor: "linear-gradient(135deg, #1d4ed8 0%, #b91c1c 50%, #eab308 100%)", // Pokéball Red, Masterball Blue & Electric Yellow
    themeIcon: "⚡",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- Phase 1: Pewter & Cerulean Gyms (Warm-Up Strategies) ---
        {
            type: "text",
            question: "<b>Advanced Strategy: Bridging Through 100!</b><br>When adding numbers close to 100, break apart the second number to make 100 first, then add what remains.<br><i>Example: To solve 97 + 25, take 3 from 25 to make 97 + 3 = 100, then add the remaining 22 to get 122.</i><br><br><b>Story:</b> Marty and Pikachu enter the Pewter City Gym. Pikachu has 95 Electric power points and collects 36 extra charge points from a Thunderstone. Using Bridging Through 100, what is Pikachu's total power score?",
            answer: "131",
            hint: "Take 5 from 36 to turn 95 into 100. Then add the remaining 31!",
            explanation: "95 + 36 = (95 + 5) + 31 = 100 + 31 = 131 power points."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Counting Up in Chunks for Subtraction!</b><br>Count up from the smaller number to the nearest hundred first, then to the target number.<br><i>Example: To solve 215 - 188, count up from 188: +12 to reach 200, then +15 to reach 215. Total = 12 + 15 = 27.</i><br><br><b>Story:</b> Charizard needs 314 Flame units to blast through Onix's Rock Wall, but currently has 278 units. Count UP from 278 to 314. How many more Flame units does Charizard need?",
            answer: "36",
            hint: "Count from 278 up to 300 (+22), then from 300 to 314 (+14). Add 22 + 14!",
            explanation: "278 to 300 is 22. 300 to 314 is 14. 22 + 14 = 36 Flame units."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Composite Perimeter!</b><br>Perimeter is the total distance all the way around the outside edge of a shape. Add all side lengths together.<br><i>Example: A shape with outer sides 4 in, 5 in, 6 in, 3 in, and 2 in has a perimeter of 4 + 5 + 6 + 3 + 2 = 20 in.</i><br><br><b>Story:</b> Misty builds a custom training pool for Starmie. The outer sides measure 14 feet, 9 feet, 8 feet, 6 feet, 6 feet, and 17 feet. What is the total perimeter around the pool?",
            options: ["50 feet", "58 feet", "60 feet", "64 feet"],
            answer: "60 feet",
            hint: "Add all 6 sides together: 14 + 9 + 8 + 6 + 6 + 17.",
            explanation: "14 + 9 = 23, + 8 = 31, + 6 = 37, + 6 = 43, + 17 = 60 feet."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Near-Double Compensation!</b><br>To add two numbers right next to each other, double the smaller number and add 1.<br><i>Example: To solve 36 + 37, double 36 to get 72, then add 1 = 73.</i><br><br><b>Story:</b> Marty picks up 58 Poké Balls and Arjun picks up 59 Poké Balls at the Cerulean City Mart. Use Near Doubles (double 58, then add 1) to find how many Poké Balls they have in total.",
            answer: "117",
            hint: "Double 58 is 116. Now add 1 more!",
            explanation: "58 + 59 = (58 + 58) + 1 = 116 + 1 = 117 Poké Balls."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Rounding to the Nearest 100!</b><br>Look at the tens digit. If it is 50 or higher, round UP to the next hundred. If it is 49 or lower, round DOWN.<br><i>Example: 340 rounds down to 300. 360 rounds up to 400.</i><br><br><b>Story:</b> Marty's Pokédex scans a wild Gyarados with 849 Combat Power. What is 849 rounded to the nearest 100?",
            options: ["800", "850", "900", "1,000"],
            answer: "800",
            hint: "Look at the tens digit (49). Since 49 is less than 50, round down!",
            explanation: "849 is closer to 800 than 900, so it rounds down to 800."
        },

        // --- Phase 2: Vermilion & Celadon Gyms (Multiplication & Division) ---
        {
            type: "text",
            question: "<b>Advanced Strategy: Distributive Chunking for Multiplication!</b><br>Break the larger factor into Tens and Ones, multiply separately, then add them together.<br><i>Example: 7 x 13 = (7 x 10) + (7 x 3) = 70 + 21 = 91.</i><br><br><b>Story:</b> Lt. Surge trains 8 Raichu squads. Each squad requires 15 Volt Badges. Using Distributive Chunking (8 x 10 plus 8 x 5), how many Volt Badges are needed in total?",
            answer: "120",
            hint: "8 x 10 = 80, and 8 x 5 = 40. Add 80 + 40!",
            explanation: "8 x 15 = (8 x 10) + (8 x 5) = 80 + 40 = 120 Volt Badges."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Prime vs. Composite Numbers!</b><br>Prime numbers only have 2 factors: 1 and itself. Composite numbers can be split evenly into equal groups.<br><i>Example: 9 is composite (3 x 3). 11 is prime.</i><br><br><b>Story:</b> Erika inspects a box of Grass-type Berries: 13, 19, 25, and 31. Which of these numbers is a COMPOSITE number that can be divided into equal groups?",
            options: ["13", "19", "25", "31"],
            answer: "25",
            hint: "Which number can be made by multiplying 5 by itself? (5 x 5 = ?)",
            explanation: "25 is composite because 5 x 5 = 25. The others (13, 19, 31) are all prime."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Chunking Division!</b><br>Split a dividend into two easy parts that both divide cleanly.<br><i>Example: 84 / 4 -> (40 / 4) + (44 / 4) = 10 + 11 = 21.</i><br><br><b>Story:</b> Marty and Ash have 96 Hyper Potions to distribute equally among 6 Pokémon Centers. Using chunking (60 / 6 + 36 / 6), how many Potions does each Center get?",
            answer: "16",
            hint: "Divide 60 by 6 (=10), then divide 36 by 6 (=6). Add 10 + 6!",
            explanation: "60 / 6 = 10 and 36 / 6 = 6. 10 + 6 = 16 Potions per Center."
        },
        {
            type: "mcq",
            question: "<b>Advanced Strategy: The 'Add Two Zeros' Trick for 100s!</b><br>When multiplying any whole number by 100, add two zeros to the end of the number.<br><i>Example: 9 x 100 = 900.</i><br><br><b>Story:</b> Professor Oak sends 18 Pokemon Researchers into the wild. Each researcher receives 100 Ultra Balls. What is 18 x 100?",
            options: ["180", "1,800", "18,000", "10,800"],
            answer: "1,800",
            hint: "Write 18 and attach two zeros to the right!",
            explanation: "18 x 100 = 1,800 Ultra Balls."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Halving and Doubling for Multiplication!</b><br>Cut one factor in half and double the other to make the multiplication simple!<br><i>Example: 12 x 15 -> Cut 12 in half (6), double 15 (30) -> 6 x 30 = 180.</i><br><br><b>Story:</b> Marty calculates total EXP gained from 14 battles yielding 25 EXP each: 14 x 25. Cut 14 in half (7) and double 25 (50). Now calculate 7 x 50. What is the total EXP?",
            answer: "350",
            hint: "Multiply 7 x 50 (think: 7 x 5 = 35, then add a zero).",
            explanation: "14 x 25 = 7 x 50 = 350 EXP."
        },

        // --- Phase 3: Fuchsia & Saffron Gyms (Geometry & Spatial Reasoning) ---
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: Shape Elimination!</b><br>Cross out options that fail geometric properties until the correct shape remains.<br><i>Example: A 4-sided polygon with opposite parallel sides and no right angles is a parallelogram.</i><br><br><b>Story:</b> Koga hides a Ninja Scroll inside a 4-sided geometric display case. Clue 1: All 4 sides are equal in length. Clue 2: None of its angles are 90-degree right angles. What is the shape of the case?",
            options: ["Rectangle", "Trapezoid", "Rhombus", "Square"],
            answer: "Rhombus",
            hint: "A square has 4 equal sides WITH right angles. If angles are NOT 90 degrees, it's a Rhombus!",
            explanation: "A Rhombus has 4 equal side lengths without requiring 90-degree right angles."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Complex Two-Attribute Patterns!</b><br>Track changes in two different features (like color and shape, or size and direction) at the same time.<br><i>Example: Big Red, Small Blue, Big Red, Small Blue...</i><br><br><b>Story:</b> Sabrina arranges Psychic Teleportation tiles: Gold Star, Silver Circle, Gold Star, Silver Circle... What is the 7th tile in her pattern?",
            options: ["Gold Star", "Silver Circle", "Gold Circle", "Silver Star"],
            answer: "Gold Star",
            hint: "Positions 1, 3, 5, 7 start each new repeating pair!",
            explanation: "The pattern repeats every 2 tiles (1:Gold Star, 2:Silver Circle...). Tile 7 is Gold Star."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Area of an L-Shaped Floor!</b><br>Split an L-shape into two separate rectangles, calculate both areas (Length x Width), then add them together.<br><i>Example: Section 1 is 3x4 (12) and Section 2 is 5x2 (10). Total Area = 12 + 10 = 22.</i><br><br><b>Story:</b> Marty helps Sabrina lay psychic floor mats. Area 1 is 7 feet by 3 feet (21 sq ft). Area 2 is 5 feet by 4 feet (20 sq ft). What is the total combined Area?",
            answer: "41",
            hint: "Add the two area amounts together: 21 + 20.",
            explanation: "Area = (7 x 3) + (5 x 4) = 21 + 20 = 41 square feet."
        },
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: Multi-Constraint Sandwich Clues!</b><br>Narrow down numbers using boundaries, parity (even/odd), and divisibility.<br><i>Example: An odd number between 20 and 30 that divides by 5 is 25.</i><br><br><b>Story:</b> Marty tries to guess Alakazam's secret IQ score badge. Rod the AI says: 'It is an EVEN number between 70 and 80 that is a multiple of 8.' What is the number?",
            options: ["72", "74", "76", "78"],
            answer: "72",
            hint: "Which number between 70 and 80 is in the 8 times table? (8 x 9 = ?)",
            explanation: "8 x 9 = 72, which is even and sits between 70 and 80."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Growing Pattern Multiplier Rules!</b><br>Identify the multiplier or addition jump between terms in a growing sequence.<br><i>Example: 3, 6, 12, 24... doubles (x2) each step. Next is 48.</i><br><br><b>Story:</b> Psychic energy waves grow in frequency: 4 Hz, 12 Hz, 36 Hz, ___ Hz. The sequence multiplies by 3 each step. What is the next frequency value (36 x 3)?",
            answer: "108",
            hint: "Multiply 36 by 3 (think: 30 x 3 = 90, 6 x 3 = 18. 90 + 18 = ?).",
            explanation: "The pattern multiplies by 3 each step. 36 x 3 = 108 Hz."
        },

        // --- Phase 4: Cinnabar & Viridian Gyms (Fractions & Multi-Step Time) ---
        {
            type: "text",
            question: "<b>Advanced Concept: Finding Three-Quarters (3/4) of a Number!</b><br>Divide the total by 4 to find 1/4, then multiply that result by 3!<br><i>Example: 3/4 of 16 -> 16 / 4 = 4, then 4 x 3 = 12.</i><br><br><b>Story:</b> Blaine has 28 Fire-type badges. He awards 3/4 of them to elite trainers. Calculate (28 / 4) x 3. How many badges did Blaine award?",
            answer: "21",
            hint: "First divide 28 by 4 (= 7). Then multiply 7 by 3!",
            explanation: "28 / 4 = 7. 7 x 3 = 21 badges awarded."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: 2-Digit Addition with Carrying!</b><br>Add the ones column first (regrouping tens), then add the tens column.<br><i>Example: 57 + 38 -> Ones: 7 + 8 = 15 (write 5 carry 1). Tens: 5 + 3 + 1 = 9 -> 95.</i><br><br><b>Story:</b> Marty collects 67 Magmar embers and Arjun collects 78 Arcanine flames. What is the total combined count of fire items?",
            answer: "145",
            hint: "Add ones: 7 + 8 = 15. Add tens: 60 + 70 + 10 = 140. Combine 140 + 5!",
            explanation: "67 + 78 = 145 fire items."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Three-Item Average Calculation!</b><br>Add all three numbers together, then divide the total sum by 3.<br><i>Example: Average of 10, 20, 30 -> Sum = 60. 60 / 3 = 20.</i><br><br><b>Story:</b> Giovanni measures speed stats for three Ground Pokémon: 110, 130, and 180. Add them up (420), then divide by 3 to find their average speed.",
            answer: "140",
            hint: "Divide 420 by 3 (think: 42 / 3 = 14, then add a zero).",
            explanation: "110 + 130 + 180 = 420. 420 / 3 = 140 average speed."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Working Backward with Two Steps!</b><br>Undo operations in reverse order: subtract added amounts, then divide multiplied amounts.<br><i>Example: (X + 4) x 2 = 20 -> 20 / 2 = 10, then 10 - 4 = 6.</i><br><br><b>Story:</b> Pikachu doubled his stored energy (x2) and then absorbed 10 bonus units (+10), reaching 50 total units. Work backward: (50 - 10) / 2. How much energy did Pikachu start with?",
            answer: "20",
            hint: "Subtract 10 from 50 (= 40). Then divide 40 by 2!",
            explanation: "50 - 10 = 40. 40 / 2 = 20 starting units."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Comparing Non-Unit Fractions!</b><br>Convert fractions to percents or compare against a half (1/2) benchmark.<br><i>Example: 4/5 is larger than 2/3 because 4/5 is 80% while 2/3 is ~67%.</i><br><br><b>Story:</b> Marty's Pidgeot flies across 4/5 of Kanto, while Fearow flies across 3/4 of Kanto. Which Pokémon covered a GREATER fraction of the region?",
            options: ["Pidgeot (4/5)", "Fearow (3/4)"],
            answer: "Pidgeot (4/5)",
            hint: "4/5 equals 80/100 (80%), whereas 3/4 equals 75/100 (75%). Which is bigger?",
            explanation: "4/5 (80%) > 3/4 (75%). Pidgeot covered a greater fraction."
        },

        // --- Phase 5: Victory Road (Data Analysis: Mode, Median, Range) ---
        {
            type: "text",
            question: "<b>Advanced Concept: Median of an Even Data Set!</b><br>Order numbers from least to greatest. If there are two middle numbers, find the exact midpoint between them!<br><i>Example: For [10, 14, 18, 22], middle numbers are 14 and 18. Midpoint = 16.</i><br><br><b>Story:</b> Marty records Machamp's punch speeds on Victory Road: 14 mph, 18 mph, 22 mph, and 30 mph. Look at the two middle numbers (18 and 22). What is the Median value sitting right between them?",
            answer: "20",
            hint: "What number is halfway between 18 and 22?",
            explanation: "The middle two values are 18 and 22. Halfway between them is 20."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Multiply by 25 (Multiply by 100 then Divide by 4)!</b><br>To multiply a number by 25 easily, multiply it by 100 first, then divide by 4!<br><i>Example: 12 x 25 -> 12 x 100 = 1200, then 1200 / 4 = 300.</i><br><br><b>Story:</b> Arjun calculates total Max Revive points for 12 Pokémon: 12 x 25. First calculate 12 x 100 = 1200. What is 1200 divided by 4?",
            answer: "300",
            hint: "12 / 4 = 3, so 1200 / 4 = 300!",
            explanation: "12 x 100 = 1200. 1200 / 4 = 300."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Multi-Value Range!</b><br>Range is the difference between the Largest value and Smallest value in a set (Max - Min).<br><i>Example: For [15, 30, 45, 80], Range = 80 - 15 = 65.</i><br><br><b>Story:</b> Ash measures wild Pokémon HP levels on Victory Road: 42, 28, 95, and 61. Subtract the smallest HP (28) from the largest HP (95) to find the Range.",
            answer: "67",
            hint: "Subtract 95 - 28 (think: 95 - 20 = 75, then 75 - 8 = 67).",
            explanation: "95 - 28 = 67 HP Range."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Subtraction by Rounding to 50!</b><br>To subtract 49 easily, subtract 50 first, then add 1 back!<br><i>Example: 135 - 49 -> 135 - 50 = 85, then 85 + 1 = 86.</i><br><br><b>Story:</b> Solve 162 - 49 for Victory Road rock clearance time. First do 162 - 50 (which is 112), then add 1 back. What is the final answer?",
            answer: "113",
            hint: "162 - 50 = 112. Now add 1 back to 112!",
            explanation: "162 - 50 = 112. 112 + 1 = 113."
        },
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: 4-Item Comparative Chain Deduction!</b><br>Link statements together to rank items from highest to lowest.<br><i>Example: W > X, X > Y, Y > Z -> W is highest, Z is lowest.</i><br><br><b>Story:</b> In a battle sprint, Dragonite is faster than Lapras. Lapras is faster than Snorlax. Snorlax is faster than Blastoise. Which Pokémon is the SLOWEST overall?",
            options: ["Dragonite", "Lapras", "Snorlax", "Blastoise"],
            answer: "Blastoise",
            hint: "Follow the chain down: Dragonite > Lapras > Snorlax > Blastoise. Who is last?",
            explanation: "Dragonite > Lapras > Snorlax > Blastoise. Blastoise is at the bottom."
        },

        // --- Phase 6: Indigo Plateau - Elite Four (Logic & Deduction) ---
        {
            type: "text",
            question: "<b>Advanced Concept: Combinations across Three Categories!</b><br>Multiply the number of options in Category 1 x Category 2 x Category 3.<br><i>Example: 2 caps, 3 shirts, 4 shoes = 2 x 3 x 4 = 24 outfits.</i><br><br><b>Story:</b> Marty creates custom Pokémon battle gear. He has 4 battle vests, 2 glove types, and 3 mega-ring colors. How many unique gear combinations can he make (4 x 2 x 3)?",
            answer: "24",
            hint: "Multiply 4 x 2 = 8, then multiply 8 x 3!",
            explanation: "4 x 2 x 3 = 24 unique gear combinations."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Lines of Symmetry on Regular Polygons!</b><br>A regular polygon (equal sides and angles) has as many lines of symmetry as it has sides!<br><i>Example: A regular pentagon (5 sides) has 5 lines of symmetry.</i><br><br><b>Story:</b> Lorelei examines an ice crystal shaped like a regular Hexagon (6 equal sides). How many lines of symmetry does a regular Hexagon have?",
            options: ["4", "5", "6", "8"],
            answer: "6",
            hint: "A regular shape with 6 equal sides has 6 lines of symmetry!",
            explanation: "Regular polygons have lines of symmetry equal to their number of sides (6)."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: The Triple-Double Trick for x8!</b><br>To multiply any number by 8, double it three times in a row!<br><i>Example: 9 x 8 -> Double 9 (18), double 18 (36), double 36 (72).</i><br><br><b>Story:</b> Bruno's Onix smashes 6 boulders yielding 8 Stardust each: 6 x 8. Use Triple-Double: Double 6 is 12, double 12 is 24, now double 24. What is 6 x 8?",
            answer: "48",
            hint: "Double 24 (24 + 24 = ?).",
            explanation: "Double 6 = 12, double 12 = 24, double 24 = 48. 6 x 8 = 48."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Crossing Hour Markers in Elapsed Time!</b><br>Calculate elapsed minutes by counting to the top of the hour first, then adding the remaining minutes.<br><i>Example: From 3:40 PM to 4:25 PM is 20 min (to 4:00) + 25 min = 45 minutes.</i><br><br><b>Story:</b> Lance's Dragon-type battle starts at 4:45 PM and finishes at 5:30 PM. How many total minutes did the match last?",
            options: ["30 minutes", "40 minutes", "45 minutes", "50 minutes"],
            answer: "45 minutes",
            hint: "Count from 4:45 PM to 5:00 PM (15 min), then add 30 min past 5:00!",
            explanation: "15 minutes (to 5:00) + 30 minutes = 45 minutes elapsed."
        },
        {
            type: "mcq",
            question: "<b>Advanced Strategy: Dual-Inverse Verification!</b><br>Check multiplication using division to verify correctness.<br><i>Example: Check 15 x 4 = 60 by verifying 60 / 4 = 15.</i><br><br><b>Story:</b> Agatha calculates that 28 x 3 = 84 Ghost energy points. Verify her math by dividing 84 by 3. Does it equal 28?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "Divide 84 by 3. Does it give 28?",
            explanation: "Yes! 84 / 3 = 28, confirming Agatha's calculation is correct."
        },

        // --- Phase 7: Boss Battle - Legendary Mewtwo Strike (Multi-Step & Equations) ---
        {
            type: "mcq",
            question: "<b>Advanced Concept: Simplified Probability Fractions!</b><br>Probability = Favorable Choices / Total Choices. Reduce the fraction to simplest form.<br><i>Example: 4 green balls out of 12 total = 4/12 = 1 in 3 chance.</i><br><br><b>Story:</b> Mewtwo creates 10 psychic barrier spheres, but only 2 contain real access keys. What is the simplified probability of picking a real key on the first attempt?",
            options: ["1 in 5 chance", "1 in 4 chance", "2 in 5 chance", "1 in 10 chance"],
            answer: "1 in 5 chance",
            hint: "Simplify 2 out of 10 (2/10 -> divide numerator and denominator by 2).",
            explanation: "2 out of 10 simplifies to 1/5, or a 1 in 5 chance."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Grouping Numbers into Tens & Hundreds!</b><br>Combine pairs of numbers that make clean tens/hundreds first.<br><i>Example: 35 + 48 + 15 + 22 -> (35 + 15 = 50) + (48 + 22 = 70) = 120.</i><br><br><b>Story:</b> Marty combines four energy cells to pierce Mewtwo's shield: 44 + 37 + 16 + 23. Group (44 + 16 = 60) and (37 + 23 = 60). What is the total combined energy score?",
            answer: "120",
            hint: "Add 60 + 60!",
            explanation: "(44 + 16) + (37 + 23) = 60 + 60 = 120 energy units."
        },
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: Multi-Constraint 'NOT' Grid Elimination!</b><br>Cross out options ruled out by negative clues to reveal the true answer.<br><i>Example: 'Not blue, not red, not small' leaves 'Big Green'.</i><br><br><b>Story:</b> Mewtwo's weak spot is hidden in one of four chambers: Chamber A, Chamber B, Chamber C, Chamber D. Clue 1: It is NOT in Chamber A. Clue 2: It is NOT in Chamber B. Clue 3: It is in an ODD-numbered position (A=1, B=2, C=3, D=4). Where is the weak spot?",
            options: ["Chamber A", "Chamber B", "Chamber C", "Chamber D"],
            answer: "Chamber C",
            hint: "Cross out A and B. Position C is #3 (odd) and D is #4 (even). Which is odd?",
            explanation: "Eliminating A and B leaves C (#3, odd) and D (#4, even). Chamber C is correct."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Finding the Median of 5 Values!</b><br>Sort all 5 values in order from smallest to largest and pick the 3rd (middle) value.<br><i>Example: For [12, 19, 24, 31, 40], the median is 24.</i><br><br><b>Story:</b> Sort Mewtwo's 5 barrier recovery times in seconds: 42, 19, 55, 33, and 28. Put them in order [19, 28, 33, 42, 55]. What is the Median value?",
            answer: "33",
            hint: "Look at the sorted list: 19, 28, 33, 42, 55. Which number is right in the center?",
            explanation: "In the sorted list [19, 28, 33, 42, 55], 33 sits right in the middle."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Three-Step Multi-Operation Word Problem!</b><br>Execute operations in precise sequence: Multiply first, Add second, Subtract third.<br><i>Example: 4 x 6 = 24. Add 10 = 34. Subtract 5 = 29.</i><br><br><b>Story:</b> Charizard carries 4 packs of Fire Energy with 8 cards in each pack (4 x 8 = 32). Marty gives him 10 bonus cards (32 + 10 = 42). Mewtwo's Disable attack removes 7 cards. How many cards remain (42 - 7)?",
            answer: "35",
            hint: "Step 1: 4 x 8 = 32. Step 2: 32 + 10 = 42. Step 3: 42 - 7 = ?",
            explanation: "4 x 8 = 32. 32 + 10 = 42. 42 - 7 = 35 cards remaining."
        },

        // --- Phase 8: Hall of Fame Victory Celebration (Graphs, Money & Master Logic) ---
        {
            type: "text",
            question: "<b>Advanced Concept: Comparative Bar Graph Reading!</b><br>Subtract the lower bar value from the higher bar value to calculate the margin.<br><i>Example: High bar = 90, Low bar = 42 -> Difference = 90 - 42 = 48.</i><br><br><b>Story:</b> In the Hall of Fame record book, Marty's team scored 94 victory points while Rival Blue scored 48 points. Subtract 48 from 94 to find Marty's winning point margin.",
            answer: "46",
            hint: "Subtract 94 - 48 (think: 94 - 40 = 54, then 54 - 8 = 46).",
            explanation: "94 - 48 = 46 victory points margin."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Multiply by 99 (Multiply by 100 minus 1 group)!</b><br>To multiply any number by 99, multiply by 100 first, then subtract 1 group of that number!<br><i>Example: 8 x 99 -> (8 x 100) - 8 = 800 - 8 = 792.</i><br><br><b>Story:</b> Professor Oak orders victory confetti cannons: 6 x 99. First calculate 6 x 100 = 600. Now subtract 6 from 600. What is 6 x 99?",
            answer: "594",
            hint: "Subtract 6 from 600 (600 - 6).",
            explanation: "6 x 100 = 600. 600 - 6 = 594 confetti bursts."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Multi-Item Money Change Calculation!</b><br>Multiply item cost by quantity, then subtract from total money handed to cashier.<br><i>Example: 4 items at $6 each = $24. Pay with $50 bill -> $50 - $24 = $26 change.</i><br><br><b>Story:</b> Marty buys 4 Champion T-shirts at the Indigo Plateau shop for $9 each ($4 x $9 = $36 total). He pays with a $50 bill. How much change does he get back ($50 - $36)?",
            answer: "14",
            hint: "Subtract $36 from $50 ($50 - $36).",
            explanation: "4 x $9 = $36 total cost. $50 - $36 = $14 change returned."
        },
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: 3-Person Grid Deductive Logic!</b><br>Eliminate taken options so each person lands on their unique correct match.<br><i>Example: Person A gets Item 1, Person B doesn't get Item 2 -> Deduce all assignments.</i><br><br><b>Story:</b> Three champions (Marty, Ash, and Red) pick starter statues (Charizard, Blastoise, Venusaur). Clue 1: Ash takes Charizard. Clue 2: Red does NOT take Venusaur. Which statue does Red receive?",
            options: ["Charizard", "Blastoise", "Venusaur"],
            answer: "Blastoise",
            hint: "Ash took Charizard. Red didn't take Venusaur. So Red MUST take...?",
            explanation: "Charizard is taken by Ash. Red cannot take Venusaur, so Red gets Blastoise."
        },
        {
            type: "text",
            question: "<b>Grand Finale: Master League Total Accumulation!</b><br>Multiply items per phase by total number of phases to find the grand championship score.<br><i>Example: 12 trophies x 8 phases = 96 total trophies.</i><br><br><b>Story:</b> Marty and Team Alpha win 16 victory trophies in each of the 8 Pokémon League phases! Calculate 8 x 16 to find their grand total Hall of Fame trophy count!",
            answer: "128",
            hint: "Calculate 8 x 16 (think: 8 x 10 = 80, 8 x 6 = 48. Add 80 + 48!).",
            explanation: "8 x 16 = (8 x 10) + (8 x 6) = 80 + 48 = 128 total trophies! Pokémon Master Champion!"
        }
    ]
};
