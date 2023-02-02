# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Product.destroy_all
    User.destroy_all
    Review.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('products')  
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    demo = User.create!(
      name: 'Demo User', 
      email: 'demo@user.io', 
      password: 'password'
    )

    user = User.create(
      name: 'Ryan Kok',
      email: 'ryanroykok@gmail.com',
      password: 'password'
    )

    user = User.create(
      name: 'Ego Prime',
      email: 'EgoP@gmail.com',
      password: 'password'
    )

    user = User.create(
      name: 'Onigiri Sen',
      email: 'onigirisen@gmail.com',
      password: 'password'
    )

    user = User.create(
      name: 'Justin Time',
      email: 'justintime@gmail.com',
      password: 'password'
    )

    user = User.create(
      name: 'Creative Cindy',
      email: 'cindycreates@gmail.com',
      password: 'password'
    )


    book1 = Product.create(
      {name: "It Starts with Us: A Novel (It Ends with Us)" ,
      description: "Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date.

      But her excitement is quickly hampered by the knowledge that, though they are no longer married, Ryle is still very much a part of her life—and Atlas Corrigan is the one man he will hate being in his ex-wife and daughter’s life.
      
      Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the “gripping, pulse-pounding” (Sarah Pekkanen, author of Perfect Neighbors) bestselling phenomenon It Ends with Us left off. Revealing more about Atlas’s past and following Lily as she embraces a second chance at true love while navigating a jealous ex-husband, it proves that “no one delivers an emotional read like Colleen Hoover” (Anna Todd, New York Times bestselling author).",
      category: "books",
      price: 15.29})

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/It_starts_with_Us.jpg')
    book1.photo.attach(io: file, filename: 'It_starts_with_Us.jpg')

    book2 = Product.create(
      {name:"Fairy Tale",
      description:"Charlie Reade looks like a regular high school kid, great at baseball and football, a decent student. But he carries a heavy load. His mom was killed in a hit-and-run accident when he was seven, and grief drove his dad to drink. Charlie learned how to take care of himself—and his dad. When Charlie is seventeen, he meets a dog named Radar and her aging master, Howard Bowditch, a recluse in a big house at the top of a big hill, with a locked shed in the backyard. Sometimes strange sounds emerge from it.

      Charlie starts doing jobs for Mr. Bowditch and loses his heart to Radar. Then, when Bowditch dies, he leaves Charlie a cassette tape telling a story no one would believe. What Bowditch knows, and has kept secret all his long life, is that inside the shed is a portal to another world.
      
      King's storytelling in Fairy Tale soars. This is a magnificent and terrifying tale in which good is pitted against overwhelming evil, and a heroic boy—and his dog—must lead the battle.
      
      Early in the Pandemic, King asked himself: “What could you write that would make you happy?”
      
      “As if my imagination had been waiting for the question to be asked, I saw a vast deserted city—deserted but alive. I saw the empty streets, the haunted buildings, a gargoyle head lying overturned in the street. I saw smashed statues (of what I didn't know, but I eventually found out). I saw a huge, sprawling palace with glass towers so high their tips pierced the clouds. Those images released the story I wanted to tell.”",
      category:"books",
      price: 18.49}
    )

    file = URI.open("https://ryamazon-seed.s3.amazonaws.com/fairy_tale.jpeg")
    book2.photo.attach(io: file, filename: 'fairy_tale.jpeg') 
   

    book3 = Product.create(
     { name: "Fire and Blood: 300 Years Before A Game of Thrones (The Targaryen Dynasty: The House of the Dragon)",
      description: "Centuries before the events of A Game of Thrones, House Targaryen—the only family of dragonlords to survive the Doom of Valyria—took up residence on Dragonstone. Fire & Blood begins their tale with the legendary Aegon the Conqueror, creator of the Iron Throne, and goes on to recount the generations of Targaryens who fought to hold that iconic seat, all the way up to the civil war that nearly tore their dynasty apart.

      What really happened during the Dance of the Dragons? Why was it so deadly to visit Valyria after the Doom? What were Maegor the Cruel's worst crimes? What was it like in Westeros when dragons ruled the skies? These are but a few of the questions answered in this essential chronicle, as related by a learned maester of the Citadel and featuring more than eighty-five black-and-white illustrations by artist Doug Wheatley—including five illustrations exclusive to the trade paperback edition. Readers have glimpsed small parts of this narrative in such volumes as The World of Ice & Fire, but now, for the first time, the full tapestry of Targaryen history is revealed.
      
      With all the scope and grandeur of Gibbon's The History of the Decline and Fall of the Roman Empire, Fire & Blood is the first volume of the definitive two-part history of the Targaryens, giving readers a whole new appreciation for the dynamic, often bloody, and always fascinating history of Westeros.",
      category: "books",
      price: 15.23}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/fire%26blood.jpg')
    book3.photo.attach(io: file, filename: 'fire%26blood.jpg')

    book4 = Product.create(
     { name:"Brown Bear, Brown Bear, What Do You See?",
      description:"A big happy frog, a plump purple cat, a handsome blue horse, and a soft yellow duck--all parade across the pages of this delightful book. Children will immediately respond to Eric Carle's flat, boldly colored collages. Combined with Bill Martin's singsong text, they create unforgettable images of these endearing animals.",
      category:"books",
      price: 4.55}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/brown_bear_brown_bear.jpg')
    book4.photo.attach(io: file, filename: 'brown_bear_brown_bear.jpg')

    book5 = Product.create(
      {name: "Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge and the Teachings of Plants",
      description: "Drawing on her life as an indigenous scientist, and as a woman, Kimmerer shows how other living beings―asters and goldenrod, strawberries and squash, salamanders, algae, and sweetgrass―offer us gifts and lessons, even if we've forgotten how to hear their voices. In reflections that range from the creation of Turtle Island to the forces that threaten its flourishing today, she circles toward a central argument: that the awakening of ecological consciousness requires the acknowledgment and celebration of our reciprocal relationship with the rest of the living world. For only when we can hear the languages of other beings will we be capable of understanding the generosity of the earth, and learn to give our own gifts in return.",
      category: "books",
      price: 15.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/braiding_sweetgrass.jpeg')
    book5.photo.attach(io: file, filename: 'braiding_sweetgrass.jpeg')


    book6 = Product.create(
      {name: "Beyond the Wand: The Magic and Mayhem of Growing Up a Wizard",
      description: "Tom Felton's adolescence was anything but ordinary. His early rise to fame in beloved films like The Borrowers catapulted him into the limelight, but nothing could prepare him for what was to come after he landed the iconic role of the Draco Malfoy, the bleached blonde villain of the Harry Potter movies. For the next ten years, he was at the center of a huge pop culture phenomenon and yet, in between filming, he would go back to being a normal teenager trying to fit into a normal school. 
 
      Speaking with great candor and his signature humor, Tom shares his experience growing up as part of the wizarding world while also trying to navigate the muggle world. He tells stories from his early days in the business like his first acting gig where he was mistaken for fellow blonde child actor Macaulay Culkin and his Harry Potter audition where, in a very Draco-like move, he fudged how well he knew the books the series was based on (not at all). He reflects on his experiences working with cinematic greats such as Alan Rickman, Sir Michael Gambon, Dame Maggie Smith, and Ralph Fiennes (including that awkward Voldemort hug). And, perhaps most poignantly, he discusses the lasting relationships he made over that decade of filming, including with Emma Watson, who started out as a pesky nine-year-old whom he mocked for not knowing what a boom mic was but who soon grew into one of his dearest friends. Then, of course, there are the highs and lows of fame and navigating life after such a momentous and life-changing experience.
       
      Tom Felton's Beyond the Wand is an entertaining, funny, and poignant must-read for any Harry Potter fan. Prepare to meet a real-life wizard.",
      category: "books",
      price: 19.58}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/beyond_the_wand.jpg')
    book6.photo.attach(io: file, filename: 'beyond_the_wand.jpg')

    book7 = Product.create(
      {name:"All My Rage: A Novel",
      description: "Lahore, Pakistan. Then.
      Misbah is a dreamer and storyteller, newly married to Toufiq in an arranged match. After their young life is shaken by tragedy, they come to the United States and open the Clouds' Rest Inn Motel, hoping for a new start.
       
      Juniper, California. Now.
      Salahudin and Noor are more than best friends; they are family. Growing up as outcasts in the small desert town of Juniper, California, they understand each other the way no one else does. Until The Fight, which destroys their bond with the swift fury of a star exploding.  
       
      Now, Sal scrambles to run the family motel as his mother Misbah’s health fails and his grieving father loses himself to alcoholism. Noor, meanwhile, walks a harrowing tightrope: working at her wrathful uncle’s liquor store while hiding the fact that she’s applying to college so she can escape him—and Juniper—forever.
       
      When Sal's attempts to save the motel spiral out of control, he and Noor must ask themselves what friendship is worth—and what it takes to defeat the monsters in their pasts and the ones in their midst.  
       
      From one of today's most cherished and bestselling young adult authors comes a breathtaking novel of young love, old regrets, and forgiveness—one that's both tragic and poignant in its tender ferocity.",
      category: "books",
      price: 9.05}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/all_my_rage.jpeg')
    book7.photo.attach(io: file, filename: 'all_my_rage.jpeg')

    book8 = Product.create(
      {name: "River of the Gods: Genius, Courage, and Betrayal in the Search for the Source of the Nile",
      description: "For millennia the location of the Nile River's headwaters was shrouded in mystery. In the 19th century, there was  a frenzy of interest in ancient Egypt. At the same time, European powers sent off waves of explorations intended to map the unknown corners of the globe - and extend their colonial empires.
 
      Richard Burton and John Hanning Speke were sent by the Royal Geographical Society to claim the prize for England. Burton spoke twenty-nine languages, and was a decorated soldier. He was also mercurial, subtle, and an iconoclastic atheist. Speke was a young aristocrat and Army officer determined to make his mark, passionate about hunting, Burton's opposite in temperament and beliefs.
       
      From the start the two men clashed. They would endure tremendous hardships, illness, and constant setbacks. Two years in, deep in the African interior, Burton became too sick to press on, but Speke did, and claimed he found the source in a great lake that he christened Lake Victoria. When they returned to England, Speke rushed to take credit, disparaging Burton. Burton disputed his claim, and Speke launched another expedition to Africa to prove it. The two became venomous enemies, with the public siding with the more charismatic Burton, to Speke's great envy. The day before they were to publicly debate,Speke shot himself.
       
      Yet there was a third man on both expeditions, his name obscured by imperial annals, whose exploits were even more extraordinary. This was Sidi Mubarak Bombay, who was enslaved and shipped from his home village in East Africa to India. When the man who purchased him died, he made his way into the local Sultan's army, and eventually traveled back to Africa, where he used his resourcefulness, linguistic prowess and raw courage to forge a living as a guide. Without Bombay and men like him, who led, carried, and protected the expedition, neither Englishman would have come close to the headwaters of the Nile, or perhaps even survived.
       
      In River of the Gods Candice Millard has written another peerless story of courage and adventure, set against the backdrop of the race to exploit Africa by the colonial powers.",
      category: "books",
      price: 19.59}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/river_of_the_gods.jpeg')
    book8.photo.attach(io: file, filename: 'river_of_the_gods.jpeg')

    book9 = Product.create(
      {name: "The Kaiju Preservation Society",
      description: "When COVID-19 sweeps through New York City, Jamie Gray is stuck as a dead-end driver for food delivery apps. That is, until Jamie makes a delivery to an old acquaintance, Tom, who works at what he calls “an animal rights organization.” Tom's team needs a last-minute grunt to handle things on their next field visit. Jamie, eager to do anything, immediately signs on.

      What Tom doesn't tell Jamie is that the animals his team cares for are not here on Earth. Not our Earth, at least. In an alternate dimension, massive dinosaur-like creatures named Kaiju roam a warm, human-free world. They're the universe's largest and most dangerous panda and they're in trouble.
      
      It's not just the Kaiju Preservation Society who have found their way to the alternate world. Others have, too. And their carelessness could cause millions back on our Earth to die.
      
      At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
      category: "books",
      price: 20.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/kaiju_preservation_society.jpeg')
    book9.photo.attach(io: file, filename: 'kaiju_preservation_society.jpeg')

    book10 = Product.create(
      {name: "Remarkably Bright Creatures: A Novel",
      description: "After Tova Sullivan's husband died, she began working the night shift at the Sowell Bay Aquarium, mopping floors and tidying up. Keeping busy has always helped her cope, which she's been doing since her eighteen-year-old son, Erik, mysteriously vanished on a boat in Puget Sound over thirty years ago.

      Tova becomes acquainted with curmudgeonly Marcellus, a giant Pacific octopus living at the aquarium. Marcellus knows more than anyone can imagine but wouldn't dream of lifting one of his eight arms for his human captors—until he forms a remarkable friendship with Tova.
      
      Ever the detective, Marcellus deduces what happened the night Tova's son disappeared. And now Marcellus must use every trick his old invertebrate body can muster to unearth the truth for her before it's too late. 
      
      Shelby Van Pelt's debut novel is a gentle reminder that sometimes taking a hard look at the past can help uncover a future that once felt impossible.",
      category: "books",
      price: 16.19}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/remarkably_bright_creatures.jpeg')
    book10.photo.attach(io: file, filename: 'remarkably_bright_creatures.jpeg')

    electronics1 = Product.create(
      {name: 'ASUS VP28UQG 28" 4K/UHD 3840x2160 1ms DP HDMI Adaptive Sync/FreeSync Eye Care Monitor',
      description: '28 inches 4K/UHD (3840 x 2160) with 1ms response time and Adaptive Sync/AMD Free Sync for immersive, crisp visuals featuring Display Port and dual HDMI connectivity; Viewing Angle (CR≧10) : 170°(H)/160°(V). HDCP : Yes. ASUS Eye Care technology lowers blue light and eliminates flickering to reduce eyestrain and ailments. Display colors is 1073.7 M 10 bit and maximum contrast ratio is 1000 : 1. It can allow a Adaptive Sync/Free Sync supported graphics source to dynamically adjust display refresh rate based on typical content frame rates for power efficient, virtually stutter free and low latency display update.',
      category: "electronics",
      price: 254.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/asus_vp28uqg28.jpg')
    electronics1.photo.attach(io: file, filename: 'asus_vp28uqg28.jpg')

    electronics2 = Product.create(
      {name: 'Skullcandy Crusher Evo Wireless Over-Ear Headphone - True Black',
      description: 'Crusher Adjustable Sensory Bass.
      Personal Sound customization via Skullcandy App.
      Up to 40 hours of battery life.
      Built-in Tile finding technology.
      Call, track and volume controls.Connectivity technology: Wired.Included components: User Guide.',
      category: "electronics",
      price: 178.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/skullcandy-crusher-evo.jpg')
    electronics2.photo.attach(io: file, filename: 'skullcandy-crusher-evo.jpg')

    electronics3 = Product.create(
      {name: "Arlo Pro 3 Floodlight Camera - Wireless Security, 2K Video & HDR, Color Night Vision, 2 Way Audio, Wire-Free, Direct to WiFi No Hub Needed, 160° View, Works with Alexa, White - FB1001",
      description: 'Security at its brightest - The motion sensor outdoor lights illuminate your property with 2000 Lumens of brightness or up to 3000 Lumens using the outdoor magnetic charging cable.Controller Type:Amazon Alexa.Connectivity protocol:Wi-Fi.Power source type:Battery Powered. Never miss a thing with a wider view - The outdoor camera wireless video offers a wide 160° diagonal viewing angle lens that has an auto image correction, reducing the fisheye effect. ',
      category: "electronics",
      price: 193.84}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/Arlo-Pro-3-Floodlight-Camera.jpg')
    electronics3.photo.attach(io: file, filename: 'Arlo-Pro-3-Floodlight-Camera.jpg')


    electronics4= Product.create(
      {name: 'Drift Ghost XL and Handlebar Mount',
      description: '9 HOURS BATTERY LIFE - Record all day at full HD 1080P without worrying your battery will die.
      IPX7 WATERPROOF - Use your Ghost XL in the rain, pool or snow and never have to worry about it getting damaged.
      ROTATING LENS - Easily align your shot regardless of the mounting position by turning the lens up to 300 degrees.',
      category: "electronics",
      price: 159.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/drift-ghost-xl-handleber-mount.jpg')
    electronics4.photo.attach(io: file, filename: 'drift-ghost-xl-handleber-mount.jpg')

    electronics5= Product.create(
      {name: 'Insignia 32-inch Class F20 Series Smart HD 720p Fire TV (NS-32F201NA22, 2021 Model)',
      description: '720p resolution: View your favorite movies, shows and games in high definition.
      Alexa voice control: The Alexa Voice Remote lets you easily control your entertainment, search across apps, switch inputs, and more using just your voice. Press and hold the voice button and ask Alexa to easily find, launch, and control content, and even switch to cable.
      Fire TV experience built-in - Watch over 1 Million streaming movies and TV episodes with access to tens of thousands of channels, apps, and Alexa skills.',
      category: "electronics",
      price: 179.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/Insignia-32-inch-class-f20.jpg')
    electronics5.photo.attach(io: file, filename: 'Insignia-32-inch-class-f20.jpg')

    electronics6= Product.create(
      {name: 'beyerdynamic DT 1770 Pro Studio Headphone, DT 1770 PRO (DT 1770 PRO)',
      description: 'Closed studio reference headphones for mixing, mastering, monitoring and recording, Made in Germany.
      250 ohms, 45 mm dynamic Tesla neodymium drivers.
      Single sided, detachable cable with mini-XLR connectors.Nominal sound pressure level:102 dBSPL (1mW/500Hz).
      Soft, replaceable ear pads and headband for long studio sessions.',
      category: "electronics",
      price: 529.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/beyerdynamic-dt-1770-pro.jpg')
    electronics6.photo.attach(io: file, filename: 'beyerdynamic-dt-1770-pro.jpg')

    electronics7= Product.create(
      {name: 'Fire TV Stick 4K, brilliant 4K streaming quality, TV and smart home controls, free and live TV',
      description: 'Cinematic experience - Watch in vibrant 4K Ultra HD with support for Dolby Vision, HDR, and HDR10+.
      Home theater audio with Dolby Atmos - Feel scenes come to life with support for immersive Dolby Atmos audio on select titles with compatible home audio systems.
      Endless entertainment - Stream more than 1 million movies and TV episodes from Netflix, Prime Video, Disney+, Peacock, and more, plus listen to millions of songs. Subscription fees may apply.',
      category: "electronics",
      price: 39.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/firesticktv.jpg')
    electronics7.photo.attach(io: file, filename: 'firesticktv.jpg')

    electronics8= Product.create(
      {name: 'Apple AirTag',
      description: 'Keep track of and find your items alongside friends and devices in the Find My app.
      Simple one-tap setup instantly connects AirTag with your iPhone or iPad.
      Play a sound on the built-in speaker to help find your things, or just ask Siri for help.
      Precision Finding with Ultra Wideband technology leads you right to your nearby AirTag (on select iPhone models).
      Find items further away with the help of hundreds of millions of Apple devices in the Find My Network.',
      category: "electronics",
      price: 28.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/apple-air-tag.jpg')
    electronics8.photo.attach(io: file, filename: 'apple-air-tag.jpg')

    electronics9= Product.create(
      {name: 'HP DeskJet 2755e Wireless Color All-in-One Printer with Bonus 6 Months Instant Ink with HP+',
      description: "6 FREE MONTHS INSTANT INK SUBSCRIPTION when you activate HP+ - Print up to 700 pages a month. Ink ships to you automatically so you never run out. After 6 months, monthly fee applies unless cancelled, and you'll save up to 50% on ink.
      INCLUDES FREE HP+ SMART FEATURES - Activate HP+ free to get advanced features for mobile printing, security, automatic updates and more. HP+ only works with an HP account, internet connection and Original HP Ink for the life of the printer.
      BEST FOR BASIC PRINTING - Print basic color documents like recipes, forms and travel documents",
      category: "electronics",
      price: 84.89}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/hp-deskjet-2755e.jpg')
    electronics9.photo.attach(io: file, filename: 'hp-deskjet-2755e.jpg')

    computers1= Product.create(
      {name: 'iBUYPOWER Pro Gaming PC Computer Desktop SlateMR 281a (AMD Ryzen 5 5600G 3.9 GHz, Nvidia Geforce RTX 3060 12GB, 16GB DDR4, 500GB NVME SSD',
      description: 'iBUYPOWER Pro Gaming PC Computer Desktop SlateMR 281a (AMD Ryzen 5 5600G 3.9 GHz, Nvidia Geforce RTX 3060 12GB, 16GB DDR4, 500GB NVME SSD, WiFi Ready, VR Ready, Windows 11 Home)
      Graphics: NVIDIA Geforce RTX 3060 12 GB Dedicated Gaming Video Card |1x HDMI | 3x Display Port
      Connectivity: 4 x USB 3.0 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | HD Audio Jacks: Line in / Front Speaker / Microphone',
      category: "computers",
      price: 949.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/ibuypower-progaming-pc-slatemr.jpg')
    computers1.photo.attach(io: file, filename: 'ibuypower-progaming-pc-slatemr.jpg')

    computers2= Product.create(
      {name: 'ROG Strix G10 Gaming Desktop PC, Intel Core i7-11700, GeForce RTX 3060, 16GB DDR4 RAM, 1TB PCIe SSD, Wi-Fi 5, Windows 11 Home, G10CE-AH766',
      description: "HYPER REALISM. IT'S ON - Reach another level of pc gaming realism with the powerful 11th Gen Intel Core i7-1170 processor and NVIDIA GeForce RTX 3060 (12GB) graphics with the visual fidelity of real-time ray tracing and the ultimate performance of AI-powered DLSS.
      JUMP INTO THE GAME - This gaming pc allows you to store all your game library in its a high-performance 1TB M.2 PCIe SSD with Optane Memory Boosts while also boasting a 16GB DDR4 RAM to speed up game load times.",
      category: "computers",
      price: 1078.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/rog-strix-g10-gaming-desktop.jpg')
    computers2.photo.attach(io: file, filename: 'rog-strix-g10-gaming-desktop.jpg')

    computers3= Product.create(
      {name: 'Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9 5900, 32GB 3466MHz RAM, 1TB SDD + 2TB HDD, NVIDIA GeForce RTX 3080- Black',
      description: "POWERFUL PERFORMANCE: The Alienware Aurora R14 Ryzen Edition Gaming Desktop PC was designed to empower gamers seeking computer and graphics horsepower with 12-core AMD Ryzen processors.
      NO WORLD IS TOO BIG: Power through your favorite games or edit your favorite maps seamlessly with 32GB 3466Mhz XMP overclockable DDR4 memory.",
      category: "computers",
      price: 2747.55}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/alienware-aurora-r14.jpg')
    computers3.photo.attach(io: file, filename: 'alienware-aurora-r14.jpg')

    computers4= Product.create(
      {name: 'Apple iMac 21.5in 2.7GHz Core i5 (ME086LL/A) All In One Desktop, 8GB Memory, 1TB Hard Drive, Mac OS X Mountain Lion (Renewed)',
      description: "POWERFUL PERFORMANCE: The Alienware Aurora R14 Ryzen Edition Gaming Desktop PC was designed to empower gamers seeking computer and graphics horsepower with 12-core AMD Ryzen processors.
      NO WORLD IS TOO BIG: Power through your favorite games or edit your favorite maps seamlessly with 32GB 3466Mhz XMP overclockable DDR4 memory.",
      category: "computers",
      price: 2747.55}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/apple-imac-21.5in.jpg')
    computers4.photo.attach(io: file, filename: 'apple-imac-21.5in.jpg')

    computers5= Product.create(
      {name: 'LG 34UC98-W 34-Inch 21:9 Curved UltraWide QHD IPS Monitor with Thunderbolt',
      description: "34 inches 21:9 curved QHD IPS monitor.
      Thunderbolt 2.0 (x 2).OS compatibility Windows.
      USB 3.0 quick charge.
      SRGB over 99 percent / color calibrated.
      Height / tilt adjustable stand.
      Screen split 2.0 (with PIP mode). Refresh rate 60 hertz.",
      category: "computers",
      price: 1179.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/lg-34uc98-w34-inch.jpg')
    computers5.photo.attach(io: file, filename: 'lg-34uc98-w34-inch.jpg') 

    petsupplies1 = Product.create(
      {name: "Dr. Elsey's Cat Litter",
      description: "PREMIUM QUALITY: A combination of premium texture and granule size made with 100% bentonite clay for maximum clumping creates litter particles that are just the right size.
      LOW DUST: Ideal for cats and owners who suffer from allergies with a 99.9% dust-free and hypoallergenic litter formulation.",
      category: "petsupplies",
      price: 45.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/dr-elsy-cat-litter.jpg')
    petsupplies1.photo.attach(io: file, filename: 'dr-elsy-cat-litter.jpg') 

    petsupplies2 = Product.create(
      {name: "Temptations Classic Crunchy and Soft Cat Treats, Tasty Chicken, Multiple Sizes",
      description: "Contains one (1) 30 ounce tub of Temptations Classic Cat Treats Tasty Chicken Flavor.
      Your adult cat can't wait to get their paws on these scrumptious cat food treats that are crunchy on the outside and soft on the inside.",
      category: "petsupplies",
      price: 14.04}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/temptations-classic.jpg')
    petsupplies2.photo.attach(io: file, filename: 'temptations-classic.jpg')

    petsupplies3 = Product.create(
      {name: "Chuckit! Ultra Ball Dog Toy",
      description: "ULTRA BOUNCE BALL: This ball toy for dogs entices play withhigh impact bouncing! Play fetch at the lake or pool thanks to the lightweight, buoyant design. Compatible with Chuckit! ball launcher.
      TOUGH & DURABLE: Rubber ball for dogs has a textured surface & a thick rubber core for aggressive chewers yet is soft on dog's mouths.",
      category: "petsupplies",
      price: 5.09}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/chuckit-ball-toy.jpg')
    petsupplies3.photo.attach(io: file, filename: 'chuckit-ball-toy.jpg')

    petsupplies4 = Product.create(
      {name: 'REPTI ZOO Reptile Glass Terrarium, 18" x 18" x 24" Front Opening, 30 Gallon Tank Large Reptile Terrarium (Knock-Down)',
      description: 'Size of 30 Gallon Terrarium RK0110 (※Patent Design): 18" x 18" x 24". Tough screen top provides ventilation and allows uvb and infrared penetration.
      Raised bottom frame in order to fit a substrate heater; And waterproof bottom can hold water for some amphibian pets.
      Separately front-openning doors make you feed your pet easily and prevent escape.',
      category: "petsupplies",
      price: 187.05}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/repti-z00.jpg')
    petsupplies4.photo.attach(io: file, filename: 'repti-z00.jpg')

    petsupplies5 = Product.create(
      {name: 'GREENIES Original Large Dog Natural Dental Treats (50 -100 lb. dogs)',
      description: 'Contains one (1) 36 ounce 24-count pack of Greenies Original Large Natural Dental Dog Treats; Natural Dog Treats Plus Vitamins, Minerals and Other Nutrients
      The unique texture of Greenies Dog Chews cleans down to the Gumline to fight plaque and tartar and freshen bad dog breath',
      category: "petsupplies",
      price: 36.98}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/greenies-origina.jpg')
    petsupplies5.photo.attach(io: file, filename: 'greenies-origina.jpg')

    beautyhealth1 = Product.create(
      {name: 'LifeAround2Angels Bath Bombs Gift Set 12 USA made Fizzies, Shea & Coco Butter Dry Skin Moisturize, Perfect for Bubble & Spa Bath.',
      description: '12 uniquely handcrafted bath bombs. Functional and relaxing. Great Mothers day gifts.
      Truly made in California, USA freshly with premium USA natural ingredients - fizzes with colors, will not stain your tub!
      Therapeutic and Moisturizing bath bombs, formulated for Normal/Dry skin.
      Developed and Created by us, a bath bomb company with passion.',
      category: "beautyhealth",
      price: 25.46}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/lifearound2angels-bathbombs.jpeg')
    beautyhealth1.photo.attach(io: file, filename: 'lifearound2angels-bathbombs.jpeg')

    beautyhealth2 = Product.create(
      {name: 'All in One Makeup Kit, Includes 12 Colors Eyeshadow Palette, SIGHTLING Foundation & Face Primer, Makeup Brush, Makeup Sponge, Eyebrow Soap',
      description: '【All In One Makeup Kit】 The All-in-one Christmas makeup Gift Set including 12 color matte eyeshadow palette, nude foundation, buff beige foundation,Face primer, 3pcs liquid lipsticks, Makeup brush, Eyebrow soap kit, 2pcs makeup sponges and 1PC Winged Eyeliner Stamp. Our foundation Makeup Kit is designed for the bold and the beautiful.',
      category: "beautyhealth",
      price: 25.46}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/all-in-one-make-up-kit.jpg')
    beautyhealth2.photo.attach(io: file, filename: 'all-in-one-make-up-kit.jpg')

    beautyhealth3 = Product.create(
      {name: "L'Oreal Paris Makeup Voluminous Lash Boosting Conditioning Primer Mascara, White Primer, 0.24 fl; oz.",
      description: "【Voluminous Lash Primer, the perfect partner to your favorite mascara to instantly boost every lash look; Lightweight eyelash primer instantly builds dramatic volume and length on each lash.
      L'Oreal Paris Mascara: Get the long, full eyelashes you love with our best mascaras and primers; Choose from our innovative volumizing formulas and variety of brushes.",
      category: "beautyhealth",
      price: 8.53}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/loreal-paris-make-up-lash.jpg')
    beautyhealth3.photo.attach(io: file, filename: 'loreal-paris-make-up-lash.jpg')

    beautyhealth4 = Product.create(
      {name: "Jan Marini - Age Intervention Eye Cream I Anti-Aging-.5 oz.",
      description: "Dramatically improve the appearance of wrinkles around the eye for an ultra-smooth eye contour. Reduce the apperance of lines and wrinkles around the eyes. ",
      category: "beautyhealth",
      price: 71.25}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/age-intervention-eye.jpg')
    beautyhealth4.photo.attach(io: file, filename: 'age-intervention-eye.jpg')

    beautyhealth5 = Product.create(
      {name: "Mario Badescu Body Breakout Kit,8 Fl Oz (Pack of 2)",
      description: "Cleanse and clarify troubled skin on your back, chest, and shoulders. This clarifying cleanser-toner duo is a two-step bodycare routine designed to deep clean problem-prone areas to encourage clearer-looking skin. Deep cleans and clarifies troubled skin on the back, chest, and shoulders. ",
      category: "beautyhealth",
      price: 22.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/mario-badescu-body.jpg')
    beautyhealth5.photo.attach(io: file, filename: 'mario-badescu-body.jpg')

    toyskidsbaby1 = Product.create(
      {name: "LeapFrog 100 Animals Book (Frustration Free Packaging), Pink",
      description: "Six double-sided, interactive pages feature animals from 12 categories such as the forest, the ocean and the shore.
      Explore three play modes that teach about animal names, animal sounds and fun facts.
      This fully bilingual book lets kids learn about animals and sing songs in English and Spanish.",
      category: "toyskidsbaby",
      price: 19.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/leapfrog-100-animals-book.jpg')
    toyskidsbaby1.photo.attach(io: file, filename: 'leapfrog-100-animals-book.jpg')

    toyskidsbaby2 = Product.create(
      {name: "Funko Pop! Deluxe: Marvel Sinister 6 - Spider-Man, Ryamazon Exclusive, Figure 7 of 7",
      description: "The Marvel Sinister Six series sets a whole new scene in your collection and it is exclusively available here.
      The Funko Pop! Deluxe Sinister Six series is comprised of 7 brand new, unique figures, which have bases that nest together to form a larger set display.",
      category: "toyskidsbaby",
      price: 29.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/funko-pop-spiderman.jpg')
    toyskidsbaby2.photo.attach(io: file, filename: 'funko-pop-spiderman.jpg')

    toyskidsbaby3 = Product.create(
      {name: "Star Wars Toys, Grogu Plush Figure from The Mandalorian with Sounds, Soft 'n Fuzzy [Ryamazon Exclusive]",
      description: "This Star Wars Grogu Soft 'N Fuzzy Plush brings cuddly comfort to fans everywhere.
      ​Press the Star Wars Grogu hand and it makes noises inspired by the series.",
      category: "toyskidsbaby",
      price: 30.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/grogu-plush.jpg')
    toyskidsbaby3.photo.attach(io: file, filename: 'grogu-plush.jpg')

    toyskidsbaby4 = Product.create(
      {name: "Gerber baby-boys 4 Pack Sleep 'N Play Footie",
      description: "Gerber Sleep 'n Plays are the ultimate footie pajamas baby is sure to love! These soft footies are made with 100% cotton, a comfortable fabric that's perfectly breathable to prevent irritation against baby's delicate skin. They're appropriate to use as newborn footie pajamas as they're made to comply with all safe sleep standards. They're also available in sizes all the way up to 6-9M to fit older or larger babies.",
      category: "toyskidsbaby",
      price: 24.95}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/gerber-baby-boys-footie.jpg')
    toyskidsbaby4.photo.attach(io: file, filename: 'gerber-baby-boys-footie.jpg')

    toyskidsbaby5 = Product.create(
      {name: "Hudson Baby Unisex Baby Plush Animal Face Robe, Pretty Elephant, One Size, 0-9 Months",
      description: "100% Polyester.
      Imported.
      Animal face plush hooded bath robe.
      Made with 100% plush fleece fabric.
      Soft and gentle on baby's skin.
      Optimal for everyday use.
      Affordable, high quality bath robe.",
      category: "toyskidsbaby",
      price: 10.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/Hudson-baby-robe.jpg')
    toyskidsbaby5.photo.attach(io: file, filename: 'Hudson-baby-robe.jpg')


    sports1 = Product.create(
      {name: "GRITRIVAL Electric Mountain Bike, BAFANG Motor 750W 48V 13.4AH, Ebike Top Speed 20MPH/32KMH, Shimano 7-Speed, 4.0 Fat Tire Electric Bike",
      description: "SUSTAINABLE STRONG POWER: The electric bike for adults is a 750W Bafang motor. The top speed of 20MPH still has strong power when the battery is only 10% left.",
      category: "sports",
      price: 1459.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/gritrival-mountain-bike.jpg')
    sports1.photo.attach(io: file, filename: 'gritrival-mountain-bike.jpg')

    sports2 = Product.create(
      {name: 'Magneto SUV Skateboards | Fully Assembled Complete 31" x 8.5" Standard Size | 7 Layer Canadian Maple Deck',
      description: "MADE BY SKATERS All of our boards are inspired by our location in Southern California, the birthplace of longboarding. We skate in all types of places, so we carefully created the SUV collection with high quality materials to give you the best possible skating experience. We also prioritize our customer service. We want you to be completely stoked with your new board, so we reply to all messages within 24 hours and will do our very best to ensure satisfaction and maximum cruising on our boards.",
      category: "sports",
      price: 109.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/magneto-skateboard.jpg')
    sports2.photo.attach(io: file, filename: 'magneto-skateboard.jpg')

    sports3 = Product.create(
      {name: 'Ugly Stik GX2 Spinning Reel and Fishing Rod Combo',
      description: "Ugly StikGX2 spinning rod.
      3 ball bearings plus one-way clutch instant anti-reverse bearing for smoother gear feel and instant hook sets.
      Machined double anodized aluminum spool with oversized bail wire for improved durability.",
      category: "sports",
      price: 111.92}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/ugly-stik-gx2.jpg')
    sports3.photo.attach(io: file, filename: 'ugly-stik-gx2.jpg')

    sports4 = Product.create(
      {name: 'Yes4All Cast Iron Adjustable Dumbbell Sets/ Selectorized Dumbbell 25, 40, 50, 55, 60, 100, 105 To 200LBS With Alloy Steel Connector',
      description: "SET OF 2 DUMBBELLS - 60 LBS TOTAL: TWO 14”x1” handles, FOUR 5-pound plates, FOUR 8-pound plates, FOUR collars.
      CAST IRON WEIGHT PLATES FIT 1-INCH STANDARD BAR: Accommodate all standard 1-inch handles. Durable cast iron plates covered with black paint finish preventing rust and corrosion for lifetime use",
      category: "sports",
      price: 62.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/yes4all-cast-iron-dumbbell.jpg')
    sports4.photo.attach(io: file, filename: 'yes4all-cast-iron-dumbbell.jpg')

    sports5 = Product.create(
      {name: "NFL PRO LINE Men's Maxx Crosby Black Las Vegas Raiders Team Replica Player Jersey",
      description: "Engineered and constructed to replicate Maxx Crosby's game day Pro-Cut jersey. Sizing Tip: Product runs true to size. For a looser fit, we recommend ordering one size larger than you normally wear.
      Printed Las Vegas Raiders wordmarks (where applicable), logos and sleeve details.",
      category: "sports",
      price: 129.99}
    )

    file = URI.open('https://ryamazon-seed.s3.amazonaws.com/raiders-jersey.jpg')
    sports5.photo.attach(io: file, filename: 'raiders-jersey.jpg')
    
    puts "Done!"

    1000.times do
      Review.create(
          title: Faker::Quote.fortune_cookie,
          body: Faker::Lorem.paragraph(sentence_count: 10, supplemental: false, random_sentences_to_add: 4),
          rating: rand(2..5).to_i,
          product_id: rand(0..45).to_i,
          user_id: rand(1..5).to_i,
      )
    end
end