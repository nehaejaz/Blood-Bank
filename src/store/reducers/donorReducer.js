const initState={
 donors:[
     {id:1,FullName:'Neha Ejaz',Gender:'female',BloodType:'B+',ContactNo:1,Age:20,City:'karachi',Address:'R-44, Ayaz Town Block-2 Gulshan-e-Iqbal'},
     {id:1,FullName:'Bassam Ejaz',Gender:'Male',BloodType:'A+',ContactNo:1,Age:30,City:'Lahore',Address:'D-34, Clifton'}
 ]
}

const donorReducer = (state=initState,action) => {
    return state
}
export default donorReducer