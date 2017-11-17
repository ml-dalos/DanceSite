class Order < ApplicationRecord
  validates :name,
            presence: true,
            format: { with: /[а-яА-ЯёЁa-zA-Z\s\-]+/u }
  validates :number,
            presence: true,
            format: { with: /(\+)?\d{7,12}/ }

end


