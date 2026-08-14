const missionConfig = {
    themeTitle: "🏎️ Hot Wheels Racing: The Ultimate Speed Track",
    themeColor: "linear-gradient(135deg, #ea580c 0%, #b91c1c 50%, #1e1b4b 100%)", // Hot Wheels Flame Orange, Racing Red & Night Track Blue
    themeIcon: "🏎️",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- Phase 1: Hot Wheels City Garage (Warm-Up Strategies) ---
        {
            type: "text",
            question: "<b>New Strategy: Making Tens for Addition!</b><br>When adding numbers, split the smaller number to make a clean 10 first. Tens are super easy to add!<br><i>Example: To solve 8 + 5, split 5 into 2 and 3 (8 + 2 = 10, then 10 + 3 = 13).</i><br><br><b>Story:</b> Marty is building a high-speed Hot Wheels launch track. He snap-connects 9 orange track pieces and 7 blue curve pieces. Using Making Tens (9 + 1 = 10, then 10 + 6), how many track pieces did Marty connect in total?",
            answer: "16",
            hint: "Take 1 from the 7 to make 9 into a 10. Then add the remaining 6!",
            explanation: "9 + 7 = (9 + 1) + 6 = 10 + 6 = 16 track pieces."
        },
        {
            type: "text",
            question: "<b>New Strategy: Counting Up for Subtraction!</b><br>Instead of counting backward, start at the smaller number and count UP to the bigger number.<br><i>Example: To solve 24 - 19, start at 19: count +1 to reach 20, then +4 to reach 24. Total = 1 + 4 = 5.</i><br><br><b>Story:</b> Arjun needs 24 motorized track boosters for the mega loop, but his pit crew only has 19. Count UP from 19 to 24. How many more boosters does Arjun need?",
            answer: "5",
            hint: "Start at 19 and count up: 20, 21, 22, 23, 24. How many steps did you count?",
            explanation: "Counting up from 19 to 24 takes 5 steps (19 + 5 = 24), so 24 - 19 = 5."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Perimeter!</b><br>Perimeter is the total distance all the way around the outside edge of a shape. Just add all side lengths together!<br><i>Example: A triangle with sides 4 in, 4 in, and 4 in has a perimeter of 4 + 4 + 4 = 12 in.</i><br><br><b>Story:</b> Ayaan builds a square pit-stop pad for his Hot Wheels car. Each of its 4 sides measures 6 inches long. What is the total perimeter around the pad?",
            options: ["18 inches", "20 inches", "24 inches", "30 inches"],
            answer: "24 inches",
            hint: "Add all 4 sides together: 6 + 6 + 6 + 6.",
            explanation: "6 + 6 + 6 + 6 = 24 inches around the pit-stop pad."
        },
        {
            type: "text",
            question: "<b>New Strategy: Near Doubles (Double + 1)!</b><br>If two numbers are right next to each other, double the smaller number and add 1.<br><i>Example: To solve 6 + 7, double 6 to get 12, then add 1 = 13.</i><br><br><b>Story:</b> Taksh loads 6 die-cast cars onto the lower carrier rack and 7 cars onto the top rack. Use Near Doubles (double 6, then add 1) to find how many cars are on the carrier.",
            answer: "13",
            hint: "Double 6 is 12. Now add 1 more!",
            explanation: "6 + 7 = (6 + 6) + 1 = 12 + 1 = 13 die-cast cars."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Rounding to the Nearest 10!</b><br>Look at the last digit. If it is 5 or bigger, round UP to the next 10. If it is 4 or smaller, round DOWN.<br><i>Example: 23 rounds down to 20. 27 rounds up to 30.</i><br><br><b>Story:</b> Advi hits the speed trap on the drag strip at 46 mph. What is 46 rounded to the nearest 10?",
            options: ["40 mph", "45 mph", "50 mph", "60 mph"],
            answer: "50 mph",
            hint: "Look at the 6 in 46. Since 6 is 5 or bigger, round up to the next ten!",
            explanation: "46 is closer to 50 than to 40, so it rounds up to 50 mph."
        },

        // --- Phase 2: The Mega Track Stunt Arena (Multiplication & Division) ---
        {
            type: "text",
            question: "<b>New Strategy: Skip Counting for Multiplication!</b><br>Multiplication is repeated addition. You can skip count by a number to find the total.<br><i>Example: 3 x 4 means count by 3s four times: 3, 6, 9, 12.</i><br><br><b>Story:</b> Smithika sets up 4 stunt launchers, and each launcher holds 3 Hot Wheels cars. Skip count by 3s four times (3, 6, 9, ...) to find the total number of cars loaded.",
            answer: "12",
            hint: "Count by 3s four times: 3, 6, 9, __.",
            explanation: "3, 6, 9, 12. So 4 x 3 = 12 Hot Wheels cars."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Even vs. Odd Numbers!</b><br>Even numbers end in 0, 2, 4, 6, or 8 (they can be split evenly into two teams). Odd numbers end in 1, 3, 5, 7, or 9.<br><i>Example: 12 is Even. 13 is Odd.</i><br><br><b>Story:</b> Mom checks 18 fresh racing tires in the pit crew inventory. Can 18 tires be split evenly into two equal stacks? Is 18 Even or Odd?",
            options: ["Even", "Odd"],
            answer: "Even",
            hint: "Look at the last digit: 8. Numbers ending in 8 are Even!",
            explanation: "18 ends in 8, and 9 + 9 = 18, so it is an Even number."
        },
        {
            type: "text",
            question: "<b>New Strategy: Equal Sharing for Division!</b><br>Division means sharing a total amount equally into groups.<br><i>Example: Sharing 12 track clips among 3 racers gives 12 / 3 = 4 clips each.</i><br><br><b>Story:</b> Dad brings 16 orange track extenders to share equally among 4 stunt drivers (Marty, Arjun, Ayaan, and Taksh). How many extenders does each driver get?",
            answer: "4",
            hint: "Divide 16 by 4. Think: 4 times what number equals 16?",
            explanation: "16 / 4 = 4 track extenders per driver."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: The 'Add a Zero' Trick for 10s!</b><br>When multiplying any whole number by 10, write a 0 at the end of that number.<br><i>Example: 6 x 10 = 60.</i><br><br><b>Story:</b> Rod the AI times 6 cars speeding through the speed trap. Each track section is 10 feet long. What is 6 x 10?",
            options: ["16 feet", "60 feet", "600 feet", "66 feet"],
            answer: "60 feet",
            hint: "Put a 0 right after the number 6!",
            explanation: "6 x 10 = 60 feet."
        },
        {
            type: "text",
            question: "<b>New Strategy: Halving (Dividing by 2)!</b><br>To find half of a number, split it into two identical equal parts.<br><i>Example: Half of 12 is 6 because 6 + 6 = 12.</i><br><br><b>Story:</b> Marty has 14 chrome wheel rims. He gives half of them to Arjun. What is half of 14?",
            answer: "7",
            hint: "What number added to itself equals 14? (___ + ___ = 14)",
            explanation: "7 + 7 = 14, so half of 14 is 7 wheel rims."
        },

        // --- Phase 3: The Monster Loop Challenge (Patterns & Logic) ---
        {
            type: "mcq",
            question: "<b>New Strategy: Process of Elimination for Logic!</b><br>Cross out options that are proven wrong so only the correct answer remains.<br><i>Example: If a car is NOT Red and NOT Yellow, and options are Red, Yellow, or Metallic Blue, it MUST be Metallic Blue!</i><br><br><b>Story:</b> Marty picks a secret Hot Wheels car for the loop sprint. Clue 1: It is NOT Green. Clue 2: It is NOT Orange. Options are Green, Orange, or Flame Red. What color is Marty's car?",
            options: ["Green", "Orange", "Flame Red"],
            answer: "Flame Red",
            hint: "Cross out Green and Orange. Which option remains standing?",
            explanation: "Eliminating Green and Orange leaves Flame Red as the only choice."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: Finding the Repeating Pattern Unit!</b><br>Find the core group of shapes or colors that repeats in order over and over.<br><i>Example: In Red, Yellow, Blue, Red, Yellow, Blue... the pattern unit is (Red, Yellow, Blue).</i><br><br><b>Story:</b> Taksh lines up track flags in this order: Checker, Flame, Star, Checker, Flame, Star... What will be the 7th flag in line?",
            options: ["Checker", "Flame", "Star"],
            answer: "Checker",
            hint: "The pattern repeats every 3 flags. Positions 1, 4, and 7 start a new pattern repeat!",
            explanation: "1:Checker, 2:Flame, 3:Star, 4:Checker, 5:Flame, 6:Star, 7:Checker."
        },
        {
            type: "text",
            question: "<b>New Concept: Area of a Rectangle!</b><br>Area is the total flat space inside a shape. Multiply Length times Width!<br><i>Example: A box 4 cm long and 3 cm wide has an Area of 4 x 3 = 12 square cm.</i><br><br><b>Story:</b> Ayaan lays down a rubber pit mat that is 6 feet long and 4 feet wide. What is the Area of his pit mat?",
            answer: "24",
            hint: "Multiply Length (6) by Width (4). What is 6 x 4?",
            explanation: "Area = Length x Width = 6 x 4 = 24 square feet."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Sandwich Clues!</b><br>When a clue says a number is 'greater than A, but less than B', the number sits right between them.<br><i>Example: Greater than 12 but less than 14 means 13!</i><br><br><b>Story:</b> Advi checks the top speed of the 'Twin Mill' car on the radar gun. Rod says: 'The speed is greater than 40 mph, but less than 42 mph.' What is its top speed?",
            options: ["39 mph", "40 mph", "41 mph", "43 mph"],
            answer: "41 mph",
            hint: "Which whole number comes right between 40 and 42?",
            explanation: "41 is greater than 40 and less than 42."
        },
        {
            type: "text",
            question: "<b>New Strategy: Growing Pattern Steps!</b><br>Find how much is added at each step in a pattern sequence.<br><i>Example: 2, 5, 8, 11... increases by +3 each time. Next is 11 + 3 = 14.</i><br><br><b>Story:</b> Smithika measures booster speeds: 2 mph, 6 mph, 10 mph, 14 mph, ___ mph. What is the next booster speed?",
            answer: "18",
            hint: "Notice the speeds go up by +4 each time. Add 4 to 14!",
            explanation: "The pattern adds +4 each time. 14 + 4 = 18 mph."
        },

        // --- Phase 4: Super-Charger Pit Stop (Fractions & Multi-Step) ---
        {
            type: "text",
            question: "<b>New Concept: Fractions (A Quarter / One-Fourth)!</b><br>One quarter (1/4) means dividing a total into 4 equal parts and taking 1 part.<br><i>Example: One quarter of 8 is 2 because 8 / 4 = 2.</i><br><br><b>Story:</b> Marty has a display case with 12 Super Treasure Hunt cars. He gives 1/4 of them custom flame decals. Divide 12 by 4 to find how many cars got flame decals.",
            answer: "3",
            hint: "Divide 12 into 4 equal parts (12 / 4 = ?).",
            explanation: "12 / 4 = 3. So 1/4 of 12 is 3 cars with flame decals."
        },
        {
            type: "text",
            question: "<b>New Strategy: Break-Apart Addition for 2-Digit Numbers!</b><br>Break two-digit numbers into Tens and Ones, add the Tens, add the Ones, then combine them!<br><i>Example: 23 + 14 = (20 + 10) + (3 + 4) = 30 + 7 = 37.</i><br><br><b>Story:</b> Mom drives 23 miles to the Hot Wheels track rally and Dad drives 32 miles. Use Break-Apart Addition: (20 + 30) + (3 + 2). What is the total distance driven?",
            answer: "55",
            hint: "Add the tens (20 + 30 = 50), add the ones (3 + 2 = 5), then combine (50 + 5)!",
            explanation: "20 + 30 = 50, and 3 + 2 = 5. 50 + 5 = 55 miles."
        },
        {
            type: "text",
            question: "<b>New Concept: An Average!</b><br>An average is the sum of numbers divided by the count of numbers.<br><i>Example: To find the average of 4 and 8, add them (4 + 8 = 12), then divide by 2 numbers (12 / 2 = 6).</i><br><br><b>Story:</b> Marty completes two lap sprints. Lap 1 takes 6 seconds and Lap 2 takes 10 seconds. Add them together (16), then divide by 2 to find his average lap time.",
            answer: "8",
            hint: "6 + 10 = 16. Now divide 16 by 2!",
            explanation: "6 + 10 = 16. 16 / 2 = 8. The average lap time is 8 seconds."
        },
        {
            type: "text",
            question: "<b>New Strategy: Working Backward!</b><br>Start from the final result and undo steps using opposite operations.<br><i>Example: If a number + 5 = 12, work backward: 12 - 5 = 7!</i><br><br><b>Story:</b> Rod the AI awarded Marty 6 bonus speed points during the race, giving him 18 total points. Work backward (18 - 6) to find how many points Marty had before the bonus.",
            answer: "12",
            hint: "Subtract the 6 bonus points from his current total of 18.",
            explanation: "18 - 6 = 12. Marty started with 12 speed points."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Comparing Fraction Sizes!</b><br>When splitting something into pieces, FEWER cuts make LARGER pieces! So 1/2 is bigger than 1/4.<br><i>Example: Half a track strip (1/2) is longer than a quarter strip (1/4).</i><br><br><b>Story:</b> Taksh needs a long boost ramp. Which fraction slice of the track is LARGER: 1/2 or 1/4?",
            options: ["1/2", "1/4"],
            answer: "1/2",
            hint: "Would you rather have half a track piece or a quarter piece? Half is bigger!",
            explanation: "1/2 divides a whole into 2 larger parts, while 1/4 splits it into 4 smaller parts. 1/2 > 1/4."
        },

        // --- Phase 5: The Grand Prix Rally (Data & Logic) ---
        {
            type: "text",
            question: "<b>New Concept: The Mode!</b><br>The Mode is the number that appears MOST OFTEN in a list.<br><i>Example: In [3, 5, 5, 7], the number 5 appears twice, so 5 is the Mode!</i><br><br><b>Story:</b> Marty records top speeds across five drag races: 5 mph, 8 mph, 5 mph, 9 mph, 5 mph. Which speed appears most often and is the Mode?",
            answer: "5",
            hint: "Which number shows up three times in the list?",
            explanation: "5 appears 3 times, which is more than any other number. 5 is the Mode."
        },
        {
            type: "text",
            question: "<b>New Strategy: Multiply by 5 (Multiply by 10 then Halve)!</b><br>To multiply a number by 5 easily, multiply it by 10 first, then take half of that answer!<br><i>Example: 6 x 5 -> First do 6 x 10 = 60. Then half of 60 is 30!</i><br><br><b>Story:</b> Agent Advi calculates rocket booster power for 7 cars: 7 x 5. First calculate 7 x 10 = 70. What is half of 70?",
            answer: "35",
            hint: "What is half of 70? (70 / 2 = ?)",
            explanation: "7 x 10 = 70. Half of 70 is 35. So 7 x 5 = 35."
        },
        {
            type: "text",
            question: "<b>New Concept: Range (Difference Between High & Low)!</b><br>Range is the distance between the Biggest number and the Smallest number. Subtract: Biggest - Smallest.<br><i>Example: For scores 2, 5, 9, the Range is 9 - 2 = 7.</i><br><br><b>Story:</b> Smithika measures finish-line speeds: 6 mph, 14 mph, and 22 mph. Subtract the smallest speed (6) from the largest speed (22) to find the Range.",
            answer: "16",
            hint: "Largest speed is 22. Smallest speed is 6. Subtract 22 - 6.",
            explanation: "22 - 6 = 16 mph Range."
        },
        {
            type: "text",
            question: "<b>New Strategy: Subtraction by Rounding!</b><br>To subtract 19 easily, subtract 20 instead, then add 1 back!<br><i>Example: 35 - 19 -> Do 35 - 20 = 15, then add 1 back = 16!</i><br><br><b>Story:</b> Solve 35 - 19 for pit crew tuning time using this strategy: Do 35 - 20 first (which is 15), then add 1 back. What is the final answer?",
            answer: "16",
            hint: "35 - 20 = 15. Now add 1 back!",
            explanation: "35 - 20 = 15. Add 1 back: 15 + 1 = 16."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Chain Deduction!</b><br>Link clues together in a line like dominoes.<br><i>Example: If Car A is faster than Car B, and Car B is faster than Car C, then Car A is the fastest overall!</i><br><br><b>Story:</b> On the test track, 'Twin Mill' is faster than 'Bone Shaker'. 'Bone Shaker' is faster than 'Night Shifter'. Which Hot Wheels car is the fastest overall?",
            options: ["Twin Mill", "Bone Shaker", "Night Shifter"],
            answer: "Twin Mill",
            hint: "Twin Mill beat Bone Shaker, and Bone Shaker beat Night Shifter. Who is in front?",
            explanation: "Twin Mill > Bone Shaker > Night Shifter. Twin Mill is the fastest."
        },

        // --- Phase 6: The Volcano Sky Jump (Geometry & Clever Math) ---
        {
            type: "text",
            question: "<b>New Concept: Combinations!</b><br>To find total matching combinations, multiply the number of choices in group 1 by group 2.<br><i>Example: 2 tops and 3 bottoms = 2 x 3 = 6 outfit combinations.</i><br><br><b>Story:</b> Marty builds custom Hot Wheels cars in the garage. He has 3 launcher bases and 4 different vehicle body shells. How many unique car combinations can he build (3 x 4)?",
            answer: "12",
            hint: "Multiply 3 bases by 4 body shells.",
            explanation: "3 x 4 = 12 unique vehicle combinations."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Line Symmetry!</b><br>A shape has symmetry if you can fold it down the middle and both halves match perfectly.<br><i>Example: A square or regular shield sign has line symmetry.</i><br><br><b>Story:</b> Taksh examines the square Hot Wheels Rally banner sign. Does this square banner sign have line symmetry?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "If you fold a square exactly in half down the middle, do both sides align?",
            explanation: "Yes, a square can be folded down its line of symmetry with matching halves."
        },
        {
            type: "text",
            question: "<b>New Strategy: The Double-Double Trick for x4!</b><br>To multiply any number by 4, double it, and then double it again!<br><i>Example: To solve 7 x 4, double 7 to get 14, then double 14 to get 28!</i><br><br><b>Story:</b> Use the Double-Double trick to solve 7 x 4 for total stunt loops: First, double 7 to get 14. Now double 14. What is the final answer?",
            answer: "28",
            hint: "Double 14 (14 + 14 = ?).",
            explanation: "Double 7 is 14. Double 14 is 28. So 7 x 4 = 28."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Elapsed Time!</b><br>Elapsed time is the amount of time that passes from a start time to an end time.<br><i>Example: From 2:00 PM to 2:30 PM is 30 minutes of elapsed time.</i><br><br><b>Story:</b> The Sky Jump stunt event starts at 2:15 PM and finishes at 2:45 PM. How many minutes did the stunt event last?",
            options: ["15 minutes", "20 minutes", "30 minutes", "45 minutes"],
            answer: "30 minutes",
            hint: "Subtract the start minutes (15) from the end minutes (45).",
            explanation: "45 minutes - 15 minutes = 30 minutes elapsed time."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: Checking Math with Inverse Operations!</b><br>You can check an addition problem by subtracting backward!<br><i>Example: If 16 + 9 = 25, check it by doing 25 - 9 = 16!</i><br><br><b>Story:</b> Arjun thinks 16 + 9 = 25 track connectors. Check his math by subtracting: 25 - 9. Does it equal 16?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "25 - 9 = 16. Does that confirm 16 + 9 = 25?",
            explanation: "Yes! 25 - 9 = 16, so Arjun's addition was 100% correct."
        },

        // --- Phase 7: Boss Race - The Robo-Dragon Track (Advanced Logic & Multi-Step) ---
        {
            type: "mcq",
            question: "<b>New Concept: Probability (Chance)!</b><br>Probability is the chance of picking one specific item out of the total total items.<br><i>Example: Picking 1 gold car out of 6 blind boxes is a 1 in 6 chance.</i><br><br><b>Story:</b> Dad opens a blind box pack with 1 Super Treasure Hunt car and 5 regular cars (6 total cars). What is the chance of pulling out the Super Treasure Hunt car on the first try?",
            options: ["1 in 6 chance", "2 in 6 chance", "5 in 6 chance", "6 in 6 chance"],
            answer: "1 in 6 chance",
            hint: "There is 1 Super Treasure Hunt car out of 6 total blind box cars.",
            explanation: "1 favorable outcome out of 6 total choices = 1 in 6 chance."
        },
        {
            type: "text",
            question: "<b>New Strategy: Friendly Number Grouping for Addition!</b><br>When adding 3 numbers, group two numbers that make a clean 10 first!<br><i>Example: To add 7 + 6 + 3, combine (7 + 3 = 10) first, then add 10 + 6 = 16!</i><br><br><b>Story:</b> Marty scores boost points against the Robo-Dragon: 7 + 6 + 3. Combine 7 + 3 to make 10 first, then add 6. What is the total boost score?",
            answer: "16",
            hint: "7 + 3 = 10. Now add 6 to 10!",
            explanation: "(7 + 3) + 6 = 10 + 6 = 16 boost points."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: The 'NOT' Rule in Clues!</b><br>When a clue says 'NOT X and NOT Y', cross out both X and Y immediately!<br><i>Example: 'Not top lane and not bottom lane' means it MUST be middle lane!</i><br><br><b>Story:</b> The Robo-Dragon's secret weak spot track is NOT the Top lane and NOT the Bottom lane. Choices are Top, Middle, or Bottom lane. Which lane is it?",
            options: ["Top", "Middle", "Bottom"],
            answer: "Middle",
            hint: "Rule out Top and Bottom. Which single choice remains?",
            explanation: "Crossing out Top and Bottom leaves Middle lane as the weak spot."
        },
        {
            type: "text",
            question: "<b>New Concept: The Median (Middle Value)!</b><br>Put a list of numbers in order from smallest to largest. The Median is the exact number sitting in the middle!<br><i>Example: For numbers 3, 5, 9, the middle number sitting between 3 and 9 is 5.</i><br><br><b>Story:</b> Put these three car launch speeds in order: 6 mph, 9 mph, 15 mph. What is the Median (middle) speed?",
            answer: "9",
            hint: "Which speed sits right in the middle between 6 and 15?",
            explanation: "In the ordered set [6, 9, 15], 9 is sitting in the middle."
        },
        {
            type: "text",
            question: "<b>New Strategy: Two-Step Solving (Multiply then Subtract)!</b><br>Break multi-step problems into two clear sequential steps.<br><i>Example: 3 packs of 6 track connectors = 18. If 4 break, 18 - 4 = 14 left.</i><br><br><b>Story:</b> Jackson Cross brings 3 packs of track connectors with 6 connectors in each pack (3 x 6 = 18). During the dragon stunt, 4 connectors snap. How many working connectors remain (18 - 4)?",
            answer: "14",
            hint: "First 3 x 6 = 18. Now subtract 4 from 18.",
            explanation: "3 x 6 = 18 connectors total. 18 - 4 snapped = 14 working connectors remaining."
        },

        // --- Phase 8: Championship Podium (Victory & Celebration) ---
        {
            type: "text",
            question: "<b>New Concept: Reading a Bar Graph!</b><br>Look at how high a bar reaches on the graph scale to find its value.<br><i>Example: If a bar reaches the 8 line, its value is 8.</i><br><br><b>Story:</b> On the Hot Wheels Championship scoreboard, Marty's bar reaches 11 trophy points and his rival's reaches 8 points. Subtract 8 from 11 to find how many more points Marty scored.",
            answer: "3",
            hint: "Subtract the rival's score (8) from Marty's score (11).",
            explanation: "11 - 8 = 3 trophy points difference."
        },
        {
            type: "text",
            question: "<b>New Strategy: Multiply by 9 (Multiply by 10 minus 1 group)!</b><br>To multiply a number by 9, multiply it by 10 first, then subtract 1 group of that number!<br><i>Example: 4 x 9 -> Do 4 x 10 = 40, then subtract 4 = 36!</i><br><br><b>Story:</b> Use this trick for 4 x 9 victory flags: First do 4 x 10 = 40. Now subtract 4 from 40. What is 4 x 9?",
            answer: "36",
            hint: "40 - 4 = ?",
            explanation: "4 x 10 = 40. 40 - 4 = 36. So 4 x 9 = 36."
        },
        {
            type: "text",
            question: "<b>New Concept: Making Change with Money!</b><br>Change = Money Paid minus Cost of Item.<br><i>Example: Pay $20 for a $13 track set -> $20 - $13 = $7 change back.</i><br><br><b>Story:</b> Arjun buys a souvenir Hot Wheels chrome helmet pin for $13 and pays with a $20 bill. How much change does he get back ($20 - $13)?",
            answer: "7",
            hint: "Subtract 13 from 20.",
            explanation: "$20 - $13 = $7 change."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Grid Matching!</b><br>If Person A picks Item 1, Person B MUST pick Item 2.<br><i>Example: 2 cars: Twin Mill and Rip Rod. If Marty takes Twin Mill, Arjun gets Rip Rod!</i><br><br><b>Story:</b> There are 2 champion Hot Wheels cars left on the podium: Twin Mill and Rip Rod. Marty chooses Twin Mill. Which car is left for Arjun?",
            options: ["Twin Mill", "Rip Rod"],
            answer: "Rip Rod",
            hint: "Marty took Twin Mill. What is the remaining car choice?",
            explanation: "With Twin Mill chosen by Marty, Rip Rod is left for Arjun."
        },
        {
            type: "text",
            question: "<b>Grand Finale: Combining Your Skills!</b><br>You can solve big challenges by adding equal parts step by step!<br><i>Example: 5 + 5 + 5 = 15 total trophies.</i><br><br><b>Story:</b> Marty and Team Alpha win 5 gold cups in Phase 1, 5 gold cups in Phase 2, and 5 gold cups in Phase 3! How many total gold cups did they win (5 + 5 + 5)?",
            answer: "15",
            hint: "Add 5 three times: 5 + 5 + 5.",
            explanation: "5 + 5 + 5 = 15 total gold cups! Hot Wheels Grand Champions!"
        }
    ]
};
