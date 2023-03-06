class ChechNull {
    checkNull(param) {
        if (param !== 'null') {
            for (const key in param) {
                if (param[key] == null) {
                    param[key] = 'Не указано';
                }
            }
        } else {
            param = 'Не указано';
        }
        return param;
    }
}

export default ChechNull;