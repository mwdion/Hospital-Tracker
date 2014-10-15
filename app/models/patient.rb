class Patient < ActiveRecord::Base
  has_many :medications
  has_many :doctors, as: :doctorable
  belongs_to :hospital
  include Workflow
  workflow do
   state :waiting do
      event :assess, transitions_to: :assessed
      event :xray, transitions_to: :xrayed
      event :operate, transitions_to: :operated
      event :pay, transitions_to: :paid
      event :discharge, transitions_to: :discharged
    end
   state :assessed do
      event :xray, transitions_to: :xrayed
      event :operate, transitions_to: :operated
      event :pay, transitions_to: :paid
      event :discharge, transitions_to: :discharged
    end
  state :xrayed do
      event :assess, transitions_to: :assessed
      event :operate, transitions_to: :operated
      event :pay, transitions_to: :paid
      event :discharge, transitions_to: :discharged
    end
  state :operated do
      event :assess, transitions_to: :assessed
      event :xray, transitions_to: :xrayed
      event :pay, transitions_to: :paid
      event :discharge, transitions_to: :discharged
    end
  state :paid do
      event :discharge, transitions_to: :discharged
    end
  state :discharged
    end 
validates :first_name, presence: true;
validates :last_name, presence: true;
validates_date :DOB, :before => lambda { Date.current }
validates :description, presence: true;
validates :gender, presence: true;
end
