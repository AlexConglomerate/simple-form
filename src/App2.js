import {useForm} from "react-hook-form";
import Form from "./form";
import FormInput from "./components/formInput";

function App() {
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm({mode: "onBlur"})
    const onSubmit = (data) => {
        console.log(`data`, data)
        // reset() // очистка формы после отправки
    }
    const inputClass = "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    const labelClass = 'block text-gray-700 font-medium mb-2'
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label className={labelClass}>firstName</label>
                <input className={inputClass}
                       {
                           ...register('firstName', // ключевое имя
                               {
                                   required: "Поле обязательно для заполнения",
                                   minLength: {value: 5, message: 'Минимальная длина 5 символов'},
                                   pattern: {value: EMAIL_REGEXP, message: 'Это не почта'}
                               })}
                />
                <div className={'text-red-800'}>{errors?.firstName && errors?.firstName?.message}</div>

                <FormInput
                    errors={errors} register={register}
                    label={'Last name'} keyName={'lastName'}
                    rules={{
                        required: "Поле обязательно для заполнения",
                        minLength: {value: 4, message: 'Минимальная длина 4 символа'},
                        pattern: {value: EMAIL_REGEXP, message: 'Это не почта'}
                    }}
                />


                <FormInput
                    errors={errors} register={register}
                    label={'Last name2'} keyName={'lastName2'}
                    rules={{
                        required: true,
                        minLength: {value: 3, message: 'Минимальная длина 3 символа'},
                        pattern: {value: EMAIL_REGEXP, message: 'Это не почта'}
                    }}
                />

                <input type={"submit"} disabled={!isValid}/>
            </form>

            <Form/>
        </div>
    );
}

export default App;
