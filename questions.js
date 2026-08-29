const missionConfig = {
    themeTitle: "🌀 Beyblade X: Marty's Xtreme Dash",
    themeColor: "linear-gradient(135deg, #16a34a 0%, #172554 50%, #000000 100%)", // Neon Green, Deep Blue, & Stadium Black
    themeIcon: "🌪️",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- Phase 1: The Gear Sports Arena (Warm-Up Strategies) ---
        {
            type: "text",
            question: "<b>New Strategy: Making Tens for Addition!</b><br>When adding numbers, split the smaller number to make a clean 10 first. Tens are super easy to add!<br><i>Example: To solve 8 + 4, split 4 into 2 and 2 (8 + 2 = 10, then 10 + 2 = 12).</i><br><br><b>Story:</b> Marty is building his ultimate Beyblade collection. He has 9 Attack-type Blades and 5 Stamina-type Blades. Using Making Tens, how many total Blades does Marty have?",
            answer: "14",
            hint: "Take 1 from the 5 to make 9 into a 10. Then add the remaining 4!",
            explanation: "9 + 5 = (9 + 1) + 4 = 10 + 4 = 14 Blades."
        },
        {
            type: "text",
            question: "<b>New Strategy: Counting Up for Subtraction!</b><br>Instead of counting backward, start at the smaller number and count UP to the bigger number.<br><i>Example: To solve 15 - 12, start at 12: count 13, 14, 15. That is 3 steps, so the answer is 3.</i><br><br><b>Story:</b> Marty needs 21 Pro League points to enter the Xtreme Tournament, but he only has 17 points right now. Count UP from 17 to 21. How many more points does he need?",
            answer: "4",
            hint: "Start at 17 and count up: 18, 19, 20, 21. How many steps did you count?",
            explanation: "Counting up from 17 to 21 takes 4 steps (17 + 4 = 21), so 21 - 17 = 4."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Perimeter!</b><br>Perimeter is the total distance all the way around the outside edge of a shape. Just add all side lengths together!<br><i>Example: A triangle with sides 3 cm, 3 cm, and 3 cm has a perimeter of 3 + 3 + 3 = 9 cm.</i><br><br><b>Story:</b> Marty inspects the center drop-zone of a square Xtreme Stadium. Each of its 4 sides measures 6 inches long. What is the total perimeter around the drop-zone?",
            options: ["18 inches", "20 inches", "24 inches", "30 inches"],
            answer: "24 inches",
            hint: "Add all 4 sides together: 6 + 6 + 6 + 6.",
            explanation: "6 + 6 + 6 + 6 = 24 inches around the drop-zone."
        },
        {
            type: "text",
            question: "<b>New Strategy: Near Doubles (Double + 1)!</b><br>If two numbers are right next to each other, double the smaller number and add 1.<br><i>Example: To solve 5 + 6, double 5 to get 10, then add 1 = 11.</i><br><br><b>Story:</b> Marty organizes his gear box. He counts 8 green Ratchet parts and 9 blue Ratchet parts. Use Near Doubles (double 8, then add 1) to find the total number of Ratchets.",
            answer: "17",
            hint: "Double 8 is 16. Now add 1 more!",
            explanation: "8 + 9 = (8 + 8) + 1 = 16 + 1 = 17 Ratchets."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Rounding to the Nearest 10!</b><br>Look at the last digit. If it is 5 or bigger, round UP to the next 10. If it is 4 or smaller, round DOWN.<br><i>Example: 34 rounds down to 30. 37 rounds up to 40.</i><br><br><b>Story:</b> Marty launches his Bey, Dran Sword, hitting an X-Dash speed of 58 mph. What is 58 rounded to the nearest 10?",
            options: ["50 mph", "55 mph", "60 mph", "70 mph"],
            answer: "60 mph",
            hint: "Look at the 8 in 58. Since 8 is 5 or bigger, round up to the next ten!",
            explanation: "58 is closer to 60 than to 50, so it rounds up to 60 mph."
        },

        // --- Phase 2: Customizing Beys (Multiplication & Division) ---
        {
            type: "text",
            question: "<b>New Strategy: Skip Counting for Multiplication!</b><br>Multiplication is repeated addition. You can skip count by a number to find the total.<br><i>Example: 2 x 4 means count by 2s four times: 2, 4, 6, 8.</i><br><br><b>Story:</b> Marty sets up 5 string launchers on the workbench. Each launcher requires 3 specialized gears. Skip count by 3s five times (3, 6, 9, ...) to find the total number of gears.",
            answer: "15",
            hint: "Count by 3s five times: 3, 6, 9, 12, __.",
            explanation: "3, 6, 9, 12, 15. So 5 x 3 = 15 gears."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Even vs. Odd Numbers!</b><br>Even numbers end in 0, 2, 4, 6, or 8 (they can be split evenly into two teams). Odd numbers end in 1, 3, 5, 7, or 9.<br><i>Example: 12 is Even because 6 + 6 = 12. 13 is Odd.</i><br><br><b>Story:</b> Marty buys a bulk pack of 15 spare rip cords. Can 15 rip cords be split evenly between Marty and Arjun without breaking one? Is 15 Even or Odd?",
            options: ["Even", "Odd"],
            answer: "Odd",
            hint: "Look at the last digit: 5. Numbers ending in 5 are Odd!",
            explanation: "15 ends in 5, and it cannot be split perfectly in half (7+7=14, 8+8=16). It is an Odd number."
        },
        {
            type: "text",
            question: "<b>New Strategy: Equal Sharing for Division!</b><br>Division means sharing a total amount equally into groups.<br><i>Example: Sharing 16 cards among 4 players gives 16 / 4 = 4 cards each.</i><br><br><b>Story:</b> The tournament referee gives 18 energy tokens to share equally among 3 competing Bladers. How many tokens does each Blader get?",
            answer: "6",
            hint: "Divide 18 by 3. Think: 3 times what number equals 18?",
            explanation: "18 / 3 = 6 energy tokens per Blader."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: The 'Add a Zero' Trick for 10s!</b><br>When multiplying any whole number by 10, write a 0 at the end of that number.<br><i>Example: 6 x 10 = 60.</i><br><br><b>Story:</b> Marty looks at the grandstands at the Beyblade X Arena. He counts 9 rows, and each row has 10 seats. What is 9 x 10?",
            options: ["19 seats", "90 seats", "900 seats", "99 seats"],
            answer: "90 seats",
            hint: "Put a 0 right after the number 9!",
            explanation: "9 x 10 = 90 seats."
        },
        {
            type: "text",
            question: "<b>New Strategy: Halving (Dividing by 2)!</b><br>To find half of a number, split it into two identical equal parts.<br><i>Example: Half of 14 is 7 because 7 + 7 = 14.</i><br><br><b>Story:</b> Marty wins 12 rare Bit upgrades in a mystery box. He decides to give half of them to his friend Arjun. What is half of 12?",
            answer: "6",
            hint: "What number added to itself equals 12? (___ + ___ = 12)",
            explanation: "6 + 6 = 12, so half of 12 is 6 Bit upgrades."
        },

        // --- Phase 3: The Xtreme Line (Patterns & Logic) ---
        {
            type: "mcq",
            question: "<b>New Strategy: Process of Elimination for Logic!</b><br>Cross out options that are proven wrong so only the correct answer remains.<br><i>Example: If a shape is NOT a Square and NOT a Circle, and choices are Square, Circle, or Triangle, it MUST be a Triangle!</i><br><br><b>Story:</b> Marty is trying to guess his opponent's Beyblade type. Clue 1: It is NOT an Attack type. Clue 2: It is NOT a Stamina type. Options are Attack, Stamina, or Defense. What type is it?",
            options: ["Attack", "Stamina", "Defense"],
            answer: "Defense",
            hint: "Cross out Attack and Stamina. Which option remains standing?",
            explanation: "Eliminating Attack and Stamina leaves Defense as the only choice."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: Finding the Repeating Pattern Unit!</b><br>Find the core group of colors or shapes that repeats in order over and over.<br><i>Example: In Red, Blue, Red, Blue... the pattern repeats every 2 items. The 5th is Red.</i><br><br><b>Story:</b> The stadium lights flash in this pattern: Green, Yellow, Blue, Green, Yellow, Blue... What color will the 7th flash be?",
            options: ["Green", "Yellow", "Blue"],
            answer: "Green",
            hint: "The pattern repeats every 3 flashes. Positions 1, 4, and 7 start a new pattern repeat!",
            explanation: "1:Green, 2:Yellow, 3:Blue, 4:Green, 5:Yellow, 6:Blue, 7:Green."
        },
        {
            type: "text",
            question: "<b>New Concept: Area of a Rectangle!</b><br>Area is the total flat space inside a shape. Multiply Length times Width!<br><i>Example: A mat 3 ft long and 2 ft wide has an Area of 3 x 2 = 6 square ft.</i><br><br><b>Story:</b> Marty rolls out a rubber launch mat so his launcher doesn't slip. The mat is 5 feet long and 4 feet wide. What is the Area of his launch mat?",
            answer: "20",
            hint: "Multiply Length (5) by Width (4). What is 5 x 4?",
            explanation: "Area = Length x Width = 5 x 4 = 20 square feet."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Sandwich Clues!</b><br>When a clue says a number is 'greater than A, but less than B', the number sits right between them.<br><i>Example: Greater than 12 but less than 14 means 13!</i><br><br><b>Story:</b> Marty weighs his new heavy-hitting Blade. The digital scale says: 'The weight is greater than 33 grams, but less than 35 grams.' What is the weight?",
            options: ["32 grams", "33 grams", "34 grams", "36 grams"],
            answer: "34 grams",
            hint: "Which whole number comes right between 33 and 35?",
            explanation: "34 is greater than 33 and less than 35."
        },
        {
            type: "text",
            question: "<b>New Strategy: Growing Pattern Steps!</b><br>Find how much is added at each step in a pattern sequence.<br><i>Example: 2, 4, 6, 8... increases by +2 each time. Next is 8 + 2 = 10.</i><br><br><b>Story:</b> Marty tracks his Bey's spin time in seconds after applying oil to the gears: 4 sec, 7 sec, 10 sec, 13 sec, ___ sec. What is the next spin time?",
            answer: "16",
            hint: "Notice the times go up by +3 seconds each try. Add 3 to 13!",
            explanation: "The pattern adds +3 each time. 13 + 3 = 16 seconds."
        },

        // --- Phase 4: Tournament Battles (Fractions & Multi-Step) ---
        {
            type: "text",
            question: "<b>New Concept: Fractions (A Quarter / One-Fourth)!</b><br>One quarter (1/4) means dividing a total into 4 equal parts and taking 1 part.<br><i>Example: One quarter of 16 is 4 because 16 / 4 = 4.</i><br><br><b>Story:</b> Marty earns 12 Burst Finish tokens during the qualifiers. He trades 1/4 of them in for a custom grip. Divide 12 by 4 to find how many tokens Marty traded.",
            answer: "3",
            hint: "Divide 12 into 4 equal parts (12 / 4 = ?).",
            explanation: "12 / 4 = 3. So 1/4 of 12 is 3 Burst tokens."
        },
        {
            type: "text",
            question: "<b>New Strategy: Break-Apart Addition for 2-Digit Numbers!</b><br>Break two-digit numbers into Tens and Ones, add the Tens, add the Ones, then combine them!<br><i>Example: 13 + 16 = (10 + 10) + (3 + 6) = 20 + 9 = 29.</i><br><br><b>Story:</b> Over the weekend, Marty logs 22 practice launches and Arjun logs 15 practice launches. Use Break-Apart Addition: (20 + 10) + (2 + 5). What is their total launch count?",
            answer: "37",
            hint: "Add the tens (20 + 10 = 30), add the ones (2 + 5 = 7), then combine (30 + 7)!",
            explanation: "20 + 10 = 30, and 2 + 5 = 7. 30 + 7 = 37 practice launches."
        },
        {
            type: "text",
            question: "<b>New Concept: An Average!</b><br>An average is the sum of numbers divided by the count of numbers.<br><i>Example: To find the average of 2 and 6, add them (2 + 6 = 8), then divide by 2 numbers (8 / 2 = 4).</i><br><br><b>Story:</b> Marty battles his rival twice. Round 1 takes 8 seconds. Round 2 takes 12 seconds. Add them together (20), then divide by 2 to find the average battle time.",
            answer: "10",
            hint: "8 + 12 = 20. Now divide 20 by 2!",
            explanation: "8 + 12 = 20. 20 / 2 = 10. The average battle time is 10 seconds."
        },
        {
            type: "text",
            question: "<b>New Strategy: Working Backward!</b><br>Start from the final result and undo steps using opposite operations.<br><i>Example: If a number + 5 = 12, work backward: 12 - 5 = 7!</i><br><br><b>Story:</b> Marty checks his tournament ranking. He moved up 6 spots today, landing in 15th place total. Work backward (15 - 6) to find what place he was in yesterday.",
            answer: "9",
            hint: "Subtract the 6 spots from his current total of 15.",
            explanation: "15 - 6 = 9. Marty started in 9th place."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Comparing Fraction Sizes!</b><br>When splitting something into pieces, FEWER cuts make LARGER pieces! So 1/2 is bigger than 1/4.<br><i>Example: Half a sandwich (1/2) is bigger than a quarter sandwich (1/4).</i><br><br><b>Story:</b> The arena floor is painted in team colors. Which section of the stadium is LARGER: 1/2 painted neon green, or 1/4 painted black?",
            options: ["1/2", "1/4"],
            answer: "1/2",
            hint: "Would you rather have half a cake or a quarter slice? Half is bigger!",
            explanation: "1/2 divides a whole into 2 larger parts, while 1/4 splits it into 4 smaller parts. 1/2 > 1/4."
        },

        // --- Phase 5: The Pro League (Data & Logic) ---
        {
            type: "text",
            question: "<b>New Concept: The Mode!</b><br>The Mode is the number that appears MOST OFTEN in a list.<br><i>Example: In [3, 6, 6, 8], the number 6 appears twice, so 6 is the Mode!</i><br><br><b>Story:</b> Marty tracks how many points he scores in 5 tournament matches: 4, 7, 4, 2, 4. Which score appears most often and is the Mode?",
            answer: "4",
            hint: "Which number shows up three times in the list?",
            explanation: "4 appears 3 times, which is more than any other number. 4 is the Mode."
        },
        {
            type: "text",
            question: "<b>New Strategy: Multiply by 5 (Multiply by 10 then Halve)!</b><br>To multiply a number by 5 easily, multiply it by 10 first, then take half of that answer!<br><i>Example: 4 x 5 -> First do 4 x 10 = 40. Then half of 40 is 20!</i><br><br><b>Story:</b> Marty buys 8 packs of performance tips, and each pack costs 5 dollars. Calculate 8 x 5. First calculate 8 x 10 = 80. What is half of 80?",
            answer: "40",
            hint: "What is half of 80? (80 / 2 = ?)",
            explanation: "8 x 10 = 80. Half of 80 is 40. So 8 x 5 = 40 dollars."
        },
        {
            type: "text",
            question: "<b>New Concept: Range (Difference Between High & Low)!</b><br>Range is the distance between the Biggest number and the Smallest number. Subtract: Biggest - Smallest.<br><i>Example: For scores 3, 9, 11, the Range is 11 - 3 = 8.</i><br><br><b>Story:</b> Marty records RPM speeds of his Bey: 12 RPM, 25 RPM, and 17 RPM. Subtract the smallest speed (12) from the largest speed (25) to find the Range.",
            answer: "13",
            hint: "Largest speed is 25. Smallest speed is 12. Subtract 25 - 12.",
            explanation: "25 - 12 = 13 RPM Range."
        },
        {
            type: "text",
            question: "<b>New Strategy: Subtraction by Rounding!</b><br>To subtract 19 easily, subtract 20 instead, then add 1 back!<br><i>Example: 35 - 19 -> Do 35 - 20 = 15, then add 1 back = 16!</i><br><br><b>Story:</b> Solve 45 - 19 to calculate the remaining health gauge of an opponent using this strategy: Do 45 - 20 first (which is 25), then add 1 back. What is the final answer?",
            answer: "26",
            hint: "45 - 20 = 25. Now add 1 back!",
            explanation: "45 - 20 = 25. Add 1 back: 25 + 1 = 26."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Chain Deduction!</b><br>Link clues together in a line like dominoes.<br><i>Example: If A hits harder than B, and B hits harder than C, then A is the strongest overall!</i><br><br><b>Story:</b> In a power test, Dran Sword hits harder than Knight Shield. Knight Shield hits harder than Wizard Arrow. Which Beyblade hits the hardest overall?",
            options: ["Dran Sword", "Knight Shield", "Wizard Arrow"],
            answer: "Dran Sword",
            hint: "Dran Sword beat Knight Shield, and Knight Shield beat Wizard Arrow. Who is at the top?",
            explanation: "Dran Sword > Knight Shield > Wizard Arrow. Dran Sword is the hardest hitter."
        },

        // --- Phase 6: Upgrading Gear (Geometry & Clever Math) ---
        {
            type: "text",
            question: "<b>New Concept: Combinations!</b><br>To find total matching combinations, multiply the number of choices in group 1 by group 2.<br><i>Example: 2 launcher colors and 3 rip cords = 2 x 3 = 6 combinations.</i><br><br><b>Story:</b> Marty is designing a custom combo. He has 4 different metal Blades and 2 different plastic Ratchets. How many unique Bey combos can he build (4 x 2)?",
            answer: "8",
            hint: "Multiply 4 Blades by 2 Ratchets.",
            explanation: "4 x 2 = 8 unique Bey combinations."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Line Symmetry!</b><br>A shape has symmetry if you can fold it down the middle and both halves match perfectly.<br><i>Example: A capital letter A has line symmetry down the middle.</i><br><br><b>Story:</b> Marty looks at a perfectly flat Hexagon-shaped stadium (a shape with 6 equal sides). Does this regular Hexagon stadium have line symmetry?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "If you fold a 6-sided hexagon exactly in half down the middle, do both sides align?",
            explanation: "Yes, a regular hexagon can be folded down its lines of symmetry with perfectly matching halves."
        },
        {
            type: "text",
            question: "<b>New Strategy: The Double-Double Trick for x4!</b><br>To multiply any number by 4, double it, and then double it again!<br><i>Example: To solve 6 x 4, double 6 to get 12, then double 12 to get 24!</i><br><br><b>Story:</b> Use the Double-Double trick to solve 8 x 4 for calculating tournament bracket points: First, double 8 to get 16. Now double 16. What is the final answer?",
            answer: "32",
            hint: "Double 16 (16 + 16 = ?).",
            explanation: "Double 8 is 16. Double 16 is 32. So 8 x 4 = 32."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Elapsed Time!</b><br>Elapsed time is the amount of time that passes from a start time to an end time.<br><i>Example: From 2:00 PM to 2:15 PM is 15 minutes of elapsed time.</i><br><br><b>Story:</b> Marty's pro match starts at 4:15 PM and finishes at 4:45 PM. How many minutes did the Beyblade battle last?",
            options: ["15 minutes", "20 minutes", "30 minutes", "45 minutes"],
            answer: "30 minutes",
            hint: "Subtract the start minutes (15) from the end minutes (45).",
            explanation: "45 minutes - 15 minutes = 30 minutes elapsed time."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: Checking Math with Inverse Operations!</b><br>You can check an addition problem by subtracting backward!<br><i>Example: If 10 + 4 = 14, check it by doing 14 - 4 = 10!</i><br><br><b>Story:</b> Arjun calculates that his 14 points plus a 7-point Xtreme Dash bonus equals 21 points. Check his math by subtracting: 21 - 7. Does it equal 14?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "21 - 7 = 14. Does that confirm 14 + 7 = 21?",
            explanation: "Yes! 21 - 7 = 14, so Arjun's addition was 100% correct."
        },

        // --- Phase 7: The Final Clash (Multi-Step Logic) ---
        {
            type: "mcq",
            question: "<b>New Concept: Probability (Chance)!</b><br>Probability is the chance of picking one specific item out of the total items.<br><i>Example: Picking 1 red ball out of 5 total balls is a 1 in 5 chance.</i><br><br><b>Story:</b> Marty looks at his match history. He has scored 1 Xtreme Finish out of 6 total finishes. What is the probability that his next finish is an Xtreme Finish, based on this record?",
            options: ["1 in 6 chance", "2 in 6 chance", "3 in 6 chance", "6 in 6 chance"],
            answer: "1 in 6 chance",
            hint: "There is 1 Xtreme Finish out of 6 total finishes.",
            explanation: "1 favorable outcome out of 6 total choices = 1 in 6 chance."
        },
        {
            type: "text",
            question: "<b>New Strategy: Friendly Number Grouping for Addition!</b><br>When adding 3 numbers, group two numbers that make a clean 10 first!<br><i>Example: To add 8 + 2 + 3, combine (8 + 2 = 10) first, then add 10 + 3 = 13!</i><br><br><b>Story:</b> Marty scores hits in the arena: 9 + 1 + 6. Combine 9 + 1 to make 10 first, then add 6. What is his total hit score?",
            answer: "16",
            hint: "9 + 1 = 10. Now add 6 to 10!",
            explanation: "(9 + 1) + 6 = 10 + 6 = 16 hits."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: The 'NOT' Rule in Clues!</b><br>When a clue says 'NOT X and NOT Y', cross out both X and Y immediately!<br><i>Example: 'Not up and not down' means it MUST be left or right!</i><br><br><b>Story:</b> The rival's Beyblade spin direction is NOT Left-Spin and NOT Dual-Spin. The options are Left-Spin, Right-Spin, or Dual-Spin. What spin direction is it?",
            options: ["Left-Spin", "Right-Spin", "Dual-Spin"],
            answer: "Right-Spin",
            hint: "Rule out Left-Spin and Dual-Spin. Which single choice remains?",
            explanation: "Crossing out Left-Spin and Dual-Spin leaves Right-Spin as the only answer."
        },
        {
            type: "text",
            question: "<b>New Concept: The Median (Middle Value)!</b><br>Put a list of numbers in order from smallest to largest. The Median is the exact number sitting in the middle!<br><i>Example: For numbers 4, 7, 12, the middle number sitting between 4 and 12 is 7.</i><br><br><b>Story:</b> Put these three launch speeds in order: 10 mph, 14 mph, 20 mph. What is the Median (middle) launch speed?",
            answer: "14",
            hint: "Which speed sits right in the middle between 10 and 20?",
            explanation: "In the ordered set [10, 14, 20], 14 is sitting in the middle."
        },
        {
            type: "text",
            question: "<b>New Strategy: Two-Step Solving (Multiply then Subtract)!</b><br>Break multi-step problems into two clear sequential steps.<br><i>Example: 2 x 4 = 8. If you lose 2, 8 - 2 = 6.</i><br><br><b>Story:</b> Marty buys 3 card packs that each have 5 stat cards (3 x 5 = 15). He trades 4 duplicate cards away. How many cards does he have remaining (15 - 4)?",
            answer: "11",
            hint: "First 3 x 5 = 15. Now subtract 4 from 15.",
            explanation: "3 x 5 = 15 cards total. 15 - 4 traded away = 11 cards remaining."
        },

        // --- Phase 8: Beyblade Champion (Celebration) ---
        {
            type: "text",
            question: "<b>New Concept: Reading a Bar Graph!</b><br>Look at how high a bar reaches on the graph scale to find its value.<br><i>Example: If a bar reaches the 9 line, its value is 9.</i><br><br><b>Story:</b> On the tournament jumbo screen, Marty's bar reaches 12 points and his rival's bar reaches 8 points. Subtract 8 from 12 to find how many more points Marty scored.",
            answer: "4",
            hint: "Subtract the rival's score (8) from Marty's score (12).",
            explanation: "12 - 8 = 4 points difference."
        },
        {
            type: "text",
            question: "<b>New Strategy: Multiply by 9 (Multiply by 10 minus 1 group)!</b><br>To multiply a number by 9, multiply it by 10 first, then subtract 1 group of that number!<br><i>Example: 6 x 9 -> Do 6 x 10 = 60, then subtract 6 = 54!</i><br><br><b>Story:</b> Use this trick for 5 x 9 victory patches: First do 5 x 10 = 50. Now subtract 5 from 50. What is 5 x 9?",
            answer: "45",
            hint: "50 - 5 = ?",
            explanation: "5 x 10 = 50. 50 - 5 = 45. So 5 x 9 = 45."
        },
        {
            type: "text",
            question: "<b>New Concept: Making Change with Money!</b><br>Change = Money Paid minus Cost of Item.<br><i>Example: Pay $10 for a $3 item -> $10 - $3 = $7 change back.</i><br><br><b>Story:</b> Marty buys a new grip tape for $11 and pays the cashier with a $20 bill. How much change does he get back ($20 - $11)?",
            answer: "9",
            hint: "Subtract 11 from 20.",
            explanation: "$20 - $11 = $9 change."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Grid Matching!</b><br>If Person A picks Item 1, Person B MUST pick Item 2.<br><i>Example: 2 beys: Valkyrie and Spriggan. If A takes Valkyrie, B takes Spriggan!</i><br><br><b>Story:</b> There are 2 classic Beyblades left at the shop: Dranzer and Dragoon. Arjun decides to buy Dragoon. Which Beyblade is left for Marty?",
            options: ["Dranzer", "Dragoon"],
            answer: "Dranzer",
            hint: "Arjun took Dragoon. What is the remaining choice?",
            explanation: "With Dragoon chosen by Arjun, Dranzer is left for Marty."
        },
        {
            type: "text",
            question: "<b>Grand Finale: Combining Your Skills!</b><br>You can solve big challenges by adding equal parts step by step!<br><i>Example: 3 + 3 + 3 = 9 total points.</i><br><br><b>Story:</b> Marty pulls off 6 Xtreme Dashes in the qualifiers, 6 in the semi-finals, and 6 in the grand finals! How many total Xtreme Dashes did he execute (6 + 6 + 6)?",
            answer: "18",
            hint: "Add 6 three times: 6 + 6 + 6.",
            explanation: "6 + 6 + 6 = 18 total Xtreme Dashes! Beyblade Pro Champion!"
        }
    ]
};
