class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
    
    before_action :configure_permitted_parameters, if: :devise_controller?

        def configure_permitted_parameters
            devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :first_name, :last_name, :country, :zip_code]) 
            devise_parameter_sanitizer.permit(:account_update, keys: [:username, :password, :email, :first_name, :last_name, :country, :zip_code]) 
        end

        private 

        def render_not_found_response(exception)
            render json: { error: "#{exception.model} not found" }, status: :not_found 
        end

        def render_invalid_response(exception)
            render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
        end
end