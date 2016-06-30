# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160629212413) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "event_id",   null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["event_id"], name: "index_comments_on_event_id", using: :btree

  create_table "event_tickets", force: :cascade do |t|
    t.integer  "event_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "event_tickets", ["event_id"], name: "index_event_tickets_on_event_id", using: :btree
  add_index "event_tickets", ["user_id"], name: "index_event_tickets_on_user_id", using: :btree

  create_table "events", force: :cascade do |t|
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "group_id",    null: false
    t.integer  "creator_id",  null: false
    t.text     "description", null: false
    t.string   "location",    null: false
    t.datetime "date",        null: false
    t.string   "pic_url"
    t.string   "category",    null: false
  end

  add_index "events", ["group_id"], name: "index_events_on_group_id", using: :btree
  add_index "events", ["location"], name: "index_events_on_location", using: :btree

  create_table "group_memberships", force: :cascade do |t|
    t.integer  "group_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "group_memberships", ["group_id"], name: "index_group_memberships_on_group_id", using: :btree
  add_index "group_memberships", ["user_id"], name: "index_group_memberships_on_user_id", using: :btree

  create_table "groups", force: :cascade do |t|
    t.integer  "creator_id",  null: false
    t.string   "name",        null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "location",    null: false
    t.string   "pic_url"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.text     "description"
    t.string   "pic_url"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
