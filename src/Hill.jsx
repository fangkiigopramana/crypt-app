import { useState } from "react";
import Navigation from "./components/Navigation";

export default function Hill(params) {
    // Function to convert text to numeric representation
    const [plaintext, setPlaintext] = useState('');
    const [keyMatrix, setKeyMatrix] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const textToNumbers = (text) => {
        const numericText = text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(char => char.charCodeAt(0) - 65);
        return numericText;
    };

    const numbersToText = (numbers) => {
        const text = numbers.map(num => String.fromCharCode(num + 65)).join('');
        return text;
    };

    const matrixMultiply = (matrix1, matrix2, modulus) => {
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
            result[i] = [];
            for (let j = 0; j < matrix2[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < matrix1[0].length; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                result[i][j] = sum % modulus;
            }
        }
        return result;
    };

    const hillEncrypt = (plaintext, keyMatrix) => {
        const numericText = textToNumbers(plaintext);
        const textLength = numericText.length;
        const keyMatrixSize = keyMatrix.length;

        while (textLength % keyMatrixSize !== 0) {
            numericText.push(23); // Adding 'X' (or 23) as padding character
        }

        const plaintextMatrix = [];
        for (let i = 0; i < textLength / keyMatrixSize; i++) {
            plaintextMatrix[i] = numericText.slice(i * keyMatrixSize, (i + 1) * keyMatrixSize);
        }

        const encryptedMatrix = matrixMultiply(plaintextMatrix, keyMatrix, 26);
        const encryptedNumbers = encryptedMatrix.flat();
        const encryptedText = numbersToText(encryptedNumbers);
        return encryptedText;
    };

    const handleEncrypt = () => {
        const keyMatrixArray = keyMatrix.split(',').map(row => row.split(' ').map(num => parseInt(num)));
        const encryptedText = hillEncrypt(plaintext, keyMatrixArray);
        setEncryptedText(encryptedText);
    };

    return (
        <>
            <Navigation />
            <h1 className=" text-center pt-10 text-4xl font-bold">Algoritma Hill Cipher</h1>
            <form class="max-w-sm mx-start text-left">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plaintext</label>
                    <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        value={plaintext}
                        onChange={(e) => setPlaintext(e.target.value)}
                        placeholder="e.g. helloworld" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Key Matrix</label>
                    <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter key matrix (e.g. '6 24 1, 13 16 10, 20 17 15')"
                        value={keyMatrix}
                        onChange={(e) => setKeyMatrix(e.target.value)}
                        required />
                </div>
                <button type="button" onClick={handleEncrypt} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Encrypt</button>
                <div>
                    <label>Encrypted Text:</label>
                    <textarea id="message" rows="4" value={encryptedText} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>

                </div>
            </form>
        </>
    )
};
