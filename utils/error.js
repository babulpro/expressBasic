function error(msg="something went wrong",status=500){
    let e  = new Error(msg)
    e.status = status
    return e ;
}

module.exports = error