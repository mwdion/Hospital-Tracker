class AddColumnDoctorableIdToDoctors < ActiveRecord::Migration
  def change
    add_column :doctors, :doctorable_id, :integer
  end
end
