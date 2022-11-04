# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
    respond_to :json


    # def create
    #   user = User.find_by(username: params[:username])
    #   if user&.authenticate(params[:password])
    #     session[:user_id] = user.id
    #     render json: user
    #   else
    #     render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    #   end
    # end

    def destroy 
      current_user = User.find_by(username: params[:username])
      session.delete(:user_id)
      sign_out(current_user)
      head :no_content
    end

    private

  def respond_with(resource, _opts = {})
    render json: {
      status: {code: 200, message: 'Logged in sucessfully.'},
      data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
    }, status: :ok
  end

  def respond_to_on_destroy
    if current_user
      render json: {
        status: 200,
        message: "Logged out successfully"
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end
end

  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
