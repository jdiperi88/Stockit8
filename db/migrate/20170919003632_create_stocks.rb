class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.string :ticker_symbol
      t.string :name
      t.decimal :last_price

      t.timestamps
    end
  end
end
