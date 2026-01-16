import requests

try:
    response = requests.post("http://127.0.0.1:8000/register", json={"username": "testuser", "password": "password123"})
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(e)
