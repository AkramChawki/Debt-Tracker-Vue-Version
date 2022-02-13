import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000";

export async function getDebtors(){
    const result = await axios.get("/debtors");
    return result.data;
}
export async function getDebtorById(id){
    const result = await axios.get("/debtors/" + id);
    return result.data;
}
export async function getDebts(id){
    const result = await axios.get("/debts?debtor_id=" + id);
    return result.data;
}

export async function deleteDebtor(id){
    const result = await axios.delete("/debtors/"+ id);
    return result.status;
}
export async function deleteDebt(id){
    const result = await axios.delete("/debts/" + id);
    return result.status;
}

export async function createDebtor(data){
    const result = await axios.post("/debtors", data);
    return result.status;
}
export async function createDebt(data){
    const result = await axios.post("/debts", data);
    return result.status;
}
