from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from models import (supplier_pydantic, supplier_pydanticIn, Supplier)

app = FastAPI()
#index part
@app.get('/')
def index():
    return {"Msg" : "go to /docs for the API documnets"}

@app.post('/supplier')
async def add_supplier(supplier_info: supplier_pydanticIn):
    supplier_obj = await Supplier.create(**supplier_info.dict(exclude_unset=True))
    response = await supplier_pydantic.from_tortoise_orm(supplier_obj)
    return {"status" : "OK", "data" : response}

@app.get('/supplier')
async def get_all_suppliers():
    response= await supplier_pydantic.from_queryset(Supplier.all())
    return {"status" : "OK", "data" : response}

@app.get('/supplier/{supplier_id}')
async def get_specific_supplier(supplier_id: int):
    response = await supplier_pydantic.from_queryset_single(Supplier.get(id=supplier_id))
    return {"status" : "OK", "data" : response}

@app.put('/supplier/{supplier_id}')
async def update_supplier(supplier_id: int, update_info: supplier_pydanticIn):
    supplier = await Supplier.get(id=supplier_id)
    update_data = update_info.dict(exclude_unset=True)
    supplier.update_from_dict(update_data)
    await supplier.save()
    response = await supplier_pydantic.from_tortoise_orm(supplier)
    return {"status" : "OK", "data" : response}

@app.delete('/supplier/{supplier_id}')
async def delete_supplier(supplier_id: int):
    supplier = await Supplier.get(id= supplier_id)
    await supplier.delete()
    return {"status" : "OK", "data" : "Supplier deleted successfully"}

register_tortoise(  
    app,
    db_url="sqlite://database.sqlite3",
    modules={"models": ["models"]},
    generate_schemas=True,
    add_exception_handlers=True
)