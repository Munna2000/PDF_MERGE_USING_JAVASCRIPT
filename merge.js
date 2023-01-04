// const PDFMerger = require('pdf-merger-js')

// var merger = new PDFMerger();
// (async ( p1,p2)=>{
//     await  merger.add('new fornt page.pdf');
//     await  merger.add('R. Prashanth.pdf');
//     await merger.save('merged.pdf')

// }) ();


const PDFMerger = require('pdf-merger-js')

var merger = new PDFMerger();

const mergePdfs = async ( p1,p2,p3)=>{
    await  merger.add(p1);
    await  merger.add(p2);
    await  merger.add(p3);

    // await merger.add(remaing)

    await merger.save('public/merged.pdf')

}

module.exports={mergePdfs}