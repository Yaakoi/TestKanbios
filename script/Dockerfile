FROM python:3.8.3

RUN mkdir /script
WORKDIR /script
COPY . /script

RUN pip install pymongo pandas
CMD ["python", "csvToMongo0.py"]