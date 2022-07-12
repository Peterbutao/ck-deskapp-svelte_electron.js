
import {writable} from "svelte/store";

function date() {
    let d = new Date()
    return d.toLocaleDateString().replace("/", ".").replace("/", ".")
}


const recordFS = [
    {
        id: "12qw",
        name: 'FINANCIAL STATEMENT',
        savings : 80000,
        revenue  :30000,
        date: date()
    }
    
]
const recordBS = [
    {
        id: "12qw",
        name: 'BUDGET STATEMENT',
        sells : 12,
        paidSells :9,
        date: date()
    }
    
]
const recordCFS = [
    {
        id: "12qw",
        name: 'CASH FLOW STATEMENT',
        expenditure : 80000,
        items  : 15,
        date: date()
    }

]
export const data = writable({recordFS, recordBS, recordCFS})