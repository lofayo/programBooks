
function calcNetInFund(hasBuyedFund, curPrice) {
    const totalNet = hasBuyedFund.reduce((sum, item) => {
        const { portion, perNet } = item || {};
        return sum + portion * (curPrice - perNet + 1);
    }, 0);
    return totalNet;
}
const hasBuyedFundA = [
    {
        portion: 98.81,
        perNet: 1
    },
    {
        portion: 116.1,
        perNet: 0.86
    },
    {
        portion: 122.64,
        perNet: 0.8412
    }
];
console.log('hasBuyedFundA', calcNetInFund(hasBuyedFundA, 0.9317));
const hasBuyedFundB = [
    {
        portion: 87.38,
        perNet: 1.1433
    },
    {
        portion: 89.84,
        perNet: 1.112
    },
    {
        portion: 91.51,
        perNet: 1.0917
    },
    {
        portion: 88.93,
        perNet: 1.1234
    },
    {
        portion: 82.46,
        perNet: 1.2115
    },
    {
        portion: 92.36,
        perNet: 1.0816
    },
    {
        portion: 196.50,
        perNet: 1.0168
    }
];
console.log('hasBuyedFundB', calcNetInFund(hasBuyedFundB, 1.0983));

const hasBuyedFundC = [
    {
        portion: 88.2,
        perNet: 1.1327
    },
    {
        portion: 84.96,
        perNet: 1.1758
    },
    {
        portion: 87.48,
        perNet: 1.1420
    },
    {
        portion: 91.01,
        perNet: 1.0977
    },
    {
        portion: 92.74,
        perNet: 1.0772
    },
    {
        portion: 94.67,
        perNet: 1.0553
    },
    {
        portion: 501.05,
        perNet: 0.9969
    },
    {
        portion: 95.12,
        perNet: 1.0503
    }
];

console.log('hasBuyedFundB', calcNetInFund(hasBuyedFundC, 1.066));