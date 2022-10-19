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

    puts "Done!"
end