const missionConfig = {
  themeTitle: "🚀 Mission: The Solar System Secrets",
  themeColor: "linear-gradient(135deg, #0b0f19, #000000)", 
  themeIcon: "🚀", 
  questions: [
    // SECTION 1: INNER PLANETS & WARM-UP
    { 
      type: "text", 
      question: "1. Marty and Arjun are inspecting Mercury, the closest planet to the Sun. If Mercury takes 88 Earth days to orbit the Sun, and Venus takes 225 Earth days, how many more days does Venus take than Mercury?", 
      answer: "137",
      hint: "💡 Subtract 88 from 225. Try taking away 200 first, or find the difference step-by-step!",
      explanation: "⭐ **Answer: 137 days!** \n225 - 88 = 137 days. (Fun fact: Mercury has extreme temperature swings because it's closest to the Sun!)"
    },
    { 
      type: "text", 
      question: "2. Advi measures the surface temperature of Venus, the hottest planet in our solar system, at 465°C. If Mars has a winter temperature of -60°C, what is the mathematical temperature difference between Venus and Mars?", 
      answer: "525",
      hint: "💡 Find the total distance from -60 up to 0 (which is 60), then from 0 up to 465!",
      explanation: "⭐ **Answer: 525 degrees!** \n465 - (-60) = 465 + 60 = 525 degrees difference. Venus is hot enough to melt lead!"
    },
    { 
      type: "text", 
      question: "3. Smithika is calculating Earth's water coverage. If 71% of Earth's surface is covered by oceans, and the rest is solid land, what percentage of the surface is land?", 
      answer: "29",
      hint: "💡 Subtract 71 from 100 to find the remaining percentage.",
      explanation: "⭐ **Answer: 29%!** \n100 - 71 = 29% land. Earth is the only known planet with liquid water on its surface."
    },
    { 
      type: "text", 
      question: "4. Taksh looks at Olympus Mons, a giant volcano on Mars that is 22 kilometers high. Mount Everest on Earth is 9 kilometers high. How much taller is Olympus Mons than Mount Everest?", 
      answer: "13",
      hint: "💡 Subtract 9 from 22.",
      explanation: "⭐ **Answer: 13 kilometers!** \n22 - 9 = 13 km. Olympus Mons is the largest volcano in the solar system, nearly three times taller than Everest!"
    },
    { 
      type: "text", 
      question: "5. Ayaan counts space rocks in the Asteroid Belt located between Mars and Jupiter. He finds 48 iron-rich rocks and 35 carbon-rich rocks. How many total rocks did he count?", 
      answer: "83",
      hint: "💡 Add the tens (40 + 30 = 70), then add the ones (8 + 5 = 13).",
      explanation: "⭐ **Answer: 83 rocks!** \n40 + 30 = 70. 8 + 5 = 13. 70 + 13 = 83."
    },
    { 
      type: "text", 
      question: "6. Dad checks Jupiter, the largest planet in our solar system. Jupiter has 95 officially recognized moons. If Saturn has 146 moons, how many more moons does Saturn have than Jupiter?", 
      answer: "51",
      hint: "💡 Subtract 95 from 146. Try adding 5 to 95 to get 100, then add 46!",
      explanation: "⭐ **Answer: 51 more moons!** \n146 - 95 = 51 moons. Saturn and Jupiter lead the solar system in moon counts."
    },
    { 
      type: "text", 
      question: "7. Mom is analyzing Saturn's magnificent rings. If a particle in the rings travels at 15 kilometers per second for 4 seconds, how far does it travel?", 
      answer: "60",
      hint: "💡 Multiply 15 by 4. Think of 4 groups of 15 minutes on a clock!",
      explanation: "⭐ **Answer: 60 kilometers!** \n15 x 4 = 60 km. Saturn's rings are made mostly of billions of chunks of water ice and rock."
    },
    { 
      type: "text", 
      question: "8. Rod the AI notes that Uranus rolls around the Sun on its side like a rolling ball. If Uranus takes 84 Earth years to orbit the Sun, how many Earth years does it take to complete exactly half an orbit?", 
      answer: "42",
      hint: "💡 Divide 84 by 2.",
      explanation: "⭐ **Answer: 42 Earth years!** \n84 ÷ 2 = 42 years. Uranus has an extreme tilt because of an ancient collision."
    },
    { 
      type: "text", 
      question: "9. Marty checks Neptune, the windiest planet, where supersonic winds reach 2,100 kilometers per hour. If a mini-probe travels at 300 kilometers per hour, how many hours would it take to match Neptune's top wind speed?", 
      answer: "7",
      hint: "💡 Cancel out the zeros: 21 divide by 3!",
      explanation: "⭐ **Answer: 7 hours!** \n2,100 ÷ 300 = 7 hours. Neptune's winds are five times stronger than Earth's strongest hurricanes."
    },
    { 
      type: "text", 
      question: "10. Arjun calculates light travel time. Sunlight takes about 8 minutes to reach Earth. If light travels continuously for 6 minutes, how many total seconds is that?", 
      answer: "360",
      hint: "💡 Multiply 6 minutes by 60 seconds per minute.",
      explanation: "⭐ **Answer: 360 seconds!** \n6 x 60 = 360 seconds. Light is the fastest thing in the universe!"
    },

    // SECTION 2: PATTERNS, MULTIPLICATION, & STELLAR MATH
    { 
      type: "text", 
      question: "11. The distance of planets from the sun follows this sequence in millions of kilometers: 10, 20, 40, 80, ____. What is the next number in the pattern?", 
      answer: "160",
      hint: "💡 Look at how the numbers grow. What happens if you double each number?",
      explanation: "⭐ **Answer: 160!** \nThe pattern doubles every step: 80 x 2 = 160."
    },
    { 
      type: "text", 
      question: "12. Look at this moon-count sequence for gas giants: 3, 6, 12, 24, ____. What comes next?", 
      answer: "48",
      hint: "💡 Each number is multiplied by 2 to get the next one.",
      explanation: "⭐ **Answer: 48!** \n24 x 2 = 48."
    },
    { 
      type: "mcq", 
      question: "13. Which of these celestial bodies is actually a star located at the absolute center of our solar system? [Mars, The Sun, Jupiter, Europa]", 
      options: ["Mars", "The Sun", "Jupiter", "Europa"], 
      answer: "The Sun",
      hint: "💡 Think about what gives off its own heat and light in our solar system!",
      explanation: "⭐ **Answer: The Sun!** \nThe Sun is a yellow dwarf star that holds all the planets in orbit with its gravity."
    },
    { 
      type: "text", 
      question: "14. Advi builds 7 deep-space observation probes. Each probe requires 9 high-efficiency solar panels. How many solar panels does she need in total?", 
      answer: "63",
      hint: "💡 What is 7 times 9?",
      explanation: "⭐ **Answer: 63 solar panels!** \n7 x 9 = 63."
    },
    { 
      type: "text", 
      question: "15. Smithika divides 72 starlight data files equally among the 8 members of Explorer Team Alpha (Marty, Arjun, Taksh, Ayaan, Advi, Smithika, Mom, and Dad). How many files does each person get?", 
      answer: "9",
      hint: "💡 Divide 72 by 8. What number times 8 equals 72?",
      explanation: "⭐ **Answer: 9 files!** \n72 ÷ 8 = 9."
    },
    { 
      type: "text", 
      question: "16. Decode the orbital speed sequence of incoming comets: 150, 135, 120, 105, ____. What is the next number?", 
      answer: "90",
      hint: "💡 Look at how much the numbers are decreasing by each time.",
      explanation: "⭐ **Answer: 90!** \nThe sequence subtracts 15 each step: 105 - 15 = 90."
    },
    { 
      type: "text", 
      question: "17. Taksh tracks a spacecraft's thruster power over 5 seconds: 12, 24, 36, 48, 60, ____. What will the power level be on second 6?", 
      answer: "72",
      hint: "💡 These are multiples of 12! Add 12 to 60.",
      explanation: "⭐ **Answer: 72!** \n60 + 12 = 72."
    },
    { 
      type: "text", 
      question: "18. Rod's stellar calculator rule is: 'Multiply the planet index by 4, then add 3'. If Marty inputs 5, what is the output number?", 
      answer: "23",
      hint: "💡 Follow the order of operations: first 5 x 4, then add 3.",
      explanation: "⭐ **Answer: 23!** \n5 x 4 = 20. 20 + 3 = 23."
    },
    { 
      type: "text", 
      question: "19. Halley's Comet takes 76 years to complete its orbit around the Sun. If it was last seen passing Earth in 1986, in what year will it return?", 
      answer: "2062",
      hint: "💡 Add 76 to 1986.",
      explanation: "⭐ **Answer: 2062!** \n1986 + 76 = 2062 years."
    },
    { 
      type: "text", 
      question: "20. Taksh launches a rocket that burns 12 kilograms of fuel per minute. If the rocket engines run for 5 minutes during lift-off and another 3 minutes entering orbit, how much total fuel was burned?", 
      answer: "96",
      hint: "💡 First find the total minutes (5 + 3), then multiply by 12 kg.",
      explanation: "⭐ **Answer: 96 kg!** \nTotal time = 8 minutes. 8 x 12 = 96 kilograms of fuel."
    },

    // SECTION 3: LOGIC LAB & SPACE DEDUCTION
    { 
      type: "mcq", 
      question: "21. Four spacecraft (Nova, Orion, Pulsar, Comet) race through deep space. Orion is faster than Comet but slower than Pulsar. Nova is faster than Pulsar. Which spacecraft is the fastest?", 
      options: ["Nova", "Orion", "Pulsar", "Comet"], 
      answer: "Nova",
      hint: "💡 Order them from fastest to slowest based on the clues.",
      explanation: "⭐ **Answer: Nova!** \nThe full speed order from fastest to slowest is: Nova -> Pulsar -> Orion -> Comet."
    },
    { 
      type: "mcq", 
      question: "22. Three astronauts are wearing suits colored Red, Blue, and Green. Arjun is wearing Green. Dad is NOT wearing Red. What color space suit is Marty wearing, assuming all three suits are different colors?", 
      options: ["Red", "Blue", "Green", "Yellow"], 
      answer: "Red",
      hint: "💡 If Arjun has Green, and Dad is not Red (so Dad must be Blue), what is left for Marty?",
      explanation: "⭐ **Answer: Red!** \nArjun has Green and Dad has Blue, leaving Red for Marty."
    },
    { 
      type: "text", 
      question: "23. If 4 space probes can scan 24 cosmic anomalies in one minute, how many anomalies can 7 space probes scan in one minute?", 
      answer: "42",
      hint: "💡 Find out how many anomalies ONE probe scans first (24 ÷ 4), then multiply by 7.",
      explanation: "⭐ **Answer: 42 anomalies!** \n1 probe = 6 anomalies per minute. 7 probes x 6 = 42."
    },
    { 
      type: "text", 
      question: "24. Light travels at about 300,000 kilometers per second. If a signal takes 4 seconds to travel from a communication satellite to Marty's ship, how many kilometers did it travel?", 
      answer: "1200000",
      hint: "💡 Multiply 300,000 by 4. (3 x 4 = 12, then add the 5 zeros!)",
      explanation: "⭐ **Answer: 1,200,000 kilometers!** \n300,000 x 4 = 1,200,000 km (1.2 million kilometers!)."
    },
    { 
      type: "text", 
      question: "25. Space in the shadow of a dark asteroid can plummet to -150°C. If direct sunlight warms the spacecraft up by 180°C, what is the final temperature?", 
      answer: "30",
      hint: "💡 Start at -150 and add 180. Going up 150 brings you to 0, then add 30 more!",
      explanation: "⭐ **Answer: 30°C!** \n-150 + 180 = 30°C."
    },
    { 
      type: "text", 
      question: "26. Ayaan connects stars to form a constellation shaped like a regular hexagon. How many stars (vertices) make up this hexagon constellation?", 
      answer: "6",
      hint: "💡 How many sides does a hexagon have?",
      explanation: "⭐ **Answer: 6 stars!** \nA hexagon has 6 sides and 6 vertices."
    },
    { 
      type: "text", 
      question: "27. Mom distributes 108 star charts equally among 9 deep space stations. How many star charts does each station receive?", 
      answer: "12",
      hint: "💡 Divide 108 by 9.",
      explanation: "⭐ **Answer: 12 star charts!** \n108 ÷ 9 = 12."
    },
    { 
      type: "text", 
      question: "28. Rod computes orbital speeds. Planet X orbits at 24 kilometers per second. Planet Y orbits at half that speed. Planet Z orbits at 3 times Planet Y's speed. What is Planet Z's orbital speed?", 
      answer: "36",
      hint: "💡 First find Planet Y's speed (half of 24), then multiply that result by 3.",
      explanation: "⭐ **Answer: 36 km/s!** \nPlanet Y = 12 km/s. Planet Z = 12 x 3 = 36 km/s."
    },
    { 
      type: "text", 
      question: "29. An empty space probe weighs 450 kg. Each scientific sensor module added weighs 35 kg. If Dad adds 4 modules, what is the total weight of the probe?", 
      answer: "590",
      hint: "💡 First multiply 35 by 4, then add 450.",
      explanation: "⭐ **Answer: 590 kg!** \n35 x 4 = 140 kg for modules. 450 + 140 = 590 kg total."
    },
    { 
      type: "text", 
      question: "30. Look at this stellar count: 5, 11, 17, 23, ____. What is the next number in the pattern?", 
      answer: "29",
      hint: "💡 Find the difference between 5 and 11. It's the same addition rule all the way through!",
      explanation: "⭐ **Answer: 29!** \nThe pattern adds 6 each time: 23 + 6 = 29."
    },

    // SECTION 4: BOSS BATTLES (Cosmic Challenges)
    { 
      type: "text", 
      question: "31. BOSS BATTLE: Two pulsing beacon stars flash to guide Explorer Team Alpha. Star A flashes every 6 seconds, and Star B flashes every 8 seconds. If they flash together right now, after how many seconds will they flash together again?", 
      answer: "24",
      hint: "💡 Find the Least Common Multiple (LCM) of 6 and 8 by skip-counting!",
      explanation: "⭐ **Answer: 24 seconds!** \nStar A: 6, 12, 18, 24...\nStar B: 8, 16, 24...\nThey match at 24 seconds."
    },
    { 
      type: "text", 
      question: "32. BOSS BATTLE: Marty and Arjun are calculating starlight energy points. Marty scores 30 points more than Arjun. Dad scores double Arjun's points. The total score for all three is 150 points. How many points did Arjun score?", 
      answer: "30",
      hint: "💡 Try giving Arjun 30 points: Marty would be 60, and Dad would be 60. Check if they add up to 150!",
      explanation: "⭐ **Answer: 30 points!** \nArjun = 30, Marty = 60, Dad = 60. Total: 30 + 60 + 60 = 150 points."
    },
    { 
      type: "text", 
      question: "33. BOSS BATTLE: To unlock the Ancient Star Archive, Rod requires a 4-digit code [A, B, C, D]. 'A' is the number of planets in our solar system (excluding Pluto). 'B' is 'A' divided by 2. 'C' is 'B' plus 4. 'D' is the number of sides on a triangle. What is the 4-digit code?", 
      answer: "8483",
      hint: "💡 Step 1: How many planets are in our solar system? (A = 8). Now solve B, C, and D step by step!",
      explanation: "⭐ **Answer: 8483!** \nA = 8 planets. B = 8 ÷ 2 = 4. C = 4 + 4 = 8. D = 3 sides on a triangle. Code: 8483."
    },
    { 
      type: "text", 
      question: "34. BOSS BATTLE: A cosmic laser grid stretches 120 kilometers across space. Safety buoys are placed every 20 kilometers, and communication beacons are placed every 30 kilometers (both start at 0 km). At how many total locations do a safety buoy and a communication beacon sit side-by-side?", 
      answer: "3",
      hint: "💡 Find where multiples of 20 and 30 overlap up to 120. Don't forget the start line at 0!",
      explanation: "⭐ **Answer: 3 locations!** \nBuoys: 0, 20, 40, 60, 80, 100, 120.\nBeacons: 0, 30, 60, 90, 120.\nThey overlap at 0, 60, and 120 (3 total locations)."
    },
    { 
      type: "text", 
      question: "35. BOSS BATTLE: The final chase! Marty's spaceship chases a rogue asteroid at warp speed. Marty's ship accelerates at 60 units per second, while the rogue asteroid drifts at 40 units per second. If the asteroid had a 200-unit head start, how many seconds will it take for Marty to catch up and save the galaxy?", 
      answer: "10",
      hint: "💡 Find out how much faster Marty is every second (60 - 40). Then divide the 200-unit head start by that difference!",
      explanation: "⭐ **Answer: 10 seconds!** \nMarty gains 20 units per second on the asteroid (60 - 40 = 20). 200 ÷ 20 = 10 seconds. Marty saves the solar system and wins the mission!"
    }
  ]
};
