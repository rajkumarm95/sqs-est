const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_SESSION_TOKEN,
  });

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const queueUrl = process.env.AWS_SQS_URL;

const messages = ['htm'];

messages.forEach((message) => {
  const params = {
    MessageBody: JSON.stringify({
      topic: message,
      topicId: '93b04155-3876-4c80-95b3-70b177a77a2a',
    }),
    QueueUrl: queueUrl,
  };

  sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data.MessageId);
    }
  });
});
