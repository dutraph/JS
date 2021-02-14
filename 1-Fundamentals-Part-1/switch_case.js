const day = 'saturday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        break;
    case 'tuesday':
        console.log("Go shopping");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Groceries day")
        break;
    case 'friday':
        console.log('Sextou');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default:
        console.log('not a valid day')
}