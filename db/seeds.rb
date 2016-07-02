# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

GroupMembership.destroy_all
Group.destroy_all
Event.destroy_all
EventTicket.destroy_all
User.destroy_all

user_pics = ["http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/url_kpbpxn.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/linkedin_nnezdt.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/imgres_ozj99x.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/imgres-3_v6zvsu.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-13_fg3fz4.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-12_we6zmz.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-11_byarkq.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/images-10_vosd75.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/images-9_kunbfd.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/images-8_zolplm.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/images-7_hngkfv.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/images-6_k7fmg0.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/images-5_a5gta4.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312431/images-4_j4bao9.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/images-3_asabmi.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/images-2_fmelfp.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312431/images-1_f8pfrv.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/17_y1emnw.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312432/5_oah6md.png",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/imgres-2_tind4y.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/imgres-1_fbzfaj.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/images_rihzjt.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/images-31_wagejk.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/images-30_wxlgeo.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312434/images-29_dn0mmn.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312434/images-28_pc4ohg.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312434/images-27_dpikec.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312434/images-26_m6ynxj.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312434/images-25_c2y9hw.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312434/images-24_iqkapr.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312434/images-23_f9zn1a.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312434/images-22_oojonn.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312434/images-21_xa3lpt.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-20_mambh3.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-19_qtxz7c.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-18_umcusm.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-17_igvjnm.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-16_w2mtyj.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-15_cqzqxk.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-14_gpyrdn.jpg"]

pics = ["http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images-3_dwvvxt.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images-2_wnyqcq.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228002/images-15_e0ue5c.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images-17_afmrz9.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images-16_alefqd.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228004/images-10_yl8ehq.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228004/images-6_n3ouuh.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images_pfmg3j.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/imgres_trz09n.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/imgres-1_txf6ts.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres_atdfqm.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-10_un8whc.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-9_bgfyfp.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-8_f9wupl.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-7_ze11qd.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-6_nnrohf.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-5_kc0spn.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-4_wymnb5.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-3_lgzxsa.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-2_gevk2e.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313286/imgres-1_rubxjq.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images_tp1dtw.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-27_tk4agd.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-26_mdrq0s.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-25_mwfakd.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-24_zeqmmr.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-22_ocy6bm.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-23_pztnol.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-21_mgjulw.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-20_jqjath.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-19_wqhkvf.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313285/images-18_cszg8l.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-17_c9zr4e.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-16_gnd9nz.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-15_dwpll8.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-14_q0nyiu.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-13_z2czhw.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-12_rdkgva.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-11_cbnnih.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-10_tv92po.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-9_qch7rw.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-8_twgb3t.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-7_ag8qbs.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313284/images-6_olfggz.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313283/images-5_etx5vx.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313283/images-5_etx5vx.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313283/images-4_yzewkb.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313283/images-3_hz5bzl.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313283/images-2_wlywua.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313283/images-1_tkbcbl.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313283/events-heavenly-header_ozgn8a.jpg"]


u = 0
39.times do
  User.create(username: Faker::Name.name, password: Faker::Internet.password, description: Faker::StarWars.quote, pic_url: user_pics[u])
  u += 1
end



50.times do
  Group.create(creator_id: (1..39).to_a.sample, name: Faker::StarWars.specie, description: Faker::StarWars.quote, location:"#{Faker::Address.street_address}, #{Faker::Address.city}", pic_url: pics.sample )
end

100.times do
  Event.create(creator_id: (1..39).to_a.sample, title: Faker::StarWars.specie, group_id: (1..50).to_a.sample, description: Faker::StarWars.quote, location: "#{Faker::Address.street_address}, #{Faker::Address.city}", category: Faker::StarWars.planet, pic_url: pics.sample, date: Faker::Time.between(2.days.ago, Date.today, :all))
end

i = 0
while i < 200
  if EventTicket.create(user_id: (1..39).to_a.sample, event_id: (1..100).to_a.sample)
    i += 1
  end
end

j = 0
while j < 100
  if GroupMembership.create(user_id: (1..39).to_a.sample, group_id: (1..50).to_a.sample)
    j += 1
  end
end
