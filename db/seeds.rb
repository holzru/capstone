# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

40.times do
  User.create(username: Faker::Name.name, password: Faker::Internet.password, description: Faker::StarWars.quote)
end

pics = ["http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images-3_dwvvxt.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images-2_wnyqcq.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228002/images-15_e0ue5c.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images-17_afmrz9.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images-16_alefqd.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228004/images-10_yl8ehq.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228004/images-6_n3ouuh.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images_pfmg3j.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/imgres_trz09n.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/imgres-1_txf6ts.jpg"]

i = 0
10.times do
  Group.create(creator_id: (1..30).to_a.sample, name: Faker::StarWars.specie, description: Faker::StarWars.quote, location:"#{Faker::Address.street_address}, #{Faker::Address.city}", pic_url: pics[i] )
  i += 1
end

40.times do
  Event.create(creator_id: (1..30).to_a.sample, group_id: (1..10).to_a.sample, description: Faker::StarWars.quote, location: "#{Faker::Address.street_address}, #{Faker::Address.city}", category: Faker::StarWars.planet, date: Faker::Time.between(2.days.ago, Date.today, :all))
end
