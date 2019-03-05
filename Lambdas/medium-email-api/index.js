const AWS = require('aws-sdk');
const SES = new AWS.SES();


exports.handler = async (event) => {
    if (event.httpMethod === "POST") {
        let { emailAddress, subject, content } = JSON.parse(event.body);
        let [err, res] = await handle(sendEmail(emailAddress, subject, content));
        return Response({ err, res });
    }
}

const sendEmail = (emailAddress, subject, content) => {
    let params = {
        Source: 'Sam Williams <samwcoding@gmail.com>',
        Destination: {
            ToAddresses: [emailAddress],
        },
        Message: {
            Subject: {
                Data: subject,
                Charset: 'utf-8'
            },
            Body: {
                Text: {
                    Data: `<html><body>${content}</body></html>`,
                    Charset: 'utf-8'
                },
                Html: {
                    Data: content,
                    Charset: 'utf-8'
                }
            }
        }
    };

    return SES.sendEmail(params).promise();
}


const Response = ({ err, res }) => {
    return {
        "statusCode": err ? 400 : 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
        "body": err ? JSON.stringify(err) : JSON.stringify(res),
        "isBase64Encoded": false
    };
}

const handle = prom => prom.then(res => [null, res]).catch(err => [err, null]);