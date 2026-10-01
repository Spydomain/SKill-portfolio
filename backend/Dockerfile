FROM python:3.12-alpine

WORKDIR /app
COPY app.py .

ENV HOST=0.0.0.0 \
    PORT=8000 \
    CONTACTS_FILE=/data/messages.jsonl \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

EXPOSE 8000

CMD ["python", "app.py"]
