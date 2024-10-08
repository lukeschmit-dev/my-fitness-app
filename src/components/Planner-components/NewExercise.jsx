import React, { useContext, useState } from 'react';
import ContextBar from '../subComponents/ContextBar';
import { ListContext } from '../context/ListContext';





export const NewExercise = ({exerList, setExerList}) => {
    const [chosenExer, setChosenExer] = useState("Cardio")
    const [inputDeets, setInputDeets] = useState({
        exerType: "Custom",
        Title: "No Title",
    });

    const { addExercise } = useContext(ListContext); // Access the addExercise function from context

    function exerShowMenu(event){
        setChosenExer(event.target.value);
        updateInputDeets(event);
    }

    function updateInputDeets(event){
        const { name, value } = event.target;
        setInputDeets((prev) => ({
            ...prev,
            [name]: value,
            "date": Date.now()
        }));
        console.log("current inputDeets state:", inputDeets);
    }

    function nodeSpawn(){
        const category = "push"; // Hardcoded for now, you may want to make this dynamic
        const subcategory = "warmup"; // Hardcoded for now, you may want to make this dynamic

        addExercise(category, subcategory, inputDeets); // Add the new exercise to the workoutsList
    }

    function createInput(arr){
        console.log("creating exercise setup, ", arr);
        return arr.map((txt, i) => {
            if (txt === "Settings"){
                return (
                    <div key={i}>
                        <label htmlFor="exerSettings">{txt}</label>
                        <select className={chosenExer} name="exerSettings" onChange={updateInputDeets}>
                            <option>Till Failure</option>
                            <option>Free Workout</option>
                            <option>Dropsets (Linked)</option>
                        </select>
                    </div>
                );
            } else {
                return (
                    <div key={i}>
                        <label className={chosenExer} htmlFor={txt}>{txt}</label>
                        <input name={txt} onChange={updateInputDeets}/>
                    </div>
                );
            }
        });
    }

    const availDetails = {
        "Cardio": ["Minutes", "Level", "Settings"],
        "Weights": ["Reps", "Sets", "Weight"],
        "HIIT": ["Reps/Minutes", "Sets", "Weight(Optional)", "Settings"],
        "Warmup": ["Reps/Minutes", "Sets", "Weight(Optional)", "Settings"],
        "PR": ["Weight", "Times"],
        "Misc": ["Sets", "Reps", "Minutes", "Level", "Settings"],
    };

    return (
        <div className="style-subcomp NewExercise">
            <ContextBar />
            <div className="PlannerPage1 style-bgCompo">
                <h3>New {chosenExer} Exercise</h3>
                <br/>
                <div id="exerContent">
                    <label htmlFor="exerType">Type</label>
                    <select name="exerType" id="exerType" default="Choose a Category" onChange={exerShowMenu}>
                        <option value="Cardio">Cardiovascular</option>
                        <option value="Weights">Weight Training</option>
                        <option value="HIIT">High Intensity</option>
                        <option value="Warmup">Warm-Up</option>
                        <option value="PR">Personal Record Attempt</option>
                        <option value="Misc">Other</option>
                    </select>
                    <div>
                        <label htmlFor="Title">Title</label>
                        <input type="text" name="Title" onChange={updateInputDeets}/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="Exercise Name">Exercise</label>
                        <input type="text" name="Exercise Name" onChange={updateInputDeets}/>
                    </div>
                </div>
                <br/>
                <div>
                    <label htmlFor="Exercise Name">Exercise</label>
                    <input type="text" name="Exercise Name" onChange={updateInputDeets}/>
                </div>
            </div>
        </div>
    );
};







// import React, { useState } from 'react'

// export const NewExercise = ({exerList, setExerList}) => {
//     const [chosenExer, setChosenExer] = useState("Weights")
//     const [inputDeets, setInputDeets] = useState({
//         exerType: "Custom",
//         Title: "No Title",
//     }) 
    
//     //use to plan specific parts days

//     function exerShowMenu(event){
//         setChosenExer(event.target.value)
//         updateInputDeets(event)
//     }

//     function updateInputDeets(event){
//         const {name, value} = event.target
//         setInputDeets((prev)=>({ //Important: prev is fixed react KW. always use prev and unpack it to ensure you get latest info!
//             ...prev,
//             [name]: value,
//             "date": Date.now()
//         }))
//         console.log("current inputDeets state:", inputDeets)
//     }

//     function nodeSpawn(){ 
// /*         setNodeSpawnCont((prev)=>[ // 🚧 unused
//             ...prev, 
//             <div key={prev.length}>{createExerNode(inputDeets)}</div> 
//         ]) */
//         setExerList((prev)=>[
//             ...prev,
//             createExerNode(inputDeets)
//         ])
//     }

//     function createExerNode(_obj){
//         /* const core = <><h3>{_obj.title}</h3><h3>{_obj.exerType}</h3></> */
//         let node = {}
//         Object.entries(_obj).map(([k,v], i)=>{
//             console.log("returning stuff ", k, v)
//                 node[k] = v; 
//         })
//         return node

// /*         return Object.entries(_obj).map(([k,v], i)=>{
//             if (k == "title" || k == "exerType"){
//                 return <h3 key={i}>{v}</h3>
//             } else {
//                 return <div key={i}>{k}: {v}</div>
//             }
//         }) */
//     }

//     function createInput(arr){
//         console.log("creating exercise setup, ", arr)
//         return arr.map((txt, i)=>{
//             if (txt == "Settings"){
//                 return (
//                 <div key={i}>
//                     <label htmlFor="exerSettings">{txt}</label>
//                     <select className={chosenExer} name="exerSettings" onChange={updateInputDeets}>
//                         <option>Till Failure</option>
//                         <option>Free Workout</option>
//                         <option>Dropsets (Linked)</option>
//                     </select>
//                 </div>
//                 )
//             } else {
//                 return (
//                 <div key={i}>
//                     <label className={chosenExer} htmlFor={txt}>{txt}</label>
//                     <input name={txt} onChange={updateInputDeets}/>
//                 </div>
//                 )
//             }
//         }) 
//     }

//     const availDetails = {
//         "Cardio": ["Minutes", "Level", "Settings"],
//         "Weights": ["Reps", "Sets", "Weight"],
//         "HIIT": ["Reps/Minutes", "Sets", "Weight(Optional)", "Settings"],
//         "Warmup": ["Reps/Minutes", "Sets", "Weight(Optional)", "Settings"],
//         "PR": ["Weight", "Times"],
//         "Misc": ["Sets", "Reps", "Minutes", "Level", "Settings"],
//     }
//   return (
//     <div className="style-subcomp NewExercise">
//             <div className="PlannerPage1 style-bgCompo">
//                 <h3>New {}Exercise</h3>
//                 <br/>
//                 <div id="exerContent">
//                     <label htmlFor="exerType">Type</label>
//                     <select name="exerType" id="exerType" default="Choose a Category" onChange={exerShowMenu}>
//                         <option value="Cardio">Cardiovascular</option>
//                         <option value="Weights">Weight Training</option>
//                         <option value="HIIT">High Intensity</option>
//                         <option value="Warmup">Warm-Up</option>
//                         <option value="PR">Personal Record Attempt</option>
//                         <option value="Misc">Other</option>
//                     </select>
//                     <div>
//                         <label htmlFor="title">Title</label>
//                         <input type="text" name="Title" onChange={updateInputDeets}/>
//                     </div>
//                     <br/>
//                     <div>
//                         <label htmlFor="Exercise Name">Exercise</label>
//                         <input type="text" name="Exercise Name" onChange={updateInputDeets}/>
//                     </div>
//                 </div>
//                 <br/>
//                 <div>
//                     {createInput(availDetails[chosenExer])}
//                 </div>
//                 <br/>
//                 <button type="submit" id="submitPlan" onClick={nodeSpawn}>Submit</button>
//             </div>
//             {/* <div className="PlannerPage2 style-bgCompo">
//                 <h3>Current Schedule</h3>
//                 <div id="scheduledExerList">{nodeSpawnCont}</div>
//             </div> */}
//     </div>
//   )
// }
