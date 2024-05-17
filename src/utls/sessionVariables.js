export const setUserSession=(token,userAccounts,claims,user,company)=>{
    localStorage.setItem('bearerToken', token);
    localStorage.setItem('account', JSON.stringify(userAccounts));
    localStorage.setItem('claims', JSON.stringify(claims));
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('company', JSON.stringify(company));
}
export const removeUserSession =()=>{
    localStorage.removeItem('bearerToken');
    localStorage.removeItem('account');
    localStorage.removeItem('claims');
    localStorage.removeItem('user');
    localStorage.removeItem('company');
    localStorage.clear();
}