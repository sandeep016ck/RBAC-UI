import { useRecoilState} from "recoil"
import { visible, submittedForm, editedIndex} from "../Atoms/States"
import InputForm from "./InputForm"
import { useState } from "react";


export const Members = () => {
    const [visibleF,setVisibleF] = useRecoilState(visible);
    const [submittedForms, setsubmittedForm] = useRecoilState(submittedForm) 
    const [editedIndexx,setEditedIndex] = useRecoilState(editedIndex)

    function handelEdit(index){
        setEditedIndex(index);
        setVisibleF(true);
    }
    return <div>
        <div className="h-20 text-2xl font-bold p-2 flex items-center">
            Team
            <div className="flex justify-center items-center m-2">
                <button onClick={() => setVisibleF(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.1} stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        </div>
        {visibleF && <InputForm />}
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Role</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedForms.map((form,index) => (
                        <tr key={index}>
                            <td className='border border-gray-300 px-4 py-2'>
                                {form.name}
                            </td>
                            <td className='border border-gray-300 px-4 py-2'>
                                {form.email}
                            </td>
                            <td className='border border-gray-300 px-4 py-2'>
                                {form.role}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button 
                                    onClick={() => handelEdit(index)}
                                    className="border-2 border-white px-4 py-1 rounded-md bg-red-400"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        
    </div>
}