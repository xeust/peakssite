from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/")
def render_page():
    return FileResponse("./static/index.html")

@app.get("/pricing")
def render_page():
    return FileResponse("./static/pricing.html")

app.mount("/", StaticFiles(directory="static"), name="static")