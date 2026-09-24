const missionConfig = {
    themeTitle: "🚀 SpaceX & Tesla: Marty's Mars Mission",
    themeColor: "linear-gradient(135deg, #cc0000 0%, #000000 50%, #555555 100%)", // Tesla Red, Space Black, Steel Silver
    themeIcon: "⚡",
    showStreakCounter: true,
    streakCounter: true,
    enableStreakBonus: true,
    streakThreshold: 3,
    questions: [
        // --- Phase 1: Gigafactory Logic (Logic Grids & Sudoku) ---
        {
            type: "mcq",
            question: "<b>Logic Grid Puzzle!</b><br>Marty, Arjun, and Jaxon each drive a different Tesla: Cybertruck, Model 3, or Model X.<br>• Clue 1: Marty does NOT drive the Model X.<br>• Clue 2: Arjun drives the Model 3.<br>What vehicle does Marty drive?",
            options: ["Cybertruck", "Model 3", "Model X"],
            answer: "Cybertruck",
            hint: "Arjun took the Model 3. That leaves Cybertruck and Model X. Since Marty is NOT Model X, what is left?",
            explanation: "With the Model 3 taken by Arjun and Model X ruled out for Marty, the Cybertruck is the only option left."
        },
        {
            type: "mcq",
            question: "<b>Logic Grid Puzzle 2!</b><br>Three rockets (Falcon 9, Falcon Heavy, Starship) are painted Silver, White, or Black.<br>• Clue 1: Starship is NOT Black.<br>• Clue 2: Falcon 9 is White.<br>• Clue 3: Falcon Heavy is NOT Silver.<br>What color is Starship?",
            options: ["Silver", "White", "Black"],
            answer: "Silver",
            hint: "Falcon 9 is White. Starship is not Black. What color is left for Starship?",
            explanation: "Falcon 9 = White. Falcon Heavy = Black (since it can't be Silver or White). Starship must be Silver."
        },
        {
            type: "mcq",
            question: "<b>Mini-Sudoku Deduction!</b><br>In a Gigafactory assembly grid, every row must have one of each battery type: A, B, C, and D without repeating.<br><b>Story:</b> Marty is loading a 4x4 battery tray. The first row currently has [Battery A, Battery C, Battery D, ___]. What is the missing battery type?",
            options: ["Battery A", "Battery B", "Battery C", "Battery D"],
            answer: "Battery B",
            hint: "Look at the letters already in the row. Which of the 4 types is missing?",
            explanation: "The row already has A, C, and D. The missing battery to complete the set is B."
        },
        {
            type: "mcq",
            question: "<b>Mini-Sudoku Intersection!</b><br>Check both the row and the column. The missing item cannot match anything already in its row OR its column.<br><b>Story:</b> Marty needs to place a solar panel on a grid. Its Row already has a <i>Red Panel</i> and <i>Blue Panel</i>. Its Column already has a <i>Green Panel</i>. The only colors allowed are Red, Blue, Green, and Yellow. What color must the missing panel be?",
            options: ["Red", "Blue", "Green", "Yellow"],
            answer: "Yellow",
            hint: "Eliminate Red and Blue (from the row) and Green (from the column).",
            explanation: "It cannot be Red, Blue, or Green because they are already in the same row or column. It must be Yellow."
        },
        {
            type: "mcq",
            question: "<b>Knights and Knaves (Truth or Lie)!</b><br>One robot always tells the truth, one robot always lies.<br><b>Story:</b> Marty is looking for the launch control room. Two AI robots stand at two doors (Red and Blue). The honest robot says, 'The control room is NOT behind the Red door.' The lying robot says, 'The control room is behind the Red door.' Which door hides the control room?",
            options: ["Red Door", "Blue Door"],
            answer: "Blue Door",
            hint: "Trust the honest robot. If it's NOT the Red door, which one is it?",
            explanation: "The honest robot tells the truth: it is NOT the Red door. Therefore, it must be behind the Blue door."
        },

        // --- Phase 2: Starbase Codes (Picture Equations & Cryptograms) ---
        {
            type: "text",
            question: "<b>Math Picture Equation!</b><br>Find the value of the Battery (🔋).<br>🚀 + 🚀 = 20<br>🚀 + 🔋 = 15<br>What number does the 🔋 stand for?",
            answer: "5",
            hint: "First find 🚀 (what plus itself is 20?). Then subtract that from 15.",
            explanation: "🚀 = 10 (10 + 10 = 20). If 10 + 🔋 = 15, then 🔋 must be 5."
        },
        {
            type: "text",
            question: "<b>Math Picture Equation 2!</b><br>Find the value of the Astronaut (🧑‍🚀).<br>🛰️ + 🛰️ + 🛰️ = 12<br>🛰️ + 🧑‍🚀 = 11<br>What number does the 🧑‍🚀 stand for?",
            answer: "7",
            hint: "Divide 12 by 3 to find the satellite (🛰️). Then subtract that number from 11.",
            explanation: "🛰️ = 4 (4 + 4 + 4 = 12). If 4 + 🧑‍🚀 = 11, then 🧑‍🚀 must be 7."
        },
        {
            type: "mcq",
            question: "<b>Mastermind Code Breaker!</b><br>Use feedback clues to guess a secret code sequence.<br><b>Story:</b> Marty needs a 2-digit passcode to unlock the Starship airlock. He tries '84'. The system says: 'The 8 is completely wrong, but the 4 is the correct number in the correct spot.' He knows the first digit is 5. What is the code?",
            options: ["48", "85", "54", "45"],
            answer: "54",
            hint: "The first digit is 5. The second digit is the 4 (since it was in the correct spot).",
            explanation: "The first digit is 5. The 4 is the correct second digit, making the code 54."
        },
        {
            type: "text",
            question: "<b>Cryptogram Decoder!</b><br>Each letter matches a specific number.<br><b>Story:</b> Mission Control uses a secret point system for rocket landings: X = 10, Y = 5, Z = 1. Marty's rocket scores an 'X Y Z' landing rating. Add the values of X + Y + Z to find his total score.",
            answer: "16",
            hint: "Add 10 + 5 + 1.",
            explanation: "X(10) + Y(5) + Z(1) = 16 points."
        },
        {
            type: "mcq",
            question: "<b>Mastermind Sandwich Logic!</b><br>Use number boundaries to find a secret code.<br><b>Story:</b> The Cybertruck's suspension setting is an odd number. It is greater than 20, but less than 24. It is NOT 21. What is the setting number?",
            options: ["19", "21", "22", "23"],
            answer: "23",
            hint: "Find the odd numbers between 20 and 24 (21 and 23). If it's not 21, which one is it?",
            explanation: "The odd numbers between 20 and 24 are 21 and 23. Since it is NOT 21, it must be 23."
        },

        // --- Phase 3: Mars Rover Grids (Nonograms & Minesweeper) ---
        {
            type: "text",
            question: "<b>Nonogram Grid Logic!</b><br>In Nonograms, numbers tell you how many consecutive blocks to color in a row.<br><b>Story:</b> Marty is mapping a Mars Rover path on a digital grid. He is shading a row that is exactly 5 blocks wide. The clue for this row is the number <b>5</b>. How many blocks must he leave blank (empty) in this row?",
            answer: "0",
            hint: "If he has to shade 5 blocks in a 5-block row, are there any leftover?",
            explanation: "The clue '5' means all 5 blocks must be shaded, leaving 0 blank blocks."
        },
        {
            type: "mcq",
            question: "<b>Nonogram Sequence Logic!</b><br>A clue with two numbers means there is a gap between shaded blocks.<br><b>Story:</b> Marty reads a row of 4 blocks for the rover map. The clue is <b>'2, 1'</b>. This means two blocks are shaded, then at least one space is blank, then one block is shaded. What does the 4-block row look like?",
            options: ["Shaded, Blank, Shaded, Shaded", "Blank, Shaded, Shaded, Shaded", "Shaded, Shaded, Blank, Shaded"],
            answer: "Shaded, Shaded, Blank, Shaded",
            hint: "You need a block of 2, a space, then a block of 1 to fit exactly into 4 spaces.",
            explanation: "To fit '2' and '1' in a 4-block row, they must be separated by exactly one blank space: Shaded, Shaded, Blank, Shaded."
        },
        {
            type: "mcq",
            question: "<b>Minesweeper Deduction!</b><br>A number in a square tells you exactly how many hidden items are touching it (up, down, left, right, or diagonal).<br><b>Story:</b> Marty scans a Mars map for hidden craters. He steps on a square that says <b>'0'</b>. There are 8 squares touching it. How many of those 8 touching squares have craters?",
            options: ["0 squares", "1 square", "4 squares", "8 squares"],
            answer: "0 squares",
            hint: "The number 0 means zero craters are touching it!",
            explanation: "A '0' clue guarantees that absolutely none of the adjacent squares contain craters."
        },
        {
            type: "text",
            question: "<b>Minesweeper Corners!</b><br>If a numbered square is in a corner, it touches fewer squares. This makes it easy to find hidden items!<br><b>Story:</b> Marty looks at a corner square that says <b>'1'</b>. It is only touching exactly ONE unexplored sector. How many hidden craters are in that unexplored sector?",
            answer: "1",
            hint: "If the clue says '1' and there's only one possible sector it touches, the crater has to be there.",
            explanation: "Since the '1' must touch a crater, and there is only 1 sector available, that sector contains 1 crater."
        },
        {
            type: "mcq",
            question: "<b>Logic Process of Elimination!</b><br>Cross out options that violate the rules.<br><b>Story:</b> Identify the mystery Starship part. Clue 1: It is made of metal (not plastic). Clue 2: It is round (not jagged). Options: A Jagged Metal Hull, A Round Plastic Fin, A Round Metal Thruster. Which part is it?",
            options: ["Jagged Metal Hull", "Round Plastic Fin", "Round Metal Thruster"],
            answer: "Round Metal Thruster",
            hint: "Eliminate the plastic one, and eliminate the jagged one.",
            explanation: "It must be metal (eliminating the Plastic Fin) and round (eliminating the Jagged Hull). It is the Round Metal Thruster."
        },

        // --- Phase 4: Launchpad Math (Addition, Subtraction, Rounding) ---
        {
            type: "text",
            question: "<b>Making Tens for Addition!</b><br>Split the smaller number to make a clean 10 first.<br><b>Story:</b> Marty counts the rockets at Starbase. There are 9 Falcon 9s and 6 Starships. Using Making Tens, take 1 from the 6 to turn 9 into 10. How many total rockets are there?",
            answer: "15",
            hint: "9 + 1 = 10. You took 1 from 6, leaving 5. 10 + 5 = ?",
            explanation: "9 + 6 = (9 + 1) + 5 = 10 + 5 = 15 rockets."
        },
        {
            type: "text",
            question: "<b>Counting Up for Subtraction!</b><br>Start at the smaller number and count UP to the bigger number.<br><b>Story:</b> The mission requires 22 Starlink satellites, but Marty only has 18 loaded. Count UP from 18 to 22. How many more satellites does he need?",
            answer: "4",
            hint: "Count: 19, 20, 21, 22. How many numbers did you count?",
            explanation: "Counting up from 18 to 22 takes 4 steps (18 + 4 = 22), so 22 - 18 = 4."
        },
        {
            type: "mcq",
            question: "<b>Perimeter!</b><br>Perimeter is the total distance around the outside edge. Add all side lengths together!<br><b>Story:</b> Marty measures a square launchpad zone. Each of its 4 sides is 5 meters long. What is the total perimeter around the launchpad?",
            options: ["15 meters", "20 meters", "25 meters", "30 meters"],
            answer: "20 meters",
            hint: "Add 5 four times: 5 + 5 + 5 + 5.",
            explanation: "5 + 5 + 5 + 5 = 20 meters."
        },
        {
            type: "text",
            question: "<b>Near Doubles (Double + 1)!</b><br>If two numbers are neighbors, double the smaller number and add 1.<br><b>Story:</b> Marty sees 7 red Model 3s and 8 blue Model 3s at the charging station. Use Near Doubles (double 7, then add 1) to find the total.",
            answer: "15",
            hint: "Double 7 is 14. Add 1 more.",
            explanation: "7 + 8 = (7 + 7) + 1 = 14 + 1 = 15."
        },
        {
            type: "mcq",
            question: "<b>Rounding to the Nearest 10!</b><br>Look at the ones digit. 5 or bigger rounds UP. 4 or smaller rounds DOWN.<br><b>Story:</b> Marty's Cybertruck hits a speed of 67 mph on the test track. What is 67 rounded to the nearest 10?",
            options: ["60 mph", "65 mph", "70 mph", "80 mph"],
            answer: "70 mph",
            hint: "Look at the 7. Since it is 5 or bigger, round up to the next ten.",
            explanation: "67 is closer to 70 than 60, so it rounds up to 70."
        },

        // --- Phase 5: Supercharger Multiplication (Mult & Div Tricks) ---
        {
            type: "text",
            question: "<b>Skip Counting for Multiplication!</b><br>Multiply by skip counting.<br><b>Story:</b> Marty checks 5 Superchargers, and each has 4 charging cables. Skip count by 4s five times (4, 8, 12...) to find the total cables.",
            answer: "20",
            hint: "4, 8, 12, 16, __.",
            explanation: "4, 8, 12, 16, 20. 5 x 4 = 20."
        },
        {
            type: "text",
            question: "<b>The 'Add a Zero' Trick for 10s!</b><br>When multiplying a number by 10, just write a 0 at the end.<br><b>Story:</b> The Gigafactory roof has 6 rows of solar panels, with 10 panels in each row. What is 6 x 10?",
            answer: "60",
            hint: "Write the number 6 and put a 0 after it.",
            explanation: "6 x 10 = 60."
        },
        {
            type: "text",
            question: "<b>Halving (Dividing by 2)!</b><br>To find half, split the number into two identical parts.<br><b>Story:</b> Marty builds 14 battery packs and sends half of them to the testing lab. What is half of 14?",
            answer: "7",
            hint: "What number plus itself equals 14?",
            explanation: "7 + 7 = 14, so half of 14 is 7."
        },
        {
            type: "mcq",
            question: "<b>Even vs. Odd Numbers!</b><br>Even numbers end in 0, 2, 4, 6, 8. Odd numbers end in 1, 3, 5, 7, 9.<br><b>Story:</b> Marty has 17 spare astronaut helmets. Can 17 be split perfectly in half? Is 17 Even or Odd?",
            options: ["Even", "Odd"],
            answer: "Odd",
            hint: "Look at the 7. Does it belong to the Even or Odd group?",
            explanation: "17 ends in 7, making it an Odd number. It cannot be split evenly."
        },
        {
            type: "text",
            question: "<b>Double-Double Trick for x4!</b><br>To multiply by 4, double the number, then double it again!<br><b>Story:</b> Marty tests 7 Raptor engines. He needs 4 bolts per engine (7 x 4). Double 7 to get 14. Now double 14. What is the answer?",
            answer: "28",
            hint: "14 + 14 = ?",
            explanation: "Double 7 is 14. Double 14 is 28. 7 x 4 = 28."
        },

        // --- Phase 6: Orbit Trajectories (Fractions, Time, Area) ---
        {
            type: "text",
            question: "<b>Fractions (One-Fourth)!</b><br>One-fourth (1/4) means dividing a total by 4.<br><b>Story:</b> There are 16 solar tiles on the habitat. Marty turns on 1/4 of them. Divide 16 by 4 to find how many tiles are turned on.",
            answer: "4",
            hint: "What is 16 divided by 4?",
            explanation: "16 / 4 = 4. He turned on 4 solar tiles."
        },
        {
            type: "mcq",
            question: "<b>Comparing Fractions!</b><br>Fewer cuts make LARGER pieces. 1/2 is bigger than 1/4.<br><b>Story:</b> Two rocket fuel tanks are being compared. Which contains MORE fuel: 1/2 of a tank, or 1/4 of a tank?",
            options: ["1/2 tank", "1/4 tank"],
            answer: "1/2 tank",
            hint: "Would you rather have half a pizza or a quarter slice? Half is bigger!",
            explanation: "1/2 splits a whole into 2 larger parts. 1/4 splits it into 4 smaller parts. 1/2 is larger."
        },
        {
            type: "mcq",
            question: "<b>Elapsed Time!</b><br>Find the time passed from start to end.<br><b>Story:</b> The Starship launch window opens at 1:15 PM and closes at 1:45 PM. How many minutes does the launch window stay open?",
            options: ["15 minutes", "20 minutes", "30 minutes", "40 minutes"],
            answer: "30 minutes",
            hint: "Subtract the start minutes (15) from the end minutes (45).",
            explanation: "45 - 15 = 30 minutes."
        },
        {
            type: "text",
            question: "<b>Area of a Rectangle!</b><br>Multiply Length times Width.<br><b>Story:</b> Marty deploys a solar array that is 6 meters long and 3 meters wide. What is the Area of his array (6 x 3)?",
            answer: "18",
            hint: "Multiply 6 times 3.",
            explanation: "6 x 3 = 18 square meters."
        },
        {
            type: "text",
            question: "<b>Range!</b><br>Subtract the smallest number from the biggest number in a list.<br><b>Story:</b> Marty tracks satellite speeds: 10 km/s, 18 km/s, and 25 km/s. Subtract the smallest (10) from the largest (25) to find the Range.",
            answer: "15",
            hint: "25 - 10 = ?",
            explanation: "25 - 10 = 15 Range."
        },

        // --- Phase 7: Engineering Logic (Advanced Logic) ---
        {
            type: "mcq",
            question: "<b>The 'NOT' Rule in Logic!</b><br>When a clue says 'NOT X and NOT Y', cross them out!<br><b>Story:</b> The next rocket destination is NOT Mars and NOT Venus. Options: Mars, Venus, Moon. Where is the rocket going?",
            options: ["Mars", "Venus", "Moon"],
            answer: "Moon",
            hint: "Cross out Mars and Venus.",
            explanation: "Only the Moon is left after crossing out the other two destinations."
        },
        {
            type: "text",
            question: "<b>The Median (Middle)!</b><br>Put numbers in order from smallest to largest. The Median is the one in the exact middle.<br><b>Story:</b> Put these rover speeds in order: 12 mph, 8 mph, 15 mph. What is the Median (middle) speed?",
            answer: "12",
            hint: "Order them: 8, 12, 15. Which is in the middle?",
            explanation: "In the ordered set [8, 12, 15], 12 is the middle number."
        },
        {
            type: "text",
            question: "<b>Working Backward!</b><br>Undo steps using opposite math.<br><b>Story:</b> Marty's engineering team moved up 5 spots on the leaderboard today, landing in 14th place. Work backward (14 - 5) to find their place yesterday.",
            answer: "9",
            hint: "Subtract 5 from 14.",
            explanation: "14 - 5 = 9. They were in 9th place."
        },
        {
            type: "text",
            question: "<b>Multiply by 5 Trick!</b><br>Multiply by 10, then take half.<br><b>Story:</b> Marty calculates 8 x 5 for drone battery life. First do 8 x 10 = 80. What is half of 80?",
            answer: "40",
            hint: "What is 80 divided by 2?",
            explanation: "Half of 80 is 40. 8 x 5 = 40."
        },
        {
            type: "text",
            question: "<b>Two-Step Problem Solving!</b><br>Follow steps in order.<br><b>Story:</b> Marty receives 4 crates containing 5 spacesuit parts each (4 x 5 = 20). He installs 3 parts. How many parts does he have left (20 - 3)?",
            answer: "17",
            hint: "20 - 3 = ?",
            explanation: "4 x 5 = 20. 20 - 3 = 17 parts."
        },

        // --- Phase 8: Mars Landing (Data, Money, Celebration) ---
        {
            type: "text",
            question: "<b>Reading a Bar Graph!</b><br>Find where the bar stops on the number line.<br><b>Story:</b> On the mission screen, Marty's team bar reaches 15 successful test flights. The rival team's bar reaches 9 flights. Subtract 9 from 15 to find how many more flights Marty's team had.",
            answer: "6",
            hint: "15 - 9 = ?",
            explanation: "15 - 9 = 6 flights difference."
        },
        {
            type: "text",
            question: "<b>Making Change with Money!</b><br>Change = Money Paid minus Item Cost.<br><b>Story:</b> Marty buys a SpaceX hat for $12 and pays with a $20 bill. How much change does he get back ($20 - $12)?",
            answer: "8",
            hint: "Subtract 12 from 20.",
            explanation: "$20 - $12 = $8 change."
        },
        {
            type: "text",
            question: "<b>Combinations!</b><br>Multiply choices together to find total combos.<br><b>Story:</b> Marty has 3 different spacesuit colors and 2 visor styles. Multiply 3 x 2 to find how many unique suit combinations he can wear on Mars.",
            answer: "6",
            hint: "What is 3 times 2?",
            explanation: "3 x 2 = 6 unique combinations."
        },
        {
            type: "text",
            question: "<b>The Mode (Most Often)!</b><br>The Mode is the number seen the MOST times.<br><b>Story:</b> Marty tracks successful booster landings over 5 weeks: 7, 10, 7, 5, 7. What number appears most often?",
            answer: "7",
            hint: "Which number shows up three times?",
            explanation: "7 appears 3 times, making it the Mode."
        },
        {
            type: "text",
            question: "<b>Grand Finale: Repeated Addition!</b><br>Add equal parts for the grand total.<br><b>Story:</b> Marty programs 5 successful Starship landings in Simulation A, 5 in Simulation B, and 5 in the real Mars test! Add 5 + 5 + 5 to find his total perfect landings.",
            answer: "15",
            hint: "Count by 5s three times: 5, 10, 15.",
            explanation: "5 + 5 + 5 = 15 perfect landings! Mars Mission Accomplished!"
        }
    ]
};
