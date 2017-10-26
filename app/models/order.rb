class Order < ApplicationRecord
  validates :name, presence: true,
            format: {with: /[а-яА-ЯёЁa-zA-Z\s\-]+/u}
  validates :number, presence: true,
            format: {with: /29|33|44|25\d{7}/}
  validates :name, uniqueness: {scope: :number, case_sensative: false}

end


