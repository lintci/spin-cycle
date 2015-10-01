module.exports = {
  "production": {
    "buildEnv": 'production',
    "store": {
      "type": "S3",
      "accessKeyId": process.env['ACCESS_KEY_ID'],
      "secretAccessKey": process.env['SECRET_ACCESS_KEY'],
      "bucket": "spincycle.lintci.com"
    },
    "assets": {
      "type": "s3",
      "accessKeyId": process.env['ACCESS_KEY_ID'],
      "secretAccessKey": process.env['SECRET_ACCESS_KEY'],
      "bucket": "spincycle.lintci.com"
    }

  }
}
