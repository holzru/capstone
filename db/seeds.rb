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

pics = [
"http://i.imgur.com/cplXyB9.jpg",
"http://i.imgur.com/zH38b9F.jpg",
"http://i.imgur.com/hLGH5uk.jpg",
"http://i.imgur.com/XebDpgg.jpg",
"http://i.imgur.com/IZXI25D.jpg",
"http://i.imgur.com/5oKFC99.png",
"http://i.imgur.com/rP71Q5Q.png",
"http://i.imgur.com/UiZyRzR.jpg",
"http://i.imgur.com/My4w4x8.jpg",
"http://i.imgur.com/ky1DeyK.jpg",
"http://i.imgur.com/NAJk1Ug.jpg",
"http://i.imgur.com/f3EkPYd.jpg",
"http://i.imgur.com/kITTstY.jpg",
"http://i.imgur.com/h87CV3E.jpg",
"http://i.imgur.com/E7xIZhR.jpg",
"http://i.imgur.com/gOV3A9n.jpg",
"http://i.imgur.com/Sh2MUph.jpg",
"http://i.imgur.com/4289nyZ.jpg",
"http://i.imgur.com/ASvfaZz.jpg",
"http://i.imgur.com/vWIdu7i.jpg",
"http://i.imgur.com/d4HTHLn.jpg",
"http://i.imgur.com/FQg4Smh.jpg",
"http://i.imgur.com/65ux6u5.jpg",
"http://i.imgur.com/7UXYO2v.jpg",
"http://i.imgur.com/IQMvO6T.jpg",
"http://i.imgur.com/L3nJtTp.jpg",
"http://i.imgur.com/3uVnDXv.jpg",
"http://i.imgur.com/wjwVSd6.jpg",
"http://i.imgur.com/bNIjZFI.jpg",
"http://i.imgur.com/FgnAFbn.jpg",
"http://i.imgur.com/aep8iYg.jpg",
"http://i.imgur.com/cRJIxQU.jpg",
"http://i.imgur.com/rxF4HLf.jpg",
"http://i.imgur.com/41mUMjv.jpg",
"http://i.imgur.com/8VtKX7m.jpg",
"http://i.imgur.com/gtQleoO.jpg",
"http://i.imgur.com/6SflI8T.jpg",
"http://i.imgur.com/jZd5CmL.jpg",
"http://i.imgur.com/ho13B5Y.jpg",
"http://i.imgur.com/GgimzYF.jpg",
"http://i.imgur.com/ZDRc3nh.jpg",
"http://i.imgur.com/cWa31CI.jpg",
"http://i.imgur.com/5lOpD6q.jpg",
"http://i.imgur.com/gFqQ0wz.jpg",
"http://i.imgur.com/Q6lvD2i.jpg",
"http://i.imgur.com/bHeua0x.jpg",
"http://i.imgur.com/cqQPcwY.jpg",
"http://i.imgur.com/r7Aw4Qt.jpg",
"http://i.imgur.com/NYLVaCL.jpg",
"http://i.imgur.com/zWBvjHo.jpg",
"http://i.imgur.com/s5ymPAe.jpg",
"http://i.imgur.com/DcXdzZD.jpg",
"http://i.imgur.com/Mya9kCh.jpg",
"http://i.imgur.com/uPP8LVU.jpg",
"http://i.imgur.com/gHG2SCQ.jpg",
"http://i.imgur.com/WNaJ9vb.jpg",
"http://i.imgur.com/dzBG7Lv.jpg",
"http://i.imgur.com/v3yJIJt.jpg",
"http://i.imgur.com/HErJnuC.jpg",
"http://i.imgur.com/pUTkBEj.jpg",
"http://i.imgur.com/BPbV1sI.jpg",
"http://i.imgur.com/MP84GDv.jpg",
"http://i.imgur.com/FWE7lq9.jpg",
"http://i.imgur.com/xHRJORX.jpg",
"http://i.imgur.com/wDK1jJM.jpg",
"http://i.imgur.com/DrpdDaR.jpg",
"http://i.imgur.com/gxhZpEQ.jpg",
"http://i.imgur.com/DovXsb8.jpg",
"http://i.imgur.com/6YNQ8oo.jpg",
"http://i.imgur.com/e22ThLd.jpg",
"http://i.imgur.com/HBPMWY2.jpg",
"http://i.imgur.com/vkKo1rz.jpg",
"http://i.imgur.com/lNlxSzK.jpg",
"http://i.imgur.com/MZ1WPRP.jpg",
"http://i.imgur.com/lsikHS0.jpg",
"http://i.imgur.com/3yamfwD.jpg",
"http://i.imgur.com/dws0ouk.jpg",
"http://i.imgur.com/1H6JYWH.jpg",
"http://i.imgur.com/C0FxNge.jpg",
"http://i.imgur.com/r4ien5x.jpg",
"http://i.imgur.com/oP8qicG.jpg",
"http://i.imgur.com/UjO72L2.jpg",
"http://i.imgur.com/Ocb68tB.jpg",
"http://i.imgur.com/35Vv9SE.jpg",
"http://i.imgur.com/zZxwQ9s.jpg",
"http://i.imgur.com/qP6UM4H.jpg",
"http://i.imgur.com/AcHIxrZ.jpg",
"http://i.imgur.com/NvQ5Tq4.jpg",
"http://i.imgur.com/dEoVbGM.jpg",
"http://i.imgur.com/zkCf7U7.jpg",
"http://i.imgur.com/Im0JGyU.jpg",
"http://i.imgur.com/cplXyB9.jpg",
"http://i.imgur.com/zH38b9F.jpg",
"http://i.imgur.com/hLGH5uk.jpg",
"http://i.imgur.com/XebDpgg.jpg",
"http://i.imgur.com/IZXI25D.jpg",
"http://i.imgur.com/5oKFC99.png",
"http://i.imgur.com/rP71Q5Q.png",
"http://i.imgur.com/UiZyRzR.jpg",
"http://i.imgur.com/My4w4x8.jpg",
"http://i.imgur.com/ky1DeyK.jpg",
"http://i.imgur.com/NAJk1Ug.jpg",
"http://i.imgur.com/f3EkPYd.jpg",
"http://i.imgur.com/kITTstY.jpg",
"http://i.imgur.com/h87CV3E.jpg",
"http://i.imgur.com/E7xIZhR.jpg",
"http://i.imgur.com/gOV3A9n.jpg",
"http://i.imgur.com/Sh2MUph.jpg",
"http://i.imgur.com/4289nyZ.jpg",
"http://i.imgur.com/ASvfaZz.jpg",
"http://i.imgur.com/vWIdu7i.jpg",
"http://i.imgur.com/d4HTHLn.jpg",
"http://i.imgur.com/FQg4Smh.jpg",
"http://i.imgur.com/65ux6u5.jpg",
"http://i.imgur.com/7UXYO2v.jpg",
"http://i.imgur.com/IQMvO6T.jpg",
"http://i.imgur.com/L3nJtTp.jpg",
"http://i.imgur.com/3uVnDXv.jpg",
"http://i.imgur.com/wjwVSd6.jpg",
"http://i.imgur.com/bNIjZFI.jpg",
"http://i.imgur.com/FgnAFbn.jpg",
"http://i.imgur.com/aep8iYg.jpg",
"http://i.imgur.com/cRJIxQU.jpg",
"http://i.imgur.com/rxF4HLf.jpg",
"http://i.imgur.com/41mUMjv.jpg",
"http://i.imgur.com/8VtKX7m.jpg",
"http://i.imgur.com/gtQleoO.jpg",
"http://i.imgur.com/6SflI8T.jpg",
"http://i.imgur.com/jZd5CmL.jpg",
"http://i.imgur.com/ho13B5Y.jpg",
"http://i.imgur.com/GgimzYF.jpg",
"http://i.imgur.com/ZDRc3nh.jpg",
"http://i.imgur.com/cWa31CI.jpg",
"http://i.imgur.com/5lOpD6q.jpg",
"http://i.imgur.com/gFqQ0wz.jpg",
"http://i.imgur.com/Q6lvD2i.jpg",
"http://i.imgur.com/bHeua0x.jpg",
"http://i.imgur.com/cqQPcwY.jpg",
"http://i.imgur.com/r7Aw4Qt.jpg",
"http://i.imgur.com/NYLVaCL.jpg",
"http://i.imgur.com/zWBvjHo.jpg",
"http://i.imgur.com/s5ymPAe.jpg",
"http://i.imgur.com/DcXdzZD.jpg",
"http://i.imgur.com/Mya9kCh.jpg",
"http://i.imgur.com/uPP8LVU.jpg",
"http://i.imgur.com/gHG2SCQ.jpg",
"http://i.imgur.com/WNaJ9vb.jpg",
"http://i.imgur.com/dzBG7Lv.jpg",
"http://i.imgur.com/v3yJIJt.jpg",
"http://i.imgur.com/HErJnuC.jpg",
"http://i.imgur.com/pUTkBEj.jpg",
"http://i.imgur.com/BPbV1sI.jpg",
"http://i.imgur.com/MP84GDv.jpg",
"http://i.imgur.com/FWE7lq9.jpg",
"http://i.imgur.com/xHRJORX.jpg",
"http://i.imgur.com/wDK1jJM.jpg",
"http://i.imgur.com/DrpdDaR.jpg",
"http://i.imgur.com/gxhZpEQ.jpg",
"http://i.imgur.com/DovXsb8.jpg",
"http://i.imgur.com/6YNQ8oo.jpg",
"http://i.imgur.com/e22ThLd.jpg",
"http://i.imgur.com/HBPMWY2.jpg",
"http://i.imgur.com/vkKo1rz.jpg",
"http://i.imgur.com/lNlxSzK.jpg",
"http://i.imgur.com/MZ1WPRP.jpg",
"http://i.imgur.com/lsikHS0.jpg",
"http://i.imgur.com/3yamfwD.jpg",
"http://i.imgur.com/dws0ouk.jpg",
"http://i.imgur.com/1H6JYWH.jpg",
"http://i.imgur.com/C0FxNge.jpg",
"http://i.imgur.com/r4ien5x.jpg",
"http://i.imgur.com/oP8qicG.jpg",
"http://i.imgur.com/UjO72L2.jpg",
"http://i.imgur.com/Ocb68tB.jpg",
"http://i.imgur.com/35Vv9SE.jpg",
"http://i.imgur.com/zZxwQ9s.jpg",
"http://i.imgur.com/qP6UM4H.jpg",
"http://i.imgur.com/AcHIxrZ.jpg",
"http://i.imgur.com/NvQ5Tq4.jpg",
"http://i.imgur.com/dEoVbGM.jpg",
"http://i.imgur.com/zkCf7U7.jpg",
"http://i.imgur.com/Im0JGyU.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593369/sky_for_dreamers_by_rhads-d6gbpqu_bqknq9.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593512/nature_salvation_by_rhads-d83ai0z_jc3skj.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593517/beautiful_world_by_rhads-d7iotc1_l9ydrj.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593603/great_migration_by_rhads-d8u3g5q_at6uuz.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593645/endless_journey_by_rhads-d5jyend_umlzrq.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593687/blue_planet_by_yuumei-d62mn5b_ocpa4o.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593732/somewhere_near__but_far_in_time__by_megatruh-d4nz3s5_pr7ryi.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593760/stairway_to_the_sky___by_megatruh-d5dj2ik_oaffr4.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593801/phantasmagoria___by_megatruh-d4172as_l1porm.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593833/berangkat__by_megatruh-d3aivav_bgdxon.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593873/infinite_dreams_by_rhads-d5eywh4_sne04d.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593896/very_secret_garden___by_megatruh-d51qr2f_spjagq.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593921/weightless_and_horizontal___by_megatruh-d537h4a_jwvqd4.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593952/firdous_e_bareen___by_megatruh-d46e5uf_z08nom.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465593977/illuminate_my_heart__by_megatruh-d5lqf10_re9eig.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465594000/sailing_home_by_megatruh-d6d7ryd_ttsfl6.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465594034/up___by_megatruh-d30dsjy_zlfiyt.png",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465594067/flood___by_megatruh-d64jk09_d4evx3.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465594102/the_world_is_new___by_megatruh-d5uar1y_oi5lts.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465594126/deserere___by_megatruh-d5k9246_cb1pkx.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465594150/quiet_calamity_by_megatruh-d76k76f_ni9qng.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465594192/1f50891b645f6f0435dd8dce5120514f-d9fydcs_ltsfno.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465594224/bc85aab5186cdeae4076abdef5afafad-d8lr3th_xsrznu.jpg",
"https://res.cloudinary.com/kasperkuo/image/upload/v1465594256/the_heavens_and_us__with_video_tutorial_link__by_yuumei-d9jrqmp_y1jgve.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661062/NationalGeographic_1203310_zrgfit.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661075/150501-bestpod-volcANO_xgdcma.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661089/20664938416_4e4b224684_h_n2ifi6.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661105/bcvSSgM_odg9sb.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661116/1SHZTmz_ggwsom.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661123/yK3VDgP_eyxzz9.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661141/16493978338_14fd41834b_k_fliej8.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661131/aszTgRJ_gmqeca.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661150/KuuXhnf_iab4q8.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661159/mUahqUu_vmpyjy.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661170/24095017555_2458b2270c_b_iyvp2s.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661178/main_1500_llkyb9.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661188/qFFh3YV_uoziuk.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661200/16457479519_71367787fa_o_zpxhhe.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661208/M1n9KtF_clbtz8.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661217/15600704708_2b0066defa_o_yc1rwp.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661225/2GmDJD1_molqyz.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661234/9lDdLYR_eeddqc.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661242/6837511573_b36f2798ea_b_qwwxna.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661254/KFuI29B_rp0bm9.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661262/7958523808_02ce5acaf9_b_e049dq.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661270/prod-yourshot-345431-6054565_rywv0c.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661278/photo-1447877085163-3cce903855cd_qfipfc.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661288/photo-1453282716202-de94e528067c_mtrksq.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661298/photo-1442473483905-95eb436675f1_vmfnrv.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661308/photo-1440589473619-3cde28941638_nxjjsh.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661318/photo-1453743327117-664e2bf4e951_cvb6rz.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661327/photo-1452800185063-6db5e12b8e2e_gif9lw.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661336/photo-1452716726610-30ed68426a6b_lkgfig.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661346/photo-1451188502541-13943edb6acb_zdu9qo.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661355/photo-1451337516015-6b6e9a44a8a3_sitza8.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661364/photo-1443890484047-5eaa67d1d630_vs2gpb.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661372/photo-1448518184296-a22facb4446f_lzeaq6.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661388/photo-1451186859696-371d9477be93_xjz2dz.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661401/photo-1448960968772-b63b3f40dfc1_b9jiet.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661406/BymaSga_k6zhri.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661414/OIOOtKc_ez9whd.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661421/Wb1t8wP_dzerkk.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661428/y3PuWIf_r6xeeu.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661435/YBX6uEG_wpfcjy.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661443/fZx1Sct_mpaqvk.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661450/OmHviNk_fwas4y.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661457/HOSg2FC_xbmxo9.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661467/surfer-summer_dqrr1e.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661476/STEVE-McQUEEN_pbuhmo.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661482/Attractive-Man_dpufor.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661490/landscape_nrm_1420743157-bond_dop2ob.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467228003/images-3_dwvvxt.jpg",
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
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467313283/events-heavenly-header_ozgn8a.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339505/backgrounds/Lakes.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339268/backgrounds/panorama-sali2000.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339250/backgrounds/_DSC1434.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339241/backgrounds/_DSC0320.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339201/backgrounds/manali_to_leh_road.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339181/backgrounds/4964-4967.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339155/backgrounds/20160229092748-1bb97924-xx.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339137/backgrounds/unionsquare_panorama_wideangle_306923_o.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339102/backgrounds/landscape-photography-argentina-landscape-lenticular-cloud-natural-landscape-panorama-patagonia-ultra-wide-angle-lens-landscape-1643236926.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467339046/backgrounds/ultra_wide_hougang_hdr_by_draken413o.jpg",
"http://res.cloudinary.com/joyjing1/image/upload/v1467338932/backgrounds/photo-1414694762283-acccc27bca85.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661062/NationalGeographic_1203310_zrgfit.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661075/150501-bestpod-volcANO_xgdcma.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661089/20664938416_4e4b224684_h_n2ifi6.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661105/bcvSSgM_odg9sb.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661116/1SHZTmz_ggwsom.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661123/yK3VDgP_eyxzz9.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661141/16493978338_14fd41834b_k_fliej8.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661131/aszTgRJ_gmqeca.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661150/KuuXhnf_iab4q8.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661159/mUahqUu_vmpyjy.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661170/24095017555_2458b2270c_b_iyvp2s.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661178/main_1500_llkyb9.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661188/qFFh3YV_uoziuk.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661200/16457479519_71367787fa_o_zpxhhe.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661208/M1n9KtF_clbtz8.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661217/15600704708_2b0066defa_o_yc1rwp.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661225/2GmDJD1_molqyz.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661234/9lDdLYR_eeddqc.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661242/6837511573_b36f2798ea_b_qwwxna.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661254/KFuI29B_rp0bm9.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661262/7958523808_02ce5acaf9_b_e049dq.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661270/prod-yourshot-345431-6054565_rywv0c.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661278/photo-1447877085163-3cce903855cd_qfipfc.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661288/photo-1453282716202-de94e528067c_mtrksq.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661298/photo-1442473483905-95eb436675f1_vmfnrv.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661308/photo-1440589473619-3cde28941638_nxjjsh.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661318/photo-1453743327117-664e2bf4e951_cvb6rz.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661327/photo-1452800185063-6db5e12b8e2e_gif9lw.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661336/photo-1452716726610-30ed68426a6b_lkgfig.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661346/photo-1451188502541-13943edb6acb_zdu9qo.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661355/photo-1451337516015-6b6e9a44a8a3_sitza8.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661364/photo-1443890484047-5eaa67d1d630_vs2gpb.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661372/photo-1448518184296-a22facb4446f_lzeaq6.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661388/photo-1451186859696-371d9477be93_xjz2dz.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661401/photo-1448960968772-b63b3f40dfc1_b9jiet.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661406/BymaSga_k6zhri.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661414/OIOOtKc_ez9whd.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661421/Wb1t8wP_dzerkk.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661428/y3PuWIf_r6xeeu.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661435/YBX6uEG_wpfcjy.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661443/fZx1Sct_mpaqvk.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661450/OmHviNk_fwas4y.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661457/HOSg2FC_xbmxo9.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661467/surfer-summer_dqrr1e.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661476/STEVE-McQUEEN_pbuhmo.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661482/Attractive-Man_dpufor.jpg",
"http://res.cloudinary.com/dpxg23zze/image/upload/v1457661490/landscape_nrm_1420743157-bond_dop2ob.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493313/thzgb2kduwpmerebpetd.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493344/bcnlz9mmdyd1xpmcpf6g.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493369/fwhwyw0l2texrht2kur3.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493404/m8jory3ecgnzposrepcw.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493434/l1yct3oit8sjbv4fkqlb.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493496/qty5ntm1grqpyd5iui2s.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493532/nkudwc9snztiyziptsqw.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493560/rqtievmqmdrnqfnxxayd.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493589/tlbgplr1epvodxkgdreh.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493626/uwlgpuwxku1ujygeyoyv.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462493658/qmgeeefnz5xqdlysxhyy.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496374/plfyva0etvqoeddehv7r.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497934/mlya6d3qtjlzhjaeqxqo.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497958/brzn9hordo6z0wdj31ki.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497989/a1hehbmmzom0fudntfsf.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462498018/fvmurhgom9mevoxwag9t.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462498036/sdisjlikjcvl8ervrmec.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462498063/sf6vfbitthnianno0wvx.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462498092/ioly0ajooaiise36cxts.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462498113/fgljw8rjzc0q57etxjt3.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462498139/m2t6vq6px2omtvhmm2vk.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462498165/vdoyr54a2bmdssobslyd.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462498199/tfyshixuqzvsxdvizv7u.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462498227/hkobpausp7v9q1mxztuo.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499173/ewkqjeglibkanuogezvx.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499231/hf1ptfvo8k4nglp3t1si.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499255/j3pclqbzfwj11w0vr4re.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499276/ecyc470fhgjrtee21klp.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499295/q9bgevbzghdt7w028kzw.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499323/amp4vheqnxjpm9zkbdct.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499355/otszdulakdvircjuyiy9.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499385/lsjuqu7st82xmovsnqgl.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499420/svpliu4wtrpfsdehskhz.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499461/mnhcqnd6qitnh81zlj6w.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499513/me0hqtvfjabsbj0nlln5.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462499551/iy7twq4bktpn29eikwf4.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497391/c2ud3odowyx0zjy7dczh.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497319/jcdadwcuoadguuofj3zz.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497345/hfxxd41fktaftqabdygz.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497364/mirapbblyykxsrlbbjst.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497423/upmwnxvts3zlev1ay3nk.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497460/ilntsji03iyu8xvbjru4.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497490/lljj06biska0c7h7ohts.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497521/qsmqj3lud2rlwhda25by.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497551/afxx6lz6aq5sya2yvdf7.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497573/fhhequkdyllqcdcctigh.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497593/d5vpgxg49dzfdlnla3cy.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497625/opqjaiisbap8xfm6vgpw.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496729/emhubfn42v3glceziepz.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496765/cdufvg7wgikx2u9xk17o.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496785/ehjuvjo7swohqvs0c2bk.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496814/vrwbdz9iafjczvdnlyld.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496849/qvqs78pneq3lyxjbteqy.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496876/cta9oby4fkb8ftnvqb0b.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496901/hp87c9g7e4enwlv0iyof.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496938/ndctxvzb1tsdn1jbbxb7.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462496992/hryjhdc7wwninxubtw9h.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497069/kbqezg0erobjl1o4xkyt.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497094/bdj4hh1fn478ymhscgzu.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462497158/z46cz85ta0oqvwsefty6.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505273/gimufzvcleo8o0ikzkfz.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505050/ccqsppetbwz7ymhns5go.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505080/b1hs6qqey5akgmtp8qpu.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505114/ygkgs7pm3vwbt4sr5moc.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505134/ku4zez5u7ain5qptxocm.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505177/ysw28j2taatn2qekfcef.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505241/aw3m9bh5a0n2chwr2m08.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505319/vy90xopgv9qftp6yu8fy.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505453/gmfh8gzs1gs7i2whsnow.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505557/dxnuxcu3zj1kxfhknsyw.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462505599/a6a9qjjnrfbdp5uy4vhv.jpg",
"http://res.cloudinary.com/fstop/image/upload/v1462514155/dx6xcyusvhfnsbstmeyi.jpg"]


user_pics = ["http://res.cloudinary.com/dywbzmakl/image/upload/v1467772906/url_b6xfhb.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772906/url-1_mn7ltf.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772906/tsm_bjergsen-profile_image-d743788675571b95-300x300_aczxat.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772906/time-person_bhihnj.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772905/time-person-of-the-year-poll-malala-yousafzai_jnk41u.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772906/thenoosh22-profile_image-860424456137cc95-300x300_mimomd.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772906/sweet-girl-profile-pic_bba9vd.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772908/stephen-curry-most-fascinating-person-2016_cg1rl9.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772905/ronaldowork2_3488286b_yackar.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772905/michael_emerson_hblbo6.png",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772905/MI-how-to-insult-irish-person_yfapaq.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772905/mark-zuckerberg-425x265_mqajvk.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772905/images_hnxcjw.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772903/ct-4th-person-charged-in-frying-pan-killing-of-rogers-park-man-20160225_lcejsh.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772902/amitabh-bachchan-a_1920513c_pom6ve.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772902/140929111101-nina-dos-santos-profile-image-large-tease_dgb1gk.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772904/140325122246-christiane-amanpour-profile-super-169_xjvcvh.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772902/8245632244_b68b410973_b-380x253_wrw8yu.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772903/1398469033-want-become-most-interesting-person-around-start-these-7-steps_b6yqxn.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772903/1392752611-take-page-from-rock-refer-yourself-third-person_hpg5pr.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772903/3049373-poster-p-2-meet-the-most-important-person-in-entertainment-youve-never-heard-of_gqmi0m.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772902/107192_0171b_ti4elq.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772902/1200_htolkt.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772902/560ee9191600002e00037eef_q4w7mi.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467772901/2F7E576800000578-3366459-The_first_person_to_hack_Apple_s_iPhone_has_made_what_he_claims_-m-47_1450475676010_zp60ja.jpg",
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312435/url_kpbpxn.jpg",
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
"http://res.cloudinary.com/dywbzmakl/image/upload/v1467312433/images-14_gpyrdn.jpg",
"https://res.cloudinary.com/joyjing1/image/upload/v1467155555/profiles/mark_zucker_profile.jpg",
"https://res.cloudinary.com/joyjing1/image/upload/c_crop,h_350,w_350/v1467198451/profiles/sheryl-sandberg-hed-2014.jpg",
"https://res.cloudinary.com/joyjing1/image/upload/c_crop,h_600,w_600/v1467157354/profiles/150518_r26512-1200-630-06150519.jpg",
"https://res.cloudinary.com/joyjing1/image/upload/c_crop,h_300,w_300,x_80/v1467156929/profiles/SundarPichai129-_2.jpg",
"https://res.cloudinary.com/joyjing1/image/upload/c_crop,h_675,w_675,x_350/v1467157122/profiles/LarryPage1.jpg",
"https://res.cloudinary.com/joyjing1/image/upload/c_crop,h_400,w_400/v1467157152/profiles/Sergey-Brin.jpg",
"https://res.cloudinary.com/joyjing1/image/upload/c_crop,h_360,w_360/v1467198808/profiles/jan-koum-whatsapp.jpg",
"https://res.cloudinary.com/joyjing1/image/upload/c_crop,h_1124,w_1124,x_50/v1467198942/profiles/linkedin-ceo-jeff-weiner-explains-how-fixing-a-common-mistake-helped-him-grow-as-a-leader.jpg"]




u = 0
user_pics.length.times do
  User.create(username: Faker::Name.name, password: Faker::Internet.password, description: Faker::StarWars.quote, pic_url: user_pics[u])
  u += 1
end



200.times do
  group = Group.create(creator_id: (1..u).to_a.sample, name: Faker::StarWars.specie, description: Faker::StarWars.quote, location:"#{Faker::Address.street_address}, #{Faker::Address.city}", pic_url: pics.sample )
  GroupMembership.create!(user_id: group.creator_id, group_id: group.id)
end

1000.times do
  Event.create(creator_id: (1..u).to_a.sample, title: Faker::StarWars.specie, group_id: (1..200).to_a.sample, description: Faker::StarWars.quote, location: "#{Faker::Address.street_address}, #{Faker::Address.city}", category: Faker::StarWars.planet, pic_url: pics.sample, date: Faker::Time.between(10.days.ago, Date.today, :all))
end

2400.times do
  Comment.create(author_id: (1..u).to_a.sample), body: Faker::StarWars.quote, event_id: (1..1000).to_a.sample
end

i = 0
while i < 5000
  if EventTicket.create(user_id: (1..u).to_a.sample, event_id: (1..1000).to_a.sample)
    i += 1
  end
end

j = 0
while j < 2000
  if GroupMembership.create(user_id: (1..u).to_a.sample, group_id: (1..200).to_a.sample)
    j += 1
  end
end
