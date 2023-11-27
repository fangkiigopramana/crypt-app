import React, { useState } from 'react';
import Navigation from './components/Navigation';


export default function Playfair(params) {
    const [plaintext, setPlaintext] = useState('')
    const [keyword, setKeyword] = useState('')
    const [cipher, setCipher] = useState('');
    let isChet = false;
    let isEnd = false;
    let flag = false;
    let flagX = false;
    let flagAdd = false;

    const processKey = () => {
        let key = keyword;
        key = key.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
        let temp = '';
        let alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < key.length; i++) {
            if (alphabet.indexOf(key[i]) !== -1) {
                alphabet = alphabet.replace(key[i], '');
                temp += key[i];
            }
        }
        temp += alphabet;
        let result = [];
        temp = temp.split('');
        while (temp[0]) {
            result.push(temp.splice(0, 5));
        }
        return result;
    }

    const GenerateCipher = () => {
        let keyresult = processKey();
        let res = [];
        let error = 'Warning!!! String is empty';
        let str = plaintext;
        if (str.length % 2 == 1) {
            str += "Q"
        }
        if (str === '') {
            console.log(error)
        }
        // let err = 'ERRORX';
        let textPhrase, separator;
        str = str.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
        if (str.length === 0) {
            console.log(error)
        }
        else {
            textPhrase = str[0];
        }
        let help = 0; flagAdd = false;
        for (let i = 1; i < str.length; i++) {
            if (str[i - 1] === str[i]) {
                if (str[i] === 'X') {
                    separator = 'Q';
                }
                else {
                    separator = 'X';
                }
                textPhrase += separator + str[i];
                help = 1;
            }
            else {
                textPhrase += str[i];
            }
            if (help === 1) {
                flagAdd = true;
            }
        }

        if (textPhrase.length % 2 !== 0) {
            if (textPhrase[textPhrase.length - 1] === 'X') {
                textPhrase += 'Q';
                isEnd = true;
                flagX = false;
            }
            else {
                textPhrase += 'X';
                isEnd = true;
                flagX = true;
            }
        }

        let t = [];
        let enCodeStr = '';
        for (let i = 0; i < textPhrase.length; i += 2) {
            let pair1 = textPhrase[i];
            let pair2 = textPhrase[i + 1];
            let p1i, p1j, p2i, p2j;
            for (let stroka = 0; stroka < keyresult.length; stroka++) {
                for (let stolbec = 0; stolbec < keyresult[stroka].length; stolbec++) {
                    if (keyresult[stroka][stolbec] == pair1) {
                        p1i = stroka;
                        p1j = stolbec;
                    }
                    if (keyresult[stroka][stolbec] == pair2) {
                        p2i = stroka;
                        p2j = stolbec;
                    }
                }
            }
            let coord1 = '', coord2 = '';

            if (p1i === p2i) {
                if (p1j === 4) {
                    coord1 = keyresult[p1i][0];
                }
                else {
                    coord1 = keyresult[p1i][p1j + 1];
                }
                if (p2j === 4) {
                    coord2 = keyresult[p2i][0];
                }
                else {
                    coord2 = keyresult[p2i][p2j + 1]
                }
            }
            if (p1j === p2j) {
                if (p1i === 4) {
                    coord1 = keyresult[0][p1j];
                }
                else {
                    coord1 = keyresult[p1i + 1][p1j];
                }
                if (p2i === 4) {
                    coord2 = keyresult[0][p2j];
                }
                else {
                    coord2 = keyresult[p2i + 1][p2j]
                }
            }
            if (p1i !== p2i && p1j !== p2j) {
                coord1 = keyresult[p1i][p2j];
                coord2 = keyresult[p2i][p1j];
            }
            enCodeStr = enCodeStr + coord1 + coord2;
        }
        setCipher(enCodeStr)
    }

    return (
        <>
            <Navigation />
            <h1 className=" text-center pt-10 text-4xl font-bold">Algoritma Playfair Cipher</h1>
            <form class="max-w-sm mx-start text-left mt-10" >
                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plaintext</label>
                    <input type="text" value={plaintext} onChange={(e) => { setPlaintext(e.target.value); GenerateCipher() }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: abcde" required />
                </div>
                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keyword</label>
                    <input type="text" value={keyword} onChange={(e) => { setKeyword(e.target.value); GenerateCipher() }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: abcde" required />
                </div>

                <div class="mt-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciphertext</label>
                    <input type="text" value={plaintext == '' || keyword == '' ? "Tidak Ditemukan" : cipher} class="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                </div>
            </form>
        </>
    )
}