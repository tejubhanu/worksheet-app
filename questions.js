// Marty's Worksheet — Mission 3: Level 2 Remix
// Drop-in replacement for questions.js in worksheet-app
// Same topics as Mission 2, but about 10% easier: friendlier numbers,
// one less step in the multi-step problems, and rounder values.
// This mission intentionally omits the per-question help field entirely.
// The app only displays that field in Review Mode when one exists, so
// omitting it is safe. Explanations are still included — they appear in
// Review Mode after a missed question, so Marty can still learn from mistakes.

const missionConfig = {
    themeTitle: "🦔 Sonic & Shadow: Chaos Emerald Mastery — LEVEL 2 REMIX",
    themeColor: "linear-gradient(135deg, #059669 0%, #0f172a 50%, #2563eb 100%)",
    themeIcon: "🎯",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- PHASE 1: NUMBER SENSE REMIX (Questions 1 - 5) ---
        {
            type: "text",
            question: "<b>Strategy: Order of Operations!</b><br><i>What it means:</i> Multiplication comes BEFORE addition and subtraction. Do the multiply step first, then add or subtract.<br><i>Example: 5 + 2 x 3 = 5 + 6 = 11, not 21.</i><br><br><b>Story:</b> Marty charges a boost pad with this calculation: 3 + 2 x 4. What is the final power value?",
            answer: "11",
            explanation: "2 x 4 = 8 first. Then 3 + 8 = 11."
        },
        {
            type: "text",
            question: "<b>Strategy: Square Numbers!</b><br><i>What it means:</i> Squaring a number means multiplying it by itself.<br><i>Example: 4 squared = 4 x 4 = 16.</i><br><br><b>Story:</b> A crystal chamber has 6 rows with 6 crystals in each row, plus 4 extra crystals by the door. How many crystals are there in total?",
            answer: "40",
            explanation: "6 x 6 = 36. 36 + 4 = 40 crystals."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Estimating a Product by Rounding!</b><br><i>What it means:</i> Round each number to a friendly ten first, then multiply for a fast, close estimate.<br><i>Example: 19 x 31 is about 20 x 30 = 600.</i><br><br><b>Story:</b> Tails estimates a Badnik count: 38 x 21. He rounds 38 to 40 and 21 to 20. What is his estimate?",
            options: ["600", "800", "1,000", "1,200"],
            answer: "800",
            explanation: "40 x 20 = 800. That is the estimate for 38 x 21."
        },
        {
            type: "text",
            question: "<b>Strategy: Negative Numbers on a Number Line!</b><br><i>What it means:</i> Numbers below zero are negative. If you start above zero and move down past zero, you land in negative numbers.<br><i>Example: Starting at 3 and dropping 5 lands at -2.</i><br><br><b>Story:</b> In Ice Cap Zone the morning temperature is 4 degrees. Overnight it drops by 6 degrees. What is the new temperature?",
            answer: "-2",
            explanation: "4 - 6 = -2 degrees."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Divisibility Detective!</b><br><i>What it means:</i> A number is divisible by 3 if its digits add up to a multiple of 3. It is divisible by 5 if it ends in 0 or 5. Some numbers pass BOTH tests.<br><i>Example: 30 passes both: 3 + 0 = 3, and it ends in 0.</i><br><br><b>Story:</b> Which vault code is divisible by BOTH 3 and 5?",
            options: ["25", "32", "45", "51"],
            answer: "45",
            explanation: "45 ends in 5 and 4 + 5 = 9, a multiple of 3. So 45 is divisible by both 3 and 5."
        },

        // --- PHASE 2: MULTIPLICATION & DIVISION REMIX (Questions 6 - 10) ---
        {
            type: "text",
            question: "<b>Strategy: Distributive Chunking!</b><br><i>What it means:</i> Split the bigger number into tens and ones, multiply each part, then add.<br><i>Example: 5 x 14 = (5 x 10) + (5 x 4) = 50 + 20 = 70.</i><br><br><b>Story:</b> Tails packs 7 crates with 13 rings in each crate. How many rings is that in total?",
            answer: "91",
            explanation: "7 x 13 = (7 x 10) + (7 x 3) = 70 + 21 = 91 rings."
        },
        {
            type: "text",
            question: "<b>Strategy: Lowest Common Multiple (LCM)!</b><br><i>What it means:</i> The LCM is the smallest number that appears in BOTH numbers' times tables. List multiples of each until they meet.<br><i>Example: Multiples of 2: 2, 4, 6. Multiples of 3: 3, 6. They first meet at 6, so the LCM of 2 and 3 is 6.</i><br><br><b>Story:</b> Sonic's boost recharges every 4 seconds and Shadow's every 6 seconds. They start together. In how many seconds will they recharge at the same moment again?",
            answer: "12",
            explanation: "Multiples of 4: 4, 8, 12. Multiples of 6: 6, 12. The first common multiple is 12 seconds."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Greatest Common Factor (GCF)!</b><br><i>What it means:</i> The GCF is the biggest number that divides evenly into BOTH numbers.<br><i>Example: Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. GCF is 4.</i><br><br><b>Story:</b> Marty shares 12 red rings and 18 blue rings into equal groups with nothing left over. What is the GREATEST number of groups he can make?",
            options: ["2", "3", "6", "9"],
            answer: "6",
            explanation: "6 divides into both 12 (2 times) and 18 (3 times), and no bigger common factor exists. GCF = 6."
        },
        {
            type: "text",
            question: "<b>Strategy: Reading the Remainder!</b><br><i>What it means:</i> Sometimes the question is not asking for the remainder — it is asking how many FULL groups you can make. Leftovers do not count as a full group.<br><i>Example: 17 divided by 4 makes 4 full groups with 1 left over.</i><br><br><b>Story:</b> Marty has 38 rings. Each storage box holds exactly 5 rings. How many FULL boxes can he fill?",
            answer: "7",
            explanation: "5 x 7 = 35, which fits. 5 x 8 = 40 is too many. So 7 full boxes, with 3 rings left over."
        },
        {
            type: "text",
            question: "<b>Strategy: The Multiply-by-11 Trick!</b><br><i>What it means:</i> To multiply a 2-digit number by 11, keep the two outside digits and put their SUM in the middle.<br><i>Example: 12 x 11 -> 1, then 1 + 2 = 3, then 2 -> 132.</i><br><br><b>Story:</b> Use the trick on 25 x 11. What is the answer?",
            answer: "275",
            explanation: "Outside digits 2 and 5, middle is 2 + 5 = 7. 25 x 11 = 275."
        },

        // --- PHASE 3: FRACTIONS, DECIMALS & PERCENTS REMIX (Questions 11 - 15) ---
        {
            type: "mcq",
            question: "<b>Strategy: Adding Fractions with the Same Denominator!</b><br><i>What it means:</i> When the bottom numbers (denominators) already match, just add the top numbers and keep the same denominator. Never add the denominators!<br><i>Example: 1/5 + 2/5 = 3/5.</i><br><br><b>Story:</b> Marty eats 1/4 of a pizza at lunch and 2/4 more at dinner. How much pizza has he eaten altogether?",
            options: ["1/4", "1/2", "3/4", "3/8"],
            answer: "3/4",
            explanation: "1/4 + 2/4 = 3/4. The denominator stays 4."
        },
        {
            type: "text",
            question: "<b>Strategy: Percent Means Out of 100!</b><br><i>What it means:</i> 50% is exactly one half. To find 50% of a number, just divide it by 2.<br><i>Example: 50% of 30 = 30 / 2 = 15.</i><br><br><b>Story:</b> Tails' drone battery holds 60 units of charge and it is at 50%. How many units of charge does it have?",
            answer: "30",
            explanation: "50% of 60 = 60 / 2 = 30 units."
        },
        {
            type: "text",
            question: "<b>Strategy: Adding Decimal Money!</b><br><i>What it means:</i> Line up the decimal points and add like normal numbers. Cents add to cents, dollars add to dollars.<br><i>Example: $1.25 + $2.50 = $3.75.</i><br><br><b>Story:</b> Marty buys a comic for $3.50 and a sticker pack for $2.25. How much does he spend in total? Type just the number, like 7.25",
            answer: "5.75",
            explanation: "$3.50 + $2.25 = $5.75."
        },
        {
            type: "text",
            question: "<b>Strategy: Equivalent Fractions!</b><br><i>What it means:</i> Multiply the top and bottom of a fraction by the SAME number and the amount stays equal.<br><i>Example: 1/4 = 2/8, because top and bottom were both multiplied by 2.</i><br><br><b>Story:</b> A shield covers 1/2 of a wall. That is the same as covering how many tenths? In other words, 1/2 = ?/10. What number goes on top?",
            answer: "5",
            explanation: "The bottom went from 2 to 10 (multiplied by 5), so the top does the same: 1 x 5 = 5. 1/2 = 5/10."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Comparing Decimals by Place Value!</b><br><i>What it means:</i> Compare decimals digit by digit from the left. Watch out: 0.5 is the same as 0.50.<br><i>Example: 0.6 is bigger than 0.55, because 0.60 beats 0.55.</i><br><br><b>Story:</b> Four racers post these scores. Which number is the LARGEST?",
            options: ["0.5", "0.45", "0.09", "0.52"],
            answer: "0.52",
            explanation: "Written with two decimal places: 0.50, 0.45, 0.09, 0.52. The largest is 0.52."
        },

        // --- PHASE 4: GEOMETRY & MEASUREMENT REMIX (Questions 16 - 20) ---
        {
            type: "text",
            question: "<b>Strategy: Volume of a Box!</b><br><i>What it means:</i> Volume measures how much space is INSIDE a 3D box. Multiply length x width x height.<br><i>Example: A box 3 x 2 x 2 has volume 3 x 2 x 2 = 12 cubic units.</i><br><br><b>Story:</b> Tails builds a storage crate that is 4 units long, 3 units wide, and 2 units high. What is its volume?",
            answer: "24",
            explanation: "4 x 3 x 2 = 24 cubic units."
        },
        {
            type: "text",
            question: "<b>Strategy: Angles in a Triangle Add to 180!</b><br><i>What it means:</i> The three inside angles of ANY triangle always add up to exactly 180 degrees. If you know two, subtract them from 180 to find the third.<br><i>Example: Angles of 70 and 60 leave 180 - 70 - 60 = 50 degrees.</i><br><br><b>Story:</b> A triangular ramp has angles of 90 degrees and 50 degrees. What is the third angle?",
            answer: "40",
            explanation: "180 - 90 - 50 = 40 degrees."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Perimeter Is Not Area!</b><br><i>What it means:</i> Perimeter is the distance AROUND a shape: add all the sides. Area is the space INSIDE: multiply length x width. Do not mix them up!<br><i>Example: A 6 by 2 rectangle has perimeter 16 but area 12.</i><br><br><b>Story:</b> Marty's garden bed is 8 ft long and 3 ft wide. What is its PERIMETER?",
            options: ["11 feet", "22 feet", "24 feet", "28 feet"],
            answer: "22 feet",
            explanation: "Perimeter = 8 + 3 + 8 + 3 = 22 feet. Area would be 24, but that is not what was asked."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Moving on a Coordinate Grid!</b><br><i>What it means:</i> A point is written (x, y). The x number moves you right or left first, then the y number moves you up or down.<br><i>Example: Starting at (1, 1) and moving right 2 lands at (3, 1).</i><br><br><b>Story:</b> Marty stands at (2, 3) on Tails' grid map. He moves 3 steps RIGHT and 2 steps UP. Where is he now?",
            options: ["(5, 4)", "(4, 5)", "(5, 5)", "(6, 5)"],
            answer: "(5, 5)",
            explanation: "Right changes the first number: 2 + 3 = 5. Up changes the second number: 3 + 2 = 5. He is at (5, 5)."
        },
        {
            type: "text",
            question: "<b>Strategy: Converting Metres to Centimetres!</b><br><i>What it means:</i> 1 metre is exactly 100 centimetres. To convert metres to centimetres, multiply by 100.<br><i>Example: 2 metres = 2 x 100 = 200 centimetres.</i><br><br><b>Story:</b> Sonic's long-jump pit is 3 metres long. How long is that in centimetres?",
            answer: "300",
            explanation: "3 x 100 = 300 centimetres."
        },

        // --- PHASE 5: PATTERNS & EARLY ALGEBRA REMIX (Questions 21 - 25) ---
        {
            type: "text",
            question: "<b>Strategy: Add-the-Last-Two Patterns (Fibonacci Style)!</b><br><i>What it means:</i> In some sequences, each new number is the SUM of the two numbers just before it.<br><i>Example: 2, 2, 4, 6, 10... because 2 + 2 = 4, 2 + 4 = 6, 4 + 6 = 10.</i><br><br><b>Story:</b> Emerald energy pulses follow this pattern: 1, 2, 3, 5, 8, ___. What is the next pulse?",
            answer: "13",
            explanation: "Each number is the sum of the two before it. 5 + 8 = 13."
        },
        {
            type: "text",
            question: "<b>Strategy: Growing Gaps!</b><br><i>What it means:</i> Sometimes the jumps between numbers grow in their own pattern. Always write down the gaps first.<br><i>Example: 5, 7, 10, 14 has gaps of +2, +3, +4, so the next gap is +5.</i><br><br><b>Story:</b> Shadow's training laps grow like this: 2, 4, 7, 11, 16, ___. What is the next number?",
            answer: "22",
            explanation: "Gaps are +2, +3, +4, +5, so the next gap is +6. 16 + 6 = 22."
        },
        {
            type: "text",
            question: "<b>Strategy: Solve for the Mystery Number!</b><br><i>What it means:</i> Undo the operations one at a time, in reverse. Whatever was done last gets undone first.<br><i>Example: If 2 x Mystery + 4 = 12, undo +4 to get 8, then undo x2 to get 4.</i><br><br><b>Story:</b> Marty thinks of a number. He doubles it, then adds 2, and gets 12. In symbols: 2 x Mystery + 2 = 12. What is the mystery number?",
            answer: "5",
            explanation: "Undo the +2: 12 - 2 = 10. Undo the doubling: 10 / 2 = 5. Check: 2 x 5 + 2 = 12."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Input-Output Machines!</b><br><i>What it means:</i> Find the one rule that turns EVERY input into its output, then use that same rule on the new input.<br><i>Example: 2 -> 5, 3 -> 6, 4 -> 7 all follow add 3.</i><br><br><b>Story:</b> Tails' machine turns 3 into 6, 4 into 8, and 5 into 10. What will it turn 9 into?",
            options: ["16", "18", "20", "22"],
            answer: "18",
            explanation: "Every output is double the input. 9 x 2 = 18."
        },
        {
            type: "text",
            question: "<b>Strategy: Powers of Two!</b><br><i>What it means:</i> A power tells you how many times to multiply the base by itself. 2 to the 4th power means 2 x 2 x 2 x 2 — four 2s, not 2 x 4.<br><i>Example: 2 to the 3rd power = 2 x 2 x 2 = 8.</i><br><br><b>Story:</b> A signal doubles four times in a row, starting from 1 unit: that is 2 to the 4th power. What value does it reach?",
            answer: "16",
            explanation: "2 x 2 x 2 x 2 = 16."
        },

        // --- PHASE 6: DATA, PROBABILITY & LOGIC REMIX (Questions 26 - 30) ---
        {
            type: "text",
            question: "<b>Strategy: Finding the Mode!</b><br><i>What it means:</i> The Mode is the value that appears MOST OFTEN in a data set. Count how many times each value shows up.<br><i>Example: In 4, 6, 6, 9, the mode is 6 because it appears twice.</i><br><br><b>Story:</b> Marty's pinball scores this week are: 3, 5, 3, 7, 3. What is the Mode of his scores?",
            answer: "3",
            explanation: "3 appears 3 times, more than any other score. The mode is 3."
        },
        {
            type: "text",
            question: "<b>Strategy: Mean of Three Numbers!</b><br><i>What it means:</i> The Mean (average) is the total shared out equally: add everything, then divide by how many values there are.<br><i>Example: Mean of 4, 8, and 12 is (4 + 8 + 12) / 3 = 8.</i><br><br><b>Story:</b> Three sensors read 9, 15, and 21. What is the Mean of the three readings?",
            answer: "15",
            explanation: "9 + 15 + 21 = 45. 45 / 3 = 15."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Probability as a Fraction!</b><br><i>What it means:</i> Probability = (favourable outcomes) / (total outcomes). Then simplify the fraction if you can.<br><i>Example: 3 blue marbles out of 6 total is 3/6, which simplifies to 1 in 2.</i><br><br><b>Story:</b> A bag holds 2 red, 2 blue, and 4 green marbles (8 in total). Marty picks one without looking. What is the chance it is RED?",
            options: ["1 in 2 chance", "1 in 3 chance", "1 in 4 chance", "1 in 8 chance"],
            answer: "1 in 4 chance",
            explanation: "2 red out of 8 total = 2/8, which simplifies to 1 in 4 chance."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Pet Grid Deduction!</b><br><i>What it means:</i> Lock in the clue you KNOW first, cross those options off for everyone else, then use the NOT clues.<br><i>Example: If Ben definitely has the fish, nobody else can have the fish.</i><br><br><b>Story:</b> Sonic, Tails, and Knuckles each have a different pet: a Cat, a Dog, and a Parrot. Clue 1: Tails has the Cat. Clue 2: Knuckles does NOT have the Dog. Which pet does Sonic have?",
            options: ["Cat", "Dog", "Parrot"],
            answer: "Dog",
            explanation: "Cat is taken by Tails. Knuckles cannot have the Dog, so Sonic must have the Dog (and Knuckles has the Parrot)."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Chained Height Clues!</b><br><i>What it means:</i> Stack comparison clues into one chain from tallest to shortest, placing each person relative to the chain you already have.<br><i>Example: A taller than B, and B taller than C, gives A, B, C.</i><br><br><b>Story:</b> Marty is taller than Sonic. Sonic is taller than Tails. Who is the SHORTEST?",
            options: ["Marty", "Sonic", "Tails"],
            answer: "Tails",
            explanation: "Chain: Marty > Sonic > Tails, so Tails is the shortest."
        },

        // --- PHASE 7: MULTI-STEP & COMBINATORICS REMIX (Questions 31 - 35) ---
        {
            type: "text",
            question: "<b>Strategy: Outfit Combinations!</b><br><i>What it means:</i> Multiply the choices in each category together to get every possible combination.<br><i>Example: 2 tops x 3 bottoms = 6 outfits.</i><br><br><b>Story:</b> Marty packs for a mission: 3 shirts, 2 pairs of pants, and 2 hats. How many different complete outfits can he make?",
            answer: "12",
            explanation: "3 x 2 x 2 = 12 different outfits."
        },
        {
            type: "text",
            question: "<b>Strategy: Working Backward!</b><br><i>What it means:</i> Start from the final answer and undo each step in reverse order, using the opposite operation each time.<br><i>Example: Forward: +3, then x2 gives 14. Backward: 14 / 2 = 7, then 7 - 3 = 4.</i><br><br><b>Story:</b> Shadow started with some rings. He added 5, then doubled the total, ending with 22 rings. How many did he start with?",
            answer: "6",
            explanation: "Backward: undo doubling first (22 / 2 = 11), then undo adding 5 (11 - 5 = 6). Check forward: 6 + 5 = 11, x2 = 22."
        },
        {
            type: "text",
            question: "<b>Strategy: Coupon Multi-Step Money!</b><br><i>What it means:</i> Do the steps in story order: first find the full cost with multiplication, THEN apply the discount.<br><i>Example: 2 items at $4 = $8, minus a $1 coupon = $7 to pay.</i><br><br><b>Story:</b> Marty buys 3 game packs at $6 each, then uses a $3 off coupon. How much does he actually pay, in dollars? Type just the number.",
            answer: "15",
            explanation: "3 x $6 = $18. $18 - $3 = $15 to pay."
        },
        {
            type: "text",
            question: "<b>Strategy: Scaling a Recipe with Ratios!</b><br><i>What it means:</i> If the output multiplies by a certain amount, every ingredient multiplies by that SAME amount.<br><i>Example: 2 cups makes 8 muffins, so 16 muffins (2 times as many) need 4 cups.</i><br><br><b>Story:</b> A muffin recipe uses 1 cup of flour for every 4 muffins. Marty is making 12 muffins. How many cups of flour does he need?",
            answer: "3",
            explanation: "12 muffins is 3 groups of 4. 3 x 1 cup = 3 cups of flour."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Adding Hours and Minutes!</b><br><i>What it means:</i> Add the hours first, then the minutes. If the minutes pass 60, that rolls into the next hour.<br><i>Example: 1:40 plus 30 minutes rolls past 2:00 and lands at 2:10.</i><br><br><b>Story:</b> A mission starts at 3:30 PM and lasts 1 hour and 15 minutes. What time does it finish?",
            options: ["4:15 PM", "4:45 PM", "5:15 PM", "5:45 PM"],
            answer: "4:45 PM",
            explanation: "3:30 PM + 1 hour = 4:30 PM. + 15 minutes = 4:45 PM."
        },

        // --- PHASE 8: BOSS CHALLENGES REMIX (Questions 36 - 40) ---
        {
            type: "text",
            question: "<b>Strategy: Magic Square!</b><br><i>What it means:</i> In a magic square, EVERY row, column, and diagonal adds up to the same magic total.<br><i>Example: If the magic total is 15 and a row shows 5 and 9, the missing number is 15 - 5 - 9 = 1.</i><br><br><b>Story:</b> This magic square uses the numbers 1 to 9 and every line totals 15. One row shows: 6, 1, ___. What number completes the row?",
            answer: "8",
            explanation: "The row must total 15. 6 + 1 = 7. 15 - 7 = 8."
        },
        {
            type: "text",
            question: "<b>Strategy: Prime Factorisation!</b><br><i>What it means:</i> Every whole number can be broken into a multiplication of PRIME numbers only. Those are its prime factors.<br><i>Example: 10 = 2 x 5, and both 2 and 5 are prime.</i><br><br><b>Story:</b> Tails breaks 20 down into primes: 20 = 2 x 2 x ___. What is the missing prime factor?",
            answer: "5",
            explanation: "2 x 2 = 4. 20 / 4 = 5, so 20 = 2 x 2 x 5."
        },
        {
            type: "mcq",
            question: "<b>Strategy: Cube Numbers!</b><br><i>What it means:</i> Cubing a number means multiplying it by itself THREE times, like building a cube with that many blocks on each edge.<br><i>Example: 3 cubed is 3 x 3 x 3 = 27 — this boss uses a smaller cube.</i><br><br><b>Story:</b> Marty stacks blocks into a perfect cube that is 2 blocks long, 2 blocks wide, and 2 blocks high. How many blocks is that in total?",
            options: ["4", "6", "8", "12"],
            answer: "8",
            explanation: "2 x 2 x 2 = 8 blocks."
        },
        {
            type: "text",
            question: "<b>Strategy: Boss Order of Operations!</b><br><i>What it means:</i> The order is: Brackets first, then Multiply and Divide, then Add and Subtract.<br><i>Example: (3 + 1) x 2 - 3 = 4 x 2 - 3 = 8 - 3 = 5.</i><br><br><b>Story:</b> Final lock on the Death Egg door: (4 + 2) x 3 - 4. Solve it step by step. What is the code?",
            answer: "14",
            explanation: "Brackets first: 4 + 2 = 6. Then multiply: 6 x 3 = 18. Then subtract: 18 - 4 = 14."
        },
        {
            type: "text",
            question: "<b>Grand Finale Strategy: The Gauss Pairing Trick!</b><br><i>What it means:</i> To add a long run of numbers fast, pair the first with the last. Each pair makes the same total, then multiply by how many pairs there are. A young mathematician named Gauss stunned his teacher with this as a child.<br><i>Example: 1 + 2 + 3 + 4 + 5 + 6 pairs as (1 + 6), (2 + 5), (3 + 4): three pairs of 7 = 21.</i><br><br><b>Story:</b> Marty must add ALL the numbers from 1 to 10 to unlock the Master Emerald: 1 + 2 + 3 + ... + 10. What is the grand total?",
            answer: "55",
            explanation: "Pair them: 1 + 10 = 11, 2 + 9 = 11, 3 + 8 = 11, 4 + 7 = 11, 5 + 6 = 11. That is 5 pairs of 11 = 55. Master Emerald unlocked — Level 2 Remix complete!"
        }
    ]
};
