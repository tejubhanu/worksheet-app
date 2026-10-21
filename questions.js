const missionConfig = {
    themeTitle: "🧩 The Mind Fortress: Master Logic & Math Academy",
    themeColor: "linear-gradient(135deg, #0284c7 0%, #4f46e5 50%, #9333ea 100%)", // Sapphire Blue, Royal Indigo & Quantum Purple
    themeIcon: "🧠",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- Phase 1: Mind Gym Warm-Up (Number Sense & Visual Logic) ---
        {
            type: "text",
            question: "<b>Strategy: Bridging Through 100!</b><br><i>What it means:</i> When adding numbers close to 100, split the smaller number into two parts. Use the first part to round the big number up to 100, then add what's left over. Tens and hundreds are much easier to work with!<br><br><b>Story:</b> Marty is loading power cells into the Mind Fortress generator. Cell A has 96 units of energy and Cell B has 38 units. Marty breaks 38 into 4 and 34 (96 + 4 = 100, then 100 + 34). How many total energy units does he load?",
            answer: "134",
            hint: "Take 4 away from 38 to make 96 into 100. Then add the leftover 34!",
            explanation: "96 + 38 = (96 + 4) + 34 = 100 + 34 = 134 energy units."
        },
        {
            type: "text",
            question: "<b>Strategy: Multi-Step Counting Up for Subtraction!</b><br><i>What it means:</i> Subtraction measures the distance between two numbers. Instead of counting backward, start at the smaller number and count UP in friendly landmark jumps (first to the nearest 10 or 100, then to the target).<br><br><b>Story:</b> The fortress shield needs 324 power points to activate, but Marty's battery only has 286 points. Count UP from 286 to 300 (+14), then from 300 to 324 (+24). How many more points does he need?",
            answer: "38",
            hint: "Add your two jumps together: 14 + 24.",
            explanation: "From 286 to 300 is 14. From 300 to 324 is 24. 14 + 24 = 38 power points."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Calculating Composite Perimeter!</b><br><i>What it means:</i> <b>Perimeter</b> is the total boundary distance all the way around the outside edge of a 2D shape. You calculate it by adding the lengths of every outer side together.<br><br><b>Story:</b> Marty maps the outer security boundary of the fortress. The boundary has 6 straight sides measuring 15 ft, 10 ft, 8 ft, 7 ft, 5 ft, and 15 ft. What is the total perimeter of the boundary?",
            options: ["50 feet", "55 feet", "60 feet", "65 feet"],
            answer: "60 feet",
            hint: "Add all 6 side lengths together: 15 + 10 + 8 + 7 + 5 + 15.",
            explanation: "15 + 10 = 25, + 8 = 33, + 7 = 40, + 5 = 45, + 15 = 60 feet perimeter."
        },
        {
            type: "text",
            question: "<b>Strategy: Near-Double Compensation!</b><br><i>What it means:</i> If two numbers are consecutive or very close, double the smaller number and adjust by adding the difference (or double the middle number!).<br><br><b>Story:</b> Marty collects 48 data crystals on Floor 1 and 49 data crystals on Floor 2. Use Near Doubles (double 48 to get 96, then add 1) to find the total number of crystals.",
            answer: "97",
            hint: "48 + 48 = 96. Now add the 1 extra crystal from 49!",
            explanation: "48 + 49 = 48 + 48 + 1 = 96 + 1 = 97 data crystals."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Rounding to the Nearest 100!</b><br><i>What it means:</i> Rounding simplifies numbers to make mental math easier. Look at the tens place (or last two digits): if it is 50 or higher, round UP to the next 100. If it is 49 or lower, round DOWN.<br><br><b>Story:</b> Marty's scanner detects an incoming energy wave at 762 megahertz. What is 762 rounded to the nearest 100?",
            options: ["700", "750", "800", "900"],
            answer: "800",
            hint: "Look at the 62 in 762. Since 62 is 50 or bigger, round up to the next hundred!",
            explanation: "762 is closer to 800 than 700, so it rounds up to 800."
        },

        // --- Phase 2: Quantum Multiplication & Division Mechanics ---
        {
            type: "text",
            question: "<b>Strategy: Distributive Multiplication Chunking!</b><br><i>What it means:</i> Break a large multiplication problem into smaller, friendly parts. Multiply each part separately, then combine the products.<br><br><b>Story:</b> Marty needs to calculate 7 x 14 energy cells. He splits 14 into (10 + 4), then calculates (7 x 10) + (7 x 4). What is the total product?",
            answer: "98",
            hint: "7 x 10 = 70. 7 x 4 = 28. Add 70 + 28!",
            explanation: "7 x 14 = (7 x 10) + (7 x 4) = 70 + 28 = 98 energy cells."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Classifying Prime vs. Composite Numbers!</b><br><i>What it means:</i> A <b>Prime number</b> has exactly two factors (1 and itself) and cannot be split into equal groups. A <b>Composite number</b> has more than two factors and can be formed by multiplying smaller whole numbers.<br><br><b>Story:</b> Marty checks four security lock codes: 17, 23, 27, and 31. Which of these numbers is a COMPOSITE number that can be split into equal groups?",
            options: ["17", "23", "27", "31"],
            answer: "27",
            hint: "Which number appears in the 3 or 9 times tables? (3 x 9 = ?)",
            explanation: "27 is composite because 3 x 9 = 27. The numbers 17, 23, and 31 are all prime."
        },
        {
            type: "text",
            question: "<b>Strategy: Division Chunking!</b><br><i>What it means:</i> To divide a large number, split it into two smaller numbers that are both easy to divide by your divisor, then add the answers.<br><br><b>Story:</b> Marty has 96 security keys to distribute equally among 6 vault doors. He chunks 96 into (60 / 6) + (36 / 6). How many keys go to each vault door?",
            answer: "16",
            hint: "60 / 6 = 10, and 36 / 6 = 6. Add 10 + 6!",
            explanation: "60 / 6 = 10 and 36 / 6 = 6. 10 + 6 = 16 keys per door."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Multiplying by 100 ('Add Two Zeros')!</b><br><i>What it means:</i> Multiplying a whole number by 100 shifts every digit two places to the left (increasing its place value by a factor of 100), effectively placing two zeros at the end.<br><br><b>Story:</b> Marty programs 16 defense drones. Each drone requires 100 micro-charges. What is 16 x 100?",
            options: ["160", "1,600", "16,000", "160,000"],
            answer: "1,600",
            hint: "Write down 16 and attach two zeros to the end!",
            explanation: "16 x 100 = 1,600 micro-charges."
        },
        {
            type: "text",
            question: "<b>Strategy: Halving and Doubling for Multiplication!</b><br><i>What it means:</i> You can double one number and cut the other number in half without changing the product! This turns tricky multiplication into mental math.<br><br><b>Story:</b> Solve 18 x 15 using Halving and Doubling: Cut 18 in half to get 9, and double 15 to get 30. Now multiply 9 x 30. What is the product?",
            answer: "270",
            hint: "Multiply 9 x 3 (which is 27), then add a zero to the end!",
            explanation: "18 x 15 = 9 x 30 = 270."
        },

        // --- Phase 3: Spatial Reasoning & Structural Logic ---
        {
            type: "mcq",
            question: "<b>Strategy: Geometric Property Elimination!</b><br><i>What it means:</i> Evaluate shapes by testing their specific definitions (number of sides, parallel lines, angle types) to eliminate impossible choices.<br><br><b>Story:</b> Marty inspects a locked door panel. Clue 1: It is a 4-sided polygon with all 4 sides equal in length. Clue 2: Its angles are NOT 90-degree right angles. What geometric shape is the panel?",
            options: ["Rectangle", "Trapezoid", "Rhombus", "Square"],
            answer: "Rhombus",
            hint: "A square has 4 equal sides WITH right angles. If it lacks right angles, it's a rhombus!",
            explanation: "A rhombus has 4 equal side lengths but does not require 90-degree right angles."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Two-Attribute Sequence Analysis!</b><br><i>What it means:</i> Some visual patterns alternate two different traits at once (e.g., shape AND color, or rotation AND count). Identify the core repeating unit.<br><br><b>Story:</b> Marty decodes a security laser grid pattern: Blue Square, Red Triangle, Blue Square, Red Triangle... What is the 9th item in this sequence?",
            options: ["Blue Square", "Red Triangle", "Blue Triangle", "Red Square"],
            answer: "Blue Square",
            hint: "Odd positions (1, 3, 5, 7, 9) always feature the first item in the pattern pair!",
            explanation: "The pattern repeats every 2 items. Positions 1, 3, 5, 7, 9 are all Blue Squares."
        },
        {
            type: "text",
            question: "<b>Strategy: Area of a Compound Shape!</b><br><i>What it means:</i> <b>Area</b> is the amount of flat 2D surface space inside a boundary, calculated as Length x Width. For L-shaped floors, split the shape into two separate rectangles, calculate both areas, and sum them.<br><br><b>Story:</b> Marty lays solar tiles on an L-shaped roof. Rectangular Section A is 8 ft by 3 ft (Area = 24). Rectangular Section B is 5 ft by 4 ft (Area = 20). What is the total Area of the roof?",
            answer: "44",
            hint: "Add the area of Section A (24) and Section B (20) together.",
            explanation: "Area = (8 x 3) + (5 x 4) = 24 + 20 = 44 square feet."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Multi-Constraint Sandwich Clues!</b><br><i>What it means:</i> Narrow down a number by setting lower/upper boundaries ('sandwiching' it) and applying rules like even/odd or divisibility.<br><br><b>Story:</b> Marty needs the vault override code. Rod the AI says: 'The code is an EVEN number greater than 60, less than 70, and a multiple of 8.' What is the code?",
            options: ["62", "64", "66", "68"],
            answer: "64",
            hint: "Which number between 60 and 70 is in the 8 times table? (8 x 8 = ?)",
            explanation: "8 x 8 = 64, which sits between 60 and 70 and is an even number."
        },
        {
            type: "text",
            question: "<b>Strategy: Geometric Pattern Growth Rules!</b><br><i>What it means:</i> Analyze the mathematical operation used to jump from step to step in a growing sequence (e.g., adding an increasing number or multiplying).<br><br><b>Story:</b> Marty tracks pulse signals that double every step: 3 Hz, 6 Hz, 12 Hz, 24 Hz, ___ Hz. What is the next frequency in this doubling pattern?",
            answer: "48",
            hint: "Multiply the last number (24) by 2!",
            explanation: "The pattern multiplies by 2 each step. 24 x 2 = 48 Hz."
        },

        // --- Phase 4: Fractions, Averages & Reverse Engineering ---
        {
            type: "text",
            question: "<b>Strategy: Non-Unit Fraction Calculation (3/4 of a set)!</b><br><i>What it means:</i> To find three-quarters (3/4) of a set, divide the total set into 4 equal groups (to find 1/4), then multiply that group size by 3.<br><br><b>Story:</b> Marty has 32 energy canisters. He uses 3/4 of them to power the main elevator. Calculate (32 / 4) x 3. How many canisters does he use?",
            answer: "24",
            hint: "First divide 32 by 4 (= 8). Then multiply 8 by 3!",
            explanation: "32 / 4 = 8. 8 x 3 = 24 energy canisters."
        },
        {
            type: "text",
            question: "<b>Strategy: Column Addition with Regrouping (Carrying)!</b><br><i>What it means:</i> When adding multi-digit numbers, sum the ones column first. If the ones sum is 10 or greater, write down the ones digit and carry the ten over to the tens column.<br><br><b>Story:</b> Marty combines two power grids: Grid A produces 76 kilowatts and Grid B produces 88 kilowatts. Calculate 76 + 88 using regrouping.",
            answer: "164",
            hint: "Add ones: 6 + 8 = 14 (write 4, carry 10). Add tens: 70 + 80 + 10 = 160. Total = 164!",
            explanation: "76 + 88 = 164 kilowatts."
        },
        {
            type: "text",
            question: "<b>Strategy: Calculating a 3-Item Average!</b><br><i>What it means:</i> An <b>Average</b> represents a central value for a set of numbers. To calculate it, sum all the values together, then divide by the total number of items in the set.<br><br><b>Story:</b> Marty runs three test laps around the training track. His lap times are 110 seconds, 130 seconds, and 150 seconds. Add them together (390), then divide by 3 to find his average lap time.",
            answer: "130",
            hint: "Divide 390 by 3 (think: 39 / 3 = 13, then add a zero).",
            explanation: "110 + 130 + 150 = 390. 390 / 3 = 130 seconds average."
        },
        {
            type: "text",
            question: "<b>Strategy: Two-Step Working Backward!</b><br><i>What it means:</i> To solve for an unknown starting value when given the final result, reverse every operation in backward order (addition becomes subtraction, multiplication becomes division).<br><br><b>Story:</b> Marty had a stash of power gems. He doubled the amount (x2), then added 8 more gems (+8), ending up with 38 gems total. Work backward: (38 - 8) / 2. How many gems did he start with?",
            answer: "15",
            hint: "First undo the addition: 38 - 8 = 30. Then undo the doubling: 30 / 2 = ?",
            explanation: "38 - 8 = 30. 30 / 2 = 15 starting gems."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Comparing Fractions with Benchmark Percentages!</b><br><i>What it means:</i> Convert fractions into equivalent parts of 100 or compare them against 1/2 (50%) to see which represents a larger quantity.<br><br><b>Story:</b> Battery A is filled to 4/5 of capacity. Battery B is filled to 3/4 of capacity. Which battery contains a GREATER portion of charge?",
            options: ["Battery A (4/5)", "Battery B (3/4)"],
            answer: "Battery A (4/5)",
            hint: "4/5 equals 80/100 (80%). 3/4 equals 75/100 (75%). Which is larger?",
            explanation: "4/5 = 80%, while 3/4 = 75%. Battery A contains more charge."
        },

        // --- Phase 5: Statistical Analysis & Multi-Item Deductions ---
        {
            type: "text",
            question: "<b>Strategy: Finding the Median of an Even Data Set!</b><br><i>What it means:</i> The <b>Median</b> is the exact middle value in an ordered list. When there is an even number of items, put them in order and find the exact number sitting halfway between the two middle values.<br><br><b>Story:</b> Marty records scanner readings in order: 14, 18, 22, and 28. The two middle values are 18 and 22. What is the Median value sitting halfway between them?",
            answer: "20",
            hint: "What number is directly halfway between 18 and 22?",
            explanation: "Halfway between 18 and 22 is 20 [(18 + 22) / 2 = 20]."
        },
        {
            type: "text",
            question: "<b>Strategy: Multiplying by 25 (100 / 4 Rule)!</b><br><i>What it means:</i> Since 25 is one-fourth of 100, you can multiply any number by 25 by multiplying it by 100 first, then dividing that result by 4!<br><br><b>Story:</b> Solve 16 x 25 using this strategy: First calculate 16 x 100 = 1,600. Now divide 1,600 by 4. What is the final answer?",
            answer: "400",
            hint: "16 divided by 4 is 4. So 1,600 divided by 4 is...?",
            explanation: "16 x 100 = 1,600. 1,600 / 4 = 400."
        },
        {
            type: "text",
            question: "<b>Strategy: Calculating Statistical Range!</b><br><i>What it means:</i> The <b>Range</b> measures the total spread of a data set. Calculate it by taking the Maximum (highest) value and subtracting the Minimum (lowest) value: Range = Max - Min.<br><br><b>Story:</b> Marty records temperature sensor outputs: 32°C, 19°C, 84°C, and 51°C. Subtract the lowest value (19) from the highest value (84) to find the Range.",
            answer: "65",
            hint: "84 - 19 (think: 84 - 20 = 64, then add 1 back = 65).",
            explanation: "84 - 19 = 65°C Range."
        },
        {
            type: "text",
            question: "<b>Strategy: Subtraction via Rounding Compensation!</b><br><i>What it means:</i> To subtract a number ending in 8 or 9 (like 49), subtract the next ten (50) instead, then add back the difference (1) to correct your answer.<br><br><b>Story:</b> Solve 154 - 49 for lab equipment setup: Subtract 50 from 154 first (which gives 104), then add 1 back. What is the result?",
            answer: "105",
            hint: "154 - 50 = 104. Now add 1 back!",
            explanation: "154 - 50 = 104. 104 + 1 = 105."
        },
        {
            type: "mcq",
            question: "<b>Strategy: 4-Step Chain Deduction!</b><br><i>What it means:</i> Link multiple comparison statements in sequential order (A > B, B > C, C > D) to establish a complete top-to-bottom ranking.<br><br><b>Story:</b> In a speed test, Drone A is faster than Drone B. Drone B is faster than Drone C. Drone C is faster than Drone D. Which drone is the SLOWEST overall?",
            options: ["Drone A", "Drone B", "Drone C", "Drone D"],
            answer: "Drone D",
            hint: "Follow the speed chain down: A > B > C > D. Who is at the very bottom?",
            explanation: "The complete chain is A > B > C > D, making Drone D the slowest."
        },

        // --- Phase 6: Multi-Dimensional Combinations & Symmetry ---
        {
            type: "text",
            question: "<b>Strategy: 3-Category Combinations Rule!</b><br><i>What it means:</i> To find the total number of unique combinations across multiple distinct sets, multiply the number of options in each category together (Options A x Options B x Options C).<br><br><b>Story:</b> Marty designs custom robots. He has 4 chassis bases, 3 arm modules, and 3 sensor heads. How many unique robot combinations can he assemble (4 x 3 x 3)?",
            answer: "36",
            hint: "Multiply 4 x 3 = 12, then multiply 12 x 3!",
            explanation: "4 x 3 x 3 = 36 unique robot combinations."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Lines of Symmetry in Regular Polygons!</b><br><i>What it means:</i> A <b>Line of Symmetry</b> is an imaginary fold line that cuts a shape into two identical mirror-image halves. Any regular polygon (all sides and angles equal) has exactly as many lines of symmetry as it has sides!<br><br><b>Story:</b> Marty inspects an opening hatch shaped like a regular Octagon (8 equal sides). How many lines of symmetry does a regular Octagon have?",
            options: ["4", "6", "8", "10"],
            answer: "8",
            hint: "A regular shape with 8 equal sides has a matching line of symmetry for every side!",
            explanation: "A regular octagon has 8 lines of symmetry."
        },
        {
            type: "text",
            question: "<b>Strategy: The Triple-Double Method for Multiplying by 8!</b><br><i>What it means:</i> Since 8 is 2 x 2 x 2, multiplying any number by 8 is the exact same as doubling that number three times in a row!<br><br><b>Story:</b> Solve 7 x 8 using Triple-Double: Double 7 once (14), double 14 a second time (28), and double 28 a third time. What is 7 x 8?",
            answer: "56",
            hint: "Double 28 (28 + 28 = ?).",
            explanation: "Double 7 = 14. Double 14 = 28. Double 28 = 56. 7 x 8 = 56."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Crossing Hour Markers for Elapsed Time!</b><br><i>What it means:</i> To calculate total elapsed time when crossing an hour boundary, split the calculation into two jumps: first count the minutes to the top of the hour (60 min mark), then add the remaining minutes.<br><br><b>Story:</b> A diagnostic test starts at 3:40 PM and completes at 4:25 PM. How many total minutes did the test take?",
            options: ["35 minutes", "40 minutes", "45 minutes", "50 minutes"],
            answer: "45 minutes",
            hint: "Count from 3:40 PM to 4:00 PM (20 min), then add the 25 min past 4:00!",
            explanation: "20 minutes to reach 4:00 PM + 25 minutes past 4:00 = 45 minutes total."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Dual-Inverse Proof Verification!</b><br><i>What it means:</i> You can prove a multiplication answer is correct by executing its inverse operation (division) and verifying that you return to the starting number.<br><br><b>Story:</b> Marty calculates 27 x 4 = 108 circuit nodes. Check his calculation by dividing 108 by 4. Does it equal 27?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "Divide 108 by 4 (100 / 4 = 25, 8 / 4 = 2 -> 25 + 2 = 27).",
            explanation: "108 / 4 = 27, proving Marty's multiplication was 100% correct."
        },

        // --- Phase 7: Master Logic - Core Override Protocol ---
        {
            type: "mcq",
            question: "<b>Strategy: Simplified Probability Ratios!</b><br><i>What it means:</i> <b>Probability</b> measures how likely an event is to happen: (Favorable Outcomes) / (Total Outcomes). Express the ratio in its simplest reduced fraction form.<br><br><b>Story:</b> A vault contains 12 keycard slots. Exactly 3 of them unlock the main door, while 9 are decoys. What is the simplified probability of picking a real keycard on the first try?",
            options: ["1 in 3 chance", "1 in 4 chance", "3 in 4 chance", "1 in 12 chance"],
            answer: "1 in 4 chance",
            hint: "Simplify the fraction 3 out of 12 (3/12 -> divide top and bottom by 3).",
            explanation: "3/12 simplifies to 1/4, which represents a 1 in 4 chance."
        },
        {
            type: "text",
            question: "<b>Strategy: Friendly Pairing for Multi-Term Addition!</b><br><i>What it means:</i> When adding 4 or more numbers, reorder and pair numbers that sum up to clean tens or hundreds first.<br><br><b>Story:</b> Add these four power readouts: 36 + 47 + 14 + 23. Group (36 + 14 = 50) and (47 + 23 = 70). What is the grand total sum?",
            answer: "120",
            hint: "Add your two friendly totals together: 50 + 70!",
            explanation: "(36 + 14) + (47 + 23) = 50 + 70 = 120 total power."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Multi-Constraint 'NOT' Elimination!</b><br><i>What it means:</i> Use negative conditions ('NOT X') to systematically cross out invalid options from a matrix until the single correct choice remains.<br><br><b>Story:</b> The main computer core is hidden in one of four chambers: Sector A, Sector B, Sector C, or Sector D. Clue 1: It is NOT in Sector A. Clue 2: It is NOT in Sector B. Clue 3: It is located in an ODD-numbered sector (A=1, B=2, C=3, D=4). Where is the core?",
            options: ["Sector A", "Sector B", "Sector C", "Sector D"],
            answer: "Sector C",
            hint: "Cross out A and B. Position C is #3 (odd) and D is #4 (even).",
            explanation: "Eliminating A and B leaves C (#3, odd) and D (#4, even). Sector C is correct."
        },
        {
            type: "text",
            question: "<b>Strategy: Finding the Median in an Odd-Sized Set!</b><br><i>What it means:</i> Arrange all values in order from least to greatest. In an odd-sized set (like 5 numbers), the median is the single number sitting directly in the middle (3rd number).<br><br><b>Story:</b> Sort Marty's 5 drone flight times in seconds: 48, 22, 60, 35, and 29. Put them in order [22, 29, 35, 48, 60]. What is the Median flight time?",
            answer: "35",
            hint: "Look at the sorted list: 22, 29, 35, 48, 60. Which number sits in the exact center?",
            explanation: "In the sorted set [22, 29, 35, 48, 60], 35 is the middle (3rd) value."
        },
        {
            type: "text",
            question: "<b>Strategy: Three-Step Sequential Execution!</b><br><i>What it means:</i> Solve complex multi-step real-world problems by breaking them into sequential single operations: Step 1 (Multiply), Step 2 (Add), Step 3 (Subtract).<br><br><b>Story:</b> Marty orders 4 crates of spare parts with 9 gears in each crate (4 x 9 = 36). He receives 10 bonus gears from the lab (36 + 10 = 46). He uses 8 gears for repairs. How many working gears remain (46 - 8)?",
            answer: "38",
            hint: "Step 1: 4 x 9 = 36. Step 2: 36 + 10 = 46. Step 3: 46 - 8 = ?",
            explanation: "4 x 9 = 36. 36 + 10 = 46. 46 - 8 = 38 gears remaining."
        },

        // --- Phase 8: Mind Fortress Grand Master Ceremony ---
        {
            type: "text",
            question: "<b>Strategy: Comparative Data Margin Reading!</b><br><i>What it means:</i> To find the exact difference or 'margin' between two values on a bar graph, subtract the smaller bar's value from the larger bar's value.<br><br><b>Story:</b> On the final Master Academy board, Marty scores 95 logic points and the benchmark score is 47 points. Subtract 47 from 95 to find Marty's winning margin.",
            answer: "48",
            hint: "95 - 47 (think: 95 - 40 = 55, then 55 - 7 = 48).",
            explanation: "95 - 47 = 48 points margin."
        },
        {
            type: "text",
            question: "<b>Strategy: Multiplying by 99 (100 - 1 Rule)!</b><br><i>What it means:</i> To multiply any number by 99, multiply it by 100 first, then subtract 1 group of that number from the product!<br><br><b>Story:</b> Solve 8 x 99 for grand ceremony decorations: Multiply 8 x 100 = 800. Now subtract 8 from 800. What is 8 x 99?",
            answer: "792",
            hint: "Subtract 8 from 800 (800 - 8).",
            explanation: "8 x 100 = 800. 800 - 8 = 792."
        },
        {
            type: "text",
            question: "<b>Strategy: Calculating Currency Change from Multiple Items!</b><br><i>What it means:</i> Multiply the item price by the quantity to find total cost. Then subtract total cost from the payment bill handed over.<br><br><b>Story:</b> Marty buys 3 Master Logic books for $9 each ($3 x $9 = $27 total). He pays with a $50 bill. How much change does he receive ($50 - $27)?",
            answer: "23",
            hint: "Subtract $27 from $50 ($50 - $27).",
            explanation: "3 x $9 = $27. $50 - $27 = $23 change."
        },
        {
            type: "mcq",
            question: "<b>Strategy: 3-Item Grid Deductive Matching!</b><br><i>What it means:</i> Use confirmed matches and direct negative clues to rule out possibilities in a grid until every subject has one unique match.<br><br><b>Story:</b> Three scholars (Marty, Leo, and Ava) pick trophy categories (Math, Logic, Science). Clue 1: Leo takes Science. Clue 2: Ava does NOT take Math. Which trophy does Ava receive?",
            options: ["Math", "Logic", "Science"],
            answer: "Logic",
            hint: "Leo took Science. Ava cannot take Math. So Ava MUST take...?",
            explanation: "Science is taken by Leo. Ava cannot take Math, so Ava takes Logic."
        },
        {
            type: "text",
            question: "<b>Grand Finale: Total Cumulative Multiplication!</b><br><i>What it means:</i> When equal amounts are accumulated across multiple stages, multiply the stage count by the per-stage value.<br><br><b>Story:</b> Marty completes all 8 phases of the Master Logic Academy, earning 16 Master Badges per phase! Calculate 8 x 16 to find his grand total badge score!",
            answer: "128",
            hint: "Calculate 8 x 16 (think: 8 x 10 = 80, 8 x 6 = 48. Add 80 + 48!).",
            explanation: "8 x 16 = (8 x 10) + (8 x 6) = 80 + 48 = 128 total Master Badges! Grand Master Champion!"
        }
    ]
};
