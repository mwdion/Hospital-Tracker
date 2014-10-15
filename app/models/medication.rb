class Medication < ActiveRecord::Base
  belongs_to :patients
validates :name, presence: true;
validates :description, presence: true;
end
