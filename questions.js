const missionConfig = {
  themeTitle: "🏎️ Mission: Hot Wheels Ultimate Track Challenge",
  themeColor: "linear-gradient(135deg, #0284c7, #16a34a)", 
  themeIcon: "🏎️", 
  questions: [
    // SECTION 1: WARM-UP 
    { 
      type: "text", 
      question: "1. Dad built a Hot Wheels track with 54 straight pieces and 38 curved pieces. How many total track pieces did Dad use?", 
      answer: "92",
      hint: "💡 Try breaking it down! Add 50 + 30 first, then add the 4 and the 8.",
      explanation: "⭐ **Answer: 92!** \n50 + 30 = 80. Then 4 + 8 = 12. Finally, 80 + 12 = 92 total track pieces."
    },
    { 
      type: "text", 
      question: "2. Mom set up a booster that increased car speed by 47 mph. If Taksh's car was going 38 mph before entering, what is its speed now in mph?", 
      answer: "85",
      hint: "💡 You need to add the two speeds together! What is 47 + 38?",
      explanation: "⭐ **Answer: 85 mph!** \nTaksh was going 38 mph, and gained 47 mph. 38 + 47 = 85."
    },
    { 
      type: "text", 
      question: "3. Marty needs 120 points to qualify for the Hot Wheels Grand Prix. He currently has 73 points. How many more points does he need?", 
      answer: "47",
      hint: "💡 This is a subtraction problem. How far away is 73 from 100? Then add 20 more to reach 120!",
      explanation: "⭐ **Answer: 47 points!** \n120 - 73 = 47. You need 47 more points to qualify."
    },
    { 
      type: "text", 
      question: "4. Arjun launched his RC Twin Mill 7 times on the track. Each launch completed 6 full loops. How many total loops did it complete?", 
      answer: "42",
      hint: "💡 Use multiplication! What is 7 groups of 6?",
      explanation: "⭐ **Answer: 42 loops!** \n7 launches x 6 loops each = 42 loops total."
    },
    { 
      type: "text", 
      question: "5. Ayaan has 8 box sets of Hot Wheels cars. Each set contains 6 cars. How many cars does Ayaan have in total?", 
      answer: "48",
      hint: "💡 Think of your multiplication tables. What is 8 times 6?",
      explanation: "⭐ **Answer: 48 cars!** \n8 boxes x 6 cars in each box = 48."
    },

    // SECTION 2: PATTERNS & LOGIC
    { 
      type: "text", 
      question: "6. Look at the speed booster pattern on the track: 12, 19, 26, 33, ____, 47. What number fills the blank?", 
      answer: "40",
      hint: "💡 Find the rule! How much do you have to add to 12 to get 19? Apply that same rule to 33.",
      explanation: "⭐ **Answer: 40!** \nThe rule is to add 7 each time. 33 + 7 = 40."
    },
    { 
      type: "mcq", 
      question: "7. Dad installed signal lights along the Hot Wheels track in a repeating pattern: Red, Blue, Green, Green, Red, Blue, Green, Green... What color is the 9th light?", 
      options: ["Red", "Blue", "Green", "Yellow"], 
      answer: "Red",
      hint: "💡 The pattern is exactly 4 colors long: [Red, Blue, Green, Green]. Count the blocks!",
      explanation: "⭐ **Answer: Red!** \nThe pattern repeats every 4 lights. Lights 1-4 are the first block, 5-8 are the second block. Light 9 starts the third block, so it is Red!"
    },
    { 
      type: "mcq", 
      question: "8. Four racers (Marty, Taksh, Ayaan, Advi) competed. Taksh finished before Marty but after Ayaan. Advi finished before Ayaan. Who won 1st place?", 
      options: ["Marty", "Taksh", "Ayaan", "Advi"], 
      answer: "Advi",
      hint: "💡 Draw a line on paper! If Taksh is behind Ayaan, and Advi is ahead of Ayaan, who is at the very front?",
      explanation: "⭐ **Answer: Advi!** \nThe order is: 1st Advi, 2nd Ayaan, 3rd Taksh, 4th Marty."
    },
    { 
      type: "mcq", 
      question: "9. Marty, Taksh, and Ayaan each own a different Hot Wheels car: Twin Mill, Bone Shaker, and Rodger Dodger. Marty does not own Twin Mill. Taksh owns Rodger Dodger. Which car does Ayaan own?", 
      options: ["Twin Mill", "Bone Shaker", "Rodger Dodger", "None"], 
      answer: "Twin Mill",
      hint: "💡 Use process of elimination. If Taksh has Rodger Dodger, and Marty DOES NOT have Twin Mill, what car must Marty have?",
      explanation: "⭐ **Answer: Twin Mill!** \nTaksh has Rodger Dodger. That leaves Twin Mill and Bone Shaker. Since Marty doesn't have Twin Mill, Marty must have Bone Shaker. That leaves Twin Mill for Ayaan!"
    },
    { 
      type: "text", 
      question: "10. If 4 booster ramps launch 20 Hot Wheels cars in 2 minutes, how many cars can 6 booster ramps launch in 3 minutes?", 
      answer: "45",
      hint: "💡 Find out how many cars ONE ramp launches in ONE minute first!",
      explanation: "⭐ **Answer: 45!** \n4 ramps launch 20 cars in 2 mins. So 4 ramps launch 10 cars in 1 min. That means 1 ramp launches 2.5 cars per minute. 6 ramps x 2.5 cars = 15 cars per minute. For 3 minutes: 15 x 3 = 45 cars."
    },

    // SECTION 3: BOSS BATTLES
    { 
      type: "text", 
      question: "11. BOSS BATTLE: Marty and Dad built two track loops. Loop A takes 16 seconds per lap and Loop B takes 24 seconds per lap. If cars launch on both loops at the exact same time, after how many seconds will both cars cross the starting line together for the first time?", 
      answer: "48",
      hint: "💡 You need to find the Least Common Multiple (LCM). Skip count by 16 and skip count by 24 until you find a matching number!",
      explanation: "⭐ **Answer: 48 seconds!** \nLoop A times: 16, 32, 48, 64... \nLoop B times: 24, 48, 72... \nThe first number they share is 48!"
    },
    { 
      type: "text", 
      question: "12. BOSS BATTLE: In the Hot Wheels Championship, Team Alpha scored 15 points more than Team Stunt. Team Speed scored double Team Stunt's points. Total points for all three teams was 135. How many points did Team Stunt score?", 
      answer: "30",
      hint: "💡 Guess and check! Try giving Team Stunt 20 points, figure out the other teams, and add them up. If it's too low, try a bigger number for Team Stunt.",
      explanation: "⭐ **Answer: 30!** \nIf Stunt = 30.\nAlpha = 30 + 15 = 45.\nSpeed = 30 x 2 = 60.\nTotal: 30 + 45 + 60 = 135!"
    },
    { 
      type: "text", 
      question: "13. BOSS BATTLE: Crack Dad's 4-Digit Master Track Code [A, B, C, D]. 'A' is the third prime number. 'B' is 'A' multiplied by 2, minus 3. 'C' is 'B' minus 4. The sum of all 4 digits is 21. What is the 4-digit code?", 
      answer: "5736",
      hint: "💡 Take it one step at a time. The prime numbers start like this: 2, 3, 5, 7, 11. Which one is the third one?",
      explanation: "⭐ **Answer: 5736!** \nStep 1: 'A' is the 3rd prime number (2, 3, 5), so A=5.\nStep 2: 'B' = (5 x 2) - 3 = 7.\nStep 3: 'C' = 7 - 4 = 3.\nStep 4: A + B + C = 15. Since the total is 21, D must be 6. Code: 5736."
    },
    { 
      type: "text", 
      question: "14. BOSS BATTLE: Mom set up a 120-foot Hot Wheels track with speed boosters every 15 feet and track flags every 20 feet (both start at 0 feet). How many total locations along the track have BOTH a booster and a flag?", 
      answer: "3",
      hint: "💡 Find where 15 and 20 meet! What is the lowest number that both 15 and 20 can divide evenly into? Don't forget to include the starting line at 0 feet!",
      explanation: "⭐ **Answer: 3 locations!** \nBoosters: 0, 15, 30, 45, 60, 75, 90, 105, 120.\nFlags: 0, 20, 40, 60, 80, 100, 120.\nThey overlap at 0 feet, 60 feet, and 120 feet (3 locations)."
    },
    { 
      type: "text", 
      question: "15. BOSS BATTLE: To open the Hot Wheels Storage Chest, Smithika needs a 3-digit code. The first digit is 36 divided by 4. The second digit is half of the first digit rounded down. The third digit is the first digit minus 3. What is the code?", 
      answer: "946",
      hint: "💡 Start with the first digit: What is 36 divided by 4? Then take that number and cut it in half.",
      explanation: "⭐ **Answer: 946!** \nDigit 1: 36 ÷ 4 = 9.\nDigit 2: Half of 9 is 4.5. Rounded down, that is 4.\nDigit 3: 9 - 3 = 6.\nThe code is 946."
    }
  ]
};
