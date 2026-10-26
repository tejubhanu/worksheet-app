const missionConfig = {
    themeTitle: "🧩 Mind Fortress: 40-Level Math & Logic Academy",
    themeColor: "linear-gradient(135deg, #0284c7 0%, #4f46e5 50%, #9333ea 100%)", // Sapphire Blue, Royal Indigo & Cyber Purple
    themeIcon: "🧠",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- PHASE 1: ADVANCED NUMBER SENSE & MENTAL SPEED (Questions 1 - 5) ---
        {
            type: "text",
            question: "<b>Strategy: Bridging Through 100!</b><br><i>What it means:</i> When adding numbers close to 100, split the smaller number into two parts. Use the first part to round the big number up to 100, then add what is left over.<br><i>Example: To add 97 + 25, take 3 from 25 to make (97 + 3 = 100), then add the remaining 22 to get 122.</i><br><br><b>Story:</b> Marty is loading power cells into the Mind Fortress generator. Cell A has 94 units of energy and Cell B has 38 units. Marty breaks 38 into 6 and 32 (94 + 6 = 100, then 100 + 32). How many total energy units does he load?",
            answer: "132",
            hint: "Take 6 away from 38 to turn 94 into 100. Then add the leftover 32!",
            explanation: "94 + 38 = (94 + 6) + 32 = 100 + 32 = 132 energy units."
        },
        {
            type: "text",
            question: "<b>Strategy: Multi-Step Counting Up for Subtraction!</b><br><i>What it means:</i> Subtraction measures the distance between two numbers. Start at the smaller number and count UP in friendly landmark jumps (to the nearest ten or hundred first, then to the target).<br><i>Example: To solve 215 - 188, start at 188: count +12 to reach 200, then +15 to reach 215. Total = 12 + 15 = 27.</i><br><br><b>Story:</b> The fortress shield needs 325 power points to activate, but Marty's battery only has 287 points. Count UP from 287 to 300 (+13), then from 300 to 325 (+25). How many more points does he need?",
            answer: "38",
            hint: "Add your two jumps together: 13 + 25.",
            explanation: "From 287 to 300 is 13. From 300 to 325 is 25. 13 + 25 = 38 power points."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Calculating Composite Perimeter!</b><br><i>What it means:</i> <b>Perimeter</b> is the total boundary distance all the way around the outside edge of a shape. You calculate it by adding the lengths of every outer side together.<br><i>Example: A triangle with outer sides 4 in, 5 in, and 6 in has a perimeter of 4 + 5 + 6 = 15 inches.</i><br><br><b>Story:</b> Marty maps the outer security boundary of the fortress. The boundary has 6 straight sides measuring 12 ft, 8 ft, 7 ft, 5 ft, 5 ft, and 13 ft. What is the total perimeter of the boundary?",
            options: ["42 feet", "45 feet", "50 feet", "55 feet"],
            answer: "50 feet",
            hint: "Add all 6 side lengths together: 12 + 8 + 7 + 5 + 5 + 13.",
            explanation: "12 + 8 = 20, + 7 = 27, + 5 = 32, + 5 = 37, + 13 = 50 feet perimeter."
        },
        {
            type: "text",
            question: "<b>Strategy: Near-Double Compensation!</b><br><i>What it means:</i> If two numbers are right next to each other, double the smaller number and add 1 (or double the middle number!).<br><i>Example: To solve 36 + 37, double 36 to get 72, then add 1 = 73.</i><br><br><b>Story:</b> Marty collects 47 data crystals on Floor 1 and 49 data crystals on Floor 2. Use Near Doubles (double 48 to get 96, or double 47 + 2) to find the total number of crystals.",
            answer: "96",
            hint: "48 + 48 = 96 (since 48 is right between 47 and 49)!",
            explanation: "47 + 49 = (47 + 47) + 2 = 94 + 2 = 96 data crystals."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Rounding to the Nearest 100!</b><br><i>What it means:</i> Rounding simplifies numbers. Look at the tens place: if it is 50 or higher, round UP to the next 100. If it is 49 or lower, round DOWN.<br><i>Example: 340 rounds down to 300. 360 rounds up to 400.</i><br><br><b>Story:</b> Marty's scanner detects an incoming energy wave at 764 megahertz. What is 764 rounded to the nearest 100?",
            options: ["700", "750", "800", "900"],
            answer: "800",
            hint: "Look at the 64 in 764. Since 64 is 50 or bigger, round up to the next hundred!",
            explanation: "764 is closer to 800 than 700, so it rounds up to 800."
        },

        // --- PHASE 2: 3RD GRADE MULTIPLICATION & DIVISION (Questions 6 - 10) ---
        {
            type: "text",
            question: "<b>Strategy: Distributive Multiplication Chunking!</b><br><i>What it means:</i> Break a large multiplication problem into smaller, friendly parts (Tens and Ones). Multiply each part separately, then combine the products.<br><i>Example: 7 x 13 = (7 x 10) + (7 x 3) = 70 + 21 = 91.</i><br><br><b>Story:</b> Marty needs to calculate 6 x 14 energy cells. He splits 14 into (10 + 4), then calculates (6 x 10) + (6 x 4). What is the total product?",
            answer: "84",
            hint: "6 x 10 = 60. 6 x 4 = 24. Add 60 + 24!",
            explanation: "6 x 14 = (6 x 10) + (6 x 4) = 60 + 24 = 84 energy cells."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Classifying Prime vs. Composite Numbers!</b><br><i>What it means:</i> A <b>Prime number</b> has exactly two factors (1 and itself) and cannot be split into equal groups. A <b>Composite number</b> has more than two factors and can be formed by multiplying smaller whole numbers.<br><i>Example: 9 is composite because 3 x 3 = 9. 11 is prime.</i><br><br><b>Story:</b> Marty checks four security lock codes: 17, 21, 23, and 29. Which of these numbers is a COMPOSITE number that can be split into equal groups?",
            options: ["17", "21", "23", "29"],
            answer: "21",
            hint: "Which number appears in the 3 or 7 times tables? (3 x 7 = ?)",
            explanation: "21 is composite because 3 x 7 = 21. The numbers 17, 23, and 29 are all prime."
        },
        {
            type: "text",
            question: "<b>Strategy: Division Chunking!</b><br><i>What it means:</i> To divide a large number, split it into two smaller numbers that are both easy to divide by your divisor, then add the answers.<br><i>Example: 84 / 4 -> (40 / 4) + (44 / 4) = 10 + 11 = 21.</i><br><br><b>Story:</b> Marty has 96 security keys to distribute equally among 6 vault doors. He chunks 96 into (60 / 6) + (36 / 6). How many keys go to each vault door?",
            answer: "16",
            hint: "60 / 6 = 10, and 36 / 6 = 6. Add 10 + 6!",
            explanation: "60 / 6 = 10 and 36 / 6 = 6. 10 + 6 = 16 keys per door."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Multiplying by 100 ('Add Two Zeros')!</b><br><i>What it means:</i> Multiplying a whole number by 100 shifts every digit two places to the left, placing two zeros at the end of the number.<br><i>Example: 9 x 100 = 900.</i><br><br><b>Story:</b> Marty programs 14 defense drones. Each drone requires 100 micro-charges. What is 14 x 100?",
            options: ["140", "1,040", "1,400", "14,000"],
            answer: "1,400",
            hint: "Write down 14 and attach two zeros to the end!",
            explanation: "14 x 100 = 1,400 micro-charges."
        },
        {
            type: "text",
            question: "<b>Strategy: Halving and Doubling for Multiplication!</b><br><i>What it means:</i> You can double one number and cut the other number in half without changing the product! This turns tricky multiplication into mental math.<br><i>Example: 12 x 15 -> Cut 12 in half (6), double 15 (30) -> 6 x 30 = 180.</i><br><br><b>Story:</b> Solve 16 x 15 using Halving and Doubling: Cut 16 in half to get 8, and double 15 to get 30. Now multiply 8 x 30. What is the product?",
            answer: "240",
            hint: "Multiply 8 x 3 (which is 24), then add a zero to the end!",
            explanation: "16 x 15 = 8 x 30 = 240."
        },

        // --- PHASE 3: GEOMETRY & SPATIAL REASONING (Questions 11 - 15) ---
        {
            type: "mcq",
            question: "<b>Strategy: Geometric Property Elimination!</b><br><i>What it means:</i> Evaluate shapes by testing their specific definitions (number of sides, parallel lines, angle types) to eliminate impossible choices.<br><i>Example: A 4-sided polygon with opposite parallel sides and no right angles is a parallelogram.</i><br><br><b>Story:</b> Marty inspects a locked door panel. Clue 1: It is a 4-sided polygon with all 4 sides equal in length. Clue 2: Its angles are NOT 90-degree right angles. What geometric shape is the panel?",
            options: ["Rectangle", "Trapezoid", "Rhombus", "Square"],
            answer: "Rhombus",
            hint: "A square has 4 equal sides WITH right angles. If it lacks right angles, it's a rhombus!",
            explanation: "A rhombus has 4 equal side lengths but does not require 90-degree right angles."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Two-Attribute Sequence Analysis!</b><br><i>What it means:</i> Some visual patterns alternate two different traits at once (e.g., shape AND color, or rotation AND count). Identify the core repeating unit.<br><i>Example: Big Red, Small Blue, Big Red, Small Blue...</i><br><br><b>Story:</b> Marty decodes a security laser grid pattern: Up-Arrow Red, Down-Arrow Blue, Up-Arrow Red, Down-Arrow Blue... What is the 7th item in this sequence?",
            options: ["Up-Arrow Red", "Down-Arrow Blue", "Up-Arrow Blue", "Down-Arrow Red"],
            answer: "Up-Arrow Red",
            hint: "Odd positions (1, 3, 5, 7) always feature the first item in the pattern pair!",
            explanation: "The pattern repeats every 2 items. Positions 1, 3, 5, 7 are all Up-Arrow Red."
        },
        {
            type: "text",
            question: "<b>Strategy: Area of a Compound Shape!</b><br><i>What it means:</i> <b>Area</b> is the amount of flat 2D surface space inside a boundary, calculated as Length x Width. For L-shaped floors, split the shape into two separate rectangles, calculate both areas, and sum them.<br><i>Example: Section 1 is 3x4 (12) and Section 2 is 5x2 (10). Total Area = 12 + 10 = 22.</i><br><br><b>Story:</b> Marty lays solar tiles on an L-shaped roof. Rectangular Section A is 6 ft by 3 ft (Area = 18). Rectangular Section B is 4 ft by 4 ft (Area = 16). What is the total Area of the roof?",
            answer: "34",
            hint: "Add the area of Section A (18) and Section B (16) together.",
            explanation: "Area = (6 x 3) + (4 x 4) = 18 + 16 = 34 square feet."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Lines of Symmetry in Regular Polygons!</b><br><i>What it means:</i> A <b>Line of Symmetry</b> is an imaginary fold line that cuts a shape into two identical mirror-image halves. Any regular polygon (all sides and angles equal) has exactly as many lines of symmetry as it has sides!<br><i>Example: A regular pentagon (5 sides) has 5 lines of symmetry.</i><br><br><b>Story:</b> Marty inspects an opening hatch shaped like a regular Hexagon (6 equal sides). How many lines of symmetry does a regular Hexagon have?",
            options: ["4", "5", "6", "8"],
            answer: "6",
            hint: "A regular shape with 6 equal sides has a matching line of symmetry for every side!",
            explanation: "A regular hexagon has 6 lines of symmetry."
        },
        {
            type: "text",
            question: "<b>Strategy: Geometric Pattern Growth Rules!</b><br><i>What it means:</i> Analyze the mathematical operation used to jump from step to step in a growing sequence (e.g., adding an increasing number or multiplying).<br><i>Example: 2, 4, 8, 16... doubles (x2) each step. Next is 32.</i><br><br><b>Story:</b> Marty tracks pulse signals that double every step: 5 Hz, 10 Hz, 20 Hz, 40 Hz, ___ Hz. What is the next frequency in this doubling pattern?",
            answer: "80",
            hint: "Multiply the last number (40) by 2!",
            explanation: "The pattern multiplies by 2 each step. 40 x 2 = 80 Hz."
        },

        // --- PHASE 4: FRACTIONS, TIME & REVERSE ENGINEERING (Questions 16 - 20) ---
        {
            type: "text",
            question: "<b>Strategy: Non-Unit Fraction Calculation (3/4 of a set)!</b><br><i>What it means:</i> To find three-quarters (3/4) of a set, divide the total set into 4 equal groups (to find 1/4), then multiply that group size by 3.<br><i>Example: 3/4 of 16 -> 16 / 4 = 4, then 4 x 3 = 12.</i><br><br><b>Story:</b> Marty has 24 energy canisters. He uses 3/4 of them to power the main elevator. Calculate (24 / 4) x 3. How many canisters does he use?",
            answer: "18",
            hint: "First divide 24 by 4 (= 6). Then multiply 6 by 3!",
            explanation: "24 / 4 = 6. 6 x 3 = 18 energy canisters."
        },
        {
            type: "text",
            question: "<b>Strategy: Column Addition with Regrouping (Carrying)!</b><br><i>What it means:</i> When adding multi-digit numbers, sum the ones column first. If the ones sum is 10 or greater, write down the ones digit and carry the ten over to the tens column.<br><i>Example: 48 + 37 -> Ones: 8 + 7 = 15 (write 5, carry 1). Tens: 4 + 3 + 1 = 8 -> 85.</i><br><br><b>Story:</b> Marty combines two power grids: Grid A produces 58 kilowatts and Grid B produces 65 kilowatts. Calculate 58 + 65 using regrouping.",
            answer: "123",
            hint: "Add ones: 8 + 5 = 13 (write 3, carry 10). Add tens: 50 + 60 + 10 = 120. Total = 123!",
            explanation: "58 + 65 = 123 kilowatts."
        },
        {
            type: "text",
            question: "<b>Strategy: Calculating a 3-Item Average!</b><br><i>What it means:</i> An <b>Average</b> represents a central value for a set of numbers. To calculate it, sum all the values together, then divide by the total number of items in the set.<br><i>Example: Average of 4, 6, 8 -> Sum is 18. 18 / 3 = 6.</i><br><br><b>Story:</b> Marty runs three test laps around the training track. His lap times are 120 seconds, 150 seconds, and 180 seconds. Add them together (450), then divide by 3 to find his average lap time.",
            answer: "150",
            hint: "Divide 450 by 3 (think: 45 / 3 = 15, then add a zero).",
            explanation: "120 + 150 + 180 = 450. 450 / 3 = 150 seconds average."
        },
        {
            type: "text",
            question: "<b>Strategy: Two-Step Working Backward!</b><br><i>What it means:</i> To solve for an unknown starting value when given the final result, reverse every operation in backward order (addition becomes subtraction, multiplication becomes division).<br><i>Example: (X + 3) x 2 = 16 -> 16 / 2 = 8, then 8 - 3 = 5.</i><br><br><b>Story:</b> Marty had a stash of power gems. He doubled the amount (x2), then added 5 more gems (+5), ending up with 35 gems total. Work backward: (35 - 5) / 2. How many gems did he start with?",
            answer: "15",
            hint: "First undo the addition: 35 - 5 = 30. Then undo the doubling: 30 / 2 = ?",
            explanation: "35 - 5 = 30. 30 / 2 = 15 starting gems."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Comparing Fractions with Benchmark Percentages!</b><br><i>What it means:</i> Convert fractions into equivalent parts of 100 or compare them against 1/2 (50%) to see which represents a larger quantity.<br><i>Example: 1/2 (50%) is larger than 1/4 (25%).</i><br><br><b>Story:</b> Shield A covers 3/4 of the grid. Shield B covers 2/3 of the grid. Which shield covers a GREATER portion of the grid?",
            options: ["Shield A (3/4)", "Shield B (2/3)"],
            answer: "Shield A (3/4)",
            hint: "3/4 equals 75/100 (75%). 2/3 equals ~66.7%. Which is larger?",
            explanation: "3/4 = 75%, while 2/3 = 66.7%. Shield A is larger."
        },

        // --- PHASE 5: DATA ANALYSIS & STATISTICAL REASONING (Questions 21 - 25) ---
        {
            type: "text",
            question: "<b>Strategy: Finding the Median of an Even Data Set!</b><br><i>What it means:</i> The <b>Median</b> is the exact middle value in an ordered list. When there is an even number of items, put them in order and find the exact number sitting halfway between the two middle values.<br><i>Example: For [10, 14, 18, 22], middle numbers are 14 and 18. Midpoint = 16.</i><br><br><b>Story:</b> Marty records scanner readings in order: 12, 15, 19, and 24. The two middle values are 15 and 19. What is the Median value sitting halfway between them?",
            answer: "17",
            hint: "What number is directly halfway between 15 and 19?",
            explanation: "Halfway between 15 and 19 is 17 [(15 + 19) / 2 = 17]."
        },
        {
            type: "text",
            question: "<b>Strategy: Multiplying by 25 (100 / 4 Rule)!</b><br><i>What it means:</i> Since 25 is one-fourth of 100, you can multiply any number by 25 by multiplying it by 100 first, then dividing that result by 4!<br><i>Example: 6 x 25 -> 6 x 100 = 600, then 600 / 4 = 150.</i><br><br><b>Story:</b> Solve 8 x 25 using this strategy: First calculate 8 x 100 = 800. Now divide 800 by 4. What is the final answer?",
            answer: "200",
            hint: "8 divided by 4 is 2. So 800 divided by 4 is...?",
            explanation: "8 x 100 = 800. 800 / 4 = 200."
        },
        {
            type: "text",
            question: "<b>Strategy: Calculating Statistical Range!</b><br><i>What it means:</i> The <b>Range</b> measures the total spread of a data set. Calculate it by taking the Maximum (highest) value and subtracting the Minimum (lowest) value: Range = Max - Min.<br><i>Example: For scores 14, 22, 38, 45, the range is 45 - 14 = 31.</i><br><br><b>Story:</b> Marty records water pressure sensors: 34 psi, 19 psi, 58 psi, and 42 psi. Subtract the lowest value (19) from the highest value (58) to find the Range.",
            answer: "39",
            hint: "58 - 19 (think: 58 - 20 = 38, then add 1 back = 39).",
            explanation: "58 - 19 = 39 psi Range."
        },
        {
            type: "text",
            question: "<b>Strategy: Subtraction via Rounding Compensation!</b><br><i>What it means:</i> To subtract a number ending in 8 or 9 (like 48), subtract the next ten (50) instead, then add back 2 to correct your answer.<br><i>Example: To solve 65 - 19, do 65 - 20 = 45, then add 1 back = 46.</i><br><br><b>Story:</b> Marty solves 145 - 48 for chemical valve adjustments. Subtract 50 from 145 first (which gives 95), then add 2 back. What is the result?",
            answer: "97",
            hint: "145 - 50 = 95. Now add 2 back!",
            explanation: "145 - 50 = 95. 95 + 2 = 97."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Comparative Data Margin Reading!</b><br><i>What it means:</i> To find the exact difference or 'margin' between two values on a bar graph, subtract the smaller bar's value from the larger bar's value.<br><i>Example: High bar = 80, Low bar = 35 -> Difference = 80 - 35 = 45.</i><br><br><b>Story:</b> On the victory board, Marty scores 85 logic points while the benchmark score is 37 points. Subtract 37 from 85 to find Marty's winning margin.",
            options: ["42", "45", "48", "50"],
            answer: "48",
            hint: "85 - 37 (think: 85 - 30 = 55, then 55 - 7 = 48).",
            explanation: "85 - 37 = 48 points margin."
        },

        // --- PHASE 6: ADVANCED LOGICAL DEDUCTION (Questions 26 - 30) ---
        {
            type: "mcq",
            question: "<b>Strategy: 4-Step Chain Deduction!</b><br><i>What it means:</i> Link multiple comparison statements in sequential order (A > B, B > C, C > D) to establish a complete top-to-bottom ranking.<br><i>Example: W > X, X > Y, Y > Z -> W is highest, Z is lowest.</i><br><br><b>Story:</b> Shadow is faster than Sonic. Sonic is faster than Tails. Tails is faster than Knuckles. Who is the SLOWEST runner overall?",
            options: ["Shadow", "Sonic", "Tails", "Knuckles"],
            answer: "Knuckles",
            hint: "Follow the chain down: Shadow > Sonic > Tails > Knuckles. Who is at the end?",
            explanation: "The ranking is Shadow > Sonic > Tails > Knuckles, making Knuckles the slowest."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Sandwich Clues for Numbers!</b><br><i>What it means:</i> When a clue states a number is 'greater than X but less than Y', it sits right between them on the number line.<br><i>Example: Greater than 14 but less than 16 means 15!</i><br><br><b>Story:</b> Shadow checks a vault seal code. Rod says: 'The passcode is an even number greater than 50, less than 60, and a multiple of 6.' What is the code?",
            options: ["52", "54", "56", "58"],
            answer: "54",
            hint: "Which number between 50 and 60 is in the 6 times table? (6 x 9 = ?)",
            explanation: "6 x 9 = 54, which sits between 50 and 60 and is an even number."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Multi-Constraint 'NOT' Elimination!</b><br><i>What it means:</i> Use negative conditions ('NOT X') to systematically cross out invalid options from a matrix until the single correct choice remains.<br><i>Example: 'Not red, not blue, not small' leaves 'Big Green'.</i><br><br><b>Story:</b> Dr. Eggman's core weak spot meets these rules: Clue 1: NOT in Sector Alpha. Clue 2: NOT in Sector Beta. Clue 3: Located on an EVEN-numbered level [Sector Alpha, Sector Beta, Sector Gamma 4, Sector Delta 3]. Where is it?",
            options: ["Sector Alpha", "Sector Beta", "Sector Gamma 4", "Sector Delta 3"],
            answer: "Sector Gamma 4",
            hint: "Cross out Alpha and Beta. Position Gamma 4 is #4 (even).",
            explanation: "Eliminating Alpha and Beta leaves Gamma 4 (#4, even) and Delta 3 (#3, odd). Sector Gamma 4 is correct."
        },
        {
            type: "mcq",
            question: "<b>Strategy: 3-Person Grid Deductive Matching!</b><br><i>What it means:</i> Use confirmed matches and direct negative clues to rule out possibilities in a grid until every subject has one unique match.<br><i>Example: Person A gets Item 1, Person B doesn't get Item 2 -> Deduce all assignments.</i><br><br><b>Story:</b> Three heroes (Sonic, Shadow, Marty) claim a Chaos Emerald. Clue 1: Sonic refuses the Red Emerald. Clue 2: Shadow takes the Green Emerald. Marty takes Blue. Which emerald does Sonic get?",
            options: ["Blue Emerald", "Green Emerald", "Red Emerald"],
            answer: "Red Emerald",
            hint: "Shadow took Green, Marty took Blue. What is the only emerald left?",
            explanation: "Green and Blue are claimed. The Red Emerald is left for Sonic."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Dual-Inverse Proof Verification!</b><br><i>What it means:</i> You can prove a multiplication answer is correct by executing its inverse operation (division) and verifying that you return to the starting number.<br><i>Example: Check 15 x 4 = 60 by verifying 60 / 4 = 15.</i><br><br><b>Story:</b> Shadow calculates 24 x 4 = 96 security seals. Verify his math by dividing 96 by 4. Does it equal 24?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "Divide 96 by 4. Does it equal 24?",
            explanation: "96 / 4 = 24, proving Shadow's multiplication was 100% correct."
        },

        // --- PHASE 7: MULTI-STEP WORD PROBLEMS & COMBINATORICS (Questions 31 - 40) ---
        {
            type: "text",
            question: "<b>Strategy: 3-Category Combinations Rule!</b><br><i>What it means:</i> To find the total number of unique combinations across multiple distinct sets, multiply the number of options in each category together (Options A x Options B x Options C).<br><i>Example: 2 caps, 3 shirts, 2 pants = 2 x 3 x 2 = 12 combinations.</i><br><br><b>Story:</b> Tails builds custom hover shoes. He has 3 motor types, 2 wing designs, and 3 color skins. How many total unique hover shoe combinations can he build (3 x 2 x 3)?",
            answer: "18",
            hint: "Multiply 3 x 2 = 6, then multiply 6 x 3!",
            explanation: "3 x 2 x 3 = 18 unique hover shoe combinations."
        },
        {
            type: "text",
            question: "<b>Strategy: Friendly Pairing for Multi-Term Addition!</b><br><i>What it means:</i> When adding 4 or more numbers, reorder and pair numbers that sum up to clean tens or hundreds first.<br><i>Example: 23 + 47 + 15 + 25 -> (23 + 47 = 70) + (15 + 25 = 40) = 110.</i><br><br><b>Story:</b> Marty combines power crystals: 38 + 42 + 25 + 15. Group (38 + 42 = 80) and (25 + 15 = 40). What is the grand total power sum?",
            answer: "120",
            hint: "Add your two friendly totals together: 80 + 40!",
            explanation: "(38 + 42) + (25 + 15) = 80 + 40 = 120 power units."
        },
        {
            type: "text",
            question: "<b>Strategy: Three-Step Sequential Execution!</b><br><i>What it means:</i> Solve complex multi-step real-world problems by breaking them into sequential single operations: Step 1 (Multiply), Step 2 (Add), Step 3 (Subtract).<br><i>Example: 3 packs of 5 shields = 15. Add 4 = 19. Subtract 2 = 17.</i><br><br><b>Story:</b> Shadow fires 3 volleys of laser pods with 8 pods in each volley (3 x 8 = 24). Tails gives him 6 backup pods (24 + 6 = 30). 7 pods are destroyed. How many working pods remain (30 - 7)?",
            answer: "23",
            hint: "Step 1: 3 x 8 = 24. Step 2: 24 + 6 = 30. Step 3: 30 - 7 = ?",
            explanation: "3 x 8 = 24. 24 + 6 = 30. 30 - 7 = 23 pods remaining."
        },
        {
            type: "text",
            question: "<b>Strategy: Multiplying by 99 (100 - 1 Rule)!</b><br><i>What it means:</i> To multiply any number by 99, multiply it by 100 first, then subtract 1 group of that number from the product!<br><i>Example: 6 x 99 -> (6 x 100) - 6 = 600 - 6 = 594.</i><br><br><b>Story:</b> Marty calculates total celebration chili dogs: 7 x 99. First do 7 x 100 = 700. Now subtract 7 from 700. What is 7 x 99?",
            answer: "693",
            hint: "Subtract 7 from 700 (700 - 7).",
            explanation: "7 x 100 = 700. 700 - 7 = 693 chili dogs."
        },
        {
            type: "text",
            question: "<b>Strategy: Calculating Currency Change from Multiple Items!</b><br><i>What it means:</i> Multiply the item price by the quantity to find total cost. Then subtract total cost from the payment bill handed over.<br><i>Example: 2 items at $15 each = $30. Pay with $50 bill -> $50 - $30 = $20 change.</i><br><br><b>Story:</b> Marty buys 3 deluxe chili dog combo meals for $8 each ($3 x $8 = $24 total). He pays with a $50 bill. How much change does he receive ($50 - $24)?",
            answer: "26",
            hint: "Subtract $24 from $50 ($50 - $24).",
            explanation: "3 x $8 = $24. $50 - $24 = $26 change."
        },
        {
            type: "text",
            question: "<b>Strategy: Two-Step Rate Multiplication!</b><br><i>What it means:</i> When a rate is given per unit time, multiply the rate per unit by time units, then scale by the total count of machines.<br><i>Example: 3 units/min x 10 mins = 30 per machine. 2 machines x 30 = 60 total.</i><br><br><b>Story:</b> 1 solar panel generates 4 kilowatts per hour. If Marty sets up 5 solar panels running for 10 hours, how many total kilowatts do they generate (5 panels x 4 kW x 10 hrs)?",
            answer: "200",
            hint: "5 x 4 = 20 kilowatts per hour. 20 x 10 hours = ?",
            explanation: "5 x 4 = 20. 20 x 10 = 200 total kilowatts."
        },
        {
            type: "text",
            question: "<b>Strategy: Multi-Step Fraction Addition with Whole Numbers!</b><br><i>What it means:</i> When adding whole numbers and fractional parts, combine the whole parts first, then add the fractional parts.<br><i>Example: 2 and 1/2 + 3 and 1/2 = (2 + 3) + (1/2 + 1/2) = 5 + 1 = 6.</i><br><br><b>Story:</b> Marty spends 3 and 1/2 hours studying logic on Saturday, and 4 and 1/2 hours on Sunday. Combine whole hours (3 + 4 = 7) and fractional hours (1/2 + 1/2 = 1). How many total hours did he study?",
            answer: "8",
            hint: "Add 3 + 4 = 7. Then add 1/2 + 1/2 = 1. What is 7 + 1?",
            explanation: "3 + 4 = 7. 1/2 + 1/2 = 1. 7 + 1 = 8 hours total."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Simple Probability Ratios!</b><br><i>What it means:</i> <b>Probability</b> measures how likely an event is to happen: (Favorable Choices) / (Total Possible Choices).<br><i>Example: 2 gold coins out of 10 total = 2/10 = 1 in 5 chance.</i><br><br><b>Story:</b> Eggman hides 2 real control switches among 8 fake decoys (10 total switches). What is the probability that Marty picks a real switch on the first try?",
            options: ["1 in 5 chance", "1 in 4 chance", "2 in 5 chance", "4 in 5 chance"],
            answer: "1 in 5 chance",
            hint: "Simplify 2 out of 10 (2/10 -> divide top and bottom by 2).",
            explanation: "2 out of 10 simplifies to 1 in 5 chance."
        },
        {
            type: "text",
            question: "<b>Strategy: The Quadruple Method for Multiplying by 8!</b><br><i>What it means:</i> Since 8 is 2 x 2 x 2, multiplying any number by 8 is the exact same as doubling that number three times in a row!<br><i>Example: 6 x 8 -> Double 6 (12), double 12 (24), double 24 (48).</i><br><br><b>Story:</b> Marty solves 7 x 8: Double 7 once (14), double 14 a second time (28), and double 28 a third time. What is 7 x 8?",
            answer: "56",
            hint: "Double 28 (28 + 28 = ?).",
            explanation: "Double 7 = 14. Double 14 = 28. Double 28 = 56. 7 x 8 = 56."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Crossing Hour Markers for Elapsed Time!</b><br><i>What it means:</i> To calculate total elapsed time when crossing an hour boundary, split the calculation into two jumps: first count the minutes to the top of the hour (60 min mark), then add the remaining minutes.<br><i>Example: From 1:45 PM to 2:15 PM is 15 min (to 2:00) + 15 min = 30 minutes.</i><br><br><b>Story:</b> Sonic starts a run at 8:35 PM and finishes at 9:20 PM. How many total minutes did the run take?",
            options: ["35 minutes", "40 minutes", "45 minutes", "50 minutes"],
            answer: "45 minutes",
            hint: "Count from 8:35 PM to 9:00 PM (25 min), then add 20 min past 9:00!",
            explanation: "25 minutes (to 9:00) + 20 minutes = 45 minutes total."
        },

        // --- PHASE 8: GRAND FINALE ACADEMY (Questions 41 - 50) ---
        {
            type: "text",
            question: "<b>Strategy: Multiplying by 9 (10 - 1 Rule)!</b><br><i>What it means:</i> To multiply a number by 9, multiply it by 10 first, then subtract 1 group of that number!<br><i>Example: 4 x 9 -> (4 x 10) - 4 = 40 - 4 = 36.</i><br><br><b>Story:</b> Use this trick for 5 x 9: First do 5 x 10 = 50. Now subtract 5 from 50. What is 5 x 9?",
            answer: "45",
            hint: "Subtract 5 from 50 (50 - 5 = ?).",
            explanation: "5 x 10 = 50. 50 - 5 = 45."
        },
        {
            type: "text",
            question: "<b>Strategy: The Double-Double Trick for x4!</b><br><i>What it means:</i> To multiply any number by 4, double it once, and then double it again!<br><i>Example: 7 x 4 -> Double 7 (14), then double 14 (28).</i><br><br><b>Story:</b> Use the Double-Double trick to solve 6 x 4: Double 6 to get 12. Now double 12. What is the final answer?",
            answer: "24",
            hint: "Double 12 (12 + 12 = ?).",
            explanation: "Double 6 is 12. Double 12 is 24. So 6 x 4 = 24."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Line Symmetry Recognition!</b><br><i>What it means:</i> A shape has line symmetry if it can be folded in half with matching sides.<br><i>Example: A regular square or round circle has line symmetry.</i><br><br><b>Story:</b> Marty inspects a square holographic portal. Does this square portal have line symmetry?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "If you fold a square in half down the middle, do both sides align?",
            explanation: "Yes, a square can be folded down its middle line with matching halves."
        },
        {
            type: "text",
            question: "<b>Strategy: Making Change with Currency!</b><br><i>What it means:</i> Change = Money Paid minus Cost of Item.<br><i>Example: Pay $20 for a $12 tool -> $20 - $12 = $8 change back.</i><br><br><b>Story:</b> Marty buys a sensor pin for $12 and pays with a $20 bill. How much change does he receive ($20 - $12)?",
            answer: "8",
            hint: "Subtract 12 from 20.",
            explanation: "$20 - $12 = $8 change back."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Grid Matching Deduction!</b><br><i>What it means:</i> If Person A picks Item 1, Person B MUST pick Item 2.<br><i>Example: Two tools: Scanner and Wrench. If Mom picks Scanner, Dad gets Wrench!</i><br><br><b>Story:</b> Two suit upgrades remain: Hover Boots and Shield Belt. Mom chooses Hover Boots. Which upgrade is left for Dad?",
            options: ["Hover Boots", "Shield Belt"],
            answer: "Shield Belt",
            hint: "Mom took Hover Boots. What option remains?",
            explanation: "With Hover Boots chosen by Mom, Shield Belt is left for Dad."
        },
        {
            type: "text",
            question: "<b>Strategy: Area of a Simple Rectangle!</b><br><i>What it means:</i> Area = Length x Width.<br><i>Example: 4 ft by 3 ft = 4 x 3 = 12 sq ft.</i><br><br><b>Story:</b> Marty's desk is 5 feet long and 4 feet wide. What is the Area of his desk?",
            answer: "20",
            hint: "Multiply 5 x 4.",
            explanation: "5 x 4 = 20 square feet."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Even vs. Odd Classification!</b><br><i>What it means:</i> Even numbers end in 0, 2, 4, 6, 8. Odd numbers end in 1, 3, 5, 7, 9.<br><i>Example: 14 is Even. 15 is Odd.</i><br><br><b>Story:</b> Marty counts 18 energy keys. Is 18 Even or Odd?",
            options: ["Even", "Odd"],
            answer: "Even",
            hint: "Look at the last digit: 8. Numbers ending in 8 are Even!",
            explanation: "18 ends in 8, so it is an Even number."
        },
        {
            type: "text",
            question: "<b>Strategy: Skip Counting for Multiplication!</b><br><i>What it means:</i> Multiplication is repeated addition. You can skip count by a number to find the total.<br><i>Example: 3 x 4 means count by 3s four times: 3, 6, 9, 12.</i><br><br><b>Story:</b> Marty packs 5 kits with 3 tools in each. Skip count by 5s three times (5, 10, ...) to find total tools.",
            answer: "15",
            hint: "Count by 5s three times: 5, 10, __.",
            explanation: "5, 10, 15. So 3 x 5 = 15 tools."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Checking Math with Inverse Operations!</b><br><i>What it means:</i> You can check addition by subtracting backward.<br><i>Example: If 15 + 8 = 23, check by doing 23 - 8 = 15.</i><br><br><b>Story:</b> Marty thinks 18 + 7 = 25. Check by subtracting 25 - 7. Does it equal 18?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "Does 25 - 7 equal 18?",
            explanation: "Yes! 25 - 7 = 18, so the addition was correct."
        },
        {
            type: "text",
            question: "<b>Grand Finale Strategy: Total Cumulative Accumulation!</b><br><i>What it means:</i> Multiply stage count by per-stage value to find total overall score.<br><i>Example: 10 trophies x 5 stages = 50 total trophies.</i><br><br><b>Story:</b> Marty completes all 8 phases, earning 16 Master Badges per phase! Calculate 8 x 16 to find his grand total badge score!",
            answer: "128",
            hint: "Calculate 8 x 16 (8 x 10 = 80, 8 x 6 = 48. Add 80 + 48!).",
            explanation: "8 x 16 = (8 x 10) + (8 x 6) = 80 + 48 = 128 total Master Badges! Grand Master Champion!"
        }
    ]
};
