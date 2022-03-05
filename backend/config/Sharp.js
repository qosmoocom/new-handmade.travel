const fs = require('fs');
const path = require('path')
const sharp=require('sharp')
// rasm zaguruzka bulganda orginali uchib qirqilgani tushadi
class UploadFile{
    constructor( filename) {
        this.filess=filename
    }
    sharpMetod(){
        const filename=this.filess
        sharp(path.join(path.dirname(__dirname) + `/images/landing/${filename}`) ).resize(500,500)
            .jpeg({
                quality: 50
            })
            .toFile(path.join(path.dirname(__dirname) + `/images/landing/${filename}`), (err)=>{
                if(err) {
                    throw err
                }
                fs.unlink(path.join(path.dirname(__dirname) + `/images/landing/${filename}`),(err)=>{
                    if(err) {
                        throw err
                    }
                })
            })
    }
}

module.exports=UploadFile
