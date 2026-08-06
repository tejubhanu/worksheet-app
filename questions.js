const missionConfig = {
  themeTitle: "🤖 Mission: BattleBots Arena Clash",
  themeColor: "linear-gradient(135deg, #b91c1c, #7f1d1d)", 
  themeIcon: "🤖", 
  questions: [
    // SECTION 1: WARM-UP (BattleBots Arithmetic)
    { 
      type: "text", 
      question: "1. Marty's battlebot has 55 titanium armor plates and Arjun's has 37. How many armor plates do they have in total?", 
      answer: "92",
      hint: "💡 Try breaking it down: add 50 + 30 first, then add 5 + 7.",
      explanation: "⭐ **Answer: 92!** \n50 + 30 = 80. And 5 + 7 = 12. Finally, 80 + 12 = 92 armor plates."
    },
    { 
      type: "text", 
      question: "2. The AI Core set up 82 spike traps in the arena. During the match, 29 of them were triggered. How many traps are still active?", 
      answer: "53",
      hint: "💡 This is subtraction! Try taking away 30 from 82, and then adding 1 back.",
      explanation: "⭐ **Answer: 53!** \n82 - 30 = 52. Add 1 back because you only needed to subtract 29. 52 + 1 = 53."
    },
    { 
      type: "text", 
      question: "3. Taksh installs 7 heavy-duty motors. Each motor requires 6 reinforced gears. How many gears did Taksh use in total?", 
      answer: "42",
      hint: "💡 Use your multiplication skills! What is 7 groups of 6?",
      explanation: "⭐ **Answer: 42!** \n7 motors x 6 gears = 42 gears."
    },
    { 
      type: "text", 
      question: "4. Mom baked 48 gear-shaped cookies for Explorer Team Alpha. She divided them equally among Marty, Arjun, Ayaan, and Advi. How many cookies did each person get?", 
      answer: "12",
      hint: "💡 Divide 48 by the number of people (4). What times 4 equals 48?",
      explanation: "⭐ **Answer: 12!** \n48 ÷ 4 people = 12 cookies for each person."
    },
    { 
      type: "text", 
      question: "5. A standard scout-bot needs 4 grip wheels. If Smithika wants to build 15 scout-bots, how many grip wheels does she need?", 
      answer: "60",
      hint: "💡 Multiply the number of bots by the number of wheels each one needs. Try (10 x 4) + (5 x 4).",
      explanation: "⭐ **Answer: 60!** \n15 bots x 4 wheels each = 60 grip wheels."
    },
    { 
      type: "text", 
      question: "6. Dad needs 200 steel bolts to repair the arena walls. He currently has 135. How many more does he need to buy?", 
      answer: "65",
      hint: "💡 How far away is 135 from 200? Find the difference!",
      explanation: "⭐ **Answer: 65!** \n200 - 135 = 65 more bolts needed."
    },
    { 
      type: "text", 
      question: "7. Advi built a launch pad with 4 racks. Each rack holds 8 mini-drones. How many total mini-drones are ready for launch?", 
      answer: "32",
      hint: "💡 What is 4 times 8?",
      explanation: "⭐ **Answer: 32!** \n4 racks x 8 drones = 32 total mini-drones."
    },
    { 
      type: "text", 
      question: "8. Ayaan's spinner bot hits the practice dummy 14 times every minute. How many hits will it land after 5 minutes?", 
      answer: "70",
      hint: "💡 Try doing 10 x 5 first, then 4 x 5, and add them together.",
      explanation: "⭐ **Answer: 70!** \n10 x 5 = 50. 4 x 5 = 20. 50 + 20 = 70 hits."
    },
    { 
      type: "text", 
      question: "9. Marty's bot has 30 health points. The Glitch Man's bot does 12 points of damage, but Rod the AI uses a repair beam to heal 8 points. How many health points does Marty have now?", 
      answer: "26",
      hint: "💡 Start with 30, subtract 12, then add 8.",
      explanation: "⭐ **Answer: 26!** \n30 - 12 = 18 health points. 18 + 8 = 26 health points."
    },
    { 
      type: "text", 
      question: "10. Smithika drives her bot 95 centimeters forward, then reverses 38 centimeters. How far away is her bot from the starting line?", 
      answer: "57",
      hint: "💡 Since she backed up the way she came, this is a subtraction problem.",
      explanation: "⭐ **Answer: 57!** \n95 - 38 = 57 centimeters away from the start."
    },

    // SECTION 2: PATTERN DETECTIVE (Arena Codes)
    { 
      type: "text", 
      question: "11. Look at the pattern of armor upgrades: 15, 22, 29, 36, ____, 50. What is the missing number?", 
      answer: "43",
      hint: "💡 Check the difference between the numbers. They are counting up by a specific number!",
      explanation: "⭐ **Answer: 43!** \nThe upgrades go up by 7 each time. 36 + 7 = 43."
    },
    { 
      type: "text", 
      question: "12. The motor RPM sequence is: 4, 8, 16, 32, ____. What is the next number in the sequence?", 
      answer: "64",
      hint: "💡 What happens to each number to get the next one? Try doubling it!",
      explanation: "⭐ **Answer: 64!** \nThe pattern doubles the number every time. 32 x 2 = 64."
    },
    { 
      type: "mcq", 
      question: "13. Dad placed warning lights around the arena in a repeating line: Red, Orange, Yellow, Red, Orange, Yellow... What color will the 10th light be?", 
      options: ["Red", "Orange", "Yellow", "Green"], 
      answer: "Red",
      hint: "💡 The pattern repeats every 3 lights. Count carefully up to 10!",
      explanation: "⭐ **Answer: Red!** \nThe pattern is 3 lights long. Lights 3, 6, and 9 will all be Yellow. That means light 10 starts the pattern over at Red."
    },
    { 
      type: "text", 
      question: "14. A wave of rogue bots attacks: Wave 1 has 5 bots, Wave 2 has 11, Wave 3 has 17, Wave 4 has 23. How many bots will be in Wave 5?", 
      answer: "29",
      hint: "💡 How many more bots appear in each new wave?",
      explanation: "⭐ **Answer: 29!** \nThe wave increases by 6 bots each time. 23 + 6 = 29."
    },
    { 
      type: "mcq", 
      question: "15. Which of these is NOT a BattleBot weapon? [Flipper, Spinner, Hammer, Feather Pillow]", 
      options: ["Flipper", "Spinner", "Feather Pillow", "Hammer"], 
      answer: "Feather Pillow",
      hint: "💡 Which of these would be way too soft to do any damage in an arena?",
      explanation: "⭐ **Answer: Feather Pillow!** \nA pillow is definitely not an engineering weapon."
    },
    { 
      type: "text", 
      question: "16. Decode the secret arena transmission: 120, 108, 96, 84, ____. What is the next number?", 
      answer: "72",
      hint: "💡 Look at how much the numbers are shrinking by. Subtract the second number from the first.",
      explanation: "⭐ **Answer: 72!** \nThe rule is to subtract 12 each time. 84 - 12 = 72."
    },
    { 
      type: "text", 
      question: "17. Advi tracks her bot's total weight (in pounds) as she adds armor day by day: 15, 20, 25, 30, ____. How much will it weigh on day 5?", 
      answer: "35",
      hint: "💡 The bot is getting heavier by the same amount every day. How much is it adding?",
      explanation: "⭐ **Answer: 35!** \nIt gains 5 pounds every day. 30 + 5 = 35."
    },
    { 
      type: "text", 
      question: "18. A weapon computer calculates using this rule: 'Multiply by 2, then subtract 3'. If the input is 8, what is the output number?", 
      answer: "13",
      hint: "💡 Follow the rule exactly in order! 8 x 2 = ?, then ? - 3.",
      explanation: "⭐ **Answer: 13!** \n8 x 2 = 16. 16 - 3 = 13."
    },
    { 
      type: "text", 
      question: "19. The arena hazard timer drops in this pattern: 200, 175, 150, 125, ____. What is the next number?", 
      answer: "100",
      hint: "💡 The timer is dropping by the same amount each time. Think about quarters in a dollar!",
      explanation: "⭐ **Answer: 100!** \nThe timer counts down by 25. 125 - 25 = 100."
    },
    { 
      type: "text", 
      question: "20. Arjun built a pyramid of spare gears. The top level has 1 gear, the second has 4, the third has 9, and the fourth has 16. How many gears are on the fifth level?", 
      answer: "25",
      hint: "💡 Notice a pattern? 1x1=1, 2x2=4, 3x3=9... try multiplying the level number by itself!",
      explanation: "⭐ **Answer: 25!** \nThese are square numbers! For the 5th level, 5 x 5 = 25 gears."
    },

    // SECTION 3: LOGIC LAB & DEDUCTION
    { 
      type: "text", 
      question: "21. Four players (Marty, Taksh, Ayaan, Advi) ran an obstacle course with their bots. Taksh finished before Marty but after Ayaan. Advi finished before Ayaan. Who won 1st place? (Type their name)", 
      answer: "Advi",
      hint: "💡 Draw a line! If Advi beat Ayaan, and Ayaan beat Taksh, who is at the very front?",
      explanation: "⭐ **Answer: Advi!** \nThe order is: 1st Advi, 2nd Ayaan, 3rd Taksh, 4th Marty."
    },
    { 
      type: "mcq", 
      question: "22. The Hammer does more damage than the Flipper. The Spinner does more damage than the Hammer. The Drone does less damage than the Flipper. Which weapon is the strongest?", 
      options: ["Hammer", "Flipper", "Spinner", "Drone"], 
      answer: "Spinner",
      hint: "💡 Order them from weakest to strongest based on the clues.",
      explanation: "⭐ **Answer: Spinner!** \nFrom weakest to strongest: Drone -> Flipper -> Hammer -> Spinner."
    },
    { 
      type: "mcq", 
      question: "23. Team Alpha has three bots painted different colors: red, blue, and green. Marty's bot is not green. Ayaan's bot is red. What color is Marty's bot?", 
      options: ["Red", "Blue", "Green", "Yellow"], 
      answer: "Blue",
      hint: "💡 Use elimination! If Ayaan has the red one, and Marty DOES NOT have the green one...",
      explanation: "⭐ **Answer: Blue!** \nSince Ayaan has Red, only Blue and Green are left. Since Marty doesn't have Green, he must have Blue!"
    },
    { 
      type: "text", 
      question: "24. If 3 robotic repair arms can fix 15 dents in one minute, how many dents can 4 robotic arms fix in one minute?", 
      answer: "20",
      hint: "💡 Find out how many dents ONE arm fixes in a minute first (15 divided by 3).",
      explanation: "⭐ **Answer: 20!** \n3 arms = 15 dents, so 1 arm = 5 dents per minute. 4 arms x 5 = 20 dents."
    },
    { 
      type: "text", 
      question: "25. Dad is thinking of a secret locker code. It is an even number between 30 and 40. It can be divided evenly by 9. What is the secret code?", 
      answer: "36",
      hint: "💡 Write out the even numbers between 30 and 40. Which one is in the 9 times table?",
      explanation: "⭐ **Answer: 36!** \n36 is even, between 30 and 40, and 36 ÷ 9 = 4."
    },
    { 
      type: "mcq", 
      question: "26. Whenever a robot is on fire, it produces smoke. A robot in the arena is currently producing smoke. Does this mean the robot is DEFINITELY on fire? (Hint: Could dry ice or an exhaust pipe also make smoke?)", 
      options: ["Yes", "No"], 
      answer: "No",
      hint: "💡 Think like an engineer! Is fire the ONLY thing that makes smoke/fog?",
      explanation: "⭐ **Answer: No!** \nWhile fire makes smoke, other things like fog machines or exhaust pipes can also produce smoke. So you can't be 100% sure it's fire!"
    },
    { 
      type: "text", 
      question: "27. Mom and Arjun build a safety wall 150 centimeters long. Blue panels are 10 cm each and Green panels are 20 cm each. If they use 5 Green panels, how many Blue panels do they need to finish the wall?", 
      answer: "5",
      hint: "💡 First, find out how much space the 5 Green panels take up (5 x 20). Then subtract that from 150, and divide by 10!",
      explanation: "⭐ **Answer: 5!** \n5 Green panels x 20 cm = 100 cm. 150 - 100 = 50 cm left to fill. 50 ÷ 10 width = 5 Blue panels."
    },
    { 
      type: "text", 
      question: "28. Rod has a battery that lasts 100 minutes. Welding takes 10 minutes per job, and scanning takes 20 minutes per job. If Rod does 2 welding jobs and 3 scanning jobs, how many minutes of battery remain?", 
      answer: "20",
      hint: "💡 Calculate the total welding time and total scanning time, then subtract them from 100.",
      explanation: "⭐ **Answer: 20!** \nWelding: 2 x 10 = 20 mins. Scanning: 3 x 20 = 60 mins. Total used = 80. 100 - 80 = 20 minutes left."
    },
    { 
      type: "text", 
      question: "29. To open the Parts Vault, Taksh needs a 3-digit code. The first digit is 36 divided by 6. The second digit is the first digit minus 2. The third digit is zero. What is the code?", 
      answer: "640",
      hint: "💡 Find the first digit (36 ÷ 6). Then subtract 2 for the next one.",
      explanation: "⭐ **Answer: 640!** \nDigit 1: 36 ÷ 6 = 6. Digit 2: 6 - 2 = 4. Digit 3: 0. The code is 640."
    },
    { 
      type: "text", 
      question: "30. Sisira built 3 bots. The first is 20 inches tall. The second is half the height of the first. The third is 4 inches taller than the second. How tall is the third bot?", 
      answer: "14",
      hint: "💡 First find the height of the second bot by cutting 20 in half. Then add 4.",
      explanation: "⭐ **Answer: 14!** \nBot 1 = 20. Bot 2 = 10. Bot 3 = 10 + 4 = 14 inches tall."
    },

    // SECTION 4: ADVANCED MATH & MULTI-STEP
    { 
      type: "text", 
      question: "31. The AI Core gives Marty a function machine for balancing gears. The rule is: Multiply the input by 4, then subtract 5. If Marty puts in 6 gears, what comes out?", 
      answer: "19",
      hint: "💡 Follow the rule: (6 x 4) - 5.",
      explanation: "⭐ **Answer: 19!** \n6 x 4 = 24. 24 - 5 = 19."
    },
    { 
      type: "text", 
      question: "32. Reverse Function Machine! A secret number of screws gets added to 18, and the output is 45. What was the secret input number?", 
      answer: "27",
      hint: "💡 Work backwards! If you added 18 to get 45, you need to subtract 18 from 45.",
      explanation: "⭐ **Answer: 27!** \n45 - 18 = 27."
    },
    { 
      type: "text", 
      question: "33. Exactly half of Explorer Team Alpha (which has 6 human members) are in the repair pits. How many members are NOT in the repair pits?", 
      answer: "3",
      hint: "💡 What is half of 6?",
      explanation: "⭐ **Answer: 3!** \nHalf of 6 is 3. If 3 are in the pits, the other 3 are not."
    },
    { 
      type: "text", 
      question: "34. A turret shoots 3 defense discs every 4 seconds. How many discs does it shoot in 20 seconds?", 
      answer: "15",
      hint: "💡 How many times does 4 seconds fit into 20 seconds? Multiply that by 3 discs.",
      explanation: "⭐ **Answer: 15!** \n20 ÷ 4 = 5 bursts. 5 bursts x 3 discs = 15 discs."
    },
    { 
      type: "mcq", 
      question: "35. The Storage Taker freezes the arena if the memory goes over 1000 items. Current memory is 800. Smithika adds 4 logic upgrades that take 45 memory each. Does the arena freeze?", 
      options: ["Yes", "No"], 
      answer: "No",
      hint: "💡 Figure out how much memory she added (4 x 45). Add that to 800. Is it over 1000?",
      explanation: "⭐ **Answer: No!** \n4 x 45 = 180 items. 800 + 180 = 980. Since 980 is less than 1000, the arena is safe!"
    },
    
    // SECTION 5: BOSS BATTLES
    { 
      type: "text", 
      question: "36. BOSS BATTLE: Marty and Dad built two test tracks. Track A takes 15 seconds to complete and Track B takes 20 seconds to complete. If two bots launch on both tracks at the exact same time, after how many seconds will both cross the starting line together for the first time?", 
      answer: "60",
      hint: "💡 You need to find the Least Common Multiple (LCM). Skip count by 15 and by 20 until you find a matching number!",
      explanation: "⭐ **Answer: 60 seconds!** \nTrack A: 15, 30, 45, 60, 75... \nTrack B: 20, 40, 60, 80... \nThe first number they share is 60!"
    },
    { 
      type: "text", 
      question: "37. BOSS BATTLE: In the Arena Clash, Team Alpha scored 20 points more than Team Smash. Team Crush scored double Team Smash's points. Total points for all three teams was 140. How many points did Team Smash score?", 
      answer: "30",
      hint: "💡 Guess and check! Try giving Team Smash 20 points, figure out the other teams, and add them up. If it's too low, try a bigger number.",
      explanation: "⭐ **Answer: 30!** \nIf Smash = 30.\nAlpha = 30 + 20 = 50.\nCrush = 30 x 2 = 60.\nTotal: 30 + 50 + 60 = 140!"
    },
    { 
      type: "text", 
      question: "38. BOSS BATTLE: Crack Dad's 4-Digit Override Code [A, B, C, D]: All digits are different numbers from 1 to 9. 'A' is the second prime number. 'B' is 'A' multiplied by 2, plus 1. 'C' is 'B' minus 5. The sum of all 4 digits is 18. What is the 4-digit code?", 
      answer: "3726",
      hint: "💡 Take it one step at a time. The prime numbers start: 2, 3, 5, 7. Which one is the second one?",
      explanation: "⭐ **Answer: 3726!** \nStep 1: 'A' is the 2nd prime number, so A=3.\nStep 2: 'B' = (3 x 2) + 1 = 7.\nStep 3: 'C' = 7 - 5 = 2.\nStep 4: A+B+C = 12. Since the total is 18, D must be 6. Code: 3726."
    },
    { 
      type: "text", 
      question: "39. BOSS BATTLE: Mom set up a 100-foot hazard track with flame traps every 10 feet and spike traps every 20 feet (both start at 0 feet). How many total locations along the track have BOTH a flame trap and a spike trap?", 
      answer: "6",
      hint: "💡 Find where 10 and 20 meet! Count by 20s up to 100, and see which ones are also in the 10s column. Don't forget the starting line at 0!",
      explanation: "⭐ **Answer: 6 locations!** \nFlames are at 0, 10, 20...100.\nSpikes are at 0, 20, 40, 60, 80, 100.\nThey overlap at 0, 20, 40, 60, 80, and 100 (6 locations)."
    },
    { 
      type: "text", 
      question: "40. BOSS BATTLE: Taksh, Ayaan, Advi, and Smithika raced bots on a 300-meter circuit. Taksh traveled at 30 m/s, Ayaan at 25 m/s, Advi at 20 m/s, and Smithika at 15 m/s. How many total seconds passed between the time the 1st place bot finished and the time the last place bot finished?", 
      answer: "10",
      hint: "💡 First, find out how long it took 1st place to finish (300 ÷ 30). Then find out how long it took last place (300 ÷ 15). Subtract the difference!",
      explanation: "⭐ **Answer: 10 seconds!** \n1st Place (Taksh): 300 ÷ 30 = 10 seconds to finish.\nLast Place (Smithika): 300 ÷ 15 = 20 seconds to finish.\nDifference: 20 - 10 = 10 seconds."
    }
  ]
};
