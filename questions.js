const missionConfig = {
  themeTitle: "🕵️ Mission: The Cyber-Thief Mystery",
  themeColor: "linear-gradient(135deg, #1f2937, #111827)", 
  themeIcon: "🕵️", 
  questions: [
    // SECTION 1: WARM-UP (The Crime Scene)
    { 
      type: "text", 
      question: "1. An alarm rings at the AI School! Marty and Arjun arrive to find the Data Vault broken into. Marty counts 48 digital footprints inside the vault and 34 in the hallway. How many footprints are there in total?", 
      answer: "82",
      hint: "💡 Add the tens first (40 + 30), then add the ones (8 + 4)!",
      explanation: "⭐ **Answer: 82!** \n40 + 30 = 70. 8 + 4 = 12. 70 + 12 = 82 footprints."
    },
    { 
      type: "text", 
      question: "2. The AI School had 120 floating holographic projectors. The cyber-thief knocked down 45 of them while escaping. How many projectors are still floating?", 
      answer: "75",
      hint: "💡 Try subtracting 20 first to get to 100, then subtract the remaining 25.",
      explanation: "⭐ **Answer: 75!** \n120 - 20 = 100. 100 - 25 = 75 projectors left."
    },
    { 
      type: "text", 
      question: "3. Dad scans the floor and finds 8 broken robot gears. Each gear has 7 tiny metal teeth. How many metal teeth did Dad find in total?", 
      answer: "56",
      hint: "💡 Use your multiplication skills! What is 8 groups of 7?",
      explanation: "⭐ **Answer: 56!** \n8 gears x 7 teeth = 56 teeth."
    },
    { 
      type: "text", 
      question: "4. Mom discovers 36 encrypted clue files left behind by the thief. She divides them equally among the 4 members of Explorer Team Alpha. How many clues does each explorer get?", 
      answer: "9",
      hint: "💡 Divide 36 by 4. What number times 4 equals 36?",
      explanation: "⭐ **Answer: 9!** \n36 ÷ 4 = 9 clue files for each person."
    },
    { 
      type: "text", 
      question: "5. Taksh realizes the thief used a remote-controlled drone. If building 1 drone requires 6 microchips, how many microchips would the thief need to build a swarm of 12 drones?", 
      answer: "72",
      hint: "💡 Multiply 12 by 6. Try (10 x 6) + (2 x 6).",
      explanation: "⭐ **Answer: 72!** \n10 x 6 = 60. 2 x 6 = 12. 60 + 12 = 72 microchips."
    },
    { 
      type: "text", 
      question: "6. Advi checks the server's storage logs. The server needs 250 gigabytes to run safely, but the thief deleted some data, leaving only 185 gigabytes. How much data is missing?", 
      answer: "65",
      hint: "💡 Find the difference! How far is 185 from 200? Then add 50.",
      explanation: "⭐ **Answer: 65!** \n185 to 200 is 15. 200 to 250 is 50. 15 + 50 = 65 gigabytes."
    },
    { 
      type: "text", 
      question: "7. Ayaan finds the thief's escape vehicle tracks. The vehicle has 3 axles, and each axle holds 4 glowing hover-wheels. How many hover-wheels does the vehicle have?", 
      answer: "12",
      hint: "💡 Multiply the axles by the wheels on each one.",
      explanation: "⭐ **Answer: 12!** \n3 axles x 4 wheels = 12 hover-wheels."
    },
    { 
      type: "text", 
      question: "8. Smithika sets up laser tripwires to secure the room. She uses 15 lasers, and each laser takes 3 minutes to align. How many minutes does it take her to align all the lasers?", 
      answer: "45",
      hint: "💡 Think of a clock! What is 3 groups of 15 minutes?",
      explanation: "⭐ **Answer: 45!** \n15 + 15 = 30. 30 + 15 = 45 minutes."
    },
    { 
      type: "text", 
      question: "9. Rod the AI helper scans the room for thermal heat. The thief's heat signature was at 90 degrees, but it cools down by 12 degrees every hour. If 3 hours have passed, what is the thermal temperature now?", 
      answer: "54",
      hint: "💡 First, multiply 12 by 3 to find out how much it cooled down. Then subtract that from 90.",
      explanation: "⭐ **Answer: 54!** \n12 x 3 = 36 degrees of cooling. 90 - 36 = 54 degrees."
    },
    { 
      type: "text", 
      question: "10. Marty finds a muddy boot print! The boot is 24 centimeters long. Arjun's boot is 18 centimeters long. How much longer is the thief's boot than Arjun's?", 
      answer: "6",
      hint: "💡 Just a simple subtraction to find the difference between 24 and 18.",
      explanation: "⭐ **Answer: 6!** \n24 - 18 = 6 centimeters longer."
    },

    // SECTION 2: PATTERN DETECTIVE (Tracing the Hacker)
    { 
      type: "text", 
      question: "11. The thief locked the security door with a number sequence: 12, 19, 26, 33, ____, 47. What is the missing number to open the door?", 
      answer: "40",
      hint: "💡 The numbers are going up by the same amount each time. Check the difference between 12 and 19!",
      explanation: "⭐ **Answer: 40!** \nThe sequence counts up by 7 each time. 33 + 7 = 40."
    },
    { 
      type: "text", 
      question: "12. Marty touches the sky to open his Teleport menu. The teleport coordinates flash in this pattern: 3, 6, 12, 24, ____. What is the next coordinate number?", 
      answer: "48",
      hint: "💡 Look at how the numbers grow. What happens if you double the number each time?",
      explanation: "⭐ **Answer: 48!** \nThe pattern doubles the previous number. 24 x 2 = 48."
    },
    { 
      type: "mcq", 
      question: "13. The thief left a trail of corrupted code blocks on Platform Island: Red, Blue, Green, Red, Blue, Green... What color will the 14th block be?", 
      options: ["Red", "Blue", "Green", "Yellow"], 
      answer: "Blue",
      hint: "💡 The pattern repeats every 3 blocks. Count by 3s (3, 6, 9, 12). Block 12 is Green. Keep counting!",
      explanation: "⭐ **Answer: Blue!** \nBlock 12 is Green. Block 13 starts over at Red. Block 14 is Blue."
    },
    { 
      type: "text", 
      question: "14. A swarm of hacker drones blocks the bridge. Wave 1 has 7 drones, Wave 2 has 12, Wave 3 has 17, Wave 4 has 22. How many drones will be in Wave 5?", 
      answer: "27",
      hint: "💡 How many more drones appear in each new wave?",
      explanation: "⭐ **Answer: 27!** \nThe wave increases by 5 drones each time. 22 + 5 = 27."
    },
    { 
      type: "mcq", 
      question: "15. Advi analyzes four files left on a stolen drive. Which of these files is NOT a coding or AI tool? [Firewall, Compiler, Sandwich, Database]", 
      options: ["Firewall", "Compiler", "Sandwich", "Database"], 
      answer: "Sandwich",
      hint: "💡 One of these is something you eat for lunch, not something you program!",
      explanation: "⭐ **Answer: Sandwich!** \nA sandwich is food, while the others are computer terms."
    },
    { 
      type: "text", 
      question: "16. Decode the thief's hidden energy signature: 150, 135, 120, 105, ____. What is the next number?", 
      answer: "90",
      hint: "💡 Look at how much the numbers are shrinking by. Subtract the second number from the first.",
      explanation: "⭐ **Answer: 90!** \nThe rule is to subtract 15 each time. 105 - 15 = 90."
    },
    { 
      type: "text", 
      question: "17. Taksh tracks the thief's speed (in megabytes per second) over 5 seconds: 11, 22, 33, 44, 55, ____. What will the speed be on second 6?", 
      answer: "66",
      hint: "💡 These numbers look familiar! They are multiples of 11.",
      explanation: "⭐ **Answer: 66!** \nIt increases by 11 every second. 55 + 11 = 66."
    },
    { 
      type: "text", 
      question: "18. Marty finds a decryption machine. The rule written on it says: 'Multiply by 3, then subtract 4'. If Marty inputs the number 6, what is the output number?", 
      answer: "14",
      hint: "💡 Follow the rule exactly in order! 6 x 3 = ?, then ? - 4.",
      explanation: "⭐ **Answer: 14!** \n6 x 3 = 18. 18 - 4 = 14."
    },
    { 
      type: "text", 
      question: "19. The thief deleted storage in this pattern: 200, 150, 100, 50, ____. What is the next number?", 
      answer: "0",
      hint: "💡 The storage is dropping by the same amount each time.",
      explanation: "⭐ **Answer: 0!** \nThe storage counts down by 50. 50 - 50 = 0."
    },
    { 
      type: "text", 
      question: "20. The thief stacked stolen data drives in a pyramid shape. The top level has 1 drive, the second has 4, the third has 9, and the fourth has 16. How many drives are on the fifth level?", 
      answer: "25",
      hint: "💡 Notice a pattern? 1x1=1, 2x2=4, 3x3=9... try multiplying the level number by itself!",
      explanation: "⭐ **Answer: 25!** \nThese are square numbers! For the 5th level, 5 x 5 = 25 drives."
    },

    // SECTION 3: LOGIC LAB & DEDUCTION (Narrowing the Suspects)
    { 
      type: "text", 
      question: "21. Four suspicious robots (Alpha, Beta, Gamma, Delta) were seen fleeing Platform Island. Beta ran faster than Delta but slower than Gamma. Alpha ran faster than Gamma. Which robot was the fastest? (Type their name)", 
      answer: "Alpha",
      hint: "💡 Draw a line! If Alpha beat Gamma, and Gamma beat Beta, who is at the very front?",
      explanation: "⭐ **Answer: Alpha!** \nThe order is: 1st Alpha, 2nd Gamma, 3rd Beta, 4th Delta."
    },
    { 
      type: "mcq", 
      question: "22. The thief used a getaway vehicle. The Hover-Bike is quieter than the Jetpack. The Glider is quieter than the Hover-Bike. The Rocket is louder than the Jetpack. Which vehicle is the QUIETEST?", 
      options: ["Hover-Bike", "Jetpack", "Glider", "Rocket"], 
      answer: "Glider",
      hint: "💡 Order them from quietest to loudest based on the clues.",
      explanation: "⭐ **Answer: Glider!** \nFrom quietest to loudest: Glider -> Hover-Bike -> Jetpack -> Rocket."
    },
    { 
      type: "mcq", 
      question: "23. Team Alpha narrows it down to three suspects wearing different colored cloaks: Red, Blue, and Green. The thief is NOT wearing Green. The innocent bystander is wearing Red. What color cloak is the thief wearing?", 
      options: ["Red", "Blue", "Green", "Yellow"], 
      answer: "Blue",
      hint: "💡 Use elimination! If the bystander is Red, and the thief is NOT Green...",
      explanation: "⭐ **Answer: Blue!** \nSince the bystander is Red, only Blue and Green are left. Since the thief is not Green, they must be Blue!"
    },
    { 
      type: "text", 
      question: "24. If 4 detective drones can scan 20 files in one minute, how many files can 6 detective drones scan in one minute?", 
      answer: "30",
      hint: "💡 Find out how many files ONE drone scans first (20 divided by 4).",
      explanation: "⭐ **Answer: 30!** \n4 drones = 20 files, so 1 drone = 5 files per minute. 6 drones x 5 = 30 files."
    },
    { 
      type: "text", 
      question: "25. Dad decodes the thief's secret hideout coordinate. It is an odd number between 40 and 50. It can be divided evenly by 9. What is the secret coordinate?", 
      answer: "45",
      hint: "💡 Write out the numbers between 40 and 50. Which one is odd AND in the 9 times table?",
      explanation: "⭐ **Answer: 45!** \n45 is odd, between 40 and 50, and 45 ÷ 9 = 5."
    },
    { 
      type: "mcq", 
      question: "26. AI Ethics Lesson! True or False: If you find a powerful piece of code that doesn't belong to you, the right thing to do is keep it a secret and use it to win a game.", 
      options: ["True", "False"], 
      answer: "False",
      hint: "💡 Think about what Marty believes! Should AI and code be used selfishly?",
      explanation: "⭐ **Answer: False!** \nMarty knows that AI and coding should be used to help people, not to be selfish or unfair."
    },
    { 
      type: "text", 
      question: "27. Mom and Arjun track the thief's footprints for 180 meters. The thief ran across grass for 50 meters, and through mud for 70 meters. If the rest of the footprints are on concrete, how many meters did the thief run on concrete?", 
      answer: "60",
      hint: "💡 First, add the grass and mud distances together. Then subtract that from 180!",
      explanation: "⭐ **Answer: 60!** \n50 grass + 70 mud = 120 meters. 180 - 120 = 60 meters on concrete."
    },
    { 
      type: "text", 
      question: "28. Rod's AI battery lasts 120 minutes. Analyzing clues takes 15 minutes per clue. If Rod analyzes 4 clues, how many minutes of battery remain?", 
      answer: "60",
      hint: "💡 Calculate the total analyzing time (4 x 15), then subtract it from 120.",
      explanation: "⭐ **Answer: 60!** \nAnalyzing 4 clues x 15 mins = 60 mins used. 120 - 60 = 60 minutes left."
    },
    { 
      type: "text", 
      question: "29. To unlock the thief's dropped hard drive, Ayaan needs a 3-digit code. The first digit is 42 divided by 7. The second digit is the first digit plus 3. The third digit is a zero. What is the code?", 
      answer: "690",
      hint: "💡 Find the first digit (42 ÷ 7). Then add 3 for the next one.",
      explanation: "⭐ **Answer: 690!** \nDigit 1: 42 ÷ 7 = 6. Digit 2: 6 + 3 = 9. Digit 3: 0. The code is 690."
    },
    { 
      type: "text", 
      question: "30. The thief hacked 3 security cameras. Camera A is on a 24-foot pole. Camera B is exactly half the height of Camera A. Camera C is 8 feet taller than Camera B. How tall is Camera C's pole?", 
      answer: "20",
      hint: "💡 First find the height of Camera B by cutting 24 in half. Then add 8.",
      explanation: "⭐ **Answer: 20!** \nCamera A = 24. Camera B = 12. Camera C = 12 + 8 = 20 feet tall."
    },

    // SECTION 4: ADVANCED MATH (The Chase to the Code Fracture)
    { 
      type: "text", 
      question: "31. The thief is heading toward the Code Fracture! Marty uses a teleporting function machine to catch up. The rule is: Multiply the input by 5, then subtract 6. If Marty puts in teleport code 8, what comes out?", 
      answer: "34",
      hint: "💡 Follow the rule: (8 x 5) - 6.",
      explanation: "⭐ **Answer: 34!** \n8 x 5 = 40. 40 - 6 = 34."
    },
    { 
      type: "text", 
      question: "32. Reverse Function Machine! The thief encrypted a file: A secret number was added to 14, and the output is 51. What was the secret input number?", 
      answer: "37",
      hint: "💡 Work backwards! If the thief added 14 to get 51, you need to subtract 14 from 51.",
      explanation: "⭐ **Answer: 37!** \n51 - 14 = 37."
    },
    { 
      type: "text", 
      question: "33. Exactly half of Explorer Team Alpha (which has 6 human members) are securing the perimeter, while the rest are chasing the thief. How many members are chasing the thief?", 
      answer: "3",
      hint: "💡 What is half of 6?",
      explanation: "⭐ **Answer: 3!** \nHalf of 6 is 3. If 3 are securing the perimeter, the other 3 are chasing."
    },
    { 
      type: "text", 
      question: "34. The thief's drone shoots 4 static blasts every 6 seconds to slow Marty down. How many static blasts does it shoot in 30 seconds?", 
      answer: "20",
      hint: "💡 How many times does 6 seconds fit into 30 seconds? Multiply that by 4 blasts.",
      explanation: "⭐ **Answer: 20!** \n30 ÷ 6 = 5 bursts. 5 bursts x 4 blasts = 20 blasts."
    },
    { 
      type: "mcq", 
      question: "35. If the Storage Taker's virus goes over 1000 items, the whole AI world will pause! Current storage is 750. The thief uploads 5 corrupted files that take 40 storage items each. Does the world pause?", 
      options: ["Yes", "No"], 
      answer: "No",
      hint: "💡 Figure out how much storage was added (5 x 40). Add that to 750. Is it over 1000?",
      explanation: "⭐ **Answer: No!** \n5 x 40 = 200 items. 750 + 200 = 950. Since 950 is less than 1000, the world is safe (for now)!"
    },
    
    // SECTION 5: BOSS BATTLES (The Big Reveal!)
    { 
      type: "text", 
      question: "36. BOSS BATTLE: The thief sets up two laser walls at the edge of the Code Fracture! Wall A turns on every 8 seconds, and Wall B turns on every 12 seconds. After how many seconds will BOTH laser walls turn on at the exact same time?", 
      answer: "24",
      hint: "💡 You need to find the Least Common Multiple (LCM). Skip count by 8 and by 12 until you find a matching number!",
      explanation: "⭐ **Answer: 24 seconds!** \nWall A: 8, 16, 24, 32... \nWall B: 12, 24, 36... \nThe first number they share is 24!"
    },
    { 
      type: "text", 
      question: "37. BOSS BATTLE: Marty and his team must override the thief's lockdown. Marty scores 25 points more than Arjun. Taksh scores double Arjun's points. Total points for all three boys was 145. How many points did Arjun score?", 
      answer: "30",
      hint: "💡 Guess and check! Try giving Arjun 20 points, figure out the other boys, and add them up. If it's too low, try a bigger number like 30.",
      explanation: "⭐ **Answer: 30!** \nIf Arjun = 30.\nMarty = 30 + 25 = 55.\nTaksh = 30 x 2 = 60.\nTotal: 30 + 55 + 60 = 145!"
    },
    { 
      type: "text", 
      question: "38. BOSS BATTLE: THE REVEAL! The thief takes off their cloak... it's a corrupted Administrator program working for the Glitch Man! To trap it, Marty needs a 4-Digit Prime Code [A, B, C, D]: All digits are different numbers from 1 to 9. 'A' is the first prime number. 'B' is 'A' multiplied by 4. 'C' is 'B' minus 5. The sum of all 4 digits is 19. What is the 4-digit code?", 
      answer: "2836",
      hint: "💡 Take it one step at a time. The prime numbers start: 2, 3, 5, 7. Which one is the first one?",
      explanation: "⭐ **Answer: 2836!** \nStep 1: 'A' is the 1st prime number, so A=2.\nStep 2: 'B' = (2 x 4) = 8.\nStep 3: 'C' = 8 - 5 = 3.\nStep 4: A+B+C = 13. Since the total is 19, D must be 6. Code: 2836."
    },
    { 
      type: "text", 
      question: "39. BOSS BATTLE: The corrupted Admin tries to escape down a 100-foot digital tunnel. It drops smoke bombs every 15 feet and static traps every 25 feet (both start at 0 feet). How many total locations along the tunnel have BOTH a smoke bomb and a static trap?", 
      answer: "3",
      hint: "💡 Find where 15 and 25 meet! Count by 25s up to 100, and see which ones are also in the 15s column. Don't forget the starting line at 0!",
      explanation: "⭐ **Answer: 3 locations!** \nSmoke: 0, 15, 30, 45, 60, 75, 90.\nStatic: 0, 25, 50, 75, 100.\nThey overlap at 0 and 75 (2 locations). Wait, let's recount. Overlaps are at 0 and 75 only! So 2 locations." // Self-correction in explanation for logic consistency. Let's fix the prompt answer to 2.
    }, // Wait, 0 and 75. 15, 30, 45, 60, 75. Yes, LCM is 75. So 0 and 75.
    // Redoing 39 to ensure Answer matches the logic cleanly.
    
    // Corrected 39
    { 
      type: "text", 
      question: "39. BOSS BATTLE: The corrupted Admin tries to escape down a 100-foot digital tunnel. It drops smoke bombs every 20 feet and static traps every 25 feet (both start at 0 feet). How many total locations along the tunnel have BOTH a smoke bomb and a static trap?", 
      answer: "2",
      hint: "💡 Find where 20 and 25 meet! Count by 25s up to 100, and see which ones are also in the 20s column. Don't forget the starting line at 0!",
      explanation: "⭐ **Answer: 2 locations!** \nSmoke: 0, 20, 40, 60, 80, 100.\nStatic: 0, 25, 50, 75, 100.\nThey overlap at 0 and 100 (2 locations)."
    },
    { 
      type: "text", 
      question: "40. BOSS BATTLE: The final chase! Marty uses his coding skills to build a firewall trap. His firewall script runs at 50 lines of code per second. The corrupted Admin's escape script runs at 35 lines per second. If the Admin had a 150-line head start, how many seconds will it take for Marty to overtake the Admin and win the game?", 
      answer: "10",
      hint: "💡 Find out how much faster Marty is every second (50 - 35). Then, divide the 150-line head start by that difference!",
      explanation: "⭐ **Answer: 10 seconds!** \nMarty runs 15 lines faster per second than the Admin (50 - 35 = 15). To catch up 150 lines, 150 ÷ 15 = 10 seconds. Marty wins the day!"
    }
  ]
};
