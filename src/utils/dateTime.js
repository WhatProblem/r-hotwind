const dealTime = {
    /**
     * 处理input的datetime变成:xx-xx-xx yy:yy:yy
     */
    translateLocal(srcTime) {
        if (srcTime) {
            return srcTime.replace('T', ' ') + ':00'
        } else {
            return '';
        }
    }
}

export default dealTime;