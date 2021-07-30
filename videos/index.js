const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const videos = [
    'LbVA2udEec0',
    'f8WdxqcH1QQ',
    'htGN1lu8TtA',
    'PDeTO26fRVQ',
]


app.get('/api/videos', (req, res) => {
    res.send(videos)
})

if (process.env.NODE_ENV != 'development') {
    app.use(express.static(path.join(__dirname, 'front/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'front/build/index.html', function (error) {
            if (error) {
                res.status(500).send(error)
            }
        }))
    })
}



app.listen(3000, () => {
    console.log('Running')
})