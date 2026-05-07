import axios from "axios";
import { useEffect, useRef } from "react";
import "./CalendarBox.css";
Date.prototype.monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];



export default function CalendarBox({value,selected,setDate}){
    const [box,textHolder] = [useRef(),useRef()];
    const toggle = (selectedbox)=>{
        if(selected === true){

        if(document.querySelector("#theOne") != undefined){
            document.querySelector("#theOne").id = "";
        }
        if(selectedbox.target.classList.value === "calender_box_container selected"){
            if(selectedbox.target.id != "theOne"){
                selectedbox.target.id = "theOne";
                if(setDate){
                    const month = Date.prototype.monthNames.indexOf(document.querySelector("#calendar_header h5").textContent.replace(/[0-9]/g, '').trim()) +1 ;
                    const year = document.querySelector("#calendar_header h5").textContent.replace(/\D/g,'').trim();
                    setDate(`${selectedbox.target.textContent}/${month}/${year}`);
                }
            }
        }
        else{
            if(selectedbox.target.parentElement.id != "theOne"){
                selectedbox.target.parentElement.id = "theOne";
                if(setDate){
                    const month = Date.prototype.monthNames.indexOf(document.querySelector("#calendar_header h5").textContent.replace(/[0-9]/g, '').trim()) +1 ;
                    const year = document.querySelector("#calendar_header h5").textContent.replace(/\D/g,'').trim();
                    setDate(`${textHolder.current.textContent}/${month}/${year}`);
                }
            }
        }

    }

    }
    const getDate = async ()=>{
        // ... (kode di atasnya tetap sama)
        const month = Date.prototype.monthNames.indexOf(document.querySelector("#calendar_header h5").textContent.replace(/[0-9]/g, '').trim()) +1 ;
        const year = document.querySelector("#calendar_header h5").textContent.replace(/\D/g,'').trim();
        let date = `${value}/${month}/${year}`;
        
        try {
            const {data} = await axios.get(`http://104.64.211.71:3002/api/tasks/date/${date}`);
            
            if(data.success === true && data.data.length > 0 && selected === true){
                // TAMBAHKAN PENGECEKAN DI SINI
                if (textHolder.current) {
                    textHolder.current.className = "task"; // Gunakan className untuk mengganti class
                }
            }
        } catch (error) {
            console.error("Gagal mengambil data:", error);
        }
    }

    useEffect( ()=>{
        if(document.querySelector("#theOne") != null){
            document.querySelector("#theOne").id = "";
        }
        if(selected === true){

            box.current.classList ="calender_box_container selected";

        }
        else{
            box.current.classList ="calender_box_container unselected";
        }



    },[selected]);
    useEffect(()=>{
        textHolder.current.classList = "";
        getDate();
    },[value])

    return (
        <div ref={box} className="calender_box_container" onClick={toggle}>
            <span ref={textHolder}>
                {value}
            </span>
            <div></div>


        </div>
    )
}
