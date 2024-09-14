const htmlEditor = CodeMirror(document.getElementById('htmlEditor'), {
        mode: 'xml',
        theme: 'dracula',
        lineNumbers: true,
        value: '<!-- Écrivez votre code HTML ici -->'
    });
    
    const cssEditor = CodeMirror(document.getElementById('cssEditor'), {
        mode: 'css',
        theme: 'dracula',
        lineNumbers: true,
        value: '/* Écrivez votre code CSS ici */'
    });
    
    const jsEditor = CodeMirror(document.getElementById('jsEditor'), {
        mode: 'javascript',
        theme: 'dracula',
        lineNumbers: true,
        value: '// Écrivez votre code JavaScript ici'
    });
    
    const resultFrame = document.getElementById('resultFrame');
    
    function updatePreview() {
        const htmlContent = htmlEditor.getValue();
        const cssContent = cssEditor.getValue();
        const jsContent = jsEditor.getValue();
    
        const frameDoc = resultFrame.contentDocument || resultFrame.contentWindow.document;
        frameDoc.open();
        frameDoc.write(`
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>${cssContent}</style>
            </head>
            <body>
                ${htmlContent}
                <script>${jsContent}<\/script>
            </body>
            </html>
        `);
        frameDoc.close();
    }
    
    htmlEditor.on('change', updatePreview);
    cssEditor.on('change', updatePreview);
    jsEditor.on('change', updatePreview);
    
    updatePreview();
    