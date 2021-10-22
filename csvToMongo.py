import csv
import json
from pymongo import MongoClient

fcsv = './data.csv'
fjson = './data.json'

data = []
with open(fcsv) as csvfile:
    reader = csv.DictReader(csvfile)
    for rows in reader:
        data.append(rows)
with open(fjson, 'w') as jsonFile:
    jsonFile.write(json.dumps(data, indent=2))
print("JSON ok!")

client = MongoClient('127.0.0.1', 27017)
db = client['test']
collection = db['employees']
with open(fjson) as f:
    file_data = json.load(f)

collection.insert_many(file_data)
client.close()
print('C\'est finito')