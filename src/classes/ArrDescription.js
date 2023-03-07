class ArrDescription {
    createArrDescription(desc) {
        let res = [];
        desc.replaceAll('<p>', '').replaceAll('</p>', '').split('<br />').map(el => {
            res.push(`<p>${el}</p>`);
        });
        return res;
    }
}

export default ArrDescription;