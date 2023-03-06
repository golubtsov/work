// класс, чтобы очищать строки от <highlighttext>, </highlighttext>

class ClearStr {
    clearStr(str) {
        let res = str.str.replaceAll('<highlighttext>', '');
        res = res.replaceAll('</highlighttext>', '');
        return res;
    }
}

export default ClearStr;