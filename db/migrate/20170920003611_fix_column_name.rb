class FixColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :stocks, :ticker_symbol, :ticker
  end
end
