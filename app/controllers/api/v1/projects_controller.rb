class Api::V1::ProjectsController < ApplicationController
    # skip_before_action :authenticate_user, only: [:create]
    before_action :find_project, only: [:show, :update, :destroy]

    def index 
        
        @projects = Project.all 
        
        render json: @projects, status: 200
    end 

    def show 
        if Project.exists?(params[:id])
            render json: @project, status: 200 
        else 
            render json: {notice: 'Project does not exist' }
        end
    end 

    def create 
        @project = @current_user.projects.new(project_params)
        if @project.save 
            render json:{project: @project}, status: 201
        else 
            render json: { error: @project.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update 
        unless @project.update(project_params)
            render json:{errors: @project.errors.full_messages}
        end
    end 

    def destroy 
        @project.destroy
    end 

    private 

    def project_params 
        params.permit(:title, :description, :uuid)
    end 

    def find_project 
        @project = Project.find(params[:id])
    end
end
