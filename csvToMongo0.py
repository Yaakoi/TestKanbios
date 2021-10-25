import pandas as pd 
from pymongo import MongoClient
import json

client = MongoClient("127.0.0.1", 27017)
db = client["test"]
coll = db["employees"]
data = pd.read_csv("./data.csv")
payload = json.loads(data.to_json(orient='records'))
coll.remove()
coll.insert(payload)
print('done')