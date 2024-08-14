class VideoController < ApplicationController
  before_action :authenticate_user!
  before_action :require_payment

  def index
  end

  private

  def require_payment
    unless current_user.payments.exists?(amount: 1000) # Example amount in cents
      redirect_to new_payment_path, alert: "You must complete the payment to access this page."
    end
  end
end
