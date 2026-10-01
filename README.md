# Bikash Portfolio

## Run with Docker Compose

From this directory, build and start the separate frontend and backend images:

```sh
./run_portfolio.sh
```

The script prints the current LAN URL after the containers start. The frontend
binds to all host IPv4 interfaces, so the printed Wi-Fi/Ethernet address is
reachable from another device on the same network. You can also start the
services directly with `docker compose up --build -d`; open
`http://localhost:8080` on the Docker host or `http://<host-lan-ip>:8080` from
another device. The frontend's Nginx server forwards
`/api/*` requests to the backend over the private Compose network. The backend
provides `GET /api/health` and accepts contact form submissions at
`POST /api/contact`.

Contact messages are saved as JSON Lines in the persistent `contact-data`
volume; they are not emailed. To inspect saved messages, run
`docker compose exec backend cat /data/messages.jsonl`. The published port can
be changed with `PORTFOLIO_PORT`, for example
`PORTFOLIO_PORT=8090 docker compose up --build -d`.

Stop the services with:

```sh
docker compose down
```

The contact data volume is preserved when the services stop. To delete the
saved messages too, run `docker compose down --volumes`.
