import { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {useSelector} from 'react-redux'
import CutList from "./CutList";
import PartsList from "./PartsList";

const PrintPreview = () =>{
    const componentRef = useRef();
    const { project } = useSelector(state => state.project)
    const { notes } = useSelector(state => state.note)
    const { cutList, partsList } = useSelector(state => state.cart)

    const saveAsPDF = () => {
        const input = componentRef.current;
        const pdf = new jsPDF('p', 'pt', 'a4');
        input.style.height = 'auto'
    
        html2canvas(input, {scrollY: -window.scrollY }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const imgProps= pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            let imgWidth = 600; 
            let pageHeight = 600;  
            let imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

            heightLeft -= pageHeight;
  

            while (heightLeft >= 0) {
                position = -(pdf.internal.pageSize.getHeight())
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }



            input.style.height = '400px'
            pdf.save('cutlist.pdf');
            
        });

      };

    return(
        <div className='modal__container'>
            <div className='modal__container-top'>
                <div>Print Preview</div>
            </div>
            <div className='modal__container-mid'>
                <div className="print__preview-container" ref={componentRef}>
                    <div className="print__preview-project">
                        <div className="print__preview-label">{project.title}</div>
                        <div>
                            <div className="print__preview-sublabel">Description</div>
                            <div className="print__preview-description">{project.description}</div>
                        </div>
                    </div>
                    <div className="print__preview-cart-container">
                        <div className="print__preview-label">Cart</div>
                        <div className="print__preview-cart">
                            <CutList cutList={cutList} preview />
                            <PartsList partsList={partsList} preview />
                        </div>
                    </div>
                    {(notes.length != 0 )? 
                        <div className="print__preview-notes">
                            <div className="print__preview-label">Notes</div>
                            <ol className="print__preview-notes-list">
                                {notes.map((note, index)=>(
                                    <li>{note.note}</li>
                                ))}
                            </ol>
                        </div>
                    : null
                    }


                </div>
            </div>
            <div className='modal__container-bottom'>
                <button onClick={saveAsPDF}>Save to PDF</button>
            </div>

            
        </div>
    )
}

export default PrintPreview