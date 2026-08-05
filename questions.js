const missionConfig = {
  themeTitle: "🚀 Mission: Deep Space Rescue & Exploration",
  themeColor: "linear-gradient(135deg, #64748b, #1e293b)", 
  themeIcon: "🚀", 
  questions: [
    // SECTION 1: WARM-UP (Space Arithmetic)
    { 
      type: "text", 
      question: "1. Marty's rocket has 45 glowing energy crystals and Arjun's rocket has 38. How many energy crystals do they have in total?", 
      answer: "83",
      hint: "💡 Break it down! Add 40 + 30 first, then add 5 + 8.",
      explanation: "⭐ **Answer: 83!** \n40 + 30 = 70. And 5 + 8 = 13. Finally, 70 + 13 = 83 energy crystals."
    },
    { 
      type: "text", 
      question: "2. The AI Core gave Explorer Team Alpha 72 fuel cells for their mission. They used 19 of them flying to the Moon. How many fuel cells are left?", 
      answer: "53",
      hint: "💡 This is subtraction! Try taking away 20 from 72, and then adding 1 back.",
      explanation: "⭐ **Answer: 53!** \n72 - 20 = 52. Add 1 back because you only needed to subtract 19. 52 + 1 = 53."
    },
    { 
      type: "text", 
      question: "3. Taksh scanned 8 asteroid clusters. Each cluster contained 6 rare space diamonds. How many diamonds did Taksh find in total?", 
      answer: "48",
      hint: "💡 Use your multiplication skills! What is 8 groups of 6?",
      explanation: "⭐ **Answer: 48!** \n8 clusters x 6 diamonds = 48 diamonds."
    },
    { 
      type: "text", 
      question: "4. Mom baked 54 star-shaped cookies. She divided them equally among the 6 members of Explorer Team Alpha. How many cookies did each explorer get?", 
      answer: "9",
      hint: "💡 Divide 54 by the 6 explorers. What times 6 equals 54?",
      explanation: "⭐ **Answer: 9!** \n54 ÷ 6 people = 9 cookies for each person."
    },
    { 
      type: "text", 
      question: "5. A standard space rover requires 4 titanium wheels. If Smithika wants to build 12 rovers for her space base, how many wheels does she need?", 
      answer: "48",
      hint: "💡 Multiply the number of rovers by the number of wheels each one needs.",
      explanation: "⭐ **Answer: 48!** \n12 rovers x 4 wheels each = 48 titanium wheels."
    },
    { 
      type: "text", 
      question: "6. Dad needs 150 oxygen tanks for the long journey to Mars. He currently has 115. How many more does he need to collect?", 
      answer: "35",
      hint: "💡 How far away is 115 from 150? Find the difference!",
      explanation: "⭐ **Answer: 35!** \n150 - 115 = 35 more tanks needed."
    },
    { 
      type: "text", 
      question: "7. Advi found an alien treasure chest with 3 rows of storage slots. Each row has 9 slots. How many total storage slots are in the chest?", 
      answer: "27",
      hint: "💡 What is 3 times 9?",
      explanation: "⭐ **Answer: 27!** \n3 rows x 9 slots = 27 total slots."
    },
    { 
      type: "text", 
      question: "8. Ayaan's solar panels generate 15 units of power every minute. How much power will he have after 4 minutes?", 
      answer: "60",
      hint: "💡 Try doing 15 + 15 first, and then double that number!",
      explanation: "⭐ **Answer: 60!** \n15 x 2 = 30. 30 x 2 = 60 units of power."
    },
    { 
      type: "text", 
      question: "9. Marty's rocket hull has 25 shield points. The Glitch Man shoots a laser that takes away 9 points, but Rod uses a repair beam to heal 5 points. How many shield points does Marty have now?", 
      answer: "21",
      hint: "💡 Start with 25, subtract 9, then add 5.",
      explanation: "⭐ **Answer: 21!** \n25 - 9 = 16 shield points. 16 + 5 = 21 shield points."
    },
    { 
      type: "text", 
      question: "10. Smithika pilots her ship 85 space-miles North, then turns around and flies 28 miles South. How far away is she from her starting point?", 
      answer: "57",
      hint: "💡 Since she turned around and went back the way she came, this is a subtraction problem.",
      explanation: "⭐ **Answer: 57!** \n85 - 28 = 57 miles away from the start."
    },

    // SECTION 2: PATTERN DETECTIVE (Space Codes)
    { 
      type: "text", 
      question: "11. Look at the pattern of altitude readings from the space station: 14, 21, 28, 35, ____, 49. What is the missing altitude?", 
      answer: "42",
      hint: "💡 Check the difference between the numbers. They are counting up by a specific number!",
      explanation: "⭐ **Answer: 42!** \nThe readings are going up by 7 each time (multiples of 7). 35 + 7 = 42."
    },
    { 
      type: "text", 
      question: "12. The landing lights flash in a sequence: 3, 6, 12, 24, 48, ____. What is the next number in the flash sequence?", 
      answer: "96",
      hint: "💡 What happens to each number to get the next one? Try doubling it!",
      explanation: "⭐ **Answer: 96!** \nThe pattern doubles the number every time. 48 x 2 = 96."
    },
    { 
      type: "mcq", 
      question: "13. Dad placed navigation beacons in a repeating line: Blue, White, Silver, Blue, White, Silver... What color will the 10th beacon be?", 
      options: ["Blue", "White", "Silver", "Red"], 
      answer: "Blue",
      hint: "💡 The pattern repeats every 3 beacons. Count carefully up to 10!",
      explanation: "⭐ **Answer: Blue!** \nThe pattern is 3 beacons long. Beacons 3, 6, and 9 will all be Silver. That means beacon 10 starts the pattern over at Blue."
    },
    { 
      type: "text", 
      question: "14. A swarm of space bugs attacks the satellite: Wave 1 has 4 bugs, Wave 2 has 9, Wave 3 has 14, Wave 4 has 19. How many bugs will be in Wave 5?", 
      answer: "24",
      hint: "💡 How many more bugs appear in each new wave?",
      explanation: "⭐ **Answer: 24!** \nThe wave increases by 5 bugs each time. 19 + 5 = 24."
    },
    { 
      type: "mcq", 
      question: "15. Which of these vehicles does NOT belong in the Space Hangar? [Lunar Rover, Turbo Trike, Star Cruiser, Submarine, Warp Glider]", 
      options: ["Lunar Rover", "Submarine", "Turbo Trike", "Star Cruiser"], 
      answer: "Submarine",
      hint: "💡 Which of these vehicles is designed to go deep underwater instead of outer space?",
      explanation: "⭐ **Answer: Submarine!** \nA submarine explores the ocean, not outer space."
    },
    { 
      type: "text", 
      question: "16. Decode the ancient alien transmission: 100, 89, 78, 67, ____. What is the next number?", 
      answer: "56",
      hint: "💡 Look at how much the numbers are shrinking by. Subtract the second number from the first.",
      explanation: "⭐ **Answer: 56!** \nThe rule is to subtract 11 each time. 67 - 11 = 56."
    },
    { 
      type: "text", 
      question: "17. Advi tracks the orbit of a comet over 5 days (in thousands of miles): 12, 17, 22, 27, 32, ____. How far will it be on day 6?", 
      answer: "37",
      hint: "💡 The comet is moving the same distance every day. How much is it adding?",
      explanation: "⭐ **Answer: 37!** \nIt moves 5 thousand miles further every day. 32 + 5 = 37."
    },
    { 
      type: "text", 
      question: "18. A warp drive computer calculates using this rule: 'Multiply by 2, then subtract 1'. If the input is 7, what is the output number?", 
      answer: "13",
      hint: "💡 Follow the rule exactly in order! 7 x 2 = ?, then ? - 1.",
      explanation: "⭐ **Answer: 13!** \n7 x 2 = 14. 14 - 1 = 13."
    },
    { 
      type: "text", 
      question: "19. The space station's oxygen timer drops in this pattern: 150, 125, 100, 75, ____. What is the next number?", 
      answer: "50",
      hint: "💡 The timer is dropping by the same amount each time. Think about quarters in a dollar!",
      explanation: "⭐ **Answer: 50!** \nThe timer counts down by 25. 75 - 25 = 50."
    },
    { 
      type: "text", 
      question: "20. Mom built a pyramid of space crates. The top level has 1 crate, the second has 4, the third has 9, and the fourth has 16. How many crates are on the fifth level?", 
      answer: "25",
      hint: "💡 Notice a pattern? 1x1=1, 2x2=4, 3x3=9... try multiplying the level number by itself!",
      explanation: "⭐ **Answer: 25!** \nThese are square numbers! For the 5th level, 5 x 5 = 25 crates."
    },

    // SECTION 3: LOGIC LAB & DEDUCTION
    { 
      type: "text", 
      question: "21. Four space explorers (Marty, Taksh, Ayaan, Advi) ran a zero-gravity race. Taksh finished before Marty but after Ayaan. Advi finished before Ayaan. Who won 1st place? (Type their name)", 
      answer: "Advi",
      hint: "💡 Draw a line! If Advi beat Ayaan, and Ayaan beat Taksh, who is at the very front?",
      explanation: "⭐ **Answer: Advi!** \nThe order is: 1st Advi, 2nd Ayaan, 3rd Taksh, 4th Marty."
    },
    { 
      type: "mcq", 
      question: "22. The Plasma Blaster does more damage than the Laser Pistol. The Neutron Cannon does more damage than the Plasma Blaster. The Stun Gun does less damage than the Laser Pistol. Which weapon is the strongest?", 
      options: ["Plasma Blaster", "Laser Pistol", "Neutron Cannon", "Stun Gun"], 
      answer: "Neutron Cannon",
      hint: "💡 Order them from weakest to strongest based on the clues.",
      explanation: "⭐ **Answer: Neutron Cannon!** \nFrom weakest to strongest: Stun Gun -> Laser Pistol -> Plasma Blaster -> Neutron Cannon."
    },
    { 
      type: "mcq", 
      question: "23. Team Alpha has three spacesuits with different colored visors: red, blue, and green. Marty's suit does not have a green visor. Ayaan's suit has a red visor. What color visor does Marty's suit have?", 
      options: ["Red", "Blue", "Green", "Yellow"], 
      answer: "Blue",
      hint: "💡 Use elimination! If Ayaan has the red one, and Marty DOES NOT have the green one...",
      explanation: "⭐ **Answer: Blue!** \nSince Ayaan has Red, only Blue and Green are left. Since Marty doesn't have Green, he must have Blue!"
    },
    { 
      type: "text", 
      question: "24. If 3 floating robots can repair 12 broken satellites in one minute, how many satellites can 5 robots repair in one minute?", 
      answer: "20",
      hint: "💡 Find out how many satellites ONE robot repairs in a minute first (12 divided by 3).",
      explanation: "⭐ **Answer: 20!** \n3 robots = 12 satellites, so 1 robot = 4 satellites per minute. 5 robots x 4 = 20 satellites."
    },
    { 
      type: "text", 
      question: "25. Dad is thinking of a secret launch code coordinate. It is an even number between 20 and 25. It can be divided evenly by 11. What is the secret coordinate?", 
      answer: "22",
      hint: "💡 Write out the even numbers between 20 and 25: 22 and 24. Which one is in the 11 times table?",
      explanation: "⭐ **Answer: 22!** \n22 is even, between 20 and 25, and 22 ÷ 11 = 2."
    },
    { 
      type: "mcq", 
      question: "26. Whenever a black hole is near, the ship's alarm sounds. The ship's alarm is currently sounding. Does this mean a black hole is DEFINITELY near? (Hint: Could an asteroid hitting the ship also cause the alarm to sound?)", 
      options: ["Yes", "No"], 
      answer: "No",
      hint: "💡 Think like an engineer! Is a black hole the ONLY thing that triggers an alarm?",
      explanation: "⭐ **Answer: No!** \nWhile a black hole triggers the alarm, other emergencies (like asteroids or engine trouble) can also trigger it. So you can't be 100% sure it's a black hole!"
    },
    { 
      type: "text", 
      question: "27. Mom and Arjun build a solar pipeline 120 meters long. Blue pipes are 10 meters each and Green pipes are 15 meters each. If they use 6 Green pipes, how many Blue pipes do they need to finish the pipeline?", 
      answer: "3",
      hint: "💡 First, find out how much space the 6 Green pipes take up (6 x 15). Then subtract that from 120, and divide by 10!",
      explanation: "⭐ **Answer: 3!** \n6 Green pipes x 15 meters = 90 meters. 120 - 90 = 30 meters left to fill. 30 ÷ 10 width = 3 Blue pipes."
    },
    { 
      type: "text", 
      question: "28. Rod has a jetpack battery that lasts 90 minutes. Scouting takes 10 minutes per trip, and repairing takes 20 minutes per trip. If Rod repairs 2 satellites and scouts 3 zones, how many minutes of battery remain?", 
      answer: "20",
      hint: "💡 Calculate the total repairing time and total scouting time, then subtract them from 90.",
      explanation: "⭐ **Answer: 20!** \nRepairing: 2 x 20 = 40 mins. Scouting: 3 x 10 = 30 mins. Total used = 70. 90 - 70 = 20 minutes left."
    },
    { 
      type: "text", 
      question: "29. To open the Airlock, Taksh needs a 3-digit code. The first digit is 24 divided by 4. The second digit is the first digit minus 2. The third digit is zero. What is the code?", 
      answer: "640",
      hint: "💡 Find the first digit (24 ÷ 4). Then subtract 2 for the next one.",
      explanation: "⭐ **Answer: 640!** \nDigit 1: 24 ÷ 4 = 6. Digit 2: 6 - 2 = 4. Digit 3: 0. The code is 640."
    },
    { 
      type: "text", 
      question: "30. Sisira built 3 communications towers. The first is 18 meters tall. The second is half the height of the first. The third is 5 meters taller than the second. How tall is the third tower?", 
      answer: "14",
      hint: "💡 First find the height of the second tower by cutting 18 in half. Then add 5.",
      explanation: "⭐ **Answer: 14!** \nTower 1 = 18. Tower 2 = 9. Tower 3 = 9 + 5 = 14 meters tall."
    },

    // SECTION 4: ADVANCED MATH & MULTI-STEP
    { 
      type: "text", 
      question: "31. The AI Core gives Marty a function machine for fuel processing. The rule is: Multiply the input by 3, then subtract 2. If Marty puts in 7 fuel cells, what comes out?", 
      answer: "19",
      hint: "💡 Follow the rule: (7 x 3) - 2.",
      explanation: "⭐ **Answer: 19!** \n7 x 3 = 21. 21 - 2 = 19."
    },
    { 
      type: "text", 
      question: "32. Reverse Function Machine! A secret number of star-maps gets added to 15, and the output is 42. What was the secret input number?", 
      answer: "27",
      hint: "💡 Work backwards! If you added 15 to get 42, you need to subtract 15 from 42.",
      explanation: "⭐ **Answer: 27!** \n42 - 15 = 27."
    },
    { 
      type: "text", 
      question: "33. Exactly half of Explorer Team Alpha (which has 6 human members) are exploring the rings of Saturn. How many members are NOT at Saturn?", 
      answer: "3",
      hint: "💡 What is half of 6?",
      explanation: "⭐ **Answer: 3!** \nHalf of 6 is 3. If 3 are at Saturn, the other 3 are not."
    },
    { 
      type: "text", 
      question: "34. A meteor defense turret shoots lasers into the sky. If it shoots 2 lasers every 5 seconds, how many does it shoot in 25 seconds?", 
      answer: "10",
      hint: "💡 How many times does 5 seconds fit into 25 seconds? Multiply that by 2 lasers.",
      explanation: "⭐ **Answer: 10!** \n25 ÷ 5 = 5 bursts. 5 bursts x 2 lasers = 10 lasers."
    },
    { 
      type: "mcq", 
      question: "35. The Storage Taker freezes the world if the data storage goes over 1000 items. Current storage is 850. Smithika uploads 3 star-maps that take up 40 items each. Does the world freeze?", 
      options: ["Yes", "No"], 
      answer: "No",
      hint: "💡 Figure out how much total data she uploaded (3 x 40). Add that to 850. Is it over 1000?",
      explanation: "⭐ **Answer: No!** \n3 x 40 = 120 items. 850 + 120 = 970. Since 970 is less than 1000, the world is safe!"
    },
    
    // SECTION 5: BOSS BATTLES
    { 
      type: "text", 
      question: "36. BOSS BATTLE: Marty and Dad built two orbit paths. Path A takes 12 minutes to orbit and Path B takes 18 minutes to orbit. If two rockets launch on both paths at the exact same time, after how many minutes will both cross the starting line together for the first time?", 
      answer: "36",
      hint: "💡 You need to find the Least Common Multiple (LCM). Skip count by 12 and by 18 until you find a matching number!",
      explanation: "⭐ **Answer: 36 minutes!** \nPath A: 12, 24, 36, 48... \nPath B: 18, 36, 54... \nThe first number they share is 36!"
    },
    { 
      type: "text", 
      question: "37. BOSS BATTLE: In the Space Race, Team Alpha scored 15 points more than Team Stardust. Team Galaxy scored double Team Stardust's points. Total points for all three teams was 135. How many points did Team Stardust score?", 
      answer: "30",
      hint: "💡 Guess and check! Try giving Team Stardust 20 points, figure out the other teams, and add them up. If it's too low, try a bigger number.",
      explanation: "⭐ **Answer: 30!** \nIf Stardust = 30.\nAlpha = 30 + 15 = 45.\nGalaxy = 30 x 2 = 60.\nTotal: 30 + 45 + 60 = 135!"
    },
    { 
      type: "text", 
      question: "38. BOSS BATTLE: Crack Dad's 4-Digit Warp Code [A, B, C, D]: All digits are different numbers from 1 to 9. 'A' is the first prime number. 'B' is 'A' multiplied by 3. 'C' is 'B' minus 5. The sum of all 4 digits is 18. What is the 4-digit code?", 
      answer: "2619",
      hint: "💡 Take it one step at a time. The prime numbers start: 2, 3, 5, 7. Which one is the first one?",
      explanation: "⭐ **Answer: 2619!** \nStep 1: 'A' is the 1st prime number, so A=2.\nStep 2: 'B' = (2 x 3) = 6.\nStep 3: 'C' = 6 - 5 = 1.\nStep 4: A+B+C = 9. Since the total is 18, D must be 9. Code: 2619."
    },
    { 
      type: "text", 
      question: "39. BOSS BATTLE: Mom set up a 100-mile long warp tunnel with fuel stations every 10 miles and defense shields every 25 miles (both start at 0 miles). How many total locations along the tunnel have BOTH a fuel station and a shield?", 
      answer: "3",
      hint: "💡 Find where 10 and 25 meet! Count by 25s up to 100, and see which ones are also in the 10s column. Don't forget the starting line at 0!",
      explanation: "⭐ **Answer: 3 locations!** \nFuel stations are at 0, 10, 20...50...100.\nShields are at 0, 25, 50, 75, 100.\nThey overlap at 0, 50, and 100 (3 locations)."
    },
    { 
      type: "text", 
      question: "40. BOSS BATTLE: Taksh, Ayaan, Advi, and Smithika raced starfighters on a 300-lightyear circuit. Taksh traveled at 30 ly/day, Ayaan at 25 ly/day, Advi at 20 ly/day, and Smithika at 15 ly/day. How many total days passed between the time the 1st place ship finished and the time the last place ship finished?", 
      answer: "10",
      hint: "💡 First, find out how long it took 1st place to finish (300 ÷ 30). Then find out how long it took last place (300 ÷ 15). Subtract the difference!",
      explanation: "⭐ **Answer: 10 days!** \n1st Place (Taksh): 300 ÷ 30 = 10 days to finish.\nLast Place (Smithika): 300 ÷ 15 = 20 days to finish.\nDifference: 20 - 10 = 10 days."
    }
  ]
};
