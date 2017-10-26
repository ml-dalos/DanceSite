class Order < ApplicationRecord
  validates :name, presence: true,
            format: {with: /[а-яА-ЯёЁa-zA-Z\s\-]+/u,
                     message: "Разрешены только буквы латинского алфавита или кирилицы, пробелы и тире"}
  validates :number, presence: true,
            format: {with: /29|33|44|25\d{7}/,
                     message: "Номере телефона должен быть в формате (29/33/44/25)xxxxxxx. Без разделителей!"}

end
