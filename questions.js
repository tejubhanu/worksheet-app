const missionConfig = {
    themeTitle: "🦔 Sonic & Shadow: The Chaos Emerald Chase",
    themeColor: "linear-gradient(135deg, #1d4ed8 0%, #1e293b 50%, #dc2626 100%)", // Sonic Blue, Shadow Slate, & Chaos Red
    themeIcon: "⚡",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- Phase 1: Green Hill Zone (Warm-Up Strategies - Difficulty Level Raised) ---
        {
            type: "text",
            question: "<b>Advanced Strategy: Bridging Through 100!</b><br>When adding numbers close to 100, break apart one number to reach 100 first, then add the rest.<br><i>Example: To solve 96 + 37, take 4 from 37 to make 96 + 4 = 100, then add the remaining 33 to get 133.</i><br><br><b>Story:</b> Marty and Sonic sprint through Green Hill Zone collecting rings. Marty picks up 94 gold rings and Sonic passes him 38 more rings. Using the Bridging Through 100 strategy, how many total rings do they have?",
            answer: "132",
            hint: "Take 6 from 38 to turn 94 into 100. Then add the leftover 32!",
            explanation: "94 + 38 = (94 + 6) + 32 = 100 + 32 = 132 rings."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Multi-Step Counting Up for Subtraction!</b><br>When subtracting larger numbers, count up in chunks: first to the nearest ten, then to the nearest hundred, then to the target.<br><i>Example: To solve 214 - 185, count up from 185: +15 to reach 200, +14 to reach 214. Total = 15 + 14 = 29.</i><br><br><b>Story:</b> Shadow needs 325 energy units to power his Chaos Control jump, but his power drive only has 287 units. Count UP from 287 to 325. How many more units does Shadow need?",
            answer: "38",
            hint: "Count up from 287 to 300 (+13), then from 300 to 325 (+25). Add them together!",
            explanation: "From 287 to 300 is 13. From 300 to 325 is 25. 13 + 25 = 38 units needed."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Composite Perimeter!</b><br>Perimeter is the total distance all the way around the outside edge of an irregular multi-sided polygon. Add every single outer side length together!<br><i>Example: A shape with sides 5, 4, 3, 2, and 1 has a perimeter of 5 + 4 + 3 + 2 + 1 = 15.</i><br><br><b>Story:</b> Tails builds a multi-sided security fence shaped like an L to protect Sonic's cabin. Its outer sides measure 12 feet, 8 feet, 7 feet, 5 feet, 5 feet, and 13 feet. What is the total perimeter of the fence?",
            options: ["42 feet", "45 feet", "50 feet", "52 feet"],
            answer: "50 feet",
            hint: "Carefully add all 6 side lengths together: 12 + 8 + 7 + 5 + 5 + 13.",
            explanation: "12 + 8 = 20, + 7 = 27, + 5 = 32, + 5 = 37, + 13 = 50 feet."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Near-Double Compensation!</b><br>When adding two numbers that are close to double a number, double the base and adjust by the difference.<br><i>Example: To solve 37 + 39, double 38 (the middle number) to get 76, or use 37 + 37 + 2 = 76.</i><br><br><b>Story:</b> Marty and Shadow race across the loop. Marty scores 47 bonus points and Shadow scores 49 bonus points. Using the Near-Double strategy (treat as 48 + 48 + 2, or 47 + 47 + 2), what is their combined score?",
            answer: "96",
            hint: "Double 48 (since 48 is right between 47 and 49). What is 48 + 48?",
            explanation: "47 + 49 = 47 + (47 + 2) = (47 * 2) + 2 = 94 + 2 = 96 points."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Rounding to the Nearest 100!</b><br>Look at the tens digit. If it is 50 or bigger, round UP to the next hundred. If it is 49 or smaller, round DOWN.<br><i>Example: 340 rounds down to 300. 360 rounds up to 400.</i><br><br><b>Story:</b> Tails' radar tracks an incoming Eggman fleet flying at an altitude of 764 meters. What is 764 rounded to the nearest 100?",
            options: ["700 meters", "750 meters", "800 meters", "900 meters"],
            answer: "800 meters",
            hint: "Look at the tens digit (64). Since 64 is 50 or higher, round up to the next hundred!",
            explanation: "764 is closer to 800 than 700, so it rounds up to 800 meters."
        },

        // --- Phase 2: Tails' Workshop (Multiplication & Division - Enhanced Complexity) ---
        {
            type: "text",
            question: "<b>Advanced Strategy: Distributive Multiplication Chunking!</b><br>Break a larger multiplication factor into two easier parts, multiply separately, then add them back together.<br><i>Example: 7 x 14 means 7 x (10 + 4) -> (7 x 10) + (7 x 4) = 70 + 28 = 98.</i><br><br><b>Story:</b> Tails builds 6 specialized energy packs, and each pack requires 14 micro-chips. Using Distributive Chunking (6 x 10 plus 6 x 4), how many micro-chips did Tails use in total?",
            answer: "84",
            hint: "Calculate 6 x 10 = 60, then 6 x 4 = 24. Now add 60 + 24!",
            explanation: "6 x 14 = (6 x 10) + (6 x 4) = 60 + 24 = 84 micro-chips."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Prime vs. Composite Numbers!</b><br>A prime number can only be divided evenly by 1 and itself (like 2, 3, 5, 7, 11, 13). A composite number has more than two factors.<br><i>Example: 9 is composite because 3 x 3 = 9. 7 is prime.</i><br><br><b>Story:</b> Shadow checks security code numbers on the vault: 17, 21, 23, and 29. Which of these numbers is a composite number (meaning it can be divided into equal groups other than 1 and itself)?",
            options: ["17", "21", "23", "29"],
            answer: "21",
            hint: "Check which number can be made by multiplying smaller numbers together (hint: 3 x 7 = ?).",
            explanation: "21 is composite (3 x 7 = 21). 17, 23, and 29 are all prime numbers."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Chunking Division!</b><br>Break a large division problem into friendly chunks that are easy to subtract out of the total.<br><i>Example: 84 / 4 -> Think: (40 / 4) + (44 / 4) = 10 + 11 = 21.</i><br><br><b>Story:</b> Sonic and Marty collect 96 gold rings and want to distribute them equally among 6 backup crates. Using division chunking (divide 60/6 and 36/6), how many rings go into each crate?",
            answer: "16",
            hint: "Split 96 into 60 and 36. Divide both by 6: (60 / 6) + (36 / 6).",
            explanation: "60 / 6 = 10, and 36 / 6 = 6. 10 + 6 = 16 rings per crate."
        },
        {
            type: "mcq",
            question: "<b>Advanced Strategy: The 'Add Two Zeros' Trick for 100s!</b><br>When multiplying any whole number by 100, attach two zeros to the end of that number.<br><i>Example: 7 x 100 = 700.</i><br><br><b>Story:</b> Tails programs 14 robotic security nodes. Each node runs a diagnostic loop that uses 100 cycles of computing power. What is 14 x 100?",
            options: ["140", "1,040", "1,400", "14,000"],
            answer: "1,400",
            hint: "Write the number 14 and put two zeros right after it!",
            explanation: "14 x 100 = 1,400 computing cycles."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Halving and Doubling!</b><br>In multiplication, you can cut one number in half and double the other number to keep the product identical and easier to solve!<br><i>Example: 14 x 5 -> Half of 14 is 7, double of 5 is 10 -> 7 x 10 = 70.</i><br><br><b>Story:</b> Marty calculates rocket propulsion power: 16 x 15. Cut 16 in half (8) and double 15 (30). Now multiply 8 x 30. What is the total power score?",
            answer: "240",
            hint: "Multiply 8 times 30 (think: 8 x 3 = 24, then add a zero).",
            explanation: "16 x 15 = 8 x 30 = 240 propulsion power."
        },

        // --- Phase 3: Knuckles & The Floating Island (Geometry & Measurement - Enhanced) ---
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: Elimination by Properties!</b><br>Cross out options that violate geometric rules until only the valid shape remains.<br><i>Example: A 4-sided shape with equal sides and 90-degree right angles is a square.</i><br><br><b>Story:</b> Knuckles guards a mysterious chamber door. Clue 1: It has 4 equal sides. Clue 2: Its angles are NOT all 90-degree right angles (its opposite sides slant like a diamond). Options: Rectangle, Square, Rhombus, Triangle. What shape is the door frame?",
            options: ["Rectangle", "Square", "Rhombus", "Triangle"],
            answer: "Rhombus",
            hint: "A square has 90-degree angles. If the angles slant, it's a rhombus!",
            explanation: "A rhombus has 4 equal sides with slanted angles, unlike a square or rectangle."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Complex Repeating Patterns (Two-Attribute)!</b><br>Some patterns change in two different ways at the exact same time (like shape and number, or color and direction).<br><i>Example: Red Triangle, Blue Square, Red Triangle...</i><br><br><b>Story:</b> Knuckles sets trap tiles on the Floating Island path: Up-Arrow Red, Down-Arrow Blue, Up-Arrow Red, Down-Arrow Blue... What comes next in the sequence?",
            options: ["Up-Arrow Red", "Down-Arrow Blue", "Up-Arrow Blue", "Down-Arrow Red"],
            answer: "Up-Arrow Red",
            hint: "The pattern alternates directions and colors every single step.",
            explanation: "The cycle repeats every 2 steps, so an Up-Arrow Red starts the next loop."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Area of a Complex L-Shape!</b><br>Split an irregular L-shaped floor plan into two easy separate rectangles, find the area of each, and add them together!<br><i>Example: A shape made of a 2x3 box and a 4x2 box has area (2x3) + (4x2) = 6 + 8 = 14.</i><br><br><b>Story:</b> Marty designs a control room floor for Tails. It is split into two connected rectangular sections: Section A is 6 feet by 3 feet (Area = 18). Section B is 4 feet by 4 feet (Area = 16). What is the total combined Area?",
            answer: "34",
            hint: "Add the area of Section A (18) and Section B (16) together.",
            explanation: "18 + 16 = 34 square feet total area."
        },
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: Complex Sandwich Clues!</b><br>Combine range boundaries with number properties (like even/odd or multiples) to pinpoint the exact value.<br><i>Example: An even multiple of 5 between 10 and 20 is 20 (wait, between 10 and 20 exclusive is 15 or... wait, 15 is odd. 20 is the boundary).</i><br><br><b>Story:</b> Shadow checks a vault seal code. Rod the AI says: 'The passcode is an even number that is greater than 50, less than 60, and a multiple of 6.' What is the code?",
            options: ["52", "54", "56", "58"],
            answer: "54",
            hint: "Which number between 50 and 60 can be divided evenly by 6? (Hint: 6 x 9 = ?)",
            explanation: "54 is between 50 and 60, is even, and 6 x 9 = 54."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Growing Pattern Multi-Step Rule!</b><br>Find the rule when a pattern grows by multiplying or adding an increasing amount each step.<br><i>Example: 2, 4, 8, 16... multiplies by 2 each time. Next is 32.</i><br><br><b>Story:</b> Shadow tracks security pulse frequencies: 5 MHz, 10 MHz, 20 MHz, 40 MHz, ___ MHz. What is the next frequency?",
            answer: "80",
            hint: "Notice how each number doubles (multiplies by 2) from the previous one!",
            explanation: "The pattern doubles each step: 40 x 2 = 80 MHz."
        },

        // --- Phase 4: Casino Night Zone (Fractions & Time - Enhanced) ---
        {
            type: "text",
            question: "<b>Advanced Concept: Advanced Fractions of a Set!</b><br>To find three-quarters (3/4) of a set, divide the total by 4 to find one quarter, then multiply that result by 3!<br><i>Example: 3/4 of 12 -> (12 / 4) = 3, then 3 x 3 = 9.</i><br><br><b>Story:</b> Marty hits the Casino Night jackpot and wins 24 special bonus capsules. He opens 3/4 of them to share with Sonic and Shadow. Calculate (24 / 4) x 3. How many capsules did Marty open?",
            answer: "18",
            hint: "First find one-quarter of 24 (24 / 4 = 6). Then multiply that by 3!",
            explanation: "24 / 4 = 6. 6 x 3 = 18 capsules opened."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Column Addition with Regrouping!</b><br>Add the ones column first, carry over any tens to the tens column, then add the tens column!<br><i>Example: 48 + 37 -> Ones: 8 + 7 = 15 (write 5, carry 1). Tens: 4 + 3 + 1 = 8. Total = 85.</i><br><br><b>Story:</b> Sonic collects 58 golden rings in Act 1 and 65 golden rings in Act 2. Using column addition with carrying, what is their total sum?",
            answer: "123",
            hint: "Add ones (8 + 5 = 13, write 3 carry 1). Add tens (5 + 6 + 1 = 12). Combine them!",
            explanation: "58 + 65 = 123 golden rings."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Multi-Step Average Calculation!</b><br>Add three numbers together to find the sum, then divide that sum by 3 to find the average!<br><i>Example: Average of 4, 6, and 8 -> Sum is 18, 18 / 3 = 6.</i><br><br><b>Story:</b> Marty plays three rounds of pinball in Casino Night Zone. His scores are 120 points, 150 points, and 180 points. Add them together to get 450, then divide by 3 to find his average score per round.",
            answer: "150",
            hint: "Divide the total sum of 450 by 3 rounds (450 / 3).",
            explanation: "120 + 150 + 180 = 450. 450 / 3 = 150 average points."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Working Backward with Two Steps!</b><br>Undo operations in reverse order: if you added and then multiplied, divide first and then subtract!<br><i>Example: (X + 3) x 2 = 16 -> Work backward: 16 / 2 = 8, then 8 - 3 = 5.</i><br><br><b>Story:</b> Shadow had a secret ring stash. He doubled it (x2), then added 5 rings, ending up with 35 rings. Work backward: (35 - 5) / 2. How many rings did Shadow start with?",
            answer: "15",
            hint: "First subtract 5 from 35 (= 30). Then divide 30 by 2!",
            explanation: "35 - 5 = 30. 30 / 2 = 15 rings originally."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Comparing Complex Fractions!</b><br>When denominators are different, convert or visualize which fraction takes up more of a whole shape.<br><i>Example: 3/4 is larger than 1/2 because 3/4 equals 6/8 while 1/2 equals 4/8.</i><br><br><b>Story:</b> Tails evaluates energy shields. Shield A covers 3/4 of the power grid, while Shield B covers 2/3 of the power grid. Which shield covers a larger portion of the grid?",
            options: ["Shield A (3/4)", "Shield B (2/3)"],
            answer: "Shield A (3/4)",
            hint: "3/4 is 75% while 2/3 is about 66%. Which is bigger?",
            explanation: "3/4 (75%) is greater than 2/3 (about 66.7%). Shield A is larger."
        },

        // --- Phase 5: Chemical Plant Zone (Data & Logic - Enhanced) ---
        {
            type: "text",
            question: "<b>Advanced Concept: Median of an Even Data Set!</b><br>When a list has an even number of items, put them in order and find the two middle numbers, then find the exact number halfway between them!<br><i>Example: For [2, 4, 6, 8], the two middle numbers are 4 and 6. Halfway between them is 5!</i><br><br><b>Story:</b> Marty records toxic sludge levels in Chemical Plant Zone: 12, 15, 19, and 24. Look at the two middle numbers (15 and 19). What is the Median value sitting right in the middle?",
            answer: "17",
            hint: "What number is exactly halfway between 15 and 19? (Add them and divide by 2, or count up from 15).",
            explanation: "The two middle numbers are 15 and 19. Halfway between them is 17."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Multiply by 25 (Multiply by 100 then Divide by 4)!</b><br>To multiply any number by 25 quickly, multiply it by 100 first, then divide that result by 4!<br><i>Example: 6 x 25 -> 6 x 100 = 600, then 600 / 4 = 150.</i><br><br><b>Story:</b> Shadow uses this pro math trick to calculate chemical neutralization speed: 8 x 25. First do 8 x 100 = 800. Now divide 800 by 4. What is the answer?",
            answer: "200",
            hint: "What is 800 divided by 4? (Think: 8 / 4 = 2, then add the zeros).",
            explanation: "8 x 100 = 800. 800 / 4 = 200 neutralization units."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Complex Range Calculation!</b><br>Range is the difference between the Maximum value and the Minimum value in a data set (Max - Min).<br><i>Example: For scores 14, 22, 38, 45, the range is 45 - 14 = 31.</i><br><br><b>Story:</b> Tails records water pressure sensors in the plant: 34 psi, 19 psi, 58 psi, and 42 psi. Find the maximum value (58) and the minimum value (19). Subtract them (58 - 19) to find the Range.",
            answer: "39",
            hint: "Subtract the lowest pressure (19) from the highest pressure (58).",
            explanation: "58 - 19 = 39 psi Range."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Subtraction by Rounding to the Nearest 25 or 50!</b><br>To subtract 48 easily, subtract 50 instead, then add 2 back!<br><i>Example: 120 - 48 -> 120 - 50 = 70, then 70 + 2 = 72.</i><br><br><b>Story:</b> Marty solves 145 - 48 for chemical valve adjustments. Do 145 - 50 first (which is 95), then add 2 back. What is the final answer?",
            answer: "97",
            hint: "145 - 50 = 95. Now add 2 back to 95!",
            explanation: "145 - 50 = 95. Add 2 back: 95 + 2 = 97."
        },
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: Multi-Step Chain Deduction!</b><br>Link three or four comparative clues in a row to determine the absolute rank order.<br><i>Example: A is taller than B, B is taller than C, C is taller than D -> A is tallest, D is shortest.</i><br><br><b>Story:</b> In a chemical spill cleanup race, Shadow is faster than Sonic. Sonic is faster than Tails. Tails is faster than Knuckles. Who is the slowest runner of all four?",
            options: ["Shadow", "Sonic", "Tails", "Knuckles"],
            answer: "Knuckles",
            hint: "Follow the chain downward: Shadow > Sonic > Tails > Knuckles. Who is at the very end?",
            explanation: "The ranking is Shadow > Sonic > Tails > Knuckles, making Knuckles the slowest."
        },

        // --- Phase 6: Star Light Zone (Advanced Logic & Deduction - Enhanced) ---
        {
            type: "text",
            question: "<b>Advanced Concept: Combinations with Three Groups!</b><br>To find total outcomes when combining three different categories, multiply all three choice counts together.<br><i>Example: 2 hats, 3 shirts, and 2 pants = 2 x 3 x 2 = 12 combinations.</i><br><br><b>Story:</b> Tails builds custom hover shoes in Star Light Zone. He has 3 different motor types, 2 wing designs, and 3 color skins. How many total unique hover shoe combinations can he build (3 x 2 x 3)?",
            answer: "18",
            hint: "Multiply the choices together: 3 motors x 2 wings x 3 colors.",
            explanation: "3 x 2 = 6, and 6 x 3 = 18 unique hover shoe combinations."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Rotational and Line Symmetry!</b><br>A shape has line symmetry if it can be folded in half with matching sides. It has rotational symmetry if it looks identical when spun around a central point.<br><i>Example: A perfect circle has infinite line symmetry and rotational symmetry.</i><br><br><b>Story:</b> Marty inspects a glowing star-shaped platform in Star Light Zone. Does this regular 5-pointed star shape have line symmetry?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "Can you draw lines straight down through the points of a star so both left and right halves match?",
            explanation: "Yes, a regular star has 5 lines of symmetry connecting each point to the opposite side."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: The Quadruple Trick for x8!</b><br>To multiply any number by 8 quickly, double it three times in a row!<br><i>Example: 6 x 8 -> Double 6 (12), double 12 (24), double 24 (48).</i><br><br><b>Story:</b> Marty uses the Triple-Double trick to solve 7 x 8 for star-light reflector calibration: First double 7 to get 14. Double 14 to get 28. Now double 28. What is 7 x 8?",
            answer: "56",
            hint: "Double 28 (28 + 28 = ?).",
            explanation: "Double 7 is 14, double 14 is 28, double 28 is 56. 7 x 8 = 56."
        },
        {
            type: "mcq",
            question: "<b>Advanced Concept: Complex Elapsed Time with Time Zones!</b><br>Calculate the exact total minutes elapsed when crossing over hour markers (remember 1 hour = 60 minutes).<br><i>Example: From 1:45 PM to 2:15 PM is 15 minutes to reach 2:00, plus 15 minutes = 30 minutes total.</i><br><br><b>Story:</b> Sonic starts a night-sky speed run across Star Light Zone at 8:35 PM and finishes at 9:20 PM. How many total minutes did the run take?",
            options: ["35 minutes", "40 minutes", "45 minutes", "50 minutes"],
            answer: "45 minutes",
            hint: "Count from 8:35 PM to 9:00 PM (25 minutes), then add the 20 minutes past 9:00!",
            explanation: "25 minutes to reach 9:00 PM + 20 minutes past 9 = 45 minutes total."
        },
        {
            type: "mcq",
            question: "<b>Advanced Strategy: Double-Checking with Two Inverse Operations!</b><br>You can verify complex equations by working both backward with subtraction and checking division factors.<br><i>Example: If 18 x 3 = 54, verify by doing 54 / 3 = 18.</i><br><br><b>Story:</b> Shadow calculates that 24 x 4 = 96 security seals. Verify his math by dividing 96 by 4. Does it equal 24?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "Does 96 divided by 4 equal 24?",
            explanation: "Yes! 96 / 4 = 24, confirming Shadow's multiplication was 100% accurate."
        },

        // --- Phase 7: Boss Battle vs. Dr. Eggman's Death Egg Robot (Advanced Multi-Step) ---
        {
            type: "mcq",
            question: "<b>Advanced Concept: Complex Probability (Mutually Exclusive)!</b><br>Probability is the number of favorable outcomes divided by the total possible outcomes in a sample set.<br><i>Example: Drawing 2 red marbles out of 10 total marbles is 2/10 or 1/5.</i><br><br><b>Story:</b> Dr. Eggman hides 2 real control switches among 8 fake decoys (10 total switches). What is the exact probability that Marty or Sonic picks a real switch on the very first try?",
            options: ["1 in 5 chance", "1 in 4 chance", "2 in 5 chance", "4 in 5 chance"],
            answer: "1 in 5 chance",
            hint: "Simplify the fraction 2 out of 10 (2/10 -> divide top and bottom by 2).",
            explanation: "2 favorable switches out of 10 total = 2/10, which simplifies to 1 in 5 chance."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Advanced Friendly Number Grouping!</b><br>When adding four numbers, pair up numbers that make clean multiples of 10 or 100 first for instant calculation.<br><i>Example: 23 + 47 + 15 + 25 -> Pair (23 + 47 = 70) and (15 + 25 = 40) -> 70 + 40 = 110.</i><br><br><b>Story:</b> Marty combines power crystals to breach Eggman's shield: 38 + 42 + 25 + 15. Group (38 + 42 = 80) and (25 + 15 = 40). What is the total power sum?",
            answer: "120",
            hint: "Add 80 and 40 together!",
            explanation: "(38 + 42) + (25 + 15) = 80 + 40 = 120 power units."
        },
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: Multi-Constraint 'NOT' Elimination!</b><br>When multiple negative clues eliminate several zones or options at once, evaluate what single choice survives.<br><i>Example: Not red, not blue, not square means it must be green and round.</i><br><br><b>Story:</b> Dr. Eggman's Death Egg Robot core weak spot meets these rules: Clue 1: It is NOT in Sector Alpha. Clue 2: It is NOT in Sector Beta. Clue 3: It is on an even-numbered level among options [Sector Alpha, Sector Beta, Sector Gamma 4, Sector Delta 3]. Where is the weak spot?",
            options: ["Sector Alpha", "Sector Beta", "Sector Gamma 4", "Sector Delta 3"],
            answer: "Sector Gamma 4",
            hint: "Cross out Alpha and Beta. Look for the remaining option with an even level number (4).",
            explanation: "Eliminating Alpha and Beta leaves Gamma 4 and Delta 3. Since 4 is even, Sector Gamma 4 is correct."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Complex Median with Odd Set!</b><br>Arrange numbers from least to greatest and find the exact middle number in an odd-numbered list.<br><i>Example: For [12, 18, 25, 30, 42], the middle number is 25.</i><br><br><b>Story:</b> Tails records five laser cannon firing speeds against Eggman: 45 mph, 62 mph, 38 mph, 75 mph, and 50 mph. Put them in order [38, 45, 50, 62, 75]. What is the Median speed?",
            answer: "50",
            hint: "Look at the sorted list: 38, 45, 50, 62, 75. Which number sits directly in the middle?",
            explanation: "In the sorted 5-item list, 50 is the middle value (Median)."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Three-Step Sequential Problem Solving!</b><br>Break complex boss battles into three distinct sequential math steps: multiply, add, then subtract.<br><i>Example: 4 packs of 5 shields = 20. Add 3 extra = 23. If 2 break, 23 - 2 = 21 remaining.</i><br><br><b>Story:</b> Shadow fires 3 volleys of laser pods with 8 pods in each volley (3 x 8 = 24). Tails gives him 6 backup pods (24 + 6 = 30). Eggman's defense laser destroys 7 pods. How many working pods remain (30 - 7)?",
            answer: "23",
            hint: "Step 1: 3 x 8 = 24. Step 2: 24 + 6 = 30. Step 3: 30 - 7 = ?",
            explanation: "3 x 8 = 24, + 6 backup = 30 total. 30 - 7 destroyed = 23 working pods remaining."
        },

        // --- Phase 8: Chili Dog Victory Celebration (Victory & Celebration - Enhanced) ---
        {
            type: "text",
            question: "<b>Advanced Concept: Multi-Bar Graph Analysis!</b><br>Compare data across multiple categories on a bar graph by finding the difference between two tall bars.<br><i>Example: If Bar A is 45 and Bar B is 28, the difference is 45 - 28 = 17.</i><br><br><b>Story:</b> On the final victory scoreboard, Marty's team earns 85 celebration points, while Dr. Eggman's captured score stalls at 37 points. Subtract 37 from 85 to find Marty's winning point margin.",
            answer: "48",
            hint: "Subtract 37 from 85 (hint: 85 - 30 = 55, then 55 - 7 = 48).",
            explanation: "85 - 37 = 48 points victory margin."
        },
        {
            type: "text",
            question: "<b>Advanced Strategy: Multiply by 99 (Multiply by 100 minus 1 group)!</b><br>To multiply a number by 99 quickly, multiply it by 100 first, then subtract that exact number from the result!<br><i>Example: 6 x 99 -> (6 x 100) - 6 = 600 - 6 = 594.</i><br><br><b>Story:</b> Marty calculates total celebration chili dogs for the entire town: 7 x 99. First do 7 x 100 = 700. Now subtract 7 from 700. What is 7 x 99?",
            answer: "693",
            hint: "Subtract 7 from 700 (700 - 7).",
            explanation: "7 x 100 = 700. 700 - 7 = 693 chili dogs."
        },
        {
            type: "text",
            question: "<b>Advanced Concept: Multi-Item Money Change Calculation!</b><br>Calculate total cost of multiple items first, then subtract that total from the money paid to find exact change.<br><i>Example: Pay $50 for two items costing $15 each ($30 total) -> $50 - $30 = $20 change.</i><br><br><b>Story:</b> Marty buys 3 deluxe chili dog combo meals for Sonic, Shadow, and himself. Each combo costs $8 ($3 x $8 = $24 total). He pays with a $50 bill. How much change does Marty receive ($50 - $24)?",
            answer: "26",
            hint: "Subtract the $24 meal cost from the $50 bill paid.",
            explanation: "$50 - $24 = $26 change returned."
        },
        {
            type: "mcq",
            question: "<b>Advanced Logic Strategy: Multi-Person Grid Matching!</b><br>Use process of elimination across a table of multiple people and items so each person gets their exact unique match.<br><i>Example: 3 racers and 3 cars. If A takes Car 1 and B cannot take Car 2, deduce the complete lineup.</i><br><br><b>Story:</b> Three heroes (Sonic, Shadow, and Marty) each claim a legendary Chaos Emerald. Clue 1: Sonic refuses to take the Red Emerald. Clue 2: Shadow takes the Green Emerald. Marty takes the Blue Emerald. Which emerald is left for Sonic?",
            options: ["Blue Emerald", "Green Emerald", "Red Emerald"],
            answer: "Red Emerald",
            hint: "Shadow took Green, Marty took Blue. What is the only emerald left for Sonic?",
            explanation: "With Green and Blue claimed, the Red Emerald is left for Sonic."
        },
        {
            type: "text",
            question: "<b>Grand Finale: Advanced Multi-Phase Accumulation!</b><br>Combine scores across all 8 zones to find the ultimate grand total for Team Sonic and Marty!<br><i>Example: 25 + 25 + 25 + 25 = 100 points.</i><br><br><b>Story:</b> Marty, Sonic, and Shadow conquer all 8 zones of the Chaos Emerald quest, earning 15 victory trophies in each of the 8 zones. Calculate 8 x 15 to find their grand total trophy score!",
            answer: "120",
            hint: "Calculate 8 x 15 (Hint: 8 x 10 = 80, 8 x 5 = 40, then 80 + 40).",
            explanation: "8 x 15 = (8 x 10) + (8 x 5) = 80 + 40 = 120 grand total trophies! Chaos Champions!"
        }
    ]
};
