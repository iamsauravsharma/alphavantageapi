var searchIndex = JSON.parse('{\
"alpha_vantage":{"doc":"Rust Client/Wrapper built for…","i":[[5,"set_api","alpha_vantage","Set API value which can be used for calling different module",null,[[],["apikey",3]]],[5,"set_with_timeout","","Set API value with timeout period",null,[[],["apikey",3]]],[5,"set_with_env","","Set out API Key reading out environment variable",null,[[],["apikey",3]]],[5,"blocking_set_api","","Set blocking API value which can be used for calling…",null,[[],["apikey",3]]],[5,"blocking_set_with_timeout","","Set blocking API value with timeout period",null,[[],["apikey",3]]],[5,"blocking_set_with_env","","Set out blocking API Key reading out environment variable",null,[[],["apikey",3]]],[0,"blocking","","Blocking module for basic definition of user information.…",null,null],[3,"APIKey","alpha_vantage::blocking","Struct for initializing api key value as well as contain…",null,null],[11,"set_api","","Method for initializing [APIKey][APIKey] struct",0,[[]]],[11,"set_with_timeout","","Set API value with timeout period",0,[[]]],[11,"set_with_env","","Set out [APIKey][APIKey] by reading out environment variable",0,[[]]],[11,"update_timeout","","Update timeout for API key",0,[[]]],[11,"get_api","","Method to get api key",0,[[]]],[11,"get_timeout","","Get API timeout period",0,[[]]],[11,"crypto","","Crypto method for calling cryptography function",0,[[["cryptofunction",4]],[["result",6],["crypto",3]]]],[11,"exchange","","Method for exchanging currency value from one currency to…",0,[[],[["exchange",3],["result",6]]]],[11,"forex","","Forex method for calling stock time series",0,[[["timeseriesinterval",4],["forexfunction",4],["outputsize",4]],[["forex",3],["result",6]]]],[11,"quote","","Method for returning Quote Struct",0,[[],[["result",6],["quote",3]]]],[11,"search","","Search method for searching keyword or company # Example…",0,[[],[["result",6],["search",3]]]],[11,"sector","","Method for returning out a sector data as struct # Example…",0,[[],[["sector",3],["result",6]]]],[11,"stock_time","","Stock time method for calling stock time series API #…",0,[[["timeseriesinterval",4],["stockfunction",4],["outputsize",4]],[["result",6],["timeseries",3]]]],[11,"technical_indicator","","Technical indicator API caller method # Example `let api =…",0,[[["vec",3],["technicalindicatorinterval",4],["option",4],["option",4],["technicalindicator",4]],[["indicator",3],["result",6]]]],[0,"crypto","alpha_vantage","Module for crypto real time data",null,null],[3,"Entry","alpha_vantage::crypto","Struct which stores Crypto data",null,null],[3,"Crypto","","Struct which holds out Crypto currency information",null,null],[8,"VecEntry","","trait which helps for performing some common operation on…",null,null],[10,"find","","Find a entry with a given time as a input return none if…",1,[[],[["option",4],["entry",3]]]],[10,"latest","","Return a entry which is of latest time period",1,[[],["entry",3]]],[10,"latestn","","Return a top n latest Entry if n Entry is present else…",1,[[],[["vec",3],["result",6]]]],[11,"time","","Return time",2,[[]]],[11,"market_open","","Return market open value",2,[[]]],[11,"usd_open","","Return usd open value",2,[[]]],[11,"market_high","","Return market high value",2,[[]]],[11,"usd_high","","Return usd high value",2,[[]]],[11,"market_low","","Return market low value",2,[[]]],[11,"usd_low","","Return usd low value",2,[[]]],[11,"market_close","","Return market close value",2,[[]]],[11,"usd_close","","Return usd close value",2,[[]]],[11,"volume","","Return volume",2,[[]]],[11,"market_cap","","Return market cap",2,[[]]],[11,"information","","Return meta data information",3,[[]]],[11,"digital_code","","Return digital currency code",3,[[]]],[11,"digital_name","","Return digital currency name",3,[[]]],[11,"market_code","","Return market code",3,[[]]],[11,"market_name","","Return market name",3,[[]]],[11,"last_refreshed","","Return last refreshed time",3,[[]]],[11,"time_zone","","Return time zone of all data time",3,[[]]],[11,"entry","","Return out a entry",3,[[],["vec",3]]],[0,"error","alpha_vantage","Module which contains all types of error for alpha vantage…",null,null],[4,"Error","alpha_vantage::error","Main error/failure enum",null,null],[13,"AlphaVantageInformation","","Error which is raised if information is returned instead…",4,null],[13,"AlphaVantageErrorMessage","","Error which is raised if error_message is raised instead…",4,null],[13,"DesiredNumberOfEntryNotPresent","","Error which is raised when desired number of entry is not…",4,null],[6,"Result","","Result type for alpha vantage crate",null,null],[0,"exchange","alpha_vantage","Module for exchange currency (both digital & physical…",null,null],[3,"Exchange","alpha_vantage::exchange","Struct used for exchanging currency",null,null],[11,"rate","","Get Rate for exchange",5,[[]]],[11,"refreshed_time","","Get time when exchange rate was last refreshed along with…",5,[[]]],[11,"time_zone","","Return time zone of all data time",5,[[]]],[11,"code_from","","get from code from which exchange is performed",5,[[]]],[11,"name_from","","get from name from which exchange is performed",5,[[]]],[11,"code_to","","get to code from exchange",5,[[]]],[11,"name_to","","get to name from exchange",5,[[]]],[0,"forex","alpha_vantage","Module for Forex realtime and historical data",null,null],[3,"Entry","alpha_vantage::forex","Struct to store Entry value",null,null],[3,"Forex","","Struct to store Forex data after forex API call",null,null],[8,"VecEntry","","trait which helps for performing some common operation on…",null,null],[10,"find","","Find a entry with a given time as a input return none if…",6,[[],[["option",4],["entry",3]]]],[10,"latest","","Return a entry which is of latest time period",6,[[],["entry",3]]],[10,"latestn","","Return a top n latest Entry if n Entry is present else…",6,[[],[["vec",3],["result",6]]]],[11,"time","","Return time for entry",7,[[]]],[11,"open","","Return open value",7,[[]]],[11,"high","","Return high value",7,[[]]],[11,"low","","Return low value",7,[[]]],[11,"close","","Return close value",7,[[]]],[11,"information","","Return information of data",8,[[]]],[11,"symbol_from","","Return from symbol",8,[[]]],[11,"symbol_to","","Return to symbol",8,[[]]],[11,"last_refreshed","","Return last refreshed time",8,[[]]],[11,"time_zone","","Return time zone of all data time",8,[[]]],[11,"interval","","Return out interval for intraday",8,[[],["option",4]]],[11,"output_size","","Return output size which can be full or compact",8,[[],["option",4]]],[11,"entry","","Method return Entry",8,[[],["vec",3]]],[0,"quote","alpha_vantage","Module for returning latest price and volume information",null,null],[3,"Quote","alpha_vantage::quote","Struct for storing Quote related information",null,null],[11,"open","","return open value",9,[[]]],[11,"high","","return high value",9,[[]]],[11,"low","","return low value",9,[[]]],[11,"price","","return price value",9,[[]]],[11,"volume","","return out a volume",9,[[]]],[11,"previous","","return previous",9,[[]]],[11,"change","","return change",9,[[]]],[11,"change_percent","","return change percent",9,[[]]],[11,"last_trading","","get last trading day",9,[[]]],[11,"symbol","","get symbol",9,[[]]],[0,"search","alpha_vantage","Module for searching specific symbol or companies",null,null],[3,"Search","alpha_vantage::search","struct for storing search method data",null,null],[3,"DataValue","","Struct which stores matches data for search keyword",null,null],[11,"symbol","","Return symbol",10,[[]]],[11,"name","","Return name for symbol",10,[[]]],[11,"stock_type","","Return stock type",10,[[]]],[11,"region","","Return region of search entry",10,[[]]],[11,"market_open","","Return market open time",10,[[]]],[11,"market_close","","Return market close time",10,[[]]],[11,"time_zone","","Return time zone of symbol",10,[[]]],[11,"currency","","Return currency",10,[[]]],[11,"match_score","","Return match score",10,[[]]],[11,"result","","Return result of search",11,[[],["vec",3]]],[0,"sector","alpha_vantage","Module for sector",null,null],[3,"Data","alpha_vantage::sector","Store Sector data",null,null],[3,"Sector","","Stores sector data",null,null],[11,"rank","","Return rank",12,[[]]],[11,"utilities","","Return utilities score",12,[[]]],[11,"health_care","","Return health care score",12,[[]]],[11,"information_technology","","Return out information technology",12,[[]]],[11,"industrials","","Return industrials scores",12,[[]]],[11,"real_estate","","Return out real estate value",12,[[]]],[11,"consumer_staples","","Return consumer staples value",12,[[]]],[11,"consumer_discretionary","","Return out value for consumer discretionary",12,[[]]],[11,"financials","","Return out for financials",12,[[]]],[11,"communication_services","","Gives value of communication services",12,[[]]],[11,"materials","","Gives materials value",12,[[]]],[11,"energy","","Gives out energy data",12,[[]]],[11,"information","","Return sector information",13,[[]]],[11,"last_refreshed","","Return last refreshed time",13,[[]]],[11,"data","","Return vector of data",13,[[],["vec",3]]],[0,"stock_time","alpha_vantage","Module for stock time series",null,null],[3,"TimeSeries","alpha_vantage::stock_time","Struct for storing time series data",null,null],[3,"MetaData","","Struct for storing Meta Data value",null,null],[3,"Entry","","Struct for Entry value",null,null],[8,"VecEntry","","trait which helps for performing some common operation on…",null,null],[10,"find","","Find a entry with a given time as a input return none if…",14,[[],[["entry",3],["option",4]]]],[10,"latest","","Return a entry which is of latest time period",14,[[],["entry",3]]],[10,"latestn","","Return a top n latest Entry if n Entry is present else…",14,[[],[["vec",3],["result",6]]]],[11,"information","","Return information present in meta data",15,[[]]],[11,"symbol","","Return symbol for which time series function is called",15,[[]]],[11,"last_refreshed","","Return last refreshed time",15,[[]]],[11,"time_zone","","Return time zone of all data time",15,[[]]],[11,"interval","","Time series interval between two consecutive data",15,[[],["option",4]]],[11,"output_size","","Output Size of intraday which can be either Full or compact",15,[[],["option",4]]],[11,"entry","","Return Entry",15,[[],["vec",3]]],[11,"time","","Get time",16,[[]]],[11,"open","","Return open",16,[[]]],[11,"high","","Return high",16,[[]]],[11,"low","","Return low",16,[[]]],[11,"close","","Return close",16,[[]]],[11,"adjusted","","Return adjusted",16,[[],["option",4]]],[11,"volume","","Return volume",16,[[]]],[11,"dividend","","Return dividend",16,[[],["option",4]]],[11,"split","","Return split dividend",16,[[],["option",4]]],[0,"technical_indicator","alpha_vantage","Module for Technical Indicator",null,null],[3,"Indicator","alpha_vantage::technical_indicator","Struct for indicator",null,null],[3,"DataCollector","","Struct for storing a data values",null,null],[4,"MetaDataValue","","Different representation of metadata value",null,null],[13,"Bool","","Boolean representation",17,null],[13,"Unsigned","","Unsigned integer representation",17,null],[13,"Signed","","Signed integer representation",17,null],[13,"Float","","Float representation",17,null],[13,"Text","","Text representation",17,null],[11,"meta_data","","Return out meta data in hash form",18,[[],["hashmap",3]]],[11,"data","","Return data as a vector",18,[[],[["vec",3],["datacollector",3]]]],[11,"time","","Return out a time",19,[[]]],[11,"values","","Return values for Data",19,[[],["hashmap",3]]],[0,"user","alpha_vantage","Module for basic definition of user information like…",null,null],[3,"APIKey","alpha_vantage::user","Struct for initializing api key value as well as contain…",null,null],[11,"set_api","","Method for initializing [APIKey][APIKey] struct",20,[[]]],[11,"set_with_timeout","","Set API value with timeout period",20,[[]]],[11,"set_with_env","","Set out [APIKey][APIKey] by reading out environment variable",20,[[]]],[11,"update_timeout","","Update timeout for API key",20,[[]]],[11,"get_api","","Method to get api key",20,[[]]],[11,"get_timeout","","Get API timeout period",20,[[]]],[11,"crypto","","Crypto method for calling cryptography function",20,[[["cryptofunction",4]]]],[11,"exchange","","Method for exchanging currency value from one currency to…",20,[[]]],[11,"forex","","Forex method for calling stock time series",20,[[["timeseriesinterval",4],["forexfunction",4],["outputsize",4]]]],[11,"quote","","Method for returning Quote Struct",20,[[]]],[11,"search","","Search method for searching keyword or company # Example…",20,[[]]],[11,"sector","","Method for returning out a sector data as struct # Example…",20,[[]]],[11,"stock_time","","Stock time method for calling stock time series API #…",20,[[["timeseriesinterval",4],["stockfunction",4],["outputsize",4]]]],[11,"technical_indicator","","Technical indicator API caller method # Example `use…",20,[[["technicalindicator",4],["technicalindicatorinterval",4],["option",4],["vec",3],["option",4]]]],[0,"util","alpha_vantage","Utility module declaring enum for basic function and…",null,null],[4,"CryptoFunction","alpha_vantage::util","Enum for declaring function for crypto series by defining…",null,null],[13,"Daily","","returns the daily historical time series for a digital…",21,null],[13,"Weekly","","returns the weekly historical time series for a digital…",21,null],[13,"Monthly","","returns the monthly historical time series for a digital…",21,null],[4,"ForexFunction","","Enum for declaring function for forex function by defining…",null,null],[13,"IntraDay","","returns intraday time series (timestamp, open, high, low,…",22,null],[13,"Daily","","returns the daily time series (timestamp, open, high, low,…",22,null],[13,"Weekly","","returns the weekly time series (timestamp, open, high,…",22,null],[13,"Monthly","","returns the monthly time series (timestamp, open, high,…",22,null],[4,"OutputSize","","Enum for declaring output size of API call",null,null],[13,"Compact","","Return latest top 100 points recommended if no historical…",23,null],[13,"Full","","Returns full api data points recommended if a full…",23,null],[13,"None","","uses out default which is Compact",23,null],[4,"StockFunction","","Enum for declaring function for stock time series by…",null,null],[13,"IntraDay","","returns intraday time series (timestamp, open, high, low,…",24,null],[13,"Daily","","returns daily time series (date, daily open, daily high,…",24,null],[13,"DailyAdjusted","","returns daily time series (date, daily open, daily high,…",24,null],[13,"Weekly","","returns weekly time series (last trading day of each week,…",24,null],[13,"WeeklyAdjusted","","returns weekly adjusted time series (last trading day of…",24,null],[13,"Monthly","","returns monthly time series (last trading day of each…",24,null],[13,"MonthlyAdjusted","","returns monthly adjusted time series (last trading day of…",24,null],[4,"TechnicalIndicator","","Enum for declaring different optional value of Technical…",null,null],[13,"Acceleration","","The acceleration factor. Positive floats are accepted. By…",25,null],[13,"Fastdmatype","","Moving average type for the fastd moving average. By…",25,null],[13,"Fastdperiod","","The time period of the fastd moving average. Positive…",25,null],[13,"Fastkperiod","","The time period of the fastk moving average. Positive…",25,null],[13,"Fastlimit","","Positive floats are accepted. By default, fastlimit=0.01.",25,null],[13,"Fastmatype","","Moving average type for the faster moving average. By…",25,null],[13,"Fastperiod","","Positive integers are accepted. By default, fastperiod=12.",25,null],[13,"Matype","","Moving average type. By default, matype=0. Integers 0 - 8…",25,null],[13,"Maximum","","The acceleration factor maximum value. Positive floats are…",25,null],[13,"Nbdevdn","","The standard deviation multiplier of the lower band.…",25,null],[13,"Nbdevup","","The standard deviation multiplier of the upper band.…",25,null],[13,"Signalmatype","","Moving average type for the signal moving average. By…",25,null],[13,"Signalperiod","","Positive integers are accepted. By default, signalperiod=9.",25,null],[13,"Slowdmatype","","Moving average type for the slowd moving average. By…",25,null],[13,"Slowdperiod","","The time period of the slowd moving average. Positive…",25,null],[13,"Slowkmatype","","Moving average type for the slowk moving average. By…",25,null],[13,"Slowkperiod","","The time period of the slowk moving average. Positive…",25,null],[13,"Slowlimit","","Positive floats are accepted. By default, slowlimit=0.01.",25,null],[13,"Slowmatype","","Moving average type for the slower moving average. By…",25,null],[13,"Slowperiod","","Positive integers are accepted. By default, slowperiod=26.",25,null],[13,"Timeperiod1","","The first time period for the indicator. Positive integers…",25,null],[13,"Timeperiod2","","The second time period for the indicator. Positive…",25,null],[13,"Timeperiod3","","The third time period for the indicator. Positive integers…",25,null],[4,"TechnicalIndicatorInterval","","Enum for declaring interval for technical indicator",null,null],[13,"OneMin","","1 min interval",26,null],[13,"FiveMin","","5 min interval",26,null],[13,"FifteenMin","","15 min interval",26,null],[13,"ThirtyMin","","30 min interval",26,null],[13,"SixtyMin","","60 min interval",26,null],[13,"Daily","","daily interval",26,null],[13,"Weekly","","weekly interval",26,null],[13,"Monthly","","monthly interval",26,null],[4,"TimeSeriesInterval","","Enum for declaring interval for intraday time series",null,null],[13,"OneMin","","1 min interval",27,null],[13,"FiveMin","","5 min interval",27,null],[13,"FifteenMin","","15 min interval",27,null],[13,"ThirtyMin","","30 min interval",27,null],[13,"SixtyMin","","60 min interval",27,null],[13,"None","","no interval which applies for all time series expect…",27,null],[11,"from","alpha_vantage::blocking","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","alpha_vantage::crypto","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","alpha_vantage::error","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","alpha_vantage::exchange","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","alpha_vantage::forex","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","alpha_vantage::quote","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","alpha_vantage::search","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","alpha_vantage::sector","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","alpha_vantage::stock_time","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",28,[[]]],[11,"into","","",28,[[]]],[11,"to_owned","","",28,[[]]],[11,"clone_into","","",28,[[]]],[11,"borrow","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"borrow_mut","","",28,[[]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","alpha_vantage::technical_indicator","",18,[[]]],[11,"into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","alpha_vantage::user","",20,[[]]],[11,"into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"borrow_mut","","",20,[[]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"from","alpha_vantage::util","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"borrow_mut","","",21,[[]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"from","","",22,[[]]],[11,"into","","",22,[[]]],[11,"to_owned","","",22,[[]]],[11,"clone_into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"borrow_mut","","",22,[[]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"borrow_mut","","",23,[[]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"to_owned","","",24,[[]]],[11,"clone_into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"borrow_mut","","",24,[[]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"from","","",25,[[]]],[11,"into","","",25,[[]]],[11,"borrow","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"borrow_mut","","",25,[[]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"to_owned","","",26,[[]]],[11,"clone_into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"borrow_mut","","",26,[[]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"from","","",27,[[]]],[11,"into","","",27,[[]]],[11,"to_owned","","",27,[[]]],[11,"clone_into","","",27,[[]]],[11,"borrow","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"borrow_mut","","",27,[[]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"clone","alpha_vantage::crypto","",2,[[],["entry",3]]],[11,"clone","alpha_vantage::forex","",7,[[],["entry",3]]],[11,"clone","alpha_vantage::search","",10,[[],["datavalue",3]]],[11,"clone","alpha_vantage::sector","",12,[[],["data",3]]],[11,"clone","alpha_vantage::stock_time","",28,[[],["metadata",3]]],[11,"clone","","",16,[[],["entry",3]]],[11,"clone","alpha_vantage::util","",21,[[],["cryptofunction",4]]],[11,"clone","","",22,[[],["forexfunction",4]]],[11,"clone","","",23,[[],["outputsize",4]]],[11,"clone","","",24,[[],["stockfunction",4]]],[11,"clone","","",26,[[],["technicalindicatorinterval",4]]],[11,"clone","","",27,[[],["timeseriesinterval",4]]],[11,"default","alpha_vantage::crypto","",2,[[],["entry",3]]],[11,"default","","",3,[[],["crypto",3]]],[11,"default","alpha_vantage::exchange","",5,[[],["exchange",3]]],[11,"default","alpha_vantage::forex","",7,[[],["entry",3]]],[11,"default","","",8,[[],["forex",3]]],[11,"default","alpha_vantage::quote","",9,[[],["quote",3]]],[11,"default","alpha_vantage::search","",11,[[],["search",3]]],[11,"default","","",10,[[],["datavalue",3]]],[11,"default","alpha_vantage::sector","",12,[[],["data",3]]],[11,"default","","",13,[[],["sector",3]]],[11,"default","alpha_vantage::stock_time","",15,[[],["timeseries",3]]],[11,"default","","",28,[[],["metadata",3]]],[11,"default","","",16,[[],["entry",3]]],[11,"default","alpha_vantage::technical_indicator","",18,[[],["indicator",3]]],[11,"default","","",19,[[],["datacollector",3]]],[11,"fmt","alpha_vantage::crypto","",2,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::error","",4,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::forex","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::search","",10,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::stock_time","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",28,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::technical_indicator","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","alpha_vantage::error","",4,[[["formatter",3]],["result",6]]],[11,"deserialize","alpha_vantage::search","",10,[[],["result",4]]],[11,"deserialize","alpha_vantage::technical_indicator","",17,[[],["result",4]]]],"p":[[3,"APIKey"],[8,"VecEntry"],[3,"Entry"],[3,"Crypto"],[4,"Error"],[3,"Exchange"],[8,"VecEntry"],[3,"Entry"],[3,"Forex"],[3,"Quote"],[3,"DataValue"],[3,"Search"],[3,"Data"],[3,"Sector"],[8,"VecEntry"],[3,"TimeSeries"],[3,"Entry"],[4,"MetaDataValue"],[3,"Indicator"],[3,"DataCollector"],[3,"APIKey"],[4,"CryptoFunction"],[4,"ForexFunction"],[4,"OutputSize"],[4,"StockFunction"],[4,"TechnicalIndicator"],[4,"TechnicalIndicatorInterval"],[4,"TimeSeriesInterval"],[3,"MetaData"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);