const romanToInt = (s) => {
    const mapValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                if (s[i + 1] == 'V') {
                    num += 4;
                    i++;
                } else if (s[i + 1] == 'X') {
                    num += 9;
                    i++;
                } else {
                    num += mapValue[s[i]];
                }
                break;
            case 'X':
                if (s[i + 1] == 'L') {
                    num += 40;
                    i++;
                } else if (s[i + 1] == 'C') {
                    num += 90;
                    i++;
                } else {
                    num += mapValue[s[i]];
                }
                break;
            case 'C':
                if (s[i + 1] == 'D') {
                    num += 400;
                    i++;
                } else if (s[i + 1] == 'M') {
                    num += 900;
                    i++;
                } else {
                    num += mapValue[s[i]];
                }
                break;
            default:
                num += mapValue[s[i]];
                break;
        }
    }
    return num;
};

export default romanToInt;
