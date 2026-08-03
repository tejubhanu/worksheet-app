const missionConfig = {
  themeTitle: "🏎️ Mission: Hot Wheels Ultimate Track Challenge",
  themeColor: "linear-gradient(135deg, #0284c7, #16a34a)", 
  themeIcon: "🏎️", 
  questions: [
    // SECTION 1: WARM-UP (10% - 20% Increase in Math & Logic Complexity)
    { type: "text", question: "1. Dad built a Hot Wheels track with 54 straight pieces and 38 curved pieces. How many total track pieces did Dad use?", answer: "92" },
    { type: "text", question: "2. Mom set up a booster that increased car speed by 47 mph. If Taksh's car was going 38 mph before entering, what is its speed now in mph?", answer: "85" },
    { type: "text", question: "3. Marty needs 120 points to qualify for the Hot Wheels Grand Prix. He currently has 73 points. How many more points does he need?", answer: "47" },
    { type: "text", question: "4. Arjun launched his RC Twin Mill 7 times on the track. Each launch completed 6 full loops. How many total loops did it complete?", answer: "42" },
    { type: "text", question: "5. Ayaan has 8 box sets of Hot Wheels cars. Each set contains 6 cars. How many cars does Ayaan have in total?", answer: "48" },
    { type: "text", question: "6. Advi has a 96 cm track launcher. She divides it into 8 equal launcher segments. How long is each segment in cm?", answer: "12" },
    { type: "text", question: "7. Smithika starts a Hot Wheels endurance race at 3:35 PM. The race runs for 45 minutes. What time does the race end? (Format: 4:20)", answer: "4:20" },
    { type: "text", question: "8. Dad programmed a digital speedometer code. The code is a 3-digit number with 6 hundreds, 14 tens, and 5 ones. What is the code?", answer: "745" },
    { type: "text", question: "9. Mom organized 63 die-cast cars equally onto 9 display shelves. How many cars are on each shelf?", answer: "7" },
    { type: "text", question: "10. Taksh's Hot Wheels car travels at 84 meters per minute. How many meters will it travel in 15 seconds? (Hint: 15 seconds is 1/4 of a minute)", answer: "21" },

    // SECTION 2: CORE PRACTICE
    { type: "text", question: "11. Marty and Dad built a super track that is 144 inches long. If each track segment is 9 inches long, how many segments did they connect?", answer: "16" },
    { type: "text", question: "12. Arjun has 3 bags of Hot Wheels spare wheels with 24 wheels in each bag. He uses 28 wheels to upgrade his cars. How many wheels remain?", answer: "44" },
    { type: "text", question: "13. Mom timed Ayaan's track run: Lap 1 took 18 seconds, Lap 2 took 15 seconds, and Lap 3 took 19 seconds. What was the total time for all 3 laps in seconds?", answer: "52" },
    { type: "text", question: "14. Advi bought 4 packs of track connectors with 15 connectors in each pack. She shared 18 connectors with Smithika. How many connectors does Advi have left?", answer: "42" },
    { type: "text", question: "15. Taksh built a Hot Wheels car launcher function: Output Speed = (Input Power x 4) + 7. If he inputs 8 power units, what is the output speed?", answer: "39" },
    { type: "text", question: "16. Smithika counted 135 die-cast cars in her collection. 48 are red, 37 are blue, and the rest are green. How many green cars does Smithika have?", answer: "50" },
    { type: "text", question: "17. Dad bought 8 packs of track risers for $6 each. He paid with a $100 bill. How much change should Dad receive in dollars?", answer: "52" },
    { type: "text", question: "18. Marty's car completes a circuit in 14 seconds, while Arjun's car takes 21 seconds. How many seconds faster is Marty's car over 4 completed circuits?", answer: "28" },
    { type: "text", question: "19. Mom bakes 72 track-shaped cookies and places them into boxes of 8. If she sells each box for $5, how much money does she earn in dollars?", answer: "45" },
    { type: "text", question: "20. Ayaan and Advi built 6 double-loop towers. If each loop requires 14 building bricks, how many bricks did they use in total?", answer: "168" },

    // SECTION 3: PATTERN DETECTIVE
    { type: "text", question: "21. Look at the speed booster pattern on the track: 12, 19, 26, 33, ____, 47. What number fills the blank?", answer: "40" },
    { type: "text", question: "22. The digital track timer counts down in a sequence: 128, 64, 32, 16, ____. What is the next number?", answer: "8" },
    { type: "mcq", question: "23. Dad installed signal lights along the Hot Wheels track in a repeating pattern: Red, Blue, Green, Green, Red, Blue, Green, Green... What color is the 18th light?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Blue" },
    { type: "text", question: "24. Taksh notices his car speed follows a growing pattern: 3, 6, 11, 18, 27, ____. What is the next speed number?", answer: "38" },
    { type: "text", question: "25. Mom sets up a track pattern using colors: Blue, Green, Blue, Blue, Green, Blue, Blue, Blue, Green... How many Blue tracks come right after the 3rd Green track?", answer: "4" },
    { type: "text", question: "26. Smithika decodes a secret Hot Wheels track pass code: 85, 76, 67, 58, ____. What is the next number?", answer: "49" },
    { type: "text", question: "27. Advi tracks jump distances (in inches) over 5 trials: 15, 18, 22, 27, 33, ____. How far will trial 6 be in inches?", answer: "40" },
    { type: "mcq", question: "28. Which Hot Wheels track element does NOT belong in the following set?", options: ["Loop-de-Loop", "Speed Booster", "Spiral Ramp", "Submarine Propeller"], answer: "Submarine Propeller" },
    { type: "text", question: "29. Arjun's track gear sequence rule is 'Multiply by 3 then subtract 2': 2, 4, 10, 28, ____. What is the next number?", answer: "82" },
    { type: "text", question: "30. Marty measures lap times: 90 sec, 82 sec, 74 sec, 66 sec, ____ sec. What is the 5th lap time?", answer: "58" },

    // SECTION 4: LOGIC LAB & WORD PROBLEMS
    { type: "text", question: "31. Four racers (Marty, Taksh, Ayaan, Advi) competed in the Hot Wheels Mega Ramp. Taksh finished before Marty but after Ayaan. Advi finished before Ayaan. Who won 1st place? (Type their name)", answer: "Advi" },
    { type: "mcq", question: "32. Dad's car is faster than Mom's car. Arjun's car is faster than Dad's car. Smithika's car is slower than Mom's car. Whose car is the fastest?", options: ["Dad's car", "Mom's car", "Arjun's car", "Smithika's car"], answer: "Arjun's car" },
    { type: "mcq", question: "33. Marty, Taksh, and Ayaan each own a different Hot Wheels car: Twin Mill, Bone Shaker, and Rodger Dodger. Marty does not own Twin Mill. Taksh owns Rodger Dodger. Which car does Ayaan own?", options: ["Twin Mill", "Bone Shaker", "Rodger Dodger", "None"], answer: "Twin Mill" },
    { type: "text", question: "34. If 4 booster ramps launch 20 Hot Wheels cars in 2 minutes, how many cars can 6 booster ramps launch in 3 minutes?", answer: "45" },
    { type: "text", question: "35. Mom is thinking of a secret 2-digit track length. It is an odd number between 40 and 60. It is divisible by 5, and the sum of its digits is 9. What is the secret length?", answer: "45" },
    { type: "mcq", question: "36. Whenever the Hot Wheels track warning alarm sounds, a car has stalled. A car has stalled on track 3. Does this mean the warning alarm is DEFINITELY sounding?", options: ["Yes", "No"], answer: "No" },
    { type: "text", question: "37. Dad and Marty build a track 180 inches long. Blue tracks are 10 inches each and Green tracks are 15 inches each. If they use 6 Green tracks, how many Blue tracks do they need?", answer: "9" },
    { type: "text", question: "38. Taksh has a battery launcher that lasts 120 minutes. Testing a car takes 15 minutes, and clearing track jams takes 10 minutes. If Taksh clears 3 jams and tests 4 cars, how many minutes of battery remain?", answer: "30" },
    { type: "text", question: "39. To open the Hot Wheels Storage Chest, Smithika needs a 3-digit code. The first digit is 36 divided by 4. The second digit is half of the first digit rounded down. The third digit is the first digit minus 3. What is the code?", answer: "946" },
    { type: "text", question: "40. Advi built 3 jump ramps. The first ramp is 18 cm high. The second ramp is 6 cm taller than the first. The third ramp is half the height of the second ramp. How high is the third ramp in cm?", answer: "12" },
    { type: "text", question: "41. Dad inputs a number into the Smart Track Computer. The computer multiplies the number by 5 and subtracts 8. If the output is 42, what was Dad's input number?", answer: "10" },
    { type: "text", question: "42. Mom puts 32 die-cast cars into 4 equal storage cases. Arjun takes 2 cars from each case. How many total cars are left across all 4 cases?", answer: "24" },
    { type: "text", question: "43. In a Hot Wheels elimination derby with 16 cars, every round reduces the number of remaining cars by half. How many rounds are needed until only 1 winning car remains?", answer: "4" },
    { type: "text", question: "44. Ayaan's car travels 18 feet in 2 seconds. At this constant speed, how many feet will it travel in 7 seconds?", answer: "63" },
    { type: "mcq", question: "45. Smithika has 40 track pieces and Advi has 28 track pieces. How many track pieces must Smithika give to Advi so they both have an equal number of pieces?", options: ["6", "12", "14", "18"], answer: "6" },

    // SECTION 5: BOSS BATTLES
    { type: "text", question: "46. BOSS BATTLE: Marty and Dad built two track loops. Loop A takes 16 seconds per lap and Loop B takes 24 seconds per lap. If cars launch on both loops at the exact same time, after how many seconds will both cars cross the starting line together for the first time?", answer: "48" },
    { type: "text", question: "47. BOSS BATTLE: In the Hot Wheels Championship, Team Alpha (Marty, Arjun), Team Speed (Taksh, Ayaan), and Team Stunt (Advi, Smithika) scored points. Team Alpha scored 15 points more than Team Stunt. Team Speed scored double Team Stunt's points. If total points scored by all three teams was 135, how many points did Team Stunt score?", answer: "30" },
    { type: "text", question: "48. BOSS BATTLE: Crack Dad's 4-Digit Master Track Code [A, B, C, D]: All digits are distinct positive integers (1 to 9). 'A' is the third prime number. 'B' is 'A' multiplied by 2 minus 3. 'C' is 'B' minus 4. The sum of all 4 digits is 21. What is the 4-digit code?", answer: "5736" },
    { type: "text", question: "49. BOSS BATTLE: Mom set up a 120-foot Hot Wheels track with speed boosters every 15 feet and track flags every 20 feet (both start at 0 feet). How many total locations along the track have BOTH a booster and a flag?", answer: "3" },
    { type: "text", question: "50. BOSS BATTLE: Taksh, Ayaan, Advi, and Smithika raced on a 400-meter circuit. Taksh traveled at 20 m/s, Ayaan at 25 m/s, Advi at 16 m/s, and Smithika at 10 m/s. How many total seconds passed between the time the 1st place car finished and the time the last place car finished?", answer: "24" }
  ]
};
