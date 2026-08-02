const missionConfig = {
  themeTitle: "🌀 Mission: Beyblade Metal Fusion",
  themeColor: "#facc15", // Hex code or name (e.g., "Yellow", "#0f172a")
  themeIcon: "🌀",      // Use an emoji for the animation (🌀, 🚀, 🤖, 🏎️)
  
  questions: [
    // SECTION 1: WARM-UP (Basic Arithmetic in Story Context)
    { type: "text", question: "1. Marty builds 45 digital trees in the Land of AI, and his brother Arjun builds 28 trees. How many trees did they build in total?", answer: "73" },
    { type: "text", question: "2. The Storage Taker grabbed 84 megabytes of data, but Rod the robot rescued 37 megabytes. How many megabytes does the Storage Taker still have?", answer: "47" },
    { type: "text", question: "3. Explorer Team Alpha has 6 human members. If the AI Core gives each member 5 energy crystals to power their devices, how many crystals is that altogether?", answer: "30" },
    { type: "text", question: "4. The Turbo Trike has 100 battery units. It uses 45 units to perform an Ultra Drift, but gains back 20 units by driving over a charging pad. How many battery units are left?", answer: "75" },
    { type: "text", question: "5. To build a secure digital fence around the school, Marty builds 8 sections of wall. Each section requires 4 glowing laser beams. How many laser beams does he use in total?", answer: "32" },
    { type: "text", question: "6. Rod scans 50 floating transparent platforms at Platform Island. Exactly half of them are moving, and the other half are perfectly still. How many platforms are moving?", answer: "25" },
    { type: "text", question: "7. Marty starts a simulation in the AI School at 3:15 PM. The simulation takes exactly 45 minutes to finish. What time does it finish? (Type the time, like 4:00)", answer: "4:00" },
    { type: "text", question: "8. The Glitch Man mixed up a security code! The correct password is a number that has 3 hundreds, 9 tens, and 4 ones. What is the password?", answer: "394" },
    { type: "text", question: "9. Arjun races his RC Tank around the track for 3 laps. Each lap takes him exactly 12 seconds. How many seconds did the whole race take?", answer: "36" },
    { type: "text", question: "10. The unknown AI system sent 120 shadow bugs toward the city. Marty's defensive coding wall successfully blocked 95 of them. How many shadow bugs managed to get through?", answer: "25" },

    // SECTION 2: PATTERN DETECTIVE (Sequences and Rules)
    { type: "text", question: "11. Look at the pattern for the floating platform heights: 12, 15, 18, 21, ____, 27. What number belongs in the blank?", answer: "24" },
    { type: "text", question: "12. The Smart Core is testing RC car speeds. The speed doubles every minute. The sequence is: 2, 4, 8, 16, ____. What is the next speed?", answer: "32" },
    { type: "mcq", question: "13. Rod flashes his scanner lights in a repeating pattern: Red, Blue, Green, Red, Blue, Green. What color will the 10th flash be?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Red" },
    { type: "mcq", question: "14. Which of these vehicles does NOT belong to Explorer Team Alpha?", options: ["Turbo Trike", "Tank", "Shadow Glider", "Super Snake"], answer: "Shadow Glider" },
    { type: "text", question: "15. A magical data tree in the Land of AI doubles its number of branches every day. On Day 1 it has 3 branches. How many branches will it have on Day 4?", answer: "24" },
    { type: "text", question: "16. Crack the ancient AI access code sequence by finding the rule: 99, 88, 77, 66, ____. What is the next number?", answer: "55" },
    { type: "mcq", question: "17. Look at this repeating pattern of Administrator Functions: COPY, SIMULATE, COPY, SIMULATE. What will the 7th command in this pattern be?", options: ["COPY", "SIMULATE", "DELETE", "PASTE"], answer: "COPY" },
    { type: "text", question: "18. The Attention Harvester steals 1 second of focus on the first minute, 3 seconds on the second minute, and 5 seconds on the third minute. Following this pattern, how many seconds will it steal on the fourth minute?", answer: "7" },

    // SECTION 3: LOGIC LAB (Deduction and Truth)
    { type: "text", question: "19. Four friends race their RC cars: Marty, Arjun, Ayaan, and Advi. Marty finished behind Arjun. Ayaan finished in first place. Advi finished ahead of Arjun. Who finished in last place? (Type their name)", answer: "Marty" },
    { type: "mcq", question: "20. Rod is sorting data blocks. The Red block is heavier than the Blue block. The Green block is lighter than the Blue block. Which block is the heaviest?", options: ["Red", "Blue", "Green", "They weigh the same"], answer: "Red" },
    { type: "mcq", question: "21. Explorer Team Alpha has three RC cars painted different colors: red, blue, and green. The Tank is not green. The Super Snake is red. What color is the Turbo Trike?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Green" },
    { type: "text", question: "22. If 2 jump pads in the Chaos Bounce Stadium can launch 4 cars in one minute, how many cars can 4 jump pads launch in one minute?", answer: "8" },
    { type: "text", question: "23. Administrator Function #1 (COPY) perfectly duplicates an item. Marty has 5 building blocks. He uses the COPY command twice on the entire pile of blocks. How many blocks does he have now?", answer: "20" },
    { type: "text", question: "24. Ayaan is thinking of a secret number to program his car. It is an even number between 15 and 20. It can be divided evenly by 3. What is the secret number?", answer: "18" },
    { type: "mcq", question: "25. The Glitch Man always makes the sky turn purple when he attacks. Right now, the sky is turning purple. Does this mean the Glitch Man is DEFINITELY attacking? (Hint: Could something else make the sky purple?)", options: ["Yes", "No"], answer: "No" },

    // SECTION 4: MATH CHALLENGE (Multi-step Reasoning)
    { type: "text", question: "26. Marty earns 10 Badge Stars for winning a race, but loses 3 Badge Stars if his car hits a stadium wall. In 5 races, he wins every time, but hits the wall 2 times. What is his total score?", answer: "44" },
    { type: "text", question: "27. The Outer Rail in the stadium is 100 meters long. The Super Snake travels 10 meters every second. How many seconds will it take the Super Snake to travel the entire rail?", answer: "10" },
    { type: "text", question: "28. Rod has a battery that lasts exactly 60 minutes. Scanning a forest takes 5 minutes, and teleporting takes 15 minutes. If Rod teleports once and scans 4 forests, how many minutes of battery does he have left?", answer: "25" },
    { type: "text", question: "29. To enter the First Workshop, Marty needs a three-digit code. The first digit is half of 8. The second digit is the first digit plus 2. The third digit is zero. What is the code?", answer: "460" },
    { type: "text", question: "30. Sisira builds 3 digital towers. The first tower is 10 blocks high. The second tower is twice as high as the first. The third tower is 5 blocks shorter than the second. How many blocks high is the third tower?", answer: "15" },
    { type: "text", question: "31. The Stadium Wheel lands on 'Chaos Bounce Stadium'. Inside, there are 4 rows of square jump pads, and each row has exactly 12 jump pads. How many jump pads are there in total?", answer: "48" },
    { type: "text", question: "32. The AI Core gives Marty a function machine. The rule is: Multiply the input number by 2, then subtract 1. If Marty puts in the number 7, what number comes out as the output?", answer: "13" },
    { type: "text", question: "33. Let's run a Reverse Function Machine! A secret number goes in, gets added to 10, and the output is 25. What was the secret input number?", answer: "15" },
    { type: "text", question: "34. Exactly half of Explorer Team Alpha (which has 6 total human members) are currently testing the new Full Energy Boost on the Turbo Trike. How many members are NOT testing it right now?", answer: "3" },

    // SECTION 5: BOSS BATTLE (Final Challenge)
    { type: "text", question: "35. BOSS BATTLE: Find the 4-Digit Administrator Override Code [A, B, C, D] to seal the Code Fracture:\n\n• Clue 1: All digits are different numbers from 1 to 9.\n• Clue 2: The sum of all four digits is 18 (A + B + C + D = 18).\n• Clue 3: 'A' is the number of wheels on a normal car.\n• Clue 4: 'B' is exactly half of 'A'.\n• Clue 5: 'C' is an odd number greater than 7.\n• Clue 6: 'D' is whatever number is left to reach the sum of 18.\n\nType the final 4-digit code (no spaces):", answer: "4293" }
  ]
};
