class RemoveDealershipIdFromPatient < ActiveRecord::Migration
  def change
    remove_column :patients, :dealership_id
  end
end
