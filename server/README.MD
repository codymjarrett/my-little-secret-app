To verify that MongoDB is running a process

ps aux | grep -v grep | grep mongo

To run MongoDB

Brew services start mongodb-community@4.2

To reset MongoDB

Brew services restart mongod-community@4.2

To connect a mongo shell

mongo