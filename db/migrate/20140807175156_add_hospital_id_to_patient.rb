class AddHospitalIdToPatient < ActiveRecord::Migration
  def change
    add_column :patients, :dealership_id, :integer 
  end
end
