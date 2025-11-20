from fastapi import FastAPI
from sqlalchemy import event
from sqlalchemy.sql.ddl import CreateSchema

from api.auth_controller import auth_router
from config import settings
from core.db_connect import Base, engine
import logging

from models.user import User,Role,UserRole


# Control logging with this one line:
logging.basicConfig(level=logging.DEBUG if settings.debug else logging.INFO)
app = FastAPI(title=settings.app_name, debug=settings.debug)

# Automatically create schema if it doesn't exist
event.listen(Base.metadata, "before_create", lambda target, connection, **kw: connection.execute(CreateSchema("user", if_not_exists=True)))


# Create tables
Base.metadata.create_all(bind=engine)

# Include auth router with prefix
app.include_router(auth_router, prefix="/api/auth", tags=["auth"])