Tesseract.recognize(
    'imagetext.png',
    'eng',
    { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log(text);
})