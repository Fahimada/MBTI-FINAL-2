
const mbtiLinks = {
    "INTJ": "https://designer-sho.com/shop/types/P45616-INTJ.html",
    "INTP": "https://designer-sho.com/shop/types/P45617-INTP.html",
    "ENTJ": "https://designer-sho.com/shop/types/P45609-ENTJ.html",
    "ENTP": "https://designer-sho.com/shop/types/P45610-ENTP.html",
    "INFJ": "https://designer-sho.com/shop/types/P45612-INFJ.html",
    "INFP": "https://designer-sho.com/shop/types/P45613-INFP.html",
    "ENFJ": "https://designer-sho.com/shop/types/P45607-enfj.html",
    "ENFP": "https://designer-sho.com/shop/types/P45608-ENFP.html",
    "ISTJ": "https://designer-sho.com/shop/types/P45620-ISTJ.html",
    "ISFJ": "https://designer-sho.com/shop/types/P45621-ISFJ.html",
    "ESTJ": "https://designer-sho.com/shop/types/P45622-ESTJ.html",
    "ESFJ": "https://designer-sho.com/shop/types/P45623-ESFJ.html",
    "ISTP": "https://designer-sho.com/shop/types/P45619-ISTP.html",
    "ISFP": "https://designer-sho.com/shop/types/P45625-ISFP.html",
    "ESTP": "https://designer-sho.com/shop/types/P45626-ESTP.html",
    "ESFP": "https://designer-sho.com/shop/types/P45624-ESFP.html"
};

const questionsMap = {
    q1: { axis: 'EI', positive: 'E' },
    q2: { axis: 'EI', positive: 'I' },
    q3: { axis: 'EI', positive: 'E' },
    q4: { axis: 'EI', positive: 'I' },
    q5: { axis: 'EI', positive: 'E' },
    q6: { axis: 'EI', positive: 'I' },
    q7: { axis: 'EI', positive: 'E' },
    q8: { axis: 'EI', positive: 'I' },
    q9: { axis: 'EI', positive: 'E' },
    q10: { axis: 'EI', positive: 'I' },
    q11: { axis: 'EI', positive: 'E' },
    q12: { axis: 'EI', positive: 'I' },
    q13: { axis: 'EI', positive: 'E' },
    q14: { axis: 'EI', positive: 'I' },
    q15: { axis: 'EI', positive: 'E' },
    q16: { axis: 'EI', positive: 'I' },
    q17: { axis: 'SN', positive: 'S' },
    q18: { axis: 'SN', positive: 'N' },
    q19: { axis: 'SN', positive: 'S' },
    q20: { axis: 'SN', positive: 'N' },
    q21: { axis: 'SN', positive: 'S' },
    q22: { axis: 'SN', positive: 'N' },
    q23: { axis: 'SN', positive: 'S' },
    q24: { axis: 'SN', positive: 'N' },
    q25: { axis: 'SN', positive: 'S' },
    q26: { axis: 'SN', positive: 'N' },
    q27: { axis: 'SN', positive: 'S' },
    q28: { axis: 'SN', positive: 'N' },
    q29: { axis: 'SN', positive: 'S' },
    q30: { axis: 'SN', positive: 'N' },
    q31: { axis: 'SN', positive: 'S' },
    q32: { axis: 'SN', positive: 'N' },
    q33: { axis: 'TF', positive: 'T' },
    q34: { axis: 'TF', positive: 'F' },
    q35: { axis: 'TF', positive: 'T' },
    q36: { axis: 'TF', positive: 'F' },
    q37: { axis: 'TF', positive: 'T' },
    q38: { axis: 'TF', positive: 'F' },
    q39: { axis: 'TF', positive: 'T' },
    q40: { axis: 'TF', positive: 'F' },
    q41: { axis: 'TF', positive: 'T' },
    q42: { axis: 'TF', positive: 'F' },
    q43: { axis: 'TF', positive: 'T' },
    q44: { axis: 'TF', positive: 'F' },
    q45: { axis: 'TF', positive: 'T' },
    q46: { axis: 'TF', positive: 'F' },
    q47: { axis: 'TF', positive: 'T' },
    q48: { axis: 'JP', positive: 'F' },
    q49: { axis: 'JP', positive: 'J' },
    q50: { axis: 'JP', positive: 'P' },
    q51: { axis: 'JP', positive: 'J' },
    q52: { axis: 'JP', positive: 'P' },
    q53: { axis: 'JP', positive: 'J' },
    q54: { axis: 'JP', positive: 'P' },
    q55: { axis: 'JP', positive: 'J' },
    q56: { axis: 'JP', positive: 'P' },
    q57: { axis: 'JP', positive: 'J' },
    q58: { axis: 'JP', positive: 'P' },
    q59: { axis: 'JP', positive: 'J' },
    q60: { axis: 'JP', positive: 'P' },
    q61: { axis: 'JP', positive: 'J' },
    q62: { axis: 'JP', positive: 'P' }
};

function calculateMBTI() {
    const traits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    for (let i = 1; i <= 62; i++) {
        const name = "q" + i;
        const selected = document.querySelector(`input[name='${name}']:checked`);
        if (!selected) {
            alert("لطفاً به تمام سوالات پاسخ دهید.");
            return;
        }

        const score = parseInt(selected.value) - 4;
        if (score !== 0 && questionsMap[name]) {
            const { axis, positive } = questionsMap[name];
            const negative = axis.replace(positive, "");
            if (score > 0) traits[positive] += score;
            else traits[negative] += -score;
        }
    }

    const result =
        (traits.I >= traits.E ? "I" : "E") +
        (traits.N >= traits.S ? "N" : "S") +
        (traits.T >= traits.F ? "T" : "F") +
        (traits.J >= traits.P ? "J" : "P");

    if (mbtiLinks[result]) {
        window.location.href = mbtiLinks[result];
    } else {
        alert("نتیجه‌ای یافت نشد.");
    }
}
