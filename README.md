How to works this code! (Scripts)
-----------------
```
$ git clone https://github.com/Panlawan/ultimate-api.git

$ cd ultimate-api/backend/

$ npm init -y

$ npm install 

$ npm run dev
```

How to ceate service for run after reboot
-
```
$ cd /etc/systemd/system

$ sudo nano {name_of_service}.service
```

Add to yours service
```
[Unit]
Description=api data
After=network.target

[Service]
ExecStart=/home/{users}/.nvm/versions/node/v14.15.4/bin/npm run dev --prefix /home/{users}/ultimate-api/backend/
Restart=always
WorkingDirectory=/home/{users}/my-service
User={users}

[Install]
WantedBy=multi-user.target
```
and save it ```control + x -> y```

Finally you can run the Service
```
$ sudo systemctl start {name_of_service}.service

$ sudo systemctl status {name_of_service}.service

$ sudo systemctl enable {name_of_service}.service
```
