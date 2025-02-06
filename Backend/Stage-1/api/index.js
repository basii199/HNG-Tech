const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Utility Functions
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isArmstrong = (num) => {
    num = Math.abs(num)
    const digits = num.toString().split('').map(Number);
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);
    return sum === num;
};

const isPerfect = (num) => {
    if (num < 1) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

const getDigitSum = (num) => {
    return Math.abs(num).toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
};

// API Endpoint
app.get('/api/classify-number', async (req, res) => {
    const { number } = req.query;
    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);
    const properties = [];
    if (isArmstrong(num)) properties.push('armstrong');
    properties.push(num % 2 === 0 ? 'even' : 'odd');

    try {
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
        const funFact = funFactResponse.data.text;

        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: getDigitSum(num),
            fun_fact: funFact
        });
    } catch (error) {
        res.status(500).json({ number: num, error: 'Failed to fetch fun fact' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
