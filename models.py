from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
#from database import Base

class Referral(Base):
    __tablename__ = "referrals"

    id = Column(Integer, primary_key=True, index=True)
    swap_tag = Column(String, nullable=False)
    amount = Column(Float, nullable=False)
    fee_collected = Column(Float, nullable=False)
    referral_bonus = Column(Float, nullable=False)
    from_currency = Column(String, default="USD")
    to_currency = Column(String, default="NGN")
    exchange_rate = Column(Float)
    converted_amount = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)
