'use client';

import { useEffect, useRef, useState } from "react";
import Logo from "./logo";

type Variation = {
  id: string;
  type?: "retro" | "cat" | "lost-poster" | "snack" | "multiverse" | "banana" | "ferret" | "alien-abduction" | "haunted-house";
  subline: string;
  ideas: string[];
};

const variations: Variation[] = [
  {
    id: "lost-poster",
    type: "lost-poster",
    subline: `Missing page: {path}. Answers to "index". Last seen chasing a 200 OK.`,
    ideas: [
      "Check the flyer board (homepage) for clues.",
      "File a 'found page' report in support.",
      "Tear off a tab and share if spotted.",
    ],
  },
  {
    id: "cat",
    subline:
      "They opened 17 tabs, wrote 'asdkfj', and then took a nap on your page.",
    ideas: [
      "Gently remove cat; go back to the homepage.",
      "Visit the blog while we bribe them with treats.",
      "Report the incident to IT (the cat).",
    ],
  },
  {
    id: "snack",
    subline:
      "This page was eaten as a midnight snack. Delicious, but unhelpful.",
    ideas: [
      "Order another slice from the homepage.",
      "Check the timeline menu for fresh specials.",
      "Tell us if you prefer pineapple or not.",
    ],
  },
  {
    id: "multiverse",
    subline:
      "This 404 is the B-plot. The page you want is in a cooler universe.",
    ideas: [
      "Re-roll at home base; maybe you'll get the main quest.",
      "Consult the blog for lore and patch notes.",
      "Tell support which universe to port you to.",
    ],
  },
  {
    id: "banana",
    subline:
      "The page face-planted. We promise the peel looked smaller in person.",
    ideas: [
      "Walk back to home carefully - no sudden moves.",
      "Peek at the timeline to see previous wipeouts.",
      "File a peel removal request with support.",
    ],
  },
  {
    id: "ferret",
    subline:
      "They're reorganizing cables and hiding shiny things. The page will reappear when they're bored.",
    ideas: [
      "Distract them by visiting the homepage.",
      "Check the blog while they chew on ethernet.",
      "Submit a ticket; we pay them in grape jelly.",
    ],
  },
  {
    id: "retro",
    subline:
      "The level you requested isn't loaded, but we've got extra lives elsewhere.",
    ideas: [
      "Mash the home button to respawn.",
      "Read a devlog while we load another cartridge.",
      "Queue up a support ticket for bonus points.",
    ],
  },
  {
    id: "alien-abduction",
    subline:
      "The page was beamed up. We're negotiating its release with the Galactic Federation.",
    ideas: [
      "Signal the mothership (homepage) for a rescue.",
      "Check the crop circles (blog) for messages.",
      "Wear a tin foil hat and wait for its return.",
    ],
  },
  {
    id: "haunted-house",
    subline:
      "This page is a ghost town. Literally. We heard chains rattling.",
    ideas: [
      "Run back to the safety of the homepage.",
      "Call the Ghostbusters (support).",
      "Check the attic (timeline) for spirits.",
    ],
  },
  // --- NEW VARIATIONS ---
  {
    id: "time-travel-fail",
    type: "retro",
    subline: "Great Scott! You've arrived before this page was written.",
    ideas: ["Go back to the future (homepage).", "Wait 88mph for the page to load.", "Check the sports almanac (blog)."],
  },
  {
    id: "cat-keyboard-2",
    type: "cat",
    subline: "Meow meow meow meow. (Translation: The cat is sitting on the server.)",
    ideas: ["Shake the treat bag (refresh).", "Pet the cat (homepage).", "Accept your new feline overlords."],
  },
  {
    id: "pizza-delivery",
    type: "snack",
    subline: "The delivery driver got lost. Your page is getting cold.",
    ideas: ["Order a new page (homepage).", "Track the driver (timeline).", "Complain to the manager (contact)."],
  },
  {
    id: "black-hole",
    type: "multiverse",
    subline: "Event horizon crossed. This page has been spaghettified.",
    ideas: ["Warp drive to safety (homepage).", "Send a probe (search).", "Calculate escape velocity."],
  },
  {
    id: "banana-split",
    type: "banana",
    subline: "This page split. It's bananas! B-A-N-A-N-A-S!",
    ideas: ["Scoop up the remains (homepage).", "Add sprinkles (blog).", "Don't slip on the way out."],
  },
  {
    id: "ferret-heist",
    type: "ferret",
    subline: "The ferrets stole the pixels. All of them. Shiny!",
    ideas: ["Bribe them with socks (homepage).", "Look under the sofa (timeline).", "Admit defeat."],
  },
  {
    id: "alien-probe",
    type: "alien-abduction",
    subline: "This page is being examined. It will be returned... eventually.",
    ideas: ["Don't panic (homepage).", "Bring a towel.", "Phone home."],
  },
  {
    id: "ghost-in-machine",
    type: "haunted-house",
    subline: "The page is here... but it's transparent. Spooky.",
    ideas: ["Who you gonna call? (Support).", "Don't cross the streams (homepage).", "Look for ectoplasm."],
  },
  {
    id: "retro-glitch",
    type: "retro",
    subline: "Blow on the cartridge. It might work this time.",
    ideas: ["Reset console (homepage).", "Up Up Down Down Left Right Left Right B A Start.", "Check the manual."],
  },
  {
    id: "lost-dog",
    type: "lost-poster",
    subline: "Have you seen this page? Answers to 'Good Boy'.",
    ideas: ["Whistle loudly (homepage).", "Check the park (blog).", "Leave a treat."],
  },
  {
    id: "cookie-monster",
    type: "snack",
    subline: "C is for Cookie, and also for Crash. Nom nom nom.",
    ideas: ["Bake more cookies (homepage).", "Hide the jar.", "Clean up the crumbs."],
  },
  {
    id: "matrix-glitch",
    type: "multiverse",
    subline: "Déjà vu. They changed something in the Matrix.",
    ideas: ["Follow the white rabbit (homepage).", "Take the red pill.", "Learn Kung Fu."],
  },
  {
    id: "banana-phone",
    type: "banana",
    subline: "Ring ring ring ring ring ring ring... Banana phone!",
    ideas: ["Answer the call (homepage).", "Hang up.", "Don't let it ring."],
  },
  {
    id: "ferret-war-dance",
    type: "ferret",
    subline: "Weasel war dance in progress. Do not disturb.",
    ideas: ["Join the dance (homepage).", "Dook dook dook.", "Hide your toes."],
  },
  {
    id: "area-51",
    type: "alien-abduction",
    subline: "Classified. You do not have clearance for this page.",
    ideas: ["Storm the gates (homepage).", "Naruto run.", "Deny everything."],
  },
  {
    id: "poltergeist",
    type: "haunted-house",
    subline: "They're heeeere... but the page isn't.",
    ideas: ["Go into the light (homepage).", "Move the headstones.", "Don't look under the bed."],
  },
  {
    id: "8-bit-hero",
    type: "retro",
    subline: "Your princess is in another castle.",
    ideas: ["Warp pipe to world 1-1 (homepage).", "Eat a mushroom.", "Jump on a goomba."],
  },
  {
    id: "milk-carton",
    type: "lost-poster",
    subline: "Missing: One (1) HTML file. Reward: 404 Gratitude.",
    ideas: ["Call the hotline (contact).", "Check the fridge.", "Print a flyer."],
  },
  {
    id: "taco-tuesday",
    type: "snack",
    subline: "It's not Tuesday, but the page is still a taco.",
    ideas: ["Add guacamole (homepage).", "Crunchy or soft?", "Spicy sauce."],
  },
  {
    id: "parallel-universe",
    type: "multiverse",
    subline: "In Universe 42, this page exists. You are in Universe 404.",
    ideas: ["Build a portal (homepage).", "Consult the council of Ricks.", "Don't panic."],
  },
  {
    id: "slippery-floor",
    type: "banana",
    subline: "Wet floor. Watch your step.",
    ideas: ["Walk carefully (homepage).", "Find a mop.", "Sue the janitor."],
  },
  {
    id: "tube-city",
    type: "ferret",
    subline: "The page is stuck in the tubes. Ferret logic.",
    ideas: ["Shake the tube (homepage).", "Send a ferret in.", "Wait for it to pop out."],
  },
  {
    id: "crop-circle",
    type: "alien-abduction",
    subline: "The page was flattened into a complex geometric pattern.",
    ideas: ["Take an aerial photo (homepage).", "Blame the wind.", "It's a sign."],
  },
  {
    id: "zombie-apocalypse",
    type: "haunted-house",
    subline: "Braaaains... The page has been infected.",
    ideas: ["Aim for the head (homepage).", "Double tap.", "Find the cure."],
  },
  {
    id: "game-crash",
    type: "retro",
    subline: "Segfault. Core dumped. Insert coin.",
    ideas: ["Reboot system (homepage).", "Check the high scores.", "Tilt!"],
  },
  {
    id: "wanted-poster",
    type: "lost-poster",
    subline: "WANTED: Dead or Alive. Mostly Alive.",
    ideas: ["Collect the bounty (homepage).", "Form a posse.", "Ride into the sunset."],
  },
  {
    id: "donut-hole",
    type: "snack",
    subline: "You found the hole, but where is the donut?",
    ideas: ["Visit the bakery (homepage).", "Sprinkles are for winners.", "Glazed and confused."],
  },
  {
    id: "quantum-entanglement",
    type: "multiverse",
    subline: "The page is both here and not here until you observe it.",
    ideas: ["Collapse the wave function (homepage).", "Find Schrödinger's cat.", "Uncertainty is certain."],
  },
  {
    id: "potassium-overload",
    type: "banana",
    subline: "K. Just K.",
    ideas: ["K (homepage).", "K.", "K."],
  },
  {
    id: "sock-thief",
    type: "ferret",
    subline: "Your page is with your missing left sock.",
    ideas: ["Check the stash (homepage).", "Wear mismatched socks.", "Blame the dryer."],
  },
  {
    id: "mars-rover",
    type: "alien-abduction",
    subline: "This page is on Mars. It's singing happy birthday to itself.",
    ideas: ["Launch a rescue mission (homepage).", "Grow potatoes.", "Look for water."],
  },
  {
    id: "vampire-castle",
    type: "haunted-house",
    subline: "The page sucks. (Blood, that is).",
    ideas: ["Eat garlic (homepage).", "Find a stake.", "Avoid sunlight."],
  },
  {
    id: "blue-screen",
    type: "retro",
    subline: "A problem has been detected and the page has been shut down to prevent damage.",
    ideas: ["Restart (homepage).", "Check for updates.", "Disable recently installed drivers."],
  },
  {
    id: "ramen-bowl",
    type: "snack",
    subline: "The page got tangled in the noodles. Slurp carefully.",
    ideas: ["Order a fresh bowl (homepage).", "Add extra toppings (blog).", "Say itadakimasu."],
  },
  {
    id: "rubber-duck",
    type: "cat",
    subline: "The page explained its problems to a rubber duck and vanished.",
    ideas: ["Quack quack (homepage).", "Try pair programming.", "Debug in silence."],
  },
  {
    id: "yarn-ball",
    type: "cat",
    subline: "The cat unraveled the entire page. It's now a mess of strings.",
    ideas: ["Wind it back up (homepage).", "Buy a new ball of yarn.", "Accept the chaos."],
  },
  {
    id: "coffee-spill",
    type: "snack",
    subline: "Someone knocked over their coffee. The page drowned in caffeine.",
    ideas: ["Grab paper towels (homepage).", "Make a fresh cup.", "Switch to tea."],
  },
  {
    id: "bermuda-triangle",
    type: "multiverse",
    subline: "The page entered the Bermuda Triangle and never came back.",
    ideas: ["Send a search party (homepage).", "Check the coordinates.", "Wear a life vest."],
  },
  {
    id: "wifi-down",
    type: "retro",
    subline: "No Wi-Fi. No page. Only tears.",
    ideas: ["Turn it off and on again (homepage).", "Check the router.", "Sacrifice a USB cable."],
  },
  {
    id: "treasure-map",
    type: "lost-poster",
    subline: "X marks the spot... but the page isn't here. Wrong coordinates?",
    ideas: ["Dig somewhere else (homepage).", "Follow the compass.", "Ask a pirate."],
  },
  {
    id: "fortune-cookie",
    type: "snack",
    subline: "Your fortune says: 'Page not found.' Lucky numbers: 4, 0, 4.",
    ideas: ["Crack open another (homepage).", "Eat the cookie anyway.", "Keep the fortune."],
  },
  {
    id: "pocket-dimension",
    type: "multiverse",
    subline: "The page slipped into a pocket dimension. Very inconvenient.",
    ideas: ["Find the exit portal (homepage).", "Ask Doctor Strange.", "Wait for it to pop back."],
  },
  {
    id: "snake-game",
    type: "retro",
    subline: "The page was eaten by a Nokia snake. Classic mistake.",
    ideas: ["Start a new game (homepage).", "Beat the high score.", "Press '5' for turbo."],
  },
  {
    id: "lemonade-stand",
    type: "snack",
    subline: "Life gave us lemons, but we forgot to make the page.",
    ideas: ["Buy lemonade instead (homepage).", "When life gives you 404s...", "Set up a stand."],
  },
  {
    id: "parallel-parking",
    type: "banana",
    subline: "The page tried to parallel park and gave up.",
    ideas: ["Find street parking (homepage).", "Use valet service.", "Walk from here."],
  },
  {
    id: "hamster-wheel",
    type: "ferret",
    subline: "The server hamster stopped running. Union-mandated break.",
    ideas: ["Offer sunflower seeds (homepage).", "Hire a backup hamster.", "Wait 15 minutes."],
  },
  {
    id: "space-jam",
    type: "alien-abduction",
    subline: "The Monstars stole the page's talent. It can't perform anymore.",
    ideas: ["Call Michael Jordan (homepage).", "Drink Secret Stuff.", "Lace up your Space Jams."],
  },
  {
    id: "ouija-board",
    type: "haunted-house",
    subline: "We asked the spirits where the page went. They said 'GOODBYE'.",
    ideas: ["Try again (homepage).", "Light more candles.", "Don't break the circle."],
  },
  {
    id: "dial-up",
    type: "retro",
    subline: "*screeching modem noises* Connection failed. Page timed out.",
    ideas: ["Reconnect (homepage).", "Tell mom to get off the phone.", "Upgrade to broadband."],
  },
  {
    id: "missing-sock-2",
    type: "lost-poster",
    subline: "Last seen: Laundry day. Possibly with your other missing sock.",
    ideas: ["Check the dryer lint (homepage).", "File a police report.", "Buy new socks."],
  },
  {
    id: "burrito-wrap",
    type: "snack",
    subline: "The page is wrapped up tight. We can't unwrap it without making a mess.",
    ideas: ["Order takeout (homepage).", "Use hot sauce sparingly.", "Get extra guac."],
  },
  {
    id: "sliding-doors",
    type: "multiverse",
    subline: "In one universe you found the page. In this one, nope.",
    ideas: ["Try the other door (homepage).", "Rewind the timeline.", "Make different choices."],
  },
];

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const pickVariant = (excludeId?: string) => {
  const pool =
    excludeId && variations.length > 1
      ? variations.filter((v) => v.id !== excludeId)
      : variations;
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex] ?? variations[0];
};

export function NotFound() {
  const [variant, setVariant] = useState<Variation>(() => variations[0]);
  const [missingPath, setMissingPath] = useState("/???");
  const [diceFace, setDiceFace] = useState(diceFaces[0]);
  const [loading, setLoading] = useState(true);

  const rollTimers = useRef<{
    interval?: ReturnType<typeof setInterval>;
    timeout?: ReturnType<typeof setTimeout>;
  }>({});

  const startRoll = (excludeId?: string) => {
    if (rollTimers.current.interval) {
      clearInterval(rollTimers.current.interval);
    }
    if (rollTimers.current.timeout) {
      clearTimeout(rollTimers.current.timeout);
    }

    setLoading(true);
    rollTimers.current.interval = setInterval(() => {
      const next = diceFaces[Math.floor(Math.random() * diceFaces.length)];
      setDiceFace(next);
    }, 140);

    rollTimers.current.timeout = setTimeout(() => {
      const nextVariant = pickVariant(excludeId);
      setVariant(nextVariant);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("last-404-variant", nextVariant.id);
      }
      setLoading(false);
      if (rollTimers.current.interval) {
        clearInterval(rollTimers.current.interval);
        rollTimers.current.interval = undefined;
      }
      rollTimers.current.timeout = undefined;
    }, 900);
  };

  useEffect(() => {
    let lastId: string | undefined;
    if (typeof window !== "undefined") {
      setMissingPath(window.location?.pathname || "/???");
      lastId = sessionStorage.getItem("last-404-variant") || undefined;
    }
    startRoll(lastId);
    return () => {
      if (rollTimers.current.interval) {
        clearInterval(rollTimers.current.interval);
      }
      if (rollTimers.current.timeout) {
        clearTimeout(rollTimers.current.timeout);
      }
    };
  }, []);

  const copy = variant.subline.replace("{path}", missingPath);

  const HomeButton = ({ variant }: { variant: string }) => {
    const variants = {
      "lost-poster": "inline-flex items-center justify-center px-8 py-3 bg-yellow-300 text-black font-bold border-4 border-t-white border-l-white border-r-gray-800 border-b-gray-800 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5)] hover:shadow-[inset_-2px_-2px_0_rgba(255,255,255,0.5),inset_2px_2px_0_rgba(0,0,0,0.5)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)]",
      "cat": "inline-flex items-center justify-center px-8 py-3 bg-[#00ff00] text-black font-bold border-4 border-t-lime-400 border-l-lime-400 border-r-green-900 border-b-green-900 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5)]",
      "snack": "inline-flex items-center justify-center px-8 py-3 bg-[#ff00ff] text-yellow-300 font-bold border-4 border-t-pink-400 border-l-pink-400 border-r-purple-900 border-b-purple-900 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5)]",
      "multiverse": "inline-flex items-center justify-center px-8 py-3 bg-[#00ffff] text-blue-900 font-bold border-4 border-t-cyan-300 border-l-cyan-300 border-r-cyan-900 border-b-cyan-900 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5)]",
      "banana": "inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-red-600 font-bold border-4 border-t-yellow-300 border-l-yellow-300 border-r-orange-700 border-b-orange-700 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5)]",
      "ferret": "inline-flex items-center justify-center px-8 py-3 bg-lime-400 text-purple-900 font-bold border-4 border-t-lime-300 border-l-lime-300 border-r-green-800 border-b-green-800 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5)]",
      "retro": "inline-flex items-center justify-center px-8 py-3 bg-red-600 text-yellow-300 font-bold border-4 border-t-red-400 border-l-red-400 border-r-red-900 border-b-red-900 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5)]",
      "alien-abduction": "inline-flex items-center justify-center px-8 py-3 bg-green-500 text-black font-bold border-4 border-green-300 shadow-[0_0_10px_#0f0]",
      "haunted-house": "inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-purple-300 font-bold border-4 border-purple-900 shadow-[0_0_15px_rgba(128,0,128,0.5)]",
      "dice": "inline-flex items-center justify-center px-8 py-3 bg-gray-400 text-black font-bold border-4 border-t-white border-l-white border-r-gray-700 border-b-gray-700 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5)]",
    };
    return (
      <button
        type="button"
        onClick={() => {
          window.location.href = "/";
        }}
        className={variants[variant as keyof typeof variants] || variants.retro}
      >
        {variant === "retro" ? "🏠 HOME PAGE" : variant === "cat" ? ">> BACK <<" : "← BACK"}
      </button>
    );
  };

  const DiceLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 px-4" style={{ backgroundImage: 'repeating-conic-gradient(#c0c0c0 0% 25%, #808080 0% 50%)' }}>
      <div className="flex flex-col items-center gap-4 text-center bg-[#c0c0c0] border-4 border-t-white border-l-white border-r-gray-700 border-b-gray-700 p-12 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5)]">
        <div className="text-6xl font-black text-black animate-bounce">{diceFace}</div>
        <p className="text-lg font-bold text-red-600" style={{ fontFamily: 'Arial, sans-serif', textShadow: '2px 2px 0px yellow' }}>
          *** LOADING ERROR PAGE ***
        </p>
        <p className="text-sm text-blue-800 font-bold">
          Path: {missingPath}
        </p>
        <HomeButton variant="dice" />
        <p className="text-xs text-gray-600 mt-4">Best viewed in Netscape Navigator 4.0</p>
      </div>
    </div>
  );

  const LostPoster = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#ffff00] px-4 py-12 text-black relative overflow-hidden" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0z\' fill=\'%23ff0\'/%3E%3Cpath d=\'M20 0h20v20H20zM0 20h20v20H0z\' fill=\'%23ffa500\'/%3E%3Cpath d=\'M20 20h20v20H20z\' fill=\'%23ff0\'/%3E%3C/svg%3E")' }}>
      <div className="relative w-full max-w-3xl bg-white text-black border-8 border-black shadow-[8px_8px_0_rgba(0,0,0,1)] p-8" style={{ boxShadow: '8px 8px 0 black, 12px 12px 0 red' }}>
        <div className="text-center border-4 border-red-600 bg-yellow-200 p-4 mb-6">
          <p className="text-xl font-bold text-red-600" style={{ fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }}>
            ⚠️ MISSING PAGE ⚠️
          </p>
        </div>
        <div className="flex items-start gap-4">
          <Logo w={80} h={80} />
          <div>
            <h1 className="text-6xl font-black text-red-600" style={{ fontFamily: 'Impact, sans-serif', textShadow: '3px 3px 0 yellow, -1px -1px 0 black' }}>
              ERROR 404!
            </h1>
            <p className="mt-3 text-2xl font-bold text-blue-700">
              Missing: {missingPath}
            </p>
            <p className="mt-2 text-lg font-semibold text-black border-2 border-black bg-cyan-200 p-2">{copy}</p>
          </div>
        </div>
        <div className="mt-8 border-4 border-black bg-white p-4">
          <p className="font-bold text-lg mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>🔍 What to do:</p>
          {variant.ideas.map((idea, i) => (
            <div
              key={idea}
              className="border-2 border-blue-600 bg-[#add8e6] p-2 mb-2 text-sm font-bold text-black"
            >
              {i + 1}. {idea}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3 items-center">
          <HomeButton variant="lost-poster" />
          <div className="ml-4 bg-black text-lime-400 px-3 py-1 border-2 border-lime-400 font-mono text-sm">
            Visitor #001337
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs font-bold text-purple-700">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-xs text-gray-600 mt-1">This page is under construction! 🚧</p>
        </div>
      </div>
    </div>
  );

  const CatTerminal = () => (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-12 text-[#00ff00] font-mono relative overflow-hidden">
      <div className="w-full max-w-4xl border-4 border-[#00ff00] bg-black p-8 shadow-[8px_8px_0_rgba(0,255,0,0.5)]">
        <div className="border-b-2 border-[#00ff00] pb-3 mb-4">
          <p className="text-xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
            [😼 CAT ON KEYBOARD - SYSTEM ERROR]
          </p>
        </div>
        <pre className="text-sm leading-6 whitespace-pre-wrap bg-[#001100] border-2 border-[#00ff00] p-4" style={{ fontFamily: 'Courier New, monospace' }}>
{`C:\\WINDOWS> request ${missingPath}
Bad command or file name

C:\\WINDOWS> cat mashed keyboard
asdkfjhaskdjfh;laksjdf;lkasjdf

C:\\WINDOWS> ERROR: 404 (purring loudly)

NOTES: ${copy}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AVAILABLE COMMANDS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`}
        </pre>
        <ul className="mt-4 space-y-1 bg-[#001100] border-2 border-[#00ff00] p-4">
          {variant.ideas.map((idea, i) => (
            <li key={idea} className="flex items-start gap-2">
              <span className="text-yellow-400 font-bold">[{i + 1}]</span>
              <span>{idea}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-4">
          <HomeButton variant="cat" />
          <div className="text-[#00ff00] text-sm animate-pulse">Press any key to continue_</div>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          MS-DOS Version 6.22 © 1994 Microsoft Corporation
        </div>
      </div>
    </div>
  );

  const SnackMenu = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#ff00ff] px-4 py-12 text-black relative overflow-hidden" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ff00ff 0px, #ff00ff 10px, #ff69b4 10px, #ff69b4 20px)' }}>
      <div className="relative w-full max-w-3xl bg-yellow-300 shadow-[12px_12px_0_rgba(0,0,0,1)] border-8 border-double border-purple-900 p-10">
        <div className="border-8 border-dotted border-red-600 bg-cyan-200 p-6 mb-6 text-center" style={{ transform: 'rotate(-1deg)' }}>
          <p className="text-sm font-bold text-purple-900">🍕 Welcome to 🍕</p>
          <h1 className="text-6xl font-black text-red-600 my-2" style={{ fontFamily: 'Impact, sans-serif', textShadow: '4px 4px 0 yellow, -2px -2px 0 black', WebkitTextStroke: '2px black' }}>
            SNACK ZONE
          </h1>
          <p className="text-xl font-bold text-blue-700">ERROR: 404 CALORIES CONSUMED!</p>
        </div>
        <div className="bg-white border-4 border-black p-4 mb-4">
          <p className="font-bold text-lg mb-2" style={{ fontFamily: 'Comic Sans MS, cursive', color: '#ff00ff' }}>{copy}</p>
        </div>
        <div className="space-y-3 mb-6">
          <p className="text-center font-bold text-xl bg-lime-400 border-4 border-black p-2" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            🌟 MENU OPTIONS 🌟
          </p>
          {variant.ideas.map((idea, i) => (
            <div
              key={idea}
              className="flex items-center justify-between border-4 border-black p-3"
              style={{ backgroundColor: i % 2 === 0 ? '#ffccff' : '#ccffff' }}
            >
              <span className="font-bold text-lg">🍕 {idea}</span>
              <span className="font-black text-2xl text-red-600" style={{ fontFamily: 'Impact, sans-serif' }}>$4.04</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <HomeButton variant="snack" />
          <div className="bg-black text-yellow-300 px-4 py-2 border-2 border-yellow-300 font-bold animate-pulse">
            🔥 HOT! 🔥
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs font-bold">© 1999 PIZZA TIME</p>
        </div>
      </div>
    </div>
  );

  const Multiverse = () => (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white px-4 py-12 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      <div className="relative w-full max-w-4xl overflow-hidden border-4 border-[#00ffff] bg-black p-10 shadow-[0_0_20px_rgba(0,255,255,1),inset_0_0_20px_rgba(0,255,255,0.3)]">
        <div className="relative z-10">
          <div className="text-center mb-8 bg-[#00ffff] text-black p-4 border-4 border-white">
            <p className="text-sm font-bold animate-pulse">⚡ CYBERSPACE PORTAL ⚡</p>
            <h1 className="text-5xl font-black my-2" style={{ fontFamily: 'Impact, sans-serif', textShadow: '3px 3px 0 #ff00ff, -1px -1px 0 #00ff00' }}>
              WRONG UNIVERSE!
            </h1>
            <p className="text-xs font-bold">ERROR CODE: 404-MULTIVERSE</p>
          </div>
          <div className="bg-[#000080] border-4 border-[#00ffff] p-4 mb-6">
            <p className="text-[#00ffff] text-lg font-bold" style={{ fontFamily: 'Courier New, monospace' }}>{copy}</p>
          </div>
          <div className="space-y-3 mb-6">
            <div className="bg-yellow-400 text-black text-center font-bold py-2 border-4 border-white" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              PORTAL NAVIGATION OPTIONS:
            </div>
            {variant.ideas.map((idea, i) => (
              <div
                key={idea}
                className="border-4 border-[#00ffff] bg-[#000080] px-4 py-3 flex items-center gap-3"
              >
                <span className="text-yellow-300 text-2xl">🛸</span>
                <p className="text-[#00ffff] font-bold">{idea}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <HomeButton variant="multiverse" />
            <div className="bg-red-600 text-white px-4 py-2 border-4 border-yellow-300 font-bold" style={{ animation: 'blink 1s step-start infinite' }}>
              NEW!
            </div>
          </div>
          <div className="mt-6 text-center border-2 border-dashed border-[#00ffff] p-3">
            <p className="text-[#00ffff] text-sm font-mono">
              Welcome to the INFORMATION SUPERHIGHWAY! 🌐
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const Banana = () => (
    <div className="min-h-screen flex items-center justify-center bg-yellow-400 px-4 py-12 text-black relative overflow-hidden" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #ff0, #ff0 10px, #ffa500 10px, #ffa500 20px, #ff0 20px, #ff0 30px)' }}>
      <div className="absolute top-10 left-10 text-8xl opacity-30 animate-bounce">🍌</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-30">🍌</div>
      <div className="w-full max-w-3xl bg-orange-200 border-8 border-black shadow-[10px_10px_0_rgba(0,0,0,1)] overflow-hidden">
        <div className="bg-red-600 text-yellow-300 font-black text-center py-4 border-b-8 border-black" style={{ fontFamily: 'Impact, sans-serif', fontSize: '24px' }}>
          ⚠️⚠️⚠️ CAUTION: SLIPPERY PAGE ⚠️⚠️⚠️
        </div>
        <div className="p-8 bg-white">
          <div className="text-center mb-6 bg-yellow-300 border-4 border-black p-4">
            <h1 className="text-6xl font-black text-red-600 mb-2" style={{ fontFamily: 'Impact, sans-serif', textShadow: '4px 4px 0 black' }}>
              OOPS!
            </h1>
            <p className="text-3xl font-bold text-black" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              We slipped on a banana! 🍌
            </p>
          </div>
          <div className="bg-yellow-100 border-4 border-dotted border-orange-600 p-4 mb-6">
            <p className="text-xl font-bold text-black">{copy}</p>
          </div>
          <div className="bg-orange-300 border-4 border-black p-4 mb-6">
            <p className="text-center font-black text-2xl mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              🍌 RECOVERY OPTIONS 🍌
            </p>
            {variant.ideas.map((idea, i) => (
              <div
                key={idea}
                className="flex items-center gap-3 border-4 border-yellow-600 bg-yellow-200 px-4 py-3 mb-2"
              >
                <span className="text-4xl">🍌</span>
                <p className="font-bold text-lg">{idea}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <HomeButton variant="banana" />
            <div className="bg-black text-yellow-300 px-3 py-2 border-2 border-yellow-300">
              <p className="font-mono text-sm">Accidents: 404</p>
            </div>
          </div>
        </div>
        <div className="bg-black text-center py-2">
          <p className="text-yellow-300 text-xs font-mono">© 1997 Banana Slip Prevention Institute</p>
        </div>
      </div>
    </div>
  );

  const Ferret = () => (
    <div className="min-h-screen flex items-center justify-center bg-yellow-500 px-4 py-12 relative overflow-hidden" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fbbf24 0px, #fbbf24 20px, #000 20px, #000 40px)' }}>
      <div className="relative w-full max-w-3xl bg-white border-8 border-black p-10 overflow-hidden shadow-[12px_12px_0_rgba(0,0,0,0.5)]">
        <div className="relative">
          <div className="bg-black text-yellow-400 text-center py-3 border-b-8 border-yellow-400 mb-6">
            <p className="text-3xl font-black tracking-widest" style={{ fontFamily: 'Impact, sans-serif' }}>
              🚧 FERRET ZONE 🚧
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <span className="text-8xl animate-bounce">🦦</span>
            <div className="bg-yellow-100 border-4 border-black p-6 flex-1 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <h1 className="text-4xl font-black text-black mb-2" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                UNDER CONSTRUCTION
              </h1>
              <p className="text-xl font-bold text-gray-800">Our ferrets stole the cables!</p>
            </div>
          </div>
          <div className="bg-gray-100 border-4 border-dashed border-gray-400 p-6 mb-8">
            <p className="text-xl font-bold text-black font-mono">{copy}</p>
          </div>
          <div className="bg-orange-500 border-4 border-black p-6 mb-8">
            <p className="text-center font-black text-2xl mb-6 text-white uppercase tracking-wider">
              🔧 Recovery Protocols 🔧
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {variant.ideas.map((idea, i) => (
                <div
                  key={idea}
                  className="flex items-center gap-3 border-4 border-black bg-white px-4 py-3 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  <span className="text-2xl">🔩</span>
                  <p className="font-bold text-sm">{idea}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <HomeButton variant="ferret" />
            <div className="bg-yellow-400 border-4 border-black px-6 py-3 transform -rotate-2 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <p className="font-black text-black text-lg" style={{ fontFamily: 'Impact, sans-serif' }}>FERRET APPROVED!</p>
            </div>
          </div>
          <div className="mt-8 text-center bg-black text-yellow-400 py-3 border-t-4 border-yellow-400">
            <p className="text-sm font-mono">🚧 SITE FOREMAN: MR. WIGGLES 🚧</p>
          </div>
        </div>
      </div>
    </div>
  );

  const AlienAbduction = () => (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #0f0 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.2 }}></div>
      <div className="relative w-full max-w-3xl border-4 border-green-500 bg-black p-10 shadow-[0_0_50px_rgba(0,255,0,0.3)]">
        <div className="text-center mb-8">
          <p className="text-green-500 font-mono text-sm animate-pulse">&gt;&gt;&gt; INCOMING TRANSMISSION &lt;&lt;&lt;</p>
          <h1 className="text-6xl font-black text-green-500 my-4" style={{ fontFamily: 'Courier New, monospace', textShadow: '0 0 10px #0f0' }}>
            ABDUCTED
          </h1>
          <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 animate-[width_2s_ease-in-out_infinite]" style={{ width: '60%' }}></div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="relative">
            <span className="text-8xl animate-bounce block">👽</span>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-green-500/20 blur-xl rounded-full"></div>
          </div>
          <div className="border-2 border-green-500/50 bg-green-900/20 p-6 text-center w-full backdrop-blur-sm">
            <p className="text-xl font-bold text-green-400 font-mono">{copy}</p>
          </div>
        </div>

        <div className="grid gap-4 mb-8">
          {variant.ideas.map((idea, i) => (
            <div
              key={idea}
              className="flex items-center gap-4 border border-green-500/30 bg-green-900/10 p-4 hover:bg-green-900/30 transition-colors group"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform">🛸</span>
              <p className="text-green-400 font-mono text-sm">{idea}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-green-500/30 pt-6">
          <HomeButton variant="alien-abduction" />
          <div className="text-right">
            <p className="text-green-600 text-xs font-mono">SECTOR: 404-ZETA</p>
            <p className="text-green-600 text-xs font-mono">STATUS: MISSING</p>
          </div>
        </div>
      </div>
    </div>
  );

  const HauntedHouse = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill=\'%234b0082\'/%3E%3C/svg%3E")' }}></div>
      <div className="relative w-full max-w-3xl border-8 border-double border-purple-900 bg-gray-800 p-10 shadow-[0_0_100px_rgba(75,0,130,0.5)]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-7xl font-black text-purple-500 mb-2" style={{ fontFamily: 'Georgia, serif', textShadow: '4px 4px 0 #000' }}>
              GHOSTED!
            </h1>
            <p className="text-purple-300 text-xl italic font-serif">The page has moved on to the afterlife...</p>
          </div>

          <div className="bg-black/50 border-2 border-purple-900/50 p-8 mb-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-6xl opacity-20 rotate-12">👻</div>
            <p className="text-xl text-purple-200 font-serif text-center relative z-10 leading-relaxed">
              "{copy}"
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <p className="text-center text-purple-400 font-bold uppercase tracking-widest text-sm">Séance Options</p>
            {variant.ideas.map((idea, i) => (
              <div
                key={idea}
                className="flex items-center gap-4 bg-purple-900/20 border border-purple-500/20 p-4 hover:bg-purple-900/40 transition-all cursor-help"
              >
                <span className="text-2xl opacity-70">🕯️</span>
                <p className="text-purple-200 font-serif italic">{idea}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <HomeButton variant="haunted-house" />
            <div className="flex flex-col items-end">
              <span className="text-4xl animate-pulse">👻</span>
              <span className="text-xs text-purple-500 font-mono mt-1">ECTOPLASM DETECTED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Retro Arcade Theme
  const Retro = () => (
    <div className="min-h-screen flex items-center justify-center bg-red-700 text-white px-4 py-12 relative overflow-hidden" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #c00 0px, #c00 20px, #900 20px, #900 40px)' }}>
      <div className="relative w-full max-w-4xl border-8 border-yellow-300 bg-blue-800 p-10 shadow-[16px_16px_0_rgba(0,0,0,1)] overflow-hidden">
        <div className="relative z-10">
          <div className="bg-yellow-300 text-red-600 text-center py-4 border-8 border-black mb-6" style={{ boxShadow: 'inset 4px 4px 0 rgba(255,255,255,0.5), inset -4px -4px 0 rgba(0,0,0,0.5)' }}>
            <p className="text-sm font-bold">🎮 GAME OVER 🎮</p>
            <h1 className="text-7xl font-black my-2" style={{ fontFamily: 'Impact, sans-serif', textShadow: '5px 5px 0 black' }}>
              ERROR 404
            </h1>
            <p className="text-xl font-bold">INSERT COIN TO CONTINUE</p>
          </div>
          <div className="bg-cyan-200 border-4 border-black p-6 mb-6">
            <p className="text-2xl font-bold text-center text-purple-900 mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              LEVEL NOT FOUND!
            </p>
            <p className="text-lg font-bold text-black text-center">{copy}</p>
          </div>
          <div className="bg-white border-4 border-black p-4 mb-6">
            <p className="text-center font-black text-2xl mb-4 text-red-600" style={{ fontFamily: 'Impact, sans-serif' }}>
              🕹️ CONTINUE OPTIONS 🕹️
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {variant.ideas.map((idea, i) => (
                <div
                  key={idea}
                  className="flex items-center gap-3 border-4 border-purple-600 px-4 py-3"
                  style={{ backgroundColor: i % 2 === 0 ? '#ffff00' : '#00ffff' }}
                >
                  <span className="text-3xl">🕹️</span>
                  <p className="font-bold text-black">{idea}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <HomeButton variant="retro" />
            <div className="bg-black border-4 border-yellow-300 px-4 py-2">
              <p className="text-yellow-300 font-mono text-lg">CREDITS: 0</p>
            </div>
            <div className="bg-red-600 text-white border-4 border-white px-4 py-2 font-black animate-pulse">
              PRESS START
            </div>
          </div>
          <div className="mt-6 bg-black text-lime-400 p-3 border-4 border-lime-400 text-center font-mono">
            <p>HIGH SCORE: 133704 | PLAYER: AAA</p>
            <p className="text-sm mt-1">© 1995 RETRO GAMES INC.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const render = () => {
    const theme = variant.type || variant.id;
    switch (theme) {
      case "lost-poster":
        return <LostPoster />;
      case "cat":
        return <CatTerminal />;
      case "snack":
        return <SnackMenu />;
      case "multiverse":
        return <Multiverse />;
      case "banana":
        return <Banana />;
      case "ferret":
        return <Ferret />;
      case "alien-abduction":
        return <AlienAbduction />;
      case "haunted-house":
        return <HauntedHouse />;
      case "retro":
      default:
        return <Retro />;
    }
  };

  if (loading) {
    return <DiceLoader />;
  }

  return render();
}
