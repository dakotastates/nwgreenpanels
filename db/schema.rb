# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_02_13_053358) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "component_parts", force: :cascade do |t|
    t.integer "quantity"
    t.bigint "dimension_id", null: false
    t.bigint "part_id", null: false
    t.bigint "component_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["component_id"], name: "index_component_parts_on_component_id"
    t.index ["dimension_id"], name: "index_component_parts_on_dimension_id"
    t.index ["part_id"], name: "index_component_parts_on_part_id"
  end

  create_table "components", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image_url"
    t.string "component_number"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_components_on_user_id"
  end

  create_table "cut_lists", force: :cascade do |t|
    t.uuid "project_id", null: false
    t.integer "quantity"
    t.bigint "dimension_id", null: false
    t.bigint "part_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dimension_id"], name: "index_cut_lists_on_dimension_id"
    t.index ["part_id"], name: "index_cut_lists_on_part_id"
    t.index ["project_id"], name: "index_cut_lists_on_project_id"
  end

  create_table "dimensions", force: :cascade do |t|
    t.string "dimension"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notes", force: :cascade do |t|
    t.string "title"
    t.string "note"
    t.uuid "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_notes_on_project_id"
  end

  create_table "part_lists", force: :cascade do |t|
    t.uuid "project_id", null: false
    t.integer "quantity"
    t.bigint "component_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["component_id"], name: "index_part_lists_on_component_id"
    t.index ["project_id"], name: "index_part_lists_on_project_id"
  end

  create_table "parts", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image_url"
    t.string "part_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "component_parts", "components"
  add_foreign_key "component_parts", "dimensions"
  add_foreign_key "component_parts", "parts"
  add_foreign_key "components", "users"
  add_foreign_key "cut_lists", "dimensions"
  add_foreign_key "cut_lists", "parts"
  add_foreign_key "cut_lists", "projects"
  add_foreign_key "notes", "projects"
  add_foreign_key "part_lists", "components"
  add_foreign_key "part_lists", "projects"
  add_foreign_key "projects", "users"
end
