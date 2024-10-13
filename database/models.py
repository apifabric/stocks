# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 13, 2024 20:28:55
# Database: sqlite:////tmp/tmp.rqsgUZuTzN/stocks/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class MarketIndice(SAFRSBaseX, Base):
    """
    description: Table for different market indices and their components.
    """
    __tablename__ = 'market_indices'
    _s_collection_name = 'MarketIndice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    MarketIndexComponentList : Mapped[List["MarketIndexComponent"]] = relationship(back_populates="index")



class Portfolio(SAFRSBaseX, Base):
    """
    description: Table representing user portfolios.
    """
    __tablename__ = 'portfolios'
    _s_collection_name = 'Portfolio'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    PortfolioStockList : Mapped[List["PortfolioStock"]] = relationship(back_populates="portfolio")



class Stock(SAFRSBaseX, Base):
    """
    description: Table for storing stock information, including stock ticker and name.
    """
    __tablename__ = 'stocks'
    _s_collection_name = 'Stock'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    ticker = Column(String, nullable=False, unique=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    AnalystRatingList : Mapped[List["AnalystRating"]] = relationship(back_populates="stock")
    DividendList : Mapped[List["Dividend"]] = relationship(back_populates="stock")
    FinancialReportList : Mapped[List["FinancialReport"]] = relationship(back_populates="stock")
    MarketIndexComponentList : Mapped[List["MarketIndexComponent"]] = relationship(back_populates="stock")
    NewsList : Mapped[List["News"]] = relationship(back_populates="stock")
    PortfolioStockList : Mapped[List["PortfolioStock"]] = relationship(back_populates="stock")
    StockPriceList : Mapped[List["StockPrice"]] = relationship(back_populates="stock")
    StockVolumeList : Mapped[List["StockVolume"]] = relationship(back_populates="stock")
    WatchlistStockList : Mapped[List["WatchlistStock"]] = relationship(back_populates="stock")



class Watchlist(SAFRSBaseX, Base):
    """
    description: Table for user watchlists, tracking stocks of interest.
    """
    __tablename__ = 'watchlists'
    _s_collection_name = 'Watchlist'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    WatchlistStockList : Mapped[List["WatchlistStock"]] = relationship(back_populates="watchlist")



class AnalystRating(SAFRSBaseX, Base):
    """
    description: Table for storing analyst ratings for stocks.
    """
    __tablename__ = 'analyst_ratings'
    _s_collection_name = 'AnalystRating'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    rating = Column(String, nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("AnalystRatingList"))

    # child relationships (access children)



class Dividend(SAFRSBaseX, Base):
    """
    description: Table for tracking dividends issued by stocks.
    """
    __tablename__ = 'dividends'
    _s_collection_name = 'Dividend'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    amount = Column(Float, nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("DividendList"))

    # child relationships (access children)



class FinancialReport(SAFRSBaseX, Base):
    """
    description: Table for storing quarterly financial reports of stocks.
    """
    __tablename__ = 'financial_reports'
    _s_collection_name = 'FinancialReport'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    quarter = Column(String, nullable=False)
    year = Column(Integer, nullable=False)
    revenue = Column(Float, nullable=False)
    profit = Column(Float, nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("FinancialReportList"))

    # child relationships (access children)



class MarketIndexComponent(SAFRSBaseX, Base):
    """
    description: Table associating stocks with market indices.
    """
    __tablename__ = 'market_index_components'
    _s_collection_name = 'MarketIndexComponent'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    index_id = Column(ForeignKey('market_indices.id'), nullable=False)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)

    # parent relationships (access parent)
    index : Mapped["MarketIndice"] = relationship(back_populates=("MarketIndexComponentList"))
    stock : Mapped["Stock"] = relationship(back_populates=("MarketIndexComponentList"))

    # child relationships (access children)



class News(SAFRSBaseX, Base):
    """
    description: Table for news articles related to stocks.
    """
    __tablename__ = 'news'
    _s_collection_name = 'News'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    headline = Column(String, nullable=False)
    content = Column(String)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("NewsList"))

    # child relationships (access children)



class PortfolioStock(SAFRSBaseX, Base):
    """
    description: Table associating stocks with user portfolios, holding quantities.
    """
    __tablename__ = 'portfolio_stocks'
    _s_collection_name = 'PortfolioStock'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    portfolio_id = Column(ForeignKey('portfolios.id'), nullable=False)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

    # parent relationships (access parent)
    portfolio : Mapped["Portfolio"] = relationship(back_populates=("PortfolioStockList"))
    stock : Mapped["Stock"] = relationship(back_populates=("PortfolioStockList"))

    # child relationships (access children)



class StockPrice(SAFRSBaseX, Base):
    """
    description: Table for daily stock prices with open, close, high, and low prices.
    """
    __tablename__ = 'stock_prices'
    _s_collection_name = 'StockPrice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    open_price = Column(Float, nullable=False)
    close_price = Column(Float, nullable=False)
    high_price = Column(Float, nullable=False)
    low_price = Column(Float, nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("StockPriceList"))

    # child relationships (access children)



class StockVolume(SAFRSBaseX, Base):
    """
    description: Table for recording the trading volume of stocks.
    """
    __tablename__ = 'stock_volumes'
    _s_collection_name = 'StockVolume'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    volume = Column(Integer, nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("StockVolumeList"))

    # child relationships (access children)



class WatchlistStock(SAFRSBaseX, Base):
    """
    description: Table associating stocks with watchlists.
    """
    __tablename__ = 'watchlist_stocks'
    _s_collection_name = 'WatchlistStock'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    watchlist_id = Column(ForeignKey('watchlists.id'), nullable=False)
    stock_id = Column(ForeignKey('stocks.id'), nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("WatchlistStockList"))
    watchlist : Mapped["Watchlist"] = relationship(back_populates=("WatchlistStockList"))

    # child relationships (access children)
