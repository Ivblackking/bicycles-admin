export default function validation(data){
    const errors = {};

    for (let field in data){
        if (data[field] === ""){
            errors[field] = 'required';
        }
        else if ((field === 'wheelSize' || field === 'price') && 
            !Number(data[field]))
        {
            errors[field] = "must be number"
        }
        else if (data[field].length < 5 &&
            !Number(data[field]) &&
            field !== 'color')
        {
            errors[field] = 'minimum 5 characters';
        }
    }

    return errors;
}