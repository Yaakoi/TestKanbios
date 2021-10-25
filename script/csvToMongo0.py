import pandas as pd 
from pymongo import MongoClient
import json

client = MongoClient("mongodb://mongo:27017")
db = client["test"]
coll = db["employees"]
data = pd.read_csv("./data.csv")
payload = json.loads(data.to_json(orient='records'))
coll.insert_many(payload)
print('done')