const missionConfig = {
  themeTitle: "🟩 Mission: Block World Builders",
  themeColor: "linear-gradient(135deg, #16a34a, #047857)", 
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
      question: "23. Team Alpha has three pet
