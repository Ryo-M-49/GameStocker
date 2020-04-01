class ChangeDataIntroductionToUsers < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :introduction, :text
  end
end
