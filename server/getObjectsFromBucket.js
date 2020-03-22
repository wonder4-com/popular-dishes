// const axios = require('axios');
const aws = require('aws-sdk');
const config = require('../config.json');

(async function () {
    try {
        aws.config.setPromisesDependency();
        var photoBucket = 'photosthree';
        var westRegion = 'us-west-1';
        aws.config.update({
            accessKeyId: config.aws.accessKey,
            secretAccessKey: config.aws.secretKey,
            region: westRegion
        });

        const s3 = new aws.S3();

        const response = await s3.listObjectsV2({
            Bucket: photoBucket
        }).promise();

        var arrayOfObjects = response.Contents;

        for (var i = 0; i < arrayOfObjects.length; i++) {
            var urlEnd = arrayOfObjects[i].Key;
            console.log('https://photosthree.s3-' + westRegion + '.amazonaws.com/' + urlEnd);
        }


    } catch (e) {
        console.log('our error', e);
    }
    
})();

// axios.get('https://photosthree.s3-us-west-1.amazonaws.com/background-blur-blurred-949587.jpg')
// .then((res) => {
//     console.log('here is the objects hopefully', res)
// });