import { useState } from "react";
import Navigation from "./components/Navigation";

export default function Vigenere(params) {
    const [plainText, setPlainText] = useState('');
    const [keyword, setKeyword] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const [plainText2, setPlainText2] = useState('');
    const [keyword2, setKeyword2] = useState('');
    const [cipher, setCipher] = useState('');


    //Enkripsi

    const encryptText = () => {
        const cleanPlainText = plainText.toUpperCase().replace(/[^A-Z]/g, '');
        const cleanKeyword = keyword.toUpperCase().replace(/[^A-Z]/g, '');

        let encrypted = '';
        const keywordLength = cleanKeyword.length;
        let keywordIndex = 0;

        for (let i = 0; i < cleanPlainText.length; i++) {
            const plainChar = cleanPlainText.charAt(i);
            const keyChar = cleanKeyword.charAt(keywordIndex);

            const plainCharCode = plainChar.charCodeAt(0) - 65;
            const keyCharCode = keyChar.charCodeAt(0) - 65;

            const encryptedCharCode = (plainCharCode + keyCharCode) % 26 + 65;
            const encryptedChar = String.fromCharCode(encryptedCharCode);

            encrypted += encryptedChar;

            keywordIndex = (keywordIndex + 1) % keywordLength;
        }

        setEncryptedText(encrypted);
    };

    const handlePlainTextChange = (e) => {
        setPlainText(e.target.value);
        encryptText();
    };

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
        encryptText();
    };

    return (
        <>
            <Navigation />


            <h1 className=" text-center pt-10 text-4xl font-bold">Algoritma Vigenere Cipher</h1>
            <section className="py-3 flex justify-start gap-80">
                {/* enkripsi */}
                <div className="max-w-sm text-left">
                    <p className="font-gray-900 text-xl font-bold my-3">** EnCrypt</p>
                    <form class="max-w-sm mx-start text-left">
                        <div class="mb-5">
                            <label for="plaintext" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plaintext</label>
                            <input type="text" id="plaintext" value={plainText} onChange={handlePlainTextChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: abcde" required />
                        </div>
                        <div class="mb-5">
                            <label for="keyword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">keyword</label>
                            <input type="text" id="keyword" value={keyword} onChange={handleKeywordChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: abcde" required />
                        </div>
                        <div class="mb-5">
                            <label for="cipher" class="block mb-2 text-sm text-green-900 dark:text-white">Cipher Text</label>
                            <input type="text" id="cipher" value={encryptedText} class="bg-gray-300 border border-gray-300 text-black font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
};
