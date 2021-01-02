var searchIndex = JSON.parse('{\
"alpha_vantage":{"doc":"Rust Client/Wrapper built for Alphavantage API.","i":[[0,"crypto_rating","alpha_vantage","Module for getting crypto health rating provided by FCAS …",null,null],[3,"CryptoRating","alpha_vantage::crypto_rating","Struct used for health index rating",null,null],[11,"symbol","","Get symbol from which crypto rating was determined",0,[[]]],[11,"name","","Get name for which crypto rating was determined",0,[[]]],[11,"refreshed_time","","Get time when crypto rating was last refreshed.",0,[[]]],[11,"time_zone","","Return time zone of last refreshed time",0,[[]]],[11,"fcas_rating","","Return fcas rating rank",0,[[]]],[11,"fcas_score","","Return fcas score",0,[[]]],[11,"developer_score","","Return developer score",0,[[]]],[11,"market_maturity_score","","Return market maturity score",0,[[]]],[11,"utility_score","","Return utility score",0,[[]]],[0,"crypto","alpha_vantage","Module for crypto real time data",null,null],[3,"Entry","alpha_vantage::crypto","Struct which stores Crypto data",null,null],[11,"time","","Return time",1,[[]]],[11,"market_open","","Return market open value",1,[[]]],[11,"usd_open","","Return usd open value",1,[[]]],[11,"market_high","","Return market high value",1,[[]]],[11,"usd_high","","Return usd high value",1,[[]]],[11,"market_low","","Return market low value",1,[[]]],[11,"usd_low","","Return usd low value",1,[[]]],[11,"market_close","","Return market close value",1,[[]]],[11,"usd_close","","Return usd close value",1,[[]]],[11,"volume","","Return volume",1,[[]]],[11,"market_cap","","Return market cap",1,[[]]],[3,"Crypto","","Struct which holds Crypto currency information",null,null],[11,"information","","Return meta data information",2,[[]]],[11,"digital_code","","Return digital currency code",2,[[]]],[11,"digital_name","","Return digital currency name",2,[[]]],[11,"market_code","","Return market code",2,[[]]],[11,"market_name","","Return market name",2,[[]]],[11,"last_refreshed","","Return last refreshed time",2,[[]]],[11,"time_zone","","Return time zone of all data time",2,[[]]],[11,"entry","","Return a entry",2,[[],["vec",3]]],[8,"VecEntry","","trait which helps for performing some common operation on …",null,null],[10,"find","","Find a entry with a given time as a input return none if …",3,[[],[["option",4],["entry",3]]]],[10,"latest","","Return a entry which is of latest time period",3,[[],["entry",3]]],[10,"latestn","","Return a top n latest Entry if n Entry is present else …",3,[[],[["result",6],["vec",3]]]],[0,"error","alpha_vantage","Module which contains all types of error for alpha …",null,null],[6,"Result","alpha_vantage::error","Result type for alpha vantage crate",null,null],[4,"Error","","Main error/failure enum",null,null],[13,"AlphaVantageInformation","","Error which is raised if information is returned by API …",4,null],[13,"AlphaVantageErrorMessage","","Error which is raised if error_message is returned by API …",4,null],[13,"AlphaVantageNote","","Error which is raised if note is returned by API instead …",4,null],[13,"DesiredNumberOfEntryNotPresent","","Error which is raised when desired number of entry is not …",4,null],[0,"exchange","alpha_vantage","Module for exchange currency (both digital & physical …",null,null],[3,"Exchange","alpha_vantage::exchange","Struct used for exchanging currency",null,null],[11,"rate","","Get Rate for exchange",5,[[]]],[11,"refreshed_time","","Get time when exchange rate was last refreshed along with …",5,[[]]],[11,"time_zone","","Return time zone of all data time",5,[[]]],[11,"code_from","","get from code from which exchange is performed",5,[[]]],[11,"name_from","","get from name from which exchange is performed",5,[[]]],[11,"code_to","","get to code from exchange",5,[[]]],[11,"name_to","","get to name from exchange",5,[[]]],[11,"bid_price","","get bid price. Returns None if no bid price",5,[[],["option",4]]],[11,"ask_price","","get ask price. Return None if no ask price",5,[[],["option",4]]],[0,"forex","alpha_vantage","Module for Forex realtime and historical data",null,null],[3,"Entry","alpha_vantage::forex","Struct to store Entry value",null,null],[11,"time","","Return time for entry",6,[[]]],[11,"open","","Return open value",6,[[]]],[11,"high","","Return high value",6,[[]]],[11,"low","","Return low value",6,[[]]],[11,"close","","Return close value",6,[[]]],[3,"Forex","","Struct to store Forex data after forex API call",null,null],[11,"information","","Return information of data",7,[[]]],[11,"symbol_from","","Return from symbol",7,[[]]],[11,"symbol_to","","Return to symbol",7,[[]]],[11,"last_refreshed","","Return last refreshed time",7,[[]]],[11,"time_zone","","Return time zone of all data time",7,[[]]],[11,"interval","","Return interval for intraday",7,[[],["option",4]]],[11,"output_size","","Return output size which can be full or compact",7,[[],["option",4]]],[11,"entry","","Method return Entry",7,[[],["vec",3]]],[8,"VecEntry","","trait which helps for performing some common operation on …",null,null],[10,"find","","Find a entry with a given time as a input return none if …",8,[[],[["option",4],["entry",3]]]],[10,"latest","","Return a entry which is of latest time period",8,[[],["entry",3]]],[10,"latestn","","Return a top n latest Entry if n Entry is present else …",8,[[],[["result",6],["vec",3]]]],[0,"quote","alpha_vantage","Module for returning latest price and volume information",null,null],[3,"Quote","alpha_vantage::quote","Struct for storing Quote related information",null,null],[11,"open","","return open value",9,[[]]],[11,"high","","return high value",9,[[]]],[11,"low","","return low value",9,[[]]],[11,"price","","return price value",9,[[]]],[11,"volume","","return volume",9,[[]]],[11,"previous","","return previous",9,[[]]],[11,"change","","return change",9,[[]]],[11,"change_percent","","return change percent",9,[[]]],[11,"last_trading","","get last trading day",9,[[]]],[11,"symbol","","get symbol",9,[[]]],[0,"search","alpha_vantage","Module for searching specific symbol or companies",null,null],[3,"DataValue","alpha_vantage::search","Struct which stores matches data for search keyword",null,null],[11,"symbol","","Return symbol",10,[[]]],[11,"name","","Return name for symbol",10,[[]]],[11,"stock_type","","Return stock type",10,[[]]],[11,"region","","Return region of search entry",10,[[]]],[11,"market_open","","Return market open time",10,[[]]],[11,"market_close","","Return market close time",10,[[]]],[11,"time_zone","","Return time zone of symbol",10,[[]]],[11,"currency","","Return currency",10,[[]]],[11,"match_score","","Return match score",10,[[]]],[3,"Search","","struct for storing search method data",null,null],[11,"result","","Return result of search",11,[[],["vec",3]]],[0,"sector","alpha_vantage","Module for sector",null,null],[3,"Data","alpha_vantage::sector","Store Sector data",null,null],[11,"rank","","Return rank",12,[[]]],[11,"utilities","","Return utilities score",12,[[]]],[11,"health_care","","Return health care score",12,[[]]],[11,"information_technology","","Return information technology score",12,[[]]],[11,"industrials","","Return industrials scores",12,[[]]],[11,"real_estate","","Return real estate value",12,[[]]],[11,"consumer_staples","","Return consumer staples value",12,[[]]],[11,"consumer_discretionary","","Return consumer discretionary score",12,[[]]],[11,"financials","","Return financials score",12,[[]]],[11,"communication_services","","Gives value of communication services",12,[[]]],[11,"materials","","Gives materials value",12,[[]]],[11,"energy","","Gives out energy data",12,[[]]],[3,"Sector","","Stores sector data",null,null],[11,"information","","Return sector information",13,[[]]],[11,"last_refreshed","","Return last refreshed time",13,[[]]],[11,"data","","Return vector of data",13,[[],["vec",3]]],[0,"stock_time","alpha_vantage","Module for stock time series",null,null],[3,"MetaData","alpha_vantage::stock_time","Struct for storing Meta Data value",null,null],[3,"Entry","","Struct for Entry value",null,null],[11,"time","","Get time",14,[[]]],[11,"open","","Return open",14,[[]]],[11,"high","","Return high",14,[[]]],[11,"low","","Return low",14,[[]]],[11,"close","","Return close",14,[[]]],[11,"adjusted","","Return adjusted",14,[[],["option",4]]],[11,"volume","","Return volume",14,[[]]],[11,"dividend","","Return dividend",14,[[],["option",4]]],[11,"split","","Return split dividend",14,[[],["option",4]]],[3,"TimeSeries","","Struct for storing time series data",null,null],[11,"information","","Return information present in meta data",15,[[]]],[11,"symbol","","Return symbol for which time series function is called",15,[[]]],[11,"last_refreshed","","Return last refreshed time",15,[[]]],[11,"time_zone","","Return time zone of all data time",15,[[]]],[11,"interval","","Time series interval between two consecutive data",15,[[],["option",4]]],[11,"output_size","","Output Size of intraday which can be either Full or …",15,[[],["option",4]]],[11,"entry","","Return Entry",15,[[],["vec",3]]],[8,"VecEntry","","trait which helps for performing some common operation on …",null,null],[10,"find","","Find a entry with a given time as a input return none if …",16,[[],[["option",4],["entry",3]]]],[10,"latest","","Return a entry which is of latest time period",16,[[],["entry",3]]],[10,"latestn","","Return a top n latest Entry if n Entry is present else …",16,[[],[["vec",3],["result",6]]]],[0,"technical_indicator","alpha_vantage","Module for Technical Indicator",null,null],[3,"DataCollector","alpha_vantage::technical_indicator","Struct for storing a data values",null,null],[11,"time","","Return time",17,[[]]],[11,"values","","Return values for Data",17,[[],["hashmap",3]]],[3,"Indicator","","Struct for indicator",null,null],[11,"meta_data","","Return meta data in hash form with key as <code>String</code> and …",18,[[],["hashmap",3]]],[11,"data","","Return data as a vector",18,[[],[["vec",3],["datacollector",3]]]],[0,"user","alpha_vantage","Module for basic definition of user information like …",null,null],[3,"APIKey","alpha_vantage::user","Struct for initializing api key value as well as contain …",null,null],[11,"set_api","","Method for initializing [APIKey][APIKey] struct",19,[[]]],[11,"set_from_env","","Set [APIKey][APIKey] by reading environment variable",19,[[]]],[11,"get_api","","Method to get api key",19,[[]]],[11,"crypto_rating","","Method for getting crypto health rating",19,[[]]],[11,"crypto","","Crypto method for calling cryptography function",19,[[["cryptofunction",4]]]],[11,"exchange","","Method for exchanging currency value from one currency to …",19,[[]]],[11,"forex","","Forex method for calling stock time series",19,[[["outputsize",4],["forexfunction",4],["timeseriesinterval",4]]]],[11,"quote","","Method for returning Quote Struct",19,[[]]],[11,"search","","Search method for searching keyword or company",19,[[]]],[11,"sector","","Method for returning a sector data as struct",19,[[]]],[11,"stock_time","","Stock time method for calling stock time series API",19,[[["outputsize",4],["stockfunction",4],["timeseriesinterval",4]]]],[11,"technical_indicator","","Technical indicator API caller method",19,[[["vec",3],["technicalindicatorinterval",4],["technicalindicator",4],["option",4],["option",4]]]],[0,"util","alpha_vantage","Utility module declaring enum for basic function and …",null,null],[4,"CryptoFunction","alpha_vantage::util","Enum for declaring function for crypto series by defining …",null,null],[13,"Daily","","returns the daily historical time series for a digital …",20,null],[13,"Weekly","","returns the weekly historical time series for a digital …",20,null],[13,"Monthly","","returns the monthly historical time series for a digital …",20,null],[4,"ForexFunction","","Enum for declaring function for forex function by …",null,null],[13,"IntraDay","","returns intraday time series (timestamp, open, high, low, …",21,null],[13,"Daily","","returns the daily time series (timestamp, open, high, …",21,null],[13,"Weekly","","returns the weekly time series (timestamp, open, high, …",21,null],[13,"Monthly","","returns the monthly time series (timestamp, open, high, …",21,null],[4,"OutputSize","","Enum for declaring output size of API call",null,null],[13,"Compact","","Return latest top 100 points recommended if no historical …",22,null],[13,"Full","","Returns full api data points recommended if a full …",22,null],[13,"None","","uses default which is Compact",22,null],[4,"StockFunction","","Enum for declaring function for stock time series by …",null,null],[13,"IntraDay","","returns intraday time series (timestamp, open, high, low, …",23,null],[13,"Daily","","returns daily time series (date, daily open, daily high, …",23,null],[13,"DailyAdjusted","","returns daily time series (date, daily open, daily high, …",23,null],[13,"Weekly","","returns weekly time series (last trading day of each …",23,null],[13,"WeeklyAdjusted","","returns weekly adjusted time series (last trading day of …",23,null],[13,"Monthly","","returns monthly time series (last trading day of each …",23,null],[13,"MonthlyAdjusted","","returns monthly adjusted time series (last trading day of …",23,null],[4,"TechnicalIndicator","","Enum for declaring different optional value of Technical …",null,null],[13,"Acceleration","","The acceleration factor. Positive floats are accepted. By …",24,null],[13,"Fastdmatype","","Moving average type for the fastd moving average. By …",24,null],[13,"Fastdperiod","","The time period of the fastd moving average. Positive …",24,null],[13,"Fastkperiod","","The time period of the fastk moving average. Positive …",24,null],[13,"Fastlimit","","Positive floats are accepted. By default, fastlimit=0.01.",24,null],[13,"Fastmatype","","Moving average type for the faster moving average. By …",24,null],[13,"Fastperiod","","Positive integers are accepted. By default, fastperiod=12.",24,null],[13,"Matype","","Moving average type. By default, matype=0. Integers 0 - 8 …",24,null],[13,"Maximum","","The acceleration factor maximum value. Positive floats …",24,null],[13,"Nbdevdn","","The standard deviation multiplier of the lower band. …",24,null],[13,"Nbdevup","","The standard deviation multiplier of the upper band. …",24,null],[13,"Signalmatype","","Moving average type for the signal moving average. By …",24,null],[13,"Signalperiod","","Positive integers are accepted. By default, …",24,null],[13,"Slowdmatype","","Moving average type for the slowd moving average. By …",24,null],[13,"Slowdperiod","","The time period of the slowd moving average. Positive …",24,null],[13,"Slowkmatype","","Moving average type for the slowk moving average. By …",24,null],[13,"Slowkperiod","","The time period of the slowk moving average. Positive …",24,null],[13,"Slowlimit","","Positive floats are accepted. By default, slowlimit=0.01.",24,null],[13,"Slowmatype","","Moving average type for the slower moving average. By …",24,null],[13,"Slowperiod","","Positive integers are accepted. By default, slowperiod=26.",24,null],[13,"Timeperiod1","","The first time period for the indicator. Positive …",24,null],[13,"Timeperiod2","","The second time period for the indicator. Positive …",24,null],[13,"Timeperiod3","","The third time period for the indicator. Positive …",24,null],[4,"TechnicalIndicatorInterval","","Enum for declaring interval for technical indicator",null,null],[13,"OneMin","","1 min interval",25,null],[13,"FiveMin","","5 min interval",25,null],[13,"FifteenMin","","15 min interval",25,null],[13,"ThirtyMin","","30 min interval",25,null],[13,"SixtyMin","","60 min interval",25,null],[13,"Daily","","daily interval",25,null],[13,"Weekly","","weekly interval",25,null],[13,"Monthly","","monthly interval",25,null],[4,"TimeSeriesInterval","","Enum for declaring interval for intraday time series",null,null],[13,"OneMin","","1 min interval",26,null],[13,"FiveMin","","5 min interval",26,null],[13,"FifteenMin","","15 min interval",26,null],[13,"ThirtyMin","","30 min interval",26,null],[13,"SixtyMin","","60 min interval",26,null],[13,"None","","no interval which applies for all time series expect …",26,null],[5,"set_api","alpha_vantage","Set API value which can be used for calling different …",null,[[],["apikey",3]]],[5,"set_from_env","","Set API Key reading environment variable",null,[[],["apikey",3]]],[11,"from","alpha_vantage::crypto_rating","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","alpha_vantage::crypto","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","alpha_vantage::error","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","alpha_vantage::exchange","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","alpha_vantage::forex","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","alpha_vantage::quote","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","alpha_vantage::search","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","alpha_vantage::sector","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"from","alpha_vantage::stock_time","",27,[[]]],[11,"into","","",27,[[]]],[11,"to_owned","","",27,[[]]],[11,"clone_into","","",27,[[]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"vzip","","",27,[[]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"vzip","","",14,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"vzip","","",15,[[]]],[11,"from","alpha_vantage::technical_indicator","",17,[[]]],[11,"into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"vzip","","",17,[[]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"vzip","","",18,[[]]],[11,"from","alpha_vantage::user","",19,[[]]],[11,"into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"vzip","","",19,[[]]],[11,"from","alpha_vantage::util","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"vzip","","",20,[[]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"vzip","","",21,[[]]],[11,"from","","",22,[[]]],[11,"into","","",22,[[]]],[11,"to_owned","","",22,[[]]],[11,"clone_into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"vzip","","",22,[[]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"vzip","","",23,[[]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"vzip","","",24,[[]]],[11,"from","","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_owned","","",25,[[]]],[11,"clone_into","","",25,[[]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"vzip","","",25,[[]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"to_owned","","",26,[[]]],[11,"clone_into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"vzip","","",26,[[]]],[11,"clone","alpha_vantage::crypto","",1,[[],["entry",3]]],[11,"clone","alpha_vantage::forex","",6,[[],["entry",3]]],[11,"clone","alpha_vantage::search","",10,[[],["datavalue",3]]],[11,"clone","alpha_vantage::sector","",12,[[],["data",3]]],[11,"clone","alpha_vantage::stock_time","",27,[[],["metadata",3]]],[11,"clone","","",14,[[],["entry",3]]],[11,"clone","alpha_vantage::util","",20,[[],["cryptofunction",4]]],[11,"clone","","",21,[[],["forexfunction",4]]],[11,"clone","","",22,[[],["outputsize",4]]],[11,"clone","","",23,[[],["stockfunction",4]]],[11,"clone","","",25,[[],["technicalindicatorinterval",4]]],[11,"clone","","",26,[[],["timeseriesinterval",4]]],[11,"default","alpha_vantage::crypto_rating","",0,[[],["cryptorating",3]]],[11,"default","alpha_vantage::crypto","",1,[[],["entry",3]]],[11,"default","","",2,[[],["crypto",3]]],[11,"default","alpha_vantage::exchange","",5,[[],["exchange",3]]],[11,"default","alpha_vantage::forex","",6,[[],["entry",3]]],[11,"default","","",7,[[],["forex",3]]],[11,"default","alpha_vantage::quote","",9,[[],["quote",3]]],[11,"default","alpha_vantage::search","",10,[[],["datavalue",3]]],[11,"default","","",11,[[],["search",3]]],[11,"default","alpha_vantage::sector","",12,[[],["data",3]]],[11,"default","","",13,[[],["sector",3]]],[11,"default","alpha_vantage::stock_time","",27,[[],["metadata",3]]],[11,"default","","",14,[[],["entry",3]]],[11,"default","","",15,[[],["timeseries",3]]],[11,"default","alpha_vantage::technical_indicator","",17,[[],["datacollector",3]]],[11,"default","","",18,[[],["indicator",3]]],[11,"fmt","alpha_vantage::crypto","",1,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::error","",4,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::forex","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::search","",10,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::stock_time","",27,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::technical_indicator","",18,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::error","",4,[[["formatter",3]],["result",6]]],[11,"deserialize","alpha_vantage::search","",10,[[],["result",4]]]],"p":[[3,"CryptoRating"],[3,"Entry"],[3,"Crypto"],[8,"VecEntry"],[4,"Error"],[3,"Exchange"],[3,"Entry"],[3,"Forex"],[8,"VecEntry"],[3,"Quote"],[3,"DataValue"],[3,"Search"],[3,"Data"],[3,"Sector"],[3,"Entry"],[3,"TimeSeries"],[8,"VecEntry"],[3,"DataCollector"],[3,"Indicator"],[3,"APIKey"],[4,"CryptoFunction"],[4,"ForexFunction"],[4,"OutputSize"],[4,"StockFunction"],[4,"TechnicalIndicator"],[4,"TechnicalIndicatorInterval"],[4,"TimeSeriesInterval"],[3,"MetaData"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);