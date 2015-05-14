class AddArtistAndImageUrlToShirts < ActiveRecord::Migration
  def change
    add_column :shirts, :artist, :string
    add_column :shirts, :image_url, :string
  end
end
