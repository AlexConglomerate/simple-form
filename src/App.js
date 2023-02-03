import {useForm} from "react-hook-form";
import Form from "./form";
import FormInput from "./components/formInput";
import FormButton from "./components/formButton";

function App() {
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm({mode: "onBlur"})
    const onSubmit = (data) => {
        console.log(`data`, data)
        reset() // очистка формы после отправки
    }

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    return (
        <div className={'flex flex-col justify-center w-96 border-2 p-7 m-5'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput errors={errors} register={register}
                           label={'First name'} keyName={'firstName'}
                           rules={{
                               required: "Поле обязательно для заполнения",
                               minLength: {value: 5, message: 'Минимальная длина 5 символов'},
                               // pattern: {value: EMAIL_REGEXP, message: 'Это не почта'}
                           }}
                />
                <FormInput
                    errors={errors} register={register}
                    label={'Last name'} keyName={'lastName'}
                    rules={{
                        required: "Поле обязательно для заполнения",
                        minLength: {value: 4, message: 'Минимальная длина 4 символа'},
                        // pattern: {value: EMAIL_REGEXP, message: 'Это не почта'}
                    }}
                />


                <FormButton disabled={!isValid} name={'Зарегистрироваться'}/>
            </form>


        </div>
    );
}

export default App;
