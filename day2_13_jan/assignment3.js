let role = "ADMIN"

switch(true){
    case role=="ADMIN":
        console.log('FULL ACCESS');
        break;
    
    case role=="USER":
        console.log('Limited Access');
        break;

    case role=="MANAGER":
        console.log('Moderate access');
        break;

    default:
        console.log('Invalid role');
}