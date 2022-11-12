require 'faker'

puts 'Seeding Data' 

users = {username: Faker::Internet.unique.username, email: Faker::Internet.unique.safe_email, password: Faker::Internet.unique.password, user_review_count: Faker::Number.between(from: 1, to: 10)}

20.times do 
    User.create(users)
end

reviews = {user_id: Faker::Number.unique.between(from: 1, to: 10), comedian_id: Faker::Number.unique.between(from: 1, to: 10), review_text: Faker::Lorem.paragraph, rating: Faker::Number.between(from: 1, to: 10)}

20.times do
    Review.create(reviews)
end

comedians = {name: Faker::Name.unique.name, bio: Faker::Lorem.unique.paragraphs(number: 3), average_rating: Faker::Number.between(from: 0.0, to: 10.0), review_count: Faker::Number.unique.between(from: 1, to: 10)}

15.times do
    Comedian.create(comedians)
end

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

puts 'Done Seeding'