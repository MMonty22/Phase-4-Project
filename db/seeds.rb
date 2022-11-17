require 'faker'

puts 'Seeding Data' 

User.create([
    {
        username: "iluvcomedy",
        password: "comedyrocks1",
        user_review_count: 12
    },
    {
        username: "shmeggs44",
        password: "iheartlaughing1",
        user_review_count: 4
    },
    {
        username: "number1bearsfan",
        password: "justinfields1",
        user_review_count: 23
    },
    {
        username: "ihatecomedy",
        password: "comedysucks1",
        user_review_count: 1
    },
    {
        username: "chitown4ever",
        password: "mjisthegoat23",
        user_review_count: 52
    }
])

Comedian.create([
    {
        name: "Kevin Hart",
        bio: "Kevin Darnell Hart is an American comedian and actor. Originally known as a stand-up comedian, he has since starred in Hollywood films and on TV. He has also released several well-received comedy albums",
        average_rating: 4.8,
        review_count: 500
    },
    {
        name: "Jerry Seinfeld",
        bio: "Jerome Allen Seinfeld is an American stand-up comedian, actor, writer, and producer. He is best known for playing a semi-fictionalized version of himself in the sitcom Seinfeld, which he created and wrote with Larry David",
        average_rating: 4.9,
        review_count: 678
    },
    {
        name: "John Mulaney",
        bio: "John Edmund Mulaney is an American stand-up comedian, actor, writer, and producer. He first rose to prominence for his work as a writer on Saturday Night Live from 2008 to 2013, where he contributed to numerous sketches and characters, mainly Stefon, a recurring character that he and Bill Hader co-created; he has returned to host numerous times since leaving",
        average_rating: 4.5,
        review_count: 235
    },
    {
        name: "Wanda Sykes",
        bio: "Wanda Yvette Sykes is an American stand-up comedian, actress, and writer. She was first recognized for her work as a writer on The Chris Rock Show, for which she won a Primetime Emmy Award in 1999. In 2004, Entertainment Weekly named Sykes as one of the 25 funniest people in America.",
        average_rating: 4.7,
        review_count: 467
    },
    {
        name: "Nikki Glaser",
        bio: "Nicole Rene Glaser is an American stand-up comedian, actress, podcaster, radio host, and television host. She was the host of the television series Not Safe with Nikki Glaser, which premiered on Comedy Central and Much on February 9, 2016. She is the star of the 2022 reality show Welcome Home Nikki Glaser? on E!.",
        average_rating: 4.8,
        review_count: 355
    }
])

Review.create([
    {
        user_id: 1,
        comedian_id: 1,
        review_text: "Kevin Hart was fantastic, absolutely hilarious. Can't wait to see him again. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        rating: 10
    },
    {
        user_id: 2,
        comedian_id: 2,
        review_text: "Jerry Seinfeld is my favorite and the best stand up comedian there is. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        rating: 10
    },
    {
        user_id: 4,
        comedian_id: 3,
        review_text: "John Mulaney offended me and I will never go back to one of his shows. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        rating: 1
    },
    {
        user_id: 3,
        comedian_id: 4,
        review_text: "I highly recommend going to any Wanda Sykes show. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        rating: 8
    },
    {
        user_id: 5,
        comedian_id: 5,
        review_text: "Nikki Glaser is hilarious but a little too inappropriate at times. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        rating: 7
    }
])

# users = {username: Faker::Internet.unique.username, email: Faker::Internet.unique.safe_email, password: Faker::Internet.unique.password, user_review_count: Faker::Number.between(from: 1, to: 10)}

# 20.times do 
#     User.create(users)
# end

# reviews = {user_id: Faker::Number.unique.between(from: 1, to: 10), comedian_id: Faker::Number.unique.between(from: 1, to: 10), review_text: Faker::Lorem.paragraph, rating: Faker::Number.between(from: 1, to: 10)}

# 20.times do
#     Review.create(reviews)
# end

# comedians = {name: Faker::Name.unique.name, bio: Faker::Lorem.unique.paragraphs(number: 3), average_rating: Faker::Number.between(from: 0.0, to: 10.0), review_count: Faker::Number.unique.between(from: 1, to: 10)}

# 15.times do
#     Comedian.create(comedians)
# end

puts 'Done Seeding'