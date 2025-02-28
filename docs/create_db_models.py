import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

class Stock(Base):
    """
    description: Table for storing stock information, including stock ticker and name.
    """
    __tablename__ = 'stocks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    ticker = Column(String, nullable=False, unique=True)
    name = Column(String, nullable=False)

class StockPrice(Base):
    """
    description: Table for daily stock prices with open, close, high, and low prices.
    """
    __tablename__ = 'stock_prices'
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, default=datetime.utcnow, nullable=False)
    open_price = Column(Float, nullable=False)
    close_price = Column(Float, nullable=False)
    high_price = Column(Float, nullable=False)
    low_price = Column(Float, nullable=False)

class StockVolume(Base):
    """
    description: Table for recording the trading volume of stocks.
    """
    __tablename__ = 'stock_volumes'
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, default=datetime.utcnow, nullable=False)
    volume = Column(Integer, nullable=False)

class Dividend(Base):
    """
    description: Table for tracking dividends issued by stocks.
    """
    __tablename__ = 'dividends'
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    amount = Column(Float, nullable=False)

class Portfolio(Base):
    """
    description: Table representing user portfolios.
    """
    __tablename__ = 'portfolios'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class PortfolioStock(Base):
    """
    description: Table associating stocks with user portfolios, holding quantities.
    """
    __tablename__ = 'portfolio_stocks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    portfolio_id = Column(Integer, ForeignKey('portfolios.id'), nullable=False)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

class News(Base):
    """
    description: Table for news articles related to stocks.
    """
    __tablename__ = 'news'
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    headline = Column(String, nullable=False)
    content = Column(String, nullable=True)

class AnalystRating(Base):
    """
    description: Table for storing analyst ratings for stocks.
    """
    __tablename__ = 'analyst_ratings'
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    rating = Column(String, nullable=False)

class Watchlist(Base):
    """
    description: Table for user watchlists, tracking stocks of interest.
    """
    __tablename__ = 'watchlists'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class WatchlistStock(Base):
    """
    description: Table associating stocks with watchlists.
    """
    __tablename__ = 'watchlist_stocks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    watchlist_id = Column(Integer, ForeignKey('watchlists.id'), nullable=False)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)

class FinancialReport(Base):
    """
    description: Table for storing quarterly financial reports of stocks.
    """
    __tablename__ = 'financial_reports'
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    quarter = Column(String, nullable=False)
    year = Column(Integer, nullable=False)
    revenue = Column(Float, nullable=False)
    profit = Column(Float, nullable=False)

class MarketIndex(Base):
    """
    description: Table for different market indices and their components.
    """
    __tablename__ = 'market_indices'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class MarketIndexComponent(Base):
    """
    description: Table associating stocks with market indices.
    """
    __tablename__ = 'market_index_components'
    id = Column(Integer, primary_key=True, autoincrement=True)
    index_id = Column(Integer, ForeignKey('market_indices.id'), nullable=False)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)

# Create an engine and a session
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Sample data insertion
# Adding stocks
stock1 = Stock(ticker='AAPL', name='Apple Inc.')
stock2 = Stock(ticker='GOOGL', name='Alphabet Inc.')
stock3 = Stock(ticker='AMZN', name='Amazon.com Inc.')
session.add_all([stock1, stock2, stock3])

# Stock prices
stock_price1 = StockPrice(stock_id=1, date=datetime(2023, 10, 1), open_price=145.3, close_price=150.2, high_price=151.0, low_price=144.0)
stock_price2 = StockPrice(stock_id=2, date=datetime(2023, 10, 1), open_price=2800.5, close_price=2820.0, high_price=2830.0, low_price=2790.0)
session.add_all([stock_price1, stock_price2])

# Dividends
dividend1 = Dividend(stock_id=1, date=datetime(2023, 5, 15), amount=0.22)
session.add(dividend1)

# Portfolios and Portfolio Stocks
portfolio1 = Portfolio(name='Tech Giants')
portfolio_stock1 = PortfolioStock(portfolio_id=1, stock_id=1, quantity=10)
session.add_all([portfolio1, portfolio_stock1])

# News Articles
news1 = News(stock_id=1, date=datetime(2023, 9, 20), headline='Apple Announces New Product Line')
news2 = News(stock_id=2, date=datetime(2023, 9, 21), headline='Alphabet Acquires AI Startup')
session.add_all([news1, news2])

# Analyst Ratings
rating1 = AnalystRating(stock_id=1, date=datetime(2023, 9, 25), rating='Buy')
session.add(rating1)

# Watchlists and Watchlist Stocks
watchlist1 = Watchlist(name='Favorite Stocks')
watchlist_stock1 = WatchlistStock(watchlist_id=1, stock_id=1)
watchlist_stock2 = WatchlistStock(watchlist_id=1, stock_id=2)
session.add_all([watchlist1, watchlist_stock1, watchlist_stock2])

# Financial Reports
financial_report1 = FinancialReport(stock_id=1, quarter='Q2', year=2023, revenue=80000, profit=16000)
session.add(financial_report1)

# Market Indices and their Components
market_index1 = MarketIndex(name='NASDAQ 100')
market_index_component1 = MarketIndexComponent(index_id=1, stock_id=1)
market_index_component2 = MarketIndexComponent(index_id=1, stock_id=2)
session.add_all([market_index1, market_index_component1, market_index_component2])

# Commit changes
session.commit()

# Ensure the session is closed
session.close()
