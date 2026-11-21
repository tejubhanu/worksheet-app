// Marty's Worksheet — Mission 2: Level Up
// Drop-in replacement for questions.js in worksheet-app
// Same format as Mission 1: missionConfig with theme + 40 questions (8 phases x 5)
// New in this mission: order of operations, squares/cubes, negatives, LCM/GCF,
// decimals, percent, volume, angles, coordinates, early algebra, Fibonacci,
// mode/mean, magic squares, prime factorisation, and the Gauss pairing trick.
// Every answer below has been checked.

const missionConfig = {
    themeTitle: "🦔 Sonic & Shadow: Chaos Emerald Mastery — LEVEL 2",
    themeColor: "linear-gradient(135deg, #7c3aed 0%, #0f172a 50%, #f59e0b 100%)",
    themeIcon: "💎",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- PHASE 1: NUMBER SENSE LEVEL UP (Questions 1 - 5) ---
        {
            type: "text",
            question: "<b>Strategy: Order of Operations!</b><br><i>What it means:</i> Multiplication comes BEFORE addition and subtraction. Always do the multiply (and divide) steps first, then add and subtract left to right.<br><i>Example: 2 + 4 x 3 = 2 + 12 = 14, not 18.</i><br><br><b>Story:</b> Marty powers up a boost pad: 4 + 3 x 5 - 2. First do 3 x 5 = 15, then 4 + 15 - 2. What is the final power value?",
            answer: "17",
            hint: "Do the multiplication first: 3 x 5 = 15. Then 4 + 15 = 19, and 19 - 2 = ?",
            explanation: "3 x 5 = 15 first. Then 4 + 15 - 2 = 17."
        },
        {
            type: "text",
            question: "<b>Strategy: Square Numbers!</b><br><i>What it means:</i> Squaring a number means multiplying it by itself. 7 squared is written 7 x 7 and equals 49.<br><i>Example: 5 squared = 5 x 5 = 25.</i><br><br><b>Story:</b> A Chaos Emerald chamber has 7 rows with 7 crystals in each row, plus 6 extra crystals by the door. How many crystals are there in total: (7 x 7) + 6?",
            answer: "55",
            hint: "7 x 7 = 49. Now add the 6 extra crystals.",
            explanation: "7 x 7 = 49. 49 + 6 = 55 crystals."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Estimating a Product by Rounding!</b><br><i>What it means:</i> Round each number to a friendly ten first, then multiply. That gives a fast, close estimate.<br><i>Example: 29 x 41 is about 30 x 40 = 1,200.</i><br><br><b>Story:</b> Tails estimates the Badnik count: 48 x 21. He rounds 48 up to 50 and 21 down to 20. What is his estimate?",
            options: ["800", "1,000", "1,200", "1,400"],
            answer: "1,000",
            hint: "Multiply the rounded numbers: 50 x 20. Count the zeros carefully!",
            explanation: "50 x 20 = 1,000. That is the estimate for 48 x 21."
        },
        {
            type: "text",
            question: "<b>Strategy: Negative Numbers on a Number Line!</b><br><i>What it means:</i> Numbers below zero are negative. If you start above zero and move down past zero, you land in negative numbers.<br><i>Example: Starting at 2 and dropping 5 lands at -3.</i><br><br><b>Story:</b> In Ice Cap Zone the morning temperature is 5 degrees. Overnight it drops by 8 degrees. What is the new temperature?",
            answer: "-3",
            hint: "Start at 5. Move down 5 to reach 0, then keep moving down 3 more.",
            explanation: "5 - 8 = -3 degrees."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Divisibility Detective!</b><br><i>What it means:</i> A number is divisible by 3 if its digits add up to a multiple of 3. It is divisible by 5 if it ends in 0 or 5. Some numbers pass BOTH tests.<br><i>Example: 45 passes both: 4 + 5 = 9 (multiple of 3) and it ends in 5.</i><br><br><b>Story:</b> Which vault code is divisible by BOTH 3 and 5?",
            options: ["132", "145", "165", "172"],
            answer: "165",
            hint: "Check each one: does it end in 0 or 5, AND do its digits add to a multiple of 3? 1 + 6 + 5 = 12.",
            explanation: "165 ends in 5 and 1 + 6 + 5 = 12, a multiple of 3. So 165 is divisible by both 3 and 5."
        },

        // --- PHASE 2: MULTIPLICATION & DIVISION MASTERY (Questions 6 - 10) ---
        {
            type: "text",
            question: "<b>Strategy: Two-Digit Distributive Chunking!</b><br><i>What it means:</i> Split the bigger number into tens and ones, multiply each part, then add.<br><i>Example: 6 x 23 = (6 x 20) + (6 x 3) = 120 + 18 = 138.</i><br><br><b>Story:</b> Tails packs 8 crates with 24 rings in each crate. He calculates (8 x 20) + (8 x 4). How many rings is that in total?",
            answer: "192",
            hint: "8 x 20 = 160. 8 x 4 = 32. Add 160 + 32.",
            explanation: "8 x 24 = (8 x 20) + (8 x 4) = 160 + 32 = 192 rings."
        },
        {
            type: "text",
            question: "<b>Strategy: Lowest Common Multiple (LCM)!</b><br><i>What it means:</i> The LCM is the smallest number that appears in BOTH numbers' times tables. List multiples of each until they meet.<br><i>Example: Multiples of 4: 4, 8, 12. Multiples of 6: 6, 12. LCM of 4 and 6 is 12.</i><br><br><b>Story:</b> Sonic's boost recharges every 6 seconds and Shadow's every 8 seconds. They start together. In how many seconds will they recharge at the same moment again?",
            answer: "24",
            hint: "Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24. Where do they first meet?",
            explanation: "The first common multiple of 6 and 8 is 24 seconds."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Greatest Common Factor (GCF)!</b><br><i>What it means:</i> The GCF is the biggest number that divides evenly into BOTH numbers.<br><i>Example: Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. GCF is 6.</i><br><br><b>Story:</b> Marty shares 18 red rings and 24 blue rings into equal groups with nothing left over. What is the GREATEST number of groups he can make?",
            options: ["3", "6", "9", "12"],
            answer: "6",
            hint: "Which is the biggest number in your options that divides into both 18 and 24?",
            explanation: "6 divides into both 18 (3 times) and 24 (4 times), and no bigger common factor exists. GCF = 6."
        },
        {
            type: "text",
            question: "<b>Strategy: Reading the Remainder!</b><br><i>What it means:</i> Sometimes the question is not asking for the remainder — it is asking how many FULL groups you can make. Leftovers do not count as a full group.<br><i>Example: 29 divided by 5 is 5 full groups with 4 left over.</i><br><br><b>Story:</b> Marty has 53 rings. Each storage box holds exactly 6 rings. How many FULL boxes can he fill?",
            answer: "8",
            hint: "6 x 8 = 48, which fits. 6 x 9 = 54, which is too many. The 5 leftover rings do not make a full box.",
            explanation: "53 / 6 = 8 full boxes, with 5 rings left over."
        },
        {
            type: "text",
            question: "<b>Strategy: The Multiply-by-11 Trick!</b><br><i>What it means:</i> To multiply a 2-digit number by 11, keep the two outside digits and put their SUM in the middle.<br><i>Example: 23 x 11 -> 2, then 2 + 3 = 5, then 3 -> 253.</i><br><br><b>Story:</b> Use the trick on 34 x 11: the outside digits are 3 and 4, and the middle is 3 + 4 = 7. What is 34 x 11?",
            answer: "374",
            hint: "Put 3 first, then 7 in the middle, then 4 at the end.",
            explanation: "34 x 11 = 374."
        },

        // --- PHASE 3: FRACTIONS, DECIMALS & PERCENTS (Questions 11 - 15) ---
        {
            type: "mcq",
            question: "<b>Strategy: Adding Fractions with Different Denominators!</b><br><i>What it means:</i> You can only add fractions directly when the bottom numbers (denominators) match. Turn 1/2 into 2/4 first, because 2/4 is exactly the same amount.<br><i>Example: 1/2 + 1/4 = 2/4 + 1/4 = 3/4.</i><br><br><b>Story:</b> Marty eats 1/2 of a chili dog at lunch and 1/4 more at snack time. How much has he eaten altogether?",
            options: ["1/4", "1/2", "3/4", "1"],
            answer: "3/4",
            hint: "Rewrite 1/2 as 2/4. Then add 2/4 + 1/4.",
            explanation: "1/2 = 2/4. 2/4 + 1/4 = 3/4 of a chili dog."
        },
        {
            type: "text",
            question: "<b>Strategy: Percent Means Out of 100!</b><br><i>What it means:</i> 25% is the same as 1/4. To find 25% of a number, just divide it by 4.<br><i>Example: 25% of 40 = 40 / 4 = 10.</i><br><br><b>Story:</b> Tails' drone battery holds 80 units of charge and it is at 25%. How many units of charge does it have?",
            answer: "20",
            hint: "Divide 80 by 4.",
            explanation: "25% of 80 = 80 / 4 = 20 units."
        },
        {
            type: "text",
            question: "<b>Strategy: Adding Decimal Money!</b><br><i>What it means:</i> Line up the decimal points and add like normal numbers. Cents add to cents, dollars add to dollars.<br><i>Example: $2.25 + $1.50 = $3.75.</i><br><br><b>Story:</b> Marty buys a comic for $4.75 and a sticker pack for $2.50. How much does he spend in total? Type just the number, like 7.25",
            answer: "7.25",
            hint: "Add the cents first: 75 + 50 = 125 cents, which is $1.25. Then add the dollars.",
            explanation: "$4.75 + $2.50 = $7.25."
        },
        {
            type: "text",
            question: "<b>Strategy: Equivalent Fractions!</b><br><i>What it means:</i> Multiply the top and bottom of a fraction by the SAME number and the amount stays equal.<br><i>Example: 1/3 = 4/12, because top and bottom were both multiplied by 4.</i><br><br><b>Story:</b> A shield covers 2/3 of a wall. That is the same as covering how many twelfths? In other words, 2/3 = ?/12. What number goes on top?",
            answer: "8",
            hint: "The bottom went from 3 to 12, so it was multiplied by 4. Do the same to the top: 2 x 4.",
            explanation: "2/3 = 8/12, so the missing numerator is 8."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Comparing Decimals by Place Value!</b><br><i>What it means:</i> Compare decimals digit by digit from the left. Watch out: 0.7 is the same as 0.70, which is bigger than 0.65.<br><i>Example: 0.8 is bigger than 0.75, because 0.80 beats 0.75.</i><br><br><b>Story:</b> Four racers finish with these times as fractions of a minute. Which number is the LARGEST?",
            options: ["0.7", "0.65", "0.09", "0.72"],
            answer: "0.72",
            hint: "Write 0.7 as 0.70 so all numbers have two decimal places. Now compare 70, 65, 09, and 72.",
            explanation: "0.72 is larger than 0.70, 0.65, and 0.09."
        },

        // --- PHASE 4: GEOMETRY & MEASUREMENT (Questions 16 - 20) ---
        {
            type: "text",
            question: "<b>Strategy: Volume of a Box!</b><br><i>What it means:</i> Volume measures how much space is INSIDE a 3D box. Multiply length x width x height.<br><i>Example: A box 4 x 2 x 3 has volume 4 x 2 x 3 = 24 cubic units.</i><br><br><b>Story:</b> Tails builds a storage crate that is 5 units long, 3 units wide, and 2 units high. What is its volume?",
            answer: "30",
            hint: "First 5 x 3 = 15. Then 15 x 2 = ?",
            explanation: "5 x 3 x 2 = 30 cubic units."
        },
        {
            type: "text",
            question: "<b>Strategy: Angles in a Triangle Add to 180!</b><br><i>What it means:</i> The three inside angles of ANY triangle always add up to exactly 180 degrees. If you know two, subtract them from 180 to find the third.<br><i>Example: Angles of 90 and 40 leave 180 - 90 - 40 = 50 degrees.</i><br><br><b>Story:</b> A triangular ramp has angles of 60 degrees and 70 degrees. What is the third angle?",
            answer: "50",
            hint: "Add the two known angles: 60 + 70 = 130. Now subtract from 180.",
            explanation: "180 - 60 - 70 = 50 degrees."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Perimeter Is Not Area!</b><br><i>What it means:</i> Perimeter is the distance AROUND a shape: add all the sides. Area is the space INSIDE: multiply length x width. Do not mix them up!<br><i>Example: A 5 by 3 rectangle has perimeter 16 but area 15.</i><br><br><b>Story:</b> Marty's garden bed is 9 ft long and 4 ft wide. What is its PERIMETER?",
            options: ["13 feet", "26 feet", "36 feet", "40 feet"],
            answer: "26 feet",
            hint: "Go around all four sides: 9 + 4 + 9 + 4. The 36 is the area trap!",
            explanation: "Perimeter = 9 + 4 + 9 + 4 = 26 feet. Area would be 36, but that is not what was asked."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Moving on a Coordinate Grid!</b><br><i>What it means:</i> A point is written (x, y). The x number moves you right or left first, then the y number moves you up or down.<br><i>Example: Starting at (2, 2) and moving right 1 lands at (3, 2).</i><br><br><b>Story:</b> Marty stands at (3, 5) on Tails' grid map. He moves 2 steps RIGHT and 1 step UP. Where is he now?",
            options: ["(4, 6)", "(5, 6)", "(5, 4)", "(6, 5)"],
            answer: "(5, 6)",
            hint: "Right changes the first number: 3 + 2 = 5. Up changes the second number: 5 + 1 = 6.",
            explanation: "(3 + 2, 5 + 1) = (5, 6)."
        },
        {
            type: "text",
            question: "<b>Strategy: Converting Metres to Centimetres!</b><br><i>What it means:</i> 1 metre is exactly 100 centimetres. To convert metres to centimetres, multiply by 100.<br><i>Example: 3 metres = 3 x 100 = 300 centimetres.</i><br><br><b>Story:</b> Sonic's long-jump pit is 2.5 metres long. How long is that in centimetres?",
            answer: "250",
            hint: "2 metres is 200 cm, and half a metre is 50 cm. Add them together.",
            explanation: "2.5 x 100 = 250 centimetres."
        },

        // --- PHASE 5: PATTERNS & EARLY ALGEBRA (Questions 21 - 25) ---
        {
            type: "text",
            question: "<b>Strategy: Add-the-Last-Two Patterns (Fibonacci Style)!</b><br><i>What it means:</i> In some sequences, each new number is the SUM of the two numbers just before it.<br><i>Example: 1, 1, 2, 3, 5... because 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5.</i><br><br><b>Story:</b> Emerald energy pulses follow this pattern: 2, 3, 5, 8, 13, ___. What is the next pulse?",
            answer: "21",
            hint: "Add the last two numbers you can see: 8 + 13.",
            explanation: "8 + 13 = 21. Each term is the sum of the two before it."
        },
        {
            type: "text",
            question: "<b>Strategy: Growing Gaps!</b><br><i>What it means:</i> Sometimes the JUMPS between numbers grow in their own pattern. Always write down the gaps first.<br><i>Example: 2, 5, 9, 14 has gaps of +3, +4, +5, so the next gap is +6.</i><br><br><b>Story:</b> Shadow's training laps grow like this: 3, 6, 11, 18, 27, ___. The gaps are +3, +5, +7, +9. What is the next number?",
            answer: "38",
            hint: "The gaps are odd numbers growing by 2. After +9 comes +11. Add 11 to 27.",
            explanation: "Gaps: +3, +5, +7, +9, so next gap is +11. 27 + 11 = 38."
        },
        {
            type: "text",
            question: "<b>Strategy: Solve for the Mystery Number!</b><br><i>What it means:</i> Undo the operations one at a time, in reverse. Whatever was done last gets undone first.<br><i>Example: If 2 x Mystery + 2 = 10, undo +2 to get 8, then undo x2 to get 4.</i><br><br><b>Story:</b> Marty thinks of a number. He doubles it, then adds 4, and gets 18. In symbols: 2 x Mystery + 4 = 18. What is the mystery number?",
            answer: "7",
            hint: "Undo the +4 first: 18 - 4 = 14. Now undo the doubling: 14 / 2 = ? Check: 2 x 7 + 4 = 18.",
            explanation: "18 - 4 = 14. 14 / 2 = 7. The mystery number is 7."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Input-Output Machines!</b><br><i>What it means:</i> Find the one rule that turns EVERY input into its output, then use that same rule on the new input.<br><i>Example: 3 -> 7, 4 -> 9, 5 -> 11 all follow double it and add 1.</i><br><br><b>Story:</b> Tails' machine turns 4 into 9, 5 into 11, and 6 into 13. What will it turn 10 into?",
            options: ["19", "20", "21", "23"],
            answer: "21",
            hint: "Test the rule double it and add 1: 4 x 2 + 1 = 9. It works for all of them. Now try 10.",
            explanation: "Rule is x2 + 1. 10 x 2 + 1 = 21."
        },
        {
            type: "text",
            question: "<b>Strategy: Powers of Two!</b><br><i>What it means:</i> A power tells you how many times to multiply the base by itself. 2 to the 5th power means 2 x 2 x 2 x 2 x 2 — five 2s, not 2 x 5.<br><i>Example: 2 to the 3rd power = 2 x 2 x 2 = 8.</i><br><br><b>Story:</b> A signal doubles five times in a row, starting from 1 unit: that is 2 to the 5th power. What value does it reach?",
            answer: "32",
            hint: "Double step by step: 2, 4, 8, 16, then one more double.",
            explanation: "2 x 2 x 2 x 2 x 2 = 32."
        },

        // --- PHASE 6: DATA, PROBABILITY & LOGIC (Questions 26 - 30) ---
        {
            type: "text",
            question: "<b>Strategy: Finding the Mode!</b><br><i>What it means:</i> The Mode is the value that appears MOST OFTEN in a data set. Count how many times each value shows up.<br><i>Example: In 2, 5, 5, 8, the mode is 5 because it appears twice.</i><br><br><b>Story:</b> Marty's pinball scores this week are: 4, 7, 4, 9, 7, 4, 2. What is the Mode of his scores?",
            answer: "4",
            hint: "Count carefully: 4 appears three times, 7 appears twice, 9 and 2 appear once each.",
            explanation: "4 appears 3 times, more than any other score. The mode is 4."
        },
        {
            type: "text",
            question: "<b>Strategy: Mean of Four Numbers!</b><br><i>What it means:</i> The Mean (average) is the total shared out equally: add everything, then divide by how many values there are.<br><i>Example: Mean of 6 and 10 is (6 + 10) / 2 = 8.</i><br><br><b>Story:</b> Four sensors read 12, 18, 24, and 30. Add them (that is 84), then divide by 4. What is the Mean?",
            answer: "21",
            hint: "84 / 4: think of 80 / 4 = 20 and 4 / 4 = 1, then add them.",
            explanation: "12 + 18 + 24 + 30 = 84. 84 / 4 = 21."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Probability as a Fraction!</b><br><i>What it means:</i> Probability = (favourable outcomes) / (total outcomes). Then simplify the fraction if you can.<br><i>Example: 4 blue marbles out of 8 total is 4/8, which simplifies to 1 in 2.</i><br><br><b>Story:</b> A bag holds 3 red, 5 blue, and 2 green marbles (10 in total). Marty picks one without looking. What is the chance it is BLUE?",
            options: ["1 in 5 chance", "1 in 2 chance", "1 in 3 chance", "5 in 3 chance"],
            answer: "1 in 2 chance",
            hint: "Blue is 5 out of 10. Simplify 5/10 by dividing top and bottom by 5.",
            explanation: "5 blue out of 10 total = 5/10 = 1 in 2 chance."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Pet Grid Deduction!</b><br><i>What it means:</i> Lock in the clue you KNOW first, cross those options off for everyone else, then use the NOT clues.<br><i>Example: If Ben definitely has the dog, nobody else can have the dog.</i><br><br><b>Story:</b> Sonic, Tails, and Knuckles each have a different pet: a Cat, a Dog, and a Parrot. Clue 1: Tails has the Dog. Clue 2: Sonic does NOT have the Cat. Which pet does Sonic have?",
            options: ["Cat", "Dog", "Parrot"],
            answer: "Parrot",
            hint: "Tails took the Dog, so Sonic has either the Cat or the Parrot. Clue 2 rules one of those out.",
            explanation: "Dog is taken by Tails. Sonic cannot have the Cat, so Sonic must have the Parrot (and Knuckles has the Cat)."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Chained Height Clues!</b><br><i>What it means:</i> Stack comparison clues into one long chain from tallest to shortest, placing each new person relative to the chain you already have.<br><i>Example: A taller than B, and C taller than A, gives C, A, B.</i><br><br><b>Story:</b> Marty is taller than Sonic. Sonic is taller than Tails. Shadow is taller than Marty. Who is the SHORTEST?",
            options: ["Shadow", "Marty", "Sonic", "Tails"],
            answer: "Tails",
            hint: "Build the chain: Shadow, then Marty, then Sonic, then... who is left at the bottom?",
            explanation: "Chain: Shadow > Marty > Sonic > Tails, so Tails is the shortest."
        },

        // --- PHASE 7: MULTI-STEP & COMBINATORICS (Questions 31 - 35) ---
        {
            type: "text",
            question: "<b>Strategy: Outfit Combinations!</b><br><i>What it means:</i> Multiply the choices in each category together to get every possible combination.<br><i>Example: 3 tops x 2 bottoms = 6 outfits.</i><br><br><b>Story:</b> Marty packs for a mission: 4 shirts, 3 pairs of pants, and 2 hats. How many different complete outfits can he make?",
            answer: "24",
            hint: "First 4 x 3 = 12. Then multiply by the 2 hats.",
            explanation: "4 x 3 x 2 = 24 different outfits."
        },
        {
            type: "text",
            question: "<b>Strategy: Three-Step Working Backward!</b><br><i>What it means:</i> Start from the final answer and undo each step in reverse order, using the opposite operation each time.<br><i>Example: Forward: +2, then x3 gives 12. Backward: 12 / 3 = 4, then 4 - 2 = 2.</i><br><br><b>Story:</b> Shadow started with some rings. He added 6, then doubled the total, then lost 4, ending with 20 rings. How many did he start with?",
            answer: "6",
            hint: "Work backward: undo losing 4 (20 + 4 = 24), undo doubling (24 / 2 = 12), undo adding 6 (12 - 6 = ?).",
            explanation: "Backward: 20 + 4 = 24, 24 / 2 = 12, 12 - 6 = 6 starting rings. Check forward: 6 + 6 = 12, x2 = 24, -4 = 20."
        },
        {
            type: "text",
            question: "<b>Strategy: Coupon Multi-Step Money!</b><br><i>What it means:</i> Do the steps in story order: first find the full cost with multiplication, THEN apply the discount.<br><i>Example: 3 items at $5 = $15, minus a $2 coupon = $13 to pay.</i><br><br><b>Story:</b> Marty buys 4 game packs at $7 each, then uses a $5 off coupon. How much does he actually pay, in dollars? Type just the number.",
            answer: "23",
            hint: "Step 1: 4 x 7 = 28. Step 2: subtract the $5 coupon.",
            explanation: "4 x $7 = $28. $28 - $5 = $23 to pay."
        },
        {
            type: "text",
            question: "<b>Strategy: Scaling a Recipe with Ratios!</b><br><i>What it means:</i> If the output multiplies by a certain amount, every ingredient multiplies by that SAME amount.<br><i>Example: 1 cup makes 4 muffins, so 12 muffins (3 times as many) need 3 cups.</i><br><br><b>Story:</b> A chili dog sauce recipe uses 2 cups of sauce for every 6 chili dogs. Marty is making 18 chili dogs for the whole team. How many cups of sauce does he need?",
            answer: "6",
            hint: "18 is 3 times as many as 6, so multiply the sauce by 3 as well: 2 x 3.",
            explanation: "18 / 6 = 3 batches. 2 x 3 = 6 cups of sauce."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Adding Hours and Minutes!</b><br><i>What it means:</i> Add the hours first, then the minutes. If the minutes pass 60, that rolls into the next hour.<br><i>Example: 1:50 plus 30 minutes rolls past 2:00 and lands at 2:20.</i><br><br><b>Story:</b> A mission starts at 2:45 PM and lasts 1 hour and 30 minutes. What time does it finish?",
            options: ["3:15 PM", "4:15 PM", "4:30 PM", "5:15 PM"],
            answer: "4:15 PM",
            hint: "Add 1 hour: 2:45 becomes 3:45. Now add 30 minutes — count 15 minutes to 4:00, then 15 more.",
            explanation: "2:45 PM + 1 hour = 3:45 PM. + 30 minutes = 4:15 PM."
        },

        // --- PHASE 8: BOSS CHALLENGES (Questions 36 - 40) ---
        {
            type: "text",
            question: "<b>Strategy: Magic Square!</b><br><i>What it means:</i> In a magic square, EVERY row, column, and diagonal adds up to the same magic total.<br><i>Example: If the magic total is 15 and a row shows 4 and 9, the missing number is 15 - 4 - 9 = 2.</i><br><br><b>Story:</b> This magic square uses the numbers 1 to 9 and every line totals 15. Row 1: 8, 1, 6. Row 2: 3, 5, ___. What number completes Row 2?",
            answer: "7",
            hint: "Row 2 must also total 15. So 3 + 5 + missing = 15. What is 15 - 8?",
            explanation: "3 + 5 = 8. 15 - 8 = 7. Bonus check: the full square is 8-1-6 / 3-5-7 / 4-9-2, and every line totals 15."
        },
        {
            type: "text",
            question: "<b>Strategy: Prime Factorisation!</b><br><i>What it means:</i> Every whole number can be broken into a multiplication of PRIME numbers only. Those are its prime factors.<br><i>Example: 12 = 2 x 2 x 3, and all of 2, 2, and 3 are prime.</i><br><br><b>Story:</b> Tails breaks 36 down into primes: 36 = 2 x 2 x 3 x ___. What is the missing prime factor?",
            answer: "3",
            hint: "Multiply what you have: 2 x 2 x 3 = 12. How many times does 12 go into 36?",
            explanation: "2 x 2 x 3 = 12. 36 / 12 = 3, so 36 = 2 x 2 x 3 x 3."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Cube Numbers!</b><br><i>What it means:</i> Cubing a number means multiplying it by itself THREE times, like building a cube with that many blocks on each edge.<br><i>Example: 2 cubed = 2 x 2 x 2 = 8.</i><br><br><b>Story:</b> Marty stacks blocks into a perfect cube that is 3 blocks long, 3 blocks wide, and 3 blocks high. How many blocks is that in total (3 cubed)?",
            options: ["9", "18", "27", "81"],
            answer: "27",
            hint: "Do it in stages: 3 x 3 = 9 for one layer, then 9 x 3 for all three layers. 9 is the trap for just squaring!",
            explanation: "3 x 3 x 3 = 27 blocks."
        },
        {
            type: "text",
            question: "<b>Strategy: Boss Order of Operations!</b><br><i>What it means:</i> The full order is: Brackets first, then Multiply and Divide, then Add and Subtract.<br><i>Example: (2 + 3) x 2 - 4 / 2 = 5 x 2 - 2 = 10 - 2 = 8.</i><br><br><b>Story:</b> Final lock on the Death Egg door: (5 + 3) x 4 - 6 / 2. Solve it step by step. What is the code?",
            answer: "29",
            hint: "Brackets first: 5 + 3 = 8. Then multiply and divide: 8 x 4 = 32 and 6 / 2 = 3. Finally subtract.",
            explanation: "(5 + 3) = 8. 8 x 4 = 32. 6 / 2 = 3. 32 - 3 = 29."
        },
        {
            type: "text",
            question: "<b>Grand Finale Strategy: The Gauss Pairing Trick!</b><br><i>What it means:</i> To add a long run of numbers fast, pair the first with the last. Each pair makes the same total, then multiply by how many pairs there are. A young mathematician named Gauss stunned his teacher with this as a child.<br><i>Example: 1 + 2 + 3 + 4 pairs as (1 + 4) and (2 + 3): two pairs of 5 = 10.</i><br><br><b>Story:</b> Marty must add ALL the numbers from 1 to 20 to unlock the Master Emerald: 1 + 2 + 3 + ... + 20. Pair them: 1 + 20 = 21, 2 + 19 = 21, and so on — there are 10 pairs. What is the grand total?",
            answer: "210",
            hint: "Each pair totals 21, and there are 10 pairs (20 numbers / 2). Multiply 21 x 10.",
            explanation: "10 pairs x 21 per pair = 210. Master Emerald unlocked — Chaos Champions, Level 2 complete!"
        }
    ]
};
