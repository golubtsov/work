// класс, чтобы очищать строки от <highlighttext>, </highlighttext>

class ClearStr {
    clearStr(str) {
        let res = str.str.replaceAll('<highlighttext>', '').replaceAll('</highlighttext>', '');
        return res;
    }
}

export default ClearStr;