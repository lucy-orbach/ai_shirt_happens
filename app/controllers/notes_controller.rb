class NotesController < ApplicationController
  def create
    save_note = params.require(:note).permit(:content)
    shirt = Shirt.find(params[:shirt_id])
    shirt.notes.create(save_note.merge(author: current_user))
    redirect_to shirt
  end
end
