class HospitalsController < ApplicationController
before_action :authenticate_user!, only: [:show, :new, :edit, :update, :destroy] 
before_action :find_hospital, only: [:show, :edit, :update, :destroy, :find_doctor, :create_doctor, :delete_doctor]
before_action :find_doctor, only: [:delete_doctor] 
  
  
  def index
    @hospital = Hospital.all
    @patient = Patient.all
  end

  def show
    @doctor = @hospital.doctors.new
    @patient = Patient.all
  end

  def new
    @hospital = Hospital.new
  end

  def create
    @hospital = Hospital.create hospital_params
    if @hospital.save == true
    redirect_to hospital_path(@hospital)
    else
    render :new
    end
  end

  def create_doctor
    @hospital.doctors.create doctor_params
    redirect_to @hospital
  end

  def delete_doctor
    @doctor.delete
    redirect_to hospital_path(@hospital)
  end

  def edit
  end

  def update
    @hospital.update_attributes hospital_params
    redirect_to hospitals_path(@hospital)
  end

  def destroy
    @hospital.delete
    redirect_to hospitals_path(@hospital)
  end

  private
  def find_hospital
    @hospital = Hospital.find params[:id]
  end
  def find_doctor
    @doctor = Doctor.find params[:doctor_id]
  end
  def hospital_params
    params.require(:hospital).permit(:name, :description, :address)
  end
  def doctor_params
    params.require(:doctor).permit(:name)
  end
end
