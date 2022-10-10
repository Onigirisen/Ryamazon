class User < ApplicationRecord
  has_secure_password
  validates :name, 
    uniqueness: true, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates_format_of :name, :with => /\A[^0-9`!@#\$%\^&*+_=]+\z/
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates phone_number, phone: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true
  
  before_validation :ensure_session_token
  before_save :normalize_phone_number


  def self.find_by_credentials(credential, password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :phone_number
    user = User.find_by(field => credential)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  def formatted_phone_number
    parsed_phone_number = Phonelib.parse(phone_number)
    return phone_number if parsed_phone_number.invalid?

    formatted = 
      if parsed_phone_number.country_code == "1"
        parsed_phone_number.full_national
      else
        parsed_phone_number.full_international
      end

    formatted.gsub!(";", "x")
    return formatted
  end




  private
  def normalize_phone_number
    self.phone_number = Phonelib.parse(phone_number).full_e164.presence
  end

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
