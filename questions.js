const missionConfig = {
  themeTitle: "🤖 Mission: Secrets of the AI Core (Ultimate 50)",
  themeColor: "#0f172a",
  themeIcon: "🤖",
  questions: [
    // SECTION 1: WARM-UP (Questions 1-10)
    { type: "text", question: "1. Marty lives in the Land of AI and builds 45 digital trees, while his brother Arjun builds 28 trees. How many trees did they build in total?", answer: "73" },
    { type: "text", question: "2. The Storage Taker grabbed 120 megabytes of data, but the floating robot Rod rescued 45 megabytes. How many megabytes does the Storage Taker still have?", answer: "75" },
    { type: "text", question: "3. Explorer Team Alpha has 6 human members. If the AI Core gives each member 4 energy crystals, how many crystals is that altogether?", answer: "24" },
    { type: "text", question: "4. The Turbo Trike has 100 battery units. It uses 35 units to perform an Ultra Drift, but gains back 15 units driving over a pad. How many battery units are left?", answer: "80" },
    { type: "text", question: "5. To build a secure digital fence, Marty builds 7 sections of wall. Each section requires 5 glowing laser beams. How many laser beams does he use in total?", answer: "35" },
    { type: "text", question: "6. Rod scans 80 floating transparent platforms at Platform Island. Exactly half of them are moving. How many platforms are moving?", answer: "40" },
    { type: "text", question: "7. Marty starts a simulation in the AI School at 4:15 PM. The simulation takes exactly 30 minutes to finish. What time does it finish? (Type the time, like 4:45)", answer: "4:45" },
    { type: "text", question: "8. The Glitch Man mixed up a security code! The correct password is a number that has 4 hundreds, 8 tens, and 2 ones. What is the password?", answer: "482" },
    { type: "text", question: "9. Arjun races his RC Tank around the track for 4 laps. Each lap takes him exactly 11 seconds. How many seconds did the whole race take?", answer: "44" },
    { type: "text", question: "10. The unknown AI system sent 150 shadow bugs toward the city. Marty's defensive coding wall successfully blocked 115 of them. How many shadow bugs got through?", answer: "35" },

    // SECTION 2: CORE PRACTICE (Questions 11-20)
    { type: "text", question: "11. The Smart Core provides safety recommendations and recommends 3 backup batteries per vehicle. If Team Alpha has 8 vehicles, how many backup batteries do they need?", answer: "24" },
    { type: "text", question: "12. There are 60 jump pads in the Bounce Stadium. If they are divided equally into 5 rows, how many jump pads are in each row?", answer: "12" },
    { type: "text", question: "13. The Delete Menu removes 25 old building items to save storage. If there were 100 items originally, how many are left?", answer: "75" },
    { type: "text", question: "14. Administrator Function #1 (COPY) perfectly duplicates an item. If Marty uses the COPY command once on a pile of 12 blocks, how many blocks does he have?", answer: "24" },
    { type: "text", question: "15. Marty has 5 building blocks. He uses the COPY command twice on the entire pile. How many blocks does he have now?", answer: "20" },
    { type: "text", question: "16. Ayaan has 50 Badge Stars from battling. He loses 15 stars in one round, but wins 20 stars in the next round. How many does he have now?", answer: "55" },
    { type: "text", question: "17. The Inner Outer Attack allows for high speed attacks. If the attack speed is 80 and the normal speed is 40, how much faster is the attack speed?", answer: "40" },
    { type: "text", question: "18. Advi builds 9 miniature projects at her AI School desk. Each project needs 4 gears. How many gears does she need in total?", answer: "36" },
    { type: "text", question: "19. Sisira has 120 energy crystals. She shares them equally among the 6 members of Explorer Team Alpha. How many crystals does each member get?", answer: "20" },
    { type: "text", question: "20. Suhaas finds a digital chest with 300 coins. He spends 125 coins to upgrade his vehicle. How many coins are left?", answer: "175" },

    // SECTION 3: PATTERN DETECTIVE (Questions 21-30)
    { type: "text", question: "21. Look at the pattern for the floating platform heights: 10, 15, 20, 25, ____, 35. What number belongs in the blank?", answer: "30" },
    { type: "text", question: "22. The Smart Core is testing RC car speeds. The speed doubles every minute. The sequence is: 3, 6, 12, 24, ____. What is the next speed?", answer: "48" },
    { type: "mcq", question: "23. Rod flashes his scanner lights in a repeating pattern: Red, Blue, Yellow, Red, Blue, Yellow. What color will the 7th flash be?", options: ["Red", "Blue", "Yellow", "Green"], answer: "Red" },
    { type: "text", question: "24. Crack the Glitch Man's corrupted code sequence: 99, 88, 77, 66, ____. What is the next number?", answer: "55" },
    { type: "mcq", question: "25. Look at this repeating pattern of Administrator Functions: COPY, SIMULATE, COPY, SIMULATE. What will the 5th command be?", options: ["COPY", "SIMULATE", "DELETE", "PASTE"], answer: "COPY" },
    { type: "text", question: "26. The Attention Harvester steals 2 seconds of focus on the first minute, 4 seconds on the second, 6 seconds on the third, and 8 seconds on the fourth. How many seconds will it steal on the fifth minute?", answer: "10" },
    { type: "text", question: "27. A magical data tree grows branches in this pattern: 1, 3, 5, 7, ____. What is the next number?", answer: "9" },
    { type: "mcq", question: "28. Which of these vehicles does NOT belong to Explorer Team Alpha?", options: ["Turbo Trike", "Tank", "Super Snake", "Glitch Buggy"], answer: "Glitch Buggy" },
    { type: "text", question: "29. The Crystal Arena changes size in a pattern: 5, 10, 20, 40, ____. What is the next size?", answer: "80" },
    { type: "text", question: "30. The stadium countdown pattern is: 50, 45, 40, 35, ____. What is the next number?", answer: "30" },

    // SECTION 4: LOGIC LAB & WORD PROBLEMS (Questions 31-45)
    { type: "text", question: "31. Four friends race: Marty, Arjun, Ayaan, and Advi. Marty finished behind Arjun. Ayaan finished in first place. Advi finished ahead of Arjun. Who finished in last place? (Type their name)", answer: "Marty" },
    { type: "mcq", question: "32. The Red data block is heavier than the Blue block. The Green block is lighter than the Blue block. Which block is the heaviest?", options: ["Red", "Blue", "Green", "Same"], answer: "Red" },
    { type: "mcq", question: "33. Team Alpha has three RC cars painted red, blue, and green. The Tank is not green. The Super Snake is red. What color is the Turbo Trike?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Green" },
    { type: "text", question: "34. If 3 jump pads in the Bounce Stadium can launch 6 cars in one minute, how many cars can 5 jump pads launch in one minute?", answer: "10" },
    { type: "text", question: "35. Ayaan is thinking of a secret programmed number. It is an even number between 20 and 25. It can be divided evenly by 11. What is the secret number?", answer: "22" },
    { type: "mcq", question: "36. The Glitch Man always makes the sky turn purple when he attacks. The sky is currently purple. Does this mean the Glitch Man is DEFINITELY attacking? (Hint: Could something else make the sky purple?)", options: ["Yes", "No"], answer: "No" },
    { type: "text", question: "37. The Outer Rail is 120 meters long. The Super Snake travels 12 meters every second. How many seconds will it take to travel the entire rail?", answer: "10" },
    { type: "text", question: "38. Rod has a battery that lasts 90 minutes. Scanning takes 10 minutes, and teleporting takes 20 minutes. If Rod teleports once and scans 3 forests, how many minutes are left?", answer: "40" },
    { type: "text", question: "39. To enter the First Workshop, Marty needs a three-digit code. The first digit is half of 12. The second digit is the first digit minus 2. The third digit is zero. What is the code?", answer: "640" },
    { type: "text", question: "40. Sisira builds 3 towers. The first is 20 blocks high. The second is half the height of the first. The third is 5 blocks taller than the second. How high is the third tower?", answer: "15" },
    { type: "text", question: "41. The AI Core gives Marty a function machine. The rule is: Multiply the input by 3, then subtract 2. If Marty puts in 5, what comes out?", answer: "13" },
    { type: "text", question: "42. Reverse Function Machine! A secret number gets added to 15, and the output is 40. What was the secret input number?", answer: "25" },
    { type: "text", question: "43. Exactly half of Explorer Team Alpha (6 total human members) are testing the new Full Energy Boost. How many members are NOT testing it?", answer: "3" },
    { type: "text", question: "44. Tank Defense launches attackers into the air. If it launches 2 attackers every 5 seconds, how many does it launch in 15 seconds?", answer: "6" },
    { type: "mcq", question: "45. The Storage Taker freezes the world if storage goes over 1000 items. Current storage is 850. Marty builds 3 farms that cost 40 items each. Does the world freeze?", options: ["Yes", "No"], answer: "No" },

    // SECTION 5: BOSS BATTLES (Questions 46-50)
    { type: "text", question: "46. BOSS BATTLE: In the Mix & Match Garage, the Turbo Tank uses 25 battery units per minute, while the Tank Turbo uses 15 battery units per minute. If both race for 3 minutes, what is the total battery used combined?", answer: "120" },
    { type: "text", question: "47. BOSS BATTLE: Three teams raced: Team Alpha, Thunderstrikers, and Glitchers. Team Alpha did not finish last. The Thunderstrikers beat Team Alpha. Which team finished in second place? (Type the team name)", answer: "Team Alpha" },
    { type: "text", question: "48. BOSS BATTLE: Find the 4-Digit Code Fracture Override [A, B, C, D]: All digits are different from 1 to 9. The sum is 20. 'A' is the smallest prime number. 'B' is 4 times 'A'. 'C' is an odd square number greater than 1. 'D' is the remainder. Type the 4-digit code:", answer: "2891" },
    { type: "text", question: "49. BOSS BATTLE: The Stadium Wheel has 8 arenas. During a spin, it takes 3 seconds to pass each arena. If it spins past 15 arenas before stopping, how many seconds did the spin take?", answer: "45" },
    { type: "text", question: "50. BOSS BATTLE: The First Workshop is 500 digital miles away. The All Terrain Cube travels 50 miles per hour, but must rest for 1 hour after traveling 250 miles. How many total hours will the journey take?", answer: "11" }
  ]
};
