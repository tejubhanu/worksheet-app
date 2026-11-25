// Marty's Worksheet — Mission 7: Bolt & the Archive of Forgotten Tools
// Drop-in replacement for questions.js in worksheet-app
// Story: Deep under the Moon Base sits the Archive, where every tool
// Marty ever mastered is kept. A dust storm has scrambled the vaults.
// Each room restores one forgotten skill family, chosen from the
// 2026-11-25 concept cheat-sheet analysis of all 877 questions in the
// repo's git history: fractions / decimals / percent, geometry beyond
// perimeter, data & probability, the classic logic puzzles (Sudoku,
// Knights & Knaves, Mastermind, nonograms, Minesweeper), and science
// fair-test thinking — the areas practiced least or longest ago.
// Two genuine firsts for the app: area of a triangle, and angles on a
// straight line. Same rules as Missions 3-6: no per-question help field
// anywhere in this file, short 'Tool' lines, explanations for Review.

const missionConfig = {
    themeTitle: "🗝️ Bolt & the Archive of Forgotten Tools",
    themeColor: "linear-gradient(135deg, #b45309 0%, #0f172a 50%, #7c3aed 100%)",
    themeIcon: "🗝️",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- VAULT 1: FRACTIONS (Questions 1 - 5) ---
        {
            type: "text",
            question: "<b>Tool: Fraction-of-a-Set Cutter</b><br><i>How it works:</i> To find a fraction of a set, divide the set by the denominator to get one part, then multiply by the numerator.<br><br><b>Mission:</b> The Archive stores 40 ancient scrolls. Marty unrolls 3/5 of them. How many scrolls does he unroll?",
            answer: "24",
            explanation: "One fifth of 40 is 40 / 5 = 8. Three fifths is 3 x 8 = 24 scrolls."
        },
        {
            type: "mcq",
            question: "<b>Tool: Equivalent Fraction Lens</b><br><i>How it works:</i> Fractions are equivalent when you multiply (or divide) the top AND bottom by the same number — the amount stays identical, only the slicing changes.<br><br><b>Mission:</b> Which fraction is EXACTLY equal to 2/3?",
            options: ["4/6", "3/4", "2/6", "5/8"],
            answer: "4/6",
            explanation: "2/3 with top and bottom doubled is 4/6. The others are all different amounts: 3/4 and 5/8 are bigger or smaller slices, and 2/6 is only 1/3."
        },
        {
            type: "mcq",
            question: "<b>Tool: Fraction Comparator</b><br><i>How it works:</i> To compare fractions with different denominators, reslice them to a common denominator: sixths and quarters both fit into twelfths.<br><br><b>Mission:</b> Two vault doors are partly open: one is 5/6 open, the other is 3/4 open. Which door is open WIDER?",
            options: ["5/6", "3/4", "They are equal"],
            answer: "5/6",
            explanation: "In twelfths: 5/6 = 10/12 and 3/4 = 9/12. 10/12 is wider, so the 5/6 door wins."
        },
        {
            type: "mcq",
            question: "<b>Tool: Fraction Adder — Quarters</b><br><i>How it works:</i> Before adding fractions, reslice to a common denominator. A half is the same as 2 quarters.<br><br><b>Mission:</b> Bolt pours 1/2 a litre of coolant, then another 1/4 litre. How much coolant in total?",
            options: ["3/4", "2/6", "1/4", "3/6"],
            answer: "3/4",
            explanation: "1/2 = 2/4. Then 2/4 + 1/4 = 3/4 of a litre."
        },
        {
            type: "mcq",
            question: "<b>Tool: Fraction Adder — Sixths</b><br><i>How it works:</i> Same move, different slices: thirds reslice neatly into sixths, because 6 is a multiple of 3.<br><br><b>Mission:</b> A rope is built from two pieces: 2/3 of a metre and 1/6 of a metre. How long is the rope in total?",
            options: ["3/9", "5/6", "2/9", "1/2"],
            answer: "5/6",
            explanation: "2/3 = 4/6. Then 4/6 + 1/6 = 5/6 of a metre."
        },

        // --- VAULT 2: PERCENT & DECIMALS (Questions 6 - 10) ---
        {
            type: "text",
            question: "<b>Tool: Percent Splitter</b><br><i>How it works:</i> Awkward percents split into friendly ones: 15% = 10% + 5%. And 5% is always half of 10%.<br><br><b>Mission:</b> The Archive's tax bot charges 15% of 80 gold coins. How many coins does it charge?",
            answer: "12",
            explanation: "10% of 80 is 8. 5% is half of that: 4. 15% = 8 + 4 = 12 coins."
        },
        {
            type: "text",
            question: "<b>Tool: Sale Price Calculator</b><br><i>How it works:</i> A discount of 25% means: find 25% of the price, then SUBTRACT it. What you pay is the other 75%.<br><br><b>Mission:</b> A game in the Archive gift shop costs 60 coins, with 25% off today. What is the sale price?",
            answer: "45",
            explanation: "25% of 60 is 15. Sale price: 60 - 15 = 45 coins."
        },
        {
            type: "mcq",
            question: "<b>Tool: Decimal Comparator</b><br><i>How it works:</i> Compare decimals place by place from the left. Padding with zeros helps: 0.7 is the same as 0.70, and 70 hundredths beats 65 hundredths.<br><br><b>Mission:</b> Two fuel gauges read 0.7 and 0.65. Which gauge shows MORE fuel?",
            options: ["0.7", "0.65", "0.07", "0.6"],
            answer: "0.7",
            explanation: "0.7 = 0.70, which is more than 0.65. The longer decimal is not always the bigger one!"
        },
        {
            type: "text",
            question: "<b>Tool: Decimal Money Adder</b><br><i>How it works:</i> Line up the decimal points and add like normal money: dollars with dollars, cents with cents.<br><br><b>Mission:</b> Marty buys an Archive map for $3.75 and a key ring for $2.50. How much does he spend in total? (Type just the number, like 6.25)",
            answer: "6.25",
            explanation: "3.75 + 2.50 = 6.25 dollars."
        },
        {
            type: "text",
            question: "<b>Tool: Fraction-to-Percent Dial</b><br><i>How it works:</i> Percent means 'out of 100', and some fractions convert on sight: 1/2 = 50%, and 1/4 is half of that.<br><br><b>Mission:</b> A spinner lands on red exactly 1/4 of the time. What percent of the time is that?",
            answer: "25",
            explanation: "1/4 of 100% is 25%. The spinner lands on red 25% of the time."
        },

        // --- VAULT 3: GEOMETRY WORKSHOP (Questions 11 - 15) ---
        {
            type: "text",
            question: "<b>Tool: NEW — Triangle Area Cutter</b><br><i>How it works:</i> A triangle is exactly HALF of its rectangle. So: area = (base x height) / 2. Cut the rectangle in half, keep one piece.<br><br><b>Mission:</b> An Archive warning flag is a triangle with base 8 cm and height 6 cm. What is its area in square cm?",
            answer: "24",
            explanation: "8 x 6 = 48 for the full rectangle, and the triangle is half of it: 48 / 2 = 24 square cm."
        },
        {
            type: "text",
            question: "<b>Tool: NEW — Straight-Line Angles</b><br><i>How it works:</i> Angles sitting on a straight line always add to 180 degrees — a half-turn. If you know one, the other is 180 minus it.<br><br><b>Mission:</b> A laser beam bounces off a mirror on a straight shelf. One angle measures 65 degrees. What is the angle next to it on the same straight line?",
            answer: "115",
            explanation: "180 - 65 = 115 degrees."
        },
        {
            type: "text",
            question: "<b>Tool: Volume Vault</b><br><i>How it works:</i> The volume of a box is length x width x height — how many unit cubes fit inside.<br><br><b>Mission:</b> An Archive crate measures 5 units long, 3 units wide and 2 units high. What is its volume?",
            answer: "30",
            explanation: "5 x 3 x 2 = 30 cubic units."
        },
        {
            type: "text",
            question: "<b>Tool: Symmetry Scanner</b><br><i>How it works:</i> A regular polygon has exactly as many lines of symmetry as it has sides — every vertex and every side-midpoint gives one fold line.<br><br><b>Mission:</b> How many lines of symmetry does a regular hexagon have?",
            answer: "6",
            explanation: "A regular hexagon has 6 sides, so it has 6 lines of symmetry."
        },
        {
            type: "text",
            question: "<b>Tool: Area-or-Perimeter Decider</b><br><i>How it works:</i> Covering a surface (carpet, paint, tiles) needs AREA: length x width. Edging or fencing needs PERIMETER. Read what the job actually is before calculating.<br><br><b>Mission:</b> Marty is carpeting a rectangular Archive room that is 6 m by 4 m. How many square metres of carpet does he need?",
            answer: "24",
            explanation: "Carpet covers the floor, so it is area: 6 x 4 = 24 square metres. (The perimeter, 20 m, would be the skirting board instead!)"
        },

        // --- VAULT 4: DATA & PROBABILITY (Questions 16 - 20) ---
        {
            type: "text",
            question: "<b>Tool: Mean Machine</b><br><i>How it works:</i> The mean is the total shared out equally: add everything, then divide by how many values there are.<br><br><b>Mission:</b> Bolt's five daily step counts (in thousands) are 4, 8, 6, 10 and 7. What is the mean?",
            answer: "7",
            explanation: "Total: 4 + 8 + 6 + 10 + 7 = 35. Shared among 5 days: 35 / 5 = 7."
        },
        {
            type: "text",
            question: "<b>Tool: Median Finder — Even Set</b><br><i>How it works:</i> Sort the values first. With an EVEN count, the median is the halfway point between the two middle values.<br><br><b>Mission:</b> Four Archive doors have code lengths 14, 6, 22 and 10. What is the median code length?",
            answer: "12",
            explanation: "Sorted: 6, 10, 14, 22. The middle two are 10 and 14, and halfway between them is 12."
        },
        {
            type: "text",
            question: "<b>Tool: Mode Spotter</b><br><i>How it works:</i> The mode is the value that appears MOST often. Count each value before deciding.<br><br><b>Mission:</b> The Archive log shows daily visitor counts: 2, 5, 5, 8, 5, 9. What is the mode?",
            answer: "5",
            explanation: "5 appears three times — more than any other value. The mode is 5."
        },
        {
            type: "text",
            question: "<b>Tool: Bar Graph Reader</b><br><i>How it works:</i> Read each bar's value off the graph first, write them down, and only then do the maths the question asks for.<br><br><b>Mission:</b> A bar graph of favourite Archive exhibits shows: Robots 12 votes, Space 9 votes, Dinosaurs 15 votes, Oceans 4 votes. How many MORE votes did Dinosaurs get than Oceans?",
            answer: "11",
            explanation: "Dinosaurs 15 - Oceans 4 = 11 more votes."
        },
        {
            type: "mcq",
            question: "<b>Tool: Probability Simplifier</b><br><i>How it works:</i> Probability = (winning outcomes) / (total outcomes) — then simplify the fraction, just like any other.<br><br><b>Mission:</b> A bag holds 5 red, 3 blue and 2 green marbles (10 in total). Marty picks one without looking. What is the probability it is red, as a simplified fraction?",
            options: ["1/2", "1/5", "3/10", "2/10"],
            answer: "1/2",
            explanation: "5 red out of 10 total is 5/10, which simplifies to 1/2."
        },

        // --- VAULT 5: LOGIC CLASSICS I — GRIDS (Questions 21 - 25) ---
        {
            type: "text",
            question: "<b>Tool: Mini-Sudoku — First Cell</b><br><i>How it works:</i> In 4x4 Sudoku every row, column and 2x2 box must contain 1, 2, 3 and 4 exactly once. A cell's number is forced by what its row is missing. The grid: Row 1: 1, _, 3, 4. Row 2: _, 4, 1, 2. Row 3: 2, 1, _, 3. Row 4: 4, 3, 2, _.<br><br><b>Mission:</b> What number belongs in Row 1, second position?",
            answer: "2",
            explanation: "Row 1 already has 1, 3 and 4, so the only missing number is 2. (Its column agrees: 2, 4, 1, 3 uses each number once.)"
        },
        {
            type: "text",
            question: "<b>Tool: Mini-Sudoku — Last Cell</b><br><i>How it works:</i> Same grid: Row 1: 1, 2, 3, 4. Row 2: _, 4, 1, 2. Row 3: 2, 1, _, 3. Row 4: 4, 3, 2, _. Work on the bottom row this time.<br><br><b>Mission:</b> What number belongs in Row 4, fourth position — the very last cell of the grid?",
            answer: "1",
            explanation: "Row 4 has 4, 3 and 2, so it is missing 1. Its column (4, 2, 3, 1) confirms it."
        },
        {
            type: "text",
            question: "<b>Tool: Nonogram Counter</b><br><i>How it works:</i> In a nonogram, row clues say how many squares in that row are filled in. The total filled squares in the picture is just the clues added together.<br><br><b>Mission:</b> A 3x3 nonogram has row clues: Row 1 fills 3 squares, Row 2 fills 1 square (the middle one), Row 3 fills 3 squares. How many squares are filled in the whole picture?",
            answer: "7",
            explanation: "3 + 1 + 3 = 7 filled squares. (The picture is a plus-sign / cross shape.)"
        },
        {
            type: "mcq",
            question: "<b>Tool: Pet Grid Deduction</b><br><i>How it works:</i> Match each person to one pet, using every clue and crossing off what each clue rules out. Three friends — Ana, Ben and Cy — have a cat, a dog and a fish, one each.<br><br><b>Mission:</b> Clues: Ben's pet can swim. Ana's pet does not bark. Who has the DOG?",
            options: ["Ana", "Ben", "Cy"],
            answer: "Cy",
            explanation: "Ben's pet swims, so Ben has the fish. Ana's pet does not bark, and the fish is taken, so Ana has the cat. That leaves the dog for Cy."
        },
        {
            type: "text",
            question: "<b>Tool: Minesweeper Logic</b><br><i>How it works:</i> A Minesweeper clue number counts the mines touching that square — exactly that many, no more, no fewer.<br><br><b>Mission:</b> A clue square shows the number 2. It touches exactly three squares: P, Q and R. Square Q is opened and is SAFE. How many mines are hidden among squares P and R?",
            answer: "2",
            explanation: "The clue demands exactly 2 mines among P, Q and R. Q is safe, so both mines must be P and R: 2 mines."
        },

        // --- VAULT 6: LOGIC CLASSICS II — TRUTH, LIES & CODES (Questions 26 - 30) ---
        {
            type: "mcq",
            question: "<b>Tool: Knights & Knaves</b><br><i>How it works:</i> On this island, Knights always tell the truth and Knaves always lie. Test each possibility and keep the one that does not contradict itself.<br><br><b>Mission:</b> Bot A says: 'Bot B always lies.' Bot B says: 'Bot A and I are the same type.' Is Bot B a Knight (truth-teller) or a Knave (liar)?",
            options: ["Knight", "Knave"],
            answer: "Knave",
            explanation: "Suppose B were a Knight: then 'we are the same type' is true, making A a Knight too — but then A's claim 'B always lies' would be false, a contradiction. So B is a Knave: his statement is false, they are different types, A is a Knight, and A's claim checks out."
        },
        {
            type: "mcq",
            question: "<b>Tool: Mastermind Code Breaker</b><br><i>How it works:</i> Each guess gets feedback: how many digits are correct AND in the right place, or correct but in the wrong place. Combine ALL the feedback before deciding. The secret is a 2-digit code with different digits.<br><br><b>Mission:</b> Guess 4-9: one digit correct, right place. Guess 9-7: one digit correct, right place. Guess 7-4: BOTH digits correct, both in the wrong place. What is the code?",
            options: ["47", "74", "49", "97"],
            answer: "47",
            explanation: "The third guess proves both 4 and 7 are in the code, swapped — so the code must be 47. The other feedback agrees: 4 is in its right place in guess 1, and 7 is in its right place in guess 2."
        },
        {
            type: "mcq",
            question: "<b>Tool: Counterexample Hunter</b><br><i>How it works:</i> A statement claiming 'ALL' of something is true can be destroyed by ONE single counterexample — one case where it fails.<br><br><b>Mission:</b> An Archive tablet claims: 'ALL prime numbers are odd.' Which number is a counterexample that disproves it?",
            options: ["2", "9", "15", "21"],
            answer: "2",
            explanation: "2 is prime (its only factors are 1 and 2) but it is EVEN — one counterexample is enough to break an 'all' claim. (9, 15 and 21 are odd but not prime, so they say nothing about the claim.)"
        },
        {
            type: "text",
            question: "<b>Tool: Picture Equations</b><br><i>How it works:</i> Each symbol stands for one number, the same number everywhere. Solve the line you CAN solve first, then carry that value into the next line.<br><br><b>Mission:</b> STAR + STAR = 10. STAR + MOON = 12. What number is MOON?",
            answer: "7",
            explanation: "STAR + STAR = 10 means STAR = 5. Then 5 + MOON = 12, so MOON = 7."
        },
        {
            type: "mcq",
            question: "<b>Tool: Chain Deduction — Race Order</b><br><i>How it works:</i> Stack every 'before' clue into one chain before answering anything.<br><br><b>Mission:</b> Four racers finish a Moon Base race. Zed finished before Pax. Pax finished before Rho. Rho finished before Uma. Who finished SECOND?",
            options: ["Zed", "Pax", "Rho", "Uma"],
            answer: "Pax",
            explanation: "The full chain is Zed, then Pax, then Rho, then Uma. Second place is Pax."
        },

        // --- VAULT 7: SCIENCE LAB — FAIR TESTS (Questions 31 - 35) ---
        {
            type: "mcq",
            question: "<b>Tool: Fair Test Checker</b><br><i>How it works:</i> A test is only FAIR if exactly ONE thing changes at a time. If two things change, you can never know which one caused the result.<br><br><b>Mission:</b> Priya tests whether more light makes plants grow taller. Her sunny plant also got MORE water than her shady plant. Can she conclude that light caused the height difference?",
            options: ["Yes", "No"],
            answer: "No",
            explanation: "Two things changed — light AND water — so the test is unfair. The extra water might be the real cause."
        },
        {
            type: "mcq",
            question: "<b>Tool: Independent Variable Spotter</b><br><i>How it works:</i> The independent variable is the ONE thing the experimenter changes on purpose. Everything else is kept the same.<br><br><b>Mission:</b> Marty tests which brand of paper towel absorbs the most water, using the same amount of water and the same size of towel piece every time. What is the independent variable — the thing he changes on purpose?",
            options: ["The towel brand", "The amount of water", "The size of the puddle", "The table"],
            answer: "The towel brand",
            explanation: "The brand is what he deliberately changes. The water amount and towel size are kept the same to keep the test fair."
        },
        {
            type: "mcq",
            question: "<b>Tool: Evidence Judge</b><br><i>How it works:</i> Predictions are guesses; fair-test results are evidence. When the evidence disagrees with a prediction again and again, the prediction falls — no matter how much you liked it.<br><br><b>Mission:</b> Marty predicts the red car is faster than the blue car. In 10 fair tests, the blue car wins 8 times. What should he conclude?",
            options: ["The prediction was not supported", "The red car is definitely faster", "The tests must have been unfair", "One more test will prove red is faster"],
            answer: "The prediction was not supported",
            explanation: "Eight out of ten fair results point the same way: the evidence does not support the prediction. Good scientists update."
        },
        {
            type: "mcq",
            question: "<b>Tool: Keep-It-The-Same Checklist</b><br><i>How it works:</i> Everything that is NOT the independent variable must be kept identical across tests, or the comparison means nothing.<br><br><b>Mission:</b> Bolt tests which surface makes a ball bounce highest: wood, carpet or tile. What must stay the SAME in every drop?",
            options: ["The ball and the drop height", "The surface", "The bounce height", "The colour of the room"],
            answer: "The ball and the drop height",
            explanation: "The surface is the variable being tested. The ball and the height it drops from must stay identical, or a higher bounce might just mean a higher drop."
        },
        {
            type: "mcq",
            question: "<b>Tool: Results Reader</b><br><i>How it works:</i> Conclusions must come from the RESULTS TABLE, not from what you hoped would win. Read the numbers, then speak.<br><br><b>Mission:</b> In Bolt's fair tests, a toy car travelled: 55 cm on wood, 30 cm on carpet, 48 cm on tile. Which surface let the car travel farthest?",
            options: ["Wood", "Carpet", "Tile"],
            answer: "Wood",
            explanation: "55 cm on wood is the biggest distance in the results, so wood let the car travel farthest."
        },

        // --- VAULT 8: THE GRAND GAUNTLET FINALE (Questions 36 - 40) ---
        {
            type: "text",
            question: "<b>Gauntlet Lock 1: Percent + Subtraction</b><br><i>How it works:</i> Combine the Archive's tools in order: first the percent (split it into 10% + 5%), then the plain subtraction.<br><br><b>Mission:</b> Bolt's power tank holds 80 units. He spends 15% of it opening the Gauntlet door, then 8 more units on the lights. How many units remain?",
            answer: "60",
            explanation: "15% of 80 is 12 (10% = 8, 5% = 4). Then 80 - 12 - 8 = 60 units remain."
        },
        {
            type: "text",
            question: "<b>Gauntlet Lock 2: The Big Flag</b><br><i>How it works:</i> Triangle area again — half of the rectangle — with bigger numbers this time.<br><br><b>Mission:</b> The Archive's ceremonial flag is a triangle with base 10 m and height 8 m. What is its area in square metres?",
            answer: "40",
            explanation: "10 x 8 = 80 for the rectangle; the triangle is half: 80 / 2 = 40 square metres."
        },
        {
            type: "mcq",
            question: "<b>Gauntlet Lock 3: Exactly One True</b><br><i>How it works:</i> Three boxes, one prize, and EXACTLY ONE of the three statements is true. Test each possible prize position and count the true statements.<br><br><b>Mission:</b> Box X says: 'The prize is not in X.' Box Y says: 'The prize is in X.' Box Z says: 'The prize is not in Z.' Exactly one statement is true. Which box holds the prize?",
            options: ["Box X", "Box Y", "Box Z"],
            answer: "Box Z",
            explanation: "If the prize were in X, both Y's and Z's statements would be true (2 trues — too many). If in Y, X's and Z's would be true (2 again). If in Z: X's statement is true, Y's is false, Z's is false — exactly one true. The prize is in Box Z."
        },
        {
            type: "text",
            question: "<b>Gauntlet Lock 4: The Missing Score</b><br><i>How it works:</i> Work the mean BACKWARD: the total is mean x count. If you know the total and all but one value, the missing value is what is left.<br><br><b>Mission:</b> Marty's four Archive quiz scores have a mean of 10. Three of the scores are 8, 12 and 9. What is the fourth score?",
            answer: "11",
            explanation: "Four scores with mean 10 must total 4 x 10 = 40. The known scores total 8 + 12 + 9 = 29. Missing score: 40 - 29 = 11."
        },
        {
            type: "mcq",
            question: "<b>Gauntlet Lock 5: The Master Code</b><br><i>How it works:</i> The Archive's last lock is a Mastermind code. The code uses only the digits 1, 4 and 5, with no repeats.<br><br><b>Mission:</b> Guess 4-1: exactly one digit is correct AND in the right place. Guess 1-4: exactly one digit is correct but in the WRONG place. What is the master code?",
            options: ["51", "15", "41", "54"],
            answer: "51",
            explanation: "From guess 2, one of these holds: 1 is in the code but not in position 1 (so it sits in position 2), or 4 is in the code but not in position 2 (so it sits in position 1). Try 1 in position 2: then guess 1's one correct digit is that same 1, in the right place — consistent — and position 1 is not 4 (otherwise guess 1 would show two correct), so from the allowed digits it must be 5. The code is 51, and every clue checks out."
        }
    ]
};
