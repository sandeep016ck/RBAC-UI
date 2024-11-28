

import { atom } from 'recoil';

export const visibleContent = atom({
    key:'visibleContent',
    default:'members'
})

export const visible = atom({
    key:"visible",
    default:false
})

export const employee = atom({
    key:"employee",
    default:{
        "name":'',
        "email":'',
        "role":''
    }
})

export const roles = atom({
    key:"roles",
    default:[
        "Manager",
        "Editor",
        "Viewer"
    ]
})

export const editedIndex = atom({
    key:'editedIndex',
    default:null
})


export const submittedForm = atom({
    key:'submittedForm',
    default:[
        { name: "John Doe", email: "john@example.com", role: "Manager" }
    ]
})