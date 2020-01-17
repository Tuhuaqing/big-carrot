export default {
    // 日期对象转yyyy-mm-dd
    dateToYmd(time) {
        let date = new Date(time);
        let Str = date.getFullYear() + '-' +
            ((date.getMonth() + 1).toString().length == 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' +
            (date.getDate().toString().length == 1 ? '0' + date.getDate() : date.getDate())
        return Str;
    }
}