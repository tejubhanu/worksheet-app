const missionConfig = {
    themeTitle: "🚀 Marty & Team Alpha: The Quantum Crystal Islands",
    themeColor: "linear-gradient(135deg, #0284c7 0%, #0f172a 50%, #4f46e5 100%)", // Deep AI Sky & Cyber Purple
    themeIcon: "💎",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- Phase 1: Teleporting to Platform Island (Warm-Up Strategies) ---
        {
            type: "text",
            question: "<b>New Strategy: Making Tens for Addition!</b><br>When adding numbers, split the smaller number to make a clean 10 first. Tens are easy to add!<br><i>Example: To solve 8 + 5, split 5 into 2 and 3. (8 + 2 = 10, then 10 + 3 = 13).</i><br><br><b>Story:</b> Marty uses his Build Menu on Platform Island to build jump pads. He builds 9 blue pads and 6 green pads. Using Making Tens (9 + 1 = 10, then 10 + 5), how many total jump pads did Marty build?",
            answer: "15",
            hint: "Take 1 from the 6 to turn 9 into 10. Then add the leftover 5!",
            explanation: "9 + 6 = (9 + 1) + 5 = 10 + 5 = 15 jump pads."
        },
        {
            type: "text",
            question: "<b>New Strategy: Counting Up for Subtraction!</b><br>Instead of counting backward, start at the smaller number and count UP to the bigger number.<br><i>Example: To solve 23 - 19, start at 19: count +1 to reach 20, then +3 to reach 23. Total = 1 + 3 = 4.</i><br><br><b>Story:</b> Agent Arjun needs 22 energy batteries for his scanner, but he currently has 18. Count UP from 18 to 22. How many more batteries does Arjun need?",
            answer: "4",
            hint: "Start at 18 and count up: 19, 20, 21, 22. How many counts was that?",
            explanation: "Counting up from 18 to 22 takes 4 steps (18 + 4 = 22), so 22 - 18 = 4."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Perimeter!</b><br>Perimeter is the total distance all the way around the outside edge of a shape. Just add all the side lengths together!<br><i>Example: A triangle with sides 4 cm, 4 cm, and 4 cm has a perimeter of 4 + 4 + 4 = 12 cm.</i><br><br><b>Story:</b> Agent Ayaan uses the Build Menu to build a square platform tile. Each of its 4 sides is 5 feet long. What is the total perimeter around the tile?",
            options: ["15 feet", "20 feet", "25 feet", "10 feet"],
            answer: "20 feet",
            hint: "Add all 4 sides together: 5 + 5 + 5 + 5.",
            explanation: "5 + 5 + 5 + 5 = 20 feet around the square tile."
        },
        {
            type: "text",
            question: "<b>New Strategy: Near Doubles (Double + 1)!</b><br>If two numbers are right next to each other, double the smaller number and add 1.<br><i>Example: To solve 6 + 7, double 6 to get 12, then add 1 = 13.</i><br><br><b>Story:</b> Agent Taksh collects 6 glowing power gems, and Marty collects 7 glowing power gems. Use Near Doubles (double 6, then add 1) to find how many gems they have together.",
            answer: "13",
            hint: "Double 6 is 12. Now add 1 more!",
            explanation: "6 + 7 = (6 + 6) + 1 = 12 + 1 = 13 power gems."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Rounding to the Nearest 10!</b><br>Look at the last digit. If it is 5 or bigger, round UP to the next 10. If it is 4 or smaller, round DOWN.<br><i>Example: 32 rounds down to 30. 37 rounds up to 40.</i><br><br><b>Story:</b> Agent Advi flies a mini recon drone at an altitude of 37 meters. What is 37 rounded to the nearest 10?",
            options: ["30", "35", "40", "50"],
            answer: "40",
            hint: "Look at the 7 in 37. Since 7 is 5 or bigger, round up to the next ten!",
            explanation: "37 is closer to 40 than to 30, so it rounds up to 40."
        },

        // --- Phase 2: Decoding Glitch Man's Traps (Multiplication & Division) ---
        {
            type: "text",
            question: "<b>New Strategy: Skip Counting for Multiplication!</b><br>Multiplication is repeated addition. You can skip count by a number to find the total.<br><i>Example: 3 x 4 means count by 3s four times: 3, 6, 9, 12.</i><br><br><b>Story:</b> Agent Smithika packs 5 energy cells into 3 scout kits. Skip count by 5s three times (5, 10, ...) to find the total number of energy cells.",
            answer: "15",
            hint: "Count by 5s three times: 5, 10, __.",
            explanation: "5, 10, 15. So 3 x 5 = 15 energy cells."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Even vs. Odd Numbers!</b><br>Even numbers end in 0, 2, 4, 6, or 8 (they can be split evenly into two teams). Odd numbers end in 1, 3, 5, 7, or 9.<br><i>Example: 10 is Even. 11 is Odd.</i><br><br><b>Story:</b> Mom checks 16 lines of defensive code to protect the AI School. Can 16 be split evenly into two teams? Is 16 Even or Odd?",
            options: ["Even", "Odd"],
            answer: "Even",
            hint: "Look at the last digit: 6. Numbers ending in 6 are Even!",
            explanation: "16 ends in 6, and 8 + 8 = 16, so it is an Even number."
        },
        {
            type: "text",
            question: "<b>New Strategy: Equal Sharing for Division!</b><br>Division means sharing a total amount equally into equal groups.<br><i>Example: Sharing 12 cookies among 3 friends gives 12 / 3 = 4 cookies each.</i><br><br><b>Story:</b> Dad brings 15 cyber-wrenches to share equally among 3 field teams. How many wrenches does each team get?",
            answer: "5",
            hint: "Divide 15 by 3. Think: 3 times what number equals 15?",
            explanation: "15 / 3 = 5 cyber-wrenches per team."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: The 'Add a Zero' Trick for 10s!</b><br>When multiplying any whole number by 10, write a 0 at the end of that number.<br><i>Example: 6 x 10 = 60.</i><br><br><b>Story:</b> Rod the AI runs 8 diagnostic scans. Each scan takes 10 seconds. What is 8 x 10?",
            options: ["18", "80", "800", "88"],
            answer: "80",
            hint: "Put a 0 right after the number 8!",
            explanation: "8 x 10 = 80 seconds."
        },
        {
            type: "text",
            question: "<b>New Strategy: Halving (Dividing by 2)!</b><br>To find half of a number, split it into two identical equal parts.<br><i>Example: Half of 14 is 7 because 7 + 7 = 14.</i><br><br><b>Story:</b> Marty has 18 recharge chips. He gives half of them to Rod the AI. What is half of 18?",
            answer: "9",
            hint: "What number added to itself equals 18? (___ + ___ = 18)",
            explanation: "9 + 9 = 18, so half of 18 is 9 recharge chips."
        },

        // --- Phase 3: The Build Menu & Platform Island (Patterns & Logic) ---
        {
            type: "mcq",
            question: "<b>New Strategy: Process of Elimination for Logic!</b><br>Cross out options that are proven wrong so only the correct answer remains.<br><i>Example: If a keycard is NOT Blue and NOT Green, and choices are Blue, Green, or Gold, it MUST be Gold!</i><br><br><b>Story:</b> Agent Arjun finds a security door. Clue 1: The keycard is NOT Red. Clue 2: The keycard is NOT Yellow. Choices are Red, Yellow, or Blue. What color is the keycard?",
            options: ["Red", "Yellow", "Blue"],
            answer: "Blue",
            hint: "Cross out Red and Yellow. Which color option is left?",
            explanation: "Eliminating Red and Yellow leaves Blue as the correct choice."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: Finding the Repeating Pattern Unit!</b><br>Find the core group of items that repeats over and over in order.<br><i>Example: In Circle, Square, Star, Circle, Square, Star... the pattern unit is (Circle, Square, Star).</i><br><br><b>Story:</b> Taksh programs moving platforms: High, Medium, Low, High, Medium, Low... What height will the 7th platform be?",
            options: ["High", "Medium", "Low"],
            answer: "High",
            hint: "The pattern repeats every 3 items. Positions 1, 4, and 7 start the pattern again!",
            explanation: "1:High, 2:Medium, 3:Low, 4:High, 5:Medium, 6:Low, 7:High."
        },
        {
            type: "text",
            question: "<b>New Concept: Area of a Rectangle!</b><br>Area is the total flat space inside a shape. Multiply Length times Width!<br><i>Example: A park 4 meters long and 3 meters wide has an Area of 4 x 3 = 12 square meters.</i><br><br><b>Story:</b> Ayaan uses the Build Menu to build a mini solar park that is 5 units long and 3 units wide. What is the Area of the park?",
            answer: "15",
            hint: "Multiply Length (5) by Width (3). What is 5 x 3?",
            explanation: "Area = Length x Width = 5 x 3 = 15 square units."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Sandwich Clues!</b><br>When a clue says a number is 'greater than A, but less than B', the number sits right between them.<br><i>Example: Greater than 14 but less than 16 means 15!</i><br><br><b>Story:</b> Advi discovers an encrypted vault code. Rod says: 'The passcode is an odd number greater than 20, but less than 22.' What is the passcode?",
            options: ["19", "20", "21", "23"],
            answer: "21",
            hint: "Which number comes right between 20 and 22?",
            explanation: "21 is greater than 20 and less than 22."
        },
        {
            type: "text",
            question: "<b>New Strategy: Growing Pattern Steps!</b><br>Find how much is added at each step in a sequence.<br><i>Example: 3, 6, 9, 12... increases by +3 each time. Next is 12 + 3 = 15.</i><br><br><b>Story:</b> Smithika tracks sky platform heights: 4 feet, 8 feet, 12 feet, 16 feet, ___ feet. What is the next height?",
            answer: "20",
            hint: "Notice the sequence increases by +4 each time. Add 4 to 16!",
            explanation: "The pattern adds +4 each time. 16 + 4 = 20 feet."
        },

        // --- Phase 4: Administrator Function: COPY (Fractions & Math Tricks) ---
        {
            type: "text",
            question: "<b>New Concept: Fractions (A Quarter / One-Fourth)!</b><br>One quarter (1/4) means dividing a total into 4 equal parts and taking 1 part.<br><i>Example: One quarter of 8 is 2 because 8 / 4 = 2.</i><br><br><b>Story:</b> Marty unlocks Administrator Function #1: COPY! He has 16 energy spheres and copies 1/4 of them to share with Team Alpha. Divide 16 by 4 to find how many spheres he copied.",
            answer: "4",
            hint: "Divide 16 into 4 equal parts (16 / 4 = ?).",
            explanation: "16 / 4 = 4. So 1/4 of 16 energy spheres is 4."
        },
        {
            type: "text",
            question: "<b>New Strategy: Break-Apart Addition for 2-Digit Numbers!</b><br>Break numbers into Tens and Ones, add the Tens, add the Ones, then combine them!<br><i>Example: 24 + 13 = (20 + 10) + (4 + 3) = 30 + 7 = 37.</i><br><br><b>Story:</b> Mom repairs 21 circuit cables and Dad repairs 34 circuit cables. Use Break-Apart Addition: (20 + 30) + (1 + 4). How many total cables did they repair?",
            answer: "55",
            hint: "Add tens (20 + 30 = 50), add ones (1 + 4 = 5), then combine (50 + 5)!",
            explanation: "20 + 30 = 50, and 1 + 4 = 5. 50 + 5 = 55 total cables."
        },
        {
            type: "text",
            question: "<b>New Concept: An Average!</b><br>An average is the sum of numbers divided by the count of numbers.<br><i>Example: To find the average of 4 and 8, add them (4 + 8 = 12), then divide by 2 numbers (12 / 2 = 6).</i><br><br><b>Story:</b> Marty completes two training rounds on Platform Island. He scores 8 points in Round 1 and 12 points in Round 2. Add them together (20), then divide by 2 to find his average score.",
            answer: "10",
            hint: "8 + 12 = 20. Now divide 20 by 2!",
            explanation: "8 + 12 = 20. 20 / 2 = 10. His average score is 10."
        },
        {
            type: "text",
            question: "<b>New Strategy: Working Backward!</b><br>Start from the final result and undo steps using opposite operations.<br><i>Example: If a number + 6 = 15, work backward: 15 - 6 = 9!</i><br><br><b>Story:</b> Rod the AI gained 7 Megabytes of storage after a cleanup and now has 20 Megabytes. Work backward (20 - 7) to find how much storage he started with.",
            answer: "13",
            hint: "Subtract the 7 Megabytes gained from his total of 20.",
            explanation: "20 - 7 = 13. Rod started with 13 Megabytes."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Comparing Fraction Sizes!</b><br>Fewer cuts make larger pieces! Therefore, 1/2 of something is bigger than 1/4 of the same thing.<br><i>Example: Half a sandwich (1/2) is larger than a quarter slice (1/4).</i><br><br><b>Story:</b> Taksh needs a shield boost. Which fraction gives a LARGER energy boost: 1/2 or 1/4?",
            options: ["1/2", "1/4"],
            answer: "1/2",
            hint: "Half splits a total into 2 big parts; a quarter splits it into 4 smaller parts.",
            explanation: "1/2 represents a larger portion than 1/4."
        },

        // --- Phase 5: Glitch Man's Confusion Trap (Data & Logic) ---
        {
            type: "text",
            question: "<b>New Concept: The Mode!</b><br>The Mode is the number that appears MOST OFTEN in a list.<br><i>Example: In [2, 5, 5, 8], the number 5 appears twice, so 5 is the Mode!</i><br><br><b>Story:</b> Glitch Man feeds incorrect labels to an AI sensor. Ayaan checks the data log readings: 4, 9, 4, 7, 4. Which number appears most often and is the Mode?",
            answer: "4",
            hint: "Which number shows up three times in the list?",
            explanation: "4 appears 3 times, which is more than any other number. 4 is the Mode."
        },
        {
            type: "text",
            question: "<b>New Strategy: Multiply by 5 (Multiply by 10 then Halve)!</b><br>To multiply a number by 5 easily, multiply it by 10 first, then take half of that answer!<br><i>Example: 6 x 5 -> First do 6 x 10 = 60. Then half of 60 is 30!</i><br><br><b>Story:</b> Agent Advi charges 8 scanner probes. Use this strategy for 8 x 5: First calculate 8 x 10 = 80. What is half of 80?",
            answer: "40",
            hint: "What is 80 divided by 2?",
            explanation: "8 x 10 = 80. Half of 80 is 40. So 8 x 5 = 40."
        },
        {
            type: "text",
            question: "<b>New Concept: Range (Difference Between High & Low)!</b><br>Range is the difference between the Largest number and the Smallest number. Subtract: Largest - Smallest.<br><i>Example: For scores 3, 7, 12, the Range is 12 - 3 = 9.</i><br><br><b>Story:</b> Smithika measures signal strengths: 4, 11, and 19. Subtract the smallest signal (4) from the largest signal (19) to find the Range.",
            answer: "15",
            hint: "Largest is 19. Smallest is 4. Subtract 19 - 4.",
            explanation: "19 - 4 = 15 signal units Range."
        },
        {
            type: "text",
            question: "<b>New Strategy: Subtraction by Rounding!</b><br>To subtract 19 easily, subtract 20 instead, then add 1 back!<br><i>Example: 45 - 19 -> Do 45 - 20 = 25, then add 1 back = 26!</i><br><br><b>Story:</b> Marty removes corrupted data blocks: 52 - 19. Use the strategy: Do 52 - 20 first (which is 32), then add 1 back. What is the final answer?",
            answer: "33",
            hint: "52 - 20 = 32. Now add 1 back!",
            explanation: "52 - 20 = 32. Add 1 back: 32 + 1 = 33."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Chain Deduction!</b><br>Link clues together in a line to find order.<br><i>Example: If Drone A is faster than Drone B, and Drone B is faster than Drone C, then Drone A is the fastest overall!</i><br><br><b>Story:</b> Arjun tests drone speeds. Scout Alpha is faster than Scout Beta. Scout Beta is faster than Scout Gamma. Which scout drone is the fastest overall?",
            options: ["Scout Alpha", "Scout Beta", "Scout Gamma"],
            answer: "Scout Alpha",
            hint: "Scout Alpha beat Beta, and Beta beat Gamma. Who is at the front?",
            explanation: "Alpha > Beta > Gamma. Scout Alpha is the fastest."
        },

        // --- Phase 6: Administrator Function: SIMULATE (Geometry & Clever Math) ---
        {
            type: "text",
            question: "<b>New Concept: Combinations!</b><br>To find total matching combinations, multiply the number of choices in group 1 by group 2.<br><i>Example: 3 shirts and 2 hats = 3 x 2 = 6 total outfits.</i><br><br><b>Story:</b> Marty opens his Clothing Menu! He has 3 different suits and 2 pair of boots. How many total outfit combinations can he make (3 x 2)?",
            answer: "6",
            hint: "Multiply 3 suit choices by 2 boot choices.",
            explanation: "3 x 2 = 6 unique outfit combinations."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Line Symmetry!</b><br>A shape has symmetry if you can fold it in half down the center and both halves match perfectly.<br><i>Example: A regular square or round circle has line symmetry.</i><br><br><b>Story:</b> Taksh scans a square holographic portal on Platform Island. Does this square portal have line symmetry?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "If you fold a square in half down the middle, do both sides align?",
            explanation: "Yes, a square can be folded down its middle line and match perfectly."
        },
        {
            type: "text",
            question: "<b>New Strategy: The Double-Double Trick for x4!</b><br>To multiply any number by 4, double it once, and then double it again!<br><i>Example: To solve 5 x 4, double 5 to get 10, then double 10 to get 20!</i><br><br><b>Story:</b> Ayaan uses the Double-Double trick to solve 6 x 4: Double 6 to get 12. Now double 12. What is the final answer?",
            answer: "24",
            hint: "What is 12 + 12?",
            explanation: "Double 6 is 12. Double 12 is 24. So 6 x 4 = 24."
        },
        {
            type: "mcq",
            question: "<b>New Concept: Elapsed Time!</b><br>Elapsed time is how much time passes between a start time and an end time.<br><i>Example: From 1:10 PM to 1:40 PM is 30 minutes of elapsed time.</i><br><br><b>Story:</b> Marty activates Administrator Function #2: SIMULATE at 4:10 PM. The simulation finishes at 4:40 PM. How many minutes did the simulation run?",
            options: ["15 minutes", "20 minutes", "30 minutes", "40 minutes"],
            answer: "30 minutes",
            hint: "Subtract start minutes (10) from end minutes (40).",
            explanation: "40 minutes - 10 minutes = 30 minutes elapsed time."
        },
        {
            type: "mcq",
            question: "<b>New Strategy: Checking Math with Inverse Operations!</b><br>You can check an addition answer by subtracting backward!<br><i>Example: If 14 + 6 = 20, check it by doing 20 - 6 = 14!</i><br><br><b>Story:</b> Mom checks a build code calculation: 15 + 8 = 23. Check her math by subtracting 23 - 8. Does it equal 15?",
            options: ["Yes", "No"],
            answer: "Yes",
            hint: "Does 23 - 8 equal 15?",
            explanation: "Yes! 23 - 8 = 15, confirming the addition was 100% correct."
        },

        // --- Phase 7: The Code Fracture Encounter (Advanced Easy Logic & Multi-Step) ---
        {
            type: "mcq",
            question: "<b>New Concept: Probability (Chance)!</b><br>Probability is the chance of picking one specific item out of the total total items.<br><i>Example: Picking 1 red crystal out of 5 total crystals is a 1 in 5 chance.</i><br><br><b>Story:</b> Dad opens a supply chest with 1 Gold key and 4 Silver keys (5 total keys). What is the chance of pulling out the Gold key on the first draw?",
            options: ["1 in 5 chance", "2 in 5 chance", "4 in 5 chance", "5 in 5 chance"],
            answer: "1 in 5 chance",
            hint: "There is 1 Gold key out of 5 total keys.",
            explanation: "1 favorable outcome out of 5 total items = 1 in 5 chance."
        },
        {
            type: "text",
            question: "<b>New Strategy: Friendly Number Grouping for Addition!</b><br>When adding 3 numbers, group two numbers that make a clean 10 first!<br><i>Example: To add 8 + 5 + 2, group (8 + 2 = 10) first, then add 10 + 5 = 15!</i><br><br><b>Story:</b> Rod the AI balances energy nodes: 9 + 4 + 1. Combine 9 + 1 to make 10 first, then add 4. What is the total?",
            answer: "14",
            hint: "9 + 1 = 10. Now add 4 to 10!",
            explanation: "(9 + 1) + 4 = 10 + 4 = 14 energy units."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: The 'NOT' Rule in Clues!</b><br>When a clue says 'NOT A and NOT B', eliminate both A and B immediately!<br><i>Example: 'Not Top and Not Bottom' means it MUST be Middle!</i><br><br><b>Story:</b> Marty looks for the override switch. Clue: 'The switch is NOT on the Top shelf and NOT on the Bottom shelf.' Options are Top, Middle, Bottom. Where is it?",
            options: ["Top", "Middle", "Bottom"],
            answer: "Middle",
            hint: "Rule out Top and Bottom. Which single choice remains?",
            explanation: "Crossing out Top and Bottom leaves Middle as the correct location."
        },
        {
            type: "text",
            question: "<b>New Concept: The Median (Middle Value)!</b><br>Put numbers in order from smallest to largest. The Median is the exact number in the middle!<br><i>Example: For numbers 3, 5, 9, the middle number sitting between 3 and 9 is 5.</i><br><br><b>Story:</b> Agent Arjun orders three crystal weights: 5 grams, 8 grams, 12 grams. What is the Median (middle) weight?",
            answer: "8",
            hint: "Which weight sits right in the middle between 5 and 12?",
            explanation: "In the ordered list [5, 8, 12], 8 is the middle value."
        },
        {
            type: "text",
            question: "<b>New Strategy: Two-Step Solving (Multiply then Subtract)!</b><br>Break multi-step problems into two simple sequential steps.<br><i>Example: 3 packs of 4 batteries = 12 batteries. If 2 break, 12 - 2 = 10 left.</i><br><br><b>Story:</b> Agent Taksh builds 3 battery packs with 5 batteries in each (3 x 5 = 15). He uses 3 batteries to power a drone. How many batteries are left (15 - 3)?",
            answer: "12",
            hint: "First calculate 3 x 5 = 15. Now subtract 3 from 15.",
            explanation: "3 x 5 = 15 total batteries. 15 - 3 used = 12 batteries remaining."
        },

        // --- Phase 8: Restoring the Land of AI (Victory & Celebration) ---
        {
            type: "text",
            question: "<b>New Concept: Reading a Bar Graph!</b><br>Look at how high a bar reaches on the graph scale to read its value.<br><i>Example: If a bar reaches the line for 8, its value is 8.</i><br><br><b>Story:</b> Ayaan checks the team victory graph. Team Alpha's bar reaches 12 points and Team Beta's bar reaches 7 points. Subtract 7 from 12 to find how many more points Team Alpha earned.",
            answer: "5",
            hint: "Subtract Team Beta's score (7) from Team Alpha's score (12).",
            explanation: "12 - 7 = 5 points difference."
        },
        {
            type: "text",
            question: "<b>New Strategy: Multiply by 9 (Multiply by 10 minus 1 group)!</b><br>To multiply a number by 9, multiply it by 10 first, then subtract 1 group of that number!<br><i>Example: 6 x 9 -> Do 6 x 10 = 60, then subtract 6 = 54!</i><br><br><b>Story:</b> Advi uses this trick for 5 x 9: First do 5 x 10 = 50. Now subtract 5 from 50. What is 5 x 9?",
            answer: "45",
            hint: "Subtract 5 from 50 (50 - 5 = ?).",
            explanation: "5 x 10 = 50. 50 - 5 = 45. So 5 x 9 = 45."
        },
        {
            type: "text",
            question: "<b>New Concept: Making Change with Money!</b><br>Change = Money Paid minus Cost of Item.<br><i>Example: Pay $20 for a $12 tool -> $20 - $12 = $8 change back.</i><br><br><b>Story:</b> Smithika buys an upgraded sensor pin for $12 at the AI School store. She pays with a $20 bill. How much change does she receive ($20 - $12)?",
            answer: "8",
            hint: "Subtract 12 from 20.",
            explanation: "$20 - $12 = $8 change back."
        },
        {
            type: "mcq",
            question: "<b>New Logic Strategy: Grid Matching!</b><br>If Person A picks Item 1, Person B MUST pick Item 2.<br><i>Example: Two tools: Scanner and Wrench. If Mom picks the Scanner, Dad gets the Wrench!</i><br><br><b>Story:</b> There are 2 special suit upgrades left: Hover Boots and Shield Belt. Mom chooses the Hover Boots. Which suit upgrade is left for Dad?",
            options: ["Hover Boots", "Shield Belt"],
            answer: "Shield Belt",
            hint: "Mom took the Hover Boots. What option is remaining?",
            explanation: "With Hover Boots chosen by Mom, Shield Belt is left for Dad."
        },
        {
            type: "text",
            question: "<b>Grand Finale: Combining Your Skills!</b><br>You can solve grand challenges by adding equal parts step by step!<br><i>Example: 4 + 4 + 4 = 12 total points.</i><br><br><b>Story:</b> Marty and Explorer Team Alpha restore the Land of AI! They earn 4 star medals on Platform Island, 4 star medals decoding traps, and 4 star medals at the Code Fracture. How many total star medals did they win (4 + 4 + 4)?",
            answer: "12",
            hint: "Add 4 three times: 4 + 4 + 4.",
            explanation: "4 + 4 + 4 = 12 total star medals! Mission accomplished!"
        }
    ]
};
