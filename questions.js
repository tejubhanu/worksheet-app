const missionConfig = {
    themeTitle: "🌀 Beyblade X: Marty's Logic & Puzzle Dash",
    themeColor: "linear-gradient(135deg, #16a34a 0%, #172554 50%, #000000 100%)",
    themeIcon: "🧩",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- Phase 1: Logic Grid & Sudoku Training ---
        {
            type: "mcq",
            question: "<b>Logic Grid Puzzle!</b><br>Use an imaginary grid with Xs and Os to match clues.<br><i>Example: If Tom is not Blue and not Green, he MUST be Red.</i><br><br><b>Story:</b> Marty, Arjun, and Jaxon each use a different Beyblade type: Attack, Defense, or Stamina.<br>• Clue 1: Marty does NOT use Defense.<br>• Clue 2: Arjun uses Stamina.<br>What type of Beyblade does Marty use?",
            options: ["Attack", "Defense", "Stamina"],
            answer: "Attack",
            hint: "Arjun took Stamina. That leaves Attack and Defense. Since Marty is NOT Defense, what is left?",
            explanation: "With Stamina taken by Arjun and Defense ruled out for Marty, Attack is the only option left."
        },
        {
            type: "mcq",
            question: "<b>Logic Grid Puzzle 2!</b><br>Cross out options as you read the clues.<br><i>Example: A is not 1. B is 2. Therefore A is 3.</i><br><br><b>Story:</b> Three Beys (Dran Sword, Knight Shield, Wizard Arrow) are painted Red, Blue, or White.<br>• Clue 1: Dran Sword is NOT White.<br>• Clue 2: Wizard Arrow is Blue.<br>• Clue 3: Knight Shield is NOT Red.<br>What color is Dran Sword?",
            options: ["Red", "Blue", "White"],
            answer: "Red",
            hint: "Wizard Arrow is Blue, so cross Blue off for the others. Dran Sword is not White. What color is left?",
            explanation: "Wizard Arrow = Blue. Knight Shield = White (since it can't be Red or Blue). Dran Sword must be Red."
        },
        {
            type: "mcq",
            question: "<b>Mini-Sudoku Deduction!</b><br>In a Sudoku grid, every row and column must have one of each item without repeating.<br><i>Example: A row needs 1, 2, 3, 4. If you have 1, 3, 4, the missing number is 2.</i><br><br><b>Story:</b> Marty is organizing a 4x4 display case. A row needs one of each Bey type: Attack, Defense, Stamina, and Balance. The row currently has [Attack, Stamina, Balance, ___]. What is the missing type?",
            options: ["Attack", "Defense", "Stamina", "Balance"],
            answer: "Defense",
            hint: "Look at the types already in the row. Which of the 4 types is missing?",
            explanation: "The row already has Attack, Stamina, and Balance. The only missing type to complete the set is Defense."
        },
        {
            type: "mcq",
            question: "<b>Mini-Sudoku Intersection!</b><br>Check both the row and the column. The missing item cannot match anything already in its row OR its column.<br><i>Example: The blank can't be Red (in row) or Blue (in column), so it must be Green.</i><br><br><b>Story:</b> Marty needs to place a Gear in a grid. Its Row already has a <i>Red Gear</i> and <i>Blue Gear</i>. Its Column already has a <i>Green Gear</i>. The only colors allowed are Red, Blue, Green, and Yellow. What color must the missing Gear be?",
            options: ["Red", "Blue", "Green", "Yellow"],
            answer: "Yellow",
            hint: "Eliminate Red and Blue (from the row) and Green (from the column).",
            explanation: "It cannot be Red, Blue, or Green because they are already in the same row or column. It must be Yellow."
        },
        {
            type: "mcq",
            question: "<b>Knights and Knaves (Truth or Lie)!</b><br>One person always tells the truth, one person always lies. You have to figure out the truth from their clues.<br><i>Example: Liar says 'The prize is in Box A'. Truth-teller says 'The prize is in Box B'. It is in Box B!</i><br><br><b>Story:</b> Marty is looking for the VIP tournament room. Two guards stand at two doors (Red and Blue). The honest guard says, 'The VIP room is NOT behind the Red door.' The lying guard says, 'The VIP room is behind the Red door.' Which door is the VIP room behind?",
            options: ["Red Door", "Blue Door"],
            answer: "Blue Door",
            hint: "Trust the honest guard. If it's NOT the Red door, which one is it?",
            explanation: "The honest guard tells the truth: it is NOT the Red door. Therefore, it must be behind the Blue door."
        },

        // --- Phase 2: Code Breaking & Cryptograms ---
        {
            type: "text",
            question: "<b>Math Picture Equation!</b><br>Find the value of pictures by solving simple math.<br><i>Example: 🍎 + 🍎 = 10, so 🍎 = 5. Then 🍎 + 🍌 = 8, so 🍌 = 3.</i><br><br><b>Story:</b> Find the value of the Gear (⚙️).<br>🌀 + 🌀 = 20<br>🌀 + ⚙️ = 15<br>What number does the ⚙️ stand for?",
            answer: "5",
            hint: "First find 🌀 (what plus itself is 20?). Then subtract that from 15.",
            explanation: "🌀 = 10 (10 + 10 = 20). If 10 + ⚙️ = 15, then ⚙️ must be 5."
        },
        {
            type: "text",
            question: "<b>Math Picture Equation 2!</b><br>Sometimes you have three of the same item.<br><i>Example: 🐱 + 🐱 + 🐱 = 6, so one 🐱 = 2.</i><br><br><b>Story:</b> Find the value of the Shield (🛡️).<br>🌪️ + 🌪️ + 🌪️ = 12<br>🌪️ + 🛡️ = 11<br>What number does the 🛡️ stand for?",
            answer: "7",
            hint: "Divide 12 by 3 to find 🌪️. Then subtract that number from 11.",
            explanation: "🌪️ = 4 (4 + 4 + 4 = 12). If 4 + 🛡️ = 11, then 🛡️ must be 7."
        },
        {
            type: "mcq",
            question: "<b>Mastermind Code Breaker!</b><br>Use feedback clues to guess a secret code sequence.<br><i>Example: Code is 2 digits. Clue: '72' has zero correct digits. '49' has both correct. Code is 49!</i><br><br><b>Story:</b> Marty needs a 2-digit passcode to unlock a launcher case. He tries '84'. The system says: 'The 8 is completely wrong, but the 4 is the correct number in the correct spot.' He knows the first digit is 5. What is the code?",
            options: ["48", "85", "54", "45"],
            answer: "54",
            hint: "The first digit is 5. The second digit is the 4 (since it was in the correct spot).",
            explanation: "The first digit is 5. The 4 is the correct second digit, making the code 54."
        },
        {
            type: "text",
            question: "<b>Cryptogram Decorder!</b><br>Each letter matches a specific number.<br><i>Example: A=1, B=2, C=3. The word CAB = 3 + 1 + 2 = 6.</i><br><br><b>Story:</b> The Pro League uses a secret point system: X = 10, Y = 5, Z = 1. Marty scores an 'X Y Z' combo. Add the values of X + Y + Z to find his total score.",
            answer: "16",
            hint: "Add 10 + 5 + 1.",
            explanation: "X(10) + Y(5) + Z(1) = 16 points."
        },
        {
            type: "mcq",
            question: "<b>Mastermind Sandwich Logic!</b><br>Use number boundaries to find a secret code.<br><i>Example: Even number between 13 and 17, and it's not 14. Answer is 16.</i><br><br><b>Story:</b> Arjun's launch strength code is an odd number. It is greater than 20, but less than 24. It is NOT 21. What is his launch strength code?",
            options: ["19", "21", "22", "23"],
            answer: "23",
            hint: "Find the odd numbers between 20 and 24 (21 and 23). If it's not 21, which one is it?",
            explanation: "The odd numbers between 20 and 24 are 21 and 23. Since it is NOT 21, it must be 23."
        },

        // --- Phase 3: Grid Puzzles (Nonograms & Minesweeper) ---
        {
            type: "text",
            question: "<b>Nonogram Grid Logic!</b><br>In Nonograms, numbers tell you how many consecutive blocks to color in a row.<br><i>Example: In a 3-block row, a clue of '3' means color all 3 blocks. Zero blocks are left blank.</i><br><br><b>Story:</b> Marty is designing a stadium logo on a digital grid. He is shading a row that is exactly 5 blocks wide. The clue for this row is the number <b>5</b>. How many blocks must he leave blank (empty) in this row?",
            answer: "0",
            hint: "If he has to shade 5 blocks in a 5-block row, are there any leftover?",
            explanation: "The clue '5' means all 5 blocks must be shaded, leaving 0 blank blocks."
        },
        {
            type: "mcq",
            question: "<b>Nonogram Sequence Logic!</b><br>A clue with two numbers means there is a gap between shaded blocks.<br><i>Example: '1, 1' in a 3-block row means Shaded, Blank, Shaded.</i><br><br><b>Story:</b> Marty reads a row of 4 blocks. The clue is <b>'2, 1'</b>. This means two blocks are shaded, then at least one space is blank, then one block is shaded. What does the 4-block row look like?",
            options: ["Shaded, Blank, Shaded, Shaded", "Blank, Shaded, Shaded, Shaded", "Shaded, Shaded, Blank, Shaded"],
            answer: "Shaded, Shaded, Blank, Shaded",
            hint: "You need a block of 2, a space, then a block of 1 to fit exactly into 4 spaces.",
            explanation: "To fit '2' and '1' in a 4-block row, they must be separated by exactly one blank space: Shaded, Shaded, Blank, Shaded."
        },
        {
            type: "mcq",
            question: "<b>Minesweeper Deduction!</b><br>A number in a square tells you exactly how many hidden items are touching it (up, down, left, right, or diagonal).<br><i>Example: A '0' means NO hidden items are touching it. They are all safe!</i><br><br><b>Story:</b> Marty scans a grid for hidden trap zones. He steps on a square that says <b>'0'</b>. There are 8 squares touching it. How many of those 8 touching squares have traps?",
            options: ["0 squares", "1 square", "4 squares", "8 squares"],
            answer: "0 squares",
            hint: "The number 0 means zero traps are touching it!",
            explanation: "A '0' clue guarantees that absolutely none of the adjacent squares contain traps."
        },
        {
            type: "text",
            question: "<b>Minesweeper Corners!</b><br>If a numbered square is in a corner, it touches fewer squares. This makes it easy to find hidden items!<br><i>Example: A '1' in a corner touching only ONE unknown square means that unknown square MUST be the item.</i><br><br><b>Story:</b> Arjun looks at a corner square that says <b>'1'</b>. It is only touching exactly ONE unopened box. How many hidden items are in that unopened box?",
            answer: "1",
            hint: "If the clue says '1' and there's only one possible box it touches, the item has to be there.",
            explanation: "Since the '1' must touch an item, and there is only 1 box available, that box contains 1 item."
        },
        {
            type: "mcq",
            question: "<b>Logic Process of Elimination!</b><br>Cross out options that violate the rules.<br><i>Example: The shape has no straight lines. Choices: Square, Triangle, Circle. Answer: Circle.</i><br><br><b>Story:</b> Identify the mystery Beyblade part. Clue 1: It is made of metal (not plastic). Clue 2: It is round (not jagged). Options: A Jagged Metal Blade, A Round Plastic Ratchet, A Round Metal Blade. Which part is it?",
            options: ["Jagged Metal Blade", "Round Plastic Ratchet", "Round Metal Blade"],
            answer: "Round Metal Blade",
            hint: "Eliminate the plastic one, and eliminate the jagged one.",
            explanation: "It must be metal (eliminating the Plastic Ratchet) and round (eliminating the Jagged Blade). It is the Round Metal Blade."
        },

        // --- Phase 4: Gear Sports Arena (Math Strategies) ---
        {
            type: "text",
            question: "<b>Making Tens for Addition!</b><br>Split the smaller number to make a clean 10 first.<br><i>Example: 8 + 5 -> (8 + 2 = 10), then 10 + 3 = 13.</i><br><br><b>Story:</b> Marty sorts his gear. He has 9 Attack Blades and 6 Stamina Blades. Using Making Tens, take 1 from the 6 to turn 9 into 10. How many total Blades does he have?",
            answer: "15",
            hint: "9 + 1 = 10. You took 1 from 6, leaving 5. 10 + 5 = ?",
            explanation: "9 + 6 = (9 + 1) + 5 = 10 + 5 = 15 Blades."
        },
        {
            type: "text",
            question: "<b>Counting Up for Subtraction!</b><br>Start at the smaller number and count UP to the bigger number.<br><i>Example: 14 - 11 -> Start at 11, count 12, 13, 14. That's 3 steps.</i><br><br><b>Story:</b> Marty needs 22 Pro League points, but he only has 18. Count UP from 18 to 22. How many more points does he need?",
            answer: "4",
            hint: "Count: 19, 20, 21, 22. How many numbers did you count?",
            explanation: "Counting up from 18 to 22 takes 4 steps (18 + 4 = 22), so 22 - 18 = 4."
        },
        {
            type: "mcq",
            question: "<b>Perimeter!</b><br>Perimeter is the total distance around the outside edge. Add all side lengths together!<br><i>Example: A triangle with sides 4, 4, and 4 has a perimeter of 4+4+4 = 12.</i><br><br><b>Story:</b> Marty measures a square Xtreme Stadium drop-zone. Each of its 4 sides is 5 inches long. What is the total perimeter around the drop-zone?",
            options: ["15 inches", "20 inches", "25 inches", "30 inches"],
            answer: "20 inches",
            hint: "Add 5 four times: 5 + 5 + 5 + 5.",
            explanation: "5 + 5 + 5 + 5 = 20 inches."
        },
        {
            type: "text",
            question: "<b>Near Doubles (Double + 1)!</b><br>If two numbers are neighbors, double the smaller number and add 1.<br><i>Example: 6 + 7 -> Double 6 (12) + 1 = 13.</i><br><br><b>Story:</b> Marty has 7 green Ratchets and 8 blue Ratchets. Use Near Doubles (double 7, then add 1) to find the total.",
            answer: "15",
            hint: "Double 7 is 14. Add 1 more.",
            explanation: "7 + 8 = (7 + 7) + 1 = 14 + 1 = 15."
        },
        {
            type: "mcq",
            question: "<b>Rounding to the Nearest 10!</b><br>Look at the ones digit. 5 or bigger rounds UP. 4 or smaller rounds DOWN.<br><i>Example: 34 rounds down to 30.</i><br><br><b>Story:</b> Dran Sword hits an X-Dash speed of 67 mph. What is 67 rounded to the nearest 10?",
            options: ["60 mph", "65 mph", "70 mph", "80 mph"],
            answer: "70 mph",
            hint: "Look at the 7. Since it is 5 or bigger, round up to the next ten.",
            explanation: "67 is closer to 70 than 60, so it rounds up to 70."
        },

        // --- Phase 5: Multiplication & Division Basics ---
        {
            type: "text",
            question: "<b>Skip Counting for Multiplication!</b><br>Multiply by skip counting.<br><i>Example: 3 x 4 -> Count by 3s four times: 3, 6, 9, 12.</i><br><br><b>Story:</b> Marty builds 5 launchers that need 4 gears each. Skip count by 4s five times (4, 8, 12...) to find the total gears.",
            answer: "20",
            hint: "4, 8, 12, 16, __.",
            explanation: "4, 8, 12, 16, 20. 5 x 4 = 20."
        },
        {
            type: "text",
            question: "<b>The 'Add a Zero' Trick for 10s!</b><br>When multiplying a number by 10, just write a 0 at the end.<br><i>Example: 8 x 10 = 80.</i><br><br><b>Story:</b> There are 6 rows of seats in the arena, with 10 seats in each row. What is 6 x 10?",
            answer: "60",
            hint: "Write the number 6 and put a 0 after it.",
            explanation: "6 x 10 = 60."
        },
        {
            type: "text",
            question: "<b>Halving (Dividing by 2)!</b><br>To find half, split the number into two identical parts.<br><i>Example: Half of 16 is 8 because 8 + 8 = 16.</i><br><br><b>Story:</b> Marty gets 14 upgrade chips and gives half of them to Arjun. What is half of 14?",
            answer: "7",
            hint: "What number plus itself equals 14?",
            explanation: "7 + 7 = 14, so half of 14 is 7."
        },
        {
            type: "mcq",
            question: "<b>Even vs. Odd Numbers!</b><br>Even numbers end in 0, 2, 4, 6, 8. Odd numbers end in 1, 3, 5, 7, 9.<br><i>Example: 12 is Even. 15 is Odd.</i><br><br><b>Story:</b> Marty has 17 spare rip cords. Can 17 be split perfectly in half? Is 17 Even or Odd?",
            options: ["Even", "Odd"],
            answer: "Odd",
            hint: "Look at the 7. Does it belong to the Even or Odd group?",
            explanation: "17 ends in 7, making it an Odd number. It cannot be split evenly."
        },
        {
            type: "text",
            question: "<b>Double-Double Trick for x4!</b><br>To multiply by 4, double the number, then double it again!<br><i>Example: 5 x 4 -> Double 5 (10), double 10 (20).</i><br><br><b>Story:</b> Solve 7 x 4 for tournament points: Double 7 to get 14. Now double 14. What is the answer?",
            answer: "28",
            hint: "14 + 14 = ?",
            explanation: "Double 7 is 14. Double 14 is 28. 7 x 4 = 28."
        },

        // --- Phase 6: Fractions, Time & Measurement ---
        {
            type: "text",
            question: "<b>Fractions (One-Fourth)!</b><br>One-fourth (1/4) means dividing a total by 4.<br><i>Example: 1/4 of 20 is 5 because 20 / 4 = 5.</i><br><br><b>Story:</b> Marty earns 16 Burst tokens. He uses 1/4 of them to buy grip tape. Divide 16 by 4 to find how many tokens he used.",
            answer: "4",
            hint: "What is 16 divided by 4?",
            explanation: "16 / 4 = 4. He used 4 tokens."
        },
        {
            type: "mcq",
            question: "<b>Comparing Fractions!</b><br>Fewer cuts make LARGER pieces. 1/2 is bigger than 1/4.<br><i>Example: Half a pizza is more than a quarter slice.</i><br><br><b>Story:</b> The stadium is painted in two colors. Which section is LARGER: 1/2 painted neon green, or 1/4 painted black?",
            options: ["1/2", "1/4"],
            answer: "1/2",
            hint: "Would you rather have half a cake or a quarter slice? Half is bigger!",
            explanation: "1/2 splits a whole into 2 larger parts. 1/4 splits it into 4 smaller parts. 1/2 is larger."
        },
        {
            type: "mcq",
            question: "<b>Elapsed Time!</b><br>Find the time passed from start to end.<br><i>Example: 1:00 PM to 1:20 PM is 20 minutes.</i><br><br><b>Story:</b> Marty's Beyblade match starts at 3:15 PM and finishes at 3:45 PM. How many minutes did it last?",
            options: ["15 minutes", "20 minutes", "30 minutes", "40 minutes"],
            answer: "30 minutes",
            hint: "Subtract the start minutes (15) from the end minutes (45).",
            explanation: "45 - 15 = 30 minutes."
        },
        {
            type: "text",
            question: "<b>Area of a Rectangle!</b><br>Multiply Length times Width.<br><i>Example: A mat 3 ft long and 4 ft wide has an Area of 3 x 4 = 12.</i><br><br><b>Story:</b> Marty has a rubber launch mat that is 6 feet long and 3 feet wide. What is the Area of his mat (6 x 3)?",
            answer: "18",
            hint: "Multiply 6 times 3.",
            explanation: "6 x 3 = 18 square feet."
        },
        {
            type: "text",
            question: "<b>Range!</b><br>Subtract the smallest number from the biggest number in a list.<br><i>Example: For 4, 8, 12, Range is 12 - 4 = 8.</i><br><br><b>Story:</b> Marty's RPM speeds are 10 RPM, 18 RPM, and 25 RPM. Subtract the smallest (10) from the largest (25) to find the Range.",
            answer: "15",
            hint: "25 - 10 = ?",
            explanation: "25 - 10 = 15 Range."
        },

        // --- Phase 7: Advanced Game Logic ---
        {
            type: "mcq",
            question: "<b>The 'NOT' Rule in Logic!</b><br>When a clue says 'NOT X and NOT Y', cross them out!<br><i>Example: Not up and not down means it MUST be left or right.</i><br><br><b>Story:</b> The rival's Beyblade spin direction is NOT Left-Spin and NOT Dual-Spin. Options: Left-Spin, Right-Spin, Dual-Spin. What is it?",
            options: ["Left-Spin", "Right-Spin", "Dual-Spin"],
            answer: "Right-Spin",
            hint: "Cross out Left-Spin and Dual-Spin.",
            explanation: "Only Right-Spin is left after crossing out the other two."
        },
        {
            type: "text",
            question: "<b>The Median (Middle)!</b><br>Put numbers in order from smallest to largest. The Median is the one in the exact middle.<br><i>Example: 2, 5, 9. The middle is 5.</i><br><br><b>Story:</b> Put these launch speeds in order: 12 mph, 8 mph, 15 mph. What is the Median (middle) speed?",
            answer: "12",
            hint: "Order them: 8, 12, 15. Which is in the middle?",
            explanation: "In the ordered set [8, 12, 15], 12 is the middle number."
        },
        {
            type: "text",
            question: "<b>Working Backward!</b><br>Undo steps using opposite math.<br><i>Example: Number + 4 = 10 -> 10 - 4 = 6.</i><br><br><b>Story:</b> Marty moved up 5 ranking spots today, landing in 14th place. Work backward (14 - 5) to find his place yesterday.",
            answer: "9",
            hint: "Subtract 5 from 14.",
            explanation: "14 - 5 = 9. He was in 9th place."
        },
        {
            type: "text",
            question: "<b>Multiply by 5 Trick!</b><br>Multiply by 10, then take half.<br><i>Example: 6 x 5 -> 6 x 10 = 60. Half of 60 is 30.</i><br><br><b>Story:</b> Marty calculates 8 x 5. First do 8 x 10 = 80. What is half of 80?",
            answer: "40",
            hint: "What is 80 divided by 2?",
            explanation: "Half of 80 is 40. 8 x 5 = 40."
        },
        {
            type: "text",
            question: "<b>Two-Step Problem Solving!</b><br>Follow steps in order.<br><i>Example: 2 x 3 = 6. Lose 1 -> 6 - 1 = 5.</i><br><br><b>Story:</b> Marty buys 4 packs of cards with 5 cards each (4 x 5 = 20). He trades away 3 cards. How many cards does he have left (20 - 3)?",
            answer: "17",
            hint: "20 - 3 = ?",
            explanation: "4 x 5 = 20. 20 - 3 = 17 cards."
        },

        // --- Phase 8: Championship Data & Celebration ---
        {
            type: "text",
            question: "<b>Reading a Bar Graph!</b><br>Find where the bar stops on the number line.<br><i>Example: Bar stops at 8, value is 8.</i><br><br><b>Story:</b> Marty's score bar reaches 15 points. His rival's bar reaches 9 points. Subtract 9 from 15 to find out how many more points Marty scored.",
            answer: "6",
            hint: "15 - 9 = ?",
            explanation: "15 - 9 = 6 points difference."
        },
        {
            type: "text",
            question: "<b>Making Change with Money!</b><br>Change = Money Paid minus Item Cost.<br><i>Example: Pay $10 for $7 item -> $10 - $7 = $3 change.</i><br><br><b>Story:</b> Marty buys victory snacks for $12 and pays with a $20 bill. How much change does he get back ($20 - $12)?",
            answer: "8",
            hint: "Subtract 12 from 20.",
            explanation: "$20 - $12 = $8 change."
        },
        {
            type: "text",
            question: "<b>Combinations!</b><br>Multiply choices together to find total outfits or combos.<br><i>Example: 2 hats x 2 shirts = 4 combinations.</i><br><br><b>Story:</b> Marty has 3 different Launcher grips and 2 ripcord colors. Multiply 3 x 2 to find how many custom launcher combos he can make.",
            answer: "6",
            hint: "What is 3 times 2?",
            explanation: "3 x 2 = 6 unique combinations."
        },
        {
            type: "text",
            question: "<b>The Mode (Most Often)!</b><br>The Mode is the number seen the MOST times.<br><i>Example: 2, 3, 3, 4. The Mode is 3.</i><br><br><b>Story:</b> Marty scored these points in his final 5 matches: 7, 10, 7, 5, 7. What number appears most often?",
            answer: "7",
            hint: "Which score shows up three times?",
            explanation: "7 appears 3 times, making it the Mode."
        },
        {
            type: "text",
            question: "<b>Grand Finale: Repeated Addition!</b><br>Add equal parts for the grand total.<br><i>Example: 2 + 2 + 2 = 6.</i><br><br><b>Story:</b> Marty executes 5 perfect launches in the qualifiers, 5 in the semi-finals, and 5 in the grand finals! Add 5 + 5 + 5 to find his total perfect launches.",
            answer: "15",
            hint: "Count by 5s three times: 5, 10, 15.",
            explanation: "5 + 5 + 5 = 15 perfect launches! Beyblade Champion!"
        }
    ]
};
