const missionConfig = {
    themeTitle: "🌌 Cosmic Detective: The Lost Star Map",
    themeColor: "radial-gradient(circle at center, #1b2735 0%, #090a0f 100%)", // Deep space black/blue gradient
    themeIcon: "🛸",
    questions: [
        // --- Warm-Up: Launch Prep ---
        {
            type: "text",
            question: "Marty is preparing the spaceship for launch. He needs 45 fuel cells, but he only has 28. How many more fuel cells does he need?",
            answer: "17",
            hint: "Try subtracting 28 from 45. What do you get if you borrow a ten?",
            explanation: "45 - 28 = 17. Marty needs 17 more fuel cells to reach full power."
        },
        {
            type: "text",
            question: "Rod the AI calculates that the journey to the Moon takes 3 days. Since there are 24 hours in one day, how many hours will the trip take?",
            answer: "72",
            hint: "Multiply 24 by 3. Try doing 20 x 3, and then 4 x 3, and add them together!",
            explanation: "24 x 3 = 72. The trip will take 72 hours."
        },
        {
            type: "mcq",
            question: "Arjun is packing snacks for the crew. If he packs 6 boxes of astronaut ice cream, and each box has 8 sandwiches, how many sandwiches are there in total?",
            options: ["42", "48", "54", "64"],
            answer: "48",
            hint: "Think of your 6 times tables. What is 6 x 8?",
            explanation: "6 x 8 = 48. Arjun packed 48 astronaut ice cream sandwiches."
        },
        {
            type: "text",
            question: "Mom and Dad are checking the radar. They spot 63 asteroids on the left and 29 on the right. How many asteroids did they spot in total?",
            answer: "92",
            hint: "Add 63 and 29. Try adding 30 to 63 first, then subtract 1!",
            explanation: "63 + 29 = 92. They spotted 92 asteroids on the radar."
        },
        {
            type: "mcq",
            question: "Taksh finds a strange pattern on the navigation screen: 5, 10, 20, 40, ... What number comes next?",
            options: ["50", "60", "80", "100"],
            answer: "80",
            hint: "Look at how the numbers are growing. Each number is being doubled (multiplied by 2).",
            explanation: "The pattern doubles each time. 40 x 2 = 80."
        },

        // --- Phase 2: Space Facts & Planetary Math ---
        {
            type: "mcq",
            question: "The Sun is actually a giant star! It is so big that you could fit 1 million Earths inside it. If Ayaan draws 4 pictures of the Sun, and puts 9 Earths in each picture, how many Earths did he draw?",
            options: ["36", "45", "32", "40"],
            answer: "36",
            hint: "Multiply the number of pictures (4) by the number of Earths in each (9).",
            explanation: "4 x 9 = 36. Ayaan drew 36 Earths."
        },
        {
            type: "text",
            question: "Jupiter is the largest planet and has 95 known moons! If Advi discovers 12 more tiny moons hidden in Jupiter's rings, how many moons does Jupiter have now?",
            answer: "107",
            hint: "Add 95 and 12 together.",
            explanation: "95 + 12 = 107. Jupiter would have 107 moons."
        },
        {
            type: "mcq",
            question: "Smithika reads that a year on Mercury is only 88 Earth days long because it is so close to the Sun. How many days are in TWO years on Mercury?",
            options: ["176", "166", "188", "196"],
            answer: "176",
            hint: "Add 88 + 88, or multiply 88 x 2. (80 + 80 = 160, and 8 + 8 = 16).",
            explanation: "88 x 2 = 176. Two years on Mercury equal 176 Earth days."
        },
        {
            type: "text",
            question: "Mars is known as the Red Planet. The team sends 4 rovers to explore Mars. If each rover takes 15 pictures, how many pictures do they take in total?",
            answer: "60",
            hint: "Multiply 15 by 4. You can also double 15 to get 30, and then double it again!",
            explanation: "15 x 4 = 60. The rovers took 60 pictures."
        },
        {
            type: "mcq",
            question: "Saturn is famous for its beautiful rings made of ice and rock. If Marty counts 7 large rings and Dad says each large ring is made of 6 smaller bands, how many bands are there?",
            options: ["35", "42", "49", "48"],
            answer: "42",
            hint: "What is 7 times 6?",
            explanation: "7 x 6 = 42. There are 42 smaller bands."
        },

        // --- Phase 3: Cosmic Logic & Deductive Reasoning ---
        {
            type: "mcq",
            question: "The team finds a locked space chest floating in orbit. The passcode is a 3-digit number. The first digit is 3. The second digit is double the first. The third digit is the second digit minus 1. What is the passcode?",
            options: ["365", "367", "398", "342"],
            answer: "365",
            hint: "First digit = 3. Second digit = 3 x 2. Third digit = Second digit - 1.",
            explanation: "First digit is 3. Double 3 is 6. 6 minus 1 is 5. The code is 365."
        },
        {
            type: "mcq",
            question: "Arjun, Taksh, and Ayaan each pick a favorite planet: Venus, Mars, or Neptune. Arjun does not like hot planets. Taksh loves the color red. Which planet is Ayaan's favorite?",
            options: ["Venus", "Mars", "Neptune", "Earth"],
            answer: "Venus",
            hint: "Taksh likes red, so he picks Mars. Arjun doesn't like hot planets, so he picks Neptune. Who is left?",
            explanation: "Taksh gets Mars (red). Arjun gets Neptune (cold). That leaves Venus for Ayaan."
        },
        {
            type: "text",
            question: "To decode a distress signal, Rod the AI says: 'Take the number 12, multiply it by 3, and then subtract 6.' What is the final number?",
            answer: "30",
            hint: "First do 12 x 3. Then take that answer and subtract 6.",
            explanation: "12 x 3 = 36. Then 36 - 6 = 30."
        },
        {
            type: "mcq",
            question: "Mom arranges the spaceship's solar panels in a grid. There are 4 rows and 9 columns. If 5 panels are broken, how many panels are working perfectly?",
            options: ["36", "31", "29", "25"],
            answer: "31",
            hint: "First find the total number of panels by multiplying 4 x 9. Then subtract the 5 broken ones.",
            explanation: "4 x 9 = 36 total panels. 36 - 5 broken = 31 working panels."
        },
        {
            type: "text",
            question: "Advi is organizing star charts. She has 50 charts. She gives 14 to Smithika and 16 to Marty. How many star charts does Advi have left?",
            answer: "20",
            hint: "First, add up how many charts she gave away (14 + 16). Then subtract that from 50.",
            explanation: "14 + 16 = 30 charts given away. 50 - 30 = 20 charts left."
        },

        // --- Phase 4: Intermediate Multi-Step Problems ---
        {
            type: "mcq",
            question: "The team's spaceship travels at 8 miles per second! How many miles does it travel in 10 seconds?",
            options: ["18", "64", "80", "800"],
            answer: "80",
            hint: "Multiply the speed (8) by the time (10).",
            explanation: "8 x 10 = 80 miles."
        },
        {
            type: "text",
            question: "Dad buys 4 packs of zero-gravity batteries. Each pack has 12 batteries. If he uses 8 batteries to fix the scanner, how many does he have left?",
            answer: "40",
            hint: "First find the total (4 x 12). Then subtract 8.",
            explanation: "4 x 12 = 48 total batteries. 48 - 8 = 40 batteries left."
        },
        {
            type: "mcq",
            question: "Smithika is tracking comets. She sees 3 comets on Monday, 6 on Tuesday, and 9 on Wednesday. If this pattern continues, how many comets will she see on Thursday?",
            options: ["10", "12", "15", "18"],
            answer: "12",
            hint: "Look at the pattern: 3, 6, 9... What are the numbers counting up by?",
            explanation: "The pattern goes up by 3 each day. 9 + 3 = 12 comets."
        },
        {
            type: "text",
            question: "A constellation is a group of stars that forms a shape. Marty spots the Orion constellation, which has 7 main stars. If the team finds 8 different constellations just like Orion, how many main stars did they count in total?",
            answer: "56",
            hint: "Multiply 7 stars by 8 constellations.",
            explanation: "7 x 8 = 56 main stars in total."
        },
        {
            type: "mcq",
            question: "Rod the AI's battery is at 100%. He uses 25% to scan a planet and 38% to process the data. What is his battery percentage now?",
            options: ["37", "47", "63", "27"],
            answer: "37",
            hint: "Add the power he used (25 + 38), then subtract that total from 100.",
            explanation: "25 + 38 = 63% used. 100 - 63 = 37% remaining."
        },

        // --- Phase 5: The Mystery of the Lost Star Map ---
        {
            type: "text",
            question: "The team finds a mysterious locked door on an abandoned space station. The password is the sum of the number of planets in our solar system (8) and the number of days in a normal Earth year (365). What is the password?",
            answer: "373",
            hint: "Add 365 + 8.",
            explanation: "365 + 8 = 373."
        },
        {
            type: "mcq",
            question: "Inside the station, they find a riddle: 'I am an even number. I am greater than 40 but less than 50. If you count by 7s, you will say my name.' What number am I?",
            options: ["42", "44", "46", "49"],
            answer: "42",
            hint: "Think of your 7 times tables. Which multiple of 7 is between 40 and 50 AND is an even number?",
            explanation: "7 x 6 = 42. It is even and falls exactly between 40 and 50 (49 is odd)."
        },
        {
            type: "text",
            question: "The first piece of the Star Map is hidden in a locker. The locker number is half of 150. What is the locker number?",
            answer: "75",
            hint: "Divide 150 by 2. What is half of 100? What is half of 50? Add them together.",
            explanation: "Half of 100 is 50. Half of 50 is 25. 50 + 25 = 75."
        },
        {
            type: "mcq",
            question: "Ayaan, Advi, and Smithika are holding map pieces. Advi does not have piece #1. Smithika has the piece with the highest number. If the pieces are #1, #2, and #3, who has piece #1?",
            options: ["Ayaan", "Advi", "Smithika", "Rod"],
            answer: "Ayaan",
            hint: "Smithika has the highest (#3). Advi doesn't have #1, so she must have #2. Who is left?",
            explanation: "Smithika = #3. Advi = #2. Therefore, Ayaan must have piece #1."
        },
        {
            type: "text",
            question: "To combine the map pieces, Mom says they need to enter a calibration code. The code is 9 multiplied by itself. What is the code?",
            answer: "81",
            hint: "What is 9 x 9?",
            explanation: "9 multiplied by itself is 9 x 9, which equals 81."
        },

        // --- Phase 6: Deep Space Math Challenges ---
        {
            type: "mcq",
            question: "The Star Map shows a path through an asteroid belt. To avoid the asteroids, they must fly in a zigzag pattern. If they fly 15 miles left, 20 miles right, and repeat this pattern 3 times in total, how many miles did they fly?",
            options: ["35", "70", "105", "120"],
            answer: "105",
            hint: "One pattern is 15 + 20 miles. Find that total, then multiply by 3.",
            explanation: "One zigzag is 15 + 20 = 35 miles. 35 x 3 = 105 miles."
        },
        {
            type: "text",
            question: "Dad is brewing space-coffee. He has 100 ounces of water. He uses 28 ounces for his cup and 32 ounces for Mom's cup. How many ounces of water are left?",
            answer: "40",
            hint: "Add 28 + 32 together first, then subtract that amount from 100.",
            explanation: "28 + 32 = 60. 100 - 60 = 40 ounces left."
        },
        {
            type: "mcq",
            question: "Arjun counts shooting stars out the window. He sees 4 blue ones, 5 green ones, and 2 times as many white ones as blue ones. How many white shooting stars did he see?",
            options: ["8", "10", "12", "14"],
            answer: "8",
            hint: "He saw 4 blue ones. He saw TWO TIMES as many white ones as blue ones. What is 4 x 2?",
            explanation: "Blue = 4. White is 2 times blue. 4 x 2 = 8 white shooting stars."
        },
        {
            type: "text",
            question: "If Taksh has 54 space-credits and wants to buy robot parts that cost 9 credits each, how many parts can he buy?",
            answer: "6",
            hint: "Divide 54 by 9. Think: 9 times what number equals 54?",
            explanation: "54 / 9 = 6. Taksh can buy 6 robot parts."
        },
        {
            type: "mcq",
            question: "The ship needs to cool down. The engine temperature is 120 degrees. It drops 15 degrees every minute. What will the temperature be after 3 minutes?",
            options: ["45", "75", "105", "60"],
            answer: "75",
            hint: "First find out how much it drops in total (15 x 3). Then subtract that from 120.",
            explanation: "15 x 3 = 45 degrees dropped. 120 - 45 = 75 degrees."
        },

        // --- Phase 7: Boss Battle - The Cosmic Glitch ---
        {
            type: "text",
            question: "Oh no! A Cosmic Glitch has frozen the ship's computer. The screen says: 'Solve this to reboot: (8 x 5) + 17'. What is the answer?",
            answer: "57",
            hint: "Do the multiplication in the parentheses first (8 x 5), then add 17.",
            explanation: "8 x 5 = 40. Then 40 + 17 = 57."
        },
        {
            type: "mcq",
            question: "The Glitch creates 3 holographic clones of Rod the AI. Rod #1 always tells the truth. Rod #2 always lies. Rod #3 says, 'Rod #2 is lying!' Who is the real Rod?",
            options: ["Rod #1", "Rod #2", "Rod #3", "None of them"],
            answer: "Rod #1",
            hint: "The real Rod always tells the truth to help Marty. Therefore, Rod #1 is the real one.",
            explanation: "Because Rod #1 always tells the truth, he is the reliable, real AI helper."
        },
        {
            type: "text",
            question: "To break the Glitch's firewall, Marty needs to enter the missing number: 100, 85, 70, 55, ___. What comes next?",
            answer: "40",
            hint: "Look at how much the numbers are shrinking by. Subtract 15 each time.",
            explanation: "The pattern subtracts 15. 55 - 15 = 40."
        },
        {
            type: "mcq",
            question: "The Glitch tries to delete the Star Map! It locks the file behind a math puzzle: I am an odd number. I am less than 30 but greater than 25. If you divide me by 3, you get 9. What am I?",
            options: ["25", "27", "29", "21"],
            answer: "27",
            hint: "What is 9 x 3?",
            explanation: "9 x 3 = 27. It is odd, and between 25 and 30."
        },
        {
            type: "text",
            question: "Arjun and Smithika reboot the thrusters. They need exactly 100 power units. They have four batteries that hold 15, 20, 25, and 30 units. Does adding all four batteries give them exactly 100 units? (Type Yes or No)",
            answer: "No",
            hint: "Add 15 + 20 + 25 + 30. Does it equal 100?",
            explanation: "15 + 20 + 25 + 30 = 90. They only have 90 units, which is not 100, so the answer is No."
        },
        
        // --- Phase 8: The Grand Finale ---
        {
            type: "mcq",
            question: "To get the final 10 power units, Taksh reroutes the solar grid. The grid provides 2 units of power for every star it scans. How many stars does it need to scan to get 10 units?",
            options: ["5", "10", "12", "20"],
            answer: "5",
            hint: "Divide 10 by 2.",
            explanation: "10 / 2 = 5 stars needed to generate 10 power units."
        },
        {
            type: "text",
            question: "The power is restored! The Star Map finally opens, revealing a hidden galaxy. The coordinates are (9 x 8) minus 12. What is the coordinate number?",
            answer: "60",
            hint: "First do 9 x 8. Then subtract 12 from your answer.",
            explanation: "9 x 8 = 72. Then 72 - 12 = 60."
        },
        {
            type: "mcq",
            question: "The map shows that the hidden galaxy is 800 light-years away. If the ship's hyper-drive can travel 100 light-years in a single jump, how many jumps will it take to get there?",
            options: ["8", "10", "80", "100"],
            answer: "8",
            hint: "Divide 800 by 100. (Think: 100 times what equals 800?)",
            explanation: "800 / 100 = 8 jumps."
        },
        {
            type: "text",
            question: "Before they jump, Rod says they need 3 energy crystals per person on the ship. There are 9 people on board (Marty, Arjun, Taksh, Ayaan, Advi, Smithika, Mom, Dad, and Rod's avatar). How many crystals do they need in total?",
            answer: "27",
            hint: "Multiply 9 people by 3 crystals each.",
            explanation: "9 x 3 = 27 energy crystals."
        },
        {
            type: "mcq",
            question: "As they enter hyperspace, Marty smiles. Explorer Team Alpha solved every puzzle! If they solved 5 puzzles per phase, and there were 8 phases, how many puzzles did they solve in total to beat the mission?",
            options: ["30", "35", "40", "45"],
            answer: "40",
            hint: "Multiply the number of puzzles (5) by the number of phases (8).",
            explanation: "5 x 8 = 40 puzzles solved! Mission Accomplished!"
        }
    ]
};
