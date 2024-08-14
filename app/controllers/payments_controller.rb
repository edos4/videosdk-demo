class PaymentsController < ApplicationController
  before_action :authenticate_user!

  def new
  end

  def create
    @amount = 1000 # Example amount in cents

    customer = Stripe::Customer.create(
      email: current_user.email,
      source: params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      customer: customer.id,
      amount: @amount,
      description: 'Video Access',
      currency: 'usd'
    )

    current_user.payments.create!(
      stripe_charge_id: charge.id,
      amount: @amount
    )

    redirect_to video_index_path, notice: 'Payment successful!'
  rescue Stripe::CardError => e
    flash[:alert] = e.message
    render :new
  end
end
