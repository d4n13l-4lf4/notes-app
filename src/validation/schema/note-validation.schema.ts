import * as Yup from 'yup';


const NoteValidationSchema = Yup.object().shape({
    description: Yup
        .string()
        .max(40, 'Must be 40 characters or less')
        .required('Required')

})

export default NoteValidationSchema;
