const missionConfig = {
  themeTitle: "🟩 Mission: Block World Builders",
//  themeColor: "linear-gradient(135deg, #16a34a, #047857)", 
  themeColor: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2310b981' d='M44.7,-76.4C58.8,-69.3,71.8,-59.1,79.9,-45.4C88,-31.8,91.1,-14.7,89.5,1.6C88,17.9,81.8,33.4,72.3,46.1C62.7,58.8,49.8,68.7,35.3,75.3C20.8,81.9,4.7,85.1,-10.8,83.4C-26.3,81.6,-41.2,74.9,-54.1,65.3C-67,55.7,-77.9,43.2,-83.1,28.6C-88.3,14,-87.8,-2.7,-83.4,-18.1C-79,-33.5,-70.7,-47.5,-58.5,-55.1C-46.3,-62.7,-30.2,-63.9,-15.7,-70.8C-1.2,-77.8,11.7,-90.5,26.9,-90.9C42.2,-91.3,59.7,-79.4,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E\")"
  themeIcon: "⛏️", 
  questions: [
    // SECTION 1: WARM-UP (Inventory Math)
    { 
      type: "text", 
      question: "1. Marty mined 45 blocks of stone and 38 blocks of dirt. How many total blocks does he have in his inventory?", 
      answer: "83",
      hint: "💡 Try breaking it down: add 40 + 30 first, then add 5 + 8.",
      explanation: "⭐ **Answer: 83!** \n40 + 30 = 70. And 5 + 8 = 13. Finally, 70 + 13 = 83 blocks."
    },
    { 
      type: "text", 
      question: "2. Arjun had 64 wooden planks, but he used 18 of them to build a tiny hut. How many planks does he have left?", 
      answer: "46",
      hint: "💡 This is subtraction! Try taking away 20 from 64, and then adding 2 back.",
      explanation: "⭐ **Answer: 46!** \n64 - 20 = 44. Add 2 back because you only needed to subtract 18. 44 + 2 = 46."
    },
    { 
      type: "text", 
      question: "3. Taksh found 7 veins of coal. Each vein gave him 6 pieces of coal. How many pieces of coal did he mine in total?", 
      answer: "42",
      hint: "💡 Use your multiplication skills! What is 7 groups of 6?",
      explanation: "⭐ **Answer: 42!** \n7 veins x 6 pieces = 42 pieces of coal."
    },
    { 
      type: "text", 
      question: "4. Mom baked 48 virtual potatoes in the furnace. She divided them equally among Marty, Arjun, Ayaan, and Advi. How many potatoes did each person get?", 
      answer: "12",
      hint: "💡 Divide 48 by the number of people (4).",
      explanation: "⭐ **Answer: 12!** \n48 ÷ 4 people = 12 potatoes for each person."
    },
    { 
      type: "text", 
      question: "5. A basic crafting table requires 4 wooden planks. If Smithika wants to build 12 crafting tables for her giant factory, how many planks does she need?", 
      answer: "48",
      hint: "💡 Multiply the number of tables by the number of planks each one needs.",
      explanation: "⭐ **Answer: 48!** \n12 tables x 4 planks each = 48 wooden planks."
    },
    { 
      type: "text", 
      question: "6. Dad needs 150 iron ingots to build a railway. He currently has 115. How many more does he need to mine?", 
      answer: "35",
      hint: "💡 How far away is 115 from 150? Find the difference!",
      explanation: "⭐ **Answer: 35!** \n150 - 115 = 35 more ingots needed."
    },
    { 
      type: "text", 
      question: "7. Advi found a treasure chest with 3 rows of slots. Each row has 9 slots. How many total storage slots are in the chest?", 
      answer: "27",
      hint: "💡 What is 3 times 9?",
      explanation: "⭐ **Answer: 27!** \n3 rows x 9 slots = 27 total slots."
    },
    { 
      type: "text", 
      question: "8. Ayaan's digital farm produces 14 wheat every minute. How much wheat will he have after 5 minutes?", 
      answer: "70",
      hint: "💡 Try doing 10 x 5 first, then 4 x 5, and add them together.",
      explanation: "⭐ **Answer: 70!** \n10 x 5 = 50. 4 x 5 = 20. 50 + 20 = 70 wheat."
    },
    { 
      type: "text", 
      question: "9. Marty's health bar has 20 hearts. A shadow zombie hits him and takes away 7 hearts, but he eats a golden apple that heals 4 hearts. How many hearts does he have now?", 
      answer: "17",
      hint: "💡 Start with 20, subtract 7, then add 4.",
      explanation: "⭐ **Answer: 17!** \n20 - 7 = 13 hearts. 13 + 4 = 17 hearts."
    },
    { 
      type: "text", 
      question: "10. Smithika travels 85 blocks North, then turns around and travels 28 blocks South. How far away is she from where she started?", 
      answer: "57",
      hint: "💡 Since she turned around and went back the way she came, this is a subtraction problem.",
      explanation: "⭐ **Answer: 57!** \n85 - 28 = 57 blocks away from the start."
    },

    // SECTION 2: PATTERN DETECTIVE (World Generation)
    { 
      type: "text", 
      question: "11. Look at the pattern of block heights on the mountain: 14, 21, 28, 35, ____, 49. What is the missing height?", 
      answer: "42",
      hint: "💡 Check the difference between the numbers. They are counting up by a specific number!",
      explanation: "⭐ **Answer: 42!** \nThe blocks are going up by 7 each time (multiples of 7). 35 + 7 = 42."
    },
    { 
      type: "text", 
      question: "12. The redstone lamps flash in a sequence: 2, 4, 8, 16, 32, ____. What is the next number?", 
      answer: "64",
      hint: "💡 What happens to each number to get the next one? Try doubling it!",
      explanation: "⭐ **Answer: 64!** \nThe pattern doubles the number every time. 32 x 2 = 64."
    },
    { 
      type: "mcq", 
      question: "13. Dad placed colored wool blocks in a repeating line: Green, Blue, Yellow, Green, Blue, Yellow... What color will the 10th block be?", 
      options: ["Green", "Blue", "Yellow", "Red"], 
      answer: "Green",
      hint: "💡 The pattern repeats every 3 blocks. Count carefully up to 10!",
      explanation: "⭐ **Answer: Green!** \nThe pattern is 3 blocks long. 3, 6, and 9 will all be Yellow. That means block 10 starts the pattern over at Green."
    },
    { 
      type: "text", 
      question: "14. A growing zombie wave attacks the village: Wave 1 has 3 zombies, Wave 2 has 7, Wave 3 has 11, Wave 4 has 15. How many zombies will be in Wave 5?", 
      answer: "19",
      hint: "💡 How many more zombies appear in each new wave?",
      explanation: "⭐ **Answer: 19!** \nThe wave increases by 4 zombies each time. 15 + 4 = 19."
    },
    { 
      type: "mcq", 
      question: "15. Which of these Block World tools does NOT belong in the sequence? [Wooden Pickaxe, Stone Pickaxe, Iron Pickaxe, Diamond Pickaxe, Dirt Pickaxe]", 
      options: ["Wooden Pickaxe", "Stone Pickaxe", "Dirt Pickaxe", "Diamond Pickaxe"], 
      answer: "Dirt Pickaxe",
      hint: "💡 Which of these materials is too soft to make a real tool?",
      explanation: "⭐ **Answer: Dirt Pickaxe!** \nDirt is not a valid material for crafting tools in the game."
    },
    { 
      type: "text", 
      question: "16. Decode the secret ancient server code: 100, 89, 78, 67, ____. What is the next number?", 
      answer: "56",
      hint: "💡 Look at how much the numbers are shrinking by. Subtract the second number from the first.",
      explanation: "⭐ **Answer: 56!** \nThe rule is to subtract 11 each time. 67 - 11 = 56."
    },
    { 
      type: "text", 
      question: "17. Advi builds a pyramid. The top level has 1 block, the second level has 4, the third level has 9, and the fourth has 16. How many blocks are on the fifth level?", 
      answer: "25",
      hint: "💡 Notice a pattern? 1x1=1, 2x2=4, 3x3=9... try multiplying the level number by itself!",
      explanation: "⭐ **Answer: 25!** \nThese are square numbers! For the 5th level, 5 x 5 = 25 blocks."
    },
    { 
      type: "text", 
      question: "18. Arjun tracks his digging depth over 5 minutes: 12, 17, 22, 27, 32, ____. How deep will he be at minute 6?", 
      answer: "37",
      hint: "💡 He is digging the same amount of blocks every minute. How many is he adding?",
      explanation: "⭐ **Answer: 37!** \nHe digs 5 blocks deeper every minute. 32 + 5 = 37."
    },
    { 
      type: "text", 
      question: "19. A redstone clock ticks using this rule: 'Multiply by 2, then subtract 1'. If the input is 5, what is the next number in the pattern?", 
      answer: "9",
      hint: "💡 Follow the rule exactly in order! 5 x 2 = ?, then ? - 1.",
      explanation: "⭐ **Answer: 9!** \n5 x 2 = 10. 10 - 1 = 9."
    },
    { 
      type: "text", 
      question: "20. The server reboot timer drops in this pattern: 120, 105, 90, 75, ____. What is the next time?", 
      answer: "60",
      hint: "💡 The timer is dropping by the same amount each time. Find the difference!",
      explanation: "⭐ **Answer: 60!** \nThe timer counts down by 15. 75 - 15 = 60."
    },

    // SECTION 3: LOGIC LAB & WORD PROBLEMS
    { 
      type: "text", 
      question: "21. Four players (Marty, Taksh, Ayaan, Advi) ran a parkour course. Taksh finished before Marty but after Ayaan. Advi finished before Ayaan. Who won 1st place? (Type their name)", 
      answer: "Advi",
      hint: "💡 Draw a line! If Advi beat Ayaan, and Ayaan beat Taksh, who is at the very front?",
      explanation: "⭐ **Answer: Advi!** \nThe order is: 1st Advi, 2nd Ayaan, 3rd Taksh, 4th Marty."
    },
    { 
      type: "mcq", 
      question: "22. The Iron sword does more damage than the Stone sword. The Diamond sword does more damage than the Iron sword. The Gold sword does less damage than the Stone sword. Which sword is the strongest?", 
      options: ["Iron", "Stone", "Diamond", "Gold"], 
      answer: "Diamond",
      hint: "💡 Order them from weakest to strongest based on the clues.",
      explanation: "⭐ **Answer: Diamond!** \nFrom weakest to strongest: Gold -> Stone -> Iron -> Diamond."
    },
    { 
      type: "mcq", 
      question: "23. Team Alpha has three pet wolves with different collars: red, blue, and green. Marty's wolf does not have a green collar. Ayaan's wolf has a red collar. What color collar does Marty's wolf have?", 
      options: ["Red", "Blue", "Green", "Yellow"], 
      answer: "Blue",
      hint: "💡 Use elimination! If Ayaan has the red one, and Marty DOES NOT have the green one...",
      explanation: "⭐ **Answer: Blue!** \nSince Ayaan has Red, only Blue and Green are left. Since Marty doesn't have Green, he must have Blue!"
    },
    { 
      type: "text", 
      question: "24. If 3 automated furnaces can smelt 12 iron ores in one minute, how many iron ores can 5 automated furnaces smelt in one minute?", 
      answer: "20",
      hint: "💡 Find out how many ores ONE furnace smelts in a minute first (12 divided by 3).",
      explanation: "⭐ **Answer: 20!** \n3 furnaces = 12 ores, so 1 furnace = 4 ores per minute. 5 furnaces x 4 = 20 ores."
    },
    { 
      type: "text", 
      question: "25. Mom is thinking of a secret Y-coordinate for a diamond mine. It is an even number between 10 and 15. It can be divided evenly by 6. What is the secret coordinate?", 
      answer: "12",
      hint: "💡 Write out the even numbers between 10 and 15: 12 and 14. Which one is in the 6 times table?",
      explanation: "⭐ **Answer: 12!** \n12 is even, between 10 and 15, and 12 ÷ 6 = 2."
    },
    { 
      type: "mcq", 
      question: "26. Whenever it rains in Block World, the crops grow faster. The crops are currently growing faster. Does this mean it is DEFINITELY raining? (Hint: Could something else like bone meal make them grow faster?)", 
      options: ["Yes", "No"], 
      answer: "No",
      hint: "💡 Think like an engineer! Is rain the ONLY way to make crops grow fast?",
      explanation: "⭐ **Answer: No!** \nWhile rain makes them grow faster, using fertilizer (bone meal) also makes them grow faster. So you can't be 100% sure it's raining!"
    },
    { 
      type: "text", 
      question: "27. Dad and Arjun build a wall 120 blocks long. Blue blocks are 10 units wide and Green blocks are 15 units wide. If they use 6 Green blocks, how many Blue blocks do they need to finish the wall?", 
      answer: "3",
      hint: "💡 First, find out how much space the 6 Green blocks take up (6 x 15). Then subtract that from 120, and divide by 10!",
      explanation: "⭐ **Answer: 3!** \n6 Green blocks x 15 width = 90 units. 120 - 90 = 30 units left to fill. 30 ÷ 10 width = 3 Blue blocks."
    },
    { 
      type: "text", 
      question: "28. Rod has a jetpack battery that lasts 90 minutes. Flying takes 10 minutes per trip, and mining takes 20 minutes per trip. If Rod mines 2 times and flies 3 times, how many minutes of battery remain?", 
      answer: "20",
      hint: "💡 Calculate the total mining time and total flying time, then subtract them from 90.",
      explanation: "⭐ **Answer: 20!** \nMining: 2 x 20 = 40 mins. Flying: 3 x 10 = 30 mins. Total used = 70. 90 - 70 = 20 minutes left."
    },
    { 
      type: "text", 
      question: "29. To open the Server Vault, Taksh needs a 3-digit code. The first digit is 18 divided by 3. The second digit is the first digit minus 2. The third digit is zero. What is the code?", 
      answer: "640",
      hint: "💡 Find the first digit (18 ÷ 3). Then subtract 2 for the next one.",
      explanation: "⭐ **Answer: 640!** \nDigit 1: 18 ÷ 3 = 6. Digit 2: 6 - 2 = 4. Digit 3: 0. The code is 640."
    },
    { 
      type: "text", 
      question: "30. Sisira built 3 towers. The first is 18 blocks high. The second is half the height of the first. The third is 5 blocks taller than the second. How high is the third tower?", 
      answer: "14",
      hint: "💡 First find the height of the second tower by cutting 18 in half. Then add 5.",
      explanation: "⭐ **Answer: 14!** \nTower 1 = 18. Tower 2 = 9. Tower 3 = 9 + 5 = 14 blocks high."
    },

    // SECTION 4: ADVANCED MATH & MULTI-STEP CHALLENGES
    { 
      type: "text", 
      question: "31. The AI Core gives Marty a function machine for smelting. The rule is: Multiply the input by 3, then subtract 2. If Marty puts in 7 ores, what comes out?", 
      answer: "19",
      hint: "💡 Follow the rule: (7 x 3) - 2.",
      explanation: "⭐ **Answer: 19!** \n7 x 3 = 21. 21 - 2 = 19."
    },
    { 
      type: "text", 
      question: "32. Reverse Function Machine! A secret number of blocks gets added to 15, and the output is 42. What was the secret input number?", 
      answer: "27",
      hint: "💡 Work backwards! If you added 15 to get 42, you need to subtract 15 from 42.",
      explanation: "⭐ **Answer: 27!** \n42 - 15 = 27."
    },
    { 
      type: "text", 
      question: "33. Exactly half of Explorer Team Alpha (which has 6 human members) are exploring the Nether. How many members are NOT in the Nether?", 
      answer: "3",
      hint: "💡 What is half of 6?",
      explanation: "⭐ **Answer: 3!** \nHalf of 6 is 3. If 3 are in the Nether, the other 3 are not."
    },
    { 
      type: "text", 
      question: "34. A dispenser shoots arrows into the air. If it shoots 2 arrows every 5 seconds, how many does it shoot in 25 seconds?", 
      answer: "10",
      hint: "💡 How many times does 5 seconds fit into 25 seconds? Multiply that by 2 arrows.",
      explanation: "⭐ **Answer: 10!** \n25 ÷ 5 = 5 bursts. 5 bursts x 2 arrows = 10 arrows."
    },
    { 
      type: "mcq", 
      question: "35. The server crashes if the entity count goes over 1000 items. The current count is 850. Smithika spawns 3 herds of cows, and each herd has 40 cows. Does the server crash?", 
      options: ["Yes", "No"], 
      answer: "No",
      hint: "💡 Figure out how many total cows she spawned (3 x 40). Add that to 850. Is it over 1000?",
      explanation: "⭐ **Answer: No!** \n3 x 40 = 120 cows. 850 + 120 = 970. Since 970 is less than 1000, the server is safe!"
    },
    
    // SECTION 5: BOSS BATTLES
    { 
      type: "text", 
      question: "36. BOSS BATTLE: Marty and Dad built two minecart tracks. Track A takes 12 seconds per lap and Track B takes 18 seconds per lap. If minecarts launch on both loops at the exact same time, after how many seconds will both carts cross the starting line together for the first time?", 
      answer: "36",
      hint: "💡 You need to find the Least Common Multiple (LCM). Skip count by 12 and by 18 until you find a matching number!",
      explanation: "⭐ **Answer: 36 seconds!** \nTrack A: 12, 24, 36, 48... \nTrack B: 18, 36, 54... \nThe first number they share is 36!"
    },
    { 
      type: "text", 
      question: "37. BOSS BATTLE: In the Block Building Championship, Team Alpha scored 15 points more than Team Builder. Team Crafter scored double Team Builder's points. Total points for all three teams was 135. How many points did Team Builder score?", 
      answer: "30",
      hint: "💡 Guess and check! Try giving Team Builder 20 points, figure out the other teams, and add them up. If it's too low, try a bigger number.",
      explanation: "⭐ **Answer: 30!** \nIf Builder = 30.\nAlpha = 30 + 15 = 45.\nCrafter = 30 x 2 = 60.\nTotal: 30 + 45 + 60 = 135!"
    },
    { 
      type: "text", 
      question: "38. BOSS BATTLE: Crack Dad's 4-Digit Server Code [A, B, C, D]: All digits are different numbers from 1 to 9. 'A' is the second prime number. 'B' is 'A' multiplied by 2, plus 1. 'C' is 'B' minus 5. The sum of all 4 digits is 18. What is the 4-digit code?", 
      answer: "3726",
      hint: "💡 Take it one step at a time. The prime numbers start: 2, 3, 5, 7. Which one is the second one?",
      explanation: "⭐ **Answer: 3726!** \nStep 1: 'A' is the 2nd prime number, so A=3.\nStep 2: 'B' = (3 x 2) + 1 = 7.\nStep 3: 'C' = 7 - 5 = 2.\nStep 4: A+B+C = 12. Since the total is 18, D must be 6. Code: 3726."
    },
    { 
      type: "text", 
      question: "39. BOSS BATTLE: Mom set up a 100-block long highway with torches every 10 blocks and banners every 25 blocks (both start at 0 blocks). How many total locations along the track have BOTH a torch and a banner?", 
      answer: "3",
      hint: "💡 Find where 10 and 25 meet! Count by 25s up to 100, and see which ones are also in the 10s column. Don't forget the starting line at 0!",
      explanation: "⭐ **Answer: 3 locations!** \nTorches are at 0, 10, 20...50...100.\nBanners are at 0, 25, 50, 75, 100.\nThey overlap at 0, 50, and 100 (3 locations)."
    },
    { 
      type: "text", 
      question: "40. BOSS BATTLE: Taksh, Ayaan, Advi, and Smithika raced boats on a 300-meter ice circuit. Taksh traveled at 30 m/s, Ayaan at 25 m/s, Advi at 20 m/s, and Smithika at 15 m/s. How many total seconds passed between the time the 1st place boat finished and the time the last place boat finished?", 
      answer: "10",
      hint: "💡 First, find out how long it took 1st place to finish (300 ÷ 30). Then find out how long it took last place (300 ÷ 15). Subtract the difference!",
      explanation: "⭐ **Answer: 10 seconds!** \n1st Place (Taksh): 300 ÷ 30 = 10 seconds to finish.\nLast Place (Smithika): 300 ÷ 15 = 20 seconds to finish.\nDifference: 20 - 10 = 10 seconds."
    }
  ]
};

