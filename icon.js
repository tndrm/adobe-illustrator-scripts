// #target
// illustrator
while (0 < app.documents.length) {
    var doc = app.activeDocument;
    app.selection = null;
    app.executeMenuCommand("selectall");

    var sel = doc.selection;

    if (sel.length > 0) {
        for (var i = 0; i < sel.length; i++) {
            app.executeMenuCommand("Expand3");
        }
    }
    var docName = doc.name
    var dot = docName.lastIndexOf('.');
    newName = docName.substring(0, dot) + '.svg';
    var options = new ExportOptionsSVG();
    targetFile = new File('C:/Users/p/Desktop/result/' + newName);

    doc.exportFile(targetFile, ExportType.SVG, options);
    doc.close()
}