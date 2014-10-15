class AddFieldsToDoctorAgain < ActiveRecord::Migration
  def change
    add_column :doctors, :doctorable_type, :string
  end
end
