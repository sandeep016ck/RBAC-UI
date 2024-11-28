import { useRecoilState,useRecoilValue, useSetRecoilState } from "recoil"
import { visible, employee , roles, submittedForm,editedIndex} from "../Atoms/States"


export default function InputForm(){

    const setVisibleF = useSetRecoilState(visible)
    const [employees, setEmployee] = useRecoilState(employee)
    const roleOptions = useRecoilValue(roles)
    const [formData,setFormData] = useRecoilState(submittedForm)
    const [editedIndexx,setEditedIndex] = useRecoilState(editedIndex)

    function handelChange(e){
        const {id,value} = e.target;
        setEmployee((prev) => ({...prev,[id]:value}))
    }

    function submit(){
        const isEmpty = Object.values(employees).some((data) => data==='')
        if(isEmpty){
            alert("Empty..")
            return;
        }
        
        if(editedIndexx !== null){
            const updatedForm = [...formData];
            updatedForm[editedIndexx] = employees;
            setFormData(updatedForm)
        }else{
            setFormData([...formData,employees])
        }
        setEmployee({
            "name":'',
            "email":'',
            "role":''
        })
        setVisibleF(false)
    }

    
    return <div className="fixed inset-0 bg-black bg-opacity-50 p-10 flex justify-center items-center">
        <div className="bg-white rounded-lg text-black  p-8 w-96">
            <div className="flex flex-col gap-2 p-3">
                {Object.keys(employees).map((key) => (
                    <div key={`select-${key}`}>
                        {key === 'role' ? 
                           (
                            <>
                               <label 
                                className="p-2 text-lg m-4"
                               >
                                {key.charAt(0).toUpperCase()+key.slice(1)}
                               </label>
                               <select 
                                   id={key}
                                   value={employees[key]}
                                   className="p-1 border border-gray-500 rounded-md h-8 m-1"
                                   onChange={handelChange}
                               > 
                                    <option value={''}>
                                                Select One
                                    </option>
                                   {roleOptions.map((role) => (
                                        <>
                                           <option key={role} value={role}>
                                               {role}
                                           </option>
                                        </>
                                   ))}
                               </select>
                            </>
                           ): (
                               <div key={`input-${key}`}>
                                   <label className="p-2 text-lg m-4">{key.charAt(0).toUpperCase()+key.slice(1)}</label>
                                   <input 
                                       id={key}
                                       value={employees[key]}
                                       onChange={handelChange}
                                       placeholder={`Enter ${key.charAt(0).toUpperCase()}${key.slice(1)}`}
                                       className="h-8"
                                   />
                               </div>
                           )}
                    </div>
                     
                     
                ))}
            </div>
            <div className="flex justify-evenly">
                <button onClick={() => setVisibleF(false) } className="bg-red-500 text-white p-2 rounded-md w-16">
                    Back
                </button>
                <button onClick={submit} className="w-16 p-2 bg-green-500 rounded-md text-white">
                    Add
                </button>
            </div>
        </div>
    </div>
}