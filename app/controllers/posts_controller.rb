class PostsController < ApplicationController
    before_action :ensure_current_user, only: [:update, :destroy]

    def index
        render json: Post.all.order(created_at: :desc), status: :ok
    end

    def create
        @post = current_user.posts.create!(post_params)
        render json: @post, status: :created
    end

    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private

    # def ensure_current_user
    #     if current_user.nil? || @post.user == current_user
    #         flash.now[:error] = 'unauthorized access!'
    #         redirect_to root_path
    #       end
    #     end

    def post_params
        params.permit(:post_content)
    end
end
