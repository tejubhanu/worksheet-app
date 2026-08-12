const missionConfig = {
    themeTitle: "🌀 Beyblade X: Legends of the X-Tower",
    themeColor: "radial-gradient(circle at center, #0f172a 0%, #1e1b4b 60%, #311b92 100%)", // Deep Neon Beyblade Arena Glow
    themeIcon: "🌀",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- Phase 1: Arrival at X-Tower (Warm-Up Strategies) ---
        {
            type: "text",
            question: "<b>New Strategy: Making Tens for Addition!</b><br>When adding numbers, break a number apart to make a 10 first. Tens are easy to add!<br><i>Example: To solve 8 + 5, think 8 + 2 = 10, then 10 + 3 = 13.</i><br><br><b>Story:</b> Marty arrives at X-Tower with Robin Kazami! Marty has 9 launch cords and Robin gives him 5 more. Using the Making Tens strategy (9 + 1 = 10, then 10 + 4), how many launch cords does Marty have in total?",
            answer: "14",
            hint: "Take 1 from the 5 to turn 9 into 10. Then add the leftover 4!",
            explanation: "9 + 5 = (9 + 1) + 4 = 10 + 4 = 14 launch cords."
        },
        {
            type: "text",
            question: "<b>New Strategy: Counting Up for Subtraction!</b><br>Instead of subtracting backward, start at the smaller number and count UP to the bigger number.<br><i>Example: To solve 32 - 28, start at 28: add 2 to reach 30, then add 2 more to reach 32. Total = 2 + 2 = 4.</i><br><br><b>Story:</b> Robin needs 25 stadium pins to secure the arena, but he only has 21. Use Counting Up from 21 to 25. How many more pins does Robin need?",
            answer: "4",
            hint: "Start at 21 and count up: 22, 23, 24, 25. How many steps was that?",
            explanation: "Counting up from 21 to 25 takes 4 steps (21 + 4 = 25), so 25 - 21 = 4."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Perimeter!</b><br>Perimeter is the total distance all the way around the outside edge of a shape. Just add all the side lengths together!<br><i>Example: A triangle with sides 3 cm, 3 cm, and 3 cm has a perimeter of 3 + 3 + 3 = 9 cm.</i><br><br><b>Story:</b> Marty measures a square Beyblade launch pad. Each of its 4 sides is 4 inches long. What is the total perimeter of the pad?",
            options: ["12 inches", "16 inches", "20 inches", "8 inches"],
            answer: "16 inches",
            hint: "Add all 4 sides together: 4 + 4 + 4 + 4.",
            explanation: "4 + 4 + 4 + 4 = 16 inches around the launch pad."
        },
        {
            type: "text",
            question: "<b>New Strategy: Near Doubles (Double + 1)!</b><br>If two numbers are right next to each other, double the smaller number and add 1.<br><i>Example: To solve 6 + 7, double 6 to get 12, then add 1 = 13.</i><br><br><b>Story:</b> Arjun collects 7 launcher grips and Marty collects 8 launcher grips. Use the Near Doubles strategy (double 7, then add 1) to find how many grips they have together.",
            answer: "15",
            hint: "Double 7 is 14. Now add 1 more!",
            explanation: "7 + 8 = (7 + 7) + 1 = 14 + 1 = 15 launcher grips."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Rounding to the Nearest 10!</b><br>Look at the last digit. If it is 5 or bigger, round UP to the next 10. If it is 4 or smaller, round DOWN.<br><i>Example: 23 rounds down to 20. 27 rounds up to 30.</i><br><br><b>Story:</b> Robin's Beyblade spins for 48 seconds in the training arena. What is 48 rounded to the nearest 10?",
            options: ["40", "45", "50", "60"],
            answer: "50",
            hint: "Look at the 8 in 48. Since 8 is 5 or bigger, round up to the next ten!",
            explanation: "48 is very close to 50, so it rounds up to 50."
        },

        // --- Phase 2: Robin Kazami's Training (Multiplication & Division Strategies) ---
        {
            type: "text",
            question: "<b>New Strategy: Skip Counting for Multiplication!</b><br>Multiplication is just repeating addition. You can skip count by a number to find the answer.<br><i>Example: 3 x 4 means count by 3s four times: 3, 6, 9, 12.</i><br><br><b>Story:</b> Robin packs 4 storage boxes with 3 Beyblades in each box. Skip count by 3s four times (3, 6, 9, ...) to find the total number of Beyblades.",
            answer: "12",
            hint: "Count by 3s four times: 3, 6, 9, __.",
            explanation: "3, 6, 9, 12. So 4 x 3 = 12 Beyblades."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Even vs. Odd Numbers!</b><br>Even numbers end in 0, 2, 4, 6, or 8 (you can split them into two equal teams). Odd numbers end in 1, 3, 5, 7, or 9.<br><i>Example: 8 is Even because 4 + 4 = 8. 9 is Odd.</i><br><br><b>Story:</b> Arjun counts 14 rip-cords in his tool kit. Can 14 be split into two equal teams with no leftover? Is 14 Even or Odd?",
            options: ["Even", "Odd"],
            answer: "Even",
            hint: "Look at the last digit: 4. Numbers ending in 4 are Even!",
            explanation: "14 ends in 4, and 7 + 7 = 14, so it is an Even number."
        },
        {
            type: "text",
            question: "<b>New Strategy: Equal Sharing for Division!</b><br>Division means sharing a total amount equally into groups.<br><i>Example: Sharing 10 items equally between 2 friends gives 10 / 2 = 5 items each.</i><br><br><b>Story:</b> Jackson Cross (Kamen X) brings 12 energy clips to share equally between Marty and Robin (2 people). How many energy clips does each person get?",
            answer: "6",
            hint: "Divide 12 by 2. Think: What number plus itself equals 12?",
            explanation: "12 / 2 = 6. Marty and Robin each get 6 energy clips."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: The 'Add a Zero' Trick for 10s!</b><br>When you multiply any whole number by 10, just write a 0 at the end of that number.<br><i>Example: 5 x 10 = 50.</i><br><br><b>Story:</b> Suhaas sets up 7 rows of stadium pegs with 10 pegs in each row. What is 7 x 10?",
            options: ["17", "70", "700", "77"],
            answer: "70",
            hint: "Put a 0 right after the number 7!",
            explanation: "7 x 10 = 70 stadium pegs."
        },
        {
            type: "text",
            question: "<b>New Strategy: Halving (Dividing by 2)!</b><br>To find half of a number, split it into two identical equal parts.<br><i>Example: Half of 16 is 8 because 8 + 8 = 16.</i><br><br><b>Story:</b> Sisira has 18 spare Beyblade bits. She gives half of them to Marty. What is half of 18?",
            answer: "9",
            hint: "What number added to itself equals 18? (___ + ___ = 18)",
            explanation: "9 + 9 = 18, so half of 18 is 9 bits."
        },

        // --- Phase 3: Jackson Cross & X-Dash (Patterns & Logic Strategies) ---
        {
            type: "mcq",
            question: "<b>New Strategy: Process of Elimination for Logic!</b><br>Cross out options that are proven wrong so only the correct answer remains.<br><i>Example: If a hat is NOT Red and NOT Blue, and options are Red, Blue, or Green, it MUST be Green!</i><br><br><b>Story:</b> Jackson Cross wears a mystery helmet. Clue 1: It is NOT Yellow. Clue 2: It is NOT Red. Options are Yellow, Red, or Black. What color is Jackson's helmet?",
            options: ["Yellow", "Red", "Black"],
            answer: "Black",
            hint: "Cross out Yellow and Red. What option is left standing?",
            explanation: "Eliminating Yellow and Red leaves Black as the only possible answer."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: Finding the Repeating Pattern Unit!</b><br>Find the small core group of shapes or colors that repeats over and over.<br><i>Example: In Red, Blue, Red, Blue... the pattern unit is (Red, Blue).</i><br><br><b>Story:</b> Robin tests Beyblades in this order: Sword, Shield, Dagger, Sword, Shield, Dagger... What will be the 7th Beyblade tested?",
            options: ["Sword", "Shield", "Dagger"],
            answer: "Sword",
            hint: "The pattern repeats every 3 items (Sword, Shield, Dagger). Items 1, 4, and 7 are all the start of the pattern!",
            explanation: "1:Sword, 2:Shield, 3:Dagger, 4:Sword, 5:Shield, 6:Dagger, 7:Sword."
        },
        {
            type: "text",
            question: "<b>New Concept: Area of a Rectangle!</b><br>Area is the amount of flat space inside a shape. Multiply Length times Width!<br><i>Example: A box 3 cm long and 2 cm wide has an Area of 3 x 2 = 6 square cm.</i><br><br><b>Story:</b> Marty's test arena mat is a rectangle that is 5 inches long and 4 inches wide. What is the Area of his mat?",
            answer: "20",
            hint: "Multiply Length (5) by Width (4). What is 5 x 4?",
            explanation: "Area = Length x Width = 5 x 4 = 20 square inches."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Sandwich Clues!</b><br>When a clue says a number is 'greater than A, but less than B', the number sits right between them.<br><i>Example: Greater than 5 but less than 7 means 6!</i><br><br><b>Story:</b> Jackson says his Beyblade weight is greater than 30 grams, but less than 32 grams. What is its exact weight?",
            options: ["29 grams", "30 grams", "31 grams", "33 grams"],
            answer: "31 grams",
            hint: "Which whole number comes right between 30 and 32?",
            explanation: "31 is greater than 30 and less than 32."
        },
        {
            type: "text",
            question: "<b>New Strategy: Growing Pattern Steps!</b><br>Find how much is being added at each step in a pattern sequence.<br><i>Example: 2, 5, 8, 11... increases by +3 each time. Next is 11 + 3 = 14.</i><br><br><b>Story:</b> Advi tracks Beyblade speeds: 10 mph, 15 mph, 20 mph, 25 mph, ___ mph. What is the next speed?",
            answer: "30",
            hint: "Notice how the numbers go up by 5 each time. Add 5 to 25!",
            explanation: "The pattern adds +5 each step. 25 + 5 = 30 mph."
        },

        // --- Phase 4: Crafting the Ultimate Beyblade (Fractions & Multi-Step) ---
        {
            type: "text",
            question: "<b>New Concept: Fractions (A Quarter / One-Fourth)!</b><br>One quarter (1/4) means splitting a total into 4 equal parts and taking 1 part.<br><i>Example: One quarter of 8 is 2 because 8 / 4 = 2.</i><br><br><b>Story:</b> Ayaan has 12 launcher grips. He paints 1/4 of them blue. Divide 12 by 4 to find how many blue grips Ayaan painted.",
            answer: "3",
            hint: "Divide 12 into 4 equal groups (12 / 4 = ?).",
            explanation: "12 / 4 = 3. So 1/4 of 12 is 3 blue grips."
        },
        {
            type: "text",
            question: "<b>New Strategy: Break-Apart Addition for 2-Digit Numbers!</b><br>Break two-digit numbers into Tens and Ones, add the Tens together, add the Ones together, then combine them!<br><i>Example: 23 + 14 = (20 + 10) + (3 + 4) = 30 + 7 = 37.</i><br><br><b>Story:</b> Marty has 32 points and Robin has 25 points. Use Break-Apart Addition: (30 + 20) + (2 + 5). What is the total score?",
            answer: "57",
            hint: "Add the tens (30 + 20 = 50), add the ones (2 + 5 = 7), then combine them!",
            explanation: "30 + 20 = 50, and 2 + 5 = 7. 50 + 7 = 57 points."
        },
        {
            type: "text",
            question: "<b>New Concept: An Average!</b><br>An average is the sum of numbers divided by the count of numbers.<br><i>Example: To find the average of 4 and 8, add them (4 + 8 = 12), then divide by 2 numbers (12 / 2 = 6).</i><br><br><b>Story:</b> Marty scores 6 points in battle 1, and 10 points in battle 2. Add them together (16), then divide by 2 to find his average score per battle.",
            answer: "8",
            hint: "Add 6 + 10 = 16. Now divide 16 by 2!",
            explanation: "6 + 10 = 16. Then 16 / 2 = 8. The average score is 8."
        },
        {
            type: "text",
            question: "<b>New Strategy: Working Backward!</b><br>Start from the final result and undo the steps using opposite operations.<br><i>Example: If a number + 5 = 12, work backward: 12 - 5 = 7!</i><br><br><b>Story:</b> Robin gained 8 training points today and now has 20 total points. Work backward (20 - 8) to find how many points he started with.",
            answer: "12",
            hint: "Subtract the 8 points he gained from his current total of 20.",
            explanation: "20 - 8 = 12. Robin started with 12 points."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Comparing Fraction Sizes!</b><br>When cutting something into pieces, FEWER cuts make LARGER pieces! So 1/2 is bigger than 1/4.<br><i>Example: Half a pizza (1/2) is bigger than a quarter slice (1/4).</i><br><br><b>Story:</b> Rod the AI asks: Which fraction covers a BIGGER portion of the Beyblade arena: 1/2 or 1/4?",
            options: ["1/2", "1/4"],
            answer: "1/2",
            hint: "Would you rather have half a cake or a quarter slice? Half is larger!",
            explanation: "1/2 splits a whole into 2 bigger parts, while 1/4 splits it into 4 smaller parts. 1/2 > 1/4."
        },

        // --- Phase 5: The Team Battle Tournament (Data & Math Strategies) ---
        {
            type: "text",
            question: "<b>New Concept: The Mode!</b><br>The Mode is simply the number that appears MOST OFTEN in a list.<br><i>Example: In the list [3, 5, 5, 7], the number 5 appears twice, so 5 is the Mode!</i><br><br><b>Story:</b> Marty tracks team win streaks: 4, 7, 4, 9, 4. Which number appears most often and is the Mode?",
            answer: "4",
            hint: "Which number shows up three times in the list?",
            explanation: "The number 4 appears 3 times, which is more than any other number. 4 is the Mode."
        },
        {
            type: "text",
            question: "<b>New Strategy: Multiply by 5 (Multiply by 10 then Halve)!</b><br>To multiply a number by 5 easily, multiply it by 10 first, then take half of that answer!<br><i>Example: 6 x 5 -> First do 6 x 10 = 60. Then half of 60 is 30!</i><br><br><b>Story:</b> Jackson Cross uses this strategy to solve 8 x 5. First he calculates 8 x 10 = 80. What is half of 80?",
            answer: "40",
            hint: "What is half of 80? (80 / 2 = ?)",
            explanation: "8 x 10 = 80. Half of 80 is 40. So 8 x 5 = 40."
        },
        {
            type: "text",
            question: "<b>New Concept: Range (Difference Between High & Low)!</b><br>Range is the distance between the Biggest number and the Smallest number. Just subtract: Biggest - Smallest.<br><i>Example: For scores 2, 5, 9, the Range is 9 - 2 = 7.</i><br><br><b>Story:</b> Rod records spin times: 12 seconds, 5 seconds, and 18 seconds. Subtract the smallest spin time (5) from the biggest spin time (18) to find the Range.",
            answer: "13",
            hint: "Biggest time is 18. Smallest time is 5. Subtract 18 - 5.",
            explanation: "18 - 5 = 13 seconds Range."
        },
        {
            type: "text",
            question: "<b>New Strategy: Subtraction by Rounding!</b><br>To subtract 19 easily, subtract 20 instead, then add 1 back!<br><i>Example: 35 - 19 -> Do 35 - 20 = 15, then add 1 back = 16!</i><br><br><b>Story:</b> Solve 44 - 19 using this strategy: Do 44 - 20 first (which is 24), then add 1 back. What is the final answer?",
            answer: "25",
            hint: "44 - 20 = 24. Now add 1 back!",
            explanation: "44 - 20 = 24. Add 1 back: 24 + 1 = 25."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Chain Deduction!</b><br>Link clues together in a line like dominoes.<br><i>Example: If A is faster than B, and B is faster than C, then A is the fastest of all!</i><br><br><b>Story:</b> In a sprint test, Kamen X is faster than Robin. Robin is faster than Arjun. Who is the fastest racer overall?",
            options: ["Kamen X", "Robin", "Arjun"],
            answer: "Kamen X",
            hint: "Kamen X beat Robin, and Robin beat Arjun. Who is at the front of the line?",
            explanation: "Kamen X > Robin > Arjun. Kamen X is the fastest."
        },

        // --- Phase 6: The X-Dash Stadium Finals (Geometry & Clever Math) ---
        {
            type: "text",
            question: "<b>New Concept: Combinations!</b><br>To find total matching combinations, multiply the number of choices in group 1 by group 2.<br><i>Example: 2 tops and 3 bottoms = 2 x 3 = 6 outfit combinations.</i><br><br><b>Story:</b> Marty has 3 different Beyblade tops and 3 different bottom ratchets. How many unique Beyblade combinations can he build (3 x 3)?",
            answer: "9",
            hint: "Multiply 3 tops by 3 ratchets.",
            explanation: "3 x 3 = 9 unique Beyblade combinations."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Symmetry!</b><br>A shape has symmetry if you can fold it down the middle and both halves match perfectly.<br><i>Example: A round circle or square has line symmetry.</i><br><br><b>Story:</b> Robin looks down at a perfectly circular Beyblade stadium dish. Does this circular dish have symmetry?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "If you fold a round circle exactly in half, do the two sides match?",
            explanation: "Yes, a circle can be folded in half along any diameter and match perfectly."
        },
        {
            type: "text",
            question: "<b>New Strategy: The Double-Double Trick for x4!</b><br>To multiply any number by 4, double it, and then double it again!<br><i>Example: To solve 7 x 4, double 7 to get 14, then double 14 to get 28!</i><br><br><b>Story:</b> Use the Double-Double trick to solve 6 x 4: First, double 6 to get 12. Now double 12. What is the answer?",
            answer: "24",
            hint: "Double 12 (12 + 12 = ?).",
            explanation: "Double 6 is 12. Double 12 is 24. So 6 x 4 = 24."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Elapsed Time!</b><br>Elapsed time is the amount of time that passes from a start time to an end time.<br><i>Example: From 2:00 PM to 2:30 PM is 30 minutes of elapsed time.</i><br><br><b>Story:</b> The X-Dash final match starts at 3:15 PM and finishes at 3:45 PM. How many minutes did the match last?",
            options: ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
            answer: "30 minutes",
            hint: "Subtract the start minutes (15) from the end minutes (45).",
            explanation: "45 minutes - 15 minutes = 30 minutes elapsed time."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: Checking Math with Inverse Operations!</b><br>You can check an addition problem by subtracting backward!<br><i>Example: If 15 + 8 = 23, check it by doing 23 - 8 = 15!</i><br><br><b>Story:</b> Arjun thinks 18 + 7 = 25. Check his answer by subtracting: 25 - 7. Does it equal 18?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "25 - 7 = 18. Does that confirm 18 + 7 = 25?",
            explanation: "Yes! 25 - 7 = 18, so Arjun's addition was 100% correct."
        },

        // --- Phase 7: Boss Battle - The Rogue Glitch Blade ---
        {
            type: "mcq",
            question: "<b>New Concept: Probability (Chance)!</b><br>Probability is the chance of picking one specific item out of the total total items.<br><i>Example: Picking 1 red marble out of 4 total marbles is a 1 in 4 chance.</i><br><br><b>Story:</b> A mystery bag contains 1 Gold bit and 3 Silver bits (4 total bits). What is the chance of drawing the Gold bit on your first try?",
            options: ["1 in 4 chance", "2 in 4 chance", "3 in 4 chance", "4 in 4 chance"],
            answer: "1 in 4 chance",
            hint: "There is 1 Gold bit out of 4 total bits in the bag.",
            explanation: "1 favorable outcome out of 4 total choices = 1 in 4 chance."
        },
        {
            type: "text",
            question: "<b>New Strategy: Friendly Number Grouping for Addition!</b><br>When adding 3 numbers, group two numbers that make a clean 10 first!<br><i>Example: To add 7 + 4 + 3, combine (7 + 3 = 10) first, then add 10 + 4 = 14!</i><br><br><b>Story:</b> Marty adds energy boosts: 8 + 5 + 2. Combine 8 + 2 to make 10 first, then add 5. What is the total?",
            answer: "15",
            hint: "8 + 2 = 10. Now add 5 to 10!",
            explanation: "(8 + 2) + 5 = 10 + 5 = 15 energy points."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: The 'NOT' Rule in Clues!</b><br>When a clue says 'NOT X and NOT Y', cross out both X and Y immediately!<br><i>Example: 'Not top and not bottom' means it MUST be middle!</i><br><br><b>Story:</b> The Rogue Glitch Blade's weak spot is NOT on the Top and NOT on the Bottom. The choices are Top, Middle, or Bottom. Where is the weak spot?",
            options: ["Top", "Middle", "Bottom"],
            answer: "Middle",
            hint: "Rule out Top and Bottom. Which single choice remains?",
            explanation: "Crossing out Top and Bottom leaves Middle as the weak spot."
        },
        {
            type: "text",
            question: "<b>New Concept: The Median (Middle Value)!</b><br>Put a list of numbers in order from smallest to largest. The Median is the exact number sitting in the middle!<br><i>Example: For numbers 3, 5, 9, the middle number sitting between 3 and 9 is 5.</i><br><br><b>Story:</b> Put these three Beyblade speeds in order: 4, 7, 10. What is the Median (middle) number?",
            answer: "7",
            hint: "Which number sits right in the middle between 4 and 10?",
            explanation: "In the ordered set [4, 7, 10], 7 is in the middle."
        },
        {
            type: "text",
            question: "<b>New Strategy: Two-Step Solving (Multiply then Subtract)!</b><br>Break multi-step problems into two clear sequential steps.<br><i>Example: 3 packs of 5 keys = 15 keys. If 2 keys break, 15 - 2 = 13 left.</i><br><br><b>Story:</b> Jackson has 4 packs of launch keys with 6 keys in each pack (4 x 6 = 24). The Glitch breaks 4 keys. How many working keys are left (24 - 4)?",
            answer: "20",
            hint: "First 4 x 6 = 24. Now subtract 4 from 24.",
            explanation: "4 x 6 = 24 keys total. 24 - 4 broken = 20 working keys remaining."
        },

        // --- Phase 8: Victory & Champions of X-Tower ---
        {
            type: "text",
            question: "<b>New Concept: Reading a Bar Graph!</b><br>Look at how high a bar reaches on the graph scale to find its value.<br><i>Example: If a bar reaches the 8 line, its value is 8.</i><br><br><b>Story:</b> On the victory scoreboard, Marty's bar reaches 10 points and Robin's reaches 8 points. Subtract 8 from 10 to find how many more points Marty scored.",
            answer: "2",
            hint: "Subtract Robin's score (8) from Marty's score (10).",
            explanation: "10 - 8 = 2 points difference."
        },
        {
            type: "text",
            question: "<b>New Strategy: Multiply by 9 (Multiply by 10 minus 1 group)!</b><br>To multiply a number by 9, multiply it by 10 first, then subtract 1 group of that number!<br><i>Example: 4 x 9 -> Do 4 x 10 = 40, then subtract 4 = 36!</i><br><br><b>Story:</b> Use this trick for 5 x 9: First do 5 x 10 = 50. Now subtract 5 from 50. What is 5 x 9?",
            answer: "45",
            hint: "50 - 5 = ?",
            explanation: "5 x 10 = 50. 50 - 5 = 45. So 5 x 9 = 45."
        },
        {
            type: "text",
            question: "<b>New Concept: Making Change with Money!</b><br>Change = Money Paid minus Cost of Item.<br><i>Example: Pay $10 for a $7 item -> $10 - $7 = $3 change back.</i><br><br><b>Story:</b> Arjun buys a souvenir Beyblade pin for $14 and pays with a $20 bill. How much change does he get back ($20 - $14)?",
            answer: "6",
            hint: "Subtract 14 from 20.",
            explanation: "$20 - $14 = $6 change."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Grid Matching!</b><br>If Person A picks Item 1, Person B MUST pick Item 2.<br><i>Example: 2 toys: Car and Ball. If Marty takes the Car, Robin gets the Ball!</i><br><br><b>Story:</b> There are 2 champion Beyblades left: Dran Sword and Wizard Arrow. Jackson Cross picks Dran Sword. Which Beyblade is left for Robin Kazami?",
            options: ["Dran Sword", "Wizard Arrow"],
            answer: "Wizard Arrow",
            hint: "Jackson took Dran Sword. What is the remaining choice?",
            explanation: "With Dran Sword chosen by Jackson, Wizard Arrow is left for Robin."
        },
        {
            type: "text",
            question: "<b>Grand Finale: Combining Your Skills!</b><br>You can solve big challenges by adding equal parts step by step!<br><i>Example: 3 + 3 + 3 = 9 total points.</i><br><br><b>Story:</b> Explorer Team Alpha and Team Persona earn 3 victory trophies in Phase 1, 3 trophies in Phase 2, and 3 trophies in Phase 3. How many total victory trophies did they win (3 + 3 + 3)?",
            answer: "9",
            hint: "Add 3 three times: 3 + 3 + 3.",
            explanation: "3 + 3 + 3 = 9 victory trophies! X-Tower Champions!"
        }
    ]
};
