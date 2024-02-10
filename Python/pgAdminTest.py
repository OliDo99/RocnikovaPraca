from flask import Flask, request
from flask_cors import CORS
import psycopg2
import re

app = Flask(__name__)
CORS(app)
databaseName ="demoDB"
tableName = "MotorkyTest"
thisPassword = "0000"
thisUser = "postgres"
thisHost= "127.0.0.1"
thisPort= "5432"


conn = psycopg2.connect(database=databaseName, user=thisUser, password=thisPassword, host=thisHost, port=thisPort)
conn.autocommit = True
cursor = conn.cursor()

def SelectData():
  cursor.execute(f''' SELECT * FROM public."{tableName}" order by "Year" desc''')
  data = cursor.fetchall()
  return data

@app.route('/getData')
def get_data():
  return {"data":SelectData()}

if __name__ == '__main__':
  app.run(host='127.0.0.1', port=5000)