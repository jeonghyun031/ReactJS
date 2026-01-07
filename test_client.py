import httpx

def run_client():
    try:
        response = httpx.get("http://127.0.0.1:8000/chat")
        print("Response from server:", response.json())
        
        item_response = httpx.get("http://127.0.0.1:8000/chat/5?q=validation")
        print("Item response:", item_response.json())
    except httpx.ConnectError:
        print("Could not connect to the server. Make sure it's running.")

if __name__ == "__main__":
    run_client()