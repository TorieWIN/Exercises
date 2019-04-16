const DataAccess = require('./DataAccess');
const TimeStamp = require('./TimeStamp');
const data = new DataAccess();
const time = new TimeStamp();

time.getTime();
data.getPost(1);
